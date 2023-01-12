import math
import time
import traceback

import numpy as np
import pandas as pd
import random

from numpy.dual import norm
from scipy import stats

from api.helpers import getRowResults, getSingleRecordResult
from api.common_utilities import check_if_store_valid, validate_test_stores, \
    get_total_weekly_target_data, get_feature_thresholds, filter_population, get_annual_rsv_lifts, get_valid_weekly_target_data, stringToArray
from api import json

import config.config_data as config
# from config.settings import conn
from scipy.stats import norm
import re
import gower
from sklearn.preprocessing import StandardScaler
import statsmodels.api as sm

from api.utils.gower_distance import gower_matrix

config_data = config.data
from api.testmeasure.testmeasure_step2 import get_weekly_targetvariables_data
from rest_framework import generics
import logging

logger = logging.getLogger(__name__)


class identify_test_stores(generics.ListCreateAPIView):

    def post(self, request):
        start_time = time.perf_counter()

        import json as j
        data = j.loads(request.body)
        datas = data['data']
        test_name = datas['test_name']
        test_type = datas['type_of_test']
        banners = datas['banners']
        segments = datas['segments']
        store_segments = datas['store_segments']
        segment_variables = datas['segment_variables']
        territories = datas['territories']
        categories = datas['categories']
        testid = datas['test_id']
        if test_type != 'RTM Impact Test':
            num_of_teststores = int(datas['no_of_teststores'])
            num_of_teststores = num_of_teststores + 0.2 * num_of_teststores
        else:
            num_of_teststores = None
        target_variable = datas['target_variable']
        prewindow_start = datas['prewindow_start']
        prewindow_end = datas['prewindow_end']
        postwindow_start = datas['postwindow_start']
        postwindow_end = datas['postwindow_end']
    
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
    
        try:
            # Remove MORRISONS as we don't have either Mac conversion factor or complete 2019 Sales data.
            if 'MORRISONS' in banners:
                banners.remove('MORRISONS')
    
            if ((test_type == "RTM Impact Test") & (target_variable is not None) & (testid is not None)):
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['store_mstr']))
                stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
                stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                     territories=territories, config=config_cols, regionName=region_name, test_type=test_type)
                stores_master_df = stores_master_df[~stores_master_df.Customer_Status.isin(['Customer_Status_2'])]
    
                annualrsvliftdf = get_annual_rsv_lifts(target_variable=target_variable,
                                                       business_categories=categories, test_type=test_type,
                                                       prewindow_start=prewindow_start, prewindow_end=prewindow_end,
                                                       postwindow_start=postwindow_start,
                                                       postwindow_end=postwindow_end, config=config_cols, regionName=region_name)
                filtercolumns = [tarvarmapping["partner_id"]] + [tarvarmapping['rsv'] + ' Year 2',
                                                                 tarvarmapping['volume'] + ' Year 2']
                filtered_rsv_stores_df = stores_master_df.merge(annualrsvliftdf[filtercolumns],
                                                                left_on=storemstrmapping["partner_id"],
                                                                right_on=tarvarmapping["partner_id"])
                filtered_rsv_stores_df.rename(columns={tarvarmapping['rsv'] + ' Year 2': tarvarmapping['rsv'],
                                                       tarvarmapping['volume'] + ' Year 2': tarvarmapping['volume']},
                                              inplace=True)
                filtered_rsv_stores_df["is_teststore"] = 1
                finalteststores = filtered_rsv_stores_df.reset_index().to_json(orient='records')
                return json.Response(finalteststores, True)
            elif ((testid is not None) & (num_of_teststores is not None)):
    
                # Read the files
                sql_test_mstr = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                    config_cols['tables']['test_mstr']))
                results = getRowResults(sql_test_mstr, (1, 0))
                test_master_df = pd.DataFrame(results)
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                metadata = config_cols["metadata"]
    
                # Teststores list to store bannerwise teststores
                banner_teststores_list = list()
    
                # Teststores validate variables
                compare_variables = metadata["test_planning"]["test_vs_population_compare"]
                if (len(categories) != 0) & (len(categories) < metadata["test_planning"]["business_categories_count"]):
                    common_category_specific = list(
                        set(metadata["business_category_specific_compare"]) & set(compare_variables))
                    if len(common_category_specific) > 0:
                        features_list = [[j + "_" + i for j in common_category_specific] for i in categories]
                        category_specific_features = [item for elem in features_list for item in elem]
                        compare_variables.extend(category_specific_features)
                compare_variables.append(target_variable)
    
                # Filter the stores only from the input filters
                stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                     territories=territories, config=config_cols,regionName=region_name, test_type=test_type)
    
                # Add the code to filter only for active stores from the population (An additional filter)
    
                # Get the proportion of stores to be sampled for each banner
                count_df = stores_master_df.groupby(storemstrmapping["banner"])[
                    storemstrmapping["partner_id"]].count().reset_index().rename(
                    columns={storemstrmapping["partner_id"]: "Count"})
                count_df["prop"] = count_df["Count"] / count_df["Count"].sum()
                count_df["stores_proportioned"] = count_df["prop"] * num_of_teststores
                count_df["stores_proportioned"] = count_df["stores_proportioned"].apply(lambda x: round(x))
    
                # ELIMINATING ALL THE TEST AND CONTROL STORES WHICH ARE CURRENTLY ACTIVE
                # Get all the active tests(test ids)
                active_tests_df = test_master_df[test_master_df["is_active"] == True]
                filtered_stores_df = filter_active_test_control_stores(stores_master_df=stores_master_df, config=config_cols)
    
                annualrsvliftdf = get_annual_rsv_lifts(target_variable=target_variable, business_categories=categories,
                                                       config=config_cols, regionName=region_name,prewindow_start=prewindow_start,
                                                       prewindow_end=prewindow_end, postwindow_start=postwindow_start,
                                                       postwindow_end=postwindow_end)
                filtercolumns = [tarvarmapping["partner_id"]] + [tarvarmapping['rsv'] + ' Year 2',
                                                                 tarvarmapping['volume'] + ' Year 2']
                filtered_rsv_stores_df = filtered_stores_df.merge(annualrsvliftdf[filtercolumns],
                                                                  left_on=storemstrmapping["partner_id"],
                                                                  right_on=tarvarmapping["partner_id"])
                filtered_rsv_stores_df.rename(columns={tarvarmapping['rsv'] + ' Year 2': tarvarmapping['rsv'],
                                                       tarvarmapping['volume'] + ' Year 2': tarvarmapping['volume']},
                                              inplace=True)
    
                # Used to pass to validate teststores
                weekly_target_variables_file, consideryearweeks = get_total_weekly_target_data(
                    business_categories=categories, config=config_cols,prewindow_start=prewindow_start,
                                                       prewindow_end=prewindow_end, postwindow_start=postwindow_start,
                                                       postwindow_end=postwindow_end)
                weeks = consideryearweeks[metadata["test_planning"]["summary_sales_weeks"]:]
                weeklyrsvdatayear = weekly_target_variables_file[
                    weekly_target_variables_file[tarvarmapping["week"]].isin(weeks)]
                weeklyrsvdatayear["Year"] = "Year1"
    
                aggdict = {k: sum for k in [tarvarmapping["rsv"], tarvarmapping["volume"]]}
                groupbycolumns = [tarvarmapping["partner_id"], tarvarmapping["banner"], "Year"]
                annualrsvdatayear = weeklyrsvdatayear.groupby(groupbycolumns).agg(aggdict).reset_index()
    
                if testid in active_tests_df["test_id"].values.tolist():
                    getteststores = ('''SELECT * FROM {} WHERE test_id = ? '''.format(
                        config_cols['tables']['test_mstr']))
                    result = getSingleRecordResult(getteststores, (testid))
                    finalised_flag = result['is_finalize']
    
                    sql_teststore_map = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                        config_cols['tables']['test_store_map']))
                    results = getRowResults(sql_teststore_map, (1, 0))
                    teststore_map_df = pd.DataFrame(results)
    
                    if finalised_flag == 0:
                        current_teststores = teststore_map_df[teststore_map_df["test_id_id"] == testid]
                        current_teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                            current_teststores['teststore_id'].unique())]
                        current_teststores["is_teststore"] = 1
                        filtered_rsv_stores_df["is_teststore"] = 0
                        teststores = pd.concat([current_teststores, filtered_rsv_stores_df])
                    else:
                        current_teststores = teststore_map_df[teststore_map_df["test_id_id"] == testid]
                        current_teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                            current_teststores['teststore_id'].unique())]
                        current_teststores["is_teststore"] = 1
                        teststores = current_teststores
                else:
                    # Getting Bannerwise Teststores
                    for banner in banners:
                        intermediate_stores_list = list()
                        raw_stores_list = list()
                        banner_num_of_teststores = \
                        count_df[count_df[storemstrmapping["banner"]] == banner]["stores_proportioned"].values[0]
                        banner_filter = (filtered_rsv_stores_df[storemstrmapping["banner"]] == banner)
    
                        store_clusters = filtered_rsv_stores_df[banner_filter].groupby(segment_variables)[
                            storemstrmapping["partner_id"]].count().reset_index()
                        store_clusters["proportion"] = (store_clusters[storemstrmapping["partner_id"]] / store_clusters[
                            storemstrmapping["partner_id"]].sum())
                        store_clusters["stores_proportioned"] = store_clusters["proportion"] * banner_num_of_teststores
                        store_clusters["stores_proportioned"] = store_clusters["stores_proportioned"].apply(
                            lambda x: round(x))
                        clusterwise_stores_dict = store_clusters.groupby(segment_variables)[
                            "stores_proportioned"].sum().to_dict()
    
                        for i in list(range(0, metadata["test_planning"]["sampling_iterations"])):
                            # Sampling the test stores
                            filtered_rsv_banner_filter = (filtered_rsv_stores_df[storemstrmapping["banner"]] == banner)
                            banner_test_stores = filtered_rsv_stores_df[filtered_rsv_banner_filter].groupby(
                                segment_variables).apply(
                                lambda x: x.sample(clusterwise_stores_dict[x.name], replace=False)).reset_index(drop=True)
                            threshold_count = validate_test_stores(test_stores=banner_test_stores,
                                                                   compare_variables=compare_variables,
                                                                   banners=banners, segments=segments,
                                                                   store_segments=store_segments,
                                                                   territories=territories,
                                                                   annualrsvdatayear=annualrsvdatayear,
                                                                   config_region=config_cols)
                            if threshold_count == len(compare_variables):
                                intermediate_stores_list.append(banner_test_stores)
                                break
                            else:
                                raw_stores_list.append(banner_test_stores)
                        if len(intermediate_stores_list) > 0:
                            banner_teststores_list.append(
                                intermediate_stores_list[random.randint(0, len(intermediate_stores_list) - 1)])
                        else:
                            banner_teststores_list.append(raw_stores_list[random.randint(0, len(raw_stores_list) - 1)])
                    # Teststores
                    teststores = pd.concat(banner_teststores_list)
                    teststores["is_teststore"] = 1
                    stores_otherthan_teststores = filtered_rsv_stores_df[
                        ~filtered_rsv_stores_df[storemstrmapping["partner_id"]].isin(
                            teststores[storemstrmapping["partner_id"]])]
                    stores_otherthan_teststores["is_teststore"] = 0
                    teststores = pd.concat([teststores, stores_otherthan_teststores])
    
                finalteststores = teststores.reset_index().to_json(orient='records')
                return json.Response(finalteststores, True)
        except:
            traceback.print_exc()


class GetCurrentTest(generics.ListCreateAPIView):

    def get(self, request, pk):
        try:
            results = []
            # my_conn = conn()
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            results = getRowResults("SELECT * FROM {} WHERE is_active=1 and is_deleted=0 and test_id = ?".format(
                config_cols['tables']['test_mstr']), pk)
            # results = getRowResult(record_mstr)
            # my_conn.close()
            results = results[0]
            record_mstr_data = getRowResults(
                "SELECT * FROM {} WHERE TEST_ID_ID=?;".format(config_cols['tables']['record_mstr']), (pk))
            results['records'] = record_mstr_data
            # record_mstr.close()
            return json.Response(results, True)
        except Exception as error:
            logger.error(error)
            return json.Response('Can`t able to get data', False)


def filter_active_test_control_stores(stores_master_df=None, config=config):
    sql_test_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config['tables']['test_mstr'])
    results = getRowResults(sql_test_mstr, (1, 0))
    test_master_df = pd.DataFrame(results)

    sql_teststore_map = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config['tables']['test_store_map'])
    results = getRowResults(sql_teststore_map, (1, 0))
    teststore_map_df = pd.DataFrame(results)

    sql_controlstore_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
        config['tables']['control_store_mstr'])
    results = getRowResults(sql_controlstore_mstr, (1, 0))
    controlstore_map_df = pd.DataFrame(results)

    active_tests_df = test_master_df[test_master_df["is_active"] == True]

    storemstrmapping = config["store_mstr_columns"]

    if (active_tests_df.shape[0] != 0) & (teststore_map_df.shape[0] != 0):
        # THIS MEANS THERE ARE ACTIVE TESTS AND WE NEED TO ELIMINATE ACTIVE TEST AND CONTROL STORES
        # Get the active test stores using test ids
        active_test_stores = teststore_map_df[teststore_map_df["test_id_id"].isin(active_tests_df["test_id"])]

        # Get the active control stores using test ids
        if len(controlstore_map_df) > 0:
            active_control_stores = controlstore_map_df[controlstore_map_df["test_id_id"].isin(active_tests_df["test_id"])]

        # Remove active test and control stores from population
        filtered_stores_df = stores_master_df[
            ~stores_master_df[storemstrmapping["partner_id"]].isin(active_test_stores["teststore_id"])]
        if len(controlstore_map_df) > 0:
            filtered_stores_df = filtered_stores_df[
                ~filtered_stores_df[storemstrmapping["partner_id"]].isin(active_control_stores["test_id_id"])]

    else:
        # THIS MEANS THERE ARE NO ACTIVE TESTS AND WE NEED NOT ELIMINATE ANY TEST AND CONTROL STORES
        filtered_stores_df = stores_master_df

    return filtered_stores_df


class identify_test_stores_manually(generics.ListCreateAPIView):

    def post(self, request): 
        global finalteststores
        try:
            import json as j
            data = j.loads(request.body)
            datas = data['data']
            banners = datas['banners']
            segments = datas['segments']
            store_segments = datas['store_segments']
            territories = datas['territories']
            target_variable = datas['target_variable']
            testid = datas['test_id']
            prewindow_start = datas['prewindow_start']
            prewindow_end = datas['prewindow_end']
            postwindow_start = datas['postwindow_start']
            postwindow_end = datas['postwindow_end']
            business_categories = []
            # Read the files
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            results = {}
            # Read the files
            sql_test_mstr = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                config_data[region_name]['tables']['test_mstr']))
            test_master_df = pd.DataFrame(getRowResults(sql_test_mstr, (1, 0)))
    
            ql_teststore_map = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                config_data[region_name]['tables']['test_store_map']))
            teststore_map_df = pd.DataFrame(getRowResults(ql_teststore_map, (1, 0)))
            storemstrmapping = config_data[region_name]["store_mstr_columns"]
            tarvarmapping = config_data[region_name]["weekly_target_variable"]
            metadata = config_data[region_name]["metadata"]["test_planning"]
            active_tests_df = test_master_df[test_master_df["is_active"] == True]
    
            # Filter the stores only from the input filters
            stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                 territories=territories, config=config_cols,regionName=region_name)
    
            # Minimum number of test stores to be selected based on default confidence level, margin of error & power
            annualrsvlifts = get_annual_rsv_lifts(target_variable=target_variable, business_categories=business_categories,
                                                  config=config_cols, regionName=region_name,
                                                  prewindow_start=prewindow_start,
                                                  prewindow_end=prewindow_end,
                                                  postwindow_start=postwindow_start,
                                                  postwindow_end=postwindow_end)
            annualrsvlifts = annualrsvlifts[
                annualrsvlifts[tarvarmapping["partner_id"]].isin(stores_master_df[storemstrmapping["partner_id"]].unique())]
    
            standard_deviation = annualrsvlifts[target_variable + " Lift"].std()
    
            value1 = 2 * np.power((norm.ppf((1 - (1 - metadata["confidence_level"]) / 2)) + norm.ppf(
                metadata["power_of_test"])) * standard_deviation / (metadata["margin_of_error"]), 2)
            num_test_stores = math.ceil(value1)
    
            # ELIMINATING ALL THE TEST AND CONTROL STORES WHICH ARE CURRENTLY ACTIVE
            filtered_stores_df = filter_active_test_control_stores(stores_master_df=stores_master_df.copy(deep=True),
                                                                   config=config_cols)
    
            # Considering only those stores which have continous sales in the last two years
            filtered_rsv_stores_df = filtered_stores_df[filtered_stores_df[storemstrmapping["partner_id"]].isin(
                annualrsvlifts[tarvarmapping["partner_id"]].unique())]
    
            message = "The number of teststores suggested for confidence level:{}, margin of error: {} and power of test: {} are {}".format(
                metadata["confidence_level"], metadata["margin_of_error"], metadata["power_of_test"], num_test_stores)
    
            if (int(testid) in active_tests_df["test_id"].values.tolist()) & (teststore_map_df.shape[0] !=0):
                getteststores = ('''SELECT * FROM {} WHERE test_id = ? '''.format(
                    config_data[region_name]['tables']['test_mstr']))
                result = getSingleRecordResult(getteststores, (testid))
                finalised_flag = result['is_finalize']
                # finalised_flag = 0
                if finalised_flag == 0:
                    current_teststores = teststore_map_df[teststore_map_df["test_id_id"] == testid]
                    current_teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                        current_teststores['teststore_id'].unique())]
                    current_teststores["is_teststore"] = 1
                    filtered_rsv_stores_df["is_teststore"] = 0
                    teststores = pd.concat([current_teststores, filtered_rsv_stores_df])
                    # return teststores, num_test_stores, metadata["confidence_level"], metadata["margin_of_error"]
                else:
                    current_teststores = teststore_map_df[teststore_map_df["test_id_id"] == testid]
                    current_teststores["is_teststore"] = 1
                    teststores = current_teststores
                finalteststores = teststores.reset_index().to_json(orient='records')
                results = {
                    "teststores": finalteststores,
                    "num_test_stores": num_test_stores,
                    "confidence_level": metadata["confidence_level"],
                    "margin_of_error": metadata["margin_of_error"],
                    "message": message,
                    "power_test": metadata["power_of_test"]
                }
                return json.Response(results, True)
            else:
                results = {
                    "teststores": filtered_rsv_stores_df.reset_index().to_json(orient='records'),
                    "num_test_stores": num_test_stores,
                    "confidence_level": metadata["confidence_level"],
                    "margin_of_error": metadata["margin_of_error"],
                    "message": message
                }
                return json.Response(results, True)
        except:
            traceback.print_exc()


class test_store_format_check(generics.ListCreateAPIView):
    # Test stores reference file to check for the format of the user uploaded file
    def post(self, request):
        file = request.FILES['file']
        banners = stringToArray(request.POST['banner'])
        segments = stringToArray(request.POST['segments'])
        store_segments = stringToArray(request.POST['store_segments'])
        territories = stringToArray(request.POST['territories'])
        categories = stringToArray(request.POST['categories'])
        target_variable = request.POST['target_variable']
        prewindow_start = request.POST['prewindow_start']
        prewindow_end = request.POST['prewindow_end']
        postwindow_start = request.POST['postwindow_start']
        postwindow_end = request.POST['postwindow_end']
        test_store_data = pd.read_excel(file)
        region_name = request.META['HTTP_COUNTRY']
        # Config accessing files
        config_cols = config_data[region_name]
        tarvarmapping = config_data[region_name]["weekly_target_variable"]
        if test_store_data is not None:
    
            # Test stores reference file to check for the format of the user uploaded file
            filePath = config_cols["filePath"]["TestStore"]["file_name"]
            format_ref_file = pd.read_excel(filePath)
            storemstrmapping = config_cols["store_mstr_columns"]
            metadata = config_cols["metadata"]["test_planning"]
    
            # Filter the stores only from the input filters
            stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                 territories=territories, config=config_cols,regionName=region_name)
            annualrsvlifts = get_annual_rsv_lifts(target_variable=target_variable, business_categories=categories,
                                                  config=config_cols, regionName=region_name,
                                                  prewindow_start=prewindow_start, prewindow_end=prewindow_end,
                                                  postwindow_start=postwindow_start,
                                                  postwindow_end=postwindow_end)
            annualrsvlifts = annualrsvlifts[
                annualrsvlifts[tarvarmapping["partner_id"]].isin(stores_master_df[storemstrmapping["partner_id"]].unique())]
    
            standard_deviation = annualrsvlifts[target_variable + " Lift"].std()
    
            value1 = 2 * np.power((norm.ppf((1 - (1 - metadata["confidence_level"]) / 2)) + norm.ppf(
                metadata["power_of_test"])) * standard_deviation / (metadata["margin_of_error"]), 2)
            num_test_stores = math.ceil(value1)
    
            # ELIMINATING ALL THE TEST AND CONTROL STORES WHICH ARE CURRENTLY ACTIVE
            filtered_stores_df = filter_active_test_control_stores(stores_master_df=stores_master_df.copy(deep=True),
                                                                   config=config_cols)
            # Considering only those stores which have continous sales in the last two years
            filtered_rsv_stores_df = filtered_stores_df[filtered_stores_df[storemstrmapping["partner_id"]].isin(
                annualrsvlifts[tarvarmapping["partner_id"]].unique())]
            # User uploaded test stores
            teststores = test_store_data.copy(deep=True)
    
            # Number of columns check
            check1 = teststores.shape[1] == format_ref_file.shape[1]
    
            # Column name check
            check2 = sorted(teststores.columns) == sorted(format_ref_file.columns)
    
            # Column data type check
            df1 = dict(teststores.loc[:, sorted(teststores.columns)].dtypes)
            df2 = dict(sorted(metadata["user_teststores_columns"].items()))
            check3 = df1 == df2
    
            if check1 & check2 & check3:
                if region_name == 'AUS':
                    teststores[storemstrmapping["partner_id"]] = teststores[storemstrmapping["partner_id"]].apply(
                        lambda x: re.sub('[^a-z]+', '', str(x).lower()))
    
                filtered_teststores = filtered_rsv_stores_df[filtered_rsv_stores_df[storemstrmapping["partner_id"]].isin(
                    teststores[storemstrmapping["partner_id"]].unique())]
                message1 = "The number of required teststores suggested for the confidence level:{}, margin of error: {} and power of test: {} are {}".format(
                    metadata["confidence_level"], metadata["margin_of_error"], metadata["power_of_test"], num_test_stores)
                message2 = "No of uploaded teststores satisfying the criteria to proceed further are {}".format(
                    filtered_teststores.shape[0])
                filtered_teststores["is_teststore"] = 1
                results = {
                    "filtered_teststores": filtered_teststores.reset_index().to_json(orient='records'),
                    "message": message1,
                    "message2": message2,
                    "margin_of_error": metadata["margin_of_error"],
                    "confidence_level": metadata["confidence_level"],
                    "num_test_stores": num_test_stores,
                    "power_test": metadata["power_of_test"]
                }
                return json.Response(results, True)
            else:
                return json.Response("The uploaded file/data format doesn't match with the expected format", False)
        else:
            return json.Response("Please pass the Test Stores", False)



class test_population_mapping(generics.ListCreateAPIView):

    def post(self, request):
        try:
            import json as j
            data = j.loads(request.body)
            datas = data['data']
            banners = datas['banners']
            segments = datas['segments']
            store_segments = datas['store_segments']
            territories = datas['territories']
            target_variable = datas['target_variable']
            teststores = pd.DataFrame(datas['selected_test_stores'])
            business_categories = datas['categories']
            prewindow_start = datas['prewindow_start']
            prewindow_end = datas['prewindow_end']
            postwindow_start = datas['postwindow_start']
            postwindow_end = datas['postwindow_end']
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
    
            if (teststores is not None):
                # sql_test_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config_cols['tables']['test_mstr'])
                # results = getRowResults(sql_test_mstr, (1, 0))
                # test_master_df = pd.DataFrame(results)
                #
                # sql_teststore_map = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config_cols['tables']['test_store_map'])
                # results = getRowResults(sql_teststore_map, (1, 0))
                # teststore_map_df = pd.DataFrame(results)
                #
                # sql_controlstore_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
                #     config_cols['tables']['control_store_mstr'])
                # results = getRowResults(sql_controlstore_mstr, (1, 0))
                # controlstore_map_df = pd.DataFrame(results)
    
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                metadata = config_cols["metadata"]["test_planning"]
    
                store_features = metadata["test_vs_control_compare"].copy()
    
                stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                     territories=territories, config=config_cols,regionName=region_name)
    
                annualrsvliftdf = get_annual_rsv_lifts(target_variable=target_variable,
                                                       prewindow_start=prewindow_start,
                                                       prewindow_end=prewindow_end,
                                                       postwindow_start=postwindow_start,
                                                       postwindow_end=postwindow_end,
                                                       business_categories=business_categories, config=config_cols, regionName=region_name)
    
                filtercolumns = [tarvarmapping["partner_id"]] + [target_variable + ' Year 1', target_variable + ' Year 2',
                                                                 target_variable + ' Lift']
                stores_master_df = stores_master_df.merge(annualrsvliftdf[filtercolumns],
                                                          left_on=storemstrmapping["partner_id"],
                                                          right_on=tarvarmapping["partner_id"])
    
                # Adding extra features as comparison features
                if (len(business_categories) != 0) & (len(business_categories) < metadata["business_categories_count"]):
                    common_category_specific = list(
                        set(metadata["business_category_specific_compare"]) & set(store_features))
                    if len(common_category_specific) > 0:
                        features_list = [[j + "_" + i for j in common_category_specific] for i in business_categories]
                        category_specific_features = [item for elem in features_list for item in elem]
                        store_features.extend(category_specific_features)
                store_features.extend([target_variable + " Year 2", target_variable + " Lift"])
                teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(teststores[storemstrmapping["partner_id"]].unique())]
    
                stores_master_df = filter_active_test_control_stores(stores_master_df=stores_master_df, config=config_cols)
    
                # ELIMINATING THE TESTSTORES FROM POPULATION
                stores_master_df = stores_master_df[
                    ~(stores_master_df[storemstrmapping["partner_id"]].isin(teststores[storemstrmapping["partner_id"]]))]

    
                # Weekly sales for all stores for the past 1 year (52 weeks)
                valid_sales_stores, consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable,
                                                                                     prewindow_start=prewindow_start,
                                                                                     prewindow_end=prewindow_end,
                                                                                     postwindow_start=postwindow_start,
                                                                                     postwindow_end=postwindow_end,
                                                                                     business_categories=business_categories, config=config_cols)
                filtered = valid_sales_stores[
                    valid_sales_stores[tarvarmapping["week"]].isin(consideryearweeks[metadata["summary_sales_weeks"]:])]
                pivoteddf = pd.pivot_table(filtered, index=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                           columns=tarvarmapping["week"], values=target_variable).reset_index().rename_axis(
                    None, axis=1)
    
                mergecols = [storemstrmapping['partner_id'], storemstrmapping['banner']]
    
                store_master_wksales = stores_master_df[mergecols].merge(pivoteddf, on=mergecols)
                test_stores_wksales = teststores[mergecols].merge(pivoteddf, on=mergecols)
    
                store_master_wksales_avg = store_master_wksales.describe().reset_index()
                store_master_wksales_avg = store_master_wksales_avg[store_master_wksales_avg['index'] == 'mean'].drop(
                    'index', axis=1)
                # Sales Correlation between the weekly sales for each test store & the average weekly sales for all the population stores
                corrlist = []
                for j in range(teststores.shape[0]):
                    array1 = np.array(test_stores_wksales.loc[
                                          j, (test_stores_wksales.columns != storemstrmapping['partner_id']) & (
                                                      test_stores_wksales.columns != storemstrmapping['banner'])].astype(
                        float))
                    filcol = [z for z in store_master_wksales_avg.columns if z != storemstrmapping["partner_id"]]
                    array2 = np.array(store_master_wksales_avg[filcol].values)
                    corrlist.append(round(np.corrcoef(array1, array2[0])[0][1], 2))
                teststores["Correlation"] = corrlist
    
                # Similarity Measure Calculations
                refA = teststores.copy(deep=True)
                refB = stores_master_df.copy(deep=True)
                if refB.shape == 0:
                    return json.Response("No Stores left in Population for Mapping.", False)
                useA = refA[store_features].copy(deep=True)
                useB = refB[store_features].copy(deep=True)
    
                scaler = StandardScaler()
                nonscalingcolumns = [storemstrmapping["banner"], storemstrmapping["territory"], storemstrmapping["segment"],
                                     storemstrmapping["storegrid"]]
                scale_cols = [item for item in store_features if item not in nonscalingcolumns]
                if len(scale_cols) > 0:
                    useA[scale_cols] = scaler.fit_transform(useA[scale_cols])
                    useB[scale_cols] = scaler.fit_transform(useB[scale_cols])
    
                pop_summary = useB.describe(include='all')
                pop_summary = pop_summary.loc['top'].combine_first(pop_summary.loc['mean']).reset_index().T.reset_index(
                    drop=True)
                pop_summary.columns = pop_summary.iloc[0, :]
                pop_summary = pop_summary.drop(0)
                pop_summary = pop_summary.reset_index(drop=True)
                gowermatrix = gower_matrix(useA, pop_summary)
                refA["Gower_Distance"] = [i[0] for i in gowermatrix]
                refA = refA.sort_values(by="Gower_Distance", ascending=True)
                refA["Gower_Distance"] = refA["Gower_Distance"].apply(lambda x: round(x, 2))
                refA["Similarity_Measure"] = refA["Gower_Distance"].apply(lambda x: round(1 - x, 2))
                return json.Response(refA.reset_index().to_json(orient='records'), True)
            else:
                return "Please pass Test stores"
        except:
            traceback.print_exc()



class power_noofteststore_calculation(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
    
        margin_of_error = data['margin_of_error']
        banners = data['banners']
        segments = data['store_segments']
        store_segments = data['segments']
        territories = data['territories'],
        territories = territories[0]
        business_categories = data['categories'],
        business_categories = business_categories[0]
        target_variable = data['target_variable']
        prewindow_start = data['prewindow_start']
        prewindow_end = data['prewindow_end']
        postwindow_start = data['postwindow_start']
        postwindow_end = data['postwindow_end']
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
    
        storemstrmapping = config_cols["store_mstr_columns"]
        tarvarmapping = config_cols["weekly_target_variable"]
        metadata = config_cols["metadata"]["test_planning"]
    
        # Filtered population stores
        annualrsvlifts = get_annual_rsv_lifts(target_variable=target_variable, business_categories=business_categories,
                                              config=config_cols, regionName=region_name,
                                              prewindow_start=prewindow_start,
                                              prewindow_end=prewindow_end,
                                              postwindow_start=postwindow_start,
                                              postwindow_end=postwindow_end)
        filtered_population = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                territories=territories, config=config_cols,regionName=region_name)
        annualrsvlifts = annualrsvlifts[
            annualrsvlifts[tarvarmapping["partner_id"]].isin(filtered_population[storemstrmapping["partner_id"]].unique())]
    
        # Sample Size calculation with power and confidence level fixed
        pop_stddev = annualrsvlifts[target_variable + ' Lift'].std()
        power_of_test = metadata["power_of_test"]
        confidence_level = metadata["confidence_level"]
    
        n = 2 * np.power(
            (norm.ppf((1 - (1 - confidence_level) / 2)) + norm.ppf(power_of_test)) * pop_stddev / (int(margin_of_error) / 100),
            2)
        n = math.ceil(n)


        # Power vs sample size table
        power_values = metadata["power_values"]
        sample_size_list = []
        for i in power_values:
            value1 = 2 * np.power(
                (norm.ppf((1 - (1 - confidence_level) / 2)) + norm.ppf(i / 100)) * pop_stddev / (margin_of_error / 100), 2)
            num_test_stores = math.ceil(value1)
            sample_size_list.append(num_test_stores)
    
        power_stores_df = pd.concat([pd.Series(power_values), pd.Series(sample_size_list)], axis=1).rename(
            columns={0: "Power %", 1: "Number of Stores"})
        results = {"no_of_teststores": n, "power_stores": power_stores_df.to_json()}
        return json.Response(results, True)


class power_marginoferror_calculation(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        banners = data['banners']
        segments = data['store_segments']
        store_segments = data['segments']
        territories = data['territories'],
        territories = territories[0]
        business_categories = data['categories'],
        business_categories = business_categories[0]
        target_variable = data['target_variable']
        num_test_stores = data['num_test_stores']
        prewindow_start = data['prewindow_start']
        prewindow_end = data['prewindow_end']
        postwindow_start = data['postwindow_start']
        postwindow_end = data['postwindow_end']
    
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
    
        # if (num_test_stores is not None) & (len(banners) > 0) & (len(segments) > 0) & (len(store_segments) > 0) & (
        #         len(territories) > 0) & (target_variable is not None):
    
        storemstrmapping = config_cols["store_mstr_columns"]
        tarvarmapping = config_cols["weekly_target_variable"]
        metadata = config_cols["metadata"]["test_planning"]
    
        # Filtered population stores
        annualrsvlifts = get_annual_rsv_lifts(target_variable=target_variable, business_categories=business_categories, config=config_cols, regionName=region_name,
                                              prewindow_start=prewindow_start,
                                              prewindow_end=prewindow_end,
                                              postwindow_start=postwindow_start,
                                              postwindow_end=postwindow_end)
        filtered_population = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                territories=territories, config=config_cols,regionName=region_name)
        annualrsvlifts = annualrsvlifts[annualrsvlifts[tarvarmapping["partner_id"]].isin(
            filtered_population[storemstrmapping["partner_id"]].unique())]
    
        # Sample Size calculation with power and confidence level fixed
        pop_stddev = annualrsvlifts[target_variable + ' Lift'].std()
        power_of_test = metadata["power_of_test"]
        confidence_level = metadata["confidence_level"]
    
        value1 = num_test_stores
        margin_of_error = round(
            (norm.ppf((1 - (1 - confidence_level) / 2)) + norm.ppf(power_of_test)) * pop_stddev / (np.sqrt(value1 / 2)),
            2)

        # Power vs sample size table
        power_values = metadata["power_values"]
        margin_of_error_list = []
        for i in power_values:
            value1 = num_test_stores
            temp_margin_of_error = round(
                (norm.ppf((1 - (1 - confidence_level) / 2)) + norm.ppf(i / 100)) * pop_stddev / (np.sqrt(value1 / 2)),
                2)
            margin_of_error_list.append(temp_margin_of_error*100)
    
        power_moferr_df = pd.concat([pd.Series(power_values), pd.Series(margin_of_error_list)], axis=1).rename(
            columns={0: "Power %", 1: "Margin of Error"})
        results = {"margin_of_error": round(margin_of_error*100, 2), "power_stores": power_moferr_df.to_json()}
        return json.Response(results, True)

    # else:
    #     return "Please pass all the appropriate parameters"


class test_store_summary(generics.ListCreateAPIView):

    def post(self, request):
        try:
            import json as j
            data = j.loads(request.body)
            datas = data['data']
            banners = datas['banners']
            segments = datas['segments']
            store_segments = datas['store_segments']
            territories = datas['territories']
            target_variable = datas['target_variable']
            test_stores = pd.DataFrame(datas['selected_test_stores'])
            business_categories = datas['categories']
            prewindow_start = datas['prewindow_start']
            prewindow_end = datas['prewindow_end']
            postwindow_start = datas['postwindow_start']
            postwindow_end = datas['postwindow_end']
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            if (test_stores is not None):
                # Create variables
                variables_metrics_dict = {}
                feature_thresholds_dict = {}
                feature_bounds_dict = {}
    
                # Read the files
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                metadata = config_cols["metadata"]["test_planning"]
    
                stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                     territories=territories, config=config_cols,regionName=region_name)
                weekly_target_variables_file, consideryearweeks = get_total_weekly_target_data(
                    business_categories=business_categories, config=config_cols,
                    prewindow_start=prewindow_start,
                    prewindow_end=prewindow_end,
                    postwindow_start=postwindow_start,
                    postwindow_end=postwindow_end)
                weeks = consideryearweeks[metadata["summary_sales_weeks"]:]
                weeklyrsvdatayear = weekly_target_variables_file[
                    weekly_target_variables_file[tarvarmapping["week"]].isin(weeks)]
                weeklyrsvdatayear["Year"] = "Year1"
    
                aggdict = {k: sum for k in [tarvarmapping["rsv"], tarvarmapping["volume"]]}
                groupbycolumns = [tarvarmapping["partner_id"]] + [tarvarmapping["banner"]] + ["Year"]
                annualrsvdatayear = weeklyrsvdatayear.groupby(groupbycolumns).agg(aggdict).reset_index()
    
                mergecolumns = [tarvarmapping["partner_id"]] + [tarvarmapping["rsv"], tarvarmapping["volume"]]
                stores_master_df = stores_master_df.merge(annualrsvdatayear[mergecolumns],
                                                          left_on=storemstrmapping["partner_id"],
                                                          right_on=tarvarmapping["partner_id"])
    
                test_stores = test_stores.merge(
                    stores_master_df[[storemstrmapping["partner_id"], tarvarmapping["rsv"], tarvarmapping["volume"]]],
                    left_on=storemstrmapping["partner_id"],
                    right_on=storemstrmapping["partner_id"],
                    how="left")

                compare_variables = metadata["test_vs_population_compare_summary"]
                if (len(business_categories) != 0) & (len(business_categories) < metadata["business_categories_count"]):
                    common_category_specific = list(
                        set(metadata["business_category_specific_compare"]) & set(compare_variables))
                    if len(common_category_specific) > 0:
                        features_list = [[j + "_" + i for j in common_category_specific] for i in business_categories]
                        category_specific_features = [item for elem in features_list for item in elem]
                        compare_variables.extend(category_specific_features)
                compare_variables.append(target_variable)

                variable_features = test_stores[compare_variables].nunique()[
                    test_stores[compare_variables].nunique() > 1].index.to_list()
                compare_variables = list(set(compare_variables).intersection(variable_features))

                for col in compare_variables:
                    variables_metrics_dict[col] = {}
    
                    tStat, pVal = stats.ttest_ind(test_stores[col], stores_master_df[col], nan_policy='omit')
    
                    variables_metrics_dict[col]["Test Mean"] = round(test_stores[col].mean(), 2)
                    variables_metrics_dict[col]["Population Mean"] = round(stores_master_df[col].mean(), 2)
                    variables_metrics_dict[col]["Test Std Dev"] = round(test_stores[col].std(), 2)
                    variables_metrics_dict[col]["Population Std Dev"] = round(stores_master_df[col].std(), 2)
    
                # Get banner wise no of stores
                variables_metrics_dict["Test stores split"] = test_stores.groupby([storemstrmapping["banner"]])[
                    storemstrmapping["partner_id"]].count().to_dict()
    
                modelstores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                    test_stores[storemstrmapping["partner_id"]].unique())]
    
                xcols = [x for x in compare_variables if (x != target_variable) & (x != 'Touchability_Score')]
                X_train = modelstores[xcols].values
                y_train = modelstores[target_variable].values.ravel()
    
                X_train = sm.add_constant(X_train)
                model = sm.OLS(y_train, X_train)
                results = model.fit()
    
                summary_df = results.summary2().tables[1]
                summary_df.index = ['Constant'] + list(xcols)
    
                pvalue_dict = dict(zip(summary_df.index.values.tolist(), summary_df["P>|t|"].values.tolist()))
    
                # Calculate feature thresholds
                feature_thresholds_dict = get_feature_thresholds(test_stores, stores_master_df, compare_variables, config=config_cols)
    
                for key, value in feature_thresholds_dict.items():
                    feature_bounds_dict[key] = [variables_metrics_dict[key]["Population Mean"] - value,
                                                variables_metrics_dict[key]["Population Mean"] + value]
                results = {"variables_metrics_dict": variables_metrics_dict, "feature_bounds_dict": feature_bounds_dict, "pvalue_dict": pvalue_dict}
                return json.Response(results, True)
            else:
                return "Please pass appropriate parameters"
        except:
            traceback.print_exc()


class test_store_comparison_summary(generics.ListCreateAPIView):

    def post(self, request):
        try:
            # Reading the files
            import json as j
            data = j.loads(request.body)
            if 'data' in data:
                datas = data['data']
            else:
              datas = data
            banners = datas['banners']
            segments = datas['segments']
            store_segments = datas['store_segments']
            territories = datas['territories']
            target_variable = datas['target_variable']
            test_stores = pd.DataFrame(datas['selected_test_stores'])
            business_categories = datas['categories']
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            test_id = datas['test_id']
            prewindow_start = datas['prewindow_start']
            prewindow_end = datas['prewindow_end']
            postwindow_start = datas['postwindow_start']
            postwindow_end = datas['postwindow_end']
    
            sql_query = (
                '''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['store_mstr']))
            stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
            sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and test_id_id=?'''.format(
                config_cols['tables']['measurement']))
            test_measurement_table = pd.DataFrame(getRowResults(sql_query, (1, 0, test_id)))
    
            tarvarmapping = config_cols["weekly_target_variable"]
            storemstrmapping = config_cols["store_mstr_columns"]
    
            metrics_dict = {}
    
            # Getting the parameters from the Test Measurement Table based on Testid
            test_measurement_table = test_measurement_table[test_measurement_table["test_id_id"] == int(test_id)]
    
            target_variable = str(test_measurement_table["mesmetric_name"].values[0])
            prewindow_target_data, postwindow_target_data, pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(test_id=test_id,
                                                                                            target_variable=target_variable,
                                                                                            business_categories=business_categories, config=config_cols,
                                                                                            test_measurement_table=test_measurement_table,tarvarmapping=tarvarmapping)
    
            stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                 territories=territories, config=config_cols,regionName=region_name)
            annualrsvliftsdf = get_annual_rsv_lifts(target_variable=target_variable, business_categories=business_categories,
                                                    prewindow_start=prewindow_start,
                                                    prewindow_end=prewindow_end,
                                                    postwindow_start=postwindow_start,
                                                    postwindow_end=postwindow_end,
                                                    config=config_cols, regionName=region_name)
            stores_master_df = stores_master_df[
                stores_master_df[storemstrmapping["partner_id"]].isin(annualrsvliftsdf[tarvarmapping["partner_id"]].unique())]
    
            # test group preperiod weekly target data
            test_stores_pre = test_stores.merge(prewindow_target_data,
                                                left_on=[storemstrmapping["partner_id"], storemstrmapping["banner"]],
                                                right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                how="left")
            test_group_pre = test_stores_pre.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            test_group_pre['Window'] = 'Pre'
            test_group_pre['Group'] = 'Test'
    
            # test group postperiod weekly target data
            test_stores_post = test_stores.merge(postwindow_target_data,
                                                 left_on=[storemstrmapping["partner_id"], storemstrmapping["banner"]],
                                                 right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                 how="left")
            test_group_post = test_stores_post.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            test_group_post['Window'] = 'Post'
            test_group_post['Group'] = 'Test'
    
            # control group preperiod weekly target data
            pop_stores_pre = stores_master_df.merge(prewindow_target_data,
                                                    left_on=[storemstrmapping["partner_id"], storemstrmapping["banner"]],
                                                    right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                    how="left")
            pop_group_pre = pop_stores_pre.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            pop_group_pre['Window'] = 'Pre'
            pop_group_pre['Group'] = 'Population'
    
            # control group postperiod weekly target data
            pop_stores_post = stores_master_df.merge(postwindow_target_data,
                                                     left_on=[storemstrmapping["partner_id"], storemstrmapping["banner"]],
                                                     right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                     how="left")
            pop_stores_post = pop_stores_post.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            pop_stores_post['Window'] = 'Post'
            pop_stores_post['Group'] = 'Population'
    
            # Pre and post period test and control group averages
            combined_avg = pd.concat([test_group_pre, test_group_post, pop_group_pre, pop_stores_post], axis=0).reset_index(
                drop=True)
            combined_avg['Average_' + target_variable] = round(combined_avg['Average_' + target_variable], 2)
            combined_avg["Week"] = combined_avg["Week"].astype(int)
            combined_avg["Week"] = combined_avg["Week"].apply(lambda x: str(x)[:4] + " Week " + str('%02d' % int(str(x)[-2:])))
            # Average similarity & correlation
            avg_similarity = test_stores['Similarity_Measure'].mean()
            avg_correlation = test_stores['Correlation'].mean()
    
            metrics_dict["Avg_Similarity"] = avg_similarity
            metrics_dict["Avg_Correlation"] = avg_correlation
            results = {"combined_avg": combined_avg.reset_index().to_json(orient='records'), "metrics_dict": metrics_dict}
            return json.Response(results, True)
        except:
            traceback.print_exc()
import re
import time

import numpy as np
import pandas as pd
from django.http import HttpResponse
from scipy import stats
import gower
from api.helpers import getRowResults, executeDML,getSingleRecordResult
from api.models import *
from api import json
from sklearn.preprocessing import StandardScaler
import traceback
from django.views.decorators.csrf import csrf_exempt
import config.config_data as config
import statsmodels.api as sm
from api.testmeasure.testmeasure_step2 import get_weekly_targetvariables_data
from api.common_utilities import get_total_weekly_target_data, get_feature_thresholds,get_valid_weekly_target_data, \
    filter_active_test_control_stores, prepare_test_control_stores, get_annual_rsv_lifts, filter_population, get_test_control_stores_correlation, stringToArray
# import os
config_data = config.data
from xlsxwriter.workbook import Workbook
import io
from rest_framework import generics
from api.utils.gower_distance import gower_matrix

class control_store_summary(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        null = np.nan
        compare_variables = data['data']['compare_variables']
        stores = data['data']['teststores']
        if 'categories' in data['data']:
            categories = data['data']['categories']
        else:
            categories = []
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
    
        target_variable = data['data']['target_variable']
        prewindow_start = data['data']['prewindow_start']
        prewindow_end = data['data']['prewindow_end']
        postwindow_start = data['data']['postwindow_start']
        postwindow_end = data['data']['postwindow_end']
    
        test_control_mapping_stores = pd.DataFrame.from_dict(stores, orient='columns')
        start_time = time.perf_counter()
    
        try:
            if ((test_control_mapping_stores is not None) & (compare_variables is not None) & (
                    len(compare_variables) != 0)):
    
                # Create variables
                variables_metrics_dict = {}
                feature_thresholds_dict = {}
                feature_bounds_dict = {}
    
                # Stores Master File
                sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['store_mstr']))
                results = getRowResults(sql_query, (1, 0))
                stores_master_df = pd.DataFrame(results)
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                metadata = config_cols["metadata"]['test_planning']
    
                test_stores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                    test_control_mapping_stores["Test_store_" + storemstrmapping["partner_id"]])]
                control_stores = stores_master_df.merge(
                    test_control_mapping_stores[[storemstrmapping["partner_id"], storemstrmapping["banner"]]],
                    on=[storemstrmapping["partner_id"], storemstrmapping["banner"]])
    
                weekly_target_variables_file, consideryearweeks = get_total_weekly_target_data(
                    business_categories=categories, config=config_cols,prewindow_start=prewindow_start,
                                                       prewindow_end=prewindow_end, postwindow_start=postwindow_start,
                                                       postwindow_end=postwindow_end)
                weeks = consideryearweeks[metadata["summary_sales_weeks"]:]
                weeklyrsvdatayear = weekly_target_variables_file[
                    weekly_target_variables_file[tarvarmapping["week"]].isin(weeks)]
                weeklyrsvdatayear["Year"] = "Year1"
    
                aggdict = {k: sum for k in [tarvarmapping['rsv'], tarvarmapping['volume']]}
                groupbycolumns = [tarvarmapping["partner_id"]] + [tarvarmapping["banner"]] + [tarvarmapping['year']]
                annualrsvdatayear = weeklyrsvdatayear.groupby(groupbycolumns).agg(aggdict).reset_index()
    
                mergecolumns = [tarvarmapping["partner_id"]] + [tarvarmapping['rsv'], tarvarmapping['volume']]
                test_stores = test_stores.merge(annualrsvdatayear[mergecolumns],
                                                left_on=storemstrmapping["partner_id"],
                                                right_on=tarvarmapping["partner_id"])
                control_stores = control_stores.merge(annualrsvdatayear[mergecolumns],
                                                      left_on=storemstrmapping["partner_id"],
                                                      right_on=tarvarmapping["partner_id"])


                compare_variables = metadata["test_vs_control_compare_summary"]
                if (len(categories) != 0) & (len(categories) < metadata["business_categories_count"]):
                    common_category_specific = list(
                        set(metadata["business_category_specific_compare"]) & set(compare_variables))
                    if len(common_category_specific) > 0:
                        features_list = [[j + "_" + i for j in common_category_specific] for i in categories]
                        category_specific_features = [item for elem in features_list for item in elem]
                        compare_variables.extend(category_specific_features)
                compare_variables.append(target_variable)


                for col in compare_variables:
                    variables_metrics_dict[col] = {}

                    tStat, pVal = stats.ttest_ind(test_stores[col], control_stores[col], nan_policy='omit')

                    variables_metrics_dict[col]["Test Mean"] = round(test_stores[col].mean(), 2)
                    variables_metrics_dict[col]["Control Mean"] = round(control_stores[col].mean(), 2)
                    variables_metrics_dict[col]["Test Std Dev"] = round(test_stores[col].std(), 2)
                    variables_metrics_dict[col]["Control Std Dev"] = round(control_stores[col].std(), 2)
                 # Commented For UK Market Alone Need to use for Other Market
                # allstores = pd.concat([test_stores, control_stores])
                #
                # xcols = [x for x in compare_variables if x != target_variable]
                # X_train = allstores[xcols].values
                # y_train = allstores[target_variable].values.ravel()
                #
                # X_train = sm.add_constant(X_train)
                # model = sm.OLS(y_train, X_train)
                # results = model.fit()
                #
                # summary_df = results.summary2().tables[1]
                # summary_df.index = ['Constant'] + list(xcols)
                #
                # pvalue_dict = dict(zip(summary_df.index.values.tolist(), summary_df["P>|t|"].values.tolist()))
                # Calculate feature thresholds
                feature_thresholds_dict = get_feature_thresholds(test_stores, control_stores, compare_variables, config=config_cols)
    
                for key, value in feature_thresholds_dict.items():
                    feature_bounds_dict[key] = [variables_metrics_dict[key]["Test Mean"] - value,
                                                variables_metrics_dict[key]["Test Mean"] + value]

                results = {
                    "variable_metric": variables_metrics_dict,
                    "feature_metric": feature_bounds_dict
                }
                return json.Response(results, True)
            else:
                return json.Response("Please pass appropriate parameters", False)
        except:
            traceback.print_exc()

class recompute_control_stores(generics.ListCreateAPIView):

    def post(self, request):
        start_time = time.perf_counter()
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        import json as j
        request = j.loads(request.body)
        null = np.nan
        # store_features = request['data']['store_features']
        stores = request['data']['teststores']
        target_variable = request['data']['target_variable']
    
        banners = request['data']['banners']
        segments = request['data']['segments']
        store_segments = request['data']['store_segments']
        territories = request['data']['territories']
        prewindow_start = request['data']['prewindow_start']
        prewindow_end = request['data']['prewindow_end']
        postwindow_start = request['data']['postwindow_start']
        postwindow_end = request['data']['postwindow_end']
    
        if 'categories' in request['data']:
            categories = request['data']['categories']
        else:
            categories = []
        reqcontrolstores = request['data']['reqcontrolstores']
        test_control_stores = pd.DataFrame.from_dict(stores, orient='columns')
    
        try:
            if (test_control_stores is not None):
    
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                metadata = config_cols["metadata"]
    
                store_features = metadata["test_planning"]["test_vs_control_compare"].copy()
    
                # SPLITTING ACCEPTED AND REJECTED STORES
                accepted = test_control_stores.groupby("Test_store_" + storemstrmapping["partner_id"]).filter(
                    lambda x: (x['Checked_Flag'] == 1).any())
                rejected = test_control_stores[~test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(
                    accepted["Test_store_" + storemstrmapping["partner_id"]])]
                num_cntrl_rejected = rejected.groupby("Test_store_" + storemstrmapping["partner_id"])[
                    storemstrmapping["partner_id"]].count()
                # testid = test_control_stores["test_id"].unique()[0]
    
                stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                     territories=territories, config=config_cols,regionName=region_name)
                teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                    test_control_stores["Test_store_" + storemstrmapping["partner_id"]].unique())]
    
                # Getting stores which have non zero target variable values in all weeks
                valid_sales_stores, consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable,
                                                                                     business_categories=categories, config=config_cols,
                                                                                     prewindow_start=prewindow_start,
                                                                                     prewindow_end=prewindow_end,
                                                                                     postwindow_start=postwindow_start,
                                                                                     postwindow_end=postwindow_end)
                stores_master_df = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                    valid_sales_stores[tarvarmapping["partner_id"]].unique())]
    
                # -----------------------------------------------New code-------------------------------------------------------------
                filtered = valid_sales_stores[valid_sales_stores["Week"].isin(consideryearweeks[52:])]
                pivoteddf = pd.pivot_table(filtered, index=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                           columns="Week", values="RSV").reset_index().rename_axis(None, axis=1)
                weekcolumns = [col for col in pivoteddf.columns.tolist() if
                               col not in [tarvarmapping["partner_id"], tarvarmapping["banner"]]]
                stores_master_df = stores_master_df.merge(pivoteddf,
                                                          on=[tarvarmapping["partner_id"], tarvarmapping["banner"]])
                # ------------------------------------------------New code-------------------------------------------------------------
    
                # Computing additional features
                annualrsvliftdf = get_annual_rsv_lifts(target_variable=target_variable,
                                                       prewindow_start=prewindow_start,
                                                       prewindow_end=prewindow_end, postwindow_start=postwindow_start,
                                                       postwindow_end=postwindow_end,
                                                       business_categories=categories, config=config_cols, regionName=region_name)
    
                filtercolumns = [tarvarmapping["partner_id"]] + [target_variable + ' Year 1', target_variable + ' Year 2',
                                                                 target_variable + ' Lift']
                stores_master_df = stores_master_df.merge(annualrsvliftdf[filtercolumns],
                                                          left_on=storemstrmapping["partner_id"],
                                                          right_on=tarvarmapping["partner_id"])
    
                # Adding extra features as comparison features
                if (len(categories) != 0) & (len(categories) < metadata["test_planning"]["business_categories_count"]):
                    common_category_specific = list(
                        set(metadata["test_planning"]["business_category_specific_compare"]) & set(store_features))
                    if len(common_category_specific) > 0:
                        features_list = [[j + "_" + i for j in common_category_specific] for i in categories]
                        category_specific_features = [item for elem in features_list for item in elem]
                        store_features.extend(category_specific_features)
                store_features.extend([target_variable + " Year 2", target_variable + " Lift"])
    
                teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                    test_control_stores["Test_store_" + storemstrmapping["partner_id"]].unique())]
    
                stores_master_df = filter_active_test_control_stores(stores_master_df=stores_master_df, config=config_cols)
    
                # ELIMINATING THE TESTSTORES FROM POPULATION
                stores_master_df = stores_master_df[
                    ~(stores_master_df[storemstrmapping["partner_id"]].isin(teststores[storemstrmapping["partner_id"]]))]


                refA = teststores.copy(deep=True)
                refB = stores_master_df.copy(deep=True)
    
                useA = refA[store_features].copy(deep=True)
                useB = refB[store_features].copy(deep=True)
    
                scaler = StandardScaler()
                nonscalingcolumns = [storemstrmapping["banner"], storemstrmapping["territory"], storemstrmapping["segment"],
                                     storemstrmapping["storegrid"]]
                scale_cols = [item for item in store_features if item not in nonscalingcolumns]
    
                if len(scale_cols) > 0:
                    useA[scale_cols] = scaler.fit_transform(useA[scale_cols])
                    useB[scale_cols] = scaler.fit_transform(useB[scale_cols])
    
                gowermatrix = gower_matrix(useA, useB)
    
                # Filtering out Test stores which have no more control store left to be mapped
                teststores_with_exhausted_control = num_cntrl_rejected[
                    num_cntrl_rejected + 1 > refB.shape[0]].index.tolist()
                rejected.loc[~rejected["Test_store_" + storemstrmapping["partner_id"]].isin(
                    teststores_with_exhausted_control), "is_recommended"] = 0
                num_cntrl_rejected = num_cntrl_rejected.to_dict()
    
                # Identifying similar stores
                filter_columns = set(
                    [storemstrmapping["partner_id"], storemstrmapping["banner"], storemstrmapping["territory"],
                     storemstrmapping["segment"],
                     storemstrmapping["storegrid"]]).union(metadata['test_planning']["teststores_columns"])
                df_list = list()
                for test_pid, row in zip(refA[storemstrmapping["partner_id"]], gowermatrix):
                    if test_pid in rejected["Test_store_" + storemstrmapping["partner_id"]].values:
                        df_list.append(df_list.append(prepare_test_control_stores(dfA=refA[filter_columns].copy(deep=True),
                                                                                  dfB=refB[filter_columns].copy(deep=True),
                                                                                  teststoreid=test_pid, gowerdistances=row,
                                                                                  num_cntrl_rejected=num_cntrl_rejected,
                                                                                  calltype="new",config=config_cols, corrbased=0, reqcontrolstores=reqcontrolstores)))
    
                control_stores = pd.concat(df_list)
                control_stores = control_stores[
                    ~control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(teststores_with_exhausted_control)]
                control_stores["Checked_Flag"] = 0
                control_stores["is_recommended"] = 1


                control_stores = get_test_control_stores_correlation(dfA=refA.copy(deep=True), dfB=refB.copy(deep=True),
                                                                     test_control_stores=control_stores.copy(deep=True),
                                                                     weekcolumns=weekcolumns,
                                                                     num_cntrl_rejected=num_cntrl_rejected, corrbased=0, config=config_cols)
    
                control_stores = pd.concat([accepted, rejected, control_stores])
                control_stores = control_stores.reset_index().to_json(orient='records')

            else:
                return json.Response("Please pass Test-Control stores and Store features", False)

            return json.Response(control_stores, True)

        except:
            traceback.print_exc()


class average_weekly_target_similarity_correlation(generics.ListCreateAPIView):
    
    def post(self, request):
        try:
            import json as j
            data = j.loads(request.body)
            datas = data['data']
            testid = (datas['test_id'])
            test_control_data = pd.DataFrame(datas['test_control'])
            business_categories = datas['categories']
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
    
            sql_test_control_store = (
            '''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and checked_flag=? and test_id_id=? '''.format(
                config_cols['tables']['control_store_mstr']))
            test_control_mapping_stores = pd.DataFrame(getRowResults(sql_test_control_store, (1, 0, 1, testid)))
            # Reading the Sql Scripts
            sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['store_mstr']))
            stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
            sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and test_id_id=?'''.format(config_cols['tables']['measurement']))
            test_measurement_table = pd.DataFrame(getRowResults(sql_query, (1, 0,testid)))
            # test_control_mapping_stores = pd.read_excel("Test_Control_Stores_3.xlsx")
            sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and test_id_id=?'''.format(
                config_cols['tables']['test_store_map']))
            teststore_map_df = pd.DataFrame(getRowResults(sql_query, (1, 0, testid)))
            # End of the Sql Read Data
            # Config Read Data
            tarvarmapping = config_data[region_name]["weekly_target_variable"]
            storemstrmapping = config_data[region_name]["store_mstr_columns"]
            metadata = config_data[region_name]["metadata"]["test_measurement"]
            # End of the Config Read Data
            metrics_dict = {}
    
            # Getting the parameters from the Test Measurement Table based on Testid
            test_measurement_table = test_measurement_table[test_measurement_table["test_id_id"] == int(testid)]
            target_variable = str(test_measurement_table["mesmetric_name"].values[0])
            prewindow_target_data, postwindow_target_data,pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(test_id=testid, test_measurement_table=test_measurement_table,
                                                                                            target_variable=target_variable, tarvarmapping=tarvarmapping,
                                                                                            business_categories=business_categories, config=config_cols)

            test_control_stores = test_control_mapping_stores[test_control_mapping_stores["test_id_id"] == int(testid)]
            test_control_stores = test_control_stores[test_control_stores["Test_store_" + tarvarmapping["partner_id"]].isin(
                teststore_map_df["teststore_id"].values.tolist())]
            # test group preperiod weekly target data
            test_stores_pre = test_control_stores.merge(prewindow_target_data,
                                                        left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                 "Test_store_" + storemstrmapping["banner"]],
                                                        right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                        how="left")
            test_group_pre = test_stores_pre.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            test_group_pre['Window'] = 'Pre'
            test_group_pre['Group'] = 'Test'
            # test group postperiod weekly target data
            test_stores_post = test_control_stores.merge(postwindow_target_data,
                                                         left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                  "Test_store_" + storemstrmapping["banner"]],
                                                         right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                         how="left")
            test_group_post = test_stores_post.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            test_group_post['Window'] = 'Post'
            test_group_post['Group'] = 'Test'
    
            # control group preperiod weekly target data
            control_stores_pre = test_control_stores.merge(prewindow_target_data,
                                                           left_on=[storemstrmapping["partner_id"], storemstrmapping["banner"]],
                                                           right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                           how="left")
            control_group_pre = control_stores_pre.groupby(tarvarmapping["week"])[target_variable].mean().reset_index().rename(
                columns={target_variable: 'Average_' + target_variable})
            control_group_pre['Window'] = 'Pre'
            control_group_pre['Group'] = 'Control'
    
            # control group postperiod weekly target data
            control_stores_post = test_control_stores.merge(postwindow_target_data,
                                                            left_on=[storemstrmapping["partner_id"],
                                                                     storemstrmapping["banner"]],
                                                            right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                            how="left")
            control_group_post = control_stores_post.groupby(tarvarmapping["week"])[
                target_variable].mean().reset_index().rename(columns={target_variable: 'Average_' + target_variable})
            control_group_post['Window'] = 'Post'
            control_group_post['Group'] = 'Control'
    
            # Pre and post period test and control group averages
            combined_avg = pd.concat([test_group_pre, test_group_post, control_group_pre, control_group_post],
                                     axis=0).reset_index(drop=True)
            combined_avg['Average_' + target_variable] = round(combined_avg['Average_' + target_variable], 2)
            combined_avg["Week"] = combined_avg["Week"].astype(int)
            combined_avg["Week"] = combined_avg["Week"].apply(lambda x: str(x)[:4] + " Week " + str('%02d' % int(str(x)[-2:])))
            # Average similarity & correlation
            testcontrolstores = test_control_data.copy(deep=True)
            avg_similarity = testcontrolstores['Similarity_Measure'].mean()
            avg_correlation = testcontrolstores['Correlation'].mean()
            metrics_dict["Avg_Similarity"] = avg_similarity
            metrics_dict["Avg_Correlation"] = avg_correlation
            results = {
               "combined_avg": combined_avg.reset_index().to_json(orient='records'),
                "metrics_dict":metrics_dict
            }
            return json.Response(results, True)
        except:
            traceback.print_exc()


class manual_teststore_controlstore_upload(generics.ListCreateAPIView):

    def post(self, request):
        try:
            file = request.FILES['file']
            banners = stringToArray(request.POST['banner'])
            segments = stringToArray(request.POST['segments'])
            store_segments = stringToArray(request.POST['store_segments'])
            territories = stringToArray(request.POST['territories'])
            categories = stringToArray(request.POST['categories'])
            target_variable = request.POST['target_variable']
            test_id = request.POST['test_id']
            prewindow_start = request['data']['prewindow_start']
            prewindow_end = request['data']['prewindow_end']
            postwindow_start = request['data']['postwindow_start']
            postwindow_end = request['data']['postwindow_end']
            test_control_store_data = pd.read_excel(file)
    
            # Config accessing files
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
    
            filePath = config_cols["filePath"]["controlStore"]["file_name"]
            test_control_stores_ref = pd.read_excel(filePath)
            storemstrmapping = config_cols["store_mstr_columns"]
            tarvarmapping = config_cols["weekly_target_variable"]
            metadata = config_cols["metadata"]["test_planning"]
            store_features = metadata["test_vs_control_compare"].copy()
    
            # Filter the stores only from the input filters
            sql_teststore_map = "SELECT * FROM {} WHERE is_active=? and is_deleted=? and test_id_id=?".format(config_cols['tables']['test_store_map'])
            results = getRowResults(sql_teststore_map, (1, 0, test_id))
            teststore_map_df = pd.DataFrame(results)
    
            stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                 territories=territories, config=config_cols, regionName=region_name)
            annualrsvlifts = get_annual_rsv_lifts(target_variable=target_variable, business_categories=categories,
                                                  config=config_cols, regionName=region_name,
                                                  prewindow_start=prewindow_start,
                                                  prewindow_end=prewindow_end,
                                                  postwindow_start=postwindow_start,
                                                  postwindow_end=postwindow_end)

            # ELIMINATING ALL THE TEST AND CONTROL STORES WHICH ARE CURRENTLY ACTIVE
            filtered_stores_df = filter_active_test_control_stores(stores_master_df=stores_master_df.copy(deep=True),
                                                                   config=config_cols)
            # Considering only those stores which have continous sales in the last two years
            filtered_rsv_stores_df = filtered_stores_df[
                filtered_stores_df[storemstrmapping["partner_id"]].isin(
                    annualrsvlifts[tarvarmapping["partner_id"]].unique())]
    
            filtered_store_master_df = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(annualrsvlifts[tarvarmapping["partner_id"]].unique())]
    
            filtercolumns = [tarvarmapping["partner_id"]] + [target_variable + ' Year 1', target_variable + ' Year 2',
                                                             target_variable + ' Lift']
            filtered_rsv_stores_df = filtered_rsv_stores_df.merge(annualrsvlifts[filtercolumns],
                                                                  left_on=storemstrmapping["partner_id"],
                                                                  right_on=tarvarmapping["partner_id"])
            filtered_rsv_store_master_df = filtered_store_master_df.merge(annualrsvlifts[filtercolumns],
                                                                          left_on=storemstrmapping["partner_id"],
                                                                          right_on=tarvarmapping["partner_id"])
    
            # Adding extra features as comparison features
            if (len(categories) != 0) & (len(categories) < metadata["business_categories_count"]):
                common_category_specific = list(set(metadata["business_category_specific_compare"]) & set(store_features))
                if len(common_category_specific) > 0:
                    features_list = [[j + "_" + i for j in common_category_specific] for i in categories]
                    category_specific_features = [item for elem in features_list for item in elem]
                    store_features.extend(category_specific_features)
            store_features.extend([target_variable + " Year 2", target_variable + " Lift"])
    
            # User uploaded test-control pairs
            test_control_stores = test_control_store_data.copy(deep=True)
    
            # Number of columns check
            check1 = test_control_stores.shape[1] == test_control_stores_ref.shape[1]
            # Column name check
            check2 = sorted(test_control_stores.columns) == sorted(test_control_stores_ref.columns)
    
            # Column data type check
            df1 = dict(test_control_stores.loc[:, sorted(test_control_stores.columns)].dtypes)
            df2 = dict(sorted(metadata["user_testcontrolstores_columns"].items()))
            check3 = df1 == df2
            if check1 & check2 & check3:
                if region_name == 'AUS':
                    test_control_stores['Test_store_' + storemstrmapping["partner_id"]] = test_control_stores[
                        'Test_store_' + storemstrmapping["partner_id"]].apply(
                        lambda x: re.sub('[^a-z]+', '', str(x).lower()))
                    test_control_stores['Control_store_' + storemstrmapping["partner_id"]] = test_control_stores[
                        'Control_store_' + storemstrmapping["partner_id"]].apply(
                        lambda x: re.sub('[^a-z]+', '', str(x).lower()))
                # valid teststores
                if region_name == 'UK':
                    teststore_map_df = teststore_map_df[teststore_map_df["test_id_id"] == int(test_id)]
                else:
                    teststore_map_df = teststore_map_df[teststore_map_df["test_id_id"] == int(test_id)]
                tv = test_control_stores[test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(teststore_map_df["teststore_id"].unique())]
                # valid controlstores
                cv = test_control_stores[test_control_stores["Control_store_" + storemstrmapping["partner_id"]].isin(
                    filtered_rsv_stores_df[storemstrmapping["partner_id"]])]
                to_drop = tv[~tv["Control_store_" + storemstrmapping["partner_id"]].isin(
                    cv["Control_store_" + storemstrmapping["partner_id"]])]
                # Final valid test-control pairs
                filtered_testcontrol_stores = tv[~tv.isin(to_drop)].dropna()
                # message = "No of test-control pairs satisfying the criteria to proceed further are {}".format(filtered_testcontrol_stores.shape[0])
                if filtered_testcontrol_stores.shape[0] == 0:
                    message = "No test-control pairs satisfying the criteria to proceed further."
                    return json.Response(message, False)
            else:
                return json.Response("The uploaded file/data format doesn't match with the expected format", False)
    
            # Test & Control Stores Characteristics from storemaster df
            filtered_testcontrol_stores['order'] = list(range(filtered_testcontrol_stores.shape[0]))
            teststores = filtered_rsv_store_master_df.merge(filtered_testcontrol_stores, left_on=storemstrmapping["partner_id"],
                                                      right_on='Test_store_' + storemstrmapping["partner_id"], how='right')
            controlstores = filtered_rsv_stores_df.merge(filtered_testcontrol_stores,
                                                         left_on=storemstrmapping["partner_id"],
                                                         right_on='Control_store_' + storemstrmapping["partner_id"],
                                                         how='right')
            controlstores = controlstores.set_index('order')
            controlstores = controlstores.reindex(index=teststores['order'])
            controlstores = controlstores.reset_index()

            # checks that the order of test-control pairs in both files matches

            # Weekly sales for all stores for the past 1 year (52 weeks)
            valid_sales_stores, consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable,
                                                                                 business_categories=categories,
                                                                                 config=config_cols,
                                                                                 prewindow_start=prewindow_start,
                                                                                 prewindow_end=prewindow_end,
                                                                                 postwindow_start=postwindow_start,
                                                                                 postwindow_end=postwindow_end)
            filtered = valid_sales_stores[
                valid_sales_stores[tarvarmapping["week"]].isin(consideryearweeks[metadata["summary_sales_weeks"]:])]
            pivoteddf = pd.pivot_table(filtered, index=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                       columns=tarvarmapping["week"], values=target_variable).reset_index().rename_axis(
                None,
                axis=1)
    
            cols = ["order", storemstrmapping['partner_id'], storemstrmapping['banner'],
                    'Test_store_' + storemstrmapping['partner_id'], 'Control_store_' + storemstrmapping['partner_id']]
            mergecols = [storemstrmapping['partner_id'], storemstrmapping['banner']]
    
            test_stores_wksales = teststores[cols].merge(pivoteddf, on=mergecols)
            control_stores_wksales = controlstores[cols].merge(pivoteddf, on=mergecols)
            control_stores_wksales = control_stores_wksales.set_index('order')
            control_stores_wksales = control_stores_wksales.reindex(index=test_stores_wksales['order'])
            control_stores_wksales = control_stores_wksales.reset_index()


            # Sales Correlation between the weekly sales for each test-control pair
            corrlist = []
            for j in range(controlstores.shape[0]):
                array1 = np.array(
                    test_stores_wksales.loc[j, test_stores_wksales.columns[~test_stores_wksales.columns.isin(cols)]].astype(
                        float))
                array2 = np.array(control_stores_wksales.loc[
                    j, control_stores_wksales.columns[~control_stores_wksales.columns.isin(cols)]].astype(
                    float))
                corrlist.append(round(stats.pearsonr(array1, array2)[0], 2))
            teststores["Correlation"] = corrlist
    
            # population stores after excluding teststores
            pop_stores = filtered_rsv_stores_df[~filtered_rsv_stores_df[storemstrmapping['partner_id']].isin(
                teststores['Test_store_' + storemstrmapping['partner_id']])]
    
            # Similarity Calculation
            refA = teststores.copy(deep=True)
            refB = pop_stores.copy(deep=True)
            useA = refA[store_features].copy(deep=True)
            useB = refB[store_features].copy(deep=True)
    
            scaler = StandardScaler()
            nonscalingcolumns = [storemstrmapping["banner"], storemstrmapping["territory"], storemstrmapping["segment"],
                                 storemstrmapping["storegrid"]]
            scale_cols = [item for item in store_features if item not in nonscalingcolumns]
            if len(scale_cols) > 0:
                useA[scale_cols] = scaler.fit_transform(useA[scale_cols])
                useB[scale_cols] = scaler.fit_transform(useB[scale_cols])
    
            gowermatrix = gower_matrix(useA, useB)
    
            # Identifying similar stores
            df_list = list()
    
            for i in range(refA.shape[0]):
    
                teststoreid = refA[storemstrmapping["partner_id"]][i]
                gowerdistances = gowermatrix[i]
    
                dfA = refA.copy(deep=True)
                dfB = refB.copy(deep=True)
    
                dfB["Gower_Distance"] = list(gowerdistances)
                # dfB = dfB.sort_values(by="Gower_Distance",ascending=True)
                filteredteststoredf = dfA.loc[i, :].reset_index().T.reset_index(drop=True)
                filteredteststoredf.columns = filteredteststoredf.iloc[0, :]
                filteredteststoredf = filteredteststoredf.drop(0)
                filteredteststoredf = filteredteststoredf.reset_index(drop=True)
    
                for col in metadata["teststores_columns"]:
                    dfB["Test_store_" + col] = filteredteststoredf[col].values[0]
    
                dfB["Gower_Distance"] = dfB["Gower_Distance"].apply(lambda x: round(x, 2))
                dfB["Similarity_Measure"] = dfB["Gower_Distance"].apply(lambda x: 1 - x)
                df_append = dfB[dfB[storemstrmapping['partner_id']] == filteredteststoredf[
                    'Control_store_' + storemstrmapping['partner_id']].values[0]]
                df_append['Correlation'] = filteredteststoredf['Correlation'].values[0]
                df_list.append(df_append)
            control_test_pairs = pd.concat(df_list)
            message = "Out of {} Test-Control Pairs, {} of them are valid".format(test_control_store_data.shape[0],
                                                                                  control_test_pairs.shape[0])
            results ={
                "message": message,
                "control_pairs": control_test_pairs.reset_index().to_json(orient='records')
            }
            return json.Response(results, True)
            # return control_test_pairs
        except:
            traceback.print_exc()


class download_control_store_template(generics.ListCreateAPIView):
    
    def post(self, request):
        global myData
        try:
            import json as j
            data = j.loads(request.body)
            selected_test_stores = data['testStores']
            templateType = data['templateType']
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            # Stream the values to write in excel
            output = io.BytesIO()
            workbook = Workbook(output, {'in_memory': True})
            worksheet = workbook.add_worksheet()
            if templateType == 'TestControlPairs':
                myData = {config_cols['excel_header']['test_store']: selected_test_stores,
                          config_cols['excel_header']['control_store']: []}
            elif templateType == 'ControlPairs':
                myData = {config_cols['excel_header']['control_store']: []}
            col_num = 0
            for key, value in myData.items():
                worksheet.write(0, col_num, key)
                worksheet.write_column(1, col_num, value)
                col_num += 1
            workbook.close()
            output.seek(0)
            response = HttpResponse(output.read(),
                                    content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            response['Content-Disposition'] = "attachment; filename=test.xlsx"
            output.close()
            return response
        except:
            traceback.print_exc()


class controlStore_save(generics.ListCreateAPIView):
    
    def post(self, request):
        try:
            import json as j
            data = j.loads(request.body)
            test_id = data["test_id"]
            preperiod_start = data["preperiod_start"]
            preperiod_end = data["preperiod_end"]
            postperiod_start = data["postperiod_start"]
            postperiod_end = data["postperiod_end"]
            mesmetric_name = data["mesmetric_name"]
            break_even_lift = data['break_even_lift']
    
            # my_conn = conn()
            region_name = request.META['HTTP_COUNTRY']
            gettest = []
    
            gettestquery = getSingleRecordResult(
                "select * from {} where test_id = ?".format(config_data[region_name]['tables']['test_mstr']), (test_id))
            results = gettestquery
            if test_id is not None:
                remove_measure = getSingleRecordResult(
                    'SELECT count(*) as count FROM {} WHERE is_active=? and is_deleted=? and test_id_id=?'.format(
                        config_data[region_name]['tables']['measurement']), (True, False, test_id))
                # remove_measure = list(remove_measure)
                if (remove_measure['count'] > 0):
                    remove_measure = executeDML("DELETE from {} WHERE "
                                                "is_active=? and is_deleted=? and test_id_id=?".format(
                        config_data[region_name]['tables']['measurement']), [True, False, test_id])
                param = (test_id,
                         mesmetric_name,
                         preperiod_start,
                         preperiod_end,
                         postperiod_start,
                         postperiod_end,
                         results['cost'],
                         results['rsv_estimate'],
                         int(time.time()),
                         False,
                         True)
    
                sql = "INSERT INTO {}(test_id_id, mesmetric_name, preperiod_start, preperiod_end, postperiod_start, postperiod_end, cost, rsv_estimate, created_on, is_deleted, is_active) VALUES (?,?,?,?,?,?,?,?,?,?,?)".format(
                    config_data[region_name]['tables']['measurement'])
                Record_save = executeDML(sql, param)
            return json.Response('Updated Successfully', True)
        except:
            traceback.print_exc()


class manual_upload_control_store_pool(generics.ListCreateAPIView):
    
    def post(self, request):
        try:
            file = request.FILES['file']
            control_store_pool_data = pd.read_excel(file)
            # Config accessing files
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
    
            filePath = config_cols["filePath"]["controlStore_Pool"]["file_name"]
            control_stores_pool_ref = pd.read_excel(filePath)
            metadata = config_cols["metadata"]["test_planning"]
            storemstrmapping = config_cols["store_mstr_columns"]
    
            if control_store_pool_data.shape[0] == 0:
                return "No Store is added to Control Store Pool, Please enter the Customer Number for possible Control Stores in the Excel file."
    
            # User uploaded test-control pairs
            control_stores_pool = control_store_pool_data.copy(deep=True)
    
            # Number of columns check
            check1 = control_stores_pool.shape[1] == control_stores_pool_ref.shape[1]
            # Column name check
            check2 = sorted(control_stores_pool.columns) == sorted(control_stores_pool_ref.columns)
    
            # Column data type check
            df1 = dict(control_stores_pool.loc[:, sorted(control_stores_pool.columns)].dtypes)
            df2 = dict(sorted(metadata["control_storespool_columns"].items()))
            check3 = df1 == df2
            if check1 & check2 & check3:
                if isinstance(control_store_pool_data['Control_store_'+storemstrmapping["partner_id"]].values[0], str):
                    control_store_pool_data[storemstrmapping["partner_id"]] = control_store_pool_data[
                        storemstrmapping["partner_id"]].apply(lambda x: re.sub('[^a-z]+', '', str(x).lower()))
                return json.Response(control_store_pool_data.reset_index().to_json(orient='records'), True)
            else:
                return json.Response("The uploaded file/data format doesn't match with the expected format", True)
        except:
            traceback.print_exc()
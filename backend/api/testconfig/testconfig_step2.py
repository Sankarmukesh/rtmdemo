import math
import time
from datetime import datetime

import numpy as np
import pandas as pd
from rest_framework import generics
from scipy.stats import norm
from api.helpers import getRowResults
from api.common_utilities import get_annual_rsv_lifts, filter_population, \
    filter_active_test_control_stores, get_valid_weekly_target_data
from api.json import Response
from api.models import ConfigMstr
from api import json
import traceback
import config.config_data as config
from api.serializers import ConfigMasterSerializer
import logging

logger = logging.getLogger(__name__)

config_data = config.data

class DateRange(generics.ListCreateAPIView):

    def get(self, request):
        dateFilter = ConfigMstr.objects.filter()
        config_master = ConfigMasterSerializer(dateFilter, many=True)

        for result in config_master.data:
            if result.get('key') == 'min_date':
                start_date = result.get('value')
            elif result.get('key') == 'max_date':
                end_date = result.get('value')
        results = {
            "startdate": start_date,
            "enddate": end_date
        }
        return Response(results, True)


class get_breakeven_lift(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        data = j.loads(request.body)
        datas = data['data']
        banners = datas['banners']
        segments = datas['segments']
        store_segments = datas['store_segments']
        territories = datas['territories']
        categories = datas['categories']
        num_of_teststores = datas['no_of_teststores']
        rsv_estimate = datas['rsv_estimate']
        cost = datas['cost']
    
        if (num_of_teststores is not None) & (rsv_estimate is not None) & (cost is not None):
    
            # Read the files
            storemstrmapping = config_cols["store_mstr_columns"]
            tarvarmapping = config_cols["weekly_target_variable"]
            metadata = config_cols["metadata"]
    
            rawconvfactors = metadata["test_configuration"]["rawconvfactors"]
    
            stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                 territories=territories, config=config_cols,regionName=region_name)
    
            # Get the proportion of stores to be sampled for each banner
            count_df = stores_master_df.groupby(tarvarmapping["banner"])[
                tarvarmapping["partner_id"]].count().reset_index().rename(columns={tarvarmapping["partner_id"]: "Count"})
    
            count_df["prop"] = count_df["Count"] / count_df["Count"].sum()
            count_df["stores_proportioned"] = count_df["prop"] * num_of_teststores
            count_df["stores_proportioned"] = count_df["stores_proportioned"].apply(lambda x: round(x))

            bannerwisestoresdict = dict(
                zip(count_df[config_cols['store_mstr_columns']['banner']], count_df["stores_proportioned"]))
            numerator = sum(
                [bannerwisestoresdict[k] * v for k, v in rawconvfactors.items() if k in bannerwisestoresdict.keys()])
            denominator = sum(list(bannerwisestoresdict.values()))
            conversionfactor = numerator / denominator
            cost = cost / conversionfactor
            breakevenliftpercentage = (cost / rsv_estimate) * 100
            return json.Response(breakevenliftpercentage, True)
        else:
            return json.Response("Please pass appropriate parameters", False)


class validate_datapoints(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        datas = data['data']
        banners = datas['banners']
        segments = datas['segments']
        store_segments = datas['store_segments']
        territories = datas['territories']
        categories = datas['categories']
        testid = datas['test_id']
        num_of_teststores = datas['no_of_teststores']
        num_of_teststores = num_of_teststores + 0.2 * num_of_teststores
        target_variable = datas['target_variable']
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
    
        if (testid is not None) & (num_of_teststores is not None):
            sql_test_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config_cols['tables']['test_mstr'])
            results = getRowResults(sql_test_mstr, (1, 0))
            test_master_df = pd.DataFrame(results)

            sql_teststore_map = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
                config_cols['tables']['test_store_map'])
            results = getRowResults(sql_teststore_map, (1, 0))
            teststore_map_df = pd.DataFrame(results)
    
            storemstrmapping = config_cols["store_mstr_columns"]
            tarvarmapping = config_cols["weekly_target_variable"]
            metadata = config_cols["metadata"]
    
            if teststore_map_df.empty:
                teststore_map_df = pd.DataFrame(columns=['storemap_id', 'test_id_id', 'teststore_id'])
    
            # Get all the active tests(test ids)
            active_tests_df = test_master_df[test_master_df["is_active"] == True]
    
            # Check if there are active tests
            if (active_tests_df.shape[0] != 0) & (testid in active_tests_df["test_id"].unique()) & (
                    teststore_map_df[teststore_map_df["test_id_id"] == testid].shape[0] > 0):
                return json.Response(1, True)
            else:
                stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                     territories=territories, config=config_cols,regionName=region_name)
                filtered_stores_df = filter_active_test_control_stores(stores_master_df=stores_master_df, config=config_cols)
                    # Getting stores which have non zero target variable values in all weeks
                valid_sales_stores, _ = get_valid_weekly_target_data(target_variable=target_variable, business_categories=categories, config=config_cols)
                filtered_rsv_stores_df = filtered_stores_df[filtered_stores_df[tarvarmapping["partner_id"]].isin(
                        valid_sales_stores[tarvarmapping["partner_id"]].unique())]

    
                if filtered_rsv_stores_df.shape[0] >= (num_of_teststores * metadata["test_planning"]["validate_datapoints_multiplier"]):
                    return json.Response(1, True)
                else:
                    return json.Response(0, False)
    
        else:
            return json.Response("Please pass TestId and Number of Teststores", False)



class Weekduration(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body.decode("utf-8"))
        try:
            # start = data['start']
            # end = data['end']
            start = str(data['start_year']) + "-" + str(data['start_month']) + "-" + str(data['start_day'])
            end = str(data['end_year']) + "-" + str(data['end_month']) + "-" + str(data['end_day'])
            start = startEnd(start)
            end = startEnd(end, end=True)
            result = {
                "startdate": str(start),
                "enddate": str(end),
                "interval": str(int(((end - start).days + 1) / 7))
            }
            return Response(result, True)
        except:
            return Response("Can't get Duration in weeks", False)


def startEnd(date, end=False):
    import datetime
    day = -1
    if end:
        day = 5
    date = datetime.datetime.strptime(date, '%Y-%m-%d')
    if end:
        if (date.weekday() <= 6):
            date = date + datetime.timedelta(days=7)
        if (date.weekday() == 5):
            date = date - datetime.timedelta(days=7)
    if (end == False):
        if (date.weekday() != 6):
            return date - datetime.timedelta(days=7)
    return date - datetime.timedelta(days=(date.weekday() - day) % 7)


def find_weeks(start, end):
    import datetime
    l = []
    for i in range((end - start).days + 1):
        d = (start + datetime.timedelta(days=i)).isocalendar()[:2]  # e.g. (2011, 52)
        yearweek = '{}{:02}'.format(*d)  # e.g. "201152"
        l.append(yearweek)
    return sorted(set(l))


# # Test Parameters


class get_test_parameter(generics.ListCreateAPIView):

    def post(self, request):
        try:
            import json as j
            from datetime import datetime
            data = j.loads(request.body)
            datas = data['data']
            testwindow_start = datas['testwindow_start']
            testwindow_end = datas['testwindow_end']
            prewindow_start = datas['prewinstrt']
            prewindow_end = datas['prewinend']
            region_name = request.META['HTTP_COUNTRY']
    
            config_cols = config_data[region_name]
            if 'confidence_level' in datas:
                confidence_level = datas['confidence_level']
            else:
                confidence_level = None
            if 'margin_of_error' in datas:
                margin_of_error = datas['margin_of_error']
            else:
                margin_of_error = None
            if 'num_test_stores' in datas:
                num_test_stores = datas['num_test_stores']
            else:
                num_test_stores = None
    
            if 'target_variable' in datas:
                target_variable = datas['target_variable']
            else:
                target_variable = None
    
            if 'banners' in datas:
                banners = datas['banners']
            else:
                banners = []
    
            if 'segments' in datas:
                segments = datas['store_segments']
            else:
                segments = None
    
            if 'store_segments' in datas:
                store_segments = datas['segments']
            else:
                store_segments = None
    
            if 'territories' in datas:
                territories = datas['territories']
            else:
                territories = None
    
            if 'categories' in datas:
                categories = datas['categories']
            else:
                categories = None
    
            if ((testwindow_start is not None) & (testwindow_end is not None) & (target_variable is not None) & (
                    len(banners) != 0)):
    
                tarvarmapping = config_cols["weekly_target_variable"]
                storemstrmapping = config_cols["store_mstr_columns"]
                metadata = config_cols["metadata"]
    
                annualrsvlifts = get_annual_rsv_lifts(target_variable=target_variable, business_categories=categories,
                                                      config=config_cols, regionName=region_name,
                                                      prewindow_start=prewindow_start,
                                                      prewindow_end=prewindow_end,
                                                      postwindow_start=testwindow_start,
                                                      postwindow_end=testwindow_end)
                filtered_population = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                        territories=territories, config=config_cols,regionName=region_name)
                annualrsvlifts = annualrsvlifts[annualrsvlifts[tarvarmapping["partner_id"]].isin(
                    filtered_population[storemstrmapping["partner_id"]].unique())]
    
                standard_deviation = annualrsvlifts[target_variable + " Lift"].std()
    
                if sum([v is not None for v in [confidence_level, margin_of_error, num_test_stores]]) == 2:
    
                    if confidence_level is None:
                        value1 = num_test_stores
                        confidence_level = round(1 - 2 * (1 - norm.cdf(
                            np.sqrt(value1 / 2) * (margin_of_error) / standard_deviation - norm.ppf(
                                metadata["test_configuration"]["power_of_test"]))), 2)
    
                        test_parameter = confidence_level
                        msg = ""
    
                    if margin_of_error is None:
                        value1 = num_test_stores
                        margin_of_error = round((norm.ppf((1 - (1 - confidence_level) / 2)) + norm.ppf(
                            metadata["test_configuration"]["power_of_test"])) * standard_deviation / (np.sqrt(value1 / 2)), 2)
    
                        test_parameter = margin_of_error
                        msg = ""
    
                    if num_test_stores is None:
    
                        value1 = 2 * np.power((norm.ppf((1 - (1 - confidence_level) / 2)) + norm.ppf(
                            metadata["test_configuration"]["power_of_test"])) * standard_deviation / (margin_of_error), 2)
                        num_test_stores = math.ceil(value1)
                        if num_test_stores < metadata["test_configuration"]["min_teststores"]:
                            test_parameter = metadata["test_configuration"]["min_teststores"]
                            msg = "Calculated samplesize is less than 30 (Minimum required samplesize).Hence we suggest 30 as the sample size."
                        else:
                            test_parameter = num_test_stores
                            msg = ""
                else:
                    test_parameter = "Please enter appropriate number of parameters"
                    return json.Response(test_parameter, False)
            else:
                test_parameter = "Please pass Target Variable"
                return json.Response(test_parameter, False)


            return json.Response(test_parameter, True)

        except:
            traceback.print_exc()


# # Utility functions

# In[43]:


# In[44]:


def get_total_weekly_target_data(target_variable=None, config=config):
    try:
        if target_variable is not None:

            sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                config['tables']['weekly_mstr']))
            weekly_target_variables_file = getRowResults(sql_query_wk, (1, 0))

            tarvarmapping = config["weekly_target_variable"]
            storemstrmapping = config["store_mstr_columns"]
            metadata = config["metadata"]

            yearweeks = weekly_target_variables_file[tarvarmapping["week"]].unique().tolist()
            yearweeks.sort(reverse=True)
            consideryearweeks = yearweeks[:metadata['test_configuration']["sales_weeks"]]
            consideryearweeks.sort(reverse=False)

            weekly_target_variables_file = weekly_target_variables_file[
                weekly_target_variables_file[tarvarmapping["week"]].isin(consideryearweeks)]

            return weekly_target_variables_file, consideryearweeks

        else:

            logger.debug("Please pass Target variable")

    except:

        traceback.print_exc()


# In[45]:


def get_annual_rsv_lifts_old(target_variable=None, config=config):
    start_time = time.perf_counter()

    tarvarmapping = config["weekly_target_variable"]
    storemstrmapping = config["store_mstr_columns"]
    metadata = config["metadata"]

    # Getting the the target varaibles file
    weekly_target_variables_file, consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable,
                                                                                   config=config)

    weeks1 = consideryearweeks[:metadata["rsv_lifts_sales_weeks"]]
    weeks2 = consideryearweeks[metadata["rsv_lifts_sales_weeks"]:]
    weeklyrsvdatayear1 = weekly_target_variables_file[weekly_target_variables_file[tarvarmapping["week"]].isin(weeks1)]
    weeklyrsvdatayear2 = weekly_target_variables_file[weekly_target_variables_file[tarvarmapping["week"]].isin(weeks2)]
    weeklyrsvdatayear1[tarvarmapping["year"]] = "Year1"
    weeklyrsvdatayear2[tarvarmapping["year"]] = "Year2"

    aggdict = {k: sum for k in [tarvarmapping["rsv"], tarvarmapping["volume"]]}
    groupbycolumns = [tarvarmapping["partner_id"]] + [tarvarmapping["banner"], tarvarmapping["segment"],
                                                      tarvarmapping["overall_segment"], tarvarmapping["territory"],
                                                      storemstrmapping["baycount"]] + [tarvarmapping["year"]]

    annualrsvdatayear1 = weeklyrsvdatayear1.groupby(groupbycolumns).agg(aggdict).reset_index()
    annualrsvdatayear2 = weeklyrsvdatayear2.groupby(groupbycolumns).agg(aggdict).reset_index()

    annualrsvdatayear1.rename(columns={tarvarmapping["rsv"]: 'RSV Year 1', tarvarmapping["volume"]: 'Volume Year 1'},
                              inplace=True)
    annualrsvdatayear2.rename(columns={tarvarmapping["rsv"]: 'RSV Year 2', tarvarmapping["volume"]: 'Volume Year 2'},
                              inplace=True)

    mergecols = [tarvarmapping["partner_id"]] + [tarvarmapping["banner"], tarvarmapping["segment"],
                                                 tarvarmapping["overall_segment"], tarvarmapping["territory"],
                                                 storemstrmapping["baycount"]]

    annualrsvdatamerged = annualrsvdatayear1.merge(annualrsvdatayear2, on=mergecols)
    annualrsvdatamerged.drop([tarvarmapping["year"] + "_x", tarvarmapping["year"] + "_y"], axis=1, inplace=True)

    rsvfilter = ((annualrsvdatamerged["RSV Year 1"] > 0) & (annualrsvdatamerged["RSV Year 2"] > 0))
    volumefilter = ((annualrsvdatamerged["Volume Year 1"] > 0) & (annualrsvdatamerged["Volume Year 2"] > 0))
    annualrsvdatamerged = annualrsvdatamerged[rsvfilter & volumefilter]

    annualrsvdatamerged["RSV Lift"] = (annualrsvdatamerged["RSV Year 2"] - annualrsvdatamerged["RSV Year 1"]) / \
                                      annualrsvdatamerged["RSV Year 1"]
    annualrsvdatamerged["Volume Lift"] = (annualrsvdatamerged["Volume Year 2"] - annualrsvdatamerged["Volume Year 1"]) / \
                                         annualrsvdatamerged["Volume Year 1"]

    logger.debug("get_annual_rsv_lifts--- %s seconds ---" % (time.perf_counter() - start_time))

    return annualrsvdatamerged

# In[46]:

class validate_data_availability(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        datas = data['data']
        testid = datas['test_id']
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        # Add New 26-10-2021
        prewindow_start = datas['prewindow_start']
        prewindow_end = datas['prewindow_end']
        postwindow_start = datas['postwindow_start']
        postwindow_end = datas['postwindow_end']

        if (testid is not None):
            sql_query_wk = ('''SELECT MAX(Week) as Week FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['weekly_mstr']))
            weekly_sales = getRowResults(sql_query_wk, (1, 0))
            max_year_week = weekly_sales[0]['Week']
            max_date_availibility = datetime.strptime(str(max_year_week) + '6', '%G%V%u').date()
            prewindow_start = datetime.strptime(prewindow_start, '%Y-%m-%d').date()
            prewindow_end = datetime.strptime(prewindow_end, '%Y-%m-%d').date()
            if prewindow_start > max_date_availibility or prewindow_end > max_date_availibility:
                return json.Response("Pre-Test Window Selected is outside the Data Availability, Sales Data available till - {}".format(
                    max_date_availibility), False)
            postwindow_start = datetime.strptime(postwindow_start, '%Y-%m-%d').date()
            postwindow_end = datetime.strptime(postwindow_end, '%Y-%m-%d').date()
            if postwindow_start > max_date_availibility or postwindow_end > max_date_availibility:
                return json.Response(
                    "Post-Test Window Selected is outside the Data Availability, Sales Data available till - {}".format(
                        max_date_availibility), False)

            return json.Response(1,True)
        else:
            return json.Response("Please pass TestId", False)
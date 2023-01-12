import io
import time

import numpy as np
import pandas as pd
import xlsxwriter
from django.core.cache import cache
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from scipy import stats
from api.helpers import getSingleRecordResult, getRowResults, executeDML, find_weeks, executeManyDML
from api.models import *
from api import json
from datetime import datetime
import traceback

from api.teststores import update_stepIndex, save_notification
import config.config_data as config
import datetime
from django.http import HttpResponse
from api.serializers import AuthSeralizer, TestSerializer
import logging

logger = logging.getLogger(__name__)

config_data = config.data


class get_target_variable_analysis_results(generics.ListCreateAPIView):

    def post(self, request):
        start_time = time.process_time()
        try:

            import json as j
            data = j.loads(request.body)
            test_id = data["test_id"]
            preperiod_start = data["preperiod_start"]
            preperiod_end = data["preperiod_end"]
            postperiod_start = data["postperiod_start"]
            postperiod_end = data["postperiod_end"]
            # mesmetric_name = data["mesmetric_name"]

            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            target_variable = data["mesmetric_name"]
            teststores = data['test_stores']

            if 'categories' in data:
                categories = data['categories']
            else:
                categories = []
            test_type = data['test_type']
            control_stores_sales_method = 'Approach1'

            if (test_id is not None):

                target_variable_analysis_dict_filtered = {}
                target_variable_analysis_dict_actual = {}

                # Reading the files
                queryStoreMaster = StoreMstr.objects.filter(is_active=True, is_deleted=False).values()
                stores_master_df = pd.DataFrame(queryStoreMaster)

                queryTestStoreMap = TestStoreMap.objects.filter(is_active=True, is_deleted=False).values()
                teststore_map_df = pd.DataFrame(queryTestStoreMap)

                queryMeasurement = MeasurementTbl.objects.filter(is_active=True, is_deleted=False, test_id=test_id).values()
                test_measurement_table = pd.DataFrame(queryMeasurement)

                queryControlStores = ControlStoreMstr.objects.filter(test_id=test_id, checked_flag=1, is_active=True, is_deleted=False).values()
                test_control_mapping_stores = pd.DataFrame(queryControlStores)

                tarvarmapping = config_cols["weekly_target_variable"]
                storemstrmapping = config_cols["store_mstr_columns"]
                metadata = config_cols["metadata"]
                target_variable_filtered = target_variable

                # Download Required columns
                requiredcols = metadata['test_measurement']["testmeasurement_columns"]
                teststores_columns_rename_dict = {val: "Teststore " + val for val in requiredcols if
                                                  val not in [storemstrmapping["partner_id"],
                                                              storemstrmapping["banner"]]}
                controlstores_columns_rename_dict = {val: "Controlstore " + val for val in requiredcols if
                                                     val not in [storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]]}

                # Getting the parameters from the Test Measurement Table based on Testid
                test_measurement_table = test_measurement_table[test_measurement_table["test_id_id"] == test_id]

                # rawconversionfactors

                rawconvfactors = metadata["test_configuration"]["rawconvfactors"]

                if len(test_measurement_table) > 0:

                    target_variable_actual = test_measurement_table["mesmetric_name"].values[0]
                    if test_type != 'RTM Impact Test':
                        rsv_estimate = int(test_measurement_table["rsv_estimate"].values[0])
                        cost = test_measurement_table["cost"].values[0]

                    prewindow_target_data_actual, postwindow_target_data_actual, pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(
                        test_id=test_id, target_variable=target_variable_actual, tarvarmapping=tarvarmapping, test_measurement_table=test_measurement_table,
                        business_categories=categories, config=config_cols)
                    prewindow_target_data_filtered, postwindow_target_data_filtered, pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(
                        test_id=test_id, target_variable=target_variable_filtered,tarvarmapping=tarvarmapping, test_measurement_table=test_measurement_table,
                        business_categories=categories, config=config_cols)

                    if (len(prewindow_target_data_actual) > 0) & (len(prewindow_target_data_actual) > 0):

                        prewindow_target_data_grouped_actual = (prewindow_target_data_actual.groupby(
                            [tarvarmapping["partner_id"], tarvarmapping["banner"]])[target_variable_actual].sum() / len(
                            pre_window_weeknumbers)).reset_index()
                        postwindow_target_data_grouped_actual = (postwindow_target_data_actual.groupby(
                            [tarvarmapping["partner_id"], tarvarmapping["banner"]])[target_variable_actual].sum() / len(
                            post_window_weeknumbers)).reset_index()
                        prewindow_target_data_grouped_filtered = (prewindow_target_data_filtered.groupby(
                            [tarvarmapping["partner_id"], tarvarmapping["banner"]])[
                                                                      target_variable_filtered].sum() / len(
                            pre_window_weeknumbers)).reset_index()
                        postwindow_target_data_grouped_filtered = (postwindow_target_data_filtered.groupby(
                            [tarvarmapping["partner_id"], tarvarmapping["banner"]])[
                                                                       target_variable_filtered].sum() / len(
                            post_window_weeknumbers)).reset_index()

                        test_control_stores = test_control_mapping_stores[
                            test_control_mapping_stores["test_id_id"] == test_id]
                        test_control_stores = test_control_stores[
                            test_control_stores["Test_store_" + tarvarmapping["partner_id"]].isin(
                                teststore_map_df["teststore_id"].values.tolist())]

                        if len(test_control_stores) > 0:

                            test_control_stores_actual = test_control_stores.copy(deep=True)
                            if len(teststores) > 0:
                                test_control_stores_filtered = test_control_stores[
                                    test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(
                                        teststores)]
                            else:
                                test_control_stores_filtered = test_control_stores.copy(deep=True)
                            # Storelevel lift results
                            if region_name == 'DEMO':
                                test_control_stores_actual = get_storelevel_liftresults_UK(
                                    test_control_stores=test_control_stores_actual,
                                    prewindow_target_data_grouped=prewindow_target_data_grouped_actual,
                                    postwindow_target_data_grouped=postwindow_target_data_grouped_actual,
                                    target_variable=target_variable_actual,
                                    control_stores_sales_method=control_stores_sales_method, test_type=test_type, config=config_cols)

                                test_control_stores_filtered = get_storelevel_liftresults_UK(
                                    test_control_stores=test_control_stores_filtered,
                                    prewindow_target_data_grouped=prewindow_target_data_grouped_filtered,
                                    postwindow_target_data_grouped=postwindow_target_data_grouped_filtered,
                                    target_variable=target_variable_filtered,
                                    control_stores_sales_method=control_stores_sales_method, test_type=test_type, config=config_cols)
                            else:
                                test_control_stores_actual = get_storelevel_liftresults(
                                    test_control_stores=test_control_stores_actual,
                                    prewindow_target_data_grouped=prewindow_target_data_grouped_actual,
                                    postwindow_target_data_grouped=postwindow_target_data_grouped_actual,
                                    target_variable=target_variable_actual, config=config_cols)

                                test_control_stores_filtered = get_storelevel_liftresults(
                                    test_control_stores=test_control_stores_filtered,
                                    prewindow_target_data_grouped=prewindow_target_data_grouped_filtered,
                                    postwindow_target_data_grouped=postwindow_target_data_grouped_filtered,
                                    target_variable=target_variable_filtered, config=config_cols)

                            # Pvalue calculation
                            tStat, pVal = stats.ttest_ind(
                                test_control_stores_actual["Test group - Pre vs Post change"].values,
                                test_control_stores_actual["Control group - Pre vs Post change"].values,
                                nan_policy='omit')

                            control_pre_mean_actual = round(
                                test_control_stores_actual["Control group - Pre Period Average"].mean(), 2)
                            control_post_mean_actual = round(
                                test_control_stores_actual["Control group - Post Period Average"].mean(), 2)
                            control_change_percentage_actual = round(
                                ((control_post_mean_actual - control_pre_mean_actual) / control_pre_mean_actual) * 100,
                                2)
                            test_pre_mean_actual = round(
                                test_control_stores_actual["Test group - Pre Period Average"].mean(), 2)
                            test_post_mean_actual = round(
                                test_control_stores_actual["Test group - Post Period Average"].mean(), 2)
                            test_change_percentage_actual = round(
                                ((test_post_mean_actual - test_pre_mean_actual) / test_pre_mean_actual) * 100, 2)
                            if region_name == 'UK':
                                test_vs_control_change_actual = round(
                                    test_control_stores_actual["Test vs Control change(in %)"].mean(), 2)
                            else:
                                test_vs_control_change_actual = round(
                                    (test_change_percentage_actual - control_change_percentage_actual), 2)

                            control_pre_mean_filtered = round(
                                test_control_stores_filtered["Control group - Pre Period Average"].mean(), 2)
                            control_post_mean_filtered = round(
                                test_control_stores_filtered["Control group - Post Period Average"].mean(), 2)
                            control_change_percentage_filtered = round(((
                                                                                    control_post_mean_filtered - control_pre_mean_filtered) / control_pre_mean_filtered) * 100,
                                                                       2)
                            test_pre_mean_filtered = round(
                                test_control_stores_filtered["Test group - Pre Period Average"].mean(), 2)
                            test_post_mean_filtered = round(
                                test_control_stores_filtered["Test group - Post Period Average"].mean(), 2)
                            test_change_percentage_filtered = round(
                                ((test_post_mean_filtered - test_pre_mean_filtered) / test_pre_mean_filtered) * 100, 2)

                            # Putting the calculated values in the dictionary
                            target_variable_analysis_dict_actual["control_pre_mean"] = control_pre_mean_actual
                            target_variable_analysis_dict_actual["control_post_mean"] = control_post_mean_actual
                            target_variable_analysis_dict_actual[
                                "control_change_percentage"] = control_change_percentage_actual
                            target_variable_analysis_dict_actual["test_pre_mean"] = test_pre_mean_actual
                            target_variable_analysis_dict_actual["test_post_mean"] = test_post_mean_actual
                            target_variable_analysis_dict_actual[
                                "test_change_percentage"] = test_change_percentage_actual
                            target_variable_analysis_dict_actual[
                                "test_vs_control_change"] = test_vs_control_change_actual
                            target_variable_analysis_dict_actual["PValue"] = round(pVal, 2)

                            # Putting the calculated values in the dictionary
                            target_variable_analysis_dict_filtered["control_pre_mean"] = control_pre_mean_filtered
                            target_variable_analysis_dict_filtered["control_post_mean"] = control_post_mean_filtered
                            target_variable_analysis_dict_filtered[
                                "control_change_percentage"] = control_change_percentage_filtered
                            target_variable_analysis_dict_filtered["test_pre_mean"] = test_pre_mean_filtered
                            target_variable_analysis_dict_filtered["test_post_mean"] = test_post_mean_filtered
                            target_variable_analysis_dict_filtered[
                                "test_change_percentage"] = test_change_percentage_filtered
                            target_variable_analysis_dict_filtered["test_vs_control"] = sorted(
                                test_control_stores_filtered["Test vs Control change(in %)"].fillna(0).values.tolist(),
                                reverse=True)

                            # Dollar sales and lift
                            if test_type != 'RTM Impact Test':
                                bannerwisestoresdict = test_control_stores_actual.groupby("Test_store_" + storemstrmapping["banner"])[
                                    "Test_store_" + storemstrmapping["partner_id"]].nunique().to_dict()
                                numerator = sum([bannerwisestoresdict[k] * v for k, v in rawconvfactors.items() if
                                                 k in bannerwisestoresdict.keys()])
                                denominator = sum(list(bannerwisestoresdict.values()))
                                conversionfactor = numerator / denominator

                                inc_rsv_lift = (target_variable_analysis_dict_actual["test_vs_control_change"] / 100) * rsv_estimate
                                inc_mac_lift = inc_rsv_lift * conversionfactor
                                earnings = inc_mac_lift - int(cost)
                                costoutput = cost

                                target_variable_analysis_dict_actual["inc_rsv_lift"] = inc_rsv_lift
                                target_variable_analysis_dict_actual["inc_mac_lift"] = inc_mac_lift
                                target_variable_analysis_dict_actual["earnings"] = earnings
                                target_variable_analysis_dict_actual["cost"] = costoutput
                            if region_name == 'DEMO':
                                test_control_stores_actual = prepare_test_measurement_columns_UK(
                                    test_control_stores=test_control_stores_actual,
                                    stores_master_df=stores_master_df,
                                    test_type=test_type,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)

                                test_control_stores_filtered = prepare_test_measurement_columns_UK(
                                    test_control_stores=test_control_stores_filtered,
                                    stores_master_df=stores_master_df,
                                    test_type=test_type,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)
                            else:
                                test_control_stores_actual = prepare_test_measurement_columns(
                                    test_control_stores=test_control_stores_actual,
                                    stores_master_df=stores_master_df,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)

                                test_control_stores_filtered = prepare_test_measurement_columns(
                                    test_control_stores=test_control_stores_filtered,
                                    stores_master_df=stores_master_df,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)

                            test_control_stores_filtered["Test vs (Control-Average)"] = test_control_stores_filtered[
                                                                                            "Test group - Pre vs Post change(in %)"] - control_change_percentage_filtered

                            target_variable_analysis_dict_filtered["Test_store_Partner_ID_backup"] = \
                            test_control_stores_filtered.sort_values(by="Test vs Control change(in %)",
                                                                     ascending=False)[
                                config_cols["Test_store_Partner_ID_backup"]].values.tolist()
                            target_variable_analysis_dict_filtered["Test vs (Control-Average)"] = \
                            test_control_stores_filtered.sort_values(by="Test vs Control change(in %)",ascending=False)["Test vs (Control-Average)"].fillna(0).values.tolist()

                            results = {
                                "test_stores_actual": test_control_stores_actual.fillna(0).reset_index().to_json(orient='records'),
                                "test_stores_filtered": test_control_stores_filtered.fillna(0).reset_index().to_json(orient='records'),
                                "target_variable_actual": target_variable_analysis_dict_actual,
                                "target_variable_filtered": target_variable_analysis_dict_filtered
                            }
                            #saveTestData(gross_change=target_variable_analysis_dict_actual['test_vs_control_change'], test_id=test_id, region_name=region_name)
                            saveTestData(gross_change=target_variable_analysis_dict_actual['test_vs_control_change'],test_id=test_id)
                            return json.Response(results, True)
                        else:
                            return json.Response("Couldn't find matching Test-Control Stores for the given test id",False)
                    else:
                        return json.Response("Couldn't find target variable data in the given timeframes",False)
                else:
                    return json.Response("Couldn't find the Test details for the test id",False)
            else:
                return json.Response("Please pass appropriate parameters",False)

        except:
            traceback.print_exc()


def get_storelevel_liftresults(test_control_stores=None,prewindow_target_data_grouped=None,postwindow_target_data_grouped=None,target_variable=None, config=None):

    tarvarmapping = config["weekly_target_variable"]
    storemstrmapping = config["store_mstr_columns"]

    test_control_stores = test_control_stores.merge(prewindow_target_data_grouped,
                                                    left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                             "Test_store_" + storemstrmapping["banner"]],
                                                    right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                    how="left")
    test_control_stores.drop([tarvarmapping["partner_id"] + "_y", tarvarmapping["banner"] + "_y"], axis=1, inplace=True)
    test_control_stores.rename(columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                        storemstrmapping["banner"] + "_x": storemstrmapping["banner"]}, inplace=True)
    test_control_stores.rename(columns={target_variable: "Test group - Pre Period Average"}, inplace=True)
    test_control_stores["Test group - Pre Period Average"] = test_control_stores[
        "Test group - Pre Period Average"].round(2)

    test_control_stores = test_control_stores.merge(postwindow_target_data_grouped,
                                                    left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                             "Test_store_" + storemstrmapping["banner"]],
                                                    right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                    how="left")
    test_control_stores.drop([tarvarmapping["partner_id"] + "_y", tarvarmapping["banner"] + "_y"], axis=1, inplace=True)
    test_control_stores.rename(columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                        storemstrmapping["banner"] + "_x": storemstrmapping["banner"]}, inplace=True)
    test_control_stores.rename(columns={target_variable: "Test group - Post Period Average"}, inplace=True)
    test_control_stores["Test group - Post Period Average"] = test_control_stores[
        "Test group - Post Period Average"].round(2)

    test_control_stores = test_control_stores.merge(prewindow_target_data_grouped,
                                                    left_on=[storemstrmapping["partner_id"],
                                                             storemstrmapping["banner"]],
                                                    right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                    how="left")
    test_control_stores.rename(columns={target_variable: "Control group - Pre Period Average"}, inplace=True)
    test_control_stores["Control group - Pre Period Average"] = test_control_stores[
        "Control group - Pre Period Average"].round(2)

    test_control_stores = test_control_stores.merge(postwindow_target_data_grouped,
                                                    left_on=[storemstrmapping["partner_id"],
                                                             storemstrmapping["banner"]],
                                                    right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                    how="left")
    test_control_stores.rename(columns={target_variable: "Control group - Post Period Average"}, inplace=True)
    test_control_stores["Control group - Post Period Average"] = test_control_stores[
        "Control group - Post Period Average"].round(2)

    test_control_stores["Variable"] = target_variable
    test_control_stores["Test group - Pre vs Post change"] = test_control_stores["Test group - Post Period Average"] - \
                                                             test_control_stores["Test group - Pre Period Average"]
    test_control_stores["Control group - Pre vs Post change"] = test_control_stores[
                                                                    "Control group - Post Period Average"] - \
                                                                test_control_stores[
                                                                    "Control group - Pre Period Average"]
    test_control_stores["Test group - Pre vs Post change(in %)"] = ((test_control_stores[
                                                                         "Test group - Post Period Average"] -
                                                                     test_control_stores[
                                                                         "Test group - Pre Period Average"]) /
                                                                    test_control_stores[
                                                                        "Test group - Pre Period Average"]) * 100
    test_control_stores["Control group - Pre vs Post change(in %)"] = ((test_control_stores[
                                                                            "Control group - Post Period Average"] -
                                                                        test_control_stores[
                                                                            "Control group - Pre Period Average"]) /
                                                                       test_control_stores[
                                                                           "Control group - Pre Period Average"]) * 100
    test_control_stores["Test vs Control change(in %)"] = test_control_stores["Test group - Pre vs Post change(in %)"] - \
                                                          test_control_stores[
                                                              "Control group - Pre vs Post change(in %)"]
    test_control_stores["Test group - Pre vs Post change"] = test_control_stores[
        "Test group - Pre vs Post change"].round(2)
    test_control_stores["Control group - Pre vs Post change"] = test_control_stores[
        "Control group - Pre vs Post change"].round(2)
    test_control_stores["Test group - Pre vs Post change(in %)"] = test_control_stores[
        "Test group - Pre vs Post change(in %)"].round(2)
    test_control_stores["Control group - Pre vs Post change(in %)"] = test_control_stores[
        "Control group - Pre vs Post change(in %)"].round(2)
    test_control_stores["Test vs Control change(in %)"] = test_control_stores["Test vs Control change(in %)"].round(2)
    return test_control_stores


def get_weekly_targetvariables_data(test_id=None, target_variable=None, tarvarmapping=None, test_measurement_table=None, business_categories=[], config=None):
    start_time = time.process_time()

    try:
        weekly_target_master = config['tables']['weekly_mstr']
        if cache.get(weekly_target_master) is None:
            sql_query_wk = (
                '''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config['tables']['weekly_mstr']))
            cache.set(weekly_target_master, getRowResults(sql_query_wk, (1, 0)))

        weekly_target_data = pd.DataFrame(cache.get(weekly_target_master))

        if target_variable in weekly_target_data.columns.tolist():
            if len(business_categories) != 0:
                business_categories_columns = [val + " " + target_variable for val in business_categories]
                weekly_target_data[target_variable] = weekly_target_data[business_categories_columns].sum(axis=1)

            prewindow_start = str(test_measurement_table["preperiod_start"].values[0])
            prewindow_end = str(test_measurement_table["preperiod_end"].values[0])
            postwindow_start = str(test_measurement_table["postperiod_start"].values[0])
            postwindow_end = str(test_measurement_table["postperiod_end"].values[0])

            pre_window_weeknumbers = find_weeks(datetime.datetime.strptime(prewindow_start, '%Y-%m-%d').date(),
                                                datetime.datetime.strptime(prewindow_end, '%Y-%m-%d').date())

            post_window_weeknumbers = find_weeks(datetime.datetime.strptime(postwindow_start, '%Y-%m-%d').date(),
                                                 datetime.datetime.strptime(postwindow_end, '%Y-%m-%d').date())

            prewindow_filter = (weekly_target_data[tarvarmapping["week"]].isin(pre_window_weeknumbers))
            postwindow_filter = (weekly_target_data[tarvarmapping["week"]].isin(post_window_weeknumbers))
            prewindow_target_data = weekly_target_data[prewindow_filter][
                [tarvarmapping["partner_id"], tarvarmapping["banner"], tarvarmapping["week"], target_variable]]
            postwindow_target_data = weekly_target_data[postwindow_filter][
                [tarvarmapping["partner_id"], tarvarmapping["banner"], tarvarmapping["week"], target_variable]]

            return prewindow_target_data, postwindow_target_data, pre_window_weeknumbers, post_window_weeknumbers

        else:
            return "Couldn't find Target Variable in the data"
    except:
        traceback.print_exc()

class ExploratoryAnalysisResults(generics.ListCreateAPIView):

    def post(self, request):
        start_time = time.process_time()
        import json as j
        data = j.loads(request.body)
        test_id = data["test_id"]
        preperiod_start = data["preperiod_start"]
        preperiod_end = data["preperiod_end"]
        postperiod_start = data["postperiod_start"]
        postperiod_end = data["postperiod_end"]
        teststores = data["teststores"]
    
        target_variable = data["target_variable"]
    
    
        if 'categories' in data:
            categories = data['categories']
        else:
            categories = []
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
    
        if len(teststores) == 0:
            teststores = []
            test_storemap_id_sql = "SELECT * FROM {} WHERE test_id_id=? and is_active=? and is_deleted=?".format(config_cols['tables']['test_store_map'])
            teststores_map = getRowResults(test_storemap_id_sql, (test_id, True, False))
            teststores = []
            for teststore_element in teststores_map:
                teststores.append(teststore_element['teststore_id'])

        try:
            if (test_id is not None) & (len(teststores) != 0) & (target_variable is not None):

                exploratory_analysis_dict = {}

                # Reading the files
                sql_store_mstr = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['store_mstr']))
                stores_master_df = pd.DataFrame(getRowResults(sql_store_mstr, (1, 0)))
    
                sql_test_measurement = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and test_id_id=? '''.format(config_cols['tables']['measurement']))
                test_measurement_table = pd.DataFrame(getRowResults(sql_test_measurement, (1, 0,test_id)))
    
                sql_test_map = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and test_id_id=? '''.format(config_cols['tables']['test_store_map']))
                teststore_map_df = pd.DataFrame(getRowResults(sql_test_map, (1, 0,test_id)))
    
                if teststore_map_df.empty:
                    teststore_map_df = pd.DataFrame(columns=['storemap_id', 'test_id_id', 'teststore_id'])
    
                sql_test_control_store = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? and checked_flag=? and test_id_id=? '''.format(
                    config_cols['tables']['control_store_mstr']))
                test_control_mapping_stores = pd.DataFrame(getRowResults(sql_test_control_store, (1, 0, 1, test_id)))
                tarvarmapping = config_cols["weekly_target_variable"]
                storemstrmapping = config_cols["store_mstr_columns"]
                metadata = config_cols["metadata"]
    
                # Download Required columns
                requiredcols = metadata["testmeasurement_columns"]
                teststores_columns_rename_dict = {val: "Teststore " + val for val in requiredcols if val not in [storemstrmapping["partner_id"], storemstrmapping["banner"]]}
                controlstores_columns_rename_dict = {val: "Controlstore " + val for val in requiredcols if
                                                     val not in [storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]]}
    
                if len(test_measurement_table) > 0:
                    prewindow_target_data, postwindow_target_data = get_weekly_targetvariables_data(test_id=test_id,
                                                                                                    target_variable=target_variable,tarvarmapping=tarvarmapping,
                                                                                                    test_measurement_table=test_measurement_table, business_categories=categories, config=config_cols)
    
                    if (len(prewindow_target_data) > 0) & (len(postwindow_target_data) > 0):
                        prewindow_target_data_grouped = \
                        prewindow_target_data.groupby([tarvarmapping["partner_id"], tarvarmapping["banner"]])[
                            target_variable].mean().reset_index()
                        postwindow_target_data_grouped = \
                        postwindow_target_data.groupby([tarvarmapping["partner_id"], tarvarmapping["banner"]])[
                            target_variable].mean().reset_index()
    
                        test_control_stores = test_control_mapping_stores[test_control_mapping_stores["test_id_id"] == test_id]
                        test_control_stores = test_control_stores[
                            test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(
                                teststore_map_df["teststore_id"].values.tolist())]
    
                        if len(test_control_stores) > 0:

                            test_control_stores = test_control_stores[
                                test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(teststores)]
    
                            if len(test_control_stores) > 0:
                                # Storelevel lift results
                                test_control_stores = get_storelevel_liftresults(test_control_stores=test_control_stores,
                                                                                 prewindow_target_data_grouped=prewindow_target_data_grouped,
                                                                                 postwindow_target_data_grouped=postwindow_target_data_grouped,
                                                                                 target_variable=target_variable, config=config_cols)
    
                                # Pvalue calculation
                                tStat, pVal = stats.ttest_ind(test_control_stores["Test group - Pre vs Post change"].values,
                                                              test_control_stores[
                                                                  "Control group - Pre vs Post change"].values,
                                                              nan_policy='omit')
    
                                control_pre_mean = round(test_control_stores["Control group - Pre Period Average"].mean(),
                                                         2)
                                control_post_mean = round(test_control_stores["Control group - Post Period Average"].mean(),
                                                          2)
                                control_change_percentage = round(
                                    ((control_post_mean - control_pre_mean) / control_pre_mean) * 100, 2)
                                test_pre_mean = round(test_control_stores["Test group - Pre Period Average"].mean(), 2)
                                test_post_mean = round(test_control_stores["Test group - Post Period Average"].mean(), 2)
                                test_change_percentage = round(((test_post_mean - test_pre_mean) / test_pre_mean) * 100, 2)
                                test_vs_control_change = round((test_change_percentage - control_change_percentage), 2)
    
                                # Putting the calculated values in the dictionary
                                exploratory_analysis_dict["control_pre_mean"] = control_pre_mean
                                exploratory_analysis_dict["control_post_mean"] = control_post_mean
                                exploratory_analysis_dict["control_change_percentage"] = control_change_percentage
                                exploratory_analysis_dict["test_pre_mean"] = test_pre_mean
                                exploratory_analysis_dict["test_post_mean"] = test_post_mean
                                exploratory_analysis_dict["test_change_percentage"] = test_change_percentage
                                exploratory_analysis_dict["test_vs_control_change"] = test_vs_control_change
                                # exploratory_analysis_dict["PValue"] = round(pVal, 2)
                                exploratory_analysis_dict["test_vs_control"] = sorted(
                                    test_control_stores["Test vs Control change(in %)"].values.tolist(), reverse=True)
    
                                test_control_stores = prepare_test_measurement_columns(
                                    test_control_stores=test_control_stores,
                                    stores_master_df=stores_master_df,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)
                                test_control_stores = test_control_stores.sort_values(by="Test vs Control change(in %)",
                                                                                      ascending=False)
                                test_control_stores = test_control_stores.replace(
                                    {np.NaN: 'null', np.inf: 'null', -np.inf: 'null'})
    
                                exploratory_analysis_dict["test_vs_control"] = test_control_stores[
                                    "Test vs Control change(in %)"].values.tolist()
                                Test_store_Partner_ID = 'Test_store_' + config_cols['store_mstr_columns']['partner_id']
                                exploratory_analysis_dict["Test_store_Partner_ID"] = test_control_stores[
                                    Test_store_Partner_ID].values.tolist()
                                exploratory_analysis_dict["Test_store_Partner_ID_backup"] = test_control_stores.sort_values(by="Test vs Control change(in %)", ascending=False)[
                                    config_cols["Test_store_Partner_ID_backup"]].values.tolist()

                                return json.Response(exploratory_analysis_dict, True)
                            else:
                                return json.Response("Couldn't find the given test stores", False)
                        else:
                            return json.Response("Couldn't find matching Test-Control Stores for the given test id", False)
                    else:
                        return json.Response("Couldn't find target variable data in the given timeframes", False)
                else:
                    return json.Response("Couldn't find the Test details for the test id", False)
            else:
                return json.Response("Please pass appropriate parameters", False)
        except:
            traceback.print_exc()


def prepare_test_measurement_columns(test_control_stores=None, stores_master_df=None, requiredcols=None, storemstrmapping=None, teststores_columns_rename_dict=None, controlstores_columns_rename_dict=None):
    try:
        test_control_stores = test_control_stores.merge(stores_master_df[requiredcols],
                                                        left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                 "Test_store_" + storemstrmapping["banner"]],
                                                        right_on=[storemstrmapping["partner_id"],
                                                                  storemstrmapping["banner"]],
                                                        how="left")
        test_control_stores.drop([storemstrmapping["partner_id"] + "_y", storemstrmapping["banner"] + "_y"], axis=1,
                                 inplace=True)
        test_control_stores.rename(columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                            storemstrmapping["banner"] + "_x": storemstrmapping["banner"]},
                                   inplace=True)
        test_control_stores.rename(columns=teststores_columns_rename_dict, inplace=True)

        test_control_stores = test_control_stores.merge(stores_master_df[requiredcols],
                                                        left_on=[storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]],
                                                        right_on=[storemstrmapping["partner_id"],
                                                                  storemstrmapping["banner"]],
                                                        how="left")
        test_control_stores.rename(columns=controlstores_columns_rename_dict, inplace=True)

        return test_control_stores

    except:
        traceback.print_exc()


class decide_go_nogo(generics.ListCreateAPIView):

    def post(self, request):
        start_time = time.process_time()
        import json as j
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        data = j.loads(request.body)
        test_id = data["test_id"]
    
        headers = request.META['HTTP_AUTHORIZATION']
        split_token = headers.split('Bearer ')
        jwt_token = split_token[1]
        get_user = AuthTokenMstr.objects.get(jwt_token=jwt_token)
        user_data = AuthSeralizer(get_user)
        user_id = user_data.data['user_id']

        if 'categories' in data:
            categories = data['categories']
        else:
            categories = []

        try:
            if test_id is not None:

                # Reading the files
                querysetStoreMaster = StoreMstr.objects.filter(is_active=True, is_deleted=False).values()
                stores_master_df = pd.DataFrame(querysetStoreMaster)

                Allmeasurementstores = MeasurementTbl.objects.filter(is_active=True, is_deleted=False, test_id=test_id).values()
                test_measurement_table = pd.DataFrame(Allmeasurementstores)

                Allcontrolstores = ControlStoreMstr.objects.filter(test_id=test_id, checked_flag=1, is_active=True, is_deleted=False).values()
                test_control_mapping_stores = pd.DataFrame(Allcontrolstores)

                Alltestmap = TestStoreMap.objects.filter(is_active=True, is_deleted=False).values()
                teststore_map_df = pd.DataFrame(Alltestmap)

                tarvarmapping = config_cols["weekly_target_variable"]
                storemstrmapping = config_cols["store_mstr_columns"]
                metadata = config_cols["metadata"]
    
                # Download Required columns
                requiredcols = metadata['test_measurement']["testmeasurement_columns"]
                teststores_columns_rename_dict = {val: "Teststore " + val for val in requiredcols if val not in [storemstrmapping["partner_id"], storemstrmapping["banner"]]}
                controlstores_columns_rename_dict = {val: "Controlstore " + val for val in requiredcols if
                                                     val not in [storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]]}
    
                if len(test_measurement_table) > 0:
                        target_variable = str(test_measurement_table["mesmetric_name"].values[0])
                        # breakeven_lift = str(test_measurement_table["break_even_lift"].values[0])
                        breakeven_lift = str(data["breakeven_lift"])
                        prewindow_target_data, postwindow_target_data,pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(test_id=test_id, target_variable=target_variable, tarvarmapping=tarvarmapping, test_measurement_table=test_measurement_table, business_categories=categories, config=config_cols)
    
                        if (len(prewindow_target_data) > 0) & (len(postwindow_target_data) > 0):
    
                            prewindow_target_data_grouped =prewindow_target_data.groupby([tarvarmapping["partner_id"], tarvarmapping["banner"]])[target_variable].mean().reset_index()
                            postwindow_target_data_grouped =postwindow_target_data.groupby([tarvarmapping["partner_id"], tarvarmapping["banner"]])[target_variable].mean().reset_index()
                            # test_control_stores = test_control_mapping_stores[test_control_mapping_stores["test_id_id"] == test_id]
                            test_control_stores = test_control_mapping_stores[test_control_mapping_stores["Test_store_" + storemstrmapping["partner_id"]].isin(teststore_map_df["teststore_id"].values.tolist())]
                            if len(test_control_stores) > 0:
    
                                # Storelevel lift results
                                test_control_stores = get_storelevel_liftresults_UK(test_control_stores=test_control_stores,
                                                                                 prewindow_target_data_grouped=prewindow_target_data_grouped,
                                                                                 postwindow_target_data_grouped=postwindow_target_data_grouped,
                                                                                 target_variable=target_variable,config=config_cols)
    
                                mean_changepercent = test_control_stores["Test vs Control change(in %)"].mean()
    
                                # Pooled std calculation
                                stdev_changepercent_1 = test_control_stores["Test group - Pre vs Post change(in %)"].std()
                                stdev_changepercent_2 = test_control_stores["Control group - Pre vs Post change(in %)"].std()
                                noofdatapoints1 = test_control_stores.shape[0]
                                noofdatapoints2 = test_control_stores.shape[0]
                                pooled_stdev_numerator = ((noofdatapoints1 - 1) * np.power(stdev_changepercent_1, 2) + (
                                            noofdatapoints2 - 1) * np.power(stdev_changepercent_2, 2))
                                pooled_stdev_denominator = (noofdatapoints1 + noofdatapoints2 - 2)
                                pooled_stdev = np.sqrt(pooled_stdev_numerator / pooled_stdev_denominator)
    
                                stderr = pooled_stdev / np.sqrt(test_control_stores.shape[0])

    
                                probability = round(1 - stats.norm.cdf(float(breakeven_lift), mean_changepercent, stderr), 2)
    
                                if(probability >= metadata['test_measurement']["probability_thresholds"][1]) & (probability <= metadata['test_measurement']["probability_thresholds"][2]):
                                    decision = "Implement the change"
                                elif (probability >= metadata['test_measurement']["probability_thresholds"][0]) & (probability < metadata['test_measurement']["probability_thresholds"][1]):
                                    decision = "Can Implement the change with caution"
                                else:
                                    decision = "Do not implement the change"

                                results = {
                                    "probability": probability,
                                    "decision": decision
                                }
                                update_stepIndex(7, test_id, config_cols)
                                save_notification(test_id, 'is completed. Have a look at', user_id, 'test_complete', region_name)
                                return json.Response(results,True)
                            else:
                                return json.Response("Couldn't find matching Test-Control Stores for the given test id", False)
                        else:
                          return json.Response("Couldn't find target variable data in the given timeframes", False)
                else:
                    return json.Response("Couldn't find the Test details for the test id", False)
            else:
                return json.Response("Please pass appropriate parameters", False)
        except:
            traceback.print_exc()

class get_test_vs_control_linegraph(generics.ListCreateAPIView):

    def post(self, request):
        start_time = time.process_time()
        import json as j
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        data = j.loads(request.body)
        test_id = data["test_id"]
        teststores = data["teststores"]
        target_variable = data["targetVariable"]
        if 'categories' in data:
            categories = data['categories']
        else:
            categories = []
        test_type = data['test_type']
        control_stores_sales_method = 'Approach1'
        try:
            if (test_id is not None) & (target_variable is not None):
    
                timeseries_dict = {}
    
                # Reading the files
                #sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                #    config_cols['tables']['store_mstr']))
                # stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
                # weekly_target_data = pd.DataFrame(cache.get(config_cols['tables']['weekly_mstr']))

                measurement_sql = MeasurementTbl.objects.filter(is_active=True, is_deleted=False, test_id=test_id).values()
                test_measurement_table = pd.DataFrame(measurement_sql)

                control_str_mstr_sql = ControlStoreMstr.objects.filter(test_id=test_id, checked_flag=1, is_active=True, is_deleted=False).values()
                test_control_mapping_stores = pd.DataFrame(control_str_mstr_sql)

                sql_teststore_map = TestStoreMap.objects.filter(test_id=test_id,is_active=True, is_deleted=False).values()
                teststore_map_df = pd.DataFrame(sql_teststore_map)

                # measurement_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=? and test_id_id=?".format(config_cols['tables']['measurement'])
                # test_measurement_table = pd.DataFrame(getRowResults(measurement_sql, (True, False, test_id)))
                #
                # control_str_mstr_sql = "SELECT * FROM {} WHERE test_id_id=? and checked_flag=? and is_active=? and is_deleted=?".format(config_cols['tables']['control_store_mstr'])
                # test_control_mapping_stores = pd.DataFrame(getRowResults(control_str_mstr_sql, (test_id, 1, True, False)))
                #
                # sql_teststore_map = "SELECT * FROM {} WHERE test_id_id=? and is_active=? and is_deleted=?".format(config_cols['tables']['test_store_map'])
                # teststore_map_df = pd.DataFrame(getRowResults(sql_teststore_map, (test_id, 1, 0)))
    
                tarvarmapping = config_cols["weekly_target_variable"]
                storemstrmapping = config_cols["store_mstr_columns"]
    
                # Getting the parameters from the Test Measurement Table based on Testid
                # test_measurement_table = test_measurement_table[test_measurement_table["test_id"] == test_id]
    
                if len(test_measurement_table) > 0:
    
                    target_variable = test_measurement_table["mesmetric_name"].values[0]
                    prewindow_target_data, postwindow_target_data,pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(test_id=test_id, target_variable=target_variable, tarvarmapping=tarvarmapping, test_measurement_table=test_measurement_table, business_categories=categories, config=config_cols)
                    if (len(prewindow_target_data) > 0) & (len(postwindow_target_data) > 0):
    
                        test_control_stores = test_control_mapping_stores[test_control_mapping_stores["test_id_id"] == test_id]
                        test_control_stores = test_control_stores[
                            test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(
                                teststore_map_df["teststore_id"].values.tolist())]
    
                        if len(test_control_stores) > 0:
                            if len(teststores) > 0:
                                test_control_stores = test_control_stores[test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(teststores)]
    
                            controlstores_weekly_target_1 = test_control_stores.merge(prewindow_target_data,
                                                                                      left_on=[
                                                                                          storemstrmapping["partner_id"],
                                                                                          storemstrmapping["banner"]],
                                                                                      right_on=[tarvarmapping["partner_id"],
                                                                                                tarvarmapping["banner"]]). \
                                rename(columns={target_variable: "Pre period target"})
                            controlstores_weekly_target_1.rename(columns={tarvarmapping["week"]: "Preperiod Weeks"}, inplace=True)
                            controlstores_weekly_target_2 = test_control_stores.merge(postwindow_target_data,
                                                                                      left_on=[
                                                                                          storemstrmapping["partner_id"],
                                                                                          storemstrmapping["banner"]],
                                                                                      right_on=[tarvarmapping["partner_id"],
                                                                                                tarvarmapping["banner"]]). \
                                rename(columns={target_variable: "Post period target"})
                            controlstores_weekly_target_2.rename(columns={tarvarmapping["week"]: "Postperiod Weeks"}, inplace=True)
                            teststores_weekly_target_1 = test_control_stores.merge(prewindow_target_data,
                                                                                   left_on=[
                                                                                       "Test_store_" + storemstrmapping[
                                                                                           "partner_id"],
                                                                                       "Test_store_" + storemstrmapping[
                                                                                           "banner"]],
                                                                                   right_on=[tarvarmapping["partner_id"],
                                                                                             tarvarmapping["banner"]]). \
                                rename(columns={target_variable: "Pre period target"})
                            teststores_weekly_target_1.drop(
                                [tarvarmapping["partner_id"] + "_y", tarvarmapping["banner"] + "_y"], axis=1, inplace=True)
                            teststores_weekly_target_1.rename(
                                columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                         storemstrmapping["banner"] + "_x": storemstrmapping["banner"]}, inplace=True)
                            teststores_weekly_target_1.rename(columns={tarvarmapping["week"]: "Preperiod Weeks"},
                                                              inplace=True)
                            teststores_weekly_target_2 = test_control_stores.merge(postwindow_target_data,
                                                                                   left_on=[
                                                                                       "Test_store_" + storemstrmapping[
                                                                                           "partner_id"],
                                                                                       "Test_store_" + storemstrmapping[
                                                                                           "banner"]],
                                                                                   right_on=[tarvarmapping["partner_id"],
                                                                                             tarvarmapping["banner"]]). \
                                rename(columns={target_variable: "Post period target"})
                            teststores_weekly_target_2.drop(
                                [tarvarmapping["partner_id"] + "_y", tarvarmapping["banner"] + "_y"], axis=1, inplace=True)
                            teststores_weekly_target_2.rename(
                                columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                         storemstrmapping["banner"] + "_x": storemstrmapping["banner"]}, inplace=True)
                            teststores_weekly_target_2.rename(columns={tarvarmapping["week"]: "Postperiod Weeks"},
                                                              inplace=True)
    
                            controlstores_weekly_target_2["Postperiod Weeks"] = controlstores_weekly_target_2[
                                "Postperiod Weeks"].apply(lambda x: str(x)[:4] + " Week " + str('%02d' % int(str(int(x))[-2:])))
                            teststores_weekly_target_2["Postperiod Weeks"] = teststores_weekly_target_2[
                                "Postperiod Weeks"].apply(lambda x: str(x)[:4] + " Week " + str('%02d' % int(str(int(x))[-2:])))
    
                            controlstores_weekly_target_1["Preperiod Weeks"] = controlstores_weekly_target_1[
                                "Preperiod Weeks"].apply(lambda x: str(x)[:4] + " Week " + str('%02d' % int(str(int(x))[-2:])))
                            teststores_weekly_target_1["Preperiod Weeks"] = teststores_weekly_target_1[
                                "Preperiod Weeks"].apply(lambda x: str(x)[:4] + " Week " + str('%02d' % int(str(int(x))[-2:])))
    
                            if test_type == 'RTM Impact Test' and control_stores_sales_method == 'Approach1':
                                controlstores_weekly_target_1 = \
                                controlstores_weekly_target_1.groupby(["Test_store_" + storemstrmapping["partner_id"],
                                                                       "Test_store_" + storemstrmapping["banner"],
                                                                       "Preperiod Weeks"])[
                                    'Pre period target'].mean().reset_index()
                                controlstores_weekly_target_2 = \
                                controlstores_weekly_target_2.groupby(["Test_store_" + storemstrmapping["partner_id"],
                                                                       "Test_store_" + storemstrmapping["banner"],
                                                                       "Postperiod Weeks"])[
                                    'Post period target'].mean().reset_index()
    
                            if test_type == 'RTM Impact Test' and control_stores_sales_method == 'Approach2':
                                controlstores_weekly_target_1["Overall Similarity Score"] = controlstores_weekly_target_1[
                                                                                                'Similarity Score'] / \
                                                                                            controlstores_weekly_target_1.groupby(
                                                                                                ["Test_store_" +
                                                                                                 storemstrmapping[
                                                                                                     "partner_id"],
                                                                                                 "Test_store_" +
                                                                                                 storemstrmapping["banner"],
                                                                                                 "Preperiod Weeks"])[
                                                                                                'Similarity Score'].transform(
                                                                                                'sum')
                                controlstores_weekly_target_1['Pre period target'] = controlstores_weekly_target_1[
                                                                                         'Pre period target'] * \
                                                                                     controlstores_weekly_target_1[
                                                                                         "Overall Similarity Score"]
                                controlstores_weekly_target_1 = \
                                controlstores_weekly_target_1.groupby(["Test_store_" + storemstrmapping["partner_id"],
                                                                       "Test_store_" + storemstrmapping["banner"],
                                                                       "Preperiod Weeks"])[
                                    'Pre period target'].sum().reset_index()
                                controlstores_weekly_target_2["Overall Similarity Score"] = controlstores_weekly_target_2[
                                                                                                'Similarity Score'] / \
                                                                                            controlstores_weekly_target_2.groupby(
                                                                                                ["Test_store_" +
                                                                                                 storemstrmapping[
                                                                                                     "partner_id"],
                                                                                                 "Test_store_" +
                                                                                                 storemstrmapping["banner"],
                                                                                                 "Postperiod Weeks"])[
                                                                                                'Similarity Score'].transform(
                                                                                                'sum')
                                controlstores_weekly_target_2['Post period target'] = controlstores_weekly_target_2[
                                                                                          'Post period target'] * \
                                                                                      controlstores_weekly_target_2[
                                                                                          "Overall Similarity Score"]
                                controlstores_weekly_target_2 = \
                                controlstores_weekly_target_2.groupby(["Test_store_" + storemstrmapping["partner_id"],
                                                                       "Test_store_" + storemstrmapping["banner"],
                                                                       "Postperiod Weeks"])[
                                    'Post period target'].sum().reset_index()
    
                            control_post_weekly_timeseries = controlstores_weekly_target_2.groupby("Postperiod Weeks")[
                                "Post period target"].mean().reset_index()
                            test_post_weekly_timeseries = teststores_weekly_target_2.groupby("Postperiod Weeks")[
                                "Post period target"].mean().reset_index()
                            control_pre_weekly_timeseries = controlstores_weekly_target_1.groupby("Preperiod Weeks")[
                                "Pre period target"].mean().reset_index()
                            test_pre_weekly_timeseries = teststores_weekly_target_1.groupby("Preperiod Weeks")[
                                "Pre period target"].mean().reset_index()
    
                            test_pre_weekly_timeseries['Pre period target'] = test_pre_weekly_timeseries[
                                'Pre period target'].round(2)
                            control_pre_weekly_timeseries['Pre period target'] = control_pre_weekly_timeseries[
                                'Pre period target'].round(2)
                            test_post_weekly_timeseries['Post period target'] = test_post_weekly_timeseries[
                                'Post period target'].round(2)
                            control_post_weekly_timeseries['Post period target'] = control_post_weekly_timeseries[
                                'Post period target'].round(2)
    
                            timeseries_dict["Test Preperiod"] = [
                                test_pre_weekly_timeseries['Preperiod Weeks'].values.tolist(),
                                test_pre_weekly_timeseries['Pre period target'].values.tolist()]
                            timeseries_dict["Control Preperiod"] = [
                                control_pre_weekly_timeseries['Preperiod Weeks'].values.tolist(),
                                control_pre_weekly_timeseries['Pre period target'].values.tolist()]
                            timeseries_dict["Test Postperiod"] = [
                                test_post_weekly_timeseries['Postperiod Weeks'].values.tolist(),
                                test_post_weekly_timeseries['Post period target'].values.tolist()]
                            timeseries_dict["Control Postperiod"] = [
                                control_post_weekly_timeseries['Postperiod Weeks'].values.tolist(),
                                control_post_weekly_timeseries['Post period target'].values.tolist()]

    
                            return json.Response(timeseries_dict,True)
                        else:
                            return json.Response("Couldn't find matching Test-Control Stores for the given test id", False)
                    else:
                        return json.Response("Couldn't find target variable data in the given timeframes", False)
                else:
                    return json.Response("Couldn't find the Test details for the test id", False)
            else:
                return json.Response("Please pass appropriate parameters", False)
        except:
            traceback.print_exc()


class get_test_analysis_results(generics.ListCreateAPIView):

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
            # break_even_lift = data['break_even_lift']
            business_categories = data['category']
            teststores = data['test_stores']
            control_stores_sales_method = 'Approach1'
            test_type = data['test_type']
            if 'excelData' in data:
                excelData = data['excelData']
    
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            gettest = []

            test_master = TestMstr.objects.get(test_id=test_id)
            test_serilizer = TestSerializer(test_master)
            results = test_serilizer.data

            # gettestquery = getSingleRecordResult("select * from {} where test_id = ?".format(config_data[region_name]['tables']['test_mstr']), (test_id))
            # results = gettestquery
            if test_id is not None:
                remove_measure = MeasurementTbl.objects.filter(is_active=True, is_deleted=False, test_id=test_id).count()
                # remove_measure = getSingleRecordResult('SELECT count(*) as count FROM {} WHERE is_active=? and is_deleted=? and test_id_id=?'.format(config_data[region_name]['tables']['measurement']), (True,False,test_id))
                #remove_measure = list(remove_measure)
                if(remove_measure > 0):
                    remove_measure = MeasurementTbl.objects.filter(is_active=True, is_deleted=False,test_id=test_id).delete()
                    # remove_measure = executeDML("DELETE from {} WHERE "
                    #                               "is_active=? and is_deleted=? and test_id_id=?".format(config_data[region_name]['tables']['measurement']),[True, False, test_id])
                # param = (test_id,
                #     mesmetric_name,
                #     preperiod_start,
                #     preperiod_end,
                #     postperiod_start,
                #     postperiod_end,
                #     results['cost'],
                #     results['rsv_estimate'],
                #     int(time.time()),
                #     False,
                #     True)
                # sql = "INSERT INTO {}(test_id_id, mesmetric_name, preperiod_start, preperiod_end, postperiod_start, postperiod_end, cost, rsv_estimate, created_on, is_deleted, is_active) VALUES (?,?,?,?,?,?,?,?,?,?,?)".format(config_data[region_name]['tables']['measurement'])
                # Record_save = executeDML(sql, param)
                # gettestquery = getRowResults("select * from {} where test_id = ? and is_active=?".format(config_data[region_name]['tables']['test_mstr']), (test_id, True))
                # if len(gettestquery) > 0:
                #     gettest = gettestquery[0]
                Record_save = MeasurementTbl(
                    test_id=test_master,
                    mesmetric_name=mesmetric_name,
                    preperiod_start=preperiod_start,
                    preperiod_end=preperiod_end,
                    postperiod_start=postperiod_start,
                    postperiod_end=postperiod_end,
                    cost=results['cost'],
                    rsv_estimate=results['rsv_estimate'],
                    created_on=int(time.time()),
                    is_deleted=False,
                    is_active=True
                )
                Record_save.save()

                test_queryset = TestMstr.objects.filter(test_id=test_id, is_active=True).first()
                test_serilizer = TestSerializer(test_queryset)
                gettest = test_serilizer.data
                #print(gettest)
                # if len(test_serilizer.data) > 0:
                #     gettest = test_serilizer.data[0]

                remove_record = RecordMstr.objects.filter(test_id=test_id, stage_id=3).delete()
                #executeDML('DELETE FROM {} where test_id_id=? and stage_id=?'.format(config_data[region_name]['tables']['record_mstr']), [test_id, 3])
    
                #my_conn = conn()
                Record_save1 = RecordMstr(
                    test_id_id=gettest['test_id'],
                    stage_id=data['stage_id'],
                    record_value=data['stringified_data'],
                    stepper_id=6,
                    created_on=int(time.time()),
                    is_deleted=False,
                    is_active=True
                )
                Record_save1.save()
                # param1 = (gettest['test_id'],
                #     data['stage_id'],
                #     data['stringified_data'],
                #     str(6),
                #     int(time.time()),
                #     False,
                #     True)
                #
                # sql = "INSERT INTO {}(test_id_id, stage_id, record_value, stepper_id, created_on, is_deleted, is_active) VALUES (?,?,?,?,?,?,?)".format(config_data[region_name]['tables']['record_mstr'])
                # Record_save1 = executeDML(sql, param1)
                StageSave = TestMstr.objects.filter(test_id=test_id).update(stepper_id=6, modified_on=int(time.time()))
                # param2 = (str(6),
                #     int(time.time()),
                #     test_id
                # )
                # sql = "UPDATE {} SET stepper_id=? , modified_on=? where test_id=? ".format(config_data[region_name]['tables']['test_mstr'])
                # StageSave = executeDML(sql, param2)

                queryStoreMaster = StoreMstr.objects.filter(is_active=True, is_deleted=False).values()
                stores_master_df = pd.DataFrame(queryStoreMaster)

                queryMeasurement = MeasurementTbl.objects.filter(is_active=True, is_deleted=False,
                                                                 test_id=test_id).values()
                test_measurement_table = pd.DataFrame(queryMeasurement)

                queryControlStores = ControlStoreMstr.objects.filter(test_id=test_id, checked_flag=1, is_active=True,
                                                                     is_deleted=False).values()
                test_control_mapping_stores = pd.DataFrame(queryControlStores)

                queryTestStoreMap = TestStoreMap.objects.filter(test_id=test_id, is_active=True, is_deleted=False).values()
                teststore_map_df = pd.DataFrame(queryTestStoreMap)

                # sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                #     config_data[region_name]['tables']['store_mstr']))
                # stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
    
                # Allmeasurementstores = getRowResults(
                #     "SELECT * FROM {}  WHERE is_active=? and is_deleted=? and test_id_id=?".format(
                #         config_data[region_name]['tables']['measurement']), (1, 0, test_id))
                # test_measurement_table = pd.DataFrame(Allmeasurementstores)
    
                # control_str_mstr_sql = "SELECT * FROM {} WHERE test_id_id=? and checked_flag=? and is_active=? and is_deleted=?".format(
                #     config_cols['tables']['control_store_mstr'])
                # test_control_mapping_stores = pd.DataFrame(getRowResults(control_str_mstr_sql, (test_id, 1, True, False)))

                # sql_teststore_map = "SELECT * FROM {} WHERE test_id_id=? and is_active=? and is_deleted=?".format(
                #     config_cols['tables']['test_store_map'])
                # teststore_map_df = pd.DataFrame(getRowResults(sql_teststore_map, (test_id, 1, 0)))

                tarvarmapping = config_cols["weekly_target_variable"]
                storemstrmapping = config_cols["store_mstr_columns"]
                metadata = config_cols["metadata"]["test_measurement"]
    
                # Download Required columns
                requiredcols = metadata["testmeasurement_columns"]
                teststores_columns_rename_dict = {val: "Teststore " + val for val in requiredcols if
                                                  val not in [storemstrmapping["partner_id"], storemstrmapping["banner"]]}
                controlstores_columns_rename_dict = {val: "Controlstore " + val for val in requiredcols if
                                                     val not in [storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]]}
    
                # Getting the parameters from the Test Measurement Table based on Testid
                test_measurement_table = test_measurement_table[test_measurement_table["test_id_id"] == test_id]
                if len(test_measurement_table) > 0:
    
                    target_variable = str(test_measurement_table["mesmetric_name"].values[0])
                    prewindow_target_data, postwindow_target_data, pre_window_weeknumbers, post_window_weeknumbers = get_weekly_targetvariables_data(test_id=test_id, test_measurement_table=test_measurement_table,
                                                                                                    target_variable=target_variable, tarvarmapping=tarvarmapping,
                                                                                                    business_categories=business_categories, config=config_cols)
    
                    if (len(prewindow_target_data) > 0) & (len(postwindow_target_data) > 0):
    
                        prewindow_target_data_grouped = \
                        prewindow_target_data.groupby([tarvarmapping["partner_id"], tarvarmapping["banner"]])[
                            target_variable].mean().reset_index()
                        postwindow_target_data_grouped = \
                        postwindow_target_data.groupby([tarvarmapping["partner_id"], tarvarmapping["banner"]])[
                            target_variable].mean().reset_index()
    
                        test_control_stores = test_control_mapping_stores[test_control_mapping_stores["test_id_id"] == test_id]
                        test_control_stores = test_control_stores[
                            test_control_stores["Test_store_" + tarvarmapping["partner_id"]].isin(
                                teststore_map_df["teststore_id"].values.tolist())]
    
                        if len(test_control_stores) > 0:
    
                            if len(teststores) > 0:
                                test_control_stores = test_control_stores[
                                    test_control_stores["Test_store_" + storemstrmapping["partner_id"]].isin(teststores)]
                            if region_name != 'DEMO':
                                test_control_stores = get_storelevel_liftresults(test_control_stores=test_control_stores,
                                                                             prewindow_target_data_grouped=prewindow_target_data_grouped,
                                                                             postwindow_target_data_grouped=postwindow_target_data_grouped,
                                                                             target_variable=target_variable, config=config_cols)
                                test_control_stores = prepare_test_measurement_columns(
                                    test_control_stores=test_control_stores,
                                    stores_master_df=stores_master_df,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)
                            elif region_name == 'DEMO' :
                                test_control_stores = get_storelevel_liftresults_UK(test_control_stores=test_control_stores,
                                                                                    prewindow_target_data_grouped=prewindow_target_data_grouped,
                                                                                    postwindow_target_data_grouped=postwindow_target_data_grouped,
                                                                                    target_variable=target_variable,
                                                                                    test_type=test_type, config=config_cols,
                                                                                    control_stores_sales_method=control_stores_sales_method)
                                test_control_stores = test_control_stores.fillna(0)
                                test_control_stores = prepare_test_measurement_columns_UK(
                                    test_control_stores=test_control_stores,
                                    stores_master_df=stores_master_df,
                                    requiredcols=requiredcols,
                                    storemstrmapping=storemstrmapping,
                                    test_type=test_type,
                                    teststores_columns_rename_dict=teststores_columns_rename_dict,
                                    controlstores_columns_rename_dict=controlstores_columns_rename_dict)
    
                            lift_analysis_results = test_control_stores.copy(deep=True)
                            if 'excelData' in locals():
                                return download_excel_report(lift_analysis_results.to_dict(), excelData, test_type)
                            else:
                                return json.Response(lift_analysis_results.to_dict(),True)
                        else:
                            return json.Response("Couldn't find matching Test-Control Stores for the given test id", False)
                    else:
                        return json.Response("Couldn't find target variable data in the given timeframes",False)
                else:
                    return json.Response("Couldn't find the Test details for the test id", False)
        except:
            traceback.print_exc()


def download_excel_report(data, excelData, test_type=None):
    excel_data = dict()
    excel_data['Customer Number'] = data['Test_store_Customer_Number']
    excel_data['Customer Group'] = data['Test_store_Customer_Group']
    excel_data['Customer Chain'] = data['Teststore Customer_Chain']
    excel_data['Pre Period Average($)'] = data['Test group - Pre Period Average']
    excel_data['Post Period Average($)'] = data['Test group - Post Period Average']
    excel_data['Pre vs Post YOY % change'] = data['Test group - Pre vs Post change(in %)']
    if test_type != 'RTM Impact Test':
        excel_data['Control Store Id'] = data['Customer_Number']
    else:
        excel_data['Control Store Count'] = data['Control Store Count']
    excel_data['Pre Period Average ($)'] = data['Control group - Pre Period Average']
    excel_data['Post Period Average ($)'] = data['Control group - Post Period Average']
    excel_data['Pre vs Post YoY % change'] = data['Control group - Pre vs Post change(in %)']
    excel_data['Test vs Control Lift %'] = data['Test vs Control change(in %)']
    excel_data['Incremental RSV'] = data['Incremental RSV']

    output = io.BytesIO()
    workbook = xlsxwriter.Workbook(output, {'strings_to_numbers': True})
    worksheet = workbook.add_worksheet()
    worksheet.set_column(0, 0, len('Customer Number Numb'))
    worksheet.set_column(1, 1, len('Customer Number Numb'))
    worksheet.set_column(2, 2, len('Customer Number Numb'))
    worksheet.set_column(3, 3, len('Pre Period Average($)'))
    worksheet.set_column(4, 4, len('Post Period Average($)'))
    worksheet.set_column(5, 5, len('Pre vs Post YOY % change'))
    if test_type != 'RTM Impact Test':
        worksheet.set_column(6, 6, len('Control Store Id'))
    else:
        worksheet.set_column(6, 6, len('Control Store Count'))
    worksheet.set_column(7, 7, len('Pre Period Average ($)'))
    worksheet.set_column(8, 8, len('Post Period Average ($)'))
    worksheet.set_column(9, 9, len('Pre vs Post YoY % change'))
    worksheet.set_column(10, 10, len('Test vs Control Lift %'))
    worksheet.set_column(11, 11, len('Incremantal RSV'))

    # Formats
    bold = workbook.add_format({'bold': True})
    bold.set_border(1)
    border_set = workbook.add_format()
    border_set.set_border(1)

    worksheet.write(1, 0, 'Actual Lift', bold)
    worksheet.write(2, 0, 'Breakeven/Target lift', bold)
    worksheet.write(3, 0, 'Probability', bold)

    worksheet.write(1, 1, excelData['actualsLift'], border_set)
    worksheet.write(2, 1, excelData['breakevenTargetLift'], border_set)
    worksheet.write(3, 1, excelData['probability'], border_set)

    worksheet.write(1, 3, 'Inc RSV', bold)
    worksheet.write(2, 3, 'Inc MAC', bold)
    worksheet.write(3, 3, 'RTM cost', bold)
    worksheet.write(4, 3, 'Earnings', bold)

    worksheet.write(1, 4, excelData['inRSV'], border_set)
    worksheet.write(2, 4, excelData['incMac'], border_set)
    worksheet.write(3, 4, excelData['rtmCost'], border_set)
    worksheet.write(4, 4, excelData['earnings'], border_set)

    col = 0
    for key, value in excel_data.items():
        worksheet.write(6, col, key, bold)
        extracted_value = []
        for value_key in value.keys():
            extracted_value.append(value[value_key])
        worksheet.write_column(7, col, extracted_value, border_set)
        col += 1

    workbook.close()

    output.seek(0)
    filename = 'TestSummaryReport.xlsx'
    response = HttpResponse(
        output,
        content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
    response['Content-Disposition'] = 'attachment; filename=%s' % filename
    return response

#def saveTestData(gross_change=None, test_id=None, region_name=None):
def saveTestData(gross_change=None, test_id=None):
    try:
        # param2 = (gross_change,
        #           int(time.time()),
        #           test_id
        #           )
        # sql = "UPDATE {} SET test_control_change=? , modified_on=? where test_id=? ".format(
        #     config_data[region_name]['tables']['test_mstr'])
        # StageSave = executeDML(sql, param2)
        TestMstr.objects.filter(test_id=test_id).update(test_control_change=gross_change, modified_on=int(time.time()))
    except:
        traceback.print_exc()


def get_storelevel_liftresults_UK(test_control_stores=None,
                                  prewindow_target_data_grouped=None,
                                  postwindow_target_data_grouped=None, test_type=None,
                                  target_variable=None, control_stores_sales_method=None, config=None):
    try:

        tarvarmapping = config["weekly_target_variable"]
        storemstrmapping = config["store_mstr_columns"]

        test_control_stores = test_control_stores.merge(prewindow_target_data_grouped,
                                                        left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                 "Test_store_" + storemstrmapping["banner"]],
                                                        right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                        how="left")
        test_control_stores.drop([tarvarmapping["partner_id"] + "_y", tarvarmapping["banner"] + "_y"], axis=1,
                                 inplace=True)
        test_control_stores.rename(columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                            storemstrmapping["banner"] + "_x": storemstrmapping["banner"]},
                                   inplace=True)
        test_control_stores.rename(columns={target_variable: "Test group - Pre Period Average"}, inplace=True)
        test_control_stores["Test group - Pre Period Average"] = test_control_stores[
            "Test group - Pre Period Average"].round(2)

        test_control_stores = test_control_stores.merge(postwindow_target_data_grouped,
                                                        left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                 "Test_store_" + storemstrmapping["banner"]],
                                                        right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                        how="left")
        test_control_stores.drop([tarvarmapping["partner_id"] + "_y", tarvarmapping["banner"] + "_y"], axis=1,
                                 inplace=True)
        test_control_stores.rename(columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                            storemstrmapping["banner"] + "_x": storemstrmapping["banner"]},
                                   inplace=True)
        test_control_stores.rename(columns={target_variable: "Test group - Post Period Average"}, inplace=True)
        test_control_stores["Test group - Post Period Average"] = test_control_stores[
            "Test group - Post Period Average"].round(2)

        test_control_stores = test_control_stores.merge(prewindow_target_data_grouped,
                                                        left_on=[storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]],
                                                        right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                        how="left")
        test_control_stores.rename(columns={target_variable: "Control group - Pre Period Average"}, inplace=True)
        test_control_stores["Control group - Pre Period Average"] = test_control_stores[
            "Control group - Pre Period Average"].round(2)

        test_control_stores = test_control_stores.merge(postwindow_target_data_grouped,
                                                        left_on=[storemstrmapping["partner_id"],
                                                                 storemstrmapping["banner"]],
                                                        right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                        how="left")
        test_control_stores.rename(columns={target_variable: "Control group - Post Period Average"}, inplace=True)
        test_control_stores["Control group - Post Period Average"] = test_control_stores[
            "Control group - Post Period Average"].round(2)

        if control_stores_sales_method == 'Approach1' and test_type == 'RTM Impact Test':
            control_stores_rsv_calculation = test_control_stores.groupby(
                ["Test_store_" + storemstrmapping["partner_id"], "Test_store_" + storemstrmapping["banner"]]).agg(
                {"Control group - Pre Period Average": 'mean',
                 "Control group - Post Period Average": 'mean',
                 storemstrmapping["partner_id"]: 'nunique'}).reset_index().rename(
                columns={storemstrmapping["partner_id"]: "Control Store Count"})

            test_control_stores.drop(columns=[storemstrmapping["partner_id"], storemstrmapping["banner"],
                                              "Control group - Pre Period Average",
                                              "Control group - Post Period Average"], inplace=True)
            test_control_stores.drop_duplicates(
                subset=["Test_store_" + storemstrmapping["partner_id"], "Test_store_" + storemstrmapping["banner"]],
                inplace=True)
            test_control_stores = test_control_stores.merge(control_stores_rsv_calculation,
                                                            on=["Test_store_" + storemstrmapping["partner_id"],
                                                                "Test_store_" + storemstrmapping["banner"]])
            test_control_stores[["Control group - Pre Period Average","Control group - Post Period Average"]] = test_control_stores[["Control group - Pre Period Average","Control group - Post Period Average"]].round(2)

        if control_stores_sales_method == 'Approach2' and test_type == 'RTM Impact Test':
            test_control_stores["RSV Proportion based on Similarity"] = test_control_stores['Similarity Score'] / \
                                                                        test_control_stores.groupby(["Test_store_" +
                                                                                                     storemstrmapping[
                                                                                                         "partner_id"],
                                                                                                     "Test_store_" +
                                                                                                     storemstrmapping[
                                                                                                         "banner"]])[
                                                                            'Similarity Score'].transform('sum')
            test_control_stores["Control group - Pre Period Average"] = test_control_stores[
                                                                            "Control group - Pre Period Average"] * \
                                                                        test_control_stores[
                                                                            "RSV Proportion based on Similarity"]
            test_control_stores["Control group - Post Period Average"] = test_control_stores[
                                                                             "Control group - Post Period Average"] * \
                                                                         test_control_stores[
                                                                             "RSV Proportion based on Similarity"]
            control_stores_rsv_calculation = test_control_stores.groupby(
                ["Test_store_" + storemstrmapping["partner_id"], "Test_store_" + storemstrmapping["banner"]]).agg(
                {"Control group - Pre Period Average": 'sum',
                 "Control group - Post Period Average": 'sum',
                 storemstrmapping["partner_id"]: 'nunique'}).reset_index().rename(
                columns={storemstrmapping["partner_id"]: "Control Store Count"})

            test_control_stores.drop(columns=[storemstrmapping["partner_id"], storemstrmapping["banner"],
                                              "Control group - Pre Period Average",
                                              "Control group - Post Period Average",
                                              "RSV Proportion based on Similarity", 'Similarity Score'], inplace=True)
            test_control_stores.drop_duplicates(
                subset=["Test_store_" + storemstrmapping["partner_id"], "Test_store_" + storemstrmapping["banner"]],
                inplace=True)
            test_control_stores = test_control_stores.merge(control_stores_rsv_calculation,
                                                            on=["Test_store_" + storemstrmapping["partner_id"],
                                                                "Test_store_" + storemstrmapping["banner"]])
            test_control_stores[["Control group - Pre Period Average","Control group - Post Period Average"]] = test_control_stores[["Control group - Pre Period Average","Control group - Post Period Average"]].round(2)

        test_control_stores["Variable"] = target_variable
        test_control_stores["Test group - Pre vs Post change"] = test_control_stores[
                                                                     "Test group - Post Period Average"] - \
                                                                 test_control_stores["Test group - Pre Period Average"]
        test_control_stores["Control group - Pre vs Post change"] = test_control_stores[
                                                                        "Control group - Post Period Average"] - \
                                                                    test_control_stores[
                                                                        "Control group - Pre Period Average"]
        test_control_stores["Test group - Pre vs Post change(in %)"] = ((test_control_stores[
                                                                             "Test group - Post Period Average"] -
                                                                         test_control_stores[
                                                                             "Test group - Pre Period Average"]) /
                                                                        test_control_stores[
                                                                            "Test group - Pre Period Average"]) * 100
        test_control_stores["Control group - Pre vs Post change(in %)"] = ((test_control_stores[
                                                                                "Control group - Post Period Average"] -
                                                                            test_control_stores[
                                                                                "Control group - Pre Period Average"]) /
                                                                           test_control_stores[
                                                                               "Control group - Pre Period Average"]) * 100

        test_control_stores["Test group - Post Period Estimated"] = test_control_stores[
                                                                        "Test group - Pre Period Average"] * (
                                                                                test_control_stores[
                                                                                    "Control group - Pre vs Post change(in %)"] / 100)
        test_control_stores["Test group - Post Period Estimated"] = test_control_stores[
            ["Test group - Pre Period Average", "Test group - Post Period Estimated"]].sum(axis=1)
        test_control_stores["Test group - Post Period Estimated"] = test_control_stores[
            "Test group - Post Period Estimated"].round(2)
        test_control_stores["Incremental RSV"] = test_control_stores["Test group - Post Period Average"] - \
                                                 test_control_stores["Test group - Post Period Estimated"]

        test_control_stores["Incremental RSV"] = test_control_stores["Incremental RSV"].round(2)
        # test_control_stores["Test vs Control change(in %)"] = test_control_stores[
        #                                                           "Test group - Pre vs Post change(in %)"] - \
        #                                                       test_control_stores[
        #                                                           "Control group - Pre vs Post change(in %)"]

        test_control_stores["Test vs Control change(in %)"] = ((test_control_stores[
                                                                                   "Test group - Post Period Average"] -
                                                                               test_control_stores[
                                                                                   "Test group - Post Period Estimated"]) /
                                                                              test_control_stores[
                                                                                  "Test group - Post Period Estimated"]) * 100

        test_control_stores["Test group - Pre vs Post change"] = test_control_stores[
            "Test group - Pre vs Post change"].round(2)
        test_control_stores["Control group - Pre vs Post change"] = test_control_stores[
            "Control group - Pre vs Post change"].round(2)
        test_control_stores["Test group - Pre vs Post change(in %)"] = test_control_stores[
            "Test group - Pre vs Post change(in %)"].round(2)
        test_control_stores["Control group - Pre vs Post change(in %)"] = test_control_stores[
            "Control group - Pre vs Post change(in %)"].round(2)
        test_control_stores["Test vs Control change(in %)"] = test_control_stores["Test vs Control change(in %)"].round(2)
        # test_control_stores["Test group - Estimated vs Post change(in %)"] = test_control_stores[
        #     "Test group - Estimated vs Post change(in %)"].round(2)

        return test_control_stores

    except:
        traceback.print_exc()


def prepare_test_measurement_columns_UK(test_control_stores=None, stores_master_df=None, requiredcols=None,
                                        storemstrmapping=None,
                                        teststores_columns_rename_dict=None, controlstores_columns_rename_dict=None,
                                        test_type=None):
    try:
        if test_type == 'RTM Impact Test':
            test_control_stores = test_control_stores.merge(stores_master_df[requiredcols],
                                                            left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                     "Test_store_" + storemstrmapping["banner"]],
                                                            right_on=[storemstrmapping["partner_id"],
                                                                      storemstrmapping["banner"]],
                                                            how="left")

            test_control_stores.drop([storemstrmapping["partner_id"], storemstrmapping["banner"]], axis=1, inplace=True)
            test_control_stores.rename(columns=teststores_columns_rename_dict, inplace=True)
            return test_control_stores
        else:
            test_control_stores = test_control_stores.merge(stores_master_df[requiredcols],
                                                            left_on=["Test_store_" + storemstrmapping["partner_id"],
                                                                     "Test_store_" + storemstrmapping["banner"]],
                                                            right_on=[storemstrmapping["partner_id"],
                                                                      storemstrmapping["banner"]],
                                                            how="left")
            test_control_stores.drop([storemstrmapping["partner_id"] + "_y", storemstrmapping["banner"] + "_y"], axis=1,
                                     inplace=True)
            test_control_stores.rename(columns={storemstrmapping["partner_id"] + "_x": storemstrmapping["partner_id"],
                                                storemstrmapping["banner"] + "_x": storemstrmapping["banner"]},
                                       inplace=True)
            test_control_stores.rename(columns=teststores_columns_rename_dict, inplace=True)

            test_control_stores = test_control_stores.merge(stores_master_df[requiredcols],
                                                            left_on=[storemstrmapping["partner_id"],
                                                                     storemstrmapping["banner"]],
                                                            right_on=[storemstrmapping["partner_id"],
                                                                      storemstrmapping["banner"]],
                                                            how="left")
            test_control_stores.rename(columns=controlstores_columns_rename_dict, inplace=True)

            return test_control_stores

    except:
        traceback.print_exc()

@csrf_exempt
def weeklyDataInsert(request):
    df = pd.read_csv('C:/Users/kirankumar.rajen/Desktop/WL_store_master.csv')
    data = pd.DataFrame(df)
    print(data.columns)
    paramList = []
    for i, store in data.iterrows():
        param = (
            store['Customer_Group'],
            store['Customer_Status'],
            store['Store_Number'],
            store['Sales_Representative'],
            store['Sub_Channel'],
            store['Customer_Chain'],
            store['Outlet_Address'],
            store['Tier1'],
            store['Tier2'],
            store['Tier3'],
            store['Attribute1'],
            store['City'],
            store['Customer_Name'],
            store['Division'],
            store['Latitude'],
            store['Longitude'],
            store['Postcode'],
            store['Region'],
            store['Territory'],
            store['total_checkout_locations'],
            store['Store_Size_Sq_Ft'],
            store['Manned_Checkouts'],
            store['Touchability_Score'],
            store['product_count_mean_occasions'],
            store['product_count_mean_gum'],
            store['product_count_mean'],
            store['product_count_mean_block'],
            store['product_count_mean_chocolate'],
            store['product_count_mean_filled_bars'],
            store['product_count_mean_wrigley'],
            store['product_count_mean_mints'],
            float(store['Customer_Number']),
            True,
            False

        )
        paramList.append(param)
    print(len(paramList))
    sql = "INSERT INTO {} (Customer_Group, Customer_Status, Store_Number, Sales_Representative, Sub_Channel, Customer_Chain, Outlet_Address, Tier1," \
          "Tier2,Tier3,Attribute1, City,Customer_Name,Division,Latitude,Longitude,Postcode,Region,Territory,total_checkout_locations,Store_Size_Sq_Ft,Manned_Checkouts" \
          "Touchability_Score,product_count_mean_occasions,product_count_mean_gum,product_count_mean,product_count_mean_block,product_count_mean_chocolate," \
          "product_count_mean_filled_bars,product_count_mean_wrigley,product_count_mean_mints,Customer_Number, is_active,is_deleted) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)".format(
        'Tl_StoreMstr_UK')
    executeManyDML(sql, paramList)
    return json.Response('Inserted Successfully', True)
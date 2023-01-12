import traceback

import pandas as pd
import gower
from sklearn.preprocessing import StandardScaler

from api.helpers import getRowResults
from api.common_utilities import get_valid_weekly_target_data, \
    get_annual_rsv_lifts, filter_population, get_test_control_stores_correlation, prepare_test_control_stores_vecotrize, prepare_test_control_stores
from api import json
import time
import config.config_data as config
from api.teststores import update_stepIndex
from rest_framework import generics
import logging

from api.utils.gower_distance import gower_matrix

logger = logging.getLogger(__name__)
config_data = config.data


class identify_control_stores(generics.ListCreateAPIView):

    def post(self, request):
        global control_stores, use_history_df
        start_time = time.perf_counter()

        # Request data
        import json as j
        region_name = request.META['HTTP_COUNTRY']
        data = j.loads(request.body)
        datas = data['data']
        config_cols = config_data[region_name]
    
        request = j.loads(request.body)
        # store_features = request['data']['store_features']
        stores = request['data']['teststores']
        target_variable = request['data']['target_variable']
        test_id = request['data']['test_id']
    
        banners = request['data']['banners']
        segments = request['data']['segments']
        store_segments = request['data']['store_segments']
        territories = request['data']['territories']
        reqcontrolstores = request['data']['reqcontrolstores']
        if 'categories' in datas:
            categories = datas['categories']
        else:
            categories = []
        teststores = pd.DataFrame.from_dict(stores, orient='columns')
        pd.set_option('display.max_rows', None)
        test_type = request['data']['test_type']
        prewindow_start = request['data']['prewindow_start']
        prewindow_end = request['data']['prewindow_end']
        postwindow_start = request['data']['postwindow_start']
        postwindow_end = request['data']['postwindow_end']
        control_store_pool = request['data']['control_store_pool']
        if len(control_store_pool) == 0:
            control_store_pool = None
        # Request data ends
        new_teststores = []
    
        try:
            if (teststores is not None):
                sql_query = "SELECT * FROM {} WHERE is_active = ? and is_deleted = ?".format(
                    config_cols['tables']['store_mstr'])
                stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
    
                test_mstr_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
                    config_cols['tables']['test_mstr'])
                test_master_df = pd.DataFrame(getRowResults(test_mstr_sql, (True, False)))
    
                if (test_master_df.empty):
                    columns = ['test_id', 'test_name', 'test_desc', 'testtype', 'target_var', 'territory_name',
                               'store_segment', 'category_name', 'confidence_lev', 'margin_oferror', 'std_deviation',
                               'pre_start', 'pre_end',
                               'test_window', 'testwin_start', 'testwin_end', 'stage_id', 'created_on', 'modified_on',
                               'is_active', 'deleted_at', 'is_deleted']
                    test_master_df = pd.DataFrame(columns=columns)
    
                test_map_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
                    config_cols['tables']['test_store_map'])
                teststore_map_df = pd.DataFrame(getRowResults(test_map_sql, (True, False)))
    
                control_str_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
                    config_cols['tables']['control_store_mstr'])
                controlstore_map_df = pd.DataFrame(getRowResults(control_str_sql, (True, False)))
    
                if (controlstore_map_df.empty):
                    columns = ['constore_id', 'test_id_id', 'Test_store_Partner_ID', 'Partner_ID', 'Test_store_Banner',
                               'Banner', 'checked_flag', 'created_on', 'modified_on', 'is_active', 'deleted_at',
                               'is_deleted']
                    controlstore_map_df = pd.DataFrame(columns=columns)
    
                storemstrmapping = config_cols["store_mstr_columns"]
                tarvarmapping = config_cols["weekly_target_variable"]
                metadata = config_cols["metadata"]
                store_features = metadata["test_planning"]["test_vs_control_compare"].copy()
    
                # Remove MORRISONS as we don't have either Mac conversion factor or complete 2019 Sales data.
                # if 'MORRISONS' in banners:
                #     banners.remove('MORRISONS')
    
                # Getting history,new teststores-read from database - partially written
                records_dict = None
                records_param = (
                    test_id,
                    5,
                    True
                )
                records_sql = "SELECT * FROM {} where test_id_id=? and stepper_id=? and is_active=?".format(
                    config_cols['tables']['record_mstr'])
                test_records = getRowResults(records_sql, records_param)
    
                if len(test_records) > 0:
                    records_dict = test_records[0]['record_value']
                    records_dict = j.loads(records_dict)
                    storeslist = records_dict['teststores']
                else:
                    storeslist = []
    
                if len(storeslist) > 0:
    
                    firsttime = 0
    
                    history_df = pd.DataFrame(records_dict["teststores"])
                    history_df.drop('index', axis=1, inplace=True)
                    common_teststores = list(set(teststores[storemstrmapping["partner_id"]].values.tolist()) & set(
                        history_df["Test_store_" + storemstrmapping["partner_id"]].values.tolist()))
                    new_teststores = list(set(teststores[storemstrmapping["partner_id"]].values.tolist()) - set(
                        history_df["Test_store_" + storemstrmapping["partner_id"]].values.tolist()))
                    use_history_df = history_df[
                        history_df["Test_store_" + storemstrmapping["partner_id"]].isin(common_teststores)]
    
                else:
                    firsttime = 1
    
                if firsttime == 0 and len(new_teststores) > 0:
                    computecontrolstores = 1
                    teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(new_teststores)]
                elif firsttime == 1:
                    computecontrolstores = 1
                    teststores = stores_master_df[
                        stores_master_df[storemstrmapping["partner_id"]].isin(teststores[storemstrmapping["partner_id"]])]
                else:
                    computecontrolstores = 0
    
                if computecontrolstores == 1:
    
                    if (test_type == "RTM Impact Test"):
                        if control_store_pool is not None:
                            storemstrmapping = config_cols["store_mstr_columns"]
                            tarvarmapping = config_cols["weekly_target_variable"]
                            sql_query = "SELECT * FROM {} WHERE is_active = ? and is_deleted = ?".format(
                                config_cols['tables']['store_mstr'])
                            stores_master_df = pd.DataFrame(getRowResults(sql_query, (1, 0)))
                        else:
                            stores_master_df = filter_population(banners=banners, segments=segments,
                                                                 store_segments=store_segments, territories=territories, config=config_cols, regionName=region_name, test_type=test_type)

                        valid_sales_stores, consideryearweeks = get_valid_weekly_target_data(
                            target_variable=target_variable, business_categories=categories,
                            test_type=test_type, prewindow_start=prewindow_start,
                            prewindow_end=prewindow_end, postwindow_start=postwindow_start,
                            postwindow_end=postwindow_end, config=config_cols)
                        stores_master_df = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                            valid_sales_stores[tarvarmapping["partner_id"]].unique())]
    
                        filtered = valid_sales_stores[valid_sales_stores["Week"].isin(consideryearweeks[0])]
                        pivoteddf = pd.pivot_table(filtered, index=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                   columns="Week", values="RSV").reset_index().rename_axis(None, axis=1)
                        weekcolumns = [col for col in pivoteddf.columns.tolist() if
                                       col not in [tarvarmapping["partner_id"], tarvarmapping["banner"]]]
                        stores_master_df = stores_master_df.merge(pivoteddf,
                                                                  on=[tarvarmapping["partner_id"], tarvarmapping["banner"]])
    
                        # -------------------------------------------New code------------------------------------------
    
                        annualrsvliftdf = get_annual_rsv_lifts(target_variable=target_variable,
                                                               business_categories=categories, test_type=test_type,
                                                               prewindow_start=prewindow_start, prewindow_end=prewindow_end,
                                                               postwindow_start=postwindow_start,
                                                               postwindow_end=postwindow_end, config=config_cols, regionName=region_name)
    
                        filtercolumns = [tarvarmapping["partner_id"]] + [target_variable + ' Year 1',
                                                                         target_variable + ' Year 2',
                                                                         target_variable + ' Lift']
                        stores_master_df = stores_master_df.merge(annualrsvliftdf[filtercolumns],
                                                                  left_on=storemstrmapping["partner_id"],
                                                                  right_on=tarvarmapping["partner_id"])
                        # Adding extra features as comparison features
                        if (len(categories) != 0) & (
                                len(categories) < metadata['test_planning']["business_categories_count"]):
                            common_category_specific = list(
                                set(metadata["business_category_specific_compare"]) & set(store_features))
                            if len(common_category_specific) > 0:
                                features_list = [[j + "_" + i for j in common_category_specific] for i in
                                                 categories]
                                category_specific_features = [item for elem in features_list for item in elem]
                                store_features.extend(category_specific_features)
                        store_features.extend([target_variable + " Year 1"])

                        # Scaling Store Features Column values on the Entire Population set
                        scaler = StandardScaler()
                        nonscalingcolumns = [storemstrmapping["banner"], storemstrmapping["territory"],
                                             storemstrmapping["segment"], storemstrmapping["storegrid"]]
                        scale_cols = [item for item in store_features if item not in nonscalingcolumns]
                        if len(scale_cols) > 0:
                            scaler = scaler.fit(stores_master_df[scale_cols])

                        teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                            teststores[storemstrmapping["partner_id"]].unique())]
                        # Add code to filter only hold out stores in the population (An additional filter)
                        stores_master_df = stores_master_df[
                            stores_master_df.Customer_Status == 'Customer_Status_2']
    
                    else:
                        if control_store_pool is not None:
                            stores_master_df = stores_master_df
                        else:
                            stores_master_df = filter_population(banners=banners, segments=segments,config=config_cols,test_type=test_type,
                                                                 store_segments=store_segments, territories=territories, regionName=region_name)
                        # Getting stores which have non zero target variable values in all weeks
                        valid_sales_stores, consideryearweeks = get_valid_weekly_target_data(
                            target_variable=target_variable, business_categories=categories,test_type=test_type,
                                                               prewindow_start=prewindow_start, prewindow_end=prewindow_end,
                                                               postwindow_start=postwindow_start,
                                                               postwindow_end=postwindow_end, config=config_cols,)
                        stores_master_df = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                            valid_sales_stores[tarvarmapping["partner_id"]].unique())]
    
                        # -------------------------------------------New code------------------------------------------------------------------------
                        filtered = valid_sales_stores[valid_sales_stores["Week"].isin(consideryearweeks[52:])]
                        pivoteddf = pd.pivot_table(filtered, index=[tarvarmapping["partner_id"], tarvarmapping["banner"]],
                                                   columns="Week", values="RSV").reset_index().rename_axis(None, axis=1)
                        weekcolumns = [col for col in pivoteddf.columns.tolist() if
                                       col not in [tarvarmapping["partner_id"], tarvarmapping["banner"]]]
                        stores_master_df = stores_master_df.merge(pivoteddf,on=[tarvarmapping["partner_id"], tarvarmapping["banner"]])
                        # -------------------------------------------New code------------------------------------------
    
                        annualrsvliftdf = get_annual_rsv_lifts(target_variable=target_variable,
                                                               business_categories=categories,config=config_cols,
                                                               regionName=region_name, prewindow_start=prewindow_start,
                                                               prewindow_end=prewindow_end, postwindow_start=postwindow_start,
                                                               postwindow_end=postwindow_end)
    
                        filtercolumns = [tarvarmapping["partner_id"]] + [target_variable + ' Year 1',
                                                                         target_variable + ' Year 2', target_variable + ' Lift']
                        stores_master_df = stores_master_df.merge(annualrsvliftdf[filtercolumns],
                                                                  left_on=storemstrmapping["partner_id"],
                                                                  right_on=tarvarmapping["partner_id"])
                        # Adding extra features as comparison features
                        if (len(categories) != 0) & (
                                len(categories) < metadata["test_planning"]["business_categories_count"]):
                            common_category_specific = list(
                                set(metadata["test_planning"]["business_category_specific_compare"]) & set(store_features))
                            if len(common_category_specific) > 0:
                                features_list = [[j + "_" + i for j in common_category_specific] for i in
                                                 categories]
                                category_specific_features = [item for elem in features_list for item in elem]
                                store_features.extend(category_specific_features)
                        store_features.extend([target_variable + " Year 1", target_variable + " Year 2", target_variable + " Lift"])

                        # Scaling Store Features Column values on the Entire Population set
                        scaler = StandardScaler()
                        nonscalingcolumns = [storemstrmapping["banner"], storemstrmapping["territory"],
                                             storemstrmapping["segment"], storemstrmapping["storegrid"]]
                        scale_cols = [item for item in store_features if item not in nonscalingcolumns]
                        if len(scale_cols) > 0:
                            scaler = scaler.fit(stores_master_df[scale_cols])

                        teststores = stores_master_df[stores_master_df[storemstrmapping["partner_id"]].isin(
                            teststores[storemstrmapping["partner_id"]].unique())]

                        stores_master_df = filter_active_test_control_stores(stores_master_df=stores_master_df, config=config_cols)

                    # ELIMINATING THE TESTSTORES FROM POPULATION
                    stores_master_df = stores_master_df[~(
                        stores_master_df[storemstrmapping["partner_id"]].isin(teststores[storemstrmapping["partner_id"]]))]
                    # IF Control Store Pool Available then filter for only those stores
                    if control_store_pool is not None:
                        stores_master_df = stores_master_df[
                            stores_master_df[storemstrmapping["partner_id"]].isin(control_store_pool)]
    
                    if stores_master_df.shape[0] == 0:
                        message = "No valid control stores satisfying the criteria to proceed further."
                        return json.Response(message, False)
                    # Adding Additional Check for Req Control Stores
                    if (reqcontrolstores > stores_master_df[storemstrmapping["partner_id"]].nunique()):
                        reqcontrolstores = stores_master_df[storemstrmapping["partner_id"]].nunique()
    
                    refA = teststores.copy(deep=True)
                    refB = stores_master_df.copy(deep=True)
                    useA = refA[store_features].copy(deep=True)
                    useB = refB[store_features].copy(deep=True)

                    if len(scale_cols) > 0:
                        useA[scale_cols] = scaler.transform(useA[scale_cols])
                        useB[scale_cols] = scaler.transform(useB[scale_cols])

                    filter_columns = set(
                        [storemstrmapping["partner_id"], storemstrmapping["banner"], storemstrmapping["territory"],
                         storemstrmapping["segment"],
                         storemstrmapping["storegrid"]]).union(metadata["test_planning"]["teststores_columns"])
                    if refA.shape[0] < 2000:
                        gowermatrix = gower_matrix(useA, useB)
                        # Identifying similar stores
                        df_list = list()
                        for test_pid, row in zip(refA[storemstrmapping["partner_id"]], gowermatrix):
                            df_list.append(prepare_test_control_stores(dfA=refA[filter_columns].copy(deep=True),
                                                                       dfB=refB[filter_columns].copy(deep=True),
                                                                       teststoreid=test_pid, gowerdistances=row,
                                                                       num_cntrl_rejected=None, calltype="new",config=config_cols,
                                                                       corrbased=1, reqcontrolstores=reqcontrolstores))
                        control_stores = pd.concat(df_list)
                        del gowermatrix
                    else:
                        # Vectorize implementation
                        control_df = pd.DataFrame(columns=[storemstrmapping["partner_id"]],
                                                  data=refB[storemstrmapping["partner_id"]].values)
                        control_df['key'] = 1
                        control_stores = prepare_test_control_stores_vecotrize(useA=useA, useB=useB,
                                                                               teststore_array=refA[storemstrmapping["partner_id"]].values,
                                                                               control_df=control_df, calltype="new",
                                                                               reqcontrolstores=reqcontrolstores,
                                                                               corrbased=1,config=config_cols)
                        control_stores = control_stores.merge(refB[filter_columns], on=[storemstrmapping["partner_id"]])
                        teststores_column_rename = ["Test_store_" + col for col in metadata['test_planning']["teststores_columns"]]
                        teststores_df = refA[metadata['test_planning']["teststores_columns"]]
                        teststores_df.columns = teststores_column_rename
                        control_stores = control_stores.merge(teststores_df,
                                                              on=['Test_store_' + storemstrmapping["partner_id"]])

                    # print("Length of control stores: ", control_stores.shape)
                    control_stores = get_test_control_stores_correlation(dfA=refA.copy(deep=True),
                                                                         dfB=refB.copy(deep=True),
                                                                         test_control_stores=control_stores.copy(
                                                                             deep=True),
                                                                         weekcolumns=weekcolumns,
                                                                         num_cntrl_rejected=None,
                                                                         corrbased=1, reqcontrolstores=reqcontrolstores, config=config_cols)

                    df1 = control_stores.groupby("Test_store_" + storemstrmapping["partner_id"], as_index=False,
                                                 group_keys=False).apply(lambda x: x.iloc[0])
                    df2 = control_stores.groupby("Test_store_" + storemstrmapping["partner_id"], as_index=False,
                                                 group_keys=False).apply(lambda x: x.iloc[1:])
    
                    df1["Checked_Flag"] = 0
                    df2["Checked_Flag"] = 0
                    df1["is_recommended"] = 1
                    df2["is_recommended"] = 0
    
                    control_stores = pd.concat([df1, df2])
    
                if firsttime == 0 and len(new_teststores) > 0:
                    control_stores = pd.concat([use_history_df, control_stores])
                elif firsttime == 1:
                    control_stores = control_stores
                else:
                    control_stores = use_history_df
                update_stepIndex(4, test_id, config_cols)
                if control_store_pool is not None:
                    message = "Out of {} Control Stores in Pool, {} of them are valid control stores".format(
                        len(control_store_pool), stores_master_df[storemstrmapping["partner_id"]].nunique())
                    results ={
                        "finalcontrol_stores": control_stores.reset_index().to_json(orient='records'),
                        "message": message
                    }
                    return json.Response(results, True)

                finalcontrol_stores = control_stores.reset_index().to_json(orient='records')
                return json.Response(finalcontrol_stores, True)

            else:
                return "Please pass Test stores and Store features"
        except:
            traceback.print_exc()


class GetSelectedStores(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        stores = data['data']
        # my_conn = conn()
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        # gettestStore = TestMstr.objects.filter(is_active=True, is_deleted=False, test_id__in=stores)
        gettestStore = getRowResults('SELECT * FROM {} WHERE is_active=? and is_deleted=? and test_id = ?'.format(
            config_cols['tables']['test_mstr']), (True, False, stores[0]))
        records = getRowResults('SELECT * FROM {} WHERE test_id_id = ?'.format(config_cols['tables']['record_mstr']),
                                (stores[0]))

        results = gettestStore
        results[0]['records'] = records
        return json.Response(results, True)


def filter_active_test_control_stores(stores_master_df=None, config=config):
    storemstrmapping = config["store_mstr_columns"]
    test_mstr_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
        config['tables']['test_mstr'])
    test_master_df = pd.DataFrame(getRowResults(test_mstr_sql, (1, 0)))

    if (test_master_df.empty):
        columns = ['test_id', 'test_name', 'test_desc', 'testtype', 'target_var', 'territory_name',
                   'store_segment',
                   'category_name', 'confidence_lev', 'margin_oferror', 'std_deviation', 'pre_start', 'pre_end',
                   'test_window', 'testwin_start', 'testwin_end', 'stage_id', 'created_on', 'modified_on',
                   'is_active',
                   'deleted_at', 'is_deleted']
        test_master_df = pd.DataFrame(columns=columns)

    test_map_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
        config['tables']['test_store_map'])
    teststore_map_df = pd.DataFrame(getRowResults(test_map_sql, (1, 0)))

    control_str_sql = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
        config['tables']['control_store_mstr'])
    controlstore_map_df = pd.DataFrame(getRowResults(control_str_sql, (1, 0)))

    active_tests_df = test_master_df[test_master_df["is_active"] == True]

    if active_tests_df.shape[0] != 0:
        # THIS MEANS THERE ARE ACTIVE TESTS AND WE NEED TO ELIMINATE ACTIVE TEST AND CONTROL STORES
        # Get the active test stores using test ids
        if len(teststore_map_df)>0:
            active_test_stores = teststore_map_df[teststore_map_df["test_id_id"].isin(active_tests_df["test_id"])]
            filtered_stores_df = stores_master_df[~stores_master_df[storemstrmapping["partner_id"]].isin(active_test_stores["teststore_id"])]
        else:
            filtered_stores_df = stores_master_df
        # Get the active control stores using test ids
        if len(controlstore_map_df)>0:
            active_control_stores = controlstore_map_df[controlstore_map_df["test_id_id"].isin(active_tests_df["test_id"])]
            filtered_stores_df = filtered_stores_df[~filtered_stores_df[storemstrmapping["partner_id"]].isin(active_control_stores["constore_id"])]
        else:
            filtered_stores_df = filtered_stores_df
        # Remove active test and control stores from population
    else:
        # THIS MEANS THERE ARE NO ACTIVE TESTS AND WE NEED NOT ELIMINATE ANY TEST AND CONTROL STORES
        filtered_stores_df = stores_master_df
    return filtered_stores_df



class identify_control_stores_server_side(generics.ListCreateAPIView):

    def post(self, request):
        global control_stores, use_history_df
        start_time = time.perf_counter()

        # Request data
        import json as j
        region_name = request.META['HTTP_COUNTRY']
        data = j.loads(request.body)
        datas = data['data']
        test_id = datas['test_id']
        pageSizeOptions = datas['pageSizeOptions']
        pageIndex = datas['pageIndex']
        try:
            cacheUrl = str(test_id)+'_'+region_name
            print(cacheUrl, 'ryl')
            resultsCacheData = cache.get(cacheUrl)
            print(resultsCacheData.shape)
            resultPagination = Paginator(resultsCacheData, pageSizeOptions)
            objeList = resultPagination.page(pageIndex)
            return json.Response({
                'results': list(objeList.object_list),
                'total_records': resultPagination.count,
                'total_pages': resultPagination.num_pages,
                'page': objeList.number,
                'has_next': objeList.has_next(),
                'has_prev': objeList.has_previous()
            }, True)
        except:
            raise APIException(traceback.print_exc())
import time

import gower
import numpy as np
import pandas as pd
from django.core.cache import cache
from scipy import stats
from scipy.stats import t
from .helpers import getRowResults
import traceback
import config.config_data as config
import logging
from datetime import datetime, timedelta
from api.models import StoreMstr
from .utils.gower_distance import gower_matrix

config_data = config.data

logger = logging.getLogger(__name__)


def stringToArray(data):
    arrayData = data.split(',')
    return arrayData
# Common Utilities

def check_if_store_valid(storesfile=None, region_data=None):
    stores_master_df = storesfile.copy(deep=True)

    if region_data != 'AUS':
        stores_master_df["Is Valid Store"] = 1
        # Valid or Invalid Stores Flags
        stores_master_df.loc[(stores_master_df["Outlet_surface"].isin([0])), "Is Valid Store"] = 0
        stores_master_df.loc[(stores_master_df["Outlet_surface"].isna()), "Is Valid Store"] = 0
        stores_master_df.loc[(stores_master_df["CSV_of_outlet"].isin([0])), "Is Valid Store"] = 0
        stores_master_df.loc[(stores_master_df["CSV_of_outlet"].isna()), "Is Valid Store"] = 0
        stores_master_df.loc[stores_master_df["Shelf_meters_Chocolate"].isin(["(NA)"]), "Is Valid Store"] = 0
        stores_master_df.loc[stores_master_df["Shelf_meters_Dog"].isin(["(NA)"]), "Is Valid Store"] = 0
        stores_master_df.loc[stores_master_df["Shelf_meters_Cat"].isin(["(NA)"]), "Is Valid Store"] = 0
        stores_master_df.loc[stores_master_df["Influence_Chocolate"].isna(), "Is Valid Store"] = 0
        stores_master_df.loc[stores_master_df["Influence_Petcare"].isna(), "Is Valid Store"] = 0
        stores_master_df.loc[stores_master_df["Influence_Overall"].isna(), "Is Valid Store"] = 0
        invalid_stores = stores_master_df[stores_master_df["Is Valid Store"] == 0]
        stores_master_df = stores_master_df[stores_master_df["Is Valid Store"] == 1]

        # Type conversions and Formatting
        stores_master_df["Outlet_surface"] = stores_master_df["Outlet_surface"].astype("float")
        stores_master_df["CSV_of_outlet"] = stores_master_df["CSV_of_outlet"].astype("float")
        stores_master_df["Shelf_meters_Chocolate"] = stores_master_df["Shelf_meters_Chocolate"].apply(lambda x: float(str(x)[:-1]))
        # stores_master_df["Shelf_meters_Dog"] = stores_master_df["Shelf_meters_Dog"].apply(lambda x: x.replace(",", "."))
        stores_master_df["Shelf_meters_Dog"] = stores_master_df["Shelf_meters_Dog"].apply(lambda x: float(str(x)[:-1]))
        # stores_master_df["Shelf_meters_Cat"] = stores_master_df["Shelf_meters_Cat"].apply(lambda x: x.replace(",", "."))
        stores_master_df["Shelf_meters_Cat"] = stores_master_df["Shelf_meters_Cat"].apply(lambda x: float(str(x)[:-1]))
        stores_master_df = pd.concat([stores_master_df, invalid_stores])

        return stores_master_df
    else:
        # logger.info("AUS")
        stores_master_df["Is Valid Store"] = 1

        # Valid or Invalid Stores Flags
        stores_master_df.loc[
            (stores_master_df[config_data[region_data]['store_mstr_columns']['segment']].isna()), "Is Valid Store"] = 0
        stores_master_df.loc[
            (stores_master_df[config_data[region_data]['store_mstr_columns']['baycount']].isna()), "Is Valid Store"] = 0
        stores_master_df.loc[(stores_master_df[config_data[region_data]['store_mstr_columns'][
            'storegrid']].isna()), "Is Valid Store"] = 0
        stores_master_df.loc[(stores_master_df[config_data[region_data]['store_mstr_columns'][
            'territory']].isna()), "Is Valid Store"] = 0

        return stores_master_df


def get_valid_weekly_target_data(target_variable=None, config=config, business_categories=[],
                                 test_type=None, prewindow_start=None,
                                 prewindow_end=None, postwindow_start=None, postwindow_end=None):
    try:
        if target_variable is not None:
            weekly_target_master = config['tables']['weekly_mstr']
            weekly_CacheData = cache.get(weekly_target_master)
            if weekly_CacheData is None:

                sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
                    config['tables']['weekly_mstr']))
                cache.set(weekly_target_master, getRowResults(sql_query_wk, (1, 0)), 84000)
                weekly_CacheData = cache.get(weekly_target_master)

            weekly_target_variables_file = pd.DataFrame(weekly_CacheData)
            # logger.info(weekly_target_master + ":" + str(time.perf_counter() - start_time))
            tarvarmapping = config["weekly_target_variable"]
            # storemstrmapping = config["store_mstr_columns"]
            metadata = config["metadata"]

            if len(business_categories) > 0:
                rsv_categories_columns = [val + "_" + tarvarmapping["rsv"] for val in business_categories]
                volume_categories_columns = [val + "_" + tarvarmapping["volume"] for val in business_categories]

                weekly_target_variables_file[tarvarmapping["rsv"]] = weekly_target_variables_file[
                    rsv_categories_columns].sum(axis=1)
                weekly_target_variables_file[tarvarmapping["volume"]] = weekly_target_variables_file[
                    volume_categories_columns].sum(axis=1)

            if test_type == 'RTM Impact Test':
                # Get all Week in Pre-period
                pre_window_yearweeks = find_weeks(datetime.strptime(prewindow_start, '%Y-%m-%d').date(),
                                                  datetime.strptime(prewindow_end, '%Y-%m-%d').date())

                post_window_yearweeks = find_weeks(datetime.strptime(postwindow_start, '%Y-%m-%d').date(),
                                                   datetime.strptime(postwindow_end, '%Y-%m-%d').date())

                # Remove stores which have zero sales in any of the weeks
                weekly_target_variables_file = weekly_target_variables_file[
                    weekly_target_variables_file[tarvarmapping["week"]].isin(
                        pre_window_yearweeks + post_window_yearweeks)]
                eliminatestores1 = weekly_target_variables_file[weekly_target_variables_file[target_variable] == 0][
                    tarvarmapping["partner_id"]].unique()
                weekly_target_variables_file = weekly_target_variables_file[
                    ~(weekly_target_variables_file[tarvarmapping["partner_id"]].isin(eliminatestores1))]


                # Remove stores which dont have sales in any of the weeks
                weekcountsdf = weekly_target_variables_file.groupby(tarvarmapping["partner_id"])[
                    tarvarmapping["week"]].nunique().reset_index().rename(columns={tarvarmapping["week"]: "Week_Count"})
                eliminatestores2 = \
                weekcountsdf[weekcountsdf["Week_Count"] < len(set(pre_window_yearweeks + post_window_yearweeks))][
                    tarvarmapping["partner_id"]].unique()
                weekly_target_variables_file = weekly_target_variables_file[
                    ~(weekly_target_variables_file[tarvarmapping["partner_id"]].isin(eliminatestores2))]
                consideryearweeks = (pre_window_yearweeks, post_window_yearweeks)
            else:
                yearweeks = find_last104_weeks_from_baseline_end(prewindow_end)
                yearweeks.sort(reverse=True)
                consideryearweeks = yearweeks[:metadata['test_configuration']["sales_weeks"]]
                consideryearweeks.sort(reverse=False)

                # Remove stores which have zero sales in any of the weeks
                weekly_target_variables_file = weekly_target_variables_file[
                    weekly_target_variables_file[tarvarmapping["week"]].isin(consideryearweeks)]
                eliminatestores1 = weekly_target_variables_file[weekly_target_variables_file[target_variable] == 0][
                    tarvarmapping["partner_id"]].unique()
                weekly_target_variables_file = weekly_target_variables_file[
                    ~(weekly_target_variables_file[tarvarmapping["partner_id"]].isin(eliminatestores1))]

                # Remove stores which dont have sales in any of the weeks
                weekcountsdf = weekly_target_variables_file.groupby(tarvarmapping["partner_id"])[
                    tarvarmapping["week"]].nunique().reset_index().rename(columns={tarvarmapping["week"]: "Week_Count"})
                eliminatestores2 = weekcountsdf[weekcountsdf["Week_Count"] < metadata['test_configuration']["sales_weeks"]][
                    tarvarmapping["partner_id"]].unique()
                weekly_target_variables_file = weekly_target_variables_file[
                    ~(weekly_target_variables_file[tarvarmapping["partner_id"]].isin(eliminatestores2))]

            aggdf = weekly_target_variables_file.groupby(tarvarmapping["partner_id"])[target_variable].sum().reset_index()

            aggdf = aggdf.sort_values(target_variable, ascending=True)
            aggdf["Reference"] = aggdf[target_variable].shift(1)
            aggdf["Difference_Percentage"] = aggdf[target_variable] - aggdf["Reference"]
            aggdf["Difference_Percentage"] = (aggdf["Difference_Percentage"] / aggdf["Reference"]) * 100
            aggdf["Difference_Percentage"] = aggdf["Difference_Percentage"].round()
            eliminatestores3 = aggdf[aggdf["Difference_Percentage"] > metadata['test_configuration']["sales_diff_percentage"]][
                tarvarmapping["partner_id"]].unique()
            weekly_target_variables_file = weekly_target_variables_file[
                ~(weekly_target_variables_file[tarvarmapping["partner_id"]].isin(eliminatestores3))]

            return weekly_target_variables_file, consideryearweeks
        else:
            return "Please pass Target variable"
    except:
        traceback.print_exc()

def validate_test_stores(test_stores=None, compare_variables=[], banners=[], segments=[], store_segments=[], territories=[], annualrsvdatayear=None, config_region=config):
    try:
        # start_time = time.clock()
        if (test_stores is not None) & (len(compare_variables) != 0):
            # Pvalue count
            count = 0
            # Read the files
            storemstrmapping = config_region["store_mstr_columns"]
            tarvarmapping = config_region["weekly_target_variable"]
            metadata = config_region["metadata"]

            # Create variables threshold dict
            variables_thresholds_dict = {k: metadata["test_planning"]["test_vs_population_pvalue"] for k in compare_variables}

            stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
                                                 territories=territories, config=config_region)

            stores_master_df = stores_master_df.merge(annualrsvdatayear,
                                                      left_on=[storemstrmapping["partner_id"],
                                                               storemstrmapping["banner"]],
                                                      right_on=[tarvarmapping["partner_id"], tarvarmapping["banner"]])


            for col in compare_variables:
                tStat, pVal = stats.ttest_ind(test_stores[col], stores_master_df[col], nan_policy='omit')
                pVal = round(pVal, 2)
                if pVal >= variables_thresholds_dict[col]:
                    count += 1
        else:
            return "Please pass appropriate parameters"
        return count

    except:
        traceback.print_exc()


def get_total_weekly_target_data(config=config, business_categories=[], prewindow_start=None,
                                                       prewindow_end= None, postwindow_start=None,
                                                       postwindow_end= None):
        # start_time = time.perf_counter()
        weekly_target_master = config['tables']['weekly_mstr']
        weekly_CacheData = cache.get(weekly_target_master)
        if weekly_CacheData is None:
            # logger.info("Cache" + weekly_target_master + "is none")
            sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config['tables']['weekly_mstr']))
            cache.set(weekly_target_master, getRowResults(sql_query_wk, (1, 0)), 84000)
            weekly_CacheData = cache.get(weekly_target_master)
        weekly_target_variables_file = pd.DataFrame(weekly_CacheData)
        tarvarmapping = config["weekly_target_variable"]
        storemstrmapping = config["store_mstr_columns"]
        metadata = config["metadata"]

        if len(business_categories) != 0:
            rsv_categories_columns = [val + "_" + tarvarmapping["rsv"] for val in business_categories]
            volume_categories_columns = [val + "_" + tarvarmapping["volume"] for val in business_categories]
            weekly_target_variables_file[tarvarmapping["rsv"]] = weekly_target_variables_file[
                rsv_categories_columns].sum(axis=1)
            weekly_target_variables_file[tarvarmapping["volume"]] = weekly_target_variables_file[
                volume_categories_columns].sum(axis=1)
        # yearweeks = weekly_target_variables_file[tarvarmapping["week"]].unique().tolist()
        yearweeks = find_last104_weeks_from_baseline_end(prewindow_end)
        yearweeks.sort(reverse=True)
        consideryearweeks = yearweeks[:metadata['test_configuration']["sales_weeks"]]
        consideryearweeks.sort(reverse=False)
        weekly_target_variables_file = weekly_target_variables_file[
            weekly_target_variables_file[tarvarmapping["week"]].isin(consideryearweeks)]
        return weekly_target_variables_file, consideryearweeks

def get_feature_thresholds(teststores, controlstores, features, config):
    # start_time = time.clock()
    threshold_dict = dict()
    metadata = config["metadata"]
    for feature in features:
        std1 = teststores[feature].std()
        std2 = controlstores[feature].std()
        samples1 = teststores[feature].shape[0]
        samples2 = controlstores[feature].shape[0]
        numerator = np.power((std1 * std1 / samples1 + std2 * std2 / samples2), 2)
        denominator = (
                    np.power((std1 * std1 / samples1), 2) / (samples1 - 1) + np.power((std2 * std2 / samples2), 2) / (
                        samples2 - 1))
        degfreedom = numerator / denominator
        pval = metadata["test_planning"]["test_vs_control_pvalue"]
        criticalvalue = t.ppf(1 - pval / 2, degfreedom)
        difference_in_means = criticalvalue * np.sqrt((std1 * std1 / samples1 + std2 * std2 / samples2))
        threshold_dict[feature] = round(difference_in_means, 2)
    return threshold_dict


def get_annual_rsv_lifts(target_variable=None, config=config, business_categories=[],
                         test_type=None, prewindow_start=None,regionName=None,
                         prewindow_end=None, postwindow_start=None, postwindow_end=None):

    start_time = time.perf_counter()
    config_cols = config
    tarvarmapping = config["weekly_target_variable"]
    storemstrmapping = config["store_mstr_columns"]
    metadata = config["metadata"]

    # Getting the the target varaibles file
    weekly_target_variables_file, consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable,
                                                                                   business_categories=business_categories,
                                                                                   test_type=test_type,
                                                                                   prewindow_start=prewindow_start,
                                                                                   prewindow_end=prewindow_end,
                                                                                   postwindow_start=postwindow_start,
                                                                                   postwindow_end=postwindow_end, config=config_cols)

    if test_type == 'RTM Impact Test':
        weeks1 = consideryearweeks[0]
        weeks2 = consideryearweeks[1]
    else:
        weeks1 = consideryearweeks[:metadata['test_configuration']["sales_lifts_sales_weeks"]]
        weeks2 = consideryearweeks[metadata['test_configuration']["sales_lifts_sales_weeks"]:]
    weeklyrsvdatayear1 = weekly_target_variables_file[weekly_target_variables_file[tarvarmapping["week"]].isin(weeks1)]
    weeklyrsvdatayear2 = weekly_target_variables_file[weekly_target_variables_file[tarvarmapping["week"]].isin(weeks2)]
    weeklyrsvdatayear1[tarvarmapping["year"]] = "Year1"
    weeklyrsvdatayear2[tarvarmapping["year"]] = "Year2"

    aggdict = {k: sum for k in [tarvarmapping["rsv"], tarvarmapping["volume"]]}

    groupbycolumns = [tarvarmapping["partner_id"]] + [tarvarmapping["banner"]] + [tarvarmapping["year"]]
    annualrsvdatayear1 = weeklyrsvdatayear1.groupby(groupbycolumns).agg(aggdict).reset_index()
    annualrsvdatayear2 = weeklyrsvdatayear2.groupby(groupbycolumns).agg(aggdict).reset_index()

    annualrsvdatayear1.rename(columns={tarvarmapping["rsv"]: tarvarmapping["rsv"] + ' Year 1',
                                       tarvarmapping["volume"]: tarvarmapping["volume"] + ' Year 1'}, inplace=True)
    annualrsvdatayear2.rename(columns={tarvarmapping["rsv"]: tarvarmapping["rsv"] + ' Year 2',
                                       tarvarmapping["volume"]: tarvarmapping["volume"] + ' Year 2'}, inplace=True)
    mergecols = [tarvarmapping["partner_id"]] + [tarvarmapping["banner"]]

    annualrsvdatamerged = annualrsvdatayear1.merge(annualrsvdatayear2, on=mergecols)
    annualrsvdatamerged.drop([tarvarmapping["year"] + "_x", tarvarmapping["year"] + "_y"], axis=1, inplace=True)

    salesfilter = ((annualrsvdatamerged[target_variable + " Year 1"] > 0) & (
                annualrsvdatamerged[target_variable + " Year 2"] > 0))
    annualrsvdatamerged = annualrsvdatamerged[salesfilter]
    annualrsvdatamerged[target_variable + " Lift"] = (annualrsvdatamerged[target_variable + " Year 2"] -
                                                      annualrsvdatamerged[target_variable + " Year 1"]) / \
                                                     annualrsvdatamerged[target_variable + " Year 1"]

    return annualrsvdatamerged


def filter_population(banners=[], segments=[], store_segments=[], territories=[], config=config, regionName=None, test_type=None):
    # start_time = time.clock()
    storemstrmapping = config["store_mstr_columns"]

    #sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
    #    config['tables']['store_mstr']))
    # = getRowResults(sql_query, (1, 0))
    stores_master_df = StoreMstr.objects.filter(is_active=1, is_deleted=0).values()

    stores_master_df = pd.DataFrame(stores_master_df)

    # Create filters
    banner_filter = (stores_master_df[storemstrmapping["banner"]].isin(banners))
    segment_filter = (stores_master_df[storemstrmapping["storegrid"]].isin(segments))
    store_segment_filter = (stores_master_df[storemstrmapping["segment"]].isin(store_segments))
    territory_filter = (stores_master_df[storemstrmapping["territory"]].isin(territories))

    # Filter the stores only from the input filters
    stores_master_df = stores_master_df[banner_filter & segment_filter & store_segment_filter & territory_filter]

    if (regionName == 'UK') and (test_type != 'RTM Impact Test'):
        stores_master_df = stores_master_df[stores_master_df.Customer_Status == 'Active']
    return stores_master_df

def filter_active_test_control_stores(stores_master_df=None, config=config):
    # start_time = time.clock()
    sql_test_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config['tables']['test_mstr'])
    results = getRowResults(sql_test_mstr, (1, 0))
    test_master_df = pd.DataFrame(results)
    storemstrmapping = config["store_mstr_columns"]

    sql_teststore_map = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(config['tables']['test_store_map'])
    results = getRowResults(sql_teststore_map, (1, 0))
    teststore_map_df = pd.DataFrame(results)

    sql_controlstore_mstr = "SELECT * FROM {} WHERE is_active=? and is_deleted=?".format(
        config['tables']['control_store_mstr'])
    results = getRowResults(sql_controlstore_mstr, (1, 0))
    controlstore_map_df = pd.DataFrame(results)

    active_tests_df = test_master_df[test_master_df["is_active"] == True]

    if active_tests_df.shape[0] != 0:
        # THIS MEANS THERE ARE ACTIVE TESTS AND WE NEED TO ELIMINATE ACTIVE TEST AND CONTROL STORES
        # Get the active test stores using test ids # Remove active test and control stores from population
        if teststore_map_df.size > 0:
            active_test_stores = teststore_map_df[teststore_map_df["test_id_id"].isin(active_tests_df["test_id"])]
            filtered_stores_df = stores_master_df[
                ~stores_master_df[storemstrmapping["partner_id"]].isin(active_test_stores["teststore_id"])]
            # Get the active control stores using test ids
            if controlstore_map_df.size > 0:
                active_control_stores = controlstore_map_df[
                    controlstore_map_df["test_id_id"].isin(active_tests_df["test_id"])]
                filtered_stores_df = filtered_stores_df[
                    ~filtered_stores_df[storemstrmapping["partner_id"]].isin(active_control_stores["constore_id"])]
    else:
        # THIS MEANS THERE ARE NO ACTIVE TESTS AND WE NEED NOT ELIMINATE ANY TEST AND CONTROL STORES
        filtered_stores_df = stores_master_df

    return filtered_stores_df

def prepare_test_control_stores(dfA=None, dfB=None, teststoreid=None, gowerdistances=None, num_cntrl_rejected=None, calltype=None,config=config,
                                reqcontrolstores=None,corrbased=None):
    # start_time = time.clock()
    storemstrmapping = config["store_mstr_columns"]
    tarvarmapping = config["weekly_target_variable"]
    metadata = config["metadata"]

    dfB["Gower_Distance"] = gowerdistances
    dfB = dfB.sort_values(by="Gower_Distance", ascending=True)
    dfB["Similarity_Measure"] = 1 - dfB["Gower_Distance"]

    if num_cntrl_rejected is None:
        if calltype == "old":
            dfB = dfB.head(1)
        if calltype == "new":
            if corrbased == 1:
                top5_percent_stores = dfB[dfB['Similarity_Measure'] > (dfB['Similarity_Measure'].max() - 0.05)]
                if top5_percent_stores.shape[0] >= reqcontrolstores:
                    dfB = top5_percent_stores
                else:
                    dfB = dfB.head(reqcontrolstores)
            else:
                dfB = dfB.head(reqcontrolstores)
    else:
        if calltype == "old":
            dfB = dfB.head(num_cntrl_rejected[teststoreid] + 1).tail(1)
        if calltype == "new":
            if corrbased == 1:
                dfB_temp = dfB.iloc[num_cntrl_rejected[teststoreid] + 1:, :]
                top5_percent_stores = \
                dfB_temp[dfB_temp['Similarity_Measure'] > (dfB_temp['Similarity_Measure'].max() - 0.05)].shape[0]
                if top5_percent_stores > reqcontrolstores:
                    reqcontrolstores = top5_percent_stores
            dfB = dfB.head(num_cntrl_rejected[teststoreid] + reqcontrolstores).tail(reqcontrolstores)

    filteredteststoredf = dfA[dfA[storemstrmapping["partner_id"]] == teststoreid]
    for col in metadata['test_planning']["teststores_columns"]:
        dfB["Test_store_" + col] = filteredteststoredf[col].values[0]
    return dfB


def get_test_control_stores_correlation(dfA=None, dfB=None, test_control_stores=None, weekcolumns=None,
                                        num_cntrl_rejected=None, corrbased=None, reqcontrolstores=None, config=config):

    storemstrmapping = config["store_mstr_columns"]
    tarvarmapping = config["weekly_target_variable"]
    dfA = dfA[dfA[storemstrmapping["partner_id"]].isin(
        test_control_stores["Test_store_" + storemstrmapping["partner_id"]].unique())]
    dfB = dfB[dfB[storemstrmapping["partner_id"]].isin(test_control_stores[storemstrmapping["partner_id"]].unique())]
    A = dfA[weekcolumns].values.T
    B = dfB[weekcolumns].values.T
    # time1 = time.clock()
    N = B.shape[0]
    sA = A.sum(0)
    sB = B.sum(0)
    p1 = N * np.einsum('ij,ik->kj', A, B)
    p2 = sA * sB[:, None]
    p3 = N * ((B ** 2).sum(0)) - (sB ** 2)
    p4 = N * ((A ** 2).sum(0)) - (sA ** 2)
    pcorr = ((p1 - p2) / np.sqrt(p4 * p3[:, None]))
    test_store_dict = dict(zip(dfA[storemstrmapping["partner_id"]].values.tolist(),
                               range(0, dfA[storemstrmapping["partner_id"]].nunique(), 1)))
    control_store_dict = dict(zip(dfB[storemstrmapping["partner_id"]].values.tolist(),
                                  range(0, dfB[storemstrmapping["partner_id"]].nunique(), 1)))

    test_control_stores['Correlation'] = test_control_stores[
        ['Test_store_' + storemstrmapping["partner_id"], storemstrmapping["partner_id"]]] \
        .apply(lambda x: pcorr[control_store_dict[x[storemstrmapping["partner_id"]]]][
        test_store_dict[x['Test_store_' + storemstrmapping["partner_id"]]]], axis=1)
    test_control_stores = test_control_stores.sort_values(
        by=["Test_store_" + storemstrmapping["partner_id"], "Similarity_Measure"], ascending=False)
    if corrbased == 1:
        test_control_stores = test_control_stores.sort_values(
            by=["Test_store_" + storemstrmapping["partner_id"], "Correlation"], ascending=False)
    else:
        pass

    if num_cntrl_rejected is None:
        test_control_stores = test_control_stores.groupby(["Test_store_" + storemstrmapping["partner_id"]],
                                                          as_index=False, sort=False).head(reqcontrolstores)
    else:
        test_control_stores = test_control_stores.groupby(["Test_store_" + storemstrmapping["partner_id"]]).apply(
            lambda x: x.head(num_cntrl_rejected[x.name] + 1).tail(1)).reset_index(drop=True)
    test_control_stores[['Gower_Distance', 'Similarity_Measure', 'Correlation']] = test_control_stores[
        ['Gower_Distance', 'Similarity_Measure', 'Correlation']].round(2)
    return test_control_stores

def stringToArray(data):
    if data != '':
        arrayData = data.split(',')
        return arrayData
    else:
        return []

def find_weeks(start,end):
    l = []
    for i in range((end-start).days + 1):
        d = (start+timedelta(days=i+1)).isocalendar()[:2] # e.g. (2011, 52)
        yearweek = '{}{:02}'.format(*d) # e.g. "201152"
        l.append(yearweek)
    return sorted(set(l))
# Common Utilities

def prepare_test_control_stores_vecotrize(useA=None, useB=None, teststore_array=None, control_df=None, calltype=None,
                                          reqcontrolstores=None, corrbased=None, config=config):
    storemstrmapping = config["store_mstr_columns"]
    tarvarmapping = config["weekly_target_variable"]
    metadata = config["metadata"]["test_planning"]
    gowermatrix = gower_matrix(useA, useB)
    test_control = []
    segment_size = teststore_array.shape[0] // 50
    for i in range(50):
        if i == 49:
            test_df = pd.DataFrame(columns=['Test_store_' + storemstrmapping["partner_id"]],
                                   data=teststore_array[i * segment_size:])
            test_df['key'] = 1
            final = test_df.merge(control_df, on='key')
            final.drop(columns=['key'], inplace=True)
            final['Gower_Distance'] = gowermatrix[i * segment_size:].flatten(order='A')
        else:
            test_df = pd.DataFrame(columns=['Test_store_' + storemstrmapping["partner_id"]],
                                   data=teststore_array[i * segment_size:(i + 1) * segment_size])
            test_df['key'] = 1
            final = test_df.merge(control_df, on='key')
            final.drop(columns=['key'], inplace=True)
            final['Gower_Distance'] = gowermatrix[i * segment_size:(i + 1) * segment_size].flatten(order='A')

        if calltype == "old":
            final = final.sort_values(by="Gower_Distance", ascending=True)
            final = final.groupby('Test_store_' + storemstrmapping["partner_id"]).head(1).reset_index(drop=True)
        if calltype == "new":
            final = final.sort_values(by="Gower_Distance", ascending=True)
            if corrbased == 1:
                min_gower_dist_pair = final.drop_duplicates(subset=['Test_store_' + storemstrmapping["partner_id"]])
                min_gower_dist_pair['Gower_Distance'] = min_gower_dist_pair['Gower_Distance'] + 0.05
                min_gower_dist_pair = min_gower_dist_pair.drop(columns=[storemstrmapping["partner_id"]]).rename(
                    columns={'Gower_Distance': 'Min_Gower_dist'})
                final = final.merge(min_gower_dist_pair, on=['Test_store_' + storemstrmapping["partner_id"]])
                final['flag'] = final['Gower_Distance'] < final['Min_Gower_dist']
                top_5_percent_store = final.groupby(['Test_store_' + storemstrmapping["partner_id"]])[
                    'flag'].sum().reset_index()
                top_5_percent_store = top_5_percent_store[top_5_percent_store['flag'] >= reqcontrolstores][
                    ['Test_store_' + storemstrmapping["partner_id"]]]
                final = final.merge(top_5_percent_store, how='left', on='Test_store_' + storemstrmapping["partner_id"],
                                    indicator=True)
                df1 = final[(final['_merge'] == 'both') & (final['flag'] == True)]
                df2 = final[final['_merge'] == 'left_only'].groupby(
                    'Test_store_' + storemstrmapping["partner_id"]).head(reqcontrolstores)
                final = pd.concat([df1, df2], sort=False, ignore_index=True)
                final.drop(columns=['_merge', 'flag', 'Min_Gower_dist'], inplace=True)
            else:
                final = final.groupby('Test_store_' + storemstrmapping["partner_id"]).head(
                    reqcontrolstores).reset_index(drop=True)
        test_control.append(final)
    test_control = pd.concat(test_control, sort=False, ignore_index=True)
    test_control["Similarity_Measure"] = 1 - test_control["Gower_Distance"]
    return test_control

def find_last104_weeks_from_baseline_end(baseline_end):
    baseline_end = datetime.strptime(baseline_end, '%Y-%m-%d').date()
    baseline_end_prev104weeks = baseline_end - timedelta(weeks = 104)
    yearweeks_timeline = []
    for i in range((baseline_end-baseline_end_prev104weeks).days + 1):
        d = (baseline_end_prev104weeks+timedelta(days=i+1)).isocalendar()[:2]
        yearweek = '{}{:02}'.format(*d) # e.g. "201152"
        yearweeks_timeline.append(yearweek)
    return sorted(set(yearweeks_timeline))
import time

import numpy as np
import pandas as pd
from scipy import stats
from scipy.stats import t
from .helpers import getSingleRecordResult, getRowResults, executeDML, \
    execute_DML_return_primary_key, executeManyDML
from .serializers import *
from .models import *
import os
from . import json
from rest_framework import generics
from django.views.generic import ListView
import traceback
import config.config_data as config
import logging
logger = logging.getLogger(__name__)
config_data = config.data


def startEnd(date, end=False):
    import datetime
    day = -1
    if end:
        day = 5
    date = datetime.datetime.strptime(date, '%Y-%m-%d')
    if end:
        if(date.weekday()<=6):
            date = date + datetime.timedelta(days=7)
        if(date.weekday()==5):
            date = date - datetime.timedelta(days=7)
    if(end==False):
        if(date.weekday()!=6):
            return  date - datetime.timedelta(days=7)
    return date - datetime.timedelta(days=(date.weekday() - day) % 7)


class Parameter(ListView):

    def get(self,serializer):
        # my_conn = conn()
        region_name = self.request.META['HTTP_COUNTRY']

        # gettestStore = my_conn.execute('''SELECT * FROM {} WHERE is_active = '{}' and is_deleted = '{}' '''.format(config_data[region_name]['tables']['store_mstr'],True, False))
        # results = getRowResult(gettestStore)

        sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_data[region_name]['tables']['store_mstr']))
        results = getRowResults(sql_query, (1,0))

        banner = []
        segment = []
        territory = []
        store_grid =[]
        for dat in results:
            banner.append(dat[config_data[region_name]['store_mstr_columns']['banner']])
            segment.append(dat[config_data[region_name]['store_mstr_columns']['segment']])
            territory.append(dat[config_data[region_name]['store_mstr_columns']['territory']])
            store_grid.append(dat[config_data[region_name]['store_mstr_columns']['storegrid']])
        finalbanner = []
        finalsegmet = []
        finalterritory = []
        finalstore =[]
        for i in banner:
            if i not in finalbanner:
                if i != "nan":
                    finalbanner.append(i)
        for j in segment:
            if j not in finalsegmet:
                if j != "nan":
                    finalsegmet.append(j)
        for k in territory:
            if k not in finalterritory:
                if k != "nan":
                    finalterritory.append(k)
        for l in store_grid:
            if l not in finalstore:
                if l != "nan":
                    finalstore.append(l)

        result = {
        "banner" : finalbanner,
        "segment" : finalsegmet,
        "territory" : finalterritory,
        "store_grid" :finalstore
        }
        # my_conn.close()
        return json.Response(result,True)


class Edit_TestStore(generics.RetrieveUpdateDestroyAPIView):

    def get(self, request, pk):
        test_master = TestMstr.objects.get(test_id=pk)
        test_serializer = TestSerializer(test_master)

        record_master = RecordMstr.objects.filter(test_id_id=pk).values()
        record_list = []
        for record in record_master:
            record_list.append(record)
        results = test_serializer.data
        results.update({"records": record_list})
        return json.Response(results, True)

    def delete(self, request, pk):
        try:
            TestMstr.objects.filter(test_id=pk).update(deleted_at=int(time.time()), is_deleted=1, is_active=0)
            return json.Response('Test Deleted Successfully', True)
        except:
            return json.Response('Can`t able to delete data', False)


class SaveWeeklyData(generics.ListCreateAPIView):

    def post(self, request):
        filename = request.FILES['week_data']
        if filename:
            filename_check = filename.name
            ext = [".xlsx", ".csv", ".xls"]
            if filename_check.endswith(tuple(ext)):
                extesnion = os.path.splitext(filename_check)[1]
                if (extesnion == '.csv'):
                    data = pd.read_csv(filename, engine='python')
                else:
                    data = pd.read_excel(filename)
                # try:
                for i in data.index:
                    if(data['Partner_ID'][i]==None):
                            break;
                    else:
                        Save_weekly = WeeklyStrMst(
                            banner                        = data['Banner'][i],
                            chocolate_rsv                 = data['Chocolate RSV'][i],
                            chocolate_units               = data['Chocolate Units'][i],
                            outlet_banner                 = data['Outlet Banner Code'][i],
                            partner_ID                    = data['Partner_ID'][i],
                            petcare_RSV                   = data['Petcare RSV'][i],
                            petcate_units                 = data['Petcare Units'][i],
                            rsv                        	  = data['RSV'][i],
                            volume                        = data['Volume'][i],
                            week                          = data['Week'][i],
                            year                          = data['Year'][i],
                            segment                       = data['Segment'][i],
                            territory                     = data['Territory'][i],
                            csv_outlet_segment            = data['CSV of outlet Segment'][i],
                            influence_segment             = data['Influence Segment'][i],
                            overall_segment               = data['Overall_Segment'][i]
                            )
                        Save_weekly.save()

    # return "Ssf"


class SaveStage(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        datas = data['data']

        if 'desc' not in datas:
            desc = ""
        else:
            desc = datas['desc']

        if 'additional_det' not in datas:
            additional_det = ""
        else:
            additional_det = datas['additional_det']

        region_name = request.META['HTTP_COUNTRY']
        headers= request.META['HTTP_AUTHORIZATION']
        split_token = headers.split('Bearer ')
        jwt_token = split_token[1]
        get_user = ("SELECT * FROM {} WHERE jwt_token =?".format(config_data['common_tbl']['auth_token']))
        get_user = getRowResults(get_user, (jwt_token))
        config_cols = config_data[region_name]

        if 'test_id' not in datas:
            sql = "SELECT * FROM {} WHERE LOWER(test_name)=? and is_deleted=?".format(
                config_cols['tables']['test_mstr'])
            test_record = getSingleRecordResult(sql, (datas['test_name'].lower(), False))
            if test_record:
                return json.Response('Duplicate test name not allowed', False)
        if (get_user):
            user_id = get_user[0]['user_id_id']
            if (datas['stepindex'] == 1):
                checkTestName = TestMstr.objects.filter(is_active=True, is_deleted=False, test_name=datas['test_name'])
                result = LoadDataSeralizer(checkTestName, many=True)
                if ('test_id' not in datas or datas['test_id'] == '') and len(result.data) != 0:
                    return json.Response("Duplicate TestName is not allowed", True)
                if 'test_id' not in datas or datas['test_id'] == '':
                    param = (datas['test_name'],
                             user_id,
                             desc,
                             additional_det,
                             datas['test_type'],
                             str(datas['target_variable']),
                             datas['pretest_startdt'],
                             datas['pretest_enddt'],
                             datas['testwin_startdt'],
                             datas['testwin_enddt'],
                             datas['stepindex'],
                             datas['stage_id'],
                             int(time.time()),
                             False, True, False, False, False)

                    sql = "INSERT INTO {} (test_name, user_id_id, test_desc, test_desc1, testtype, target_var," \
                          "pre_start, pre_end, testwin_start, testwin_end, stepper_id, stage_id," \
                          "created_on, is_deleted, is_active, is_checkconf, is_checkmarg, is_checknum) VALUES " \
                          "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)".format(config_cols['tables']['test_mstr'])

                    id = execute_DML_return_primary_key(sql, param)
                    history_action_track(id, region_name, user_id, 'Created the test')
                    return json.Response(str(id[0]), True)
                else:
                    test_id = datas['test_id']
                    param = (
                        desc,
                        additional_det,
                        datas['test_type'],
                        str(datas['target_variable']),
                        datas['pretest_startdt'],
                        datas['pretest_enddt'],
                        datas['testwin_startdt'],
                        datas['testwin_enddt'],
                        datas['stepindex'],
                        datas['stage_id'],
                        int(time.time()),
                        test_id
                    )
                    sql = "UPDATE {} SET test_desc=?, test_desc1 = ?, testtype = ?, target_var = ?, " \
                          "pre_start=?, pre_end=?, testwin_start=?, testwin_end=?, stepper_id=?, " \
                          "stage_id=?, modified_on=? where test_id = ?".format(config_cols['tables']['test_mstr'])
                    executeDML(sql, param)
                    history_action_track(test_id, region_name, user_id, 'Updated the test details')
                    return json.Response("Updated Successfully", True)

            elif datas['stepindex'] == 2:

                if (datas['is_checkconf']):
                    is_checkconf = 1
                else:
                    is_checkconf = 0
                if (datas['is_checkmarg']):
                    is_checkmarg = 1
                else:
                    is_checkmarg = 0
                if (datas['is_checknum']):
                    is_checknum = 1
                else:
                    is_checknum = 0

                if datas['test_type'] != 'RTM Impact Test':
                    cost = datas['cost']
                    rsv_estimate = datas['rsv_estimate']
                    break_even_lift = datas['break_even_lift']
                else:
                    cost = None
                    rsv_estimate = None
                    break_even_lift = None

                test_id = datas['test_id']
                param = (
                    desc,
                    additional_det,
                    datas['test_type'],
                    str(datas['target_variable']),
                    str(datas['territory']),
                    str(datas['segment']),
                    str(datas['banner']),
                    str(datas['category']),
                    str(datas['store_grid']),
                    cost,
                    rsv_estimate,
                    break_even_lift,
                    is_checkconf,
                    is_checkmarg,
                    is_checknum,
                    datas['strfeature1'],
                    datas['strfeature2'],
                    datas['pretest_startdt'],
                    datas['pretest_enddt'],
                    datas['testwin_startdt'],
                    datas['testwin_enddt'],
                    datas['stepindex'],
                    datas['stage_id'],
                    int(time.time()),
                    test_id
                )
                sql = "UPDATE {} SET test_desc=?, test_desc1 = ?, testtype = ?, target_var = ?, " \
                      "territory_name=?, store_segment=?, banners=?, category_name=?, store_grid=?, " \
                      "cost=?, rsv_estimate=?, break_even_lift=?, is_checkconf=?, is_checkmarg=?, " \
                      "is_checknum=?, store_feature1=?, store_feature2=?, " \
                      "pre_start=?, pre_end=?, testwin_start=?, testwin_end=?, stepper_id=?, " \
                      "stage_id=?, modified_on=? where test_id = ?".format(config_cols['tables']['test_mstr'])
                executeDML(sql, param)
                history_action_track(test_id, region_name, user_id, 'Edited applicability criteria')
                return json.Response("Updated Successfully", True)

            else:
                if datas['stepindex'] == 3:
                    test_id = datas['test_id']
                    if (datas['is_checkconf']):
                        is_checkconf = 1
                    else:
                        is_checkconf = 0
                    if (datas['is_checkmarg']):
                        is_checkmarg = 1
                    else:
                        is_checkmarg = 0
                    if (datas['is_checknum']):
                        is_checknum = 1
                    else:
                        is_checknum = 0

                    param = (
                        datas['confidence_lvl'],
                        float(datas['margin_error']),
                        datas['no_of_teststores'],
                        datas['stepindex'],
                        datas['stage_id'],
                        int(time.time()),
                        datas['selectTestStores'],
                        is_checkconf,
                        is_checkmarg,
                        is_checknum,
                        test_id
                    )
                    sql = "UPDATE {} SET confidence_lev=?, margin_oferror=?, no_of_teststore=?, stepper_id=?, " \
                          "stage_id=?, modified_on=?, select_test_stores=?, is_checkconf=?, is_checkmarg=?, is_checknum=? where test_id = ?".format(
                        config_cols['tables']['test_mstr'])
                    executeDML(sql, param)
                    history_action_track(test_id, region_name, user_id, 'Edited select test store')
                else:
                    test_id = datas['test_id']
                    param = (
                        datas['stepindex'],
                        int(time.time()),
                        test_id
                    )
                    sql = "UPDATE {} SET stepper_id=?, modified_on=? " \
                          "where test_id = ?".format(config_cols['tables']['test_mstr'])
                    executeDML(sql, param)

                remove_storemap_sql = "DELETE FROM {} where test_id_id=?".format(
                    config_cols['tables']['test_store_map'])
                executeDML(remove_storemap_sql, test_id)

                paramList = []
                for store in datas['selectedteststore']:
                    param = (
                        test_id,
                        store[config_cols['store_mstr_columns']['partner_id']],
                        int(time.time()),
                        False,
                        True
                    )
                    paramList.append(param)
                sql = "INSERT INTO {} (test_id_id, teststore_id, created_on, is_deleted, is_active) VALUES (?,?,?,?,?)".format(
                    config_cols['tables']['test_store_map'])
                executeManyDML(sql, paramList)

                param = (
                    test_id,
                    3
                )
                sql = "DELETE FROM {} where test_id_id = ? and stepper_id = ?".format(
                    config_cols['tables']['record_mstr'])
                executeDML(sql, param)

                param = (
                    test_id,
                    datas['stage_id'],
                    datas['records'],
                    str(3),
                    int(time.time()),
                    False,
                    True
                )
                sql = "INSERT INTO {} (test_id_id, stage_id, record_value, stepper_id, created_on, is_deleted, is_active) " \
                      "VALUES(?, ?, ?, ?, ?, ?, ?)".format(config_cols['tables']['record_mstr'])
                executeDML(sql, param)
                return json.Response(test_id, True)
        else:
            return json.Response('Unable to Save', False)

def update_stepIndex(step_index, test_id, config_cols):
    TestMstr.objects.filter(test_id=test_id).update(stepper_id=step_index, modified_on=int(time.time()))


class UpdateStage(generics.ListCreateAPIView):

    def post(self, request):
        import json as j
        data = j.loads(request.body)
        datas = data['data']
        stringify = datas['stringified_data']
        without_stringify = datas['w_stringified_data']
        freeze_compute = datas['freeze_compute']
        isFinalize = datas['is_finalize']
        region_name = request.META['HTTP_COUNTRY']
        config_col = config_data[region_name]
        removee_rec = ("SELECT * FROM {} WHERE is_active =? and is_deleted =? and test_id_id =? and stage_id =? ".format(config_col['tables']['record_mstr']))
        removee_rec = getRowResults(removee_rec,(True, False,datas['trial'], datas['stage_id']))
        if (len(removee_rec) > 0):
            executeDML('DELETE FROM {} WHERE is_active = ? and is_deleted = ? and test_id_id = ? and stage_id = ?'.format(config_col['tables']['record_mstr']), (True, False, datas['trial'], datas['stage_id']))
    
        try:
            if datas['stage_id'] == 2 and datas['stepindex'] == 5:
                executeDML('DELETE FROM {} where test_id_id=?'.format(config_col['tables']['control_store_mstr']), (datas['trial']))
                executeDML('DELETE FROM {} WHERE test_id_id=? and stepper_id=?'.format(config_col['tables']['record_mstr']), (datas['trial'], 5))
                controlSaveParamList = []
                for item in without_stringify["teststores"]:
                    ControlSave_Param = (
                        datas['trial'],
                        item['Test_store_'+config_col['store_mstr_columns']['partner_id']],
                        item[config_col['store_mstr_columns']['partner_id']],
                        item['Test_store_'+config_col['store_mstr_columns']['banner']],
                        item[config_col['store_mstr_columns']['banner']],
                        int(time.time()),
                        int(time.time()),
                        item['Checked_Flag'],
                        True,
                        False
                    )
                    controlSaveParamList.append(ControlSave_Param)
                Test_store_Partner_ID = 'Test_store_' + config_col['store_mstr_columns']['partner_id']
                Test_store_Banner = 'Test_store_' + config_col['store_mstr_columns']['banner']
                Partner_ID = config_col['store_mstr_columns']['partner_id']
                Banner = config_col['store_mstr_columns']['banner']
    
                sql = 'INSERT INTO {} (test_id_id,'+Test_store_Partner_ID+','+Partner_ID+','+Test_store_Banner+','+Banner+', created_on, modified_on, checked_flag, is_active, is_deleted) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    
                executeManyDML(sql.format(config_col['tables']['control_store_mstr']), controlSaveParamList)
    
                executeDML("update {} set  freeze_compute =?, is_finalize =?, modified_on=?, control_stores=?, required_control_stores=? WHERE test_id =? ".format(config_col['tables']['test_mstr']),
                           (freeze_compute, isFinalize, int(time.time()), datas['controlStores'], datas['requiredControlStores'], datas['trial']))
    
            elif datas['stage_id'] == 2 and datas['stepindex'] == 4:
                executeDML(
                    "update {} set  stepper_id =?, modified_on=?, control_stores=?, required_control_stores=? WHERE test_id =? ".format(
                        config_col['tables']['test_mstr']),
                    (datas['stepindex'], int(time.time()), datas['controlStores'], datas['requiredControlStores'],datas['trial']))
                return json.Response('Updated successfully', True)
    
        except:
            traceback.print_exc()
        if datas['stepindex'] != 4:
            executeDML('INSERT INTO {} (created_on,modified_on,is_active,deleted_at,'
                'is_deleted,stage_id,stepper_id,record_value,test_id_id)'
                'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'.format(config_col['tables']['record_mstr']), (int(time.time()),int(time.time()), True, int(time.time()),
                                False, datas['stage_id'], datas['stepindex'],stringify,
                                datas['trial']))
    
            executeDML("update {} set  stage_id =?, stepper_id =?, modified_on=? WHERE test_id =? ".format(config_col['tables']['test_mstr']),(datas['stage_id'], datas['stepindex'], int(time.time()), datas['trial']))
            gettestStore = ("SELECT * FROM {} WHERE is_active=? and is_deleted=? and test_id=? ".format(config_col['tables']['test_mstr']))
            results = getRowResults(gettestStore, (True, False, datas['trial']))
            record_mst = ("SELECT * FROM {} WHERE is_active=? and is_deleted=? and test_id_id =? ".format(
                config_col['tables']['record_mstr']))
            record_mst = getRowResults(record_mst, (True, False, datas['trial']))
            results[0]['records'] = record_mst
            return json.Response(results, True)


class GetRecordsList(generics.ListCreateAPIView):

    def get(self, request, pk):
        try:
            region_name = request.META['HTTP_COUNTRY']
            config_cols = config_data[region_name]
            results = []
            record_mstr = ("SELECT * FROM {} WHERE test_id_id =?".format(config_cols['tables']['record_mstr']))
            results = getRowResults(record_mstr,(pk))
            return json.Response(results, True)
        except Exception as error:
                logger.error('GetRecordsList', error)
                return json.Response('Can`t able to get data', False)


class LoadSaveDataForAnalyze(generics.ListCreateAPIView):
    
    def get(self, request):
        region_name = request.META['HTTP_COUNTRY']
        headers = request.META['HTTP_AUTHORIZATION']
        split_token = headers.split('Bearer ')
        jwt_token = split_token[1]
        get_user = AuthTokenMstr.objects.get(jwt_token=jwt_token)
        user_data = AuthSeralizer(get_user).data
        if (user_data):
            user_id = user_data['user_id']
            from django.db.models.functions import Abs
            test_queryset = TestMstr.objects.filter(is_active=1, is_deleted=0, is_finalize=1).annotate(abs_created_on=Abs('created_on')).order_by("-abs_created_on")
            test_serializer = TestSerializer(test_queryset, many=True)
            results = test_serializer.data
            final_list = []
            for values in results:
                if (values['user_id'] == user_id):
                    values['is_own'] = True
                else:
                    values['is_own'] = False
                values['created_by_id'] = values['created_by']
                values['updated_by_id'] = values['updated_by']
                values['user_id_id'] = values['user_id']
                del values['created_by']
                del values['updated_by']
                del values['user_id']

                final_list.append(values)
            try:
                return json.Response(final_list, True)
            except:
                return json.Response('Can`t able to get data', False)

class LoadSaveData(generics.ListCreateAPIView):

    def get(self, request):
        import json as j
        headers = request.META['HTTP_AUTHORIZATION']
        split_token = headers.split('Bearer ')
        jwt_token = split_token[1]
        get_user = AuthTokenMstr.objects.get(jwt_token=jwt_token)
    
        if(get_user):
            user_data = AuthSeralizer(get_user)
            user_id = user_data.data['user_id']
            GetloadData = TestMstr.objects.filter(is_active=True, is_deleted=False).order_by('-created_on', '-modified_on')
            results = LoadDataSeralizer(GetloadData, many=True)
            final_list = []
            for valu in results.data:
                data_str = j.dumps(valu)
                values = j.loads(data_str)
                if (values['user_id'] == user_id):
                    values['is_own'] = True
                else:
                    values['is_own'] = False
                final_list.append(values)
            try:
                return json.Response(final_list, True)
            except:
                return json.Response('Can`t able to get data', False)

def GetCurrentTest(request,pk):
    try:
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        record_mstr = ("SELECT * FROM {} WHERE is_active=? and is_deleted=? and test_id =?".format(config_cols['tables']['test_mstr']))
        results = getRowResults(record_mstr, (True, False, pk))
        results = results[0]
        record_mstr_data = getRowResults("SELECT * FROM {} WHERE TEST_ID_ID=?;".format(config_cols['tables']['record_mstr']), (pk))
        results['records'] = record_mstr_data
        return json.Response(results, True)
    except Exception as error:
        logger.error(error)
        return json.Response('Can`t able to get data', False)


def find_weeks(start,end):
    import datetime
    l = []
    for i in range((end-start).days + 1):
        d = (start+datetime.timedelta(days=i)).isocalendar()[:2] # e.g. (2011, 52)
        yearweek = '{}{:02}'.format(*d) # e.g. "201152"
        l.append(yearweek)
    return sorted(set(l))

def get_valid_weekly_target_data(target_variable=None):

    if target_variable is not None:

        sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_data['AUS']['tables']['weekly_mstr']))
        weekly_target_variables_file = getRowResults(sql_query_wk, (1,0))
        weekly_target_variables_file = pd.DataFrame(weekly_target_variables_file)

        yearweeks = weekly_target_variables_file["Week"].unique().tolist()
        yearweeks.sort(reverse=True)
        consideryearweeks = yearweeks[:104]
        consideryearweeks.sort(reverse=False)

        #Remove stores which have zero sales in any of the weeks
        weekly_target_variables_file = weekly_target_variables_file[weekly_target_variables_file["Week"].isin(consideryearweeks)]
        eliminatestores1 = weekly_target_variables_file[weekly_target_variables_file[target_variable]==0]["Customer_Name"].unique().tolist()
        weekly_target_variables_file = weekly_target_variables_file[~(weekly_target_variables_file["Customer_Name"].isin(eliminatestores1))]

        #Remove stores which dont have sales in any of the weeks
        weekcountsdf = weekly_target_variables_file.groupby("Customer_Name")["Week"].nunique().reset_index().rename(columns={"Week":"Week_Count"})
        eliminatestores2 = weekcountsdf[weekcountsdf["Week_Count"]<104]["Customer_Name"].unique().tolist()
        weekly_target_variables_file = weekly_target_variables_file[~(weekly_target_variables_file["Customer_Name"].isin(eliminatestores2))]
        aggdf = weekly_target_variables_file.groupby('Customer_Name')[
            target_variable].sum().reset_index()
        aggdf = aggdf.sort_values(target_variable, ascending=True)
        aggdf["Reference"] = aggdf[target_variable].shift(1)
        aggdf["Difference_Percentage"] = aggdf[target_variable] - aggdf["Reference"]
        aggdf["Difference_Percentage"] = (aggdf["Difference_Percentage"] / aggdf["Reference"]) * 100
        aggdf["Difference_Percentage"] = aggdf["Difference_Percentage"].round()
        eliminatestores3 = aggdf[aggdf["Difference_Percentage"] > 10]["Customer_Name"].unique().tolist()
        weekly_target_variables_file = weekly_target_variables_file[
            ~(weekly_target_variables_file['Customer_Name'].isin(eliminatestores3))]

        return weekly_target_variables_file,consideryearweeks


def get_total_weekly_target_data(target_variable=None,config=config,region=None):
    config_cols = config_data[region]
    if target_variable is not None:

        sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_cols['tables']['weekly_mstr']))
        weekly_target_variables_file = getRowResults(sql_query_wk, (1,0))
        weekly_target_variables_file = pd.DataFrame(weekly_target_variables_file)

        yearweeks = weekly_target_variables_file[config_cols['weekly_target_variable']["week"]].unique().tolist()
        yearweeks.sort(reverse=True)
        consideryearweeks = yearweeks[:104]
        consideryearweeks.sort(reverse=False)

        weekly_target_variables_file = weekly_target_variables_file[weekly_target_variables_file[config_cols['weekly_target_variable']["week"]].isin(consideryearweeks)]

        return weekly_target_variables_file,consideryearweeks

def validate_test_stores(test_stores=None,compare_variables=[],banners=[],segments=[],store_segments=[],territories=[],categories = [],region=None):

    config_cols = config_data[region]['store_mstr_columns']

    if (test_stores is not None) & (len(compare_variables) != 0):
        # Pvalue count
        count=0
        # Create variables threshold dict
        variables_thresholds_dict = {k:0.8 for k in compare_variables}
        # Read the files

        # Allstores = StoreMstr.objects.filter(is_active=True,is_deleted=False)
        # Teststores  = TestStoreSerializer(Allstores,many=True)
        # stores_master_df = pd.DataFrame(Teststores.data)

        sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_data[region]['tables']['store_mstr']))
        results = getRowResults(sql_query, (1,0))
        stores_master_df = pd.DataFrame(results)
        # Validating Input Parameters (Ex: If banners are not provided, we consider all the banners from the population )
        if len(banners) == 0:
            banners = test_stores[config_cols['banner']].unique().tolist()
        if len(segments) == 0:
            segments = test_stores[config_cols['storegrid']].unique().tolist()
        if len(store_segments) == 0:
            store_segments = test_stores[config_cols['segment']].unique().tolist()
        if len(territories) == 0:
            territories = test_stores[config_cols['territory']].unique().tolist()

        # Create filters
        banner_filter = (stores_master_df[config_cols['banner']].isin(banners))
        segment_filter = (stores_master_df[config_cols['storegrid']].isin(segments))
        store_segment_filter = (stores_master_df[config_cols['segment']].isin(store_segments))
        territory_filter = (stores_master_df[config_cols['territory']].isin(territories))

        # Filter the stores only from the input filters
        stores_master_df = stores_master_df[banner_filter & segment_filter & store_segment_filter & territory_filter]
        if region != 'AUS':
            if (len(categories) != 0) & (all(a in stores_master_df.columns.tolist() for a in categories)):
                category_filter = (stores_master_df[categories]==1)
                stores_master_df = stores_master_df[category_filter]

        if region == 'AUS':
            for col in compare_variables:
                tStat, pVal = stats.ttest_ind(test_stores[col],stores_master_df[col],nan_policy='omit')
                pVal = round(pVal,2)
                if pVal>=variables_thresholds_dict[col]:
                    count+=1
        else:
            for col in compare_variables:
                tStat, pVal = stats.ttest_ind(test_stores[col].astype(int),stores_master_df[col].astype(int),nan_policy='omit')
                pVal = round(pVal,2)
                if pVal>=variables_thresholds_dict[col]:
                    count+=1
    else:
        return json.Response("Please pass appropriate parameters",False)

    return count


def get_feature_thresholds(teststores,controlstores,features):

    threshold_dict = dict()
    for feature in features:
        std1 = teststores[feature].std()
        std2 = controlstores[feature].std()
        samples1 = teststores[feature].shape[0]
        samples2 = controlstores[feature].shape[0]
        numerator = np.power((std1*std1/samples1 + std2*std2/samples2),2)
        denominator = (np.power((std1*std1/samples1),2)/(samples1-1) + np.power((std2*std2/samples2),2)/(samples2-1))
        degfreedom = numerator/denominator
        pval = 0.8
        criticalvalue = t.ppf(1-pval/2,degfreedom)
        difference_in_means = criticalvalue*np.sqrt((std1*std1/samples1 + std2*std2/samples2))
        threshold_dict[feature] = round(difference_in_means,2)

    return threshold_dict


def get_annual_rsv_lifts(target_variable=None,region_data=None):
    
    config_cols = config_data[region_data]
    # Getting the the target varaibles file
    weekly_target_variables_file,consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable)

    weeks1 = consideryearweeks[:52]
    weeks2 = consideryearweeks[52:]
    weeklyrsvdatayear1 = weekly_target_variables_file[weekly_target_variables_file["Week"].isin(weeks1)]
    weeklyrsvdatayear2 = weekly_target_variables_file[weekly_target_variables_file["Week"].isin(weeks2)]
    weeklyrsvdatayear1["Year"] = "Year1"
    weeklyrsvdatayear2["Year"] = "Year2"

    aggdict = {k:sum for k in ['RSV','Volume']}
    groupbycolumns = [config_cols['weekly_target_variable']["partner_id"]]+[config_cols['store_mstr_columns']["banner"],config_cols['store_mstr_columns']["storegrid"],config_cols['store_mstr_columns']["segment"],config_cols['store_mstr_columns']["territory"],config_cols['store_mstr_columns']["baycount"]]+["Year"]

    annualrsvdatayear1 =  weeklyrsvdatayear1.groupby(groupbycolumns).agg(aggdict).reset_index()
    annualrsvdatayear2 =  weeklyrsvdatayear2.groupby(groupbycolumns).agg(aggdict).reset_index()

    annualrsvdatayear1.rename(columns={'RSV':'RSV Year 1','Volume':'Volume Year 1'},inplace=True)
    annualrsvdatayear2.rename(columns={'RSV':'RSV Year 2','Volume':'Volume Year 2'},inplace=True)

    mergecols = [config_cols['weekly_target_variable']["partner_id"]]+[config_cols['store_mstr_columns']["banner"],config_cols['store_mstr_columns']["storegrid"],config_cols['store_mstr_columns']["segment"],config_cols['store_mstr_columns']["territory"],config_cols['store_mstr_columns']["baycount"]]

    annualrsvdatamerged = annualrsvdatayear1.merge(annualrsvdatayear2,on=mergecols)
    annualrsvdatamerged.drop(["Year_x","Year_y"],axis=1,inplace=True)

    rsvfilter = ((annualrsvdatamerged["RSV Year 1"]>0) & (annualrsvdatamerged["RSV Year 2"]>0))
    volumefilter = ((annualrsvdatamerged["Volume Year 1"]>0) & (annualrsvdatamerged["Volume Year 2"]>0))
    annualrsvdatamerged = annualrsvdatamerged[rsvfilter & volumefilter]

    annualrsvdatamerged["RSV Lift"] = (annualrsvdatamerged["RSV Year 2"]-annualrsvdatamerged["RSV Year 1"])/annualrsvdatamerged["RSV Year 1"]
    annualrsvdatamerged["Volume Lift"] = (annualrsvdatamerged["Volume Year 2"]-annualrsvdatamerged["Volume Year 1"])/annualrsvdatamerged["Volume Year 1"]
    
    return annualrsvdatamerged


class historyRecordsList(generics.ListCreateAPIView):

    def get(self, request, pk):
        try:
            region_name = request.META['HTTP_COUNTRY']
            history_record_sql = (
                "SELECT au.first_name + ' ' + au.last_name 'Name', hi.action_performed, hi.created_at "
                "FROM test_history_action_details hi "
                "INNER JOIN auth_user au ON au.id = hi.created_by WHERE test_id =? and market_code=? "
                "order by hi.created_at desc")
            results = getRowResults(history_record_sql, (pk, region_name))
            return json.Response(results, True)
        except Exception as error:
                logger.error('GetRecordsList', error)
                return json.Response('Can`t able to get data', False)


class global_search(generics.ListCreateAPIView):
    
    def get(self, request):
        region_name = request.META['HTTP_COUNTRY']
        config_cols = config_data[region_name]
        search_key = request.query_params.get('searchKey')
        search_key = '%'+search_key+'%'
        query = "select * from {} where is_active=1 and is_deleted=0 and test_name like ?".format(config_cols['tables']['test_mstr'])
        results = getRowResults(query, (search_key))
        return json.Response(results, True)


class get_notification(generics.ListCreateAPIView):
    def get(self, request):
        headers = request.META['HTTP_AUTHORIZATION']
        split_token = headers.split('Bearer ')
        jwt_token = split_token[1]
        get_user = AuthTokenMstr.objects.get(jwt_token=jwt_token)
        if get_user:
            user_data = AuthSeralizer(get_user)
            user_id = user_data.data['user_id']
            region_name = request.META['HTTP_COUNTRY']
            notification = Notification.objects.filter(user_id=user_id, is_read=0, market_code=region_name)
            notification_serializer = NotificationSerializer(notification, many=True)
            try:
                return json.Response(notification_serializer.data, True)
            except:
                return json.Response('Can`t able to get data', False)


class mark_read_notification(generics.ListCreateAPIView):
     def post(self, request):
        import json as j
        data = j.loads(request.body)
        region_name = request.META['HTTP_COUNTRY']
        test_ids = [i.strip() for i in data['test_ids']]
        try:
            Notification.objects.filter(market_code=region_name, test_id__in=test_ids).update(is_read=1)
            return json.Response('updated successfully', True)
        except:
            return json.Response('Notification did not update', False)


def history_action_track(test_id, market_code, user_id, action_performed):
    if type(test_id) == int:
        test_id = str(test_id)
    elif not (type(test_id) == str):
        test_id = str(test_id[0])
    
    test_his_action = TestHistoryActionDetail(
        test_id=test_id,
        market_code=market_code,
        created_by=user_id,
        action_performed=action_performed,
        created_at=int(time.time())
    )
    test_his_action.save()

def save_notification(test_id, message, user_id, notification_type, market_code):
    try:
        results = Notification.objects.get(test_id=test_id)
    except Notification.DoesNotExist:
        notification = Notification(
            user_id=user_id,
            notification_type=notification_type,
            date=time.time(),
            test_id=test_id,
            message=message,
            is_read=0,
            market_code=market_code,
            imageshow=0
        )
        notification.save()


class last_test_completed(generics.RetrieveAPIView):
        queryset = TestMstr.objects.filter(is_finalize=1, is_active=1, is_deleted=0).order_by('-modified_on')
        def get(self, request):
            try:
                queryset = self.get_queryset().first()
                serializer = TestSerializer(queryset)
                return json.Response(serializer.data, True)
            except:
                return json.Response('Can`t able to get data', False)
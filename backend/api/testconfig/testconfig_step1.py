import pandas as pd
from rest_framework import generics

from api.helpers import getRowResults
from django.views.generic import ListView
import config.config_data as config
from api.json import Response
from api.models import TestMstr, StoreMstr
from api.serializers import *
import logging

config_data = config.data
logger = logging.getLogger(__name__)

class Parameter(ListView):

    def get(self, serializer):
        region_name = self.request.META['HTTP_COUNTRY']
        results = StoreMstr.objects.filter(is_active=True, is_deleted=False).values()
        banner = []
        segment = []
        territory = []
        store_grid = []
        filterData = []
        for dat in results:
            banner.append(dat[config_data[region_name]['store_mstr_columns']['banner']])
            territory.append(dat[config_data[region_name]['store_mstr_columns']['territory']])
            segment.append(dat[config_data[region_name]['store_mstr_columns']['segment']])
            store_grid.append(dat[config_data[region_name]['store_mstr_columns']['storegrid']])
            if region_name == 'UK':
                dict = {config_data[region_name]['store_mstr_columns']['banner']: dat[config_data[region_name]['store_mstr_columns']['banner']],
                        config_data[region_name]['store_mstr_columns']['segment']: dat[config_data[region_name]['store_mstr_columns']['segment']]}
                filterData.append(dict)
            if region_name == 'DEMO':
                dict = {config_data[region_name]['store_mstr_columns']['banner']: dat[config_data[region_name]['store_mstr_columns']['banner']],
                        config_data[region_name]['store_mstr_columns']['segment']: dat[config_data[region_name]['store_mstr_columns']['segment']]}
                filterData.append(dict)
        finalbanner = []
        finalsegmet = []
        finalterritory = []
        finalstore = []
        finalFilterData = []
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
        if region_name == 'UK':
            for i in range(len(filterData)):
                if filterData[i] not in filterData[i + 1:]:
                    finalFilterData.append(filterData[i])
        if region_name == 'DEMO':
            for i in range(len(filterData)):
                if filterData[i] not in filterData[i + 1:]:
                    finalFilterData.append(filterData[i])

        result = {
            "banner": finalbanner,
            "segment": finalsegmet,
            "territory": finalterritory,
            "store_grid": finalstore,
            "filterData": finalFilterData
        }
        return Response(result, True)

def get_valid_weekly_target_data(target_variable=None):
    if target_variable is not None:
        sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
            config_data['AUS']['tables']['weekly_mstr']))
        weekly_target_variables_file = getRowResults(sql_query_wk, (1, 0))
        weekly_target_variables_file = pd.DataFrame(weekly_target_variables_file)

        yearweeks = weekly_target_variables_file["Week"].unique().tolist()
        yearweeks.sort(reverse=True)
        consideryearweeks = yearweeks[:104]
        consideryearweeks.sort(reverse=False)

        # Remove stores which have zero sales in any of the weeks
        weekly_target_variables_file = weekly_target_variables_file[
            weekly_target_variables_file["Week"].isin(consideryearweeks)]
        eliminatestores1 = weekly_target_variables_file[weekly_target_variables_file[target_variable] == 0][
            "Customer_Name"].unique().tolist()
        weekly_target_variables_file = weekly_target_variables_file[
            ~(weekly_target_variables_file["Customer_Name"].isin(eliminatestores1))]

        # Remove stores which dont have sales in any of the weeks
        weekcountsdf = weekly_target_variables_file.groupby("Customer_Name")["Week"].nunique().reset_index().rename(
            columns={"Week": "Week_Count"})
        eliminatestores2 = weekcountsdf[weekcountsdf["Week_Count"] < 104]["Customer_Name"].unique().tolist()
        weekly_target_variables_file = weekly_target_variables_file[
            ~(weekly_target_variables_file["Customer_Name"].isin(eliminatestores2))]
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

        return weekly_target_variables_file, consideryearweeks

class ValidateTestName(generics.ListCreateAPIView):
    def post(self, request, *args, **kwargs):
        try:
            import json as j
            dataValue = request.data
            testName = dataValue['data']['testname']
            checkTestName = TestMstr.objects.filter(is_active=True, is_deleted=False, test_name=testName)
            result = LoadDataSeralizer(checkTestName, many=True)
            validated_data = list(result.data)
            return Response(validated_data, True)
        except:
            return Response("Can't get TestName", False)
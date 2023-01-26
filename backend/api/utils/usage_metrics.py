from api.helpers import getRowResults
from api import json
import traceback
from rest_framework import generics


class GetAllAuditlog(generics.ListCreateAPIView):

    def get(self):
        try:
            results = {}
            sqlquery = "SELECT * from audit_log"
            sqlqueryregion = "SELECT region_code from Tl_RegionMstr"
            results['auditlogData'] = getRowResults(sqlquery)
            results['region'] = getRowResults(sqlqueryregion)
            return json.Response(results,True)
        except:
            traceback.print_exc()
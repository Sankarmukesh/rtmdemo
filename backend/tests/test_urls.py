from django.test import TestCase, Client

from api.models import RegionMstr, TestMstr, ConfigMstr
from django.contrib.auth.models import User
from django.test.client import RequestFactory
from api.testconfig import testconfig_step2
import ast
import json

class RegionTests(TestCase):

    def setUp(self):
        RegionMstr.objects.create(region_name="UK", region_code=1)
        RegionMstr.objects.create(region_name='NL', region_code=2)

    def test_regionMstr_code(self):
        uk_region = RegionMstr.objects.get(region_name="UK")
        nl_region = RegionMstr.objects.get(region_name="NL")
        self.assertEqual(uk_region.region_code, '1')
        self.assertEqual(nl_region.region_code, '2')

    def test_regionMstr_id(self):
        uk_region = RegionMstr.objects.get(region_name="UK")
        nl_region = RegionMstr.objects.get(region_name="NL")
        self.assertEqual(uk_region.id, 1)
        self.assertEqual(nl_region.id, 2)

class LoadsavedTest(TestCase):

    def setUp(self):
        self.user = User.objects.create(username='admin', password='pass@123', email='admin@admin.com')
        self.client = Client()  # May be you have missed this line
        self.client.login(username=self.user.username, password='pass@123')

        self.testTable =TestMstr.objects.create(test_name="test_check", banners=['Albert Heijn', 'Jumbo'], target_var="RSV",
                                store_grid="['Low CSV - Low Influence', 'Low CSV - Medium Influence', 'Low CSV - High Influence', 'Medium CSV - Low Influence', 'Medium CSV - Medium Influence', 'Medium CSV - High Influence', 'High CSV - Low Influence', 'High CSV - Medium Influence', 'High CSV - High Influence']",
                                territory_name="['1', '3', '6', '9', '13', '15', '17', '18', '19', '21', '23', '26', '27', '28']",
                                store_segment="['Supermarket Small', 'Supermarket Medium', 'Supermarket Large']",
                                category_name="['chocolate', 'petcare']", user_id_id=self.user.id, is_finalize=1,
                                created_by=None, created_by_id=self.user.id, created_on=1617010556, deleted_at=None,
                                is_active=True, is_deleted=False, modified_on=None, updated_by=None,rsv_estimate=200000,cost=1344,
                                updated_by_id=self.user.id, no_of_teststore=35, margin_oferror=6.0, confidence_lev=80)

        ConfigMstr.objects.create(key='min_date', value='2018')
        ConfigMstr.objects.create(key='max_date', value='2019')

        self.factory = RequestFactory()


    def test_Validate_test_name(self):
        test_data = self.testTable
        new_test_name = "TestNewvalue"
        self.assertNotEqual(new_test_name, test_data.test_name)

    def test_check_parameter_not_ok(self):
        jsonValue = {"data":{"banners": self.testTable.banners,"segments": self.testTable.store_grid, "territories": [1, 3, 6, 9, 13, 15, 17, 18, 19, 21, 23, 26, 27, 28], "store_segments": self.testTable.store_segment, "categories": self.testTable.category_name,
                             "num_test_stores": self.testTable.no_of_teststore, "margin_of_error": self.testTable.margin_oferror, "confidence_level": self.testTable.confidence_lev, "testwindow_start":'2018', "testwindow_end":'2019'}}
        request = self.factory.post('/api/getparameter', data=(jsonValue), content_type="application/json")
        request.META["HTTP_COUNTRY"] = "NL"
        response = testconfig_step2.get_test_parameter(request)
        response_data = list(ast.literal_eval(response.content.decode("utf-8")).values())
        self.assertEqual(response_data[0], 'Please pass Target Variable')

    def test_check_parameter(self):
        jsonValue = {"data":{"banners": self.testTable.banners,"segments": self.testTable.store_grid, "territories": [1, 3, 6, 9, 13, 15, 17, 18, 19, 21, 23, 26, 27, 28], "store_segments": self.testTable.store_segment, "categories": self.testTable.category_name,
                             "num_test_stores": self.testTable.no_of_teststore, "margin_of_error": self.testTable.margin_oferror, "confidence_level": self.testTable.confidence_lev, "testwindow_start":'2018', "testwindow_end":'2019',
                             "target_variable": self.testTable.target_var}}
        request = self.factory.post('/api/getparameter', data=(jsonValue), content_type="application/json")
        request.META["HTTP_COUNTRY"] = "NL"
        response = testconfig_step2.get_test_parameter(request)
        # print(response.status_code)
        # response_data = list(ast.literal_eval(response.content.decode("utf-8")).values())
        # print(type(response_data), 'datta', response_data[0])
        # self.assertEqual(response_data[1], 'ok')
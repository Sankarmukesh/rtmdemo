from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
import config.config_data as config

config_data = config.data


class BaseModel(models.Model):
    created_on = models.IntegerField(null=True, blank=True)
    modified_on = models.IntegerField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    deleted_at = models.IntegerField(blank=True, null=True)
    is_deleted = models.BooleanField(default=False)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='%(class)s_updated_by', blank=True,
                                   on_delete=models.PROTECT)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='%(class)s_createdby', blank=True,
                                   on_delete=models.PROTECT)

    class Meta:
        abstract = True


class AuthTokenMstr(BaseModel):
    auth_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT, null=False)
    jwt_token = models.TextField(null=False)
    expire_ts = models.IntegerField(null=False)

    class Meta:
        managed = True
        db_table = 'Tl_Authtoken_tbl'


class UserLoginHistory(BaseModel):
    usrlog_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT, null=False)
    jwt_token = models.TextField(null=False)
    login_time = models.IntegerField(null=False)
    logout_time = models.IntegerField(blank=True, null=True)
    expire_ts = models.IntegerField(null=False)

    class Meta:
        managed = True
        db_table = 'Tl_UserLoginHistory'


class TestMstr(BaseModel):
    test_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT, null=False)
    test_name = models.CharField(max_length=255, unique=False, blank=True)
    test_desc = models.TextField(blank=True, null=True)
    test_desc1 = models.TextField(blank=True, null=True)
    testtype = models.CharField(max_length=255, null=True, blank=True)
    banners = models.TextField(blank=True, null=True)
    target_var = models.CharField(max_length=255, null=True, blank=True)
    store_grid = models.TextField(blank=True, null=True)
    territory_name = models.CharField(max_length=255, null=True, blank=True)
    store_segment = models.CharField(max_length=255, null=True, blank=True)
    category_name = models.CharField(max_length=255, null=True, blank=True)
    confidence_lev = models.CharField(max_length=255, null=True, blank=True)
    margin_oferror = models.FloatField(blank=True, null=True)
    is_checkconf = models.BooleanField(default=0)
    is_checkmarg = models.BooleanField(default=0)
    is_checknum = models.BooleanField(default=0)
    no_of_teststore = models.IntegerField(blank=True, null=True)
    store_feature1 = models.IntegerField(blank=True, null=True)
    store_feature2 = models.IntegerField(blank=True, null=True)
    pre_start = models.TextField(blank=True, null=True)
    pre_end = models.TextField(blank=True, null=True)
    test_window = models.CharField(max_length=255, null=True, blank=True)
    testwin_start = models.CharField(max_length=255, null=True, blank=True)
    testwin_end = models.CharField(max_length=255, null=True, blank=True)
    stage_id = models.IntegerField(blank=True, null=True)
    stepper_id = models.IntegerField(blank=True, null=True)
    break_even_lift = models.CharField(max_length=255, null=True, blank=True)
    cost = models.CharField(max_length=255, null=True, blank=True)
    rsv_estimate = models.CharField(max_length=255, null=True, blank=True)
    is_finalize = models.BooleanField(default=0)
    freeze_compute = models.BooleanField(default=0)
    test_control_change = models.CharField(max_length=255, null=True, blank=True)
    select_test_stores = models.CharField(max_length=255, null=True, blank=True)
    control_stores = models.CharField(max_length=255, null=True, blank=True)
    required_control_stores = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['test_mstr']


class StoreMstr(BaseModel):
    store_id = models.AutoField(primary_key=True)
    Customer_Number = models.FloatField(null=True, blank=True, default=None)
    Customer_Group = models.CharField(max_length=250, blank=True, null=True)
    Customer_Status = models.CharField(max_length=250, blank=True, null=True)
    Store_Number = models.CharField(max_length=250, blank=True, null=True)
    Sales_Representative = models.CharField(max_length=250, blank=True, null=True)
    Sub_Channel = models.CharField(max_length=250, blank=True, null=True)
    Customer_Chain = models.CharField(max_length=250, blank=True, null=True)
    Outlet_Address = models.CharField(max_length=250, blank=True, null=True)
    Tier1 = models.CharField(max_length=250, blank=True, null=True)
    Tier2 = models.CharField(max_length=250, blank=True, null=True)
    Tier3 = models.CharField(max_length=250, blank=True, null=True)
    Attribute1 = models.CharField(max_length=250, blank=True, null=True)
    City = models.CharField(max_length=250, blank=True, null=True)
    Customer_Name = models.CharField(max_length=250, blank=True, null=True)
    Division = models.CharField(max_length=250, blank=True, null=True)
    Latitude = models.FloatField(null=True, blank=True, default=None)
    Longitude = models.FloatField(null=True, blank=True, default=None)
    Postcode = models.CharField(max_length=250, blank=True, null=True)
    Region = models.CharField(max_length=250, blank=True, null=True)
    Territory = models.CharField(max_length=250, blank=True, null=True)
    total_checkout_locations = models.FloatField(null=True, blank=True, default=None)
    Store_Size_Sq_Ft = models.FloatField(null=True, blank=True, default=None)
    Manned_Checkouts = models.FloatField(null=True, blank=True, default=None)
    Touchability_Score = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_occasions = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_gum = models.FloatField(null=True, blank=True, default=None)
    product_count_mean = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_block = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_chocolate = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_filled_bars = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_wrigley = models.FloatField(null=True, blank=True, default=None)
    product_count_mean_mints = models.FloatField(null=True, blank=True, default=None)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['store_mstr']


class WeeklyStrMst(BaseModel):
    week_id = models.AutoField(primary_key=True)
    Customer_Group = models.CharField(max_length=255, blank=True, null=True, default=None)
    Year = models.FloatField(blank=True, null=True, default=None)
    Period = models.FloatField(blank=True, null=True, default=None)
    WeekNumber = models.FloatField(blank=True, null=True, default=None)
    RSV = models.FloatField(blank=True, null=True, default=None)
    Volume = models.FloatField(blank=True, null=True, default=None)
    Store_Number = models.CharField(max_length=250, blank=True, null=True, default=None)
    Customer_Number = models.FloatField(blank=True, null=True, default=None)
    Customer_Chain = models.CharField(max_length=250, blank=True, null=True, default=None)
    Customer_Status = models.CharField(max_length=250, blank=True, null=True, default=None)
    Week = models.FloatField(blank=True, null=True, default=None)
    Territory = models.CharField(max_length=250, blank=True, null=True, default=None)
    is_active = models.FloatField(blank=True, null=True, default=None)
    is_deleted = models.FloatField(blank=True, null=True, default=None)
    Sub_Channel = models.CharField(max_length=250, blank=True, null=True, default=None)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['weekly_mstr']


class TestStoreMap(BaseModel):
    storemap_id = models.AutoField(primary_key=True)
    test_id = models.ForeignKey(TestMstr, on_delete=models.PROTECT, null=False)
    teststore_id = models.IntegerField(blank=True, null=False)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['test_store_map']


class ConfigMstr(models.Model):
    config_id = models.AutoField(primary_key=True)
    key = models.CharField(max_length=255, blank=True, null=True)
    value = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['config_mstr']


class ControlStoreMstr(BaseModel):
    constore_id = models.AutoField(primary_key=True)
    test_id = models.ForeignKey(TestMstr, on_delete=models.PROTECT, null=False)
    Test_store_Customer_Number = models.IntegerField(blank=True, null=True)
    Customer_Number = models.IntegerField(blank=True, null=True)
    Test_store_Customer_Group = models.TextField(blank=True, null=True)
    Customer_Group = models.TextField(blank=True, null=True)
    checked_flag = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['control_store_mstr']


class MeasurementTbl(BaseModel):
    measure_id = models.AutoField(primary_key=True)
    test_id = models.ForeignKey(TestMstr, on_delete=models.PROTECT, null=False)
    mesmetric_name = models.CharField(max_length=255, null=True, blank=True)
    preperiod_start = models.CharField(max_length=255, null=True, blank=True)
    preperiod_end = models.CharField(max_length=255, null=True, blank=True)
    postperiod_start = models.CharField(max_length=255, null=True, blank=True)
    postperiod_end = models.CharField(max_length=255, null=True, blank=True)
    break_even_lift = models.CharField(max_length=255, null=True, blank=True)
    cost = models.CharField(max_length=255, null=True, blank=True)
    rsv_estimate = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['measurement']


class RecordMstr(BaseModel):
    record_id = models.AutoField(primary_key=True)
    test_id = models.ForeignKey(TestMstr, on_delete=models.CASCADE, null=False)
    stage_id = models.IntegerField(blank=True, null=False)
    stepper_id = models.IntegerField(blank=True, null=False)
    record_value = models.TextField(null=False)

    class Meta:
        managed = True
        db_table = config_data[settings.REGION_NAME]['tables']['record_mstr']


class UserRegionMap(BaseModel):
    user_id = models.ForeignKey(User, on_delete=models.PROTECT, null=False)
    region_id = models.TextField(null=False)
    is_default_region = models.IntegerField(blank=True, null=False)

    class Meta:
        managed = True
        db_table = 'Tl_UserRegion_map'


class RegionMstr(models.Model):
    id = models.AutoField(primary_key=True)
    region_code = models.CharField(max_length=50, blank=True, null=False)
    region_name = models.CharField(max_length=50, blank=True, null=False)

    class Meta:
        managed = True
        db_table = 'Tl_RegionMstr'


class ErrorLog(BaseModel):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField(blank=True, null=True)
    status_code = models.IntegerField(blank=True, null=True)
    region_name = models.CharField(max_length=50, null=True)
    requestname = models.CharField(max_length=500, null=True)
    message = models.TextField(max_length=255, null=True)

    class Meta:
        managed = True
        db_table = 'exception_log'


class AuditLog(BaseModel):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField(blank=True, null=True)
    region_name = models.CharField(max_length=50, null=True)
    api_path = models.CharField(max_length=150, null=True)
    action = models.TextField(max_length=150, null=True)
    user_name = models.CharField(max_length=100, null=True)

    class Meta:
        managed = True
        db_table = 'audit_log'


class Notification(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    notification_type = models.CharField(max_length=50, null=True)
    imageshow = models.BooleanField(null=True)
    date = models.IntegerField()
    test_id = models.CharField(max_length=10, null=True)
    message = models.TextField()
    is_read = models.BooleanField()
    market_code = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = 'notification'


class TestHistoryActionDetail(models.Model):
    id = models.AutoField(primary_key=True)
    test_id = models.CharField(max_length=10, null=True)
    market_code = models.CharField(max_length=50, null=True)
    created_by = models.CharField(max_length=50, null=True)
    action_performed = models.TextField(null=True)
    created_at = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'test_history_action_details'

from . import views
from . import teststores
from .testconfig import testconfig_step1, testconfig_step2, testconfig_step3
from .controlstore import controlstore_step1, controlstore_step2
from .testmeasure import testmeasure_step1, testmeasure_step2
from .utils import usage_metrics
from django.core.cache import cache
from .helpers import getRowResults
from datetime import datetime
import logging
from django.urls import path

logger = logging.getLogger('root')

urlpatterns = [
    path('login', views.login),
    path('logout', views.logout.as_view()),

    path('parameter_list', testconfig_step1.Parameter.as_view()),
    path('validate_testname', testconfig_step1.ValidateTestName.as_view()),
    path('date_range', testconfig_step2.DateRange.as_view()),
    path('calc_breakevenlift', testconfig_step2.get_breakeven_lift.as_view()),
    path('validate_datapoints', testconfig_step2.validate_datapoints.as_view()),
    path('Get_weeks', testconfig_step2.Weekduration.as_view(), name="Get_weeks"),
    path('getparameter', testconfig_step2.get_test_parameter.as_view()),
    path('decide_gonogo', testmeasure_step2.decide_go_nogo.as_view()),

    path('identity_teststore', testconfig_step3.identify_test_stores.as_view()),
    path('store_summary', testconfig_step3.test_store_summary.as_view()),
    path('get_currenttest/<int:pk>', testconfig_step3.GetCurrentTest.as_view()),
    path('upload_select_teststore', testconfig_step3.test_store_format_check.as_view()),

    path('identify_ctrlstore', controlstore_step1.identify_control_stores.as_view()),
    path('getSelectedStores', controlstore_step1.GetSelectedStores.as_view(), name="getSelectedStores"),
    path('update_stage', teststores.UpdateStage.as_view()),
    path('recompute_controlstore', controlstore_step2.recompute_control_stores.as_view()),
    path('controlstore_summary', controlstore_step2.control_store_summary.as_view()),

    path('test_analysis_results', testmeasure_step2.get_test_analysis_results.as_view()),
    path('target_analysis_results', testmeasure_step2.get_target_variable_analysis_results.as_view()),
    path('exploratory_analysis_results', testmeasure_step2.ExploratoryAnalysisResults.as_view()),
    path('test_control_graph', testmeasure_step2.get_test_vs_control_linegraph.as_view()),

    path('test_summary_download', testmeasure_step1.StoreSummaryDownload.as_view()),

    path('record-list/<int:pk>', teststores.GetRecordsList.as_view()),
    path('save_weeklydata', teststores.SaveWeeklyData.as_view()),
    path('save_stage', teststores.SaveStage.as_view()),
    path('load_savedata', teststores.LoadSaveData.as_view()),
    path('load_saved_data_analyze', teststores.LoadSaveDataForAnalyze.as_view()),
    path('delete_savedata/<int:pk>', teststores.Edit_TestStore.as_view()),
    path('load_savetest/<int:pk>', teststores.Edit_TestStore.as_view()),
    path('getaudit_logdata', usage_metrics.GetAllAuditlog.as_view()),
    path('identity_teststore_manually', testconfig_step3.identify_test_stores_manually.as_view()),
    path('control_summary_correlation', controlstore_step2.average_weekly_target_similarity_correlation.as_view()),
    path('upload_select_controlstore', controlstore_step2.manual_teststore_controlstore_upload.as_view()),
    path('download_control_store_template', controlstore_step2.download_control_store_template.as_view()),
    path('generate_suggestion_no_of_teststore', testconfig_step3.power_noofteststore_calculation.as_view()),
    path('generate_suggestion_for_margin_of_error', testconfig_step3.power_marginoferror_calculation.as_view()),
    path('history_details/<int:pk>', teststores.historyRecordsList.as_view()),
    path('selected_store_correlation', testconfig_step3.test_population_mapping.as_view()),
    path('control_store_update', controlstore_step2.controlStore_save.as_view()),
    path('testStore_population_summary', testconfig_step3.test_store_summary.as_view()),  # Duplicate
    path('testStore_population_correlation', testconfig_step3.test_store_comparison_summary.as_view()),
    path('search', teststores.global_search.as_view()),
    path('get_notification', teststores.get_notification.as_view()),
    path('mark_read_notification', teststores.mark_read_notification.as_view()),
    path('last_test_completed', teststores.last_test_completed.as_view()),
    path('upload_control_store_pool', controlstore_step2.manual_upload_control_store_pool.as_view()),
    path('validate_datapoints_availability', testconfig_step2.validate_data_availability.as_view()),
    path('actuals_perstores', testmeasure_step1.actuals_teststore.as_view()),
    path('weeklyDataInsert', testmeasure_step2.weeklyDataInsert)
]
data = None


def one_time_startup():
    logger.debug('Start Time: %s', datetime.now())
    sql_query_wk_nl = "SELECT * FROM Tl_Weekly_target_mst_DEMO WHERE is_active = ? and is_deleted = ?"
    data_weekly_target_mst_uk = getRowResults(sql_query_wk_nl, (1, 0))
    cache.set("Tl_Weekly_target_mst_DEMO", data_weekly_target_mst_uk, 84000)
    logger.debug('End Time: %s', datetime.now())


one_time_startup()

GET_LOAD_DATA = 'SELECT [Tl_TestMstr].[created_on], [Tl_TestMstr].[modified_on], [Tl_TestMstr].[is_active], ' \
                '[Tl_TestMstr].[deleted_at], [Tl_TestMstr].[is_deleted], [Tl_TestMstr].[updated_by_id], ' \
                '[Tl_TestMstr].[created_by_id], [Tl_TestMstr].[test_id], [Tl_TestMstr].[user_id_id],' \
                ' [Tl_TestMstr].[test_name], [Tl_TestMstr].[test_desc], [Tl_TestMstr].[test_desc1], ' \
                '[Tl_TestMstr].[testtype], [Tl_TestMstr].[banners], [Tl_TestMstr].[target_var], ' \
                '[Tl_TestMstr].[store_grid], [Tl_TestMstr].[territory_name], [Tl_TestMstr].[store_segment], ' \
                '[Tl_TestMstr].[category_name], [Tl_TestMstr].[confidence_lev], [Tl_TestMstr].[margin_oferror], ' \
                '[Tl_TestMstr].[is_checkconf], [Tl_TestMstr].[is_checkmarg], [Tl_TestMstr].[is_checknum], ' \
                '[Tl_TestMstr].[no_of_teststore], [Tl_TestMstr].[store_feature1], [Tl_TestMstr].[store_feature2], ' \
                '[Tl_TestMstr].[pre_start], [Tl_TestMstr].[pre_end], [Tl_TestMstr].[test_window], ' \
                '[Tl_TestMstr].[testwin_start], [Tl_TestMstr].[testwin_end], [Tl_TestMstr].[stage_id],' \
                ' [Tl_TestMstr].[stepper_id], [Tl_TestMstr].[break_even_lift], [Tl_TestMstr].[cost], ' \
                '[Tl_TestMstr].[rsv_estimate], [Tl_TestMstr].[is_finalize], [Tl_TestMstr].[freeze_compute] ' \
                'FROM [Tl_TestMstr] WHERE ([Tl_TestMstr].[is_active] = 1 AND [Tl_TestMstr].[is_deleted] = 0) ' \
                'ORDER BY [Tl_TestMstr].[created_on] DESC, [Tl_TestMstr].[modified_on] DESC'

STORE_MASTER = 'SELECT [Tl_StoreMstr].[created_on], [Tl_StoreMstr].[modified_on], [Tl_StoreMstr].[is_active],' \
               ' [Tl_StoreMstr].[deleted_at], [Tl_StoreMstr].[is_deleted], [Tl_StoreMstr].[updated_by_id], ' \
               '[Tl_StoreMstr].[created_by_id], [Tl_StoreMstr].[store_id], [Tl_StoreMstr].[Freq_rating_2019], ' \
               '[Tl_StoreMstr].[Freq_rating_2020], [Tl_StoreMstr].[Banner], [Tl_StoreMstr].[Business_Model], ' \
               '[Tl_StoreMstr].[CSV_of_outlet], [Tl_StoreMstr].[CSV_of_outlet_Segment], [Tl_StoreMstr].[Channel], ' \
               '[Tl_StoreMstr].[City], [Tl_StoreMstr].[City_Rural], [Tl_StoreMstr].[Classification], ' \
               '[Tl_StoreMstr].[Classification_RTM], [Tl_StoreMstr].[Department], [Tl_StoreMstr].[House_Number], ' \
               '[Tl_StoreMstr].[House_Number_Rural], [Tl_StoreMstr].[Influence_Chocolate], ' \
               '[Tl_StoreMstr].[Influence_Overall], [Tl_StoreMstr].[Influence_Petcare],' \
               ' [Tl_StoreMstr].[Influence_Segment], [Tl_StoreMstr].[Influence_on_activation],' \
               ' [Tl_StoreMstr].[Influence_on_checkout], [Tl_StoreMstr].[Influence_on_permanent_siting],' \
               ' [Tl_StoreMstr].[Influence_on_shelf], [Tl_StoreMstr].[Outlet_Banner_Code], ' \
               '[Tl_StoreMstr].[Outlet_surface], [Tl_StoreMstr].[Overall_Segment], [Tl_StoreMstr].[Partner_ID],' \
               ' [Tl_StoreMstr].[Partner_Name], [Tl_StoreMstr].[Partner_Name_Rural], [Tl_StoreMstr].[Rural_vs_Urban], ' \
               '[Tl_StoreMstr].[Segment], [Tl_StoreMstr].[Shelf_meters_Cat], [Tl_StoreMstr].[Shelf_meters_Choc], ' \
               '[Tl_StoreMstr].[Shelf_meters_Dog], [Tl_StoreMstr].[Status], [Tl_StoreMstr].[Street], ' \
               '[Tl_StoreMstr].[Street_Rural], [Tl_StoreMstr].[Sub_Channel], [Tl_StoreMstr].[V4_invloed_op_activatie], ' \
               '[Tl_StoreMstr].[V4_invloed_op_kassa], [Tl_StoreMstr].[V4_invloed_op_permanente_siting],' \
               ' [Tl_StoreMstr].[V4_invloed_op_schap], [Tl_StoreMstr].[ZIP_code], [Tl_StoreMstr].[ZIP_code_Rural], ' \
               '[Tl_StoreMstr].[ZIP_code_4_digitis_Rural], [Tl_StoreMstr].[Territory], ' \
               '[Tl_StoreMstr].[Chocolate_Annual_RSV_2018], [Tl_StoreMstr].[Chocolate_Annual_Volume_2018], ' \
               '[Tl_StoreMstr].[Petcare_Annual_RSV_2018], [Tl_StoreMstr].[Petcare_Annual_Volume_2018],' \
               ' [Tl_StoreMstr].[Annual_RSV_2018], [Tl_StoreMstr].[Annual_Volume_2018], ' \
               '[Tl_StoreMstr].[Chocolate_Annual_RSV_2019], [Tl_StoreMstr].[Chocolate_Annual_Volume_2019],' \
               ' [Tl_StoreMstr].[Petcare_Annual_RSV_2019], [Tl_StoreMstr].[Petcare_Annual_Volume_2019], ' \
               '[Tl_StoreMstr].[Annual_RSV_2019], [Tl_StoreMstr].[Annual_Volume_2019] FROM [Tl_StoreMstr] ' \
               'WHERE ([Tl_StoreMstr].[is_active] = 1 AND [Tl_StoreMstr].[is_deleted] = 0)'

GET_TEST = 'SELECT COUNT_BIG(*) AS [__count] FROM [Tl_Measurement_Tbl] WHERE ([Tl_Measurement_Tbl].[is_active] = ? ' \
           'AND [Tl_Measurement_Tbl].[is_deleted] = ? AND [Tl_Measurement_Tbl].[test_id_id] = ?)'


TEST_MASTER = 'SELECT [Tl_TestMstr].[created_on], [Tl_TestMstr].[modified_on], [Tl_TestMstr].[is_active], ' \
              '[Tl_TestMstr].[deleted_at], [Tl_TestMstr].[is_deleted], [Tl_TestMstr].[updated_by_id], ' \
              '[Tl_TestMstr].[created_by_id], [Tl_TestMstr].[test_id], [Tl_TestMstr].[user_id_id], ' \
              '[Tl_TestMstr].[test_name], [Tl_TestMstr].[test_desc], [Tl_TestMstr].[test_desc1], ' \
              '[Tl_TestMstr].[testtype], [Tl_TestMstr].[banners], [Tl_TestMstr].[target_var],' \
              ' [Tl_TestMstr].[store_grid], [Tl_TestMstr].[territory_name], [Tl_TestMstr].[store_segment], ' \
              '[Tl_TestMstr].[category_name], [Tl_TestMstr].[confidence_lev], [Tl_TestMstr].[margin_oferror], ' \
              '[Tl_TestMstr].[is_checkconf], [Tl_TestMstr].[is_checkmarg], [Tl_TestMstr].[is_checknum], ' \
              '[Tl_TestMstr].[no_of_teststore], [Tl_TestMstr].[store_feature1], [Tl_TestMstr].[store_feature2], ' \
              '[Tl_TestMstr].[pre_start], [Tl_TestMstr].[pre_end], [Tl_TestMstr].[test_window], ' \
              '[Tl_TestMstr].[testwin_start], [Tl_TestMstr].[testwin_end], [Tl_TestMstr].[stage_id], ' \
              '[Tl_TestMstr].[stepper_id], [Tl_TestMstr].[break_even_lift], [Tl_TestMstr].[cost], ' \
              '[Tl_TestMstr].[rsv_estimate], [Tl_TestMstr].[is_finalize], [Tl_TestMstr].[freeze_compute] ' \
              'FROM [Tl_TestMstr] WHERE ([Tl_TestMstr].[is_active] = 1 AND [Tl_TestMstr].[test_id] = ?)'

MEASUREMENT_TABLE_COUNT = "SELECT COUNT_BIG(*) AS [__count] FROM [Tl_Measurement_Tbl] WHERE " \
                          "([Tl_Measurement_Tbl].[is_active] = 1 AND [Tl_Measurement_Tbl].[is_deleted] = 0 " \
                          "AND [Tl_Measurement_Tbl].[test_id_id] = ?)"

MEASUREMENT_TABLE_FILTER_DELETE = "SET NOCOUNT OFF; DELETE FROM [Tl_Measurement_Tbl] WHERE " \
                                  "([Tl_Measurement_Tbl].[is_active] = 1 AND [Tl_Measurement_Tbl].[is_deleted] = 0 " \
                                  "AND [Tl_Measurement_Tbl].[test_id_id] = ?)"
MEASUREMENT_TABLE_INSERT = "SET NOCOUNT ON INSERT INTO [Tl_Measurement_Tbl] ([created_on], [modified_on], [is_active]," \
                           " [deleted_at], [is_deleted], [updated_by_id], [created_by_id], [test_id_id], " \
                           "[mesmetric_name], [preperiod_start], [preperiod_end], [postperiod_start]," \
                           " [postperiod_end], [break_even_lift], [cost], [rsv_estimate]) VALUES " \
                           "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);" \
                           "SELECT CAST(SCOPE_IDENTITY() AS bigint)"

RECORD_MASTER_DELETE = 'SET NOCOUNT OFF; DELETE FROM [Tl_RecordMstr] WHERE ([Tl_RecordMstr].[stage_id] = 3' \
                       ' AND [Tl_RecordMstr].[test_id_id] = ?)'

RECORD_MASTER_INSERT = 'SET NOCOUNT ON INSERT INTO [Tl_RecordMstr] ([created_on], [modified_on], [is_active], ' \
                       '[deleted_at], [is_deleted], [updated_by_id], [created_by_id], [test_id_id], [stage_id], ' \
                       '[stepper_id], [record_value]) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ' \
                       'SELECT CAST(SCOPE_IDENTITY() AS bigint)'

TEST_MASTER_UPDATE = "SET NOCOUNT OFF; UPDATE [Tl_TestMstr] SET [stepper_id] = ?, [modified_on] = ? WHERE" \
                     " [Tl_TestMstr].[test_id] = ?"

TEST_STORE_MAP = "SELECT TOP 21 [Tl_Teststore_map].[created_on], [Tl_Teststore_map].[modified_on]," \
                 " [Tl_Teststore_map].[is_active], [Tl_Teststore_map].[deleted_at], " \
                 "[Tl_Teststore_map].[is_deleted], [Tl_Teststore_map].[updated_by_id]," \
                 " [Tl_Teststore_map].[created_by_id], [Tl_Teststore_map].[storemap_id], " \
                 "[Tl_Teststore_map].[test_id_id], [Tl_Teststore_map].[teststore_id] FROM [Tl_Teststore_map] " \
                 "WHERE ([Tl_Teststore_map].[is_active] = 1 AND [Tl_Teststore_map].[is_deleted] = 0)"


MEASUREMENT_TABLE_QUERY = "SELECT [Tl_Measurement_Tbl].[created_on], [Tl_Measurement_Tbl].[modified_on], " \
                          "[Tl_Measurement_Tbl].[is_active], [Tl_Measurement_Tbl].[deleted_at], " \
                          "[Tl_Measurement_Tbl].[is_deleted], [Tl_Measurement_Tbl].[updated_by_id]," \
                          " [Tl_Measurement_Tbl].[created_by_id], [Tl_Measurement_Tbl].[measure_id], " \
                          "[Tl_Measurement_Tbl].[test_id_id], [Tl_Measurement_Tbl].[mesmetric_name]," \
                          " [Tl_Measurement_Tbl].[preperiod_start], [Tl_Measurement_Tbl].[preperiod_end], " \
                          "[Tl_Measurement_Tbl].[postperiod_start], [Tl_Measurement_Tbl].[postperiod_end], " \
                          "[Tl_Measurement_Tbl].[break_even_lift], [Tl_Measurement_Tbl].[cost], " \
                          "[Tl_Measurement_Tbl].[rsv_estimate] FROM [Tl_Measurement_Tbl] " \
                          "WHERE ([Tl_Measurement_Tbl].[is_active] = 1 AND [Tl_Measurement_Tbl].[is_deleted] = 0)"

CONTROL_STORE_MASTER = "SELECT [Tl_Controlstore_Mstr].[created_on], [Tl_Controlstore_Mstr].[modified_on], " \
                       "[Tl_Controlstore_Mstr].[is_active], [Tl_Controlstore_Mstr].[deleted_at], " \
                       "[Tl_Controlstore_Mstr].[is_deleted], [Tl_Controlstore_Mstr].[updated_by_id], " \
                       "[Tl_Controlstore_Mstr].[created_by_id], [Tl_Controlstore_Mstr].[constore_id], " \
                       "[Tl_Controlstore_Mstr].[test_id_id], [Tl_Controlstore_Mstr].[Test_store_Partner_ID], " \
                       "[Tl_Controlstore_Mstr].[Partner_ID], [Tl_Controlstore_Mstr].[Test_store_Banner], " \
                       "[Tl_Controlstore_Mstr].[Banner], [Tl_Controlstore_Mstr].[checked_flag] FROM " \
                       "[Tl_Controlstore_Mstr] WHERE ([Tl_Controlstore_Mstr].[checked_flag] = 1 AND" \
                       " [Tl_Controlstore_Mstr].[is_active] = 1 AND [Tl_Controlstore_Mstr].[is_deleted] = 0 AND " \
                       "[Tl_Controlstore_Mstr].[test_id_id] = ?)"

Tl_TestMstr_TEST_ID_ACTIVE = "SELECT * FROM Tl_TestMstr_NL WHERE test_id=? and is_active=?"
Tl_TestMstr_ACTIVE_DELETED = "SELECT * FROM Tl_TestMstr_NL WHERE is_active=? and is_deleted=?"
Tl_TestMstr_TEST_NAME_DELETED = "SELECT * FROM Tl_TestMstr_NL WHERE LOWER(test_name)=? and is_deleted=?"

MeasurementTbl_ACTIVE_DELETED = "SELECT * FROM Tl_Measurement_Tbl_NL WHERE is_active=? and is_deleted=?"

Tl_Controlstore_Mstr_TEST_ID_CHECKED_ACTIVE_DELETED = "SELECT * FROM Tl_Controlstore_Mstr_NL WHERE test_id_id=? " \
                                                      "and checked_flag=? and " \
                                                      "is_active=? and is_deleted=?"
ControlStoreMstr_ACTIVE_DELETED = 'SELECT * FROM Tl_Controlstore_Mstr_NL WHERE is_active=? and is_deleted=?'

#TestStoreMap
TestStoreMap_TEST_ID_ACTIVE_DELETED = "SELECT * FROM Tl_Teststore_map_NL WHERE test_id_id=? and is_active=? and is_deleted=?"
TestStoreMap_ACTIVE_DELETED = "SELECT * FROM Tl_Teststore_map_NL WHERE is_active=? and is_deleted=?"

AuthTokenMstr_JWT_TOKEN = 'SELECT * FROM Tl_Authtoken_tbl WHERE jwt_token = ?'

RecordMstr_TEST_ID = 'SELECT * FROM Tl_RecordMstr WHERE TEST_ID_ID=?'

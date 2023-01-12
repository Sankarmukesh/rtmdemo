data = {
    "common_tbl": {
        "auth_user": "AUTH_USER",
        "auth_token": "Tl_Authtoken_tbl",
        "user_login_history": "Tl_UserLoginHistory",
        "user_region_map": "Tl_UserRegion_map",
        "region_mstr": "Tl_RegionMstr",
    },
    "DEMO": {
        "store_mstr_columns": {
            "banner": "Customer_Group",
            "segment": "Customer_Chain",
            "territory": "Territory",
            "storegrid": "Sub_Channel",
            "partner_id": "Customer_Number",
            "baycount": "",
            "partner_id_backup": "Customer_Number",
            "FSR": "Sales_Representative"
        },
        "Test_store_Partner_ID_backup": "Test_store_Customer_Number",
        "heading_names": {
            "banner": "Banner",
            "segment": "Segment",
            "territory": "Territory",
            "storegrid": "Overall Segment",
            "partner_id": "Customer Name",
            "store_segment": "Store Segment",
            "currency": "£"
        },
        "weekly_target_variable": {
            "banner": "Customer_Group",
            "banner_code": "Store_Number",
            "partner_id": "Customer_Number",
            "rsv": "RSV",
            "volume": "Volume",
            "week_no": "Week Number",
            "year": "Year",
            "segment": "Customer_Chain",
            "week": "Week",
            "overall_segment": "Sub_Channel",
            "territory": "Territory",
            "RSV": "RSV"
        },
        "tables": {
            "control_store_mstr": "Tl_Controlstore_Mstr_DEMO",
            "measurement": "Tl_Measurement_Tbl_DEMO",
            "record_mstr": "Tl_RecordMstr_DEMO",
            "store_mstr": "Tl_StoreMstr_DEMO",
            "test_mstr": "Tl_TestMstr_DEMO",
            "test_store_map": "Tl_Teststore_map_DEMO",
            "weekly_mstr": "Tl_Weekly_target_mst_DEMO",
            "config_mstr": "Tl_ConfigMstr_UK"
        },
        "metadata": {
            "test_configuration": {
                "sales_weeks": 104,
                "sales_lifts_sales_weeks": 52,
                "sales_diff_percentage": 10,
                "power_of_test": 0.7,
                "min_teststores": 30,
                "rawconvfactors": {'Customer_Group_1': 0.18, 'Customer_Group_2': 0.25, 'Customer_Group_3': 0.21, 'Customer_Group_4': 0.15,
                                   'Customer_Group_5': 0.18,'Customer_Group_6': 0.18},
            },
            "test_planning":
                {
                    "default_stratification": ["Customer_Group"],
                    "test_vs_population_compare": ["total_checkout_locations", "Store_Size_Sq_Ft", "Manned_Checkouts"],
                    "test_vs_population_compare_summary": ["total_checkout_locations",
                                                           "Store_Size_Sq_Ft", "Manned_Checkouts"],
                    "sampling_iterations": 10,
                    "test_vs_population_pvalue": 0.8,
                    "test_vs_control_compare": ["Customer_Group", "Customer_Chain"],
                    "test_vs_control_compare_summary": [],
                    "business_category_specific_compare": [],
                    "business_categories_count": 0,
                    "test_vs_control_pvalue": 0.8,
                    "test_vs_control_similaritymeasure_difference_threshold": 0.05,
                    "summary_sales_weeks": 52,
                    "validate_datapoints_multiplier": 2,
                    "teststores_columns": ["Customer_Number", "Sales_Representative", "Customer_Group",
                                           "Territory", "Store_Size_Sq_Ft"],
                    "user_teststores_columns": {"Customer_Number": "int64"},
                    "confidence_level": 0.85,
                    "margin_of_error": 0.04,
                    "power_of_test": 0.7,
                    "power_values": [60, 65, 70, 75, 80, 85, 90, 95],
                    "user_testcontrolstores_columns": {"Test_store_Customer_Number": "int64",
                                                       "Control_store_Customer_Number": "int64"},
                    "control_storespool_columns": {"Control_store_Customer_Number": "int64"}

                },
            "test_measurement":
                {
                    "probability_thresholds": [0.60, 0.85, 1],
                    "testmeasurement_columns": ["Customer_Number", "Sales_Representative", "Customer_Group",
                                                "Territory", "Sub_Channel", "Store_Size_Sq_Ft", "Customer_Chain"]
                }
        },
        "filePath": {
            "TestStore": {
                "file_name": "Upload_Teststores_Template_DEMO.xlsx"
            },
            "controlStore": {
                "file_name": "Test_Control_Pairs_Upload_Template_DEMO.xlsx"
            },
            "controlStore_Pool":{
                "file_name": "Control_Pairs_Pool_Upload_Template_DEMO.xlsx"
            }
        },
        "excel_header": {
            "test_store": "Test_store_Customer_Number",
            "control_store": "Control_store_Customer_Number"
        },
        "report_generate": {
            "common": {
                "region_name": "UNITED KINGDOM",
                "flag_name": ''
            },
            "control_compare_variable": ["Touchability_Score", "Store_Size_Sq_Ft"],
            "test_compare_variable": ["Touchability_Score", "Store_Size_Sq_Ft"],
            "store_feature": ["Customer Group"],
            "row_span": 2,
            "matching_criteria": ["Customer_Group", "Territory", "Touchability_Score", "Store_Size_Sq_Ft"]
        }
    }
}

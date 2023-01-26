(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/services/sidenav.service */ "8//E");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/services/testconfig.service */ "LBDO");
/* harmony import */ var _app_shared_services_apicall_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/services/apicall.service */ "unTc");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/component/common-table/common-table.component */ "epAT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-moment */ "QUrN");


































var _c0 = ["deleteDialog"];
var _c1 = ["content"];
function DashboardComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n              Test #", ctx_r1.lastRecordCompleted.test_name, " was\n              completed ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.dateConvert(ctx_r1.lastRecordCompleted.modified_on)), "\n            ");
} }
function DashboardComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_101_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var items_r8 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.getGrossSales(items_r8.test_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var items_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", items_r8.test_name, "\n                  ");
} }
function DashboardComponent_ng_template_225_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " If you delete the file, you won`t be able to reverse this action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_225_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.closeDeleteDailog(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_225_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.closeDeleteDailog(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n");
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to delete \"Test #", ctx_r5.test_name_delete, "\"");
} }
function DashboardComponent_ng_template_228_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " If you delete the file, you won`t be able to reverse this action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_228_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.closeDeleteDailog(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_228_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeDeleteDailog(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n");
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to delete \"Test #", ctx_r7.test_Id_delete, "\"");
} }
var _c2 = function (a0) { return { "visibility": a0 }; };
var config = __webpack_require__(/*! ../../assets/region/config-fields.json */ "ar/W");
var DashboardComponent = /** @class */ (function () {
    /*-------------------------FILE UPLOAD-------------------*/
    function DashboardComponent(apiservice, homeservice, toastr, router, route, changeDetectorRefs, commonservice, dialog, sideNavservice, globalEventService) {
        var _this = this;
        this.apiservice = apiservice;
        this.homeservice = homeservice;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.changeDetectorRefs = changeDetectorRefs;
        this.commonservice = commonservice;
        this.dialog = dialog;
        this.sideNavservice = sideNavservice;
        this.globalEventService = globalEventService;
        this.testvalue = '';
        this.isShow = false;
        this.show_testplan_store = false;
        this.plantestdrpdown = false;
        this.hide_back = true;
        this.stepindex = 1;
        this.CompletedStep = false;
        this.loaddatas = false;
        this.Margin = 0;
        this.LOAD_DATA = [];
        this.displayedColumnsLoadSaved = [
            'test_name',
            'test_window',
            'test_type',
            'details',
            'Created',
            'Modified',
            'status',
            'Actions'
        ];
        this.confGrid = [
            'test_name',
            'test_window',
            'test_type',
            'details',
            'Created',
            'Modified',
            'status',
            'Actions'
        ];
        this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.LOAD_DATA);
        this.filterSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this.isinSqFt = '';
        this.tableName = '';
        this.selectedRegion = '';
        this.testSummaryDataCount = 0;
        this.completedCount = 0;
        this.ongoingCount = 0;
        this.draftCount = 0;
        this.regionNames = [];
        this.hideIcon = [false];
        this.tempFilter = [];
        this.listItems = [];
        this.test_Id_delete = '';
        this.test_name_delete = '';
        this.originalData = [];
        this.dashboard = 'dashboard';
        this.configPerfect = {};
        this.columnHeader1 = { test_name: 'Test Names', test_window: 'Test Window', details: 'Details', Created: 'Created At', test_type: 'Test Type', Modified: 'Last Modified At', status: 'Status', actions: 'Actions' };
        this.isFilter = false;
        this.filerApplied = [];
        this.apiservice.updatedProfile();
        this.filterSubscription = this.globalEventService.subscribe('FILLTER_APPLIED', function (obj) {
            if (obj.module === 'FILTERED_COMPONENT' && obj.component === 'Dashboard') {
                _this.formatfilteredData(obj.data);
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        sessionStorage.setItem('test-type', '');
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            // window.location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
        this.selectedRegion = sessionStorage.getItem('region');
        console.log(this.selectedRegion);
        this.user_name = localStorage.getItem('username');
        this.userRegion = sessionStorage.getItem('region');
        var firstname = this.user_name.split('.');
        this.firstName = firstname[0];
        if (localStorage.getItem('dropdown_value') !== undefined && localStorage.getItem('dropdown_value') != null && localStorage.getItem('dropdown_value') != 'null') {
            this.regionNames = JSON.parse(localStorage.getItem('dropdown_value'));
        }
        if (config[this.userRegion]) {
            console.log(config[this.userRegion]);
            this.testApplicabilityFields = config[this.userRegion].fields;
            this.currencySymbol = config[this.userRegion]['currency'];
            this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
            this.tableName = config[this.userRegion];
        }
        // localStorage.setItem('breakenvalue',this.breakenlist)
        this.GetSavedTestdata();
        this.uncheck = false;
        var testid = localStorage.getItem('testid');
        if (sessionStorage.getItem('index') == null) {
            this.stepindex = 0;
        }
        else {
            var newMyObjectJSON = sessionStorage.getItem('index');
            var newMyObject = JSON.parse(newMyObjectJSON);
            this.stepindex = newMyObject.stepval;
            this.isShow = true;
            this.CompletedStep = true;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.route.params, this.route.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) { return ({
            params: results[0],
            query: results[1]
        }); }))
            .subscribe(function (results) {
            if (results) {
                if (results.query) {
                    if (results.query.trial) {
                        _this.homeservice.LoadSavedTest(results.query.trial).subscribe(function (apiresponse) {
                            if (apiresponse.status === 'ok') {
                                var parseData = JSON.parse(apiresponse.data.records[0].record_value);
                                _this.plantestdrpdown = true;
                                _this.hide_back = false;
                                _this.show_testplan_store = true;
                                _this.testvalue = parseData.test_name;
                                _this.loaddatas = true;
                            }
                        });
                    }
                }
            }
        });
        this.getLastRecord();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.filterSubscription)) {
            this.filterSubscription.unsubscribe();
        }
    };
    DashboardComponent.prototype.getLastRecord = function () {
        var _this = this;
        this.commonservice.getLastTestCompleted().subscribe(function (response) {
            if (response.status === 'ok') {
                _this.lastRecordCompleted = response.data;
            }
        });
    };
    DashboardComponent.prototype.dateConvert = function (time) {
        // console.log('Working --> ', new Date(time*1000))
        return new Date(time * 1000);
    };
    DashboardComponent.prototype.gotoaparticularstep = function (data, edit) {
        var _this = this;
        localStorage.setItem('stepId', '');
        console.log('data.stepper_id', data);
        this.commonservice.Get_Editvalues(data).subscribe(function (apiresponse) {
            console.log('apiresponse.data.stepper_id', apiresponse.data);
            if (apiresponse.status === 'ok') {
                localStorage.setItem('category', apiresponse.data['category_name']);
                sessionStorage.setItem('test-type', apiresponse.data['testtype']);
                if (apiresponse.data.stepper_id < 6) {
                    var stepperID = apiresponse.data.stepper_id;
                    var data_1 = apiresponse.data;
                    console.log(data_1);
                    var changedData = {
                        test_name: data_1.test_name,
                        test_type: data_1.testtype,
                        target_variable: data_1.target_var,
                        desc: data_1.test_desc,
                        additional_det: data_1.test_desc1,
                        pretest_startdt: data_1.pre_start,
                        pretest_enddt: data_1.pre_end,
                        testwin_startdt: data_1.testwin_start,
                        testwin_enddt: data_1.testwin_end,
                        stepindex: data_1.stepindex,
                        stage_id: data_1.stage_id,
                        test_id: data_1.test_id,
                        banner: eval(data_1.banners),
                        segment: eval(data_1.store_segment),
                        territory: eval(data_1.territory_name),
                        store_grid: eval(data_1.store_grid),
                        category: eval(data_1.category_name),
                        strfeature1: data_1.store_feature1,
                        strfeature2: data_1.store_feature2,
                        break_even_lift: data_1.break_even_lift,
                        cost: data_1.cost,
                        rsv_estimate: data_1.rsv_estimate,
                        is_checkconf: data_1.is_checkconf,
                        is_checkmarg: data_1.is_checkmarg,
                        is_checknum: data_1.is_checknum,
                        confidence_lvl: data_1.confidence_lev,
                        margin_error: data_1.margin_oferror,
                        no_of_teststores: data_1.no_of_teststore,
                        records: data_1.records,
                        selectTestStores: data_1.select_test_stores,
                        is_finalize: data_1.is_finalize,
                        control_stores: data_1.control_stores,
                        required_control_stores: data_1.required_control_stores
                    };
                    localStorage.setItem('testid', data_1.test_id);
                    localStorage.setItem('testidstage2', data_1.test_id);
                    console.log(changedData);
                    console.log(stepperID);
                    _this.commonservice.setCurrentComponentSubject(stepperID, changedData, edit, 'fromEdit');
                    _this.router.navigate(['./createTest']);
                }
                else if (apiresponse.data.stepper_id == 6) {
                    localStorage.setItem('stepId', '');
                    console.log(apiresponse.data.test_name);
                    localStorage.setItem('testname', apiresponse.data.test_name);
                    _this.router.navigate(['./analyseImpact']);
                }
                else if (apiresponse.data.stepper_id === 7) {
                    console.log(apiresponse.data.test_name);
                    localStorage.setItem('testname', apiresponse.data.test_name);
                    localStorage.setItem('stepId', '7');
                    _this.router.navigate(['./analyseImpact']);
                }
            }
        });
    };
    DashboardComponent.prototype.getAnalyseImpactButton = function (stepId) {
        if (stepId <= 5) {
            return 'button_deactivate';
        }
        else {
            return 'button_activate';
        }
    };
    DashboardComponent.prototype.getAICursor = function (stepId) {
        if (stepId <= 5) {
            return 'cursor_deactivate';
        }
        else {
            return 'cursor_activate';
        }
    };
    DashboardComponent.prototype.gotoAnalyseStep = function (row) {
        // console.log(row,"row")
        // console.log(row.stepId,"stepId")
        if (row.stepId < 5) {
            return;
        }
        else {
            localStorage.setItem('stepId', '');
            localStorage.setItem('testname', row.test_name);
            this.router.navigate(['./analyseImpact']);
        }
    };
    DashboardComponent.prototype.status = function (search_id) {
        var record = this.originalData.filter(function (x) { return x.test_id === search_id; })[0];
        var date = new Date(new Date().toDateString()).getTime();
        if (date >= new Date(record.testwin_start).getTime() &&
            date <= new Date(record.testwin_end).getTime() && record.is_finalize === false) {
            return 'Test Running';
        }
        else if (!(date >= new Date(record.testwin_start).getTime() &&
            date <= new Date(record.testwin_end).getTime()) && record.is_finalize === true) {
            return 'Test Analysis';
        }
        else if (record.is_finalize === true) {
            return 'Test Planned';
        }
        return 'Draft Saved';
    };
    DashboardComponent.prototype.addStatusInList = function (ary) {
        var _this = this;
        // Resetting the Values
        this.ongoingCount = 0;
        this.completedCount = 0;
        this.draftCount = 0;
        // end
        var date = new Date(new Date().toDateString()).getTime();
        ary.forEach(function (element) {
            if (date >= new Date(element.testwin_start).getTime() &&
                date <= new Date(element.testwin_end).getTime() && element.is_finalize === false) {
                element.test_status = 'Test Running';
                _this.ongoingCount = _this.ongoingCount + 1;
            }
            else if (!(date >= new Date(element.testwin_start).getTime() &&
                date <= new Date(element.testwin_end).getTime()) && element.is_finalize === true) {
                element.test_status = 'Test Analysis';
                _this.completedCount = _this.completedCount + 1;
            }
            else if (element.is_finalize === true) {
                element.test_status = 'Test Planned';
                _this.ongoingCount = _this.ongoingCount + 1;
            }
            else {
                element.test_status = 'Draft Saved';
                _this.draftCount = _this.draftCount + 1;
            }
        });
        return ary;
    };
    /*Delete Test summary data*/
    DashboardComponent.prototype.DeleteTest = function () {
        var _this = this;
        console.log(this.test_name);
        var ary = [];
        this.homeservice.DeleteSavedData(this.test_Id_delete).subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok') {
                _this.toastr.success('', 'Test #' + _this.test_name + ' deleted Successfully!');
                _this.GetSavedTestdata();
            }
            else {
            }
        });
    };
    DashboardComponent.prototype.hideOrShowColumns = function (data, index) {
        console.log('data', data, this.hideIcon[data]);
        if (this.hideIcon[data] === true) {
            this.hideIcon[data] = false;
        }
        else {
            this.hideIcon[data] = true;
        }
        if (data === 'test_name') {
            this.hideTestNamesColumns = !this.hideTestNamesColumns;
        }
        else if (data === 'test_window') {
            this.hideTestWindowColumns = !this.hideTestWindowColumns;
        }
        else if (data === 'details') {
            this.hideDetailsColumns = !this.hideDetailsColumns;
        }
        else if (data === 'Created') {
            this.hideCreatedColumn = !this.hideCreatedColumn;
        }
        else if (data === 'Modified') {
            this.hideModifiedColumn = !this.hideModifiedColumn;
        }
        else if (data === 'status') {
            this.hideStatusColumn = !this.hideStatusColumn;
        }
        else if (data === 'Actions') {
            this.hideActionsColumns = !this.hideActionsColumns;
        }
        else if (data === 'test_type') {
            this.hideTestTypeColumns = !this.hideTestTypeColumns;
        }
    };
    DashboardComponent.prototype.valueShown = function (data) {
        if (data === 'test_name') {
            return 'Test Name';
        }
        else if (data === 'test_window') {
            return 'Test Window';
        }
        else if (data === 'test_type') {
            return 'Test Type';
        }
        else if (data === 'details') {
            return 'Description';
        }
        else if (data === 'Created') {
            return 'Created At';
        }
        else if (data === 'Modified') {
            return 'Last Modified At';
        }
        else if (data === 'status') {
            return 'Status';
        }
        else if (data === 'Actions') {
            return 'Actions';
        }
    };
    /*Sort Data for the Saved Data*/
    DashboardComponent.prototype.sortDataLoadSavedsummary = function (sort) {
        var _this = this;
        console.log(this.isFilter, 'filter');
        if (!this.isFilter) {
            this.LOAD_DATA = this.filerApplied;
            this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.LOAD_DATA);
        }
        else {
            this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.LOAD_DATA);
        }
        var data = this.LOAD_DATA.slice();
        setTimeout(function () { return _this.TestSummary.paginator = _this.paginator; });
        setTimeout(function () { return _this.TestSummary.sort = _this.sort; });
        if (!sort.active || sort.direction === '') {
            this.LOAD_DATA = data;
            return;
        }
        console.log(sort.active, 'sort data');
        this.LOAD_DATA = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'status':
                    return compare_loadsaved_storesummary(a.test_status, b.test_status, isAsc);
                case 'test_name':
                    return compare_loadsaved_storesummary(a.test_name.toLowerCase(), b.test_name.toLowerCase(), isAsc);
                case 'details':
                    return compare_loadsaved_storesummary(a.details.toLowerCase(), b.details.toLowerCase(), isAsc);
                case 'test_window':
                    return sort_range_date(a.test_window, b.test_window, isAsc);
                case 'Created':
                    return sort_by_date(new Date(a.Created), new Date(b.Created), isAsc);
                case 'Modified':
                    return sort_by_date(new Date(a.Modified), new Date(b.Modified), isAsc);
                case 'test_type':
                    return compare_loadsaved_storesummary(a.test_type.toLowerCase(), b.test_type.toLowerCase(), isAsc);
                default:
                    return 0;
            }
        });
        if (!this.isFilter) {
            this.filerApplied = this.LOAD_DATA;
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.TestSummary.sort = this.sort;
        this.onResize();
    };
    DashboardComponent.prototype.openDailog = function (templateRef) {
        this.dialogRef = this.dialog.open(templateRef);
    };
    DashboardComponent.prototype.closeDailog = function () {
        this.dialogRef.close();
    };
    DashboardComponent.prototype.onResize = function () {
        this.height = window.innerHeight - 64;
    };
    DashboardComponent.prototype.openDeleteDailog = function (templateRef, row) {
        console.log(row);
        this.deleteDialogRef = this.dialog.open(templateRef);
        this.test_Id_delete = row.test_id;
        this.test_name = row.test_name;
        this.test_name_delete = this.originalData.filter(function (element) { return element.test_id == row.test_id; })[0].test_name;
        // this.DeleteData()
    };
    DashboardComponent.prototype.closeDeleteDailog = function (event) {
        // this.deleteDialogRef.close();
        if (event === 1) {
            this.DeleteTest();
            this.deleteDialogRef.close();
        }
        else {
            this.deleteDialogRef.close();
        }
    };
    DashboardComponent.prototype.filterCall = function () {
        var _this = this;
        this.sideNavservice.toggleFilter('Filter');
        setTimeout(function () {
            _this.globalEventService.publish('FILTER_OPEN_METHOD', {
                module: 'Dashboard',
                data: _this.originalData
            });
        });
    };
    DashboardComponent.prototype.GetSavedTestdata = function () {
        var _this = this;
        // this.testSummaryDataCount = 0;
        this.homeservice.GetSaved_Testdata().subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok') {
                var ary = [];
                _this.originalData = apiresponse.data;
                for (var i = 0; i < apiresponse.data.length; i++) {
                    // if(apiresponse.data[i]['is_own'] == true){
                    var start_Date = void 0;
                    var end_Date = void 0;
                    if (apiresponse.data[i]['testwin_start'] != null) {
                        start_Date = new Date(apiresponse.data[i]['testwin_start']);
                        start_Date = _this.toYMD(start_Date);
                    }
                    else {
                        start_Date = '';
                    }
                    if (apiresponse.data[i]['testwin_end'] != null) {
                        end_Date = new Date(apiresponse.data[i]['testwin_end']);
                        end_Date = _this.toYMD(end_Date);
                    }
                    else {
                        end_Date = '';
                    }
                    ary.push({
                        test_id: apiresponse.data[i].test_id,
                        test_name: apiresponse.data[i]['test_name'],
                        test_type: apiresponse.data[i]['testtype'],
                        status: _this.getStatusName(apiresponse.data[i]['testwin_start'], apiresponse.data[i]['testwin_end']),
                        details: apiresponse.data[i]['test_desc'],
                        Created: _this.format(apiresponse.data[i]['created_on']),
                        is_own: apiresponse.data[i]['is_own'],
                        start_date: start_Date,
                        end_date: end_Date,
                        test_window: start_Date + ' - ' + end_Date,
                        Modified: _this.format(apiresponse.data[i]['modified_on']),
                        testwin_start: apiresponse.data[i].testwin_start,
                        testwin_end: apiresponse.data[i].testwin_end,
                        is_finalize: apiresponse.data[i].is_finalize,
                        stepId: apiresponse.data[i].stepper_id,
                    });
                    if (apiresponse.data[i]['is_finalize'] === true) {
                        var gross_sales = 0;
                        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(apiresponse.data[i].test_control_change)) {
                            gross_sales = apiresponse.data[i].test_control_change;
                            _this.listItems.push({
                                test_id: apiresponse.data[i].test_id,
                                test_name: apiresponse.data[i]['test_name'],
                                gross_sales: gross_sales,
                                test_window: start_Date + ' - ' + end_Date
                            });
                        }
                    }
                    // }
                }
                ary = _this.addStatusInList(ary);
                _this.testSummaryDataCount = ary.length;
                _this.LOAD_DATA = ary;
                _this.filerApplied = ary;
                _this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.LOAD_DATA);
                setTimeout(function () { return _this.TestSummary.paginator = _this.paginator; });
                setTimeout(function () { return _this.TestSummary.sort = _this.sort; });
                _this.changeDetectorRefs.detectChanges();
                if (_this.listItems.length > 0) {
                    _this.gross_sales = _this.listItems[0].gross_sales;
                    _this.testImpactId = _this.listItems[0].test_name;
                    _this.test_window = _this.listItems[0].test_window;
                }
            }
        });
    };
    DashboardComponent.prototype.historyCall = function (test_id) {
        var _this = this;
        this.sideNavservice.toggleFilter('History');
        setTimeout(function () {
            _this.globalEventService.publish('history_id', test_id);
        });
    };
    DashboardComponent.prototype.getColor = function (id) {
        var value = this.status(id);
        if (value === 'Draft Saved') {
            return 'status_purple';
        }
        else if (value === 'Test Running' || value === 'Test Analysis' || value === 'Test Planned') {
            return 'status_yellow';
        }
    };
    // filter Apply based on the filter selected
    DashboardComponent.prototype.formatfilteredData = function (dataValue) {
        var data = [];
        var tempData = this.filerApplied;
        this.filterApply(dataValue, tempData);
    };
    DashboardComponent.prototype.filterApply = function (dataValue, tempData) {
        var _this = this;
        this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.filerApplied);
        var keyValues = [];
        var valuesArray = [];
        for (var i = 0; i < dataValue.length; i++) {
            keyValues.push(dataValue[i]['name']);
            for (var j = 0; j < dataValue[i]['data'].length; j++) {
                console.log(dataValue[i], dataValue[i]['data'][j]);
                valuesArray.push(dataValue[i]['data'][j]);
            }
        }
        console.log(keyValues, 'keyvalues', valuesArray);
        var result = tempData.filter(function (e) {
            return keyValues.every(function (a) {
                return !valuesArray.includes(e[a]);
            });
        });
        tempData = result;
        console.log(result, 'tempDatavalue filter');
        if (valuesArray.length > 0) {
            this.LOAD_DATA = tempData;
            this.testSummaryDataCount = tempData.length;
            this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](tempData);
            this.isFilter = true;
        }
        else {
            this.LOAD_DATA = this.filerApplied;
            this.testSummaryDataCount = this.filerApplied.length;
            this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.filerApplied);
            this.isFilter = false;
        }
        setTimeout(function () { return _this.TestSummary.paginator = _this.paginator; });
    };
    DashboardComponent.prototype.FilterLoadSavedTestsummary = function (event) {
        var _this = this;
        var val = event.toLowerCase();
        this.tempFilter = this.LOAD_DATA;
        var temp = this.tempFilter.filter(function (d) { return (d.test_name
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
            d.status
                .toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
            d.details
                .toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
            d.test_type
                .toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
            d.test_window
                .toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
            d.Created.toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
            d.Modified.toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
            !val); });
        if (this.tempFilter.length > 0) {
            this.testSummaryDataCount = temp.length;
            this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](temp);
            setTimeout(function () { return _this.TestSummary.paginator = _this.paginator; });
            setTimeout(function () { return _this.TestSummary.sort = _this.sort; });
        }
        else {
            this.LOAD_DATA = this.LOAD_DATA;
            this.testSummaryDataCount = this.LOAD_DATA.length;
            this.TestSummary = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.LOAD_DATA);
            setTimeout(function () { return _this.TestSummary.paginator = _this.paginator; });
            setTimeout(function () { return _this.TestSummary.sort = _this.sort; });
        }
    };
    DashboardComponent.prototype.getStatusName = function (startDate, endDate) {
        if (startDate != null &&
            startDate !== '' &&
            startDate !== undefined &&
            endDate != null &&
            endDate !== '' &&
            endDate !== undefined) {
            var now = new Date();
            if (now > new Date(startDate) && now < new Date(endDate)) {
                return 'In progress';
            }
            if (new Date(endDate) <= now) {
                return 'Measurement phase';
            }
            if (new Date(startDate) >= now) {
                return 'Planning phase';
            }
        }
        else {
            return '-';
        }
    };
    DashboardComponent.prototype.format = function (date) {
        if (date !== 0 && date != null && date !== undefined) {
            var dd = moment__WEBPACK_IMPORTED_MODULE_16__(date * 1000).format('DD, MMM YYYY');
            var time = moment__WEBPACK_IMPORTED_MODULE_16__(date * 1000).format('hh:mm A');
            // return dd + ' ' + time;
            return dd;
        }
        else {
            return '-';
        }
    };
    DashboardComponent.prototype.toYMD = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_16__(date).format('DD, MMM YYYY');
    };
    DashboardComponent.prototype.getGrossSales = function (data) {
        var index = this.listItems.findIndex(function (x) { return x.test_id === data; });
        if (index !== -1) {
            this.testImpactId = this.listItems[index].test_name;
            this.gross_sales = this.listItems[index].gross_sales;
            this.test_window = this.listItems[index].test_window;
        }
    };
    DashboardComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["moveItemInArray"])(this.displayedColumnsLoadSaved, event.previousIndex, event.currentIndex);
    };
    DashboardComponent.prototype.receivedData = function (testId, action) {
        console.log(testId);
        console.log(action);
        if (action === 'edit') {
            this.gotoaparticularstep(testId, 'edit');
        }
        else if (action === 'history') {
            this.historyCall(testId);
        }
    };
    DashboardComponent.prototype.deleteData = function (row) {
        this.openDeleteDailog(this.deleteDlg, row);
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_apicall_service__WEBPACK_IMPORTED_MODULE_12__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_11__["TestConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_9__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_10__["GlobalEventsService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.deleteDlg = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, hostBindings: function DashboardComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DashboardComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 231, vars: 26, consts: [["id", "dashboard_content"], ["dashboardContent", ""], [1, "row", "pt-4"], [1, "col-md-9", "col-lg-9", "col-sm-12"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-sm-12"], [2, "height", "7rem"], [2, "font-weight", "bold", "font-size", "1.2rem"], ["class", "pt-2 admin_dash_text", 4, "ngIf"], ["id", "test_status", 1, "col-md-6", "col-lg-6", "col-sm-12", 2, "padding-left", "7px!important"], [2, "height", "7rem", "border-radius", "0.75rem"], [2, "font-weight", "bold", "font-size", "0.8rem"], [1, "row", "pt-3"], [1, "col-md-4", "col-lg-4"], [2, "color", "#84888b", "font-size", "0.75rem"], [2, "font-weight", "bold", "font-size", "1.125rem"], [1, "col-md-4", "col-lg-4", 2, "border-left", "1px solid lightgray"], [1, "pt-4", "pb-4"], [2, "border-radius", "12px", "height", "350px !important"], [3, "tableData", "columnHeader", "tableHeader", "tableType", "originalData", "editData", "historyData", "deleteData", "analyseData", "callFilterData", "callSortData"], [4, "ngIf"], ["id", "getting_start", 1, "col-md-3", "col-lg-3", "col-sm-12", "custom-width"], [1, "flex-column"], ["ngbDropdown", "", "id", "dropdownBasic1", "ngbDropdownToggle", "", 2, "cursor", "pointer", 3, "ngStyle"], [1, "test_impact"], [2, "white-space", "break-spaces"], ["aria-hidden", "true", 1, "fa", "fa-angle-down", "pl-2"], [2, "font-size", "0.625rem !important", "color", "#5e5f60"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [3, "perfectScrollbar"], ["ngbDropdownItem", "", 4, "ngFor", "ngForOf"], [2, "padding-top", "1rem", 3, "ngStyle"], ["id", "cardChanges", 1, "rowChanges"], [1, "col"], [1, "card-title", "mb-0", 2, "font-size", "14px", "color", "#7a8aa0"], [1, "mt-2"], [1, "font-weight-bold", 2, "font-size", "1.2rem", "color", "#2dc887"], [1, "col-auto", "mt-1"], [1, "icon", "icon-shape", "text-white", "rounded-circle", "icon-bg-color"], [1, "fas", "fa-bar-chart", 2, "color", "#0f0f98", "font-size", "18px"], [1, "route_container_top"], [2, "overflow", "auto", "height", "19.1rem"], [1, "getting_start"], ["id", "getStarted", 1, "border_bottom"], [1, "card-panel"], [1, "cards-style", 2, "font-weight", "bold", "color", "#28282a", "font-size", "0.813rem"], ["id", "getStarted"], ["deleteDialog", ""], [1, "pt-2", "admin_dash_text"], [1, "no_rec_found"], ["ngbDropdownItem", ""], [1, "upload_text1", "font_mulish_regular", 3, "click"], [2, "font-size", "1.18rem"], [1, "delete_small_text"], [2, "float", "right", "padding-top", "1.5rem", "margin-bottom", "-10px"], ["mat-button", "", 1, "button-color", "font_family_button", 2, "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "submit", 1, "pl-2", "button-color-enabled-background", "font_family_button", 2, "cursor", "pointer", 3, "click"], ["mat-button", "", 1, "button-color", 2, "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "submit", 1, "pl-2", "button-color-enabled-background", 2, "cursor", "pointer", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardComponent_div_17_Template, 3, 4, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Test Summary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Completed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ongoing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Drafts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "app-common-table", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editData", function DashboardComponent_Template_app_common_table_editData_67_listener($event) { return ctx.receivedData($event, "edit"); })("historyData", function DashboardComponent_Template_app_common_table_historyData_67_listener($event) { return ctx.receivedData($event, "history"); })("deleteData", function DashboardComponent_Template_app_common_table_deleteData_67_listener($event) { return ctx.deleteData($event); })("analyseData", function DashboardComponent_Template_app_common_table_analyseData_67_listener($event) { return ctx.gotoAnalyseStep($event); })("callFilterData", function DashboardComponent_Template_app_common_table_callFilterData_67_listener() { return ctx.filterCall(); })("callSortData", function DashboardComponent_Template_app_common_table_callSortData_67_listener($event) { return ctx.sortDataLoadSavedsummary($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, DashboardComponent_div_70_Template, 5, 0, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Test Impact of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "u");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "perfect-scrollbar", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, DashboardComponent_div_101_Template, 5, 1, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Gross Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-card", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Getting Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-expansion-panel", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-expansion-panel-header", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "How to run a\n                        test?\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Once you have a test plan approved by your team, you can start off with the create new test on the side navigation. The different steps involved in starting and running a test are laid out for you there.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-expansion-panel", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-expansion-panel-header", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "What Should\n                        I Know before run a test?\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Before creating/running a test, the user should know the type of test they want to perform (Frequency, Duration, RTM Impact Test, Activity, Others), the target variable (RSV or Volume), the Post-Test Window (Timeframe in which the test has to run) and the Pre \u2013 Test Window (Timeframe with which the comparison has to be done).");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-expansion-panel", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-expansion-panel-header", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "What is the\n                        ideal duration of any test?\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " It\u2019s ideal to run a test for at least 4 weeks for tests other than RTM Impact Test. For RTM Impact Test the ideal duration is spread across at least 2 years (1 year each for Pre-Test and Post-Test Window).");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "mat-expansion-panel", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-expansion-panel-header", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Can I edit a\n                        test once it is initiated?\n                      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\n                  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Tests that are created and having the status as ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Draft Saved");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "  or ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Test Running");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " can be edited. Tests that are created and having the status as ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Test Analysis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " cannot be edited");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, DashboardComponent_ng_template_225_Template, 20, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, DashboardComponent_ng_template_228_Template, 20, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n              Hi ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, ctx.firstName), ", welcome back\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastRecordCompleted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completedCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ongoingCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.draftCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx.TestSummary)("columnHeader", ctx.columnHeader1)("tableHeader", "All tests")("tableType", ctx.dashboard)("originalData", ctx.originalData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testSummaryDataCount == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx.listItems.length > 0 ? "unset" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Test #", ctx.testImpactId, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.test_window);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", 200, "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.configPerfect);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, ctx.listItems.length > 0 ? "unset" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.gross_sales, "%");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardContent"], _shared_component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_19__["CommonTableComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanelDescription"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownItem"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_24__["TimeAgoPipe"]], styles: [".stg1text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  position: relative;\n  top: 3%;\n  font-weight: bold;\n}\n\n.confcheck[_ngcontent-%COMP%] {\n  float: left;\n  width: 4%;\n  margin: -5px 5px 0px 0px;\n}\n\n.label1[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  font-size: 20px;\n  font-weight: bold;\n  color: #695b5b;\n  display: block;\n  text-align: center !important;\n}\n\n.label11[_ngcontent-%COMP%] {\n  margin-top: -4%;\n  font-size: 20px;\n  font-weight: bold;\n  color: #695b5b;\n  display: block;\n  text-align: center !important;\n}\n\n.extcenter[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center !important;\n}\n\n\n\n\n\n.second.stepper[_ngcontent-%COMP%] {\n  height: 100px;\n  background: #ffffff;\n  color: #fff;\n  text-align: center;\n  line-height: 40px;\n  position: relative;\n  left: -10px;\n  \n}\n\ntd[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 120%;\n  display: table;\n  text-align: left;\n}\n\n.second.stepper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 0;\n  left: -30px;\n  border: 50px solid #ffffff;\n  border-left: 30px solid transparent;\n}\n\n.second.stepper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: 100%;\n  top: 0;\n  border: 50px solid transparent;\n  border-left: 30px solid #ffffff;\n}\n\n.stg2text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  position: relative;\n  top: 3%;\n  font-weight: bold;\n  color: #000000;\n}\n\n\n\n\n\n.third.stepper[_ngcontent-%COMP%] {\n  height: 100px;\n  background: #ffffff;\n  color: #fff;\n  position: relative;\n  text-align: center;\n  line-height: 40px;\n  left: 10px;\n}\n\n.third.stepper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 0;\n  left: -41px;\n  \n  border: 50px solid #ffffff;\n  border-left: 30px solid transparent;\n}\n\n.stg3text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  position: relative;\n  top: 3%;\n  font-weight: bold;\n  color: #000000;\n}\n\n.createbutton[_ngcontent-%COMP%] {\n  background-color: #0000a0;\n  color: #fff;\n  border-radius: 0;\n  width: 17%;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  background-image: url('calendar.png') !important;\n  background-repeat: no-repeat !important;\n  background-size: 23px !important;\n  background-position: center !important;\n}\n\n.nonacttive[_ngcontent-%COMP%] {\n  color: #0000a0 !important;\n  border-radius: 3px;\n  font-size: 15px;\n  cursor: pointer;\n  padding: 0 5px 0 5px;\n  font-weight: bold;\n}\n\n.createtestlabel[_ngcontent-%COMP%] {\n  margin: 3% 0 0 0;\n  background-color: #9292ea;\n  color: #fff;\n  width: 83%;\n  height: 35px;\n  text-align: center !important;\n  padding: 6px 0 0 0px;\n  font-weight: bold;\n}\n\n.borderradnone[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.testform[_ngcontent-%COMP%] {\n  margin: 3% 0 0 3%;\n}\n\n.applform[_ngcontent-%COMP%] {\n  margin: 8% 0 0 0px;\n  max-width: 100%;\n}\n\n.uploadstorebut[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 17%;\n  background-color: #0000a0;\n  color: #fff;\n  border-radius: 0;\n  \n  display: block;\n}\n\n.refresh[_ngcontent-%COMP%] {\n  background-color: #0000a0;\n  color: #fff;\n  border-radius: 0;\n  display: block;\n  float: left;\n  margin: 0 0 0 4%;\n  width: 30%;\n}\n\n.compute[_ngcontent-%COMP%] {\n  margin: 27px 0 5% 5%;\n  width: 40%;\n  background-color: #0000a0;\n  color: #fff;\n  border-radius: 0;\n  display: block;\n}\n\n.goback[_ngcontent-%COMP%] {\n  background-color: #0000a0;\n  color: #fff;\n  border-radius: 0;\n  display: block;\n  float: left;\n  width: 30%;\n}\n\n.testappsel[_ngcontent-%COMP%] {\n  color: #0000a0;\n  text-align: center !important;\n  font-weight: bold;\n  display: block;\n}\n\n\n\n\n\n\n\n.stponenxt[_ngcontent-%COMP%] {\n  height: 38px;\n  float: right;\n  margin-top: 61px;\n  width: 90px;\n}\n\n.reset[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 90px;\n}\n\n.state-str-filter[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 90px;\n}\n\n.savecontinue[_ngcontent-%COMP%] {\n  height: 38px;\n  float: right;\n  margin-top: 61px;\n}\n\n.stponebck[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 90px;\n  margin: 63px 3px;\n  bottom: 61px;\n  left: 83px;\n}\n\n.Footerbtngrp[_ngcontent-%COMP%] {\n  margin: 2vw 0px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n  margin-left: 1rem;\n  color: white;\n  background-color: #0386ff;\n  width: 100px;\n  border-radius: 0;\n}\n\n.upld-selectstr-label[_ngcontent-%COMP%] {\n  left: 215px;\n  top: 35px;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n}\n\n.butn[_ngcontent-%COMP%] {\n  border: none;\n  color: white;\n  background-color: #0386ff;\n  font-size: 16px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n}\n\n\n\n\n\n.testnameinpt[_ngcontent-%COMP%] {\n  width: 354px;\n}\n\n#testname.form-control[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.test_name_content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n}\n\n.identify-control-storebtn[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-left: 2rem;\n  width: 328px;\n}\n\n\n\n\n\n#dashboardContent[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2e91fb !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2e91fb !important;\n  \n}\n\n .mat-radio-outer-circle {\n  border-color: #2e91fb !important;\n  \n}\n\ntable.mat-table[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n  border-spacing: 0 !important;\n  width: 98%;\n  border-collapse: collapse;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n#matTableCellStatus[_ngcontent-%COMP%] {\n  color: #d3ae5e;\n  font-size: 11px !important;\n  width: 80%;\n  height: 30px;\n  position: relative;\n  display: inline-block;\n  \n  background-color: #f6eed7;\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background-color: #f3f4f8;\n  font-weight: bolder;\n  font-family: Mulish_bold !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 12px !important;\n  color: #4a4a4c !important;\n}\n\n.table-header-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 10px;\n  font-weight: bolder;\n}\n\n#testStoreTableId[_ngcontent-%COMP%]   .table-header-label[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  font-size: 12px;\n}\n\n.pad-left[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.sub-td[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ebebeb;\n  padding: 10px;\n}\n\n.mat-checkbox-inner-container-no-side-margin[_ngcontent-%COMP%] {\n  margin-left: 40px !important;\n}\n\n.search_filter[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n\n\n\n\n.fileUpload[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background-color: #041e42;\n  color: white;\n}\n\n.fileUpload[_ngcontent-%COMP%]   input.upload[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.input-group-addon[_ngcontent-%COMP%], .input-group-btn[_ngcontent-%COMP%] {\n  width: 0px !important;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n#uploadtest.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 273px !important;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n#uploadtestandcntrl.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 273px !important;\n  margin-top: 9px;\n  margin-bottom: 0;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.pencil[_ngcontent-%COMP%] {\n  width: 13px;\n}\n\n.bin[_ngcontent-%COMP%] {\n  width: 13px;\n  margin-left: 10px;\n}\n\n.penicon[_ngcontent-%COMP%] {\n  margin: 0 0 0 -25px;\n}\n\n.testplanform[_ngcontent-%COMP%] {\n  color: #0000a0;\n  text-align: center !important;\n  font-weight: bold;\n  display: block;\n}\n\n.pretestborder[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  padding: 13px 5% 0 5%;\n}\n\n.deleteicon[_ngcontent-%COMP%] {\n  position: absolute !important;\n  margin: 0 0 0 -10px;\n}\n\n\n\n@media (min-width: 1281px) {\n  .filter-selecstr[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n\n  .srchbox[_ngcontent-%COMP%] {\n    font-family: Arial, FontAwesome;\n    margin-bottom: 1rem;\n    width: 215px;\n  }\n}\n\n@media (min-width: 1025px) and (max-width: 1280px) {\n  .filter-selecstr[_ngcontent-%COMP%] {\n    left: 0px;\n  }\n\n  .srchbox[_ngcontent-%COMP%] {\n    font-family: Arial, FontAwesome;\n    margin-bottom: 1rem;\n    width: 222px;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n  .filter-selecstr[_ngcontent-%COMP%] {\n    left: 0px;\n  }\n\n  .srchbox[_ngcontent-%COMP%] {\n    font-family: Arial, FontAwesome;\n    margin-bottom: 1rem;\n    width: 155px;\n  }\n\n  .testnameinpt[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n\n  .identify-control-storebtn[_ngcontent-%COMP%] {\n    height: 35px;\n    margin-left: 2rem;\n    width: 285px;\n  }\n}\n\n.fixed-container-test-store[_ngcontent-%COMP%] {\n  height: 350px;\n  overflow: auto;\n}\n\n.inpt-per[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n}\n\n.brief-desc[_ngcontent-%COMP%] {\n  width: 900px;\n  margin-top: 17%;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #0000a0 !important;\n}\n\n.positonstres[_ngcontent-%COMP%] {\n  position: relative;\n  left: 15%;\n}\n\n.posupld[_ngcontent-%COMP%] {\n  position: relative;\n  right: 20%;\n}\n\n.podwnld[_ngcontent-%COMP%] {\n  position: relative;\n  right: 15%;\n}\n\n.notestlabel[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 1%;\n}\n\n#customers[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  margin: 20px 0px;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  font-size: 15px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #0000a0;\n  color: white;\n}\n\n.mat-column-Actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\n    max-width: 1300px;\n  }\n}\n\n.margin_change[_ngcontent-%COMP%] {\n  margin-right: 69px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  background-color: #ebebeb !important;\n}\n\n.testApplicable1[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n\n.testApplicable2[_ngcontent-%COMP%] {\n  padding-top: 13px;\n  padding-bottom: 12px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.v63_3741[_ngcontent-%COMP%] {\n  width: 1084px;\n  height: 900px;\n  background: #f2f3f6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow-x: scroll;\n  overflow-y: hidden !important;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3743[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 768px;\n  background: #e9ebef;\n  opacity: 1;\n  position: absolute;\n  top: 0px;\n  left: 2px;\n  overflow: hidden;\n}\n\n.v63_3744[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 67px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v63_3795[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 21px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v63_3796[_ngcontent-%COMP%] {\n  width: 121px;\n  color: #c9ccd5;\n  position: absolute;\n  top: 2px;\n  left: 29px;\n  font-weight: Regular;\n  font-size: 13px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3799[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 156px;\n  left: 24px;\n  overflow: hidden;\n}\n\n.v63_3800[_ngcontent-%COMP%] {\n  width: 75px;\n  color: #5c677d;\n  position: absolute;\n  top: 4px;\n  left: 32px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3805[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 664px;\n  left: 24px;\n  overflow: hidden;\n}\n\n.v63_3806[_ngcontent-%COMP%] {\n  width: 66px;\n  color: #5c677d;\n  position: absolute;\n  top: 4px;\n  left: 32px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3808[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 712px;\n  left: 24px;\n  overflow: hidden;\n}\n\n.v63_3809[_ngcontent-%COMP%] {\n  width: 42px;\n  color: #5c677d;\n  position: absolute;\n  top: 4px;\n  left: 32px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3811[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 36px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 24px;\n  left: 24px;\n  overflow: hidden;\n}\n\n.v63_3812[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 36px;\n  background: #c4c4c4;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v63_3813[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 92px;\n  background: url('v63_3813.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: -28px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3816[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 21px;\n  left: 1392px;\n  overflow: hidden;\n}\n\n.v63_3817[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: #dadee6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3819[_ngcontent-%COMP%] {\n  width: 113px;\n  color: black;\n  position: absolute;\n  top: 76px;\n  left: 1125px;\n  font-weight: Bold;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3820[_ngcontent-%COMP%] {\n  width: 109px;\n  color: #383c51;\n  top: 200px;\n  left: 900px;\n  font-weight: Bold;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3821[_ngcontent-%COMP%] {\n  width: 661px;\n  height: 96px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 55px;\n  left: 234px;\n  overflow: hidden;\n}\n\n.v63_3822[_ngcontent-%COMP%] {\n  height: 96px;\n  background: white;\n  padding: 8px 8px;\n  margin: 10px;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v63_3823[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 51px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 23px;\n  left: 104px;\n  overflow: hidden;\n}\n\n.v63_3824[_ngcontent-%COMP%] {\n  width: 94px;\n  color: #888a9c;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  font-weight: SemiBold;\n  font-size: 9px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3825[_ngcontent-%COMP%] {\n  width: 33px;\n  color: black;\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  font-weight: Bold;\n  font-size: 24px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3826[_ngcontent-%COMP%] {\n  width: 81px;\n  height: 51px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 23px;\n  left: 286px;\n  overflow: hidden;\n}\n\n.v63_3827[_ngcontent-%COMP%] {\n  width: 81px;\n  color: #888a9c;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  font-weight: SemiBold;\n  font-size: 9px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3828[_ngcontent-%COMP%] {\n  width: 8px;\n  color: black;\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  font-weight: Bold;\n  font-size: 24px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3829[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 51px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 23px;\n  left: 461px;\n  overflow: hidden;\n}\n\n.v63_3830[_ngcontent-%COMP%] {\n  width: 76px;\n  color: #888a9c;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  font-weight: SemiBold;\n  font-size: 9px;\n  opacity: 1;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.v63_3831[_ngcontent-%COMP%] {\n  width: 8px;\n  color: black;\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  font-weight: Bold;\n  font-size: 24px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3832[_ngcontent-%COMP%] {\n  height: 48px;\n  opacity: 1;\n  position: absolute;\n  top: 26px;\n  left: 234px;\n  border: 1px solid #e9ebef;\n}\n\n.v63_3833[_ngcontent-%COMP%] {\n  height: 48px;\n  opacity: 1;\n  position: absolute;\n  top: 26px;\n  left: 416px;\n  border: 1px solid #e9ebef;\n}\n\n.v63_3834[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 96px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 55px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v63_3835[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 96px;\n  background: white;\n  padding: 8px 8px;\n  margin: 10px;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v63_3836[_ngcontent-%COMP%] {\n  width: 110px;\n  color: #888a9c;\n  position: absolute;\n  top: 23px;\n  left: 99px;\n  font-weight: SemiBold;\n  font-size: 9px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3837[_ngcontent-%COMP%] {\n  width: 8px;\n  color: black;\n  position: absolute;\n  top: 41px;\n  left: 97px;\n  font-weight: Bold;\n  font-size: 24px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3838[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 23px;\n  left: 23px;\n  overflow: hidden;\n}\n\n.v63_3839[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #f2f3f6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3845[_ngcontent-%COMP%] {\n  width: 107px;\n  color: #383c51;\n  position: absolute;\n  top: 432px;\n  left: 900px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3846[_ngcontent-%COMP%] {\n  width: 140px;\n  position: absolute;\n  top: 463px;\n  left: 900px;\n  font-weight: Regular;\n  font-size: 10px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3847[_ngcontent-%COMP%] {\n  width: 13px;\n  color: #383c51;\n  position: absolute;\n  top: 103px;\n  left: 1125px;\n  font-weight: Regular;\n  font-size: 10px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3848[_ngcontent-%COMP%] {\n  width: 140px;\n  color: #383c51;\n  position: absolute;\n  top: 579px;\n  left: 900px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3849[_ngcontent-%COMP%] {\n  width: 140px;\n  color: #383c51;\n  position: absolute;\n  top: 627px;\n  left: 900px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3850[_ngcontent-%COMP%] {\n  width: 140px;\n  color: #383c51;\n  position: absolute;\n  top: 675px;\n  left: 900px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3851[_ngcontent-%COMP%] {\n  width: 140px;\n  color: #383c51;\n  position: absolute;\n  top: 719px;\n  left: 900px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_457[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 100px;\n  left: 17px;\n  overflow: hidden;\n}\n\n.v63_3857[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  background: #383c51;\n  padding: 6px 6px;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  overflow: hidden;\n}\n\n.v63_3858[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 4px;\n  left: 7px;\n  overflow: hidden;\n}\n\n.v63_3859[_ngcontent-%COMP%] {\n  width: 64px;\n  color: #f2f3f6;\n  position: absolute;\n  top: 4px;\n  left: 32px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_453[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 16px;\n  background: #383c51;\n  opacity: 1;\n  position: absolute;\n  top: 5px;\n  left: 175px;\n}\n\n.v85_456[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 16px;\n  background: #383c51;\n  opacity: 1;\n  position: absolute;\n  top: 36px;\n  left: 174px;\n}\n\n.v63_3861[_ngcontent-%COMP%] {\n  width: 875px;\n  height: 44px;\n  background: white;\n  padding: 8px 8px;\n  margin: 10px;\n  opacity: 1;\n  position: absolute;\n  top: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v63_3862[_ngcontent-%COMP%] {\n  width: 135px;\n  color: black;\n  position: absolute;\n  top: 13px;\n  left: 19px;\n  font-weight: Bold;\n  font-size: 18px;\n  opacity: 1;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.v63_3863[_ngcontent-%COMP%] {\n  width: 157px;\n  color: black;\n  position: absolute;\n  top: 13px;\n  left: 161px;\n  font-weight: Regular;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v63_3864[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 83px;\n  left: 937px;\n}\n\n.v63_3979[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 155px;\n  left: 255px;\n  overflow: hidden;\n}\n\n.v63_3980[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v63_3981[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #f2f3f6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v63_3983[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 239px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 0px;\n  left: 900px;\n  overflow: hidden;\n}\n\n.v63_3984[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: white;\n  padding: 8px 8px;\n  margin: 10px;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: -15px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v63_3985[_ngcontent-%COMP%] {\n  width: 162px;\n  color: #888a9c;\n  position: absolute;\n  top: 97px;\n  left: 11px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: center;\n}\n\n.v63_4116[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 94px;\n  background: url('v63_4116.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  left: 50px;\n  overflow: hidden;\n}\n\n.v63_4110[_ngcontent-%COMP%] {\n  width: 172px;\n  height: 35px;\n  padding: 6px 6px;\n  opacity: 1;\n  position: absolute;\n  top: 143px;\n  left: 898px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v63_4111[_ngcontent-%COMP%] {\n  width: 92px;\n  color: #f2f3f6;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_80[_ngcontent-%COMP%] {\n  background: white;\n  left: 0px;\n}\n\n.v85_81[_ngcontent-%COMP%] {\n  width: 125px;\n  color: #383c51;\n  position: relative;\n  top: 40px;\n  left: 6px;\n  font-family: Mulish_bold !important;\n  font-weight: bolder;\n  font-size: 16px;\n  opacity: 1;\n  text-align: left;\n  padding-bottom: 0px;\n}\n\n.v85_82[_ngcontent-%COMP%] {\n  width: 368px;\n  color: #383c51;\n  position: absolute;\n  top: 44px;\n  left: 25px;\n  font-weight: Bold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v85_83[_ngcontent-%COMP%] {\n  width: 465px;\n  color: #383c51;\n  position: absolute;\n  top: 374px;\n  left: 25px;\n  font-weight: Regular;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v85_84[_ngcontent-%COMP%] {\n  width: 503px;\n  height: 283px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 78px;\n  left: 25px;\n  overflow: hidden;\n}\n\n.v85_85[_ngcontent-%COMP%] {\n  width: 503px;\n  height: 283px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v85_86[_ngcontent-%COMP%] {\n  width: 503px;\n  height: 283px;\n  background: #c4c4c4;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.v85_87[_ngcontent-%COMP%] {\n  width: 509px;\n  height: 382px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 20px;\n  left: 3px;\n  overflow: hidden;\n}\n\n.v85_88[_ngcontent-%COMP%] {\n  width: 503px;\n  height: 283px;\n  background: #383c51;\n  opacity: 0.200000003;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_157[_ngcontent-%COMP%] {\n  width: 296px;\n  height: 430px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 239px;\n  left: 797px;\n  overflow: hidden;\n}\n\n.v85_158[_ngcontent-%COMP%] {\n  width: 296px;\n  height: 430px;\n  background: white;\n  padding: 8px 8px;\n  margin: 10px;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v85_159[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 64px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 203px;\n  left: 17px;\n  overflow: hidden;\n}\n\n.v85_160[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 64px;\n  background: #f2f3f6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v85_161[_ngcontent-%COMP%] {\n  width: 134px;\n  color: #383c51;\n  position: absolute;\n  top: 17px;\n  left: 14px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_163[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 64px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 275px;\n  left: 17px;\n  overflow: hidden;\n}\n\n.v85_164[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 64px;\n  background: #f2f3f6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v85_165[_ngcontent-%COMP%] {\n  width: 134px;\n  color: #383c51;\n  position: absolute;\n  top: 17px;\n  left: 14px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_167[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 64px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 347px;\n  left: 17px;\n  overflow: hidden;\n}\n\n.v85_168[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 64px;\n  background: #f2f3f6;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  overflow: hidden;\n}\n\n.v85_169[_ngcontent-%COMP%] {\n  width: 134px;\n  color: #383c51;\n  position: absolute;\n  top: 17px;\n  left: 14px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_171[_ngcontent-%COMP%] {\n  width: 200px;\n  color: #888a9c;\n  position: absolute;\n  top: 174px;\n  left: 17px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v85_175[_ngcontent-%COMP%] {\n  width: 79px;\n  height: 79px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 43px;\n  left: 109px;\n  overflow: hidden;\n}\n\n.v85_176[_ngcontent-%COMP%] {\n  width: 137px;\n  color: #383c51;\n  position: absolute;\n  top: 130px;\n  left: 80px;\n  font-weight: Regular;\n  font-size: 10px;\n  opacity: 1;\n  text-align: center;\n}\n\n.v85_190[_ngcontent-%COMP%] {\n  width: 67px;\n  color: black;\n  position: absolute;\n  top: 22px;\n  left: 183px;\n  font-weight: Regular;\n  font-size: 13px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.v85_177[_ngcontent-%COMP%] {\n  width: 57px;\n  color: black;\n  position: absolute;\n  top: 18px;\n  left: 16px;\n  font-weight: Bold;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n\n.v85_205[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 204px;\n  left: 24px;\n  overflow: hidden;\n}\n\n.v63_3802[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 16px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 4px;\n  left: 32px;\n  overflow: hidden;\n}\n\n.v63_3803[_ngcontent-%COMP%] {\n  width: 66px;\n  color: #5c677d;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  font-weight: SemiBold;\n  font-size: 12px;\n  opacity: 1;\n  text-align: left;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 1;\n  \n  padding-top: 100px;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 25%;\n}\n\n.modaltsl[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 1;\n  \n  padding-top: 200px;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n\n\n\n.modal-content-tsl[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 35%;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\ni.disable[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: not-allowed !important;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  color: transparent;\n}\n\n.button_deactivate[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: lightgray;\n  color: gray;\n}\n\n.button_activate[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cursor_deactivate[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.cursor_activate[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.no_rec_found[_ngcontent-%COMP%] {\n  text-align: center !important;\n  padding-top: 1rem !important;\n}\n\n.display_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none !important;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n@media (min-width: 992px) {\n  #getting_start[_ngcontent-%COMP%]   .custom-width[_ngcontent-%COMP%] {\n    max-width: 24% !important;\n  }\n}\n\n#dashboard_content[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  font-family: Mulish_regular !important;\n  border-radius: 12px;\n}\n\n#test_status[_ngcontent-%COMP%] {\n  font-family: Mulish_regular !important;\n}\n\n.spacing[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n  th.mat-header-cell, td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-width: 0 !important;\n  border-bottom-style: none !important;\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.icon-bg-color[_ngcontent-%COMP%] {\n  background-color: #ebebff;\n}\n\n.icon-shape[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 16px;\n  text-align: center;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n}\n\n#cardChanges.row[_ngcontent-%COMP%] {\n  background-color: #ffff !important;\n}\n\n.rowChanges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.375rem;\n  background-color: #fff;\n  background-clip: border-box;\n  cursor: pointer;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1 1 auto;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n\n.remove_border[_ngcontent-%COMP%] {\n  border-bottom-style: hidden !important;\n  font-size: 0.625rem !important;\n}\n\n  th.mat-header-cell:last-of-type, td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type {\n  text-align: justify;\n}\n\n.button-color[_ngcontent-%COMP%] {\n  color: #101098;\n}\n\n.button-color-enabled-background[_ngcontent-%COMP%] {\n  background-color: #000091;\n  color: #fff !important;\n}\n\n.border_bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgrey;\n  font-family: Mulish_regular;\n}\n\n .mat-menu-content {\n  padding: 8px;\n  font-family: Mulish_regular;\n}\n\n.display_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n@media (min-width: 992px) {\n  #getting_start[_ngcontent-%COMP%]   .custom-width[_ngcontent-%COMP%] {\n    max-width: 24% !important;\n  }\n}\n\n#dashboard_content[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n\n.spacing[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n  th.mat-header-cell, td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-width: 0 !important;\n  border-bottom-style: none !important;\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.icon-bg-green[_ngcontent-%COMP%] {\n  background-color: #059669;\n}\n\n.icon-shape[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 12px;\n  text-align: center;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-shape[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 12px;\n  text-align: center;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n}\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #fb6340 !important;\n}\n\n.bg-green[_ngcontent-%COMP%] {\n  background-color: #a7f3d0;\n}\n\n.bg-red[_ngcontent-%COMP%] {\n  background-color: #ffdfdf;\n}\n\n.icon-bg-green[_ngcontent-%COMP%] {\n  background-color: #ebebff;\n}\n\n.icon-bg-red[_ngcontent-%COMP%] {\n  background-color: #dc2626;\n}\n\n#cardChanges.row[_ngcontent-%COMP%] {\n  background-color: #ffff !important;\n}\n\n.rowChanges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.375rem;\n  background-color: #fff;\n  background-clip: border-box;\n  cursor: pointer;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1 1 auto;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n\n.getting_start[_ngcontent-%COMP%] {\n  font-family: Mulish_bold;\n  font-size: 1rem;\n  margin-left: 1.3rem;\n}\n\n.admin_dash_text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #66768f;\n}\n\n.test_impact[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  font-family: Mulish_bold !important;\n}\n\n#getting_start[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n\n#getting_start[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #def8f2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUEsdUJBQUE7O0FBQ0Esd0JBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQSx3QkFBQTs7QUFDQSx1QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxX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O0VBQ0U7SUFDRSxpQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7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RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWdCRjs7QUFkQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWdC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Q0EsbUJBQUE7QUF3Q0Y7O0FBckNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBd0NGOztBQXJDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0FBd0NGOztBQXJDQTtFQUNFLHdCQUFBO0FBd0NGOztBQXRDQTtFQUNFLG9DQUFBO0FBeUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGcxdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbmZjaGVjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNCU7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4IDBweDtcbn1cblxuLmxhYmVsMSB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY5NWI1YjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwxMSB7XG4gIG1hcmdpbi10b3A6IC00JTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2OTViNWI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmV4dGNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLypGaXJzdCBzdGVwcGVyIHN0YWdlMSovXG4vKlNlY29uZCBzdGVwcGVyIHN0YWdlMiovXG4uc2Vjb25kLnN0ZXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTBweDtcbiAgLyotNXB4Ki9cbn1cblxudGQgdGJvZHkge1xuICB3aWR0aDogMTIwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2Vjb25kLnN0ZXBwZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0zMHB4O1xuICBib3JkZXI6IDUwcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWNvbmQuc3RlcHBlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3JkZXI6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5zdGcydGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi8qU2Vjb25kIHN0ZXBwZXIgc3RhZ2UyKi9cbi8qVGhpcmQgc3RlcHBlciBzdGFnZTMqL1xuLnRoaXJkLnN0ZXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4udGhpcmQuc3RlcHBlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogLTQxcHg7XG4gIC8qLTMwcHgqL1xuICBib3JkZXI6IDUwcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5zdGczdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jcmVhdGVidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGEwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDE3JTtcbn1cblxuLmNhbGVuZGFyIHtcbiAgd2lkdGg6IDIuNzVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubm9uYWN0dGl2ZSB7XG4gIGNvbG9yOiAjMDAwMGEwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNyZWF0ZXRlc3RsYWJlbCB7XG4gIG1hcmdpbjogMyUgMCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MjkyZWE7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogODMlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHggMCAwIDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3JkZXJyYWRub25lIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRlc3Rmb3JtIHtcbiAgbWFyZ2luOiAzJSAwIDAgMyU7XG59XG5cbi5hcHBsZm9ybSB7XG4gIG1hcmdpbjogOCUgMCAwIDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udXBsb2Fkc3RvcmVidXQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDE3JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBhMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC8qIG1hcmdpbi1yaWdodDogMDsgKi9cbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZWZyZXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBhMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDAgMCA0JTtcbiAgLy8gd2lkdGg6IDI1JTtiYWxhamlcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmNvbXB1dGUge1xuICBtYXJnaW46IDI3cHggMCA1JSA1JTtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBhMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ29iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBhMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMwJTtcbn1cbi50ZXN0YXBwc2VsIHtcbiAgY29sb3I6ICMwMDAwYTA7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qV2l6YXJkMS1zdGVwcGVyIDQsNSw2IG5hdmJhciAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BcmNoIHdpemFyZCBjdXN0b20tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qQnV0dG9uIEdyb3VwcyovXG4uc3Rwb25lbnh0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDYxcHg7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4ucmVzZXQge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4uc3RhdGUtc3RyLWZpbHRlciB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5zYXZlY29udGludWUge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogNjFweDtcbn1cblxuLnN0cG9uZWJjayB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogNjNweCAzcHg7XG4gIGJvdHRvbTogNjFweDtcbiAgbGVmdDogODNweDtcbn1cblxuLkZvb3RlcmJ0bmdycCB7XG4gIG1hcmdpbjogMnZ3IDBweDtcbn1cblxuLnN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM4NmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi51cGxkLXNlbGVjdHN0ci1sYWJlbCB7XG4gIGxlZnQ6IDIxNXB4O1xuICB0b3A6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uYnV0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM4NmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypCdXR0b24gR3JvdXBzKi9cbi8qVGVzdCBQbGFubmluZyovXG4udGVzdG5hbWVpbnB0IHtcbiAgd2lkdGg6IDM1NHB4O1xufVxuXG4jdGVzdG5hbWUuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGVzdF9uYW1lX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmlkZW50aWZ5LWNvbnRyb2wtc3RvcmVidG4ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB3aWR0aDogMzI4cHg7XG59XG5cbi8qVGVzdCBQbGFubmluZyovXG4vKk1hdGVyaWFsKi9cbiNkYXNoYm9hcmRDb250ZW50IC5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU5MWZiICFpbXBvcnRhbnQ7XG4gIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMyZTkxZmIgIWltcG9ydGFudDtcbiAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmU5MWZiICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqL1xufVxuXG50YWJsZS5tYXQtdGFibGUge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk4JTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNtYXRUYWJsZUNlbGxTdGF0dXN7XG4gIGNvbG9yOiAjZDNhZTVlO1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlZWQ3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZCAhaW1wb3J0YW50O1xufVxuXG50ZC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRjICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1oZWFkZXItbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiN0ZXN0U3RvcmVUYWJsZUlkIC50YWJsZS1oZWFkZXItbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBhZC1sZWZ0e1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnN1Yi10ZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lci1uby1zaWRlLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hfZmlsdGVyIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi8qTWF0ZXJpYWwqL1xuLypGaWxlIFVwbG9hZCovXG4uZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MWU0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmlsZVVwbG9hZCBpbnB1dC51cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0biB7XG4gIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuI3VwbG9hZHRlc3QuaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDI3M3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiN1cGxvYWR0ZXN0YW5kY250cmwuaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDI3M3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5wZW5jaWwge1xuICB3aWR0aDogMTNweDtcbn1cblxuLmJpbiB7XG4gIHdpZHRoOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBlbmljb24ge1xuICBtYXJnaW46IDAgMCAwIC0yNXB4O1xufVxuXG4udGVzdHBsYW5mb3JtIHtcbiAgY29sb3I6ICMwMDAwYTA7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcmV0ZXN0Ym9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgcGFkZGluZzogMTNweCA1JSAwIDUlO1xufVxuXG4uZGVsZXRlaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMCAwIC0xMHB4O1xufVxuLypGaWxlIFVwbG9hZCovXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIC5maWx0ZXItc2VsZWNzdHIge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cblxuICAuc3JjaGJveCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBGb250QXdlc29tZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHdpZHRoOiAyMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5maWx0ZXItc2VsZWNzdHIge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuXG4gIC5zcmNoYm94IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEZvbnRBd2Vzb21lO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDIyMnB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5maWx0ZXItc2VsZWNzdHIge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuXG4gIC5zcmNoYm94IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEZvbnRBd2Vzb21lO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDE1NXB4O1xuICB9XG4gIC50ZXN0bmFtZWlucHQge1xuICAgIHdpZHRoOiAyODBweDtcbiAgfVxuICAuaWRlbnRpZnktY29udHJvbC1zdG9yZWJ0biB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIHdpZHRoOiAyODVweDtcbiAgfVxufVxuLmZpeGVkLWNvbnRhaW5lci10ZXN0LXN0b3JlIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uaW5wdC1wZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5icmllZi1kZXNjIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW4tdG9wOiAxNyU7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGEwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3NpdG9uc3RyZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1JTtcbn1cblxuLnBvc3VwbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAyMCU7XG59XG5cbi5wb2R3bmxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTUlO1xufVxuXG4ubm90ZXN0bGFiZWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG59XG5cbiNjdXN0b21lcnMge1xuICAvLyBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbiNjdXN0b21lcnMgdGQsXG4jY3VzdG9tZXJzIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuI2N1c3RvbWVycyB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbiNjdXN0b21lcnMgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwYTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1jb2x1bW4tQWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XG4gIC5jb250YWluZXIsIC5jb250YWluZXItc20sIC5jb250YWluZXItbWQsIC5jb250YWluZXItbGcsIC5jb250YWluZXIteGwge1xuICAgIG1heC13aWR0aDogMTMwMHB4O1xuICB9XG59XG5cbi5tYXJnaW5fY2hhbmdle1xuICBtYXJnaW4tcmlnaHQ6IDY5cHg7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYiAhaW1wb3J0YW50O1xufVxuXG4udGVzdEFwcGxpY2FibGUxIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuLnRlc3RBcHBsaWNhYmxlMiB7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52NjNfMzc0MSB7XG4gIHdpZHRoOiAxMDg0cHg7XG4gIGhlaWdodDogOTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLDI0MywyNDYsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjYzXzM3NDMge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNzY4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLDIzNSwyMzksMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzc0NCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY3cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92NjNfMzc0NC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzc5NSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM3OTUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjFweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zNzk2IHtcbiAgd2lkdGg6IDEyMXB4O1xuICBjb2xvcjogcmdiYSgyMDEsMjA0LDIxMywxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogMjlweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBSZWd1bGFyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi52NjNfMzc5OSB7XG4gIHdpZHRoOiAxMDdweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM3OTkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTU2cHg7XG4gIGxlZnQ6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzM4MDAge1xuICB3aWR0aDogNzVweDtcbiAgY29sb3I6IHJnYmEoOTIsMTAzLDEyNSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogMzJweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi52NjNfMzgwNSB7XG4gIHdpZHRoOiA5OHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92NjNfMzgwNS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NjRweDtcbiAgbGVmdDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgwNiB7XG4gIHdpZHRoOiA2NnB4O1xuICBjb2xvcjogcmdiYSg5MiwxMDMsMTI1LDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiAzMnB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnY2M18zODA4IHtcbiAgd2lkdGg6IDc0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zODA4LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcxMnB4O1xuICBsZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zODA5IHtcbiAgd2lkdGg6IDQycHg7XG4gIGNvbG9yOiByZ2JhKDkyLDEwMywxMjUsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDMycHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjYzXzM4MTEge1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM4MTEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgxMiB7XG4gIHdpZHRoOiA5MnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LDE5NiwxOTYsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgxMyB7XG4gIHdpZHRoOiA5MnB4O1xuICBoZWlnaHQ6IDkycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdjYzXzM4MTMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI4cHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnY2M18zODE2IHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zODE2LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIxcHg7XG4gIGxlZnQ6IDEzOTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgxNyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE4LDIyMiwyMzAsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi52NjNfMzgxOSB7XG4gIHdpZHRoOiAxMTNweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NnB4O1xuICBsZWZ0OiAxMTI1cHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODIwIHtcbiAgd2lkdGg6IDEwOXB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogOTAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODIxIHtcbiAgd2lkdGg6IDY2MXB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92NjNfMzgyMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICBsZWZ0OiAyMzRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgyMiB7XG4gIC8vIHdpZHRoOiA1ODJweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzM4MjMge1xuICB3aWR0aDogOTRweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM4MjMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjNweDtcbiAgbGVmdDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzM4MjQge1xuICB3aWR0aDogOTRweDtcbiAgY29sb3I6IHJnYmEoMTM2LDEzOCwxNTYsMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udjYzXzM4MjUge1xuICB3aWR0aDogMzNweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODI2IHtcbiAgd2lkdGg6IDgxcHg7XG4gIGhlaWdodDogNTFweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zODI2LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIzcHg7XG4gIGxlZnQ6IDI4NnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zODI3IHtcbiAgd2lkdGg6IDgxcHg7XG4gIGNvbG9yOiByZ2JhKDEzNiwxMzgsMTU2LDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODI4IHtcbiAgd2lkdGg6IDhweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODI5IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNTFweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zODI5LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIzcHg7XG4gIGxlZnQ6IDQ2MXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zODMwIHtcbiAgd2lkdGg6IDc2cHg7XG4gIGNvbG9yOiByZ2JhKDEzNiwxMzgsMTU2LDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnY2M18zODMxIHtcbiAgd2lkdGg6IDhweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODMyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM4MzIucG5nXCIpO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjZweDtcbiAgbGVmdDogMjM0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMzLDIzNSwyMzksMSk7XG59XG4udjYzXzM4MzMge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92NjNfMzgzMy5wbmdcIik7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNnB4O1xuICBsZWZ0OiA0MTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzMsMjM1LDIzOSwxKTtcbn1cbi52NjNfMzgzNCB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM4MzQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zODM1IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgzNiB7XG4gIHdpZHRoOiAxMTBweDtcbiAgY29sb3I6IHJnYmEoMTM2LDEzOCwxNTYsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xuICBsZWZ0OiA5OXB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDlweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi52NjNfMzgzNyB7XG4gIHdpZHRoOiA4cHg7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDFweDtcbiAgbGVmdDogOTdweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBCb2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udjYzXzM4Mzgge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM4MzgucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjNweDtcbiAgbGVmdDogMjNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgzOSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLDI0MywyNDYsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjYzXzM4NDUge1xuICB3aWR0aDogMTA3cHg7XG4gIGNvbG9yOiByZ2JhKDU2LDYwLDgxLDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDMycHg7XG4gIGxlZnQ6IDkwMHB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udjYzXzM4NDYge1xuICB3aWR0aDogMTQwcHg7XG4gIC8vIGNvbG9yOiB1cmwoXCIuLi9pbWFnZXMvdjYzXzM4NDYucG5nXCIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDYzcHg7XG4gIGxlZnQ6IDkwMHB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi52NjNfMzg0NyB7XG4gIHdpZHRoOiAxM3B4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwM3B4O1xuICBsZWZ0OiAxMTI1cHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODQ4IHtcbiAgd2lkdGg6IDE0MHB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU3OXB4O1xuICBsZWZ0OiA5MDBweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODQ5IHtcbiAgd2lkdGg6IDE0MHB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYyN3B4O1xuICBsZWZ0OiA5MDBweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODUwIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY3NXB4O1xuICBsZWZ0OiA5MDBweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODUxIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcxOXB4O1xuICBsZWZ0OiA5MDBweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjg1XzQ1NyB7XG4gIHdpZHRoOiAxODFweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjg1XzQ1Ny5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzg1NyB7XG4gIHdpZHRoOiAxODFweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU2LDYwLDgxLDEpO1xuICBwYWRkaW5nOiA2cHggNnB4O1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zODU4IHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogMjRweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zODU4LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zODU5IHtcbiAgd2lkdGg6IDY0cHg7XG4gIGNvbG9yOiByZ2JhKDI0MiwyNDMsMjQ2LDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiAzMnB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnY4NV80NTMge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTYsNjAsODEsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDE3NXB4O1xufVxuLnY4NV80NTYge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTYsNjAsODEsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNnB4O1xuICBsZWZ0OiAxNzRweDtcbn1cbi52NjNfMzg2MSB7XG4gIHdpZHRoOiA4NzVweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIC8vIGxlZnQ6IDIzNHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzg2MiB7XG4gIHdpZHRoOiAxMzVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgbGVmdDogMTlweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBCb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udjYzXzM4NjMge1xuICB3aWR0aDogMTU3cHg7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgbGVmdDogMTYxcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY2M18zODY0IHtcbiAgLy8gd2lkdGg6IDI1NXB4O1xuICAvLyAgIGhlaWdodDogYXV0bztcbiAgLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gICBwYWRkaW5nOiA4cHggOHB4O1xuICAvLyAgIG1hcmdpbjogMTBweDtcbiAgLy8gICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODNweDtcbiAgbGVmdDogOTM3cHg7XG4gIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY2M18zOTc5IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zOTc5LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1NXB4O1xuICBsZWZ0OiAyNTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzk4MCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92NjNfMzk4MC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzk4MSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLDI0MywyNDYsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi52NjNfMzk4MyB7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAyMzlweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y2M18zOTgzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogOTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzM5ODQge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0xNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzk4NSB7XG4gIHdpZHRoOiAxNjJweDtcbiAgY29sb3I6IHJnYmEoMTM2LDEzOCwxNTYsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5N3B4O1xuICBsZWZ0OiAxMXB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi52NjNfNDExNiB7XG4gIHdpZHRoOiA5NHB4O1xuICBoZWlnaHQ6IDk0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdjYzXzQxMTYucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzQxMTAge1xuICB3aWR0aDogMTcycHg7XG4gIGhlaWdodDogMzVweDtcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgwLDAsMCwxKTtcbiAgcGFkZGluZzogNnB4IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0M3B4O1xuICBsZWZ0OiA4OThweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzQxMTEge1xuICB3aWR0aDogOTJweDtcbiAgY29sb3I6IHJnYmEoMjQyLDI0MywyNDYsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDhweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi52ODVfODAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAvL3BhZGRpbmc6IDhweCA4cHg7XG4gIC8vbWFyZ2luOiAxMHB4O1xuICAvL29wYWNpdHk6IDE7XG4gIC8vdG9wOiAxNTVweDtcbiAgbGVmdDogMHB4O1xuICAvL2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgLy9ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAvL2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgLy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAvL292ZXJmbG93OiBoaWRkZW47XG59XG4udjg1XzgxIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBjb2xvcjogIzM4M2M1MTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG4gIGxlZnQ6IDZweDtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi52ODVfODIge1xuICB3aWR0aDogMzY4cHg7XG4gIGNvbG9yOiByZ2JhKDU2LDYwLDgxLDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDRweDtcbiAgbGVmdDogMjVweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udjg1XzgzIHtcbiAgd2lkdGg6IDQ2NXB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM3NHB4O1xuICBsZWZ0OiAyNXB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi52ODVfODQge1xuICB3aWR0aDogNTAzcHg7XG4gIGhlaWdodDogMjgzcHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92ODVfODQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzhweDtcbiAgbGVmdDogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52ODVfODUge1xuICB3aWR0aDogNTAzcHg7XG4gIGhlaWdodDogMjgzcHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92ODVfODUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjg1Xzg2IHtcbiAgd2lkdGg6IDUwM3B4O1xuICBoZWlnaHQ6IDI4M3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwxOTYsMTk2LDEpO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjg1Xzg3IHtcbiAgd2lkdGg6IDUwOXB4O1xuICBoZWlnaHQ6IDM4MnB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjg1Xzg3LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52ODVfODgge1xuICB3aWR0aDogNTAzcHg7XG4gIGhlaWdodDogMjgzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTYsNjAsODEsMSk7XG4gIG9wYWNpdHk6IDAuMjAwMDAwMDAyOTgwMjMyMjQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjg1XzE1NyB7XG4gIHdpZHRoOiAyOTZweDtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y4NV8xNTcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjM5cHg7XG4gIGxlZnQ6IDc5N3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY4NV8xNTgge1xuICB3aWR0aDogMjk2cHg7XG4gIGhlaWdodDogNDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52ODVfMTU5IHtcbiAgd2lkdGg6IDI2M3B4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92ODVfMTU5LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwM3B4O1xuICBsZWZ0OiAxN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY4NV8xNjAge1xuICB3aWR0aDogMjYzcHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsMjQzLDI0NiwxKTtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52ODVfMTYxIHtcbiAgd2lkdGg6IDEzNHB4O1xuICBjb2xvcjogcmdiYSg1Niw2MCw4MSwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIGxlZnQ6IDE0cHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjg1XzE2MyB7XG4gIHdpZHRoOiAyNjNweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjg1XzE2My5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNzVweDtcbiAgbGVmdDogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52ODVfMTY0IHtcbiAgd2lkdGg6IDI2M3B4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLDI0MywyNDYsMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjg1XzE2NSB7XG4gIHdpZHRoOiAxMzRweDtcbiAgY29sb3I6IHJnYmEoNTYsNjAsODEsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICBsZWZ0OiAxNHB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnY4NV8xNjcge1xuICB3aWR0aDogMjYzcHg7XG4gIGhlaWdodDogNjRweDtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL3Y4NV8xNjcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzQ3cHg7XG4gIGxlZnQ6IDE3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjg1XzE2OCB7XG4gIHdpZHRoOiAyNjNweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwyNDMsMjQ2LDEpO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY4NV8xNjkge1xuICB3aWR0aDogMTM0cHg7XG4gIGNvbG9yOiByZ2JhKDU2LDYwLDgxLDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgbGVmdDogMTRweDtcbiAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi52ODVfMTcxIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogcmdiYSgxMzYsMTM4LDE1NiwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3NHB4O1xuICBsZWZ0OiAxN3B4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udjg1XzE3NSB7XG4gIHdpZHRoOiA3OXB4O1xuICBoZWlnaHQ6IDc5cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92ODVfMTc1LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQzcHg7XG4gIGxlZnQ6IDEwOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnY4NV8xNzYge1xuICB3aWR0aDogMTM3cHg7XG4gIGNvbG9yOiByZ2JhKDU2LDYwLDgxLDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMwcHg7XG4gIGxlZnQ6IDgwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udjg1XzE5MCB7XG4gIHdpZHRoOiA2N3B4O1xuICBjb2xvcjogcmdiYSgwLDAsMCwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDE4M3B4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udjg1XzE3NyB7XG4gIHdpZHRoOiA1N3B4O1xuICBjb2xvcjogcmdiYSgwLDAsMCwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnY4NV8yMDUge1xuICB3aWR0aDogOThweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvdjg1XzIwNS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDRweDtcbiAgbGVmdDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52NjNfMzgwMiB7XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy92NjNfMzgwMi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDMycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udjYzXzM4MDMge1xuICB3aWR0aDogNjZweDtcbiAgY29sb3I6IHJnYmEoOTIsMTAzLDEyNSwxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5tb2RhbHRzbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gIHBhZGRpbmctdG9wOiAyMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGVudC10c2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaS5kaXNhYmxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b25fZGVhY3RpdmF0ZXtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmJ1dHRvbl9hY3RpdmF0ZXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Vyc29yX2RlYWN0aXZhdGV7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY3Vyc29yX2FjdGl2YXRle1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59ICovXG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5ub19yZWNfZm91bmR7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheV9jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5ne1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XG4gICNnZXR0aW5nX3N0YXJ0IC5jdXN0b20td2lkdGgge1xuICAgIG1heC13aWR0aDogMjQlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiNkYXNoYm9hcmRfY29udGVudCAubWF0LWNhcmR7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfcmVndWxhciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4jdGVzdF9zdGF0dXN7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfcmVndWxhciAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2luZyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG46Om5nLWRlZXAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lIWltcG9ydGFudDtcblxufVxuXG4udGFibGVfdG9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tYmctY29sb3J7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZmY7XG59XG5cbi5pY29uLXNoYXBlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NhcmRDaGFuZ2VzLnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5yb3dDaGFuZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5jYXJkLXN0YXRzIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbn1cblxuLnJlbW92ZV9ib3JkZXJ7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbiFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZXtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmJ1dHRvbi1jb2xvcntcbiAgY29sb3I6ICMxMDEwOTg7XG59XG4uYnV0dG9uLWNvbG9yLWVuYWJsZWQtYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA5MTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5ib3JkZXJfYm90dG9te1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXI7XG59XG5cbi8vICNnZXRTdGFydGVke1xuLy8gIC8vIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG46Om5nLWRlZXAubWF0LW1lbnUtY29udGVudHtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXI7XG59XG5cbi5kaXNwbGF5X2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XG4gICNnZXR0aW5nX3N0YXJ0IC5jdXN0b20td2lkdGgge1xuICAgIG1heC13aWR0aDogMjQlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiNkYXNoYm9hcmRfY29udGVudCAubWF0LWNhcmR7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5zcGFjaW5nIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbjo6bmctZGVlcCB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmUhaW1wb3J0YW50O1xuXG59XG5cbi50YWJsZV90b3B7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbi1iZy1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTk2Njk7XG59XG5cbi5pY29uLXNoYXBlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24tc2hhcGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5iZy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjM0MCAhaW1wb3J0YW50O1xufVxuXG4uYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmM2QwO1xufVxuXG4uYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGZkZjtcbn1cblxuLmljb24tYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmZmO1xufVxuXG4uaWNvbi1iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xufVxuXG4jY2FyZENoYW5nZXMucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYgIWltcG9ydGFudDtcbn1cblxuLnJvd0NoYW5nZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLmNhcmQtc3RhdHMgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xufVxuXG4uZ2V0dGluZ19zdGFydHtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OjEuM3JlbTtcbn1cblxuLmFkbWluX2Rhc2hfdGV4dHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjojNjY3NjhmO1xufVxuXG4udGVzdF9pbXBhY3R7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZCAhaW1wb3J0YW50O1xufVxuXG4jZ2V0dGluZ19zdGFydCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcbiAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG59XG4jZ2V0dGluZ19zdGFydCAuZHJvcGRvd24taXRlbTpmb2N1cywgLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWY4ZjIhaW1wb3J0YW50O1xufVxuIl19 */"] });
    return DashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_apicall_service__WEBPACK_IMPORTED_MODULE_12__["ApicallService"] }, { type: _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_11__["TestConfigService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }, { type: _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_9__["SidenavService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_10__["GlobalEventsService"] }]; }, { deleteDlg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['deleteDialog']
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();
/*Sort functions*/
function compare_loadsaved_storesummary(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function sort_by_date(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function sort_range_date(a, b, isAsc) {
    var aSplit = [];
    var bSplit = [];
    aSplit = a.split('-');
    bSplit = b.split('-');
    var aStart = new Date(aSplit[0]);
    var bStart = new Date(bSplit[0]);
    var aEnd = new Date(aSplit[1]);
    var bEnd = new Date(bSplit[1]);
    console.log(aEnd, bEnd, 'DateFormat');
    return (aStart < bStart ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "ey9i");
/* harmony import */ var _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/material.module */ "5dmV");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared */ "M0ag");













var route = [
    {
        path: '', component: _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]],
        data: { title: 'DEMO' }
    },
];
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    minScrollbarLength: 20,
    suppressScrollX: false
};
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
                _app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_9__["MomentModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_9__["MomentModule"],
        _app_shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
                    _app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
                    ngx_moment__WEBPACK_IMPORTED_MODULE_9__["MomentModule"],
                    _app_shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map
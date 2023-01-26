(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-test-create-test-module"],{

/***/ "/fOC":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/controlstore.service.ts ***!
  \*********************************************************/
/*! exports provided: ControlStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStoreService", function() { return ControlStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var ControlStoreService = /** @class */ (function () {
    function ControlStoreService(httpClient) {
        this.httpClient = httpClient;
        this.$record_list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$selected_list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ControlStoreService.prototype.LoadSavedTest = function (data) {
        return this.httpClient
            .post('GetAllSavedData', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.GetWeeks = function (data) {
        return this.httpClient.post('Get_weeks', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.SaveStageTwo = function (data, stringified_data) {
        return this.httpClient
            .post('Update_storedata', {
            data: data,
            stringified_data: stringified_data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.GetSelectedStores = function (id) {
        var _this = this;
        console.log(this.$selected_list, 'calling the selectedList');
        if (this.$selected_list.value !== null) {
            return this.getSavedselected();
        }
        else {
            console.log('calling the selectedList else');
            return this.httpClient.get('api/get_currenttest/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    _this.setSavedselected(body);
                    return body;
                }
                else {
                    return {};
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
        }
    };
    ControlStoreService.prototype.GetControlSummary = function (data) {
        return this.httpClient
            .post('api/controlstore_summary', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.GetStores_list = function (data) {
        return this.httpClient
            .post('api/getSelectedStores', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.Recompute = function (data) {
        return this.httpClient
            .post('api/recompute_controlstore', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.Recompute_Aus = function (data) {
        return this.httpClient
            .post('api/recompute_controlstore_aus', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.Identifyctrlstore = function (data) {
        return this.httpClient
            .post('api/identify_ctrlstore', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.Identifyctrlstore_Aus = function (data) {
        return this.httpClient
            .post('api/identify_ctrlstore_aus', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.controlMatchDataSave = function (data) {
        return this.httpClient
            .post('api/update_stage', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.getTestStoreMatchControlData = function (id) {
        var _this = this;
        console.log(this.$record_list, 'calling the recordlist');
        if (this.$record_list.value !== null) {
            return this.getSavedRecords();
        }
        else {
            console.log('calling the recordlist else');
            return this.httpClient.get('api/record-list/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    _this.setSavedrecords(body);
                    return body;
                }
                else {
                    return {};
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
        }
    };
    ControlStoreService.prototype.getSavedRecords = function () {
        return this.$record_list;
    };
    ControlStoreService.prototype.setSavedrecords = function (data) {
        console.log(data, 'datavalue');
        this.$record_list.next(data);
    };
    ControlStoreService.prototype.getSavedselected = function () {
        return this.$selected_list;
    };
    ControlStoreService.prototype.setSavedselected = function (data) {
        this.$selected_list.next(data);
    };
    ControlStoreService.prototype.getcontrolStoreData = function (id) {
        var _this = this;
        if (this.$record_list.value === null) {
            this.httpClient.get('api/record-list/' + id).subscribe(function (data) {
                _this.setSavedrecords(data);
            });
        }
        if (this.$selected_list.value === null) {
            this.httpClient.get('api/get_currenttest/' + id).subscribe(function (data) {
                _this.setSavedselected(data);
            });
        }
    };
    ControlStoreService.prototype.GetControlSummaryCorrelation = function (data) {
        return this.httpClient
            .post('api/control_summary_correlation', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.uploadControlStore = function (data) {
        return this.httpClient
            .post('api/upload_select_controlstore', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.downladControlStoreTemplate = function (data) {
        var httpOptions = {
            responseType: 'blob'
        };
        return this.httpClient
            .post('api/download_control_store_template', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.prototype.uploadControlStorePool = function (data) {
        return this.httpClient
            .post('api/upload_control_store_pool', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    ControlStoreService.ɵfac = function ControlStoreService_Factory(t) { return new (t || ControlStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ControlStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ControlStoreService, factory: ControlStoreService.ɵfac, providedIn: 'root' });
    return ControlStoreService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "IV7L":
/*!******************************************************!*\
  !*** ./src/app/create-test/create-test.component.ts ***!
  \******************************************************/
/*! exports provided: CreateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function() { return CreateTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/testmeasure.service */ "Q4YV");
/* harmony import */ var _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/testconfig.service */ "LBDO");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/component/footer/footer.component */ "Nj0y");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _app_create_test_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/create-test/test-details/test-details.component */ "L29/");
/* harmony import */ var _app_create_test_applicability_criteria_applicability_criteria_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/create-test/applicability-criteria/applicability-criteria.component */ "OqD5");
/* harmony import */ var _app_create_test_select_test_stores_select_test_stores_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/create-test/select-test-stores/select-test-stores.component */ "u+jE");
/* harmony import */ var _app_create_test_control_store_mapping_control_store_mapping_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/create-test/control-store-mapping/control-store-mapping.component */ "o2Vx");
























var _c0 = ["stepper"];
var _c1 = ["footer"];
function CreateTestComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
} }
function CreateTestComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter test details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n              ");
} }
function CreateTestComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Applicability criteria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n              ");
} }
function CreateTestComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select test stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n              ");
} }
function CreateTestComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Control store mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n              ");
} }
var _c2 = function (a0, a1) { return { "active_div": a0, "inactive_div": a1 }; };
var _c3 = function (a0, a1) { return { "active_span control_span_active": a0, "control_span_inactive": a1 }; };
function CreateTestComponent_mat_card_38_mat_card_content_2_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTestComponent_mat_card_38_mat_card_content_2_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.changeControlState("Comprassion_summary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comparison\n              Summary\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r16.generate_store === "Comprassion_summary", ctx_r16.generate_store !== "Comprassion_summary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, ctx_r16.generate_store === "Comprassion_summary", ctx_r16.generate_store !== "Comprassion_summary"));
} }
function CreateTestComponent_mat_card_38_mat_card_content_2_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTestComponent_mat_card_38_mat_card_content_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.changeControlState("Control_Store"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Generate\n              control Stores\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateTestComponent_mat_card_38_mat_card_content_2_div_7_Template, 4, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx_r14.generate_store === "Control_Store", ctx_r14.generate_store !== "Control_Store"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c3, ctx_r14.generate_store === "Control_Store", ctx_r14.generate_store !== "Control_Store"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.hideCompraison);
} }
function CreateTestComponent_mat_card_38_mat_card_content_4_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTestComponent_mat_card_38_mat_card_content_4_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.changeTestStores("Test_storePopulation", true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test\n              Store correlation\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTestComponent_mat_card_38_mat_card_content_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.changeTestStores("testStore_Comprassion_summary", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Comparison\n              Summary\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r15.generate_Selectstore === "Test_storePopulation", ctx_r15.generate_Selectstore !== "Test_storePopulation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx_r15.generate_Selectstore === "Test_storePopulation", ctx_r15.generate_Selectstore !== "Test_storePopulation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, ctx_r15.generate_Selectstore === "testStore_Comprassion_summary", ctx_r15.generate_Selectstore !== "testStore_Comprassion_summary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c3, ctx_r15.generate_Selectstore === "testStore_Comprassion_summary", ctx_r15.generate_Selectstore !== "testStore_Comprassion_summary"));
} }
function CreateTestComponent_mat_card_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateTestComponent_mat_card_38_mat_card_content_2_Template, 9, 9, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateTestComponent_mat_card_38_mat_card_content_4_Template, 12, 16, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.controlStore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.controlStore);
} }
function CreateTestComponent_li_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tip_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r24);
} }
function CreateTestComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-test-details", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveNextStep", function CreateTestComponent_ng_container_65_Template_app_test_details_moveNextStep_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.movenext($event); })("tipsData", function CreateTestComponent_ng_container_65_Template_app_test_details_tipsData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.tipsDataPassed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreateTestComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-applicability-criteria", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveNextStep", function CreateTestComponent_ng_container_67_Template_app_applicability_criteria_moveNextStep_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.movenext($event); })("tipsData", function CreateTestComponent_ng_container_67_Template_app_applicability_criteria_tipsData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.tipsDataPassed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreateTestComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-select-test-stores", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveNextStep", function CreateTestComponent_ng_container_69_Template_app_select_test_stores_moveNextStep_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.movenext($event); })("showComprassionView", function CreateTestComponent_ng_container_69_Template_app_select_test_stores_showComprassionView_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.showComprassionview($event); })("tipsData", function CreateTestComponent_ng_container_69_Template_app_select_test_stores_tipsData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.tipsDataPassed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testStore_population", ctx_r11.testStoreToggle);
} }
function CreateTestComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-control-store-mapping", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveNextStep", function CreateTestComponent_ng_container_71_Template_app_control_store_mapping_moveNextStep_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.movenext($event); })("tipsData", function CreateTestComponent_ng_container_71_Template_app_control_store_mapping_tipsData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.tipsDataPassed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var _c4 = function (a0) { return { display: a0 }; };
var CreateTestComponent = /** @class */ (function () {
    function CreateTestComponent(homeService, testMeasureService, commonService, globalService) {
        var _this = this;
        this.homeService = homeService;
        this.testMeasureService = testMeasureService;
        this.commonService = commonService;
        this.globalService = globalService;
        this.isLinear = false;
        this.loadComponent = 0;
        this.config = {};
        this.height = 207;
        this.previousStepSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.controlStoreSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.showStepper = true;
        this.generate_store = 'Control_Store';
        this.controlStore = false;
        this.generate_Selectstore = 'Test_storePopulation';
        this.testStoreToggle = true;
        this.hideCompraison = false;
        this.previousStepSubscrption = this.globalService.subscribe('MOVE_PREVIOUS', function (obj) {
            console.log('Previous subscription');
            if (obj.module === 'CREATE_TEST') {
                _this.moveControlStore();
            }
        });
        this.controlStoreSubscrption = this.globalService.subscribe('SHOW_CONTROL_STORES', function (obj) {
            if (obj.module === 'CREATE_TEST') {
                _this.showStepper = !_this.showStepper;
                _this.controlStore = true;
                var testType = sessionStorage.getItem('test-type');
                console.log(testType, 'testType');
                if (testType !== undefined && testType === 'RTM Impact Test') {
                    _this.hideCompraison = true;
                }
                else {
                    _this.hideCompraison = false;
                }
            }
        });
    }
    CreateTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentComponent = this.commonService.getCurrentComponentSubject();
        if (currentComponent === null) {
            this.commonService.setCurrentComponentSubject(this.loadComponent, this.data, 'other', 'NotfromEdit');
        }
        else if (currentComponent.edit === 'other') {
            this.commonService.setCurrentComponentSubject(null, null, 'other', 'NotfromEdit');
            window.location.reload();
        }
        setTimeout(function () {
            if (currentComponent != null && currentComponent.edit != 'other') {
                console.log(currentComponent.edit, 'currentComponent.edit');
                if (currentComponent !== null && !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(currentComponent.currentComponent) && currentComponent.currentComponent !== 0) {
                    console.log(currentComponent.data);
                    _this.onEditNav(currentComponent.currentComponent, currentComponent.data, currentComponent.edit);
                    if (currentComponent.currentComponent === 5 && currentComponent.edit === 'edit') {
                        _this.showStepper = false;
                        _this.controlStore = true;
                        var testType = sessionStorage.getItem('test-type');
                        console.log(testType, 'testType');
                        if (testType !== undefined && testType === 'RTM Impact Test') {
                            _this.hideCompraison = true;
                        }
                        else {
                            _this.hideCompraison = false;
                        }
                    }
                }
            }
        }, 100);
    };
    CreateTestComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize();
        });
    };
    CreateTestComponent.prototype.ngOnDestroy = function () {
        this.testMeasureService.setControlStoreMeasurementpost(null);
        this.homeService.setTestStorePopulationSummary(null);
        this.homeService.setTestStorePopulationCorrelation(null);
        this.commonService.setCurrentComponentSubject(null, null, null, null);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.previousStepSubscrption)) {
            this.previousStepSubscrption.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.controlStoreSubscrption)) {
            this.controlStoreSubscrption.unsubscribe();
        }
        console.log(this.previousStepSubscrption, 'this.previousStepSubscrption');
    };
    CreateTestComponent.prototype.tipsDataPassed = function (data) {
        console.log(data, 'data');
        this.tipsDataStr = data;
    };
    CreateTestComponent.prototype.movenext = function (event) {
        var currentComponent = this.commonService.getCurrentComponentSubject();
        console.log(event);
        console.log(currentComponent.edit);
        console.log(event);
        this.currentComponent = event.currentComponent;
        this.data = event.data;
        var stepIndex = event.data.stepindex;
        var testName = event.data.test_name;
        var movednext = 0;
        console.log(currentComponent.fromEdit);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.currentComponent)) {
            console.log(this.currentComponent);
            if (this.currentComponent === 0) {
                this.completed1 = true;
                this.state1 = 'done';
            }
            else if (this.currentComponent === 1) {
                this.completed1 = true;
                this.state1 = 'done';
                this.completed2 = true;
                this.state2 = 'done';
            }
            else if (this.currentComponent === 2) {
                this.completed1 = true;
                this.state1 = 'done';
                this.completed2 = true;
                this.state2 = 'done';
                this.completed3 = true;
                this.state3 = 'done';
            }
            if (currentComponent.fromEdit === 'NotfromEdit') {
                movednext = this.currentComponent + 1;
                this.stepper.selectedIndex = this.currentComponent + 1;
                this.commonService.setCurrentComponentSubject(movednext, this.data, 'other', 'NotfromEdit');
                this.loadComponent = movednext;
            }
            else if (this.data.stepindex === 2) {
                movednext = this.currentComponent + 1;
                this.stepper.selectedIndex = this.currentComponent + 1;
                this.commonService.setCurrentComponentSubject(movednext, this.data, 'other', 'NotfromEdit');
                this.loadComponent = movednext;
            }
            else {
                movednext = this.currentComponent;
                this.stepper.selectedIndex = this.currentComponent;
                this.commonService.setCurrentComponentSubject(movednext, this.data, 'other', 'NotfromEdit');
                this.loadComponent = movednext;
            }
            console.log(this.currentComponent);
            console.log(movednext);
        }
    };
    CreateTestComponent.prototype.previousStep = function () {
        var currentComponent;
        currentComponent = this.commonService.getCurrentComponentSubject();
        console.log(currentComponent, 'currentcomponent');
        // console.log(this.currentComponent);
        if (currentComponent.fromEdit === 'fromEdit') {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(currentComponent.currentComponent) && currentComponent.currentComponent !== 0) {
                this.stepper.selectedIndex = currentComponent.currentComponent - 2;
                this.loadComponent = currentComponent.currentComponent - 2;
                this.commonService.setCurrentComponentSubject(currentComponent.currentComponent - 2, currentComponent.data, 'other', 'NotfromEdit');
            }
        }
        else {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(currentComponent.currentComponent) && currentComponent.currentComponent !== 0) {
                this.stepper.selectedIndex = currentComponent.currentComponent - 1;
                this.loadComponent = currentComponent.currentComponent - 1;
                this.commonService.setCurrentComponentSubject(currentComponent.currentComponent - 1, currentComponent.data, 'other', 'NotfromEdit');
            }
        }
        if (currentComponent.currentComponent === 2) {
            this.completed3 = false;
            this.state3 = 'edit';
        }
        else if (currentComponent.currentComponent === 1) {
            this.completed2 = false;
            this.state2 = 'edit';
        }
    };
    CreateTestComponent.prototype.stepClick = function (event) {
        this.loadComponent = event.selectedIndex;
        this.commonService.setCurrentComponentSubject(this.loadComponent, this.data, 'other', 'NotfromEdit');
        console.log(event, 'index to next stepper');
    };
    CreateTestComponent.prototype.onResize = function () {
        this.height = window.innerHeight - (64 + this.footer.nativeElement.offsetHeight);
    };
    CreateTestComponent.prototype.changeControlState = function (event) {
        this.generate_store = event;
        this.globalService.publish('CONTROL_STORES_VIEW', {
            module: 'CREATE_TEST',
            view: this.generate_store
        });
    };
    CreateTestComponent.prototype.getdisplay = function () {
        if (this.showStepper) {
            return 'block';
        }
        else {
            return 'none';
        }
    };
    CreateTestComponent.prototype.moveControlStore = function () {
        console.log('1');
        if (!this.showStepper) {
            this.showStepper = true;
            if (!this.controlStore) {
                console.log(this.controlStore, 'controlstore');
                this.globalService.publish('HIDE_TEST_STORE_COMPRASSION', {
                    module: 'CREATE_TEST'
                });
                this.generate_Selectstore = 'Test_storePopulation';
            }
            else {
                this.globalService.publish('HIDE_CONTROL_STORES', {
                    module: 'CREATE_TEST',
                    enable: false
                });
            }
        }
        else {
            this.previousStep();
        }
    };
    CreateTestComponent.prototype.onEditNav = function (id, data, edit) {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(id) && id < 5) {
            var movednext = id - 1;
            console.log(movednext);
            this.stepper.selectedIndex = id - 1;
            if (edit === 'edit') {
                console.log(edit);
                this.commonService.setCurrentComponentSubject(id, data, 'other', 'fromEdit');
            }
            else {
                console.log(edit);
                this.commonService.setCurrentComponentSubject(null, null, 'other', 'fromEdit');
            }
            this.loadComponent = movednext;
            if (id === 2) {
                this.completed1 = true;
                this.state1 = 'done';
            }
            else if (id === 3) {
                this.completed1 = true;
                this.state1 = 'done';
                this.completed2 = true;
                this.state2 = 'done';
            }
            else if (id === 4) {
                this.completed1 = true;
                this.state1 = 'done';
                this.completed2 = true;
                this.state2 = 'done';
                this.completed3 = true;
                this.state3 = 'done';
            }
        }
        else {
            var movednext = id - 1;
            this.showStepper = false;
            this.loadComponent = movednext;
        }
    };
    CreateTestComponent.prototype.showComprassionview = function (event) {
        console.log(event, 'event changes');
        this.showStepper = !event;
        this.getdisplay();
    };
    CreateTestComponent.prototype.changeTestStores = function (event, toggle) {
        this.testStoreToggle = toggle;
        this.generate_Selectstore = event;
    };
    CreateTestComponent.ɵfac = function CreateTestComponent_Factory(t) { return new (t || CreateTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_7__["TestConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_6__["TestMeasureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_5__["GlobalEventsService"])); };
    CreateTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTestComponent, selectors: [["app-create-test"]], viewQuery: function CreateTestComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        } }, hostBindings: function CreateTestComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CreateTestComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 83, vars: 21, consts: [[2, "width", "100%", "overflow-x", "hidden"], ["id", "progressContent", 1, "route_container_top", "route_container_right"], ["progressContent", ""], [1, "row", 2, "overflow-x", "hidden"], [1, "col-md-3", "col-lg-3", "col-sm-12", "col-xl-3"], [3, "ngStyle"], [2, "font-family", "Mulish_regular !important", "pointer-events", "none", 3, "selectionChange"], ["stepper", ""], ["matStepperIcon", "edit", "id", "icon_edit", "style", "background-color: white"], [3, "completed", "state"], ["matStepLabel", ""], [4, "ngIf"], [1, "route_container_top"], [1, "testcard"], [1, "mat-card_content"], [1, "first_heading"], [1, "image_div"], ["src", "assets/images/tips.png", "alt", "sort", 1, "image_size"], ["id", "Create_test"], [4, "ngFor", "ngForOf"], [1, "col-md-9", "col-lg-9", "col-sm-12", "col-xl-9", "width_grid"], ["footer", ""], [3, "currentComponent", "data"], [2, "font-size", "12px", "color", "#1f242c"], [1, "control_summary", 3, "ngClass", "click"], [3, "ngClass"], ["class", "control_summary", 3, "ngClass", "click", 4, "ngIf"], [1, "second_p"], [3, "moveNextStep", "tipsData"], [3, "testStore_population", "moveNextStep", "showComprassionView", "tipsData"]], template: function CreateTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-vertical-stepper", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateTestComponent_Template_mat_vertical_stepper_selectionChange_11_listener($event) { return ctx.stepClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateTestComponent_ng_template_14_Template, 4, 0, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-step", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateTestComponent_ng_template_18_Template, 3, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-step", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateTestComponent_ng_template_23_Template, 3, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-step", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateTestComponent_ng_template_28_Template, 3, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-step", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateTestComponent_ng_template_33_Template, 3, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateTestComponent_mat_card_38_Template, 6, 2, "mat-card", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-content", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tips & Tricks");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CreateTestComponent_li_56_Template, 5, 1, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CreateTestComponent_ng_container_65_Template, 4, 0, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CreateTestComponent_ng_container_67_Template, 4, 0, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, CreateTestComponent_ng_container_69_Template, 4, 1, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CreateTestComponent_ng_container_71_Template, 4, 0, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", null, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-footer", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n\n\n\n\n\n\n\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, ctx.getdisplay()));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.completed1)("state", ctx.state1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.completed2)("state", ctx.state2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.completed3)("state", ctx.state3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.completed4)("state", ctx.state4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showStepper);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipsDataStr);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadComponent === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadComponent === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadComponent === 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadComponent === 3 || ctx.loadComponent === 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentComponent", ctx.loadComponent)("data", ctx.data);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultStyleDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStepLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _app_create_test_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_14__["TestDetailsComponent"], _app_create_test_applicability_criteria_applicability_criteria_component__WEBPACK_IMPORTED_MODULE_15__["ApplicabilityCriteriaComponent"], _app_create_test_select_test_stores_select_test_stores_component__WEBPACK_IMPORTED_MODULE_16__["SelectTestStoresComponent"], _app_create_test_control_store_mapping_control_store_mapping_component__WEBPACK_IMPORTED_MODULE_17__["ControlStoreMappingComponent"]], styles: [".name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  color: white;\n}\n  .mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #d40061 !important;\n  color: #fff !important;\n}\n@media (min-width: 1200px) {\n  .width_grid[_ngcontent-%COMP%] {\n    max-width: 74% !important;\n  }\n}\n  .mat-step-header .mat-step-icon-selected {\n  background-color: #d40061;\n}\n.width_grid[_ngcontent-%COMP%] {\n  padding-left: 0.5rem !important;\n}\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #cfd4de !important;\n}\n  .mat-radio-button.mat-accent .mat-radio-inner-circle, .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #000091 !important;\n}\n  .mat-radio-container {\n  width: 13px !important;\n  height: 16px !important;\n}\n  .mat-radio-outer-circle {\n  width: 15px !important;\n  height: 15px !important;\n}\n  .mat-radio-inner-circle {\n  width: 15px !important;\n  height: 15px !important;\n}\n  .mat-radio-label-content {\n  color: #1f242c;\n}\n  #progressContent .ps-content {\n  overflow: hidden !important;\n}\n  .mat-vertical-content {\n  padding: 0 !important;\n}\n  .mat-vertical-stepper-header {\n  height: 55px !important;\n}\n  .mat-stepper-vertical-line::before {\n  top: -12px !important;\n  bottom: -12px !important;\n}\n#icon_edit[_ngcontent-%COMP%]   .custom_color_change[_ngcontent-%COMP%] {\n  color: #d40061 !important;\n  background-color: #fff !important;\n}\n  .mat-step-icon-state-edit {\n  background-color: #ffff !important;\n  color: #d40061 !important;\n  border: 1px solid #d40061 !important;\n}\n  .mat-step-icon .mat-step-icon-state-number {\n  background-color: #fff !important;\n  color: #949fb3 !important;\n  border: 1px solid #949fb3 !important;\n}\n.control_summary[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n.control_span_active[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.control_span_inactive[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.active_span[_ngcontent-%COMP%] {\n  border: 2px solid #EC9B02;\n  border-radius: 6px;\n  color: black;\n}\n.active_div[_ngcontent-%COMP%] {\n  font-family: Mulish_bold;\n  font-size: 0.75rem;\n}\n.inactive_div[_ngcontent-%COMP%] {\n  font-family: Mulish_regular;\n  font-size: 0.75rem;\n  color: #66768F;\n}\n.first_heading[_ngcontent-%COMP%] {\n  font-family: Mulish_bold;\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n.image_div[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.image_size[_ngcontent-%COMP%] {\n  height: 7.25rem;\n  width: 7.25rem;\n}\n.second_p[_ngcontent-%COMP%] {\n  color: #66768F;\n  font-size: 0.688rem;\n  font-family: Mulish_regular;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  font-size: 150%;\n  color: #4C596B !important;\n}\nul[_ngcontent-%COMP%] {\n  -webkit-padding-start: 15px;\n          padding-inline-start: 15px;\n}\n  .mat-vertical-content {\n  padding: 0 !important;\n}\n  .mat-vertical-stepper-header {\n  height: 55px !important;\n}\n  .mat-stepper-vertical-line::before {\n  top: -12px !important;\n  bottom: -12px !important;\n}\n#icon_edit[_ngcontent-%COMP%]   .custom_color_change[_ngcontent-%COMP%] {\n  color: #d40061 !important;\n  background-color: #fff !important;\n}\n  .mat-step-icon-state-edit {\n  background-color: #ffff !important;\n  color: #d40061 !important;\n  border: 1px solid #d40061 !important;\n}\n  .mat-step-icon .mat-step-icon-state-number {\n  background-color: #fff !important;\n  color: #949fb3 !important;\n  border: 1px solid #949fb3 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRlc3QvY3JlYXRlLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQUE7QUFDQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0FBQUY7QUFHQTtFQUNFLCtCQUFBO0FBQUY7QUFJQTtFQUNFLGdDQUFBO0FBREY7QUFJQTtFQUNFLG9DQUFBO0FBREY7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBSUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFJQTtFQUNFLGNBQUE7QUFERjtBQUlBO0VBQ0UsMkJBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7QUFERjtBQUlBO0VBQ0UsdUJBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FBREY7QUFJQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQURGO0FBSUE7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFERjtBQUlBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBREY7QUFHQTtFQUNFLGlCQUFBO0FBQUY7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUY7QUFBQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJRjtBQUNBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsMkJBQUE7VUFBQSwwQkFBQTtBQUVGO0FBR0E7RUFDRSxxQkFBQTtBQUFGO0FBR0E7RUFDRSx1QkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUFBRjtBQUdBO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FBQUY7QUFHQTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXRlc3QvY3JlYXRlLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYXBwbGljYXRpb24gc3R5bGVzICYgaW1wb3J0cyB0byB0aGlzIGZpbGUhICovXG4ubmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MDA2MSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAud2lkdGhfZ3JpZHtcbiAgICBtYXgtd2lkdGg6IDc0JSFpbXBvcnRhbnRcbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MDA2MTtcbn1cblxuLndpZHRoX2dyaWR7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtIWltcG9ydGFudDtcbn1cblxuLy8gbWF0LXJhZGlvIGNoYW5nZXNcbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle1xuICBib3JkZXItY29sb3I6ICNjZmQ0ZGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA5MSFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEzcHghaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHghaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7XG4gIHdpZHRoOiAxNXB4IWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4IWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8taW5uZXItY2lyY2xle1xuICB3aWR0aDogMTVweCFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnR7XG4gIGNvbG9yOiAjMWYyNDJjXG59XG5cbjo6bmctZGVlcCAjcHJvZ3Jlc3NDb250ZW50IC5wcy1jb250ZW50e1xuICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtY29udGVudHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1zdGVwcGVyLWhlYWRlcntcbiAgaGVpZ2h0OiA1NXB4IWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7XG4gIHRvcDogLTEycHghaW1wb3J0YW50O1xuICBib3R0b206IC0xMnB4IWltcG9ydGFudDtcbn1cblxuI2ljb25fZWRpdCAuY3VzdG9tX2NvbG9yX2NoYW5nZXtcbiAgY29sb3I6ICNkNDAwNjEhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmIWltcG9ydGFudDtcbiAgY29sb3I6ICNkNDAwNjEhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDQwMDYxICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaWNvbiAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICBjb2xvcjogIzk0OWZiMyFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NDlmYjMhaW1wb3J0YW50O1xufVxuXG4uY29udHJvbF9zdW1tYXJ5e1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udHJvbF9zcGFuX2FjdGl2ZXtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uY29udHJvbF9zcGFuX2luYWN0aXZle1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYWN0aXZlX3NwYW57XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFQzlCMDI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmFjdGl2ZV9kaXYge1xuICBmb250LWZhbWlseTogTXVsaXNoX2JvbGQ7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5pbmFjdGl2ZV9kaXYge1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM2Njc2OEY7XG59XG5cbi8vICBUaXBzIGFuZCBUcmlja3NcblxuLmZpcnN0X2hlYWRpbmd7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltYWdlX2RpdntcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Vfc2l6ZXtcbiAgaGVpZ2h0OiA3LjI1cmVtO1xuICB3aWR0aDogNy4yNXJlbTtcbn1cblxuLnNlY29uZF9we1xuICBjb2xvcjogIzY2NzY4RjtcbiAgZm9udC1zaXplOiAwLjY4OHJlbTtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9yZWd1bGFyO1xufVxuXG51bCBsaTo6bWFya2VyIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBjb2xvcjogIzRDNTk2QiFpbXBvcnRhbnQ7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE1cHg7XG59XG5cbi8vIFRpcHMgYW5kIHRyaWNrcyBFbmQgQ3NzXG5cbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtc3RlcHBlci1oZWFkZXJ7XG4gIGhlaWdodDogNTVweCFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3Jle1xuICB0b3A6IC0xMnB4IWltcG9ydGFudDtcbiAgYm90dG9tOiAtMTJweCFpbXBvcnRhbnQ7XG59XG5cbiNpY29uX2VkaXQgLmN1c3RvbV9jb2xvcl9jaGFuZ2V7XG4gIGNvbG9yOiAjZDQwMDYxIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZiFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZDQwMDYxIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0MDA2MSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWljb24gLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcbiAgY29sb3I6ICM5NDlmYjMhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5ZmIzIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return CreateTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-test',
                templateUrl: './create-test.component.html',
                styleUrls: ['./create-test.component.scss'],
            }]
    }], function () { return [{ type: _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_7__["TestConfigService"] }, { type: _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_6__["TestMeasureService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_5__["GlobalEventsService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['footer']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "L29/":
/*!********************************************************************!*\
  !*** ./src/app/create-test/test-details/test-details.component.ts ***!
  \********************************************************************/
/*! exports provided: TestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailsComponent", function() { return TestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/testconfig.service */ "LBDO");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-select-ex */ "fktz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");



















var _c0 = ["testDetails"];
var _c1 = ["content"];
function TestDetailsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duplicate Test Name not Allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Test Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select Type Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select Target Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.preDays, " Weeks");
} }
function TestDetailsComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.preTestMessage);
} }
function TestDetailsComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.postDays, " Weeks");
} }
function TestDetailsComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.postTestMessage);
} }
var _c2 = function () { return { containerClass: "theme-default", rangeInputFormat: "DD MMM, YYYY" }; };
var TestDetailsComponent = /** @class */ (function () {
    function TestDetailsComponent(homeservice, toastr, globalService, commonService, cdr) {
        var _this = this;
        this.homeservice = homeservice;
        this.toastr = toastr;
        this.globalService = globalService;
        this.commonService = commonService;
        this.cdr = cdr;
        this.market = [];
        this.plantest = ['RSV', 'Volume'];
        this.typetest = ['Frequency Test', 'Duration Test', 'Activity Test', 'Others'];
        this.nextStepSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.testNameSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.getDateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.saveStageSubsription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.getDurationOfWeeksSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.testDetailsValue = {
            TestName: '',
            TypeTest: '',
            TargetVariable: '',
            Description: '',
            AddDetails: '',
            TestID: '',
        };
        this.testNameValid = false;
        this.typeTestValid = false;
        this.targetValid = false;
        this.posttestValid = false;
        this.pretestValid = false;
        this.duplicateTestName = false;
        this.positionOptions = [];
        this.saveDraft = false;
        this.preTestMessage = 'Pre-test weeks should be 4 - 30 weeks';
        this.postTestMessage = 'Pre-test weeks should be 4 - 30 weeks';
        this.tipsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveNextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
        this.nextStepSubscrption = this.globalService.subscribe('MOVE_NEXT_TEST_DETAILS', function (obj) {
            if (obj.module === 'CREATE_TEST' && obj.currentComponent === 0) {
                _this.saveDraft = obj.saveDraft;
                _this.getValidate();
            }
        });
        this.getDateRange();
    }
    TestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_name = localStorage.getItem('username');
        this.userRegion = sessionStorage.getItem('region');
        this.currentComponent = this.commonService.getCurrentComponentSubject().data;
        if (this.currentComponent !== undefined) {
            this.testDetailsValue.TestName = this.currentComponent.test_name;
            this.testDetailsValue.TypeTest = this.currentComponent.test_type;
            this.testDetailsValue.TargetVariable = this.currentComponent.target_variable;
            this.testDetailsValue.Description = this.currentComponent.desc;
            this.testDetailsValue.AddDetails = this.currentComponent.additional_det;
            this.testDetailsValue.TestID = this.currentComponent.test_id;
            this.testId = this.currentComponent.test_id;
            setTimeout(function () {
                _this.pretest = [new Date(_this.currentComponent.pretest_startdt), new Date(_this.currentComponent.pretest_enddt)];
            });
            setTimeout(function () {
                _this.posttest = [new Date(_this.currentComponent.testwin_startdt), new Date(_this.currentComponent.testwin_enddt)];
            });
        }
    };
    TestDetailsComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.nextStepSubscrption)) {
            this.nextStepSubscrption.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.testNameSubscrption)) {
            this.testNameSubscrption.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.getDateSubscription)) {
            this.getDateSubscription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.saveStageSubsription)) {
            this.saveStageSubsription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.getDurationOfWeeksSubscription)) {
            this.getDurationOfWeeksSubscription.unsubscribe();
        }
    };
    TestDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.currentComponent === undefined) {
            this.getValidate();
        }
        var tips = ['On average, a user takes 15 mins to design a test and launch it', 'Make sure that your test plan is communicated between your team', 'Your test stores should be communicated in advance before you run a test', 'The user can enter details on the type of test, the target variable to perform the test on, the pre-test window and the post-test window'];
        setTimeout(function () {
            _this.tipstoParent(tips);
        });
        this.cdr.detectChanges();
    };
    TestDetailsComponent.prototype.tipstoParent = function (data) {
        console.log(data, 'data');
        this.tipsData.emit(data);
    };
    TestDetailsComponent.prototype.checkTypeOfTest = function (event) {
        console.log(event[0].value, 'event');
        console.log(this.testDetailsValue.TypeTest, 'this.testDetailsValue.TypeTest');
        if (event[0].value === 'RTM Impact Test' || this.testDetailsValue.TypeTest === 'RTM Impact Test') {
            this.pretest = [];
            this.posttest = [];
            this.preDays = undefined;
            this.dateValid = false;
            this.pretestValid = false;
            this.postDays = undefined;
            this.posttestValid = false;
        }
    };
    TestDetailsComponent.prototype.checkTestName = function () {
        var _this = this;
        this.testDetailsValue.TypeTest = '';
        this.testDetailsValue.TargetVariable = '';
        this.testDetailsValue.Description = '';
        this.testDetailsValue.AddDetails = '';
        this.pretest = [];
        this.posttest = [];
        this.preDays = undefined;
        this.dateValid = false;
        this.pretestValid = false;
        this.postDays = undefined;
        this.posttestValid = false;
        var data = { testname: this.testDetailsValue.TestName.trim() };
        if (this.testDetailsValue.TestName.trim() !== '') {
            this.testNameSubscrption = this.homeservice.getTestName(data).subscribe(function (apiresponse) {
                if (apiresponse.status === 'ok') {
                    if (apiresponse.data.length > 0) {
                        _this.duplicateTestName = true;
                        _this.globalService.publish('ERROR_VALIDATION', {
                            valid: false,
                            message: 'Duplicate Test Name are not Allowed',
                            errorEnable: _this.duplicateTestName
                        });
                    }
                    else if (_this.duplicateTestName) {
                        _this.duplicateTestName = false;
                        _this.globalService.publish('ERROR_VALIDATION', {
                            valid: false,
                            message: 'Duplicate Test Name are not Allowed',
                            errorEnable: _this.duplicateTestName
                        });
                    }
                }
                else {
                    _this.duplicateTestName = false;
                }
            });
        }
        else {
            this.duplicateTestName = false;
        }
        if (this.testDetailsValue.TestName.trim() === '') {
            this.globalService.publish('ERROR_VALIDATION', {
                valid: false,
                message: 'Test Name Field is Required',
                errorEnable: true
            });
        }
        this.formChange();
    };
    TestDetailsComponent.prototype.formChange = function () {
        console.log(this.testDetails.valid, 'valid or not');
        if (this.testDetails.valid && !this.pretestValid && !this.posttestValid
            && this.pretest && this.posttest && !this.duplicateTestName) {
            this.globalService.publish('ERROR_VALIDATION', {
                valid: this.testDetails.valid
            });
        }
        else {
            this.globalService.publish('TEST_DETAILS_COMPONENT', {
                valid: false
            });
        }
    };
    TestDetailsComponent.prototype.getValidate = function () {
        if (this.testDetails.valid && !this.duplicateTestName) {
            var valid = true;
            var currentComponent = this.commonService.getCurrentComponentSubject().currentComponent;
            if (valid) {
                if (currentComponent !== null && this.testDetailsValue.TestName !== '') {
                    this.saveData(currentComponent);
                }
                else {
                    this.globalService.publish('ERROR_VALIDATION', {
                        valid: false,
                        errorEnable: false
                    });
                }
            }
        }
    };
    TestDetailsComponent.prototype.getDateRange = function () {
        var _this = this;
        this.getDateSubscription = this.commonService.Get_Date().subscribe(function (response) {
            if (response.status === 'ok') {
                _this.minPreTest = new Date();
                _this.maxPreTest = new Date();
                _this.minPreTest.setUTCFullYear(parseInt(response.data.startdate));
                _this.minPreTest.setUTCMonth(0);
                _this.minPreTest.setUTCDate(1);
                _this.maxPreTest.setUTCFullYear(parseInt(response.data.enddate));
                _this.maxPreTest.setUTCMonth(11);
                _this.maxPreTest.setUTCDate(31);
                _this.minPostTest = new Date();
                _this.minPostTest.setUTCFullYear(parseInt(response.data.startdate));
                _this.minPostTest.setUTCMonth(0);
                _this.minPostTest.setUTCDate(1);
            }
        });
    };
    TestDetailsComponent.prototype.onChange = function (event) {
    };
    TestDetailsComponent.prototype.pretestDate = function (event) {
        var _this = this;
        this.pretestFromDate = event[0].toJSON().split('T')[0];
        this.pretestToDate = event[1].toJSON().split('T')[0];
        this.posttest = null;
        this.postDays = undefined;
        this.dateValid = false;
        this.posttestValid = false;
        var start_year = event[0].getFullYear();
        var start_month = event[0].getMonth();
        var start_day = event[0].getDate();
        var end_year = event[1].getFullYear();
        var end_month = event[1].getMonth();
        var end_day = event[1].getDate();
        this.preDays = undefined;
        var reqData = {
            start_year: start_year,
            start_month: start_month + 1,
            start_day: start_day,
            end_year: end_year,
            end_month: end_month + 1,
            end_day: end_day
        };
        this.getDurationOfWeeksSubscription = this.homeservice.getDurationOfWeeks(reqData).subscribe(function (apiResponse) {
            if (apiResponse.status === 'ok') {
                _this.preDays = parseInt(apiResponse.data.interval);
                if (_this.preDays > 0) {
                    _this.dateValid = true;
                }
                else {
                    _this.dateValid = false;
                    _this.preDays = 0;
                }
                _this.pretestValid = false;
                if (_this.preDays < 4 || _this.preDays > 53) {
                    _this.pretestValid = true;
                    _this.preTestMessage = 'Pre-test weeks should be 4 - 53 weeks';
                }
                else {
                    _this.pretestValid = false;
                }
                _this.minPostTest = new Date(_this.pretestToDate);
                var date_1 = new Date(_this.incrementDate(_this.minPostTest));
                _this.minPostTest.setUTCFullYear(date_1.getFullYear());
                _this.minPostTest.setUTCMonth(date_1.getMonth());
                _this.minPostTest.setUTCDate(date_1.getDate());
                console.log(date_1, 'finale update date', _this.minPostTest);
            }
            else {
                _this.preDays = undefined;
                _this.dateValid = false;
                _this.pretestValid = false;
            }
            _this.minPostTest = new Date(_this.pretestToDate);
            var date = new Date(_this.incrementDate(_this.minPostTest));
            _this.minPostTest.setUTCFullYear(date.getFullYear());
            console.log(date.getMonth(), 'getmonth', _this.minPostTest.setUTCMonth(date.getMonth()));
            _this.minPostTest.setMonth(date.getMonth());
            _this.minPostTest.setUTCDate(date.getDate());
            _this.formChange();
        });
    };
    TestDetailsComponent.prototype.posttestDate = function (event) {
        var _this = this;
        if (event != null) {
            this.posttestFromDate = event[0].toJSON().split('T')[0];
            this.posttestToDate = event[1].toJSON().split('T')[0];
            var start_year = event[0].getFullYear();
            var start_month = event[0].getMonth();
            var start_day = event[0].getDate();
            var end_year = event[1].getFullYear();
            var end_month = event[1].getMonth();
            var end_day = event[1].getDate();
            var reqData = {
                start_year: start_year,
                start_month: start_month + 1,
                start_day: start_day,
                end_year: end_year,
                end_month: end_month + 1,
                end_day: end_day
            };
            this.getDurationOfWeeksSubscription = this.homeservice.getDurationOfWeeks(reqData).subscribe(function (apiResponse) {
                if (apiResponse.status === 'ok') {
                    _this.postDays = parseInt(apiResponse.data.interval);
                    if (_this.postDays > 0) {
                        _this.dateValid = true;
                    }
                    else {
                        _this.dateValid = false;
                        _this.postDays = 0;
                    }
                    _this.posttestValid = false;
                    if (_this.preDays < 4 || _this.preDays > 53) {
                        _this.posttestValid = true;
                        _this.postTestMessage = 'Post-test weeks should be 4-53 weeks';
                    }
                    else {
                        _this.posttestValid = false;
                    }
                }
                _this.formChange();
            });
        }
    };
    TestDetailsComponent.prototype.saveData = function (currentComponent) {
        var _this = this;
        var data = {
            test_name: this.testDetailsValue.TestName,
            test_type: this.testDetailsValue.TypeTest,
            target_variable: this.testDetailsValue.TargetVariable,
            desc: this.testDetailsValue.Description,
            additional_det: this.testDetailsValue.AddDetails,
            pretest_startdt: this.pretestFromDate,
            pretest_enddt: this.pretestToDate,
            testwin_startdt: this.posttestFromDate,
            testwin_enddt: this.posttestToDate,
            stepindex: 1,
            stage_id: 1,
            test_id: this.testDetailsValue.TestID
        };
        localStorage.setItem('TargetVariableValue', this.testDetailsValue.TargetVariable);
        sessionStorage.setItem('test-type', this.testDetailsValue.TypeTest);
        this.saveStageSubsription = this.homeservice.Save_stage(data).subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok') {
                if (_this.testId === '' || _this.testId === undefined || _this.testId === 'undefined') {
                    if (_this.saveDraft) {
                        _this.testDetailsValue.TestID = apiresponse.data;
                    }
                    _this.testId = apiresponse.data;
                }
                else {
                    _this.testId = _this.testId;
                }
                data.test_id = _this.testId;
                if (!_this.saveDraft) {
                    _this.moveNextStep.emit({ currentComponent: currentComponent, data: data });
                }
            }
        });
    };
    TestDetailsComponent.prototype.incrementDate = function (date_str) {
        var date = new Date(date_str);
        var next_date = new Date(date.setDate(date.getDate() + 1));
        return next_date.getFullYear() + '-' + (next_date.getMonth() + 1) + '-' + next_date.getDate();
    };
    TestDetailsComponent.ɵfac = function TestDetailsComponent_Factory(t) { return new (t || TestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_6__["TestConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_5__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    TestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestDetailsComponent, selectors: [["app-test-details"]], viewQuery: function TestDetailsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.testDetails = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, outputs: { tipsData: "tipsData", moveNextStep: "moveNextStep" }, decls: 147, vars: 32, consts: [[1, "mat-card_content"], [1, "header_content"], ["autocomplete", "on", 3, "change"], ["testDetails", "ngForm"], [1, "row"], [1, "col-md-4", "col-lg-4", "col-sm-12"], [1, "form-group"], ["id", "lbl_test_details_test_name", 1, "label_change"], [1, "required_font"], ["matTooltip", "Enter the Test Name Here", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["type", "text", "autocomplete", "off", "id", "txt_test_details_test_name", "name", "TestName", "autocomplete", "off", "placeholder", "Enter Test Name", "maxlength", "255", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["TestName", "ngModel"], ["class", "testname_err_msg", 4, "ngIf"], ["id", "lbl_test_details_typetext", 1, "label_change"], ["matTooltip", "Select Type of Test Here", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["placeholder", "Select Dropdown", "required", "", "name", "TypeTest", 3, "ngModel", "allowClear", "items", "ngModelChange", "selectionChanges"], ["TypeTest", "ngModel"], ["id", "lbl_test_details_target_variable", 1, "label_change"], ["matTooltip", "Select Target Variable Here", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["placeholder", "Select Dropdown", "required", "", "name", "TargetVariable", 3, "ngModel", "allowClear", "items", "ngModelChange"], ["TargetVariable", "ngModel"], ["id", "lbl_test_details_brief_description", 1, "label_change"], ["type", "text", "id", "txt_test_details_brief_description", "name", "Description", "placeholder", "Enter Description", "maxlength", "255", 1, "md-textarea", "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-8", "col-lg-8", "col-sm-12"], ["id", "lbl_test_details_details_description", 1, "label_change"], ["type", "text", "id", "txt_test_details_details_description", "name", "AddDetails", "placeholder", "Enter Additional Details", "maxlength", "255", 1, "md-textarea", "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "pt-3"], ["id", "lbl_test_details_pre_test", 1, "label_change"], ["matTooltip", "Select Pre Test Date", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["id", "txt_test_details_pre_test", "placeholder", "From - To", "bsDaterangepicker", "", "triggers", "keydown click", "autocomplete", "off", "required", "", "readonly", "", 1, "form-control", 3, "bsValue", "minDate", "maxDate", "bsConfig", "bsValueChange"], ["class", "pretest-weeks", 4, "ngIf"], ["id", "lbl_test_details_post_test", 1, "label_change"], ["matTooltip", "Select Post Test Date", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["id", "txt_test_details_post_test", "placeholder", "From - To", "bsDaterangepicker", "", "triggers", "keydown click", "autocomplete", "off", "name", "posttest", "required", "", "readonly", "", 1, "form-control", 3, "bsValue", "minDate", "maxDate", "bsConfig", "bsValueChange"], [1, "testname_err_msg"], [1, "pretest-weeks"]], template: function TestDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter Test Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TestDetailsComponent_Template_form_change_9_listener() { return ctx.formChange(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter Test Name ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " *\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestDetailsComponent_Template_input_ngModelChange_24_listener($event) { return ctx.testDetailsValue.TestName = $event; })("change", function TestDetailsComponent_Template_input_change_24_listener() { return ctx.checkTestName(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TestDetailsComponent_div_29_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TestDetailsComponent_div_31_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select Type of Test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " *\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngx-select", 15, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestDetailsComponent_Template_ngx_select_ngModelChange_46_listener($event) { return ctx.testDetailsValue.TypeTest = $event; })("selectionChanges", function TestDetailsComponent_Template_ngx_select_selectionChanges_46_listener($event) { return ctx.checkTypeOfTest($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TestDetailsComponent_div_52_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Target Variable ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " *\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ngx-select", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestDetailsComponent_Template_ngx_select_ngModelChange_67_listener($event) { return ctx.testDetailsValue.TargetVariable = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, TestDetailsComponent_div_73_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Enter Brief Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "textarea", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestDetailsComponent_Template_textarea_ngModelChange_86_listener($event) { return ctx.testDetailsValue.Description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Enter Additional Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "textarea", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestDetailsComponent_Template_textarea_ngModelChange_95_listener($event) { return ctx.testDetailsValue.AddDetails = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Pre-Test Window");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " *\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsValueChange", function TestDetailsComponent_Template_input_bsValueChange_111_listener($event) { return ctx.pretestDate($event); })("bsValueChange", function TestDetailsComponent_Template_input_bsValueChange_111_listener($event) { return ctx.pretest = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, TestDetailsComponent_div_113_Template, 2, 1, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, TestDetailsComponent_div_117_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Post-Test Window");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " *\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsValueChange", function TestDetailsComponent_Template_input_bsValueChange_132_listener($event) { return ctx.posttestDate($event); })("bsValueChange", function TestDetailsComponent_Template_input_bsValueChange_132_listener($event) { return ctx.posttest = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, TestDetailsComponent_div_134_Template, 2, 1, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](136);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, TestDetailsComponent_div_138_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.testDetailsValue.TestName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.duplicateTestName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testNameValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.testDetailsValue.TypeTest)("allowClear", false)("items", ctx.typetest);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeTestValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.testDetailsValue.TargetVariable)("allowClear", false)("items", ctx.plantest);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.targetValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.testDetailsValue.Description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.testDetailsValue.AddDetails);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsValue", ctx.pretest)("minDate", ctx.minPreTest)("maxDate", ctx.maxPreTest)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preDays);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pretestValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsValue", ctx.posttest)("minDate", ctx.minPostTest)("maxDate", ctx.maxPostTest)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postDays);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posttestValid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_select_ex__WEBPACK_IMPORTED_MODULE_11__["NgxSelectComponent"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDaterangepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDaterangepickerDirective"]], styles: [".label_change[_ngcontent-%COMP%] {\n  color: black;\n  line-height: 1.25rem;\n  margin-bottom: 10px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 0.813rem;\n  font-weight: 200;\n  background-color: #f3f4f7;\n  border-radius: 0.5rem;\n  border-color: white !important;\n}\n\n  .ngx-select__toggle {\n  background-color: #f3f4f7;\n  border-color: white !important;\n  height: 38px;\n  border-radius: 0.5rem;\n  font-size: 0.813rem;\n}\n\n  .ngx-select__item {\n  font-size: 0.75rem;\n}\n\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n  .bs-datepicker-head button.next span, .bs-datepicker-head[_ngcontent-%COMP%]   button.previous[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n  .bs-datepicker-head button.current {\n  color: black !important;\n}\n\n  .theme-default .bs-datepicker-head {\n  background-color: #ffffff !important;\n}\n\n  .bs-datepicker-head button.next, .bs-datepicker-head[_ngcontent-%COMP%]   button.previous[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n  .bs-datepicker-body {\n  border: none !important;\n  border-top: 1px solid #e9edf0 !important;\n}\n\n  .bs-datepicker-body table td span[class*=select-], .bs-datepicker-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[class*=select-][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 20% !important;\n  background-color: #2e91fb;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  margin: 40px;\n  background: rgba(0, 0, 0, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\n\n[_nghost-%COMP%]     .ngx-select__toggle {\n  background-color: #f3f4f7 !important;\n}\n\n[_nghost-%COMP%]     .ngx-select__toggle {\n  color: #495057 !important;\n}\n\n .bs-datepicker-head button.next, .bs-datepicker-head[_ngcontent-%COMP%]   button.previous[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.testDetails[_ngcontent-%COMP%] {\n  font-family: Mulish_regular !important;\n}\n\n.headersValue[_ngcontent-%COMP%] {\n  font-family: Mulish_bold !important;\n  color: black !important;\n  font-size: 0.75rem;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #b3b7bf;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #b3b7bf;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #b3b7bf;\n}\n\n  .previous {\n  color: black !important;\n}\n\n  .bs-datepicker-head button {\n  color: black !important;\n}\n\n.pretest-weeks[_ngcontent-%COMP%] {\n  margin-left: 76%;\n  font-family: Mulish_regular !important;\n  color: black !important;\n  font-size: smaller;\n}\n\n[_nghost-%COMP%]    .ngx-select__placeholder {\n  line-height: 1.6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRlc3QvdGVzdC1kZXRhaWxzL3Rlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7QUFFRjs7QUFIQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7QUFFRjs7QUFIQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtdGVzdC90ZXN0LWRldGFpbHMvdGVzdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsX2NoYW5nZXtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44MTNyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5neC1zZWxlY3RfX3RvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjc7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44MTNyZW07XG59XG5cbjo6bmctZGVlcCAubmd4LXNlbGVjdF9faXRlbXtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uZm9udF93ZWlnaHRfYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0IHNwYW4sIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLnByZXZpb3VzIHNwYW57XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24uY3VycmVudHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1oZWFke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0LCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5wcmV2aW91c3tcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5e1xuICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWRmMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl0sIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFue1xuICBib3JkZXItcmFkaXVzOiAyMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlOTFmYjtcbn1cblxuc2VsZWN0IG9wdGlvbiB7XG4gIG1hcmdpbjogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1zZWxlY3RfX3RvZ2dsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNyFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LXNlbGVjdF9fdG9nZ2xle1xuICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0LCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5wcmV2aW91c3tcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbn1cblxuLnRlc3REZXRhaWxze1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlcnNWYWx1ZXtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yIDogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiAjYjNiN2JmO1xufVxuXG46Om5nLWRlZXAgLnByZXZpb3Vze1xuICBjb2xvciA6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b257XG4gIGNvbG9yIDogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLnByZXRlc3Qtd2Vla3Mge1xuICBtYXJnaW4tbGVmdDogNzYlO1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXIgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLm5neC1zZWxlY3RfX3BsYWNlaG9sZGVye1xuICBsaW5lLWhlaWdodDogMS42cmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
    return TestDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-details',
                templateUrl: './test-details.component.html',
                styleUrls: ['./test-details.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_6__["TestConfigService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_5__["GlobalEventsService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { tipsData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moveNextStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], testDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['testDetails']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "OqD5":
/*!****************************************************************************************!*\
  !*** ./src/app/create-test/applicability-criteria/applicability-criteria.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ApplicabilityCriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicabilityCriteriaComponent", function() { return ApplicabilityCriteriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/testconfig.service */ "LBDO");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");



















function ApplicabilityCriteriaComponent_div_13_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Select ", ctx_r6.testApplicabilityFields[0].banner, "");
} }
function ApplicabilityCriteriaComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-multiselect-dropdown", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_div_13_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.BannerShow($event); return ctx_r7.filterCall(); })("onSelectAll", function ApplicabilityCriteriaComponent_div_13_Template_ng_multiselect_dropdown_onSelectAll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onMetricSelectAll($event); })("ngModelChange", function ApplicabilityCriteriaComponent_div_13_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.Banner = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicabilityCriteriaComponent_div_13_ng_container_10_Template, 5, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r0.testApplicabilityFields[0].banner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "---Select---")("data", ctx_r0.banner)("settings", ctx_r0.dropdownSettingsbanner)("ngModel", ctx_r0.Banner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bannershow);
} }
function ApplicabilityCriteriaComponent_div_18_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Select ", ctx_r11.testApplicabilityFields[2].territory, "");
} }
function ApplicabilityCriteriaComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-multiselect-dropdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_div_18_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.TerritoryShow($event); })("onSelectAll", function ApplicabilityCriteriaComponent_div_18_Template_ng_multiselect_dropdown_onSelectAll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onMetricSelectAll($event); })("ngModelChange", function ApplicabilityCriteriaComponent_div_18_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.Territory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicabilityCriteriaComponent_div_18_ng_container_10_Template, 5, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r1.testApplicabilityFields[2].territory, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "---Select---")("data", ctx_r1.territory)("settings", ctx_r1.dropdownSettingsbanner)("ngModel", ctx_r1.Territory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.territoryshow);
} }
function ApplicabilityCriteriaComponent_div_23_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r16.position.value);
} }
function ApplicabilityCriteriaComponent_div_23_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Select ", ctx_r17.testApplicabilityFields[1].segment, "");
} }
function ApplicabilityCriteriaComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicabilityCriteriaComponent_div_23_img_7_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-multiselect-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_div_23_Template_ng_multiselect_dropdown_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.SegmentShow($event); })("onSelectAll", function ApplicabilityCriteriaComponent_div_23_Template_ng_multiselect_dropdown_onSelectAll_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onMetricSelectAll($event); })("ngModelChange", function ApplicabilityCriteriaComponent_div_23_Template_ng_multiselect_dropdown_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.Segment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicabilityCriteriaComponent_div_23_ng_container_12_Template, 5, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r2.testApplicabilityFields[1].segment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.disableCustomerChain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "---Select---")("data", ctx_r2.segment)("settings", ctx_r2.dropdownSettingsbanner)("ngModel", ctx_r2.Segment)("disabled", ctx_r2.disableCustomerChain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.segmentshow);
} }
function ApplicabilityCriteriaComponent_div_31_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Select ", ctx_r22.testApplicabilityFields[3].storegrid, "");
} }
function ApplicabilityCriteriaComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-multiselect-dropdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_div_31_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.StoreGridShow($event); })("onSelectAll", function ApplicabilityCriteriaComponent_div_31_Template_ng_multiselect_dropdown_onSelectAll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onMetricSelectAll($event); })("ngModelChange", function ApplicabilityCriteriaComponent_div_31_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.StoreGrid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicabilityCriteriaComponent_div_31_ng_container_10_Template, 5, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r3.testApplicabilityFields[3].storegrid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "---Select---")("data", ctx_r3.storegrid)("settings", ctx_r3.dropdownSettingsbanner)("ngModel", ctx_r3.StoreGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.storegridshow);
} }
function ApplicabilityCriteriaComponent_div_36_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Select ", ctx_r27.testApplicabilityFields[4].category, "");
} }
function ApplicabilityCriteriaComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-multiselect-dropdown", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_div_36_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.CategoryShow($event); })("onSelectAll", function ApplicabilityCriteriaComponent_div_36_Template_ng_multiselect_dropdown_onSelectAll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onMetricSelectAll($event); })("ngModelChange", function ApplicabilityCriteriaComponent_div_36_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.Category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicabilityCriteriaComponent_div_36_ng_container_10_Template, 5, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r4.testApplicabilityFields[4].category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "---Select---")("data", ctx_r4.category)("settings", ctx_r4.dropdownSettingsbanner)("ngModel", ctx_r4.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.categoryshow);
} }
function ApplicabilityCriteriaComponent_mat_radio_button_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.testApplicabilityFields[3].storegrid);
} }
var config = __webpack_require__(/*! ../../../assets/region/config-fields.json */ "ar/W");
var ApplicabilityCriteriaComponent = /** @class */ (function () {
    function ApplicabilityCriteriaComponent(homeservice, toastr, commonService, globalService) {
        var _this = this;
        this.homeservice = homeservice;
        this.toastr = toastr;
        this.commonService = commonService;
        this.globalService = globalService;
        this.nextStepSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.selectedRegion = '';
        this.isinSqFt = '';
        this.tableName = '';
        this.regionNames = [];
        this.banner = [];
        this.segment = [];
        this.territory = [];
        this.storegrid = [];
        this.validForm = false;
        this.strfeat1 = '1';
        this.strfeatmand = true;
        this.req_rsv = true;
        this.req_cost = true;
        this.dropdownSettingsbanner = {};
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.positionOptions[0]);
        this.saveDraft = false;
        this.rtmImpact = false;
        this.lockStoreFeature = false;
        this.moveNextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tipsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disableCustomerChain = false;
        this.filterData = [];
        var componentDetails = this.commonService.getCurrentComponentSubject();
        this.currentComponent = componentDetails.currentComponent;
        this.data = componentDetails.data;
        this.nextStepSubscrption = this.globalService.subscribe('MOVE_NEXT_APPLICABILITY_CRITERIA', function (obj) {
            if (obj.module === 'CREATE_TEST' && obj.currentComponent === 1) {
                _this.saveDraft = obj.saveDraft;
                _this.validateDropDowns();
                _this.saveData(obj.currentComponent);
            }
        });
        this.dropdownSettingsbanner = {
            allowSearchFilter: true,
            clearSearchFilter: true,
            itemsShowLimit: 1,
        };
    }
    ApplicabilityCriteriaComponent.prototype.ngOnInit = function () {
        this.Get_Dropdownvals();
        this.selectedRegion = sessionStorage.getItem('region');
        this.user_name = localStorage.getItem('username');
        this.userRegion = sessionStorage.getItem('region');
        if (sessionStorage.getItem('test-type') === 'RTM Impact Test') {
            this.lockStoreFeature = true;
            this.rtmImpact = true;
            if (this.userRegion === 'DEMO') {
                this.strfeat2 = '0';
            }
            else {
                this.strfeat2 = '1';
            }
        }
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
        this.validateDropDowns();
        this.currentComponent = this.commonService.getCurrentComponentSubject().data;
        if (this.currentComponent !== undefined) {
            this.Segment = this.currentComponent.segment;
            this.Banner = this.currentComponent.banner;
            this.Territory = this.currentComponent.territory;
            this.StoreGrid = this.currentComponent.store_grid;
            this.Category = this.currentComponent.category;
            if (this.currentComponent.strfeature2 !== undefined) {
                this.strfeat2 = this.currentComponent.strfeature2.toString();
            }
            this.cost = this.currentComponent.cost;
            if (this.currentComponent.hasOwnProperty('rsv_estimate')) {
                this.rsv_estimate = (Number(parseFloat((this.currentComponent.rsv_estimate)) / 1000000));
            }
            this.breakenlist = this.currentComponent.break_even_lift;
        }
    };
    ApplicabilityCriteriaComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.nextStepSubscrption)) {
            this.nextStepSubscrption.unsubscribe();
        }
    };
    ApplicabilityCriteriaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tips;
        tips = ['The user should select/filter for stores belonging to a particular channel, territory, segment and store grid (This decides the population from which the test stores should be sampled)', 'The user should enter the estimated cost impact and the annual rsv estimate to calculate the break even lift%', 'Note: If the cost impact is negative (Reduction in cost), please enter the cost impact as a negative value.'];
        setTimeout(function () {
            _this.tipstoParent(tips);
        });
    };
    ApplicabilityCriteriaComponent.prototype.tipstoParent = function (data) {
        this.tipsData.emit(data);
    };
    ApplicabilityCriteriaComponent.prototype.saveData = function (currentComponent) {
        var _this = this;
        if (this.selectedRegion === 'DEMO') {
            this.Category = [];
        }
        if (this.validForm === true) {
            this.data.stepindex = 2;
            this.data.banner = this.Banner;
            this.data.segment = this.Segment;
            this.data.territory = this.Territory;
            this.data.store_grid = this.StoreGrid;
            this.data.category = this.Category;
            this.data.strfeature1 = this.strfeat1;
            this.data.strfeature2 = this.strfeat2;
            this.data.break_even_lift = this.breakenlist;
            this.data.cost = this.cost;
            this.data.rsv_estimate = this.rsv_estimate;
            this.data.is_checkconf = false;
            this.data.is_checkmarg = false;
            this.data.is_checknum = false;
            this.data.rsv_estimate = (Math.round(this.data.rsv_estimate * 1000000));
            console.log(this.data, 'RsVEstimate');
            this.homeservice.Save_stage(this.data).subscribe(function (apiResponse) {
                if (apiResponse.status === 'ok') {
                    if (!_this.saveDraft && _this.rtmImpact === true) {
                        _this.getDataValiditypoints(currentComponent);
                    }
                    else {
                        if (!_this.saveDraft) {
                            _this.moveNextStep.emit({ currentComponent: currentComponent, data: _this.data });
                        }
                    }
                }
            });
        }
    };
    ApplicabilityCriteriaComponent.prototype.Get_Dropdownvals = function () {
        var _this = this;
        this.homeservice.Get_Dropdownvals().subscribe(function (apiresponse) {
            _this.banner = [];
            _this.segment = [];
            _this.territory = [];
            if (apiresponse.status === 'ok') {
                apiresponse.data['territory'].sort(_this.sortNumStr);
                _this.banner = apiresponse.data['banner'];
                // this.segment = apiresponse.data['segment'];
                var temp_territory = apiresponse.data['territory'];
                _this.territory = [];
                for (var i = temp_territory.length - 1; i >= 0; i--) {
                    _this.territory.push(temp_territory[i].toString());
                }
                _this.territory = _this.territory.sort(function (n1, n2) { return n1 - n2; });
                _this.storegrid = apiresponse.data['store_grid'];
                _this.filterData = apiresponse.data['filterData'];
                _this.disableCustomerChain = true;
                _this.filterCall();
            }
        });
    };
    ApplicabilityCriteriaComponent.prototype.sortNumStr = function (m, n) {
        return m - n;
    };
    ApplicabilityCriteriaComponent.prototype.onMetricSelectAll = function (event) {
        // console.log(event);
    };
    ApplicabilityCriteriaComponent.prototype.BannerShow = function (event) {
        if (event !== undefined) {
            if (event.length === 0) {
                this.bannershow = true;
            }
            else {
                this.bannershow = false;
            }
            this.validateDropDowns();
        }
    };
    ApplicabilityCriteriaComponent.prototype.filterCall = function () {
        var _this = this;
        if (this.filterData.length > 0) {
            setTimeout(function () {
                _this.filterCustomerChain();
            }, 100);
        }
    };
    ApplicabilityCriteriaComponent.prototype.SegmentShow = function (event) {
        if (event !== undefined) {
            if (event.length === 0) {
                this.segmentshow = true;
            }
            else {
                this.segmentshow = false;
            }
            this.validateDropDowns();
        }
    };
    ApplicabilityCriteriaComponent.prototype.TerritoryShow = function (event) {
        if (event !== undefined) {
            if (event.length === 0) {
                this.territoryshow = true;
            }
            else {
                this.territoryshow = false;
            }
            this.validateDropDowns();
        }
    };
    ApplicabilityCriteriaComponent.prototype.StoreGridShow = function (event) {
        if (event !== undefined) {
            if (event.length === 0) {
                this.storegridshow = true;
            }
            else {
                this.storegridshow = false;
            }
            this.validateDropDowns();
        }
    };
    ApplicabilityCriteriaComponent.prototype.CategoryShow = function (event) {
        if (event !== undefined) {
            if (event.length === 0) {
                this.categoryshow = true;
            }
            else {
                this.categoryshow = false;
            }
            this.validateDropDowns();
        }
    };
    ApplicabilityCriteriaComponent.prototype.validateDropDowns = function () {
        if (this.bannershow !== undefined && this.territory !== undefined
            && this.segmentshow !== undefined && this.storegridshow !== undefined
            && !this.bannershow && this.territoryshow !== undefined
            && !this.territoryshow && !this.segmentshow && !this.storegridshow
            && ((this.rsv_estimate !== undefined && this.rsv_estimate !== '') && (this.cost !== undefined && this.cost !== '') || this.rtmImpact)
            && this.strfeat2 !== undefined) {
            this.globalService.publish('ERROR_VALIDATION', {
                valid: true
            });
            // this.strfeatmand = true;
            this.validForm = true;
        }
        else {
            this.strfeatmand = false;
            this.globalService.publish('ERROR_VALIDATION', {
                valid: false,
                message: 'Please fill the required fields',
                errorEnable: true
            });
        }
    };
    ApplicabilityCriteriaComponent.prototype.CurrentTest = function (value) {
    };
    ApplicabilityCriteriaComponent.prototype.onKeyup = function (event) {
        if (this.rsv_estimate !== '' || this.rsv_estimate != null) {
            this.req_rsv = true;
        }
        if ((this.rsv_estimate !== undefined && this.rsv_estimate !== '') && (this.cost !== undefined && this.cost !== '')) {
            this.CalcBreakEvenlift();
        }
        this.validateDropDowns();
    };
    ApplicabilityCriteriaComponent.prototype.CalcBreakEvenlift = function () {
        var _this = this;
        if (this.selectedRegion === 'DEMO') {
            this.categoryshow = false;
            this.Category = [];
        }
        if (this.selectedRegion === 'DEMO' && ((this.Banner === undefined || this.Banner.length === 0) || (this.StoreGrid === undefined || this.StoreGrid.length === 0) || (this.Territory === undefined || this.Territory.length === 0) || (this.Segment === undefined || this.Segment.length === 0))) {
            console.log('DEMO');
            this.breakenlist = '';
        }
        else {
            console.log('else');
            console.log(this.Banner, this.StoreGrid, this.Territory, this.Segment, this.Category);
            var dataTemp = {
                banners: this.Banner,
                segments: this.StoreGrid,
                territories: this.Territory,
                store_segments: this.Segment,
                categories: this.Category,
                no_of_teststores: 35,
                rsv_estimate: this.rsv_estimate * 1000000,
                cost: JSON.parse(this.cost)
            };
            console.log(dataTemp, 'dataTemp');
            this.homeservice.CalculateBreakEven(dataTemp).subscribe(function (apiresponse) {
                _this.breakenlist = apiresponse.data.toFixed(2);
            });
        }
    };
    ApplicabilityCriteriaComponent.prototype.onKeyup1 = function (event) {
        if (this.cost === '' || this.cost == null || this.cost === 0) {
            this.req_cost = true;
        }
        if ((this.rsv_estimate !== undefined && this.rsv_estimate !== '') && (this.cost !== undefined && this.cost !== '')) {
            this.CalcBreakEvenlift();
        }
        this.validateDropDowns();
    };
    ApplicabilityCriteriaComponent.prototype.filterCustomerChain = function () {
        var _this = this;
        if (this.userRegion === 'DEMO') {
            var dataArray_1 = this.Banner;
            var segementArray_1 = [];
            if (dataArray_1 !== undefined && dataArray_1.length > 0) {
                this.filterData.forEach(function (x) {
                    var findIndex = dataArray_1.findIndex(function (y) { return y === x['Customer_Group']; });
                    if (findIndex !== -1) {
                        segementArray_1.push(x['Customer_Chain']);
                    }
                });
            }
            console.log(segementArray_1, 'segmentArray');
            this.segment = segementArray_1;
            if (segementArray_1.length === 0) {
                this.disableCustomerChain = true;
            }
            else {
                this.disableCustomerChain = false;
            }
            console.log(this.Segment, 'segement');
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.Segment)) {
                var check = this.segment.some(function (r) { return _this.Segment.includes(r); });
                if (!check) {
                    this.Segment = [];
                    this.segmentshow = false;
                }
                var arraySegment = this.Segment.filter(function (val) { return _this.segment.includes(val); });
                console.log(arraySegment);
                this.Segment = arraySegment;
            }
        }
    };
    ApplicabilityCriteriaComponent.prototype.getDataValiditypoints = function (currentComponent) {
        var _this = this;
        console.log(this.data, 'dataPoins');
        var data = {
            test_id: this.data.test_id,
            prewindow_start: this.data.pretest_startdt,
            prewindow_end: this.data.pretest_enddt,
            postwindow_start: this.data.testwin_startdt,
            postwindow_end: this.data.testwin_enddt
        };
        var validPoints;
        this.homeservice.dataValidaityPoints(data).subscribe(function (apiresponse) {
            console.log(apiresponse, 'Apiresponse');
            if (apiresponse.status === 'ok') {
                if (apiresponse.data === 1) {
                    if (!_this.saveDraft) {
                        _this.moveNextStep.emit({ currentComponent: currentComponent, data: _this.data });
                    }
                }
            }
            else if (apiresponse.status === 'not_ok') {
                _this.toastr.warning(apiresponse.data);
            }
        });
    };
    ApplicabilityCriteriaComponent.ɵfac = function ApplicabilityCriteriaComponent_Factory(t) { return new (t || ApplicabilityCriteriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_6__["TestConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"])); };
    ApplicabilityCriteriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicabilityCriteriaComponent, selectors: [["app-applicability-criteria"]], outputs: { moveNextStep: "moveNextStep", tipsData: "tipsData" }, decls: 143, vars: 26, consts: [[1, "testcard"], [1, "mat-card_content"], [1, "header_content"], [1, "row"], [1, "col-md-4", "col-lg-4", "col-sm-12"], ["class", "form-group", 4, "ngIf"], [1, "header_content", "pt-2"], [1, "col-md-6", "col-lg-6", "col-sm-12"], [1, "label_change"], [1, "color_red"], ["aria-label", "Select an option", 3, "ngModel", "ngModelChange"], ["value", "1", 3, "checked", "change"], ["aria-label", "Select an option", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", "1", 3, "checked", 4, "ngIf"], ["value", "0", 1, "ml-2", 3, "checked", "change"], [1, "form-group"], [2, "color", "red", "font-size", "18px"], ["matTooltip", "If the test scenario results in a increase in cost of say $100, enter as +100.  If the test scenario results in a savings in cost of say $100, enter as -100.", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["type", "number", 1, "form-control", "bklift_input_field", 3, "ngModel", "disabled", "ngModelChange", "keyup"], [2, "color", "red", "margin-left", "3.3vw", 3, "hidden"], ["matTooltip", "Enter the estimated / actuals of annual RSV of current / previous year", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["matTooltip", "Minimum lift/drop in sales to offset the increase/savings in cost, keeping the earnings constant.", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["type", "number", 1, "form-control", "borderradnone", "bklift_input_field", 3, "disabled", "ngModel", "ngModelChange"], ["id", "bannerDropdown", 1, "bannerDropdown", 3, "placeholder", "data", "settings", "ngModel", "ngModelChange", "onSelectAll"], [4, "ngIf"], [2, "color", "red"], ["id", "territoryDropdown", 2, "border-radius", "0", 3, "placeholder", "data", "settings", "ngModel", "ngModelChange", "onSelectAll"], ["class", "infoicon", "matTooltip", "Please select customer group", "src", "assets/images/information.png", "alt", "sort", 3, "matTooltipPosition", 4, "ngIf"], ["id", "segmentDropdown", 2, "border-radius", "0", 3, "placeholder", "data", "settings", "ngModel", "disabled", "ngModelChange", "onSelectAll"], ["matTooltip", "Please select customer group", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["id", "storegridDropdown", 2, "border-radius", "0", 3, "placeholder", "data", "settings", "ngModel", "ngModelChange", "onSelectAll"], ["id", "categoryDropdown", 2, "border-radius", "0", 3, "placeholder", "data", "settings", "ngModel", "ngModelChange", "onSelectAll"], ["value", "1", 3, "checked"]], template: function ApplicabilityCriteriaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Applicability Criteria");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ApplicabilityCriteriaComponent_div_13_Template, 12, 6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ApplicabilityCriteriaComponent_div_18_Template, 12, 6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ApplicabilityCriteriaComponent_div_23_Template, 14, 8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ApplicabilityCriteriaComponent_div_31_Template, 12, 6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ApplicabilityCriteriaComponent_div_36_Template, 12, 6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Test Store Feature Selection");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Store Feature - 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-radio-group", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_Template_mat_radio_group_ngModelChange_58_listener($event) { return ctx.strfeat1 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-radio-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApplicabilityCriteriaComponent_Template_mat_radio_button_change_60_listener($event) { return ctx.CurrentTest($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Store Feature - 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-radio-group", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_Template_mat_radio_group_ngModelChange_75_listener($event) { return ctx.strfeat2 = $event; })("change", function ApplicabilityCriteriaComponent_Template_mat_radio_group_change_75_listener() { return ctx.validateDropDowns(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ApplicabilityCriteriaComponent_mat_radio_button_77_Template, 2, 2, "mat-radio-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-radio-button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApplicabilityCriteriaComponent_Template_mat_radio_button_change_79_listener($event) { return ctx.CurrentTest($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Break Even Lift Calculation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " * ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_Template_input_ngModelChange_103_listener($event) { return ctx.cost = $event; })("keyup", function ApplicabilityCriteriaComponent_Template_input_keyup_103_listener($event) { return ctx.onKeyup1($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Estimated Cost Impact Required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " * ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_Template_input_ngModelChange_120_listener($event) { return ctx.rsv_estimate = $event; })("keyup", function ApplicabilityCriteriaComponent_Template_input_keyup_120_listener($event) { return ctx.onKeyup($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Current Annual RSV Required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Breakeven Lift (%)\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicabilityCriteriaComponent_Template_input_ngModelChange_136_listener($event) { return ctx.breakenlist = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testApplicabilityFields[0].is_show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testApplicabilityFields[2].is_show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testApplicabilityFields[1].is_show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testApplicabilityFields[3].is_show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testApplicabilityFields[4].is_show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strfeat1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testApplicabilityFields[0].banner);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strfeat2)("disabled", ctx.lockStoreFeature);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRegion !== "DEMO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testApplicabilityFields[1].segment);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Estimated Cost Impact (", ctx.currencySymbol, ")\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cost)("disabled", ctx.rtmImpact);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.req_cost);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Annual RSV (", ctx.currencySymbol, " in million)\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rsv_estimate)("disabled", ctx.rtmImpact);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.req_rsv);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rtmImpact)("ngModel", ctx.breakenlist);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["MultiSelectComponent"]], styles: ["#bannerDropdown[_ngcontent-%COMP%] {\n  border-color: white !important;\n}\n\n  .multiselect-dropdown .dropdown-btn {\n  background-color: #f3f4f7;\n  border-color: white !important;\n  color: #a0a5ab !important;\n}\n\n  .multiselect-item-checkbox {\n  font-size: 0.75rem !important;\n  font-family: Mulish_regular !important;\n}\n\n  .multiselect-dropdown .dropdown-btn .dropdown-up {\n  border-bottom: 5px solid #adadad !important;\n  border-left: 5px solid transparent !important;\n  border-right: 5px solid transparent !important;\n}\n\n  .multiselect-dropdown .dropdown-btn .dropdown-down {\n  border-top: 5px solid #adadad !important;\n  border-left: 5px solid transparent !important;\n  border-right: 5px solid transparent !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 200;\n  background-color: #f3f4f7;\n  border-radius: 0.5rem;\n  border-color: white;\n}\n\n.color_red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.testcard[_ngcontent-%COMP%] {\n  font-family: Mulish_regular !important;\n}\n\n.label_change[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  font-weight: bold !important;\n}\n\n[_nghost-%COMP%]     .multiselect-dropdown .selected-item {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 8.5rem;\n}\n\n  .multiselect-item-checkbox input[type=checkbox] + div:after {\n  top: 42% !important;\n  left: 2px !important;\n  width: 10px !important;\n  height: 5px !important;\n  border-width: 0 0 2.5px 3px !important;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: lightgrey !important;\n  cursor: not-allowed !important;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRlc3QvYXBwbGljYWJpbGl0eS1jcml0ZXJpYS9hcHBsaWNhYmlsaXR5LWNyaXRlcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0ksMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7QUFDSjs7QUFHQTtFQUNJLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFLQTtFQUNJLHNDQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQUZKOztBQUtBO0VBQ0ksc0NBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBLGdDQUFBOztBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXRlc3QvYXBwbGljYWJpbGl0eS1jcml0ZXJpYS9hcHBsaWNhYmlsaXR5LWNyaXRlcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jhbm5lckRyb3Bkb3due1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY3O1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2EwYTVhYiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3h7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9yZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNhZGFkYWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3due1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cblxuLmZvcm0tY29udHJvbHtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjc7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi8vIENzcyBmb3IgbWF0LWNhcmQtY29udGVudFxuLmNvbG9yX3JlZHtcbiAgICBjb2xvcjpyZWQ7XG59XG5cblxuLnRlc3RjYXJke1xuICAgIGZvbnQtZmFtaWx5OiBNdWxpc2hfcmVndWxhciAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWxfY2hhbmdle1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubXVsdGlzZWxlY3QtZHJvcGRvd24gLnNlbGVjdGVkLWl0ZW17XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogOC41cmVtO1xufVxuXG46Om5nLWRlZXAgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBkaXY6YWZ0ZXJ7XG4gICAgdG9wOiA0MiUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMi41cHggM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWR7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbn1cblxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4iXX0= */"] });
    return ApplicabilityCriteriaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicabilityCriteriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-applicability-criteria',
                templateUrl: './applicability-criteria.component.html',
                styleUrls: ['./applicability-criteria.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_6__["TestConfigService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"] }]; }, { moveNextStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['moveNextStep']
        }], tipsData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "o2Vx":
/*!**************************************************************************************!*\
  !*** ./src/app/create-test/control-store-mapping/control-store-mapping.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ControlStoreMappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStoreMappingComponent", function() { return ControlStoreMappingComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/shared/services/testmeasure.service */ "Q4YV");
/* harmony import */ var _app_shared_services_controlstore_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/shared/services/controlstore.service */ "/fOC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/component/common-table/common-table.component */ "epAT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
































function ControlStoreMappingComponent_div_0_div_22_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var critera_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", critera_r6, "\n            ");
} }
function ControlStoreMappingComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ControlStoreMappingComponent_div_0_div_22_div_10_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Selected features (", ctx_r2.selectedFeaturescount, "\n          )");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.matchingCriteria);
} }
function ControlStoreMappingComponent_div_0_mat_card_43_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.uploadMessage);
} }
function ControlStoreMappingComponent_div_0_mat_card_43_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You can either continue the upload excluding the conflicting\n            values or cancel the whole upload\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlStoreMappingComponent_div_0_mat_card_43_ng_container_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.cancelUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.uploadMessage);
} }
function ControlStoreMappingComponent_div_0_mat_card_43_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlStoreMappingComponent_div_0_mat_card_43_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r12.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ControlStoreMappingComponent_div_0_mat_card_43_div_22_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ControlStoreMappingComponent_div_0_mat_card_43_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Additional Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Want to exclude control stores from mapping? Upload it in this\n          format to go to the next step\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlStoreMappingComponent_div_0_mat_card_43_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.dowDEMOoadTemplate("testControlPairs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Click here to\n          dowDEMOoad the template\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ControlStoreMappingComponent_div_0_mat_card_43_ng_container_18_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ControlStoreMappingComponent_div_0_mat_card_43_ng_container_20_Template, 12, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ControlStoreMappingComponent_div_0_mat_card_43_div_22_Template, 8, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.statusFail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.uploaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.uploaded);
} }
function ControlStoreMappingComponent_div_0_mat_card_45_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.uploadMessageControl);
} }
function ControlStoreMappingComponent_div_0_mat_card_45_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You can either continue the upload excluding the conflicting\n            values or cancel the whole upload\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlStoreMappingComponent_div_0_mat_card_45_ng_container_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.cancelUploadControl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.uploadMessageControl);
} }
function ControlStoreMappingComponent_div_0_mat_card_45_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlStoreMappingComponent_div_0_mat_card_45_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r23.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 28, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ControlStoreMappingComponent_div_0_mat_card_45_div_22_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.handleFileInputControlStore($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ControlStoreMappingComponent_div_0_mat_card_45_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Additional Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Want to exclude control stores from mapping? Upload it in this\n          format to go to the next step\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlStoreMappingComponent_div_0_mat_card_45_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.dowDEMOoadTemplate("controlPairs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Click here to\n          dowDEMOoad the template\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ControlStoreMappingComponent_div_0_mat_card_45_ng_container_18_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ControlStoreMappingComponent_div_0_mat_card_45_ng_container_20_Template, 12, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ControlStoreMappingComponent_div_0_mat_card_45_div_22_Template, 8, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.statusFailPool);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.uploadedControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.uploadedControl);
} }
function ControlStoreMappingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Selected features to Map control and test stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-radio-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlStoreMappingComponent_div_0_Template_mat_radio_group_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.defaultChecked = $event; })("ngModelChange", function ControlStoreMappingComponent_div_0_Template_mat_radio_group_ngModelChange_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.callChecked(ctx_r31.defaultChecked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-radio-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "I want the tool to recommend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ControlStoreMappingComponent_div_0_div_22_Template, 13, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "No. of Control Store per test store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlStoreMappingComponent_div_0_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.control_pertest = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ControlStoreMappingComponent_div_0_mat_card_43_Template, 26, 3, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ControlStoreMappingComponent_div_0_mat_card_45_Template, 26, 3, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.defaultChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.defaultChecked === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.control_pertest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.controlStoreMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.defaultChecked === "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.defaultChecked === "3");
} }
function ControlStoreMappingComponent_div_2_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No records found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ControlStoreMappingComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test store to Control store mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-common-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("showValueData", function ControlStoreMappingComponent_div_2_div_2_Template_app_common_table_showValueData_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.showValue($event); })("checkboxLabelControlStoreData", function ControlStoreMappingComponent_div_2_div_2_Template_app_common_table_checkboxLabelControlStoreData_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r38.checkboxLabel(ctx_r38.row); })("callSortData", function ControlStoreMappingComponent_div_2_div_2_Template_app_common_table_callSortData_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.sortDatacontrolStore($event); })("searchFilter", function ControlStoreMappingComponent_div_2_div_2_Template_app_common_table_searchFilter_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r40.FilterLoadSavedTest($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ControlStoreMappingComponent_div_2_div_2_div_14_Template, 4, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData", ctx_r33.ControlStoreTable)("columnHeader", ctx_r33.columnHeader1)("tableType", ctx_r33.control)("stringSelectionControlStore", ctx_r33.selection1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.testStoreDataCount == 0);
} }
function ControlStoreMappingComponent_div_2_div_4_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Store characteristics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Test mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Control mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("RSV (in  ", ctx_r41.currencySymbol, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.roundOffWithComma(ctx_r41.out_poptestmean));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.roundOffWithComma(ctx_r41.out_pop));
} }
function ControlStoreMappingComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test - Control comparison summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Avg. match between a test stores and control stores\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Sales correlation value between test and control\n                stores\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ControlStoreMappingComponent_div_2_div_4_ng_container_51_Template, 32, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r34.avg_test_control, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r34.sales_test_control, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.isTableData == true);
} }
function ControlStoreMappingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ControlStoreMappingComponent_div_2_div_2_Template, 18, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ControlStoreMappingComponent_div_2_div_4_Template, 57, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.controlStoreView);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.controlStoreView);
} }
var config = __webpack_require__(/*! ../../../assets/region/config-fields.json */ "ar/W");
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11___default()(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "Tos5");
noData(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var More = __webpack_require__(/*! highcharts/highcharts-more */ "M8aS");
var ControlStoreMappingComponent = /** @class */ (function () {
    function ControlStoreMappingComponent(globalService, wizard2service, ref, toastr, commonservice, testMeasureService, router, dialog) {
        this.globalService = globalService;
        this.wizard2service = wizard2service;
        this.ref = ref;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.testMeasureService = testMeasureService;
        this.router = router;
        this.dialog = dialog;
        this.defaultChecked = '1';
        this.selectedFeaturescount = 0;
        this.userRegion = '';
        this.matchingCriteria = [];
        this.targetVariableValue = 'RSV';
        this.control_pertest = 1;
        this.moveNextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tipsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showControlStores = false;
        this.controlStoreView = false;
        this.generateSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.controlstoredata = [];
        this.SelectedTestStores = [];
        this.selectedBanner = [];
        this.selectedSegments = [];
        this.selectedStoreSegment = [];
        this.selectedTerritory = [];
        this.selectedCategory = [];
        this.ELEMENT_DATA1 = [];
        this.ControlStoreTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA1);
        this.testStoreDataCount = 0;
        this.selection1 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
        this.selselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
        this.uncheckedItems = [];
        this.freeze_compute = false;
        this.ELEMENT_DATA2 = [];
        this.testAvailabilityDataCount = 0;
        this.displayedColumnsControlStore = [
            'select',
            'test_storeno',
            'control_mapped',
            'test_storedetails',
            'similar_value',
            'corr_value',
            'store_segment',
            'correlation',
            // 'avg_duration',
            // 'act_perform',
            'others'
        ];
        this.displayedColumnsControlStoreDEMO = [
            'select',
            'test_storeno',
            'control_mapped',
            // 'test_storedetails',
            'similar_value',
            'corr_value',
            // 'store_segment',
            'correlation',
            // 'avg_duration',
            // 'act_perform',
            'others'
        ];
        this.confGrid = [
            'select',
            'test_storeno',
            'control_mapped',
            'test_storedetails',
            'similar_value',
            'corr_value',
            'store_segment',
            'correlation',
            // 'avg_duration',
            // 'act_perform',
            'others'
        ];
        this.displayedColumnsTestStore = [
            'select',
            'test_name',
            // 'status',
            'details',
            'test_window',
            'Created',
            'Modified'
        ];
        this.tableName = '';
        this.isTableData = false;
        this.shelf_dog_poptestmean = '';
        this.shelf_dog_pop = '';
        this.shelf_dog_popstd = '';
        this.shelf_dog_testdev = '';
        this.breakeven_list = 0;
        this.isDateValid = true;
        this.recomputeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.initiateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.comprasionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.saveasDraft = false;
        this.seriesData = [];
        this.categories = [];
        this.isinSqFt = '';
        this.uploadMessage = '';
        this.uploadedData = [];
        this.uploaded = false;
        this.uploadSelectedTestStores = [];
        this.hideIcon = [false];
        this.control = 'control';
        this.tempsortDirection = '';
        this.isRTMImpactTest = false;
        this.uploadedControl = false;
        this.controlStorePoolData = [];
        this.uploadMessageControl = '';
        this.statusFail = false;
        this.statusFailPool = false;
        this.searchFilter = false;
    }
    ControlStoreMappingComponent.prototype.drop = function (event) {
        console.log('drop event fired');
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["moveItemInArray"])(this.displayedColumnsControlStore, event.previousIndex, event.currentIndex);
    };
    ControlStoreMappingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('test-type') === 'RTM Impact Test') {
            this.controlStoreMessage = 'Note: Each test store will be mapped to mutiple control stores based on the input provided in this field.';
        }
        else {
            this.controlStoreMessage = 'Note: Each test store will only be mapped to one control store. Control store aggregation not available for this test.';
        }
        var componentDetails = this.commonservice.getCurrentComponentSubject();
        this.currentComponent = componentDetails.currentComponent;
        this.data = componentDetails.data;
        console.log(componentDetails.currentComponent, this.data, 'control store component');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.data.is_finalize) && this.data.is_finalize) {
            localStorage.setItem('testname', this.data.test_name);
            this.router.navigate(['./analyseImpact']);
            return;
        }
        console.log(this.data['control_stores']);
        if (this.data.hasOwnProperty('control_stores') && !Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.data['control_stores'])) {
            this.defaultChecked = this.data['control_stores'];
            this.control_pertest = this.data['required_control_stores'];
        }
        sessionStorage.setItem('control_feature', this.defaultChecked);
        if (componentDetails.currentComponent === 5) {
            var tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
            this.tipstoParent(tips);
            this.showControlStores = true;
            this.identifyControlStores();
            this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
                module: 'CREATE_TEST',
                show: true
            });
            this.globalService.publish('SHOW_HIDE_INITIATE_BUTTON', {
                module: 'CONTROL_STORES_SUMMARY',
                enable: true
            });
        }
        this.testId = localStorage.getItem('testid');
        if (this.data === undefined || this.data === 'undefined') {
            var test_id = localStorage.getItem('testid');
            this.wizard2service.GetSelectedStores(test_id).subscribe(function (apiresponse) {
                _this.targetVariableValue = apiresponse.data.target_var;
                var data = [];
                _this.selectedBanner = apiresponse.data.banners.replace(/'/g, '');
                _this.selectedBanner = _this.selectedBanner.substring(1, _this.selectedBanner.length - 1);
                _this.selectedBanner = _this.selectedBanner.split(',');
                for (var i = 0; i < _this.selectedBanner.length; i++) {
                    _this.selectedBanner[i] = _this.selectedBanner[i].trim();
                }
                _this.selectedSegments = apiresponse.data.store_grid.replace(/'/g, '');
                _this.selectedSegments = _this.selectedSegments.substring(1, _this.selectedSegments.length - 1);
                _this.selectedSegments = _this.selectedSegments.split(',');
                for (var i = 0; i < _this.selectedSegments.length; i++) {
                    _this.selectedSegments[i] = _this.selectedSegments[i].trim();
                }
                _this.selectedStoreSegment = apiresponse.data.store_segment.replace(/'/g, '');
                _this.selectedStoreSegment = _this.selectedStoreSegment.substring(1, _this.selectedStoreSegment.length - 1);
                _this.selectedStoreSegment = _this.selectedStoreSegment.split(',');
                for (var i = 0; i < _this.selectedStoreSegment.length; i++) {
                    _this.selectedStoreSegment[i] = _this.selectedStoreSegment[i].trim();
                }
                _this.selectedTerritory = apiresponse.data.territory_name.replace(/'/g, '');
                _this.selectedTerritory = _this.selectedTerritory.substring(1, _this.selectedTerritory.length - 1);
                _this.selectedTerritory = _this.selectedTerritory.split(',');
                for (var i = 0; i < _this.selectedTerritory.length; i++) {
                    _this.selectedTerritory[i] = _this.selectedTerritory[i].trim();
                }
                _this.selectedCategory = apiresponse.data.category_name.replace(/'/g, '');
                _this.selectedCategory = _this.selectedCategory.substring(1, _this.selectedCategory.length - 1);
                _this.selectedCategory = _this.selectedCategory.split(',');
                for (var i = 0; i < _this.selectedCategory.length; i++) {
                    if (_this.selectedCategory[i] !== '') {
                        _this.selectedCategory[i] = _this.selectedCategory[i].trim();
                    }
                    else {
                        _this.selectedCategory.splice(i, 1);
                    }
                }
                console.log(_this.selectedCategory, 'selected Category');
                _this.freeze_compute = apiresponse.data['freeze_compute'];
            });
        }
        else {
            this.selectedBanner = this.data.banner;
            this.selectedSegments = this.data.store_grid;
            this.selectedStoreSegment = this.data.segment;
            this.selectedTerritory = this.data.territory;
            this.selectedCategory = this.data.category;
            if (this.data.test_type === 'RTM Impact Test') {
                this.isRTMImpactTest = true;
            }
        }
        this.userRegion = sessionStorage.getItem('region');
        this.testApplicabilityFields = config[this.userRegion].fields;
        this.tableName = config[this.userRegion];
        this.columnHeader1 = {
            select_csm: 'Select',
            test_storeno: this.tableName.test_store_id,
            control_mapped: this.testApplicabilityFields[0].banner,
            test_storedetails: this.testApplicabilityFields[1].segment,
            similar_value: this.tableName.control_store_id,
            corr_value: this.testApplicabilityFields[0].banner,
            store_segment: this.testApplicabilityFields[1].segment,
            correlation: 'Sales Correlation',
            others: 'Similarity Value'
        };
        this.columnHeaderDEMO = {
            select_csm: 'Select',
            test_storeno: this.tableName.test_store_id,
            control_mapped: this.testApplicabilityFields[0].banner,
            similar_value: this.tableName.control_store_id,
            corr_value: this.testApplicabilityFields[0].banner,
            correlation: 'Sales Correlation',
            others: 'Similarity Value'
        };
        if (this.data.test_type === 'RTM Impact Test') {
            delete this.columnHeaderDEMO['select_csm'];
        }
        ;
        this.currencySymbol = config[this.userRegion]['currency'];
        this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
        console.log(this.tableName, 'TableName changes ');
        this.selectedMatchingCriteria();
        this.eanbleGenerate();
        this.generateSubscrption = this.globalService.subscribe('SHOW_CONTROL_STORES', function (obj) {
            if (obj.module === 'CREATE_TEST') {
                if (obj.enable) {
                    var tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
                    _this.tipstoParent(tips);
                }
                if (obj.method === 'SUGGESTED_BY_TOOL') {
                    _this.showControlStores = obj.enable;
                    _this.controlStoreView = false;
                    _this.identifyControlStores();
                }
                else {
                    var uploadedData = void 0;
                    var checkedData = sessionStorage.getItem('control_feature');
                    if (checkedData === '2') {
                        uploadedData = _this.uploadedData;
                    }
                    else if (checkedData === '3') {
                        uploadedData = _this.uploadeControlData;
                    }
                    if (uploadedData.length > 0) {
                        _this.showControlStores = obj.enable;
                        _this.controlStoreView = false;
                        _this.tableConstructControl(uploadedData, sessionStorage.getItem('region'));
                    }
                    else {
                        _this.toastr.warning('There is no Data to generate control stores');
                    }
                }
            }
        });
        var hideRecompute = false;
        this.comprasionSubscription = this.globalService.subscribe('CONTROL_STORES_VIEW', function (obj) {
            if (obj.module === 'CREATE_TEST') {
                if (obj.view === 'Control_Store') {
                    _this.controlStoreView = false;
                    hideRecompute = !_this.controlStoreView;
                }
                else {
                    _this.controlStoreView = true;
                    hideRecompute = !_this.controlStoreView;
                    // localStorage.setItem('saveOneTime')
                    _this.saveControlStore(_this.currentComponent, false);
                    _this.test_analysis_result(false);
                }
                var tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
                _this.tipstoParent(tips);
                _this.showControlStores = true;
                _this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
                    module: 'CREATE_TEST',
                    show: hideRecompute
                });
                console.log(_this.controlStoreView, 'controlstore');
            }
        });
        this.globalService.publish('ERROR_VALIDATION', {
            valid: true
        });
        this.ControlStoreTable.paginator = this.paginator;
        console.log(this.ControlStoreTable.paginator, 'check pagination');
        this.recomputeSubscription = this.globalService.subscribe('CALL_RECOMPUTE_METHOD', function (obj) {
            if (obj.module === 'CREATE_TEST') {
                _this.Recompute();
            }
        });
        this.globalService.subscribe('HIDE_CONTROL_STORES', function (obj) {
            if (obj.module === 'CREATE_TEST') {
                if (obj.enable) {
                    var tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
                    _this.tipstoParent(tips);
                }
                _this.showControlStores = obj.enable;
                _this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
                    module: 'CREATE_TEST',
                    show: false,
                    initiateButton: false
                });
            }
        });
        this.initiateSubscription = this.globalService.subscribe('MOVE_NEXT_CONTROL_STORES', function (obj) {
            console.log(obj.currentComponent, 'currentComponent');
            if (obj.module === 'CREATE_TEST' && (obj.currentComponent === 3 || obj.currentComponent === 4)) {
                //this.validateDropDowns();
                _this.saveasDraft = obj.saveDraft;
                if (!_this.saveasDraft) {
                    _this.test_analysis_result(obj.initate);
                }
                _this.saveControlStore(obj.currentComponent, true);
            }
        });
        if (this.userRegion === 'DEMO') {
            this.displayedColumnsControlStore = this.displayedColumnsControlStoreDEMO;
            this.columnHeader1 = this.columnHeaderDEMO;
        }
    };
    ControlStoreMappingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ControlStoreTable.paginator = this.paginator;
        var tips = ['The user can either choose the option for the tool to recommend the control stores based on the matching features or can manually upload the test-control stores in the provided excel template or can manually upload just the control store pool in the provided excel template.', 'Note: For RTM Impact Test, Control Stores will be only from store population with Customer Status	"Holdout Store" or "Not on call Cycle" unless the user upload control store pool.', 'The user can also select the number of control stores that he wants the tool to suggest for each test store', 'A higher sales correlation between a test store and a control store indicates a strong relationship between the weekly sales', 'Similarity measure between a test store and a control store indicates how well a test store resembles the control store'];
        setTimeout(function () {
            _this.tipstoParent(tips);
        });
    };
    ControlStoreMappingComponent.prototype.tipstoParent = function (data) {
        console.log(data, 'data');
        this.tipsData.emit(data);
    };
    ControlStoreMappingComponent.prototype.selectedMatchingCriteria = function () {
        var netherLandData = ['Customer Group', 'Territory', 'Touchability Score'];
        this.matchingCriteria = netherLandData;
        this.selectedFeaturescount = this.matchingCriteria.length;
    };
    ControlStoreMappingComponent.prototype.identifyControlStores = function () {
        var _this = this;
        var test_id = [];
        test_id.push(localStorage.getItem('testid'));
        this.wizard2service.GetStores_list(test_id).subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok' && apiresponse.data !== '') {
                for (var i = apiresponse.data.length - 1; i >= 0; i--) {
                    var record_date = void 0;
                    if (apiresponse.data[i].records.length === 1) {
                        record_date = JSON.parse(apiresponse.data[i].records[0].record_value);
                    }
                    else {
                        for (var j = 0; j < apiresponse.data[i].records.length; j++) {
                            if (apiresponse.data[i].records[j].stage_id === 1) {
                                record_date = JSON.parse(apiresponse.data[i].records[j].record_value);
                            }
                        }
                    }
                    var temp = [];
                    _this.SelectedTestStores = [];
                    console.log(record_date);
                    for (var i = record_date['selectedteststore'].length - 1; i >= 0; i--) {
                        _this.SelectedTestStores.push(record_date['selectedteststore'][i]);
                    }
                }
                var target_variable = localStorage.getItem('targetvariable');
                if (Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(target_variable)) {
                    target_variable = _this.data.target_variable;
                }
                var data = {
                    teststores: _this.SelectedTestStores,
                    target_variable: target_variable,
                    test_id: localStorage.getItem('testid'),
                    banners: _this.selectedBanner,
                    segments: _this.selectedSegments,
                    store_segments: _this.selectedStoreSegment,
                    territories: _this.selectedTerritory,
                    categories: _this.selectedCategory,
                    reqcontrolstores: _this.control_pertest,
                    prewindow_start: _this.data.pretest_startdt,
                    prewindow_end: _this.data.pretest_enddt,
                    postwindow_start: _this.data.testwin_startdt,
                    postwindow_end: _this.data.testwin_enddt,
                    test_type: _this.data.test_type
                };
                if (_this.defaultChecked === '3') {
                    data['control_store_pool'] = _this.controlStorePoolData;
                }
                else {
                    data['control_store_pool'] = [];
                }
                var containSavedData = false;
                if (apiresponse.data.length === 1) {
                    if (apiresponse.data[0].records.length > 1) {
                        for (var j = 0; j < apiresponse.data[0].records.length; j++) {
                            if (apiresponse.data[0].records[j].stage_id === 2) {
                                if (apiresponse.data[0].records[j].stepindex === 5) {
                                    containSavedData = true;
                                }
                            }
                        }
                    }
                }
                console.log(data, 'Data values');
                if (containSavedData === false) {
                    _this.wizard2service.Identifyctrlstore(data).subscribe(function (apiresponse) {
                        _this.statusFailPool = false;
                        if (apiresponse.status === 'ok') {
                            if (_this.defaultChecked === '3') {
                                if (apiresponse.data.hasOwnProperty('finalcontrol_stores')) {
                                    _this.uploadeControlData = apiresponse.data.finalcontrol_stores;
                                    _this.uploadMessageControl = apiresponse.data.message;
                                    _this.uploadedControl = true;
                                    _this.eanbleGenerate();
                                }
                                else if (apiresponse.data.includes('No valid control stores satisfying the criteria to proceed further')) {
                                    _this.toastr.warning(apiresponse.data);
                                }
                            }
                            else {
                                _this.uploadedControl = false;
                                _this.tableConstructControl(apiresponse.data, sessionStorage.getItem('region'));
                            }
                        }
                        else if (apiresponse.data.includes('No valid control stores satisfying the criteria to proceed further')) {
                            if (_this.defaultChecked === '3') {
                                _this.uploadMessageControl = apiresponse.data;
                                _this.statusFailPool = true;
                            }
                            else {
                                _this.toastr.warning(apiresponse.data);
                            }
                        }
                    });
                }
                else {
                }
            }
        });
    };
    ControlStoreMappingComponent.prototype.test_analysis_result = function (initate) {
        var _this = this;
        var breakEvenlift;
        var preperiod_start = this.data.pretest_startdt;
        var preperiod_end = this.data.pretest_enddt;
        var postperiod_start = this.data.testwin_startdt;
        var postperiod_end = this.data.testwin_enddt;
        if (this.data.test_type !== 'RTM Impact Test') {
            this.breakeven_list = this.data.break_even_lift;
            breakEvenlift = JSON.stringify(JSON.parse(this.breakeven_list));
        }
        else {
            breakEvenlift = 0;
        }
        ;
        var selectedTargetVariable = this.data.target_variable;
        var test_id = this.data.test_id;
        var data = {
            test_id: test_id,
            preperiod_start: preperiod_start,
            preperiod_end: preperiod_end,
            postperiod_start: postperiod_start,
            postperiod_end: postperiod_end,
            mesmetric_name: selectedTargetVariable,
            break_even_lift: breakEvenlift,
        };
        this.testMeasureService.controlStoreMeasurementpost(data).subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok') {
                if (!initate && _this.showControlStores) {
                    setTimeout(function () {
                        _this.Validate();
                    }, 100);
                }
            }
            else if (apiresponse.status === 'not_ok') {
            }
        });
    };
    ControlStoreMappingComponent.prototype.sortprogramatic = function () {
        var srt;
        var showInitiate = false;
        var direction;
        if (this.tempsortDirection != '') {
            direction = this.tempsortDirection;
        }
        else {
            direction = 'asc';
        }
        srt = {
            active: 'test_storeno',
            direction: direction
        };
        console.log(srt, 'calling sort method');
        this.sortDatacontrolStore(srt);
        this.ControlStoreTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA1);
        this.ref.detectChanges();
        this.ControlStoreTable.paginator = this.paginator;
        if (this.ELEMENT_DATA1.length > 0) {
            this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
                module: 'CREATE_TEST',
                show: true
            });
            showInitiate = true;
        }
        this.globalService.publish('SHOW_HIDE_INITIATE_BUTTON', {
            module: 'CONTROL_STORES_SUMMARY',
            enable: showInitiate
        });
    };
    ControlStoreMappingComponent.prototype.hideOrShowColumns = function (data, index) {
        console.log('data', data, this.hideIcon[data]);
        if (this.hideIcon[data] === true) {
            this.hideIcon[data] = false;
        }
        else {
            this.hideIcon[data] = true;
        }
        if (data === 'select') {
            this.hideSelectColumns = !this.hideSelectColumns;
        }
        else if (data === 'test_storeno') {
            this.hideTestStorenoColumns = !this.hideTestStorenoColumns;
        }
        else if (data === 'control_mapped') {
            this.hideControlMappedColumns = !this.hideControlMappedColumns;
        }
        else if (data === 'test_storedetails') {
            this.hideTestStoreDetailsColumn = !this.hideTestStoreDetailsColumn;
        }
        else if (data === 'similar_value') {
            this.hideSimilarValueColumn = !this.hideSimilarValueColumn;
        }
        else if (data === 'corr_value') {
            this.hideCorrValueColumn = !this.hideCorrValueColumn;
        }
        else if (data === 'store_segment') {
            this.hideStoreSegmentColumns = !this.hideStoreSegmentColumns;
        }
        else if (data === 'correlation') {
            this.hideCorrelationColumns = !this.hideCorrelationColumns;
        }
        else if (data === 'others') {
            this.hideOthersColumns = !this.hideOthersColumns;
        }
    };
    ControlStoreMappingComponent.prototype.valueShown = function (data) {
        if (data === 'select') {
            return 'Select';
        }
        else if (data === 'test_storeno') {
            return this.tableName.test_store_id;
        }
        else if (data === 'control_mapped') {
            return this.testApplicabilityFields[0].banner;
        }
        else if (data === 'test_storedetails') {
            return this.testApplicabilityFields[1].segment;
        }
        else if (data === 'similar_value') {
            return this.tableName.control_store_id;
        }
        else if (data === 'corr_value') {
            return this.testApplicabilityFields[0].banner;
        }
        else if (data === 'store_segment') {
            return this.testApplicabilityFields[1].segment;
        }
        else if (data === 'correlation') {
            return 'Sales Correlation';
        }
        else if (data === 'others') {
            return 'Similarity Value';
        }
    };
    ControlStoreMappingComponent.prototype.sortDatacontrolStore = function (sort) {
        var data;
        if (!this.searchFilter) {
            data = this.ELEMENT_DATA1.slice();
        }
        else {
            data = this.ControlStoreTable.data.slice();
        }
        this.ControlStoreTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.ControlStoreTable.paginator = this.paginator;
        if (!sort.active || sort.direction === '') {
            this.ELEMENT_DATA1 = data;
            return;
        }
        this.tempsortDirection = sort.direction;
        var sortData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'test_storeno':
                    return compare_seletedstore(a.test_storeno, b.test_storeno, isAsc);
                case 'control_mapped':
                    return compare_seletedstore(a.control_mapped, b.control_mapped, isAsc);
                case 'test_storedetails':
                    return compare_seletedstore(a.test_storedetails, b.test_storedetails, isAsc);
                case 'similar_value':
                    return compare_seletedstore(a.similar_value, b.similar_value, isAsc);
                case 'corr_value':
                    return compare_seletedstore(a.corr_value, b.corr_value, isAsc);
                case 'store_segment':
                    return compare_seletedstore(a.store_segment, b.store_segment, isAsc);
                case 'others':
                    return compare_seletedstore(a.others, b.others, isAsc);
                default:
                    return 0;
            }
        });
        var filterData;
        if (this.searchFilter) {
            filterData = sortData;
        }
        else {
            filterData = sortData;
            this.ELEMENT_DATA1 = sortData;
        }
        this.ControlStoreTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](filterData);
        // this.ControlStoreTable.paginator = this.paginator;
    };
    ControlStoreMappingComponent.prototype.Recompute = function () {
        var _this = this;
        this.recomputeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.uncheckedItems = [];
        var mystres = this.selection1.selected;
        console.log('selected items', mystres);
        var temp_array = [];
        for (var i = 0; i <= mystres.length - 1; i++) {
            temp_array.push(mystres[i]['test_storeno']);
        }
        var tempPartIdArr = [];
        for (var i = 0; i <= mystres.length - 1; i++) {
            tempPartIdArr.push(mystres[i]['similar_value']);
        }
        if (this.controlstoredata.length === mystres.length) {
            this.toastr.warning('Please unselect the control store to recompute');
            return;
        }
        else {
            var uniqueIDList1_1 = [];
            temp_array.forEach(function (element) {
                if (!uniqueIDList1_1.includes(element)) {
                    uniqueIDList1_1.push(element);
                }
            });
            var storeIdFrmControlData = [];
            for (var a = 0; a < this.controlstoredata.length; a++) {
                storeIdFrmControlData.push(this.controlstoredata[a]['Test_store_' + this.tableName['partner_id']]);
            }
            var counts = {};
            for (var i = 0; i < storeIdFrmControlData.length; i++) {
                var num = storeIdFrmControlData[i];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
            var counts1 = {};
            for (var i = 0; i < temp_array.length; i++) {
                var num1 = temp_array[i];
                counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
            }
            for (var c = 0; c < uniqueIDList1_1.length; c++) {
                var value = uniqueIDList1_1[c];
                if (counts[value] > 1) {
                    if (counts1[value] != 1) {
                        this.toastr.warning('Please unselect the control store to recompute');
                        return;
                    }
                }
            }
            var showtoaster = this.getRecomputemessage(counts, counts1);
            if (showtoaster) {
                this.toastr.warning('Please unselect the control store to recompute');
                return;
            }
        }
        var newarr = [];
        var temp_checked = [];
        var temp_data = [];
        for (var k = 0; k < mystres.length; k++) {
            var data_1 = {
                test_store_id: mystres[k]['test_storeno'],
                control_str_id: mystres[k]['similar_value']
            };
            temp_data.push(data_1);
        }
        if (temp_data.length > 0) {
            for (var i = 0; i < this.controlstoredata.length; i++) {
                var isAvail = false;
                var arrayValue = [];
                arrayValue = temp_data.filter(function (x) { return x.test_store_id === _this.controlstoredata[i]['Test_store_' + _this.tableName['partner_id']]
                    && x.control_str_id === _this.controlstoredata[i][_this.tableName['partner_id']]; });
                if (arrayValue.length > 0) {
                    isAvail = true;
                }
                if (isAvail === true) {
                    this.controlstoredata[i].Checked_Flag = 1;
                }
                else {
                    this.controlstoredata[i].Checked_Flag = 0;
                    this.uncheckedItems.push(this.controlstoredata[i]);
                }
            }
        }
        else {
            for (var i = 0; i < this.controlstoredata.length; i++) {
                if (this.controlstoredata[i].Checked_Flag === 1) {
                    this.controlstoredata[i].Checked_Flag = 0;
                    this.uncheckedItems.push(this.controlstoredata[i]);
                }
                else {
                    this.uncheckedItems.push(this.controlstoredata[i]);
                }
            }
        }
        var target_variable = localStorage.getItem('targetvariable');
        if (Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(target_variable)) {
            target_variable = this.data.target_variable;
        }
        var data = {
            teststores: this.controlstoredata,
            target_variable: target_variable,
            banners: this.selectedBanner,
            segments: this.selectedSegments,
            store_segments: this.selectedStoreSegment,
            territories: this.selectedTerritory,
            reqcontrolstores: this.control_pertest,
            prewindow_start: this.data.pretest_startdt,
            prewindow_end: this.data.pretest_enddt,
            postwindow_start: this.data.testwin_startdt,
            postwindow_end: this.data.testwin_enddt
        };
        if (this.uncheckedItems.length > 0) {
            this.wizard2service.Recompute(data).subscribe(function (apiresponse) {
                if (apiresponse.status === 'ok') {
                    var recomputeResponse = JSON.parse(apiresponse.data);
                    for (var y = 0; y < recomputeResponse.length; y++) {
                        delete recomputeResponse[y].level_0;
                    }
                    _this.controlstoredata = recomputeResponse;
                    var controlstore = [];
                    for (var i = 0; i <= _this.controlstoredata.length - 1; i++) {
                        _this.controlstoredata[i][_this.tableName['partner_id']] = parseInt(_this.controlstoredata[i][_this.tableName['partner_id']]);
                        controlstore.push({
                            test_storeno: _this.controlstoredata[i]['Test_store_' + _this.tableName['partner_id']],
                            test_storedetails: _this.controlstoredata[i]['Test_store_' + _this.tableName['segment']],
                            control_mapped: _this.controlstoredata[i]['Test_store_' + _this.tableName['banner']],
                            select: _this.controlstoredata[i]['Test_store_' + _this.tableName['partner_id_name']],
                            similar_value: _this.controlstoredata[i][_this.tableName['partner_id']],
                            corr_value: _this.controlstoredata[i][_this.tableName['banner']],
                            store_segment: _this.controlstoredata[i][_this.tableName['segment']],
                            avg_duration: '1 Week',
                            act_perform: 'Activi1ty1',
                            others: _this.controlstoredata[i]['Similarity_Measure'],
                            correlation: _this.controlstoredata[i]['Correlation']
                        });
                    }
                    _this.ELEMENT_DATA1 = [];
                    _this.ELEMENT_DATA1 = controlstore;
                    _this.ControlStoreTable = _this.ELEMENT_DATA1;
                    _this.testStoreDataCount = _this.ELEMENT_DATA1.length;
                    _this.sortprogramatic();
                    var temp = [];
                    for (var i = 0; i < controlstore.length; i++) {
                        var isAvail = false;
                        for (var j = 0; j < _this.uncheckedItems.length; j++) {
                            if (_this.uncheckedItems[j][_this.tableName['partner_id']] === controlstore[i].similar_value && _this.uncheckedItems[j]['Test_store_' + _this.tableName['partner_id']] === controlstore[i].test_storeno) {
                                isAvail = true;
                            }
                        }
                        if (isAvail === false) {
                            temp.push(controlstore[i]);
                        }
                    }
                    _this.selection1 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, temp);
                }
            });
        }
        else {
            this.toastr.warning('Please unselect the control store to recompute');
        }
    };
    ControlStoreMappingComponent.prototype.getRecomputemessage = function (counts, counts1) {
        var totalData = [];
        var selectData = [];
        var showMessage = false;
        for (var t in counts) {
            totalData.push(counts[t]);
        }
        for (var selected in counts1) {
            selectData.push(counts1[selected]);
        }
        if (totalData.length === selectData.length) {
            showMessage = true;
            console.log('length are same');
            return showMessage;
        }
        else {
            showMessage = false;
            console.log('length are different');
            return showMessage;
        }
    };
    ControlStoreMappingComponent.prototype.ngOnDestroy = function () {
        this.globalService.publish('ENABLE_GENERATE_BUTTON', {
            module: 'SELECT_TEST_STORES',
            enable: false
        });
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.generateSubscrption)) {
            this.generateSubscrption.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.recomputeSubscription)) {
            this.recomputeSubscription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.initiateSubscription)) {
            this.initiateSubscription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.comprasionSubscription)) {
            this.comprasionSubscription.unsubscribe();
        }
    };
    ControlStoreMappingComponent.prototype.format = function (date) {
        if (date != 0 && date != null && date != undefined) {
            var dd = moment__WEBPACK_IMPORTED_MODULE_6__(date * 1000).format('DD, MMM YYYY');
            var time = moment__WEBPACK_IMPORTED_MODULE_6__(date * 1000).format('hh:mm A');
            // return dd + ' ' + time;
            return dd;
        }
        else {
            return '-';
        }
    };
    ControlStoreMappingComponent.prototype.toYMD = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('DD, MMM YYYY');
    };
    ControlStoreMappingComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isTestAllSelected() ? 'select' : 'deselect') + " all";
        }
        // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.test_name + 1}`;
    };
    ControlStoreMappingComponent.prototype.isTestAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.SelectTestTable.data.length;
        return numSelected === numRows;
    };
    ControlStoreMappingComponent.prototype.showValue = function (evt) {
        console.log(evt);
    };
    ControlStoreMappingComponent.prototype.Validate = function () {
        var _this = this;
        this.comprasionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        console.log(this.controlstoredata);
        this.isTableData = false;
        var mystres = this.selection1.selected;
        var temp_array = [];
        for (var i = 0; i <= mystres.length - 1; i++) {
            temp_array.push(mystres[i]['test_storeno']);
        }
        var uniqueIDList1 = [];
        temp_array.forEach(function (element) {
            if (!uniqueIDList1.includes(element)) {
                uniqueIDList1.push(element);
            }
        });
        var TestStoreID = [];
        for (var j = 0; j < this.controlstoredata.length; j++) {
            TestStoreID.push(this.controlstoredata[j]['Test_store_' + this.tableName['partner_id']]);
        }
        var uniqueIDList = [];
        TestStoreID.forEach(function (element) {
            if (!uniqueIDList.includes(element)) {
                uniqueIDList.push(element);
            }
        });
        if (uniqueIDList1.length === uniqueIDList.length) {
            var storeIdFrmControlData = [];
            for (var a = 0; a < this.controlstoredata.length; a++) {
                storeIdFrmControlData.push(this.controlstoredata[a]['Test_store_' + this.tableName['partner_id']]);
            }
            var counts = {};
            for (var i = 0; i < storeIdFrmControlData.length; i++) {
                var num = storeIdFrmControlData[i];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
            var counts1 = {};
            for (var i = 0; i < temp_array.length; i++) {
                var num1 = temp_array[i];
                counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
            }
            for (var c = 0; c < uniqueIDList1.length; c++) {
                var value = uniqueIDList1[c];
                if (counts[value] > 1) {
                    if (counts1[value] != 1) {
                        this.toastr.warning('Please select one control store for each test store');
                        return;
                    }
                }
            }
            var mystress = this.selection1.selected;
            var tempPartIdArr = [];
            var newarr = [];
            for (var i = 0; i <= mystress.length - 1; i++) {
                tempPartIdArr.push(mystress[i]['similar_value']);
            }
            var temp_data = [];
            for (var k = 0; k < mystress.length; k++) {
                var data_2 = {
                    test_store_name: mystress[k]['test_storeno'],
                    control_str_name: mystress[k]['similar_value']
                };
                temp_data.push(data_2);
            }
            for (var i = 0; i < this.controlstoredata.length; i++) {
                var isAvail = false;
                for (var j = 0; j < temp_data.length; j++) {
                    if (this.controlstoredata[i]['Test_store_Customer_Number'] === temp_data[j].test_store_name) {
                        if (this.controlstoredata[i]['Customer_Number'] === temp_data[j].control_str_name) {
                            isAvail = true;
                        }
                    }
                }
                if (isAvail == true) {
                    this.controlstoredata[i].Checked_Flag = 1;
                    newarr.push(this.controlstoredata[i]);
                }
            }
            if (newarr.length > 0) {
                for (var j = 0; j < newarr.length; j++) {
                    newarr[j]['Customer_Number'] = newarr[j]['Customer_Number'];
                }
            }
            var comp_var = [];
            comp_var = ['Store_Size_Sq_Ft'];
            var target_variable = localStorage.getItem('targetvariable');
            if (Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(target_variable)) {
                target_variable = this.data.target_variable;
            }
            var data = {
                teststores: newarr,
                compare_variables: comp_var,
                target_variable: target_variable,
                prewindow_start: this.data.pretest_startdt,
                prewindow_end: this.data.pretest_enddt,
                postwindow_start: this.data.testwin_startdt,
                postwindow_end: this.data.testwin_enddt
            };
            setTimeout(function () {
                _this.getCorrelation();
            }, 100);
            this.getControlsummaryTable(data);
        }
        else {
            this.toastr.warning('Please select one control store for each test store');
        }
    };
    ControlStoreMappingComponent.prototype.roundOffWithComma = function (val) {
        var tempVal = Math.round(val);
        return tempVal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    ControlStoreMappingComponent.prototype.roundOff = function (val) {
        var tempVal = Math.round(val);
        return tempVal;
    };
    ControlStoreMappingComponent.prototype.saveControlStore = function (currentComponent, initate) {
        var _this = this;
        var mystres = this.selection1.selected;
        var temp_array = [];
        for (var i = 0; i <= mystres.length - 1; i++) {
            temp_array.push(mystres[i]['test_storeno']);
        }
        var uniqueIDList1 = [];
        temp_array.forEach(function (element) {
            if (!uniqueIDList1.includes(element)) {
                uniqueIDList1.push(element);
            }
        });
        var TestStoreID = [];
        for (var j = 0; j < this.controlstoredata.length; j++) {
            TestStoreID.push(this.controlstoredata[j]['Test_store_' + this.tableName['partner_id']]);
        }
        var uniqueIDList = [];
        TestStoreID.forEach(function (element) {
            if (!uniqueIDList.includes(element)) {
                uniqueIDList.push(element);
            }
        });
        if (uniqueIDList1.length === uniqueIDList.length) {
            var storeIdFrmControlData = [];
            for (var a = 0; a < this.controlstoredata.length; a++) {
                storeIdFrmControlData.push(this.controlstoredata[a]['Test_store_' + this.tableName['partner_id']]);
            }
            var counts = {};
            for (var i = 0; i < storeIdFrmControlData.length; i++) {
                var num = storeIdFrmControlData[i];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
            var counts1 = {};
            for (var i = 0; i < temp_array.length; i++) {
                var num1 = temp_array[i];
                counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
            }
            if (this.data.test_type !== 'RTM Impact Test') {
                for (var c = 0; c < uniqueIDList1.length; c++) {
                    var value = uniqueIDList1[c];
                    if (counts[value] > 1) {
                        if (counts1[value] != 1) {
                            this.toastr.warning('Please select one control store for each test store');
                            return;
                        }
                    }
                }
            }
            var mystress = this.selection1.selected;
            var tempPartIdArr = [];
            var newarr = [];
            for (var i = 0; i <= mystress.length - 1; i++) {
                tempPartIdArr.push(mystress[i]['similar_value']);
            }
            var temp_data = [];
            for (var k = 0; k < mystres.length; k++) {
                var data = {
                    test_store_id: mystres[k]['test_storeno'],
                    control_str_id: mystres[k]['similar_value']
                };
                temp_data.push(data);
            }
            console.log(temp_data, 'selected data');
            for (var i = 0; i < this.controlstoredata.length; i++) {
                var isAvail = false;
                var arrayValue = [];
                arrayValue = temp_data.filter(function (x) { return x.test_store_id === _this.controlstoredata[i]['Test_store_' + _this.tableName['partner_id']]
                    && x.control_str_id === _this.controlstoredata[i][_this.tableName['partner_id']]; });
                if (arrayValue.length > 0) {
                    isAvail = true;
                }
                if (isAvail == true) {
                    this.controlstoredata[i].Checked_Flag = 1;
                    newarr.push(this.controlstoredata[i]);
                }
                else {
                    this.controlstoredata[i].Checked_Flag = 0;
                    newarr.push(this.controlstoredata[i]);
                }
            }
            var features = void 0;
            features = [];
            var comp_var = [];
            comp_var = ['Baycount_Total'];
            var stringify_data = {
                compare_variables: comp_var,
                store_features: features,
                teststores: newarr
            };
            var TestId = '';
            var temp = JSON.parse(localStorage.getItem('testid'));
            TestId = temp;
            localStorage.setItem('testid', TestId);
            localStorage.setItem('stepper5', 'true');
            var frezzeData = 0;
            var isFinalize = 0;
            var stepIndex = 5;
            console.log(this.controlStoreView || initate, initate, this.controlStoreView);
            if (!this.saveasDraft && initate) {
                frezzeData = 1;
                isFinalize = 1;
            }
            if (!this.showControlStores) {
                stepIndex = 4;
            }
            var reqData = {
                stage_id: 2,
                stepindex: stepIndex,
                stringified_data: JSON.stringify(stringify_data),
                w_stringified_data: stringify_data,
                trial: JSON.parse(TestId),
                freeze_compute: frezzeData,
                is_finalize: isFinalize,
                controlStores: this.defaultChecked,
                requiredControlStores: this.control_pertest,
            };
            this.wizard2service.setSavedrecords(null);
            this.wizard2service.setSavedselected(null);
            this.wizard2service.controlMatchDataSave(reqData).subscribe(function (apiresponse) {
                if (apiresponse.status === 'ok') {
                    // this.wizard2service.getcontrolStoreData(localStorage.getItem('testid'))
                    if (_this.showControlStores) {
                        if (apiresponse.data[0].records.length === 3) {
                            for (var k = 0; k < apiresponse.data[0].records.length; k++) {
                                if (apiresponse.data[0].records[k].stepper_id === 6) {
                                    console.log(apiresponse.data[0].records[k]);
                                    var temp_1 = JSON.parse(apiresponse.data[0].records[k].record_value);
                                    var predata = {
                                        pre_end: temp_1.preperiod_end,
                                        pre_start: temp_1.preperiod_start,
                                        testwin_end: temp_1.postperiod_end,
                                        testwin_start: temp_1.postperiod_start,
                                        test_id: temp_1.test_id,
                                        target_variable: temp_1.mesmetric_name,
                                        break_even_lift: temp_1.break_even_lift
                                    };
                                    var testmeasurePreDetails = JSON.stringify(predata);
                                    localStorage.setItem('testmeasure_pre_details', testmeasurePreDetails);
                                    _this.toastr.success('Control Store Saved Sucessfully');
                                    localStorage.removeItem('from_test_store');
                                }
                            }
                        }
                        else {
                            var predata = {
                                pre_end: apiresponse.data[0].pre_end,
                                pre_start: apiresponse.data[0].pre_start,
                                testwin_end: apiresponse.data[0].testwin_end,
                                testwin_start: apiresponse.data[0].testwin_start,
                                test_id: apiresponse.data[0].test_id,
                                target_variable: apiresponse.data[0].target_var,
                                break_even_lift: apiresponse.data[0].break_even_lift
                            };
                            var testmeasurePreDetails = JSON.stringify(predata);
                            localStorage.setItem('testmeasure_pre_details', testmeasurePreDetails);
                            _this.toastr.success('Control Store Saved Sucessfully');
                            localStorage.removeItem('from_test_store');
                        }
                        if ((!_this.saveasDraft && !_this.controlStoreView) || (!_this.saveasDraft && initate)) {
                            localStorage.setItem('testname', apiresponse.data[0].test_name);
                            _this.router.navigate(['./analyseImpact']);
                        }
                    }
                }
            });
        }
        else {
            this.toastr.warning('Please select one control store for each test store');
        }
    };
    ControlStoreMappingComponent.prototype.getCorrelation = function () {
        var _this = this;
        var data = {
            test_id: this.testId,
            categories: this.selectedCategory,
            test_control: this.controlstoredata,
        };
        // reseting every time when its called
        this.seriesData = [];
        this.categories = [];
        this.wizard2service.GetControlSummaryCorrelation(data).subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok') {
                var avgTest = apiresponse.data.metrics_dict['Avg_Similarity'];
                _this.avg_test_control = (avgTest * 100).toFixed();
                var salesTest = apiresponse.data.metrics_dict['Avg_Correlation'];
                _this.sales_test_control = (salesTest * 100).toFixed();
                var data_3 = JSON.parse(apiresponse.data.combined_avg);
                var _loop_1 = function (i) {
                    var obj = { name: '', color: '' };
                    _this.categories.push(data_3[i]['Week'].toString());
                    if (_this.seriesData.length === 0) {
                        obj.name = data_3[i]['Group'];
                        if (data_3[i]['Group'] === 'Test') {
                            obj.color = '#d40061';
                        }
                        else {
                            obj.color = '#ec9b02';
                        }
                        var datValue = [];
                        datValue.push(data_3[i]['Average_' + _this.targetVariableValue]);
                        obj['data'] = datValue;
                        _this.seriesData.push(obj);
                    }
                    else {
                        var index = _this.seriesData.findIndex(function (x) { return x.name === data_3[i]['Group']; });
                        if (index === -1) {
                            obj.name = data_3[i]['Group'];
                            if (data_3[i]['Group'] === 'Test') {
                                obj.color = '#d40061';
                            }
                            else {
                                obj.color = '#ec9b02';
                            }
                            var datValue = [];
                            datValue.push(data_3[i]['Average_' + _this.targetVariableValue]);
                            obj['data'] = datValue;
                            _this.seriesData.push(obj);
                        }
                        else {
                            _this.seriesData[index].data.push(data_3[i]['Average_' + _this.targetVariableValue]);
                        }
                    }
                };
                for (var i = 0; i < data_3.length; i++) {
                    _loop_1(i);
                }
                var uniqueData = Array.from(new Set(_this.categories));
                _this.categories = uniqueData;
                console.log(_this.seriesData, _this.categories, 'chart Datas');
                _this.generateHighCharts(_this.seriesData, _this.categories);
            }
        });
    };
    ControlStoreMappingComponent.prototype.generateHighCharts = function (seriesData, category) {
        var options = {
            chart: {
                type: 'areaspline',
                height: 400,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                y: 0,
                padding: 0,
                itemMarginTop: 0,
                itemMarginBottom: 0,
                itemStyle: {
                    fontSize: '10px'
                }
            },
            xAxis: {
                categories: category,
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            yAxis: {
                title: {
                    text: 'Standardised sales'
                },
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ''
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.1
                }
            },
            series: seriesData
        };
        highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('control_charts', options);
    };
    ControlStoreMappingComponent.prototype.getControlsummaryTable = function (data) {
        var _this = this;
        this.wizard2service.GetControlSummary(data).subscribe(function (apiresponse) {
            if (apiresponse.status === 'ok') {
                _this.isTableData = true;
                if (apiresponse['data']['variable_metric'].hasOwnProperty('Store_Size_Sq_Ft')) {
                    _this.csv_pop = apiresponse['data']['variable_metric']['Store_Size_Sq_Ft']['Control Mean'];
                    _this.csv_poptestmean = apiresponse['data']['variable_metric']['Store_Size_Sq_Ft']['Test Mean'];
                }
                if (apiresponse['data']['variable_metric'].hasOwnProperty('RSV')) {
                    _this.out_pop = apiresponse['data']['variable_metric']['RSV']['Control Mean'];
                    _this.out_poptestmean = apiresponse['data']['variable_metric']['RSV']['Test Mean'];
                }
            }
        });
    };
    ControlStoreMappingComponent.prototype.openDailog = function (templateRef) {
        this.dialogRef = this.dialog.open(templateRef);
    };
    ControlStoreMappingComponent.prototype.closeDailog = function () {
        this.dialogRef.close();
    };
    ControlStoreMappingComponent.prototype.FilterLoadSavedTest = function (event) {
        console.log('filerr Dfska');
        var val = event.toLowerCase();
        this.tempFilter = this.ELEMENT_DATA1;
        if (event === '') {
            this.searchFilter = false;
        }
        else {
            this.searchFilter = true;
        }
        var temp;
        temp = this.tempFilter.filter(function (d) {
            if (d.others != null) {
                return (d.test_storeno
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    d.control_mapped
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.similar_value
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.corr_value
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.store_segment
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.others
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.correlation
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    !val);
            }
        });
        if (this.tempFilter.length > 0) {
            this.testStoreDataCount = temp.length;
            this.ControlStoreTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](temp);
        }
        else {
            this.testStoreDataCount = this.ELEMENT_DATA1.length;
            this.ControlStoreTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA1);
        }
        // this.ControlStoreTable = temp;
    };
    ControlStoreMappingComponent.prototype.convertPercentage = function (value) {
        if (value !== undefined) {
            var convertedValue = (1 - value) * 100;
            return Math.floor(convertedValue) + '%';
        }
        else {
            return '-';
        }
    };
    ControlStoreMappingComponent.prototype.downloadTemplate = function (value) {
        var selecteTestStores;
        var keyName = '';
        this.uploadSelectedTestStores = [];
        if (this.data !== undefined && this.data.hasOwnProperty('selectedteststore')) {
            selecteTestStores = this.data.selectedteststore;
            for (var i = 0; i < selecteTestStores.length; i++) {
                this.uploadSelectedTestStores.push(selecteTestStores[i][this.tableName['partner_id_name']]);
            }
        }
        var data = {};
        var filename = 'TestSummaryReport';
        if (value === 'testControlPairs') {
            data['testStores'] = this.uploadSelectedTestStores;
            data['templateType'] = 'TestControlPairs';
            filename = 'Test_Control_Pairs_Upload_Template_' + this.userRegion;
        }
        else {
            data['testStores'] = this.SelectedTestStores;
            data['templateType'] = 'ControlPairs';
            filename = 'Control_Pairs_Pool_Upload_Template_' + this.userRegion;
        }
        this.wizard2service.downladControlStoreTemplate(data).subscribe(function (response) {
            var blob = new Blob([response], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            var downloadURL = window.URL.createObjectURL(response);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = filename + '.xlsx';
            link.click();
        });
    };
    ControlStoreMappingComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        console.log('files-> ', files.item(0));
        var file = files.item(0);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        console.log(formData, 'twovalues');
        formData.append('banner', this.selectedBanner);
        formData.append('store_segments', this.selectedStoreSegment);
        formData.append('segments', this.selectedSegments);
        formData.append('territories', this.selectedTerritory);
        formData.append('categories', this.selectedCategory);
        formData.append('target_variable', this.targetVariableValue);
        formData.append('test_id', this.testId);
        formData.append('prewindow_start', this.data.pretest_startdt);
        formData.append('prewindow_end', this.data.pretest_enddt);
        formData.append('postwindow_start', this.data.testwin_startdt);
        formData.append('postwindow_end', this.data.testwin_enddt);
        this.wizard2service.uploadControlStore(formData).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.uploadMessage = response.data.message;
                _this.uploadedData = response.data.control_pairs;
                _this.uploaded = true;
                _this.statusFail = false;
                _this.eanbleGenerate();
            }
            else if (response.status === 'not_ok') {
                _this.uploaded = false;
                _this.statusFail = true;
                _this.uploadMessage = response.data;
                // this.toastr.warning(response.data);
            }
        }, function (error) {
            _this.toastr.error('Something went wrong while upload please try again later');
        });
    };
    ControlStoreMappingComponent.prototype.cancelUpload = function () {
        this.uploaded = false;
        this.uploadedData = [];
        this.eanbleGenerate();
    };
    ControlStoreMappingComponent.prototype.contineUpload = function () {
        if (this.uploadedData.length !== 0) {
            this.globalService.publish('SHOW_CONTROL_STORES', {
                module: 'CREATE_TEST',
                method: 'FILE_UPLOAD',
                enable: true
            });
            // this.tableConstruct(this.uploadedData)
        }
    };
    ControlStoreMappingComponent.prototype.tableConstructControl = function (data, region) {
        var controlstore = [];
        if (data !== '' && data.length > 0) {
            this.controlstoredata = JSON.parse(data);
            for (var i = 0; i <= this.controlstoredata.length - 1; i++) {
                this.controlstoredata[i][this.tableName['partner_id']] = JSON.parse(this.controlstoredata[i][this.tableName['partner_id']]);
                controlstore.push({
                    test_storeno: this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']],
                    test_storedetails: this.controlstoredata[i]['Test_store_' + this.tableName['segment']],
                    control_mapped: this.controlstoredata[i]['Test_store_' + this.tableName['banner']],
                    select: this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']],
                    similar_value: this.controlstoredata[i][this.tableName['partner_id_name']],
                    corr_value: this.controlstoredata[i][this.tableName['banner']],
                    store_segment: this.controlstoredata[i][this.tableName['segment']],
                    avg_duration: '1 Week',
                    act_perform: 'Activi1ty1',
                    others: this.controlstoredata[i]['Similarity_Measure'],
                    correlation: this.controlstoredata[i]['Correlation']
                });
            }
            this.ELEMENT_DATA1 = [];
            this.ELEMENT_DATA1 = controlstore;
            this.ControlStoreTable = this.ELEMENT_DATA1;
            this.testStoreDataCount = this.ELEMENT_DATA1.length;
            this.ControlStoreTable.paginator = this.paginator;
        }
        var temp = [];
        for (var i = 0; i < controlstore.length; i++) {
            temp.push(controlstore[i]);
        }
        this.selection1 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, temp);
        this.sortprogramatic();
        // this.saveDatastep4();
    };
    ControlStoreMappingComponent.prototype.handleFileInputControlStore = function (files) {
        var _this = this;
        console.log('files-> ', files.item(0));
        var file = files.item(0);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        formData.append('test_id', this.testId);
        this.wizard2service.uploadControlStorePool(formData).subscribe(function (response) {
            if (response.status === 'ok') {
                var data = JSON.parse(response.data);
                data.forEach(function (x) {
                    _this.controlStorePoolData.push(x['Control_store_Customer_Number']);
                });
                _this.identifyControlStores();
            }
            else {
                _this.uploadedControl = false;
                _this.toastr.warning(response.data);
            }
        }, function (error) {
            _this.uploadedControl = false;
            _this.toastr.error('Something went wrong while upload please try again later');
        });
    };
    ControlStoreMappingComponent.prototype.cancelUploadControl = function () {
        this.uploadedControl = false;
        this.uploadeControlData = [];
        this.eanbleGenerate();
    };
    ControlStoreMappingComponent.prototype.contineUploadControl = function () {
        if (this.uploadeControlData.length !== 0) {
            this.globalService.publish('SHOW_CONTROL_STORES', {
                module: 'CREATE_TEST',
                method: 'FILE_UPLOAD',
                enable: true
            });
            // this.tableConstruct(this.uploadedData)
        }
    };
    ControlStoreMappingComponent.prototype.callChecked = function (event) {
        sessionStorage.setItem('control_feature', event);
        this.resetData(event);
        this.eanbleGenerate();
    };
    ControlStoreMappingComponent.prototype.eanbleGenerate = function () {
        console.log('calling Common Generate enable');
        var disableButton = false;
        var dataValue = [];
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.uploadedData) && this.uploadedData.length > 0) {
            dataValue = this.uploadedData;
        }
        else if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.uploadeControlData) && this.uploadeControlData.length > 0) {
            dataValue = this.uploadeControlData;
        }
        if ((this.defaultChecked === '2' || this.defaultChecked === '3') && dataValue.length === 0) {
            disableButton = true;
        }
        this.globalService.publish('ENABLE_GENERATE_BUTTON', {
            module: 'SELECT_TEST_STORES',
            enable: true,
            disable: disableButton
        });
    };
    ControlStoreMappingComponent.prototype.resetData = function (evenData) {
        this.uploadedData = [];
        this.uploadeControlData = [];
        this.statusFail = false;
        this.statusFailPool = false;
        this.uploaded = false;
        this.uploadedControl = false;
    };
    ControlStoreMappingComponent.ɵfac = function ControlStoreMappingComponent_Factory(t) { return new (t || ControlStoreMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_controlstore_service__WEBPACK_IMPORTED_MODULE_16__["ControlStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_15__["TestMeasureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"])); };
    ControlStoreMappingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ControlStoreMappingComponent, selectors: [["app-control-store-mapping"]], viewQuery: function ControlStoreMappingComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        } }, outputs: { moveNextStep: "moveNextStep", tipsData: "tipsData" }, decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "mat-card_content"], [1, "mat_heading"], ["name", "defaultChecked", 3, "ngModel", "ngModelChange"], ["value", "1"], ["class", "suggested_outer", 4, "ngIf"], [1, "row", "pt-3"], [1, "col-md-4", "col-sm-12", "col-lg-4"], [1, "form-group"], [1, "label_change"], ["type", "number", "name", "control_pertest", "min", "1", "onkeypress", "return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "font-style", "italic", "padding-left", "1rem", "font-size", "13px"], ["class", "margin_split_equally", 4, "ngIf"], [1, "suggested_outer"], [1, "mat_heading", 2, "font-size", "0.75rem!important", "font-family", "Mulish_bold!important"], [1, "content_alignment"], [4, "ngFor", "ngForOf"], [1, "margin_split_equally"], [1, "upload_container"], [1, "uplad_text1", "font_mulish_regular"], [1, "upload_text2", "font_mulish_bold", 2, "cursor", "pointer", 3, "click"], [3, "click", 4, "ngIf"], [1, "upload_text1", "font_mulish_regular", "font_color_fail"], [1, "upload_text1", "font_mulish_regular", "font_color"], [1, "upload_text3", "font_mulish_regular"], ["mat-button", "", 1, "button-color-enable", "font_size_button", 2, "margin-right", "1rem", 3, "click"], [3, "click"], ["mat-button", "", 1, "pl-2", "button-color-enabled-background", 2, "margin-top", "1rem"], ["type", "file", "id", "grade_csv", "accept", ".xlsx", "name", "selectTestStore", 2, "display", "none", 3, "change"], ["uploadFile", ""], ["uploadFileControlpool", ""], [3, "tableData", "columnHeader", "tableType", "stringSelectionControlStore", "showValueData", "checkboxLabelControlStoreData", "callSortData", "searchFilter"], ["style", "text-align:center", 4, "ngIf"], [2, "text-align", "center"], [1, "no_rec_found"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-lg-12"], ["id", "control_charts"], ["fxLayout", "row pt-3", "fxLayoutAlign", "space-between center"], ["fxFlex", "48", 1, "background_change"], [1, "col-md-3", "col-lg-3", "col-sm-3", "control_value", "text-center"], [1, "col-md-9", "col-lg-9", "col-sm-9", "control_text"], [1, "row", "mt-4"], [1, "table", "font_mulish_regular"], [1, "table_head_color"], [1, "border_style_left"], [1, "border_style_right"]], template: function ControlStoreMappingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ControlStoreMappingComponent_div_0_Template, 47, 6, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ControlStoreMappingComponent_div_2_Template, 6, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showControlStores);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showControlStores);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _shared_component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_22__["CommonTableComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultFlexDirective"]], styles: [".mat_heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  font-family: Mulish_bold;\n}\n\n.suggested_outer[_ngcontent-%COMP%] {\n  border: 1px solid #E5E5E5;\n  border-radius: 8px;\n  padding: 1.2rem;\n  margin-top: 1rem;\n}\n\n.content_alignment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.content_alignment[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background: #000091;\n  border-radius: 4px;\n  color: #ffff;\n  margin: 0.35rem;\n  font-size: 0.688rem;\n  font-family: Mulish_bold;\n}\n\n.font_align[_ngcontent-%COMP%] {\n  font-size: 0.688rem;\n  padding-left: 0.438rem;\n}\n\n.margin_split_equally[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.button-color-enabled-background[_ngcontent-%COMP%] {\n  background-color: #000091;\n  color: #fff !important;\n  font-family: Mulish_regular !important;\n  font-size: 0.75rem;\n}\n\n.button-color-enabled-background[_ngcontent-%COMP%] {\n  background-color: #000091;\n  color: #fff !important;\n  font-size: 0.75rem;\n  font-family: Mulish_regular;\n}\n\n.background_change[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 145, 0.05);\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.control_value[_ngcontent-%COMP%] {\n  font-family: Mulish_bold;\n  font-size: 19px;\n  margin: auto;\n}\n\n.control_text[_ngcontent-%COMP%] {\n  font-family: Mulish_regular;\n  font-size: 0.75rem;\n  color: #4C596B;\n}\n\n.display_container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.border_style_left[_ngcontent-%COMP%] {\n  border-radius: 10px 0px 0px 10px;\n}\n\n.border_style_right[_ngcontent-%COMP%] {\n  border-radius: 0px 10px 10px 0px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 0px;\n  color: #66768F;\n}\n\n.border_change[_ngcontent-%COMP%] {\n  border-top: 0px !important;\n}\n\n.table_head_color[_ngcontent-%COMP%] {\n  background-color: #F3F4F7;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-size: 0.688rem;\n}\n\n.font_color[_ngcontent-%COMP%] {\n  color: #2fd1aa;\n  font-weight: bold;\n}\n\n.font_color_fail[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRlc3QvY29udHJvbC1zdG9yZS1tYXBwaW5nL2NvbnRyb2wtc3RvcmUtbWFwcGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0NBQUE7QUFBSjs7QUFHQTtFQUNJLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS10ZXN0L2NvbnRyb2wtc3RvcmUtbWFwcGluZy9jb250cm9sLXN0b3JlLW1hcHBpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0X2hlYWRpbmd7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZDtcbn1cblxuLnN1Z2dlc3RlZF9vdXRlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvbnRlbnRfYWxpZ25tZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRlbnRfYWxpZ25tZW50ID4gZGl2e1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDA5MTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIG1hcmdpbjogMC4zNXJlbTtcbiAgICBmb250LXNpemU6IDAuNjg4cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZDtcbn1cblxuLmZvbnRfYWxpZ257XG4gICAgZm9udC1zaXplOiAwLjY4OHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNDM4cmVtO1xufVxuXG4ubWFyZ2luX3NwbGl0X2VxdWFsbHl7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnV0dG9uLWNvbG9yLWVuYWJsZWQtYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDkxO1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9yZWd1bGFyIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cblxuXG4uYnV0dG9uLWNvbG9yLWVuYWJsZWQtYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA5MTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXJcbn1cblxuLmJhY2tncm91bmRfY2hhbmdle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMTQ1LCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRyb2xfdmFsdWV7XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW46YXV0b1xufVxuXG4uY29udHJvbF90ZXh0e1xuICAgIGZvbnQtZmFtaWx5OiBNdWxpc2hfcmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6ICM0QzU5NkI7XG59XG5cbi5kaXNwbGF5X2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9yZGVyX3N0eWxlX2xlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG59XG5cbi5ib3JkZXJfc3R5bGVfcmlnaHR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG59XG5cbnRhYmxlIHRyIHRoe1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBjb2xvcjogIzY2NzY4Rjtcbn1cbi5ib3JkZXJfY2hhbmdle1xuICAgIGJvcmRlci10b3A6IDBweCFpbXBvcnRhbnQ7XG59XG4udGFibGVfaGVhZF9jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEY3O1xufVxuXG50YWJsZXtcbiAgICBmb250LXNpemU6IDAuNjg4cmVtO1xufVxuXG4uZm9udF9jb2xvcntcbiAgICBjb2xvcjogIzJmZDFhYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4uZm9udF9jb2xvcl9mYWlse1xuY29sb3I6IHJlZDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
    return ControlStoreMappingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlStoreMappingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-control-store-mapping',
                templateUrl: './control-store-mapping.component.html',
                styleUrls: ['./control-store-mapping.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"] }, { type: _app_shared_services_controlstore_service__WEBPACK_IMPORTED_MODULE_16__["ControlStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }, { type: _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_15__["TestMeasureService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }]; }, { moveNextStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['moveNextStep']
        }], tipsData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]]
        }] }); })();
function compare_seletedstore(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "spYQ":
/*!***************************************************!*\
  !*** ./src/app/create-test/create-test.module.ts ***!
  \***************************************************/
/*! exports provided: CreateTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestModule", function() { return CreateTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "ey9i");
/* harmony import */ var _app_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/create-test/create-test.component */ "IV7L");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "M0ag");
/* harmony import */ var _app_create_test_applicability_criteria_applicability_criteria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/create-test/applicability-criteria/applicability-criteria.component */ "OqD5");
/* harmony import */ var _app_create_test_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/create-test/test-details/test-details.component */ "L29/");
/* harmony import */ var _app_create_test_select_test_stores_select_test_stores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/create-test/select-test-stores/select-test-stores.component */ "u+jE");
/* harmony import */ var _app_create_test_control_store_mapping_control_store_mapping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/create-test/control-store-mapping/control-store-mapping.component */ "o2Vx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-select-ex */ "fktz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");



















var route = [
    {
        path: '', component: _app_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_4__["CreateTestComponent"],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]],
        data: { title: 'DEMO' }
    },
];
var CreateTestModule = /** @class */ (function () {
    function CreateTestModule() {
    }
    CreateTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateTestModule });
    CreateTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateTestModule_Factory(t) { return new (t || CreateTestModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
                _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ngx_select_ex__WEBPACK_IMPORTED_MODULE_11__["NgxSelectModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"]
            ]] });
    return CreateTestModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateTestModule, { declarations: [_app_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_4__["CreateTestComponent"],
        _app_create_test_applicability_criteria_applicability_criteria_component__WEBPACK_IMPORTED_MODULE_6__["ApplicabilityCriteriaComponent"], _app_create_test_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_7__["TestDetailsComponent"], _app_create_test_select_test_stores_select_test_stores_component__WEBPACK_IMPORTED_MODULE_8__["SelectTestStoresComponent"],
        _app_create_test_control_store_mapping_control_store_mapping_component__WEBPACK_IMPORTED_MODULE_9__["ControlStoreMappingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ngx_select_ex__WEBPACK_IMPORTED_MODULE_11__["NgxSelectModule"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
        _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_4__["CreateTestComponent"],
                    _app_create_test_applicability_criteria_applicability_criteria_component__WEBPACK_IMPORTED_MODULE_6__["ApplicabilityCriteriaComponent"], _app_create_test_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_7__["TestDetailsComponent"], _app_create_test_select_test_stores_select_test_stores_component__WEBPACK_IMPORTED_MODULE_8__["SelectTestStoresComponent"],
                    _app_create_test_control_store_mapping_control_store_mapping_component__WEBPACK_IMPORTED_MODULE_9__["ControlStoreMappingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
                    _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    ngx_select_ex__WEBPACK_IMPORTED_MODULE_11__["NgxSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "u+jE":
/*!********************************************************************************!*\
  !*** ./src/app/create-test/select-test-stores/select-test-stores.component.ts ***!
  \********************************************************************************/
/*! exports provided: SelectTestStoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTestStoresComponent", function() { return SelectTestStoresComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/services/sidenav.service */ "8//E");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/shared/services/testmeasure.service */ "Q4YV");
/* harmony import */ var _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/shared/services/testconfig.service */ "LBDO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/component/common-table/common-table.component */ "epAT");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");








































var _c0 = ["confirmDialog"];
function SelectTestStoresComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_div_0_div_54_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.knownMarginOfError = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.knownMarginOfError);
} }
function SelectTestStoresComponent_div_0_div_56_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_div_0_div_56_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.knownNoOfError = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.knownNoOfError);
} }
function SelectTestStoresComponent_div_0_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "We recommend having ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r7.resultNoOfStore, " test stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" to reach close to\n            ", ctx_r7.resultMarginOfError, "% margin of error");
} }
function SelectTestStoresComponent_div_0_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "We recommend having ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r8.resultMarginOfError, "% margin of error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" to reach close to\n            ", ctx_r8.resultNoOfStore, " test stores");
} }
function SelectTestStoresComponent_div_0_th_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Power %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c1 = function (a0, a1) { return { "font_green": a0, "font_normal": a1 }; };
function SelectTestStoresComponent_div_0_td_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r19 = ctx.$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r10.title == "Margin of error" && row_r19.noOfStore >= ctx_r10.resultMarginOfError || ctx_r10.title == "Number of test stores" && row_r19.noOfStore >= ctx_r10.resultNoOfStore, ctx_r10.title == "Margin of error" && row_r19.noOfStore < ctx_r10.resultMarginOfError || ctx_r10.title == "Number of test stores" && row_r19.noOfStore < ctx_r10.resultNoOfStore));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r19.power);
} }
function SelectTestStoresComponent_div_0_th_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.title);
} }
function SelectTestStoresComponent_div_0_td_123_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c1, ctx_r21.title == "Margin of error" && row_r20.noOfStore >= ctx_r21.resultMarginOfError || ctx_r21.title == "Number of test stores" && row_r20.noOfStore >= ctx_r21.resultNoOfStore, ctx_r21.title == "Margin of error" && row_r20.noOfStore < ctx_r21.resultMarginOfError || ctx_r21.title == "Number of test stores" && row_r20.noOfStore < ctx_r21.resultNoOfStore));
} }
function SelectTestStoresComponent_div_0_td_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectTestStoresComponent_div_0_td_123_span_4_Template, 2, 4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx_r12.title == "Margin of error" && row_r20.noOfStore >= ctx_r12.resultMarginOfError || ctx_r12.title == "Number of test stores" && row_r20.noOfStore >= ctx_r12.resultNoOfStore, ctx_r12.title == "Margin of error" && row_r20.noOfStore < ctx_r12.resultMarginOfError || ctx_r12.title == "Number of test stores" && row_r20.noOfStore < ctx_r12.resultNoOfStore));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.noOfStore);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.title == "Margin of error");
} }
function SelectTestStoresComponent_div_0_tr_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 45);
} }
var _c2 = function (a0, a1) { return { "background-color-green": a0, "": a1 }; };
function SelectTestStoresComponent_div_0_tr_128_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_div_0_tr_128_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); var row_r23 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.selection.toggle(row_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r23 = ctx.$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c2, ctx_r14.title == "Margin of error" && row_r23.noOfStore >= ctx_r14.resultMarginOfError || ctx_r14.title == "Number of test stores" && row_r23.noOfStore >= ctx_r14.resultNoOfStore, ctx_r14.title == "Margin of error" && row_r23.noOfStore < ctx_r14.resultMarginOfError || ctx_r14.title == "Number of test stores" && row_r23.noOfStore < ctx_r14.resultNoOfStore));
} }
function SelectTestStoresComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Suggestion tool for test stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "What you want to calculate the lift on? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-radio-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_div_0_Template_mat_radio_group_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.selectTargetVariableRadio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "RSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Already know my");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-radio-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_div_0_Template_mat_radio_group_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.alreadyKnowRadio = $event; })("ngModelChange", function SelectTestStoresComponent_div_0_Template_mat_radio_group_ngModelChange_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.selectAKRadioChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Margin of error %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "No of test stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SelectTestStoresComponent_div_0_div_54_Template, 4, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, SelectTestStoresComponent_div_0_div_56_Template, 4, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_div_0_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.generateSuggestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, SelectTestStoresComponent_div_0_div_88_Template, 6, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, SelectTestStoresComponent_div_0_div_90_Template, 6, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function SelectTestStoresComponent_div_0_Template_table_matSortChange_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.sortDataQuickSuggestionTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](111, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, SelectTestStoresComponent_div_0_th_113_Template, 5, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, SelectTestStoresComponent_div_0_td_115_Template, 5, 5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](119, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, SelectTestStoresComponent_div_0_th_121_Template, 5, 1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, SelectTestStoresComponent_div_0_td_123_Template, 6, 6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, SelectTestStoresComponent_div_0_tr_126_Template, 1, 0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, SelectTestStoresComponent_div_0_tr_128_Template, 2, 4, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Acceptable Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Acceptable Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectTargetVariableRadio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.alreadyKnowRadio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alreadyKnowRadio == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alreadyKnowRadio == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.generateValidationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.suggestionViewResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alreadyKnowRadio == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alreadyKnowRadio == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.suggestionViewResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.suggestionViewResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.powerTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumnsLoadSaved)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumnsLoadSaved);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Select test stores\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "How would you like to select test stores?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-radio-group", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_div_14_Template_mat_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r40.selectTestStores = $event; })("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_div_14_Template_mat_radio_group_ngModelChange_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r42.selectRadioChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-radio-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Suggested by tool");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r37.selectTestStores);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Please Enter Confidence Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Please Enter a Confidence Level between 70 -99");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please Enter No of Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please Enter No of Test Stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r49.testStore_Errormsg);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r50.ConfLev = $event; })("change", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r52.ConfLevels(ctx_r52.ConfLev ? "A" : "B"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confidence Level\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keypress_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r53.omit_char($event); })("keydown", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keydown_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r54.ConfShow(); })("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r55.ConfLevel = $event; })("keyup", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r56.callCompute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_15_Template, 6, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_17_Template, 6, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r57.Margin = $event; })("change", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r58.MarginError(ctx_r58.Margin ? "C" : "D"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Margin of Error\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keydown_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r59.ErrorShow(); })("keypress", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keypress_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r60.omit_char($event); })("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r61.NoofError = $event; })("keyup", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keyup_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r62.callCompute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_35_Template, 5, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r63.TestStore = $event; })("change", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_change_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r64.TestStores(ctx_r64.TestStore ? "E" : "F"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Number of Test store\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keydown_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r65.TestStoreShow(); })("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r66.NoofTestStore = $event; })("keyup", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template_input_keyup_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r67.callCompute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_52_Template, 5, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_ng_container_54_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.ConfLev)("disabled", !ctx_r43.cnfcheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r43.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.ConfLevel)("disabled", !ctx_r43.ConfLev || ctx_r43.ConfLev == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.confshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.confrangeshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.Margin)("disabled", !ctx_r43.mrgerrheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r43.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.NoofError)("disabled", !ctx_r43.Margin || ctx_r43.Margin == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.errorshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.TestStore)("disabled", !ctx_r43.testrheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r43.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.NoofTestStore)("disabled", !ctx_r43.TestStore || ctx_r43.TestStore == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.teststoreshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.validate_teststore);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You must select and enter values for any two options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_div_2_Template, 57, 20, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_p_4_Template, 2, 0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r68.showGenerate(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.showSuggestedByTool);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.formError);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Already have a repository of test stores? Upload it in this\n                  format to go to the next step\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r74.dowDEMOoadTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click\n                  here\n                  to dowDEMOoad the template\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r71.uploadMessageFailed);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                  Recommended statistical thresholds:\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "You can either continue the upload excluding the conflicting\n                  values or cancel the whole upload\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_8_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r76.cancelUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancel\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_8_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77); var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r78.contineUpload(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Continue\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("The number of recommended test stores\n                  = ", ctx_r72.NoofTestStore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Confidence level: ", ctx_r72.ConfLev, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Margin of error: ", ctx_r72.NoofError, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Power of Test: ", ctx_r72.power_test, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r72.uploadMessage);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81); var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r79.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Upload\n                  File\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_div_11_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81); var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r82.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_4_Template, 8, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_6_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_ng_container_8_Template, 29, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_div_11_Template, 8, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r39.uploaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r39.statusFail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r39.uploaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r39.uploaded);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Enter the test config details\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_div_14_Template, 29, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_16_Template, 25, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_ng_container_18_Template, 14, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r33.isRTMImpactTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.selectTestStores !== "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.selectTestStores === "3" && !ctx_r33.uploadShow);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-common-table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedStrTableData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_selectedStrTableData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r85.selectedstrtable($event); })("checkboxLabelTeststoreData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_checkboxLabelTeststoreData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r87.checkboxLabelTeststore($event); })("masterToggleData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_masterToggleData_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r88.masterToggle(); })("isAllSelectedData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_isAllSelectedData_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r89.isAllSelected(); })("selectAllStoresData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_selectAllStoresData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r90.sellectAllStores($event); })("callFilterData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_callFilterData_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r91.filterCall(); })("callSortData", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_callSortData_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r92.sortDataTeststoreSelected($event); })("searchFilter", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template_app_common_table_searchFilter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r93.FilterLoadTestStoreSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData", ctx_r83.TestStoreSelectTable)("columnHeader", ctx_r83.columnHeader1)("stringSelection", ctx_r83.strselection);
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_2_Template, 5, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_div_8_Template, 5, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.totalTestStores !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.totalTestStores == 0);
} }
var _c3 = function () { return { "height": 30, "width": 30 }; };
var _c4 = function () { return { x: 80, y: 20 }; };
var _c5 = function (a0, a1, a2) { return { "url": a0, "scaledSize": a1, labelOrigin: a2 }; };
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_agm_marker_8_Template(rf, ctx) { if (rf & 1) {
    var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "agm-marker", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("markerClick", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_agm_marker_8_Template_agm_marker_markerClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); var m_r95 = ctx.$implicit; var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r98.selectedMarker(m_r95.store_no, m_r95.teststre_flg); })("mouseOut", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_agm_marker_8_Template_agm_marker_mouseOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r100.onMouseOut(_r97, $event); })("mouseOver", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_agm_marker_8_Template_agm_marker_mouseOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r101.onMouseOver(_r97, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "agm-info-window", 101, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var m_r95 = ctx.$implicit;
    var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("agmFitBounds", true)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](13, _c5, m_r95.active_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c4)))("latitude", m_r95.latitude)("longitude", m_r95.longitude)("markerDraggable", m_r95.draggable)("animation", ctx_r94.userLocationMarkerAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableAutoPan", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r94.tableName.test_store_id, " : #", m_r95.store_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("City : ", m_r95.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Zip Code: ", m_r95.zipcode, "");
} }
function SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "agm-map", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapReady", function SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_Template_agm_map_mapReady_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r102.mapReading(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_agm_marker_8_Template, 21, 17, "agm-marker", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r36.latitude)("longitude", ctx_r36.longitude)("zoom", ctx_r36.zoom)("usePanning", ctx_r36.agmusePan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r36.markers);
} }
var _c6 = function (a0) { return { "not_checked": a0 }; };
function SelectTestStoresComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n            Not sure how to select test stores? \u00A0\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n          Use our quick suggestion tool\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_container_2_div_2_Template_img_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r104.navigateSuggestedTool(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SelectTestStoresComponent_ng_container_2_div_2_ng_container_19_Template, 22, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-button-toggle-group", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_Template_mat_button_toggle_group_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r106.tableView = $event; })("ngModelChange", function SelectTestStoresComponent_ng_container_2_div_2_Template_mat_button_toggle_group_ngModelChange_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r107.getDataUpdated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-button-toggle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n                  Table\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-button-toggle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " pin_drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n                  Map\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SelectTestStoresComponent_ng_container_2_div_2_ng_container_54_Template, 12, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SelectTestStoresComponent_ng_container_2_div_2_ng_container_57_Template, 13, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r32.isRTMImpactTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Selected number of stores:\n              ", ctx_r32.testStoreSelectedDataCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r32.tableView)("value", ctx_r32.tableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c6, !ctx_r32.tableView));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c6, ctx_r32.tableView));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.tableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r32.tableView);
} }
function SelectTestStoresComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectTestStoresComponent_ng_container_2_div_2_Template, 62, 14, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.suggestionView);
} }
function SelectTestStoresComponent_ng_container_4_div_2_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectTestStoresComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test Stores to population mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-common-table", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("callSortData", function SelectTestStoresComponent_ng_container_4_div_2_Template_app_common_table_callSortData_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r111.sortPopulationMapping($event); })("searchFilter", function SelectTestStoresComponent_ng_container_4_div_2_Template_app_common_table_searchFilter_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r113.FilterComprassionStoreSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SelectTestStoresComponent_ng_container_4_div_2_div_23_Template, 5, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData", ctx_r108.comprassionSelectedStores)("columnHeader", ctx_r108.columnHeader2)("tableType", ctx_r108.comprassion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r108.totalComprassionTestStores == 0);
} }
function SelectTestStoresComponent_ng_container_4_div_4_table_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Store characteristics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Population mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("RSV (in ", ctx_r114.currencySymbol, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r114.roundOffWithComma(ctx_r114.csv_poptestmean));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r114.roundOffWithComma(ctx_r114.csv_pop));
} }
function SelectTestStoresComponent_ng_container_4_div_4_table_55_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Store Szie ", ctx_r116.isinSqFt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r116.roundOff(ctx_r116.out_poptestmean));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r116.roundOff(ctx_r116.out_pop));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r116.out_testPvalue);
} }
function SelectTestStoresComponent_ng_container_4_div_4_table_55_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Manned Checkouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r117.roundOffWithComma(ctx_r117.touch_ability_mean));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r117.roundOffWithComma(ctx_r117.touch_ability));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r117.touch_pValue);
} }
function SelectTestStoresComponent_ng_container_4_div_4_table_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Store characteristics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Population mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Feature Importance (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SelectTestStoresComponent_ng_container_4_div_4_table_55_tr_17_Template, 14, 4, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SelectTestStoresComponent_ng_container_4_div_4_table_55_tr_19_Template, 14, 3, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r115.showsizeSqft);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r115.showManned);
} }
function SelectTestStoresComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test - Population comparison summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Avg. match between a test stores and population");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Sales correlation value between test and population\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, SelectTestStoresComponent_ng_container_4_div_4_table_53_Template, 26, 3, "table", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, SelectTestStoresComponent_ng_container_4_div_4_table_55_Template, 21, 2, "table", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r109.avg_test_population, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r109.sales_test_population, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.showRSV);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.showManned || ctx_r109.showsizeSqft);
} }
function SelectTestStoresComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectTestStoresComponent_ng_container_4_div_2_Template, 30, 4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectTestStoresComponent_ng_container_4_div_4_Template, 62, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectStoreView);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.selectStoreView);
} }
function SelectTestStoresComponent_ng_template_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n        Recommended statistical thresholds:\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("The number of recommended test stores = ", ctx_r118.NoofTestStore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Confidence level: ", ctx_r118.ConfLev, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Margin of error: ", ctx_r118.NoofError, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Power of Test: ", ctx_r118.power_test, "");
} }
function SelectTestStoresComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-dialog-content", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectTestStoresComponent_ng_template_6_ng_container_3_Template, 20, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-actions", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_template_6_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r119.closeDailogConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectTestStoresComponent_ng_template_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r121.Savestep3One(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Continue\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n");
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.showMessage);
} }
var config = __webpack_require__(/*! ../../../assets/region/config-fields.json */ "ar/W");
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_13___default()(highcharts__WEBPACK_IMPORTED_MODULE_12__);
var Boost = __webpack_require__(/*! highcharts/modules/boost */ "2BfV");
var noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "Tos5");
noData(highcharts__WEBPACK_IMPORTED_MODULE_12__);
var More = __webpack_require__(/*! highcharts/highcharts-more */ "M8aS");
function compare_seletedstore(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function compare_suggestion(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
var SelectTestStoresComponent = /** @class */ (function () {
    function SelectTestStoresComponent(homeService, toastr, changeDetectorRefs, commonService, globalService, dialog, sideNavservice, testMeasureService) {
        var _this = this;
        this.homeService = homeService;
        this.toastr = toastr;
        this.changeDetectorRefs = changeDetectorRefs;
        this.commonService = commonService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.sideNavservice = sideNavservice;
        this.testMeasureService = testMeasureService;
        this.showSuggestedByTool = true;
        this.testStoreSelectedDataCount = 0;
        this.totalTestStores = 0;
        this.generateValidationMessage = '';
        this.nextStepSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this.moveNextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tipsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectTestStores = '1';
        this.ELEMENT_DATA3 = [];
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
        this.strselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
        this.loadsize = 10;
        this.displayedColumnsTestStoreDEMO = [
            'select',
            'store_no',
            'banner',
            'Territory',
            'segment',
            'store_segment'
        ];
        this.displayedColumnsTestStore = [
            'select',
            'store_no',
            'banner',
            'Territory',
            'segment',
            'store_segment'
        ];
        this.isinSqFt = '';
        this.tableName = '';
        this.storeselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
        this.showMapList = '1';
        this.agmusePan = true;
        this.tableView = true;
        this.markers = [];
        this.tempFilter = [];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.saveasDraft = false;
        this.ConfLev = 0;
        this.Margin = 0;
        this.cnfcheck = true;
        this.mrgerrheck = true;
        this.testrheck = true;
        this.TestStore = 0;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
        this.validate_teststore = false;
        this.formError = false;
        this.testStore_Errormsg = '';
        this.testStore_population = true;
        this.showInsights = true;
        this.hideIcon = [false];
        this.comprassion = 'comprassion';
        this.uploaded = false;
        this.uploadMessage = '';
        this.uploadShow = false;
        this.suggestionView = false;
        this.suggestionResultView = false;
        this.resultPowerNoOfStores = [];
        this.resultPowerPower = [];
        this.displayedColumnsLoadSaved = [
            'power',
            'number_of_stores'
        ];
        this.LOAD_DATA = [];
        this.powerTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.LOAD_DATA);
        this.suggestionViewResult = false;
        this.showComprassion = false;
        this.COMPRASSION_ELEMENT_DATA3 = [];
        this.comprassionSelectedStores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.COMPRASSION_ELEMENT_DATA3);
        this.showComprassionView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedComprassionTestStore = [
            'store_no',
            'Street',
            'similarity_value',
            'sales_corelation'
        ];
        this.avg_test_population = '';
        this.sales_test_population = '';
        this.selectStoreView = true;
        this.totalComprassionTestStores = 0;
        this.tempComprassionFilter = [];
        this.mapTableData = [];
        this.seriesData = [];
        this.categories = [];
        this.testresplit = [];
        this.power_test = '';
        this.showMessage = false;
        this.columnHeader1 = {};
        this.isIntermediate = false;
        this.isChecked = false;
        this.filterSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this.filterApplied = false;
        this.tempFiteredArray = [];
        this.hideComprassion = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this.tempsortDirection = '';
        this.isRTMImpactTest = false;
        this.uploadMessageFailed = '';
        this.statusFail = false;
        this.showRSV = true;
        this.showsizeSqft = true;
        this.showManned = true;
        this.showTotal = true;
        this.searchFilter = false;
        this.searchComprassion = false;
        var componentDetails = this.commonService.getCurrentComponentSubject();
        this.currentComponent = componentDetails.currentComponent;
        this.data = componentDetails.data;
        this.setData(this.data);
        console.log('this.data: ', this.data);
        if (this.data !== undefined) {
            if (this.data.test_type === 'RTM Impact Test') {
                this.isRTMImpactTest = true;
            }
        }
        this.nextStepSubscription = this.globalService.subscribe('MOVE_NEXT_SELECT_TEST_STORES', function (obj) {
            if (obj.module === 'CREATE_TEST' && obj.currentComponent === 2) {
                console.log('start', _this.showComprassion);
                console.log('start', _this.suggestionView);
                if (!_this.showComprassion && _this.suggestionView) {
                    console.log('this.suggestionView');
                    _this.suggestionView = false;
                    _this.showComprassion = false;
                    _this.TestStore = true;
                    _this.NoofTestStore = parseInt(_this.resultNoOfStore);
                    _this.NoofError = _this.resultMarginOfError;
                    _this.Margin = true;
                    _this.callCompute();
                }
                else if (!_this.showComprassion && sessionStorage.getItem('test-type') === 'RTM Impact Test') {
                    console.log('!this.showComprassion && sessionStorage.getItem test-type === RTM Impact Test');
                    _this.showConfirm(obj);
                    _this.moveNextStep.emit({ currentComponent: _this.currentComponent, data: _this.data });
                    _this.showComprassionView.emit(false);
                }
                else if (!_this.showComprassion) {
                    console.log('!this.showComprassion');
                    _this.showConfirm(obj);
                }
                else {
                    console.log('else');
                    _this.moveNextStep.emit({ currentComponent: _this.currentComponent, data: _this.data });
                    _this.showComprassionView.emit(false);
                }
            }
        });
        this.filterSubscription = this.globalService.subscribe('FILLTER_APPLIED', function (obj) {
            if (obj.module === 'FILTERED_COMPONENT' && obj.component === 'Select_Test_Stores') {
                _this.formatfilteredData(obj.data);
            }
        });
        this.hideComprassion = this.globalService.subscribe('HIDE_TEST_STORE_COMPRASSION', function (obj) {
            console.log('calling the Data HIDE_TEST_STORE_COMPRASSION');
            if (obj.module === 'CREATE_TEST') {
                _this.showComprassion = false;
                _this.selectStoreView = true;
                _this.previuosData(_this.ELEMENT_DATA3);
                console.log(_this.ELEMENT_DATA3, 'when gone previous ');
            }
        });
    }
    SelectTestStoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('TargetVariableValue'));
        if (localStorage.getItem('TargetVariableValue') === 'RSV') {
            this.selectTargetVariableRadio = '1';
        }
        else {
            this.selectTargetVariableRadio = '2';
        }
        this.userRegion = sessionStorage.getItem('region');
        if (config[this.userRegion]) {
            console.log(config[this.userRegion]);
            this.testApplicabilityFields = config[this.userRegion].fields;
            this.currencySymbol = config[this.userRegion]['currency'];
            this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
            this.tableName = config[this.userRegion];
            this.latitude = 51.678418;
            this.longitude = 7.809007;
            this.zoom = 8;
            if (this.data.test_type !== 'RTM Impact Test') {
                this.columnHeader1 = {
                    select: 'Select Store',
                    store_no: this.tableName.test_store_id,
                    banner: this.testApplicabilityFields[0].banner,
                    Territory: this.tableName.territory,
                    store_segment: this.testApplicabilityFields[3].storegrid
                };
            }
            else {
                this.columnHeader1 = {
                    store_no: this.tableName.test_store_id,
                    banner: this.testApplicabilityFields[0].banner,
                    Territory: this.tableName.territory,
                    store_segment: this.testApplicabilityFields[3].storegrid
                };
            }
            this.columnHeader2 = {
                store_no: this.tableName.test_store_id,
                Street: 'Outlet Address',
                similarity_value: 'Similarity value to population',
                sales_corelation: 'Sales correlation'
            };
        }
        this.displayedColumnsTestStore = this.displayedColumnsTestStoreDEMO;
        this.TestStoreSelectTable.paginator = this.paginator;
        //Edit
        this.currentComponentData = this.commonService.getCurrentComponentSubject().data;
        console.log(this.currentComponentData);
        if (this.currentComponentData !== undefined) {
            if (this.currentComponentData.confidence_lvl !== null) {
                if (this.currentComponentData.hasOwnProperty('is_checkconf')) {
                    this.ConfLev = this.currentComponentData.is_checkconf;
                    console.log(this.currentComponentData.is_checkconf);
                    // this.ConfLev = this.currentComponent.is_checkconf;
                    this.ConfLevel = this.currentComponentData.confidence_lvl;
                }
            }
            if (this.currentComponentData.no_of_teststores !== null) {
                if (this.currentComponentData.hasOwnProperty('is_checknum')) {
                    console.log(this.currentComponentData.is_checknum);
                    this.TestStore = this.currentComponentData.is_checknum;
                    this.NoofTestStore = this.currentComponentData.no_of_teststores;
                }
            }
            if (this.currentComponentData.margin_error !== null) {
                if (this.currentComponentData.hasOwnProperty('is_checkmarg')) {
                    // this.Margin = this.currentComponent.is_checkmarg
                    this.Margin = this.currentComponentData.is_checkmarg;
                    console.log(this.currentComponentData.is_checkmarg);
                    this.NoofError = this.currentComponentData.margin_error;
                }
            }
            console.log(this.currentComponentData.selectTestStores, 'testchange');
            if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.currentComponentData.selectTestStores)) {
                console.log(this.currentComponentData.selectTestStores, 'selecteTestStoresSelection');
                this.selectTestStores = this.currentComponentData.selectTestStores;
                if (this.selectTestStores !== '1') {
                    this.showSuggestedByTool = false;
                }
                setTimeout(function () {
                    _this.showGenerate(false);
                }, 10);
            }
            if (this.isRTMImpactTest && Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.currentComponentData.selectTestStores)) {
                this.ConfLevel = 0;
                this.NoofError = 0;
                this.NoofTestStore = 0;
                setTimeout(function () {
                    _this.identifyTestStore();
                }, 10);
            }
        }
    };
    SelectTestStoresComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.TestStoreSelectTable.paginator = this.paginator;
        this.comprassionSelectedStores.paginator = this.paginatorComprassion;
        var tips = ['The user can either select test stores as suggested by the tool or manually select the suggested no of test stores from the population or upload them manually in the provided excel template.', 'To generate test stores from the tool, the user must enter any two of the following three metrics - confidence level, margin of error, number of test stores', 'Margin of error tells you how many percentage points your results will differ from the real population value', 'Confidence level tells you the percentage of the time the results to be accurate to within margin of error percentage points Ex: Confidence level = 95%, Margin of Error = 2% Results calculated to be accurate to within 2 percentages points (+/- 2) 95% of the time', 'Power of test is the probability of suggesting there is a change in sales (lift/drop) when actually there is one', 'Note: For RTM Impact Test all valid stores with Customer Status as “Active” will be used as Test Stores once the user has applied the filters based on channel, territory, segment, and store grid. No manual upload or selection of Test stores will be available.'];
        setTimeout(function () {
            _this.tipstoParent(tips);
        });
    };
    SelectTestStoresComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.nextStepSubscription)) {
            this.nextStepSubscription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.filterSubscription)) {
            this.filterSubscription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.hideComprassion)) {
            this.hideComprassion.unsubscribe();
        }
    };
    SelectTestStoresComponent.prototype.tipstoParent = function (data) {
        console.log(data, 'data');
        this.tipsData.emit(data);
    };
    SelectTestStoresComponent.prototype.ConfShow = function () {
        this.confshow = false;
    };
    SelectTestStoresComponent.prototype.ErrorShow = function () {
        this.errorshow = false;
    };
    SelectTestStoresComponent.prototype.TestStoreShow = function () {
        this.teststoreshow = false;
    };
    SelectTestStoresComponent.prototype.navigateSuggestedTool = function () {
        this.suggestionView = true;
    };
    SelectTestStoresComponent.prototype.generateSuggestion = function () {
        var _this = this;
        if (this.selectTargetVariableRadio == undefined) {
            this.generateValidationMessage = 'Choose the target variable';
            return;
        }
        else if (this.alreadyKnowRadio == undefined) {
            this.generateValidationMessage = 'Select Already know option';
            return;
        }
        else if ((this.knownMarginOfError == '' || this.knownMarginOfError == undefined) && (this.knownNoOfError == '' || this.knownNoOfError == undefined)) {
            this.generateValidationMessage = 'Give input values for chosen field';
            return;
        }
        else {
            this.generateValidationMessage = '';
        }
        //this.data = JSON.parse('{"margin_of_error":6,"banners":["Albert Heijn","Jumbo"],"segments":["Supermarket Small","Supermarket Medium","Supermarket Large"],"store_segments":["Low CSV - Medium Influence","Medium CSV - Low Influence","Low CSV - Low Influence","Medium CSV - Medium Influence","High CSV - Low Influence","Medium CSV - High Influence","Low CSV - High Influence","High CSV - Medium Influence","High CSV - High Influence"],"segment_variables":["Overall_Segment"],"territories":["1","2","3","4","5","6","7","8","9","10","11","12","23","27"],"categories":["Chocolate","Petcare"],"target_variable":"RSV"}')
        var marginOfError;
        var noOfTestStore;
        if (this.alreadyKnowRadio === '1') {
            marginOfError = this.knownMarginOfError;
            noOfTestStore = '';
        }
        else if (this.alreadyKnowRadio == '2') {
            marginOfError = '';
            noOfTestStore = this.knownNoOfError;
        }
        var segment_variables = [config[this.userRegion]['overall_segment']];
        var data = {
            margin_of_error: parseInt(this.knownMarginOfError),
            noOfTestStore: noOfTestStore,
            banners: this.data.banner,
            segments: this.data.segment,
            store_segments: this.data.store_grid,
            segment_variables: segment_variables,
            territories: this.data.territory,
            categories: this.data.category,
            target_variable: this.selectTargetVariableRadio == 1 ? 'RSV' : 'Volume',
            prewindow_start: this.data.pretest_startdt,
            prewindow_end: this.data.pretest_enddt,
            postwindow_start: this.data.testwin_startdt,
            postwindow_end: this.data.testwin_enddt
        };
        data['num_test_stores'] = parseInt(noOfTestStore);
        data['margin_of_error'] = parseInt(marginOfError);
        if (noOfTestStore == '') {
            this.homeService.generateSuggestionForNoOfTestStore(data).subscribe(function (response) {
                if (response.status == 'ok') {
                    _this.resultMarginOfError = marginOfError;
                    _this.suggestionResultView = true;
                    _this.resultNoOfStore = response.data['no_of_teststores'];
                    var resultPower = JSON.parse(response.data['power_stores']);
                    _this.resultPowerPower = resultPower['Power %'];
                    _this.resultPowerNoOfStores = resultPower['Number of Stores'];
                    _this.showCharts(true);
                }
            });
        }
        else {
            this.homeService.generateSuggestionForMarginOfError(data).subscribe(function (response) {
                if (response.status === 'ok') {
                    _this.suggestionResultView = true;
                    _this.resultNoOfStore = noOfTestStore;
                    _this.resultMarginOfError = response.data['margin_of_error'];
                    var resultPower = JSON.parse(response.data['power_stores']);
                    _this.resultPowerPower = resultPower['Power %'];
                    _this.resultPowerNoOfStores = resultPower['Margin of Error'];
                    _this.showCharts(false);
                }
            });
        }
    };
    SelectTestStoresComponent.prototype.showCharts = function (isTestStore) {
        var _this = this;
        this.title = isTestStore ? 'Number of test stores' : 'Margin of error';
        var yAxisValue = isTestStore ? '{value}' : '{value}%';
        var ary = [];
        var power = [];
        for (var key in this.resultPowerPower) {
            power.push(this.resultPowerPower[key]);
        }
        var noOfStore = [];
        for (var key in this.resultPowerNoOfStores) {
            noOfStore.push(this.resultPowerNoOfStores[key]);
        }
        console.log(power);
        console.log(noOfStore);
        for (var i in power) {
            ary.push({
                power: power[i],
                noOfStore: noOfStore[i]
            });
        }
        this.LOAD_DATA = ary;
        this.powerTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.LOAD_DATA);
        setTimeout(function () { return _this.powerTable.paginator = _this.paginator; });
        this.suggestionViewResult = true;
        var options = {
            chart: {
                type: 'areaspline',
                height: 400,
            },
            title: null,
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_12__["defaultOptions"].legend.backgroundColor || '#FFFFFF'
            },
            exporting: {
                chartOptions: {
                    title: {
                        text: null
                    }
                }
            },
            xAxis: {
                categories: power,
                title: {
                    text: 'Power %'
                },
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            yAxis: {
                title: {
                    text: this.title
                },
                labels: {
                    format: yAxisValue
                },
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5,
                },
                series: {
                    lineColor: 'black',
                },
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: this.title,
                    showIDEMOegend: false,
                    data: noOfStore,
                    color: 'black',
                    zoneAxis: 'x',
                    zones: [{
                            fillColor: '#FFFFFF',
                            value: noOfStore.indexOf(this.resultNoOfStore),
                        }, {
                            fillColor: 'palegreen',
                            color: 'green',
                            value: noOfStore.length,
                        }]
                }]
        };
        var options2 = {
            chart: {
                type: 'areaspline',
                height: 400,
            },
            title: null,
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_12__["defaultOptions"].legend.backgroundColor || '#FFFFFF'
            },
            exporting: {
                chartOptions: {
                    title: {
                        text: null
                    }
                }
            },
            xAxis: {
                categories: power,
                title: {
                    text: 'Power %'
                },
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            yAxis: {
                title: {
                    text: this.title
                },
                labels: {
                    format: yAxisValue
                },
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5,
                },
                series: {
                    lineColor: 'black',
                },
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: this.title,
                    showIDEMOegend: false,
                    data: noOfStore,
                    color: 'black',
                    zoneAxis: 'x',
                    zones: [{
                            fillColor: '#FFFFFF',
                            value: noOfStore.indexOf(this.resultMarginOfError)
                        }, {
                            fillColor: 'palegreen',
                            color: 'green',
                            value: noOfStore.length
                        }]
                }]
        };
        if (this.alreadyKnowRadio === '1') {
            highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"]('power-chart', options);
        }
        else if (this.alreadyKnowRadio === '2') {
            highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"]('power-chart', options2);
        }
    };
    SelectTestStoresComponent.prototype.selectAKRadioChange = function () {
        this.suggestionViewResult = false;
    };
    SelectTestStoresComponent.prototype.sortDataQuickSuggestionTable = function (sort) {
        var data = this.LOAD_DATA.slice();
        this.powerTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.LOAD_DATA);
        if (!sort.active || sort.direction === '') {
            this.LOAD_DATA = data;
            return;
        }
        this.LOAD_DATA = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'power':
                    return compare_suggestion(a.power, b.power, isAsc);
                case 'number_of_stores':
                    return compare_suggestion(a.banner, b.banner, isAsc);
                default:
                    return 0;
            }
        });
    };
    SelectTestStoresComponent.prototype.sortDataTeststoreSelected = function (sort) {
        console.log('sort Function');
        var data;
        if (!this.searchFilter) {
            data = this.ELEMENT_DATA3.slice();
        }
        else {
            data = this.TestStoreSelectTable.data.slice();
        }
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
        this.TestStoreSelectTable.paginator = this.paginator;
        if (!sort.active || sort.direction === '') {
            this.ELEMENT_DATA3 = data;
            return;
        }
        this.tempsortDirection = sort.direction;
        var tempData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'store_no':
                    return compare_seletedstore(a.store_no, b.store_no, isAsc);
                case 'banner':
                    return compare_seletedstore(a.banner, b.banner, isAsc);
                case 'Territory':
                    return compare_seletedstore(a.Territory, b.Territory, isAsc);
                case 'segment':
                    return compare_seletedstore(a.segment, b.segment, isAsc);
                case 'store_segment':
                    return compare_seletedstore(a.store_segment, b.store_segment, isAsc);
                case 'Street':
                    return compare_seletedstore(a.Street, b.Street, isAsc);
                default:
                    return 0;
            }
        });
        var filterData;
        if (this.searchFilter) {
            filterData = tempData;
        }
        else {
            filterData = tempData;
            this.ELEMENT_DATA3 = tempData;
        }
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](filterData);
        this.TestStoreSelectTable.paginator = this.paginator;
    };
    SelectTestStoresComponent.prototype.isAllSelectedTestStore = function () {
        var numSelected = this.storeselection.selected.length;
        var numRows = this.TestStoreSelectTable.data.length;
        return numSelected === numRows;
    };
    SelectTestStoresComponent.prototype.checkboxLabelTeststore = function (row) {
        if (!row) {
            return (this.isAllSelectedTestStore() ? 'select' : 'deselect') + " all";
        }
        return (this.storeselection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.store_name + 1);
    };
    SelectTestStoresComponent.prototype.identifyTestStore = function () {
        var _this = this;
        var segment_variables;
        segment_variables = [config[this.userRegion]['banner']];
        var dataStore = this.data;
        var newData = {
            data: {
                test_name: this.data.test_name,
                test_id: this.data.test_id,
                type_of_test: this.data.test_type,
                banners: this.data.banner,
                segments: this.data.store_grid,
                store_segments: this.data.segment,
                segment_variables: segment_variables,
                territories: this.data.territory,
                categories: this.data.category,
                no_of_teststores: this.NoofTestStore,
                target_variable: this.data.target_variable,
                prewindow_start: this.data.pretest_startdt,
                prewindow_end: this.data.pretest_enddt,
                postwindow_start: this.data.testwin_startdt,
                postwindow_end: this.data.testwin_enddt
            }
        };
        this.homeService.IdentifyTest(newData).subscribe(function (apiResponse4) {
            if (apiResponse4.status === 'ok') {
                if (apiResponse4.data === '') {
                    _this.toastr.error('No test stores pair satisfying the criteria to proceed further.');
                }
                else {
                    _this.tableConstruct(apiResponse4.data);
                }
            }
            else {
                _this.toastr.error('Something went wrong please try again later.');
            }
        });
    };
    SelectTestStoresComponent.prototype.getTerritoryData = function (value) {
        return value;
    };
    SelectTestStoresComponent.prototype.dowDEMOoadTemplate = function () {
        var link = document.createElement('a');
        link.download = 'Upload_Teststores_Template_' + this.userRegion + '.xlsx';
        link.href = 'assets/excel_files/Upload_Teststores_Template_' + this.userRegion + '.xlsx';
        link.click();
    };
    SelectTestStoresComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        console.log('files-> ', files.item(0));
        var file = files.item(0);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        console.log(formData, 'twovalues');
        var data = {
            FILES: formData,
            banner: this.Banner
        };
        formData.append('banner', this.Banner);
        formData.append('store_segments', this.StoreGrid);
        formData.append('segments', this.Segment);
        formData.append('territories', this.Territory);
        formData.append('categories', this.Category);
        formData.append('target_variable', this.TargetVariable);
        formData.append('prewindow_start', this.data.pretest_startdt);
        formData.append('prewindow_end', this.data.pretest_enddt);
        formData.append('postwindow_start', this.data.testwin_startdt);
        formData.append('postwindow_end', this.data.testwin_enddt);
        this.homeService.uploadTestStore(formData).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.uploadMessage = response.data.message2;
                _this.uploadedData = response.data.filtered_teststores;
                _this.uploaded = true;
                _this.NoofError = response.data.margin_of_error;
                _this.ConfLev = response.data.confidence_level;
                _this.NoofTestStore = response.data.num_test_stores;
                _this.power_test = response.data.power_test;
                _this.statusFail = false;
            }
            else {
                _this.uploaded = false;
                _this.uploadMessageFailed = response.data;
                _this.statusFail = true;
                // this.toastr.warning(response.data);
            }
        }, function (error) {
            _this.toastr.error('Something went wrong while upload please try again later');
        });
    };
    SelectTestStoresComponent.prototype.formatNumber = function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    SelectTestStoresComponent.prototype.getTestStoreName = function (row) {
        return row.store_no;
    };
    SelectTestStoresComponent.prototype.tableConstruct = function (apiresponse) {
        var dt = JSON.parse(apiresponse);
        console.log(dt);
        var allArray = [];
        allArray = dt;
        var ary = [];
        for (var i = 0; i < dt.length; i++) {
            var correlation = 0;
            var similarity_value = 0;
            if (dt[i].hasOwnProperty('Correlation')) {
                correlation = dt[i]['Correlation'];
            }
            if (dt[i].hasOwnProperty('Similarity_Measure')) {
                similarity_value = dt[i]['Similarity_Measure'];
            }
            ary.push({
                store_no: dt[i]['Customer_Number'],
                banner: dt[i]['Customer_Group'],
                city: dt[i]['City'],
                Street: dt[i]['Outlet_Address'],
                store_segment: dt[i]['Store_Number'],
                Territory: dt[i]['Territory'],
                csvoutletShow: dt[i]['Store_Size_Sq_Ft'],
                index: dt[i]['index'],
                teststre_flg: dt[i]['is_teststore'],
                zipcode: dt[i]['Postcode'],
                sales_corelation: correlation,
                similarity_value: similarity_value,
                latitude: dt[i]['Latitude'],
                longitude: dt[i]['Longitude'],
                customer_name: dt[i]['Customer_Name'],
                customer_status: dt[i]['Customer_Status'],
                touchability_score: dt[i]['Touchability_Score'],
                icon: 'assets/images/map_icon.png',
                selected_icon: 'assets/images/active_map.png',
                active_icon: 'assets/images/map_icon.png',
                store_id: dt[i]['store_id'],
                region: dt[i]['Region'],
                division: dt[i]['Division'],
                sales_represtative: dt[i]['Sales_Representative'],
                total_checkout_locations: dt[i]['total_checkout_locations'],
                Manned_Checkouts: dt[i]['Manned_Checkouts'],
                customerChain: dt[i]['Customer_Chain']
            });
        }
        if (this.showComprassion) {
            this.COMPRASSION_ELEMENT_DATA3 = ary;
            var temp = [];
            for (var i = 0; i < this.COMPRASSION_ELEMENT_DATA3.length; i++) {
                if (this.COMPRASSION_ELEMENT_DATA3[i].teststre_flg == 1) {
                    temp.push(this.COMPRASSION_ELEMENT_DATA3[i]);
                }
            }
            console.log(this.COMPRASSION_ELEMENT_DATA3);
            this.testStoreSelectedDataCount = temp.length;
            this.totalComprassionTestStores = ary.length;
            this.comprassionSelectedStores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.COMPRASSION_ELEMENT_DATA3);
            this.comprassionSelectedStores.paginator = this.paginatorComprassion;
            this.changeDetectorRefs.detectChanges();
            this.strselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, temp);
            this.loadsize = 10;
        }
        else {
            this.ELEMENT_DATA3 = ary;
            var temp = [];
            for (var i = 0; i < this.ELEMENT_DATA3.length; i++) {
                if (this.ELEMENT_DATA3[i].teststre_flg == 1) {
                    temp.push(this.ELEMENT_DATA3[i]);
                }
            }
            console.log(this.ELEMENT_DATA3);
            this.testStoreSelectedDataCount = temp.length;
            this.totalTestStores = ary.length;
            this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
            this.TestStoreSelectTable.paginator = this.paginator;
            this.changeDetectorRefs.detectChanges();
            this.strselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, temp);
            this.loadsize = 10;
        }
        if (this.selectTestStores === '3') {
            this.NoofError = 0;
            this.ConfLevel = 0;
            this.NoofTestStore = this.ELEMENT_DATA3.length;
        }
    };
    SelectTestStoresComponent.prototype.showGenerate = function (click) {
        if (click) {
            if (this.selectTestStores === '1' && (this.Margin == 0 || this.Margin == false || !this.NoofError) && (this.TestStore == 0 || this.TestStore == false || !this.NoofTestStore)) {
                console.log('Margin and Number of test store is empty');
                this.formError = true;
                return;
            }
        }
        this.formError = false;
        console.log('Firing Generate');
        this.ELEMENT_DATA3 = [];
        this.testStoreSelectedDataCount = 0;
        this.totalTestStores = 0;
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
        this.TestStoreSelectTable.paginator = this.paginator;
        if (this.selectTestStores === '1' && !Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.selectTestStores)) {
            this.identifyTestStore();
        }
        else if (this.selectTestStores === '2' && !Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.selectTestStores)) {
            this.identifyMannually();
        }
        else if (this.selectTestStores === '3' && !Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.selectTestStores)) {
            var records = void 0;
            var index = this.data.records.findIndex(function (x) { return x.stepper_id === 3; });
            if (index !== -1) {
                if (this.data.records.length > 0 && this.data.records[index].stepper_id === 3) {
                    records = JSON.parse(this.data.records[index].record_value);
                    console.log(records, 'recordsvalue');
                    this.tableConstruct(JSON.stringify(records.selectedteststore));
                }
            }
        }
    };
    SelectTestStoresComponent.prototype.omit_char = function (event) {
        var keyChar = event.key;
        var allowCharacter;
        if (keyChar === '-' && event.target.selectionStart !== 0) {
            allowCharacter = false;
        }
        else if (keyChar === 'Tab' ||
            keyChar === '+' ||
            keyChar === 'Enter' ||
            keyChar === 'Backspace' ||
            keyChar === 'ArrowLeft' ||
            keyChar === 'ArrowRight' ||
            keyChar === 'Delete') {
            allowCharacter = true;
        }
        else {
            allowCharacter = (keyChar >= '0' && keyChar <= '9') || keyChar === '.';
        }
        if (this.NoofError !== undefined && this.NoofError !== null && (this.NoofError).toString().length >= 10) {
            event.preventDefault();
        }
        if (!allowCharacter) {
            event.preventDefault();
        }
    };
    SelectTestStoresComponent.prototype.mapReading = function () {
        this.userLocationMarkerAnimation = 'DROP';
    };
    SelectTestStoresComponent.prototype.toggleView = function (change) {
        console.log(change, 'toogle change value');
    };
    SelectTestStoresComponent.prototype.getMarkerList = function () {
        var data = this.ELEMENT_DATA3;
        var count = 0;
        this.mapTableData = [];
        if (this.showMapList === '1') {
            count = this.ELEMENT_DATA3.length;
        }
        else if (this.showMapList === '2') {
            count = 10;
        }
        else if (this.showMapList === '3') {
            count = 20;
        }
        this.markers = [];
        var arry = [];
        for (var i = 0; i < count; i++) {
            if (data[i]['teststre_flg'] === 1) {
                data[i]['active_icon'] = data[i]['selected_icon'];
                data[i]['teststre_flg'] = 1;
            }
            else {
                data[i]['active_icon'] = data[i]['icon'];
                data[i]['teststre_flg'] = 0;
            }
            arry.push(data[i]);
        }
        this.markers = arry;
    };
    SelectTestStoresComponent.prototype.selectedMarker = function (storeNumber, teststre_flg) {
        console.log(this.markers, 'markersData');
        if (teststre_flg === 0) {
            var index = this.markers.findIndex(function (x) { return x.store_no === storeNumber; });
            if (index !== -1) {
                this.markers[index]['active_icon'] = this.markers[index]['selected_icon'];
                this.markers[index]['teststre_flg'] = 1;
            }
        }
        else if (teststre_flg === 1) {
            var index = this.markers.findIndex(function (x) { return x.store_no === storeNumber; });
            if (index !== -1) {
                this.markers[index]['active_icon'] = this.markers[index]['icon'];
                this.markers[index]['teststre_flg'] = 0;
            }
        }
        this.mapTableData = this.markers;
        var selectedCount = this.mapTableData.filter(function (x) { return x.teststre_flg === 1; });
        this.testStoreSelectedDataCount = selectedCount.length;
    };
    SelectTestStoresComponent.prototype.selectedstrtable = function (store_id) {
        console.log(this.ELEMENT_DATA3, 'data');
        for (var i = 0; i < this.ELEMENT_DATA3.length; i++) {
            if (this.ELEMENT_DATA3[i]['store_no'] === store_id) {
                if (this.ELEMENT_DATA3[i]['teststre_flg'] === 1) {
                    this.ELEMENT_DATA3[i]['teststre_flg'] = 0;
                }
                else {
                    this.ELEMENT_DATA3[i]['teststre_flg'] = 1;
                }
            }
        }
        if (this.temp_valufilter != undefined) {
            var val_1 = this.temp_valufilter;
            this.tempFilter = this.ELEMENT_DATA3;
            var temp = this.tempFilter.filter(function (d) {
                return (d['store_no'].toString().indexOf(val_1) !== -1 ||
                    d['banner']
                        .toString()
                        .toLowerCase()
                        .indexOf(val_1) !== -1 ||
                    d['segment']
                        .toString()
                        .toLowerCase()
                        .indexOf(val_1) !== -1 ||
                    d['store_segment']
                        .toString()
                        .toLowerCase()
                        .indexOf(val_1) !== -1 ||
                    d['Territory']
                        .toString()
                        .toLowerCase()
                        .indexOf(val_1) !== -1 ||
                    d['segment']
                        .toString()
                        .toLowerCase()
                        .indexOf(val_1) !== -1 ||
                    d['store_segment']
                        .toString()
                        .toLowerCase()
                        .indexOf(val_1) !== -1 ||
                    !val_1);
            });
            if (this.tempFilter.length > 0) {
                console.log(this.tempFilter, 'if condition');
                this.testStoreSelectedDataCount = temp.length;
                this.totalTestStores = temp.length;
                this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](temp);
                this.TestStoreSelectTable.paginator = this.paginator;
            }
            else {
                console.log(this.tempFilter, 'else condition');
                this.testStoreSelectedDataCount = this.ELEMENT_DATA3.length;
                this.ELEMENT_DATA3 = this.ELEMENT_DATA3;
                this.totalTestStores = temp.length;
                this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
                this.TestStoreSelectTable.paginator = this.paginator;
            }
        }
        else if (!this.filterApplied) {
            var data = this.ELEMENT_DATA3.filter(function (x) { return x.teststre_flg === 1; });
            if (data.length > 0) {
                this.testStoreSelectedDataCount = data.length;
                if (this.ELEMENT_DATA3.length === data.length) {
                    this.isChecked = true;
                }
                else {
                    this.isIntermediate = true;
                }
            }
            else {
                this.testStoreSelectedDataCount = data.length;
            }
            this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
            this.TestStoreSelectTable.paginator = this.paginator;
        }
        else if (this.filterApplied) {
            var data = this.tempFiteredArray.filter(function (x) { return x.teststre_flg === 1; });
            if (data.length > 0) {
                this.testStoreSelectedDataCount = data.length;
                if (this.ELEMENT_DATA3.length === data.length) {
                    this.isChecked = true;
                }
                else {
                    this.isIntermediate = true;
                }
            }
            else {
                this.testStoreSelectedDataCount = data.length;
            }
            this.totalTestStores = this.tempFiteredArray.length;
            this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.tempFiteredArray);
            this.TestStoreSelectTable.paginator = this.paginator;
        }
    };
    SelectTestStoresComponent.prototype.Savestep3One = function (currentComponent) {
        var _this = this;
        /*Covert date format*/
        var pretest_start = this.data.pretest_startdt;
        var pretest_end = this.data.pretest_enddt;
        var test_start = this.data.testwin_startdt;
        var test_end = this.data.testwin_enddt;
        var mystres = this.strselection.selected;
        var storessel = [];
        if (this.selectTestStores === '2' && this.testStoreSelectedDataCount < Number(this.NoofTestStore)) {
            this.closeDailogConfirm();
        }
        if (mystres.length === 0) {
            this.toastr.warning('Please select atleast one test stores');
            return;
        }
        for (var i = 0; i < mystres.length; i++) {
            storessel.push({
                Customer_Number: mystres[i]['store_no'],
                Customer_Group: mystres[i]['banner'],
                City: mystres[i]['City'],
                Customer_Name: mystres[i]['customer_name'],
                Outlet_Address: mystres[i]['Street'],
                Store_Number: mystres[i]['store_segment'],
                Territory: mystres[i]['Territory'],
                Customer_Status: mystres[i]['customer_status'],
                Latitude: mystres[i]['latitude'],
                Longitude: mystres[i]['longitude'],
                Store_Size_Sq_Ft: mystres[i]['csvoutletShow'],
                Postcode: mystres[i]['zipcode'],
                store_id: mystres[i]['store_id'],
                Region: mystres[i]['region'],
                Division: mystres[i]['division'],
                Sales_Representative: mystres[i]['sales_represtative'],
                Manned_Checkouts: mystres[i]['Manned_Checkouts'],
                total_checkout_locations: mystres[i]['total_checkout_locations'],
                Customer_Chain: mystres[i]['customerChain'],
                index: mystres[i]['index'],
                is_teststore: mystres[i]['teststre_flg'],
                touchability_score: mystres[i]['touchability_score']
            });
        }
        var data;
        var record;
        this.data.stepindex = 4;
        this.data.selectedteststore = storessel;
        localStorage.setItem('testid', this.data.test_id);
        localStorage.setItem('test_type', this.data.test_type);
        var stringified_data = JSON.stringify(this.data);
        record = {
            strfeature1: this.data.strfeature1,
            strfeature2: this.data.strfeature2,
            selectedteststore: this.data.selectedteststore,
            test_name: this.data.test_name,
            test_type: this.data.test_type,
            target_variable: this.data.target_variable,
            desc: this.data.desc,
            additional_det: this.data.additional_det,
            banner: this.Banner,
            segment: this.StoreGrid,
            territory: this.Territory,
            store_grid: this.Segment,
            category: this.Category,
            pretest_startdt: this.data.pretest_startdt,
            pretest_enddt: this.data.pretest_enddt,
            testwin_startdt: this.data.testwin_startdt,
            testwin_enddt: this.data.testwin_enddt,
            confidence_lvl: this.ConfLevel,
            margin_error: this.NoofError,
            break_even_lift: this.data.break_even_lift,
            no_of_teststores: this.NoofTestStore,
            records: stringified_data,
            stepindex: 3,
            stage_id: 1,
            is_checkconf: this.ConfLev,
            is_checkmarg: this.Margin,
            is_checknum: this.TestStore,
            selectTestStores: this.selectTestStores,
            test_id: this.data.test_id //remove before push
        };
        localStorage.setItem('testidmatch', this.data.test_id);
        var dataTemp = [];
        dataTemp.push(this.data.test_id);
        localStorage.setItem('testidstage2', JSON.stringify(dataTemp));
        localStorage.setItem('from_test_store', 'true');
        // Setting the Selected Stores
        console.log(record);
        this.homeService.Save_stage(record).subscribe(function (apiresponse) {
            if (apiresponse.status == 'ok') {
                _this.toastr.success('', 'Selected Test Stores saved successfully');
                if (!_this.saveasDraft) {
                    console.log(sessionStorage.getItem('test-type'), 'testType changes');
                    if (sessionStorage.getItem('test-type') !== 'RTM Impact Test') {
                        console.log('RTM Impact Test Not');
                        var tips = ['A higher sales correlation between a test store and stores in the entire population indicates a strong directional relationship between their weekly sales', 'Similarity measure between a test store and stores in the entire population indicates how well a test store resembles the stores in the population'];
                        _this.tipstoParent(tips);
                        _this.showComprassion = true;
                        _this.showComprassionView.emit(true);
                        _this.getComprassionTable();
                    }
                }
            }
        });
    };
    SelectTestStoresComponent.prototype.ConfLevels = function (event) {
        if (event == 'A') {
            if ((this.Margin == 1 && this.ConfLev == true) || (this.Margin == true && this.ConfLev == 1)) {
                this.uncheck = true;
                this.testrheck = false;
            }
            if ((this.TestStore == 1 && this.ConfLev == true) || (this.TestStore == true && this.ConfLev == 1)) {
                this.uncheck = true;
                this.mrgerrheck = false;
            }
            if (this.ConfLev == true || this.ConfLev == 1) {
                this.uncheck = true;
            }
        }
        else if (event == 'B') {
            if ((this.Margin == 1 && this.ConfLev == false) || (this.Margin == true && this.ConfLev == false)) {
                this.uncheck = true;
                this.testrheck = true;
            }
            if ((this.TestStore == 1 && this.ConfLev == false) || (this.TestStore == true && this.ConfLev == false)) {
                this.uncheck = true;
                this.mrgerrheck = true;
            }
            if (this.Margin == false || this.ConfLev == 0) {
                this.uncheck = false;
                this.ConfLevel = '';
            }
        }
    };
    SelectTestStoresComponent.prototype.MarginError = function (event) {
        if (event == 'C') {
            if ((this.ConfLev == 1 && this.Margin == true) || (this.ConfLev == true && this.Margin == 1)) {
                this.uncheck1 = true;
                this.testrheck = false;
            }
            if ((this.TestStore == 1 && this.Margin == true) || (this.TestStore == true && this.Margin == 1)) {
                this.uncheck1 = true;
                this.cnfcheck = false;
            }
            if (this.Margin == true || this.Margin == 1) {
                this.uncheck1 = true;
            }
        }
        else if (event == 'D') {
            if ((this.ConfLev == 1 && this.Margin == false) || (this.ConfLev == true && this.Margin == false)) {
                this.uncheck1 = true;
                this.testrheck = true;
            }
            if ((this.TestStore == 1 && this.Margin == false) || (this.TestStore == true && this.Margin == false)) {
                this.uncheck1 = true;
                this.cnfcheck = true;
            }
            if (this.Margin == false || this.Margin == 0) {
                this.uncheck1 = false;
                this.NoofError = '';
            }
        }
    };
    SelectTestStoresComponent.prototype.TestStores = function (event) {
        if (event == 'E') {
            if ((this.ConfLev == 1 && this.TestStore == true) || (this.ConfLev == true && this.TestStore == 1)) {
                this.uncheck2 = true;
                this.mrgerrheck = false;
            }
            if ((this.Margin == 1 && this.TestStore == true) || (this.Margin == true && this.TestStore == 1)) {
                this.uncheck2 = true;
                this.cnfcheck = false;
            }
            if (this.TestStore == true || this.TestStore == 1) {
                this.uncheck2 = true;
            }
        }
        else if (event == 'F') {
            if ((this.ConfLev == 1 && this.TestStore == false) || (this.ConfLev == true && this.TestStore == false)) {
                this.uncheck2 = true;
                this.mrgerrheck = true;
            }
            if ((this.Margin == 1 && this.TestStore == false) || (this.Margin == true && this.TestStore == false)) {
                this.uncheck2 = true;
                this.cnfcheck = true;
            }
            if (this.TestStore == false || this.TestStore == 0) {
                this.uncheck2 = false;
                this.NoofTestStore = '';
                this.validate_teststore = false;
            }
        }
    };
    SelectTestStoresComponent.prototype.selectRadioChange = function () {
        this.ConfLev = 0;
        this.NoofError = 0;
        this.NoofTestStore = 0;
        this.ConfLevel = '';
        this.NoofError = '';
        this.NoofTestStore = '';
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]([]);
        this.ELEMENT_DATA3 = [];
        this.testStoreSelectedDataCount = 0;
        this.mapTableData = [];
        this.markers = [];
        this.totalTestStores = 0;
        this.showMessage = false;
        if (this.selectTestStores === '1') {
            this.showSuggestedByTool = true;
        }
        else if (this.selectTestStores === '2') {
            this.showSuggestedByTool = false;
            this.formError = false;
        }
        else if (this.selectTestStores === '3') {
            this.showSuggestedByTool = false;
            this.formError = false;
            this.uploaded = false;
            this.uploadShow = false;
            this.uploadMessageFailed = '';
            this.statusFail = false;
        }
    };
    SelectTestStoresComponent.prototype.hideOrShowColumns = function (data, index) {
        console.log('data', data, this.hideIcon[data]);
        if (this.hideIcon[data] == true) {
            this.hideIcon[data] = false;
        }
        else {
            this.hideIcon[data] = true;
        }
        if (data == 'select') {
            this.hideSelectColumns = !this.hideSelectColumns;
        }
        else if (data == 'store_no') {
            this.hideStoreNoColumns = !this.hideStoreNoColumns;
        }
        else if (data == 'banner') {
            this.hideBannerColumns = !this.hideBannerColumns;
        }
        else if (data == 'Territory') {
            this.hideTerritoryColumn = !this.hideTerritoryColumn;
        }
        else if (data == 'segment') {
            this.hideSegmentColumn = !this.hideSegmentColumn;
        }
        else if (data == 'store_segment') {
            this.hideStoreSegmentColumn = !this.hideStoreSegmentColumn;
        }
    };
    SelectTestStoresComponent.prototype.valueShown = function (data) {
        if (data == 'select') {
            return 'Select Store';
        }
        else if (data == 'store_no') {
            return this.tableName.test_store_id;
        }
        else if (data == 'banner') {
            return this.testApplicabilityFields[0].banner;
        }
        else if (data == 'Territory') {
            return this.tableName.territory;
        }
        else if (data == 'segment') {
            return this.testApplicabilityFields[1].segment;
        }
        else if (data == 'store_segment') {
            return this.testApplicabilityFields[3].storegrid;
        }
    };
    SelectTestStoresComponent.prototype.identifyMannually = function () {
        var _this = this;
        var segment_variables = [config[this.userRegion]['overall_segment']];
        var newData = {
            data: {
                test_name: this.data.test_name,
                test_id: this.data.test_id,
                type_of_test: this.data.test_type,
                banners: this.data.banner,
                segments: this.data.store_grid,
                store_segments: this.data.segment,
                segment_variables: segment_variables,
                territories: this.data.territory,
                categories: this.data.category,
                no_of_teststores: this.NoofTestStore,
                target_variable: this.data.target_variable,
                prewindow_start: this.data.pretest_startdt,
                prewindow_end: this.data.pretest_enddt,
                postwindow_start: this.data.testwin_startdt,
                postwindow_end: this.data.testwin_enddt
            }
        };
        this.homeService.IdentifyTestManually(newData).subscribe(function (apiResponse) {
            if (apiResponse.status == 'ok') {
                _this.showMessage = true;
                _this.NoofError = apiResponse.data.margin_of_error;
                _this.ConfLev = apiResponse.data.confidence_level;
                _this.NoofTestStore = apiResponse.data.num_test_stores;
                _this.tableConstruct(apiResponse.data.teststores);
                _this.power_test = apiResponse.data.power_test;
                _this.ConfLevel = _this.ConfLev;
            }
        });
    };
    SelectTestStoresComponent.prototype.setData = function (data) {
        if (this.data !== undefined) {
            this.Territory = this.data.territory;
            this.Category = this.data.category;
            this.Segment = this.data.store_grid;
            this.StoreGrid = this.data.segment;
            this.TargetVariable = this.data.target_variable;
            this.Banner = this.data.banner;
        }
    };
    // Calculate Confidence level and margin of error
    SelectTestStoresComponent.prototype.callCompute = function () {
        if (this.NoofError || this.NoofTestStore || this.ConfLev) {
            this.Compute();
        }
    };
    SelectTestStoresComponent.prototype.Compute = function () {
        var _this = this;
        this.formError = false;
        var prewinstrt = this.data.pretest_startdt;
        var prewinend = this.data.pretest_enddt;
        var testwinstrt = this.data.testwin_startdt;
        var testwinend = this.data.testwin_enddt;
        var data;
        console.log(testwinstrt);
        if (this.ConfLev && this.TestStore) {
            data = {
                data: {
                    confidence_level: parseInt(this.ConfLevel) / 100,
                    num_test_stores: this.NoofTestStore,
                    testwindow_start: testwinstrt,
                    testwindow_end: testwinend,
                    prewinstrt: prewinstrt,
                    prewinend: prewinend,
                    target_variable: this.TargetVariable,
                    banners: this.Banner,
                    segments: this.StoreGrid,
                    store_segments: this.Segment,
                    territories: this.Territory,
                    categories: this.Category
                }
            };
            if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.NoofTestStore) && JSON.parse(this.NoofTestStore) < 30) {
                this.validate_teststore = true;
                this.testStore_Errormsg = 'Given samplesize is less than 30 (Minimum required samplesize).Please modify the sample size and try again';
                return;
            }
            else {
                this.validate_teststore = false;
            }
        }
        else if (this.ConfLev && this.Margin) {
            data = {
                data: {
                    confidence_level: parseInt(this.ConfLevel) / 100,
                    margin_of_error: (Number(parseFloat(this.NoofError).toFixed(2))) / 100,
                    testwindow_start: testwinstrt,
                    testwindow_end: testwinend,
                    prewinstrt: prewinstrt,
                    prewinend: prewinend,
                    target_variable: this.TargetVariable,
                    banners: this.Banner,
                    segments: this.StoreGrid,
                    store_segments: this.Segment,
                    territories: this.Territory,
                    categories: this.Category
                }
            };
        }
        else if (this.TestStore && this.Margin) {
            data = {
                data: {
                    margin_of_error: (Number(parseFloat(this.NoofError).toFixed(2))) / 100,
                    num_test_stores: this.NoofTestStore,
                    testwindow_start: testwinstrt,
                    testwindow_end: testwinend,
                    prewinstrt: prewinstrt,
                    prewinend: prewinend,
                    target_variable: this.TargetVariable,
                    banners: this.Banner,
                    segments: this.StoreGrid,
                    store_segments: this.Segment,
                    territories: this.Territory,
                    categories: this.Category,
                }
            };
            if (!Object(util__WEBPACK_IMPORTED_MODULE_14__["isNullOrUndefined"])(this.NoofTestStore) && JSON.parse(this.NoofTestStore) < 30) {
                this.validate_teststore = true;
                return;
            }
            else {
                this.validate_teststore = false;
            }
        }
        var flag_conf;
        if (this.ConfLev == 1) {
            if (this.ConfLevel < 70 || this.ConfLevel > 99) {
                flag_conf = 'invalid';
            }
            else {
                flag_conf = 'valid';
            }
        }
        if ((this.ConfLev == 1 && this.TestStore == 1 && this.ConfLevel && this.NoofTestStore && flag_conf == 'valid') ||
            (this.TestStore == 1 && this.Margin == 1 && this.NoofError && this.NoofTestStore) ||
            (this.ConfLev == 1 && this.Margin == 1 && this.ConfLevel && this.NoofError && flag_conf == 'valid')) {
            this.homeService.Testparam(data).subscribe(function (apiresponse) {
                if (apiresponse.status == 'ok') {
                    _this.validate_teststore = false;
                    if (_this.ConfLev && _this.TestStore && flag == 'valid') {
                        _this.NoofError = (((apiresponse.data * 100) * 100 + Number.EPSILON) / 100).toFixed(2);
                        _this.toastr.success('', 'Margin of error computed');
                    }
                    else if (_this.ConfLev && _this.Margin && flag == 'valid') {
                        _this.NoofTestStore = apiresponse.data;
                        _this.toastr.success('', 'Number  of Teststores computed');
                    }
                    else if (_this.TestStore && _this.Margin) {
                        var apicnflevel = apiresponse.data * 100;
                        if (apicnflevel < 70 || apicnflevel > 99) {
                            _this.ConfLevel = apiresponse.data * 100;
                            _this.toastr.error('', 'Confidence level not in range');
                            _this.confrangeshow = true;
                        }
                        else {
                            _this.ConfLevel = apiresponse.data * 100;
                            _this.toastr.success('', 'Confidence level computed');
                            _this.confrangeshow = false;
                        }
                    }
                }
                else {
                    if (apiresponse.data) {
                        if (apiresponse.data != '') {
                            _this.validate_teststore = true;
                            _this.testStore_Errormsg = 'Calculated samplesize is less than 30 (Minimum required samplesize).Hence we suggest 30 as the sample size.';
                            // this.toastr.error('', apiresponse.data);
                        }
                        else {
                            _this.toastr.error('', 'Computation failed for given value!');
                        }
                    }
                    else {
                        _this.toastr.error('', 'Computation failed for given value!');
                    }
                }
            });
            if ((this.ConfLev == 1 && this.TestStore == 1 && this.ConfLevel && this.NoofTestStore) ||
                (this.TestStore == 1 && this.Margin == 1 && this.NoofError && this.NoofTestStore) ||
                (this.ConfLev == 1 && this.Margin == 1 && this.ConfLevel && this.NoofError)) {
                var flag;
                if (this.ConfLev == 1) {
                    if (this.ConfLevel < 70 || this.ConfLevel > 99) {
                        flag = 'invalid';
                        this.confrangeshow = true;
                    }
                    else {
                        this.confrangeshow = false;
                        // this.show_required_metrics = true;
                        flag = 'valid';
                    }
                }
                else {
                    // this.show_required_metrics = true;
                }
            }
        }
        else if (flag_conf == 'invalid') {
            this.confrangeshow = true;
        }
        else {
            //ivalid meesgae
            // this.show_required_metrics = false;
        }
    };
    SelectTestStoresComponent.prototype.filterCall = function () {
        var _this = this;
        this.sideNavservice.toggleFilter('Filter');
        setTimeout(function () {
            _this.globalService.publish('FILTER_OPEN_METHOD', {
                module: 'Select_Test_Stores',
                data: _this.ELEMENT_DATA3
            });
        });
    };
    SelectTestStoresComponent.prototype.FilterLoadTestStoreSelect = function (event) {
        var val = event.toLowerCase();
        this.tempFilter = this.ELEMENT_DATA3;
        var temp;
        if (event === '') {
            this.searchFilter = false;
        }
        else {
            this.searchFilter = true;
        }
        console.log(this.tempFilter, this.ELEMENT_DATA3, 'Filter Search');
        temp = this.tempFilter.filter(function (d) {
            return (d.store_no
                .toString()
                .toLowerCase()
                .indexOf(val) !== -1 ||
                d.banner
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                d.Territory
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                d.store_segment
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                !val);
        });
        if (this.tempFilter.length > 0) {
            var data = temp.filter(function (x) { return x.teststre_flg === 1; });
            this.testStoreSelectedDataCount = data.length;
            this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](temp);
            // setTimeout(() => this.TestStoreSelectTable.paginator = this.paginator);
        }
        else {
            this.ELEMENT_DATA3 = this.ELEMENT_DATA3;
            var data = this.ELEMENT_DATA3.filter(function (x) { return x.teststre_flg === 1; });
            this.testStoreSelectedDataCount = data.length;
            this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
            // setTimeout(() => this.TestStoreSelectTable.paginator = this.paginator);
        }
    };
    SelectTestStoresComponent.prototype.openDailog = function (templateRef) {
        this.dialogRef = this.dialog.open(templateRef);
    };
    SelectTestStoresComponent.prototype.closeDailog = function () {
        this.dialogRef.close();
    };
    // getCheckboxValues(data: any) {
    //   if (sessionStorage.getItem('region') == 'DEMO') {
    //     const el = this.confGridDEMO.find((itm: any) => itm === data);
    //     if (el) {
    //       this.confGridDEMO.splice(this.confGridDEMO.indexOf(el), 1);
    //     }
    //     this.displayedColumnsTestStoreDEMO = this.confGridDEMO;
    //     console.log(this.confGridDEMO);
    //   } else {
    //     const el = this.confGrid.find((itm: any) => itm === data);
    //     if (el) {
    //       this.confGrid.splice(this.confGrid.indexOf(el), 1);
    //     }
    //     this.displayedColumnsTestStore = this.confGrid;
    //     console.log(this.confGrid);
    //   }
    // }
    SelectTestStoresComponent.prototype.cancelUpload = function () {
        this.uploaded = false;
    };
    SelectTestStoresComponent.prototype.contineUpload = function () {
        if (this.uploadedData.length !== 0) {
            this.uploadShow = true;
            this.tableConstruct(this.uploadedData);
        }
    };
    SelectTestStoresComponent.prototype.sortComprassionTeststoreSelected = function (sort) {
        var data = this.ELEMENT_DATA3.slice();
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
        this.TestStoreSelectTable.paginator = this.paginator;
        if (!sort.active || sort.direction === '') {
            this.ELEMENT_DATA3 = data;
            return;
        }
        this.ELEMENT_DATA3 = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'store_no':
                    return compare_seletedstore(a.store_no, b.store_no, isAsc);
                case 'banner':
                    return compare_seletedstore(a.banner, b.banner, isAsc);
                // case 'city':
                //   return compare_seletedstore(a.city, b.city, isAsc);
                case 'Territory':
                    return compare_seletedstore(a.Territory, b.Territory, isAsc);
                case 'segment':
                    return compare_seletedstore(a.segment, b.segment, isAsc);
                case 'store_segment':
                    return compare_seletedstore(a.store_segment, b.store_segment, isAsc);
                case 'Street':
                    return compare_seletedstore(a.Street, b.Street, isAsc);
                default:
                    return 0;
            }
        });
        this.TestStoreSelectTable.paginator = this.paginator;
    };
    SelectTestStoresComponent.prototype.sortPopulationMapping = function (sort) {
        var data;
        if (!this.searchComprassion) {
            data = this.COMPRASSION_ELEMENT_DATA3.slice();
        }
        else {
            data = this.comprassionSelectedStores.data.slice();
        }
        this.comprassionSelectedStores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
        this.comprassionSelectedStores.paginator = this.paginatorComprassion;
        if (!sort.active || sort.direction === '') {
            this.COMPRASSION_ELEMENT_DATA3 = data;
            return;
        }
        var comprassionData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'store_no':
                    return compare_seletedstore(a.store_no, b.store_no, isAsc);
                case 'Street':
                    return compare_seletedstore(a.Street, b.Street, isAsc);
                // case 'city':
                //   return compare_seletedstore(a.city, b.city, isAsc);
                case 'similarity_value':
                    return compare_seletedstore(a.similarity_value, b.similarity_value, isAsc);
                case 'sales_corelation':
                    return compare_seletedstore(a.sales_corelation, b.sales_corelation, isAsc);
                default:
                    return 0;
            }
        });
        var filterData;
        if (this.searchComprassion) {
            filterData = comprassionData;
        }
        else {
            filterData = comprassionData;
            this.ELEMENT_DATA3 = comprassionData;
        }
        this.comprassionSelectedStores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](filterData);
        // this.comprassionSelectedStores.paginator = this.paginator;
    };
    SelectTestStoresComponent.prototype.getComprassionTable = function () {
        var _this = this;
        var data = {
            test_id: this.data.test_id,
            banners: this.data.banner,
            segments: this.data.store_grid,
            store_segments: this.data.segment,
            territories: this.data.territory,
            categories: this.data.category,
            target_variable: this.data.target_variable,
            selected_test_stores: this.data.selectedteststore,
            prewindow_start: this.data.pretest_startdt,
            prewindow_end: this.data.pretest_enddt,
            postwindow_start: this.data.testwin_startdt,
            postwindow_end: this.data.testwin_enddt
        };
        this.homeService.selected_testStore_comprassion(data).subscribe(function (apiresponse) {
            if (apiresponse.status == 'ok') {
                _this.tableConstruct(apiresponse.data);
            }
        });
    };
    SelectTestStoresComponent.prototype.viewInsights = function () {
        this.showInsights = !this.showInsights;
    };
    SelectTestStoresComponent.prototype.ngOnChanges = function (changes) {
        if (changes.testStore_population) {
            this.selectStoreView = this.testStore_population;
            console.log(this.selectStoreView, 'when go previous');
            if (!this.selectStoreView) {
                this.showTestSummaryTable();
                this.test_analysis_result();
            }
        }
    };
    SelectTestStoresComponent.prototype.FilterComprassionStoreSelect = function (event) {
        var val = event.toLowerCase();
        this.tempComprassionFilter = this.COMPRASSION_ELEMENT_DATA3;
        console.log(this.tempComprassionFilter);
        if (event === '') {
            this.searchComprassion = false;
        }
        else {
            this.searchComprassion = true;
        }
        var temp;
        temp = this.tempComprassionFilter.filter(function (d) {
            console.log(d);
            if (d.similarity_value != null) {
                return (d.store_no
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    d.Street
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.similarity_value
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    d.sales_corelation
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    !val);
            }
        });
        if (this.tempComprassionFilter.length > 0) {
            this.totalComprassionTestStores = temp.length;
            this.comprassionSelectedStores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](temp);
        }
        else {
            this.COMPRASSION_ELEMENT_DATA3 = this.COMPRASSION_ELEMENT_DATA3;
            this.totalComprassionTestStores = this.COMPRASSION_ELEMENT_DATA3.length;
            this.comprassionSelectedStores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.COMPRASSION_ELEMENT_DATA3);
        }
    };
    SelectTestStoresComponent.prototype.showTestSummaryTable = function () {
        var _this = this;
        var data = {
            test_id: this.data.test_id,
            banners: this.data.banner,
            segments: this.data.store_grid,
            store_segments: this.data.segment,
            territories: this.data.territory,
            categories: this.data.category,
            target_variable: this.data.target_variable,
            selected_test_stores: this.selectTestStoresFormat(),
            prewindow_start: this.data.pretest_startdt,
            prewindow_end: this.data.pretest_enddt,
            postwindow_start: this.data.testwin_startdt,
            postwindow_end: this.data.testwin_enddt
        };
        this.homeService.testStore_population_summary(data).subscribe(function (apiresponse) {
            if (apiresponse.status == 'ok') {
                if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('RSV')) {
                    _this.showRSV = true;
                    _this.csv_pop = apiresponse['data']['variables_metrics_dict']['RSV']['Population Mean'];
                    _this.csv_poptestmean = apiresponse['data']['variables_metrics_dict']['RSV']['Test Mean'];
                    _this.csv_pvalue = _this.convertPercentage(apiresponse['data']['pvalue_dict']['RSV']);
                }
                else {
                    _this.showRSV = false;
                }
                if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('Store_Size_Sq_Ft')) {
                    _this.showsizeSqft = true;
                    _this.out_pop = apiresponse['data']['variables_metrics_dict']['Store_Size_Sq_Ft']['Population Mean'];
                    _this.out_poptestmean = apiresponse['data']['variables_metrics_dict']['Store_Size_Sq_Ft']['Test Mean'];
                    _this.out_testPvalue = _this.convertPercentage(apiresponse['data']['pvalue_dict']['Store_Size_Sq_Ft']);
                }
                else {
                    _this.showsizeSqft = false;
                }
                if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('Manned_Checkouts')) {
                    _this.showManned = true;
                    _this.touch_ability = apiresponse['data']['variables_metrics_dict']['Manned_Checkouts']['Population Mean'];
                    _this.touch_ability_mean = apiresponse['data']['variables_metrics_dict']['Manned_Checkouts']['Test Mean'];
                    _this.touch_pValue = _this.convertPercentage(apiresponse['data']['pvalue_dict']['Manned_Checkouts']);
                }
                else {
                    _this.showManned = false;
                }
                if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('total_checkout_locations')) {
                    _this.showTotal = true;
                    _this.totalCheckout = apiresponse['data']['variables_metrics_dict']['total_checkout_locations']['Population Mean'];
                    _this.totalCheckoutMean = apiresponse['data']['variables_metrics_dict']['total_checkout_locations']['Test Mean'];
                    _this.totalCheckoutpValue = _this.convertPercentage(apiresponse['data']['pvalue_dict']['total_checkout_locations']);
                }
                else {
                    _this.showTotal = false;
                }
            }
        });
    };
    SelectTestStoresComponent.prototype.showComprassionChart = function () {
        var _this = this;
        var data = {
            test_id: this.data.test_id,
            banners: this.data.banner,
            segments: this.data.store_grid,
            store_segments: this.data.segment,
            territories: this.data.territory,
            categories: this.data.category,
            target_variable: this.data.target_variable,
            selected_test_stores: this.selectTestStoresFormat(),
            prewindow_start: this.data.pretest_startdt,
            prewindow_end: this.data.pretest_enddt,
            postwindow_start: this.data.testwin_startdt,
            postwindow_end: this.data.testwin_enddt
        };
        this.homeService.testStore_population_correlation(data).subscribe(function (apiresponse) {
            if (apiresponse.status == 'ok') {
                console.log(apiresponse.data);
                _this.seriesData = [];
                _this.categories = [];
                var targetVariableValue = _this.data.target_variable;
                var avgTest = apiresponse.data.metrics_dict['Avg_Similarity'];
                _this.avg_test_population = (avgTest * 100).toFixed();
                var salesTest = apiresponse.data.metrics_dict['Avg_Correlation'];
                _this.sales_test_population = (salesTest * 100).toFixed();
                var data_1 = JSON.parse(apiresponse.data.combined_avg);
                var _loop_1 = function (i) {
                    var obj = { name: '', color: '' };
                    _this.categories.push(data_1[i]['Week'].toString());
                    if (_this.seriesData.length === 0) {
                        obj.name = data_1[i]['Group'];
                        if (data_1[i]['Group'] === 'Test') {
                            obj.color = '#d40061';
                        }
                        else {
                            obj.color = '#ec9b02';
                        }
                        var datValue = [];
                        datValue.push(data_1[i]['Average_' + targetVariableValue]);
                        obj['data'] = datValue;
                        _this.seriesData.push(obj);
                    }
                    else {
                        var index = _this.seriesData.findIndex(function (x) { return x.name === data_1[i]['Group']; });
                        if (index === -1) {
                            obj.name = data_1[i]['Group'];
                            if (data_1[i]['Group'] === 'Test') {
                                obj.color = '#d40061';
                            }
                            else {
                                obj.color = '#ec9b02';
                            }
                            var datValue = [];
                            datValue.push(data_1[i]['Average_' + targetVariableValue]);
                            obj['data'] = datValue;
                            _this.seriesData.push(obj);
                        }
                        else {
                            _this.seriesData[index].data.push(data_1[i]['Average_' + targetVariableValue]);
                        }
                    }
                };
                for (var i = 0; i < data_1.length; i++) {
                    _loop_1(i);
                }
                var uniqueData = Array.from(new Set(_this.categories));
                _this.categories = uniqueData;
                console.log(_this.seriesData, _this.categories, 'chart Datas');
                setTimeout(function () { return _this.generateHighCharts(_this.seriesData, _this.categories); });
            }
        });
    };
    SelectTestStoresComponent.prototype.test_analysis_result = function () {
        var _this = this;
        var preperiod_start = this.data.pretest_startdt;
        var preperiod_end = this.data.pretest_enddt;
        var postperiod_start = this.data.testwin_startdt;
        var postperiod_end = this.data.testwin_enddt;
        var breakeven_list = this.data.break_even_lift;
        var selectedTargetVariable = this.data.target_variable;
        var test_id = this.data.test_id;
        var data = {
            test_id: test_id,
            preperiod_start: preperiod_start,
            preperiod_end: preperiod_end,
            postperiod_start: postperiod_start,
            postperiod_end: postperiod_end,
            mesmetric_name: selectedTargetVariable,
            break_even_lift: JSON.stringify(JSON.parse(breakeven_list)),
        };
        this.testMeasureService.controlStoreMeasurementpost(data).subscribe(function (apiresponse) {
            if (apiresponse.status == 'ok') {
                _this.showComprassionChart();
            }
            else if (apiresponse.status == 'not_ok') {
            }
        });
    };
    SelectTestStoresComponent.prototype.selectTestStoresFormat = function () {
        var mystres = this.comprassionSelectedStores.data;
        var finalisedData = [];
        for (var i = 0; i < mystres.length; i++) {
            finalisedData.push({
                Customer_Number: mystres[i]['store_no'],
                Customer_Status: mystres[i]['customer_status'],
                Customer_Group: mystres[i]['banner'],
                City: mystres[i]['city'],
                Outlet_Address: mystres[i]['Street'],
                Postcode: mystres[i]['zipcode'],
                is_teststore: mystres[i]['teststre_flg'],
                Correlation: mystres[i]['sales_corelation'],
                Similarity_Measure: mystres[i]['similarity_value'],
                Customer_Name: mystres[i]['customer_name'],
                index: mystres[i]['index'],
                Store_Size_Sq_Ft: mystres[i]['csvoutletShow'],
                Territory_Geocode: this.getTerritoryData(mystres[i]['Territory']),
                Store_Number: mystres[i]['store_segment'],
                Touchability_Score: mystres[i]['touchability_score'],
                store_id: mystres[i]['store_id'],
                Region: mystres[i]['region'],
                Division: mystres[i]['division'],
                Sales_Representative: mystres[i]['sales_represtative'],
                total_checkout_locations: mystres[i]['total_checkout_locations'],
                Manned_Checkouts: mystres[i]['Manned_Checkouts']
            });
        }
        console.log(finalisedData, 'finalisedData');
        return finalisedData;
    };
    SelectTestStoresComponent.prototype.generateHighCharts = function (seriesData, category) {
        var options = {
            chart: {
                type: 'areaspline',
                height: 400,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                y: 0,
                padding: 0,
                itemMarginTop: 0,
                itemMarginBottom: 0,
                itemStyle: {
                    fontSize: '10px'
                }
            },
            xAxis: {
                categories: category,
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            yAxis: {
                title: {
                    text: 'Standardised sales'
                },
                style: {
                    fontFamily: 'Mulish_regular'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ''
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.1
                }
            },
            series: seriesData
        };
        highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"]('test_population_charts', options);
    };
    SelectTestStoresComponent.prototype.convertPercentage = function (value) {
        if (value !== undefined) {
            var convertedValue = (1 - value) * 100;
            return Math.floor(convertedValue) + '%';
        }
        else {
            return '-';
        }
    };
    SelectTestStoresComponent.prototype.roundOff = function (val) {
        var tempVal = Math.round(val);
        return tempVal;
    };
    SelectTestStoresComponent.prototype.roundOffWithComma = function (val) {
        var tempVal = Math.round(val);
        return tempVal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    SelectTestStoresComponent.prototype.getDataUpdated = function () {
        var _this = this;
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]([]);
        if (!this.tableView) {
            this.mapTableData = this.TestStoreSelectTable.data;
            this.getMarkerList();
        }
        else {
            // ODEMOy To make the teststore Flag true
            var filteredData_1 = this.mapTableData.filter(function (x) { return x.teststre_flg === 1; });
            if (filteredData_1.length > 0) {
                var _loop_2 = function (i) {
                    var index = this_1.ELEMENT_DATA3.findIndex(function (x) { return x.store_no === filteredData_1[i]['store_no']; });
                    if (index !== -1) {
                        this_1.ELEMENT_DATA3[index]['teststre_flg'] = 1;
                    }
                };
                var this_1 = this;
                for (var i = 0; i < filteredData_1.length; i++) {
                    _loop_2(i);
                }
            }
            var temp = [];
            for (var i = 0; i < this.ELEMENT_DATA3.length; i++) {
                if (this.ELEMENT_DATA3[i].teststre_flg == 1) {
                    temp.push(this.ELEMENT_DATA3[i]);
                }
            }
            this.testStoreSelectedDataCount = temp.length;
            this.totalTestStores = this.ELEMENT_DATA3.length;
            this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
            setTimeout(function () { return _this.TestStoreSelectTable.paginator = _this.paginator; });
            console.log(this.TestStoreSelectTable.paginator, 'pagintorset');
            // this.changeDetectorRefs.detectChanges();
            this.strselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, temp);
            // this.loadsize = 10;
        }
    };
    SelectTestStoresComponent.prototype.onMouseOver = function (infoWindow, $event) {
        infoWindow.open();
    };
    SelectTestStoresComponent.prototype.onMouseOut = function (infoWindow, $event) {
        infoWindow.close();
    };
    SelectTestStoresComponent.prototype.showConfirm = function (obj) {
        if (this.selectTestStores === '2' && this.testStoreSelectedDataCount < Number(this.NoofTestStore)) {
            this.openDailogConfirm(this.confirmDialog);
        }
        else {
            this.Savestep3One(obj.currentComponent);
        }
    };
    SelectTestStoresComponent.prototype.openDailogConfirm = function (template) {
        this.dialogRefConfirm = this.dialog.open(template);
    };
    SelectTestStoresComponent.prototype.closeDailogConfirm = function () {
        this.dialogRefConfirm.close();
    };
    SelectTestStoresComponent.prototype.isAllSelected = function () {
        var numSelected = this.strselection.selected.length;
        var numRows = this.TestStoreSelectTable.data.length;
        return numSelected === numRows;
    };
    SelectTestStoresComponent.prototype.masterToggle = function () {
        if (this.isAllSelected() === false) {
            this.masterChecked(false);
        }
        else {
            this.masterChecked(true);
        }
    };
    SelectTestStoresComponent.prototype.sellectAllStores = function (event) {
        console.log('callin when SelectAllStores', event);
        for (var i = 0; i < this.ELEMENT_DATA3.length; i++) {
            if (event === true) {
                this.ELEMENT_DATA3[i]['teststre_flg'] = 1;
            }
            else {
                this.ELEMENT_DATA3[i]['teststre_flg'] = 0;
            }
        }
        var data = this.ELEMENT_DATA3.filter(function (x) { return x.teststre_flg === 1; });
        if (data.length > 0) {
            this.testStoreSelectedDataCount = data.length;
        }
        else {
            this.testStoreSelectedDataCount = 0;
        }
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
        this.TestStoreSelectTable.paginator = this.paginator;
        this.isChecked = true;
    };
    SelectTestStoresComponent.prototype.masterChecked = function (event) {
        var _this = this;
        if (!event) {
            this.TestStoreSelectTable.data.forEach(function (row) {
                _this.strselection.select(row);
            });
            this.sellectAllStores(!event);
        }
        else {
            this.strselection.clear();
            this.sellectAllStores(!event);
        }
    };
    SelectTestStoresComponent.prototype.formatfilteredData = function (dataValue) {
        var data = [];
        var tempData = this.ELEMENT_DATA3;
        this.filterApply(dataValue, tempData);
    };
    SelectTestStoresComponent.prototype.filterApply = function (dataValue, tempData) {
        var keyValues = [];
        var valuesArray = [];
        for (var i = 0; i < dataValue.length; i++) {
            keyValues.push(dataValue[i]['name']);
            for (var j = 0; j < dataValue[i]['data'].length; j++) {
                // console.log(dataValue[i], dataValue[i]['data'][j])
                valuesArray.push(dataValue[i]['data'][j]);
            }
        }
        if (valuesArray.length > 0) {
            this.filterApplied = true;
        }
        else {
            this.filterApplied = false;
        }
        var result = tempData.filter(function (e) {
            return keyValues.every(function (a) {
                return !valuesArray.includes(e[a]);
            });
        });
        tempData = result;
        console.log(result, 'tempDatavalue filter');
        this.tempFiteredArray = tempData;
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](tempData);
        this.TestStoreSelectTable.paginator = this.paginator;
    };
    // When click previous the Checked flag are reset
    SelectTestStoresComponent.prototype.previuosData = function (ary) {
        var _this = this;
        this.ELEMENT_DATA3 = ary;
        var temp = [];
        for (var i = 0; i < this.ELEMENT_DATA3.length; i++) {
            if (this.ELEMENT_DATA3[i].teststre_flg == 1) {
                temp.push(this.ELEMENT_DATA3[i]);
            }
        }
        console.log(this.ELEMENT_DATA3);
        this.testStoreSelectedDataCount = temp.length;
        this.totalTestStores = ary.length;
        this.TestStoreSelectTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA3);
        setTimeout(function () { return _this.TestStoreSelectTable.paginator = _this.paginator; });
        this.changeDetectorRefs.detectChanges();
        this.strselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, temp);
        this.loadsize = 10;
    };
    SelectTestStoresComponent.ɵfac = function SelectTestStoresComponent_Factory(t) { return new (t || SelectTestStoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_16__["TestConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_11__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_15__["TestMeasureService"])); };
    SelectTestStoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectTestStoresComponent, selectors: [["app-select-test-stores"]], viewQuery: function SelectTestStoresComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginatorComprassion = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmDialog = _t.first);
        } }, inputs: { testStore_population: "testStore_population" }, outputs: { moveNextStep: "moveNextStep", tipsData: "tipsData", showComprassionView: "showComprassionView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 3, consts: [[4, "ngIf"], ["confirmDialog", ""], [1, "fontMulishRegular"], [1, "mat-card_content"], [1, "header_content"], [2, "font-size", "13px"], ["matTooltip", "Choose the target variable", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], [1, "row"], [1, "col-md-12"], [1, "space-radio", 3, "ngModel", "ngModelChange"], ["value", "1", 1, "ml-2", 3, "checked"], ["value", "2", 1, "ml-2", 3, "checked"], [1, "space-radio2", 3, "ngModel", "ngModelChange"], [1, "row", "pt-2", "pb-2"], [1, "col-12"], [2, "float", "left", "color", "red"], ["mat-raised-button", "", 1, "font_size_button", 2, "float", "right", "background-color", "#000091", "color", "white", 3, "click"], [1, "fontMulishRegular", 2, "border-radius", "15px 15px 15px 15px !important", "height", "4rem", 3, "hidden"], [1, "fontMulishRegular", 2, "height", "33rem !important", "border-radius", "0px 0px 15px 15px !important", "bottom", "1rem", 3, "hidden"], [3, "hidden"], [2, "width", "40%", "float", "left"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 2, "font-family", "Mulish_regular !important", 3, "dataSource", "matSortChange"], ["matColumnDef", "power"], ["mat-header-cell", "", "mat-sort-header", "", "class", "remove_border", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "white-space: nowrap; text-align: center;font-size: 11px !important;", 4, "matCellDef"], ["matColumnDef", "number_of_stores"], ["mat-header-row", "", "style", "white-space: nowrap !important;height: 38px !important;", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "style", "height: 38px !important;", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "legend"], [1, "acceptableRange"], [1, "arTxt"], [2, "width", "60%", "float", "right"], ["id", "power-chart"], [1, "legend2"], [1, "acceptableRange2"], [1, "arTxt2"], ["type", "number", "id", "margin-error", "placeholder", "Enter the margin of error %", 1, "form-control", 2, "width", "25% !important", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "no-of-teststore", "placeholder", "Enter the no.of teststore", 1, "form-control", 2, "width", "25% !important", 3, "ngModel", "ngModelChange"], [2, "font-size", "13px", "width", "75%", "float", "left"], ["mat-header-cell", "", "mat-sort-header", "", 1, "remove_border"], [1, "table-header-label"], ["mat-cell", "", 2, "white-space", "nowrap", "text-align", "center", "font-size", "11px !important"], [3, "ngClass"], [1, "table-header-label", 2, "padding-left", "8px"], [3, "ngClass", 4, "ngIf"], ["mat-header-row", "", 2, "white-space", "nowrap !important", "height", "38px !important"], ["mat-row", "", 2, "height", "38px !important", 3, "ngClass", "click"], [1, "fontMulishRegular", 2, "margin-bottom", "2%"], [2, "color", "#66768f"], ["src", "assets/images/Icons_side arrow.png", 1, "arrow_navigate", 3, "click"], [1, "route_container_top"], [2, "font-weight", "bold", "font-size", "16px"], [2, "float", "right"], [3, "ngModel", "value", "ngModelChange"], ["grou", "matButtonToggleGroup"], ["aria-label", "Text align left", 3, "value", "ngClass"], [1, "toggle_icon"], ["aria-label", "Text align center", 3, "value", "ngClass"], [1, "fontMulishRegular", 2, "margin-top", "1.5rem"], [1, "col-md-12", 2, "padding-top", "12px", "padding-bottom", "12px"], [3, "ngModel", "ngModelChange"], ["value", "1", 3, "checked"], ["class", "row", 4, "ngIf"], ["class", "option_error", 4, "ngIf"], [1, "col-6"], [1, "col-md-4", "col-lg-4", "col-sm-12"], [1, "form-group"], ["type", "checkbox", "name", "conf", 3, "ngModel", "disabled", "ngModelChange", "change"], ["id", "exampleInputEmail1", 1, "label_change"], ["matTooltip", "Confidence level determines the quality of test, in other words, it tells with how much certainty the test results can be implemented in the market. Recommended level: 85%", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["type", "number", "id", "exampleInputEmail1", "placeholder", "Enter Confidence Level", 1, "form-control", "borderradnone", 3, "ngModel", "disabled", "keypress", "keydown", "ngModelChange", "keyup"], ["type", "checkbox", "name", "margin", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "label_change"], ["matTooltip", "Minimum difference of the Target variable to be observed between test and control group. (Recommended range - 3% to 4%)", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["type", "number", "id", "exampleInputEmail1", "placeholder", "Enter Margin of Error", 1, "form-control", "borderradnone", 3, "ngModel", "disabled", "keydown", "keypress", "ngModelChange", "keyup"], ["type", "checkbox", "name", "teststores", 3, "ngModel", "disabled", "ngModelChange", "change"], ["matTooltip", "Choose the number of stores which gives a high confidence level and a decent measurement of error. (Minimum sample size - 30 to 40)", "src", "assets/images/information.png", "alt", "sort", 1, "infoicon", 3, "matTooltipPosition"], ["type", "number", "id", "exampleInputEmail1", "placeholder", "Enter Number of test stores", 1, "form-control", "borderradnone", 3, "ngModel", "disabled", "keydown", "ngModelChange", "keyup"], [2, "color", "red"], [1, "option_error"], [1, "upload_container", "mt-2"], [3, "click", 4, "ngIf"], [1, "upload_text1", "font_mulish_regular"], [1, "upload_text2", "font_mulish_bold", "btn-link", "dowDEMOoad_template", 3, "click"], [1, "upload_text1", "font_mulish_regular", "font_color_fail"], [1, "upload_text1", "font_mulish_regular", "font_color"], [1, "upload_text3", "font_mulish_regular"], ["mat-button", "", 1, "button-color-enable", "font_size_button", 2, "margin-right", "1rem", 3, "click"], ["mat-button", "", 1, "button-color-enabled-background", "pl-2", "font_size_button", 3, "click"], [3, "click"], ["mat-button", "", 1, "pl-2", "button-color-enabled-background", 2, "margin-top", "1rem"], ["type", "file", "id", "grade_csv", "accept", ".xlsx", "name", "selectTestStore", 2, "display", "none", 3, "change"], ["uploadFile", ""], ["style", "text-align: center;", 4, "ngIf"], [3, "tableData", "columnHeader", "tableHeader", "stringSelection", "selectedStrTableData", "checkboxLabelTeststoreData", "masterToggleData", "isAllSelectedData", "selectAllStoresData", "callFilterData", "callSortData", "searchFilter"], [2, "text-align", "center"], [1, "no_rec_found"], [1, "col-md-12", "col-sm-12"], [3, "latitude", "longitude", "zoom", "usePanning", "mapReady"], [3, "agmFitBounds", "iconUrl", "latitude", "longitude", "markerDraggable", "animation", "markerClick", "mouseOut", "mouseOver", 4, "ngFor", "ngForOf"], [3, "agmFitBounds", "iconUrl", "latitude", "longitude", "markerDraggable", "animation", "markerClick", "mouseOut", "mouseOver"], [3, "disableAutoPan"], ["infoWindow", ""], [1, "info_window", "fontMulishRegular"], [1, "font_size"], [1, "store-id-map"], ["style", "padding-bottom: 15px !important;", 4, "ngIf"], [2, "padding-bottom", "15px !important"], [3, "tableData", "columnHeader", "tableType", "callSortData", "searchFilter"], [1, "mat_heading"], [1, "col-md-12", "col-sm-12", "col-lg-12"], ["id", "test_population_charts"], ["fxLayout", "row pt-3", "fxLayoutAlign", "space-between center"], ["fxFlex", "48", 1, "background_change"], [1, "col-md-3", "col-lg-3", "col-sm-3", "control_value", "text-center"], [1, "col-md-9", "col-lg-9", "col-sm-9", "control_text"], [1, "row", "mt-4"], ["class", "table font_mulish_regular", 4, "ngIf"], [1, "table", "font_mulish_regular"], [1, "table_head_color"], [1, "border_style_left"], [1, "border_style_right"], [1, "border_change"], [2, "width", "25rem"], [2, "float", "right", "padding-top", "1rem", "margin-bottom", "-10px"], ["mat-button", "", 1, "button-color", 2, "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "submit", 1, "pl-2", "button-color-enabled-background", 2, "cursor", "pointer", 3, "click"], [1, "fontMulishBold", "font_size"]], template: function SelectTestStoresComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SelectTestStoresComponent_div_0_Template, 162, 19, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectTestStoresComponent_ng_container_2_Template, 4, 1, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectTestStoresComponent_ng_container_4_Template, 6, 2, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectTestStoresComponent_ng_template_6_Template, 17, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suggestionView);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showComprassion);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showComprassion);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _shared_component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_25__["CommonTableComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmFitBounds"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmInfoWindow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultFlexDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"]], styles: [".mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  padding: 5px !important;\n  white-space: nowrap;\n}\n\n#comprassiontable[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], td.mat-header-cell[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n\ntd.mat-header-cell[_ngcontent-%COMP%] {\n  background-color: #f3f4f8;\n  font-weight: bolder;\n  padding-left: 0px !important;\n  white-space: nowrap;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  white-space: nowrap;\n  background-color: #f3f4f8;\n  font-weight: bolder;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 35px !important;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.no_records[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #cfD4De;\n}\n\n.fontMulishBold[_ngcontent-%COMP%] {\n  font-family: Mulish_bold !important;\n}\n\n.fontMulishRegular[_ngcontent-%COMP%] {\n  font-family: Mulish_regular !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 200;\n  background-color: #f3f4f7;\n  border-radius: 0.5rem;\n  border-color: white;\n}\n\n  .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  color: #000091 !important;\n}\n\n  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard, .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n}\n\n  .mat-button-toggle-checked {\n  background-color: #2fd1aa !important;\n  color: #000091 !important;\n  border-radius: 5px;\n}\n\n  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  padding: 1px 5px !important;\n  font-family: Mulish_regular;\n  font-size: 0.813rem;\n}\n\n  .mat-button-toggle-label-content {\n  line-height: 26px !important;\n}\n\n.toggle_icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding-top: 3px;\n}\n\n  .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none !important;\n}\n\n.not_checked[_ngcontent-%COMP%] {\n  color: #6f7e95 !important;\n  background: #f3f4f7 !important;\n}\n\n.option_error[_ngcontent-%COMP%] {\n  color: red;\n  float: left;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.download_template[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.file[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 100px;\n}\n\n.file[_ngcontent-%COMP%]    > input[type=file][_ngcontent-%COMP%] {\n  position: absoulte;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.arrow_navigate[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n}\n\n.two-column-div[_ngcontent-%COMP%] {\n  \n  -moz-columns: 2;\n  \n  columns: 2;\n}\n\n.left-div[_ngcontent-%COMP%] {\n  width: 45%;\n  float: left;\n}\n\n.right-div[_ngcontent-%COMP%] {\n  width: 55%;\n  float: right;\n}\n\n.space-radio[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 34%;\n  margin-top: 3%;\n  margin-left: -1%;\n}\n\n.space-radio2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 40.6%;\n  margin-top: 3%;\n  margin-left: -1%;\n}\n\n.file[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #666;\n  color: #fff;\n  border-radius: 5px;\n  line-height: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  \n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.font_color[_ngcontent-%COMP%] {\n  color: #2fd1aa;\n  font-weight: bold;\n}\n\n.mat_heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  font-family: Mulish_bold;\n}\n\n.background_change[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 145, 0.05);\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.control_value[_ngcontent-%COMP%] {\n  font-family: Mulish_bold;\n  font-size: 19px;\n  margin: auto;\n}\n\n.control_text[_ngcontent-%COMP%] {\n  font-family: Mulish_regular;\n  font-size: 0.75rem;\n  color: #4C596B;\n}\n\n.display_container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.inputText[_ngcontent-%COMP%] {\n  background-color: #f3f4f7;\n  border-radius: 0.5rem;\n  border-color: white !important;\n  border: 0px;\n  padding: 0.5rem;\n}\n\n.border_style_left[_ngcontent-%COMP%] {\n  border-radius: 10px 0px 0px 10px;\n}\n\n.border_style_right[_ngcontent-%COMP%] {\n  border-radius: 0px 10px 10px 0px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 0px;\n  color: #66768F;\n}\n\n.border_change[_ngcontent-%COMP%] {\n  border-top: 0px !important;\n}\n\n.table_head_color[_ngcontent-%COMP%] {\n  background-color: #F3F4F7;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-size: 0.688rem;\n}\n\n  .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n}\n\n.align_center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.align_left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.info_window[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.font_size[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.store-id-map[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n  button.gm-ui-hover-effect {\n  visibility: hidden !important;\n}\n\n.font_green[_ngcontent-%COMP%] {\n  color: green !important;\n  font-weight: bold !important;\n}\n\n.font_normal[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  color: black;\n}\n\n.background-color-green[_ngcontent-%COMP%] {\n  background-color: palegreen;\n}\n\n#power-chart[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n\n.legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n}\n\n.legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  width: 12px;\n  height: 12px;\n  margin: 2px;\n}\n\n\n\n.legend[_ngcontent-%COMP%]   .acceptableRange[_ngcontent-%COMP%] {\n  background-color: palegreen;\n  border: 1px solid green;\n}\n\n.arTxt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  width: 6rem !important;\n  line-height: 0.8rem;\n}\n\n.legend2[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: 10rem;\n}\n\n.legend2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n}\n\n.legend2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  width: 12px;\n  height: 12px;\n  margin: 2px;\n}\n\n\n\n.legend2[_ngcontent-%COMP%]   .acceptableRange2[_ngcontent-%COMP%] {\n  background-color: palegreen;\n  border: 1px solid green;\n}\n\n.arTxt2[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  width: 6rem !important;\n  line-height: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRlc3Qvc2VsZWN0LXRlc3Qtc3RvcmVzL3NlbGVjdC10ZXN0LXN0b3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDJCQUFBO0FBTkY7O0FBU0U7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFRRTtFQUNFLDhCQUFBO0FBTEo7O0FBUUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFTRTtFQUNFLHVCQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTRTtFQUNFLG1DQUFBO0FBTko7O0FBU0U7RUFDRSxzQ0FBQTtBQU5KOztBQVNBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUE7QUFORjs7QUFTQTtFQUNFLDZCQUFBO0FBTkY7O0FBU0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNHLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQU5IOztBQVNBO0VBQ0UsNEJBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsNEJBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUFORjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ3NCLDBCQUFBO0VBQ3BCLGVBQUE7RUFBaUIsWUFBQTtFQUNqQixVQUFBO0FBSkY7O0FBT0E7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQUpEOztBQU9BO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUFKRDs7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxzREFBQTtBQUpGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBVEY7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVRKOztBQVdBO0VBQ0UsZ0NBQUE7QUFSRjs7QUFXQTtFQUNFLGdDQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVVBO0VBQ0UsMEJBQUE7QUFQRjs7QUFTQTtFQUNFLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSw2QkFBQTtBQU5GOztBQVNBO0VBQ0UsMkJBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsNkJBQUE7QUFORjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QUFORjs7QUFTQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0UsMkJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFTQTtFQUFVLGdCQUFBO0VBQ1IsZ0JBQUE7RUFDQSxpQkFBQTtBQUxGOztBQU1BO0VBQWEsV0FBQTtFQUFhLGtCQUFBO0FBRDFCOztBQUVBO0VBQWUsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtBQUt2RDs7QUFKQSxnQkFBQTs7QUFDQTtFQUEyQiwyQkFBQTtFQUN6Qix1QkFBQTtBQVFGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVBBO0VBQVcsZ0JBQUE7RUFDVCxrQkFBQTtBQVdGOztBQVZBO0VBQWMsV0FBQTtFQUFhLGtCQUFBO0FBZTNCOztBQWRBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtFQUFjLFdBQUE7QUFxQnhEOztBQXBCQSxnQkFBQTs7QUFDQTtFQUE2QiwyQkFBQTtFQUMzQix1QkFBQTtBQXdCRjs7QUF2QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBMEJGIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXRlc3Qvc2VsZWN0LXRlc3Qtc3RvcmVzL3NlbGVjdC10ZXN0LXN0b3Jlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICNleGFtcGxlSW5wdXRFbWFpbDF7XG4vLyAgIH1cblxuICAvLyAuc2VsZWN0ZWRUZXN0U3RvcmVIZWFkZXJ7XG4gIC8vICAgZmxvYXQ6IGxlZnQ7XG4gIC8vICAgbWFyZ2luLXRvcDogMTAlO1xuICAvLyB9XG4ubWF0LWVsZXZhdGlvbi16OHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4gIHRkLm1hdC1jZWxsIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gICNjb21wcmFzc2lvbnRhYmxlIHRkLm1hdC1jZWxsLCB0ZC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwhaW1wb3J0YW50O1xuICB9XG5cbiAgdGQubWF0LWhlYWRlci1jZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICB0ci5tYXQtaGVhZGVyLXJvd3tcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAubm9fcmVjb3Jkc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNjZkQ0RGU7XG4gIH1cblxuICAuZm9udE11bGlzaEJvbGR7XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9udE11bGlzaFJlZ3VsYXJ7XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9yZWd1bGFyICFpbXBvcnRhbnQ7XG4gIH1cblxuLmZvcm0tY29udHJvbHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNztcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtcbiAgY29sb3I6ICMwMDAwOTEhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3JkZXItcmFkaXVzOiA4cHghaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmZkMWFhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwMDkxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgIHBhZGRpbmc6IDFweCA1cHggIWltcG9ydGFudDtcbiAgIGZvbnQtZmFtaWx5OiBNdWxpc2hfcmVndWxhcjtcbiAgIGZvbnQtc2l6ZTogMC44MTNyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4IWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZV9pY29ue1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle1xuICBib3JkZXItbGVmdDogbm9uZSFpbXBvcnRhbnQ7XG59XG5cbi5ub3RfY2hlY2tlZHtcbiAgY29sb3I6ICM2ZjdlOTUhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY3IWltcG9ydGFudDtcbn1cblxuLm9wdGlvbl9lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZG93bmxvYWRfdGVtcGxhdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmZpbGUgPiBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvdWx0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwXG59XG5cbi5hcnJvd19uYXZpZ2F0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHdvLWNvbHVtbi1kaXYge1xuICAtd2Via2l0LWNvbHVtbnM6IDI7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAtbW96LWNvbHVtbnM6IDI7IC8qIEZpcmVmb3ggKi9cbiAgY29sdW1uczogMjtcbiB9XG5cbi5sZWZ0LWRpdiB7XG5cdHdpZHRoOiA0NSU7XG5cdGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQtZGl2IHtcblx0d2lkdGg6IDU1JTtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3BhY2UtcmFkaW97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDM0JTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAtMSU7XG59XG5cbi5zcGFjZS1yYWRpbzJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDQwLjYlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbn1cblxuLmZpbGUgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgLyogcGFkZGluZzogMjBweCAxMHB4OyAqL1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuXG4vLzo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4vLyAgY29sb3I6ICM2ZjdlOTUhaW1wb3J0YW50O1xuLy8gIGJhY2tncm91bmQ6ICNmM2Y0ZjchaW1wb3J0YW50O1xuLy99XG4uZm9udF9jb2xvcntcbiAgY29sb3I6ICMyZmQxYWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0X2hlYWRpbmd7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZDtcbn1cblxuLmJhY2tncm91bmRfY2hhbmdle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDE0NSwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRyb2xfdmFsdWV7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW46YXV0b1xufVxuXG4uY29udHJvbF90ZXh0e1xuICBmb250LWZhbWlseTogTXVsaXNoX3JlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM0QzU5NkI7XG59XG5cbi5kaXNwbGF5X2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0VGV4dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNztcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5ib3JkZXJfc3R5bGVfbGVmdHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG59XG5cbi5ib3JkZXJfc3R5bGVfcmlnaHR7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xufVxuXG50YWJsZSB0ciB0aHtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBjb2xvcjogIzY2NzY4Rjtcbn1cbi5ib3JkZXJfY2hhbmdle1xuICBib3JkZXItdG9wOiAwcHghaW1wb3J0YW50O1xufVxuLnRhYmxlX2hlYWRfY29sb3J7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0Rjc7XG59XG5cbnRhYmxle1xuICBmb250LXNpemU6IDAuNjg4cmVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cbi5hbGlnbl9jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ25fbGVmdHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW5mb193aW5kb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb250X3NpemV7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLnN0b3JlLWlkLW1hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOjpuZy1kZWVwIGJ1dHRvbi5nbS11aS1ob3Zlci1lZmZlY3Qge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4haW1wb3J0YW50O1xufVxuXG4uZm9udF9ncmVlbntcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5mb250X25vcm1hbHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmFja2dyb3VuZC1jb2xvci1ncmVlbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdyZWVuO1xufVxuXG4jcG93ZXItY2hhcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4ubGVnZW5kIHsgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07IH1cbi5sZWdlbmQgbGkgeyBmbG9hdDogbGVmdDsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4ubGVnZW5kIHNwYW4geyBmbG9hdDogbGVmdDsgd2lkdGg6IDEycHg7IGhlaWdodDogMTJweDsgbWFyZ2luOiAycHg7IH1cbi8qIHlvdXIgY29sb3JzICovXG4ubGVnZW5kIC5hY2NlcHRhYmxlUmFuZ2UgeyBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyB9XG4uYXJUeHR7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA2cmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAwLjhyZW07XG59XG5cbi5sZWdlbmQyIHsgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtOyB9XG4ubGVnZW5kMiBsaSB7IGZsb2F0OiBsZWZ0OyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbi5sZWdlbmQyIHNwYW4geyBmbG9hdDogbGVmdDsgd2lkdGg6IDEycHg7IGhlaWdodDogMTJweDsgbWFyZ2luOiAycHg7IH1cbi8qIHlvdXIgY29sb3JzICovXG4ubGVnZW5kMiAuYWNjZXB0YWJsZVJhbmdlMiB7IGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47IH1cbi5hclR4dDJ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA2cmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAwLjhyZW07XG59XG4iXX0= */"] });
    return SelectTestStoresComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectTestStoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-select-test-stores',
                templateUrl: './select-test-stores.component.html',
                styleUrls: ['./select-test-stores.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_16__["TestConfigService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEventsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_11__["SidenavService"] }, { type: _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_15__["TestMeasureService"] }]; }, { moveNextStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['moveNextStep']
        }], tipsData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
        }], testStore_population: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['testStore_population']
        }], paginatorComprassion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }], showComprassionView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['showComprassionView']
        }], confirmDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['confirmDialog']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=create-test-create-test-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+YFA":
/*!*****************************************************!*\
  !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ "6CRC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");








/**
 * Prefixes all requests with `environment.serverUrl`.
 */
var ApiPrefixInterceptor = /** @class */ (function () {
    function ApiPrefixInterceptor(authService, ngxService) {
        this.authService = authService;
        this.ngxService = ngxService;
    }
    ApiPrefixInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.ngxService.start();
        var headers;
        if (request.url === 'api/login') {
            headers = request.headers;
        }
        else {
            if (sessionStorage.getItem('region') === undefined) {
                sessionStorage.setItem('region', localStorage.getItem('region'));
                if (localStorage.getItem('region') === 'DEMO') {
                    // sessionStorage.setItem('regionPic', 'assets/images/flag.png');
                }
                // this.apiservice.updatedProfileFmSession();
            }
            headers = request.headers
                .set('Authorization', "Bearer " + this.authService.getToken()).set('country', sessionStorage.getItem('region'));
        }
        if (_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production === false) {
            request = request.clone({
                headers: headers,
                url: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + request.url
            });
        }
        else {
            request = request.clone({
                headers: headers,
                url: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].liveUrl + request.url
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error occured:', error);
            throw error;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.ngxService.stop();
        }));
    };
    ApiPrefixInterceptor.ɵfac = function ApiPrefixInterceptor_Factory(t) { return new (t || ApiPrefixInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"])); };
    ApiPrefixInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiPrefixInterceptor, factory: ApiPrefixInterceptor.ɵfac });
    return ApiPrefixInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiPrefixInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/demodata/RTMFastTool/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/sidenav.service */ "8//E");
/* harmony import */ var _app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/animations/animations */ "fk77");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-select-ex */ "fktz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
















function SidebarComponent_ngx_select_18_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
} if (rf & 2) {
    var option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r4.data.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", option_r4.data.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SidebarComponent_ngx_select_18_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
} if (rf & 2) {
    var option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n            ", option_r6.data.name, " (", option_r6.data.code, ")\n          ");
} }
function SidebarComponent_ngx_select_18_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ngx_select_18_Template_ngx_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectedRegion = $event; })("ngModelChange", function SidebarComponent_ngx_select_18_Template_ngx_select_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeRegion(ctx_r10.selectedRegion); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ngx_select_18_ng_template_2_Template, 7, 5, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_ngx_select_18_ng_template_4_Template, 4, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.region)("ngModel", ctx_r0.selectedRegion)("noAutoComplete", true);
} }
function SidebarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        ", ctx_r1.selectedCountryCode, "\n      ");
} }
var _c0 = function (a0) { return { "ml-2": a0 }; };
var _c1 = function (a0, a1, a2) { return { "sidebar_border_active": a0, "sidebar_border_inactive": a1, "width_toggle": a2 }; };
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebarService, router, globalService, commonService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.router = router;
        this.globalService = globalService;
        this.commonService = commonService;
        this.config = {
            search: false,
            height: 'auto',
            placeholder: 'Select',
        };
        this.routeLinkactive = 'dashboard';
        this.region = [];
        this.selectedRegion = 'DEMO';
        this.selectedCountryCode = '';
        this.inActiveText = '';
        this.selectedCountryFlag = 'assets/images/flag.png';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url !== '') {
                    var url = event.url.split('/');
                    _this.changeActive(url[1]);
                }
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarService.sidebarStateObservable$.subscribe(function (newState) {
            _this.sidebarState = newState;
            // this.selectCountryCode();
        });
        var regionList = JSON.parse(localStorage.getItem('dropdown_value'));
        console.log(regionList, 'regionlist');
        if (regionList !== undefined && regionList.length > 0) {
            for (var i = 0; i < regionList.length; i++) {
                var dataValue = this.getFlagValue(regionList[i]['region_code']);
                var classValue = dataValue['class'];
                var flagValue = dataValue['image'];
                this.region.push({
                    name: regionList[i]['region_name'],
                    code: regionList[i]['region_code'],
                    flag: flagValue,
                    class: classValue
                });
            }
        }
        var selectedData = localStorage.getItem('region');
        if (selectedData !== undefined) {
            var data = this.region.findIndex(function (x) { return x.code === selectedData; });
            console.log(data, 'data');
            if (data !== -1) {
                this.selectedRegion = this.region[data]['name'];
                this.selectedCountryCode = this.region[data]['code'];
            }
        }
    };
    SidebarComponent.prototype.toggleSideNav = function () {
        this.sidebarService.toggle();
    };
    SidebarComponent.prototype.changeActive = function ($event) {
        console.log($event);
        if ($event === 'dashboard') {
            // this.commonService.setCurrentComponentSubject(null, null);
            localStorage.setItem('testname', '');
        }
        else if ($event === 'createTest') {
            localStorage.setItem('testname', '');
        }
        else if ($event === 'analyseImpact') {
            // this.commonService.setCurrentComponentSubject(null, null);
        }
        this.routeLinkactive = $event;
    };
    SidebarComponent.prototype.getFlagValue = function (eventCode) {
        var flagData = { image: '', class: '' };
        if (eventCode === 'DEMO') {
            flagData.image = 'assets/images/flag_' + eventCode + '.png';
            flagData.class = 'img_width';
        }
        return flagData;
    };
    SidebarComponent.prototype.changeRegion = function (region) {
        var filteredvalue = this.region.filter(function (x) { return x.name === region; });
        console.log(filteredvalue);
        if (filteredvalue.length > 0) {
            sessionStorage.setItem('region', filteredvalue[0].code);
            localStorage.setItem('region', filteredvalue[0].code);
            window.location.href = './dashboard';
        }
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_4__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 61, vars: 29, consts: [["id", "sidebar", 1, "sidebar_menu"], [1, "menu-list"], [1, "icon", "text-color", 2, "color", "#b6b8d4 !important", 3, "ngClass", "click"], [1, "label", "pl-3", "text-color", 2, "color", "#b6b8d4 !important", "font-size", "13px", "font-weight", "bold"], ["optionTextField", "name", "style", "width: 100%;", 3, "items", "ngModel", "noAutoComplete", "ngModelChange", 4, "ngIf"], ["class", "selected_region", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active-list-item", "routerLink", "dashboard", "title", "Dashboard", 1, "mt-3", 3, "click"], [2, "display", "flex", 3, "ngClass"], [1, "icon", "text-color"], [1, "label", "pl-3", "text-color"], ["mat-list-item", "", "routerLinkActive", "active-list-item", "routerLink", "createTest", "title", "Create New Test", 1, "mt-3", 3, "click"], ["mat-list-item", "", "routerLinkActive", "active-list-item", "routerLink", "analyseImpact", "title", "Analyse Test Impact", 1, "mt-3", 3, "click"], ["optionTextField", "name", 2, "width", "100%", 3, "items", "ngModel", "noAutoComplete", "ngModelChange"], ["ngx-select-option", ""], ["ngx-select-option-selected", ""], [2, "font-size", "13px"], [2, "float", "right"], [3, "src"], [1, "font_size_small"], [1, "selected_region"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-nav-list", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_6_listener() { return ctx.toggleSideNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "sort\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "T&L Tool");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-nav-list", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidebarComponent_ngx_select_18_Template, 6, 3, "ngx-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_div_20_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_23_listener() { return ctx.changeActive("dashboard"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_35_listener() { return ctx.changeActive("createTest"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Create New Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_47_listener() { return ctx.changeActive("analyseImpact"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "image_search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Analyse Test Impact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@onSideNavChange", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.sidebarState === "close"))("@iconAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarState === "open");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarState === "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](17, _c1, ctx.routeLinkactive === "dashboard", ctx.routeLinkactive !== "dashboard", ctx.sidebarState === "close" && ctx.routeLinkactive === "dashboard"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](21, _c1, ctx.routeLinkactive === "createTest", ctx.routeLinkactive !== "createTest", ctx.sidebarState === "close" && ctx.routeLinkactive === "createTest"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](25, _c1, ctx.routeLinkactive === "analyseImpact", ctx.routeLinkactive !== "analyseImpact", ctx.sidebarState === "close" && ctx.routeLinkactive === "analyseImpact"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
        } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], ngx_select_ex__WEBPACK_IMPORTED_MODULE_9__["NgxSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ngx_select_ex__WEBPACK_IMPORTED_MODULE_9__["NgxSelectOptionDirective"], ngx_select_ex__WEBPACK_IMPORTED_MODULE_9__["NgxSelectOptionSelectedDirective"]], styles: [".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  padding: 0 22px !important;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  padding: 0 0 0 12px !important;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-family: Mulish_regular !important;\n  font-size: 13px;\n}\n\n.sidebar_border_active[_ngcontent-%COMP%] {\n  background-color: #2fd1aa;\n  color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  width: 100%;\n  border-radius: 5px;\n  padding: 11px 11px 8px 12px;\n}\n\n.sidebar_border[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sidebar_border_inactive[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  color: white;\n}\n\n  .dropdown-menu {\n  border-radius: 0.5rem !important;\n  color: white;\n}\n\n .ngx-select__item_active {\n  color: #4c596b !important;\n  background-color: #def8f2 !important;\n}\n\n  #sidebar .ngx-select__toggle {\n  border-radius: 11px !important;\n  color: #4c596b !important;\n}\n\n.selected_region[_ngcontent-%COMP%] {\n  border: 1px solid #ffffff;\n  color: #b6b8d4 !important;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 12px;\n}\n\n.width_toggle[_ngcontent-%COMP%] {\n  width: 92%;\n}\n\n.img_width[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-right: 5px;\n}\n\n.img_width2[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 22px;\n}\n\n.font_size_small[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n}\n\n  .ngx-select__toggle-buttons {\n  font-size: 0.75rem !important;\n}\n\n.font_size_small[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n}\n\n  .ngx-select__toggle-buttons {\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsMEJBQUE7QUFORjs7QUFTQTtFQUNFLDhCQUFBO0FBTkY7O0FBU0E7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBVEY7O0FBWUE7RUFDRSw4QkFBQTtFQUVBLHlCQUFBO0FBVkY7O0FBY0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtBQVhGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFWRjs7QUFZQTtFQUNFLDZCQUFBO0FBVEY7O0FBV0E7RUFDRSw2QkFBQTtBQVJGOztBQVVBO0VBQ0UsNkJBQUE7QUFQRjs7QUFTQTtFQUNFLDZCQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudGV4dC1jb2xvcntcbi8vICAgY29sb3I6ICNmZmZmZmY7XG4vLyB9XG4vLyAuc2lkZWJhcl9tZW51e1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQsIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjJweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIHBhZGRpbmc6IDAgMCAwIDEycHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfcmVndWxhciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zaWRlYmFyX2JvcmRlcl9hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZmQxYWE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMXB4IDExcHggOHB4IDEycHg7IFxufVxuXG4uc2lkZWJhcl9ib3JkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vLyAuc2lkZWJhcl9ib3JkZXJfYWN0aXZle1xuLy8gICBtYXJnaW4tbGVmdDogNnB4O1xuLy8gfVxuLnNpZGViYXJfYm9yZGVyX2luYWN0aXZle1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tbWVudXtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIWltcG9ydGFudDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbjo6bmctZGVlcC5uZ3gtc2VsZWN0X19pdGVtX2FjdGl2ZXtcbiAgY29sb3I6ICM0YzU5NmIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjhmMiFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAjc2lkZWJhciAubmd4LXNlbGVjdF9fdG9nZ2xle1xuICBib3JkZXItcmFkaXVzOiAxMXB4IWltcG9ydGFudDtcbiBcbiAgY29sb3I6ICM0YzU5NmIgIWltcG9ydGFudDtcbn1cblxuXG4uc2VsZWN0ZWRfcmVnaW9ue1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBjb2xvcjogI2I2YjhkNCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2lkdGhfdG9nZ2xle1xuICB3aWR0aDogOTIlO1xufVxuXG4uaW1nX3dpZHRoe1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pbWdfd2lkdGgye1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuLmZvbnRfc2l6ZV9zbWFsbHtcbiAgZm9udC1zaXplOiAwLjc1cmVtIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmd4LXNlbGVjdF9fdG9nZ2xlLWJ1dHRvbnN7XG4gIGZvbnQtc2l6ZTogMC43NXJlbSFpbXBvcnRhbnQ7XG59XG4uZm9udF9zaXplX3NtYWxse1xuICBmb250LXNpemU6IDAuNzVyZW0haW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZ3gtc2VsZWN0X190b2dnbGUtYnV0dG9uc3tcbiAgZm9udC1zaXplOiAwLjc1cmVtIWltcG9ydGFudDtcbn1cblxuXG4iXX0= */"], data: { animation: [
                Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["sidebarAnimation"])(),
                Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["iconAnimation"])(),
                Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["labelAnimation"])(),
            ] } });
    return SidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss'],
                animations: [
                    Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["sidebarAnimation"])(),
                    Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["iconAnimation"])(),
                    Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["labelAnimation"])(),
                ]
            }]
    }], function () { return [{ type: _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_4__["GlobalEventsService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "4krj":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/global-events.service.ts ***!
  \**********************************************************/
/*! exports provided: GlobalEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalEventsService", function() { return GlobalEventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var ServiceName = 'Global Events Service';
var GlobalEventsService = /** @class */ (function () {
    function GlobalEventsService() {
        this.events = {};
    }
    GlobalEventsService.prototype.subscribe = function (event, callback, error, complete) {
        if (!event) {
            throw new Error("[" + ServiceName + "] => Subscription method must get event name.");
        }
        if (this.events[event] === undefined) {
            this.events[event] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        if (typeof callback !== 'function') {
            return this.events[event].asObservable();
        }
        else {
            return this.events[event]
                .asObservable()
                .subscribe(callback, error, complete);
        }
    };
    GlobalEventsService.prototype.publish = function (event, eventObject) {
        console.log(event, 'event');
        if (!event) {
            throw new Error("[" + ServiceName + "] => Publish method must get event name.");
        }
        else if (!this.events[event]) {
            return;
        }
        this.events[event].next(eventObject);
    };
    GlobalEventsService.ɵfac = function GlobalEventsService_Factory(t) { return new (t || GlobalEventsService)(); };
    GlobalEventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac, providedIn: 'root' });
    return GlobalEventsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalEventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4vU7":
/*!*************************************************************!*\
  !*** ./src/app/core/authentication/authentication.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "fSl4");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "6CRC");







var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('AuthenticationGuard');
var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        else {
            log.debug('Not authenticated, redirecting and adding redirect url...');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
    AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac });
    return AuthenticationGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "5dmV":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MaterialModule });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"]] });
    return MaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6CRC":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






// const credentialsKey = 'credentials';
/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.credentialsKey = 'Access_Token';
        var savedCredentials = sessionStorage.getItem(this.credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    AuthenticationService.prototype.getAccessToken = function () {
        return sessionStorage.getItem(this.credentialsKey);
    };
    AuthenticationService.prototype.getToken = function () {
        var token = JSON.parse(this.getAccessToken());
        return token.data.token;
    };
    AuthenticationService.prototype.CheckStatus = function () {
        var token = JSON.parse(this.getAccessToken());
        return token.status;
    };
    /**
     * Authenticates the user.
     *
     * @param context The login parameters.
     * @return The user credentials.
     */
    AuthenticationService.prototype.login = function (context) {
        // Replace by proper authentication call
        this.setCredentials(context);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(context);
    };
    /**
     * Logs out the user and clear credentials.
     *
     * @return True if the user was logged out successfully.
     */
    AuthenticationService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    /**
     * Checks is the user is authenticated.
     *
     * @return True if the user is authenticated.
     */
    AuthenticationService.prototype.isAuthenticated = function () {
        if (this.credentials) {
            var expiry = this.credentials.data.expiry;
            var date = new Date(expiry * 1000).toUTCString();
            var date1 = moment__WEBPACK_IMPORTED_MODULE_2__(date);
            var Current_date = moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__["utc"]()
                .toDate()
                .toUTCString());
            try {
                if (date1 > Current_date) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                return false;
            }
            return false;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(AuthenticationService.prototype, "credentials", {
        /**
         * Gets the user credentials.
         *
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     *
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    AuthenticationService.prototype.setCredentials = function (credentials, remember) {
        this._credentials = credentials || null;
        if (credentials) {
            credentials.logged_at = new Date().toUTCString();
            var storage = localStorage;
            var sStorage = sessionStorage;
            if (credentials.status === 'ok') {
                storage.setItem(this.credentialsKey, JSON.stringify(credentials));
                sStorage.setItem(this.credentialsKey, JSON.stringify(credentials));
            }
        }
        else {
            sessionStorage.removeItem(this.credentialsKey);
            localStorage.removeItem(this.credentialsKey);
        }
    };
    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
    return AuthenticationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "7o2P":
/*!***************************************************!*\
  !*** ./src/app/shared/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var CommonService = /** @class */ (function () {
    function CommonService(httpClient) {
        this.httpClient = httpClient;
        this.$savedata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$savedateRange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$currentComponent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$setTestStores = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$filteredData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$reportData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$excelData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        console.log('calling service');
    }
    CommonService.prototype.getHistoryDetails = function (id) {
        return this.httpClient.get('api/history_details/' + id);
    };
    CommonService.prototype.globalSearch = function (keyword) {
        var param = { searchKey: keyword };
        return this.httpClient.get('api/search', { params: param });
    };
    CommonService.prototype.getNotification = function () {
        return this.httpClient.get('api/get_notification');
    };
    CommonService.prototype.markReadNotification = function (data) {
        return this.httpClient.post('api/mark_read_notification', data);
    };
    CommonService.prototype.getLastTestCompleted = function () {
        return this.httpClient.get('api/last_test_completed');
    };
    CommonService.prototype.Get_Editvalues = function (id) {
        var _this = this;
        console.log('id', id);
        // if (this.$savedata.value !== null) {
        //   return this.getSavedDataSubject();
        // } else {
        return this.httpClient
            .get('api/load_savetest/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                _this.setSavedDataSubject(body);
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
        // }
    };
    CommonService.prototype.Get_Date = function () {
        var _this = this;
        if (this.$savedateRange.value !== null) {
            return this.getSaveddDateRange();
        }
        else {
            return this.httpClient.get('api/date_range').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    _this.setSavedDateRange(body);
                    return body;
                }
                else {
                    return {};
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
        }
    };
    CommonService.prototype.getSavedDataSubject = function () {
        return this.$savedata;
    };
    CommonService.prototype.setSavedDataSubject = function (data) {
        this.$savedata.next(data);
    };
    CommonService.prototype.getSaveddDateRange = function () {
        return this.$savedateRange;
    };
    CommonService.prototype.setSavedDateRange = function (data) {
        this.$savedateRange.next(data);
    };
    CommonService.prototype.getEditValues = function (id) {
        var _this = this;
        if (this.$savedata.value === null) {
            this.httpClient.get('api/load_savetest/' + id, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (data) {
                _this.setSavedDataSubject(data);
            });
        }
    };
    CommonService.prototype.getAuditlog = function () {
        return this.httpClient
            .get('api/getaudit_logdata', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    CommonService.prototype.getCurrentComponentSubject = function () {
        return this.$currentComponent.value;
    };
    CommonService.prototype.setCurrentComponentSubject = function (currentComponent, data, edit, fromEdit) {
        this.$currentComponent.next({ currentComponent: currentComponent, data: data, edit: edit, fromEdit: fromEdit });
    };
    CommonService.prototype.setTestStoresFilter = function (data) {
        this.$setTestStores.next(data);
    };
    CommonService.prototype.getTestStoresFilter = function () {
        return this.$setTestStores;
    };
    CommonService.prototype.setFilterSubject = function (data) {
        console.log();
        this.$filteredData.next(data);
    };
    CommonService.prototype.getFilteredData = function () {
        return this.$filteredData.value;
    };
    CommonService.prototype.setReportData = function (data) {
        this.$reportData.next(data);
    };
    CommonService.prototype.getReportData = function () {
        return this.$reportData.value;
    };
    CommonService.prototype.setExcelData = function (data) {
        return this.$excelData.next(data);
    };
    CommonService.prototype.getExcelData = function () {
        return this.$excelData.value;
    };
    CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
    return CommonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8//E":
/*!****************************************************!*\
  !*** ./src/app/shared/services/sidenav.service.ts ***!
  \****************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var SidenavService = /** @class */ (function () {
    function SidenavService() {
        this.sidebarState = 'open';
        this.filterSidebar = false;
        this.sidebarStateChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebarState);
        this.sidebarStateObservable$ = this.sidebarStateChanged$.asObservable();
        this.$sideBarState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.sideNavComponent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.sidebarStateChanged$.next('open');
        this.$sideBarState.next(false);
    }
    SidenavService.prototype.toggle = function () {
        this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
        this.sidebarStateChanged$.next(this.sidebarState);
    };
    SidenavService.prototype.setSidenav = function (sidenav) {
        this.sidenav = sidenav;
    };
    SidenavService.prototype.open = function () {
        return this.sidenav.open();
    };
    SidenavService.prototype.close = function () {
        return this.sidenav.close();
    };
    SidenavService.prototype.toggleFilter = function (componentName) {
        this.sidenav.toggle();
        this.sideNavComponent.next(componentName);
    };
    SidenavService.prototype.getCurrentSidenav = function () {
        console.log(this.sideNavComponent.value, 'service sidenav');
        return this.sideNavComponent;
    };
    SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(); };
    SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });
    return SidenavService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/sidenav.service */ "8//E");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/animations/animations */ "fk77");
/* harmony import */ var _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _app_shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/component/toolbar/toolbar.component */ "Y85z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/component/filter-component/filter-component.component */ "kybR");
/* harmony import */ var _shared_component_history_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/component/history/history.component */ "klIF");

















var _c0 = ["filterSidenav"];
function HomeComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-filter-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HomeComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-history");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var HomeComponent = /** @class */ (function () {
    function HomeComponent(media, commonService) {
        var _this = this;
        this.media = media;
        this.commonService = commonService;
        this.isVisible = true;
        this.visibility = 'shown';
        this.sideNavOpened = true;
        this.matDrawerOpened = false;
        this.matDrawerShow = true;
        this.sideNavMode = 'side';
        this.filterMode = 'over';
        this.toggleData = false;
        this.current_component_show = '';
        this.sideNavSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.sideNavSubscription)) {
            this.sideNavSubscription.unsubscribe();
        }
        this.sideNavSubscription = this.commonService.getCurrentSidenav().subscribe(function (result) {
            console.log(result, 'resultValue');
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(result)) {
                _this.current_component_show = result;
            }
        });
        console.log(this.current_component_show, 'current component changes');
    }
    HomeComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.media.asObservable().subscribe(function () {
            _this.toggleView();
        });
        this.commonService.sidebarStateObservable$
            .subscribe(function (newState) {
            _this.sidebarState = newState;
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.commonService.setSidenav(this.filterSidenav);
        // this.commonService.setSidenavHistory(this.filterSidenav2);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.sideNavSubscription)) {
            this.sideNavSubscription.unsubscribe();
        }
    };
    HomeComponent.prototype.toggleView = function () {
        if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
    };
    HomeComponent.prototype.toggleFilter = function (data) {
        if (!this.toggleData) {
            this.toggleData = true;
            this.filterSidenav.open();
        }
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__["SidenavService"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterSidenav = _t.first);
        } }, inputs: { isVisible: "isVisible" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 35, vars: 5, consts: [["fullscreen", ""], ["fixedTopGap", "56", 1, "sidenav", 2, "background-color", "#000091", 3, "mode", "opened"], [2, "z-index", "unset", "overflow", "hidden"], [2, "overflow", "hidden"], [2, "z-index", "500"], [1, "router_container"], ["position", "end", "mode", "over", 2, "width", "25rem"], ["filterSidenav", ""], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer-container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-drawer-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-toolbar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-sidenav", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_ng_container_28_Template, 4, 0, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_ng_container_30_Template, 4, 0, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.sideNavMode)("opened", ctx.sideNavOpened);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@onSideNavChange", ctx.sidebarState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_component_show === "Filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_component_show === "History");
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], _app_shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponentComponent"], _shared_component_history_history_component__WEBPACK_IMPORTED_MODULE_12__["HistoryComponent"]], styles: [".router_container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n\n .mat-drawer-inner-container {\n  overflow: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDQTtFQUFrQixvQkFBQTtBQS9CbEI7O0FBaUNBO0VBQ0UsMkJBQUE7QUE5QkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtaXhpbiBhdXRoKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuXG4gIC5zaWRlbmF2e1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDA5MTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTZyZW07XG4gIH1cbiAgLmRyYXdlcntcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnksNDAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICBbbm8tb3Zlci1mbG93XSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAucm91dGVyLW91dGxldHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7cGFkZGluZzogMHB4IDVweDtcbiAgfVxuICAuc3BhY2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sb2dve1xuICAgIGZvbnQtc2l6ZTogMjZweDtmb250LWZhbWlseTogUm9ib3RvO2NvbG9yOndoaXRlO21hcmdpbi10b3A6IDhweDtcbiAgfVxufVxuLnJvdXRlcl9jb250YWluZXJ7cGFkZGluZy1sZWZ0OiAxLjVyZW19XG5cbjo6bmctZGVlcC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lcntcbiAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XG59XG4iXX0= */"], data: { animation: [
                Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_6__["mainContentAnimation"])(),
            ] } });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                animations: [
                    Object(_app_shared_animations_animations__WEBPACK_IMPORTED_MODULE_6__["mainContentAnimation"])(),
                ]
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] }, { type: _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__["SidenavService"] }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filterSidenav']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `.env.ts` is generated by the `npm run env` command
//import env from './.env';
var environment = {
    production: false,
    version: 1 + '-dev',
    serverUrl: 'https://accelerator-dev.tigeranalytics.com/RTMFastBackend/',
    liveUrl: 'https://accelerator-dev.tigeranalytics.com/RTMFastBackend/',
    reportPath: 'https://accelerator-dev.tigeranalytics.com/RTMFastBackend/report/',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J6E/":
/*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.service */ "fSl4");





var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.errorHandler(error); }));
    };
    // Customize the default error handler here if needed
    ErrorHandlerInterceptor.prototype.errorHandler = function (response) {
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    };
    ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(); };
    ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
    return ErrorHandlerInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "LBDO":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/testconfig.service.ts ***!
  \*******************************************************/
/*! exports provided: TestConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestConfigService", function() { return TestConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);








var TestConfigService = /** @class */ (function () {
    function TestConfigService(httpClient) {
        this.httpClient = httpClient;
        this.$savedata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$parameters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$IdentyTestValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$decideTestStorePopulationSummaryData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$decideTestStorePopulationCorrelationData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        console.log('calling service');
    }
    TestConfigService.prototype.uploadTestStore = function (data) {
        return this.httpClient
            .post('api/upload_select_teststore', data)
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
    TestConfigService.prototype.Testparam = function (data) {
        return this.httpClient
            .post('api/getparameter', data);
        // .pipe(
        //   map((body: any) => {
        //     if (body) {
        //       if (body) {
        //         return body;
        //       } else {
        //         return {};
        //       }
        //     } else {
        //       return {};
        //     }
        //   }),
        //   catchError(() => of([]))
        // );
    };
    TestConfigService.prototype.ValidateDataPoints = function (data) {
        return this.httpClient
            .post('api/validate_datapoints', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    TestConfigService.prototype.load_saved_test = function (id) {
        return this.httpClient
            .get('api/load_savetest/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    // Get_Editvalues(id: any) {
    //   console.log(this.getSavedDataSubject(), '$saved data')
    //   if(!this.$savedata) {
    //     return this.getSavedDataSubject()
    //   } else {
    //     return this.httpClient
    //     .get('api/load_savetest/' + id, {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .pipe(
    //       map((body: any) => {
    //         if (body) {
    //           this.setSavedDataSubject(body)
    //           return body;
    //         } else {
    //           return {};
    //         }
    //       }),
    //       catchError(() => of([]))
    //     );
    //   }
    // }
    /*Getsavedtestdata*/
    TestConfigService.prototype.GetSaved_Testdata = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        return this.httpClient
            .get('api/load_savedata', {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    /*Getsavedtestdata*/
    /*Delete saved data*/
    TestConfigService.prototype.DeleteSavedData = function (data) {
        return this.httpClient.delete('api/delete_savedata/' + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    /*Delete saved data*/
    /*Dropdown api*/
    TestConfigService.prototype.Get_Dropdownvals = function () {
        var _this = this;
        if (this.$parameters.value !== null) {
            return this.getParametersList();
        }
        else {
            return this.httpClient
                .get('api/parameter_list', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    _this.setParametersList(body);
                    return body;
                }
                else {
                    return {};
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
        }
    };
    /*Dropdown api*/
    /*Save api for step1,2,3*/
    TestConfigService.prototype.Save_stage = function (data) {
        return this.httpClient.post('api/save_stage', { data: data });
    };
    /*Save api for step1,2,3*/
    TestConfigService.prototype.SaveStageTwo = function (data) {
        return this.httpClient
            .post('api/save_stage', {
            data: data
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
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
    TestConfigService.prototype.GetTestsummary = function (data) {
        var auth = localStorage.getItem('auth');
        return this.httpClient
            .post('api/store_summary', data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth
            }
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
    TestConfigService.prototype.IdentifyTest = function (data) {
        var auth = localStorage.getItem('auth');
        if (this.$savedata.value !== null) {
            return this.getIdentifyTest();
        }
        else {
            return this.httpClient
                .post('api/identity_teststore', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth
                }
            });
        }
    };
    TestConfigService.prototype.GetStoresDetails = function (data) {
        return this.httpClient
            .post('Get_StoresDetails', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestConfigService.prototype.CalculateBreakEven = function (data) {
        return this.httpClient
            .post('api/calc_breakevenlift', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestConfigService.prototype.Load_savedata = function () {
        return this.httpClient.get('load_savedata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestConfigService.prototype.UploadTestControlStores = function (formdata) {
        return this.httpClient.post('Upload_stores', formdata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestConfigService.prototype.uploadfile = function (formdata) {
        return this.httpClient.post('GetMatch_teststore', formdata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestConfigService.prototype.GetAllTestStore = function (data) {
        return this.httpClient
            .post('Get_AllTestStore', {
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
    TestConfigService.prototype.SaveMeasurement = function (data) {
        return this.httpClient
            .post('FromMeasurement', {
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
    TestConfigService.prototype.SaveStageOne = function (data) {
        return this.httpClient
            .post('Save_storedata', {
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
    TestConfigService.prototype.Checktestname = function (data) {
        return this.httpClient
            .post('Check_testname', {
            test_name: data.test_name,
            market_id: data.market_id
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
    TestConfigService.prototype.LoadSavedTest = function (data) {
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
    TestConfigService.prototype.getDurationOfWeeks = function (data) {
        return this.httpClient.post('api/Get_weeks', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestConfigService.prototype.getIdentifyTest = function () {
        return this.$savedata;
    };
    TestConfigService.prototype.setIdentifyTest = function (data) {
        this.$savedata.next(data);
    };
    TestConfigService.prototype.getParametersList = function () {
        return this.$parameters;
    };
    TestConfigService.prototype.setParametersList = function (data) {
        this.$parameters.next(data);
    };
    TestConfigService.prototype.getIdentifyTestControl = function (data) {
        var _this = this;
        var auth = localStorage.getItem('auth');
        if (this.$savedata.value === null) {
            this.httpClient.post('api/identity_teststore', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth
                }
            }).subscribe(function (data) {
                _this.setIdentifyTest(data);
                _this.setIdentifyValue(data);
            });
        }
    };
    TestConfigService.prototype.setIdentifyValue = function (data) {
        this.$IdentyTestValue.next(data);
    };
    TestConfigService.prototype.getIdentifyValue = function () {
        return this.$IdentyTestValue.value;
    };
    TestConfigService.prototype.getTestName = function (data) {
        return this.httpClient
            .post('api/validate_testname', {
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
    TestConfigService.prototype.IdentifyTestManually = function (data) {
        var auth = localStorage.getItem('auth');
        return this.httpClient
            .post('api/identity_teststore_manually', data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth
            }
        });
    };
    TestConfigService.prototype.generateSuggestionForMarginOfError = function (data) {
        return this.httpClient.post('api/generate_suggestion_for_margin_of_error', data);
    };
    TestConfigService.prototype.generateSuggestionForNoOfTestStore = function (data) {
        return this.httpClient.post('api/generate_suggestion_no_of_teststore', data);
    };
    TestConfigService.prototype.selected_testStore_comprassion = function (data) {
        return this.httpClient
            .post('api/selected_store_correlation', {
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
    TestConfigService.prototype.testStore_population_summary = function (data) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$decideTestStorePopulationSummaryData.value)) {
            return this.getTestStorePopulationSummary();
        }
        else {
            return this.httpClient
                .post('api/testStore_population_summary', {
                data: data
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setTestStorePopulationSummary(body);
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
        }
    };
    TestConfigService.prototype.testStore_population_correlation = function (data) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$decideTestStorePopulationCorrelationData.value)) {
            return this.getTestStorePopulationCorrelation();
        }
        else {
            return this.httpClient
                .post('api/testStore_population_correlation', {
                data: data
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setTestStorePopulationCorrelation(body);
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
        }
    };
    TestConfigService.prototype.getTestStorePopulationSummary = function () {
        return this.$decideTestStorePopulationSummaryData;
    };
    TestConfigService.prototype.setTestStorePopulationSummary = function (data) {
        this.$decideTestStorePopulationSummaryData.next(data);
    };
    TestConfigService.prototype.getTestStorePopulationCorrelation = function () {
        return this.$decideTestStorePopulationCorrelationData;
    };
    TestConfigService.prototype.setTestStorePopulationCorrelation = function (data) {
        this.$decideTestStorePopulationCorrelationData.next(data);
    };
    TestConfigService.prototype.dataValidaityPoints = function (data) {
        return this.httpClient
            .post('api/validate_datapoints_availability', {
            data: data
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestConfigService.ɵfac = function TestConfigService_Factory(t) { return new (t || TestConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    TestConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TestConfigService, factory: TestConfigService.ɵfac, providedIn: 'root' });
    return TestConfigService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Lo2u":
/*!************************************************!*\
  !*** ./src/app/core/http/cache.interceptor.ts ***!
  \************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-cache.service */ "dXti");






/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    /**
     * Configures interceptor options
     *
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    CacheInterceptor.prototype.configure = function (options) {
        var instance = new CacheInterceptor(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    };
    CacheInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            var cachedData = _this.forceUpdate ? null : _this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request).subscribe(function (event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                        _this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
            }
        });
    };
    CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) { return new (t || CacheInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"])); };
    CacheInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheInterceptor, factory: CacheInterceptor.ɵfac });
    return CacheInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"] }]; }, null); })();


/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ "o7am");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]; });





/***/ }),

/***/ "NLo8":
/*!******************************************************!*\
  !*** ./src/app/defaulthome/defaulthome.component.ts ***!
  \******************************************************/
/*! exports provided: DefaulthomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaulthomeComponent", function() { return DefaulthomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DefaulthomeComponent = /** @class */ (function () {
    function DefaulthomeComponent() {
    }
    DefaulthomeComponent.prototype.ngOnInit = function () {
    };
    DefaulthomeComponent.ɵfac = function DefaulthomeComponent_Factory(t) { return new (t || DefaulthomeComponent)(); };
    DefaulthomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaulthomeComponent, selectors: [["app-defaulthome"]], decls: 30, vars: 0, consts: [[1, "header-margin", 2, "height", "70px"], [1, "", 2, "display", "flex", "justify-content", "center", "align-items", "center", "gap", "5px", "background-color", "#F68F1D", "border-right", "5px solid #fff", "height", "60px"], ["href", "login"], ["href", "login", "translate", "", 1, "navbar-brand", 2, "margin", "12px 0 0 0"], [2, "color", "white", "font-size", "25px", "font-weight", "920", "margin-bottom", "15px"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "height", "50vh"], [2, "font-size", "36px"], ["href", "/"], [2, "margin-left", "250px", "margin-top", "10px", "padding", "5px"]], template: function DefaulthomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\t\n\t\t\t\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\t\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\t\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "b", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "  \n\t\t\t\t  \n\t\t\t\t\n\t\t\t\n\t\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\t\t\tWelcome to the accelerator home !\n\t\t ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lets start");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n\n");
        } }, styles: ["@charset \"UTF-8\";\n\n.login-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.pad-top[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.email[_ngcontent-%COMP%] {\n  color: #0000A0;\n  font-weight: 700;\n  text-decoration: underline;\n  font-size: 18px;\n}\n.reg_msg_bg[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 4px solid #0000A0;\n  padding: 30px;\n  border-radius: 30px;\n  background-color: #ffeec7;\n}\n.req_msg[_ngcontent-%COMP%] {\n  position: initial !important;\n  width: 100% !important;\n  margin-top: 26%;\n}\n.req_msg_col[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: black;\n  font-weight: 400;\n}\n.login-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\n  border-left: 4px solid #dc3545;\n}\n.imagetextbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 8px;\n  padding: 35px 8px;\n  color: #aaa;\n  transition: 0.3s;\n}\n.imagetextbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n.imagetextbox[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.imagetextbox[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 28%;\n  left: 19%;\n  height: auto;\n  width: 58%;\n  background-color: #585151;\n  opacity: 0.8;\n  padding: 0 0 25px 0px;\n}\n.centeredlogin[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 28%;\n  left: 19%;\n  height: 45%;\n  width: 58%;\n}\n.loginbutton[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.85) !important;\n  color: #fff;\n}\n.bordernone[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: #fff;\n  font-weight: bold;\n}\n@media (max-width: 575.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-top: 3px;\n}\n.bg-black[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.85) !important;\n}\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: block;\n}\n.nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  font-size: 0;\n}\n#left[_ngcontent-%COMP%], #middle[_ngcontent-%COMP%], #right[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  vertical-align: top;\n  font-size: 12px;\n}\n#left[_ngcontent-%COMP%] {\n  width: 40%;\n}\n#middle[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 55px;\n}\n.head-text[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: bottom;\n  line-height: 55px;\n}\n#right[_ngcontent-%COMP%] {\n  width: 30%;\n}\n#navbar-menu[_ngcontent-%COMP%] {\n  height: 55px;\n}\n#user-circle[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 70%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  z-index: 1;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.singleSignbutton[_ngcontent-%COMP%] {\n  background-color: #228b22 !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdGhvbWUvZGVmYXVsdGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvdGhlbWUtdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFBQTtBREdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBQUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUdKO0FBQUE7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UsOEJBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdGO0FBREE7RUFDRSxnREFBQTtFQUNBLFdBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7QUFLRjtBQUZBO0VBQ0UsZ0JBQUE7QUFLRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUtGO0FFeENJO0VGMENGO0lBQ0UsV0FBQTtFQUVGO0FBQ0Y7QUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBRUY7QUFBQTtFQUNFLGdEQUFBO0FBR0Y7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQUZBO0VBQ0UsZUFBQTtBQUtGO0FBSEE7RUFFRSxVQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSEE7OztFQUdFLHFCQUFBO0dBTUEsZUFMQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFNRjtBQUhBO0VBQ0UsVUFBQTtBQU1GO0FBSkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQU9GO0FBSkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFPRjtBQUpBO0VBQ0UsVUFBQTtBQU9GO0FBTEE7RUFDRSxZQUFBO0FBUUY7QUFOQTtFQUNFLGVBQUE7QUFTRjtBQVBBO0VBQ0UsbUJBQUE7QUFVRjtBQVBBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQVVGO0FBUEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVVGO0FBUEE7RUFDRSxjQUFBO0FBVUY7QUFQQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQVVGIiwiZmlsZSI6InNyYy9hcHAvZGVmYXVsdGhvbWUvZGVmYXVsdGhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzXCI7XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhZC10b3B7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmVtYWlse1xuICBjb2xvcjogIzAwMDBBMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJlZ19tc2dfYmcge1xuICAgIHdpZHRoOiA5NyU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwMDBBMDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVjNztcbn1cblxuLnJlcV9tc2d7XG4gIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI2JTtcbn1cblxuLnJlcV9tc2dfY29se1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ2luLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpO1xufVxuXG4uaW1hZ2V0ZXh0Ym94IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDM1cHggOHB4O1xuICBjb2xvcjogI2FhYTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmltYWdldGV4dGJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdldGV4dGJveCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmltYWdldGV4dGJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDE5JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1MTUxO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDAgMCAyNXB4IDBweDtcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uY2VudGVyZWRsb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDE5JTtcbiAgaGVpZ2h0OiA0NSU7XG4gIHdpZHRoOiA1OCU7XG59XG4ubG9naW5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJvcmRlcm5vbmUge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gd2lkdGg6IDFlbTtcbiAgLy8gbWFyZ2luLWxlZnQ6IC0xZW07XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KSAhaW1wb3J0YW50O1xufVxuLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtbGluay5kcm9wZG93bi10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4qIHtcbiAgLy9tYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4jY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4jbGVmdCxcbiNtaWRkbGUsXG4jcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI2xlZnQge1xuICB3aWR0aDogNDAlO1xufVxuI21pZGRsZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLmhlYWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbiNyaWdodCB7XG4gIHdpZHRoOiAzMCU7XG59XG4jbmF2YmFyLW1lbnUge1xuICBoZWlnaHQ6IDU1cHg7XG59XG4jdXNlci1jaXJjbGUge1xuICBmb250LXNpemU6IDUxcHg7XG59XG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDcwJTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaW5nbGVTaWduYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOGIyMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbiIsIi8qXG4gKiBBcHBsaWNhdGlvbiBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbi8vIFNldCBGb250IEF3ZXNvbWUgZm9udCBwYXRoXG4kZmEtZm9udC1wYXRoOiBcIn5AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS13ZWJmb250cy93ZWJmb250c1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vXG4vLyBPdmVycmlkZSBCb290c3RyYXAgdmFyaWFibGVzIGhlcmUgdG8gc3VpdGUgeW91ciB0aGVtZS5cbi8vIENvcHkgdmFyaWFibGVzIHlvdSB3YW50IHRvIGN1c3RvbWl6ZSBmcm9tIG5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3NcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAjZmZmO1xuJGdyYXktMTAwOiAjZjhmOWZhO1xuJGdyYXktMjAwOiAjZTllY2VmO1xuJGdyYXktMzAwOiAjZGVlMmU2O1xuJGdyYXktNDAwOiAjY2VkNGRhO1xuJGdyYXktNTAwOiAjYWRiNWJkO1xuJGdyYXktNjAwOiAjODY4ZTk2O1xuJGdyYXktNzAwOiAjNDk1MDU3O1xuJGdyYXktODAwOiAjMzQzYTQwO1xuJGdyYXktOTAwOiAjMjEyNTI5O1xuJGJsYWNrOiAjMDAwO1xuXG4kYmx1ZTogIzAwNzNkZDtcbiRpbmRpZ286ICM2NjEwZjI7XG4kcHVycGxlOiAjNmY0MmMxO1xuJHBpbms6ICNlODNlOGM7XG4kcmVkOiAjZGMzNTQ1O1xuJG9yYW5nZTogI2ZkN2UxNDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kZ3JlZW46ICMyOGE3NDU7XG4kdGVhbDogIzIwYzk5NztcbiRjeWFuOiAjMTdhMmI4O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRibHVlLFxuICBzZWNvbmRhcnk6ICRncmF5LTYwMCxcbiAgc3VjY2VzczogJGdyZWVuLFxuICBpbmZvOiAkY3lhbixcbiAgd2FybmluZzogJHllbGxvdyxcbiAgZGFuZ2VyOiAkcmVkLFxuICBsaWdodDogJGdyYXktMTAwLFxuICBkYXJrOiAkZ3JheS04MDBcbik7XG5cbi8vIFVzZSBCb290c3RyYXAgZGVmYXVsdHMgZm9yIG90aGVyIHZhcmlhYmxlcywgaW1wb3J0ZWQgaGVyZSBzbyB3ZSBjYW4gYWNjZXNzIGFsbCBhcHAgdmFyaWFibGVzIGluIG9uZSBwbGFjZSB3aGVuIHVzZWRcbi8vIGluIGNvbXBvbmVudHMuXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlc1wiO1xuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return DefaulthomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaulthomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-defaulthome',
                templateUrl: './defaulthome.component.html',
                styleUrls: ['./defaulthome.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Nj0y":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");













function FooterComponent_div_0_mat_divider_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
} }
function FooterComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
var _c0 = function (a0, a1) { return { "button-color-enabled-background-recompute": a0, "button-color-disabled-background": a1 }; };
function FooterComponent_div_0_button_19_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.recompute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recompute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r3.isDisabled, !ctx_r3.isDisabled))("disabled", !ctx_r3.isDisabled);
} }
var _c1 = function (a0, a1) { return { "button-color-enabled-background": a0, "button-color-disabled-background": a1 }; };
function FooterComponent_div_0_button_24_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.moveNext(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r4.isDisabled, !ctx_r4.isDisabled))("disabled", !ctx_r4.isDisabled);
} }
function FooterComponent_div_0_button_26_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.moveGenerate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, !ctx_r5.isDisabledGenerate, ctx_r5.isDisabledGenerate))("disabled", ctx_r5.isDisabledGenerate);
} }
function FooterComponent_div_0_button_28_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.initateTest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Initiate test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r6.isDisabled, !ctx_r6.isDisabled))("disabled", !ctx_r6.isDisabled);
} }
var _c2 = function (a0, a1) { return { "button-color-enable": a0, "button-color-disabled": a1 }; };
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.movePrevious(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        Previous\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FooterComponent_div_0_mat_divider_12_Template, 1, 1, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FooterComponent_div_0_span_14_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FooterComponent_div_0_button_19_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.saveDraft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save as Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FooterComponent_div_0_button_24_Template, 2, 5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FooterComponent_div_0_button_26_Template, 2, 5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FooterComponent_div_0_button_28_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errorEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errorEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.recomputeButton && !ctx_r0.isRTMImpactTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c2, ctx_r0.isDisabled, !ctx_r0.isDisabled))("disabled", !ctx_r0.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.generateTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.generateTest && !ctx_r0.initiateEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.initiateEnable);
} }
var FooterComponent = /** @class */ (function () {
    function FooterComponent(globalService, router) {
        var _this = this;
        this.globalService = globalService;
        this.router = router;
        this.currentComponent = 0;
        this.isDisabled = false;
        this.nextStepSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.errorMessage = '';
        this.errorEnable = false;
        this.recomputeButton = false;
        this.initiateEnable = false;
        this.initaeButton = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.errorStepSubscrption = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.isRTMImpactTest = false;
        this.isDisabledGenerate = false;
        console.log(this.nextStepSubscrption, 'next Subscription');
        this.errorStepSubscrption = this.globalService.subscribe('ERROR_VALIDATION', function (obj) {
            console.log(obj, 'object valif');
            _this.isDisabled = obj.valid;
            _this.errorMessage = obj.message;
            _this.errorEnable = obj.errorEnable;
        });
        this.nextStepSubscrption = this.globalService.subscribe('ENABLE_GENERATE_BUTTON', function (obj) {
            if (obj.module === 'SELECT_TEST_STORES') {
                _this.generateTest = obj.enable;
                _this.isDisabledGenerate = obj.disable;
            }
        });
        this.initaeButton = this.globalService.subscribe('SHOW_HIDE_INITIATE_BUTTON', function (obj) {
            if (obj.module === 'CONTROL_STORES_SUMMARY') {
                _this.initiateEnable = obj.enable;
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url !== '') {
                    var url = event.url.split('/');
                    if (url[1] === 'createTest') {
                        _this.createTest = true;
                        _this.analyseTest = false;
                    }
                    else if (url[1] === 'analyseImpact') {
                        _this.createTest = false;
                        _this.analyseTest = true;
                    }
                }
            }
        });
        this.nextStepSubscrption = this.globalService.subscribe('SHOW_RECOMPUTE_BUTTON', function (obj) {
            console.log('call Generate button');
            if (obj.module === 'CREATE_TEST') {
                _this.recomputeButton = obj.show;
                if (sessionStorage.getItem('test-type') === 'RTM Impact Test') {
                    _this.isRTMImpactTest = true;
                }
                if (obj.hasOwnProperty('initiateButton')) {
                    _this.generateTest = !obj.initiateButton;
                    _this.initiateEnable = obj.initiateButton;
                }
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.nextStepSubscrption)) {
            this.nextStepSubscrption.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.initaeButton)) {
            this.initaeButton.unsubscribe();
        }
    };
    FooterComponent.prototype.ngOnChanges = function (changes) {
    };
    FooterComponent.prototype.movePrevious = function () {
        this.globalService.publish('MOVE_PREVIOUS', {
            module: 'CREATE_TEST'
        });
    };
    FooterComponent.prototype.moveNext = function (saveDraftBoolean) {
        console.log(this.data, this.currentComponent, 'currentComponent');
        if (this.currentComponent === 0) {
            this.globalService.publish('MOVE_NEXT_TEST_DETAILS', {
                module: 'CREATE_TEST',
                currentComponent: this.currentComponent,
                saveDraft: saveDraftBoolean,
            });
        }
        if (this.currentComponent === 1) {
            this.globalService.publish('MOVE_NEXT_APPLICABILITY_CRITERIA', {
                module: 'CREATE_TEST',
                currentComponent: this.currentComponent,
                data: this.data,
                saveDraft: saveDraftBoolean
            });
        }
        if (this.currentComponent === 2) {
            this.globalService.publish('MOVE_NEXT_SELECT_TEST_STORES', {
                module: 'CREATE_TEST',
                currentComponent: this.currentComponent,
                data: this.data,
                saveDraft: saveDraftBoolean
            });
        }
        if (this.currentComponent === 3 || this.currentComponent === 4) {
            this.globalService.publish('MOVE_NEXT_CONTROL_STORES', {
                module: 'CREATE_TEST',
                currentComponent: this.currentComponent,
                data: this.data,
                saveDraft: saveDraftBoolean,
                initate: false
            });
        }
    };
    FooterComponent.prototype.saveDraft = function () {
        this.moveNext(true);
    };
    FooterComponent.prototype.moveGenerate = function () {
        var controlFeature = 'SUGGESTED_BY_TOOL';
        var checkType = sessionStorage.getItem('control_feature');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(checkType) && (checkType === '2' || checkType === '3')) {
            controlFeature = 'FILE_UPLOAD';
        }
        this.globalService.publish('SHOW_CONTROL_STORES', {
            module: 'CREATE_TEST',
            method: controlFeature,
            enable: true
        });
    };
    FooterComponent.prototype.recompute = function () {
        this.globalService.publish('CALL_RECOMPUTE_METHOD', {
            module: 'CREATE_TEST',
        });
    };
    FooterComponent.prototype.initateTest = function () {
        this.globalService.publish('MOVE_NEXT_CONTROL_STORES', {
            module: 'CREATE_TEST',
            currentComponent: this.currentComponent,
            data: this.data,
            saveDraft: false,
            initate: true
        });
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { currentComponent: "currentComponent", data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [["class", "row pb-2", 4, "ngIf"], [1, "row", "pb-2"], [2, "width", "98%"], [2, "float", "left", "display", "flex"], ["mat-button", "", 1, "button-color", "font_size_button", 3, "click"], [2, "font-size", "1.2rem", "margin-top", "4px"], [3, "vertical", 4, "ngIf"], ["class", "pl-3 footer_error_message", "style", "color: red;align-self: center;", 4, "ngIf"], [2, "float", "right"], ["mat-button", "", "class", "font_size_button", "style", "margin-right: 1rem", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["mat-button", "", 1, "font_size_button", 2, "margin-right", "1rem", 3, "ngClass", "disabled", "click"], ["mat-button", "", "class", "pl-2 font_size_button", 3, "ngClass", "disabled", "click", 4, "ngIf"], [3, "vertical"], [1, "pl-3", "footer_error_message", 2, "color", "red", "align-self", "center"], ["mat-button", "", 1, "pl-2", "font_size_button", 3, "ngClass", "disabled", "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 32, 11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createTest);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"]], styles: [".button-color[_ngcontent-%COMP%] {\n  color: #101098;\n}\n\n.button-color-disabled[_ngcontent-%COMP%] {\n  color: #afb7c6;\n}\n\n.button-color-disabled-background[_ngcontent-%COMP%] {\n  color: #afb7c6 !important;\n  background-color: #e7e9ef !important;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.footer_error_message[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-family: Mulish_bold;\n  color: red;\n}\n\n.font_size_button[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-family: Mulish_bold;\n}\n\n.button-color-enabled-background-recompute[_ngcontent-%COMP%] {\n  background-color: #5c5fff;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtBQUdGOztBQURBO0VBQ0Usd0JBQUE7QUFJRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0FBSUY7O0FBREE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbG9ye1xuICBjb2xvcjogIzEwMTA5ODtcbn1cbi5idXR0b24tY29sb3ItZGlzYWJsZWR7XG4gIGNvbG9yOiAjYWZiN2M2O1xufVxuLmJ1dHRvbi1jb2xvci1kaXNhYmxlZC1iYWNrZ3JvdW5ke1xuICBjb2xvcjogI2FmYjdjNiFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U5ZWYhaW1wb3J0YW50O1xufVxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyBEaXNwbGF5IGVycm9yIE1lc3NhZ2Vcbi5mb290ZXJfZXJyb3JfbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkO1xuICBjb2xvcjogcmVkO1xufVxuLmZvbnRfc2l6ZV9idXR0b257XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkO1xufVxuXG4uYnV0dG9uLWNvbG9yLWVuYWJsZWQtYmFja2dyb3VuZC1yZWNvbXB1dGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVmZmY7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { currentComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ "o7am");
/* harmony import */ var _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/component/footer/footer.component */ "Nj0y");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/filter-component/filter-component.component */ "kybR");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "5dmV");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _component_history_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/history/history.component */ "klIF");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-select-ex */ "fktz");
/* harmony import */ var _component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/common-table/common-table.component */ "epAT");

















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    minScrollbarLength: 20,
    suppressScrollX: false
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"],
                ngx_select_ex__WEBPACK_IMPORTED_MODULE_14__["NgxSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponentComponent"], _component_history_history_component__WEBPACK_IMPORTED_MODULE_13__["HistoryComponent"], _component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_15__["CommonTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"],
        ngx_select_ex__WEBPACK_IMPORTED_MODULE_14__["NgxSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]], exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponentComponent"], _component_history_history_component__WEBPACK_IMPORTED_MODULE_13__["HistoryComponent"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_15__["CommonTableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"],
                    ngx_select_ex__WEBPACK_IMPORTED_MODULE_14__["NgxSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]],
                declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponentComponent"], _component_history_history_component__WEBPACK_IMPORTED_MODULE_13__["HistoryComponent"], _component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_15__["CommonTableComponent"]],
                exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _app_shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _component_filter_component_filter_component_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponentComponent"], _component_history_history_component__WEBPACK_IMPORTED_MODULE_13__["HistoryComponent"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _component_common_table_common_table_component__WEBPACK_IMPORTED_MODULE_15__["CommonTableComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q4YV":
/*!********************************************************!*\
  !*** ./src/app/shared/services/testmeasure.service.ts ***!
  \********************************************************/
/*! exports provided: TestMeasureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMeasureService", function() { return TestMeasureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);







var TestMeasureService = /** @class */ (function () {
    function TestMeasureService(httpClient) {
        this.httpClient = httpClient;
        this.$testAnalysisData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$testControlData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$decideGonoGoData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$testMeasurementData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$decideControlStoreMeasurementData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    TestMeasureService.prototype.AnalyseFeature = function (data) {
        return this.httpClient
            .post('Test_analyzefeature', {
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
    TestMeasureService.prototype.GetDateRange = function () {
        return this.httpClient.get('Get_Daterange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.SaveStageThree = function (data, stringified_data) {
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
    TestMeasureService.prototype.GetWeeks = function (data) {
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
    TestMeasureService.prototype.downloadreports = function (id) {
        return this.httpClient.get('download_report/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.downloadreports1 = function (id) {
        return this.httpClient.get('reports/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.LoadSavedTest = function (data) {
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
    TestMeasureService.prototype.getTestSummaryReportExcel = function (data) {
        var httpOptions = {
            responseType: 'blob'
        };
        return this.httpClient.post('api/test_analysis_results', data, httpOptions);
    };
    TestMeasureService.prototype.getAnalyzedResults = function (data) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$testMeasurementData.value)) {
            return this.$testMeasurementData;
        }
        else {
            return this.httpClient.post('api/test_analysis_results', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setTestMeasurement(body);
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
        }
    };
    TestMeasureService.prototype.getAnalyzedResults_Aus = function (data) {
        return this.httpClient.post('api/test_analysis_results_aus', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.getTeststoreDetails = function (data) {
        return this.httpClient.post('api/get_teststore_details', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.getTargetAnalyzedResults = function (data) {
        var _this = this;
        if (this.$testAnalysisData.value !== null) {
            return this.getTestAnalysis();
        }
        else {
            return this.httpClient.post('api/target_analysis_results', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setTestAnalysis(body);
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
        }
    };
    TestMeasureService.prototype.getTargetAnalyzedResultsAus = function (data) {
        return this.httpClient.post('api/target_analysis_results_aus', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.TestControlGraph = function (data) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$testControlData.value)) {
            return this.getControlGraph();
        }
        else {
            return this.httpClient.post('api/test_control_graph', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setControlGraph(body);
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
        }
    };
    TestMeasureService.prototype.TestControlGraph_Aus = function (data) {
        return this.httpClient.post('api/test_control_graph_aus', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.getDurationOfWeeks = function (data) {
        return this.httpClient.post('api/Get_weeks', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.getProbabilityValue = function (data) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$decideGonoGoData.value)) {
            return this.getDecidego();
        }
        else {
            return this.httpClient.post('api/decide_gonogo', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setDecidego(body);
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
        }
    };
    TestMeasureService.prototype.getProbabilityValueAus = function (data) {
        return this.httpClient.post('api/decide_gonogo_aus', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.GetTestStoreData = function (id) {
        return this.httpClient
            .get('api/load_savetest/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    TestMeasureService.prototype.get_StoreSummary_Report = function (data) {
        var httpOptions = {
            responseType: 'blob'
        };
        return this.httpClient.post('api/test_summary_download', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.controlStoreMeasurementpost = function (data) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$decideControlStoreMeasurementData.value)) {
            return this.getControlStoreMeasurementpost();
        }
        else {
            return this.httpClient.post('api/control_store_update', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
                if (body) {
                    if (body) {
                        _this.setControlStoreMeasurementpost(body);
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
        }
    };
    TestMeasureService.prototype.loadAnalyseData = function () {
        return this.httpClient.get('api/load_saved_data_analyze').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.prototype.getTestAnalysis = function () {
        return this.$testAnalysisData;
    };
    TestMeasureService.prototype.setTestAnalysis = function (data) {
        this.$testAnalysisData.next(data);
    };
    TestMeasureService.prototype.getDecidego = function () {
        return this.$decideGonoGoData;
    };
    TestMeasureService.prototype.setDecidego = function (data) {
        this.$decideGonoGoData.next(data);
    };
    TestMeasureService.prototype.getControlStoreMeasurementpost = function () {
        return this.$decideControlStoreMeasurementData;
    };
    TestMeasureService.prototype.setControlStoreMeasurementpost = function (data) {
        this.$decideControlStoreMeasurementData.next(data);
    };
    TestMeasureService.prototype.getControlGraph = function () {
        return this.$testControlData;
    };
    TestMeasureService.prototype.setControlGraph = function (data) {
        this.$testControlData.next(data);
    };
    TestMeasureService.prototype.getTestMeasurement = function () {
        return this.$testMeasurementData;
    };
    TestMeasureService.prototype.setTestMeasurement = function (data) {
        this.$testMeasurementData.next(data);
    };
    TestMeasureService.prototype.getActualperStores = function (data) {
        return this.httpClient.post('api/actuals_perstores', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
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
    TestMeasureService.ɵfac = function TestMeasureService_Factory(t) { return new (t || TestMeasureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    TestMeasureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TestMeasureService, factory: TestMeasureService.ɵfac, providedIn: 'root' });
    return TestMeasureService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestMeasureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "ey9i");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "gren");













var log = new _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"]('App');
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, translateService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.favIcon = document.querySelector('#appIcon');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var region = sessionStorage.getItem('region');
        console.log(region, 'region');
        this.favIcon.href = 'assets/images/flag_' + region + '.png';
        // Setup logger
        if (environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        var onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }));
        // Change page title on navigation or language change, based on route data
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.translateService.onLangChange, onNavigationEnd)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-ui-loader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["ɵb"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.service */ "XNvx");












var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, providers: [_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ]] });
    return LoginModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
                ],
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
                providers: [_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XNvx":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
    }
    LoginService.prototype.Logoutuser = function () {
        return this.httpClient.get('api/logout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                return body;
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    LoginService.prototype.login = function (data) {
        return this.httpClient.post('api/login', data);
    };
    LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
    return LoginService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XubH":
/*!****************************************************************!*\
  !*** ./src/app/snackbar-control/snackbar-control.component.ts ***!
  \****************************************************************/
/*! exports provided: SnackbarControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarControlComponent", function() { return SnackbarControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SnackbarControlComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SnackbarControlComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SnackbarControlComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SnackbarControlComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SnackbarControlComponent_ng_container_0_ng_container_4_Template, 4, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SnackbarControlComponent_ng_container_0_ng_container_6_Template, 4, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SnackbarControlComponent_ng_container_0_ng_container_8_Template, 4, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\t\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Data uploaded for greater than 50% of total number of stores - impute with mean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data uploaded for lesser than 50% of total number of stores - discard feature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.message_type == "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.message_type == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.message_type == "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\nFeatures are expected for ", ctx_r0.data.expected_for, " but are uploaded only for ", ctx_r0.data.uploaded_for, " stores. Stores with missing data for features will be imputed / discarded depending on the number of stores data is uploaded  for\n");
} }
var SnackbarControlComponent = /** @class */ (function () {
    function SnackbarControlComponent(data, snackBar) {
        this.data = data;
        this.snackBar = snackBar;
    }
    SnackbarControlComponent.prototype.ngOnInit = function () { };
    SnackbarControlComponent.ɵfac = function SnackbarControlComponent_Factory(t) { return new (t || SnackbarControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
    SnackbarControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarControlComponent, selectors: [["app-snackbar-control"]], decls: 2, vars: 1, consts: [[4, "ngIf"], [2, "text-align", "justify"], ["aristyle", "color: red;", "a-hidden", "true", 1, "fa", "fa-check", 2, "color", "green"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle", 2, "color", "red"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle", 2, "color", "orange"]], template: function SnackbarControlComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SnackbarControlComponent_ng_container_0_Template, 20, 5, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.format == 1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NuYWNrYmFyLWNvbnRyb2wvc25hY2tiYXItY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return SnackbarControlComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snackbar-control',
                templateUrl: './snackbar-control.component.html',
                styleUrls: ['./snackbar-control.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Y85z":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/toolbar/toolbar.component.ts ***!
  \***************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/login/login.service */ "XNvx");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");















function ToolbarComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");
} if (rf & 2) {
    var item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r11.test_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ToolbarComponent_div_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");
} if (rf & 2) {
    var notFound_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ToolbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-autocomplete", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ToolbarComponent_div_3_Template_ng_autocomplete_selected_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectEvent($event); })("inputChanged", function ToolbarComponent_div_3_Template_ng_autocomplete_inputChanged_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onChangeSearch($event); })("inputFocused", function ToolbarComponent_div_3_Template_ng_autocomplete_inputFocused_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onFocused($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarComponent_div_3_ng_template_8_Template, 3, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ToolbarComponent_div_3_ng_template_11_Template, 3, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.testData)("searchKeyword", ctx_r0.keyword)("itemTemplate", _r7)("notFoundTemplate", _r9);
} }
function ToolbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create New Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Analyse Test Impact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_ng_container_56_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_ng_container_56_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var noti_r17 = ctx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.markAsRead(noti_r17.test_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_ng_container_56_div_4_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var noti_r17 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noti_r17.imageshow == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Test #", noti_r17.test_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noti_r17.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.dateConvert(noti_r17.date));
} }
function ToolbarComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Notification found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var _c0 = ".mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #F68F1D !important;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n  width: 22rem;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n\n.fa-stack[data-count][_ngcontent-%COMP%], .toolbar_text[_ngcontent-%COMP%], .cursor-pointer[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.fa-stack[data-count][_ngcontent-%COMP%]:after {\n  position: absolute;\n  right: 44%;\n  top: 13%;\n  content: attr(data-count);\n  font-size: 39%;\n  padding: 0.6em;\n  border-radius: 999px;\n  line-height: 0.75em;\n  color: white;\n  background: rgba(255, 0, 0, 0.85);\n  text-align: center;\n  min-width: 2em;\n  font-weight: bold;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%] {\n  width: 21rem;\n  max-width: 600px;\n  display: table;\n  margin: 0 auto;\n}\n\n  .autocomplete-container .input-container input {\n  border-radius: 8px;\n}\n\n  .autocomplete-container {\n  border-radius: 8px;\n  box-shadow: none !important;\n}\n\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 0.5rem !important;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0.375rem 0.75rem;\n}\n\n#search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.45rem !important;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n#toolbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: #f3f4f7 !important;\n}\n\n\n\n  button.mat-menu-item {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: 0;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  \n  line-height: 18px;\n  \n  height: auto;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  max-width: 100%;\n  position: relative;\n}\n\n  div.mat-menu-panel {\n  min-width: 112px;\n  \n  max-width: 22rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 48px);\n  border-radius: 4px;\n  outline: 0;\n}\n\n  .mat-menu-panel {\n  overflow-x: hidden !important;\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFHRjs7QUFBQTtFQUNFLCtCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usb0NBQUE7QUFHRjs7QUFRQSw2QkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNFLHdCQUFBO0VBQ0YsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUxGOztBQVFBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNjhGMUQhaW1wb3J0YW50O1xufVxuXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcbiAgd2lkdGg6IDIycmVtO1xufVxuXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIuMzc1cmVtO1xuICBoZWlnaHQ6IDIuMzc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4zNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmZhLXN0YWNrW2RhdGEtY291bnRdLC50b29sYmFyX3RleHQsLmN1cnNvci1wb2ludGVye1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZhLXN0YWNrW2RhdGEtY291bnRdOmFmdGVye1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcmlnaHQ6IDQ0JTtcbiAgdG9wOiAxMyU7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb3VudCk7XG4gIGZvbnQtc2l6ZTogMzklO1xuICBwYWRkaW5nOi42ZW07XG4gIGJvcmRlci1yYWRpdXM6OTk5cHg7XG4gIGxpbmUtaGVpZ2h0Oi43NWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6cmdiYSgyNTUsMCwwLC44NSk7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtaW4td2lkdGg6MmVtO1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4ubmctYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6MjFyZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuOjpuZy1kZWVwIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuOjpuZy1kZWVwIC5hdXRvY29tcGxldGUtY29udGFpbmVye1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBsLTQsIC5weC00IHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuXG4uc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG59XG5cbiNzZWFyY2ggLmZvcm0tY29udHJvbHtcbiAgYm9yZGVyLXJhZGl1czogMC40NXJlbSFpbXBvcnRhbnRcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4jdG9vbGJhciAuZm9ybS1jb250cm9se1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY3IWltcG9ydGFudDtcbn1cblxuLy8gOjpuZy1kZWVwLm1hdC1tZW51LXBhbmVsIHtcbi8vICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAubWF0LW1lbnUtaXRlbXtcbi8vICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLyoqIE5vIENTUyBmb3IgdGhpcyBleGFtcGxlICovXG46Om5nLWRlZXAgYnV0dG9uLm1hdC1tZW51LWl0ZW0ge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiogc2V0IGxpbmUgaGVpZ2h0IHRvIGRlc2lyZWQgaGVpZ2h0ICovXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiogc2V0IGhlaWdodCB0byBhdXRvICovXG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46Om5nLWRlZXAgZGl2Lm1hdC1tZW51LXBhbmVsIHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgICAvKiogc2V0IHdpZHRoIHRvIDUwMHB4ICovXG4gIG1heC13aWR0aDogMjJyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVse1xuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(router, HeaderService, commonService) {
        var _this = this;
        this.router = router;
        this.HeaderService = HeaderService;
        this.commonService = commonService;
        this.searchOpen = false;
        this.keyword = 'test_name';
        this.testData = [];
        this.notificationData = [];
        this.notificationsLength = 0;
        this.loggedUser = localStorage.getItem('username');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url !== '') {
                    var url = event.url.split('/');
                    if (url[1] === 'createTest') {
                        _this.createNewTest = true;
                        _this.searchDisplay = false;
                    }
                    else if (url[1] === 'dashboard') {
                        _this.searchDisplay = true;
                        _this.createNewTest = false;
                    }
                    else if (url[1] === 'analyseImpact') {
                        _this.searchDisplay = false;
                        _this.createNewTest = false;
                    }
                }
            }
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadNotification();
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 600000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.commonService.getNotification(); })).subscribe(function (result) { return _this.notificationData = result.data; });
    };
    ToolbarComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.subscription)) {
            this.subscription.unsubscribe();
        }
    };
    ToolbarComponent.prototype.loadNotification = function () {
        var _this = this;
        this.commonService.getNotification().subscribe(function (response) {
            if (response.status == 'ok') {
                _this.notificationData = response.data;
                _this.notificationsLength = _this.notificationData.length;
            }
        });
    };
    ToolbarComponent.prototype.dateConvert = function (time) {
        return new Date(time * 1000);
    };
    ToolbarComponent.prototype.markReadNotification = function (test_ids) {
        var _this = this;
        var data = {
            test_ids: test_ids
        };
        this.commonService.markReadNotification(data).subscribe(function (response) {
            if (response.status = 'ok') {
                _this.loadNotification();
            }
        });
    };
    ToolbarComponent.prototype.markAllAsRead = function () {
        var test_ids = this.notificationData.map(function (x) { return x.test_id.trim(); });
        this.markReadNotification(test_ids);
    };
    ToolbarComponent.prototype.markAsRead = function (test_id) {
        var test_ids = [];
        test_ids.push(test_id);
        this.markReadNotification(test_ids);
        var item = {
            test_id: test_id
        };
        this.selectEvent(item);
    };
    //notificationData = [{"notification":"Admin made an edit to NLTestPlan","date":"3 hours ago","imageshow":"true"},{"notification":"WeeklyTargetVarCheck is completed. Have a look at the results here.","date":"3 hours ago","imageshow":"false"},{"notification":"TestingAutomation is completed. Have a look at the results here.","date":"3 hours ago","imageshow":"false"},{"notification":"User made an edit to NLTest102","date":"3 hours ago","imageshow":"true"}];
    ToolbarComponent.prototype.selectEvent = function (item) {
        var _this = this;
        //this.Get_Dropdownvals();
        var edit = 'edit';
        this.commonService.Get_Editvalues(item.test_id).subscribe(function (apiresponse) {
            console.log('apiresponse.data.stepper_id', apiresponse.data.stepper_id);
            if (apiresponse.status == 'ok') {
                localStorage.setItem('category', apiresponse.data['category_name']);
                if (apiresponse.data.stepper_id < 6) {
                    var stepperID = apiresponse.data.stepper_id;
                    var data = apiresponse.data;
                    console.log(stepperID);
                    _this.commonService.setCurrentComponentSubject(stepperID, data, edit, 'fromEdit');
                    _this.router.navigate(['./createTest']);
                }
                else if (apiresponse.data.stepper_id >= 6) {
                    console.log(apiresponse.data.test_name);
                    localStorage.setItem('testname', apiresponse.data.test_name);
                    _this.router.navigate(['./analyseImpact']);
                }
            }
        });
        console.log('New String', item);
    };
    ToolbarComponent.prototype.onChangeSearch = function (search) {
        var _this = this;
        this.commonService.globalSearch(search).subscribe(function (response) {
            if (response.status == 'ok') {
                _this.testData = response.data;
            }
        });
    };
    ToolbarComponent.prototype.onFocused = function (e) {
        // do something
    };
    ToolbarComponent.prototype.logoutFunction = function () {
        var _this = this;
        console.log('calling_logout');
        this.HeaderService.Logoutuser().subscribe(function (apiresponse) {
            localStorage.clear();
            if (apiresponse.status == 'ok') {
                localStorage.clear();
                // window.location.href = './login?status=logout';
                _this.router.navigate(['login']);
            }
            else {
            }
        });
    };
    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], inputs: { sidenav: "sidenav", sidebar: "sidebar", drawer: "drawer", matDrawerShow: "matDrawerShow" }, decls: 63, vars: 11, consts: [["id", "toolbar", 1, "mat-elevation-z4"], ["id", "search", 4, "ngIf"], [4, "ngIf"], [2, "float", "left"], [1, "example-spacer"], [1, "cursor-pointer", 3, "matMenuTriggerFor"], [1, "far", "fa-bell", "fa-stack", 2, "font-size", "1.5rem"], [2, "border-left", "1px solid black", "margin-right", "1.2rem", "height", "1.5rem"], [1, "cursor-pointer", 2, "margin-right", "2.2rem", 3, "matMenuTriggerFor"], [1, "far", "fa-user-circle", 2, "font-size", "1.5rem"], [2, "font-size", "1rem"], ["logout", "matMenu"], [1, "mat-menu-item", 3, "click"], [1, "fas", "fa-sign-out-alt", 2, "font-size", "1.2rem"], [2, "overflow-x", "hidden"], ["notification", "matMenu"], ["id", "notify", 2, "width", "22rem"], [2, "padding", "5%", "float", "left", "width", "50%"], [2, "font-weight", "bold", "font-size", "12px", "font-family", "Mulish_bold !important"], [2, "padding", "5%", "float", "right", "width", "50%", "text-align", "right"], [2, "color", "blue", "font-size", "12px", "font-family", "Mulish_bold !important", "cursor", "pointer", 3, "click"], [1, "clearfix"], ["class", "historyMenu", 4, "ngFor", "ngForOf"], ["id", "search"], [1, "has-search", "pl-4"], ["placeholder", "\uF002\u00A0 Search", "historyIdentifier", "testData", 2, "font-family", "Mulish_regular, FontAwesome", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [3, "innerHTML"], [1, "toolbar_text"], [1, "historyMenu"], [1, "mat-menu-item", 2, "height", "6rem", "white-space", "normal", 3, "click"], [2, "padding-left", "1rem"], [2, "font-size", "12px", "font-family", "Mulish_regular !important"], [2, "padding-top", "0.5rem", "padding-left", "1rem"], [2, "font-size", "11px", "color", "gray", "font-family", "Mulish_regular !important"], [2, "margin-top", "0rem", "margin-bottom", "0rem"], ["src", "../../../../assets/images/user.png", 2, "height", "40px", "margin", "5px 10px 0px 0px", "border-radius", "50%", "float", "left"], [2, "padding-left", "5.5rem"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_div_3_Template, 16, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_div_5_Template, 6, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 6, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-menu", null, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_31_listener() { return ctx.logoutFunction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-menu", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_span_click_50_listener() { return ctx.markAllAsRead(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "u");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "  \n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ToolbarComponent_ng_container_56_Template, 21, 4, "ng-container", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ToolbarComponent_ng_container_58_Template, 5, 0, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n");
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchDisplay && !ctx.createNewTest);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchDisplay && ctx.createNewTest);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchDisplay && !ctx.createNewTest);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-count", ctx.notificationsLength);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notifications\n          (", ctx.notificationData.length, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notificationData.length > 0 ? "Mark all as read" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notificationData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationData.length == 0);
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutocompleteComponent"]], styles: [_c0, _c0] });
    return ToolbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matDrawerShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "ey9i");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared */ "M0ag");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.module */ "X3zk");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-user-idle */ "uuDO");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _snackbar_control_snackbar_control_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./snackbar-control/snackbar-control.component */ "XubH");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _app_home_home_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/home/home.module */ "ct+p");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
































var ngxUiLoaderConfig = {
    fgsColor: 'white',
    textColor: 'yellow',
    fgsPosition: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["POSITION"].centerCenter,
    fgsSize: 100,
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["SPINNER"].rectangleBounceParty,
    pbThickness: 0
};
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                _app_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                angular_user_idle__WEBPACK_IMPORTED_MODULE_14__["UserIdleModule"].forRoot({ idle: 1800, timeout: 1 }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    positionClass: 'toast-top-right',
                    timeOut: 3000
                }),
                _login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_15__["ClarityModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCbkgIf_wHnM_tx4brs2BOOzXQ_6nIweZA',
                    libraries: ['places']
                }),
                _app_home_home_module__WEBPACK_IMPORTED_MODULE_22__["HomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _snackbar_control_snackbar_control_component__WEBPACK_IMPORTED_MODULE_18__["SnackbarControlComponent"]], imports: [_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderHttpModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _app_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _app_shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], angular_user_idle__WEBPACK_IMPORTED_MODULE_14__["UserIdleModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_15__["ClarityModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"], _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"], _app_home_home_module__WEBPACK_IMPORTED_MODULE_22__["HomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                    _app_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _app_shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    angular_user_idle__WEBPACK_IMPORTED_MODULE_14__["UserIdleModule"].forRoot({ idle: 1800, timeout: 1 }),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                        positionClass: 'toast-top-right',
                        timeOut: 3000
                    }),
                    _login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_15__["ClarityModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyCbkgIf_wHnM_tx4brs2BOOzXQ_6nIweZA',
                        libraries: ['places']
                    }),
                    _app_home_home_module__WEBPACK_IMPORTED_MODULE_22__["HomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                exports: [],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                    _snackbar_control_snackbar_control_component__WEBPACK_IMPORTED_MODULE_18__["SnackbarControlComponent"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
                entryComponents: [_snackbar_control_snackbar_control_component__WEBPACK_IMPORTED_MODULE_18__["SnackbarControlComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ar/W":
/*!**********************************************!*\
  !*** ./src/assets/region/config-fields.json ***!
  \**********************************************/
/*! exports provided: DEMO, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DEMO\":{\"fields\":[{\"banner\":\"Customer Group\",\"is_show\":true},{\"segment\":\"Customer Chain\",\"is_show\":true},{\"territory\":\"Territory\",\"is_show\":true},{\"storegrid\":\"Sub Channel\",\"is_show\":true},{\"category\":\"Category\",\"is_show\":false},{\"store_grid\":\"Sub Channel\",\"is_show\":true}],\"currency\":\"$\",\"OutletSurfaceAreaUnit\":\"(in sq.ft.)\",\"overall_segment\":\"Overall_Segment\",\"test_store_id\":\"Customer Number\",\"territory\":\"Territory ID\",\"control_store_id\":\"Control Store Id\",\"segment\":\"Customer_Chain\",\"storegrid\":\"Sub_Channel\",\"partner_id\":\"Customer_Number\",\"partner_id_name\":\"Customer_Number\",\"banner\":\"Customer_Group\",\"filterFeilds\":[{\"testMeasurement\":[{\"key\":\"Customer_Group\",\"is_filter\":true,\"is_linked\":true,\"show_name\":\"Customer Group\",\"filter_key\":\"Customer_Group\"},{\"key\":\"Territory\",\"is_filter\":true,\"is_linked\":true,\"show_name\":\"Territory\",\"filter_key\":\"Territory\"},{\"key\":\"Customer_Chain\",\"is_filter\":true,\"is_linked\":true,\"show_name\":\"Customer Chain\",\"filter_key\":\"Customer_Chain\"},{\"key\":\"Store Number\",\"is_filter\":false,\"is_linked\":true,\"show_name\":\"Store Number\",\"filter_key\":\"store_number\"},{\"key\":\"Customer_Number\",\"is_filter\":true,\"is_linked\":false,\"show_name\":\"Customer Number\",\"filter_key\":\"Customer_Number\"}],\"dashBoard\":[{\"key\":\"Status\",\"is_filter\":true,\"is_linked\":false,\"show_name\":\"Status\",\"data\":[\"Draft Saved\",\"Test Running\",\"Test Analysis\",\"Test Planned\"],\"filter_key\":\"test_status\"},{\"key\":\"Test Type\",\"is_filter\":true,\"is_linked\":false,\"show_name\":\"Test Type\",\"data\":[\"Frequency Test\",\"Duration Test\",\"Activity Test\",\"RTM Impact Test\",\"Others\"],\"filter_key\":\"test_type\"},{\"key\":\"Pre Window\",\"is_filter\":false,\"is_linked\":false,\"show_name\":\"Pre Window\",\"filter_key\":\"\"}],\"select_test_stores\":[{\"key\":\"banner\",\"is_filter\":true,\"is_linked\":false,\"show_name\":\"Customer Group\",\"filter_key\":\"banner\"},{\"key\":\"Territory\",\"is_filter\":true,\"is_linked\":false,\"show_name\":\"Territory\",\"filter_key\":\"Territory\"},{\"key\":\"store_id\",\"is_filter\":false,\"is_linked\":false,\"show_name\":\"Customer Number\",\"filter_key\":\"store_id\"}]}]}}");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ "M0ag");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/component/toolbar/toolbar.component */ "Y85z");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-select-ex */ "fktz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core */ "ey9i");














var routes = [
    {
        path: '',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "TDBs")).then(function (m) { return m.DashboardModule; }); } },
            {
                path: 'createTest',
                loadChildren: function () { return Promise.all(/*! import() | create-test-create-test-module */[__webpack_require__.e("default~analyse-test-impact-analyse-test-impact-module~create-test-create-test-module"), __webpack_require__.e("create-test-create-test-module")]).then(__webpack_require__.bind(null, /*! ../create-test/create-test.module */ "spYQ")).then(function (m) { return m.CreateTestModule; }); }
            },
            {
                path: 'analyseImpact',
                loadChildren: function () { return Promise.all(/*! import() | analyse-test-impact-analyse-test-impact-module */[__webpack_require__.e("default~analyse-test-impact-analyse-test-impact-module~create-test-create-test-module"), __webpack_require__.e("analyse-test-impact-analyse-test-impact-module")]).then(__webpack_require__.bind(null, /*! ../analyse-test-impact/analyse-test-impact.module */ "0ZmD")).then(function (m) { return m.AnalyseTestImpactModule; }); }
            }
        ],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_11__["AuthenticationGuard"]],
        data: { title: 'DEMO' }
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__["NgxSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"]
            ]] });
    return HomeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _app_shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__["NgxSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _app_shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                    ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__["NgxSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dXti":
/*!*************************************************!*\
  !*** ./src/app/core/http/http-cache.service.ts ***!
  \*************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "fSl4");




var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     *
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug("Cache set for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     *
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url) {
        var cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug("Cache hit for key: \"" + url + "\"");
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     *
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url) {
        return this.cachedData[url] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     *
     * @param url The request URL.
     */
    HttpCacheService.prototype.clearCache = function (url) {
        delete this.cachedData[url];
        log.debug("Cache cleared for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     *
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     *
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.parse(data) : {};
    };
    HttpCacheService.ɵfac = function HttpCacheService_Factory(t) { return new (t || HttpCacheService)(); };
    HttpCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpCacheService, factory: HttpCacheService.ɵfac });
    return HttpCacheService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "epAT":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/common-table/common-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommonTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonTableComponent", function() { return CommonTableComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");





















function CommonTableComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_span_14_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.callFilterDataToParent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_span_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); return ctx_r9.openDailog(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r32 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r32[tableData_r14], "");
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_4_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_4_td_4_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_6_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_6_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r37 = ctx.$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r35.getAlign(ctx_r35.row));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r35.getTestStoreName(element_r37), "");
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_6_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_6_td_4_Template, 2, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_8_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r38.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_8_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r41 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r39.getColor(element_r41[tableData_r14]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r41[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_8_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_8_td_4_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_10_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r43.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_10_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r46 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r44.getColor(element_r46[tableData_r14]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r46[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_10_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_10_td_4_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_12_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r48.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r51 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r49.getColor(element_r51[tableData_r14]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r51[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_12_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_12_td_4_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_14_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_14_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r56 = ctx.$implicit;
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r54.getColorDash(element_r56));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r54.status(element_r56));
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_14_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_14_td_4_Template, 3, 2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_16_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r57.hideTestWindowColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r57.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_16_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r60 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r58.hideTestWindowColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r60[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_16_th_2_Template, 4, 2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_16_td_4_Template, 4, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_18_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r62.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_18_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r65 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r65[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_18_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_18_td_4_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_20_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r67.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_20_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r70 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r70[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_20_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_20_td_4_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_22_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r72.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_22_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r75 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r73.tableName.test_store_id === "Test Store Name" ? "text-align-left" : "text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r75[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_22_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_22_td_4_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); var row_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r82.deletetoParent(row_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var row_r79 = ctx.$implicit; var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r85.analyseToParent(row_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Analyse Impact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var row_r79 = ctx.$implicit; var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r87.edittoParent(row_r79.test_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); var row_r79 = ctx.$implicit; var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r88.historytoParent(row_r79.test_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_div_21_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r79 = ctx.$implicit;
    var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r78.getAnalyseImpactButton(row_r79));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r78.getAICursor(row_r79));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r78.getEditButton(row_r79));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r79.is_own);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_th_2_Template, 5, 0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_td_4_Template, 24, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_th_2_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92); var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return $event ? ctx_r91.masterToggle() : null; })("change", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_th_2_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92); var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r93.selectAllStores($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Store\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r89.stringSelection.hasValue() && ctx_r89.isAllSelected())("indeterminate", ctx_r89.stringSelection.hasValue() && !ctx_r89.isAllSelected());
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_td_4_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); return $event.stopPropagation(); })("change", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); var row_r94 = ctx.$implicit; var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return $event ? ctx_r97.stringSelection.toggle(row_r94) : null; })("change", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_td_4_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); var row_r94 = ctx.$implicit; var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r98.selectedstrtable(row_r94.store_no); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r94 = ctx.$implicit;
    var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r90.stringSelection.isSelected(row_r94))("aria-label", ctx_r90.checkboxLabelTeststore(row_r94));
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_th_2_Template, 8, 2, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_td_4_Template, 5, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_td_4_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); return $event.stopPropagation(); })("change", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); var row_r101 = ctx.$implicit; var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return $event ? ctx_r104.stringSelectionControlStore.toggle(row_r101) : null; })("change", function CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r105.showValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r101 = ctx.$implicit;
    var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r100.stringSelectionControlStore.isSelected(row_r101));
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_th_2_Template, 5, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_td_4_Template, 5, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_30_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r106.columnHeader[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_30_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r109 = ctx.$implicit;
    var tableData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r109[tableData_r14].length > 32 ? element_r109[tableData_r14] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r109[tableData_r14]);
} }
function CommonTableComponent_ng_container_28_ng_container_6_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_28_ng_container_6_ng_container_30_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_30_td_4_Template, 3, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_28_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_28_ng_container_6_ng_container_4_Template, 6, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CommonTableComponent_ng_container_28_ng_container_6_ng_container_6_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommonTableComponent_ng_container_28_ng_container_6_ng_container_8_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CommonTableComponent_ng_container_28_ng_container_6_ng_container_10_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CommonTableComponent_ng_container_28_ng_container_6_ng_container_12_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CommonTableComponent_ng_container_28_ng_container_6_ng_container_14_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CommonTableComponent_ng_container_28_ng_container_6_ng_container_16_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CommonTableComponent_ng_container_28_ng_container_6_ng_container_18_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CommonTableComponent_ng_container_28_ng_container_6_ng_container_20_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CommonTableComponent_ng_container_28_ng_container_6_ng_container_22_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CommonTableComponent_ng_container_28_ng_container_6_ng_container_24_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CommonTableComponent_ng_container_28_ng_container_6_ng_container_26_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CommonTableComponent_ng_container_28_ng_container_6_ng_container_28_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CommonTableComponent_ng_container_28_ng_container_6_ng_container_30_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var tableData_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", tableData_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", tableData_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "store_no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "testprepost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "cntrlprepost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "testvscntrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "test_window");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "similarity_value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sales_corelation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "teststoreid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "select_csm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "details");
} }
function CommonTableComponent_ng_container_28_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 60);
} }
function CommonTableComponent_ng_container_28_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 61);
} }
function CommonTableComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "perfect-scrollbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function CommonTableComponent_ng_container_28_Template_table_matSortChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113); var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r112.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CommonTableComponent_ng_container_28_ng_container_6_Template, 33, 15, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommonTableComponent_ng_container_28_tr_8_Template, 1, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CommonTableComponent_ng_container_28_tr_10_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx_r3.configPerfect);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r3.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayColumns);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r132.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r135 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r135[tableData_r117], "");
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_4_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_4_td_4_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_6_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r137.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_6_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r140 = ctx.$implicit;
    var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r138.getAlign(ctx_r138.row));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r138.getTestStoreName(element_r140), "");
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_6_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_6_td_4_Template, 2, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_8_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r141.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_8_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r144 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r142.getColor(element_r144[tableData_r117]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r144[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_8_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_8_td_4_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_10_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r146.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_10_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r149 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r147.getColor(element_r149[tableData_r117]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r149[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_10_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_10_td_4_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_12_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r151.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r154 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r152.getColor(element_r154[tableData_r117]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r154[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_12_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_12_td_4_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_14_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r156.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_14_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r159 = ctx.$implicit;
    var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r157.getColorDash(element_r159));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r157.status(element_r159));
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_14_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_14_td_4_Template, 3, 2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_16_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r160.hideTestWindowColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r160.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_16_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r163 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r161.hideTestWindowColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r163[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_16_th_2_Template, 4, 2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_16_td_4_Template, 4, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_18_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r165.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_18_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r168 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r168[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_18_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_18_td_4_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_20_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r170.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_20_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r173 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r173[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_20_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_20_td_4_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_22_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r175.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_22_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r178 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r176.tableName.test_store_id === "Test Store Name" ? "text-align-left" : "text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r178[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_22_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_22_td_4_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r187); var row_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r185.deletetoParent(row_r182); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r189); var row_r182 = ctx.$implicit; var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r188.analyseToParent(row_r182); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Analyse Impact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r189); var row_r182 = ctx.$implicit; var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r190.edittoParent(row_r182.test_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r189); var row_r182 = ctx.$implicit; var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r191.historytoParent(row_r182.test_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_div_21_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r182 = ctx.$implicit;
    var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r181.getAnalyseImpactButton(row_r182.stepId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r181.getAICursor(row_r182));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r181.getEditButton(row_r182.stepId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r182.is_own);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_th_2_Template, 5, 0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_td_4_Template, 24, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_th_2_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r195); var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return $event ? ctx_r194.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Store\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r192.stringSelection.hasValue() && ctx_r192.isAllSelected())("indeterminate", ctx_r192.stringSelection.hasValue() && !ctx_r192.isAllSelected());
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_td_4_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198); return $event.stopPropagation(); })("change", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198); var row_r196 = ctx.$implicit; var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return $event ? ctx_r199.stringSelection.toggle(row_r196) : null; })("change", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_td_4_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198); var row_r196 = ctx.$implicit; var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r200.selectedstrtable(row_r196.store_no); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r196 = ctx.$implicit;
    var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r193.stringSelection.isSelected(row_r196))("aria-label", ctx_r193.checkboxLabelTeststore(row_r196));
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_th_2_Template, 8, 2, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_td_4_Template, 5, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_td_4_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r205); return $event.stopPropagation(); })("change", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r205); var row_r203 = ctx.$implicit; var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return $event ? ctx_r206.stringSelectionControlStore.toggle(row_r203) : null; })("change", function CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r205); var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r207.showValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r203 = ctx.$implicit;
    var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r202.stringSelectionControlStore.isSelected(row_r203));
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_th_2_Template, 5, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_td_4_Template, 5, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_30_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r208.columnHeader[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_30_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r211 = ctx.$implicit;
    var tableData_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r211[tableData_r117].length > 32 ? element_r211[tableData_r117] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r211[tableData_r117]);
} }
function CommonTableComponent_ng_container_30_ng_container_4_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommonTableComponent_ng_container_30_ng_container_4_ng_container_30_th_2_Template, 3, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_30_td_4_Template, 3, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommonTableComponent_ng_container_30_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_ng_container_4_Template, 6, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CommonTableComponent_ng_container_30_ng_container_4_ng_container_6_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommonTableComponent_ng_container_30_ng_container_4_ng_container_8_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CommonTableComponent_ng_container_30_ng_container_4_ng_container_10_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CommonTableComponent_ng_container_30_ng_container_4_ng_container_12_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CommonTableComponent_ng_container_30_ng_container_4_ng_container_14_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CommonTableComponent_ng_container_30_ng_container_4_ng_container_16_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CommonTableComponent_ng_container_30_ng_container_4_ng_container_18_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CommonTableComponent_ng_container_30_ng_container_4_ng_container_20_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CommonTableComponent_ng_container_30_ng_container_4_ng_container_22_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CommonTableComponent_ng_container_30_ng_container_4_ng_container_24_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CommonTableComponent_ng_container_30_ng_container_4_ng_container_26_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CommonTableComponent_ng_container_30_ng_container_4_ng_container_28_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CommonTableComponent_ng_container_30_ng_container_4_ng_container_30_Template, 6, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var tableData_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", tableData_r117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", tableData_r117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "store_no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "testprepost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "cntrlprepost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "testvscntrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "test_window");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "similarity_value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sales_corelation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "teststoreid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "select_csm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "details");
} }
function CommonTableComponent_ng_container_30_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 60);
} }
function CommonTableComponent_ng_container_30_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 61);
} }
function CommonTableComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    var _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function CommonTableComponent_ng_container_30_Template_table_matSortChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r215); var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r214.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommonTableComponent_ng_container_30_ng_container_4_Template, 33, 15, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CommonTableComponent_ng_container_30_tr_6_Template, 1, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommonTableComponent_ng_container_30_tr_8_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r4.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayColumns);
} }
function CommonTableComponent_ng_template_32_div_10_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_template_32_div_10_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommonTableComponent_ng_template_32_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_template_32_div_10_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r222); var disp_r217 = ctx.$implicit; var i_r218 = ctx.index; var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r221.hideOrShowColumns(disp_r217, i_r218); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CommonTableComponent_ng_template_32_div_10_mat_icon_15_Template, 2, 0, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CommonTableComponent_ng_template_32_div_10_mat_icon_17_Template, 2, 0, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var disp_r217 = ctx.$implicit;
    var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx_r216.hideIcon[disp_r217] ? "active" : "deactive")("cdkDragDisabled", ctx_r216.hideIcon[disp_r217])("cdkDragData", disp_r217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n          ", ctx_r216.getDisplayColumn(disp_r217), "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r216.hideIcon[disp_r217]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r216.hideIcon[disp_r217]);
} }
function CommonTableComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Configure grid\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function CommonTableComponent_ng_template_32_Template_div_cdkDropListDropped_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r224); var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r223.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CommonTableComponent_ng_template_32_div_10_Template, 21, 6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-dialog-actions", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_template_32_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r224); var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r225.closeDailog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommonTableComponent_ng_template_32_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r224); var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r226.closeDailog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Ok\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n");
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx_r6.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.array);
} }
var _c0 = function () { return [5, 10, 20]; };
var CommonTableComponent = /** @class */ (function () {
    function CommonTableComponent(dialog) {
        this.dialog = dialog;
        this.editData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.analyseData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.historyData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callFilterData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callSortData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedStrTableData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkboxLabelTeststoreData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showValueData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkboxLabelControlStoreData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.masterToggleData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAllSelectedData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAllStoresData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // @Output() callConfigureData:EventEmitter<any> = new EventEmitter<any>();
        this.objectKeys = Object.keys;
        this.LOAD_DATA = [];
        this.hideIcon = [false];
        this.tempData = [];
        this.tempHideArray = [];
        this.showExpand = false;
        this.tempFilter = [];
        this.hideFilter = false;
        this.hideSettings = false;
        this.configPerfect = {};
    }
    CommonTableComponent.prototype.ngOnInit = function () {
        this.array = this.objectKeys(this.columnHeader);
        this.displayColumns = this.objectKeys(this.columnHeader);
        this.tempData = this.objectKeys(this.columnHeader);
        if (this.tableType === 'comprassion') {
            console.log('comprassion table');
            this.hideFilter = true;
            this.hideSettings = true;
        }
        else if (this.tableType === 'control') {
            this.hideFilter = true;
            this.hideSettings = false;
        }
        else if (this.tableType === 'testMeasurementResults') {
            this.showExpand = true;
        }
    };
    CommonTableComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log(this.tableData);
        this.dataSource = this.tableData;
        this.LOAD_DATA = this.tableData.data;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.paginator2) && this.tableType !== 'control' && this.tableType !== 'dashboard') {
            this.tableData.paginator = this.paginator2;
        }
        else if (this.tableData.data.length > 0) {
            setTimeout(function () {
                _this.tableData.paginator = _this.paginator2;
            });
        }
        else if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.paginator2)) {
            setTimeout(function () {
                _this.tableData.paginator = _this.paginator2;
            });
        }
    };
    CommonTableComponent.prototype.applyFilter = function (filterValue) {
        console.log('applyFilter');
        if (this.tableType === 'dashboard') {
            this.callFilterList(filterValue);
        }
        else {
            this.searchFilter.emit(filterValue);
            // this.dataSource.filter = filterValue.trim().toLowerCase();
            // this.dataSource.paginator = this.paginator2;
        }
    };
    CommonTableComponent.prototype.getTestStoreName = function (row) {
        if (sessionStorage.getItem('region') == 'DEMO') {
            return row.store_no;
        }
        else if (sessionStorage.getItem('region') == 'DEMO') {
            return row.customer_name;
        }
        else if (sessionStorage.getItem('region') == 'DEMO') {
            return row.store_no;
        }
    };
    CommonTableComponent.prototype.edittoParent = function (testId) {
        this.editData.emit(testId);
    };
    CommonTableComponent.prototype.analyseToParent = function (row) {
        this.analyseData.emit(row);
    };
    CommonTableComponent.prototype.selectedstrtable = function (testId) {
        this.selectedStrTableData.emit(testId);
    };
    CommonTableComponent.prototype.showValue = function (event) {
        this.showValueData.emit(event);
    };
    CommonTableComponent.prototype.checkboxLabelTeststore = function (row) {
        this.checkboxLabelTeststoreData.emit(row);
    };
    CommonTableComponent.prototype.checkboxLabel = function (row) {
        console.log(row);
        this.checkboxLabelControlStoreData.emit(row);
    };
    CommonTableComponent.prototype.drop = function (event) {
        var _this = this;
        console.log('drop event fired');
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.array, event.previousIndex, event.currentIndex);
        console.log('this.array', this.array, this.displayColumns);
        var displayValues = [];
        displayValues = this.array.filter(function (val) { return !_this.tempHideArray.includes(val); });
        console.log(displayValues, this.displayColumns, this.array, 'displayValues');
        this.displayColumns = displayValues;
    };
    CommonTableComponent.prototype.historytoParent = function (testId) {
        this.historyData.emit(testId);
    };
    CommonTableComponent.prototype.deletetoParent = function (row) {
        this.deleteData.emit(row);
    };
    CommonTableComponent.prototype.callFilterDataToParent = function () {
        this.callFilterData.emit();
    };
    CommonTableComponent.prototype.callFullScreenToParent = function () {
        this.callFullScreen.emit();
    };
    CommonTableComponent.prototype.sortData = function (data) {
        this.callSortData.emit(data);
    };
    CommonTableComponent.prototype.masterToggle = function () {
        this.masterToggleData.emit();
    };
    CommonTableComponent.prototype.isAllSelected = function () {
        this.isAllSelectedData.emit();
    };
    CommonTableComponent.prototype.selectAllStores = function (event) {
        this.selectAllStoresData.emit(event);
    };
    CommonTableComponent.prototype.getColor = function (value) {
        var NumberSplit = value.split('%');
        var valueNumber = Number(NumberSplit[0]);
        if (valueNumber > 0) {
            return 'color_green';
        }
        else {
            return 'color_red';
        }
    };
    CommonTableComponent.prototype.getColorDash = function (data) {
        var id = data.test_id;
        var value = this.status(data);
        if (value === 'Draft Saved') {
            return 'status_purple';
        }
        else if (value === 'Test Running' || value === 'Test Analysis' || value === 'Test Planned') {
            return 'status_yellow';
        }
    };
    CommonTableComponent.prototype.getAnalyseImpactButton = function (rowData) {
        if (rowData.stepId < 5 && !rowData.is_finalize) {
            return 'button_deactivate';
        }
        else {
            return 'button_activate';
        }
    };
    CommonTableComponent.prototype.getEditButton = function (rowData) {
        if (rowData.stepId > 5 && rowData.is_finalize) {
            return 'button_deactivate';
        }
        else {
            return 'button_activate';
        }
    };
    CommonTableComponent.prototype.getAICursor = function (rowData) {
        if (rowData.stepId < 5 && rowData.is_finalize) {
            return 'cursor_deactivate';
        }
        else {
            return 'cursor_activate';
        }
    };
    CommonTableComponent.prototype.getAlign = function (row) {
        if (sessionStorage.getItem('region') == 'DEMO') {
            return 'align_center';
        }
        else if (sessionStorage.getItem('region') == 'DEMO') {
            return 'align_left';
        }
        else if (sessionStorage.getItem('region') == 'DEMO') {
            return 'align_center';
        }
    };
    CommonTableComponent.prototype.status = function (data) {
        var search_id = data.test_id;
        var record = this.originalData.filter(function (x) { return x.test_id == search_id; })[0];
        var date = new Date(new Date().toDateString()).getTime();
        if (date >= new Date(record.testwin_start).getTime() &&
            date <= new Date(record.testwin_end).getTime() && record.is_finalize == false) {
            return 'Test Running';
        }
        else if (!(date >= new Date(record.testwin_start).getTime() &&
            date <= new Date(record.testwin_end).getTime()) && record.is_finalize == true) {
            return 'Test Analysis';
        }
        else if (record.is_finalize === true) {
            return 'Test Planned';
        }
        return 'Draft Saved';
    };
    CommonTableComponent.prototype.openDailog = function (templateRef) {
        this.dialogRef = this.dialog.open(templateRef);
    };
    CommonTableComponent.prototype.closeDailog = function () {
        this.dialogRef.close();
    };
    CommonTableComponent.prototype.hideOrShowColumns = function (data, index) {
        var _this = this;
        if (this.hideIcon[data] === true) {
            this.hideIcon[data] = false;
        }
        else {
            this.hideIcon[data] = true;
        }
        var findIndex = this.displayColumns.findIndex(function (itm) { return itm === data; });
        if (findIndex !== -1) {
            var datavalues = this.displayColumns.filter(function (itm) { return itm !== data; });
            var hideValues = this.displayColumns.filter(function (itm) { return itm === data; });
            var findHideIndex = this.tempHideArray.findIndex(function (itm) { return itm === data; });
            if (hideValues.length > 0 && findHideIndex === -1) {
                this.tempHideArray.push(hideValues[0]);
            }
            this.displayColumns = datavalues;
        }
        else {
            var findHideIndex = this.tempHideArray.findIndex(function (itm) { return itm === data; });
            if (findHideIndex !== -1) {
                this.tempHideArray.splice(findHideIndex, 1);
            }
            var displayValues = [];
            displayValues = this.array.filter(function (val) { return !_this.tempHideArray.includes(val); });
            this.displayColumns = displayValues;
        }
    };
    CommonTableComponent.prototype.getDisplayColumn = function (keyValue) {
        // console.log(this.columnHeader)
        return this.columnHeader[keyValue];
    };
    CommonTableComponent.prototype.callFilterList = function (event) {
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
        console.log(temp);
        setTimeout(function () { return _this.tableData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](temp); });
        setTimeout(function () { return _this.tableData.paginator = _this.paginator2; });
    };
    CommonTableComponent.ɵfac = function CommonTableComponent_Factory(t) { return new (t || CommonTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    CommonTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommonTableComponent, selectors: [["app-common-table"]], viewQuery: function CommonTableComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, inputs: { tableData: "tableData", columnHeader: "columnHeader", tableHeader: "tableHeader", originalData: "originalData", stringSelection: "stringSelection", stringSelectionControlStore: "stringSelectionControlStore", tableType: "tableType", tableName: "tableName" }, outputs: { editData: "editData", analyseData: "analyseData", deleteData: "deleteData", historyData: "historyData", callFilterData: "callFilterData", callFullScreen: "callFullScreen", callSortData: "callSortData", selectedStrTableData: "selectedStrTableData", checkboxLabelTeststoreData: "checkboxLabelTeststoreData", showValueData: "showValueData", checkboxLabelControlStoreData: "checkboxLabelControlStoreData", masterToggleData: "masterToggleData", isAllSelectedData: "isAllSelectedData", selectAllStoresData: "selectAllStoresData", searchFilter: "searchFilter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 35, vars: 8, consts: [[1, "v85_81"], [2, "float", "right"], [3, "pageSize", "pageSizeOptions"], ["paginator2", ""], [2, "float", "right", "padding-top", "16px", "margin-right", "0.5rem"], ["style", "margin-right: 0.2rem;", 3, "click", 4, "ngIf"], [2, "border-left", "1px solid lightgrey"], ["style", "margin-left:0.5rem;", 4, "ngIf"], [2, "float", "right", "padding-top", "12px", "margin-right", "1.5rem"], ["type", "search", "placeholder", "\uF002\u00A0 Search", 1, "form-control", 2, "font-family", "sans-serif, FontAwesome", "width", "175px !important", "height", "30px !important", "background-color", "#f3f4f7", "border-radius", "0.55rem !important", "font-size", "0.8rem !important", 3, "keyup", "search"], [4, "ngIf"], ["myDialog", ""], [2, "margin-right", "0.2rem", 3, "click"], [1, "fas", "fa-sliders-h", 2, "cursor", "pointer"], [2, "margin-left", "0.5rem"], [1, "fas", "fa-cog", 2, "cursor", "pointer", 3, "click"], [2, "height", "240px", 3, "perfectScrollbar"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 3, "dataSource", "matSortChange"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], [3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "table-header-label"], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-cell", "", 3, "ngClass"], [2, "font-weight", "bold !important", 3, "ngClass"], ["mat-cell", "", "style", "white-space:nowrap;", 4, "matCellDef"], ["mat-cell", "", 2, "white-space", "nowrap"], [3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", "", "style", "width: 16%;z-index:0 !important;", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "16%", "z-index", "0 !important", 3, "hidden"], ["mat-cell", "", 3, "hidden"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", "", "style", "text-align: center;", 3, "ngClass", 4, "matCellDef"], ["mat-cell", "", 2, "text-align", "center", 3, "ngClass"], ["mat-header-cell", "", "class", "remove_border", "style", "border-radius: 0px 0px 10px 0px;", 4, "matHeaderCellDef"], ["mat-header-cell", "", 1, "remove_border", 2, "border-radius", "0px 0px 10px 0px"], [1, "table-header-label", "context-width"], ["mat-icon-button", "", 1, "mr-3", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "border_bottom", 3, "ngClass", "click"], ["mat-menu-item", "", 1, "border_bottom", 3, "click"], ["mat-menu-item", "", "class", "border_bottom", 3, "click", 4, "ngIf"], ["mat-header-cell", "", "style", "justify-content: left !important;padding-left: 0.1rem !important;", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "justify-content", "left !important", "padding-left", "0.1rem !important"], [1, "headerCheck", 3, "checked", "indeterminate", "change"], [3, "checked", "aria-label", "click", "change"], ["mat-sort-header", "", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-sort-header", "", "mat-header-cell", ""], [3, "checked", "click", "change"], [1, "truncate", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", "cdkDragHandle", "", 2, "font-size", "20px", "font-weight", "bolder", "cursor", "grab"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", "cdkDragDisabled", "cdkDragData", 4, "ngFor", "ngForOf"], [2, "float", "right", "padding-top", "1rem", "margin-bottom", "-10px"], ["mat-button", "", 1, "button-color", 2, "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "submit", 1, "pl-2", "button-color-enabled-background", 2, "cursor", "pointer", 3, "click"], ["cdkDrag", "", 1, "example-box", 3, "ngClass", "cdkDragDisabled", "cdkDragData"], [1, "w-10", "drag-icon"], [1, "w-100", "drag-content"], [2, "padding-right", "5%"], [3, "click"], ["style", "cursor: pointer;\n              font-size: 20px;\n              color: gray;\n              padding: 5px;", 4, "ngIf"], [2, "cursor", "pointer", "font-size", "20px", "color", "gray", "padding", "5px"]], template: function CommonTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-paginator", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CommonTableComponent_span_14_Template, 4, 0, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CommonTableComponent_span_18_Template, 4, 0, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CommonTableComponent_Template_input_keyup_24_listener($event) { return ctx.applyFilter($event.target.value); })("search", function CommonTableComponent_Template_input_search_24_listener() { return ctx.applyFilter(""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CommonTableComponent_ng_container_28_Template, 14, 5, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CommonTableComponent_ng_container_30_Template, 11, 4, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CommonTableComponent_ng_template_32_Template, 25, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tableHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideSettings);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableType === "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableType !== "dashboard");
        } }, directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragHandle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"]], styles: [".color_green[_ngcontent-%COMP%] {\n  color: #2dc887;\n}\n\n.color_red[_ngcontent-%COMP%] {\n  color: #ff70b0;\n}\n\n.status_yellow[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #fbebcc;\n  border-radius: 5px;\n  color: #ec9b02;\n  font-family: Mulish_bold;\n}\n\n.table-header-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 10px;\n  font-weight: bolder;\n}\n\n.button_deactivate[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: lightgray;\n  color: gray;\n  pointer-events: none;\n}\n\n.button_activate[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cursor_deactivate[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.cursor_activate[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.align_center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.align_left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.headerCheck[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n\ntext-align-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\ntext-align-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: white !important;\n  cursor: move;\n}\n\n.deactive[_ngcontent-%COMP%] {\n  background-color: lightgrey !important;\n  cursor: not-allowed;\n  color: gray;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  \n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 5px;\n  width: 15rem !important;\n}\n\n.drag-icon[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n.drag-content[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  color: #676d77;\n}\n\n.status_yellow[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #fbebcc;\n  border-radius: 5px;\n  color: #ec9b02;\n  font-family: Mulish_bold;\n}\n\n.status_purple[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #eae7f9;\n  border-radius: 5px;\n  color: #5846b6;\n  font-family: Mulish_bold;\n}\n\n.status_green[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #b7fde0;\n  border-radius: 5px;\n  color: #0d955c;\n}\n\n.status_red[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #ffd3d4;\n  border-radius: 5px;\n  color: #ba2326;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block !important;\n  max-width: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9jb21tb24tdGFibGUvY29tbW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFDRjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvY29tbW9uLXRhYmxlL2NvbW1vbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcl9ncmVlbntcbiAgICBjb2xvcjogIzJkYzg4NztcbiAgfVxuXG4gIC5jb2xvcl9yZWR7XG4gICAgY29sb3I6ICNmZjcwYjA7XG4gIH1cblxuICAuc3RhdHVzX3llbGxvd3tcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWJjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNlYzliMDI7XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkXG4gIH1cblxuICAudGFibGUtaGVhZGVyLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgLmJ1dHRvbl9kZWFjdGl2YXRle1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbl9hY3RpdmF0ZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY3Vyc29yX2RlYWN0aXZhdGV7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gIC5jdXJzb3JfYWN0aXZhdGV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmFsaWduX2NlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbl9sZWZ0e1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZWFkZXJDaGVja3tcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cblxudGV4dC1hbGlnbi1sZWZ0e1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbnRleHQtYWxpZ24tY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uZGVhY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmV4YW1wbGUtbGlzdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIC8qIHBhZGRpbmc6IDIwcHggMTBweDsgKi9cbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZHJhZy1pY29uIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5kcmFnLWljb24gaSB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmRyYWctY29udGVudHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBjb2xvcjogIzY3NmQ3Nztcbn1cblxuLnN0YXR1c195ZWxsb3d7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWJjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2VjOWIwMjtcbiAgZm9udC1mYW1pbHk6IE11bGlzaF9ib2xkXG59XG5cbi5zdGF0dXNfcHVycGxle1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWU3Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM1ODQ2YjY7XG4gIGZvbnQtZmFtaWx5OiBNdWxpc2hfYm9sZFxufVxuXG4uc3RhdHVzX2dyZWVue1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2ZkZTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwZDk1NWM7XG59XG5cbi5zdGF0dXNfcmVke1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQzZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNiYTIzMjY7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi50cnVuY2F0ZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDhyZW07XG59Il19 */"] });
    return CommonTableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-common-table',
                templateUrl: './common-table.component.html',
                styleUrls: ['./common-table.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { paginator2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }], tableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columnHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tableHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], originalData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stringSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stringSelectionControlStore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tableType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tableName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], editData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], analyseData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deleteData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], historyData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callFilterData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callFullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callSortData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectedStrTableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], checkboxLabelTeststoreData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], showValueData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], checkboxLabelControlStoreData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], masterToggleData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isAllSelectedData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectAllStoresData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], searchFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "vtpD");


// import { Shell } from '@app/shell/shell.service';



var routes = [{ path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { title: 'Login' } }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
    LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LoginRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, AuthenticationService, MockAuthenticationService, AuthenticationGuard, HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpCacheService, ApiPrefixInterceptor, CacheInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "pKmL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.service */ "6CRC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.service.mock */ "p8Hc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockAuthenticationService", function() { return _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__["MockAuthenticationService"]; });

/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.guard */ "4vU7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]; });

/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/http.service */ "gHic");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]; });

/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/http-cache.service */ "dXti");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return _http_http_cache_service__WEBPACK_IMPORTED_MODULE_5__["HttpCacheService"]; });

/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "+YFA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__["ApiPrefixInterceptor"]; });

/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/cache.interceptor */ "Lo2u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_7__["CacheInterceptor"]; });

/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "J6E/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerInterceptor"]; });

/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./route-reusable-strategy */ "znf/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_9__["RouteReusableStrategy"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logger.service */ "fSl4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_10__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_10__["Logger"]; });














/***/ }),

/***/ "fSl4":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "fk77":
/*!*************************************************!*\
  !*** ./src/app/shared/animations/animations.ts ***!
  \*************************************************/
/*! exports provided: mainContentAnimation, sidebarAnimation, iconAnimation, labelAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainContentAnimation", function() { return mainContentAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarAnimation", function() { return sidebarAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconAnimation", function() { return iconAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelAnimation", function() { return labelAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

var defaultDuration = '250ms';
var defaultMinWidth = '5.625rem';
var defaultMaxWidth = '15.625rem';
var defaultMinFontSize = '1.2rem';
var defaultMaxFontSize = '1.2rem';
function mainContentAnimation(animationDuration, minWidth, maxWidth) {
    if (animationDuration === void 0) { animationDuration = defaultDuration; }
    if (minWidth === void 0) { minWidth = defaultMinWidth; }
    if (maxWidth === void 0) { maxWidth = defaultMaxWidth; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('onSideNavChange', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'margin-left': minWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'margin-left': maxWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in")),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-out")),
    ]);
}
function sidebarAnimation(animationDuration, minWidth, maxWidth) {
    if (animationDuration === void 0) { animationDuration = defaultDuration; }
    if (minWidth === void 0) { minWidth = defaultMinWidth; }
    if (maxWidth === void 0) { maxWidth = defaultMaxWidth; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('onSideNavChange', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: minWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: maxWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@iconAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@labelAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in-out")
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@iconAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@labelAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in-out")
        ])),
    ]);
}
function iconAnimation(animationDuration, minFontSize, maxFontSize) {
    if (animationDuration === void 0) { animationDuration = defaultDuration; }
    if (minFontSize === void 0) { minFontSize = defaultMinFontSize; }
    if (maxFontSize === void 0) { maxFontSize = defaultMaxFontSize; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('iconAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            fontSize: maxFontSize,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            fontSize: minFontSize,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in-out")),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in-out")),
    ]);
}
function labelAnimation(animationDuration) {
    if (animationDuration === void 0) { animationDuration = defaultDuration; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('labelAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'inline',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'none',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in-out")),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animationDuration + " ease-in-out")),
    ]);
}


/***/ }),

/***/ "gHic":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.interceptor */ "J6E/");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.interceptor */ "Lo2u");
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-prefix.interceptor */ "+YFA");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







// From @angular/common/http/src/interceptor: allows to chain interceptors
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (request) {
        return this.interceptor.intercept(request, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
var HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(httpHandler, injector, interceptors) {
        if (interceptors === void 0) { interceptors = []; }
        var _this = _super.call(this, httpHandler) || this;
        _this.httpHandler = httpHandler;
        _this.injector = injector;
        _this.interceptors = interceptors;
        if (!_this.interceptors) {
            // Configure default interceptors that can be disabled here
            _this.interceptors = [_this.injector.get(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]), _this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"])];
        }
        return _this;
    }
    HttpService.prototype.cache = function (forceUpdate) {
        var cacheInterceptor = this.injector.get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheInterceptor"]).configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    };
    HttpService.prototype.skipErrorHandler = function () {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"]);
    };
    HttpService.prototype.disableApiPrefix = function () {
        return this.removeInterceptor(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]);
    };
    // Override the original method to wire interceptors when triggering the request.
    HttpService.prototype.request = function (method, url, options) {
        var handler = this.interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler).request(method, url, options);
    };
    HttpService.prototype.removeInterceptor = function (interceptorType) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.filter(function (i) { return !(i instanceof interceptorType); }));
    };
    HttpService.prototype.addInterceptor = function (interceptor) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    };
    HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HTTP_DYNAMIC_INTERCEPTORS, 8)); };
    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [HTTP_DYNAMIC_INTERCEPTORS]
            }] }]; }, null); })();


/***/ }),

/***/ "klIF":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/history/history.component.ts ***!
  \***************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/sidenav.service */ "8//E");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










var _c0 = function (a0) { return { last: a0 }; };
function HistoryComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var hist_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getInitials(hist_r1.Name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx_r0.dateConvert(hist_r1.created_at), "d MMM  y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, ctx_r0.dateConvert(hist_r1.created_at), "h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hist_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hist_r1.action_performed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, last_r2));
} }
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(commonService, sideNavService, globalService) {
        var _this = this;
        this.commonService = commonService;
        this.sideNavService = sideNavService;
        this.globalService = globalService;
        this.globalService.subscribe('history_id', function (obj) {
            console.log('Event triggered', obj);
            _this.commonService.getHistoryDetails(obj).subscribe(function (response) {
                if (response.status === 'ok') {
                    _this.historyDetailsData = response.data;
                    console.log('this.historyDetailsData-> ', _this.historyDetailsData);
                }
            });
        });
    }
    HistoryComponent.prototype.getInitials = function (name) {
        var initials = name.split(' ');
        var profileInitial = initials[0].charAt(0).toUpperCase() + initials[1].charAt(0).toUpperCase();
        return profileInitial;
    };
    HistoryComponent.prototype.toggleClose = function () {
        this.sideNavService.close();
    };
    HistoryComponent.prototype.dateConvert = function (value) {
        console.log(new Date(value * 1000).toLocaleString());
        console.log(value);
        console.log(new Date(value * 1000));
        var myDate = new Date(value * 1000);
        return myDate;
    };
    HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"])); };
    HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 16, vars: 3, consts: [[2, "padding", "1.5rem 0 0.5rem 1rem"], [2, "font-family", "Mulish_bold", "font-size", "16px"], [2, "float", "right", "cursor", "pointer", "font-size", "14px", "padding-right", "1.5rem", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], [2, "width", "100%", "overflow-x", "hidden"], [1, "container"], ["class", "circle", 4, "ngFor", "ngForOf"], [1, "circle"], [1, "initials"], [2, "padding-bottom", "5px"], [2, "padding", "0px 0px 15px 15px", "font-size", "11px"], [2, "padding", "1rem", "font-size", "10.5px", "font-weight", "bold", "color", "rgba(0,0,0,.54)", "padding-left", "5px"], [2, "padding", "1rem", "font-size", "13px", "font-weight", "bolder"], [2, "padding-left", "5.8rem", "padding-top", "0.8rem", "color", "rgba(0,0,0,.54)"], [2, "font-size", "13px", "font-weight", "bold"], [1, "vertical_dotted_line", 3, "ngClass"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "History of\n        Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_span_click_3_listener() { return ctx.toggleClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "perfect-scrollbar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HistoryComponent_div_13_Template, 27, 14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 560, "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyDetailsData);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".circle[_ngcontent-%COMP%] {\n  height: 8rem;\n  font-family: Mulish_regular !important;\n}\n\n.separator[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 69px;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.54);\n  margin-top: -54px;\n  margin-bottom: 5px;\n  margin-left: 10%;\n}\n\n.initials[_ngcontent-%COMP%] {\n  float: left;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: mediumslateblue;\n  font-size: 24px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  line-height: 59px;\n  margin: 4px 8px;\n}\n\n.vertical_dotted_line[_ngcontent-%COMP%] {\n  border-left: 2px dashed lightgrey;\n  height: 64px;\n  margin-top: -13%;\n  margin-left: 10%;\n}\n\n.vertical_dotted_line[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 15px;\n  \n  \n  display: inline-flex;\n  flex-direction: column;\n}\n\n.last[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQU1JO0VBRUksaUNBQUE7RUFDSixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9JO0VBQ0Msc0JBQUE7QUFKTDs7QUFRRTtFQUNFLGFBQUE7RUFFQSxnRUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNFO0VBQ0ksa0JBQUE7QUFOTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZXtcbiAgICBoZWlnaHQ6IDhyZW07XG4gICAgZm9udC1mYW1pbHk6IE11bGlzaF9yZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIHdpZHRoOiAzcHg7XG4gICAgaGVpZ2h0OiA2OXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XG4gICAgbWFyZ2luLXRvcDogLTU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cblxuICAuaW5pdGlhbHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogbWVkaXVtc2xhdGVibHVlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDU5cHg7XG4gICAgbWFyZ2luOiA0cHggOHB4O1xuICB9XG5cbiAgICAvLyAuc2VwYXJhdG9yOmxhc3QtY2hpbGR7ICAgICAgICBcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC8vIH1cblxuICAgIC52ZXJ0aWNhbF9kb3R0ZWRfbGluZVxuICAgIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBkYXNoZWQgbGlnaHRncmV5O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBtYXJnaW4tdG9wOiAtMTMlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgfSBcblxuICAgIC52ZXJ0aWNhbF9kb3R0ZWRfbGluZTpsYXN0LWNoaWxkeyAgICAgICAgXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIH1cblxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG4gICAgLyogYWxpZ24gaXRlbXMgaW4gb25lIGNvbHVtbiBhbmQgdGFrZSBzcGFjZSBkZWZpbmVkIGJ5IGNvbnRlbnQgKi9cbiAgICAvKiB0aGlzIGlzIHVzZWQgZm9yIGNlbnRlcmluZyBzZXBhcmF0b3IgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmxhc3R7XG4gICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH0iXX0= */"] });
    return HistoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"] }]; }, null); })();


/***/ }),

/***/ "kybR":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/component/filter-component/filter-component.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FilterComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponentComponent", function() { return FilterComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/common.service */ "7o2P");
/* harmony import */ var _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/global-events.service */ "4krj");
/* harmony import */ var _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/sidenav.service */ "8//E");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/testmeasure.service */ "Q4YV");
/* harmony import */ var _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/testconfig.service */ "LBDO");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");



















function FilterComponentComponent_mat_expansion_panel_16_mat_panel_description_11_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponentComponent_mat_expansion_panel_16_mat_panel_description_11_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var subVault_r3 = ctx.$implicit; var vault_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checkboxValueChanges(vault_r1, subVault_r3.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subVault_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", subVault_r3.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                            ", subVault_r3.value, "\n                        ");
} }
function FilterComponentComponent_mat_expansion_panel_16_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponentComponent_mat_expansion_panel_16_Template_mat_checkbox_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var vault_r1 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.masterToggle(vault_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FilterComponentComponent_mat_expansion_panel_16_mat_panel_description_11_Template, 5, 2, "mat-panel-description", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vault_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", vault_r1.indeterminate)("checked", vault_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", vault_r1.value, " (All)\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vault_r1.subValue);
} }
var config = __webpack_require__(/*! ../../../../assets/region/config-fields.json */ "ar/W");
var FilterComponentComponent = /** @class */ (function () {
    function FilterComponentComponent(homeservice, sidenavService, commonService, globalService, wizard3service) {
        var _this = this;
        this.homeservice = homeservice;
        this.sidenavService = sidenavService;
        this.commonService = commonService;
        this.globalService = globalService;
        this.wizard3service = wizard3service;
        this.arrayFilterData = [];
        this.typetest = ['Frequency Test', 'Duration Test', 'Activity Test', 'Others'];
        this.statusData = ['Draft Saved', 'Test Running', 'Test Analysis', 'Test Planned'];
        this.testStoresSupscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.testStoresData = [];
        this.tempFilter = [];
        this.testStoreDataSubsription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.tempData = [];
        this.component_name = '';
        this.moduleComponent = '';
        this.userRegion = localStorage.getItem('region');
        this.testStoresSupscription = this.globalService.subscribe('FILTER_OPEN_METHOD', function (obj) {
            console.log('calling the event');
            if (_this.tempComponentName !== obj.module || _this.tempModule !== obj.component) {
                _this.tempData = [];
                _this.arrayFilterData = [];
            }
            _this.component_name = obj.module;
            _this.moduleComponent = obj.component;
            // this.tempModule = ob
            _this.callDataFilter(obj.module, obj.data, _this.moduleComponent); // Form the data based on the Screen
        });
        this.testStoreDataSubsription = this.commonService.getTestStoresFilter().subscribe(function (response) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(response)) {
                _this.testStoresData = response;
            }
        });
    }
    FilterComponentComponent.prototype.ngOnInit = function () {
    };
    FilterComponentComponent.prototype.ngOnDestroy = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.testStoresSupscription)) {
            this.testStoresSupscription.unsubscribe();
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.testStoreDataSubsription)) {
            this.testStoreDataSubsription.unsubscribe();
        }
    };
    FilterComponentComponent.prototype.getDropdownValues = function () {
        this.homeservice.Get_Dropdownvals().subscribe(function (apiresponse) {
            console.log(apiresponse, 'responsedValue');
            if (apiresponse.status === 'ok') {
                var array = apiresponse.data;
                // this.formattedArray(array);
            }
        });
    };
    // formattedArray(data: any) {
    //   this.pushDataExtra(this.typetest, 'Test type', false);
    //   const parent = this;
    //   Object.keys(data).forEach((x: any) => {
    //     console.log(data, 'data ValueFilter');
    //     if (data[x].length > 0 && this.isShow(x)) {
    //       const obj = {};
    //       obj['value'] = parent.configValue(x);
    //       obj['indeterminate'] = false;
    //       obj['checked'] = true;
    //       obj['subValue'] = this.setDefault(data[x]);
    //       this.arrayFilterData.push(obj);
    //     }
    //   });
    //   console.log(this.arrayFilterData, 'updateArrayData');
    // }
    FilterComponentComponent.prototype.setDefault = function (array) {
        var subData = [];
        if (array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                var obj = {};
                obj['checked'] = true;
                obj['value'] = array[i];
                subData.push(obj);
            }
            return subData;
        }
    };
    FilterComponentComponent.prototype.masterToggle = function (dataValue, event) {
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            if (this.arrayFilterData[i].value === dataValue.value) {
                this.arrayFilterData[i]['checked'] = event.checked;
                for (var j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
                    this.arrayFilterData[i].subValue[j]['checked'] = event.checked;
                }
            }
        }
        if (dataValue.isLink) {
            this.uncheckStores();
        }
        this.valuesNameChecked();
    };
    FilterComponentComponent.prototype.checkboxValueChanges = function (dataValue, subValue, event) {
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            if (this.arrayFilterData[i].value === dataValue.value) {
                for (var j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
                    if (this.arrayFilterData[i].subValue[j].value === subValue) {
                        this.arrayFilterData[i].subValue[j]['checked'] = event.checked;
                    }
                }
            }
        }
        if (dataValue.isLink) {
            this.uncheckStores();
        }
        this.valuesNameChecked();
    };
    FilterComponentComponent.prototype.configValue = function (value) {
        var testFeilds = config[this.userRegion].filterFeilds;
        var formattedValue = '';
        var _loop_1 = function (i) {
            Object.keys(testFeilds[i]).forEach(function (x) {
                console.log(x, 'values list', x === value, value);
                if (x === value) {
                    formattedValue = testFeilds[i][x];
                    return;
                }
            });
            if (formattedValue !== '') {
                return { value: formattedValue };
            }
        };
        for (var i = 0; i < testFeilds.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    FilterComponentComponent.prototype.valuesNameChecked = function () {
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            var temp = [];
            for (var j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
                if (this.arrayFilterData[i].subValue[j].checked) {
                    temp.push(this.arrayFilterData[i].subValue[j].value);
                }
            }
            if (temp.length === this.arrayFilterData[i].subValue.length) {
                this.arrayFilterData[i].checked = true;
                this.arrayFilterData[i].indeterminate = false;
            }
            else if (temp.length === 0) {
                this.arrayFilterData[i].checked = false;
                this.arrayFilterData[i].indeterminate = false;
            }
            else {
                this.arrayFilterData[i].indeterminate = true;
            }
        }
    };
    FilterComponentComponent.prototype.Applyfilter = function () {
        var dataArray = [];
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            var obj = {};
            obj['name'] = this.arrayFilterData[i].filter_key;
            obj['data'] = this.changeFormat(this.arrayFilterData[i]['subValue']);
            dataArray.push(obj);
        }
        console.log(dataArray, 'arrayValue', this.component_name);
        this.commonService.setFilterSubject(dataArray);
        this.globalService.publish('FILLTER_APPLIED', {
            data: dataArray,
            module: 'FILTERED_COMPONENT',
            component: this.component_name,
            componentPage: this.moduleComponent
        });
        this.sidenavService.close();
    };
    FilterComponentComponent.prototype.reset = function () {
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            this.arrayFilterData[i]['checked'] = true;
            for (var j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
                this.arrayFilterData[i].subValue[j]['checked'] = true;
            }
        }
        this.valuesNameChecked();
    };
    FilterComponentComponent.prototype.toggleClose = function () {
        this.sidenavService.close();
    };
    FilterComponentComponent.prototype.isShow = function (data) {
        var testFeilds = config[this.userRegion].filterFeilds;
        this.testFeilds = testFeilds;
        var is_show = false;
        var _loop_2 = function (i) {
            Object.keys(testFeilds[i]).forEach(function (x) {
                if (x === data) {
                    is_show = testFeilds[i]['is_show'];
                }
            });
        };
        for (var i = 0; i < testFeilds.length; i++) {
            _loop_2(i);
        }
        return is_show;
    };
    FilterComponentComponent.prototype.pushDataExtra = function (data, name, is_link, filter_key) {
        var obj = {};
        obj['value'] = name;
        obj['indeterminate'] = false;
        obj['checked'] = true;
        obj['subValue'] = this.setDefault(data);
        obj['isLink'] = is_link;
        obj['filter_key'] = filter_key;
        this.arrayFilterData.push(obj);
    };
    FilterComponentComponent.prototype.testStoreUpdate = function (data) {
        console.log(config[this.userRegion], 'configFeilds', this.userRegion);
        var testStoreName = config[this.userRegion]['partner_id_name'];
        var testStore_data = [];
        for (var i = 0; i < data.length; i++) {
            testStore_data.push(this.testStoresData[i][testStoreName]);
        }
        return testStore_data;
    };
    FilterComponentComponent.prototype.changeFormat = function (data) {
        var dataValue = [];
        if (this.tempComponentName === 'Dashboard' || this.tempComponentName === 'Select_Test_Stores') {
            for (var i = 0; i < data.length; i++) {
                if (!data[i]['checked']) {
                    dataValue.push(data[i]['value']);
                }
            }
        }
        else {
            for (var i = 0; i < data.length; i++) {
                if (data[i]['checked']) {
                    dataValue.push(data[i]['value']);
                }
            }
        }
        return dataValue;
    };
    FilterComponentComponent.prototype.stringFormat = function (stringvalue) {
        var stringSplit = stringvalue.split(' ');
        var finalizedString = '';
        for (var i = 0; i < stringSplit.length; i++) {
            if (stringSplit[i] !== '') {
                if (finalizedString === '') {
                    finalizedString = stringSplit[i];
                }
                else {
                    finalizedString = finalizedString + '_' + stringSplit[i];
                }
            }
        }
        return finalizedString.toLowerCase();
    };
    FilterComponentComponent.prototype.setData_stores = function () {
        var temp_banner = [];
        for (var i = 0; i < this.testStoresData.length; i++) {
            temp_banner.push(this.testStoresData.data[i][this.testFeilds[0]['banner']]);
        }
        var filteredbanner = temp_banner.filter(function (item, pos) {
            return temp_banner.indexOf(item) === pos;
        });
    };
    FilterComponentComponent.prototype.callDataFilter = function (component_name, data, module) {
        this.tempModule = module;
        if (component_name === 'Dashboard') {
            this.tempComponentName = component_name;
            this.initateFunction(data, 'dashBoard');
        }
        else if (component_name === 'Analyse_Impact') {
            this.tempComponentName = component_name;
            if (this.testStoresData.length > 0) {
                this.initateFunction(this.testStoresData, 'testMeasurement');
            }
        }
        else if (component_name === 'Select_Test_Stores') {
            console.log(data, 'dataValue');
            this.tempComponentName = component_name;
            this.initateFunction(data, 'select_test_stores');
        }
    };
    // the function is used to call when load to form the formatted way
    FilterComponentComponent.prototype.initateFunction = function (data, configCall) {
        if (this.tempData.length === 0) {
            var filteredData_1 = config[this.userRegion]['filterFeilds'][0][configCall];
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(filteredData_1) && filteredData_1.length > 0) {
                var _loop_3 = function (i) {
                    if (filteredData_1[i].is_filter) {
                        var dataValue_1 = [];
                        if (filteredData_1[i]['key'] === 'Test Type' || filteredData_1[i]['key'] === 'Status') {
                            var data_1 = filteredData_1[i]['data'];
                            this_1.pushDataExtra(data_1, filteredData_1[i]['show_name'], filteredData_1[i]['is_linked'], filteredData_1[i]['filter_key']);
                        }
                        else {
                            data.forEach(function (element) {
                                if (element.hasOwnProperty(filteredData_1[i]['key'])) {
                                    dataValue_1.push(element[filteredData_1[i]['key']]);
                                }
                            });
                            console.log(dataValue_1, 'not unique array');
                            var distinctArray = dataValue_1.filter(function (n, i) { return dataValue_1.indexOf(n) === i; });
                            this_1.pushDataExtra(distinctArray, filteredData_1[i]['show_name'], filteredData_1[i]['is_linked'], filteredData_1[i]['filter_key']);
                        }
                    }
                };
                var this_1 = this;
                for (var i = 0; i < filteredData_1.length; i++) {
                    _loop_3(i);
                }
                this.tempData = this.arrayFilterData;
            }
        }
    };
    FilterComponentComponent.prototype.uncheckStores = function () {
        var keyValues = [];
        var valuesArray = [];
        var testStoreCompare = [];
        var dataList = this.getValuesArray();
        keyValues = dataList[1];
        valuesArray = dataList[0];
        var result = this.testStoresData.filter(function (e) {
            return keyValues.every(function (a) {
                return !valuesArray.includes(e[a]);
            });
        });
        var dataCheck = this.testStoreUpdate(result);
        var testStoreName = config[this.userRegion]['partner_id_name'];
        for (var k = 0; k < this.arrayFilterData.length; k++) {
            if (this.arrayFilterData[k].filter_key === testStoreName) { // To Compare only the test stores
                this.arrayFilterData[k].subValue.forEach(function (element) {
                    testStoreCompare.push(element.value);
                });
            }
        }
        var final = testStoreCompare.filter(function (item) {
            return !dataCheck.includes(item);
        });
        console.log(final, 'finalChecked data');
        this.updateFilter(final);
    };
    FilterComponentComponent.prototype.updateFilter = function (data) {
        var _this = this;
        var _loop_4 = function (i) {
            var testStoreName = config[this_2.userRegion]['partner_id_name'];
            if (this_2.arrayFilterData[i].filter_key === testStoreName) {
                var _loop_5 = function (j) {
                    var findIndex = data.findIndex(function (x) { return x === _this.arrayFilterData[i].subValue[j].value; });
                    if (findIndex !== -1) {
                        this_2.arrayFilterData[i].subValue[j].checked = false;
                    }
                    else {
                        this_2.arrayFilterData[i].subValue[j].checked = true;
                    }
                };
                for (var j = 0; j < this_2.arrayFilterData[i].subValue.length; j++) {
                    _loop_5(j);
                }
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            _loop_4(i);
        }
    };
    FilterComponentComponent.prototype.getValuesArray = function () {
        var valuesArray = [];
        var keyValues = [];
        var testStoreName = config[this.userRegion]['partner_id_name'];
        for (var i = 0; i < this.arrayFilterData.length; i++) {
            if (this.arrayFilterData[i].filter_key !== testStoreName) {
                keyValues.push(this.arrayFilterData[i].filter_key);
                for (var j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
                    if (!this.arrayFilterData[i].subValue[j].checked) {
                        valuesArray.push(this.arrayFilterData[i].subValue[j].value);
                    }
                }
            }
        }
        console.log(valuesArray, keyValues);
        return [valuesArray, keyValues];
    };
    FilterComponentComponent.ɵfac = function FilterComponentComponent_Factory(t) { return new (t || FilterComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_7__["TestConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_6__["TestMeasureService"])); };
    FilterComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponentComponent, selectors: [["app-filter-component"]], decls: 33, vars: 3, consts: [["id", "main_container", 1, "pl-4", "pt-3", "pr-3"], [2, "width", "100%", "overflow-x", "hidden"], [1, "header_content"], [2, "float", "right", "cursor", "pointer", "font-size", "14px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["multi", "", 1, "example-headers-align"], [4, "ngFor", "ngForOf"], ["id", "footer", 2, "float", "right"], ["mat-button", "", 1, "button-color-enable", "font_size_button", 2, "margin-right", "1rem", 3, "click"], ["mat-button", "", 1, "button-color-enabled-background", "font_size_button", 3, "click"], [3, "indeterminate", "checked", "change"], [1, "sub-vaults", 3, "checked", "change"]], template: function FilterComponentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "perfect-scrollbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponentComponent_Template_span_click_8_listener() { return ctx.toggleClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-accordion", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FilterComponentComponent_mat_expansion_panel_16_Template, 13, 4, "mat-expansion-panel", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponentComponent_Template_button_click_25_listener() { return ctx.reset(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reset\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponentComponent_Template_button_click_28_listener() { return ctx.Applyfilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Apply Filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 480, "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayFilterData);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"]], styles: [".mat-expansion-panel-header {\n  padding: 0px 8px !important;\n}\n\n  .mat-expansion-panel-header.mat-expanded {\n  border-bottom: 1px solid lightgray !important;\n  border-radius: 0 !important;\n}\n\n  .mat-expansion-panel-body {\n  padding: 16px 24px 16px !important;\n  border-bottom: 1px solid lightgrey !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9maWx0ZXItY29tcG9uZW50L2ZpbHRlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBRUksNkNBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSw2Q0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9maWx0ZXItY29tcG9uZW50L2ZpbHRlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuICAgIHBhZGRpbmc6IDBweCA4cHghaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZHtcbiAgICAvLyBoZWlnaHQ6IDEwcHghaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXkhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMTZweCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleSFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
    return FilterComponentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-component',
                templateUrl: './filter-component.component.html',
                styleUrls: ['./filter-component.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_testconfig_service__WEBPACK_IMPORTED_MODULE_7__["TestConfigService"] }, { type: _app_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"] }, { type: _app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _app_shared_services_global_events_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEventsService"] }, { type: _app_shared_services_testmeasure_service__WEBPACK_IMPORTED_MODULE_6__["TestMeasureService"] }]; }, null); })();


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.isLoading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { isLoading: "isLoading", message: "message" }, decls: 8, vars: 2, consts: [[1, "text-xs-center", 3, "hidden"], [1, "fas", "fa-cog", "fa-spin", "fa-3x"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        } }, styles: [".fa[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */"] });
    return LoaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, { isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "p8Hc":
/*!********************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.mock.ts ***!
  \********************************************************************/
/*! exports provided: MockAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockAuthenticationService", function() { return MockAuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

var MockAuthenticationService = /** @class */ (function () {
    function MockAuthenticationService() {
        this.credentials = {
            username: 'test',
            token: '123'
        };
    }
    MockAuthenticationService.prototype.login = function (context) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
            username: context.username,
            token: '123456'
        });
    };
    MockAuthenticationService.prototype.logout = function () {
        this.credentials = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    MockAuthenticationService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    return MockAuthenticationService;
}());



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-reusable-strategy */ "znf/");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/authentication.service */ "6CRC");
/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/authentication.guard */ "4vU7");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/http.service */ "gHic");
/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/http-cache.service */ "dXti");
/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "+YFA");
/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "J6E/");
/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http/cache.interceptor */ "Lo2u");














var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [
            _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticationGuard"],
            _http_http_cache_service__WEBPACK_IMPORTED_MODULE_9__["HttpCacheService"],
            _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_10__["ApiPrefixInterceptor"],
            _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerInterceptor"],
            _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_12__["CacheInterceptor"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                useClass: _http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
            },
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__["RouteReusableStrategy"]
            }
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]] });
    return CoreModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                providers: [
                    _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                    _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticationGuard"],
                    _http_http_cache_service__WEBPACK_IMPORTED_MODULE_9__["HttpCacheService"],
                    _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_10__["ApiPrefixInterceptor"],
                    _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerInterceptor"],
                    _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_12__["CacheInterceptor"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                        useClass: _http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
                    },
                    {
                        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                        useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__["RouteReusableStrategy"]
                    }
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "unTc":
/*!****************************************************!*\
  !*** ./src/app/shared/services/apicall.service.ts ***!
  \****************************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





var ApicallService = /** @class */ (function () {
    function ApicallService(http) {
        this.http = http;
        this.total = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.mediaUrl = 'assets/images/';
    }
    Object.defineProperty(ApicallService.prototype, "total$", {
        get: function () {
            return this.total.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    ApicallService.prototype.updatedProfile = function () {
        this.total.next(this.printProfilePic());
    };
    ApicallService.prototype.printProfilePic = function () {
        var data = localStorage.getItem('regionPic');
        return data;
    };
    ApicallService.prototype.updatedProfileFmSession = function () {
        this.total.next(this.printProfilePicFmSession());
    };
    ApicallService.prototype.printProfilePicFmSession = function () {
        var data = sessionStorage.getItem('regionPic');
        return data;
    };
    ApicallService.ɵfac = function ApicallService_Factory(t) { return new (t || ApicallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ApicallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApicallService, factory: ApicallService.ɵfac, providedIn: 'root' });
    return ApicallService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApicallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _defaulthome_defaulthome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaulthome/defaulthome.component */ "NLo8");





var routes = [
    { path: '', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(function (m) { return m.HomeModule; }); } },
    { path: 'login', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: _defaulthome_defaulthome_component__WEBPACK_IMPORTED_MODULE_2__["DefaulthomeComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "ey9i");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.service */ "XNvx");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_shared_services_apicall_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/apicall.service */ "unTc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
























function LoginComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoginComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\t\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\t\t\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n\t\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_container_36_Template_p_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r1.menuHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user_name);
} }
function LoginComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Currently you are not mapped to any specific market in the FAST tool. Please email to any one of the following ids to request access.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "monica.devarajulu@effem.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sambhav.rangarajan@effem.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "arvind.gunasekar@effem.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "You will receive a email notification once access has been granted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_64_button_47_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_64_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.singleSignOn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click here to Login\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_64_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.Login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\t\t\t\t\t\tUsername or password incorrect.\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, LoginComponent_div_64_button_47_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.error || ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.EnterUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.EnterPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.enableMicrosoftButton);
} }
var log = new _app_core__WEBPACK_IMPORTED_MODULE_6__["Logger"]('Login');
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, httpClient, route, formBuilder, _snackBar, authenticationService, loginservice, toastr, apiservice) {
        this.router = router;
        this.httpClient = httpClient;
        this.route = route;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.authenticationService = authenticationService;
        this.loginservice = loginservice;
        this.toastr = toastr;
        this.apiservice = apiservice;
        this.version = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version;
        this.isLoading = false;
        this.EnterUsername = true;
        this.EnterPassword = true;
        this.token = undefined;
        this.enableMicrosoftButton = false;
        this.userNotMappedMsgShow = false;
        this.createForm();
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.token = this.route.snapshot.queryParams.token;
        status = this.route.snapshot.queryParams.status;
        if (status === 'logout') {
            this.enableMicrosoftButton = true;
        }
        else if (this.token == null || this.token == undefined) {
            // window.location.href = environment.serverUrl+'accounts/login';
        }
        else {
            var data = { token: 'Bearer ' + this.token };
            this.login(data);
        }
    };
    LoginComponent.prototype.singleSignOn = function () {
        window.location.href = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl + 'accounts/login';
    };
    LoginComponent.prototype.Login = function () {
        if (this.loginForm.value.username == '') {
            // this.openSnackBar("Please Enter Username","Close")
            this.EnterUsername = false;
            // return 0;
        }
        else {
            this.EnterUsername = true;
        }
        if (this.loginForm.value.password == '') {
            // this.openSnackBar("Please Enter Password","Close")
            this.EnterPassword = false;
            // return 0;
        }
        else {
            this.EnterPassword = true;
        }
        var logged = 'Yes';
        this.isLoading = true;
        // this.router.navigate(['/testconfig']);
        this.isLoading = false;
        var data = { username: this.loginForm.value.username, password: this.loginForm.value.password };
        if (this.loginForm.value.username != '' && this.loginForm.value.password != '') {
            this.login(data);
        }
    };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        this.loginservice.login(data).subscribe(function (data) {
            if (data.status == 'ok') {
                _this.userNotMappedMsgShow = false;
            }
            else {
                if (data.data == 'You are not mapped to any specific market in the FAST tool') {
                    _this.userNotMappedMsgShow = true;
                }
            }
            _this.authenticationService
                .login(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this.loginForm.markAsPristine();
                _this.isLoading = false;
            }))
                .subscribe(function (credentials) {
                if (credentials.status == 'ok') {
                    // log.debug(`${credentials.username} successfully logged in`);
                    _this.islogin = true;
                    localStorage.setItem('username', _this.loginForm.value.username == '' ? credentials.data.username : _this.loginForm.value.username);
                    localStorage.setItem('logged', 'Yes');
                    localStorage.setItem('region', credentials.data.region_code);
                    sessionStorage.setItem('region', credentials.data.region_code);
                    localStorage.setItem('dropdown_value', JSON.stringify(credentials.data.region_data));
                    if (credentials.data.region_code == 'DEMO') {
                        localStorage.setItem('regionPic', 'assets/images/flag.png');
                        sessionStorage.setItem('regionPic', 'assets/images/flag.png');
                    }
                    else if (credentials.data.region_code == 'DEMO') {
                        localStorage.setItem('regionPic', 'assets/images/flag1.png');
                        sessionStorage.setItem('regionPic', 'assets/images/flag1.png');
                    }
                    _this.apiservice.updatedProfile();
                    _this.route.queryParams.subscribe(function (params) {
                        return _this.router.navigate([params.redirect || './dashboard'], {
                            replaceUrl: true
                        });
                    });
                }
                else {
                    //log.debug(`Login error: ${credentials.status}`);
                    _this.error = data.data;
                    _this.isLoading = false;
                }
            }, function (error) {
                //log.debug(`Login error: ${error}`);
                _this.error = error;
            });
        }, function (error) {
            //log.debug(`Login error: ${error}`);
            _this.error = 'Database Connection Issue';
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 4000,
            verticalPosition: 'bottom'
        });
    };
    LoginComponent.prototype.dismiss = function () {
        this._snackBar.dismiss();
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remember: true
        });
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_apicall_service__WEBPACK_IMPORTED_MODULE_10__["ApicallService"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 68, vars: 4, consts: [[1, "header-margin"], [1, "bg-black", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "row", "text-center", 2, "height", "60px", "margin", "0"], [1, "col-md-3", 2, "background-color", "#F68F1D", "border-right", "5px solid #fff", "height", "60px"], ["href", "login"], ["src", "assets/images/home-run.png", "alt", "mcd", 2, "height", "30px", "margin", "0px 19px 15px -10%", "cursor", "pointer"], ["href", "login", "translate", "", 1, "navbar-brand", 2, "margin", "12px 0 0 0"], [2, "font-size", "25px", "font-weight", "920"], [1, "col-md-7"], [1, "head-text"], [1, "navbar-brand"], [2, "font-size", "25px"], [1, "col-md-2"], [4, "ngIf"], [1, "row"], [1, "col-md-6"], ["src", "assets/images/login-image-ta.png", 1, "col-md-12", 2, "height", "100%", "margin", "5px 0 0 -15px"], [1, "centered"], [2, "margin-top", "20px", "margin-left", "15px"], [2, "color", "#fff", "margin", "0%"], ["class", "centeredlogin req_msg", 4, "ngIf"], ["class", "centeredlogin", 4, "ngIf"], ["id", "navbar-menu", 1, "collapse", "navbar-collapse", "float-xs-none", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], [1, "dropdown"], ["id", "user-dropdown", "ngbDropdownToggle", "", 1, "nav-link", 2, "margin", "5px 60px 0px 0px"], ["src", "assets/images/flag.png", "alt", "mcd", 2, "height", "50px", "margin", "5px 0px 0px 0px"], [2, "margin", "0px 0px 0px 10px", "font-size", "18px", "color", "#fff"], [1, "dropdown-content", 2, "cursor", "pointer"], [3, "click"], [1, "centeredlogin", "req_msg"], [1, "reg_msg_bg"], [1, "req_msg_col"], [1, "email"], [1, "req_msg_col", "pad-top"], [1, "centeredlogin"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["translate", "", 1, "alert", "alert-danger", 3, "hidden"], [1, "form-group", "imagetextbox"], [1, "d-block"], ["src", "assets/images/user-name.png", 1, ""], ["type", "text", "formControlName", "username", "autocomplete", "username", "required", "", 1, "form-control", "bordernone"], [1, "text-danger", 3, "hidden"], ["src", "assets/images/password.png", 1, ""], ["type", "password", "formControlName", "password", "autocomplete", "current-password", "required", "", 1, "form-control", "bordernone"], ["type", "submit", "mat-raised-button", "", 1, "btn", "w-100", "loginbutton", "bordernone"], ["type", "button", "mat-raised-button", "", "class", "btn w-100 loginbutton bordernone", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 1, "btn", "w-100", "loginbutton", "bordernone", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\t\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\t\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "T&L Tool");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "T&L Scenario Tool");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_ng_container_34_Template, 3, 0, "ng-container", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n\t\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LoginComponent_ng_container_36_Template, 28, 2, "ng-container", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n\t\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Tool to help design tests, select suitable test & control\n\t\t\t\tstores & help analyze the impact of the conducted tests.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n\t\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, LoginComponent_div_62_Template, 22, 0, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n\n\t\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, LoginComponent_div_64_Template, 50, 5, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n\t");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.islogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.islogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNotMappedMsgShow == true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNotMappedMsgShow == false);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["@charset \"UTF-8\";\n\n.login-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.pad-top[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.email[_ngcontent-%COMP%] {\n  color: #0000A0;\n  font-weight: 700;\n  text-decoration: underline;\n  font-size: 18px;\n}\n.reg_msg_bg[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 4px solid #0000A0;\n  padding: 30px;\n  border-radius: 30px;\n  background-color: #ffeec7;\n}\n.req_msg[_ngcontent-%COMP%] {\n  position: initial !important;\n  width: 100% !important;\n  margin-top: 26%;\n}\n.req_msg_col[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: black;\n  font-weight: 400;\n}\n.login-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\n  border-left: 4px solid #dc3545;\n}\n.imagetextbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 8px;\n  padding: 35px 8px;\n  color: #aaa;\n  transition: 0.3s;\n}\n.imagetextbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n.imagetextbox[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.imagetextbox[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 28%;\n  left: 19%;\n  height: auto;\n  width: 58%;\n  background-color: #585151;\n  opacity: 0.8;\n  padding: 0 0 25px 0px;\n}\n.centeredlogin[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 28%;\n  left: 19%;\n  height: 45%;\n  width: 58%;\n}\n.loginbutton[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.85) !important;\n  color: #fff;\n}\n.bordernone[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: #fff;\n  font-weight: bold;\n}\n@media (max-width: 575.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-top: 3px;\n}\n.bg-black[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.85) !important;\n}\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: block;\n}\n.nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  font-size: 0;\n}\n#left[_ngcontent-%COMP%], #middle[_ngcontent-%COMP%], #right[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  vertical-align: top;\n  font-size: 12px;\n}\n#left[_ngcontent-%COMP%] {\n  width: 40%;\n}\n#middle[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 55px;\n}\n.head-text[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: bottom;\n  line-height: 55px;\n}\n#right[_ngcontent-%COMP%] {\n  width: 30%;\n}\n#navbar-menu[_ngcontent-%COMP%] {\n  height: 55px;\n}\n#user-circle[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 70%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  z-index: 1;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.singleSignbutton[_ngcontent-%COMP%] {\n  background-color: #228b22 !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvdGhlbWUtdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFBQTtBREdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBQUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUdKO0FBQUE7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UsOEJBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdGO0FBREE7RUFDRSxnREFBQTtFQUNBLFdBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7QUFLRjtBQUZBO0VBQ0UsZ0JBQUE7QUFLRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUtGO0FFeENJO0VGMENGO0lBQ0UsV0FBQTtFQUVGO0FBQ0Y7QUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBRUY7QUFBQTtFQUNFLGdEQUFBO0FBR0Y7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQUZBO0VBQ0UsZUFBQTtBQUtGO0FBSEE7RUFFRSxVQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSEE7OztFQUdFLHFCQUFBO0dBTUEsZUFMQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFNRjtBQUhBO0VBQ0UsVUFBQTtBQU1GO0FBSkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQU9GO0FBSkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFPRjtBQUpBO0VBQ0UsVUFBQTtBQU9GO0FBTEE7RUFDRSxZQUFBO0FBUUY7QUFOQTtFQUNFLGVBQUE7QUFTRjtBQVBBO0VBQ0UsbUJBQUE7QUFVRjtBQVBBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQVVGO0FBUEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVVGO0FBUEE7RUFDRSxjQUFBO0FBVUY7QUFQQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQVVGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzXCI7XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhZC10b3B7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmVtYWlse1xuICBjb2xvcjogIzAwMDBBMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJlZ19tc2dfYmcge1xuICAgIHdpZHRoOiA5NyU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwMDBBMDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVjNztcbn1cblxuLnJlcV9tc2d7XG4gIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI2JTtcbn1cblxuLnJlcV9tc2dfY29se1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ2luLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpO1xufVxuXG4uaW1hZ2V0ZXh0Ym94IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDM1cHggOHB4O1xuICBjb2xvcjogI2FhYTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmltYWdldGV4dGJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdldGV4dGJveCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmltYWdldGV4dGJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDE5JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1MTUxO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDAgMCAyNXB4IDBweDtcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uY2VudGVyZWRsb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDE5JTtcbiAgaGVpZ2h0OiA0NSU7XG4gIHdpZHRoOiA1OCU7XG59XG4ubG9naW5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJvcmRlcm5vbmUge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gd2lkdGg6IDFlbTtcbiAgLy8gbWFyZ2luLWxlZnQ6IC0xZW07XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KSAhaW1wb3J0YW50O1xufVxuLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtbGluay5kcm9wZG93bi10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4qIHtcbiAgLy9tYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4jY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4jbGVmdCxcbiNtaWRkbGUsXG4jcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI2xlZnQge1xuICB3aWR0aDogNDAlO1xufVxuI21pZGRsZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLmhlYWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbiNyaWdodCB7XG4gIHdpZHRoOiAzMCU7XG59XG4jbmF2YmFyLW1lbnUge1xuICBoZWlnaHQ6IDU1cHg7XG59XG4jdXNlci1jaXJjbGUge1xuICBmb250LXNpemU6IDUxcHg7XG59XG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDcwJTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaW5nbGVTaWduYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOGIyMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbiIsIi8qXG4gKiBBcHBsaWNhdGlvbiBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbi8vIFNldCBGb250IEF3ZXNvbWUgZm9udCBwYXRoXG4kZmEtZm9udC1wYXRoOiBcIn5AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS13ZWJmb250cy93ZWJmb250c1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vXG4vLyBPdmVycmlkZSBCb290c3RyYXAgdmFyaWFibGVzIGhlcmUgdG8gc3VpdGUgeW91ciB0aGVtZS5cbi8vIENvcHkgdmFyaWFibGVzIHlvdSB3YW50IHRvIGN1c3RvbWl6ZSBmcm9tIG5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3NcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAjZmZmO1xuJGdyYXktMTAwOiAjZjhmOWZhO1xuJGdyYXktMjAwOiAjZTllY2VmO1xuJGdyYXktMzAwOiAjZGVlMmU2O1xuJGdyYXktNDAwOiAjY2VkNGRhO1xuJGdyYXktNTAwOiAjYWRiNWJkO1xuJGdyYXktNjAwOiAjODY4ZTk2O1xuJGdyYXktNzAwOiAjNDk1MDU3O1xuJGdyYXktODAwOiAjMzQzYTQwO1xuJGdyYXktOTAwOiAjMjEyNTI5O1xuJGJsYWNrOiAjMDAwO1xuXG4kYmx1ZTogIzAwNzNkZDtcbiRpbmRpZ286ICM2NjEwZjI7XG4kcHVycGxlOiAjNmY0MmMxO1xuJHBpbms6ICNlODNlOGM7XG4kcmVkOiAjZGMzNTQ1O1xuJG9yYW5nZTogI2ZkN2UxNDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kZ3JlZW46ICMyOGE3NDU7XG4kdGVhbDogIzIwYzk5NztcbiRjeWFuOiAjMTdhMmI4O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRibHVlLFxuICBzZWNvbmRhcnk6ICRncmF5LTYwMCxcbiAgc3VjY2VzczogJGdyZWVuLFxuICBpbmZvOiAkY3lhbixcbiAgd2FybmluZzogJHllbGxvdyxcbiAgZGFuZ2VyOiAkcmVkLFxuICBsaWdodDogJGdyYXktMTAwLFxuICBkYXJrOiAkZ3JheS04MDBcbik7XG5cbi8vIFVzZSBCb290c3RyYXAgZGVmYXVsdHMgZm9yIG90aGVyIHZhcmlhYmxlcywgaW1wb3J0ZWQgaGVyZSBzbyB3ZSBjYW4gYWNjZXNzIGFsbCBhcHAgdmFyaWFibGVzIGluIG9uZSBwbGFjZSB3aGVuIHVzZWRcbi8vIGluIGNvbXBvbmVudHMuXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlc1wiO1xuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _app_core__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: _app_shared_services_apicall_service__WEBPACK_IMPORTED_MODULE_10__["ApicallService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    window.console.log = function () { };
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "znf/":
/*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
var RouteReusableStrategy = /** @class */ (function (_super) {
    __extends(RouteReusableStrategy, _super);
    function RouteReusableStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteReusableStrategy.prototype.shouldDetach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.store = function (route, detachedTree) { };
    RouteReusableStrategy.prototype.shouldAttach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.retrieve = function (route) {
        return null;
    };
    RouteReusableStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig || future.data.reuse;
    };
    RouteReusableStrategy.ɵfac = function RouteReusableStrategy_Factory(t) { return ɵRouteReusableStrategy_BaseFactory(t || RouteReusableStrategy); };
    RouteReusableStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouteReusableStrategy, factory: RouteReusableStrategy.ɵfac });
    return RouteReusableStrategy;
}(_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"]));

var ɵRouteReusableStrategy_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RouteReusableStrategy);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouteReusableStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
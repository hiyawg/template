(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/doctor/doctor.component */ "./src/app/pages/doctor/doctor.component.ts");
/* harmony import */ var _pages_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search-patient/search-patient.component */ "./src/app/pages/search-patient/search-patient.component.ts");
/* harmony import */ var _pages_patient_regestration_patient_regestration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/patient-regestration/patient-regestration.component */ "./src/app/pages/patient-regestration/patient-regestration.component.ts");
/* harmony import */ var _pages_patient_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/patient/patient.component */ "./src/app/pages/patient/patient.component.ts");
/* harmony import */ var _pages_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/encounter/encounter.component */ "./src/app/pages/encounter/encounter.component.ts");









var routes = [
    { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'dashboard/:id', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'searchPatint/dashboard/:id', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'doctor', component: _pages_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_4__["DoctorComponent"] },
    { path: 'patient/:id', component: _pages_patient_patient_component__WEBPACK_IMPORTED_MODULE_7__["PatientComponent"] },
    { path: 'encounter/:id', component: _pages_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_8__["EncounterComponent"] },
    { path: 'searchPatint', component: _pages_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_5__["SearchPatientComponent"] },
    { path: 'regesterPatient', component: _pages_patient_regestration_patient_regestration_component__WEBPACK_IMPORTED_MODULE_6__["PatientRegestrationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-top></app-top>\n<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"row\">\n      \n    <app-sidebar></app-sidebar>\n    <!-- start: Content -->\n      <router-outlet></router-outlet>\n    <!-- end: Content -->\n      \n    </div><!--/row-->\t\t\n  \n</div><!--/container-->\n\n\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n     <div class=\"modal-header modal-header-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Here settings can be configured...</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- models-->\n\n<!-- end models-->\n<div class=\"clearfix\"></div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header-success {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #5cb85c;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-warning {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #f0ad4e;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-danger {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #d9534f;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-info {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #5bc0de;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-primary {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #36a9e1;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal.modal-wide .modal-dialog {\n  width: 90%; }\n\n.modal-wide .modal-body {\n  overflow-y: auto; }\n\n/* irrelevant styling */\n\nbody {\n  text-align: center; }\n\nbody p {\n  max-width: 400px;\n  margin: 20px auto; }\n\n#tallModal .modal-body p {\n  margin-bottom: 900px; }\n\n.modal {\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGdpbmZvc3lzL2dpdC9tZWRpY2FsU3lzdGVtL01lZGljYWxTeXN0ZW0tZnJvbnRlbmQvc3JjL21haW4vd2ViL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVTtFQUNWLGtCQUFnQjtFQUNoQiw4QkFBNEI7RUFDNUIsMEJBQXlCO0VBQ3pCLG9DQUFtQztFQUNuQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUMvQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQ2hDOztBQUNEO0VBQ0MsWUFBVTtFQUNQLGtCQUFnQjtFQUNoQiw4QkFBNEI7RUFDNUIsMEJBQXlCO0VBQ3pCLG9DQUFtQztFQUNuQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUMvQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQ2hDOztBQUNEO0VBQ0MsWUFBVTtFQUNQLGtCQUFnQjtFQUNoQiw4QkFBNEI7RUFDNUIsMEJBQXlCO0VBQ3pCLG9DQUFtQztFQUNuQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUMvQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQ2hDOztBQUNEO0VBQ0ksWUFBVTtFQUNWLGtCQUFnQjtFQUNoQiw4QkFBNEI7RUFDNUIsMEJBQXlCO0VBQ3pCLG9DQUFtQztFQUNuQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUMvQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQ2hDOztBQUNEO0VBQ0MsWUFBVTtFQUNQLGtCQUFnQjtFQUNoQiw4QkFBNEI7RUFDNUIsMEJBQXlCO0VBQ3pCLG9DQUFtQztFQUNuQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUMvQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQ2hDOztBQUVEO0VBQ0ksV0FBVSxFQUNYOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVELHdCQUF3Qjs7QUFDeEI7RUFBTyxtQkFBa0IsRUFBSTs7QUFDN0I7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQTJCLHFCQUFxQixFQUFFOztBQUVsRDtFQUVFLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXItc3VjY2VzcyB7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjlweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWhlYWRlci13YXJuaW5nIHtcblx0Y29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjlweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWhlYWRlci1kYW5nZXIge1xuXHRjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6OXB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogNXB4O1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubW9kYWwtaGVhZGVyLWluZm8ge1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo5cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1cHg7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1oZWFkZXItcHJpbWFyeSB7XG5cdGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo5cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNmE5ZTE7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1cHg7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLm1vZGFsLm1vZGFsLXdpZGUgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAubW9kYWwtd2lkZSAubW9kYWwtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLyogaXJyZWxldmFudCBzdHlsaW5nICovXG4gIGJvZHkgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgYm9keSBwIHsgXG4gICAgbWF4LXdpZHRoOiA0MDBweDsgXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87IFxuICB9XG4gICN0YWxsTW9kYWwgLm1vZGFsLWJvZHkgcCB7IG1hcmdpbi1ib3R0b206IDkwMHB4IH1cblxuICAubW9kYWwge1xuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MedicalSystem';
    }
    AppComponent.prototype.onSubmit = function () {
        console.log('form clicked');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sidebar/sidebar.component */ "./src/app/pages/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_top_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/top/top.component */ "./src/app/pages/top/top.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_frontdesk_frontdesk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/frontdesk/frontdesk.component */ "./src/app/pages/frontdesk/frontdesk.component.ts");
/* harmony import */ var _pages_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/doctor/doctor.component */ "./src/app/pages/doctor/doctor.component.ts");
/* harmony import */ var _pages_patient_wfn_patient_wfn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/patient-wfn/patient-wfn.component */ "./src/app/pages/patient-wfn/patient-wfn.component.ts");
/* harmony import */ var _pages_patient_checked_in_patient_checked_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/patient-checked-in/patient-checked-in.component */ "./src/app/pages/patient-checked-in/patient-checked-in.component.ts");
/* harmony import */ var _pages_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/search-patient/search-patient.component */ "./src/app/pages/search-patient/search-patient.component.ts");
/* harmony import */ var _pages_patient_regestration_patient_regestration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/patient-regestration/patient-regestration.component */ "./src/app/pages/patient-regestration/patient-regestration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/patient/patient.component */ "./src/app/pages/patient/patient.component.ts");
/* harmony import */ var _pages_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/encounter/encounter.component */ "./src/app/pages/encounter/encounter.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/employee/employee.component */ "./src/app/pages/employee/employee.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _pages_top_top_component__WEBPACK_IMPORTED_MODULE_6__["TopComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _pages_frontdesk_frontdesk_component__WEBPACK_IMPORTED_MODULE_9__["FrontdeskComponent"],
                _pages_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_10__["DoctorComponent"],
                _pages_patient_wfn_patient_wfn_component__WEBPACK_IMPORTED_MODULE_11__["PatientWFNComponent"],
                _pages_patient_checked_in_patient_checked_in_component__WEBPACK_IMPORTED_MODULE_12__["PatientCheckedInComponent"],
                _pages_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_13__["SearchPatientComponent"],
                _pages_patient_regestration_patient_regestration_component__WEBPACK_IMPORTED_MODULE_14__["PatientRegestrationComponent"],
                _pages_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__["PatientComponent"],
                _pages_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_19__["EncounterComponent"],
                _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_20__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"col-lg-10 col-sm-11\" style=\"height:90vh;\">\n    \n          \n  <app-patient-wfn></app-patient-wfn>\n\n  <app-patient-checked-in></app-patient-checked-in>\t\t\t\n  \n \n      \n  </div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.patientId = this.route.snapshot.paramMap.get('id');
        if (this.patientId != null) {
            this.checkInPatient(this.patientId);
        }
    };
    DashboardComponent.prototype.checkInPatient = function (id) {
        var _this = this;
        this.http.get('/patients/checkIn/' + id)
            .subscribe(function (data) {
            console.log('Check in success: ', data);
            _this.router.navigate(['']);
        }, function (error) {
            console.log('Error', error);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/doctor/doctor.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/doctor/doctor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"col-lg-10 col-sm-11\">\n    \n          \n  <p>Hello DOctor.....</p>\t\t\n  \n \n      \n  </div>"

/***/ }),

/***/ "./src/app/pages/doctor/doctor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/doctor/doctor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/doctor/doctor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/doctor/doctor.component.ts ***!
  \**************************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DoctorComponent = /** @class */ (function () {
    function DoctorComponent() {
    }
    DoctorComponent.prototype.ngOnInit = function () {
    };
    DoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctor',
            template: __webpack_require__(/*! ./doctor.component.html */ "./src/app/pages/doctor/doctor.component.html"),
            styles: [__webpack_require__(/*! ./doctor.component.scss */ "./src/app/pages/doctor/doctor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "./src/app/pages/employee/employee.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/employee/employee.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employee works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/employee/employee.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/employee/employee.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/employee/employee.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/employee/employee.component.ts ***!
  \******************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/pages/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/pages/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/pages/encounter/encounter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/encounter/encounter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"col-lg-10 col-sm-11\"> \n    <div class=\"row\">\n        <div class=\"col-sm-6\" *ngIf=\"encounter\">\n            <div class=\"box\">\n              <div class=\"box-header\">\n                <h2><i class=\"fas fa fa-user\"></i>&nbsp;Patient Information</h2>\n              </div>\n              <div class=\"box-content\">\n                <form role=\"form\" (ngSubmit)=\"updateEncounterBasic(patientEncounterForm.value)\" #patientEncounterForm=\"ngForm\">\n                <div id=\"generalInfo\" style=\"height:450px\" >\n                    <table class=\"table table-condensed\">\n                        <tbody>\n                            <tr>\n                                <th>Name:</th>\n                                <td> \n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input  name=\"fullname\" [ngModel]=\"fullname\" class=\"form-control\"  type=\"text\"  disabled=\"\">\n                                  </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Date of Birth:</th>\n                                <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n                                        <input  name=\"dob\" [ngModel]=\"dob\" class=\"form-control\"  type=\"text\" disabled=\"\">\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Room Number:</th>\n                                <td>\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fas fa-home\"></i></span>\n                                    <input  name=\"roomNbr\" [ngModel]=\"roomNbr\" class=\"form-control\"  type=\"text\" [attr.disabled]=\"roomNbr ? '' : null\">\n                                  </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Pulse:</th>\n                                <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"fas fa-heartbeat\"></i></span>\n                                        <input  name=\"pulse\" [ngModel]=\"pulse\" class=\"form-control\"  type=\"text\" [attr.disabled]=\"pulse ? '' : null\">\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Temprature:</th>\n                                <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"fas fa-thermometer-half\"></i></span>\n                                        <input  name=\"temp\" [ngModel]=\"temp\" class=\"form-control\"  type=\"text\" [attr.disabled]=\"temp ? '' : null\" ngModel>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>SAT:</th>\n                                <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"fab fa-digital-ocean\"></i></span>\n                                        <input  name=\"sat\" [ngModel]=\"sat\" class=\"form-control\"  type=\"text\" [attr.disabled]=\"sat ? '' : null\" ngModel>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>RESP RATE:</th>\n                                <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"fab fa-digital-ocean\"></i></span>\n                                        <input  name=\"respRate\" [ngModel]=\"respRate\" class=\"form-control\"  type=\"text\" [attr.disabled]=\"respRate ? '' : null\" ngModel>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>WEIGHT:</th>\n                                <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"fas fa-weight\"></i></span>\n                                        <input  name=\"weight\" [ngModel]=\"weight\" class=\"form-control\"  type=\"text\" [attr.disabled]=\"weight ? '' : null\" ngModel>\n                                    </div>\n                                </td>\n                            </tr>\n  \n                        </tbody>\n                    </table>\n                    <br>\n                    <input type=\"hidden\" id=\"encounterId\" name=\"encounterId\" [ngModel]=\"encounterId\">\n                    <div class=\"form-group col-md-12 text-center\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n                    </div>\n                    <br>\n                    <br>\n                    <br>\n              </div>\n              </form>\n              </div>\n            </div>\n          </div><!--/col-->\n\n          <div class=\"col-sm-6\" *ngIf=\"encounter\">\n            <div class=\"box\">\n              <div class=\"box-header\">\n                <h2><i class=\"fas fa fa-user\"></i>&nbsp;Patient Diagnosis</h2>\n              </div>\n              <div class=\"box-content\">\n                <div id=\"generalInfo\" style=\"height:450px\" >\n                    <form role=\"form\" (ngSubmit)=\"addNewDiagnosis(DiagnosisForm.value)\" #DiagnosisForm=\"ngForm\">\n                        Diagnosis history comes here...\n                    </form>\n              </div>\n              </div>\n            </div>\n          </div><!--/col-->\n    </div>\n\n    <div class=\"row\" *ngIf=\"encounter\">\t\t\n        <div class=\"col-lg-12\">\n            <div class=\"box\">\n                <div class=\"box-header\" data-original-title>\n                    <h2><i class=\"medical-icon-i-medical-records\"></i><span class=\"break\"></span>Notes</h2>\n                </div>\n                <form role=\"form\" (ngSubmit)=\"addEncounterNote(encounterNoteForm.value)\" #encounterNoteForm=\"ngForm\">\n                  <div class=\"box-content\">\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"textarea2\">CHIEF COMPLAINT</label>\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment\"></i></span>\n                            <div class=\"controls\">\n                                <textarea name=\"chiefComplaint\" [ngModel]=\"chiefComplaint\" rows=\"6\" style=\"width:100%\"></textarea>\n                            </div>\n                          </div>\n                      </div> \n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"textarea2\">TREATMENT</label>\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment\"></i></span>\n                            <div class=\"controls\">\n                                <textarea name=\"treatment\" [ngModel]=\"treatment\" rows=\"6\" style=\"width:100%\"></textarea>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"textarea2\">REMARK</label>\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment\"></i></span>\n                            <div class=\"controls\">\n                                <textarea name=\"remark\" [ngModel]=\"remark\" rows=\"6\" style=\"width:100%\"></textarea>\n                            </div>\n                        </div>\n                      </div> \n                      <input type=\"hidden\" id=\"encounterId\" name=\"encounterId\" [ngModel]=\"encounterId\">\n                      <div class=\"form-group col-md-12 text-center\">\n                          <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n                      </div>\n                      <br>\n                      <br>\n                      <br>\n                  </div>\n                </form>\n            </div>\n        </div><!--/col-->\n    \n    </div><!--/row-->\n</div>"

/***/ }),

/***/ "./src/app/pages/encounter/encounter.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/encounter/encounter.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VuY291bnRlci9lbmNvdW50ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/encounter/encounter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/encounter/encounter.component.ts ***!
  \********************************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return EncounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var EncounterComponent = /** @class */ (function () {
    function EncounterComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    EncounterComponent.prototype.ngOnInit = function () {
        this.encounterId = this.route.snapshot.paramMap.get('id');
        console.log('encounter id: ', this.encounterId);
        this.getencounterById(this.encounterId);
    };
    /**
     * name
     */
    EncounterComponent.prototype.getencounterById = function (id) {
        var _this = this;
        // patient
        this.http.get('/encounters/' + id)
            .subscribe(function (data) {
            _this.encounter = data;
            _this.fullname = _this.encounter.patient.fname + ' ' + _this.encounter.patient.lname;
            _this.dob = _this.encounter.patient.dob;
            _this.pulse = _this.encounter.pulse;
            _this.temp = _this.encounter.temp;
            _this.sat = _this.encounter.sat;
            _this.respRate = _this.encounter.respRate;
            _this.weight = _this.encounter.weight;
            _this.roomNbr = _this.encounter.roomNbr;
            _this.remark = _this.encounter.remark;
            _this.chiefComplaint = _this.encounter.chiefComplaint;
            _this.treatment = _this.encounter.treatment;
        }, function (error) {
            console.log('error: getencounterById', error);
        });
    };
    EncounterComponent.prototype.updateEncounterBasic = function (form) {
        var _this = this;
        this.http.post('/encounters', form)
            .subscribe(function (data) {
            _this.encounter = data;
            _this.encounterId = _this.encounter.encounterId;
            _this.fullname = _this.encounter.patient.fname + ' ' + _this.encounter.patient.lname;
            _this.dob = _this.encounter.patient.dob;
            _this.pulse = _this.encounter.pulse;
            _this.temp = _this.encounter.temp;
            _this.sat = _this.encounter.sat;
            _this.respRate = _this.encounter.respRate;
            _this.weight = _this.encounter.weight;
            _this.roomNbr = _this.encounter.roomNbr;
            _this.remark = _this.encounter.remark;
            _this.chiefComplaint = _this.encounter.chiefComplaint;
            _this.treatment = _this.encounter.treatment;
        }, function (error) {
            console.log('error: ', error);
        });
    };
    EncounterComponent.prototype.addEncounterNote = function (form) {
        var _this = this;
        this.http.post('/encounters/notes', form)
            .subscribe(function (data) {
            _this.encounter = data;
            _this.encounterId = _this.encounter.encounterId;
            _this.fullname = _this.encounter.patient.fname + ' ' + _this.encounter.patient.lname;
            _this.dob = _this.encounter.patient.dob;
            _this.pulse = _this.encounter.pulse;
            _this.temp = _this.encounter.temp;
            _this.sat = _this.encounter.sat;
            _this.respRate = _this.encounter.respRate;
            _this.weight = _this.encounter.weight;
            _this.roomNbr = _this.encounter.roomNbr;
            _this.remark = _this.encounter.remark;
            _this.chiefComplaint = _this.encounter.chiefComplaint;
            _this.treatment = _this.encounter.treatment;
        }, function (error) {
            console.log('error: ', error);
        });
    };
    EncounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encounter',
            template: __webpack_require__(/*! ./encounter.component.html */ "./src/app/pages/encounter/encounter.component.html"),
            styles: [__webpack_require__(/*! ./encounter.component.scss */ "./src/app/pages/encounter/encounter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EncounterComponent);
    return EncounterComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\t\t\n  <div class=\"row\">\n    \n    <div class=\"col-sm-5\">\n      &copy; 2019 ABC Hospital. <a href=\"http://adginfosys.com\">Medical Record System</a>\n    </div><!--/.col-->\n    \n    <div class=\"col-sm-7 text-right\">\n      Developed by: <a href=\"http://adginfosys.com\" alt=\"Bootstrap Admin Templates\">Medical Record System</a> | ADG Information Systems \n    </div><!--/.col-->\t\n    \n  </div><!--/.row-->\t\n\n</footer>"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/frontdesk/frontdesk.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/frontdesk/frontdesk.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  frontdesk works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/frontdesk/frontdesk.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/frontdesk/frontdesk.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zyb250ZGVzay9mcm9udGRlc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/frontdesk/frontdesk.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/frontdesk/frontdesk.component.ts ***!
  \********************************************************/
/*! exports provided: FrontdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontdeskComponent", function() { return FrontdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrontdeskComponent = /** @class */ (function () {
    function FrontdeskComponent() {
    }
    FrontdeskComponent.prototype.ngOnInit = function () {
    };
    FrontdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frontdesk',
            template: __webpack_require__(/*! ./frontdesk.component.html */ "./src/app/pages/frontdesk/frontdesk.component.html"),
            styles: [__webpack_require__(/*! ./frontdesk.component.scss */ "./src/app/pages/frontdesk/frontdesk.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrontdeskComponent);
    return FrontdeskComponent;
}());



/***/ }),

/***/ "./src/app/pages/patient-checked-in/patient-checked-in.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/patient-checked-in/patient-checked-in.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"encounters\">\t\t\n  <div class=\"col-lg-12\">\n    <div class=\"box\">\n      <div class=\"box-header\" data-original-title>\n        <h2><i class=\"fa fa-user\"></i><span class=\"break\"></span>Patients (Checked-In)</h2>\n      </div>\n      <div class=\"box-content\">\n        <table class=\"table table-striped table-bordered bootstrap-datatable datatable\" datatable>\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Date & Time Checked In</th>\n              <th>Encounter Infoormation</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>   \n          <tbody>\n        <tr *ngFor=\"let encounter of encounters\">\n            <td>{{encounter.patient.fname}} {{encounter.patient.lname}}</td>\n            <td class=\"center\">{{encounter.checkInDateTime | date:'medium':'America/New_York'}} </td>\n            <td class=\"center\">\n              <i class=\"fas fa-thermometer-half green\" *ngIf=\"encounter.temp\" title=\"temprature\"></i> {{encounter.temp}} &nbsp;&nbsp;\n              <i class=\"fas fa-heartbeat red\" *ngIf=\"encounter.pulse\" title=\"pulse\"></i> {{encounter.pulse}} &nbsp;&nbsp;\n              <i class=\"fas fa-weight blue\" *ngIf=\"encounter.weight\" title=\"weight\"></i> {{encounter.weight}}\n            </td>\n            <td class=\"center\">\n              <span class=\"label label-default\" *ngIf=\"encounter.status == 'OPEN'\">{{encounter.status}}</span>\n              <span class=\"label label-success\" *ngIf=\"encounter.status == 'IN PROGRESS'\">{{encounter.status}}</span>\n            </td>\n            <td class=\"center\">\n                <a class=\"btn btn-success\" [routerLink]=\"['patient/', encounter.patient.patientId]\"  title=\"view\" skipLocationChange> <i class=\"fa fa-search-plus\"></i></a>\n                &nbsp;\n                <a class=\"btn btn-info\" [routerLink]=\"['encounter/', encounter.encounterId]\" title=\"Edit\" skipLocationChange> <i class=\"fa fa-edit\"></i></a> \n                &nbsp;\n                <a class=\"btn btn-danger\" (click)=\"discharge(encounter.encounterId)\"  title=\"Discharge\"> <i class=\"fas fa-walking\"></i></a> \n\n            </td>\n          </tr>\n          </tbody>\n        </table>     \n      </div>\n    </div>\n  </div><!--/col-->\n\n</div>"

/***/ }),

/***/ "./src/app/pages/patient-checked-in/patient-checked-in.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/patient-checked-in/patient-checked-in.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQtY2hlY2tlZC1pbi9wYXRpZW50LWNoZWNrZWQtaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/patient-checked-in/patient-checked-in.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/patient-checked-in/patient-checked-in.component.ts ***!
  \**************************************************************************/
/*! exports provided: PatientCheckedInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCheckedInComponent", function() { return PatientCheckedInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PatientCheckedInComponent = /** @class */ (function () {
    function PatientCheckedInComponent(http) {
        this.http = http;
    }
    PatientCheckedInComponent.prototype.ngOnInit = function () {
        this.getCheckedInPatients();
    };
    PatientCheckedInComponent.prototype.getCheckedInPatients = function () {
        var _this = this;
        this.http.get('/encounters').subscribe(function (data) {
            _this.encounters = data;
            console.log('getCheckedInPatients: ', data);
        }, function (error) {
            console.log('error: ', error);
        });
    };
    PatientCheckedInComponent.prototype.discharge = function (patientId) {
        var _this = this;
        this.http.get('/encounters/discharge/' + patientId).subscribe(function (data) {
            _this.encounters = data;
        }, function (error) {
            console.log('error: ', error);
        });
    };
    PatientCheckedInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-checked-in',
            template: __webpack_require__(/*! ./patient-checked-in.component.html */ "./src/app/pages/patient-checked-in/patient-checked-in.component.html"),
            styles: [__webpack_require__(/*! ./patient-checked-in.component.scss */ "./src/app/pages/patient-checked-in/patient-checked-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientCheckedInComponent);
    return PatientCheckedInComponent;
}());



/***/ }),

/***/ "./src/app/pages/patient-regestration/patient-regestration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/patient-regestration/patient-regestration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"col-lg-10 col-sm-11\">  \n    <div class=\"row\">\t\t\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"box\">\n\t\t\t\t\t\t<div class=\"box-header\" data-original-title>\n\t\t\t\t\t\t\t<h2><i class=\"fa fa-user\"></i><span class=\"break\"></span>Patient Regestration</h2>\n            </div>\n            <!--form-->\n            <form class=\"well form-horizontal\" role=\"form\" (ngSubmit)=\"regesterPatient(patientRegestrationForm.value)\" #patientRegestrationForm=\"ngForm\">\n              <div class=\"box-content\">\n                <!-- begin-->\n                <div class=\"row\">\n                    <div class=\"col-lg-8 alert alert-danger col-centered\" *ngIf=\"error\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n                        <strong>Error!</strong> {{error}}\n                      </div>\n                      <div class=\"col-lg-8 alert alert-success col-centered\" *ngIf=\"success\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n                        <strong>SUCCESS!</strong> {{success}}\n                      </div>\n                      <br>\n                    <div class=\"col-lg-6\">\n                      <div class=\"box\">\n                        <div class=\"box-header\">\n                          <h2><i class=\"fa fa-align-justify\"></i><span class=\"break\"></span>General Information</h2>\n                        </div>\n                        <div class=\"box-content\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">First Name</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input type=\"text\" class=\"form-control\" name=\"patientFirstName\" placeholder=\"First Name\" ngModel>\n                                  </div>\n                                </div>\n                            </div>  \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Last Name</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input  name=\"patientLastName\" placeholder=\"Last Name\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Street Address</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                    <input  name=\"patientStreet\" placeholder=\"Street Address\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">City</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                    <input  name=\"patientCity\" placeholder=\"City\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">State</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                    <select class=\"form-control\" name=\"patientState\" ngModel>\n                                        <option *ngFor = \"let i of states\">{{i}}</option>\n                                    </select>\t\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Zip</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                    <input  name=\"patientZip\" placeholder=\"Zip Code\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Email</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n                                    <input  name=\"patientEmail\" placeholder=\"Email Address\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Gender</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <select class=\"form-control\" name=\"patientGender\" ngModel>\n                                        <option value=\"Male\">Male</option>\n                                        <option value=\"Female\">Female</option>\n                                    </select>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Date of Birth</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group date\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n                                    <input  name=\"patientDob\" class=\"form-control\"  type=\"text\" placeholder=\"MM/dd/yyyy\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Home Phone</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                    <input  name=\"patientHomePhone\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Cell Phone</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                    <input  name=\"pateintMobilePhone\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div>   \n                        </div>\n                      </div>\n                    </div><!--/col-->\n                    \n                    <div class=\"col-lg-6\">\n                      <div class=\"box\">\n                        <div class=\"box-header\">\n                          <h2><i class=\"fa fa-align-justify\"></i><span class=\"break\"></span>Emergency Contact</h2>\n                        </div>\n                        <div class=\"box-content\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">First Name</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input type=\"text\" class=\"form-control\" name=\"emergencyFirstName\" placeholder=\"First Name\" ngModel>\n                                  </div>\n                                </div>\n                            </div>  \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Last Name</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input  name=\"emergencyLastName\" placeholder=\"Last Name\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Street Address</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                    <input  name=\"emergencyStreet\" placeholder=\"Street Address\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">City</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                    <input  name=\"emergencyCity\" placeholder=\"City\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">State</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                    <select class=\"form-control\" name=\"emergencyState\" ngModel>\n                                        <option *ngFor = \"let i of states\">{{i}}</option>\n                                    </select>\t\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Zip</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                    <input  name=\"emergencyZip\" placeholder=\"Zip Code\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Relationship</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input  name=\"emergencyRelationship\" placeholder=\"Relationship\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Home Phone</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                    <input  name=\"emergencyHomePhone\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Cell Phone</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                    <input  name=\"emergencyMobilePhone\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div>   \n                        </div>\n                      </div>\n                    </div><!--/col-->\n                  </div><!--/row-->\n                <!--end -->\n                  <!-- begin-->\n                  <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                        <div class=\"box\">\n                          <div class=\"box-header\">\n                            <h2><i class=\"fa fa-align-justify\"></i><span class=\"break\"></span>Primary Insurance</h2>\n                          </div>\n                          <div class=\"box-content\">\n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Insured Name</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                      <input  name=\"insuredName\" placeholder=\"Insured Name\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div>\n                              <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Insurance Name</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input  name=\"insuranceName\" placeholder=\"Insurance Name\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">ID NUMBER</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-barcode\"></i></span>\n                                      <input  name=\"insuranceIdNbr\" placeholder=\"Id Number\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">GROUP NUMBER</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-barcode\"></i></span>\n                                      <input  name=\"insuranceGroupNbr\" placeholder=\"Group Number\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Mailing Address</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                      <input  name=\"insuranceStreet\" placeholder=\"Mailing Address\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">City</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                      <input  name=\"insuranceCity\" placeholder=\"City\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">State</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                      <select class=\"form-control\" name=\"insuranceState\" ngModel>\n                                          <option *ngFor = \"let i of states\">{{i}}</option>\n                                      </select>\t\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Zip</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                      <input  name=\"insuranceZip\" placeholder=\"Zip Code\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Phone</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                      <input  name=\"insurancePhone\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Fax</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                      <input  name=\"insuranceFax\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                          </div>\n                        </div>\n                      </div><!--/col-->\n                      \n                      <div class=\"col-lg-6\">\n                        <div class=\"box\">\n                          <div class=\"box-header\">\n                            <h2><i class=\"fa fa-align-justify\"></i><span class=\"break\"></span>Secondary Insurance</h2>\n                          </div>\n                          <div class=\"box-content\">\n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Insured Name</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                      <input  name=\"insuredName2\" placeholder=\"Insured Name\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Insurance Name</label> \n                                <div class=\"col-md-8 inputGroupContainer\">\n                                  <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                    <input  name=\"insuranceName2\" placeholder=\"Insurance Name\" class=\"form-control\"  type=\"text\" ngModel>\n                                  </div>\n                                </div>\n                            </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">ID NUMBER</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-barcode\"></i></span>\n                                      <input  name=\"insuranceIdNbr2\" placeholder=\"Id Number\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">GROUP NUMBER</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-barcode\"></i></span>\n                                      <input  name=\"insuranceGroupNbr2\" placeholder=\"Group Number\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Mailing Address</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                      <input  name=\"insuranceStreet2\" placeholder=\"Mailing Address\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">City</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                      <input  name=\"insuranceCity2\" placeholder=\"City\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">State</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                      <select class=\"form-control\" name=\"insuranceState2\" ngModel>\n                                          <option *ngFor = \"let i of states\">{{i}}</option>\n                                      </select>\t\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Zip</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\n                                      <input  name=\"insuranceZip2\" placeholder=\"Zip Code\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Phone</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                      <input  name=\"insurancePhone2\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                              <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Fax</label> \n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                                      <input  name=\"insuranceFax2\" placeholder=\"(845)555-1212\" class=\"form-control\"  type=\"text\" ngModel>\n                                    </div>\n                                  </div>\n                              </div> \n                          </div>\n                        </div>\n                      </div><!--/col-->\n                      <div class=\"form-group col-md-12 text-center\">\n                          <button type=\"submit\" class=\"btn btn-primary\">Regester</button>\n                      </div>\n                    </div><!--/row-->\n                  <!--end -->\n              </div>\n            </form>\n            <!--form end-->\n\t\t\t\t\t</div>\n\t\t\t\t</div><!--/col-->\n\t\t\t\n\t\t\t</div><!--/row-->\n </div>"

/***/ }),

/***/ "./src/app/pages/patient-regestration/patient-regestration.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/patient-regestration/patient-regestration.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header-success {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #5cb85c;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-warning {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #f0ad4e;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-danger {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #d9534f;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-info {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #5bc0de;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-primary {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #36a9e1;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal.modal-wide .modal-dialog {\n  width: 90%; }\n\n.modal-wide .modal-body {\n  overflow-y: auto; }\n\n/* irrelevant styling */\n\nbody {\n  text-align: center; }\n\nbody p {\n  max-width: 400px;\n  margin: 20px auto; }\n\n#tallModal .modal-body p {\n  margin-bottom: 900px; }\n\n.modal {\n  overflow-y: scroll; }\n\n.col-centered {\n  float: none;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGdpbmZvc3lzL2dpdC9tZWRpY2FsU3lzdGVtL01lZGljYWxTeXN0ZW0tZnJvbnRlbmQvc3JjL21haW4vd2ViL3NyYy9hcHAvcGFnZXMvcGF0aWVudC1yZWdlc3RyYXRpb24vcGF0aWVudC1yZWdlc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFVO0VBQ1Ysa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDQyxZQUFVO0VBQ1Asa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDQyxZQUFVO0VBQ1Asa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDSSxZQUFVO0VBQ1Ysa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDQyxZQUFVO0VBQ1Asa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBRUQ7RUFDSSxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQsd0JBQXdCOztBQUN4QjtFQUFPLG1CQUFrQixFQUFJOztBQUM3QjtFQUNFLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFBMkIscUJBQXFCLEVBQUU7O0FBRWxEO0VBRUUsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXRpZW50LXJlZ2VzdHJhdGlvbi9wYXRpZW50LXJlZ2VzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXItc3VjY2VzcyB7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjlweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWhlYWRlci13YXJuaW5nIHtcblx0Y29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjlweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWhlYWRlci1kYW5nZXIge1xuXHRjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6OXB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogNXB4O1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubW9kYWwtaGVhZGVyLWluZm8ge1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo5cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1cHg7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1oZWFkZXItcHJpbWFyeSB7XG5cdGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo5cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNmE5ZTE7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1cHg7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLm1vZGFsLm1vZGFsLXdpZGUgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAubW9kYWwtd2lkZSAubW9kYWwtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLyogaXJyZWxldmFudCBzdHlsaW5nICovXG4gIGJvZHkgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgYm9keSBwIHsgXG4gICAgbWF4LXdpZHRoOiA0MDBweDsgXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87IFxuICB9XG4gICN0YWxsTW9kYWwgLm1vZGFsLWJvZHkgcCB7IG1hcmdpbi1ib3R0b206IDkwMHB4IH1cblxuICAubW9kYWwge1xuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY29sLWNlbnRlcmVke1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/patient-regestration/patient-regestration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/patient-regestration/patient-regestration.component.ts ***!
  \******************************************************************************/
/*! exports provided: PatientRegestrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegestrationComponent", function() { return PatientRegestrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PatientRegestrationComponent = /** @class */ (function () {
    function PatientRegestrationComponent(http, router) {
        this.http = http;
        this.router = router;
        this.states = ['District of Colombia', 'Maryland', 'Virginia'];
    }
    PatientRegestrationComponent.prototype.ngOnInit = function () {
    };
    /**
     * name
     */
    PatientRegestrationComponent.prototype.regesterPatient = function (form) {
        var _this = this;
        this.http.post('/patients', form)
            .subscribe(function (data) {
            console.log('Patient Regestration is successful ', data);
            _this.success = 'You have successfully regestered ' + form.patientFirstName + ' ' + form.patientLastName;
        }, function (error) {
            console.log('Error', error);
            _this.error = error;
        });
    };
    PatientRegestrationComponent.prototype.destroy = function () {
        this.error = null;
        this.success = null;
    };
    PatientRegestrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-regestration',
            template: __webpack_require__(/*! ./patient-regestration.component.html */ "./src/app/pages/patient-regestration/patient-regestration.component.html"),
            styles: [__webpack_require__(/*! ./patient-regestration.component.scss */ "./src/app/pages/patient-regestration/patient-regestration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PatientRegestrationComponent);
    return PatientRegestrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/patient-wfn/patient-wfn.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/patient-wfn/patient-wfn.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n  <div class=\"col-lg-3 col-sm-6 col-xs-6 col-xxs-12\">\n    <div class=\"smallstat box\">\n      <i class=\"medical-icon-i-waiting-area blue\"></i>\n      <span class=\"title\">Pateints Arrived (New)</span>\n      <span class=\"value\">10</span>\n    </div>\n  </div><!--/col-->\n  \n  <div class=\"col-lg-3 col-sm-6 col-xs-6 col-xxs-12\">\n    <div class=\"smallstat box\">\n      <i class=\"medical-icon-i-inpatient red\"></i>\n      <span class=\"title\">Patients called to Room</span>\n      <span class=\"value\">20</span>\n    </div>\n  </div><!--/col-->\n  \n  <div class=\"col-lg-3 col-sm-6 col-xs-6 col-xxs-12\">\n    <div class=\"smallstat box\">\n      <i class=\"medical-icon-i-alternative-complementary yellow\"></i>\n      <span class=\"title\">Patients Undergo Intake</span>\n      <span class=\"value\">30</span>\n    </div>\n  </div><!--/col-->\n  \n  <div class=\"col-lg-3 col-sm-6 col-xs-6 col-xxs-12\">\n    <div class=\"smallstat box\">\n      <i class=\"medical-icon-i-outpatient green\"></i>\n      <span class=\"title\">Patients Discharged</span>\n      <span class=\"value\">40</span>\n    </div>\n  </div><!--/col-->\n\n</div><!--/row-->\n"

/***/ }),

/***/ "./src/app/pages/patient-wfn/patient-wfn.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/patient-wfn/patient-wfn.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQtd2ZuL3BhdGllbnQtd2ZuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/patient-wfn/patient-wfn.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/patient-wfn/patient-wfn.component.ts ***!
  \************************************************************/
/*! exports provided: PatientWFNComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientWFNComponent", function() { return PatientWFNComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientWFNComponent = /** @class */ (function () {
    function PatientWFNComponent() {
    }
    PatientWFNComponent.prototype.ngOnInit = function () {
    };
    PatientWFNComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-wfn',
            template: __webpack_require__(/*! ./patient-wfn.component.html */ "./src/app/pages/patient-wfn/patient-wfn.component.html"),
            styles: [__webpack_require__(/*! ./patient-wfn.component.scss */ "./src/app/pages/patient-wfn/patient-wfn.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientWFNComponent);
    return PatientWFNComponent;
}());



/***/ }),

/***/ "./src/app/pages/patient/patient.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/patient/patient.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"col-lg-10 col-sm-11\">       \n  <div class=\"row\">\n    <div class=\"col-sm-6\" *ngIf=\"patient\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h2><i class=\"fas fa fa-user\"></i>&nbsp;General Information</h2>\n        </div>\n        <div class=\"box-content\">\n          <div id=\"generalInfo\" style=\"height:300px\" >\n            <table class=\"table table-condensed\">\n                <tbody>\n                    <tr>\n                        <th>Name:</th>\n                        <td>{{patient.fname}} {{patient.lname}}</td>\n                    </tr>\n                    <tr>\n                        <th>Date of Birth:</th>\n                        <td>{{patient.dob | date: 'MM/dd/yyyy'}}</td>\n                    </tr>\n                    <tr>\n                        <th>Phone:</th>\n                        <td>{{patient.phone}}</td>\n                    </tr>\n                    <tr>\n                        <th>Email:</th>\n                        <td>{{patient.email}}</td>\n                    </tr>\n                    <tr *ngIf=\"patientAddresses\">\n                        <th>Address:</th>\n                        <td>{{patientAddresses.street1}} {{patientAddresses.street2}}<br>{{patientAddresses.city}} {{patientAddresses.state}} {{patientAddresses.zipcode}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        </div>\n      </div>\n    </div><!--/col-->\n\n    <div class=\"col-sm-6\">\n      <div class=\"box\"  id=\"accordion\"  aria-multiselectable=\"true\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                <h2 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapse\">\n                            <i class=\"fas fas fa-id-card\"></i>&nbsp;<span class=\"break\"></span>Insurance Information\n                    </a>\n                </h2>\n            </div>\n          <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <table class=\"table table-condensed\" *ngFor=\"let insurance of insurances\">\n                    <tbody>\n                        <tr>\n                            <th>Insurance Name:</th>\n                            <td>{{insurance.insuranceName}}</td>\n                        </tr>\n                        <tr>\n                            <th>Insured Name:</th>\n                            <td>{{insurance.insuredName}}</td>\n                        </tr>\n                        <tr>\n                            <th>Insurance Number:</th>\n                            <td>{{insurance.insuranceNumber}}</td>\n                        </tr>\n                        <tr>\n                            <th>Group Number:</th>\n                            <td>{{insurance.groupNumber}}</td>\n                        </tr>\n                        <tr>\n                            <th>Phone:</th>\n                            <td>{{insurance. phone}}</td>\n                        </tr>\n                        <tr>\n                            <th>Address:</th>\n                            <td>{{insurance.street1}} <br>{{insurance.city}} {{insurance.state}} {{insurance.zipcode}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <br>\n                      <a class=\"btn btn-info\"  title=\"Edit\"> <i class=\"fas fa-pencil-alt\"></i></a> \n                        &nbsp;\n                      <a class=\"btn btn-danger\"  title=\"Discharge\"> <i class=\"fas fa-trash-alt\"></i></a>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                <h2 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapse\">\n                            <i class=\"fas fa-user-alt\"></i>&nbsp;<span class=\"break\"></span>Emergency Contact\n                    </a>\n                </h2>\n            </div>\n          <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n              <div class=\"panel-body\">\n                <table class=\"table table-condensed\" *ngFor=\"let emergencyContact of emergencyContacts\">\n                    <tbody>\n                        <tr>\n                            <th>Name:</th>\n                            <td>{{emergencyContact.fname}} {{emergencyContact.lname}}</td>\n                        </tr>\n                        <tr>\n                            <th>Relationship:</th>\n                            <td>{{emergencyContact.relationship}}</td>\n                        </tr>\n                        <tr>\n                            <th>Cell Phone:</th>\n                            <td>{{emergencyContact.cellPhone}}</td>\n                        </tr>\n                        <tr>\n                            <th>Home Phone:</th>\n                            <td>{{emergencyContact.homePhone}}</td>\n                        </tr>\n                        <tr>\n                            <th>Address:</th>\n                            <td>{{emergencyContact.street1}} {{emergencyContact.street2}}<br>{{emergencyContact.city}} {{emergencyContact.state}} {{emergencyContact.zipcode}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <br>\n                      <a class=\"btn btn-info\"  title=\"Edit\"> <i class=\"fas fa-pencil-alt\"></i></a> \n                        &nbsp;\n                      <a class=\"btn btn-danger\"  title=\"Discharge\"> <i class=\"fas fa-trash-alt\"></i></a>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                    <h2 class=\"panel-title\">\n                        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapse\">\n                                <i class=\"fas fa-file-invoice-dollar\"></i>&nbsp;<span class=\"break\"></span>Billing\n                        </a>\n                    </h2>\n                </div>\n            <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                <div class=\"panel-body\">\n                      Billing comes here...\n                      <br>\n                      <a class=\"btn btn-info\"  title=\"Edit\"> <i class=\"fas fa-pencil-alt\"></i></a> \n                        &nbsp;\n                      <a class=\"btn btn-danger\"  title=\"Discharge\"> <i class=\"fas fa-trash-alt\"></i></a> \n                </div>\n            </div>\n        </div>\n\n    </div><!--/col-->\n   \n  </div>\n</div>\n<div class=\"row\" *ngIf=\"encounters\">\t\t\n    <div class=\"col-lg-12\">\n        <div class=\"box\">\n            <div class=\"box-header\" data-original-title>\n                <h2><i class=\"medical-icon-i-medical-records\"></i><span class=\"break\"></span>Encounters</h2>\n            </div>\n            <div class=\"box-content\">\n                    <table class=\"table table-striped table-bordered bootstrap-datatable datatable\" datatable>\n                      <thead>\n                        <tr>\n                          <th>Date & Time Checked In</th>\n                          <th>Doctor Name</th>\n                          <th>Encounter Infoormation</th>\n                          <th>Status</th>\n                          <th>Actions</th>\n                        </tr>\n                      </thead>   \n                      <tbody>\n                    <tr *ngFor=\"let encounter of encounters\">\n                        <td class=\"center\">{{encounter.checkInDateTime | date:'medium':'America/New_York'}} </td>\n                        <td>{{encounter.employee?.fname}} {{encounter.employee?.lname}}</td>\n                        <td class=\"center\">\n                          <i class=\"fas fa-thermometer-half green\" *ngIf=\"encounter.temp\" title=\"temprature\"></i> {{encounter.temp}} &nbsp;&nbsp;\n                          <i class=\"fas fa-heartbeat red\" *ngIf=\"encounter.pulse\" title=\"pulse\"></i> {{encounter.pulse}} &nbsp;&nbsp;\n                          <i class=\"fas fa-weight blue\" *ngIf=\"encounter.weight\" title=\"weight\"></i> {{encounter.weight}}\n                        </td>\n                        <td class=\"center\">\n                          <span class=\"label label-default\" *ngIf=\"encounter.status == 'OPEN'\">{{encounter.status}}</span>\n                          <span class=\"label label-success\" *ngIf=\"encounter.status == 'IN PROGRESS'\">{{encounter.status}}</span>\n                          <span class=\"label label-success\" *ngIf=\"encounter.status == 'COMPLETED'\">{{encounter.status}}</span>\n                        </td>\n                        <td class=\"center\">\n                            <a class=\"btn btn-success\" (click)=\"getPatientEncounterById(encounter.encounterId)\"  title=\"view\"> <i class=\"fa fa-search-plus\"></i></a>\n            \n                        </td>\n                      </tr>\n                      </tbody>\n                    </table>     \n                  </div>\n        </div>\n    </div><!--/col-->\n\n</div><!--/row-->\n<div class=\"row\" *ngIf=\"encounter\">\t\t\n    <div class=\"col-lg-12\">\n        <div class=\"box\">\n            <div class=\"box-header\" data-original-title>\n                <h2><i class=\"medical-icon-i-medical-records\"></i><span class=\"break\"></span>{{encounter.checkInDateTime | date:'medium':'America/New_York'}}</h2>\n            </div>\n            <div class=\"box-content\">\n                <table class=\"table table-condensed\">\n                    <tbody>\n                        <tr>\n                            <th>Pulse:</th>\n                            <th>Temprature:</th>\n                            <th>SAT:</th>\n                            <th>RESP RATE:</th>\n                            <th>WEIGHT:</th>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fas fa-heartbeat\"></i></span>\n                                    <input  name=\"pulse\" value =\"{{encounter.pulse}}\" class=\"form-control\"  type=\"text\" disabled>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fas fa-thermometer-half\"></i></span>\n                                    <input  name=\"temp\" value=\"{{encounter.temp}}\" class=\"form-control\"  type=\"text\" disabled>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fab fa-digital-ocean\"></i></span>\n                                    <input  name=\"sat\" value=\"{{encounter.sat}}\" class=\"form-control\"  type=\"text\" disabled>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fab fa-digital-ocean\"></i></span>\n                                    <input  name=\"respRate\" value=\"{{encounter.respRate}}\" class=\"form-control\"  type=\"text\" disabled>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fas fa-weight\"></i></span>\n                                    <input  name=\"weight\" value=\"{{encounter.weight}}\" class=\"form-control\"  type=\"text\" disabled>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th colspan=\"5\">CHIEF COMPLAINT</th>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment\"></i></span>\n                                    <textarea class=\"form-control form-input\" rows=\"7\" name=\"chiefComplaint\" style=\"width:100%;\" value=\"{{encounter.chiefComplaint}}\"\n                                      maxlength=\"1000\" disabled></textarea>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th colspan=\"5\">TREATMENT</th>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment\"></i></span>\n                                    <textarea class=\"form-control form-input\" rows=\"7\" style=\"display: block; width:100%;\" name=\"treatment\" value=\"{{encounter.treatment}}\"\n                                      maxlength=\"1000\" disabled></textarea>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th colspan=\"5\">REMARK</th>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment\"></i></span>\n                                    <textarea class=\"form-control form-input\" rows=\"7\" style=\"width:100%;\" name=\"remark\" value=\"{{encounter.remark}}\"\n                                      maxlength=\"1000\" disabled></textarea>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div><!--/col-->\n\n</div><!--/row-->"

/***/ }),

/***/ "./src/app/pages/patient/patient.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/patient/patient.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover,\na:focus {\n  text-decoration: none;\n  outline: none; }\n\n#accordion .panel {\n  border: none;\n  background: none;\n  border-radius: 0;\n  box-shadow: none; }\n\n#accordion .panel-heading {\n  padding: 0; }\n\n#accordion .panel-title a {\n  display: block;\n  font-size: 16px;\n  color: #fff;\n  padding: 15px 10px 15px 65px;\n  background: #36a9e1;\n  border: 1px solid #f3f3f3;\n  border-bottom: none;\n  position: relative;\n  transition: all 0.5s ease 0s; }\n\n#accordion .panel-title a.collapsed {\n  background: #36a9e1;\n  color: #FFFFFF; }\n\n#accordion .panel-title a.collapsed:hover {\n  color: #fff; }\n\n#accordion .panel-title a:after,\n#accordion .panel-title a.collapsed:after {\n  content: \"\\f068\";\n  font-family: FontAwesome;\n  font-size: 15px;\n  color: #fff;\n  width: 45px;\n  height: 100%;\n  line-height: 54px;\n  text-align: center;\n  position: absolute;\n  top: 0px;\n  left: -1px;\n  background: #36a9e1;\n  transition: all .2s; }\n\n#accordion .panel-title a.collapsed:after {\n  content: \"\\f067\";\n  color: #FFFFFF;\n  background: #36a9e1;\n  transition: all 0.5s ease 0s; }\n\n#accordion .panel-title a.collapsed:hover:after {\n  background: #36a9e1;\n  color: #fff; }\n\n#accordion .panel-title a:before {\n  content: \"\";\n  position: absolute;\n  bottom: -11px;\n  left: -1px;\n  border-bottom: 12px solid transparent;\n  border-right: 12px solid #36a9e1; }\n\n#accordion .panel-title a.collapsed:before {\n  display: none; }\n\n#accordion .panel-body {\n  font-size: 14px;\n  color: #b7b7b7;\n  padding: 0 65px 15px;\n  line-height: 20px;\n  margin-left: 12px;\n  background: #fff;\n  border: 1px solid #f3f3f3;\n  border-top: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGdpbmZvc3lzL2dpdC9tZWRpY2FsU3lzdGVtL01lZGljYWxTeXN0ZW0tZnJvbnRlbmQvc3JjL21haW4vd2ViL3NyYy9hcHAvcGFnZXMvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHNCQUFxQjtFQUNyQixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsNkJBQTRCO0VBQzVCLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFDN0I7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNmOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEOztFQUVFLGlCQUFnQjtFQUNoQix5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLG9CQUFtQjtFQUNuQiw2QkFBNEIsRUFDN0I7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsV0FBVTtFQUNWLHNDQUFxQztFQUNyQyxpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jYWNjb3JkaW9uIC5wYW5lbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuI2FjY29yZGlvbiAucGFuZWwtaGVhZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggNjVweDtcbiAgYmFja2dyb3VuZDogIzM2YTllMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuXG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZCB7XG4gIGJhY2tncm91bmQ6ICMzNmE5ZTE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhOmFmdGVyLFxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZjA2OFwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0xcHg7XG4gIGJhY2tncm91bmQ6ICMzNmE5ZTE7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG5cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwNjdcIjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICMzNmE5ZTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG5cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzM2YTllMTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMXB4O1xuICBsZWZ0OiAtMXB4O1xuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzM2YTllMTtcbn1cblxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2FjY29yZGlvbiAucGFuZWwtYm9keSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNiN2I3Yjc7XG4gIHBhZGRpbmc6IDAgNjVweCAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/patient/patient.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/patient/patient.component.ts ***!
  \****************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PatientComponent = /** @class */ (function () {
    function PatientComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    PatientComponent.prototype.ngOnInit = function () {
        this.patientId = this.route.snapshot.paramMap.get('id');
        console.log('patient id: ', this.patientId);
        this.getPatientById(this.patientId);
    };
    /**
     * name
     */
    PatientComponent.prototype.getPatientById = function (id) {
        var _this = this;
        // patient
        this.http.get('/patients/' + id)
            .subscribe(function (data) {
            _this.patient = data;
        }, function (error) {
            console.log('error: getPatientById', error);
        });
        // address
        this.http.get('/patients/address/' + id)
            .subscribe(function (data) {
            _this.patientAddresses = data;
        }, function (error) {
            console.log('error: getPatientById', error);
        });
        // encounters
        this.http.get('/patients/encounters/' + id)
            .subscribe(function (data) {
            _this.encounters = data;
        }, function (error) {
            console.log('error: getPatientById', error);
        });
        // insurances
        this.http.get('/patients/insurances/' + id)
            .subscribe(function (data) {
            _this.insurances = data;
        }, function (error) {
            console.log('error: getPatientById', error);
        });
        // emergencyContacts
        this.http.get('/patients/emergencyContacts/' + id).subscribe(function (data) {
            _this.emergencyContacts = data;
        }, function (error) {
            console.log('error: getPatientById', error);
        });
    };
    PatientComponent.prototype.getPatientEncounterById = function (encounterId) {
        var _this = this;
        // patient
        this.http.get('/encounters/' + encounterId)
            .subscribe(function (data) {
            _this.encounter = data;
        }, function (error) {
            console.log('error: getPatientEncounterById', error);
        });
    };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/pages/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.scss */ "./src/app/pages/patient/patient.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/pages/search-patient/search-patient.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/search-patient/search-patient.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"content\" class=\"col-lg-10 col-sm-11\" style=\"height:90vh;\">\n  <form role=\"form\" (ngSubmit)=\"searchPatient(patientSearchModalForm.value)\" #patientSearchModalForm=\"ngForm\">\n  <div class=\"row\">\t\t\n    <div class=\"row\">\n        <div class=\"form-row\">\n            <div class=\"form-group\">\n                <div class=\"col-md-5 inputGroupContainer\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                    <input  name=\"lastName\" placeholder=\"Last Name\" class=\"form-control\"  type=\"text\" ngModel>\n                  </div>\n                </div>\n            </div> \n            <div class=\"form-group\">\n              <div class=\"col-md-5 inputGroupContainer\">\n                <div class=\"input-group date\">\n                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n                  <input  name=\"dob\" class=\"form-control\"  type=\"text\" placeholder=\"Date of Birth (MM/dd/yyyy)\" ngModel>\n                </div>\n              </div>\n          </div> \n          <div class=\"col-md-2 inputGroupContainer\">\n              <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n          </div> \n        </div>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"row\"  *ngIf=\"patientSearchResult\">\t\t\n      <div class=\"box\">\n          <div class=\"box-content\">\n              <table class=\"table table-striped table-bordered bootstrap-datatable datatable\" *ngIf=\"patientSearchResult?.length > 0; else emptyResult\" datatable>\n                  <thead>\n                    <tr>\n                      <th>First Name</th>\n                      <th>Last Name</th>\n                      <th>Date of Birth</th>\n                      <th>Phone</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>   \n                  <tbody>\n                  <tr *ngFor=\"let patient of patientSearchResult\">\n                    <td>{{patient.fname}}</td>\n                    <td>{{patient.lname}}</td>\n                    <td>{{patient.dob}}</td>\n                    <td>{{patient.phone}}</td>\n                    <td class=\"center\">\n                      <a class=\"btn btn-success\" [routerLink]=\"['/patient/', patient.patientId]\" title=\"view\" skipLocationChange> <i class=\"fa fa-search-plus\"></i></a>\n                      &nbsp;\n                      <a class=\"btn btn-info\" [routerLink]=\"['dashboard/', patient.patientId]\" title=\"Check in\" skipLocationChange> <i class=\"fas fa-check-square\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <ng-template #emptyResult>\n                  <p>No Record Found...</p>\n              </ng-template>\n          </div>\n      </div>\n  </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/search-patient/search-patient.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/search-patient/search-patient.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header-success {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #5cb85c;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-warning {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #f0ad4e;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-danger {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #d9534f;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-info {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #5bc0de;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal-header-primary {\n  color: #fff;\n  padding: 9px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #36a9e1;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.modal.modal-wide .modal-dialog {\n  width: 90%; }\n\n.modal-wide .modal-body {\n  overflow-y: auto; }\n\n/* irrelevant styling */\n\nbody {\n  text-align: center; }\n\nbody p {\n  max-width: 400px;\n  margin: 20px auto; }\n\n#tallModal .modal-body p {\n  margin-bottom: 900px; }\n\n.modal {\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGdpbmZvc3lzL2dpdC9tZWRpY2FsU3lzdGVtL01lZGljYWxTeXN0ZW0tZnJvbnRlbmQvc3JjL21haW4vd2ViL3NyYy9hcHAvcGFnZXMvc2VhcmNoLXBhdGllbnQvc2VhcmNoLXBhdGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFVO0VBQ1Ysa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDQyxZQUFVO0VBQ1Asa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDQyxZQUFVO0VBQ1Asa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDSSxZQUFVO0VBQ1Ysa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBQ0Q7RUFDQyxZQUFVO0VBQ1Asa0JBQWdCO0VBQ2hCLDhCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsb0NBQW1DO0VBQ25DLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQy9CLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDaEM7O0FBRUQ7RUFDSSxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQsd0JBQXdCOztBQUN4QjtFQUFPLG1CQUFrQixFQUFJOztBQUM3QjtFQUNFLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFBMkIscUJBQXFCLEVBQUU7O0FBRWxEO0VBRUUsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLXBhdGllbnQvc2VhcmNoLXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo5cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1cHg7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1oZWFkZXItd2FybmluZyB7XG5cdGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo5cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1cHg7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1oZWFkZXItZGFuZ2VyIHtcblx0Y29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjlweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDVweDtcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWhlYWRlci1pbmZvIHtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6OXB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlO1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogNXB4O1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubW9kYWwtaGVhZGVyLXByaW1hcnkge1xuXHRjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6OXB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZhOWUxO1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogNXB4O1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5tb2RhbC5tb2RhbC13aWRlIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLm1vZGFsLXdpZGUgLm1vZGFsLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgXG4gIC8qIGlycmVsZXZhbnQgc3R5bGluZyAqL1xuICBib2R5IHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIGJvZHkgcCB7IFxuICAgIG1heC13aWR0aDogNDAwcHg7IFxuICAgIG1hcmdpbjogMjBweCBhdXRvOyBcbiAgfVxuICAjdGFsbE1vZGFsIC5tb2RhbC1ib2R5IHAgeyBtYXJnaW4tYm90dG9tOiA5MDBweCB9XG5cbiAgLm1vZGFsIHtcblxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/search-patient/search-patient.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/search-patient/search-patient.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPatientComponent", function() { return SearchPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchPatientComponent = /** @class */ (function () {
    function SearchPatientComponent(http) {
        this.http = http;
    }
    SearchPatientComponent.prototype.ngOnInit = function () {
    };
    /**
     * searchPatient
     */
    SearchPatientComponent.prototype.searchPatient = function (search) {
        var _this = this;
        this.http.post('/patients/search', search)
            .subscribe(function (data) {
            console.log('POST Request is successful ', data);
            _this.patientSearchResult = data;
        }, function (error) {
            console.log('Error', error);
        });
    };
    SearchPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-patient',
            template: __webpack_require__(/*! ./search-patient.component.html */ "./src/app/pages/search-patient/search-patient.component.html"),
            styles: [__webpack_require__(/*! ./search-patient.component.scss */ "./src/app/pages/search-patient/search-patient.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchPatientComponent);
    return SearchPatientComponent;
}());



/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- start: Main Menu -->\n    <div id=\"sidebar-left\" class=\"col-lg-2 col-sm-1\">\n      \n      <input type=\"text\" class=\"search hidden-sm\" placeholder=\"...\" />\n      \n      <div class=\"nav-collapse sidebar-nav collapse navbar-collapse bs-navbar-collapse\">\n        <ul class=\"nav nav-tabs nav-stacked main-menu\">\n          <li><a href=\"index.html\"><i class=\"fa fa-user-md\"></i>&nbsp;<span class=\"hidden-sm\"> Dashboard</span></a></li>\t\n          <li>\n            <a class=\"dropmenu\" href=\"index.html#\"><i class=\"fas fa-users\"></i>&nbsp;<span class=\"hidden-sm\"> Patients</span> <span class=\"label\">3</span></a>\n            <ul>\n              <li><a [routerLink]=\"['/searchPatint']\" skipLocationChange><i class=\"fa fa-wheelchair\"></i><span class=\"hidden-sm\"> Check-In</span></a></li>\n              <li><a [routerLink]=\"['/regesterPatient']\" skipLocationChange><i class=\"fa fa-user\"></i><span class=\"hidden-sm\"> Regestration</span></a></li>\n              <li><a [routerLink]=\"['/searchPatint']\" skipLocationChange><i class=\"fa fa-search-plus\"></i><span class=\"hidden-sm\"> Search</span></a></li>\n            </ul>\n          </li>\n          <li>\n            <a class=\"dropmenu\" href=\"index.html#\"><i class=\"fas fa-user\"></i>&nbsp;<span class=\"hidden-sm\"> Admin</span> <span class=\"label\">3</span></a>\n            <ul>\n              <li><a [routerLink]=\"['/searchPatint']\" skipLocationChange><i class=\"fa fa-wheelchair\"></i><span class=\"hidden-sm\">Employees</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"login.html\"><i class=\"fa fa-lock\"></i>&nbsp;<span class=\"hidden-sm\"> Logout</span></a></li>\n        </ul>\n      </div>\n    </div>\n    <!-- end: Main Menu -->"

/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.ts ***!
  \****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/pages/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/pages/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pages/top/top.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/top/top.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- start: Header -->\n\t<header class=\"navbar\">\n\t\t<div class=\"container\">\n\t\t\t<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".sidebar-nav.nav-collapse\">\n\t\t\t      <span class=\"icon-bar\"></span>\n\t\t\t      <span class=\"icon-bar\"></span>\n\t\t\t      <span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a id=\"main-menu-toggle\" class=\"hidden-xs open\"><i class=\"fa fa-bars\"></i></a>\t\t\n\t\t\t\t<a class=\"navbar-brand col-lg-2 col-sm-1 col-xs-12\" href=\"index.html\"><span>MedicalRecord System</span></a>\n\t\t\t<!-- start: Header Menu -->\n\t\t\t<div class=\"nav-no-collapse header-nav\">\n\t\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t\t<li class=\"dropdown hidden-xs\">\n\t\t\t\t\t\t<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"index.html#\">\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu notifications\">\n\t\t\t\t\t\t\t<li class=\"dropdown-menu-title\">\n\t\t\t\t\t\t\t\t<span>You have 11 notifications</span>\n\t\t\t\t\t\t\t</li>\t\n                        \t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon blue\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New user registration</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">1 min</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon green\"><i class=\"fa fa-comment\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New comment</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">7 min</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon green\"><i class=\"fa fa-comment\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New comment</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">8 min</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon green\"><i class=\"fa fa-comment\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New comment</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">16 min</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon blue\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New user registration</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">36 min</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon yellow\"><i class=\"fa fa-shopping-cart\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">2 items sold</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">1 hour</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li class=\"warning\">\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon red\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">User deleted account</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">2 hour</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li class=\"warning\">\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon red\"><i class=\"fa fa-shopping-cart\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">Transaction was canceled</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">6 hour</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon green\"><i class=\"fa fa-comment\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New comment</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">yesterday</span> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon blue\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t\t\t\t<span class=\"message\">New user registration</span>\n\t\t\t\t\t\t\t\t\t<span class=\"time\">yesterday</span> \n                                </a>\n                            </li>\n                            <li class=\"dropdown-menu-sub-footer\">\n                        \t\t<a>View all notifications</a>\n\t\t\t\t\t\t\t</li>\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- start: Notifications Dropdown -->\n\t\t\t\t\t<li class=\"dropdown hidden-xs\">\n\t\t\t\t\t\t<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"index.html#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-tasks\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu tasks\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"dropdown-menu-title\">You have 17 tasks in progress</span>\n                        \t</li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"title\">iOS Development</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"percent\"></span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <div class=\"taskProgress progressSlim progressBlue\">80</div> \n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Android Development</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"percent\"></span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <div class=\"taskProgress progressSlim progressYellow\">47</div> \n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Django Project For Google</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"percent\"></span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <div class=\"taskProgress progressSlim progressRed\">32</div> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"title\">SEO for new sites</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"percent\"></span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <div class=\"taskProgress progressSlim progressGreen\">63</div> \n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"title\">New blog posts</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"percent\"></span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <div class=\"taskProgress progressSlim progressPink\">80</div> \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                        \t\t<a class=\"dropdown-menu-sub-footer\">View all tasks</a>\n\t\t\t\t\t\t\t</li>\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- end: Notifications Dropdown -->\n\t\t\t\t\t<!-- start: Message Dropdown -->\n\t\t\t\t\t<li class=\"dropdown hidden-xs\">\n\t\t\t\t\t\t<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"index.html#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu messages\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"dropdown-menu-title\">You have 9 messages</span>\n\t\t\t\t\t\t\t</li>\t\n                        \t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"avatar\"><img src=\"assets/img/avatar.jpg\" alt=\"Avatar\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"from\">\n\t\t\t\t\t\t\t\t\t    \tŁukasz Holeczek\n\t\t\t\t\t\t\t\t\t     </span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">\n\t\t\t\t\t\t\t\t\t    \t6 min\n\t\t\t\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"message\">\n                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore\n                                    </span>  \n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"avatar\"><img src=\"assets/img/avatar2.jpg\" alt=\"Avatar\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"from\">\n\t\t\t\t\t\t\t\t\t    \tMegan Abott\n\t\t\t\t\t\t\t\t\t     </span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">\n\t\t\t\t\t\t\t\t\t    \t56 min\n\t\t\t\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"message\">\n                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore\n                                    </span>  \n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"avatar\"><img src=\"assets/img/avatar3.jpg\" alt=\"Avatar\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"from\">\n\t\t\t\t\t\t\t\t\t    \tKate Ross\n\t\t\t\t\t\t\t\t\t     </span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">\n\t\t\t\t\t\t\t\t\t    \t3 hours\n\t\t\t\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"message\">\n                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore\n                                    </span>  \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"avatar\"><img src=\"assets/img/avatar4.jpg\" alt=\"Avatar\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"from\">\n\t\t\t\t\t\t\t\t\t    \tJulie Blank\n\t\t\t\t\t\t\t\t\t     </span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">\n\t\t\t\t\t\t\t\t\t    \tyesterday\n\t\t\t\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"message\">\n                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore\n                                    </span>  \n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t<span class=\"avatar\"><img src=\"assets/img/avatar5.jpg\" alt=\"Avatar\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"from\">\n\t\t\t\t\t\t\t\t\t    \tJane Sanders\n\t\t\t\t\t\t\t\t\t     </span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">\n\t\t\t\t\t\t\t\t\t    \tJul 25, 2012\n\t\t\t\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"message\">\n                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore\n                                    </span>  \n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n                        \t\t<a class=\"dropdown-menu-sub-footer\">View all messages</a>\n\t\t\t\t\t\t\t</li>\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- end: Message Dropdown -->\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"btn\" href=\"index.html#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-wrench\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- start: User Dropdown -->\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a class=\"btn account dropdown-toggle\" data-toggle=\"dropdown\" href=\"index.html#\">\n\t\t\t\t\t\t\t<div class=\"avatar\"><img src=\"assets/img/avatar1.jpg\" alt=\"Avatar\"></div>\n\t\t\t\t\t\t\t<div class=\"user\">\n\t\t\t\t\t\t\t\t<span class=\"hello\">Welcome!</span>\n\t\t\t\t\t\t\t\t<span class=\"name\">Alem Getahun</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li class=\"dropdown-menu-title\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li><a href=\"index.html#\"><i class=\"fa fa-user\"></i> Profile</a></li>\n\t\t\t\t\t\t\t<li><a href=\"index.html#\"><i class=\"fa fa-cog\"></i> Settings</a></li>\n\t\t\t\t\t\t\t<li><a href=\"index.html#\"><i class=\"fa fa-envelope\"></i> Messages</a></li>\n\t\t\t\t\t\t\t<li><a href=\"login.html\"><i class=\"fa fa-off\"></i> Logout</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- end: User Dropdown -->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<!-- end: Header Menu -->\n\t\t\t\n\t\t</div>\t\n\t</header>\n\t<!-- end: Header -->"

/***/ }),

/***/ "./src/app/pages/top/top.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/top/top.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvcC90b3AuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/top/top.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/top/top.component.ts ***!
  \********************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/app/pages/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.scss */ "./src/app/pages/top/top.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adginfosys/git/medicalSystem/MedicalSystem-frontend/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
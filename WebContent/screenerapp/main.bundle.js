webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-company/add-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top{\r\n    margin-top:40px;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.content-top {\r\n    width: 90%;\r\n     margin: 30px auto 30px;\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 2em;\r\n}\r\n.content-top {\r\n    padding: 40px 40px 20px;\r\n}\r\n\r\n@media (max-width: 667px) {\r\n.content-top {\r\n    width: 90%;\r\n    margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 92%;\r\n}\r\n\r\n}\r\n@media (max-width: 640px) {\r\nh1.header-w3ls {\r\n    font-size: 30px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 600px) {\r\np.copyright {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 568px) {\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     \r\n\t\r\n}\r\n}\r\n.header_class {\r\n    background-color:#7ad17a;\r\n    padding-top:10px;\r\n    padding-bottom:10px;\r\n    color:white;\r\n    }\r\n    \r\n    #footer {\r\n        background-color:#003300;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        height: 4rem; \r\n        color:white;              /* Footer height */\r\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-company/add-company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n  <div class=\"col-md-12\" style=\" background-color:#7ad17a;\">\n    <div class=\"col-md-2\"></div>\n<div class=\" col-md-8 header-div\" style=\" margin: auto;text-align:center;\">\n<h1 class=\"header-w3ls header_class\" style=\"padding-top:0px;\">Add Company</h1>\n\n</div>\n<div class=\"col-md-1\">\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"back()\" style=\"float:right;border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Back</button>\n</div>\n<div class=\"col-md-1\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"logOut()\" style=\"border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</button>\n</div>\n</div>\n</div>\n<div class=\"row\" style=\"margin-top:20px;margin-left:0px;margin-right:0px;\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n          <form id=\"addCompany\" class=\"form-horizontal\">\n            <div class=\"panel-body\">\n              \n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\">Company Name</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyName\" name=\"name\" placeholder = \"Company Name\">\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\">Compnany Code</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyCode\" name=\"name\" placeholder=\"Company Code\">\n                    </div>\n                </div>\n                \n                \n                <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">Phone Number</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phoneNumber\"\n                    name=\"mobileNumber\" placeholder=\"Phone Number\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">Mail Id</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"compnayMailId\"\n                    name=\"mailId\" placeholder=\"mailId\">\n                </div>\n              </div>\n    \n              <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">Address</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyAddress\"\n                    name=\"companyAddress\" placeholder=\"Company Address\">\n                </div>\n              </div>\n              \n              \n                \n              </div>\n            \n            \n            <div class=\"panel-footer\" style=\"background-color:#349834;\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\" style=\"text-align:center;\">\n                  <div class=\"\">\n                      <button type=\"button\" (click)=\"addCompany()\" class=\"btn btn-default\" id=\"addButton\">Add</button>\n                      \n                  </div>\n                </div>\n                <div class=\"col-md-4\"></div>\n              </div>\n                \n              </div>\n            </div>\n            \n          </form>\n        </div>\n        <div class=\"col-md-3\"></div>\n        </div>\n        \n      \n"

/***/ }),

/***/ "../../../../../src/app/add-company/add-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCompanyComponent = (function () {
    function AddCompanyComponent(serverService, router, datePipe) {
        this.serverService = serverService;
        this.router = router;
        this.datePipe = datePipe;
        this.companyList = {};
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.currentDate = this.datePipe.transform(date, "yyyy-MM-dd h:mm:ss");
    };
    AddCompanyComponent.prototype.addCompany = function () {
        if (this.companyName && this.companyCode && this.companyAddress) {
            this.companyList.company_name = this.companyName;
            this.companyList.company_code = this.companyCode;
            this.companyList.company_address = this.companyAddress;
            this.companyList.company_info_id = 0;
            this.companyList.created_at = this.currentDate;
            this.serverService.addCompany(this.companyList)
                .subscribe(function (response) {
                alert("Added company successfully");
                window.location.reload();
                //this.router.navigate(['admin/list_company']);
            }, function (error) { return console.log(error); });
        }
        else {
            alert("Please fill in all fields");
        }
    };
    AddCompanyComponent.prototype.logOut = function () {
        this.router.navigate(['/admin']);
    };
    AddCompanyComponent.prototype.back = function () {
        this.router.navigate(['admin/list_company']);
    };
    return AddCompanyComponent;
}());
AddCompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-company',
        template: __webpack_require__("../../../../../src/app/add-company/add-company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-company/add-company.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _c || Object])
], AddCompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=add-company.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n<div class=\"col-md-12\" style=\"text-align:center;background-color:black;color:white;\">\n  \n <h3 class=\"panel-heading\" >\n <b>DEPARTMENT OF CLINICAL PSYCHOLOGY</b><br>\n <b>NATIONAL INSTITUTE OF MENTAL HEALTH AND NEUROSCIENCES</b>\n</h3>\n\n</div>\n</div>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_compony_list_compony_component__ = __webpack_require__("../../../../../src/app/list-compony/list-compony.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_company_add_company_component__ = __webpack_require__("../../../../../src/app/add-company/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_company_edit_company_component__ = __webpack_require__("../../../../../src/app/edit-company/edit-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_data_user_data_component__ = __webpack_require__("../../../../../src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__screener_page1_screener_page1_component__ = __webpack_require__("../../../../../src/app/screener-page1/screener-page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__screener_page2_screener_page2_component__ = __webpack_require__("../../../../../src/app/screener-page2/screener-page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_15__user_login_user_login_component__["a" /* UserLoginComponent */]
    },
    {
        path: 'admin/list_company',
        component: __WEBPACK_IMPORTED_MODULE_9__list_compony_list_compony_component__["a" /* ListComponyComponent */]
    },
    {
        path: 'admin/add_company',
        component: __WEBPACK_IMPORTED_MODULE_10__add_company_add_company_component__["a" /* AddCompanyComponent */]
    },
    {
        path: 'admin/edit_company',
        component: __WEBPACK_IMPORTED_MODULE_11__edit_company_edit_company_component__["a" /* EditCompanyComponent */]
    },
    {
        path: 'admin/user_data',
        component: __WEBPACK_IMPORTED_MODULE_12__user_data_user_data_component__["a" /* UserDataComponent */]
    },
    {
        path: 'screener_page1',
        component: __WEBPACK_IMPORTED_MODULE_13__screener_page1_screener_page1_component__["a" /* ScreenerPage1Component */]
    },
    {
        path: 'screener_page2',
        component: __WEBPACK_IMPORTED_MODULE_14__screener_page2_screener_page2_component__["a" /* ScreenerPage2Component */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__["a" /* LoginPageComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__list_compony_list_compony_component__["a" /* ListComponyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_company_add_company_component__["a" /* AddCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__edit_company_edit_company_component__["a" /* EditCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_data_user_data_component__["a" /* UserDataComponent */],
            __WEBPACK_IMPORTED_MODULE_13__screener_page1_screener_page1_component__["a" /* ScreenerPage1Component */],
            __WEBPACK_IMPORTED_MODULE_14__screener_page2_screener_page2_component__["a" /* ScreenerPage2Component */],
            __WEBPACK_IMPORTED_MODULE_15__user_login_user_login_component__["a" /* UserLoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["d" /* DatePipe */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/edit-company/edit-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top{\r\n    margin-top:40px;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.content-top {\r\n    width: 90%;\r\n     margin: 30px auto 30px;\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 2em;\r\n}\r\n.content-top {\r\n    padding: 40px 40px 20px;\r\n}\r\n\r\n@media (max-width: 667px) {\r\n.content-top {\r\n    width: 90%;\r\n    margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 92%;\r\n}\r\n\r\n}\r\n@media (max-width: 640px) {\r\nh1.header-w3ls {\r\n    font-size: 30px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 600px) {\r\np.copyright {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 568px) {\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     \r\n\t\r\n}\r\n}\r\n.header_class {\r\n    background-color:#7ad17a;\r\n    padding-top:10px;\r\n    padding-bottom:10px;\r\n    color:white;\r\n    }\r\n    \r\n    #footer {\r\n        background-color:#003300;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        height: 4rem;        \r\n        color:white;       /* Footer height */\r\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-company/edit-company.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n        <div class=\"col-md-12\" style=\" background-color:#7ad17a;\">\n          <div class=\"col-md-2\"></div>\n      <div class=\" col-md-8 header-div\" style=\" margin: auto;text-align:center;\">\n      <h1 class=\"header-w3ls header_class\" style=\"padding-top:0px;\">Edit Company</h1>\n      \n      </div>\n      <div class=\"col-md-1\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"back()\" style=\"float:right;border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Back</button>\n        \n      </div>\n      <div class=\"col-md-1\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"logOut()\" style=\"border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</button>\n      </div>\n      </div>\n      </div>\n      <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n          <form id=\"editCompany\" class=\"form-horizontal\">\n            <div class=\"panel-body\">\n              \n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\">Company Name</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyName\" name=\"name\"  placeholder = \"Company Name\">\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label class=\"col-sm-3 control-label\">Compnany Code</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyCode\" name=\"code\" placeholder=\"Company Code\">\n                    </div>\n                </div>\n                \n                \n                <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">Phone Number</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phoneNumber\"\n                    name=\"mobileNumber\" placeholder=\"Phone Number\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">Mail Id</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"compnayMailId\"\n                    name=\"mailId\" placeholder=\"mailId\">\n                </div>\n              </div>\n    \n              <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">Address</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyAddress\"\n                    name=\"companyAddress\" placeholder=\"Company Address\">\n                </div>\n              </div>\n              \n              \n                \n              </div>\n            \n            \n            <div class=\"panel-footer\" style=\"background-color:#349834;\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\" style=\"text-align:center;\">\n                 \n                      <button type=\"button\" (click)=\"editCompany(company_info_id)\" class=\"btn btn-default\" id=\"addButton\">Edit</button>\n                      \n                  \n                </div>\n                <div class=\"col-md-4\"></div>\n              </div>\n                \n              </div>\n            </div>\n            \n          </form>\n          </div>\n          <div class=\"col-md-3\"></div>\n        </div>\n      \n        \n    \n"

/***/ }),

/***/ "../../../../../src/app/edit-company/edit-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCompanyComponent = (function () {
    //companyCode = sessionStorage.getItem("companyCode");
    //companyAddress = sessionStorage.getItem("companyAddress");
    function EditCompanyComponent(serverService, router, datePipe) {
        this.serverService = serverService;
        this.router = router;
        this.datePipe = datePipe;
        //company_id;
        this.companyList = {};
        this.company_id = sessionStorage.getItem("companyId");
    }
    EditCompanyComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.currentDate = this.datePipe.transform(date, "yyyy-MM-dd h:mm:ss");
        this.getSelectedCompanyinfo();
    };
    EditCompanyComponent.prototype.getSelectedCompanyinfo = function () {
        var _this = this;
        this.serverService.getSelectedCompanyInfo(this.company_id)
            .subscribe(function (companyList) {
            _this.companyList = companyList;
            _this.companyName = _this.companyList[0][3];
            _this.companyCode = _this.companyList[0][2];
            _this.companyAddress = _this.companyList[0][1];
            _this.phoneNumber = "08076541187";
            _this.compnayMailId = "company.gmail.com";
            _this.company_info_id = _this.companyList[0][0];
            //this.router.navigate(['admin/edit_company']); 
        }, function (error) { return console.log(error); });
    };
    EditCompanyComponent.prototype.editCompany = function (company_id) {
        if (this.companyName && this.companyCode && this.companyAddress) {
            this.companyList.company_name = this.companyName;
            this.companyList.company_code = this.companyCode;
            this.companyList.company_address = this.companyAddress;
            this.companyList.company_info_id = 0;
            this.companyList.created_at = this.currentDate;
            console.log(this.companyList.created_at);
            this.serverService.editCompany(this.companyList)
                .subscribe(function (response) {
                alert("Updated company successfully");
                //window.location.reload();
            }, function (error) { return console.log(error); });
        }
        else {
            alert("Please fill in all fields");
        }
    };
    EditCompanyComponent.prototype.logout = function () {
        this.router.navigate(['/admin']);
    };
    EditCompanyComponent.prototype.back = function () {
        this.router.navigate(['admin/list_company']);
    };
    return EditCompanyComponent;
}());
EditCompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-company',
        template: __webpack_require__("../../../../../src/app/edit-company/edit-company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-company/edit-company.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _c || Object])
], EditCompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-company.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-compony/list-compony.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\t\r\n\t.wsas_class{\r\n\t\r\n        border:1px solid black;\r\n        padding-top:25px;\r\n        padding-bottom:25px;\r\n        \r\n        }\r\n        \r\n        .center_align {\r\n        text-align:center;\r\n        }\r\n        \r\n        \r\n        .header_class {\r\n        background-color:#7ad17a;\r\n        }\r\n        \r\n        html{\r\n        background-color:#349834;\r\n        }\r\n        \r\n    \r\n        h2{\r\n            padding:10px;\r\n            \r\n        }\r\n        th,td{\r\n            \r\n            padding:10px;\r\n            text-align:center;\r\n            border:2px solid black;\r\n        }\r\n\r\n        #footer {\r\n            background-color:#003300;\r\n            position: absolute;\r\n            bottom: 0px;\r\n            width: 100%;\r\n            height: 4rem;    \r\n            color:white;          /* Footer height */\r\n          }\r\n\r\n        ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-compony/list-compony.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n     <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n      <div class=\"col-md-12\" style=\" background-color:#7ad17a;\">\n        <div class=\"col-md-2\">\n          <!-- <button type=\"button\" class=\"btn btn-basic\" style=\"border-radius: 10%;margin-top:15px;\" (click)=\"responseData()\">Responses</button> -->\n      </div>\n    <div class=\" col-md-8 header-div\" style=\" margin: auto;text-align:center;\">\n    <h1 class=\"header-w3ls header_class\" >List of Companies</h1>\n    \n    </div>\n    \n    <div class=\"col-md-1\">\n      <button type=\"button\" class=\"btn btn-warning\" style=\"border-radius: 10%;margin-top:15px;\" (click)=\"add()\"><i class=\"glyphicon glyphicon-plus\">Company</i></button>\n    </div>\n    <div class=\"col-md-1\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout()\" style=\"border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</button>\n    </div>\n  </div>\n</div>\n<div class=\"row\" style=\"margin-top:20px;margin-left:0px;margin-right:0px;\">\n \n\n\n\n  <table style=\" margin: 0 auto;border:2px solid white;background-color:white;\">\n    <thead>\n      \n      <th width=\"20%\">Sl.No</th>\n      <th width=\"20%\">Company name</th>\n      <th width=\"20%\">Company code</th>\n      <th width=\"20%\">Address</th>\n      <th width=\"20%\"></th>\n\n    </thead>\n    <tbody>\n      <!-- display the company list -->\n      <tr *ngFor=\"let test of companylist ; let i = index\">\n\t\t\t\t<td><a [routerLink]=\"\" (click)=\"displayUsers(test.company_info_id)\">{{test.company_info_id}}</a></td>\n\t\t\t\t<td>{{test.company_name}} </td>\n\t\t\t\t<td>{{test.company_code}} </td>\n        <td>{{test.company_address}}</td>\n        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"edit(test.company_info_id)\">Edit</button></td>\n\t\t\t\t\n\t\t\t</tr>\n    </tbody>\n  </table>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/list-compony/list-compony.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponyComponent = (function () {
    function ListComponyComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.companylist = [];
    }
    ListComponyComponent.prototype.ngOnInit = function () {
        this.getCompanyInfo();
    };
    ListComponyComponent.prototype.getCompanyInfo = function () {
        var _this = this;
        this.serverService.getCompanyInfo()
            .subscribe(function (companyList) {
            _this.companylist = companyList;
            console.log(typeof _this.companylist);
        }, function (error) { return console.log(error); });
    };
    ListComponyComponent.prototype.add = function () {
        this.router.navigate(['admin/add_company']);
    };
    ListComponyComponent.prototype.edit = function (company_id) {
        sessionStorage.setItem("companyId", company_id);
        this.router.navigate(['admin/edit_company']);
    };
    ListComponyComponent.prototype.logout = function () {
        this.router.navigate(['/admin']);
    };
    ListComponyComponent.prototype.displayUsers = function (id) {
        sessionStorage.setItem("companyId", id);
        this.router.navigate(['admin/user_data']);
    };
    ListComponyComponent.prototype.responseData = function () {
        this.router.navigate(['admin/user_data']);
    };
    return ListComponyComponent;
}());
ListComponyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list-compony',
        template: __webpack_require__("../../../../../src/app/list-compony/list-compony.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-compony/list-compony.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ListComponyComponent);

var _a, _b;
//# sourceMappingURL=list-compony.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top{\r\n    margin-top:40px;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.content-top {\r\n    width: 90%;\r\n     margin: 30px auto 30px;\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 2em;\r\n}\r\n.content-top {\r\n    padding: 40px 40px 20px;\r\n}\r\n\r\n@media (max-width: 667px) {\r\n.content-top {\r\n    width: 90%;\r\n    margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 92%;\r\n}\r\n\r\n}\r\n@media (max-width: 640px) {\r\nh1.header-w3ls {\r\n    font-size: 30px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 600px) {\r\np.copyright {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 568px) {\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     \r\n\t\r\n}\r\n}\r\n.header_class {\r\n    background-color:#7ad17a;\r\n    padding-top:10px;\r\n    padding-bottom:10px;\r\n    color:white;\r\n    }\r\n    #footer {\r\n        background-color:#003300;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        height: 4rem;   \r\n        color:white;            /* Footer height */\r\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-container\">\n<div class=\"row\" style=\"margin-left:0px; margin-right:0px;\">\n\n  <div class=\"col-md-12\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n    <div class=\"content-top\">\n\n\n    \n    <div class=\"header-div\" style=\"text-align:center;background-color:#349834;width:100%;margin-left:auto;margin-right:auto;margin-bottom:30px;\">\n   \n    \n    </div>\n      <form id=\"adminLogin\" class=\"form-horizontal\">\n        <div class=\"panel-body\">\n          \n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">User Name</label>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" id=\"userName\" name=\"username\" placeholder = \"User Name\">\n              </div>\n              <div class=\"col-md-4\"></div>\n          </div>\n          \n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Password</label>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pwd\" id=\"pwd\" name=\"password\" placeholder=\"Password\">\n              </div>\n              <div class=\"col-md-4\"></div>\n          </div>\n          \n          \n            \n          </div>\n        \n        \n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\" style=\"text-align:center;\">\n              <div class=\"\">\n                  <button type=\"button\" (click)=\"login()\" class=\"btn btn-success\" id=\"loginButton\">Login</button>\n                  \n              </div>\n            </div>\n            <div class=\"col-md-4\"></div>\n          </div>\n            \n          </div>\n        </div>\n\n        \n        \n      </form>\n    </div>\n  </div>\n</div>\n  </div>\n</div>\n<div class=\"footer\" id=\"footer\">\n            \n  <div class=\"container text-center wow fadeIn\" data-wow-delay=\"0.4s\">\n    <p class=\"copyright\">Copyright &copy; 2019 - NIMHANS</p>\n  </div>\n\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        if (this.userName && this.pwd) {
            this.serverService.loginAdmin(this.userName, this.pwd)
                .subscribe(function (response) {
                if (response > 0) {
                    _this.router.navigate(['admin/list_company']);
                }
                else {
                    alert("Please enter the User name and password");
                }
            }, function (error) { return console.log(error); });
        }
        else {
            alert("Invalid username and password");
        }
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/screener-page1/screener-page1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ntable {\r\n\tborder-collapse:collapse;\r\n\tborder-spacing:0;\r\n}\r\n\r\n/* start editing from here */\r\na {\r\n\ttext-decoration:none;\r\n}\r\n.txt-rt {\r\n\ttext-align:right;\r\n}/* text align right */\r\n.txt-lt {\r\n\ttext-align:left;\r\n}/* text align left */\r\n.txt-center {\r\n\ttext-align:center;\r\n/*-- W3Layouts --*/\t\r\n}/* text align center */\r\n.float-rt {\r\n\tfloat:right;\r\n}/* float right */\r\n.float-lt {\r\n\tfloat:left;\r\n}/* float left */\r\n.clear {\r\n\tclear:both;\r\n}/* clear float */\r\n.pos-relative {\r\n\tposition:relative;\r\n}/* Position Relative */\r\n.pos-absolute {\r\n\tposition:absolute;\r\n}/* Position Absolute */\r\n.vertical-base {\t\r\n\tvertical-align:baseline;\r\n}/* vertical align baseline */\r\n.vertical-top {\t\r\n\tvertical-align:top;\r\n}/* vertical align top */\r\nnav.vertical ul li {\t\r\n\tdisplay:block;\r\n}/* vertical menu */\r\nnav.horizontal ul li {\t\r\n\tdisplay: inline-block;\r\n}/* horizontal menu */\r\nimg {\r\n\tmax-width:100%;\r\n}\r\n\r\n/*--- end reset code ---*/\r\nbody {\r\n\t font-family: 'Open Sans', sans-serif;\r\n\t\r\n}\r\n.center-container {\r\n    padding: 1.35em 0;\r\n   /*  background: #9e6d6f; \r\n   background-color:#FFFDB9;\r\n    background-color:#F0F3FA;*/\r\n     background-color:#349834\r\n\t \r\n}\r\nh1.header-w3ls {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    font-weight: normal;\r\n    padding-top: 35px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    letter-spacing: 3px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\nh2 {\r\n    font-size: 30px;\r\n    color: #FFF;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np {\r\n    font-size: 16px;\r\n    color: #c3c3c3;\r\n    margin: 20px 0 30px;\r\n}\r\n.content-top{\r\n    \r\n   \r\n}\r\n.content-wthree1,.content-wthree2,.content-wthree3,.content-wthree4 {\r\n\twidth:100%;\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\n.form-control {\r\n    padding-bottom: 0px;\r\n}\r\n.form-control:nth-child(6) {\r\n\tpadding-bottom:0;\r\n}\r\nlabel.header {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    text-align: justify;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n\tfloat: left;\r\n    margin-bottom: 12px;\r\n\twidth:100%;\r\n\t\r\n}ul.w3-size li {\r\n    display: inline-block;\r\n    text-align: center;\r\n\tfloat:left;\r\n\twidth: 13%;\r\n\tbackground-color: rgba(0, 0, 0, 0.38);\r\n\tmargin-right:10px;\r\n}\r\nul.w3-size li a {\r\n    display:block;\r\n    padding: 14px 0;\r\n\tcolor:#fff;\r\n\t\r\n}\r\nul.w3-size li.blue{\r\n\tbackground:#00abff;\r\n\theight:50px;\r\n}\r\nul.w3-size li.red{\r\n\tbackground:#FF0000;\r\n\theight:50px;\r\n}\r\nul.w3-size li.green{\r\n\tbackground:#008000;\r\n\theight:50px;\r\n}\r\nul.w3-size li.yellow{\r\n\tbackground:#ffff00;\r\n\theight:50px;\r\n}\r\nul.w3-size li.white{\r\n\tbackground:#fff;\r\n\theight:50px;\r\n}\r\ninput#name, input#email, input#orgn, textarea#message {\r\n    border: none;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color:rgba(0, 0, 0, 0.38);\r\n\t    margin-bottom: 16px;\r\n  \r\n}\r\ninput#name,input#email,input#orgn {\r\n\theight:40px;\r\n\tpadding:0 15px;\r\n\twidth:92.2%;\r\n}\r\nselect {\r\n\tborder: 1px solid #fff;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color: rgba(82, 56, 76, 0.15);\r\n\theight:40px;\r\n\tpadding:0 15px;\r\n\twidth:56%;\r\n\t\r\n}\r\nselect option {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\nselect.dropdown, input#datepicker, input#datepicker1, input#datepicker2 {\r\n   border: none;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n\theight: 40px;\r\n    padding: 0 15px;\r\n    width: 92.2%;\r\n\t    margin-bottom: 16px;\r\n}\r\nselect, .tickets input[type=\"number\"] {\r\n   border: none;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n\theight: 40px;\r\n    padding: 0 15px;\r\n    width: 92.2%;\r\n\t    margin-bottom: 16px;\r\n}\r\n\r\nlabel.rating {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    text-align: justify;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 10px;\r\n\tposition:relative;\r\n\t\r\n}\r\n.content-wthree3 {\r\n\tmargin-top:70px;\r\n}\r\n.form-w3ls {\r\n    float: left;\r\n    width: 45%;\r\n    margin-right: 5%;\r\n}\r\n.form-w3ls-1 {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n.wthreesubmitaits input[type=\"submit\"] {\r\n    padding: 10px 30px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    border: none;\r\n    outline: none;\r\n    background: #00c848;\r\n\tletter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n.wthreesubmitaits input[type=\"submit\"]:hover{\r\n    background: #219049;\r\n}\r\n.wthreesubmitaits {\r\n    margin-bottom: 15px;\r\n}\r\n.content-wthree2 {\r\n    margin-top: 0px;\r\n}\r\n/*-- radio button --*/\r\nspan {\r\n    color: black;\r\n}\r\n.grid-w3layouts1 ul li,.grid-w3layouts2 ul li{\r\n\tcolor: #fff;\r\n    display: block;\r\n    position: relative;\r\n    height: 25px;\r\n}\r\nul li input[type=radio]{\r\n\tposition: absolute;\r\n\tvisibility: hidden;\r\n}\r\nul li label{\r\n    display: block;\r\n    position: relative;\r\n    font-weight: 300;\r\n    text-transform: capitalize;\r\n    font-size: 16px;\r\n    padding: 14px 0px 0px 50px;\r\n    margin:10px auto;\r\n    height: 30px;\r\n    z-index: 9;\r\n    cursor: pointer;\r\n    -webkit-transition: all 0.25s linear;\r\n}\r\nul li:hover label{\r\n\tcolor: #FFFFFF;\r\n}\r\nul li .check{\r\n\tdisplay: block;\r\n    position: absolute;\r\n    border: 2px solid #fff;\r\n    border-radius: 100%;\r\n    height: 12px;\r\n    width: 12px;\r\n    top: 13px;\r\n    left: 20px;\r\n    z-index: 5;\r\n    transition: border .25s linear;\r\n    -webkit-transition: border .25s linear;\r\n}\r\nul li:hover .check {\r\n\tborder: 2px solid #FFFFFF;\r\n}\r\nul li .check::before {\r\n\tdisplay: block;\r\n    position: absolute;\r\n    content: '';\r\n    border-radius: 100%;\r\n    height: 8px;\r\n    width: 8px;\r\n    top: 2px;\r\n    left: 2px;\r\n    margin: auto;\r\n    transition: background 0.25s linear;\r\n    -webkit-transition: background 0.25s linear;\r\n}\r\ninput[type=radio]:checked ~ .check {\r\n\tborder: 2px solid #00c848;\r\n}\r\ninput[type=radio]:checked ~ .check::before{\r\n\tbackground: #00c848;\r\n}\r\ninput[type=radio]:checked ~ label{\r\n\tcolor: black;\r\n}\r\n/*-- /radio button --*/\r\nlabel.enquiry {\r\n\tfont-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    float: left;\r\n    text-align: justify;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 12px;\r\n\t\r\n}\r\n\r\ntextarea#message {\r\n\theight:150px;\r\n\tpadding:15px;\r\n\twidth:95.2%;\r\n\t\r\n}\r\ninput::-webkit-input-placeholder {\r\ncolor:#fff!important;\r\n}\r\n \r\ninput:-moz-placeholder { /* Firefox 18- */\r\ncolor:#fff!important;  \r\n}\r\n \r\ninput::-moz-placeholder {  /* Firefox 19+ */\r\ncolor:#fff!important;  \r\n}\r\n \r\ninput:-ms-input-placeholder {  \r\ncolor:#fff!important;  \r\n}\r\ntextarea::-webkit-input-placeholder {\r\ncolor:#fff!important;\r\n}\r\n \r\ntextarea::-moz-placeholder { /* Firefox 18- */\r\ncolor:#fff!important;  \r\n}\r\n \r\ntextarea::-moz-placeholder {  /* Firefox 19+ */\r\ncolor:#fff!important;  \r\n}\r\n \r\ntextarea::-ms-input-placeholder {  \r\ncolor:#fff!important;  \r\n}\r\n.register {\r\n\tbackground-color: #0a6ad0;\r\n    width:20%;\r\n\tmargin-right:10px;\r\n\tmargin-left:0px;\r\n\tfloat:left;\r\n    height: 50px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n\tletter-spacing:1px;\r\n    outline: none;\r\n    font-size:17px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -o-transition: all 0.5s ease-in-out;\r\n\t\r\n}\t\r\n.register:hover {\r\n\tbackground-color:#00c848;\r\n\tcolor:#fff;\r\n}\r\n.reset {\r\n\tbackground-color:#00c848;\r\n    width:20%;\r\n\tfloat:left;\r\n    height: 50px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n\tletter-spacing:1px;\r\n    outline: none;\r\n    font-size:17px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -o-transition: all 0.5s ease-in-out;\r\n\t\r\n}\t\r\n.reset:hover {\r\n\tbackground-color:#0a6ad0;\r\n\tcolor:#fff;\r\n}\r\n.content-wthree4 .form-control {\r\n\tpadding-bottom:0;\r\n}\r\np.copyright {\r\n    font-size: 16px;\r\n\tline-height:30px;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding-bottom: 0px;\r\n\t\r\n}\r\np.copyright a {\r\n\tcolor:#00c848;\r\n}\r\np.copyright a:hover {\r\n\tcolor:#fff;\r\n}\r\n\r\n/*-- responsive design --*/\r\n@media (max-width:1440px) {\r\n\tinput#name, input#email, input#orgn,select, .tickets input[type=\"number\"] {\r\n    width: 91%;\r\n}\r\n}\r\n@media (max-width: 1366px) {\r\n.content-top {\r\n    width: 65%;\r\n     margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 65%;\r\n     margin: 30px auto 30px;\r\n   \r\n    padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 1280px) {\r\n.content-top {\r\n   width: 60%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 60%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width:1080px) {\r\n.content-top {\r\n   width: 70%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 70%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 1024px) {\r\n.content-top {\r\n   width: 73%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 73%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 991px) {\r\n.content-top {\r\n   width: 90%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\nh1.header-w3ls {\r\n    font-size: 45px;\r\n}\r\n}\r\n@media (max-width: 900px) {\r\n}\r\n@media (max-width: 800px) {\r\ninput#name, input#email, input#orgn,select, .tickets input[type=\"number\"] {\r\n    width: 91%;\r\n}\r\nh1.header-w3ls {\r\n    font-size: 40px;\r\n}\r\nlabel.rating {\r\n    font-size: 16px;\r\n}\r\nlabel.header {\r\n    font-size: 17px;\r\n}\r\n}\r\n@media (max-width: 768px) {\r\nh1.header-w3ls {\r\n    font-size: 36px;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 88%;\r\n}\r\n\r\n}\r\n@media (max-width: 736px) {\r\n.form-w3ls {\r\n    float: none;\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    margin-bottom: 0em;\r\n}\r\n.form-w3ls-1 {\r\n    float: none;\r\n    width: 100%;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 2em;\r\n}\r\n.content-top {\r\n    padding: 40px 40px 20px;\r\n}\r\n}\r\n@media (max-width: 667px) {\r\n.content-top {\r\n    width: 90%;\r\n    margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 92%;\r\n}\r\n\r\n}\r\n@media (max-width: 640px) {\r\nh1.header-w3ls {\r\n    font-size: 30px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 600px) {\r\np.copyright {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 568px) {\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     \r\n\t\r\n}\r\n}\r\n@media (max-width: 480px) {\r\nh1.header-w3ls {\r\n    font-size: 26px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1 {\r\n    width: 90%;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 90.5%;\r\n}\r\n}\r\n@media (max-width: 414px) {\r\nh1.header-w3ls {\r\n    font-size: 24px;\r\n}\r\nlabel.rating {\r\n    font-size: 15px;\r\n}\r\n.content-top {\r\n    width: 100%;\r\n    \r\n}\r\n.content-top1 {\r\n    width: 100%;\r\n}\r\nul.w3-size li {\r\n    width: 15%;\r\n}\r\n}\r\n@media (max-width: 384px) {\r\n\t.content-top {\r\n    width: 100%;\r\n    \r\n}\r\n.content-top1 {\r\n    width: 90%;\r\n    margin: 1px auto 1px;\r\n    padding: 10px 10px 5px;\r\n}\r\nh1.header-w3ls {\r\n    font-size: 22px;\r\n}\r\np.copyright {\r\n\t\r\n    padding: 0 10px;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 89.5%;\r\n}\r\n}\r\n@media (max-width: 375px) {\r\n\t.content-top {\r\n    width: 100%;\r\n}\r\n.content-top1 {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 320px) {\r\n\t.content-top {\r\n    width: 100%;\r\n}\r\n\th1.header-w3ls {\r\n    font-size: 20px;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 87.5%;\r\n}\r\n.form-control {\r\n    padding-bottom: 12px;\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 3em;\r\n}\r\nul li label {\r\n    font-size: 14px;\r\n    padding: 10px 0px 0px 40px;\r\n}\r\nul li .check {\r\n    top: 12px;\r\n    left: 13px;\r\n}\r\n}\r\n\r\nhtml {\r\n\t/*background-color: #9e6d6f;*/\r\n\tbackground-color:#FFF59D;\r\n}\r\n\r\n.label.header {\r\n\tfont-size: 25px;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.grid-w3layouts1 ul li, .grid-w3layouts2 ul li {\r\n\tcolor: #000;\r\n}\r\n\r\nlabel.rating, label.header {\r\n\tcolor: #000;\r\n\ttext-transform: none;\r\n\tfont-weight: bold;\r\n}\r\n\r\nul li label {\r\n\tpadding: 12px 0px 0px 50px;\r\n}\r\n\r\nul li .check {\r\n\tborder: 3px solid #000;\r\n}\r\n\r\n.content-top {\r\n\t/* background-color: #FFE0B2; */\r\n\tbackground-color:#ffffff;\r\n}\r\n\r\n.placeholdercss::-webkit-input-placeholder {\r\n\tcolor: black !important;\r\n}\r\n\r\ninput#name, input#email, input#orgn, textarea#message {\r\n\tbackground-color: #FFFDB9 !important;\r\n\tcolor: black !important;\r\n}\r\n\r\nul li label {\r\n\ttext-transform: none;\r\n}\r\n\r\n.input {\r\n\t/* background-color: #FFFDB9 !important; */\r\n\tbackground-color:#FAFBFD;;\r\n\tcolor: black !important;\r\n}\r\n\r\n.blink {\r\n\tanimation: blink .75s linear infinite;\r\n}\r\n@keyframes blink {\r\n\t0% { opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t50.01% { opacity: 0; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n\r\n.radio {\r\n\tmargin: 0.5rem;\r\n}\r\n\r\n.radio input[type=\"radio\"] {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n}\r\n\r\n.radio input[type=\"radio\"]+.radio-label:before {\r\n\tcontent: '';\r\n\tbackground: #f4f4f4;\r\n\tborder-radius: 100%;\r\n\tborder: 1px solid #b4b4b4;\r\n\tdisplay: inline-block;\r\n\twidth: 1.4em;\r\n\theight: 1.4em;\r\n\tposition: relative;\r\n\ttop: -0.2em;\r\n\tmargin-right: 1em;\r\n\tvertical-align: top;\r\n\tcursor: pointer;\r\n\ttext-align: center;\r\n\ttransition: all 250ms ease;\r\n}\r\n\r\n.radio input[type=\"radio\"]:checked+.radio-label:before {\r\n\tbackground-color: #3197EE;\r\n\tbox-shadow: inset 0 0 0 4px #f4f4f4;\r\n}\r\n\r\n.radio input[type=\"radio\"]:focus+.radio-label:before {\r\n\toutline: none;\r\n\tborder-color: #3197EE;\r\n}\r\n\r\n.radio input[type=\"radio\"]:disabled+.radio-label:before {\r\n\tbox-shadow: inset 0 0 0 4px #f4f4f4;\r\n\tborder-color: #b4b4b4;\r\n\tbackground: #b4b4b4;\r\n}\r\n\r\n.radio input[type=\"radio\"]+.radio-label:empty:before {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.radio-pad {\r\n\tpadding-top: 2%;\r\n}\r\n\r\n.label-css {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.terms-modal-dialog {\r\n\toverflow-y: initial !important\r\n}\r\n\r\n.terms-modal-body {\r\n\theight: 400px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.modal-header, h4, .close {\r\n\tbackground-color: #5cb85c;\r\n\tcolor: white !important;\r\n\ttext-align: center;\r\n\tfont-size: 30px;\r\n}\r\n\r\np {\r\n\tfont-size: 14px;\r\n\tcolor: black;\r\n\tmargin: 0px 0 0px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n\tmargin-top: 10px;\r\n}\r\n.fa-2x {\r\n    font-size: 26px;\r\n   }\r\n   \r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #4cae4c;\r\n    font-weight: bold;\r\n    }\r\ninput[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.termli {\r\n\tpadding-left: 36px;\r\n\tlist-style:circle;\r\n\tfont-size: 15px;\r\n}\r\n.liststyle{\r\nlist-style:square;\r\nfont-size: 15px;\r\n}\r\n\r\n\t#loading-bar-spinner {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 10002;\r\n    top: 389px;\r\n    left: 50%;\r\n   }\r\n   \r\n   .drop_down {\r\n    background-color:#F0F3FA;\r\n    color:black;\r\n    }\r\n    .drop_down:after {\r\n     width: 0; \r\n  height: 0; \r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-top: 6px solid #f00;\r\n  position: absolute;\r\n  top: 40%;\r\n  right: 5px;\r\n  content: \"\";\r\n  z-index: 98;\r\n    }\r\n    .option_class{\r\n     background-color:#F0F3FA;\r\n     color : black;\r\n     }\r\n     \r\n     /* for table in registration page*/\r\n     .form_table{\r\n\twidth: 650px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tborder-radius: 4px;\r\n\tborder: 0px solid #333333;\r\n\tbackground: #FFFFFF;\r\n\tbackground-size: cover;\r\n\tcolor: #575B66;\r\n\toverflow: hidden;\r\n\tbox-shadow: 0 1px 6px rgba(0,0,0,0.30);\r\n\tbackground-position: 50% 50%;\r\n}\r\n\r\n.form_table a{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.outside a{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.form_table a:visited{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.outside a:visited{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.segment_header{\r\n\twidth: auto;\r\n\tmargin: 1px;\r\n\tcolor: #FFFFFF;\r\n\tbackground: #4C6BB5;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: repeat;\r\n\tbackground-position: 50% 50%;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.segment_header h1{\r\n\tborder-radius: 4px;\r\n\tpadding: 20px 10px;\r\n\tfont-family: 'Muli',sans-serif;\r\n}\r\n\r\n\r\n\r\n.q .question{\r\n\tfont-weight: bold;\r\n}\r\n\r\n.q .left_question_first{\r\n\twidth: 15em;\r\n}\r\n\r\n.required .icon{\r\n\tbackground-image: none;\r\n\tbackground-position: left;\r\n\tbackground-repeat: no-repeat;\r\n\tfont-size: 13px;\r\n\tpadding-left: 14px;\r\n}\r\n\r\n.q .text_field{\r\n\tbackground: #FAFBFD;\r\n\tborder: 1px solid #D8E1F5;\r\n\tborder-radius: 2px;\r\n\tborder-width: 1px;\r\n\tcolor: #575B66;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 13px;\r\n\tmargin: 1px 0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.q .file_upload{\r\n\tbackground: #FAFBFD;\r\n\tborder: 1px solid #D8E1F5;\r\n\tborder-radius: 2px;\r\n\tborder-width: 1px;\r\n\tcolor: #575B66;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 13px;\r\n\tmargin-top: 1px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.q .file_upload_button{\r\n\tmargin-top: 2px;\r\n}\r\n\r\n.q .inline_grid td{\r\n\tpadding: 5px;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n.q .drop_down{\r\n\tbackground: #FAFBFD;\r\n\tborder: 1px solid #D8E1F5;\r\n\tborder-radius: 2px;\r\n\tborder-width: 1px;\r\n\tcolor: #575B66;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 13px;\r\n\tmargin: 1px 0;\r\n\tpadding: 9px;\r\n}\r\n\r\n.q .matrix1 th{\r\n\tcolor: #7280A1;\r\n\tbackground: #e6fff2;\r\n\t\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.q .matrix1 td{\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\tborder-bottom: 1px solid #D8E1F5;\r\n\tborder-top: 1px solid #D8E1F5;\r\n\t\r\n}\r\n\r\n.q .matrix1 td.question{\r\n\tborder-right: 1px solid #D8E1F5;\r\n\tfont-weight: normal;\r\n\ttext-align:left;\r\n\t\r\n}\r\n\r\n.q .matrix1 .multi_scale_sub th{\r\n\tfont-weight: normal;\r\n\tborder-top: 1px solid #D8E1F5 !important;\r\n\tbackground: #FAFBFD;\r\n}\r\n\r\n.q .matrix1 .multi_scale_break{\r\n\tborder-right: 1px solid #D8E1F5;\r\n}\r\n\r\n.q .matrix_row_dark td{\r\n\tcolor: #575B66;\r\n\tbackground: #FAFBFD;\r\n}\r\n\r\n.q .matrix_row_dark td.question{\r\n\tcolor: #575B66;\r\n\tbackground: #FAFBFD;\r\n}\r\n\r\n.q .matrix_row_light td{\r\n\tcolor: #575B66;\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\n.q .matrix_row_light td.question{\r\n\tcolor: #575B66;\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\n.q .rating_ranking td{\r\n\tpadding: 5px;\r\n}\r\n\r\n.q .scroller{\r\n\tborder: 1px solid #333333;\r\n}\r\n\r\n.highlight{\r\n\tbackground: #FFF9C4  !important;\r\n}\r\n\r\ntr.highlight td{\r\n\tbackground: #FFF9C4  !important;\r\n}\r\n\r\n.outside{\r\n\tcolor: #575B66;\r\n}\r\n\r\n.outside_container{\r\n\twidth: 100%;\r\n\tpadding: 1em 0;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tcolor: #575B66;\r\n}\r\n\r\n#button_class .submit_button{\r\n\tcolor: #FFFFFF !important;\r\n\t/*background: #4C6BB5;*/\r\n\tbackground-size: auto;\r\n\tborder-style: none;\r\n\tborder-width: 0px;\r\n\tborder-color: #FFFFFF;\r\n\tborder-radius: 30px;\r\n\ttext-align: center;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmin-width: 30%;\r\n\tpadding: 16px 20px;\r\n\ttext-transform: none;\r\n\tbox-shadow: 0 1px 6px rgba(0,0,0,0.30);\r\n}\r\n\r\n#button_class  .submit_button1{\r\n\tcolor: #FFFFFF !important;\r\n\tbackground: #FFB322;\r\n\tbackground-size: auto;\r\n\tborder-style: none;\r\n\tborder-width: 0px;\r\n\tborder-color: #FFFFFF;\r\n\tborder-radius: 30px;\r\n\ttext-align: center;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmin-width: 30%;\r\n\tpadding: 16px 20px;\r\n\ttext-transform: none;\r\n\tbox-shadow: 0 1px 6px rgba(0,0,0,0.30);\r\n}\r\n\r\n#button_class .submit_button:hover{\r\n\tbackground: #405C9E;\r\n\tborder-color: #BBBBBB;\r\n\tbackground-size: auto;\r\n}\r\n\r\n.progressBarWrapper{\r\n\tborder-radius: 4px;\r\n\tbackground: #FFFFFF;\r\n\tbackground-size: cover;\r\n\tborder-color: #333333;\r\n}\r\n\r\n.progressBarBack{\r\n\tcolor: #FFFFFF;\r\n\tbackground-color: #E8BC63;\r\n}\r\n\r\n.progressBarFront{\r\n\tcolor: #575B66;\r\n}\r\n\r\n.ui-widget{\r\n\tfont-family: 'Muli',sans-serif;\r\n}\r\n\r\n.invalid{\r\n\tbackground: #FDF1F0;\r\n}\r\n\r\n.invalid .invalid_message{\r\n\tcolor: #EC756B;\r\n\tbackground: #FDF1F0;\r\n\tborder: 1px solid #EC756B;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.form_table.invalid{\r\n\tborder: 2px solid #EC756B;\r\n}\r\n\r\n.invalid .matrix .invalid_row{\r\n\tbackground: #FDF1F0;\r\n}\r\n.home{\r\nposition : absolute;\r\n}\r\n@media only screen and (max-width: 800px) {\r\n    .home{\r\n    position : relative;\r\n    \r\n    }\r\n}\r\n\r\n.pagination {\r\n\tposition: relative;\r\n    left:50%;\r\n}\r\n\r\n.pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 4px 2px;\r\n    text-decoration: none;\r\n}\r\n\r\n.pagination a.active {\r\n    background-color: #5983c6;\r\n    color: white;\r\n}\r\n#footer {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem; \r\n\tcolor:white;             /* Footer height */\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screener-page1/screener-page1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"center-container\" style=\"padding-top:0px;\">\n    <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n        <div class=\"col-md-12\" style=\" background-color:#7ad17a;\">\n          <div class=\"col-md-2\"></div>\n      <div class=\" col-md-8 header-div\" style=\" margin: auto;text-align:center;\">\n      \n      </div>\n      <div class=\"col-md-1\">\n       \n      </div>\n      <div class=\"col-md-1\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"logOut()\" style=\"border-radius: 10%;margin-top:10px;margin-bottom:10px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</button>\n      </div>\n    </div>\n  </div>\n    <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n    \n      <div class=\"col-md-12\">\n        \n        \n        \n<div class=\"content-top\">\n      \n  \n    <div class=\"header-div\" style=\"background-color:white;width:100%;margin-left:auto;margin-right:auto;margin-bottom:30px;\">\n    <h4 class=\"header-w3ls header_class\">Initial evaluation<br>(Depressive Symptoms)</h4>\n    </div>\n    \n        \n        <div id=\"q4\" class=\"q required\">\n          <a class=\"item_anchor\" name=\"ItemAnchor4\"></a>\n          <span class=\"question top_question\">Instructions: Below is a list of statements dealing with your mood in the last 2 weeks. \n          Please read the items carefully and mark the option (&#10004;) that best describes you.&nbsp;<b class=\"icon_required\" style=\"color:#FF0000\">*</b></span>\n          <br>\n          <br>\n          \n          <table class=\"matrix1\">\n\n          <tr>\n            <th scope=\"col\">Over the last 2 weeks, how often have you\n              been bothered by any of the following problems?&nbsp;</th>\n            <th width=\"60px;\" scope=\"col\">Not at all</th>\n            <th width=\"60px;\" scope=\"col\">Several Days</th>\n            <th width=\"60px;\" scope=\"col\">More than half the days</th>\n            <th width=\"60px;\" scope=\"col\">Nearly every day</th>\n          </tr>\n          \n          <tr class=\"matrix_row_light\">\n            <td class=\"question\" style=\"width: px;\">1. Little interest\n              or pleasure in doing things.</td>\n            <td><label for=\"RESULT_RadioButton-4-0-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-0\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-0-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-0-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-0\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-0-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-0-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-0\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-0-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-0-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-0\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-0-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_dark\">\n            <td class=\"question\" style=\"width: px;\">2. Feeling down,\n              depressed, or hopeless</td>\n            <td><label for=\"RESULT_RadioButton-4-1-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-1\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-1-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-1-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-1\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-1-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-1-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-1\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-1-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-1-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-1\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-1-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_light\">\n            <td class=\"question\" style=\"width: px;\">3. Trouble falling\n              or staying asleep, or sleeping too much</td>\n            <td><label for=\"RESULT_RadioButton-4-2-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-2\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-2-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-2-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-2\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-2-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-2-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-2\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-2-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-2-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-2\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-2-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_dark\">\n            <td class=\"question\" style=\"width: px;\">4. Feeling tired or\n              having little energy</td>\n            <td><label for=\"RESULT_RadioButton-4-3-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-3\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-3-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-3-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-3\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-3-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-3-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-3\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-3-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-3-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-3\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-3-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_light\">\n            <td class=\"question\" style=\"width: px;\">5. Poor appetite or\n              overeating</td>\n            <td><label for=\"RESULT_RadioButton-4-4-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-4\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-4-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-4-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-4\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-4-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-4-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-4\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-4-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-4-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-4\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-4-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_dark\">\n            <td class=\"question\" style=\"width: px;\">6. Feeling bad about\n              yourself or that you are a failure or have let yourself or your\n              family down</td>\n            <td><label for=\"RESULT_RadioButton-4-5-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-5\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-5-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-5-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-5\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-5-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-5-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-5\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-5-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-5-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-5\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-5-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_light\">\n            <td class=\"question\" style=\"width: px;\">7. Trouble\n              concentrating on things, such as reading the newspaper or\n              watching television</td>\n            <td><label for=\"RESULT_RadioButton-4-6-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-6\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-6-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-6-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-6\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-6-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-6-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-6\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-6-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-6-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-6\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-6-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_dark\">\n            <td class=\"question\" style=\"width: px;\">8. Moving or\n              speaking so slowly that other people could have noticed? Or the\n              opposite being so fidgety or restless that you have been\n              moving around a lot more than usual</td>\n            <td><label for=\"RESULT_RadioButton-4-7-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-7\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-7-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-7-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-7\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-7-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-7-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-7\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-7-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-7-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-7\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-7-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          <tr class=\"matrix_row_light\">\n            <td class=\"question\" style=\"width: px;\">9. Thoughts that you\n              would be better off dead or of hurting yourself in some way</td>\n            <td><label for=\"RESULT_RadioButton-4-8-0\"\n              class=\"hidden\">Strongly Agree</label><input\n              type=\"radio\" name=\"RESULT_RadioButton-4-8\"\n              class=\"multiple_choice\" id=\"RESULT_RadioButton-4-8-0\" value=\"0\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-8-1\"\n              class=\"hidden\">Agree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-8\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-8-1\" value=\"1\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-8-2\"\n              class=\"hidden\">Neutral</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-8\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-8-2\" value=\"2\" /></td>\n            <td><label for=\"RESULT_RadioButton-4-8-3\"\n              class=\"hidden\">Disagree</label><input type=\"radio\"\n              name=\"RESULT_RadioButton-4-8\" class=\"multiple_choice\"\n              id=\"RESULT_RadioButton-4-8-3\" value=\"3\" /></td>\n            \n          </tr>\n          \n          </table>\n          \n          \n        </div>\n\n        <!-- end of first screener -->\n        <!-- begin second screener -->\n\n        <div class=\"clear\"></div>\n\n\t\t\t\t\t<div class=\"col-md-6\" >\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\n\t\t\t\t\t\t<label class=\"label-css\">Since how long   you have been having the depressive symptoms CURRENTLY that you marked in the above questionnaire? <span>*</span></label> \n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input id=\"radio-ad1\" name=\"radio_long\"  type=\"radio\" [(ngModel)]=\"register2_obj.radio_long\" value=\"less than 2\" required=\"true\"><label\n\t\t\t\t\t\t\t\tfor=\"radio-ad1\" class=\"radio-label\">Less than 2 weeks</label><br>\n\t\t\t\t\t\t<input id=\"radio-ad2\" name=\"radio_long\"  type=\"radio\"  [(ngModel)]=\"register2_obj.radio_long\" value=\"2-4 weeks\" required=\"true\"><label\n\t\t\t\t\t\t\t\tfor=\"radio-ad2\" class=\"radio-label radio-pad\">2-4 weeks</label> <br>\n\t\t\t\t\t\t<input id=\"radio-ad3\" name=\"radio_long\"  type=\"radio\" [(ngModel)]=\"register2_obj.radio_long\" value=\"1-2 months\" required=\"true\"><label\n\t\t\t\t\t\t\t\tfor=\"radio-ad3\" class=\"radio-label radio-pad\">1-2 months</label><br>\n\t\t\t\t\t\t<input id=\"radio-ad4\" name=\"radio_long\"  type=\"radio\" [(ngModel)]=\"register2_obj.radio_long\" value=\"2-6 moths\" required=\"true\"><label\n\t\t\t\t\t\t\t\tfor=\"radio-ad4\" class=\"radio-label radio-pad\">2-6 months</label><br>\n\t\t\t\t\t\t<input id=\"radio-ad5\" name=\"radio_long\"  type=\"radio\" [(ngModel)]=\"register2_obj.radio_long\" value=\"6-1year\" required=\"true\"><label\n\t\t\t\t\t\t\t\tfor=\"radio-ad5\" class=\"radio-label radio-pad\">6 months to 1 year</label>\n\t\t\t\t\t\t<input id=\"radio-ad6\" name=\"radio_long\"  type=\"radio\" [(ngModel)]=\"register2_obj.radio_long\" value=\"more than 1 year\" required=\"true\"><label\n\t\t\t\t\t\t\t\tfor=\"radio-ad6\" class=\"radio-label radio-pad\">More than 1 year</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n          </div>\n          \n\n\n          <div class=\"col-md-6\">\n\n              <div class=\"form-group\">\n              \n                <label class=\"label-css\">Since how many weeks/months your depressive symptoms may have increased/are interfering  with  your usual  functioning? <span>*</span></label> \n                \n                <div class=\"radio\">\n                \n                \n                <input id=\"radio-sr2\" name=\"radio_months\" type=\"radio\" [(ngModel)]=\"register2_obj.radio_months\"  value=\"no infer\" required=\"true\"><label\n                    for=\"radio-sr2\" class=\"radio-label radio-pad\">No interference with functioning</label> <br>\n                <input id=\"radio-sr3\" name=\"radio_months\" type=\"radio\" [(ngModel)]=\"register2_obj.radio_months\" value=\"infer 2-4 weeks\" required=\"true\"><label\n                    for=\"radio-sr3\" class=\"radio-label radio-pad\">Interfering since 2-4 weeks</label>\n                <input id=\"radio-sr4\" name=\"radio_months\" type=\"radio\" [(ngModel)]=\"register2_obj.radio_months\" value=\"infer 1-2 months\" required=\"true\"><label\n                    for=\"radio-sr4\" class=\"radio-label radio-pad\">Interfering since 1-2 months</label>\n                <input id=\"radio-sr5\" name=\"radio_months\" type=\"radio\" [(ngModel)]=\"register2_obj.radio_months\" value=\"infer 2-6 months\" required=\"true\"><label\n                    for=\"radio-sr5\" class=\"radio-label radio-pad label_align\">Interfering since 2-6 months</label>\n                <input id=\"radio-sr6\" name=\"radio_months\" type=\"radio\" [(ngModel)]=\"register2_obj.radio_months\" value=\"infer to 1 year\" required=\"true\"><label\n                    for=\"radio-sr6\" class=\"radio-label radio-pad\">Interfering since 6-12 months</label>\n                <input id=\"radio-sr7\" name=\"radio_months\" type=\"radio\" [(ngModel)]=\"register2_obj.radio_months\" value=\"infer more than 1 year\" required=\"true\"><label\n                    for=\"radio-sr7\" class=\"radio-label radio-pad\">Interfering since More than 1 year</label>\n                \n                </div>\n                \n              </div>\n    \n            </div>\n            \n            <div class=\"clear\"></div>\n\n\n\n            <!-- begin p4 screener questions -->\n\t\t\t\t<!-- question1 -->\n\t\t\t\t\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\n\t\t\t\t\n            <div class=\"form-group\">\n            \n              <label class=\"label-css\">Have you ever attempeted to hurt yourself in the past?</label> <span>*</span>\n              \n              <div class =\"dropdown col-md-6\">\n              \n              <select  id =\"select_hurt\" class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n              <option  class =\"option_class\">Select</option>\n              <option value=\"Yes\" class =\"option_class\">Yes</option>\n              <option value=\"No\"  class =\"option_class\">No</option>\n                  \n              \n              </select>\n              \n              </div>\n              \n              </div>\n              \n            </div>\n            \n            \n            \n            <!-- question2-->\n            \n            <div class=\"col-md-6\">\n            \n            <div class=\"form-group\">\n            \n              <label class=\"label-css\">Have you thought about how you might actually hurt yourself? </label> <span>*</span>\n              \n              <div class =\"dropdown col-md-6\">\n              \n              <select  id = \"select_hurt_yourself\" class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n              <option class =\"option_class\">Select</option>\n              <option value=\"Yes\" class =\"option_class\">Yes</option>\n              <option value=\"No\"  class =\"option_class\">No</option>\n                  \n              \n              </select>\n              \n              </div>\n              \n              </div>\n              \n            </div>\n            \n            <div class=\"clear\"></div>\n            \n            \n            \n            <!-- question3-->\n            \n             <div class=\"col-md-6\">\n            \n            <div class=\"form-group\">\n            \n              <label class=\"label-css\">There is a big difference between having a thought and acting on a thought.  How likely do you think it is that you will act on  any thoughts about hurting yourself or ending your life sometime over the next month?\n               </label> \n               \n              \n              <div class=\"radio\">\n              \n              <input id=\"radio-p4_3_1\" name=\"radio_difference\" type=\"radio\" value=\"Not at all likely\" required=\"true\"><label\n                  for=\"radio-p4_3_1\" class=\"radio-label\">Not at all likely</label><br>\n              <input id=\"radio-p4_3_2\" name=\"radio_difference\" type=\"radio\" value=\"Somewhat likely\" required=\"true\"><label\n                  for=\"radio-p4_3_2\" class=\"radio-label radio-pad\">Somewhat likely</label> <br>\n              <input id=\"radio-p4_3_3\" name=\"radio_difference\" type=\"radio\" value=\"Very likely\" required=\"true\"><label\n                  for=\"radio-p4_3_3\" class=\"radio-label radio-pad\">Very likely</label>\n              \n              \n              </div>\n              \n              </div>\n              \n            </div> \n            \n            \n            <!-- question4-->\n            <div class=\"col-md-6\">\n            \n            <div class=\"form-group\">\n            \n              \n              <label class=\"label-css\">Are there things in you/your life that will stop you (prevent you) from harming yourself? (Things that would help you to avoid putting suicidal thoughts into action)  </label> <span>*</span>\n              <div class =\"dropdown col-md-6\">\n              \n              <select  id = \"select_prevent\" class=\"drop_down\" (change)=\"enbfield()\" style = \"background-color:#F0F3FA;\">\n              <option  class =\"option_class\">Select</option>\n                  <option value=\"Yes\" class =\"option_class\">Yes</option>\n                  <option value=\"No\"  class =\"option_class\">No</option>\n              \n              </select>\n              \n              </div>\n              \n              </div>\n              \n            </div>\n            \n            <div class =\"col-md-6\">\n            \n            <div class=\"form-group\">\n              \n              <label class=\"label-css\">If yes, please specify</label> \n              \n              <input id = \"prevent_harm\" type=\"text\" class=\"form-control input\" \n                alt=\"Enter city name\" required=\"true\">\n          \n              </div>\n              \n              </div>\n              <div class=\"clear\"></div>\n            \n            \n            \n            <!-- end of p4 screener questions -->\n\n            <div class=\"row\" id=\"button_class\" style=\"margin-left:0px;margin-right:0px;text-align:center;\">\n\t\t\t\t\t\n                <div class=\"buttons_reverse\">\n                  <button type=\"button\"  id=\"nextbutton2\" name=\"Submit\" value=\"Submit\" (click)=\"submitPage1()\" class=\"submit_button btn btn-success\">Submit</button>\n                 \n                </div>\n                </div>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"pagination\">\n        \n              <a  class=\"active\" href=\"#\">1</a>\n              <a href=\"#\">2</a>\n              \n              \n            </div>\n            </div>\n            \n          \n        </div>\n        \n        </div>\n        </div>\n\n\n\n        \n        \n      \n"

/***/ }),

/***/ "../../../../../src/app/screener-page1/screener-page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenerPage1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenerPage1Component = (function () {
    //$('#prevent_harm').prop('disabled',true);
    function ScreenerPage1Component(router) {
        this.router = router;
        this.register2_array = [];
        this.register2_obj = {};
        this.new_object = {};
        this.new_array = [];
        this.totalScore1 = 0;
        this.new_array2 = [];
        this.srs_id = 123;
    }
    ScreenerPage1Component.prototype.ngOnInit = function () {
    };
    ScreenerPage1Component.prototype.enbfield = function () {
        this.select_prevent1 = $('#select_prevent').find(":selected").text();
        if (this.select_prevent1 == "Yes") {
            $('#prevent_harm').prop('disabled', false);
        }
        else {
            $('#prevent_harm').prop('disabled', true);
        }
    };
    ScreenerPage1Component.prototype.submitPage1 = function () {
        //first screener
        for (var i = 0; i < 9; i++) {
            if ($('input[name=RESULT_RadioButton-4-' + i + ']:checked').val() != undefined) {
                this.totalScore1 += parseInt($('input[name=RESULT_RadioButton-4-' + i + ']:checked').val());
                this.firstscreenStr += $('input[name=RESULT_RadioButton-4-' + i + ']:checked').val() + "#";
                this.new_array.push($('input[name=RESULT_RadioButton-4-' + i + ']:checked').val());
            }
        }
        this.register2_obj.register2_screener1_options = this.new_array;
        this.register2_obj.register2_screener1_totalScore1 = this.totalScore1;
        //end of first screener
        //second screener or p4 screener
        this.symptom11 = $('#select_hurt').find(":selected").text();
        this.symptom12 = $('#select_hurt_yourself').find(":selected").text();
        this.symptom13 = $('input[name=radio_difference]:checked').val();
        this.symptom14 = $('#select_prevent').find(":selected").text();
        this.symptom15 = $('#prevent_harm').val();
        this.secondscreenStr = this.symptom11 + "@" + this.symptom12 + "@" + this.symptom13 + "@" + this.symptom14 + "@" + this.symptom15 + "#@@#" + this.register2_obj.radio_long + "#@@#" + this.register2_obj.radio_months;
        this.new_array2.push(this.symptom11, this.symptom12, this.symptom13, this.symptom14, this.symptom15);
        this.register2_obj.register2_screener2_options = this.new_array2;
        //p4 screener new2 algorithm
        if (this.symptom13 === "Somewhat likely" || this.symptom13 === "Very likely" || (this.symptom13 === "Not at all likely" && this.symptom14 === "No")) {
            this.feedback = "High risk";
        }
        else if (this.symptom11 === "No" && this.symptom12 === "No" && this.symptom13 === "Not at all likely" && this.symptom14 === "Yes") {
            this.feedback = "Mild risk";
        }
        else {
            this.feedback = "Moderate risk";
        }
        this.register2_obj.register2_screener2_totalScore2 = this.feedback;
        //end of second screener
        this.new_object.reginfo = this.firstscreenStr + "#@@#" + this.secondscreenStr;
        this.new_object.id = this.srs_id;
        this.register2_array.push(this.register2_obj);
        this.new_reginfo = this.register2_obj.toString();
        this.register2_array.push(this.register2_obj);
        localStorage.setItem("register2_array_localstorage", JSON.stringify(this.register2_array[0]));
        localStorage.setItem("new_object", JSON.stringify(this.new_object));
        if (this.register2_obj.radio_long && this.register2_obj.radio_months && this.symptom13 && (this.new_array.length == 9) && (this.symptom11 != "Select") && (this.symptom12 != "Select")) {
            if ((this.symptom14 == "Yes" && this.symptom15 != "") || this.symptom14 == "No") {
                this.router.navigate(['screener_page2']);
            }
            else {
                alert("all fields are mandatory");
                this.new_array = [];
                return false;
            }
        }
        else {
            alert("all fields are mandatory");
            this.new_array = [];
            return false;
        }
    };
    ScreenerPage1Component.prototype.logOut = function () {
        this.router.navigate(['/']);
    };
    return ScreenerPage1Component;
}());
ScreenerPage1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-screener-page1',
        template: __webpack_require__("../../../../../src/app/screener-page1/screener-page1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/screener-page1/screener-page1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ScreenerPage1Component);

var _a;
//# sourceMappingURL=screener-page1.component.js.map

/***/ }),

/***/ "../../../../../src/app/screener-page2/screener-page2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ntable {\r\n\tborder-collapse:collapse;\r\n\tborder-spacing:0;\r\n}\r\n\r\n/* start editing from here */\r\na {\r\n\ttext-decoration:none;\r\n}\r\n.txt-rt {\r\n\ttext-align:right;\r\n}/* text align right */\r\n.txt-lt {\r\n\ttext-align:left;\r\n}/* text align left */\r\n.txt-center {\r\n\ttext-align:center;\r\n/*-- W3Layouts --*/\t\r\n}/* text align center */\r\n.float-rt {\r\n\tfloat:right;\r\n}/* float right */\r\n.float-lt {\r\n\tfloat:left;\r\n}/* float left */\r\n.clear {\r\n\tclear:both;\r\n}/* clear float */\r\n.pos-relative {\r\n\tposition:relative;\r\n}/* Position Relative */\r\n.pos-absolute {\r\n\tposition:absolute;\r\n}/* Position Absolute */\r\n.vertical-base {\t\r\n\tvertical-align:baseline;\r\n}/* vertical align baseline */\r\n.vertical-top {\t\r\n\tvertical-align:top;\r\n}/* vertical align top */\r\nnav.vertical ul li {\t\r\n\tdisplay:block;\r\n}/* vertical menu */\r\nnav.horizontal ul li {\t\r\n\tdisplay: inline-block;\r\n}/* horizontal menu */\r\nimg {\r\n\tmax-width:100%;\r\n}\r\n\r\n/*--- end reset code ---*/\r\nbody {\r\n\t font-family: 'Open Sans', sans-serif;\r\n\t\r\n}\r\n.center-container {\r\n    padding: 1.35em 0;\r\n   /*  background: #9e6d6f; \r\n   background-color:#FFFDB9;\r\n    background-color:#F0F3FA;*/\r\n     background-color:#349834\r\n\t \r\n}\r\nh1.header-w3ls {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    font-weight: normal;\r\n    padding-top: 35px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    letter-spacing: 3px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\nh2 {\r\n    font-size: 30px;\r\n    color: #FFF;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np {\r\n    font-size: 16px;\r\n    color: #c3c3c3;\r\n    margin: 20px 0 30px;\r\n}\r\n.content-top{\r\n    \r\n   \r\n}\r\n.content-wthree1,.content-wthree2,.content-wthree3,.content-wthree4 {\r\n\twidth:100%;\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\n.form-control {\r\n    padding-bottom: 0px;\r\n}\r\n.form-control:nth-child(6) {\r\n\tpadding-bottom:0;\r\n}\r\nlabel.header {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    text-align: justify;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n\tfloat: left;\r\n    margin-bottom: 12px;\r\n\twidth:100%;\r\n\t\r\n}ul.w3-size li {\r\n    display: inline-block;\r\n    text-align: center;\r\n\tfloat:left;\r\n\twidth: 13%;\r\n\tbackground-color: rgba(0, 0, 0, 0.38);\r\n\tmargin-right:10px;\r\n}\r\nul.w3-size li a {\r\n    display:block;\r\n    padding: 14px 0;\r\n\tcolor:#fff;\r\n\t\r\n}\r\nul.w3-size li.blue{\r\n\tbackground:#00abff;\r\n\theight:50px;\r\n}\r\nul.w3-size li.red{\r\n\tbackground:#FF0000;\r\n\theight:50px;\r\n}\r\nul.w3-size li.green{\r\n\tbackground:#008000;\r\n\theight:50px;\r\n}\r\nul.w3-size li.yellow{\r\n\tbackground:#ffff00;\r\n\theight:50px;\r\n}\r\nul.w3-size li.white{\r\n\tbackground:#fff;\r\n\theight:50px;\r\n}\r\ninput#name, input#email, input#orgn, textarea#message {\r\n    border: none;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color:rgba(0, 0, 0, 0.38);\r\n\t    margin-bottom: 16px;\r\n  \r\n}\r\ninput#name,input#email,input#orgn {\r\n\theight:40px;\r\n\tpadding:0 15px;\r\n\twidth:92.2%;\r\n}\r\nselect {\r\n\tborder: 1px solid #fff;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color: rgba(82, 56, 76, 0.15);\r\n\theight:40px;\r\n\tpadding:0 15px;\r\n\twidth:56%;\r\n\t\r\n}\r\nselect option {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\nselect.dropdown, input#datepicker, input#datepicker1, input#datepicker2 {\r\n   border: none;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n\theight: 40px;\r\n    padding: 0 15px;\r\n    width: 92.2%;\r\n\t    margin-bottom: 16px;\r\n}\r\nselect, .tickets input[type=\"number\"] {\r\n   border: none;\r\n    color: #fff;\r\n    text-align: justify;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n\theight: 40px;\r\n    padding: 0 15px;\r\n    width: 92.2%;\r\n\t    margin-bottom: 16px;\r\n}\r\n\r\nlabel.rating {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    text-align: justify;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 10px;\r\n\tposition:relative;\r\n\t\r\n}\r\n.content-wthree3 {\r\n\tmargin-top:70px;\r\n}\r\n.form-w3ls {\r\n    float: left;\r\n    width: 45%;\r\n    margin-right: 5%;\r\n}\r\n.form-w3ls-1 {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n.wthreesubmitaits input[type=\"submit\"] {\r\n    padding: 10px 30px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    border: none;\r\n    outline: none;\r\n    background: #00c848;\r\n\tletter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n.wthreesubmitaits input[type=\"submit\"]:hover{\r\n    background: #219049;\r\n}\r\n.wthreesubmitaits {\r\n    margin-bottom: 15px;\r\n}\r\n.content-wthree2 {\r\n    margin-top: 0px;\r\n}\r\n/*-- radio button --*/\r\nspan {\r\n    color: black;\r\n}\r\n.grid-w3layouts1 ul li,.grid-w3layouts2 ul li{\r\n\tcolor: #fff;\r\n    display: block;\r\n    position: relative;\r\n    height: 25px;\r\n}\r\nul li input[type=radio]{\r\n\tposition: absolute;\r\n\tvisibility: hidden;\r\n}\r\nul li label{\r\n    display: block;\r\n    position: relative;\r\n    font-weight: 300;\r\n    text-transform: capitalize;\r\n    font-size: 16px;\r\n    padding: 14px 0px 0px 50px;\r\n    margin:10px auto;\r\n    height: 30px;\r\n    z-index: 9;\r\n    cursor: pointer;\r\n    -webkit-transition: all 0.25s linear;\r\n}\r\nul li:hover label{\r\n\tcolor: #FFFFFF;\r\n}\r\nul li .check{\r\n\tdisplay: block;\r\n    position: absolute;\r\n    border: 2px solid #fff;\r\n    border-radius: 100%;\r\n    height: 12px;\r\n    width: 12px;\r\n    top: 13px;\r\n    left: 20px;\r\n    z-index: 5;\r\n    transition: border .25s linear;\r\n    -webkit-transition: border .25s linear;\r\n}\r\nul li:hover .check {\r\n\tborder: 2px solid #FFFFFF;\r\n}\r\nul li .check::before {\r\n\tdisplay: block;\r\n    position: absolute;\r\n    content: '';\r\n    border-radius: 100%;\r\n    height: 8px;\r\n    width: 8px;\r\n    top: 2px;\r\n    left: 2px;\r\n    margin: auto;\r\n    transition: background 0.25s linear;\r\n    -webkit-transition: background 0.25s linear;\r\n}\r\ninput[type=radio]:checked ~ .check {\r\n\tborder: 2px solid #00c848;\r\n}\r\ninput[type=radio]:checked ~ .check::before{\r\n\tbackground: #00c848;\r\n}\r\ninput[type=radio]:checked ~ label{\r\n\tcolor: black;\r\n}\r\n/*-- /radio button --*/\r\nlabel.enquiry {\r\n\tfont-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    float: left;\r\n    text-align: justify;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 12px;\r\n\t\r\n}\r\n\r\ntextarea#message {\r\n\theight:150px;\r\n\tpadding:15px;\r\n\twidth:95.2%;\r\n\t\r\n}\r\ninput::-webkit-input-placeholder {\r\ncolor:#fff!important;\r\n}\r\n \r\ninput:-moz-placeholder { /* Firefox 18- */\r\ncolor:#fff!important;  \r\n}\r\n \r\ninput::-moz-placeholder {  /* Firefox 19+ */\r\ncolor:#fff!important;  \r\n}\r\n \r\ninput:-ms-input-placeholder {  \r\ncolor:#fff!important;  \r\n}\r\ntextarea::-webkit-input-placeholder {\r\ncolor:#fff!important;\r\n}\r\n \r\ntextarea::-moz-placeholder { /* Firefox 18- */\r\ncolor:#fff!important;  \r\n}\r\n \r\ntextarea::-moz-placeholder {  /* Firefox 19+ */\r\ncolor:#fff!important;  \r\n}\r\n \r\ntextarea::-ms-input-placeholder {  \r\ncolor:#fff!important;  \r\n}\r\n.register {\r\n\tbackground-color: #0a6ad0;\r\n    width:20%;\r\n\tmargin-right:10px;\r\n\tmargin-left:0px;\r\n\tfloat:left;\r\n    height: 50px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n\tletter-spacing:1px;\r\n    outline: none;\r\n    font-size:17px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -o-transition: all 0.5s ease-in-out;\r\n\t\r\n}\t\r\n.register:hover {\r\n\tbackground-color:#00c848;\r\n\tcolor:#fff;\r\n}\r\n.reset {\r\n\tbackground-color:#00c848;\r\n    width:20%;\r\n\tfloat:left;\r\n    height: 50px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n\tletter-spacing:1px;\r\n    outline: none;\r\n    font-size:17px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -o-transition: all 0.5s ease-in-out;\r\n\t\r\n}\t\r\n.reset:hover {\r\n\tbackground-color:#0a6ad0;\r\n\tcolor:#fff;\r\n}\r\n.content-wthree4 .form-control {\r\n\tpadding-bottom:0;\r\n}\r\np.copyright {\r\n    font-size: 16px;\r\n\tline-height:30px;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding-bottom: 0px;\r\n\t\r\n}\r\np.copyright a {\r\n\tcolor:#00c848;\r\n}\r\np.copyright a:hover {\r\n\tcolor:#fff;\r\n}\r\n\r\n/*-- responsive design --*/\r\n@media (max-width:1440px) {\r\n\tinput#name, input#email, input#orgn,select, .tickets input[type=\"number\"] {\r\n    width: 91%;\r\n}\r\n}\r\n@media (max-width: 1366px) {\r\n.content-top {\r\n    width: 65%;\r\n     margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 65%;\r\n     margin: 30px auto 30px;\r\n   \r\n    padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 1280px) {\r\n.content-top {\r\n   width: 60%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 60%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width:1080px) {\r\n.content-top {\r\n   width: 70%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 70%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 1024px) {\r\n.content-top {\r\n   width: 73%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 73%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 991px) {\r\n.content-top {\r\n   width: 90%;\r\n    margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\nh1.header-w3ls {\r\n    font-size: 45px;\r\n}\r\n}\r\n@media (max-width: 900px) {\r\n}\r\n@media (max-width: 800px) {\r\ninput#name, input#email, input#orgn,select, .tickets input[type=\"number\"] {\r\n    width: 91%;\r\n}\r\nh1.header-w3ls {\r\n    font-size: 40px;\r\n}\r\nlabel.rating {\r\n    font-size: 16px;\r\n}\r\nlabel.header {\r\n    font-size: 17px;\r\n}\r\n}\r\n@media (max-width: 768px) {\r\nh1.header-w3ls {\r\n    font-size: 36px;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 88%;\r\n}\r\n\r\n}\r\n@media (max-width: 736px) {\r\n.form-w3ls {\r\n    float: none;\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    margin-bottom: 0em;\r\n}\r\n.form-w3ls-1 {\r\n    float: none;\r\n    width: 100%;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 30px auto 30px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 2em;\r\n}\r\n.content-top {\r\n    padding: 40px 40px 20px;\r\n}\r\n}\r\n@media (max-width: 667px) {\r\n.content-top {\r\n    width: 90%;\r\n    margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 92%;\r\n}\r\n\r\n}\r\n@media (max-width: 640px) {\r\nh1.header-w3ls {\r\n    font-size: 30px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 600px) {\r\np.copyright {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 568px) {\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     \r\n\t\r\n}\r\n}\r\n@media (max-width: 480px) {\r\nh1.header-w3ls {\r\n    font-size: 26px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1 {\r\n    width: 90%;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 90.5%;\r\n}\r\n}\r\n@media (max-width: 414px) {\r\nh1.header-w3ls {\r\n    font-size: 24px;\r\n}\r\nlabel.rating {\r\n    font-size: 15px;\r\n}\r\n.content-top {\r\n    width: 100%;\r\n    \r\n}\r\n.content-top1 {\r\n    width: 100%;\r\n}\r\nul.w3-size li {\r\n    width: 15%;\r\n}\r\n}\r\n@media (max-width: 384px) {\r\n\t.content-top {\r\n    width: 100%;\r\n    \r\n}\r\n.content-top1 {\r\n    width: 90%;\r\n    margin: 1px auto 1px;\r\n    padding: 10px 10px 5px;\r\n}\r\nh1.header-w3ls {\r\n    font-size: 22px;\r\n}\r\np.copyright {\r\n\t\r\n    padding: 0 10px;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 89.5%;\r\n}\r\n}\r\n@media (max-width: 375px) {\r\n\t.content-top {\r\n    width: 100%;\r\n}\r\n.content-top1 {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 320px) {\r\n\t.content-top {\r\n    width: 100%;\r\n}\r\n\th1.header-w3ls {\r\n    font-size: 20px;\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 87.5%;\r\n}\r\n.form-control {\r\n    padding-bottom: 12px;\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 3em;\r\n}\r\nul li label {\r\n    font-size: 14px;\r\n    padding: 10px 0px 0px 40px;\r\n}\r\nul li .check {\r\n    top: 12px;\r\n    left: 13px;\r\n}\r\n}\r\n\r\nhtml {\r\n\t/*background-color: #9e6d6f;*/\r\n\tbackground-color:#FFF59D;\r\n}\r\n\r\n.label.header {\r\n\tfont-size: 25px;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.grid-w3layouts1 ul li, .grid-w3layouts2 ul li {\r\n\tcolor: #000;\r\n}\r\n\r\nlabel.rating, label.header {\r\n\tcolor: #000;\r\n\ttext-transform: none;\r\n\tfont-weight: bold;\r\n}\r\n\r\nul li label {\r\n\tpadding: 12px 0px 0px 50px;\r\n}\r\n\r\nul li .check {\r\n\tborder: 3px solid #000;\r\n}\r\n\r\n.content-top {\r\n\t/* background-color: #FFE0B2; */\r\n\tbackground-color:#ffffff;\r\n}\r\n\r\n.placeholdercss::-webkit-input-placeholder {\r\n\tcolor: black !important;\r\n}\r\n\r\ninput#name, input#email, input#orgn, textarea#message {\r\n\tbackground-color: #FFFDB9 !important;\r\n\tcolor: black !important;\r\n}\r\n\r\nul li label {\r\n\ttext-transform: none;\r\n}\r\n\r\n.input {\r\n\t/* background-color: #FFFDB9 !important; */\r\n\tbackground-color:#FAFBFD;;\r\n\tcolor: black !important;\r\n}\r\n\r\n.blink {\r\n\tanimation: blink .75s linear infinite;\r\n}\r\n@keyframes blink {\r\n\t0% { opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t50.01% { opacity: 0; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n\r\n.radio {\r\n\tmargin: 0.5rem;\r\n}\r\n\r\n.radio input[type=\"radio\"] {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n}\r\n\r\n.radio input[type=\"radio\"]+.radio-label:before {\r\n\tcontent: '';\r\n\tbackground: #f4f4f4;\r\n\tborder-radius: 100%;\r\n\tborder: 1px solid #b4b4b4;\r\n\tdisplay: inline-block;\r\n\twidth: 1.4em;\r\n\theight: 1.4em;\r\n\tposition: relative;\r\n\ttop: -0.2em;\r\n\tmargin-right: 1em;\r\n\tvertical-align: top;\r\n\tcursor: pointer;\r\n\ttext-align: center;\r\n\ttransition: all 250ms ease;\r\n}\r\n\r\n.radio input[type=\"radio\"]:checked+.radio-label:before {\r\n\tbackground-color: #3197EE;\r\n\tbox-shadow: inset 0 0 0 4px #f4f4f4;\r\n}\r\n\r\n.radio input[type=\"radio\"]:focus+.radio-label:before {\r\n\toutline: none;\r\n\tborder-color: #3197EE;\r\n}\r\n\r\n.radio input[type=\"radio\"]:disabled+.radio-label:before {\r\n\tbox-shadow: inset 0 0 0 4px #f4f4f4;\r\n\tborder-color: #b4b4b4;\r\n\tbackground: #b4b4b4;\r\n}\r\n\r\n.radio input[type=\"radio\"]+.radio-label:empty:before {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.radio-pad {\r\n\tpadding-top: 2%;\r\n}\r\n\r\n.label-css {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.terms-modal-dialog {\r\n\toverflow-y: initial !important\r\n}\r\n\r\n.terms-modal-body {\r\n\theight: 400px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.modal-header, h4, .close {\r\n\tbackground-color: #5cb85c;\r\n\tcolor: white !important;\r\n\ttext-align: center;\r\n\tfont-size: 30px;\r\n}\r\n\r\np {\r\n\tfont-size: 14px;\r\n\tcolor: black;\r\n\tmargin: 0px 0 0px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n\tmargin-top: 10px;\r\n}\r\n.fa-2x {\r\n    font-size: 26px;\r\n   }\r\n   \r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #4cae4c;\r\n    font-weight: bold;\r\n    }\r\ninput[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.termli {\r\n\tpadding-left: 36px;\r\n\tlist-style:circle;\r\n\tfont-size: 15px;\r\n}\r\n.liststyle{\r\nlist-style:square;\r\nfont-size: 15px;\r\n}\r\n\r\n\t#loading-bar-spinner {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 10002;\r\n    top: 389px;\r\n    left: 50%;\r\n   }\r\n   \r\n   .drop_down {\r\n    background-color:#F0F3FA;\r\n    color:black;\r\n    }\r\n    .drop_down:after {\r\n     width: 0; \r\n  height: 0; \r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-top: 6px solid #f00;\r\n  position: absolute;\r\n  top: 40%;\r\n  right: 5px;\r\n  content: \"\";\r\n  z-index: 98;\r\n    }\r\n    .option_class{\r\n     background-color:#F0F3FA;\r\n     color : black;\r\n     }\r\n     \r\n     /* for table in registration page*/\r\n     .form_table{\r\n\twidth: 650px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tborder-radius: 4px;\r\n\tborder: 0px solid #333333;\r\n\tbackground: #FFFFFF;\r\n\tbackground-size: cover;\r\n\tcolor: #575B66;\r\n\toverflow: hidden;\r\n\tbox-shadow: 0 1px 6px rgba(0,0,0,0.30);\r\n\tbackground-position: 50% 50%;\r\n}\r\n\r\n.form_table a{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.outside a{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.form_table a:visited{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.outside a:visited{\r\n\tcolor: #0D47A1;\r\n}\r\n\r\n.segment_header{\r\n\twidth: auto;\r\n\tmargin: 1px;\r\n\tcolor: #FFFFFF;\r\n\tbackground: #4C6BB5;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: repeat;\r\n\tbackground-position: 50% 50%;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.segment_header h1{\r\n\tborder-radius: 4px;\r\n\tpadding: 20px 10px;\r\n\tfont-family: 'Muli',sans-serif;\r\n}\r\n\r\n\r\n\r\n.q .question{\r\n\tfont-weight: bold;\r\n}\r\n\r\n.q .left_question_first{\r\n\twidth: 15em;\r\n}\r\n\r\n.required .icon{\r\n\tbackground-image: none;\r\n\tbackground-position: left;\r\n\tbackground-repeat: no-repeat;\r\n\tfont-size: 13px;\r\n\tpadding-left: 14px;\r\n}\r\n\r\n.q .text_field{\r\n\tbackground: #FAFBFD;\r\n\tborder: 1px solid #D8E1F5;\r\n\tborder-radius: 2px;\r\n\tborder-width: 1px;\r\n\tcolor: #575B66;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 13px;\r\n\tmargin: 1px 0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.q .file_upload{\r\n\tbackground: #FAFBFD;\r\n\tborder: 1px solid #D8E1F5;\r\n\tborder-radius: 2px;\r\n\tborder-width: 1px;\r\n\tcolor: #575B66;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 13px;\r\n\tmargin-top: 1px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.q .file_upload_button{\r\n\tmargin-top: 2px;\r\n}\r\n\r\n.q .inline_grid td{\r\n\tpadding: 5px;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n.q .drop_down{\r\n\tbackground: #FAFBFD;\r\n\tborder: 1px solid #D8E1F5;\r\n\tborder-radius: 2px;\r\n\tborder-width: 1px;\r\n\tcolor: #575B66;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 13px;\r\n\tmargin: 1px 0;\r\n\tpadding: 9px;\r\n}\r\n\r\n.q .matrix1 th{\r\n\tcolor: #7280A1;\r\n\tbackground: #e6fff2;\r\n\t\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.q .matrix1 td{\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\tborder-bottom: 1px solid #D8E1F5;\r\n\tborder-top: 1px solid #D8E1F5;\r\n\t\r\n}\r\n\r\n.q .matrix1 td.question{\r\n\tborder-right: 1px solid #D8E1F5;\r\n\tfont-weight: normal;\r\n\ttext-align:left;\r\n\t\r\n}\r\n\r\n.q .matrix1 .multi_scale_sub th{\r\n\tfont-weight: normal;\r\n\tborder-top: 1px solid #D8E1F5 !important;\r\n\tbackground: #FAFBFD;\r\n}\r\n\r\n.q .matrix1 .multi_scale_break{\r\n\tborder-right: 1px solid #D8E1F5;\r\n}\r\n\r\n.q .matrix_row_dark td{\r\n\tcolor: #575B66;\r\n\tbackground: #FAFBFD;\r\n}\r\n\r\n.q .matrix_row_dark td.question{\r\n\tcolor: #575B66;\r\n\tbackground: #FAFBFD;\r\n}\r\n\r\n.q .matrix_row_light td{\r\n\tcolor: #575B66;\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\n.q .matrix_row_light td.question{\r\n\tcolor: #575B66;\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\n.q .rating_ranking td{\r\n\tpadding: 5px;\r\n}\r\n\r\n.q .scroller{\r\n\tborder: 1px solid #333333;\r\n}\r\n\r\n.highlight{\r\n\tbackground: #FFF9C4  !important;\r\n}\r\n\r\ntr.highlight td{\r\n\tbackground: #FFF9C4  !important;\r\n}\r\n\r\n.outside{\r\n\tcolor: #575B66;\r\n}\r\n\r\n.outside_container{\r\n\twidth: 100%;\r\n\tpadding: 1em 0;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tcolor: #575B66;\r\n}\r\n\r\n#button_class .submit_button{\r\n\tcolor: #FFFFFF !important;\r\n\t/*background: #4C6BB5;*/\r\n\tbackground-size: auto;\r\n\tborder-style: none;\r\n\tborder-width: 0px;\r\n\tborder-color: #FFFFFF;\r\n\tborder-radius: 30px;\r\n\ttext-align: center;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmin-width: 30%;\r\n\tpadding: 16px 20px;\r\n\ttext-transform: none;\r\n\tbox-shadow: 0 1px 6px rgba(0,0,0,0.30);\r\n}\r\n\r\n#button_class .submit_button1{\r\n\tcolor: #FFFFFF !important;\r\n\tbackground: #FFB322;\r\n\tbackground-size: auto;\r\n\tborder-style: none;\r\n\tborder-width: 0px;\r\n\tborder-color: #FFFFFF;\r\n\tborder-radius: 30px;\r\n\ttext-align: center;\r\n\tfont-family: 'Muli',sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmin-width: 30%;\r\n\tpadding: 16px 20px;\r\n\ttext-transform: none;\r\n\tbox-shadow: 0 1px 6px rgba(0,0,0,0.30);\r\n}\r\n\r\n#button_class .submit_button:hover{\r\n\tbackground: #405C9E;\r\n\tborder-color: #BBBBBB;\r\n\tbackground-size: auto;\r\n}\r\n\r\n.progressBarWrapper{\r\n\tborder-radius: 4px;\r\n\tbackground: #FFFFFF;\r\n\tbackground-size: cover;\r\n\tborder-color: #333333;\r\n}\r\n\r\n.progressBarBack{\r\n\tcolor: #FFFFFF;\r\n\tbackground-color: #E8BC63;\r\n}\r\n\r\n.progressBarFront{\r\n\tcolor: #575B66;\r\n}\r\n\r\n.ui-widget{\r\n\tfont-family: 'Muli',sans-serif;\r\n}\r\n\r\n.invalid{\r\n\tbackground: #FDF1F0;\r\n}\r\n\r\n.invalid .invalid_message{\r\n\tcolor: #EC756B;\r\n\tbackground: #FDF1F0;\r\n\tborder: 1px solid #EC756B;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.form_table.invalid{\r\n\tborder: 2px solid #EC756B;\r\n}\r\n\r\n.invalid .matrix .invalid_row{\r\n\tbackground: #FDF1F0;\r\n}\r\n.home{\r\nposition : absolute;\r\n}\r\n@media only screen and (max-width: 800px) {\r\n    .home{\r\n    position : relative;\r\n    \r\n    }\r\n}\r\n\r\n.pagination {\r\n\tposition: relative;\r\n    left:50%;\r\n}\r\n\r\n.pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 4px 2px;\r\n    text-decoration: none;\r\n}\r\n\r\n.pagination a.active {\r\n    background-color: #5983c6;\r\n    color: white;\r\n}\r\n\r\n\r\n.wsas_class{\r\n\t\r\n\tborder:1px solid black;\r\n\tpadding-top:25px;\r\n\tpadding-bottom:25px;\r\n\t\r\n\t}\r\n\t\r\n\t.center_align {\r\n\ttext-align:center;\r\n\t}\r\n\t\r\n\t\r\n\t\r\n/* begin css code for earlier image design for feedback*/\r\n\t@media ( min-width : 1281px) {\r\n\t\r\n\t#depress_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#anxiety_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#self_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#daily_new{\r\n\tdisplay:none;\r\n\t}\r\n\t.centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\t}\r\n\r\n/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column1 {\r\n  float: left;\r\n  width: 50%;\r\n  padding-left: 95px;\r\n\t}\r\n\r\n.column2 {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 5px;\r\n\t}\r\n\r\n/* Clear floats after image containers */\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n\t}\r\n\r\n.text-block {\r\n    position: absolute;\r\n    top: 75px;\r\n    left: 230px;\r\n   \r\n    color: white;\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block1 {\r\n    position: absolute;\r\n    top: 175px;\r\n    left: 227px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block2 {\r\n    position: absolute;\r\n    top: 315px;\r\n    left: 225px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\t\r\n\t.text-block3 {\r\n    position: absolute;\r\n    top: 460px;\r\n    left: 230px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n   }\r\n   \r\n   .text-block4 {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 540px;\r\n   \r\n    color: white;\r\n    padding-right: 160px;\r\n   }\r\n   }\r\n   \r\n   @media ( min-width : 1025px) and (max-width: 1280px) {\r\n   \r\n   #depress_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#anxiety_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#self_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#daily_new{\r\n\tdisplay:none;\r\n\t}\r\n   \r\n   .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\t}\r\n\r\n/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column1 {\r\n  float: left;\r\n  width: 50%;\r\n  padding-left: 95px;\r\n\t}\r\n\r\n.column2 {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 5px;\r\n\t}\r\n\r\n/* Clear floats after image containers */\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n\t}\r\n\r\n.text-block {\r\n    position: absolute;\r\n    top: 75px;\r\n    left: 230px;\r\n   \r\n    color: white;\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block1 {\r\n    position: absolute;\r\n    top: 175px;\r\n    left: 227px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block2 {\r\n    position: absolute;\r\n    top: 315px;\r\n    left: 225px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\t\r\n\t.text-block3 {\r\n    position: absolute;\r\n    top: 460px;\r\n    left: 230px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n   }\r\n   \r\n   .text-block4 {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 540px;\r\n   \r\n    color: white;\r\n    padding-right: 160px;\r\n   }\r\n   }\r\n   \r\n   @media ( min-width : 768px) and (max-width: 1024px) {\r\n   \r\n   #depress_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#anxiety_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#self_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#daily_new{\r\n\tdisplay:none;\r\n\t}\r\n   \r\n    .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\t}\r\n\r\n/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column1 {\r\n  float: left;\r\n  width: 50%;\r\n  padding-left: 95px;\r\n\t}\r\n\r\n.column2 {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 5px;\r\n\t}\r\n\r\n/* Clear floats after image containers */\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n\t}\r\n\r\n.text-block {\r\n    position: absolute;\r\n    top: 53px;\r\n    left: 180px;\r\n   \r\n    color: white;\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block1 {\r\n    position: absolute;\r\n    top: 113px;\r\n    left: 167px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block2 {\r\n    position: absolute;\r\n    top: 197px;\r\n    left: 164px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\t\r\n\t.text-block3 {\r\n    position: absolute;\r\n    top: 284px;\r\n    left: 180px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n   }\r\n   \r\n   .text-block4 {\r\n    position: absolute;\r\n    top: 82px;\r\n    left: 400px;\r\n   \r\n    color: white;\r\n    padding-right: 160px;\r\n   }\r\n   }\r\n   \r\n    @media ( min-width : 990px) and (max-width: 1024px) and (orientation:\r\n\tlandscape) {\r\n\t\r\n\t#depress_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#anxiety_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#self_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#daily_new{\r\n\tdisplay:none;\r\n\t}\r\n\t .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\t}\r\n\r\n/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column1 {\r\n  float: left;\r\n  width: 50%;\r\n  padding-left: 95px;\r\n\t}\r\n\r\n.column2 {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 5px;\r\n\t}\r\n\r\n/* Clear floats after image containers */\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n\t}\r\n\r\n.text-block {\r\n    position: absolute;\r\n    top: 76px;\r\n    left: 237px;\r\n   \r\n    color: white;\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block1 {\r\n    position: absolute;\r\n    top: 180px;\r\n    left: 226px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block2 {\r\n    position: absolute;\r\n    top: 317px;\r\n    left: 218px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\t\r\n\t.text-block3 {\r\n    position: absolute;\r\n    top: 456px;\r\n    left: 234px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n   }\r\n   \r\n   .text-block4 {\r\n    position: absolute;\r\n    top: 110px;\r\n    left: 553px;\r\n   \r\n    color: white;\r\n    padding-right: 160px;\r\n   }\r\n\t}\r\n\t\r\n   @media ( min-width : 768px) and (max-width: 989px) and (orientation:\r\n\tlandscape) {\r\n\t\r\n\t#depress_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#anxiety_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#self_new{\r\n\tdisplay:none;\r\n\t}\r\n\t#daily_new{\r\n\tdisplay:none;\r\n\t}\r\n\t\r\n\t .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\t}\r\n\r\n/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column1 {\r\n  float: left;\r\n  width: 50%;\r\n  padding-left: 95px;\r\n\t}\r\n\r\n.column2 {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 5px;\r\n\t}\r\n\r\n/* Clear floats after image containers */\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n\t}\r\n\r\n.text-block {\r\n    position: absolute;\r\n    top: 53px;\r\n    left: 180px;\r\n   \r\n    color: white;\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block1 {\r\n    position: absolute;\r\n    top: 113px;\r\n    left: 167px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\r\n.text-block2 {\r\n    position: absolute;\r\n    top: 197px;\r\n    left: 164px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\t}\r\n\t\r\n\t.text-block3 {\r\n    position: absolute;\r\n    top: 284px;\r\n    left: 180px;\r\n   \r\n    color: white;\r\n    padding-left: 20px;\r\n   }\r\n   \r\n   .text-block4 {\r\n    position: absolute;\r\n    top: 82px;\r\n    left: 400px;\r\n   \r\n    color: white;\r\n    padding-right: 160px;\r\n   }\r\n\t}\r\n\t\r\n\t@media ( min-width : 481px) and (max-width: 767px) {\r\n\t\r\n\t#img1{\r\n\tdisplay:none;\r\n\t}\r\n\t\r\n\t#img2{\r\n\tdisplay:none;\r\n\t}\r\n\t\r\n\t\r\n   .close {\r\n   \r\n  opacity: .9;\r\n  \r\n\t}\r\n\t\r\n\t.button {\r\n    \r\n    width: 115px;\r\n    height: 25px;\r\n    background: #4E9CAF;\r\n    padding: 5px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-weight: bold;\r\n \t}\r\n \t}\r\n \t@media ( min-width : 320px) and (max-width: 480px) {\r\n\t\r\n\t#img1{\r\n\tdisplay:none;\r\n\t}\r\n\t\r\n\t#img2{\r\n\tdisplay:none;\r\n\t}\r\n\t\r\n\t\r\n   .close {\r\n   \r\n  opacity: .9;\r\n  \r\n\t}\r\n\t\r\n\t.button {\r\n    \r\n    width: 115px;\r\n    height: 25px;\r\n    background: #4E9CAF;\r\n    padding: 5px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-weight: bold;\r\n \t}\r\n \t}\r\n \t\r\n \t/* end of  css code for earlier image design for feedback*/\r\n \t\r\n \t\r\n \t\r\n \t\r\n \t.td-border-class{\r\n \tborder:1px solid black;\r\n \t}\r\n \t\r\n \tth{\r\n \ttext-align:center;\r\n \t}\r\n \t.score_table{\r\n \t margin: 0 auto;\r\n\t table-layout: fixed;\r\n\t width : 80%;\r\n\t }\r\n\t \r\n\t .color_class_new{\r\n\t background-color:#dee7f4;\r\n\t }\r\n\t .color_class{\r\n\t background-color:#66EAE8;\r\n\t text-align:center;\r\n\t \r\n\t font-size:25px;\r\n\t }\r\n\t \r\n\t .color_class1{\r\n\t background-color:#0080ff;\r\n\t }\r\n\t .color_class2{\r\n\t background-color: #000099;\r\n\t }\r\n\t \r\n\t hr.new1 {\r\n  border: 1px solid black;\r\n}\r\n\r\n.checkbox input[type=checkbox]{\r\nmargin-left:0;\r\n}\r\n\r\n#footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 2.5rem;  \r\n    color:white;            /* Footer height */\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screener-page2/screener-page2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"center-container\" style=\"padding-top:0px;\">\n\n    <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n        <div class=\"col-md-12\" style=\" background-color:#7ad17a;\">\n          <div class=\"col-md-2\"></div>\n      <div class=\" col-md-8 header-div\" style=\" margin: auto;text-align:center;\">\n      \n      </div>\n      <div class=\"col-md-1\">\n       \n      </div>\n      <div class=\"col-md-1\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"logOut()\" style=\"border-radius: 10%;margin-top:10px;margin-bottom:10px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n  \n    <div class=\"col-md-12\">\n      \n      \n      \n<div class=\"content-top\">\n    \n\n  <div class=\"header-div\" style=\"background-color:white;width:100%;margin-left:auto;margin-right:auto;margin-bottom:30px;\">\n    <h4 class=\"header-w3ls header_class\"> Initial Evaluation<br>Anxiety Symptoms</h4>\n    </div>\n  \n      \n     <!-- begin GAD-7 -->\n\t\t\t\t\t\n     <div id=\"q4\" class=\"q required col-md-12\">\n\t\t\t\t\t\t\n      <table class=\"matrix1\">\n\n      <tr>\n        <th scope=\"col\">Over the last 2 weeks, how often have you been bothered by the following problems? &nbsp;</th>\n        <th width=\"60px;\" scope=\"col\">Not at all</th>\n        <th width=\"60px;\" scope=\"col\">Several Days</th>\n        <th width=\"60px;\" scope=\"col\">More than half the days</th>\n        <th width=\"60px;\" scope=\"col\">Nearly every day</th>\n      </tr>\n      \n      <tr class=\"matrix_row_light\">\n        <td class=\"question\" style=\"width: px;\">1. Feeling nervous, anxious or on edge.</td>\n        <td><label for=\"RESULT_RadioButton-5-0-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-0\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-5-0-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-0-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-0\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-0-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-0-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-0\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-0-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-0-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-0\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-0-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      <tr class=\"matrix_row_dark\">\n        <td class=\"question\" style=\"width: px;\">2. Not being able to stop or control worrying </td>\n        <td><label for=\"RESULT_RadioButton-5-1-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-1\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-5-1-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-1-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-1\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-1-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-1-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-1\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-1-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-1-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-1\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-1-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      <tr class=\"matrix_row_light\">\n        <td class=\"question\" style=\"width: px;\">3. Worrying too much about different things </td>\n        <td><label for=\"RESULT_RadioButton-5-2-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-2\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-5-2-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-2-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-2\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-2-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-2-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-2\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-2-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-2-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-2\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-2-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      <tr class=\"matrix_row_dark\">\n        <td class=\"question\" style=\"width: px;\">4. Trouble relaxing </td>\n        <td><label for=\"RESULT_RadioButton-5-3-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-3\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-5-3-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-3-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-3\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-3-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-3-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-3\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-3-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-3-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-3\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-3-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      <tr class=\"matrix_row_light\">\n        <td class=\"question\" style=\"width: px;\">5. Being so restless that it is hard to sit still </td>\n        <td><label for=\"RESULT_RadioButton-5-4-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-4\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-5-4-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-4-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-4\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-4-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-4-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-4\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-4-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-4-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-4\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-4-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      <tr class=\"matrix_row_dark\">\n        <td class=\"question\" style=\"width: px;\">6. Becoming easily annoyed or irritable </td>\n        <td><label for=\"RESULT_RadioButton-5-5-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-5\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-4-5-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-5-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-5\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-5-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-5-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-5\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-5-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-5-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-5\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-5-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      <tr class=\"matrix_row_light\">\n        <td class=\"question\" style=\"width: px;\">7. Feeling afraid as if something awful might happen </td>\n        <td><label for=\"RESULT_RadioButton-5-6-0\"\n          class=\"hidden\">Strongly Agree</label><input\n          type=\"radio\" name=\"RESULT_RadioButton-5-6\"\n          class=\"multiple_choice\" id=\"RESULT_RadioButton-5-6-0\" value=\"0\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-6-1\"\n          class=\"hidden\">Agree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-6\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-6-1\" value=\"1\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-6-2\"\n          class=\"hidden\">Neutral</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-6\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-6-2\" value=\"2\" /></td>\n        <td><label for=\"RESULT_RadioButton-5-6-3\"\n          class=\"hidden\">Disagree</label><input type=\"radio\"\n          name=\"RESULT_RadioButton-5-6\" class=\"multiple_choice\"\n          id=\"RESULT_RadioButton-5-6-3\" value=\"3\" /></td>\n        \n      </tr>\n      \n      \n      \n      </table>\n      \n      \n    </div>\n    \n    <!-- end of GAD-7 -->\n      <!-- begin WSAS questions -->\n      <div id=\"q4\" class=\"q required col-md-12\" style=\"border:2px solid black;\">\n\t\t\t\t\t\t\n        <h2 style=\"color:black;text-align:center;text-decoration:underline;margin-bottom:20px;\">Your current  functioning</h2>\n        \n        <span class=\"question top_question\">Instructions: People's problems sometimes affect their ability to do certain day-to-day tasks in their lives. Below is a list of statements dealing with  your  current  functioning in the last 2 weeks. \n        Please read the items carefully and choose one  of the options that best describes you. '0' means 'not at all impaired' and '8' means very severely impaired to the point I can't work.&nbsp;<b class=\"icon_required\" style=\"color:#FF0000\">*</b></span>\n        <br>\n        <br>\n        \n        \n        \n        <div class=\"col-md-12\" style=\"margin-bottom:20px;\">\n    \n    \n        <div class=\"form-group\">\n      \n        <label class=\"label-css\">1. Because of my [problem] my ability to work is impaired.</label> \n        \n        <div class =\"dropdown col-md-6\">\n        \n        <select  id = \"select_ability\" class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n        <option  value=\"9\" class =\"option_class\" selected>Select</option>\n        <option value=\"0\"  class =\"option_class\" name=\"RESULT_RadioButton-6-0-0\">0(Not at all)</option>\n            <option value=\"1\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-1\">1</option>\n            <option value=\"2\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-2\">2(Slightly)</option>\n            <option value=\"3\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-3\">3</option>\n            <option value=\"4\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-4\">4(Definitely)</option>\n            <option value=\"5\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-5\">5</option>\n            <option value=\"6\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-6\">6(Markedly)</option>\n            <option value=\"7\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-7\">7</option>\n            <option value=\"8\" class =\"option_class\" name=\"RESULT_RadioButton-6-0-8\">8(Very severely)</option>\n        \n        </select>\n        \n        </div>\n        \n        </div>\n        \n      </div>\n      \n      \n      \n      <div class=\"col-md-12\" style=\"margin-bottom:20px;\">\n    \n    \n        <div class=\"form-group\">\n      \n        <label class=\"label-css\">2. Because of my [problem] my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.</label> \n        \n        <div class =\"dropdown col-md-6\">\n        \n        <select  id = \"select_home\" class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n        <option value=\"9\" class =\"option_class\" selected>Select</option>\n        <option value=\"0\"  class =\"option_class\" name=\"RESULT_RadioButton-6-1-0\">0(Not at all)</option>\n            <option value=\"1\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-1\">1</option>\n            <option value=\"2\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-2\">2(Slightly)</option>\n            <option value=\"3\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-3\">3</option>\n            <option value=\"4\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-4\">4(Definitely)</option>\n            <option value=\"5\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-5\">5</option>\n            <option value=\"6\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-6\">6(Markedly)</option>\n            <option value=\"7\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-7\">7</option>\n            <option value=\"8\" class =\"option_class\" name=\"RESULT_RadioButton-6-1-8\">8(Very severely)</option>\n        \n        </select>\n        \n        </div>\n        \n        </div>\n        \n      </div>\n      \n      <div class=\"col-md-12\" style=\"margin-bottom:20px;\">\n    \n    \n        <div class=\"form-group\">\n      \n        <label class=\"label-css\">3. Because of my [problem] my social leisure activities (with other people e.g. parties, bars, clubs, outings, visits, dating, home entertaining) are impaired.</label> \n        \n        <div class =\"dropdown col-md-6\">\n        \n        <select  id = \"select_leisure\"  class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n        <option  value=\"9\" class =\"option_class\" selected>Select</option>\n        <option value=\"0\"  class =\"option_class\" name=\"RESULT_RadioButton-6-2-0\">0(Not at all)</option>\n            <option value=\"1\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-1\">1</option>\n            <option value=\"2\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-2\">2(Slightly)</option>\n            <option value=\"3\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-3\">3</option>\n            <option value=\"4\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-4\">4(Definitely)</option>\n            <option value=\"5\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-5\">5</option>\n            <option value=\"6\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-6\">6(Markedly)</option>\n            <option value=\"7\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-7\">7</option>\n            <option value=\"8\" class =\"option_class\" name=\"RESULT_RadioButton-6-2-8\">8(Very severely)</option>\n        \n        </select>\n        \n        </div>\n        \n        </div>\n        \n      </div>\n      \n      <div class=\"col-md-12\" style=\"margin-bottom:20px;\">\n    \n    \n        <div class=\"form-group\">\n      \n        <label class=\"label-css\">4. Because of my [problem], my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired.</label> \n        \n        <div class =\"dropdown col-md-6\">\n        \n        <select  id = \"select_private\" class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n        <option value=\"9\" class =\"option_class\" selected>Select</option>\n        <option value=\"0\"  class =\"option_class\" name=\"RESULT_RadioButton-6-3-0\">0(Not at all)</option>\n            <option value=\"1\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-1\">1</option>\n            <option value=\"2\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-2\">2(Slightly)</option>\n            <option value=\"3\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-3\">3</option>\n            <option value=\"4\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-4\">4(Definitely)</option>\n            <option value=\"5\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-5\">5</option>\n            <option value=\"6\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-6\">6(Markedly)</option>\n            <option value=\"7\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-7\">7</option>\n            <option value=\"8\" class =\"option_class\" name=\"RESULT_RadioButton-6-3-8\">8(Very severely)</option>\n        \n        </select>\n        \n        </div>\n        \n        </div>\n        \n      </div>\n      \n      <div class=\"col-md-12\" style=\"margin-bottom:20px;\">\n    \n    \n        <div class=\"form-group\">\n      \n        <label class=\"label-css\">5. Because of my [problem], my ability to form and maintain close relationships with others, including those I live with, is impaired.</label> \n        \n        <div class =\"dropdown col-md-6\">\n        \n        <select   id = \"select_maintain\" class=\"drop_down\" style = \"background-color:#F0F3FA;\">\n        <option value=\"9\"  class =\"option_class\" selected>Select</option>\n        <option value=\"0\"  class =\"option_class\" name=\"RESULT_RadioButton-6-4-0\">0(Not at all)</option>\n            <option value=\"1\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-1\">1</option>\n            <option value=\"2\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-2\">2(Slightly)</option>\n            <option value=\"3\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-3\">3</option>\n            <option value=\"4\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-4\">4(Definitely)</option>\n            <option value=\"5\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-5\">5</option>\n            <option value=\"6\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-6\">6(Markedly)</option>\n            <option value=\"7\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-7\">7</option>\n            <option value=\"8\" class =\"option_class\" name=\"RESULT_RadioButton-6-4-8\">8(Very severely)</option>\n        \n        </select>\n        \n        </div>\n        \n        </div>\n        \n      </div>\n      \n      \n      \n      </div>\n      <!-- end of WSAS questions -->\n\n          <div class=\"row\" id=\"button_class\" style=\"margin-left:0px;margin-right:0px;text-align:center;\">\n        \n              <div class=\"buttons_reverse\">\n                <button type=\"button\"  id=\"nextbutton2\" name=\"Submit\" value=\"Submit\" (click)=\"submitPage2()\" class=\"submit_button btn btn-success\">Submit</button>\n               \n              </div>\n              </div>\n      </div>\n\n      <div class=\"container\">\n          <div class=\"pagination\">\n      \n            <a href=\"#\">1</a>\n\t\t\t  <a  class=\"active\" href=\"#\">2</a>\n            \n            \n          </div>\n          </div>\n          \n          \n      </div>\n      \n      </div>\n      </div>\n\n<!-- new feedback design with color blocks -->\n<div class=\"modal fade\" id=\"feedbackmodal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n  \n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header modal-header-success\" style=\"background: #4CAF50;color: white\">\n      <button type=\"button\" class=\"btn btn-success\" onclick=\"next_modal()\" style=\"float:right;\" data-dismiss=\"modal\">&times;</button>\n      \n        <h5><b>FEEDBACK</b></h5>\n      </div>\n      \n      <div class=\"modal-body text-justify\">\n      \n      <div class=\"center-container\" style=\"background-color:white;\">\n      \n      <div class=\"col-md-9\">\n      <!-- <h5 style=\"text-align:left;margin-bottom:40px;\">Our gauge of You:<br><br>-->\n      <br><br>\n      <h5>Based on your response, this is how we rate you, on current mood and  functioning indicators.</h5>\n      </div>\n      \n      <div class=\"col-md-3\">\n      <!-- new table added -->\n       <table style=\"margin-left:50px;\">\n        <tr style=\"margin-bottom:10px;\">\n        <td style=\"background-color:#dee7f4;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">None</span></td>\n        \n        </tr>\n        </table><br>\n        \n        <table style=\"margin-left:50px;\">\n        <tr style=\"margin-bottom:10px;\">\n        <td style=\"background-color:#66EAE8;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">Mild</span></td>\n        </tr>\n        </table><br>\n      \n        <table style=\"margin-left:50px;\">\n        <tr>\n        <td style=\"background-color:#0080ff;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">Moderate</span></td>\n        </tr>\n        </table><br>\n      \n        <table style=\"margin-left:50px;\">\n        <tr>\n        <td style=\"background-color:#000099;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">Severe</span></td>\n        </tr>\n        </table>\n        \n      </div>\n      <div class=\"clear\"></div>\n      \n      <br><br>\n      \n      <div class=\"col-md-1\"></div>\n      \n      <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Depressive Symptoms</span></div>\n      \n      <div class=\"col-md-9\">\n      \n        <table class=\"score_table\">\n        \n        \n        \n        <tbody>\n        <tr>\n        <td style=\"height:30px;\" id=\"col1_new\"  class=\"td-border-class\"><p id=\"p1_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\" class=\"td-border-class\">None Reported</p></td>\n        <td style=\"height:30px;\" id=\"col1\"  class=\"td-border-class\"><p id=\"p1\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n        <td id=\"col2\"  class=\"td-border-class\"><p id=\"p2\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n        <td id=\"col3\"  class=\"td-border-class\"><p id=\"p3\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score</p></td>\n        </tr>\n        </tbody>\n        </table><br><br><br>\n        \n      </div>\n      \n      <div class=\"clear\"></div>\n      \n      <div class=\"col-md-1\"></div>\n      \n      <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Anxiety Symptoms</span></div>\n      \n      <div class=\"col-md-9\">\n      \n        <table class=\"score_table\">\n        \n        \n        <tbody>\n        <tr>\n        <td style=\"height:30px;\" id=\"col4_new\"  class=\"td-border-class\"><p id=\"p4_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n        <td style=\"height:30px;\" id=\"col4\"  class=\"td-border-class\"><p id=\"p4\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n        <td id=\"col5\"  class=\"td-border-class\"><p id=\"p5\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n        <td id=\"col6\"  class=\"td-border-class\"><p id=\"p6\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score</p></td>\n        </tr>\n        </tbody>\n        </table><br><br><br>\n        \n      </div>\n      \n      <div class=\"clear\"></div>\n      \n      <div class=\"col-md-1\"></div>\n      \n      <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Self-rated Suicidal Thoughts</span></div>\n      \n      <div class=\"col-md-9\">\n      \n        <table class=\"score_table\">\n        \n        \n        <tbody>\n        <tr>\n        <td style=\"height:30px;\" id=\"col7_new\"  class=\"td-border-class\"><p id=\"p7_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n        <td style=\"height:30px;\" id=\"col7\"  class=\"td-border-class\"><p id=\"p7\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score<br>(Minimal)</p></td>\n        <td id=\"col8\"  class=\"td-border-class\"><p id=\"p8\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score<br>(Low)</p></td>\n        <td id=\"col9\"  class=\"td-border-class\"><p id=\"p9\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score<br>(High)</p></td>\n        </tr>\n        </tbody>\n        </table><br><br><br>\n        \n      </div>\n      \n      <div class=\"clear\"></div>\n      \n      <div class=\"col-md-1\"></div>\n      \n      <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Interference With<br> Daily Functioning</span></div>\n      \n      <div class=\"col-md-9\">\n        <table class=\"score_table\">\n        \n        \n        <tbody>\n        <tr>\n        <td style=\"height:30px;\" id=\"col10_new\"  class=\"td-border-class\"><p id=\"p10_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n        <td style=\"height:30px;\" id=\"col10\"  class=\"td-border-class\"><p id=\"p10\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n        <td id=\"col11\"  class=\"td-border-class\"><p id=\"p11\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n        <td id=\"col12\"  class=\"td-border-class\"><p id=\"p12\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score</p></td>\n        </tr>\n        </tbody>\n        </table><br><br><br>\n        \n      </div>\n      \n      <div class=\"clear\"></div>\n      \n      <p id=\"recommend\" style=\"font-size:15px;text-align:center;\"></p>\n      \n      <p id=\"feedback1\" class=\"hidden\" style=\"color:darkblue;\"><b> \tYou are experiencing mild severity of depressive symptoms.<br>\n           You report minimal I disturbance in your functioning. <br>\n              In addition, you report no significant anxiety symptoms.<br>\n              Or <br>\n               In addition   you report minimal anxiety symptoms.<br><br><br>\n               You may register   for PUSH-D for self-help. <br><br>\n               Please   remember that PUSH-D is   not a tool for providing diagnosis, nor it is a substitute for professional   consultation and treatment. Seeking face to face professional consultation is useful   for provide an accurate and comprehensive evaluation of  mental health  issues. </b></p>\n        \n        <p id=\"feedback2\" class=\"hidden\" style=\"color:darkblue;\"><b> \tYou are experiencing moderate severity of depressive symptoms. <br>\n               Your responses indicate absence of significant suicidal thoughts or a sense of control over such thoughts. <br>\n                You have indicated clinically significant level/ moderate severity of disturbance in your functioning.<br>\n                 In addition, you report mild/moderate level of anxiety symptoms.<br><br>\n                 You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.<br><br><br>\n                 \n              Please   remember that PUSH-D is   not a tool for providing diagnosis, nor it is a substitute for professional   consultation and treatment. Seeking face to face professional consultation is useful   for provide an accurate and comprehensive evaluation of mental health  issues. \n                 </b></p>\n                 \n                 \n        <p id=\"feedback3\" class=\"hidden\" style=\"color:darkblue;\"><b>You are experiencing severe depressive symptoms.<br>\n        Your responses indicate presence of suicidal thoughts and difficulties in controlling such thoughts<br>\n        You have indicated clinically significant level/severe/ moderate severity of- disturbance in your functioning.<br>\n        In addition,   you have indicated mild/moderate/severe anxiety symptoms.<br><br><br>\n        We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you. We can provide    you guidance on seeking referral with a mental health professional in   your  region, if  you so desire Let us know  if   you need   such help in finding  a mental health professional  and  we  will try  to help  with that. Once   you have initiated  treatment,   you can  let us know/ request   your doctor  to contact  us and  we  can  re-examine  the  suitability of PUSH-D  for  you at that  point.  Email for contacting us: push.d.nimhans@gmail.com</b></p>\n      \n      </div>\n      \n      <div class=\"modal-footer\">\n        \n        <button type=\"button\" class=\"btn btn-success\" onclick=\"next_modal()\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end of new design -->\n\n      \n      \n    \n"

/***/ }),

/***/ "../../../../../src/app/screener-page2/screener-page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenerPage2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScreenerPage2Component = (function () {
    function ScreenerPage2Component(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.register3_obj = {};
        this.registernew_obj = {};
        this.new_object = {};
        this.final_data_object = {};
        this.questions7_array = [];
        this.questions5_array = [];
        this.register3_array = [];
        this.company_info_id = 7;
        this.str1 = "Mild";
        this.str2 = "Moderate";
        this.str3 = "Severe";
    }
    ScreenerPage2Component.prototype.ngOnInit = function () {
    };
    ScreenerPage2Component.prototype.submitPage2 = function () {
        //totalScore2 is anxiety score and totalScore3 is current functionng score
        //thirdScreener is anxiety data and fourthScreener is current functioning data
        //anxiety screener
        this.depression0 = $('input[name=RESULT_RadioButton-5-' + 0 + ']:checked').val();
        this.depression1 = $('input[name=RESULT_RadioButton-5-' + 1 + ']:checked').val();
        this.depression2 = $('input[name=RESULT_RadioButton-5-' + 2 + ']:checked').val();
        this.depression3 = $('input[name=RESULT_RadioButton-5-' + 3 + ']:checked').val();
        this.depression4 = $('input[name=RESULT_RadioButton-5-' + 4 + ']:checked').val();
        this.depression5 = $('input[name=RESULT_RadioButton-5-' + 5 + ']:checked').val();
        this.depression6 = $('input[name=RESULT_RadioButton-5-' + 6 + ']:checked').val();
        if (this.depression0 && this.depression1 && this.depression2 && this.depression3 && this.depression4 && this.depression5 && this.depression6) {
            this.thirdScreener = this.depression0 + "#" + this.depression1 + "#" + this.depression2 + "#" + this.depression3 + "#" + this.depression4 + "#" + this.depression5 + "#" + this.depression6;
            this.questions7_array.push(this.depression0, this.depression1, this.depression2, this.depression3, this.depression4, this.depression5, this.depression6);
        }
        else {
            this.thirdScreener = "";
        }
        this.register3_obj.register3_screener1_questions7 = this.questions7_array;
        this.totalScore2 = 0;
        for (var i = 0; i < 7; i++) {
            if ($('input[name=RESULT_RadioButton-5-' + i + ']:checked').val() != undefined) {
                this.fourthScreener += $('input[name=RESULT_RadioButton-5-' + i + ']:checked').val() + "@";
                this.totalScore2 += parseInt($('input[name=RESULT_RadioButton-5-' + i + ']:checked').val());
            }
        }
        this.registernew_obj.company_info_id = this.company_info_id;
        this.register3_obj.register3_screener1_totalScore1 = this.totalScore2;
        //end of third screener
        //fourth or current functioning screener
        this.totalScore3 = 0;
        this.function1 = parseInt($('#select_ability').find(":selected").val());
        this.function2 = parseInt($('#select_home').find(":selected").val());
        this.function3 = parseInt($('#select_leisure').find(":selected").val());
        this.function4 = parseInt($('#select_private').find(":selected").val());
        this.function5 = parseInt($('#select_maintain').find(":selected").val());
        this.questions5_array.push(this.function1, this.function2, this.function3, this.function4, this.function5);
        this.register3_obj.register3_screener2_questions5 = this.questions5_array;
        this.totalScore3 += this.function1 + this.function2 + this.function3 + this.function4 + this.function5;
        //object of second page response data
        //this.registernew_obj.reginfo=this.thirdScreener+"#@@#undefined@"+this.function1+"@"+this.function2+"@"+this.function3+"@"+this.function4+"@"+this.function5+"@";
        this.registernew_obj.reginfo = this.thirdScreener + "#@@#@" + this.function1 + "@" + this.function2 + "@" + this.function3 + "@" + this.function4 + "@" + this.function5 + "@";
        this.register3_obj.register3_screener2_totalScore2 = this.totalScore3;
        this.register3_array.push(this.register3_obj);
        localStorage.setItem("register3_array_localstorage", JSON.stringify(this.register3_array[0]));
        //new code added
        this.retrievedData1 = localStorage.getItem("register1_array_localstorage");
        this.register1_array = JSON.parse(this.retrievedData1);
        this.retrievedData2 = localStorage.getItem("register2_array_localstorage");
        this.register2_array = JSON.parse(this.retrievedData2);
        //newly added code to pass get the first page response object to pass along with the second page response object to the database
        this.new_object = localStorage.getItem("new_object");
        this.new_object = JSON.parse(this.new_object);
        //first page data
        //console.log(this.new_object);
        //second page data
        //console.log(this.registernew_obj);
        //assign the company_info_id
        this.company_id = sessionStorage.getItem("compnayId");
        this.final_data_object.company_info_id = this.company_id;
        this.final_data_object.responce = this.new_object.reginfo + "@@@@" + this.registernew_obj.reginfo;
        //object of first and second page combined data wihth @@@@ joining first page and second page data
        if ((this.questions7_array.length == 7) && (this.function1 != 9) && (this.function2 != 9) && (this.function3 != 9) && (this.function4 != 9) && (this.function5 != 9)) {
            $('#nextbutton2').prop('disabled', true);
            //newly added code for displaying feedback
            //depression screener
            this.serverService.saveResponse(this.final_data_object)
                .subscribe(function (response) {
                //console.log(response);
            }, function (error) { return console.log(error); });
            if (this.register2_array.register2_screener1_totalScore1 == 0) {
                this.feedback1 = this.str1;
                $('#col1_new').addClass("color_class_new");
                $('#p1_new').removeClass("hidden");
            }
            else if ((this.register2_array.register2_screener1_totalScore1 > 0) && (this.register2_array.register2_screener1_totalScore1 <= 5)) {
                this.feedback1 = this.str1;
                $('#col1_new').addClass("color_class_new");
                $('#col1').addClass("color_class");
                $('#p1').removeClass("hidden");
            }
            else if (this.register2_array.register2_screener1_totalScore1 > 5 && this.register2_array.register2_screener1_totalScore1 <= 10) {
                $('#col1_new').addClass("color_class_new");
                $("#col1").addClass("color_class");
                $("#col2").addClass("color_class1");
                $('#p2').removeClass("hidden");
                this.feedback1 = this.str2;
            }
            else {
                $('#col1_new').addClass("color_class_new");
                $("#col1").addClass("color_class");
                $("#col2").addClass("color_class1");
                $("#col3").addClass("color_class2");
                $('#p3').removeClass("hidden");
                this.feedback1 = this.str3;
            }
            /*self-rated suicidability thoughts score*/
            if (this.register2_array.register2_screener2_totalScore2 == "Mild risk") {
                this.feedback2 = this.str1;
                $("#col7_new").addClass("color_class_new");
                $("#col7").addClass("color_class");
                $('#p7').removeClass("hidden");
            }
            else if (this.register2_array.register2_screener2_totalScore2 == "Moderate risk") {
                this.feedback2 = this.str2;
                $("#col7_new").addClass("color_class_new");
                $("#col7").addClass("color_class");
                $("#col8").addClass("color_class1");
                $('#p8').removeClass("hidden");
            }
            else if (this.register2_array.register2_screener2_totalScore2 == "High risk") {
                this.feedback2 = this.str3;
                $("#col7_new").addClass("color_class_new");
                $("#col7").addClass("color_class");
                $("#col8").addClass("color_class1");
                $("#col9").addClass("color_class2");
                $('#p9').removeClass("hidden");
            }
            /*anxiety screener score*/
            if (this.register3_array[0].register3_screener1_totalScore1 == 0) {
                $("#col4_new").addClass("color_class_new");
                $('#p4_new').removeClass("hidden");
                this.feedback3 = this.str1;
            }
            else if ((this.register3_array[0].register3_screener1_totalScore1 > 0) && (this.register3_array[0].register3_screener1_totalScore1 <= 5)) {
                $("#col4_new").addClass("color_class_new");
                $("#col4").addClass("color_class");
                $('#p4').removeClass("hidden");
                this.feedback3 = this.str1;
            }
            else if (this.register3_array[0].register3_screener1_totalScore1 > 5 && this.register3_array[0].register3_screener1_totalScore1 <= 10) {
                $("#col4_new").addClass("color_class_new");
                $("#col4").addClass("color_class");
                $("#col5").addClass("color_class1");
                $('#p5').removeClass("hidden");
                this.feedback3 = this.str2;
            }
            else {
                this.feedback3 = this.str3;
                $("#col4_new").addClass("color_class_new");
                $("#col4").addClass("color_class");
                $("#col5").addClass("color_class1");
                $("#col6").addClass("color_class2");
                $('#p6').removeClass("hidden");
            }
            /*current functioning*/
            if (this.register3_array[0].register3_screener2_totalScore2 == 0) {
                this.feedback4 = this.str1;
                $("#col10_new").addClass("color_class_new");
                $('#p10_new').removeClass("hidden");
            }
            else if ((this.register3_array[0].register3_screener2_totalScore2 > 0) && (this.register3_array[0].register3_screener2_totalScore2 <= 10)) {
                this.feedback4 = this.str1;
                $("#col10_new").addClass("color_class_new");
                $("#col10").addClass("color_class");
                $('#p10').removeClass("hidden");
            }
            else if (this.register3_array[0].register3_screener2_totalScore2 > 10 && this.register3_array[0].register3_screener2_totalScore2 <= 20) {
                this.feedback4 = this.str2;
                $("#col10_new").addClass("color_class_new");
                $("#col10").addClass("color_class");
                $("#col11").addClass("color_class1");
                $('#p11').removeClass("hidden");
            }
            else {
                this.feedback4 = this.str3;
                $("#col10_new").addClass("color_class_new");
                $("#col10").addClass("color_class");
                $("#col11").addClass("color_class1");
                $("#col12").addClass("color_class2");
                $('#p12').removeClass("hidden");
            }
            //displaying the recommendations from push-d team on the right side of the modal
            if (this.feedback1 == this.str3 && this.feedback2 == this.str3 || this.feedback3 == this.str3 || this.feedback4 == this.str3) {
                this.output = "We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
                document.getElementById("recommend").innerHTML = this.output;
                document.getElementById("recommend").style.textAlign = "justify";
                document.getElementById("recommend").style.padding = "50px";
                document.getElementById("recommend").style.fontWeight = "bold";
            }
            else if (this.feedback1 == this.str2 && this.feedback2 == this.str2 || this.feedback3 == this.str2 || this.feedback4 == this.str2) {
                this.output = "You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
                document.getElementById("recommend").innerHTML = this.output;
                document.getElementById("recommend").style.textAlign = "justify";
                document.getElementById("recommend").style.padding = "50px";
                document.getElementById("recommend").style.fontWeight = "bold";
            }
            else {
                this.output = "You may register   for PUSH-D for self-help.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
                document.getElementById("recommend").innerHTML = this.output;
                document.getElementById("recommend").style.textAlign = "justify";
                document.getElementById("recommend").style.padding = "50px";
                document.getElementById("recommend").style.fontWeight = "bold";
            }
            $('#feedbackmodal').modal("show");
        }
        else {
            alert("all fields are mandatory");
            this.questions7_array = [];
            this.register3_array = [];
            return false;
        }
    };
    ScreenerPage2Component.prototype.logOut = function () {
        this.router.navigate(['/']);
    };
    return ScreenerPage2Component;
}());
ScreenerPage2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-screener-page2',
        template: __webpack_require__("../../../../../src/app/screener-page2/screener-page2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/screener-page2/screener-page2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ScreenerPage2Component);

var _a, _b;
//# sourceMappingURL=screener-page2.component.js.map

/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServerService = (function () {
    function ServerService(http, https) {
        this.http = http;
        this.https = https;
        //url to connect to backend
        //AWS server and db
        //private baseUrl= 'http://13.232.16.87:8080/Lab_Tracker';
        //local server and db
        this.baseUrl = 'http://localhost:8080';
        this.data = {};
        this.obj = {};
        this.company1 = null;
        this.company2 = null;
        this.companyObject = {};
    }
    ServerService.prototype.getCompanyInfo = function () {
        return this.http.get(this.baseUrl + '/company/getCompanyInfo')
            .map(function (res) { return res.json(); }).catch(this.errorHandler);
    };
    ServerService.prototype.getSelectedCompanyInfo = function (company_id) {
        return this.http.get(this.baseUrl + '/company/editCompany?company_info_id=' + company_id + '')
            .map(function (res) { return res.json(); }).catch(this.errorHandler);
    };
    ServerService.prototype.loginUser = function (companyCode) {
        return this.http.get(this.baseUrl + '/company/checkCompanyCode?company_code=' + companyCode + '')
            .map(function (res) { return res.json(); }).catch(this.errorHandler);
    };
    ServerService.prototype.loginAdmin = function (user_name, pwd) {
        this.obj.username = user_name;
        this.obj.password = pwd;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.baseUrl + '/company/login', this.obj, { headers: headers })
            .map(function (res) { return res.text(); }).catch(this.errorHandler);
    };
    ServerService.prototype.addCompany = function (company) {
        console.log(company);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.baseUrl + '/company/saveCompanyInfo', company, { headers: headers })
            .map(function (res) { return res.text(); }).catch(this.errorHandler);
    };
    ServerService.prototype.editCompany = function (company) {
        this.company_id = sessionStorage.getItem("companyId");
        this.companyObject.company_name = company.company_name;
        this.companyObject.company_code = company.company_code;
        this.companyObject.company_address = company.company_address;
        this.companyObject.company_info_id = company.company_info_id;
        this.companyObject.created_at = company.created_at;
        this.company2 = JSON.stringify(this.companyObject);
        console.log("type is--" + typeof this.companyObject.created_at + "--date is--" + this.companyObject.created_at);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.baseUrl + '/company/updateCompanyInfo?company_info_id=' + this.company_id + '', this.company2, { headers: headers })
            .map(function (res) { return res.text(); }).catch(this.errorHandler);
    };
    ServerService.prototype.saveResponse = function (data) {
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.baseUrl + '/company/saveResponce', data, { headers: headers })
            .map(function (res) { return res.text(); }).catch(this.errorHandler);
    };
    ServerService.prototype.getUsersOfCompany = function (company_id) {
        return this.http.get(this.baseUrl + '/company/getResBycompany?company_info_id=' + company_id + '')
            .map(function (res) { return res.json(); }).catch(this.errorHandler);
    };
    ServerService.prototype.displayResponseOfUser = function (res_id) {
        return this.http.get(this.baseUrl + '/company/getResByResId?scr_responce_id=' + res_id + '')
            .map(function (res) { return res.json(); }).catch(this.errorHandler);
    };
    ServerService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error || "SERVER ERROR");
    };
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], ServerService);

var _a, _b;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-data/user-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\t.wsas_class{\r\n\t\r\n        border:1px solid black;\r\n        padding-top:25px;\r\n        padding-bottom:25px;\r\n        \r\n        }\r\n        \r\n        .center_align {\r\n        text-align:center;\r\n        }\r\n        \r\n        \r\n        .header_class {\r\n        background-color:#7ad17a;\r\n        }\r\n        \r\n        html{\r\n        background-color:#349834;\r\n        }\r\n        \r\n    \r\n        h2{\r\n            padding:10px;\r\n            \r\n        }\r\n        th,td{\r\n            \r\n            padding:10px;\r\n            text-align:center;\r\n            border:2px solid black;\r\n        }\r\n\r\n        .content-top{\r\n            margin-top:40px;\r\n            background-color: white;\r\n        \r\n        }\r\n        \r\n        .content-top {\r\n            width: 90%;\r\n             margin: 30px auto 30px;\r\n            padding: 40px 40px;\r\n        }\r\n        .content-top1{\r\n            width: 90%;\r\n             margin: 30px auto 30px;\r\n                padding: 40px 40px;\r\n            \r\n        }\r\n        .grid-w3layouts1 {\r\n            margin-bottom: 2em;\r\n        }\r\n        .content-top {\r\n            padding: 40px 40px 20px;\r\n        }\r\n        \r\n        @media (max-width: 667px) {\r\n        .content-top {\r\n            width: 90%;\r\n            margin: 20px auto 40px;\r\n            padding: 35px 35px 20px;\r\n        }\r\n        .content-top1{\r\n            width: 90%;\r\n             margin: 20px auto 20px;\r\n                padding: 35px 35px;\r\n            \r\n        }\r\n        input#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n            width: 92%;\r\n        }\r\n        \r\n        }\r\n        @media (max-width: 640px) {\r\n        h1.header-w3ls {\r\n            font-size: 30px;\r\n        }\r\n        .content-top {\r\n            width: 90%;\r\n        }\r\n        }\r\n        @media (max-width: 600px) {\r\n        p.copyright {\r\n            font-size: 15px;\r\n            padding-bottom: 0;\r\n        }\r\n        .content-top {\r\n            width: 90%;\r\n             margin: 20px auto 40px;\r\n            padding: 35px 35px 20px;\r\n        }\r\n        .content-top1{\r\n            width: 90%;\r\n             margin: 20px auto 20px;\r\n                padding: 35px 35px;\r\n            \r\n        }\r\n        }\r\n        @media (max-width: 568px) {\r\n        .content-top {\r\n            width: 90%;\r\n        }\r\n        .content-top1{\r\n            width: 90%;\r\n             \r\n            \r\n        }\r\n        }\r\n    .header_class {\r\n        background-color:#7ad17a;\r\n        padding-top:10px;\r\n        padding-bottom:10px;\r\n        color:white;\r\n        }\r\n\r\n        #footer {\r\n            background-color:#003300;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        height: 4rem; \r\n            color:white;             /* Footer height */\r\n            }\r\n            \r\n\r\n            .header_class1 {\r\n                background-color:white;\r\n                padding-top:10px;\r\n                padding-bottom:10px;\r\n                color:black;\r\n                }\r\n\r\n                th{\r\n                    color:#3c42e8;\r\n                }\r\n                    \r\n                    .className {\r\n                    \r\n                    border:2px solid black;\r\n                    max-width:150px;\r\n                    min-width:100px;\r\n                    padding-left:5px;\r\n                    text-align:center;\r\n                    }\r\n                    .className1 {\r\n                   \r\n                    padding-left:5px;\r\n                    text-align:center;\r\n                    }\r\n                    \r\n                    .new_header_class{\r\n                    padding-right:10px;\r\n                    padding-left:10px;\r\n                    font-size:13px;\r\n                    font-weight:normal;\r\n                    }\r\n                    th{\r\n                    color:#3c42e8;\r\n                    }\r\n\r\n                    /*begin user feedback modal css */\r\n\r\n                    \r\n\t.wsas_class{\r\n\t\r\n        border:1px solid black;\r\n        padding-top:25px;\r\n        padding-bottom:25px;\r\n        \r\n        }\r\n        \r\n        .center_align {\r\n        text-align:center;\r\n        }\r\n        \r\n        \r\n        \r\n    /* begin css code for earlier image design for feedback*/\r\n        @media ( min-width : 1281px) {\r\n        \r\n        #depress_new{\r\n        display:none;\r\n        }\r\n        #anxiety_new{\r\n        display:none;\r\n        }\r\n        #self_new{\r\n        display:none;\r\n        }\r\n        #daily_new{\r\n        display:none;\r\n        }\r\n        .centered {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        }\r\n    \r\n    /* Three image containers (use 25% for four, and 50% for two, etc) */\r\n    .column1 {\r\n      float: left;\r\n      width: 50%;\r\n      padding-left: 95px;\r\n        }\r\n    \r\n    .column2 {\r\n      float: left;\r\n      width: 50%;\r\n      padding: 5px;\r\n        }\r\n    \r\n    /* Clear floats after image containers */\r\n    .row::after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n        }\r\n    \r\n    .text-block {\r\n        position: absolute;\r\n        top: 75px;\r\n        left: 230px;\r\n       \r\n        color: white;\r\n        padding-left: 10px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block1 {\r\n        position: absolute;\r\n        top: 175px;\r\n        left: 227px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block2 {\r\n        position: absolute;\r\n        top: 315px;\r\n        left: 225px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n        \r\n        .text-block3 {\r\n        position: absolute;\r\n        top: 460px;\r\n        left: 230px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n       }\r\n       \r\n       .text-block4 {\r\n        position: absolute;\r\n        top: 100px;\r\n        left: 540px;\r\n       \r\n        color: white;\r\n        padding-right: 160px;\r\n       }\r\n       }\r\n       \r\n       @media ( min-width : 1025px) and (max-width: 1280px) {\r\n       \r\n       #depress_new{\r\n        display:none;\r\n        }\r\n        #anxiety_new{\r\n        display:none;\r\n        }\r\n        #self_new{\r\n        display:none;\r\n        }\r\n        #daily_new{\r\n        display:none;\r\n        }\r\n       \r\n       .centered {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        }\r\n    \r\n    /* Three image containers (use 25% for four, and 50% for two, etc) */\r\n    .column1 {\r\n      float: left;\r\n      width: 50%;\r\n      padding-left: 95px;\r\n        }\r\n    \r\n    .column2 {\r\n      float: left;\r\n      width: 50%;\r\n      padding: 5px;\r\n        }\r\n    \r\n    /* Clear floats after image containers */\r\n    .row::after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n        }\r\n    \r\n    .text-block {\r\n        position: absolute;\r\n        top: 75px;\r\n        left: 230px;\r\n       \r\n        color: white;\r\n        padding-left: 10px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block1 {\r\n        position: absolute;\r\n        top: 175px;\r\n        left: 227px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block2 {\r\n        position: absolute;\r\n        top: 315px;\r\n        left: 225px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n        \r\n        .text-block3 {\r\n        position: absolute;\r\n        top: 460px;\r\n        left: 230px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n       }\r\n       \r\n       .text-block4 {\r\n        position: absolute;\r\n        top: 100px;\r\n        left: 540px;\r\n       \r\n        color: white;\r\n        padding-right: 160px;\r\n       }\r\n       }\r\n       \r\n       @media ( min-width : 768px) and (max-width: 1024px) {\r\n       \r\n       #depress_new{\r\n        display:none;\r\n        }\r\n        #anxiety_new{\r\n        display:none;\r\n        }\r\n        #self_new{\r\n        display:none;\r\n        }\r\n        #daily_new{\r\n        display:none;\r\n        }\r\n       \r\n        .centered {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        }\r\n    \r\n    /* Three image containers (use 25% for four, and 50% for two, etc) */\r\n    .column1 {\r\n      float: left;\r\n      width: 50%;\r\n      padding-left: 95px;\r\n        }\r\n    \r\n    .column2 {\r\n      float: left;\r\n      width: 50%;\r\n      padding: 5px;\r\n        }\r\n    \r\n    /* Clear floats after image containers */\r\n    .row::after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n        }\r\n    \r\n    .text-block {\r\n        position: absolute;\r\n        top: 53px;\r\n        left: 180px;\r\n       \r\n        color: white;\r\n        padding-left: 10px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block1 {\r\n        position: absolute;\r\n        top: 113px;\r\n        left: 167px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block2 {\r\n        position: absolute;\r\n        top: 197px;\r\n        left: 164px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n        \r\n        .text-block3 {\r\n        position: absolute;\r\n        top: 284px;\r\n        left: 180px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n       }\r\n       \r\n       .text-block4 {\r\n        position: absolute;\r\n        top: 82px;\r\n        left: 400px;\r\n       \r\n        color: white;\r\n        padding-right: 160px;\r\n       }\r\n       }\r\n       \r\n        @media ( min-width : 990px) and (max-width: 1024px) and (orientation:\r\n        landscape) {\r\n        \r\n        #depress_new{\r\n        display:none;\r\n        }\r\n        #anxiety_new{\r\n        display:none;\r\n        }\r\n        #self_new{\r\n        display:none;\r\n        }\r\n        #daily_new{\r\n        display:none;\r\n        }\r\n         .centered {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        }\r\n    \r\n    /* Three image containers (use 25% for four, and 50% for two, etc) */\r\n    .column1 {\r\n      float: left;\r\n      width: 50%;\r\n      padding-left: 95px;\r\n        }\r\n    \r\n    .column2 {\r\n      float: left;\r\n      width: 50%;\r\n      padding: 5px;\r\n        }\r\n    \r\n    /* Clear floats after image containers */\r\n    .row::after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n        }\r\n    \r\n    .text-block {\r\n        position: absolute;\r\n        top: 76px;\r\n        left: 237px;\r\n       \r\n        color: white;\r\n        padding-left: 10px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block1 {\r\n        position: absolute;\r\n        top: 180px;\r\n        left: 226px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block2 {\r\n        position: absolute;\r\n        top: 317px;\r\n        left: 218px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n        \r\n        .text-block3 {\r\n        position: absolute;\r\n        top: 456px;\r\n        left: 234px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n       }\r\n       \r\n       .text-block4 {\r\n        position: absolute;\r\n        top: 110px;\r\n        left: 553px;\r\n       \r\n        color: white;\r\n        padding-right: 160px;\r\n       }\r\n        }\r\n        \r\n       @media ( min-width : 768px) and (max-width: 989px) and (orientation:\r\n        landscape) {\r\n        \r\n        #depress_new{\r\n        display:none;\r\n        }\r\n        #anxiety_new{\r\n        display:none;\r\n        }\r\n        #self_new{\r\n        display:none;\r\n        }\r\n        #daily_new{\r\n        display:none;\r\n        }\r\n        \r\n         .centered {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        }\r\n    \r\n    /* Three image containers (use 25% for four, and 50% for two, etc) */\r\n    .column1 {\r\n      float: left;\r\n      width: 50%;\r\n      padding-left: 95px;\r\n        }\r\n    \r\n    .column2 {\r\n      float: left;\r\n      width: 50%;\r\n      padding: 5px;\r\n        }\r\n    \r\n    /* Clear floats after image containers */\r\n    .row::after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n        }\r\n    \r\n    .text-block {\r\n        position: absolute;\r\n        top: 53px;\r\n        left: 180px;\r\n       \r\n        color: white;\r\n        padding-left: 10px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block1 {\r\n        position: absolute;\r\n        top: 113px;\r\n        left: 167px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n    \r\n    .text-block2 {\r\n        position: absolute;\r\n        top: 197px;\r\n        left: 164px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        }\r\n        \r\n        .text-block3 {\r\n        position: absolute;\r\n        top: 284px;\r\n        left: 180px;\r\n       \r\n        color: white;\r\n        padding-left: 20px;\r\n       }\r\n       \r\n       .text-block4 {\r\n        position: absolute;\r\n        top: 82px;\r\n        left: 400px;\r\n       \r\n        color: white;\r\n        padding-right: 160px;\r\n       }\r\n        }\r\n        \r\n        @media ( min-width : 481px) and (max-width: 767px) {\r\n        \r\n        #img1{\r\n        display:none;\r\n        }\r\n        \r\n        #img2{\r\n        display:none;\r\n        }\r\n        \r\n        \r\n       .close {\r\n       \r\n      opacity: .9;\r\n      \r\n        }\r\n        \r\n        .button {\r\n        \r\n        width: 115px;\r\n        height: 25px;\r\n        background: #4E9CAF;\r\n        padding: 5px;\r\n        text-align: center;\r\n        border-radius: 5px;\r\n        color: white;\r\n        font-weight: bold;\r\n         }\r\n         }\r\n         @media ( min-width : 320px) and (max-width: 480px) {\r\n        \r\n        #img1{\r\n        display:none;\r\n        }\r\n        \r\n        #img2{\r\n        display:none;\r\n        }\r\n        \r\n        \r\n       .close {\r\n       \r\n      opacity: .9;\r\n      \r\n        }\r\n        \r\n        .button {\r\n        \r\n        width: 115px;\r\n        height: 25px;\r\n        background: #4E9CAF;\r\n        padding: 5px;\r\n        text-align: center;\r\n        border-radius: 5px;\r\n        color: white;\r\n        font-weight: bold;\r\n         }\r\n         }\r\n         \r\n         /* end of  css code for earlier image design for feedback*/\r\n         \r\n         \r\n         \r\n         \r\n         td{\r\n         border:1px solid black;\r\n         }\r\n         \r\n         th{\r\n         text-align:center;\r\n         }\r\n         .score_table{\r\n          margin: 0 auto;\r\n         table-layout: fixed;\r\n         width : 80%;\r\n         }\r\n         \r\n         .color_class_new{\r\n         background-color:#dee7f4;\r\n         }\r\n         .color_class{\r\n         background-color:#66EAE8;\r\n         text-align:center;\r\n         \r\n         /*font-size:25px;*/\r\n         }\r\n         \r\n         .color_class1{\r\n         background-color:#0080ff;\r\n         }\r\n         .color_class2{\r\n         background-color: #000099;\r\n         }\r\n         \r\n         hr.new1 {\r\n      border: 1px solid black;\r\n    }\r\n    \r\n    .checkbox input[type=checkbox]{\r\n    margin-left:0;\r\n    }\r\n    /* end of user feedback modal css */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n  <div class=\"col-md-12\" style=\" background-color:#7ad17a;\">\n    <div class=\"col-md-2\">\n      <button class=\"btn btn-info\" style=\"margin-top:15px;\" (click)=\"download_table()\">Download</button>\n    </div>\n<div class=\" col-md-8 header-div\" style=\" margin: auto;text-align:center;\">\n<h1 class=\"header-w3ls header_class\" style=\"padding-top:0px;\" >User Response Data</h1>\n\n</div>\n<div class=\"col-md-1\">\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"back()\" style=\"border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>Back</button>\n  \n</div>\n<div class=\"col-md-1\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"logOut()\" style=\"border-radius: 10%;margin-top:15px;\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</button>\n</div>\n</div>\n</div>\n<div style=\"margin-top:20px;\">\n    \n    \n      \n    <div class=\"col-md-12\">\n\n        \n        <!-- <div style=\"text-align:center;margin-bottom:20px;\"><span style=\"font-weight:bold;\">Search: </span><input type=\"text\" id=\"search\" placeholder=\"Enter User_Id\"></input></div> -->\n        \n        \n        <div id=\"divID_new\" style=\"padding-top:0px;overflow:scroll;height:400px;background-color:white;\">\n        \n          <table id=\"table1\" width=\"100%\">\n          <thead>\n          \n          <tr>\n          \n            <th class=\"header_class1\">Sl.No</th>\n            <th class=\"header_class1\">Date</th>\n            <th class=\"header_class1\">User_Id</th>\n            <!-- <th class=\"header_class\">User_name</th>\n            <th class=\"header_class\">Age</th>\n            <th class=\"header_class\">Sex</th> -->\n            \n            <!-- <th class=\"header_class1\">R1<p class=\"new_header_class\" title=\"Have you sought help from a mental health professional any time in your life?\">Q1</p></th>\n            <th class=\"header_class1\">R1<p class=\"new_header_class\" title=\"Do you think you are currently dealing with a mental health problem? \">Q2</p></th>\n            <th class=\"header_class1\">R1<p class=\"new_header_class\" title=\"Are you currently seeking help from a professional for a mental health problem?\">Q3</p></th>\n             -->\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems?Little interest or pleasure in doing things\">Depress Q1</p></th>\n            <th class=\"header_class1\">R2 <p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems? Feeling down, depressed, or hopeless\">Depress Q2</p></th>\n            <th class=\"header_class1\">R2  <p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems? Trouble falling or staying asleep, or sleeping too much.\">Depress Q3</p></th>\n            <th class=\"header_class1\">R2 <p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems?Feeling tired or having little energy.\">Depress Q4</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems? Poor appetite or overeating\">Depress Q5</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems?Feeling bad about yourself or that you are a failure or have let yourself or your family down\">Depress Q6</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems?Trouble concentrating on things, such as reading the newspaper or watching television\">Depress Q7</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems?Moving or speaking so slowly that other people could have noticed? Or the opposite being so fidgety or restless that you have been moving around a lot more than usual\">Depress Q8</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by any of the following problems?Thoughts that you would be better off dead or of hurting yourself in some way\">Depress Q9</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\">Depress Score</p></th>\n            \n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Have you ever attempeted to hurt yourself in the past? \">P4Screener Q1</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Have you thought about how you might actually hurt yourself?\">P4Screener Q2</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"There is a big difference between having a thought and acting on a thought. How likely do you think it is that you will act on any thoughts about hurting yourself or ending your life sometime over the next month?\">P4Screener Q3</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"Are there things in you/your life that will stop you (prevent you) from harming yourself? (Things that would help you to avoid putting suicidal thoughts into action)\">P4Screener Q4</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"If yes,please specify?\">Q4 If yes,please specify</p></th>\n            <th class=\"header_class1\">R2<p class=\"new_header_class\" title=\"p4 screener score\">P4Screener Score</p></th>\n            \n            \n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems? Feeling nervous, anxious or on edge\">Anxiety Q1</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems?Not being able to stop or control worrying\">Anxiety Q2</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems?Worrying too much about different things\">Anxiety Q3</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems?Trouble relaxing\">Anxiety Q4</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems?Being so restless that it is hard to sit still\">Anxiety Q5</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems? Becoming easily annoyed or irritable\">Anxiety Q6</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Over the last 2 weeks, how often have you been bothered by the following problems?Feeling afraid as if something awful might happen\">Anxiety Q7</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\">Anxiety Score</p></th>\n            \n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Because of my [problem] my ability to work is impaired.\">Current.Func Q1</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\" Because of my [problem] my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.\">Current.Func Q2</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Because of my [problem] my social leisure activities (with other people e.g. parties, bars, clubs, outings, visits, dating, home entertaining) are impaired.\">Current.Func Q3</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Because of my [problem], my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired.\">Current.Func Q4</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\" title=\"Because of my [problem], my ability to form and maintain close relationships with others, including those I live with, is impaired.\">Current.Func Q5</p></th>\n            <th class=\"header_class1\">R3<p class=\"new_header_class\">Current.Func Score</p></th>\n            \n            <!-- <th class=\"header_class1\">R4<p class=\"new_header_class\">Q1</p></th>\n            <th class=\"header_class1\">R4<p class=\"new_header_class\">Q2</p></th>\n            <th class=\"header_class1\">R4<p class=\"new_header_class\">Q3(selected options)</p></th> -->\n          \n            <th class=\"header_class1\">Overall<p class=\"new_header_class\">score</p></th>\n            <!-- <th class=\"header_class1\">Date1<p class=\"new_header_class\"></p></th>\n            <th class=\"header_class1\">Screener1<p class=\"new_header_class\"> after 10 sections</p></th>\n            <th class=\"header_class1\">Date2<p class=\"new_header_class\"></p></th>\n            <th class=\"header_class1\">Screener2<p class=\"new_header_class\">after 3 weeks</p></th>  -->\n            \n          \n          \n          </tr>\n          </thead>\n\n          <tbody>\n              <tr *ngFor=\"let test of dataArray; let i = index\">\n                  <td>{{i+1}}</td>\n                  <td>{{test[i]}}</td>\n                  <td><a [routerLink]=\"\" (click)=\"displayResponseOfUser(test.data2)\">{{test.data2}}</a></td>\n                  <td>{{test.data3}}</td>\n                  <td>{{test.data4}}</td>\n                  <td>{{test.data5}}</td>\n                  <td>{{test.data6}}</td>\n                  <td>{{test.data7}}</td>\n                  <td>{{test.data8}}</td>\n                  <td>{{test.data9}}</td>\n                  <td>{{test.data10}}</td>\n                  <td>{{test.data11}}</td>\n                  <td>{{test.data12}}</td>\n                  <td>{{test.data13}}</td>\n                  <td>{{test.data14}}</td>\n                  <td>{{test.data15}}</td>\n                  <td>{{test.data16}}</td>\n                  <td>{{test.data17}}</td>\n                  <td>{{test.data18}}</td>\n                  <td>{{test.data19}}</td>\n                  <td>{{test.data20}}</td>\n                  <td>{{test.data21}}</td>\n                  <td>{{test.data22}}</td>\n                  <td>{{test.data23}}</td>\n                  <td>{{test.data24}}</td>\n                  <td>{{test.data25}}</td>\n                  <td>{{test.data26}}</td>\n                  <td>{{test.data27}}</td>\n                  <td>{{test.data28}}</td>\n                  <td>{{test.data29}}</td>\n                  <td>{{test.data30}}</td>\n                  <td>{{test.data31}}</td>\n                  <td>{{test.data32}}</td>\n                  <td>{{test.data33}}</td>\n\n                  \n                </tr>\n          </tbody>\n          \n          </table>\n        \n        </div>\n        <!-- <div class=\"col-md-12\">\n        <div class=\"\" style=\"margin-top:20px;float:right\">\n        <button class=\"btn btn-info\" (click)=\"download_table()\">Download</button>\n      </div>\n\n        <div class=\"footer\" id=\"footer\">\n            \n            <div class=\" text-center wow fadeIn\" data-wow-delay=\"0.4s\">\n              <p class=\"copyright\">Copyright &copy; 2019 - NIMHANS</p>\n            </div>\n          \n          </div>\n        </div> -->\n        \n        </div>\n      </div>\n\n      <div class=\"modal fade\" id=\"feedbackmodal\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n        \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header modal-header-success\" style=\"background: #4CAF50;color: white\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"close_modal()\" style=\"float:right;\">&times;</button>\n            \n              <p id=\"feedback_of_user_id\" style=\"font-weight:bold;text-align:center;\">Scores and overall feedback of user_id :{{id}} </p>\n            </div>\n            \n            <div class=\"modal-body text-justify\">\n            \n            <div class=\"center-container\">\n            \n            <div class=\"col-md-9\">\n            \n            <br><br>\n            <p>Based on your response, this is how we rate you, on current mood and  functioning indicators.</p>\n            </div>\n            \n            <div class=\"col-md-3\">\n            <!-- new table added -->\n             <table style=\"margin-left:50px;\">\n              <tr style=\"margin-bottom:10px;\">\n              <td style=\"background-color:#dee7f4;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">None</span></td>\n              <!-- <br><span style=\"text-align:right;margin-left:10px;\"> Reported</span> -->\n              </tr>\n              </table><br>\n              \n              <table style=\"margin-left:50px;\">\n              <tr style=\"margin-bottom:10px;\">\n              <td style=\"background-color:#66EAE8;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">Mild</span></td>\n              </tr>\n              </table><br>\n            \n              <table style=\"margin-left:50px;\">\n              <tr>\n              <td style=\"background-color:#0080ff;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">Moderate</span></td>\n              </tr>\n              </table><br>\n            \n              <table style=\"margin-left:50px;margin-bottom:10px;\">\n              <tr>\n              <td style=\"background-color:#000099;width:25px;height:25px;\"></td><td style=\"border:none;\"><span style=\"text-align:right;margin-left:10px;\">Severe</span></td>\n              </tr>\n              </table>\n              \n            </div>\n            \n            </div>\n            \n            <div class=\"clear\"></div>\n            \n            <br><br>\n            \n            <div class=\"col-md-1\"></div>\n            \n            <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Depressive Symptoms</span></div>\n            \n            <div class=\"col-md-9\">\n            \n              <table class=\"score_table\">\n              \n              \n              <tbody>\n              <tr>\n              <td style=\"height:30px;\" id=\"col1_new\"><p id=\"p1_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n              <td style=\"height:30px;\" id=\"col1\"><p id=\"p1\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n              <td id=\"col2\"><p id=\"p2\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n              <td id=\"col3\"><p id=\"p3\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score</p></td>\n              </tr>\n              </tbody>\n              </table><br><br><br>\n              \n            </div>\n            \n            <div class=\"clear\"></div>\n            \n            <div class=\"col-md-1\"></div>\n            \n            <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Anxiety Symptoms</span></div>\n            \n            <div class=\"col-md-9\">\n            \n              <table class=\"score_table\">\n              \n              \n              <tbody>\n              <tr>\n              <td style=\"height:30px;\" id=\"col4_new\"><p id=\"p4_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n              <td style=\"height:30px;\" id=\"col4\"><p id=\"p4\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n              <td id=\"col5\"><p id=\"p5\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n              <td id=\"col6\"><p id=\"p6\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score</p></td>\n              </tr>\n              </tbody>\n              </table><br><br><br>\n              \n            </div>\n            \n            <div class=\"clear\"></div>\n            \n            <div class=\"col-md-1\"></div>\n            \n            <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Self-rated Suicidal Thoughts</span></div>\n            \n            <div class=\"col-md-9\">\n            \n              <table class=\"score_table\">\n              \n              \n              <tbody>\n              <tr>\n              <td style=\"height:30px;\" id=\"col7_new\"><p id=\"p7_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n              <td style=\"height:30px;\" id=\"col7\"><p id=\"p7\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score<br>(Minimal)</p></td>\n              <td id=\"col8\"><p id=\"p8\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score<br>(Low)</p></td>\n              <td id=\"col9\"><p id=\"p9\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score<br>(High)</p></td>\n              </tr>\n              </tbody>\n              </table><br><br><br>\n              \n            </div>\n            \n            <div class=\"clear\"></div>\n            \n            <div class=\"col-md-1\"></div>\n            \n            <div class=\"col-md-2\"><span style=\"font-weight:bold;\">Interference With<br> Daily Functioning</span></div>\n            \n            <div class=\"col-md-9\">\n              <table class=\"score_table\">\n              \n              \n              <tbody>\n              <tr>\n              <td style=\"height:30px;\" id=\"col10_new\"><p id=\"p10_new\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">None Reported</p></td>\n              <td style=\"height:30px;\" id=\"col10\"><p id=\"p10\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n              <td id=\"col11\"><p id=\"p11\" class=\"hidden\" style=\"color:black;text-align:center;font-weight:bold;\">Your Score</p></td>\n              <td id=\"col12\"><p id=\"p12\" class=\"hidden\" style=\"color:white;text-align:center;font-weight:bold;\">Your Score</p></td>\n              </tr>\n              </tbody>\n              </table><br><br><br>\n              \n            </div>\n            \n            <div class=\"clear\"></div>\n            \n            <p id=\"recommend\" style=\"font-size:15px;text-align:center;\"></p>\n            \n            <p id=\"feedback1\" class=\"hidden\" style=\"color:darkblue;\"><b> \tYou are experiencing mild severity of depressive symptoms.<br>\n                 You report minimal I disturbance in your functioning. <br>\n                    In addition, you report no significant anxiety symptoms.<br>\n                    Or <br>\n                     In addition   you report minimal anxiety symptoms.<br><br><br>\n                     You may register   for PUSH-D for self-help. <br><br>\n                     Please   remember that PUSH-D is   not a tool for providing diagnosis, nor it is a substitute for professional   consultation and treatment. Seeking face to face professional consultation is useful   for provide an accurate and comprehensive evaluation of  mental health  issues. </b></p>\n              \n              <p id=\"feedback2\" class=\"hidden\" style=\"color:darkblue;\"><b> \tYou are experiencing moderate severity of depressive symptoms. <br>\n                     Your responses indicate absence of significant suicidal thoughts or a sense of control over such thoughts. <br>\n                      You have indicated clinically significant level/ moderate severity of disturbance in your functioning.<br>\n                       In addition, you report mild/moderate level of anxiety symptoms.<br><br>\n                       You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.<br><br><br>\n                       \n                    Please   remember that PUSH-D is   not a tool for providing diagnosis, nor it is a substitute for professional   consultation and treatment. Seeking face to face professional consultation is useful   for provide an accurate and comprehensive evaluation of mental health  issues. \n                       </b></p>\n                       \n                       \n              <p id=\"feedback3\" class=\"hidden\" style=\"color:darkblue;\"><b>You are experiencing severe depressive symptoms.<br>\n              Your responses indicate presence of suicidal thoughts and difficulties in controlling such thoughts<br>\n              You have indicated clinically significant level/severe/ moderate severity of- disturbance in your functioning.<br>\n              In addition,   you have indicated mild/moderate/severe anxiety symptoms.<br><br><br>\n              We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you. We can provide    you guidance on seeking referral with a mental health professional in   your  region, if  you so desire Let us know  if   you need   such help in finding  a mental health professional  and  we  will try  to help  with that. Once   you have initiated  treatment,   you can  let us know/ request   your doctor  to contact  us and  we  can  re-examine  the  suitability of PUSH-D  for  you at that  point.  Email for contacting us: push.d.nimhans@gmail.com</b></p>\n            \n            </div>\n            \n            <div class=\"modal-footer\">\n              \n              <button type=\"button\" class=\"btn btn-success\"  (click)=\"close_modal()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n    <!-- <div class=\"footer\" id=\"footer\">\n            \n      <div class=\"container text-center wow fadeIn\" data-wow-delay=\"0.4s\">\n        <p class=\"copyright\">Copyright &copy; 2019 - NIMHANS</p>\n      </div>\n    \n    </div> -->\n\n    <!-- <div class=\"footer\" id=\"footer\">\n            \n      <div class=\" text-center wow fadeIn\" data-wow-delay=\"0.4s\">\n        <p class=\"copyright\">Copyright &copy; 2019 - NIMHANS</p>\n      </div>\n    \n    </div> -->"

/***/ }),

/***/ "../../../../../src/app/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDataComponent = (function () {
    function UserDataComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.dataArray = [];
        this.Responselist = {};
        this.res = [];
        this.res1 = [];
        this.res2 = [];
        this.res2_a = [];
        this.res2_b = [];
        this.res3 = [];
        this.res3_a = [];
        this.res3_b = [];
        this.score1 = 0;
        this.score3 = 0;
        this.score4 = 0;
        this.id = 0;
        this.company_id = sessionStorage.getItem("companyId");
    }
    UserDataComponent.prototype.ngOnInit = function () {
        this.getUsersOfCompany();
    };
    UserDataComponent.prototype.getUsersOfCompany = function () {
        var _this = this;
        this.serverService.getUsersOfCompany(this.company_id)
            .subscribe(function (response) {
            // console.log(response.length);
            if (response.length == 0) {
                _this.container1 = document.getElementById('divID_new');
                _this.table = document.getElementById('table1');
                _this.table.setAttribute("style", "border: 1px solid black;");
                _this.tr = document.createElement('tr');
                _this.td1 = document.createElement('td');
                _this.td1.setAttribute('class', 'className');
                _this.td1.innerHTML = "No message to display";
                _this.tr.appendChild(_this.td1);
                _this.table.appendChild(_this.tr);
                _this.container1.appendChild(_this.table);
            }
            else {
                console.log(response.length);
                for (var i = 0; i < response.length; i++) {
                    _this.Responselist = {};
                    _this.res = response[i][2].split("@@@@");
                    //console.log(this.res);
                    //first and second screeners
                    _this.res1 = _this.res[0].split("undefined");
                    //console.log(this.res1);
                    _this.res2 = _this.res1[1].split("#@@#");
                    //console.log(this.res2);
                    _this.res2_a = _this.res2[0].split("#");
                    _this.res2_a = (_this.res2_a);
                    //console.log(this.res2_a);
                    _this.res2_b = _this.res2[1].split("@");
                    //console.log(this.res2_b);
                    //third and fourth screeners
                    //console.log(this.res[1]);
                    _this.res3 = _this.res[1].split("#@@#");
                    _this.res3_a = _this.res3[0].split("#");
                    //console.log(this.res3_a);
                    _this.res3_b = _this.res3[1].split("@");
                    //console.log(this.res3_b);
                    // this.td1.innerHTML =(i+1);
                    // this.td2.innerHTML ="06-11-2019";
                    // this.td3_a.innerHTML=response[i][0];
                    //console.log( this.Responselist);
                    _this.Responselist.data1 = "06-11-2019";
                    //console.log(this.Responselist[i][0]);
                    //20,21,23,24,25
                    _this.Responselist.data2 = response[i][0];
                    _this.Responselist.data3 = _this.res2_a[0];
                    _this.Responselist.data4 = _this.res2_a[1];
                    _this.Responselist.data5 = _this.res2_a[2];
                    _this.Responselist.data6 = _this.res2_a[3];
                    _this.Responselist.data7 = _this.res2_a[4];
                    _this.Responselist.data8 = _this.res2_a[5];
                    _this.Responselist.data9 = _this.res2_a[6];
                    _this.Responselist.data10 = _this.res2_a[7];
                    _this.Responselist.data11 = _this.res2_a[8];
                    console.log(_this.Responselist[1]);
                    _this.score1 = Number(_this.res2_a[0]) + Number(_this.res2_a[1]) + Number(_this.res2_a[2]) + Number(_this.res2_a[3]) + Number(_this.res2_a[4]) + Number(_this.res2_a[5]) + Number(_this.res2_a[6]) + Number(_this.res2_a[7]) + Number(_this.res2_a[8]);
                    if (_this.score1 == 0) {
                        _this.Responselist.data12 = "None Reported";
                        _this.str1 = "Mild";
                    }
                    else if (_this.score1 > 0 && _this.score1 <= 5) {
                        _this.Responselist.data12 = "Mild";
                        _this.str1 = "Mild";
                    }
                    else if (_this.score1 > 5 && _this.score1 <= 10) {
                        _this.Responselist.data12 = "Moderate";
                        _this.str1 = "Moderate";
                    }
                    else {
                        _this.Responselist.data12 = "Severe";
                        _this.str1 = "Severe";
                    }
                    _this.Responselist.data13 = _this.res2_b[0];
                    _this.Responselist.data14 = _this.res2_b[1];
                    _this.Responselist.data15 = _this.res2_b[2];
                    _this.Responselist.data16 = _this.res2_b[3];
                    if ((_this.res2_b[3] === "Yes") && (_this.res2_b[4] == undefined)) {
                        _this.Responselist.data17 = "No data";
                    }
                    else if (_this.res2_b[3] === "No" && _this.res2_b[4] == undefined) {
                        _this.Responselist.data17 = "";
                    }
                    else
                        _this.Responselist.data17 = _this.res2_b[4];
                    //p4 screener score - new algo
                    if (_this.res2_b[2] === "Somewhat likely" || _this.res2_b[2] === "Very likely" || (_this.res2_b[2] === "Not at all likely" && _this.res2_b[3] === "No")) {
                        _this.Responselist.data18 = "High";
                        _this.str2 = "Severe";
                    }
                    else if (_this.res2_b[0] === "No" && _this.res2_b[1] === "No" && _this.res2_b[2] === "Not at all likely" && _this.res2_b[3] === "Yes") {
                        _this.Responselist.data18 = "Minimal";
                        _this.str2 = "Mild";
                    }
                    else {
                        _this.Responselist.data18 = "Low";
                        _this.str2 = "Moderate";
                    }
                    _this.Responselist.data19 = _this.res3_a[0];
                    _this.Responselist.data20 = _this.res3_a[1];
                    _this.Responselist.data21 = _this.res3_a[2];
                    _this.Responselist.data22 = _this.res3_a[3];
                    _this.Responselist.data23 = _this.res3_a[4];
                    _this.Responselist.data24 = _this.res3_a[5];
                    _this.Responselist.data25 = _this.res3_a[6];
                    //anxiety score
                    _this.score3 = Number(_this.res3_a[0]) + Number(_this.res3_a[1]) + Number(_this.res3_a[2]) + Number(_this.res3_a[3]) + Number(_this.res3_a[4]) + Number(_this.res3_a[5]) + Number(_this.res3_a[6]);
                    if (_this.score3 == 0) {
                        _this.Responselist.data26 = "None Reported";
                        _this.str3 = "Mild";
                    }
                    else if (_this.score3 > 0 && _this.score3 <= 5) {
                        _this.Responselist.data26 = "Mild";
                        _this.str3 = "Mild";
                    }
                    else if (_this.score3 > 5 && _this.score3 <= 10) {
                        _this.Responselist.data26 = "Moderate";
                        _this.str3 = "Moderate";
                    }
                    else {
                        _this.Responselist.data26 = "Severe";
                        _this.str3 = "Severe";
                    }
                    _this.Responselist.data27 = _this.res3_b[1];
                    _this.Responselist.data28 = _this.res3_b[2];
                    _this.Responselist.data29 = _this.res3_b[3];
                    _this.Responselist.data30 = _this.res3_b[4];
                    _this.Responselist.data31 = _this.res3_b[5];
                    //current functioning
                    _this.score4 = Number(_this.res3_b[1]) + Number(_this.res3_b[2]) + Number(_this.res3_b[3]) + Number(_this.res3_b[4]) + Number(_this.res3_b[5]);
                    if (_this.score4 == 0) {
                        _this.Responselist.data32 = "None Reported";
                        _this.str4 = "Mild";
                    }
                    else if (_this.score4 > 0 && _this.score4 <= 10) {
                        _this.Responselist.data32 = "Mild";
                        _this.str4 = "Mild";
                    }
                    else if (_this.score4 > 10 && _this.score4 <= 20) {
                        _this.Responselist.data32 = "Moderate";
                        _this.str4 = "Moderate";
                    }
                    else {
                        _this.Responselist.data32 = "Severe";
                        _this.str4 = "Severe";
                    }
                    if (_this.str1 == "Severe" && _this.str2 == "Severe" || _this.str3 == "Severe" || _this.str4 == "Severe") {
                        _this.Responselist.data33 = "We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you.";
                    }
                    else if ((_this.str1 == "Moderate" && _this.str2 == "Moderate") || _this.str3 == "Moderate" || _this.str4 == "Moderate") {
                        _this.Responselist.data33 = "You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.";
                    }
                    else {
                        _this.Responselist.data33 = "You may register   for PUSH-D for self-help.";
                    }
                    _this.dataArray.push(_this.Responselist);
                    //console.log(this.dataArray);
                    //this.table.appendChild(this.tr);
                }
                //this.container1.appendChild(this.table);
            }
        }, function (error) { return console.log(error); });
    };
    UserDataComponent.prototype.displayResponseOfUser = function (res_id) {
        var _this = this;
        this.serverService.displayResponseOfUser(res_id)
            .subscribe(function (response) {
            $('#feedbackmodal').modal("show");
            console.log(response);
            //first and second screeners
            _this.id = response[0][0];
            _this.res = response[0][2].split("@@@@");
            _this.res1 = _this.res[0].split("undefined");
            //console.log(this.res1);
            _this.res2 = _this.res1[1].split("#@@#");
            //console.log(this.res2);
            _this.res2_a = _this.res2[0].split("#");
            _this.res2_a = (_this.res2_a);
            //console.log(this.res2_a);
            _this.res2_b = _this.res2[1].split("@");
            //console.log(this.res2_b);
            //third and fourth screeners
            //console.log(this.res[1]);
            _this.res3 = _this.res[1].split("#@@#");
            _this.res3_a = _this.res3[0].split("#");
            //console.log(this.res3_a);
            _this.res3_b = _this.res3[1].split("@");
            _this.score1 = Number(_this.res2_a[0]) + Number(_this.res2_a[1]) + Number(_this.res2_a[2]) + Number(_this.res2_a[3]) + Number(_this.res2_a[4]) + Number(_this.res2_a[5]) + Number(_this.res2_a[6]) + Number(_this.res2_a[7]) + Number(_this.res2_a[8]);
            if (_this.score1 == 0) {
                _this.Responselist.data12 = "None Reported";
                _this.str1 = "Mild";
                _this.feedback1 = _this.str1;
                $('#col1_new').addClass("color_class_new");
                $('#p1_new').removeClass("hidden");
            }
            else if (_this.score1 > 0 && _this.score1 <= 5) {
                _this.Responselist.data12 = "Mild";
                _this.str1 = "Mild";
                _this.feedback1 = _this.str1;
                $('#col1_new').addClass("color_class_new");
                $('#col1').addClass("color_class");
                $('#p1').removeClass("hidden");
            }
            else if (_this.score1 > 5 && _this.score1 <= 10) {
                _this.Responselist.data12 = "Moderate";
                _this.str1 = "Moderate";
                _this.feedback1 = _this.str1;
                $('#col1_new').addClass("color_class_new");
                $("#col1").addClass("color_class");
                $("#col2").addClass("color_class1");
                $('#p2').removeClass("hidden");
            }
            else {
                _this.Responselist.data12 = "Severe";
                _this.str1 = "Severe";
                _this.feedback1 = _this.str1;
                $('#col1_new').addClass("color_class_new");
                $("#col1").addClass("color_class");
                $("#col2").addClass("color_class1");
                $("#col3").addClass("color_class2");
                $('#p3').removeClass("hidden");
            }
            //anxiety score
            _this.score3 = Number(_this.res3_a[0]) + Number(_this.res3_a[1]) + Number(_this.res3_a[2]) + Number(_this.res3_a[3]) + Number(_this.res3_a[4]) + Number(_this.res3_a[5]) + Number(_this.res3_a[6]);
            if (_this.score3 == 0) {
                _this.Responselist.data26 = "None Reported";
                _this.str3 = "Mild";
                $("#col4_new").addClass("color_class_new");
                $('#p4_new').removeClass("hidden");
                _this.feedback3 = _this.str3;
            }
            else if (_this.score3 > 0 && _this.score3 <= 5) {
                _this.Responselist.data26 = "Mild";
                _this.str3 = "Mild";
                $("#col4_new").addClass("color_class_new");
                $("#col4").addClass("color_class");
                $('#p4').removeClass("hidden");
                _this.feedback3 = _this.str3;
            }
            else if (_this.score3 > 5 && _this.score3 <= 10) {
                _this.Responselist.data26 = "Moderate";
                _this.str3 = "Moderate";
                $("#col4_new").addClass("color_class_new");
                $("#col4").addClass("color_class");
                $("#col5").addClass("color_class1");
                $('#p5').removeClass("hidden");
                _this.feedback3 = _this.str3;
            }
            else {
                _this.Responselist.data26 = "Severe";
                _this.str3 = "Severe";
                _this.feedback3 = _this.str3;
                $("#col4_new").addClass("color_class_new");
                $("#col4").addClass("color_class");
                $("#col5").addClass("color_class1");
                $("#col6").addClass("color_class2");
                $('#p6').removeClass("hidden");
            }
            //p4 screener score - new algo
            if (_this.res2_b[2] === "Somewhat likely" || _this.res2_b[2] === "Very likely" || (_this.res2_b[2] === "Not at all likely" && _this.res2_b[3] === "No")) {
                _this.Responselist.data18 = "High";
                _this.str2 = "Severe";
                $("#col7_new").addClass("color_class_new");
                $("#col7").addClass("color_class");
                $("#col8").addClass("color_class1");
                $("#col9").addClass("color_class2");
                $('#p9').removeClass("hidden");
            }
            else if (_this.res2_b[0] === "No" && _this.res2_b[1] === "No" && _this.res2_b[2] === "Not at all likely" && _this.res2_b[3] === "Yes") {
                _this.Responselist.data18 = "Minimal";
                _this.str2 = "Mild";
                $("#col7_new").addClass("color_class_new");
                $("#col7").addClass("color_class");
                //$("#col8").addClass("color_class1");
                $('#p7').removeClass("hidden");
            }
            else {
                _this.Responselist.data18 = "Low";
                _this.str2 = "Moderate";
                $("#col7_new").addClass("color_class_new");
                $("#col7").addClass("color_class");
                $("#col8").addClass("color_class1");
                $('#p8').removeClass("hidden");
            }
            //current functioning
            _this.score4 = Number(_this.res3_b[1]) + Number(_this.res3_b[2]) + Number(_this.res3_b[3]) + Number(_this.res3_b[4]) + Number(_this.res3_b[5]);
            if (_this.score4 == 0) {
                _this.Responselist.data32 = "None Reported";
                _this.str4 = "Mild";
                $("#col10_new").addClass("color_class_new");
                $('#p10_new').removeClass("hidden");
            }
            else if (_this.score4 > 0 && _this.score4 <= 10) {
                _this.Responselist.data32 = "Mild";
                _this.str4 = "Mild";
                $("#col10_new").addClass("color_class_new");
                $("#col10").addClass("color_class");
                $('#p10').removeClass("hidden");
            }
            else if (_this.score4 > 10 && _this.score4 <= 20) {
                _this.Responselist.data32 = "Moderate";
                _this.str4 = "Moderate";
                $("#col10_new").addClass("color_class_new");
                $("#col10").addClass("color_class");
                $("#col11").addClass("color_class1");
                $('#p11').removeClass("hidden");
            }
            else {
                _this.Responselist.data32 = "Severe";
                _this.str4 = "Severe";
                $("#col10_new").addClass("color_class_new");
                $("#col10").addClass("color_class");
                $("#col11").addClass("color_class1");
                $("#col12").addClass("color_class2");
                $('#p12').removeClass("hidden");
            }
            if (_this.str1 == "Severe" && _this.str2 == "Severe" || _this.str3 == "Severe" || _this.str4 == "Severe") {
                _this.output = "We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
                document.getElementById("recommend").innerHTML = _this.output;
                document.getElementById("recommend").style.textAlign = "justify";
                document.getElementById("recommend").style.padding = "50px";
                document.getElementById("recommend").style.fontWeight = "bold";
            }
            else if ((_this.str1 == "Moderate" && _this.str2 == "Moderate") || _this.str3 == "Moderate" || _this.str4 == "Moderate") {
                _this.output = "You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
                document.getElementById("recommend").innerHTML = _this.output;
                document.getElementById("recommend").style.textAlign = "justify";
                document.getElementById("recommend").style.padding = "50px";
                document.getElementById("recommend").style.fontWeight = "bold";
            }
            else {
                _this.output = "You may register   for PUSH-D for self-help.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
                document.getElementById("recommend").innerHTML = _this.output;
                document.getElementById("recommend").style.textAlign = "justify";
                document.getElementById("recommend").style.padding = "50px";
                document.getElementById("recommend").style.fontWeight = "bold";
            }
        });
    };
    UserDataComponent.prototype.close_modal = function () {
        $('#feedbackmodal').modal('hide');
        window.location.reload();
    };
    UserDataComponent.prototype.logOut = function () {
        this.router.navigate(['/admin']);
    };
    UserDataComponent.prototype.back = function () {
        this.router.navigate(['admin/list_company']);
    };
    UserDataComponent.prototype.download_table = function () {
        console.log("Downloaded successfully");
    };
    return UserDataComponent;
}());
UserDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-data',
        template: __webpack_require__("../../../../../src/app/user-data/user-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-data/user-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserDataComponent);

var _a, _b;
//# sourceMappingURL=user-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top{\r\n    margin-top:40px;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.content-top {\r\n    width: 90%;\r\n     margin: 30px auto 30px;\r\n    padding: 40px 40px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 30px auto 30px;\r\n   \t padding: 40px 40px;\r\n\t\r\n}\r\n.grid-w3layouts1 {\r\n    margin-bottom: 2em;\r\n}\r\n.content-top {\r\n    padding: 40px 40px 20px;\r\n}\r\n\r\n@media (max-width: 667px) {\r\n.content-top {\r\n    width: 90%;\r\n    margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\ninput#name, input#email, input#orgn, select, .tickets input[type=\"number\"] {\r\n    width: 92%;\r\n}\r\n\r\n}\r\n@media (max-width: 640px) {\r\nh1.header-w3ls {\r\n    font-size: 30px;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n}\r\n}\r\n@media (max-width: 600px) {\r\np.copyright {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}\r\n.content-top {\r\n    width: 90%;\r\n     margin: 20px auto 40px;\r\n    padding: 35px 35px 20px;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     margin: 20px auto 20px;\r\n   \t padding: 35px 35px;\r\n\t\r\n}\r\n}\r\n@media (max-width: 568px) {\r\n.content-top {\r\n    width: 90%;\r\n}\r\n.content-top1{\r\n\twidth: 90%;\r\n     \r\n\t\r\n}\r\n}\r\n.header_class {\r\n    background-color:#7ad17a;\r\n    padding-top:10px;\r\n    padding-bottom:10px;\r\n    color:white;\r\n    }\r\n    #footer {\r\n        background-color:#003300;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        height: 4rem; \r\n        \r\n        color:white;          /* Footer height */\r\n      }\r\n\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-container\">\n    <div class=\"row\" style=\"margin-left:0px; margin-right:0px;\">\n    \n      <div class=\"col-md-12\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n        <div class=\"content-top\">\n    \n    \n        \n        <div class=\"header-div\" style=\"text-align:center;background-color:#349834;width:100%;margin-left:auto;margin-right:auto;margin-bottom:30px;\">\n        <!-- <h4 class=\"header-w3ls header_class\">Login</h4> -->\n        \n        </div>\n          <form id=\"userLogin\" class=\"form-horizontal\">\n            <div class=\"panel-body\">\n              \n              <div class=\"form-group\">\n                  <label class=\"col-md-4 control-label\">Company Code</label>\n                  <div class=\"col-md-4\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyCode\" id=\"companyCode\" name=\"companyCode\" placeholder = \"Company Code\">\n                  </div>\n                  <div class=\"col-md-4\"></div>\n              </div>\n              \n              \n              \n              \n                \n              </div>\n            \n            \n            <div class=\"panel-footer\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\" style=\"text-align:center;\">\n                  <div class=\"\">\n                      <button type=\"button\" (click)=\"userLogin()\" class=\"btn btn-success\" id=\"loginButton\">Enter</button>\n                      \n                  </div>\n                </div>\n                <div class=\"col-md-4\"></div>\n              </div>\n                \n              </div>\n            </div>\n    \n            \n            \n          </form>\n        </div>\n      </div>\n    </div>\n      </div>\n      \n    </div>\n   \n      \n    <div class=\"footer\" id=\"footer\">\n                \n        <div class=\"container text-center wow fadeIn\" data-wow-delay=\"0.4s\">\n          <p class=\"copyright\">Copyright &copy; 2019 - NIMHANS</p>\n        </div>\n      \n      </div>"

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.userLogin = function () {
        var _this = this;
        if (this.companyCode) {
            this.serverService.loginUser(this.companyCode)
                .subscribe(function (response) {
                sessionStorage.setItem("compnayId", response);
                if (response > 0) {
                    _this.router.navigate(['screener_page1']);
                }
                else {
                    alert("Please enter the Company Code");
                }
            }, function (error) { return console.log(error); });
        }
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-login/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserLoginComponent);

var _a, _b;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
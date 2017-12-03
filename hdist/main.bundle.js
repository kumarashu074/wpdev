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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* navbar */\n.navbar-inverse {\n    background-color: #EEEEEE;\n    border-color: none;\n}\n/* Title */\n.navbar-inverse .navbar-brand {\n    color: #510511;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n    color: #1E6E1E;\n    \n}\n/* Link */\n.navbar-inverse .navbar-nav > li > a {\n    color: white;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n    color: #1E6E1E;\n/*     text-decoration: underline; */\n/*   -webkit-text-decoration-color: red; safari still uses vendor prefix */\n/*   text-decoration-color: red; */\n  border-bottom: 5px solid #333;\n   \n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #E7E7E7;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n    color: #555;\n    background-color: #D5D5D5;\n}\n/* Caret */\n.navbar-inverse .navbar-nav > .dropdown > a .caret {\n    border-top-color: #777;\n    border-bottom-color: #777;\n}\n.navbar-inverse .navbar-nav > .dropdown > a:hover .caret,\n.navbar-inverse .navbar-nav > .dropdown > a:focus .caret {\n    border-top-color: #333;\n    border-bottom-color: #333;\n}\n.navbar-inverse .navbar-nav > .open > a .caret,\n.navbar-inverse .navbar-nav > .open > a:hover .caret,\n.navbar-inverse .navbar-nav > .open > a:focus .caret {\n    border-top-color: #555;\n    border-bottom-color: #555;\n}\n/* Mobile version */\n.navbar-inverse .navbar-toggle {\n    border-color: #DDD;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n    background-color: #DDD;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n    background-color: #CCC;\n}\n@media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n        color: #777;\n    }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n          color: #333;\n    }\n}\n\nbody {\n      position: relative; \n  }\n\n.affix {\n      bottom:0;\n      right:0;\n      left: 0;\n      z-index: 200 !important;\n  }\n.navbar {\n     margin: 20px;\n}\n\n\n.navbar-nav .dropdown-menu {\n    background-color: #333;\n    color: #FFF;\n}\n.navbar-nav .dropdown.open .dropdown-menu {\n    background-color: #333;\n    color: #BBB;\n}\n\n.navbarLinks {\n  font-family: 'Playfair Display';\n  line-height: .8;\n  font-color:white;\n  color:white;\n  opacity: 1;\n  font-weight: 100;\n  font-size: 18px;\n}\n\n\n.dropdown-menu > li  {\n\twhite-space: nowrap;\n}\n\n\n\n.dropdown-menu > li > a {\n\t color: #FFF;\n}\n\n.dropdown-menu > li > a:hover {\n    background-color: transparent;\n    background-image: none;\n    color: #1E6E1E;\n    background-repeat: repeat-x;\n     \n}  \n\n.navbar-nav>li>.dropdown-menu { \n\tmin-width: 100px;\n\theight: 0px;\n    display: block;\n    overflow: hidden;\n    opacity:0;\n\ttransition: height 1s ease;\n}\n\t \n.navbar-nav>li.open .dropdown-menu {\n    min-height: 100%;\n    height: auto;\n    opacity: 1;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n<!--   <h1> -->\n<!--     Welcome to {{title}}! -->\n<!--   </h1> -->\n</div>\n<!-- main app container -->\n<!-- <div class=\"jumbotron\"> -->\n<!--     <div class=\"container\"> -->\n<!--         <div class=\"col-sm-8 col-sm-offset-2\"> -->\n<!--             <app-alert></app-alert> -->\n<!--             <router-outlet></router-outlet> -->\n<!--         </div> -->\n<!--     </div> -->\n<!-- </div> -->\n<div>\n    <router-outlet></router-outlet>\n    \n\t<nav *ngIf=\"!loggedIn\" class=\"navbar navbar-inverse affix\" data-spy=\"affix\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n\t\t\t\t\tdata-target=\"#myNavbar\">\n\t\t\t\t\t<span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span\n\t\t\t\t\t\tclass=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand\" href=\"#\"> <img alt=\"\"\n\t\t\t\t\tsrc=\"assets/images/winpilogo2.png\"\n\t\t\t\t\tstyle=\"width: 55px; height: 40px;    margin-top: -10px;\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\"> \n<!-- \t\t\t\t\tcontestList -->\n\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">CONTESTS</a></li>\n<!-- \t\t\t\t\t\t/photoList -->\n\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">PHOTOS</a></li>\n<!-- \t\t\t\t\t\tvote -->\n\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">VOTE</a></li>\n\t\t\t\t\t\t<li class=\"dropup\"><a class=\"dropup-toggle\"\n\t\t\t\t\t\t\tdata-toggle=\"dropdown\" href=\"#\" class=\"navbarLinks\">HOW <span class=\"caret\"></span></a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n<!-- \t\t\t\t\t\t\tsupport -->\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">IT WORKS</a></li>\n<!-- \t\t\t\t\t\t\t\tstart -->\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">TO START</a></li>\n\t\t\t\t\t\t\t</ul></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"nav navbar-nav pull-right\">\n<!-- \t\t\t\t\tlogin -->\n\t\t\t\t\t\t<li><a [routerLink]=\"['/login']\" class=\"navbarLinks\">LOGIN</a></li>\n<!-- \t\t\t\t\t\tregister -->\n\t\t\t\t\t\t<li><a [routerLink]=\"['/register']\" class=\"navbarLinks\">SIGN UP</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\t\n\t\t<nav *ngIf=\"loggedIn\" class=\"navbar navbar-inverse affix\" data-spy=\"affix\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n\t\t\t\t\t\tdata-target=\"#myNavbar\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span\n\t\t\t\t\t\t\tclass=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a class=\"navbar-brand\" href=\"#/entry\"> <img alt=\"\"\n\t\t\t\t\t\tsrc=\"assets/images/winpilogo2.png\"\n\t\t\t\t\t\tstyle=\"width: 55px; height: 40px;    margin-top: -10px;\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\"> \n\t<!-- \t\t\t\t\tcontestList -->\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">CONTESTS</a></li>\n\t<!-- \t\t\t\t\t\t/photoList -->\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">PHOTOS</a></li>\n\t<!-- \t\t\t\t\t\tvote -->\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">VOTE</a></li>\n\t\t\t\t\t\t\t<li class=\"dropup\"><a class=\"dropup-toggle\"\n\t\t\t\t\t\t\t\tdata-toggle=\"dropdown\" href=\"#\" class=\"navbarLinks\">HOW <span class=\"caret\"></span></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t<!-- \t\t\t\t\t\t\tsupport -->\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">IT WORKS</a></li>\n\t<!-- \t\t\t\t\t\t\t\tstart -->\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">TO START</a></li>\n\t\t\t\t\t\t\t\t</ul></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t\t\t\t<li class=\"dropup\"><a class=\"dropup-toggle\"\n\t\t\t\t\t\t\t\tdata-toggle=\"dropdown\" href=\"#\" class=\"navbarLinks\"> \n\t\t\t\t\t\t\t\t<img class=\"navbarNotif\" alt=\"notifications\" \n\t\t\t\t\t\t\tsrc=\"assets/images/navbarNotifIcon.png\" \n\t\t\t\t\t\t\tonmouseover=\"hover(this,'assets/images/navbarNotifIconHover.png')\"\n\t\t\t\t\t\t\tonmouseout=\"hover(this,'assets/images/navbarNotifIcon.png')\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span class=\"caret\"></span></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\"> +500 points</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">c:<b>all about you</b> </a></li>\n\t\t\t\t\t\t\t\t</ul></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"dropup\"><a class=\"dropup-toggle\"\n\t\t\t\t\t\t\t\tdata-toggle=\"dropdown\" href=\"#\" class=\"navbarLinks\"> \n\t\t\t\t\t\t\t\t<img class=\"navbarHome\" alt=\"user home\" \n\t\t\t\t\t\t\tsrc=\"assets/images/navbarHomeIcon.png\" \n\t\t\t\t\t\t\tonmouseover=\"hover(this,'assets/images/navbarHomeIconHover.png')\"\n\t\t\t\t\t\t\tonmouseout=\"hover(this,'assets/images/navbarHomeIcon.png')\">\n\t\t\t\t\t\t\t\t<span class=\"caret\"></span></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/logout']\" class=\"navbarLinks\">Log Off</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">My profile</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">My account</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">My photos</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">My contests</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">My trips</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['']\" class=\"navbarLinks\">Settings</a></li>\n\t\t\t\t\t\t\t\t\t<li><b>1200p Casual</b></li>\n\t\t\t\t\t\t\t\t</ul></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\n\t\n</div>\n\n\n"

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
        this.title = 'webroot';
        this.loggedIn = false;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_alert_alert_component__ = __webpack_require__("../../../../../src/app/component/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_auth_home_home_component__ = __webpack_require__("../../../../../src/app/component/auth/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_register_register_component__ = __webpack_require__("../../../../../src/app/component/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_alert_alert_service__ = __webpack_require__("../../../../../src/app/services/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/guard/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_user_user_service__ = __webpack_require__("../../../../../src/app/services/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_logger_service__ = __webpack_require__("../../../../../src/app/util/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_util_service__ = __webpack_require__("../../../../../src/app/util/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_entry_entry_component__ = __webpack_require__("../../../../../src/app/component/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_auth_logout_logout_component__ = __webpack_require__("../../../../../src/app/component/auth/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_auth_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_entry_entry_component__["a" /* EntryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_auth_logout_logout_component__["a" /* LogoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["a" /* AlertModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_guard_service__["a" /* GuardService */],
            __WEBPACK_IMPORTED_MODULE_12__services_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__util_logger_service__["a" /* LoggerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */],
            __WEBPACK_IMPORTED_MODULE_16__util_util_service__["a" /* UtilService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_auth_home_home_component__ = __webpack_require__("../../../../../src/app/component/auth/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_auth_logout_logout_component__ = __webpack_require__("../../../../../src/app/component/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_entry_entry_component__ = __webpack_require__("../../../../../src/app/component/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_register_register_component__ = __webpack_require__("../../../../../src/app/component/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/guard/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__component_entry_entry_component__["a" /* EntryComponent */] },
    { path: 'entry', component: __WEBPACK_IMPORTED_MODULE_3__component_entry_entry_component__["a" /* EntryComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__component_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__component_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__component_auth_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_guard_service__["a" /* GuardService */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__component_auth_logout_logout_component__["a" /* LogoutComponent */] },
    // otherwise redirect to home
    //    { path: '**', redirectTo: '' }
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: false });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/component/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n*ngIf=\"message\" [ngClass]=\"{ \n'alert': message, \n'alert-success': message.type === 'success', \n'alert-danger': message.type === 'error' }\">{{message.text}}\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_alert_service__ = __webpack_require__("../../../../../src/app/services/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/component/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homeDiv {\n  \ttext-align:center; \n  \tmargin-left:0px; \n  \tmargin-top:0px;\n  \tmargin-bottom:0px;\n  \tcolor: #fff;\n  \tbackground-image: url(" + __webpack_require__("../../../../../src/assets/images/homeBackMainDiv.jpg") + ");\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    -webkit-background-size:cover;\n\t-moz-background-size:cover;\n\t-o-background-size:cover;\n\tfont-family: 'Indie Flower', cursive;\n    resize: both;\n    overflow:hidden;\n    position:fixed;\n    opacity: 1;\n    height: 100%;  \n    width: 100%;\n  }\n .form-group {\n    margin-left: 30%;\n    margin-right: 30%;\n}\n\n.btn-link:hover {\n\ttext-decoration: none;\n\topacity:0.8\n}\n\nh2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 2.1;\n  font-size: 2.7rem;\n  opacity: 1;\n}\n\n.btn-link {\n font-size: 3rem;\n opacity:0.8\t;\n color:aliceblue;\n}\n.btn-link:hover {\n color:#3E8F3E;\n opacity:1;\n}\n\nlabel {\n\tfont-size: 2rem;\n}\n\n.form-control{\n\tfont-size: 2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homeDiv col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstname}} {{currentUser.email}}!</h1>\n    <p>You're logged in with Angular 4!!</p> \n    <h3>All registered users with a name as of :</h3>\n     <form name=\"formHome\" (ngSubmit)=\"f.form.valid && loadAllUsers()\" #f=\"ngForm\" novalidate>\n\t    <div class=\"form-group\">\n\t\t    \t<label for=\"uname\">Name</label>\n\t\t    \t<input type=\"text\" class=\"form-control\" name=\"uname\"  [(ngModel)]=\"uname\" required/>\n\t\t    \t<div *ngIf=\"f.submitted\" class=\"help-block\">Name is required</div>\n\t\t    \t<button [disabled]=\"loading\" class=\"btn btn-primary\">Load</button>\n\t        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n\t    </div>\n    </form>\n    <ul>\n        <li *ngFor=\"let user of users\">\n            {{user.id}} ({{user.firstname}} {{user.lastname}} {{user.email}})\n             <button (click)=\"deleteUser(user.id)\">Delete</button>\n           </li>\n    </ul>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/auth/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_user_user_service__ = __webpack_require__("../../../../../src/app/services/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(userService, appComponent) {
        this.userService = userService;
        this.appComponent = appComponent;
        this.users = [];
        this.loading = false;
        appComponent.loggedIn = true;
        var cUser = localStorage.getItem('currentUser');
        if (cUser) {
            this.currentUser = JSON.parse(cUser);
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        //       this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers(this.uname).subscribe(function (users) { _this.users = users; }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
        this.loading = false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/component/auth/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/auth/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(authenticationService, router, route, appComponent) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.appComponent = appComponent;
        this.appComponent.loggedIn = false;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.router.navigate([this.returnUrl]).then(function () {
            console.log('navigate success');
        }, function () {
            console.log('navigate failure');
        });
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/component/auth/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/auth/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], LogoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/entry/entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,500,500i,600,600i,700,700i |Cormorant+SC:400,500,600,700);", ""]);

// module
exports.push([module.i, ".maindiv {\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/images/cover1.jpg") + ");\n\tbackground-attachment: fixed;\n    background-position: center center;\n    background-repeat: no-repeat;\n\tbackground-size:cover;\n\theight: 100%;  \n    width: 100%;\n}\n@media screen and (max-width: 460px) {\n\t.maindiv {\n\tbackground-image:none;\n\tbackground-color:#070f02;\n\tbackground-attachment: fixed;\n    background-position: center center;\n    background-repeat: no-repeat;\n\tbackground-size:cover;\n\theight: 100%;  \n    width: 100%;\n}\n}\n\n  #section1 {text-align:center;  height:500px;padding-top:10px;\n  \tcolor: #fff; \n/*     background-image: url(\"../../../assets/images/cover1.jpg\"); */\n/* \tbackground-color:#ffffff; */\n    min-height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-family: 'Indie Flower', cursive;\n    opacity: 0.8;\n    margin-right: 10px;\n    margin-left: 10px;\n\n  }\n  #section2 {text-align:center;  padding-top:0px;color: #fff;\n\n/*  \tbackground-image: url(\"../../../assets/images/imgbg2.jpg\"); */\n    min-height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n     resize: both;\n    overflow:hidden;\n    margin-right: 10px;\n    margin-left: 10px;\n    postion:relative;\n    font-family: 'Indie Flower', cursive;\n    opacity: 0.8;\n\t}\n  #section3 {text-align:center; margin-top:50px; padding-top:0px;height:100%;color: #fff; \n\n/* \tbackground-image: url(\"../../../assets/images/imgbg1.jpg\"); */\n/* \tbackground-color:white; */\n    min-height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n     resize: both;\n    overflow:hidden;\n    margin-right: 10px;\n    margin-left: 10px;\n    postion:relative;\n    font-family: 'Indie Flower', cursive;\n/*     opacity: 1; */\n    \n\t}\n  #section4 {text-align:center; margin-top:0px; padding-top:0px;color: #fff; \n/*   background-image: url(\"../../../assets/images/imgbg2.jpg\"); */\n    min-height: 450px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    resize: both;\n    overflow:hidden;\n    margin-right: 10px;\n    margin-left: 10px;\n    postion:relative;\n    font-family: 'Indie Flower', cursive;\n    margin-bottom: 50px;\n    opacity: 0.8px;\n    \n  }\n  \n\n  #section5 {\n  text-align:center; margin-top:0px; padding-top:50px;height:800px;color: #fff; \n/*    background-image: url(\"../../../assets/images/gosocialbackimage2.png\"); */\n   background-color:#333;\n    min-height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n     resize: both;\n    overflow:hidden;\n    postion:relative;\n    font-family: 'Indie Flower', cursive;\n    opacity: 0.9;\n    margin-right: 10px;\n    margin-left: 10px;\n     }\n  \n  \n  #section6 {text-align:center; margin-top:0px; margin-top:50px;margin-bottom:50px;height:500px;color: #fff;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/gosocialbackimage3.jpg") + ");\n/* background-color: #cfced0; */\n    min-height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-family: 'Indie Flower', cursive;\n    resize: both;\n    overflow:hidden;\n    margin-right: 10px;\n    margin-left: 10px;\n    postion:relative;\n    opacity: 1;\n  }\n  #section7 {text-align:center; margin-top:0px; padding-top:0px;height:500px;color: #fff; \n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/cover7bw.jpg") + ");\n    min-height: 900px;\n    background-color: #695713;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-family: 'Indie Flower', cursive;\n\tresize: both;\n    overflow:hidden;\n    margin-right: 10px;\n    margin-left: 10px;\n    postion:relative;\n    opacity: 0.8;\n  }\n  #section8 {text-align:center; margin-top:0px; padding-top:50px;height:500px;color: #fff; \n/*    background-image: url(\"../../../assets/images/imgbg2.jpg\"); */\n    min-height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.8;\n  }\n\n\n.affix ~ .container-fluid {\n     position: relative;\n     top: 50px;    \n}\n    \n  \n.container{\n\ttext-align: justify;\t\n\tposition: relative;\n\tvertical-align:middle;\n\twidth:100%;\n\theight: 100%;\n\t\n}\n\n.container:after{\n\tcontent:'';\n\twidth:100%;\n\theight: 100%;\n\tmargin: 0 auto;\n\tdisplay:inline-block;\n}\n.btn1 {\n\t\n}\n#floater {\n\tfloat: left;\n    height: 50%;\n    width: 100%;\n    margin-bottom: -150px;\n}\n\n.img1 {\n   width: 130px;\n   height: 130px;\n}\n\n.img2 {\n   width: 190px;\n   height: 90px;\n   font: 800 26px/0.9 'Shadows Into Light', sans-serif;\n   background:transparent;\n   \n}\n\n.img3 {\n   width: 190px;\n   height: 90px;\n    font: 800 26px/0.9 'Shadows Into Light', sans-serif;\n}\n\n.img4 {\n   width: 150px;\n   height: 90px;\n    font: 800 26px/0.9 'Shadows Into Light', sans-serif;\n}\n\n.img5 {\n   width: 331px;\n   height: 625px;\n   font: 800 25px/0.9 'Shadows Into Light', sans-serif;\n   background:transparent;\n   margin-top:-100px;\n   \n}\n\nh3 {\n  font: 400 13px/0.8 'Great Vibes', Helvetica, sans-serif;\n  color: #fff;\n  text-shadow: 4px 4px 3px rgba(0,0,0,0.1);  \n}\n\n.section1Text {\n\ttext-align: center;\n\tletter-spacing: -0.9px;\n\tcolor: #0076BD;\n\tfont-size: 30px;\n\tfont-weight: inherit;\n}\n\n.textSec5Align {\n\tfloat: center; \n\tdisplay: inline-block; \n\t-webkit-box-align: center; \n\t    -ms-flex-align: center; \n\t        align-items: center; \n\theight: 100%;\n\tmargin: 0 auto !important; \t\n}\n@media screen and (max-width: 450px){\n.textSec5Align {\n\tfloat: left; \n\tdisplay: inline-block; \n\t-webkit-box-align: center; \n\t    -ms-flex-align: center; \n\t        align-items: center; \n\theight: 100%;\n\tmargin: 0 auto !important;\t\n}\t\n}\n\n.textSec5P {\n\tfont: 800 26px/1.9 'Shadows Into Light', sans-serif;\n}\n@media screen and (max-width:640px){\n.textSec5P {\n\tfont: 800 21px/1.9 'Shadows Into Light', sans-serif;\n}\t\n}\n@media screen and (max-width:400px){\n.textSec5P {\n\tfont: 800 16px/1.9 'Shadows Into Light', sans-serif;\n}\t\n}\n\n.textHomeGen {\n\ttext-align: center; \n\tfont: 900 32px/1.9 'Gloria Hallelujah', sans-serif;\n\tbackground-color:#333;\n\tmargin-left: 10px;\n    margin-right: 10px;\n    border-bottom-width: 2px;\n    border-bottom-style: solid;\n    border-bottom-color: #333;\n    border-top-width: 2px;\n    border-top-style: solid;\n    border-top-color: #333;\n    border-left-color: #333;\n    border-left-width: 2px;\n    border-left-style: solid;\n    border-right-color: #333;\n    border-right-width: 2px;\n    border-right-style: solid;\n    opacity:0.8;\t\n}\n\n.section1Text:hover {\n  font-weight: 700;\n  font-style: italic;\n  opacity: 0.8;\n  -webkit-transform: translate3d(0, 0, 20%);\n          transform: translate3d(0, 0, 20%);\n  display: inline-block;\n  font-size: 3.3rem;\n}\n\n.btn-lg1 {\n\tpadding: 0.5rem 1rem;\n\tfont-size: 3.25rem;\n\tline-height: 1.5;\n\tborder-radius: 1.3rem;\n\topacity: 0.6;\n}\n\n.btn-lg1:hover {\n\tcolor:#3E8F3E;\n\tbackground-color:white;\n\tbackground-image:none;\n\topacity:1;\n   \n}\n\n.btn-lg1:focus,.btn-lg1:active:focus {outline:0;}\n \n\n.in-email  {\n\topacity: 0.6;\n\twidth:250px;\n\tmargin-right:15px;\n\tfont-family: initial;\n\tbackground: aliceblue;\n\tcolor: black;\n}\n.in-email:hover  {\n\t opacity:1;\n}\n\n.swiper-slide { \n       text-align: center; \n       font-size: 18px; \n       background: transparent; \n  \n       /* Center slide text vertically */ \n       display: -webkit-box; \n       display: -ms-flexbox; \n       display: -webkit-flex; \n/*        display: flex;  */\n       -webkit-box-pack: center; \n       -ms-flex-pack: center; \n       -ms-flex: 0 0 auto; \n       justify-content: center; \n       -webkit-box-align: center; \n       -ms-flex-align: center; \n       -webkit-align-items: center;\n       -webkit-flex-shrink: 0; \n       align-items: center; \n       padding: 0px;\n       -ms-flex-negative: 0;\n           flex-shrink: 0;\n       \tposition: relative;\n       \toverflow: hidden;\n       \theight: unset;\n     } \n     \n.append-buttons { \n       text-align: center; \n       margin-top: 20px; \n     } \n.append-buttons a { \n       display: inline-block; \n       border: 1px solid #007aff; \n       color: #007aff; \n       text-decoration: none; \n       padding: 4px 10px; \n       border-radius: 4px; \n       margin: 0 10px; \n       font-size: 13px; \n     }\n     \n \n.back-to-top {\t\n\tbackground: none;\n\tmargin: 0;\n\tposition: fixed;\n\ttop: 10px;\n\tright: 0;\n\twidth: 70px;\n\theight: 70px;\n\tz-index: 100;\n\tdisplay: none;\n\ttext-decoration: ;\n\tcolor: white;\n\tbackground-color: back;\n\tfont-size: 14px; \n}\n \n  \n \n.back-to-top:hover {\n  text-decoration: none;\n}\n\n\n/* ====================================\nGeneral Styles for slider section#4\n==================================== */\n\n.imgdivsec4{\n\tmax-width: 100%; \n\twidth: 290px;\n\theight: 180px;\n}\n@media screen and (max-width: 740px) {\n\n.imgdivsec4{\n\tmax-width: 100%; \n\twidth: 250px;\n\theight: 140px;\n}\n}\n@media screen and (max-width: 560px) {\n\n.imgdivsec4{\n\tmax-width: 100%; \n\twidth: 290px;\n}\n}\n\n.imgoverlaysec4P {\n\tfont-size: 22px; \n\ttext-align: center;\n\tmargin:0px;\n\ttop:0;\n}\n@media screen and (max-width:1600px){\n\t.imgoverlaysec4P {\n\tfont-size: 22px; \n}\n}\n\n@media screen and (max-width:1100px){\n\t.imgoverlaysec4P {\n\tfont-size: 19px; \n}\n}\n@media screen and (max-width:900px){\n\t.imgoverlaysec4P {\n\tfont-size: 18px; \n}\n}\n\n@media screen and (max-width:900px){\n\t.imgoverlaysec4P {\n\tfont-size: 17px; \n}\n}\n@media screen and (max-width:750px){\n\t.imgoverlaysec4P {\n\tfont-size: 17px; \n}\n}\n\n@media screen and (max-width:650px){\n\t.imgoverlaysec4P {\n\tfont-size: 16px; \n}\n}\n\n@media screen and (max-width:560px){\n\t.imgoverlaysec4P {\n\tfont-size: 17px; \n}\n}\n\n@media screen and (max-width:400px){\n\t.imgoverlaysec4P {\n\tfont-size: 15px; \n}\n}\n\n.sotl {\n\tdisplay:inline-block;\n}\n@media screen and (max-width:750px){\n\t.sotl {\n\tdisplay:none;\n}\n}\n@media screen and (max-width:560px){\n\t.sotl {\n\tdisplay:inline;\n}\n}\n\n\n\n.sec4OverTextLabel {\n\tcolor:black;\n}\n\n.imgTextOversec4 {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  bottom: 0;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  align:center;\n  left: 0;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(66,104,153,0.6);\n/*   background: linear-gradient(65deg, rgba(66,104,153,0.6), rgba(243,156,18,0.6)); */\n  color: #fafafa;\n  font-size: 20px;\n  border-radius: 0%;\n  width:inherit;\n}\n\n.sec4imgdiv:hover  .imgTextOversec4 {\n\tdisplay:none;\t\n}\n\n\n.imgoverlaysec4 {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  bottom: 0;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  align:center;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(46,204,113,0.6);\n  background: linear-gradient(65deg, rgba(46,204,113,0.6), rgba(243,156,18,0.6));\n  color: #fafafa;\n  font-size: 20px;\n  border-radius: 0%;\n  width:inherit;\n}\n\n.imgoverlaysec4:hover {\n  opacity: 1;\n}\n\n.sec4imgdiv img {\n\tborder-radius: 0%;\n\ttop:30px;padding: 0px;\n}\n\n.sec4imgdiv {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 250px;\n          flex: 0 0 250px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;  \n}\n\n \n\n/* ====================================\nGeneral Styles for slider section#2\n==================================== */\n.imgoverlay {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  position: absolute;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(46,204,113,0.6);\n  background: linear-gradient(65deg, rgba(46,204,113,0.6), rgba(243,156,18,0.6));\n  color: #fafafa;\n  font-size: 24px;\n  width: 150px;\n  height: 150px;\n  border-radius: 250%;\n}\n\n@media screen and (max-width: 960px) {\n  .imgoverlay {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  position: absolute;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(46,204,113,0.6);\n  background: linear-gradient(65deg, rgba(46,204,113,0.6), rgba(243,156,18,0.6));\n  color: #fafafa;\n  font-size: 18px;\n  width: 100px;\n  height: 100px;\n  border-radius: 200%;\n}\n}\n\n@media screen and (max-width: 640px) {\n  .imgoverlay {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  position: absolute;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(46,204,113,0.6);\n  background: linear-gradient(65deg, rgba(46,204,113,0.6), rgba(243,156,18,0.6));\n  color: #fafafa;\n  font-size: 12px;\n  width: 50px;\n  height: 50px;\n  border-radius: 150%;\n}\n}\n\n\n@media screen and (max-width: 320px) {\n  .imgoverlay {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  position: absolute;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(46,204,113,0.6);\n  background: linear-gradient(65deg, rgba(46,204,113,0.6), rgba(243,156,18,0.6));\n  color: #fafafa;\n  font-size: 8px;\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n}\n}\n\n.imgoverlay:hover {\n  opacity: 1;\n}\n\n.sec2imgdiv img {\n\tborder-radius: 250%;\n\tpadding: 0px;\n\twidth: 150px; \n\theight: 150px;\n}\n\n\n@media screen and (max-width: 960px) {\n  .sec2imgdiv img {\n\tborder-radius: 200%;\n\tpadding: 0px;\n\twidth: 100px;\n\theight: 100px;\n }\n}\n\n@media screen and (max-width: 640px) {\n  .sec2imgdiv img {\n\tborder-radius: 150%;\n\tpadding: 0px;\n\twidth: 50px;\n\theight: 50px;\n}\n}\n\n@media screen and (max-width: 320px) {\n  .sec2imgdiv img {\n\tborder-radius: 100%;\n\tpadding: 0px;\n\twidth: 25px;\n\theight: 25px;\n}\n}\n\n.sec2imgdiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 250px;\n          flex: 0 0 250px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  }\n\n.textoverlay {\n\tfont-size: 26px;\n\tposition: relative;\t\n    text-align: justify;\n    margin: 10px;\n    display: table-cell;\n    padding-top: 40%;\n}\t\n\n@media screen and (max-width: 960px) {\n\t.textoverlay{\n\t\tfont-size: 20px;\t\n\t}\t\n}\n\n@media screen and (max-width: 640px) {\n\t.textoverlay {\n\t\tfont-size: 16px;\t\n\t}\t\n\t\n}\n\n@media screen and (max-width: 320px) {\n\t.textoverlay {\n\t\tfont-size: 14px;\t\n\t}\t\n\t\n}\n\n/* } */\n.page-wrap {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n/*   background: linear-gradient(to right bottom, #2a1f30 50%, #383d44 50%); */\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/cover8.jpg") + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; \n}\n\n/* ====================================\nHome Slider\n==================================== */\n\n#home-slider {\n  height: 100%;\n  width: 100%;\n  position: relative;\n\n}\n\n.swiper-image-one {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/sec2ProPhotos.jpg") + ");\n}\n\n.swiper-image-two {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/cover2.jpg") + ");\n}\n\n.swiper-image-three {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/section2PicRight2.jpg") + ");\n}\n\n.swiper-image-four {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/cover2.jpg") + ");\n}\n\n.swiper-image-five {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/section2PicRight3.jpg") + ");\n}\n\n.swiper-image-six {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/cover2.jpg") + ");\n}\n\n.swiper-image {\n  width: 50%;\n  height: 100%;\n}\n.swiper-image-inner {\n  background-size: cover;\n  background-position: center center;\n/*   display: flex;\t\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n/*   width: 100%; */\n  padding: 0px;\n  height: 100%;\n  background-color: hsla(0, 0%, 0%, 0.2);\n  background-blend-mode: overlay;\n}\n.swiper-image-inner.swiper-image-left {\n  padding: 4rem;\n}\n.swiper-image-left {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%);\n  transition: all 1s linear;\n  transition-delay: 1s;\n}\n.swiper-slide.swiper-slide-active .swiper-image-left {\n  -webkit-filter: sepia(0%);\n          filter: sepia(0%);\t\n  padding: 0px;\n}\n.swiper-image-inner.swiper-image-right {\n  -webkit-filter: hue-rotate(-60deg);\n          filter: hue-rotate(-60deg);\n  transition: all 1s linear;\n  transition-delay: 1s;\n  background-color: hsla(0, 0%, 0%, 0.5);\n  background-blend-mode: multiply;\n}\n\nh2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 2.1;\n  font-size: 2.7rem;\n  opacity: 1;\n}\n\n\n@media screen and (max-width: 960px) {\n\th2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 1.9;\n  font-size: 2rem;\n  opacity: 1;\n}\n}\n\n@media screen and (max-width: 640px) {\n\th2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 1.7;\n  font-size: 1.5rem;\n  opacity: 1;\n}\n\t\n}\n\n@media screen and (max-width: 320px) {\n\th2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 2.1;\n  font-size: 1rem;\n  opacity: 1;\n}\n\t\n}\n\nh1 {\n  font-family: 'Cormorant Garamond', serif;\n  font-weight: 500;\n  color: #fff;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  margin: 0 0 auto 0;\n  font-size: 4.5rem;\n  line-height: 1;\n  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s;\n  -webkit-transform: translate3d(-20%, 0, 0);\n          transform: translate3d(-20%, 0, 0);\n  opacity: 0;\n}\nh1 span.emphasis {\n  font-weight: 700;\n  font-style: italic;\n  opacity: 0;\n  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s;\n  -webkit-transform: translate3d(-20%, 0, 0);\n          transform: translate3d(-20%, 0, 0);\n  display: inline-block;\n}\nh1 span:not(.emphasis) {\n  font-size: 3.5rem;\n}\nh1 + p {\n  font-family: 'Cormorand SC';\n  font-size: 14px;\n  letter-spacing: 2px;\n  margin: 0;\n  line-height: 1;\n  margin-bottom: auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  text-transform: uppercase;\n  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.3s;\n  -webkit-transform: translate3d(-20%, 0, 0);\n          transform: translate3d(-20%, 0, 0);\n  opacity: 0;\n  font-weight: 500;\n  color: #fff;\n  padding-right: 8rem;\n}\np.paragraph {\n  margin: 0;\n  font-family: 'Cormorant Garamond', serif;\n  color: #fff;\n  width: 100%;\n  max-width: 350px;\n  text-align: justify;\n  font-size: 21px;\n  font-weight: 500;\n  opacity: 0;\n  transition: all .6s cubic-bezier(0.215, 0.61, 0.355, 1) 1.4s;\n  -webkit-transform: translate3d(-20%, 0, 0);\n          transform: translate3d(-20%, 0, 0);\n}\n.swiper-slide.swiper-slide-active .swiper-image-right {\n  -webkit-filter: hue-rotate(90deg);\n          filter: hue-rotate(90deg);\n}\n\n.swiper-slide.swiper-slide-active h1,\n.swiper-slide.swiper-slide-active p.paragraph,\n.swiper-slide.swiper-slide-active h1 span.emphasis,\n.swiper-slide.swiper-slide-active h1 + p {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n\n@media screen and (max-width: 1280px) {\n  h1 {\n    font-size: 3.9rem;\n  }\n  h1 span:not(.emphasis) {\n    font-size: 2.9rem;\n  }\n  h1 + p {\n    font-size: 13px;\n  }\n  p.paragraph {\n    font-size: 22px;\n    line-height: 1.3;\n  }\n}\n@media screen and (max-width: 960px) {\n  h1 {\n    font-size: 3.5rem;\n  }\n  h1 span:not(.emphasis) {\n    font-size: 2.5rem;\n  }\n  p.paragraph {\n    max-width: 90%;\n  }\n}\n@media screen and (max-width: 640px) {\n  #home-slider{\n    height: 86vh;\n    width: 96vw;\n  }\n  h1 {\n    font-size: 3.2rem;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n  }\n  h1 span:not(.emphasis) {\n    font-size: 2.1rem;\n  }\n  p.paragraph {\n    max-width: 94%;\n  }\n}\n\n\n@media screen and (max-width: 767px) {\n.table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 0px solid #ddd;\n}\n}\n\n/* Swiper css file. Only thing changed down here is the pagination styling */\n/**\n * Swiper 3.4.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * \n * http://www.idangero.us/swiper/\n * \n * Copyright 2016, Vladimir Kharlampidi\n * The iDangero.us\n * http://www.idangero.us/\n * \n * Licensed under MIT\n * \n * Released on: December 13, 2016\n */\n.swiper-container {\n  height: 100%;\n  width: 100%;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  box-sizing: content-box;\n  background: transparent; \n}\n.swiper-container-android .swiper-slide, .swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  background: transparent;\n}\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  background: transparent;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n  background: transparent;\n}\n\n/* Auto Height */\n.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  transition-property: height, -webkit-transform;\n  transition-property: transform, height;\n  transition-property: transform, height, -webkit-transform;\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n/* IE10 Windows Phone 8 Fixes */\n.swiper-wp8-horizontal {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.swiper-wp8-vertical {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n}\n/* Arrows */\n.swiper-button-prev, .swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev, .swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next, .swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n/* Pagination Styles */\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullet {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  background: #fff;\n  opacity: 0.4;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-white .swiper-pagination-bullet {\n  background: #fff;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #fff;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #fff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 15px;\n  bottom: 15px;\n}\n.swiper-container-vertical\n  > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 5px 0;\n  display: block;\n}\n.swiper-container-horizontal\n  > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 5px;\n}\n/* Progress */\n.swiper-pagination-progress {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progress .swiper-pagination-progressbar {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {\n  -webkit-transform-origin: right top;\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progress {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progress {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-progress.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.5);\n}\n.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {\n  background: #fff;\n}\n.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {\n  background: #000;\n}\n/* 3D Container */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  -o-perspective: 1200px;\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  /* Safari 4+, Chrome */\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(\n    to left,\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0)\n  );\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  /* Safari 4+, Chrome */\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0)\n  );\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  /* Safari 4+, Chrome */\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0)\n  );\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  /* Safari 4+, Chrome */\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0)\n  );\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n/* Coverflow */\n.swiper-container-coverflow .swiper-wrapper,\n.swiper-container-flip .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px;\n}\n/* Cube + Flip */\n.swiper-container-cube, .swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide, .swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-cube .swiper-slide .swiper-slide,\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/* Cube */\n.swiper-container-cube .swiper-slide {\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n/* Fade */\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n\n/*swiper slide for section 3*/\n\n.slide-content-cta, .slide-side-text, .controls-button {\n  font-family: 'Montserrat';\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: .12rem;\n  font-size: .9rem;\n  line-height: 1;\n}\n\n.slide-content-cta:hover {\n  text-decoration: none;\n}\n\n.slide-content-cta2:hover {\n  text-decoration: none;\n}\n\n[v-cloak] {\n  opacity: 0;\n}\n\nbody {\n  cursor: default;\n}\nbody ::-moz-selection {\n  background-color: rgba(46, 49, 52, 0.7);\n  color: #f5f5f1;\n}\nbody ::selection {\n  background-color: rgba(46, 49, 52, 0.7);\n  color: #f5f5f1;\n}\nbody ::-moz-selection {\n  background-color: rgba(46, 49, 52, 0.7);\n  color: #f5f5f1;\n}\n\n.wrapper {\n  height: calc(100vh - 50px);\n  min-height: 36rem;\n  position: relative;\n}\n@media (max-width: 630px) {\n  .wrapper {\n    height: 100vh;\n    min-height: 0;\n  }\n}\n\n.slide-wrapper {\n  background-size: cover;\n  height: 100%;\n  background-position: center center;\n  position: absolute;\n  width: 100%;\n  background-blend-mode: darken;\n}\n.slide-wrapper:nth-child(1) {\n  background-color: rgba(115, 129, 153, 0.4);\n}\n.slide-wrapper:nth-child(1):before {\n  background-color: rgba(115, 129, 153, 0.25);\n}\n.slide-wrapper:nth-child(1) .slide-content-text {\n  text-shadow: 2px 5px 45px rgba(85, 96, 113, 0.25);\n}\n.slide-wrapper:nth-child(2) {\n  background-color: rgba(144, 171, 184, 0.7);\n}\n.slide-wrapper:nth-child(2):before {\n  background-color: rgba(144, 171, 184, 0.3);\n}\n.slide-wrapper:nth-child(2) .slide-content-text {\n  text-shadow: 2px 5px 45px rgba(121, 142, 152, 0.2);\n}\n.slide-wrapper:nth-child(3) {\n  background-color: rgba(86, 125, 156, 0.5);\n}\n.slide-wrapper:nth-child(3):before {\n  background-color: rgba(86, 125, 156, 0.2);\n}\n.slide-wrapper:nth-child(3) .slide-content-text {\n  text-shadow: 2px 5px 55px rgba(57, 83, 103, 0.4);\n}\n.slide-wrapper:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.slide-inner {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  overflow: hidden;\n}\n.slide-bg-text {\n  font-family: 'Playfair Display';\n  color: #000;\n  font-size: 42vh;\n  line-height: .8;\n  opacity: .03;\n  font-weight: 900;\n  margin-top: -4rem;\n  position: absolute;\n  top: 50%;\n  left: 5vw;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.slide-bg-text > p:last-child {\n  padding-left: 4rem;\n}\n.slide-content {\n  color: #fff;\n  margin-top: 5rem;\n  position: absolute;\n  top: 50%;\n  left: calc(13vw + (.7) * 48vh);\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (max-width: 1000px) {\n  .slide-content {\n    left: calc(13vw + 1rem);\n  }\n}\n@media (max-height: 730px) {\n  .slide-content {\n    top: 30%;\n    -webkit-transform: translateY(-30%);\n            transform: translateY(-30%);\n    left: calc(9vw + (.7) * 16vw);\n  }\n}\n.slide-content-text {\n  font-family: 'Playfair Display';\n  font-size: 9rem;\n  letter-spacing: .2rem;\n  line-height: .87;\n  font-weight: 700;\n  will-change: auto;\n}\n@media (max-height: 790px) {\n  .slide-content-text {\n    font-size: 7rem;\n  }\n}\n@media (max-width: 1150px) {\n  .slide-content-text {\n    font-size: 7rem;\n  }\n}\n@media (max-width: 840px) {\n  .slide-content-text {\n    font-size: 5.5rem;\n  }\n}\n@media (max-width: 630px) {\n  .slide-content-text {\n    margin-bottom: 5.5rem;\n  }\n}\n@media (max-width: 500px) {\n  .slide-content-text {\n    font-size: 3.5rem;\n  }\n}\n.slide-content-text > p:last-child {\n  padding-left: 3rem;\n}\n.slide-content-cta {\n  cursor: pointer;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  margin-top: 4.5rem;\n  margin-left: calc((.3) * 48vh + 4.5rem);\n  padding: .9rem 2.2rem;\n  border-left: 1px solid #fff;\n  border-right: 1px solid #fff;\n  transition: .18s ease-in-out;\n  font-weight: 700;\n}\n.slide-content-cta2 {\n  cursor: pointer;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  margin-top: 4.5rem;\n  margin-left: calc((.3) * 48vh + 4.5rem);\n  padding: .9rem 2.2rem;\n  border-left: 1px solid #fff;\n  border-right: 1px solid #fff;\n  transition: .18s ease-in-out;\n  font-weight: 700;\n}\n@media (max-width: 1000px) {\n  .slide-content-cta {\n    background-color: rgba(255, 255, 255, 0.3);\n    padding-top: 1.2rem;\n    padding-bottom: 1.2rem;\n  }\n}\n@media (max-width: 630px) {\n  .slide-content-cta {\n    font-size: 1.5rem;\n  }\n}\n.slide-content-cta:hover {\n  color: #000;\n  background-color: #fff;\n}\n.slide-content-cta2:hover {\n  color: #000;\n  background-color: #fff;\n}\n.slide-rect {\n  height: 62vh;\n  width: 48vh;\n  border-image-slice: 10%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 13vw;\n  border-width: 5vh;\n  border-style: solid;\n  box-shadow: 2px 2px 90px 30px rgba(41, 50, 61, 0.22);\n  will-change: auto;\n}\n@media (max-height: 790px) {\n  .slide-rect {\n    left: 9vw;\n    height: 20vw;\n    width: 16vw;\n    border-width: 5vh;\n  }\n}\n@media (max-height: 730px) {\n  .slide-rect {\n    top: 30%;\n    -webkit-transform: translateY(-30%);\n            transform: translateY(-30%);\n  }\n}\n.slide-rect-filter {\n  -webkit-filter: brightness(110%) contrast(110%) saturate(110%);\n          filter: brightness(110%) contrast(110%) saturate(110%);\n}\n.slide-side-text {\n  position: absolute;\n  left: calc(13vw - 3rem);\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  top: calc((50% - (62vh / 2)) + (5vh / 2));\n}\n@media (max-height: 790px) {\n  .slide-side-text {\n    left: calc(9vw - 3rem);\n    top: calc((50% - (20vw / 2)) + (5vh / 2));\n  }\n}\n@media (max-height: 730px) {\n  .slide-side-text {\n    top: calc((40% - (20vw / 2)) + (5vh / 2));\n  }\n}\n.slide-side-text > span:first-child {\n  font-weight: 700;\n}\n.slide-side-text:after {\n  content: \"\";\n  width: 1px;\n  background-color: #fff;\n  height: 40px;\n  display: block;\n  position: absolute;\n  top: calc(100% + 25px);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.slide-content-text-center {\n\tright: 8%;\n\t color: #fff;\n  margin-top: 5rem;\n  position: absolute;\n  top: 50%;\n  left: calc(33vw + (.9) * 48vh);\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n@media (max-width: 800px){\n.slide-content-text-center {\n\tleft: 80%;\n\tright: 8%;\n}\t\n}\n\n.controls-container {\n  position: absolute;\n  z-index: 200;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  bottom: 0;\n  right: 0;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n@media (max-width: 630px) {\n  .controls-container {\n/*     display: none; */\n  }\n}\n.controls-button {\n  cursor: pointer;\n  background-color: rgba(208, 206, 204, 0.32);\n  border: 0;\n  padding: 1.6rem 2.2rem;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  min-width: 15rem;\n  transition: .25s ease-in-out;\n  outline: 0;\n}\n@media (max-width: 730px) {\n  .controls-button {\n    padding: 1.2rem 1.4rem;\n    min-width: 13rem;\n    font-size: 1.2rem;\n  }\n}\n@media (max-width: 400px) {\n  .controls-button {\n    padding: 1rem 1.1rem;\n    min-width: 10rem;\n    font-size: 0.9rem;\n  }\n}\n\n.controls-button:not(.active):hover {\n  color: #000;\n  background-color: #fff;\n}\n.controls-button.active {\n  cursor: default;\n  font-weight: 700;\n  background-color: #3b3e45;\n  padding-top: 1.9rem;\n  padding-bottom: 1.9rem;\n  margin-bottom: -0.3rem;\n  position: relative;\n}\n@media (max-width: 730px) {\n  .controls-button.active {\n    padding-top: 1.4rem;\n    padding-bottom: 1.4rem;\n    margin-bottom: -0.15rem;\n  }\n}\n@media (max-width: 400px) {\n  .controls-button.active {\n    padding-top: 1.4rem;\n    padding-bottom: 1.4rem;\n    margin-bottom: -0.15rem;\n    font-size:1rem;\n  }\n}\n.controls-button.active:after {\n  content: \"\";\n  background-color: #e3e3e3;\n  height: 5px;\n  width: calc(100% - 8px);\n  position: absolute;\n  top: 100%;\n  left: 4px;\n}\n.controls-button:not(.active) + .controls-button {\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n}\n@media (max-width:400px){\n.controls-button:not(.active) + .controls-button {\n  font-size: 0.6rem;\n}\t\n}\n\n.pagination-container {\n  position: absolute;\n  z-index: 200;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  right: 2rem;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n@media (max-width: 920px) {\n  .pagination-container {\n    display: none;\n  }\n}\n.pagination-item {\n  width: 30px;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.6);\n  transition: .18s ease-in-out;\n}\n.pagination-item + .pagination-item {\n  margin-top: 1rem;\n}\n.pagination-item.active {\n  background-color: #fff;\n  position: relative;\n  -webkit-transform: translateX(-0.6rem);\n          transform: translateX(-0.6rem);\n  width: 35px;\n}\n.pagination-item.active:after {\n  content: \"\";\n  height: 4px;\n  width: 2px;\n  border-radius: 35%;\n  background-color: #fff;\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateX(0.6rem) translateY(-50%);\n          transform: translateX(0.6rem) translateY(-50%);\n}\n.pagination-item:not(.active) {\n  cursor: pointer;\n}\n.pagination-item:not(.active):hover {\n  background-color: #fff;\n  width: 35px;\n}\n\n@-webkit-keyframes slideLeft {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n\n@keyframes slideLeft {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n@-webkit-keyframes slideRight {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideRight {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes cutTextUp {\n  from {\n    -webkit-clip-path: inset(0 0 -10% 0);\n            clip-path: inset(0 0 -10% 0);\n  }\n  to {\n    -webkit-clip-path: inset(0 0 100% 0);\n            clip-path: inset(0 0 100% 0);\n  }\n}\n@keyframes cutTextUp {\n  from {\n    -webkit-clip-path: inset(0 0 -10% 0);\n            clip-path: inset(0 0 -10% 0);\n  }\n  to {\n    -webkit-clip-path: inset(0 0 100% 0);\n            clip-path: inset(0 0 100% 0);\n  }\n}\n@-webkit-keyframes cutTextDown {\n  from {\n    -webkit-clip-path: inset(100% 0 0 0);\n            clip-path: inset(100% 0 0 0);\n  }\n  to {\n    -webkit-clip-path: inset(-10% 0 -20% 0);\n            clip-path: inset(-10% 0 -20% 0);\n    opacity: 1;\n  }\n}\n@keyframes cutTextDown {\n  from {\n    -webkit-clip-path: inset(100% 0 0 0);\n            clip-path: inset(100% 0 0 0);\n  }\n  to {\n    -webkit-clip-path: inset(-10% 0 -20% 0);\n            clip-path: inset(-10% 0 -20% 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes cutTextDownFromTop {\n  from {\n    -webkit-clip-path: inset(0 0 100% 0);\n            clip-path: inset(0 0 100% 0);\n  }\n  to {\n    -webkit-clip-path: inset(0 0 -30% 0);\n            clip-path: inset(0 0 -30% 0);\n    opacity: 1;\n  }\n}\n@keyframes cutTextDownFromTop {\n  from {\n    -webkit-clip-path: inset(0 0 100% 0);\n            clip-path: inset(0 0 100% 0);\n  }\n  to {\n    -webkit-clip-path: inset(0 0 -30% 0);\n            clip-path: inset(0 0 -30% 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rectMovement {\n  0% {\n    -webkit-transform: translateX(0) rotate(0) translateY(-50%);\n            transform: translateX(0) rotate(0) translateY(-50%);\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n            transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n    opacity: 0;\n  }\n}\n@keyframes rectMovement {\n  0% {\n    -webkit-transform: translateX(0) rotate(0) translateY(-50%);\n            transform: translateX(0) rotate(0) translateY(-50%);\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n            transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n    opacity: 0;\n  }\n}\n@media (max-height: 730px) {\n  @-webkit-keyframes rectMovement {\n    0% {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n    }\n    60% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n              transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n      opacity: 0;\n    }\n  }\n  @keyframes rectMovement {\n    0% {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n    }\n    60% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n              transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n      opacity: 0;\n    }\n  }\n}\n@-webkit-keyframes rectMovementFromRight {\n  0% {\n    -webkit-transform: translateX(calc(48vh)) rotate(12deg) translateY(-50%);\n            transform: translateX(calc(48vh)) rotate(12deg) translateY(-50%);\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(0) rotate(0) translateY(-50%);\n            transform: translateX(0) rotate(0) translateY(-50%);\n    opacity: 1;\n    @media (max-height: 730px) {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n    }\n  }\n}\n@keyframes rectMovementFromRight {\n  0% {\n    -webkit-transform: translateX(calc(48vh)) rotate(12deg) translateY(-50%);\n            transform: translateX(calc(48vh)) rotate(12deg) translateY(-50%);\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(0) rotate(0) translateY(-50%);\n            transform: translateX(0) rotate(0) translateY(-50%);\n    opacity: 1;\n    @media (max-height: 730px) {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n    }\n  }\n}\n@media (max-height: 730px) {\n  @-webkit-keyframes rectMovementFromRight {\n    0% {\n      -webkit-transform: translateX(calc(48vh)) rotate(12deg) translateY(-30%);\n              transform: translateX(calc(48vh)) rotate(12deg) translateY(-30%);\n      opacity: 0;\n    }\n    60% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n      opacity: 1;\n    }\n  }\n  @keyframes rectMovementFromRight {\n    0% {\n      -webkit-transform: translateX(calc(48vh)) rotate(12deg) translateY(-30%);\n              transform: translateX(calc(48vh)) rotate(12deg) translateY(-30%);\n      opacity: 0;\n    }\n    60% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n      opacity: 1;\n    }\n  }\n}\n@-webkit-keyframes rectMovementRight {\n  0% {\n    -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n            transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n  }\n  40% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(0) rotate(0) translateY(-50%);\n            transform: translateX(0) rotate(0) translateY(-50%);\n    opacity: 1;\n    @media (max-height: 730px) {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n    }\n  }\n}\n@keyframes rectMovementRight {\n  0% {\n    -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n            transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);\n  }\n  40% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(0) rotate(0) translateY(-50%);\n            transform: translateX(0) rotate(0) translateY(-50%);\n    opacity: 1;\n    @media (max-height: 730px) {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n    }\n  }\n}\n@media (max-height: 730px) {\n  @-webkit-keyframes rectMovementRight {\n    0% {\n      -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n              transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n    }\n    40% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n      opacity: 1;\n    }\n  }\n  @keyframes rectMovementRight {\n    0% {\n      -webkit-transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n              transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);\n    }\n    40% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(0) rotate(0) translateY(-30%);\n              transform: translateX(0) rotate(0) translateY(-30%);\n      opacity: 1;\n    }\n  }\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.slide-wrapper {\n  opacity: 0;\n  transition-delay: 1.4s;\n  transition-duration: 0s;\n  transition-property: opacity;\n  will-change: opacity, transform;\n}\n.slide-wrapper:not(.active) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-name: slideLeft;\n          animation-name: slideLeft;\n  -webkit-animation-duration: 0.9s;\n          animation-duration: 0.9s;\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);\n          animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);\n  pointer-events: none;\n}\n.slide-wrapper:not(.active) .slide-content-text > p,\n.slide-wrapper:not(.active) .slide-side-text {\n  -webkit-animation-name: cutTextUp;\n          animation-name: cutTextUp;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n.slide-wrapper:not(.active) .slide-rect {\n  -webkit-animation-name: rectMovement;\n          animation-name: rectMovement;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.slide-wrapper.active {\n  transition-delay: 0s;\n  opacity: 1;\n}\n.slide-wrapper.active .slide-content-text > p {\n  opacity: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n  -webkit-animation-name: cutTextDown;\n          animation-name: cutTextDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.slide-wrapper.active .slide-rect {\n  opacity: 0;\n  -webkit-animation-name: rectMovementFromRight;\n          animation-name: rectMovementFromRight;\n  -webkit-animation-duration: 0.45s;\n          animation-duration: 0.45s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.is-previous .slide-wrapper:not(.active) {\n  -webkit-animation: none;\n          animation: none;\n}\n.is-previous .slide-wrapper:not(.active) .slide-rect {\n  -webkit-animation: none;\n          animation: none;\n}\n.is-previous .slide-wrapper.active {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-name: slideRight;\n          animation-name: slideRight;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);\n          animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);\n}\n.is-previous .slide-wrapper.active .slide-rect {\n  opacity: 0;\n  -webkit-animation-name: rectMovementRight;\n          animation-name: rectMovementRight;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n\n.first-load .slide-wrapper.active .slide-side-text,\n.first-load .slide-wrapper.active .slide-content-cta,\n.first-load .slide-wrapper.active .slide-rect,\n.first-load .controls-container {\n  opacity: 0;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s;\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n.first-load .slide-wrapper.active .slide-content-text > p {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n}\n\n/* for section #4*/\n\n/* *, */\n/* *:before, */\n/* *:after { */\n/*   box-sizing: inherit; */\n/* } */\n\n.slide-content-cta, .controls-button {\n  font-family: 'Shadows Into Light',Corsiva;\n  text-transform: uppercase;\t\n  color: #fff;\n  letter-spacing: .12rem;\n  font-size: 2rem;\n  line-height: 1;\n}\n\n@media (max-width: 600px ){\n\t.slide-content-cta, .controls-button {\n\t  font-family: 'Shadows Into Light',Corsiva;\n\t  text-transform: uppercase;\t\n\t  color: #fff;\n\t  letter-spacing: .12rem;\n\t  font-size: 1.2rem;\n\t  line-height: 1;\n}\n}\n@media (max-width: 400px ){\n\t.slide-content-cta, .controls-button {\n\t  font-family: 'Shadows Into Light',Corsiva;\n\t  text-transform: uppercase;\t\n\t  color: #fff;\n\t  letter-spacing: .12rem;\n\t  line-height: 1;\n\t  font-size:0.6rem;\n}\n}\n@media (max-width: 300px ){\n\t.slide-content-cta, .controls-button {\n\t  font-family: 'Shadows Into Light',Corsiva;\n\t  text-transform: uppercase;\t\n\t  color: #fff;\n\t  letter-spacing: .12rem;\n\t  line-height: 1;\n\t  font-size:0.6rem;\n}\n}\n\n.slide-content-cta2, .controls-button2 {\n  font-family: 'Shadows Into Light',Corsiva;\n  text-transform: uppercase;\t\n  color: #fff;\n  letter-spacing: .12rem;\n  font-size: 2rem;\n  line-height: 1;\n}\n\n@media (max-width: 600px ){\n\t.slide-content-cta2, .controls-button2 {\n\t  font-family: 'Shadows Into Light',Corsiva;\n\t  text-transform: uppercase;\t\n\t  color: #fff;\n\t  letter-spacing: .12rem;\n\t  font-size: 1.2rem;\n\t  line-height: 1;\n\t  margin-left:-30px;\n}\n}\n@media (max-width: 300px ){\n\t.slide-content-cta2, .controls-button2 {\n\t  font-family: 'Shadows Into Light',Corsiva;\n\t  text-transform: uppercase;\t\n\t  color: #fff;\n\t  letter-spacing: .12rem;\n\t  font-size: 0.8rem;\n\t  line-height: 1;\n\t  margin-left:-30px;\n}\n}\n.append-buttons { \n     text-align: center; \n     margin-top: 20px; \n} \n\n.append-buttons a { \n     display: inline-block; \n     margin: 0 10px; \n} \n\nfigure {\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n\nfigure:hover img {\n  transition-duration: 0.8s;\n  opacity: 0.8;\n}\n\nfigure figcaption {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition-duration: 0.8s;\n  color: #000;\n}\n\nfigure:hover figcaption {\n    opacity: 1;\n}\n\n/* section #5*/\n\n/* jssor slider loading skin spin css */\n.jssorl-009-spin img {\n\t-webkit-animation-name: jssorl-009-spin;\n\t        animation-name: jssorl-009-spin;\n\t-webkit-animation-duration: 1.6s;\n\t        animation-duration: 1.6s;\n\t-webkit-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes jssorl-009-spin {from { -webkit-transform:rotate(0deg); transform:rotate(0deg);\n\t\n}\n\nto {\n\t-webkit-transform: rotate(360deg);\n\t        transform: rotate(360deg);\n}\n\n}\n\n@keyframes jssorl-009-spin {from { -webkit-transform:rotate(0deg); transform:rotate(0deg);\n\t\n}\n\nto {\n\t-webkit-transform: rotate(360deg);\n\t        transform: rotate(360deg);\n}\n\n}\n.jssorb057 .i {\n\tposition: absolute;\n\tcursor: pointer;\n}\n\n.jssorb057 .i .b {\n\tfill: none;\n\tstroke: #fff;\n\tstroke-width: 2000;\n\tstroke-miterlimit: 10;\n\tstroke-opacity: 0.4;\n}\n\n.jssorb057 .i:hover .b {\n\tstroke-opacity: .7;\n}\n\n.jssorb057 .iav .b {\n\tstroke-opacity: 1;\n}\n\n.jssorb057 .i.idn {\n\topacity: .3;\n}\n\n.jssora073 {\n\tdisplay: block;\n\tposition: absolute;\n\tcursor: pointer;\n}\n\n.jssora073 .a {\n\tfill: #ddd;\n\tfill-opacity: .7;\n\tstroke: #000;\n\tstroke-width: 160;\n\tstroke-miterlimit: 10;\n\tstroke-opacity: .7;\n}\n\n.jssora073:hover {\n\topacity: .8;\n}\n\n.jssora073.jssora073dn {\n\topacity: .4;\n}\n\n.jssora073.jssora073ds {\n\topacity: .3;\n\tpointer-events: none;\n}\n\n.modal-open {\n    overflow: hidden !important;\n    position:fixed;\n    width: 100%;\n}\n\n\n\n#loader-wrapper {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n}\n#loader {\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    margin: -75px 0 0 -75px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #3498db;\n\n    -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n\n    z-index: 1001;\n}\n\n    #loader:before {\n        content: \"\";\n        position: absolute;\n        top: 5px;\n        left: 5px;\n        right: 5px;\n        bottom: 5px;\n        border-radius: 50%;\n        border: 3px solid transparent;\n        border-top-color: #e74c3c;\n\n        -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n        animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n    }\n\n    #loader:after {\n        content: \"\";\n        position: absolute;\n        top: 15px;\n        left: 15px;\n        right: 15px;\n        bottom: 15px;\n        border-radius: 50%;\n        border: 3px solid transparent;\n        border-top-color: #f9c922;\n\n        -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n          animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n    }\n\n    @-webkit-keyframes spin {\n        0%   { \n            -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n        }\n        100% {\n            -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n        }\n    }\n    @keyframes spin {\n        0%   { \n            -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n        }\n        100% {\n            -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n        }\n    }\n\n    #loader-wrapper .loader-section {\n        position: fixed;\n        top: 0;\n        width: 51%;\n        height: 100%;\n        background: #222222;\n        z-index: 1000;\n        -webkit-transform: translateX(0);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */\n    }\n\n    #loader-wrapper .loader-section.section-left {\n        left: 0;\n    }\n\n    #loader-wrapper .loader-section.section-right {\n        right: 0;\n    }\n\n    /* Loaded */\n    .loaded #loader-wrapper .loader-section.section-left {\n        -webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n                transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */  \n        transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n    }\n\n    .loaded #loader-wrapper .loader-section.section-right {\n        -webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n                transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */  \ntransition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n    }\n    \n    .loaded #loader {\n        opacity: 0;  \n        transition: all 0.3s ease-out;\n    }\n    .loaded #loader-wrapper {\n        visibility: hidden;\n\n        -webkit-transform: translateY(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n                transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */  \n        transition: all 0.3s 1s ease-out;\n    }\n    \n    /* JavaScript Turned Off */\n    .no-js #loader-wrapper {\n        display: none;\n    }\n    .no-js h1 {\n        color: #222222;\n    }\n\n    #content {\n        margin: 0 auto;\n        padding-bottom: 50px;\n        width: 80%;\n        max-width: 978px;        \n    }  \n    \n.sec7msg1 {\n\tfont-family: 'Shadows Into Light', cursive;\n\ttext-align: center;\n\tfont-size:44px;\n}\n/* Extra small devices (phones, up to 480px) */\n@media screen and (max-width: 767px) {\n\t.sec7msg1 {\n\tfont-size:24px;\n}\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991px) {\n\t.sec7msg1 {\n\tfont-size:29px;\n}\n}\n/* tablets/desktops and up ----------- */\n@media (min-width: 992px) and (max-width: 1199px) {\n\t.sec7msg1 {\n\tfont-size:32px;\n}\n}\n/* large desktops and up ----------- */\n@media screen and (min-width: 1200px) {\n\t.sec7msg1 {\n\tfont-size:44px;\n}\n}\n\n.sec7msg258 {\n\tfont-family: 'Satisfy', cursive;\n\ttext-align: left;\n\tfont-size:24px;\n\tmargin-left:20px;\n}\n\n.sec7msg36 {\n\tfont-family: 'Gloria Hallelujah', cursive;\n\ttext-align: left;\n\tfont-size:24px;\n\tmargin-left:20px;\n}\n\n.sec7msg47 {\n\tfont-family: 'Architects Daughter', cursive;\n\ttext-align: left;\n\tfont-size:24px;\n\tmargin-left:20px;\n}\n\n/* .sec5msg9 { */\n/* \tfont-family: 'Architects Daughter', cursive; */\n/* \ttext-align: left; */\n/* \tfont-size:24px; */\n/* \tmargin-left:20px; */\n/* } */\n\n.sec7msg10 {\n\tfont-family: 'Architects Daughter', cursive;\n\ttext-align: left;\n\tfont-size:24px;\n\tmargin-left:20px;\n}\n\n.emphasisSEC7 {\n\tfont-size: 50px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: bold;\t\n}\n\n.emphasisSEC2 {\n\tfont-size: 35px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: inline;\t\n}\n@media screen and (max-width: 960px) {\n .emphasisSEC2 {\n\tfont-size: 26px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: inline;\t\n}\n}\n\n@media screen and (max-width: 640px) {\n  .emphasisSEC2 {\n\tfont-size: 18px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: inline;\t\n}\n}\n\n@media screen and (max-width: 320px) {\n .emphasisSEC2 {\n\tfont-size: 12px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: inline;\t\n}\n}\n\n.sec8msg1 {\n\tfont-family: 'Shadows Into Light', cursive;\n\ttext-align: center;\n\tfont-size:40px;\n\tmargin-left:20px;\n}\n\n\n/* Extra small devices (phones, up to 480px) */\n@media screen and (max-width: 767px) {\n\t.emphasisSEC7 {\n\tfont-size: 27px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: bold;\t\n }\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991px) {\n\tfont-size:34px;\n}\n/* tablets/desktops and up ----------- */\n@media (min-width: 992px) and (max-width: 1199px) {\n\tfont-size:44px;\n}\n/* large desktops and up ----------- */\n@media screen and (min-width: 1200px) {\n\tfont-size:50px;\n} \n\n.emphasisSEC7btn {\n\tfont-size: 40px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: bold;\t\n\ttext-decoration: none;\n}\n\n@media screen and (max-width: 960px) {\n .emphasisSEC7btn {\n\tfont-size: 30px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: bold;\t\n\ttext-decoration: none;\n}\n}\n\n@media screen and (max-width: 640px) {\n .emphasisSEC7btn {\n\tfont-size: 22px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: bold;\t\n\ttext-decoration: none;\n}\n}\n\n@media screen and (max-width: 320px) {\n .emphasisSEC7btn {\n\tfont-size: 16px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight: bold;\t\n\ttext-decoration: none;\n}\n}\n\n\n.emphasisSEC7btn:hover {\n\tfont-size: 44px;\n\ttext-decoration: none;\n}\n\n.emphasisSEC2btn {\n\tfont-size: 40px;\n\tfont-family: 'Indie Flower', cursive;\n\tfont-weight:bolder;\n\ttext-decoration: none;\n}\n\n.emphasisSEC2btn:hover {\n\tfont-size: 40px;\n\ttext-decoration: none;\n\tfont-weight: bold;\n}\n\n\n.table-borderless > tbody > tr > td,\n.table-borderless > tbody > tr > th,\n.table-borderless > tfoot > tr > td,\n.table-borderless > tfoot > tr > th,\n.table-borderless > thead > tr > td,\n.table-borderless > thead > tr > th {\n    border: none;\n}\n\n.imgsec6 {\n  opacity: 1;\n  transition: opacity 0.25s;\n  z-index: 1;\n  background-color: rgba(46,204,113,0.6);\n  background: linear-gradient(65deg, rgba(46,204,113,0.6), rgba(243,156,18,0.6));\n  border-radius: 250%;\n  width: 60px;\n  height: 60px;\n    transition: all .5s ease;\n    vertical-align: middle;\n}\n\n.imgsec6:hover {\n    transform:scale(1.5);\n    -ms-transform:scale(1.5); /* IE 9 */\n    -moz-transform:scale(1.5); /* Firefox */\n    -webkit-transform:scale(1.5); /* Safari and Chrome */\n    -o-transform:scale(1.5); /* Opera */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/entry/entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" class=\"container-fluid\">\n\t<div id=\"loader-wrapper\">\n\t\t<div id=\"loader\"></div>\n\n\t\t<div class=\"loader-section section-left\"></div>\n\t\t<div class=\"loader-section section-right\"></div>\n\n\t</div>\n</div>\n\n<div class=\"maindiv\">\n\n\t<a class=\"back-to-top\" style=\"display: none;\" href=\"#\">TOP</a>\n\n\t<div id=\"section1\">\n\t\t<h2 class=\"section1Text blink_me\">...where your photo can make you a <span class=\"emphasis\">WINNER</span>! Find out your\n\t\tfavorite photos and <span class=\"emphasis\">TRAVEL</span> to where they were shot! </h2>\n\t\t<div id=\"floater\"></div>\n\t\t<div class=\"container1\" class=\"container-fluid\">\n\n\t\t\t<form class=\"form-inline\" action=\"/action\">\n\t\t\t\t<input type=\"email\" id=\"email\" class=\"in-email\"\n\t\t\t\t\tplaceholder=\"your email address\" name=\"email\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-lg1 btn-success btn1\">I\n\t\t\t\t\twant it!</button>\n\t\t\t</form>\n\t\t\t\n\t\t</div>\n\t</div>\n\n\t<div id=\"section2\">\n\t\t<div class=\"container container-fuild\">\n\t\t\t<!-- <div id=\"floater\"></div> -->\n\t\t\t<div class=\"page-wrap\">\n\t\t\t\t<div id=\"home-slider\">\n\t\t\t\t\t<div class=\"swiper-container\">\n\t\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t\t<div class=\"swiper-slide swiper-slide-one\">\n\t\t\t\t\t\t\t\t<div class=\"swiper-image\" data-swiper-parallax-y=\"-20%\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass=\"swiper-image-inner swiper-image-left swiper-image-one\">\n\t\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t\tOur <span class=\"emphasis\">Community</span>. <br> <span>Of\n\t\t\t\t\t\t\t\t\t\t\t\tpassionated photographers.</span>\n\t\t\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: auto; position: relative;\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-borderless\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border: 0px; height: 100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"assets/images/perfilBL.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"textoverlay\" style=\"margin-top: 30px;\">Bruno\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLopes</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success textoverlay\">see me\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tinside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilAS.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"textoverlay\" style=\"margin-top: 30px;\">Alda\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoft</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success textoverlay\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 11px;\">see me inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilJA.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">John\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAtlas</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 35%;\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilAS.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Alda\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoft</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"swiper-image\" data-swiper-parallax-y=\"35%\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass=\"swiper-image-inner swiper-image-right swiper-image-two\">\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"textoverlay\">Some of the international best\n\t\t\t\t\t\t\t\t\t\t\tawarded photographers and most traveler photographers are\n\t\t\t\t\t\t\t\t\t\t\there with us! You can follow them, interact with them and\n\t\t\t\t\t\t\t\t\t\t\ttheir work and learn with their lessons, events and trips!</h2>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"swiper-slide swiper-slide-two\">\n\t\t\t\t\t\t\t\t<div class=\"swiper-image\" data-swiper-parallax-y=\"-20%\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass=\"swiper-image-inner swiper-image-left swiper-image-three\">\n\t\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"emphasis\">The Judges</span>. <br> <span>A\n\t\t\t\t\t\t\t\t\t\t\t\tpublic choice too.</span>\n\t\t\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: auto; position: relative;\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-borderless\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border: 0px; height: 100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilBL.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"textoverlay\">Bruno\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLopes</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success textoverlay\">see me inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilAS.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Alda\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoft</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilJA.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">John\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAtlas</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 35%;\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilAS.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Alda\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoft</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"swiper-image\" data-swiper-parallax-y=\"35%\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass=\"swiper-image-inner swiper-image-right swiper-image-four\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"textoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\tOur team of new judges is entirely derived from a public\n\t\t\t\t\t\t\t\t\t\t\t\tchoice. We only make sure that the photographers that can\n\t\t\t\t\t\t\t\t\t\t\t\tbecome JUDGES have accomplished some of our <a hreaf=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\trequirements</a>, after that all the winper's have the power to\n\t\t\t\t\t\t\t\t\t\t\t\tdecide who will become the next JUDGE.\n\t\t\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"swiper-slide swiper-slide-three\">\n\t\t\t\t\t\t\t\t<div class=\"swiper-image\" data-swiper-parallax-y=\"-20%\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass=\"swiper-image-inner swiper-image-left swiper-image-five\">\n\t\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t\tAnd\t <span class=\"emphasis\">everyone</span>. <br> <span>\n\t\t\t\t\t\t\t\t\t\t\t\tAll of you who desire to learn, enjoy, win, teach, travel\n\t\t\t\t\t\t\t\t\t\t\t\tand be more!</span>\n\t\t\t\t\t\t\t\t\t\t</h1>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: auto; position: relative;\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-borderless\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border: 0px; height: 100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilBL.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Bruno\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLopes</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilAS.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Alda\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoft</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfilJA.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">John\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAtlas</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 35%;\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sec2imgdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"imgdiv\" alt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/perfil1.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"imgoverlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px; margin-top: 30px;\">Not\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMe</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"success\" style=\"font-size: 11px;\">see\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tme inside!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"swiper-image\" data-swiper-parallax-y=\"35%\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass=\"swiper-image-inner swiper-image-right swiper-image-six\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\n\t\t\t\t\t\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t\t\t\t\t\tTo grow, you need to learn something each day. There are\n\t\t\t\t\t\t\t\t\t\t\t\tmany different ways to do it, here we let you to grow by <span\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"emphasisSEC2\">learning, sharing, compete,\n\t\t\t\t\t\t\t\t\t\t\t\t\tteaching, wining, losing, socializing</span> and also <span\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"emphasisSEC2\">traveling</span> to destinations never\n\t\t\t\t\t\t\t\t\t\t\t\tseen before. In the end we want you to learn by enjoying\n\t\t\t\t\t\t\t\t\t\t\t\tyourself with your own photographic work, it can be 'TOP X'\n\t\t\t\t\t\t\t\t\t\t\t\tphoto or just a crappy photo.. who knows who is what ? <a\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"emphasisSEC2btn\" [routerLink]=\"['/register']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tJoin us </a> and find all about it!\n\t\t\t\t\t\t\t\t\t\t\t</h2>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<h2 class=\"textHomeGen\">\n\t\t\t\t... <a class=\"emphasisSEC2btn\" [routerLink]=\"['/register']\">join\n\t\t\t\t\tus</a>, A world wide community <br /> with <span class=\"emphasis\">TALENTED</span>\n\t\t\t\tand <span class=\"emphasis\">EXPERIENCED</span> professionals! Just..\n\t\t\t\t<span class=\"emphasis\">FEEL</span> inspired!\n\t\t\t</h2>\n\t</div>\n\n\t<div id=\"section3\">\n\t\t<!-- class=\"container\" class=\"container-fluid\" -->\n\t\t<!-- \t\t<p>{{appVar.slides[0].headlineFirstLine}}</p> -->\n\t\t<div  class=\"container container-fuild\">\n\t\t\t<div id=\"secvue\" class=\"wrapper\" v-cloak\n\t\t\t\tv-bind:class=\"{'is-previous': isPreviousSlide, 'first-load': isFirstLoad}\">\n\t\t\t\t<div class=\"slide-wrapper\" v-for=\"(slide, index) in slides\"\n\t\t\t\t\tv-bind:class=\"{ active: index === currentSlide }\"\n\t\t\t\t\tv-bind:style=\"{ 'z-index': (slides.length - index), 'background-image': 'url(' + slide.bgImg + ')' }\">\n\t\t\t\t\t<div class=\"slide-inner\">\n\t\t\t\t\t\t<div class=\"slide-bg-text\">\n\t\t\t\t\t\t\t<div style=\"height: 200px\">\n\t\t\t\t\t\t\t\t<div v-text=\"slide.headlineFirstLine\"></div>\n\t\t\t\t\t\t\t\t<div v-text=\"slide.headlineSecondLine\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"slide-rect-filter\">\n\t\t\t\t\t\t\t<div class=\"slide-rect\"\n\t\t\t\t\t\t\t\tv-bind:style=\"{'border-image-source': 'url(' + slide.rectImg + ')'}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"slide-content\">\n\t\t\t\t\t\t\t<h1 class=\"slide-content-text\">\n\t\t\t\t\t\t\t\t<div v-text=\"slide.headlineFirstLine\"></div>\n\t\t\t\t\t\t\t\t<div v-text=\"slide.headlineSecondLine\"></div>\n\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t<a class=\"slide-content-cta2\">Its for me too!</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"slide-content-text-center\">\n\t\t\t\t\t\t\t<h2 v-text=\"slide.sideMessage\"></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2 class=\"slide-side-text\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<div v-text=\"slide.sublineFirstLine\"></div>\n\t\t\t\t\t\t\t</span> <span>\n\t\t\t\t\t\t\t\t<div v-text=\"slide.sublineSecondLine\"></div>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"controls-container\">\n\t\t\t\t\t<button class=\"controls-button\" \n\t\t\t\t\t    v-for=\"(slide, index) in slides\"\n\t\t\t\t\t\tv-bind:class=\"{ active: index === currentSlide }\"\n\t\t\t\t\t\tv-on:click=\"updateSlide(index)\">\n\t\t\t\t\t\t<div v-text=\"slide.headlineFirstLine\"></div>\n\t\t\t\t\t\t<div v-text=\"slide.headlineSecondLine\"></div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pagination-container\">\n\t\t\t\t\t<span class=\"pagination-item\" \n\t\t\t\t\t\tv-for=\"(slide, index) in slides\"\n\t\t\t\t\t\tv-bind:class=\"{ active: index === currentSlide }\"\n\t\t\t\t\t\tv-on:click=\"updateSlide(index)\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"section4\" class=\"textHomeGen\">\n\t\n\t<h2 class=\"textHomeGen\">\n\t\t\t\t... <a class=\"emphasisSEC2btn\" [routerLink]=\"['/contexts4free']\">Participate</a>\n\t\t\t\tand create new contests, <a class=\"emphasisSEC2btn\" [routerLink]=\"['/vote']\">vote</a>\n\t\t\t\tand <span class=\"emphasis\">WIN</span> great awards from the greatest brands in the market and even cash!\n\t\t\t</h2>\n\t\t\t\n\t\t<div class=\"container container-fuild\">\n\n\t\t\t<div class=\"table-responsive\" style=\"margin-top: 50px\">\n\t\t\t\t<table id=\"sec4tab\" class=\"table table-borderless\" style=\"border: 0px\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"sec4imgdiv\">\n\t\t\t\t\t\t\t\t\t<img class=\"imgdivsec4\"\n\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/img1.jpg\" />\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"imgTextOversec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b> 5 days 6 hours</b></span><br/> \n\t\t\t\t\t\t\t\t\t\t\t<br/><b>Emotions and Arts</b><br/><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b>WITH restrictions</b></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t<button class=\"success\">\t\n\t\t\t\t\t\t\t\t\t<div class=\"imgoverlaysec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Photos: </span> <b>+20K</b><br/> \n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Min. cash entry: </span><b>5k€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Awards non cash: </span><b>1K€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Top winners: </span> <b>100</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Entry fee:  </span><b>1€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Juri:  </span> <b>YES</b><br/>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"sec4imgdiv\">\n\t\t\t\t\t\t\t\t\t<img class=\"imgdivsec4\"\n\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/005.jpg\" />\n\t\t\t\t\t\t\t\t\t<div class=\"imgTextOversec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b> 12 days 1 hour</b></span><br/> \n\t\t\t\t\t\t\t\t\t\t\t<br/><b>Travel and People</b><br/><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b>NO restrictions</b></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t<button class=\"success\">\n\t\t\t\t\t\t\t\t\t<div class=\"imgoverlaysec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Photos: </span> <b>+200</b><br/> \n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Min. cash entry: </span><b>500€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Awards non cash: </span><b>250€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Top winners: </span> <b>5</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Entry fee:  </span><b>0.5€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Juri:  </span> <b>YES</b><br/>\n\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"sec4imgdiv\">\n\t\t\t\t\t\t\t\t<img class=\"imgdivsec4\"\n\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/006.jpg\" />\n\t\t\t\t\t\t\t<div class=\"imgTextOversec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b> 1 day </b></span><br/> \n\t\t\t\t\t\t\t\t\t\t\t<br/><b>Animals and Movement</b><br/><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b>NO restrictions</b></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<button class=\"success\">\n\t\t\t\t\t\t\t\t\t<div class=\"imgoverlaysec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Photos: </span> <b>+1000</b><br/> \n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">WinPi points: </span><b>500</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Awards non cash: </span><b>0€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Top winners: </span> <b>10</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Entry fee:  </span><b>FREE</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Juri:  </span> <b>NO</b><br/>\n\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"sec4imgdiv\">\n\t\t\t\t\t\t\t\t\t<img class=\"imgdivsec4\"\n\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/007.jpg\" />\n\t\t\t\t\t\t\t\t\t\t<div class=\"imgTextOversec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b> 1 day 1 hour</b></span><br/> \n\t\t\t\t\t\t\t\t\t\t\t<br/><b>Water</b><br/><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b>WITH restrictions</b></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t<button class=\"success\">\n\t\t\t\t\t\t\t\t\t<div class=\"imgoverlaysec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Photos: </span> <b>+20</b><br/> \n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">WinPi points: </span><b>2000</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Awards non cash: </span><b>700€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Top winners: </span> <b>500</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Entry fee:  </span><b>FREE</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Juri:  </span> <b>YES</b><br/>\n\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"sec4imgdiv\">\n\t\t\t\t\t\t\t\t\t<img class=\"imgdivsec4\" \n\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/008.jpg\" />\n\t\t\t\t\t\t\t\t\t\t<div class=\"imgTextOversec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b> less than 1 hour </b></span><br/> \n\t\t\t\t\t\t\t\t\t\t\t<br/><b>Sports and Cities</b><br/><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel\"><b>WITH restrictions</b></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t<button class=\"success\">\n\t\t\t\t\t\t\t\t\t<div class=\"imgoverlaysec4\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"imgoverlaysec4P\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Photos: </span> <b>+300</b><br/> \n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Prize money: </span><b>1.2K€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Awards non cash: </span><b>700€</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Top winners: </span> <b>10</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Entry fee:  </span><b>FREE</b><br/>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sec4OverTextLabel sotl\">Juri:  </span> <b>YES</b><br/>\n\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"section5\" class=\"textHomeGen\">\n\t\t<h2\n\t\t\t\tstyle=\"text-align: center; font: 900 32px/1.9 'Gloria Hallelujah', sans-serif;\">\n\t\t\t\t... Our <span class=\"emphasis\">IMPACT</span> in the world!\n\t\t\t</h2>\n\t\t\t\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div style=\"text-align: center\">\n\t\t\t\t\t<div class=\"textSec5Align\">\n\t\t\t\t\t\t<div id=\"vmap\" style=\"width: 600px; height: 400px;\"></div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"textSec5Align\">\n\t\t\t\t\t\t<p class=\"textSec5P\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t+ 100 contests / week <br/>\n\t\t\t\t\t\t    + 100K awards / week <br/>\n\t\t\t\t\t\t\t+ 50K cash awards / month <br/>\n\t\t\t\t\t\t\t\t+ 500M Votes <br/>\n\t\t\t\t\t\t\t\t+ 55M Photos <br/>\n\t\t\t\t\t\t\t\t+ 800K Active users <br/>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"section6\">\n\t\t<h2 \tstyle=\"text-align: center; font: 900 32px/1.9 'Gloria Hallelujah', sans-serif;color: white\">\n\t\t\t\t... Go <span class=\"emphasis\">social</span> see what they say about us!\n\t\t\t</h2>\n\t\t\n\t\t<div id=\"sec6Div\" class=\"container\" class=\"container-fluid\">\n\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"table-responsive\" style=\"padding-top: 3%\">\n\t\t\t\t\t<table class=\"table table-borderless\" style=\"border: 0px\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"float: right\"><img class=\"imgsec6 \" alt=\"oak4\"\n\t\t\t\t\t\t\t\t\tsrc=\"assets/images/gosocial6.png\" />  </td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td style=\"float: left\">\n\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\thref=\"http://facebook.com\" target=\"_blank\t\"> <img\n\t\t\t\t\t\t\t\t\t\tclass=\"imgsec6\" alt=\"oak\t4\" src=\"assets/images/gosocial7.png\" />\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"float: right\">\n\t\t\t\t\t\t\t\t<img class=\"imgsec6\" alt=\"oak4\"\n\t\t\t\t\t\t\t\t\tsrc=\"assets/images/gosocial5.png\" />\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td style=\"float: left\">\n\t\t\t\t\t\t\t\t<img class=\"imgsec6\" alt=\"oak\t4\"\n\t\t\t\t\t\t\t\t\tsrc=\"assets/images/gosocial8.png\" />\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"float: right\"> <img\n\t\t\t\t\t\t\t\t\tclass=\"imgsec6\" alt=\"oak\t4\" src=\"assets/images/gosocial9.png\" />\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td style=\"float: left\"><img\n\t\t\t\t\t\t\t\t\tclass=\"imgsec6\" alt=\"oak\t4\" src=\"assets/images/gosocial10.png\" />\n\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"float: right\"></td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td style=\"float: left\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<!-- \t<div id=\"section7\"> -->\n<!-- \t\t<h2 -->\n<!-- \t\t\t\tstyle=\"text-align: center; font: 900 32px/1.9 'Gloria Hallelujah', sans-serif;\"> -->\n<!-- \t\t\t<span class=\"emphasisSEC7\">...</span> You will <span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\">learn</span>, <span class=\"emphasisSEC7\">share</span>, -->\n<!-- \t\t\t<span class=\"emphasisSEC7\">invite</span>, <span class=\"emphasisSEC7\">enjoy</span> -->\n<!-- \t\t\tand <span class=\"emphasisSEC7\">feel</span> it. <span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\">Win</span>, <span class=\"emphasisSEC7\">follow</span>, -->\n<!-- \t\t\t<span class=\"emphasisSEC7\">travel</span> and much more! -->\n<!-- \t\t\t</h2> -->\n<!-- \t\t<p class=\"sec7msg258\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Learn</span> how to improve. -->\n<!-- \t\t</p> -->\n<!-- \t\t<p class=\"sec7msg36\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Share</span> your know how with your -->\n<!-- \t\t\tphotographic shots, blog, events and trips. -->\n<!-- \t\t</p> -->\n<!-- \t\t<p class=\"sec7msg47\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Invite</span> everybody to enjoy your photos -->\n<!-- \t\t\tand all you have to offer on this matter. -->\n<!-- \t\t</p> -->\n<!-- \t\t<p class=\"sec7msg258\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Enjoy</span> the way you can just use your -->\n<!-- \t\t\tphotos to express your self and let others do the same in a many -->\n<!-- \t\t\tdifferent ways. -->\n<!-- \t\t</p> -->\n<!-- \t\t<p class=\"sec7msg36\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Win</span> prizes, knowledge, awareness of -->\n<!-- \t\t\tyour self and the world and let your mind become a winner each day. -->\n<!-- \t\t</p> -->\n<!-- \t\t<p class=\"sec7msg47\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Follow</span> the greatest and your favorites, -->\n<!-- \t\t\tphotographers, photos, contests, events, trips and more -->\n<!-- \t\t</p> -->\n<!-- \t\t<p class=\"sec7msg258\"> -->\n<!-- \t\t\t<span class=\"glyphicon glyphicon-thumbs-up\"></span><span -->\n<!-- \t\t\t\tclass=\"emphasisSEC7\"> Travel</span> to where ? Yes to the right -->\n<!-- \t\t\tplace on planet earth where your favorite shots have been taken, -->\n<!-- \t\t\tthat's it! here you will find the right itineraries and all you need -->\n<!-- \t\t\tto book them for your next trip! -->\n<!-- \t\t</p> -->\n<!-- \t</div> -->\n\t<div id=\"section8\">\n\t<h2 class=\"textHomeGen\">\n\t\t  <a class=\"emphasisSEC7btn\"\n\t\t\t\t[routerLink]=\"['/register']\"> Sign Up</a> for <span\n\t\t\t\tclass=\"emphasisSEC7\">FREE</span> and discover how to bring your photographic shoots to an <span\n\t\t\t\tclass=\"emphasisSEC7\">ICONIC</span> level. <span class=\"emphasisSEC7\">Your</span> level!\n\t\t\t</h2>\n\t\t\t\n\t</div>\n\n\t<div id=\"myModal\" class=\"modal fade\">\n\t\t<div class=\"modal-dialog modal-lg\">\n\t\t\t<div class=\"modal-content\">\n\n\t\t\t\t<!-- Header -->\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h1>Header</h1>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Body -->\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<p>Body</p>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Footer -->\n\t\t\t\t<div class=\"modal-footer modal-footer--mine\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/entry/entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntryComponent = (function () {
    function EntryComponent() {
        this.entry = '{background:black;}';
        this.sections = [];
    }
    EntryComponent.prototype.ngOnInit = function () {
        var firstSection = '<div> <a herf="#"> link </a> </div>';
        this.sections[0] = firstSection;
    };
    return EntryComponent;
}());
EntryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-entry',
        template: __webpack_require__("../../../../../src/app/component/entry/entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/entry/entry.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [])
], EntryComponent);

//# sourceMappingURL=entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginDiv {\n  text-align:center; \n  margin-left:0px; \n  margin-top:0px;\n  margin-bottom:0px;\n  color: #fff;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/loginBackMainDiv.jpg") + ");\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    -webkit-background-size:cover;\n\t-moz-background-size:cover;\n\t-o-background-size:cover;\n\tfont-family: 'Indie Flower', cursive;\n    resize: both;\n    overflow:hidden;\n    position:fixed;\n    opacity: 1;\n    height: 100%;  \n    width: 100%;\n  }\n .form-group {\n    margin-left: 30%;\n    margin-right: 30%;\n}\n\n.btn-link:hover {\n\ttext-decoration: none;\n\topacity:0.8\n}\n\nh2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 2.1;\n  font-size: 2.7rem;\n  opacity: 1;\n}\n\n.btn-link {\n font-size: 3rem;\n opacity:0.8\t;\n color:aliceblue;\n}\n.btn-link:hover {\n color:#3E8F3E;\n opacity:1;\n}\n\nlabel {\n\tfont-size: 2rem;\n}\n\n.form-control{\n\tfont-size: 2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginDiv\">\n    <h2>LOGIN</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.name\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-lg1 btn-success btn1\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n        <app-alert></app-alert>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__ = __webpack_require__("../../../../../src/app/services/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_user_user_service__ = __webpack_require__("../../../../../src/app/services/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, userService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.name, this.model.password)
            .subscribe(function (token) {
            console.log('loading user with token:' + token);
            // moke call to server
            var user = new __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */](1, 'Bruno', 'Lopes', 'blopes', 'bruno.lourenco.lopes@gmail.com', 'admin');
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(_this.returnUrl);
            console.log(_this.route);
            _this.router.navigate([_this.returnUrl], { relativeTo: _this.route }).then(function () {
                console.log('navigate success');
            }, function () {
                console.log('navigate failure');
            });
            //                   this.userService.getUserByToken(token).subscribe(
            //                     (user: User) => {
            //                        // store user details and jwt token in local storage to keep user logged in between page refreshes
            //                        localStorage.setItem('currentUser', JSON.stringify(user));
            //                        this.router.navigate([this.returnUrl], {relativeTo: this.route}).then(
            //                                function(){
            //                                    console.log('navigate success');
            //                                },
            //                                function(){
            //                                    console.log('navigate failure');
            //                                }
            //                              );
            //                     }
            //                   );
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_user_user_service__["a" /* UserService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signupDiv {\n  text-align:center; \n  margin-left:0px; \n  margin-top:0px;\n  margin-bottom:0px;\n  color: #fff;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/registerBackMainDiv.jpg") + ");\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    -webkit-background-size:cover;\n\t-moz-background-size:cover;\n\t-o-background-size:cover;\n\tfont-family: 'Indie Flower', cursive;\n    resize: both;\n    overflow:hidden;\n    position:fixed;\n    opacity: 1;\n    height: 100%;  \n    width: 100%;\n  }\n .form-group {\n    margin-left: 30%;\n    margin-right: 30%;\n}\n\n.btn-link:hover {\n\ttext-decoration: none;\n\topacity:0.8\n}\n\nh2 {\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 auto 0;\n  line-height: 2.1;\n  font-size: 2.7rem;\n  opacity: 1;\n}\n\n.btn-link {\n font-size: 3rem;\n opacity:0.8\t;\n color:aliceblue;\n}\n.btn-link:hover {\n color:#eb9316;\n opacity:1;\n}\n.btn-lg1:hover {\n\tcolor:#eb9316;\n\tbackground-color:white;\n\tbackground-image:none;\n\topacity:1;\n   \n}\n\nlabel {\n\tfont-size: 2rem;\n}\n\n.form-control{\n\tfont-size: 2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signupDiv col-md-6 col-md-offset-3\">\n    <h2>SIGN UP</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n<!--     \t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\"> -->\n<!--             <label for=\"firstname\">First Name</label> -->\n<!--             <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required /> -->\n<!--             <div *ngIf=\"f.submitted && !firstname.valid\" class=\"help-block\">First Name is required</div> -->\n<!--         </div> -->\n<!--         <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\"> -->\n<!--             <label for=\"lastname\">Last Name</label> -->\n<!--             <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required /> -->\n<!--             <div *ngIf=\"f.submitted && !lastname.valid\" class=\"help-block\">Last Name is required</div> -->\n<!--         </div> -->\n<!--         <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\"> -->\n<!--             <label for=\"username\">Username</label> -->\n<!--             <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required /> -->\n<!--             <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">User Name is required</div> -->\n<!--         </div> -->\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n        </div>\n<!--         <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\"> -->\n<!--             <label for=\"password\">Password</label> -->\n<!--             <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required /> -->\n<!--             <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div> -->\n<!--         </div> -->\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-lg1 btn-warning btn1\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Login</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_alert_service__ = __webpack_require__("../../../../../src/app/services/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_user_user_service__ = __webpack_require__("../../../../../src/app/services/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.signup(this.model)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            _this.alertService.success('Registration successfully', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/component/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, firstname, lastname, username, email, role) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.role = role;
    }
    User.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util_service__ = __webpack_require__("../../../../../src/app/util/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ApplicationError } from '../../util/applicationerror.service';

/**
* AuthService uses JSON-Web-Token authorization strategy.
* Fetched token and user details are stored in sessionStorage.
*/
var AuthService = AuthService_1 = (function () {
    function AuthService(http, utilService) {
        this.http = http;
        this.utilService = utilService;
        this.refreshUserData();
    }
    /**
    * Refreshes userId, username and token from sessionStorage
    */
    AuthService.prototype.refreshUserData = function () {
        var user = sessionStorage.getItem('user');
        if (user) {
            this.saveUserDetails(JSON.parse(user));
        }
    };
    /**
    * Registers new user and saves following token
    * @param username
    * @param email
    * @param password
    */
    AuthService.prototype.signUp = function (user) {
        // moke call to server
        user.firstname = 'Bruno';
        user.lastname = 'Lopes';
        user.username = 'blopes';
        user.id = 1;
        user.role = 'admin';
        this.saveUser(user);
        this.saveUserDetails(JSON.parse(sessionStorage.getItem('user')));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(user);
        /*Serve side call
        return this.http.post(AuthService.SIGNUP_URL, user, this.generateOptions())
          .map((res: Response) => {
            this.saveToken(res);
            this.saveUserDetails(JSON.parse(sessionStorage.getItem('user')));
            console.log(res.status);
          }).catch(err => {
            return this.utilService.hanldeHttpError(err, 'user');
          });
         */
    };
    /**
    * Fetches and saves token for given user
    * @param username
    * @param password
    */
    AuthService.prototype.login = function (username, password) {
        var requestParam = {
            username: username,
            password: password
        };
        var options = this.generateOptions();
        var body = JSON.stringify(requestParam);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of('token');
        /* call server side
        return this.http
            .post(AuthService.LOGIN_URL, body, options)
            .map(this.extractData)
            .catch(err => {
             return this.utilService.hanldeHttpError(err, 'user');
            });
         */
    };
    /**
    * Removes token and user details from sessionStorage and service's variables
    */
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem('user');
        localStorage.removeItem('currentUser');
        this.token = null;
        this.username = null;
        this.userId = null;
        localStorage.clear();
    };
    /**
    * Refreshes token for the user with given token
    * @param token - which should be refreshed
    */
    AuthService.prototype.refreshToken = function (token) {
        var _this = this;
        var requestParam = { token: this.token };
        return this.http.post(AuthService_1.REFRESH_TOKEN_URL, requestParam, this.generateOptions())
            .map(function (res) {
            _this.saveToken(res);
        }).catch(function (err) {
            throw Error(err.json().message);
        });
    };
    /**
    * Checks if user is authorized
    * @return true is user authorized (there is token in sessionStorage) else false
    */
    AuthService.prototype.isAuthorized = function () {
        return Boolean(this.token);
    };
    /**
    * @return username if exists
    */
    AuthService.prototype.getUsername = function () {
        return this.username;
    };
    /**
    * @return userId if exists
    */
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    /**
    * @return token if exists
    */
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    // Saves user details with token into sessionStorage as user item
    AuthService.prototype.saveToken = function (res) {
        var response = res.json() && res.json().token;
        if (response) {
            var token = response;
            var claims = this.getTokenClaims(token);
            claims.token = token;
            sessionStorage.setItem('user', JSON.stringify(claims));
        }
        else {
            throw Error(res.json());
        }
    };
    // Saves user details as moke to server call
    AuthService.prototype.saveUser = function (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    };
    // Saves user details into service properties
    AuthService.prototype.saveUserDetails = function (user) {
        this.token = user.token || '';
        this.username = user.sub || '';
        this.userId = user.id || 0;
    };
    // Retrieves user details from token
    AuthService.prototype.getTokenClaims = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    // Generates Headers
    AuthService.prototype.generateOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        if (body && body.token) {
            return body.token;
        }
        return {};
    };
    return AuthService;
}());
AuthService.SIGNUP_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + '/api/auth/signup';
AuthService.LOGIN_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + '/api/auth/login';
AuthService.REFRESH_TOKEN_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + '/api/auth/token/refresh';
AuthService = AuthService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__util_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__util_util_service__["a" /* UtilService */]) === "function" && _b || Object])
], AuthService);

var AuthService_1, _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/guard/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardService; });
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


var GuardService = (function () {
    function GuardService(router) {
        this.router = router;
    }
    GuardService.prototype.canActivate = function (route, state) {
        console.log('up in');
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        console.log('up after');
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/entry'], { queryParams: { returnUrl: state.url }});
        this.router.navigate(['/entry']); // on this proto no need returnUrl
        return false;
    };
    return GuardService;
}());
GuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], GuardService);

var _a;
//# sourceMappingURL=guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_logger_service__ = __webpack_require__("../../../../../src/app/util/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = UserService_1 = (function () {
    function UserService(http, logger, authService) {
        this.http = http;
        this.logger = logger;
        this.authService = authService;
        this.user = null;
    }
    UserService.prototype.getAllUsers = function (filter) {
        var endPoint = UserService_1.LIST_USERS_ENDPOINT + 'list?name=' + filter;
        return this.http.get(endPoint).
            map(function (res) { return res; }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    UserService.prototype.getById = function (id) {
        var endPoint = UserService_1.LIST_USERS_ENDPOINT + 'list/' + id;
        return this.http.get(endPoint + id)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserByToken = function (token) {
        var endPoint = UserService_1.LIST_USERS_ENDPOINT;
        console.log('start http get call for getting user');
        return this.http.get(endPoint + '?token=' + token)
            .map(function (result) { return result; }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    UserService.prototype.signup = function (user) {
        console.log(user);
        var obs = this.authService.signUp(user);
        console.log(obs);
        return obs;
        //      const endPoint = UserService.SIGNUP_ENDPOINT;
        //        return this.http.post(endPoint, user)
        //          .map((response: Response) => response);
    };
    UserService.prototype.update = function (user) {
        //        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    };
    // is not working, misses mapping on serve side
    UserService.prototype.delete = function (id) {
        console.log('user: ' + id);
        return this.http.delete(UserService_1.LIST_USERS_ENDPOINT + 'delete', this.jwt).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */](headers);
        }
    };
    return UserService;
}());
UserService.LIST_USERS_ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + '/api/auth/user/';
UserService.SIGNUP_ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + '/api/auth/signup';
UserService = UserService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__util_logger_service__["a" /* LoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_logger_service__["a" /* LoggerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], UserService);

var UserService_1, _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (msg) { console.log(msg); };
    LoggerService.prototype.error = function (msg) { console.error(msg); };
    LoggerService.prototype.warn = function (msg) { console.warn(msg); };
    return LoggerService;
}());
LoggerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoggerService);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UtilService = (function () {
    function UtilService() {
    }
    UtilService.prototype.hanldeHttpError = function (erro, subject) {
        var errMsg = (erro.message) ? erro.message :
            erro.status ? erro.status + " - " + erro.statusText : 'Server error';
        console.log(erro.status);
        switch (erro.status) {
            case 500: {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw('Operation was not able to be completed');
            }
            case 404: {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(subject + ' not found.');
            }
            default: {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
            }
        }
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/cover1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover1.98b458b2713b32e36fc5.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/cover2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover2.e3448246a3b143258c85.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/cover7bw.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover7bw.272b44642722060a7f6a.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/cover8.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover8.df616cb35c5199dcaf57.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/gosocialbackimage3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gosocialbackimage3.4485017071de05b9634c.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/homeBackMainDiv.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "homeBackMainDiv.0db0c4fe7679458d0bad.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/loginBackMainDiv.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loginBackMainDiv.c80775c5b91217164371.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/registerBackMainDiv.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "registerBackMainDiv.093b3f087986662e2e67.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/sec2ProPhotos.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sec2ProPhotos.c0a335bd2cb695c5f424.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/section2PicRight2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "section2PicRight2.960af15206ea40df7d48.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/section2PicRight3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "section2PicRight3.2b8323ee4078e3d5ac2a.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    apiUrl: 'https://localhost:8443',
    production: false
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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
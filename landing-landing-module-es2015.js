(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-cover\">\n</div>\n<div class=\"landing-components\">\n    <img src=\"../../../assets/img/card.png\" style=\"margin-top: 150px; height: 300px;\">\n    <br />\n    <br />\n    <br />\n    <p style=\"color: white; font-size: 50px; font-family: Segoe UI; margin-left: 50px; margin-right: 50px;\">\n        One Card for Danao City Services.\n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-navigation-bar\">\n    <mat-toolbar class=\"landing-navigation-toolbar\">\n        <span routerLink=\"/landing\" style=\"cursor: pointer;\">\n            <b>\n                <fa-icon icon=\"id-card\" fixedWidth=\"true\"></fa-icon> Ayuda Card\n            </b>\n        </span>\n        &nbsp;&nbsp;&nbsp;\n\n        <!-- <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n            <button mat-stroked-button (click)=\"sidenav.toggle()\">\n                <fa-icon icon=\"bars\" fixedWidth=\"true\"></fa-icon>\n            </button>\n        </div> -->\n\n        <span class=\"landing-header-spacer\"></span>\n\n        <!-- <mat-action-list fxShow=\"true\" fxHide.lt-md=\"true\" fxLayout class=\"landing-navigation-action-list\">\n            <a mat-list-item fxFlex style=\"text-decoration: none;\" routerLink=\".\"> Home </a>\n            <a mat-list-item fxFlex style=\"text-decoration: none;\" routerLink=\".\"> About </a>\n            <a mat-list-item fxFlex style=\"text-decoration: none;\" routerLink=\".\"> Contact </a>\n            <a mat-list-item fxFlex style=\"text-decoration: none;\" routerLink=\"/account/login\"> {{ currentUser }} </a>\n        </mat-action-list> -->\n        <mat-action-list fxShow=\"true\" class=\"landing-navigation-action-list\">\n            <!-- <a mat-list-item fxFlex style=\"text-decoration: none;\" routerLink=\".\"> Home </a> -->\n            <a mat-list-item fxFlex style=\"text-decoration: none;\" routerLink=\"/account/login\"> {{ currentUser }} </a>\n        </mat-action-list>\n    </mat-toolbar>\n\n    <!-- <mat-sidenav-container fxShow=\"true\" fxHide.gt-sm=\"true\">\n        <mat-sidenav #sidenav fxLayout=\"column\" class=\"landing-navigation-sidenav\">\n            <div fxLayout=\"column\">\n                <br /><br /><br /><br />\n                <mat-action-list>\n                    <mat-divider></mat-divider>\n                     <a mat-list-item (click)=\"sidenav.toggle()\">Close</a> -->\n    <!-- <a mat-list-item style=\"text-decoration: none;\" routerLink=\".\">\n                        <fa-icon icon=\"home\" fixedWidth=\"true\"></fa-icon> &nbsp;&nbsp; Home\n                    </a>\n                    <mat-divider></mat-divider>\n                    <a mat-list-item style=\"text-decoration: none;\" routerLink=\".\">\n                        <fa-icon icon=\"info\" fixedWidth=\"true\"></fa-icon> &nbsp;&nbsp; About\n                    </a>\n                    <mat-divider></mat-divider>\n                    <a mat-list-item style=\"text-decoration: none;\" routerLink=\".\">\n                        <fa-icon icon=\"phone\" fixedWidth=\"true\"></fa-icon> &nbsp;&nbsp; Contact\n                    </a>\n                    <mat-divider></mat-divider>\n                    <a mat-list-item style=\"text-decoration: none;\" routerLink=\"/account/login\">\n                        <fa-icon icon=\"user\" fixedWidth=\"true\"></fa-icon> &nbsp;&nbsp; {{ currentUser }}\n                    </a>\n                    <mat-divider></mat-divider>\n                </mat-action-list>\n            </div>\n        </mat-sidenav>\n    </mat-sidenav-container> -->\n\n    <div class=\"landing-sidenav-container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/landing/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/landing/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/landing/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/landing/home/home.component.ts");
/* harmony import */ var _landing_router_activate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing.router.activate */ "./src/app/landing/landing.router.activate.ts");






const routes = [
    {
        path: '',
        canActivate: [
            _landing_router_activate__WEBPACK_IMPORTED_MODULE_5__["LandingRouterActivate"]
        ],
        component: _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        children: [
            {
                path: '',
                canActivate: [
                    _landing_router_activate__WEBPACK_IMPORTED_MODULE_5__["LandingRouterActivate"]
                ],
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            },
            {
                path: 'home',
                canActivate: [
                    _landing_router_activate__WEBPACK_IMPORTED_MODULE_5__["LandingRouterActivate"]
                ],
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            }
        ]
    }
];
let LandingRoutingModule = class LandingRoutingModule {
};
LandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LandingRoutingModule);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fas"]);
let LandingComponent = class LandingComponent {
    constructor() {
        this.currentUser = "Login";
    }
    logOut() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('username');
        this.currentUser = "Login";
        location.reload();
    }
    ngOnInit() {
        if (localStorage.getItem("access_token") != null) {
            this.currentUser = localStorage.getItem("username");
        }
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _landing_router_activate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.router.activate */ "./src/app/landing/landing.router.activate.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/landing/home/home.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

/// Angular Modules


// Routing


// Material






// Components


// Other Modules


let LandingModule = class LandingModule {
};
LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
        ],
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"]
        ],
        providers: [
            _landing_router_activate__WEBPACK_IMPORTED_MODULE_4__["LandingRouterActivate"]
        ]
    })
], LandingModule);



/***/ }),

/***/ "./src/app/landing/landing.router.activate.ts":
/*!****************************************************!*\
  !*** ./src/app/landing/landing.router.activate.ts ***!
  \****************************************************/
/*! exports provided: LandingRouterActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRouterActivate", function() { return LandingRouterActivate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LandingRouterActivate = class LandingRouterActivate {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem("access_token") != null) {
            this.router.navigate(["/software/dashboard"]);
            return false;
        }
        else {
            return true;
        }
    }
};
LandingRouterActivate.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LandingRouterActivate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], LandingRouterActivate);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map
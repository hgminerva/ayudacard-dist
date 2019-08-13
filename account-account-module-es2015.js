(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/account.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account-container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/login/login.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/login/login.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"account-login-card\">\n    <mat-card-header style=\"padding: 10px 0;\">\n        <mat-card-title>AYUDA CARD</mat-card-title>\n        <mat-card-subtitle>Sign in to continue to application</mat-card-subtitle>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-card-content style=\"padding: 15px;\">\n        <form (ngSubmit)=\"login()\">\n            <br />\n            <mat-form-field [hideRequiredMarker]=\"true\" [floatLabel]=\"'always'\" style=\"width: 100%\">\n                <input matInput #inputUsername maxlength=\"50\" type=\"text\" placeholder=\"Username\" id=\"inpUsername\"\n                    [(ngModel)]=\"loginModel.UserName\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-hint align=\"end\">{{ inputUsername.value?.length || 0 }}/50</mat-hint>\n            </mat-form-field>\n            <mat-form-field [hideRequiredMarker]=\"true\" [floatLabel]=\"'always'\" style=\"width: 100%\">\n                <input matInput #inputPassword maxlength=\"50\" type=\"password\" placeholder=\"Password\" id=\"inpPassword\"\n                    [(ngModel)]=\"loginModel.Password\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-hint align=\"end\">{{ inputPassword.value?.length || 0 }}/50</mat-hint>\n            </mat-form-field>\n            <br /><br />\n            <button type=\"submit\" mat-raised-button color=\"primary\" id=\"btnLogin\">\n                <fa-icon icon=\"key\" fixedWidth=\"true\"></fa-icon> Login\n            </button>\n        </form>\n    </mat-card-content>\n    <mat-divider></mat-divider>\n    <mat-card-actions style=\"padding: 10px 0; text-align: center\">\n        <small>AYUDA Card V.1.08112019</small>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/register/register.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/register/register.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>register works!</p>\n"

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_router_activate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.router.activate */ "./src/app/app.router.activate.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");







const routes = [
    {
        path: '',
        canActivate: [
            _app_router_activate__WEBPACK_IMPORTED_MODULE_3__["AppRouterActivate"]
        ],
        component: _account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
        children: [
            {
                path: '',
                canActivate: [
                    _app_router_activate__WEBPACK_IMPORTED_MODULE_3__["AppRouterActivate"]
                ],
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            },
            {
                path: 'login',
                canActivate: [
                    _app_router_activate__WEBPACK_IMPORTED_MODULE_3__["AppRouterActivate"]
                ],
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            },
            {
                path: 'register',
                canActivate: [
                    _app_router_activate__WEBPACK_IMPORTED_MODULE_3__["AppRouterActivate"]
                ],
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            }
        ]
    }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fas"]);
let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.service */ "./src/app/account/login/login.service.ts");
/* harmony import */ var _register_register_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.service */ "./src/app/account/register/register.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

// Angular Modules



// Material





// Components




// Services


// Other Modules

let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_10__["AccountRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]
        ],
        providers: [
            _login_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"],
            _register_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/account/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/account/login/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let LoginComponent = class LoginComponent {
    constructor(loginService, router, toastr) {
        this.loginService = loginService;
        this.router = router;
        this.toastr = toastr;
        this.loginModel = {
            UserName: "",
            Password: ""
        };
    }
    login() {
        let btnLogin = document.getElementById("btnLogin");
        btnLogin.setAttribute("disabled", "disabled");
        btnLogin.setAttribute("value", "Signing in...");
        let inpUsername = document.getElementById("inpUsername");
        inpUsername.setAttribute("disabled", "disabled");
        let inpPassword = document.getElementById("inpPassword");
        inpPassword.setAttribute("disabled", "disabled");
        if (inpUsername.value === "" || inpPassword.value === "") {
            this.toastr.error('Username or Password is empty. Please do not leave blanks.', 'Error');
            btnLogin.removeAttribute("disabled");
            btnLogin.setAttribute("value", "Sign in");
            inpUsername.removeAttribute("disabled");
            inpPassword.removeAttribute("disabled");
        }
        else {
            this.loginService.login(this.loginModel.UserName, this.loginModel.Password);
            this.loginSub = this.loginService.loginObservable.subscribe(data => {
                if (data[0]) {
                    this.toastr.success(data[1], 'Success');
                    setTimeout(() => {
                        this.router.navigate(['/software']);
                    }, 500);
                }
                else {
                    this.toastr.error(data[1], 'Error');
                    btnLogin.removeAttribute("disabled");
                    btnLogin.setAttribute("value", "Sign in");
                    inpUsername.removeAttribute("disabled");
                    inpPassword.removeAttribute("disabled");
                }
                if (this.loginSub != null)
                    this.loginSub.unsubscribe();
            });
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.loginSub != null)
            this.loginSub.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/account/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/account/login/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/account/login/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let LoginService = class LoginService {
    constructor(appSettings, httpClient) {
        this.appSettings = appSettings;
        this.httpClient = httpClient;
        this.defaultAPIHostURL = this.appSettings.APIURLHost;
        this.loginSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loginObservable = this.loginSource.asObservable();
    }
    login(username, password) {
        let url = this.defaultAPIHostURL + '/token';
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.httpClient.post(url, body, options).subscribe(response => {
            localStorage.setItem('access_token', response["access_token"]);
            localStorage.setItem('expires_in', response["expires_in"]);
            localStorage.setItem('token_type', response["token_type"]);
            localStorage.setItem('username', response["userName"]);
            this.loginSource.next([true, "Login Successful."]);
        }, error => {
            this.loginSource.next([false, error["error"].error_description]);
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/account/register/register.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/register/register.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/account/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/account/register/register.service.ts":
/*!******************************************************!*\
  !*** ./src/app/account/register/register.service.ts ***!
  \******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterService = class RegisterService {
    constructor() { }
};
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map
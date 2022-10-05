(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_perfect_nav_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-perfect-nav/ng-perfect-nav/ng-perfect-nav.component */ "./src/app/ngx-perfect-nav/ng-perfect-nav/ng-perfect-nav.component.ts");




const _c0 = function (a0) { return { "dark-mode": a0 }; };
class AppComponent {
    constructor() {
        this.iconPosition = 'icon-left';
        this.iconMode = false;
        this.hideIcons = false;
        this.showCategories = true;
        this.hoverReveal = true;
        this.darkMode = false;
        this.border = '';
        this.links = [
            {
                visible: true,
                label: 'First Group',
                disabled: true,
                groupCategory: true,
            },
            {
                visible: true,
                label: 'google.com',
                icon: 'A',
                iconImg: '',
                disabled: false,
                link: 'google.com',
                children: [
                    {
                        visible: true,
                        label: 'amweb.xyz',
                        icon: 'A',
                        iconImg: '',
                        disabled: true,
                        link: 'amweb.xyz'
                    },
                    {
                        visible: true,
                        label: 'arronmccrory.com',
                        icon: 'A',
                        disabled: true,
                        link: 'arronmccrory.com',
                        children: [
                            {
                                visible: true,
                                label: 'arronmccrory.com',
                                icon: 'A',
                                disabled: true,
                                link: 'arronmccrory.com',
                                children: [
                                    {
                                        visible: true,
                                        label: 'arronmccrory.com',
                                        icon: 'A',
                                        disabled: true,
                                        link: 'arronmccrory.com'
                                    },
                                    {
                                        visible: true,
                                        label: 'arronmccrory.com',
                                        icon: 'A',
                                        disabled: true,
                                        link: 'arronmccrory.com'
                                    }
                                ]
                            },
                            {
                                visible: false,
                                label: 'arronmccrory.com',
                                icon: 'H',
                                disabled: true,
                                link: 'arronmccrory.com'
                            }
                        ]
                    }
                ]
            },
            {
                visible: true,
                label: 'arronmccrory.com',
                icon: 'B',
                disabled: true,
                link: 'arronmccrory.com',
                children: [
                    {
                        visible: true,
                        label: 'arronmccrory.com',
                        icon: 'B',
                        disabled: true,
                        link: 'arronmccrory.com'
                    },
                    {
                        visible: true,
                        label: 'arronmccrory.com',
                        icon: 'B',
                        disabled: true,
                        link: 'arronmccrory.com'
                    }
                ]
            },
            {
                visible: true,
                label: 'Another Group Category',
                disabled: true,
                groupCategory: true,
            },
            {
                visible: true,
                label: 'arronmccrory.com',
                icon: 'C',
                disabled: true,
                link: 'arronmccrory.com'
            },
            {
                visible: true,
                label: 'Additional Examples',
                disabled: true,
                groupCategory: true,
            },
            {
                visible: true,
                label: 'arronmccrory.com',
                icon: '',
                disabled: true,
                link: 'arronmccrory.com'
            },
            {
                visible: true,
                label: 'arronmccrory.com',
                icon: 'D',
                disabled: true,
                link: 'arronmccrory.com',
                children: [
                    {
                        visible: true,
                        label: 'arronmccrory.com',
                        icon: '',
                        disabled: true,
                        link: 'arronmccrory.com',
                    },
                    {
                        visible: true,
                        label: 'arronmccrory.com',
                        icon: 'D',
                        disabled: true,
                        link: 'arronmccrory.com',
                    }
                ]
            }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 11, consts: [[1, "app"], [1, "nav", 3, "ngClass"], [3, "links", "squircle", "hoverReveal", "showCategories", "iconMode", "iconPosition", "hideIcons", "border"], ["ngProjectAs", "logo", 5, ["logo"]], [1, "main"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-ng-perfect-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NGX Perfect Nav ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NGX Perfect Nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.iconMode = !ctx.iconMode; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.showCategories = !ctx.showCategories; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Show Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.darkMode = !ctx.darkMode; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", ctx.links)("squircle", false)("hoverReveal", ctx.hoverReveal)("showCategories", ctx.showCategories)("iconMode", ctx.iconMode)("iconPosition", ctx.iconPosition)("hideIcons", ctx.hideIcons)("border", ctx.border);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ngx_perfect_nav_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__["NgPerfectNavComponent"]], styles: [".app[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  height: 100vh;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.app[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pexels-tuesday-temptation-3780104.jpeg\");\n  background-size: cover;\n  color: #fff;\n  padding: 2em;\n}\n.app[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.app[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2em;\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnJvbi9Eb2N1bWVudHMvR2l0SHViL3BlcmZlY3QtbmF2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx3SUFBQTtBQ0NEO0FER0M7RUFFQyx1RUFBQTtFQUVBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNIRjtBRElFO0VBQ0MsZUFBQTtBQ0ZIO0FES0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0hIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcblx0aGVpZ2h0OiAxMDB2aDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuXG5cblx0Lm1haW4ge1xuXHRcdC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9mcmFuY2stdi1NeWMydUlrajhHQS11bnNwbGFzaC5qcGcnKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvcGV4ZWxzLXR1ZXNkYXktdGVtcHRhdGlvbi0zNzgwMTA0LmpwZWcnKTtcblxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0cGFkZGluZzogMmVtO1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHR9XG5cblx0XHRidXR0b24ge1xuXHRcdFx0aGVpZ2h0OiAyZW07XG5cdFx0XHRwYWRkaW5nOiAxZW07XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0bWFyZ2luOiAxZW0gMDtcblxuXHRcdH1cblx0fVxufSIsIi5hcHAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4uYXBwIC5tYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9wZXhlbHMtdHVlc2RheS10ZW1wdGF0aW9uLTM3ODAxMDQuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJlbTtcbn1cbi5hcHAgLm1haW4gaDEge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uYXBwIC5tYWluIGJ1dHRvbiB7XG4gIGhlaWdodDogMmVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDFlbSAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_perfect_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-perfect-nav */ "./src/app/ngx-perfect-nav/index.ts");






class AppModule {
    constructor(injector) {
        this.injector = injector;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngx_perfect_nav__WEBPACK_IMPORTED_MODULE_4__["NgxPerfectNavModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ngx_perfect_nav__WEBPACK_IMPORTED_MODULE_4__["NgxPerfectNavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ngx_perfect_nav__WEBPACK_IMPORTED_MODULE_4__["NgxPerfectNavModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ngx-perfect-nav/index.ts":
/*!******************************************!*\
  !*** ./src/app/ngx-perfect-nav/index.ts ***!
  \******************************************/
/*! exports provided: NgPerfectNavComponent, NgxPerfectNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./src/app/ngx-perfect-nav/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgPerfectNavComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgPerfectNavComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxPerfectNavModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgxPerfectNavModule"]; });




/***/ }),

/***/ "./src/app/ngx-perfect-nav/ng-perfect-nav/ng-perfect-nav.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ngx-perfect-nav/ng-perfect-nav/ng-perfect-nav.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgPerfectNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPerfectNavComponent", function() { return NgPerfectNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function NgPerfectNavComponent_ng_template_6_Template(rf, ctx) { }
function NgPerfectNavComponent_ng_template_7_ng_container_0_div_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3) { return { "show-children": a0, "link-category": a1, "hide-link-category": a2, "link-has-no-icon": a3 }; };
const _c1 = function (a0) { return { link: a0 }; };
function NgPerfectNavComponent_ng_template_7_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPerfectNavComponent_ng_template_7_ng_container_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, l_r7.showChildren, l_r7.groupCategory, !ctx_r8.showCategories, !l_r7.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, l_r7));
} }
function NgPerfectNavComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPerfectNavComponent_ng_template_7_ng_container_0_div_1_Template, 2, 10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const l_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", l_r7.visible);
} }
function NgPerfectNavComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgPerfectNavComponent_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 7);
} if (rf & 2) {
    const links_r5 = ctx.links;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", links_r5);
} }
function NgPerfectNavComponent_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} }
const _c2 = function (a0) { return { "squircle": a0 }; };
function NgPerfectNavComponent_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r13.squircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas ", link_r11.faIcon, "");
} }
function NgPerfectNavComponent_ng_template_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r14.squircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r11.icon);
} }
function NgPerfectNavComponent_ng_template_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r15.squircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", link_r11.iconImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NgPerfectNavComponent_ng_template_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r11.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r11.label);
} }
function NgPerfectNavComponent_ng_template_9_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r11.label);
} }
function NgPerfectNavComponent_ng_template_9_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPerfectNavComponent_ng_template_9_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.toggleChildren(link_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgPerfectNavComponent_ng_template_9_ng_container_10_ng_template_2_Template(rf, ctx) { }
const _c3 = function (a0) { return { links: a0 }; };
function NgPerfectNavComponent_ng_template_9_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPerfectNavComponent_ng_template_9_ng_container_10_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().link;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, link_r11.children));
} }
function NgPerfectNavComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPerfectNavComponent_ng_template_9_div_1_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgPerfectNavComponent_ng_template_9_div_3_Template, 2, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgPerfectNavComponent_ng_template_9_div_4_Template, 2, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgPerfectNavComponent_ng_template_9_div_5_Template, 2, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgPerfectNavComponent_ng_template_9_div_6_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgPerfectNavComponent_ng_template_9_div_7_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgPerfectNavComponent_ng_template_9_button_9_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgPerfectNavComponent_ng_template_9_ng_container_10_Template, 3, 4, "ng-container", 17);
} if (rf & 2) {
    const link_r11 = ctx.link;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !link_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r11.faIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r11.iconImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !link_r11.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r11.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r11.children && link_r11.children.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r11.children);
} }
const _c4 = function (a0, a1) { return { "icon-mode": a0, "hover-reveal": a1 }; };
const _c5 = ["*"];
class NgPerfectNavComponent {
    constructor() {
        this.hoverReveal = false;
        this.squircle = false;
        this.showCategories = true;
        this.time = new Date();
        this.likeNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shareNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    likeEvent() {
        this.likeNotify.emit(true);
    }
    shareEvent() {
        this.shareNotify.emit(true);
    }
    commentEvent() {
        this.commentNotify.emit(true);
    }
    toggleChildren(link) {
        console.log(link);
        if (link.showChildren) {
            link.showChildren = false;
            // link.height = 44;
        }
        else {
            const multiplyer = link.children.length;
            // link.height = 44 * (multiplyer + 1);
            link.showChildren = true;
        }
    }
}
NgPerfectNavComponent.ɵfac = function NgPerfectNavComponent_Factory(t) { return new (t || NgPerfectNavComponent)(); };
NgPerfectNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgPerfectNavComponent, selectors: [["app-ng-perfect-nav"]], inputs: { links: "links", iconMode: "iconMode", hideIcons: "hideIcons", iconPosition: "iconPosition", hoverReveal: "hoverReveal", border: "border", squircle: "squircle", showCategories: "showCategories", title: "title", name: "name", time: "time", caption: "caption", avtar: "avtar", image: "image" }, outputs: { likeNotify: "likeNotify", shareNotify: "shareNotify", commentNotify: "commentNotify" }, ngContentSelectors: _c5, decls: 11, vars: 20, consts: [[1, "perfect-nav-top", 3, "ngClass"], [1, "icon-collapse", 3, "click"], [1, "logo-content"], [1, "perfect-nav-container", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["linksTemplate", ""], ["linkTemplate", ""], [4, "ngFor", "ngForOf"], ["class", "link", 3, "ngClass", 4, "ngIf"], [1, "link", 3, "ngClass"], [1, "link-content"], ["class", "icon no-bg", 4, "ngIf"], [1, "fas", "fa-chart-line"], ["class", "icon", 3, "ngClass", 4, "ngIf"], ["class", "label", 4, "ngIf"], [1, "spacer"], ["class", "children-dropdown", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "icon", "no-bg"], [1, "icon", 3, "ngClass"], [3, "src"], [1, "label"], [3, "routerLink"], [1, "children-dropdown", 3, "click"], [1, "child-links"]], template: function NgPerfectNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPerfectNavComponent_Template_div_click_1_listener() { return ctx.iconMode = !ctx.iconMode; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 0, ["slot", "logo"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgPerfectNavComponent_ng_template_6_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgPerfectNavComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgPerfectNavComponent_ng_template_9_Template, 11, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.iconPosition, " ", ctx.border, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c4, ctx.iconMode, ctx.hoverReveal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.iconPosition, " ", ctx.border, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c4, ctx.iconMode, ctx.hoverReveal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx.links));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: var(--nav-bg-color);\n  color: var(--nav-color);\n  height: 100vh;\n  display: block;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.icon-mode[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon-mode[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.perfect-nav-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: inherit;\n  background-color: inherit;\n}\n.perfect-nav-top.icon-mode[_ngcontent-%COMP%]   .logo-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.logo-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.logo-content[_ngcontent-%COMP%]     > * {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.perfect-nav-container[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  background-color: inherit;\n  max-width: var(--nav-width);\n  transition: var(--transition-speed) all;\n  will-change: contents;\n}\n.perfect-nav-container.icon-mode[_ngcontent-%COMP%] {\n  max-width: var(--nav-iconMode-width);\n  overflow: hidden;\n}\n.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  max-width: var(--nav-iconMode-width);\n}\n.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link-has-no-icon[_ngcontent-%COMP%] {\n  height: 0;\n}\n.perfect-nav-container.icon-mode.icon-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  order: 2;\n  flex: 1;\n}\n.perfect-nav-container.icon-mode.icon-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  order: 1;\n}\n.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link-category[_ngcontent-%COMP%] {\n  display: none;\n}\n.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover {\n  max-width: var(--nav-width);\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link-has-no-icon[_ngcontent-%COMP%] {\n  height: inherit;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .child-links[_ngcontent-%COMP%] {\n  padding-left: var(--child-indent);\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link-category[_ngcontent-%COMP%] {\n  display: block;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%], .perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  max-width: var(--nav-width);\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover.icon-right   .label[_ngcontent-%COMP%] {\n  order: 1;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover.icon-right   .icon[_ngcontent-%COMP%] {\n  order: 2;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] {\n  transition: var(--transition-speed) all;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover {\n  max-width: var(--nav-width);\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  display: flex;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  transition: var(--transition-speed) all;\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  max-width: var(--nav-width);\n}\n.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  display: flex;\n}\n.perfect-nav-container.icon-left[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  order: 2;\n}\n.perfect-nav-container.icon-left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  order: 1;\n}\n.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  order: 1;\n  flex: 1;\n}\n.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  order: 2;\n}\n.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .children-dropdown[_ngcontent-%COMP%] {\n  order: 0;\n}\n.link[_ngcontent-%COMP%] {\n  transition: 250ms all;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%] {\n  padding-left: var(--child-indent);\n}\n.link[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n}\n.link.show-children[_ngcontent-%COMP%]    > .link-content[_ngcontent-%COMP%]    > .children-dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.link.show-children[_ngcontent-%COMP%]    > .child-links[_ngcontent-%COMP%]    > .link[_ngcontent-%COMP%] {\n  max-height: 1000px;\n  overflow: visible;\n  background: var(--child-bg);\n}\n.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] {\n  padding: 0 var(--padding-width);\n  display: flex;\n  align-items: center;\n  height: var(--link-height);\n}\n.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-bg);\n}\n.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.label[_ngcontent-%COMP%] {\n  padding: 8px var(--padding-width);\n  white-space: nowrap;\n}\n.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px var(--padding-width);\n}\n.icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  flex: none;\n  background: var(--icon-bg);\n  border-radius: var(--icon-br);\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: var(--icon-img-size);\n}\n.children-dropdown[_ngcontent-%COMP%] {\n  -webkit-appearance: auto;\n     -moz-appearance: auto;\n          appearance: auto;\n  background-color: inherit;\n  border: inherit;\n  order: 5;\n  justify-self: flex-end;\n  padding: 0.5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.children-dropdown[_ngcontent-%COMP%]:hover {\n  background: var(--dropdown-bg-hover);\n}\n.children-dropdown[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  transition: 100ms all;\n  height: 12px;\n  width: 12px;\n}\n.border-left[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] {\n  border-left: var(--border-width) solid;\n  border-color: var(--border-color);\n}\n.spacer[_ngcontent-%COMP%] {\n  margin: auto;\n  order: 4;\n}\n.caret-bg[_ngcontent-%COMP%], .children-dropdown[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhCRMHIymnJAEPAAAKC0lEQVR42u3ZMa4dtxmGYcpZQNZgAWkDeAcptItoBdEqEsA7sbfgJhcpAiSti/RS4Q3YqQ3DxZVN3atzzp05Qw7J/3+eFUwzxEe+pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADM4dXoDzjqzTflr6O/gbS+fXg7+hOO+WL0Bxz16l35MPobSOrDL38b/QlHLX8A/POnV2/Lz6O/goR+Lm//9f/RH3HUH0Z/wHHvf3j9RfnL6K8gnX88fDP6E45bfgGUUkr5uvx39CeQzH/K16M/oYXlHwEfvfmyfF/+OPorSOOn8tVDiLenGAugPHwo70Z/A4m8i/H7h3gDePT+f6//VP48+itI4duHv4/+hFaCLIBSBEFOEiD+VYEOAEGQE4SIf1WYK0ApgiAnCBH/qkALoJQiCNJXkPhXBcmAlSBIN2HiXxVtAQiC9BMm/lWh3gAeCYJ0ESj+VeEWQCmCIB2Ein9VyANAEKSxYPGvCngFKEUQpLFg8a8KuQBKKYIg7YSLf1W4DFgJgjQRMP5VcReAIEgbAeNfFfQN4JEgyGEh418VeAGUIghyUND4VwU/AARBDggb/6rQV4BSBEEOCBv/quALoJQiCHKfwPGvCpwBK0GQ3ULHvyrDAhAE2S90/KvCvwE8EgTZJXj8q1IsgFIEQXYIH/+qNAeAIMhGCeJfleQKUIogyEYJ4l+VZgGUUgRBXpYi/lUpMmAlCHJTkvhX5VoAgiC3JYl/VaI3gEeCIFeliX9VsgVQiiDIFYniX5XwABAEuSBV/KvSXQFKEQS5IFX8qxIugFKKIMhTyeJflSwDVoIgv0sX/6qsC0AQpEoX/6qUbwCPBEFKKSnjX5V2AZQiCFKSxr8q9QEgCKaXNP5Via8ApQiC6SWNf1XqBVBKEQQzSxv/qrQZsBIEk0oc/yoLQBDMKnH8q5K/ATwSBBNKHf8qC6CUIgimkzz+VQ6AUoogmEz6+Fe5AnwkCCaSPv5VFkAlCOYg/n1CBvyEIJiA+PeEBfAJQTAB8e8JbwBPCILBiX/PWADPCIKBiX+fcQA8IwiGJf5d4ArwGUEwKPHvAgvgEkEwHvHvIhnwIkEwGPHvCgvgIkEwGPHvCm8AVwiCgYh/V1kAVwmCQYh/NzgArhIEQxD/bnIFuEEQDED8u8kCuE0QXJv49wIZ8AWC4MLEvxdZAC8QBBcm/r3IG8CLBMFFiX8bWAAbCIILEv82cQBsIAguR/zbyBVgE0FwMeLfRhbAVoLgOsS/zWTAzQTBRYh/O1gAmwmCixD/dvAGsIMguADxbxcLYBdBcHLi304OgF0EwamJf7u5AuwkCE5M/NvNAthPEJyT+HcHGfAOguCExL+7WAB3EAQnJP7dxRvAXQTByYh/d7IA7iQITkT8u5sD4E6C4DTEvwNcAe4mCE5C/DvAAjhCEBxP/DtEBjxEEBxM/DvIAjhEEBxM/DvIG8BBguBA4t9hFsBhguAg4l8DDoDDBMEhxL8mXAEaEAQHEP+asADaEATPJf41IgM2IgieSPxrxgJoRBA8kfjXjDeAZgTBk4h/DVkADQmCJxD/mnIANCQIdif+NeYK0JQg2Jn415gF0Jog2I/415wM2Jwg2In414EF0Jwg2In414E3gA4EwQ7Evy4sgC4EwcbEv04cAF0Igk2Jf924AnQiCDYk/nVjAfQjCLYh/nUkA3YkCDYg/nVlAXQkCDYg/nXlDaArQfAg8a8zC6AzQfAA8a87B0BnguDdxL8TuAJ0JwjeSfw7gQVwBkFwP/HvFDLgKQTBncS/k1gApxAEdxL/TuIN4CSC4A7i32ksgNMIghuJfydyAJxGENxE/DuVK8CJBMENxL9TWQDnEgRvE/9OJgOeTBC8Qfw7nQVwMkHwBvHvdN4ATicIXiH+DWABDCAIXiD+DeEAGEAQ/Iz4N4grwBCC4DPi3yAWwCiCYCX+DSMDDiMIfiT+DWQBDCMIfiT+DeQNYCBBsIh/g1kAQ6UPguLfYA6AoZIHQfFvOFeAwVIHQfFvOAtgvKxBUPybgAw4gZRBUPybggUwgZRBUPybgjeAKaQLguLfJCyASaQKguLfNBwAk0gUBMW/ibgCTCNNEBT/JmIBzCRDEBT/piIDTiV8EBT/JmMBTCV8EBT/JuMNYDKhg6D4Nx0LYDphg6D4NyEHwHSCBkHxb0quABMKGQTFvylZAHOKFgTFv0nJgJMKFQTFv2lZAJMKFQTFv2l5A5hWmCAo/k3MAphYiCAo/k3NATCxAEFQ/JucK8DUlg+C4t/kLIDZrRwExb/pyYDTWzYIin8LsACmt2wQFP8W4A1gAUsGQfFvCRbAEpYLguLfIhwAS1gsCIp/y3AFWMRSQVD8W4YFsI5VgqD4txAZcCFLBEHxbykWwEKWCILi31K8ASxl+iAo/i3GAljM1EFQ/FuOA2AxEwdB8W9BrgDLmTYIin8LsgBWNGMQFP+WJAMuabogKP4tygJY0nRBUPxblDeARU0VBMW/ZVkAy5omCIp/C3MALGuSICj+Lc0VYGFTBEHxb2kWwNpGB0Hxb3Ey4OKGBkHxb3kWwOKGBkHxb3neAJY3LAiKfwFYAAEMCYLiXwgOgAAGBEHxLwhXgBBOD4LiXxAWQBRnBkHxLwwZMIzTgqD4F4gFEMZpQVD8C8QbQCCnBEHxLxQLIJTuQVD8C8YBEErnICj+heMKEEzXICj+hWMBxNMrCIp/AcmAAXUJguJfSBZAQF2CoPgXkjeAkJoHQfEvKAsgqKZBUPwLywEQVMMgKP4F5goQVrMgKP4FZgFE1iIIin+hyYChHQ6C4l9wFkBoh4Og+BecN4DgDgVB8S88CyC8u4Og+JeAAyC8O4Og+JeCK0ACdwVB8S8FCyCHvUFQ/EtCBkxiVxAU/9KwAJLYFQTFvzS8AaSxOQiKf4lYAIlsCoLiXyoOgEQ2BEHxLxlXgFReDILiXzIWQDa3gqD4l44MmM7VICj+JWQBpHM1CIp/CXkDSOhiEBT/UrIAUvosCIp/STkAUnoWBMW/tFwBknoSBMW/tCyAvH4LguJfYjJgYm++LN+XIv5l5gqQ2PsfX/9Qvnv49+jvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4GW/AsqCiuCG85/GAAAALnpUWHRkYXRlOmNyZWF0ZQAAeNozMjA01zWw1DW0DDEwtzI2tTK21DYwsDIwAABCtgUgTz5lXAAAAC56VFh0ZGF0ZTptb2RpZnkAAHjaMzIwNNc1sNQ1tAwxMLcyNrUyttQ2MLAyMAAAQrYFIGYBzdQAAAAASUVORK5CYII=\");\n  -webkit-filter: brightness(var(--nav-caret-brightness));\n          filter: brightness(var(--nav-caret-brightness));\n}\n.squircle[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(100% 50%, 100% 56.6%, 100% 59.3%, 100% 61.4%, 99.9% 63.2%, 99.9% 64.8%, 99.9% 66.2%, 99.8% 67.5%, 99.8% 68.7%, 99.7% 69.8%, 99.6% 70.8%, 99.5% 71.8%, 99.5% 72.8%, 99.4% 73.7%, 99.3% 74.6%, 99.1% 75.4%, 99% 76.3%, 98.9% 77%, 98.8% 77.8%, 98.6% 78.5%, 98.5% 79.2%, 98.3% 79.9%, 98.1% 80.6%, 98% 81.3%, 97.8% 81.9%, 97.6% 82.5%, 97.4% 83.1%, 97.2% 83.7%, 97% 84.3%, 96.8% 84.8%, 96.5% 85.4%, 96.3% 85.9%, 96% 86.4%, 95.8% 86.9%, 95.5% 87.4%, 95.3% 87.9%, 95% 88.3%, 94.7% 88.8%, 94.4% 89.2%, 94.1% 89.7%, 93.8% 90.1%, 93.4% 90.5%, 93.1% 90.9%, 92.8% 91.3%, 92.4% 91.7%, 92% 92%, 91.7% 92.4%, 91.3% 92.8%, 90.9% 93.1%, 90.5% 93.4%, 90.1% 93.8%, 89.7% 94.1%, 89.2% 94.4%, 88.8% 94.7%, 88.3% 95%, 87.9% 95.3%, 87.4% 95.5%, 86.9% 95.8%, 86.4% 96%, 85.9% 96.3%, 85.4% 96.5%, 84.8% 96.8%, 84.3% 97%, 83.7% 97.2%, 83.1% 97.4%, 82.5% 97.6%, 81.9% 97.8%, 81.3% 98%, 80.6% 98.1%, 79.9% 98.3%, 79.2% 98.5%, 78.5% 98.6%, 77.8% 98.8%, 77% 98.9%, 76.3% 99%, 75.4% 99.1%, 74.6% 99.3%, 73.7% 99.4%, 72.8% 99.5%, 71.8% 99.5%, 70.8% 99.6%, 69.8% 99.7%, 68.7% 99.8%, 67.5% 99.8%, 66.2% 99.9%, 64.8% 99.9%, 63.2% 99.9%, 61.4% 100%, 59.3% 100%, 56.6% 100%, 50% 100%, 43.4% 100%, 40.7% 100%, 38.6% 100%, 36.8% 99.9%, 35.2% 99.9%, 33.8% 99.9%, 32.5% 99.8%, 31.3% 99.8%, 30.2% 99.7%, 29.2% 99.6%, 28.2% 99.5%, 27.2% 99.5%, 26.3% 99.4%, 25.4% 99.3%, 24.6% 99.1%, 23.7% 99%, 23% 98.9%, 22.2% 98.8%, 21.5% 98.6%, 20.8% 98.5%, 20.1% 98.3%, 19.4% 98.1%, 18.7% 98%, 18.1% 97.8%, 17.5% 97.6%, 16.9% 97.4%, 16.3% 97.2%, 15.7% 97%, 15.2% 96.8%, 14.6% 96.5%, 14.1% 96.3%, 13.6% 96%, 13.1% 95.8%, 12.6% 95.5%, 12.1% 95.3%, 11.7% 95%, 11.2% 94.7%, 10.8% 94.4%, 10.3% 94.1%, 9.9% 93.8%, 9.5% 93.4%, 9.1% 93.1%, 8.7% 92.8%, 8.3% 92.4%, 8% 92%, 7.6% 91.7%, 7.2% 91.3%, 6.9% 90.9%, 6.6% 90.5%, 6.2% 90.1%, 5.9% 89.7%, 5.6% 89.2%, 5.3% 88.8%, 5% 88.3%, 4.7% 87.9%, 4.5% 87.4%, 4.2% 86.9%, 4% 86.4%, 3.7% 85.9%, 3.5% 85.4%, 3.2% 84.8%, 3% 84.3%, 2.8% 83.7%, 2.6% 83.1%, 2.4% 82.5%, 2.2% 81.9%, 2% 81.3%, 1.9% 80.6%, 1.7% 79.9%, 1.5% 79.2%, 1.4% 78.5%, 1.2% 77.8%, 1.1% 77%, 1% 76.3%, 0.9% 75.4%, 0.7% 74.6%, 0.6% 73.7%, 0.5% 72.8%, 0.5% 71.8%, 0.4% 70.8%, 0.3% 69.8%, 0.2% 68.7%, 0.2% 67.5%, 0.1% 66.2%, 0.1% 64.8%, 0.1% 63.2%, 0% 61.4%, 0% 59.3%, 0% 56.6%, 0% 50%, 0% 43.4%, 0% 40.7%, 0% 38.6%, 0.1% 36.8%, 0.1% 35.2%, 0.1% 33.8%, 0.2% 32.5%, 0.2% 31.3%, 0.3% 30.2%, 0.4% 29.2%, 0.5% 28.2%, 0.5% 27.2%, 0.6% 26.3%, 0.7% 25.4%, 0.9% 24.6%, 1% 23.7%, 1.1% 23%, 1.2% 22.2%, 1.4% 21.5%, 1.5% 20.8%, 1.7% 20.1%, 1.9% 19.4%, 2% 18.7%, 2.2% 18.1%, 2.4% 17.5%, 2.6% 16.9%, 2.8% 16.3%, 3% 15.7%, 3.2% 15.2%, 3.5% 14.6%, 3.7% 14.1%, 4% 13.6%, 4.2% 13.1%, 4.5% 12.6%, 4.7% 12.1%, 5% 11.7%, 5.3% 11.2%, 5.6% 10.8%, 5.9% 10.3%, 6.2% 9.9%, 6.6% 9.5%, 6.9% 9.1%, 7.2% 8.7%, 7.6% 8.3%, 8% 8%, 8.3% 7.6%, 8.7% 7.2%, 9.1% 6.9%, 9.5% 6.6%, 9.9% 6.2%, 10.3% 5.9%, 10.8% 5.6%, 11.2% 5.3%, 11.7% 5%, 12.1% 4.7%, 12.6% 4.5%, 13.1% 4.2%, 13.6% 4%, 14.1% 3.7%, 14.6% 3.5%, 15.2% 3.2%, 15.7% 3%, 16.3% 2.8%, 16.9% 2.6%, 17.5% 2.4%, 18.1% 2.2%, 18.7% 2%, 19.4% 1.9%, 20.1% 1.7%, 20.8% 1.5%, 21.5% 1.4%, 22.2% 1.2%, 23% 1.1%, 23.7% 1%, 24.6% 0.9%, 25.4% 0.7%, 26.3% 0.6%, 27.2% 0.5%, 28.2% 0.5%, 29.2% 0.4%, 30.2% 0.3%, 31.3% 0.2%, 32.5% 0.2%, 33.8% 0.1%, 35.2% 0.1%, 36.8% 0.1%, 38.6% 0%, 40.7% 0%, 43.4% 0%, 50% 0%, 56.6% 0%, 59.3% 0%, 61.4% 0%, 63.2% 0.1%, 64.8% 0.1%, 66.2% 0.1%, 67.5% 0.2%, 68.7% 0.2%, 69.8% 0.3%, 70.8% 0.4%, 71.8% 0.5%, 72.8% 0.5%, 73.7% 0.6%, 74.6% 0.7%, 75.4% 0.9%, 76.3% 1%, 77% 1.1%, 77.8% 1.2%, 78.5% 1.4%, 79.2% 1.5%, 79.9% 1.7%, 80.6% 1.9%, 81.3% 2%, 81.9% 2.2%, 82.5% 2.4%, 83.1% 2.6%, 83.7% 2.8%, 84.3% 3%, 84.8% 3.2%, 85.4% 3.5%, 85.9% 3.7%, 86.4% 4%, 86.9% 4.2%, 87.4% 4.5%, 87.9% 4.7%, 88.3% 5%, 88.8% 5.3%, 89.2% 5.6%, 89.7% 5.9%, 90.1% 6.2%, 90.5% 6.6%, 90.9% 6.9%, 91.3% 7.2%, 91.7% 7.6%, 92% 8%, 92.4% 8.3%, 92.8% 8.7%, 93.1% 9.1%, 93.4% 9.5%, 93.8% 9.9%, 94.1% 10.3%, 94.4% 10.8%, 94.7% 11.2%, 95% 11.7%, 95.3% 12.1%, 95.5% 12.6%, 95.8% 13.1%, 96% 13.6%, 96.3% 14.1%, 96.5% 14.6%, 96.8% 15.2%, 97% 15.7%, 97.2% 16.3%, 97.4% 16.9%, 97.6% 17.5%, 97.8% 18.1%, 98% 18.7%, 98.1% 19.4%, 98.3% 20.1%, 98.5% 20.8%, 98.6% 21.5%, 98.8% 22.2%, 98.9% 23%, 99% 23.7%, 99.1% 24.6%, 99.3% 25.4%, 99.4% 26.3%, 99.5% 27.2%, 99.5% 28.2%, 99.6% 29.2%, 99.7% 30.2%, 99.8% 31.3%, 99.8% 32.5%, 99.9% 33.8%, 99.9% 35.2%, 99.9% 36.8%, 100% 38.6%, 100% 40.7%, 100% 43.4%);\n          clip-path: polygon(100% 50%, 100% 56.6%, 100% 59.3%, 100% 61.4%, 99.9% 63.2%, 99.9% 64.8%, 99.9% 66.2%, 99.8% 67.5%, 99.8% 68.7%, 99.7% 69.8%, 99.6% 70.8%, 99.5% 71.8%, 99.5% 72.8%, 99.4% 73.7%, 99.3% 74.6%, 99.1% 75.4%, 99% 76.3%, 98.9% 77%, 98.8% 77.8%, 98.6% 78.5%, 98.5% 79.2%, 98.3% 79.9%, 98.1% 80.6%, 98% 81.3%, 97.8% 81.9%, 97.6% 82.5%, 97.4% 83.1%, 97.2% 83.7%, 97% 84.3%, 96.8% 84.8%, 96.5% 85.4%, 96.3% 85.9%, 96% 86.4%, 95.8% 86.9%, 95.5% 87.4%, 95.3% 87.9%, 95% 88.3%, 94.7% 88.8%, 94.4% 89.2%, 94.1% 89.7%, 93.8% 90.1%, 93.4% 90.5%, 93.1% 90.9%, 92.8% 91.3%, 92.4% 91.7%, 92% 92%, 91.7% 92.4%, 91.3% 92.8%, 90.9% 93.1%, 90.5% 93.4%, 90.1% 93.8%, 89.7% 94.1%, 89.2% 94.4%, 88.8% 94.7%, 88.3% 95%, 87.9% 95.3%, 87.4% 95.5%, 86.9% 95.8%, 86.4% 96%, 85.9% 96.3%, 85.4% 96.5%, 84.8% 96.8%, 84.3% 97%, 83.7% 97.2%, 83.1% 97.4%, 82.5% 97.6%, 81.9% 97.8%, 81.3% 98%, 80.6% 98.1%, 79.9% 98.3%, 79.2% 98.5%, 78.5% 98.6%, 77.8% 98.8%, 77% 98.9%, 76.3% 99%, 75.4% 99.1%, 74.6% 99.3%, 73.7% 99.4%, 72.8% 99.5%, 71.8% 99.5%, 70.8% 99.6%, 69.8% 99.7%, 68.7% 99.8%, 67.5% 99.8%, 66.2% 99.9%, 64.8% 99.9%, 63.2% 99.9%, 61.4% 100%, 59.3% 100%, 56.6% 100%, 50% 100%, 43.4% 100%, 40.7% 100%, 38.6% 100%, 36.8% 99.9%, 35.2% 99.9%, 33.8% 99.9%, 32.5% 99.8%, 31.3% 99.8%, 30.2% 99.7%, 29.2% 99.6%, 28.2% 99.5%, 27.2% 99.5%, 26.3% 99.4%, 25.4% 99.3%, 24.6% 99.1%, 23.7% 99%, 23% 98.9%, 22.2% 98.8%, 21.5% 98.6%, 20.8% 98.5%, 20.1% 98.3%, 19.4% 98.1%, 18.7% 98%, 18.1% 97.8%, 17.5% 97.6%, 16.9% 97.4%, 16.3% 97.2%, 15.7% 97%, 15.2% 96.8%, 14.6% 96.5%, 14.1% 96.3%, 13.6% 96%, 13.1% 95.8%, 12.6% 95.5%, 12.1% 95.3%, 11.7% 95%, 11.2% 94.7%, 10.8% 94.4%, 10.3% 94.1%, 9.9% 93.8%, 9.5% 93.4%, 9.1% 93.1%, 8.7% 92.8%, 8.3% 92.4%, 8% 92%, 7.6% 91.7%, 7.2% 91.3%, 6.9% 90.9%, 6.6% 90.5%, 6.2% 90.1%, 5.9% 89.7%, 5.6% 89.2%, 5.3% 88.8%, 5% 88.3%, 4.7% 87.9%, 4.5% 87.4%, 4.2% 86.9%, 4% 86.4%, 3.7% 85.9%, 3.5% 85.4%, 3.2% 84.8%, 3% 84.3%, 2.8% 83.7%, 2.6% 83.1%, 2.4% 82.5%, 2.2% 81.9%, 2% 81.3%, 1.9% 80.6%, 1.7% 79.9%, 1.5% 79.2%, 1.4% 78.5%, 1.2% 77.8%, 1.1% 77%, 1% 76.3%, 0.9% 75.4%, 0.7% 74.6%, 0.6% 73.7%, 0.5% 72.8%, 0.5% 71.8%, 0.4% 70.8%, 0.3% 69.8%, 0.2% 68.7%, 0.2% 67.5%, 0.1% 66.2%, 0.1% 64.8%, 0.1% 63.2%, 0% 61.4%, 0% 59.3%, 0% 56.6%, 0% 50%, 0% 43.4%, 0% 40.7%, 0% 38.6%, 0.1% 36.8%, 0.1% 35.2%, 0.1% 33.8%, 0.2% 32.5%, 0.2% 31.3%, 0.3% 30.2%, 0.4% 29.2%, 0.5% 28.2%, 0.5% 27.2%, 0.6% 26.3%, 0.7% 25.4%, 0.9% 24.6%, 1% 23.7%, 1.1% 23%, 1.2% 22.2%, 1.4% 21.5%, 1.5% 20.8%, 1.7% 20.1%, 1.9% 19.4%, 2% 18.7%, 2.2% 18.1%, 2.4% 17.5%, 2.6% 16.9%, 2.8% 16.3%, 3% 15.7%, 3.2% 15.2%, 3.5% 14.6%, 3.7% 14.1%, 4% 13.6%, 4.2% 13.1%, 4.5% 12.6%, 4.7% 12.1%, 5% 11.7%, 5.3% 11.2%, 5.6% 10.8%, 5.9% 10.3%, 6.2% 9.9%, 6.6% 9.5%, 6.9% 9.1%, 7.2% 8.7%, 7.6% 8.3%, 8% 8%, 8.3% 7.6%, 8.7% 7.2%, 9.1% 6.9%, 9.5% 6.6%, 9.9% 6.2%, 10.3% 5.9%, 10.8% 5.6%, 11.2% 5.3%, 11.7% 5%, 12.1% 4.7%, 12.6% 4.5%, 13.1% 4.2%, 13.6% 4%, 14.1% 3.7%, 14.6% 3.5%, 15.2% 3.2%, 15.7% 3%, 16.3% 2.8%, 16.9% 2.6%, 17.5% 2.4%, 18.1% 2.2%, 18.7% 2%, 19.4% 1.9%, 20.1% 1.7%, 20.8% 1.5%, 21.5% 1.4%, 22.2% 1.2%, 23% 1.1%, 23.7% 1%, 24.6% 0.9%, 25.4% 0.7%, 26.3% 0.6%, 27.2% 0.5%, 28.2% 0.5%, 29.2% 0.4%, 30.2% 0.3%, 31.3% 0.2%, 32.5% 0.2%, 33.8% 0.1%, 35.2% 0.1%, 36.8% 0.1%, 38.6% 0%, 40.7% 0%, 43.4% 0%, 50% 0%, 56.6% 0%, 59.3% 0%, 61.4% 0%, 63.2% 0.1%, 64.8% 0.1%, 66.2% 0.1%, 67.5% 0.2%, 68.7% 0.2%, 69.8% 0.3%, 70.8% 0.4%, 71.8% 0.5%, 72.8% 0.5%, 73.7% 0.6%, 74.6% 0.7%, 75.4% 0.9%, 76.3% 1%, 77% 1.1%, 77.8% 1.2%, 78.5% 1.4%, 79.2% 1.5%, 79.9% 1.7%, 80.6% 1.9%, 81.3% 2%, 81.9% 2.2%, 82.5% 2.4%, 83.1% 2.6%, 83.7% 2.8%, 84.3% 3%, 84.8% 3.2%, 85.4% 3.5%, 85.9% 3.7%, 86.4% 4%, 86.9% 4.2%, 87.4% 4.5%, 87.9% 4.7%, 88.3% 5%, 88.8% 5.3%, 89.2% 5.6%, 89.7% 5.9%, 90.1% 6.2%, 90.5% 6.6%, 90.9% 6.9%, 91.3% 7.2%, 91.7% 7.6%, 92% 8%, 92.4% 8.3%, 92.8% 8.7%, 93.1% 9.1%, 93.4% 9.5%, 93.8% 9.9%, 94.1% 10.3%, 94.4% 10.8%, 94.7% 11.2%, 95% 11.7%, 95.3% 12.1%, 95.5% 12.6%, 95.8% 13.1%, 96% 13.6%, 96.3% 14.1%, 96.5% 14.6%, 96.8% 15.2%, 97% 15.7%, 97.2% 16.3%, 97.4% 16.9%, 97.6% 17.5%, 97.8% 18.1%, 98% 18.7%, 98.1% 19.4%, 98.3% 20.1%, 98.5% 20.8%, 98.6% 21.5%, 98.8% 22.2%, 98.9% 23%, 99% 23.7%, 99.1% 24.6%, 99.3% 25.4%, 99.4% 26.3%, 99.5% 27.2%, 99.5% 28.2%, 99.6% 29.2%, 99.7% 30.2%, 99.8% 31.3%, 99.8% 32.5%, 99.9% 33.8%, 99.9% 35.2%, 99.9% 36.8%, 100% 38.6%, 100% 40.7%, 100% 43.4%);\n}\n.icon-collapse[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 9px;\n  width: var(--nav-iconMode-width);\n  text-align: center;\n}\n.link-category[_ngcontent-%COMP%] {\n  margin: 0.75em 0 0.25em;\n}\n.link-category[_ngcontent-%COMP%]   .icon.icon[_ngcontent-%COMP%] {\n  display: none;\n}\n.link-category[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] {\n  font-size: 80%;\n  opacity: 0.8;\n  height: 1em;\n  padding: 0;\n}\n.link-category[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.no-bg[_ngcontent-%COMP%] {\n  background: none;\n}\n.hide-link-category.link-category[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnJvbi9Eb2N1bWVudHMvR2l0SHViL3BlcmZlY3QtbmF2L3NyYy9hcHAvbmd4LXBlcmZlY3QtbmF2L25nLXBlcmZlY3QtbmF2L25nLXBlcmZlY3QtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZ3gtcGVyZmVjdC1uYXYvbmctcGVyZmVjdC1uYXYvbmctcGVyZmVjdC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3SUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0RKO0FERUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBUjtBRElJO0VBQ0ksYUFBQTtBQ0RSO0FETUk7RUFDSSxlQUFBO0FDSlI7QURRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0xKO0FEUVE7RUFDSSxhQUFBO0FDTlo7QURXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEU0k7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1BSO0FEV0E7RUFDSSxjQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0FDVEo7QURhSTtFQUNJLG9DQUFBO0VBRUEsZ0JBQUE7QUNaUjtBRGNRO0VBQ0ksb0NBQUE7QUNaWjtBRGNRO0VBQ0ksU0FBQTtBQ1paO0FEZ0JZO0VBQ0ksUUFBQTtFQUNBLE9BQUE7QUNkaEI7QURpQlk7RUFDSSxRQUFBO0FDZmhCO0FEb0JRO0VBQ0ksYUFBQTtBQ2xCWjtBRHFCUTtFQUNJLGVBQUE7QUNuQlo7QUR5Qkk7RUFDSSxrQkFBQTtBQ3ZCUjtBRHdCUTtFQUVJLDJCQUFBO0FDdkJaO0FEd0JZO0VBQ0ksZUFBQTtBQ3RCaEI7QUR5Qlk7RUFDSSxpQ0FBQTtBQ3ZCaEI7QUR5Qlk7RUFDSSxjQUFBO0FDdkJoQjtBRDJCWTtFQUNJLDJCQUFBO0FDekJoQjtBRDhCZ0I7RUFDSSxRQUFBO0FDNUJwQjtBRCtCZ0I7RUFDSSxRQUFBO0FDN0JwQjtBRG1DUTtFQUNJLHVDQUFBO0FDakNaO0FEa0NZO0VBQ0ksMkJBQUE7QUNoQ2hCO0FEa0NnQjtFQUNJLGFBQUE7QUNoQ3BCO0FEdUNRO0VBQ0ksdUNBQUE7QUNyQ1o7QURzQ1k7RUFDSSwyQkFBQTtBQ3BDaEI7QURzQ2dCO0VBQ0ksYUFBQTtBQ3BDcEI7QUQ2Q1E7RUFDSSxRQUFBO0FDM0NaO0FENkNRO0VBQ0ksUUFBQTtBQzNDWjtBRCtDUTtFQUNJLFFBQUE7RUFDQSxPQUFBO0FDN0NaO0FEZ0RRO0VBQ0ksUUFBQTtBQzlDWjtBRGdEUTtFQUNJLFFBQUE7QUM5Q1o7QURvREE7RUFHSSxxQkFBQTtFQUNBLGVBQUE7QUNuREo7QURxREk7RUFDSSxpQ0FBQTtBQ25EUjtBRG9EUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2xEWjtBRHdEWTtFQUNJLDBCQUFBO0FDdERoQjtBRDREWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSwyQkFBQTtBQzNEaEI7QURnRUk7RUFDSSwrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDL0RSO0FEaUVRO0VBQ0ksaUNBQUE7QUMvRFo7QURrRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNoRVo7QUR3RUE7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0FDckVKO0FEc0VJO0VBQ0ksaUNBQUE7QUNwRVI7QUR3RUE7RUFTSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUM3RUo7QUQrRUk7RUFDSSw0QkFBQTtBQzdFUjtBRGtGQTtFQUNJLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMvRUo7QURpRkk7RUFDSSxvQ0FBQTtBQy9FUjtBRGlGSTtFQUNJLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNoRlI7QURzRkk7RUFDSSxzQ0FBQTtFQUNBLGlDQUFBO0FDbkZSO0FEdUZBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7QUNwRko7QUR1RkE7RUFDSSxzQkFBQTtFQUNBLHV2SEFBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7QUNwRko7QUR3RkE7RUFDSSxzdklBQUE7VUFBQSw4dUlBQUE7QUNyRko7QUQwRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUN2Rko7QUQwRkE7RUFDSSx1QkFBQTtBQ3ZGSjtBRHdGSTtFQUNJLGFBQUE7QUN0RlI7QUR3Rkk7RUFJSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDekZSO0FEbUZRO0VBQ0ksZ0JBQUE7QUNqRlo7QUQyRkE7RUFDSSxnQkFBQTtBQ3hGSjtBRDJGQTtFQUNJLHdCQUFBO0FDeEZKIiwiZmlsZSI6InNyYy9hcHAvbmd4LXBlcmZlY3QtbmF2L25nLXBlcmZlY3QtbmF2L25nLXBlcmZlY3QtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbjpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG4uaWNvbi1tb2RlIHtcbiAgICAubGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubGluayB7XG4gICAgfVxuXG4gICAgLmNoaWxkLWxpbmtzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbn1cblxuLnBlcmZlY3QtbmF2LXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgICAmLmljb24tbW9kZSB7XG4gICAgICAgIC5sb2dvLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ28tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIDo6bmctZGVlcCA+ICoge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn1cblxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIG1heC13aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBhbGw7XG4gICAgd2lsbC1jaGFuZ2U6IGNvbnRlbnRzO1xuXG5cblxuICAgICYuaWNvbi1tb2RlIHtcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1uYXYtaWNvbk1vZGUtd2lkdGgpO1xuXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1uYXYtaWNvbk1vZGUtd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rLWhhcy1uby1pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaWNvbi1yaWdodCB7XG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAyO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDFcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmstY2F0ZWdvcnkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC1saW5rcyB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgICYuaWNvbi1tb2RlLmhvdmVyLXJldmVhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgJjpob3ZlciB7XG5cbiAgICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcbiAgICAgICAgICAgIC5saW5rLWhhcy1uby1pY29uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGlsZC1saW5rcyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jaGlsZC1pbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmstY2F0ZWdvcnkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAubGluaywubGFiZWwge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5pY29uLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rLWNvbnRlbnQge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgYWxsO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xuICAgIFxuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubGluayB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBhbGw7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW5hdi13aWR0aCk7XG4gICAgXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAmLmljb24tbGVmdCB7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBvcmRlcjogMlxuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG9yZGVyOiAxXG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5pY29uLXJpZ2h0IHtcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG9yZGVyOiAyXG4gICAgICAgIH1cbiAgICAgICAgLmNoaWxkcmVuLWRyb3Bkb3duIHtcbiAgICAgICAgICAgIG9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5saW5rIHtcbiAgICAvLyBtYXgtd2lkdGg6IDE2MHB4OyBcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDI1MG1zIGFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgLmNoaWxkLWxpbmtzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jaGlsZC1pbmRlbnQpO1xuICAgICAgICAubGluayB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLnNob3ctY2hpbGRyZW4ge1xuICAgICAgICA+IC5saW5rLWNvbnRlbnQgPiAuY2hpbGRyZW4tZHJvcGRvd24ge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgID4gLmNoaWxkLWxpbmtzIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPiAubGluayB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2hpbGQtYmcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmxpbmstY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy13aWR0aCk7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWxpbmstaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuXG4ubGFiZWwge1xuICAgIHBhZGRpbmc6IDhweCB2YXIoLS1wYWRkaW5nLXdpZHRoKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiA4cHggdmFyKC0tcGFkZGluZy13aWR0aCk7XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgLy8gcGFkZGluZzogMC41ZW07XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIHdpZHRoOiAyMHB4O1xuICAgIC8vIGhlaWdodDogMjBweDtcbiAgICAvLyBmbGV4OiBub25lO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGZsZXg6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taWNvbi1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taWNvbi1icik7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWljb24taW1nLXNpemUpO1xuICAgIH1cblxufVxuXG4uY2hpbGRyZW4tZHJvcGRvd24ge1xuICAgIGFwcGVhcmFuY2U6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IGluaGVyaXQ7XG4gICAgb3JkZXI6IDU7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZHJvcGRvd24tYmctaG92ZXIpO1xuICAgIH1cbiAgICA+IHNwYW4ge1xuICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBhbGw7XG5cbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgQGV4dGVuZCAuY2FyZXQtYmc7XG4gICAgfVxufVxuXG4uYm9yZGVyLWxlZnQge1xuICAgIC5saW5rLWNvbnRlbnQge1xuICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tYm9yZGVyLXdpZHRoKSBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG9yZGVyOiA0O1xufVxuXG4uY2FyZXQtYmcge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFDQVFBQUFCZWNSeHhBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQUFLcU5JeklBQUFBSGRFbE5SUWZoQ1JNSEl5bW5KQUVQQUFBS0MwbEVRVlI0MnUzWk1hNGR0eG1HWWNwWlFOWmdBV2tEZUFjcHRJdG9CZEVxRXNBN3NiZmdKaGNwQWlTdGkvUlM0UTNZcVEzRHhaVk4zYXR6enAwNVF3N0ovMytlRlV3enhFZStwUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURNNGRYb0R6anF6VGZscjZPL2diUytmWGc3K2hPTytXTDBCeHoxNmwzNU1Qb2JTT3JETDM4Yi9RbEhMWDhBL1BPblYyL0x6Nk8vZ29SK0xtLy85Zi9SSDNIVUgwWi93SEh2ZjNqOVJmbkw2Szhnblg4OGZEUDZFNDViZmdHVVVrcjV1dngzOUNlUXpIL0sxNk0vb1lYbEh3RWZ2Zm15ZkYvK09Qb3JTT09uOHRWRGlMZW5HQXVnUEh3bzcwWi9BNG04aS9IN2gzZ0RlUFQrZjYvL1ZQNDgraXRJNGR1SHY0LytoRmFDTElCU0JFRk9FaUQrVllFT0FFR1FFNFNJZjFXWUswQXBnaUFuQ0JIL3FrQUxvSlFpQ05KWGtQaFhCY21BbFNCSU4ySGlYeFZ0QVFpQzlCTW0vbFdoM2dBZUNZSjBFU2orVmVFV1FDbUNJQjJFaW45VnlBTkFFS1N4WVBHdkNuZ0ZLRVVRcExGZzhhOEt1UUJLS1lJZzdZU0xmMVc0REZnSmdqUVJNUDVWY1JlQUlFZ2JBZU5mRmZRTjRKRWd5R0VoNDE4VmVBR1VJZ2h5VU5ENFZ3VS9BQVJCRGdnYi82clFWNEJTQkVFT0NCdi9xdUFMb0pRaUNIS2Z3UEd2Q3B3QkswR1EzVUxIdnlyREFoQUUyUzkwL0t2Q3Z3RThFZ1RaSlhqOHExSXNnRklFUVhZSUgvK3FOQWVBSU1oR0NlSmZsZVFLVUlvZ3lFWUo0bCtWWmdHVVVnUkJYcFlpL2xVcE1tQWxDSEpUa3ZoWDVWb0FnaUMzSllsL1ZhSTNnRWVDSUZlbGlYOVZzZ1ZRaWlESUZZbmlYNVh3QUJBRXVTQlYvS3ZTWFFGS0VRUzVJRlg4cXhJdWdGS0tJTWhUeWVKZmxTd0RWb0lndjBzWC82cXNDMEFRcEVvWC82cVVid0NQQkVGS0tTbmpYNVYyQVpRaUNGS1N4cjhxOVFFZ0NLYVhOUDVWaWE4QXBRaUM2U1dOZjFYcUJWQktFUVF6U3h2L3FyUVpzQklFazBvYy95b0xRQkRNS25IOHE1Sy9BVHdTQkJOS0hmOHFDNkNVSWdpbWt6eitWUTZBVW9vZ21FejYrRmU1QW53a0NDYVNQdjVWRmtBbENPWWcvbjFDQnZ5RUlKaUErUGVFQmZBSlFUQUI4ZThKYndCUENJTEJpWC9QV0FEUENJS0JpWCtmY1FBOEl3aUdKZjVkNEFyd0dVRXdLUEh2QWd2Z0VrRXdIdkh2SWhud0lrRXdHUEh2Q2d2Z0lrRXdHUEh2Q204QVZ3aUNnWWgvVjFrQVZ3bUNRWWgvTnpnQXJoSUVReEQvYm5JRnVFRVFERUQ4dThrQ3VFMFFYSnY0OXdJWjhBV0M0TUxFdnhkWkFDOFFCQmNtL3IzSUc4Q0xCTUZGaVg4YldBQWJDSUlMRXY4MmNRQnNJQWd1Ui96YnlCVmdFMEZ3TWVMZlJoYkFWb0xnT3NTL3pXVEF6UVRCUlloL08xZ0Ftd21DaXhEL2R2QUdzSU1ndUFEeGJ4Y0xZQmRCY0hMaTMwNE9nRjBFd2FtSmY3dTVBdXdrQ0U1TS9Odk5BdGhQRUp5VCtIY0hHZkFPZ3VDRXhMKzdXQUIzRUFRbkpQN2R4UnZBWFFUQnlZaC9kN0lBN2lRSVRrVDh1NXNENEU2QzREVEV2d05jQWU0bUNFNUMvRHZBQWpoQ0VCeFAvRHRFQmp4RUVCeE0vRHZJQWpoRUVCeE0vRHZJRzhCQmd1QkE0dDloRnNCaGd1QWc0bDhERG9EREJNRWh4TDhtWEFFYUVBUUhFUCthc0FEYUVBVFBKZjQxSWdNMklnaWVTUHhyeGdKb1JCQThrZmpYakRlQVpnVEJrNGgvRFZrQURRbUNKeEQvbW5JQU5DUUlkaWYrTmVZSzBKUWcySm40MTVnRjBKb2cySS80MTV3TTJKd2cySW40MTRFRjBKd2cySW40MTRFM2dBNEV3UTdFdnk0c2dDNEV3Y2JFdjA0Y0FGMElnazJKZjkyNEFuUWlDRFlrL25WakFmUWpDTFloL25Va0EzWWtDRFlnL25WbEFYUWtDRFlnL25YbERhQXJRZkFnOGE4ekM2QXpRZkFBOGE4N0IwQm5ndURkeEw4VHVBSjBKd2plU2Z3N2dRVndCa0Z3UC9IdkZETGdLUVRCbmNTL2sxZ0FweEFFZHhML1R1SU40Q1NDNEE3aTMya3NnTk1JZ2h1SmZ5ZHlBSnhHRU54RS9EdVZLOENKQk1FTnhMOVRXUURuRWdSdkUvOU9KZ09lVEJDOFFmdzduUVZ3TWtId0J2SHZkTjRBVGljSVhpSCtEV0FCRENBSVhpRCtEZUVBR0VBUS9JejRONGdyd0JDQzREUGkzeUFXd0NpQ1lDWCtEU01ERGlNSWZpVCtEV1FCRENNSWZpVCtEZVFOWUNCQnNJaC9nMWtBUTZVUGd1TGZZQTZBb1pJSFFmRnZPRmVBd1ZJSFFmRnZPQXRndkt4QlVQeWJnQXc0Z1pSQlVQeWJnZ1V3Z1pSQlVQeWJnamVBS2FRTGd1TGZKQ3lBU2FRS2d1TGZOQndBazBnVUJNVy9pYmdDVENOTkVCVC9KbUlCekNSREVCVC9waUlEVGlWOEVCVC9KbU1CVENWOEVCVC9KdU1OWURLaGc2RDROeDBMWURwaGc2RDROeUVId0hTQ0JrSHhiMHF1QUJNS0dRVEZ2eWxaQUhPS0ZnVEZ2MG5KZ0pNS0ZRVEZ2MmxaQUpNS0ZRVEZ2Mmw1QTVoV21DQW8vazNNQXBoWWlDQW8vazNOQVRDeEFFRlEvSnVjSzhEVWxnK0M0dC9rTElEWnJSd0V4Yi9weVlEVFd6WUlpbjhMc0FDbXQyd1FGUDhXNEExZ0FVc0dRZkZ2Q1JiQUVwWUxndUxmSWh3QVMxZ3NDSXAveTNBRldNUlNRVkQ4VzRZRnNJNVZncUQ0dHhBWmNDRkxCRUh4YnlrV3dFS1dDSUxpMzFLOEFTeGwraUFvL2kzR0Fsak0xRUZRL0Z1T0EyQXhFd2RCOFc5QnJnRExtVFlJaW44THNnQldOR01RRlArV0pBTXVhYm9nS1A0dHlnSlkwblJCVVB4YmxEZUFSVTBWQk1XL1pWa0F5NW9tQ0lwL0MzTUFMR3VTSUNqK0xjMFZZR0ZUQkVIeGIya1d3TnBHQjBIeGIzRXk0T0tHQmtIeGIza1d3T0tHQmtIeGIzbmVBSlkzTEFpS2Z3RllBQUVNQ1lMaVh3Z09nQUFHQkVIeEx3aFhnQkJPRDRMaVh4QVdRQlJuQmtIeEx3d1pNSXpUZ3FENEY0Z0ZFTVpwUVZEOEM4UWJRQ0NuQkVIeEx4UUxJSlR1UVZEOEM4WUJFRXJuSUNqK2hlTUtFRXpYSUNqK2hXTUJ4Tk1yQ0lwL0FjbUFBWFVKZ3VKZlNCWkFRRjJDb1BnWGtqZUFrSm9IUWZFdktBc2dxS1pCVVB3THl3RVFWTU1nS1A0RjVnb1FWck1nS1A0RlpnRkUxaUlJaW4raHlZQ2hIUTZDNGw5d0ZrQm9oNE9nK0JlY040RGdEZ1ZCOFM4OEN5Qzh1NE9nK0plQUF5QzhPNE9nK0plQ0swQUNkd1ZCOFM4RkN5Q0h2VUZRL0V0Q0JreGlWeEFVLzlLd0FKTFlGUVRGdnpTOEFhU3hPUWlLZjRsWUFJbHNDb0xpWHlvT2dFUTJCRUh4THhsWGdGUmVESUxpWHpJV1FEYTNncUQ0bDQ0TW1NN1ZJQ2orSldRQnBITTFDSXAvQ1hrRFNPaGlFQlQvVXJJQVV2b3NDSXAvU1RrQVVub1dCTVcvdEZ3Qmtub1NCTVcvdEN5QXZINExndUpmWWpKZ1ltKytMTitYSXY1bDVncVEyUHNmWC85UXZudjQ5K2p2QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE0R1cvQXNxQ2l1Q0c4NS9HQUFBQUxucFVXSFJrWVhSbE9tTnlaV0YwWlFBQWVOb3pNakEwMXpXdzFEVzBEREV3dHpJMnRUSzIxRFl3c0RJd0FBQkN0Z1VnVHo1bFhBQUFBQzU2VkZoMFpHRjBaVHB0YjJScFpua0FBSGphTXpJd05OYzFzTlExdEF3eE1MY3lOclV5dHRRMk1MQXlNQUFBUXJZRklHWUJ6ZFFBQUFBQVNVVk9SSzVDWUlJPScpO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS1uYXYtY2FyZXQtYnJpZ2h0bmVzcykpO1xufVxuXG5cbi5zcXVpcmNsZSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDEwMCUgNTAlLCAxMDAlIDU2LjYlLCAxMDAlIDU5LjMlLCAxMDAlIDYxLjQlLCA5OS45JSA2My4yJSwgOTkuOSUgNjQuOCUsIDk5LjklIDY2LjIlLCA5OS44JSA2Ny41JSwgOTkuOCUgNjguNyUsIDk5LjclIDY5LjglLCA5OS42JSA3MC44JSwgOTkuNSUgNzEuOCUsIDk5LjUlIDcyLjglLCA5OS40JSA3My43JSwgOTkuMyUgNzQuNiUsIDk5LjElIDc1LjQlLCA5OSUgNzYuMyUsIDk4LjklIDc3JSwgOTguOCUgNzcuOCUsIDk4LjYlIDc4LjUlLCA5OC41JSA3OS4yJSwgOTguMyUgNzkuOSUsIDk4LjElIDgwLjYlLCA5OCUgODEuMyUsIDk3LjglIDgxLjklLCA5Ny42JSA4Mi41JSwgOTcuNCUgODMuMSUsIDk3LjIlIDgzLjclLCA5NyUgODQuMyUsIDk2LjglIDg0LjglLCA5Ni41JSA4NS40JSwgOTYuMyUgODUuOSUsIDk2JSA4Ni40JSwgOTUuOCUgODYuOSUsIDk1LjUlIDg3LjQlLCA5NS4zJSA4Ny45JSwgOTUlIDg4LjMlLCA5NC43JSA4OC44JSwgOTQuNCUgODkuMiUsIDk0LjElIDg5LjclLCA5My44JSA5MC4xJSwgOTMuNCUgOTAuNSUsIDkzLjElIDkwLjklLCA5Mi44JSA5MS4zJSwgOTIuNCUgOTEuNyUsIDkyJSA5MiUsIDkxLjclIDkyLjQlLCA5MS4zJSA5Mi44JSwgOTAuOSUgOTMuMSUsIDkwLjUlIDkzLjQlLCA5MC4xJSA5My44JSwgODkuNyUgOTQuMSUsIDg5LjIlIDk0LjQlLCA4OC44JSA5NC43JSwgODguMyUgOTUlLCA4Ny45JSA5NS4zJSwgODcuNCUgOTUuNSUsIDg2LjklIDk1LjglLCA4Ni40JSA5NiUsIDg1LjklIDk2LjMlLCA4NS40JSA5Ni41JSwgODQuOCUgOTYuOCUsIDg0LjMlIDk3JSwgODMuNyUgOTcuMiUsIDgzLjElIDk3LjQlLCA4Mi41JSA5Ny42JSwgODEuOSUgOTcuOCUsIDgxLjMlIDk4JSwgODAuNiUgOTguMSUsIDc5LjklIDk4LjMlLCA3OS4yJSA5OC41JSwgNzguNSUgOTguNiUsIDc3LjglIDk4LjglLCA3NyUgOTguOSUsIDc2LjMlIDk5JSwgNzUuNCUgOTkuMSUsIDc0LjYlIDk5LjMlLCA3My43JSA5OS40JSwgNzIuOCUgOTkuNSUsIDcxLjglIDk5LjUlLCA3MC44JSA5OS42JSwgNjkuOCUgOTkuNyUsIDY4LjclIDk5LjglLCA2Ny41JSA5OS44JSwgNjYuMiUgOTkuOSUsIDY0LjglIDk5LjklLCA2My4yJSA5OS45JSwgNjEuNCUgMTAwJSwgNTkuMyUgMTAwJSwgNTYuNiUgMTAwJSwgNTAlIDEwMCUsIDQzLjQlIDEwMCUsIDQwLjclIDEwMCUsIDM4LjYlIDEwMCUsIDM2LjglIDk5LjklLCAzNS4yJSA5OS45JSwgMzMuOCUgOTkuOSUsIDMyLjUlIDk5LjglLCAzMS4zJSA5OS44JSwgMzAuMiUgOTkuNyUsIDI5LjIlIDk5LjYlLCAyOC4yJSA5OS41JSwgMjcuMiUgOTkuNSUsIDI2LjMlIDk5LjQlLCAyNS40JSA5OS4zJSwgMjQuNiUgOTkuMSUsIDIzLjclIDk5JSwgMjMlIDk4LjklLCAyMi4yJSA5OC44JSwgMjEuNSUgOTguNiUsIDIwLjglIDk4LjUlLCAyMC4xJSA5OC4zJSwgMTkuNCUgOTguMSUsIDE4LjclIDk4JSwgMTguMSUgOTcuOCUsIDE3LjUlIDk3LjYlLCAxNi45JSA5Ny40JSwgMTYuMyUgOTcuMiUsIDE1LjclIDk3JSwgMTUuMiUgOTYuOCUsIDE0LjYlIDk2LjUlLCAxNC4xJSA5Ni4zJSwgMTMuNiUgOTYlLCAxMy4xJSA5NS44JSwgMTIuNiUgOTUuNSUsIDEyLjElIDk1LjMlLCAxMS43JSA5NSUsIDExLjIlIDk0LjclLCAxMC44JSA5NC40JSwgMTAuMyUgOTQuMSUsIDkuOSUgOTMuOCUsIDkuNSUgOTMuNCUsIDkuMSUgOTMuMSUsIDguNyUgOTIuOCUsIDguMyUgOTIuNCUsIDglIDkyJSwgNy42JSA5MS43JSwgNy4yJSA5MS4zJSwgNi45JSA5MC45JSwgNi42JSA5MC41JSwgNi4yJSA5MC4xJSwgNS45JSA4OS43JSwgNS42JSA4OS4yJSwgNS4zJSA4OC44JSwgNSUgODguMyUsIDQuNyUgODcuOSUsIDQuNSUgODcuNCUsIDQuMiUgODYuOSUsIDQlIDg2LjQlLCAzLjclIDg1LjklLCAzLjUlIDg1LjQlLCAzLjIlIDg0LjglLCAzJSA4NC4zJSwgMi44JSA4My43JSwgMi42JSA4My4xJSwgMi40JSA4Mi41JSwgMi4yJSA4MS45JSwgMiUgODEuMyUsIDEuOSUgODAuNiUsIDEuNyUgNzkuOSUsIDEuNSUgNzkuMiUsIDEuNCUgNzguNSUsIDEuMiUgNzcuOCUsIDEuMSUgNzclLCAxJSA3Ni4zJSwgMC45JSA3NS40JSwgMC43JSA3NC42JSwgMC42JSA3My43JSwgMC41JSA3Mi44JSwgMC41JSA3MS44JSwgMC40JSA3MC44JSwgMC4zJSA2OS44JSwgMC4yJSA2OC43JSwgMC4yJSA2Ny41JSwgMC4xJSA2Ni4yJSwgMC4xJSA2NC44JSwgMC4xJSA2My4yJSwgMCUgNjEuNCUsIDAlIDU5LjMlLCAwJSA1Ni42JSwgMCUgNTAlLCAwJSA0My40JSwgMCUgNDAuNyUsIDAlIDM4LjYlLCAwLjElIDM2LjglLCAwLjElIDM1LjIlLCAwLjElIDMzLjglLCAwLjIlIDMyLjUlLCAwLjIlIDMxLjMlLCAwLjMlIDMwLjIlLCAwLjQlIDI5LjIlLCAwLjUlIDI4LjIlLCAwLjUlIDI3LjIlLCAwLjYlIDI2LjMlLCAwLjclIDI1LjQlLCAwLjklIDI0LjYlLCAxJSAyMy43JSwgMS4xJSAyMyUsIDEuMiUgMjIuMiUsIDEuNCUgMjEuNSUsIDEuNSUgMjAuOCUsIDEuNyUgMjAuMSUsIDEuOSUgMTkuNCUsIDIlIDE4LjclLCAyLjIlIDE4LjElLCAyLjQlIDE3LjUlLCAyLjYlIDE2LjklLCAyLjglIDE2LjMlLCAzJSAxNS43JSwgMy4yJSAxNS4yJSwgMy41JSAxNC42JSwgMy43JSAxNC4xJSwgNCUgMTMuNiUsIDQuMiUgMTMuMSUsIDQuNSUgMTIuNiUsIDQuNyUgMTIuMSUsIDUlIDExLjclLCA1LjMlIDExLjIlLCA1LjYlIDEwLjglLCA1LjklIDEwLjMlLCA2LjIlIDkuOSUsIDYuNiUgOS41JSwgNi45JSA5LjElLCA3LjIlIDguNyUsIDcuNiUgOC4zJSwgOCUgOCUsIDguMyUgNy42JSwgOC43JSA3LjIlLCA5LjElIDYuOSUsIDkuNSUgNi42JSwgOS45JSA2LjIlLCAxMC4zJSA1LjklLCAxMC44JSA1LjYlLCAxMS4yJSA1LjMlLCAxMS43JSA1JSwgMTIuMSUgNC43JSwgMTIuNiUgNC41JSwgMTMuMSUgNC4yJSwgMTMuNiUgNCUsIDE0LjElIDMuNyUsIDE0LjYlIDMuNSUsIDE1LjIlIDMuMiUsIDE1LjclIDMlLCAxNi4zJSAyLjglLCAxNi45JSAyLjYlLCAxNy41JSAyLjQlLCAxOC4xJSAyLjIlLCAxOC43JSAyJSwgMTkuNCUgMS45JSwgMjAuMSUgMS43JSwgMjAuOCUgMS41JSwgMjEuNSUgMS40JSwgMjIuMiUgMS4yJSwgMjMlIDEuMSUsIDIzLjclIDElLCAyNC42JSAwLjklLCAyNS40JSAwLjclLCAyNi4zJSAwLjYlLCAyNy4yJSAwLjUlLCAyOC4yJSAwLjUlLCAyOS4yJSAwLjQlLCAzMC4yJSAwLjMlLCAzMS4zJSAwLjIlLCAzMi41JSAwLjIlLCAzMy44JSAwLjElLCAzNS4yJSAwLjElLCAzNi44JSAwLjElLCAzOC42JSAwJSwgNDAuNyUgMCUsIDQzLjQlIDAlLCA1MCUgMCUsIDU2LjYlIDAlLCA1OS4zJSAwJSwgNjEuNCUgMCUsIDYzLjIlIDAuMSUsIDY0LjglIDAuMSUsIDY2LjIlIDAuMSUsIDY3LjUlIDAuMiUsIDY4LjclIDAuMiUsIDY5LjglIDAuMyUsIDcwLjglIDAuNCUsIDcxLjglIDAuNSUsIDcyLjglIDAuNSUsIDczLjclIDAuNiUsIDc0LjYlIDAuNyUsIDc1LjQlIDAuOSUsIDc2LjMlIDElLCA3NyUgMS4xJSwgNzcuOCUgMS4yJSwgNzguNSUgMS40JSwgNzkuMiUgMS41JSwgNzkuOSUgMS43JSwgODAuNiUgMS45JSwgODEuMyUgMiUsIDgxLjklIDIuMiUsIDgyLjUlIDIuNCUsIDgzLjElIDIuNiUsIDgzLjclIDIuOCUsIDg0LjMlIDMlLCA4NC44JSAzLjIlLCA4NS40JSAzLjUlLCA4NS45JSAzLjclLCA4Ni40JSA0JSwgODYuOSUgNC4yJSwgODcuNCUgNC41JSwgODcuOSUgNC43JSwgODguMyUgNSUsIDg4LjglIDUuMyUsIDg5LjIlIDUuNiUsIDg5LjclIDUuOSUsIDkwLjElIDYuMiUsIDkwLjUlIDYuNiUsIDkwLjklIDYuOSUsIDkxLjMlIDcuMiUsIDkxLjclIDcuNiUsIDkyJSA4JSwgOTIuNCUgOC4zJSwgOTIuOCUgOC43JSwgOTMuMSUgOS4xJSwgOTMuNCUgOS41JSwgOTMuOCUgOS45JSwgOTQuMSUgMTAuMyUsIDk0LjQlIDEwLjglLCA5NC43JSAxMS4yJSwgOTUlIDExLjclLCA5NS4zJSAxMi4xJSwgOTUuNSUgMTIuNiUsIDk1LjglIDEzLjElLCA5NiUgMTMuNiUsIDk2LjMlIDE0LjElLCA5Ni41JSAxNC42JSwgOTYuOCUgMTUuMiUsIDk3JSAxNS43JSwgOTcuMiUgMTYuMyUsIDk3LjQlIDE2LjklLCA5Ny42JSAxNy41JSwgOTcuOCUgMTguMSUsIDk4JSAxOC43JSwgOTguMSUgMTkuNCUsIDk4LjMlIDIwLjElLCA5OC41JSAyMC44JSwgOTguNiUgMjEuNSUsIDk4LjglIDIyLjIlLCA5OC45JSAyMyUsIDk5JSAyMy43JSwgOTkuMSUgMjQuNiUsIDk5LjMlIDI1LjQlLCA5OS40JSAyNi4zJSwgOTkuNSUgMjcuMiUsIDk5LjUlIDI4LjIlLCA5OS42JSAyOS4yJSwgOTkuNyUgMzAuMiUsIDk5LjglIDMxLjMlLCA5OS44JSAzMi41JSwgOTkuOSUgMzMuOCUsIDk5LjklIDM1LjIlLCA5OS45JSAzNi44JSwgMTAwJSAzOC42JSwgMTAwJSA0MC43JSwgMTAwJSA0My40JVxuICApO1xufVxuXG4uaWNvbi1jb2xsYXBzZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICB3aWR0aDogdmFyKC0tbmF2LWljb25Nb2RlLXdpZHRoKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5rLWNhdGVnb3J5IHtcbiAgICBtYXJnaW46IC43NWVtIDAgLjI1ZW07XG4gICAgLmljb24uaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5saW5rLWNvbnRlbnQge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cblxuLm5vLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uaGlkZS1saW5rLWNhdGVnb3J5LmxpbmstY2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iLCI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaWNvbi1tb2RlIC5sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaWNvbi1tb2RlIC5jaGlsZC1saW5rcyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnBlcmZlY3QtbmF2LXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuLnBlcmZlY3QtbmF2LXRvcC5pY29uLW1vZGUgLmxvZ28tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ28tY29udGVudCA6Om5nLWRlZXAgPiAqIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBhbGw7XG4gIHdpbGwtY2hhbmdlOiBjb250ZW50cztcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1uYXYtaWNvbk1vZGUtd2lkdGgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lci5pY29uLW1vZGUgLmxpbmsge1xuICBtYXgtd2lkdGg6IHZhcigtLW5hdi1pY29uTW9kZS13aWR0aCk7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZSAubGluay1oYXMtbm8taWNvbiB7XG4gIGhlaWdodDogMDtcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmljb24tcmlnaHQgLmxhYmVsIHtcbiAgb3JkZXI6IDI7XG4gIGZsZXg6IDE7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5pY29uLXJpZ2h0IC5pY29uIHtcbiAgb3JkZXI6IDE7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZSAubGluay1jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZSAuY2hpbGQtbGlua3Mge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWw6aG92ZXIge1xuICBtYXgtd2lkdGg6IHZhcigtLW5hdi13aWR0aCk7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWw6aG92ZXIgLmxpbmstaGFzLW5vLWljb24ge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWw6aG92ZXIgLmNoaWxkLWxpbmtzIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jaGlsZC1pbmRlbnQpO1xufVxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lci5pY29uLW1vZGUuaG92ZXItcmV2ZWFsOmhvdmVyIC5saW5rLWNhdGVnb3J5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWw6aG92ZXIgLmxpbmssIC5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmhvdmVyLXJldmVhbDpob3ZlciAubGFiZWwge1xuICBtYXgtd2lkdGg6IHZhcigtLW5hdi13aWR0aCk7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWw6aG92ZXIuaWNvbi1yaWdodCAubGFiZWwge1xuICBvcmRlcjogMTtcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmhvdmVyLXJldmVhbDpob3Zlci5pY29uLXJpZ2h0IC5pY29uIHtcbiAgb3JkZXI6IDI7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbW9kZS5ob3Zlci1yZXZlYWwgLmxpbmstY29udGVudCB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGFsbDtcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmhvdmVyLXJldmVhbCAubGluay1jb250ZW50OmhvdmVyIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xufVxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lci5pY29uLW1vZGUuaG92ZXItcmV2ZWFsIC5saW5rLWNvbnRlbnQ6aG92ZXIgLmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmhvdmVyLXJldmVhbCAubGluayB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGFsbDtcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmhvdmVyLXJldmVhbCAubGluazpob3ZlciB7XG4gIG1heC13aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcbn1cbi5wZXJmZWN0LW5hdi1jb250YWluZXIuaWNvbi1tb2RlLmhvdmVyLXJldmVhbCAubGluazpob3ZlciAubGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lci5pY29uLWxlZnQgLmxhYmVsIHtcbiAgb3JkZXI6IDI7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tbGVmdCAuaWNvbiB7XG4gIG9yZGVyOiAxO1xufVxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lci5pY29uLXJpZ2h0IC5sYWJlbCB7XG4gIG9yZGVyOiAxO1xuICBmbGV4OiAxO1xufVxuLnBlcmZlY3QtbmF2LWNvbnRhaW5lci5pY29uLXJpZ2h0IC5pY29uIHtcbiAgb3JkZXI6IDI7XG59XG4ucGVyZmVjdC1uYXYtY29udGFpbmVyLmljb24tcmlnaHQgLmNoaWxkcmVuLWRyb3Bkb3duIHtcbiAgb3JkZXI6IDA7XG59XG5cbi5saW5rIHtcbiAgdHJhbnNpdGlvbjogMjUwbXMgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGluayAuY2hpbGQtbGlua3Mge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWNoaWxkLWluZGVudCk7XG59XG4ubGluayAuY2hpbGQtbGlua3MgLmxpbmsge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxpbmsuc2hvdy1jaGlsZHJlbiA+IC5saW5rLWNvbnRlbnQgPiAuY2hpbGRyZW4tZHJvcGRvd24gc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLmxpbmsuc2hvdy1jaGlsZHJlbiA+IC5jaGlsZC1saW5rcyA+IC5saW5rIHtcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hpbGQtYmcpO1xufVxuLmxpbmsgLmxpbmstY29udGVudCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogdmFyKC0tbGluay1oZWlnaHQpO1xufVxuLmxpbmsgLmxpbmstY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbn1cbi5saW5rIC5saW5rLWNvbnRlbnQgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZzogOHB4IHZhcigtLXBhZGRpbmctd2lkdGgpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmxhYmVsIHNwYW4ge1xuICBwYWRkaW5nOiA4cHggdmFyKC0tcGFkZGluZy13aWR0aCk7XG59XG5cbi5pY29uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZsZXg6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWljb24tYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pY29uLWJyKTtcbn1cbi5pY29uIGltZyB7XG4gIGhlaWdodDogdmFyKC0taWNvbi1pbWctc2l6ZSk7XG59XG5cbi5jaGlsZHJlbi1kcm9wZG93biB7XG4gIGFwcGVhcmFuY2U6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogaW5oZXJpdDtcbiAgb3JkZXI6IDU7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoaWxkcmVuLWRyb3Bkb3duOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZHJvcGRvd24tYmctaG92ZXIpO1xufVxuLmNoaWxkcmVuLWRyb3Bkb3duID4gc3BhbiB7XG4gIHRyYW5zaXRpb246IDEwMG1zIGFsbDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbn1cblxuLmJvcmRlci1sZWZ0IC5saW5rLWNvbnRlbnQge1xuICBib3JkZXItbGVmdDogdmFyKC0tYm9yZGVyLXdpZHRoKSBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcmRlcjogNDtcbn1cblxuLmNhcmV0LWJnLCAuY2hpbGRyZW4tZHJvcGRvd24gPiBzcGFuIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQ0FRQUFBQmVjUnh4QUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQW1KTFIwUUFBS3FOSXpJQUFBQUhkRWxOUlFmaENSTUhJeW1uSkFFUEFBQUtDMGxFUVZSNDJ1M1pNYTRkdHhtR1ljcFpRTlpnQVdrRGVBY3B0SXRvQmRFcUVzQTdzYmZnSmhjcEFpU3RpL1JTNFEzWXFRM0R4WlZOM2F0enpwMDVRdzdKLzMrZUZVd3p4RWUrcFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFETTRkWG9EempxelRmbHI2Ty9nYlMrZlhnNytoT08rV0wwQnh6MTZsMzVNUG9iU09yREwzOGIvUWxITFg4QS9QT25WMi9MejZPL2dvUitMbS8vOWYvUkgzSFVIMFovd0hIdmYzajlSZm5MNks4Z25YODhmRFA2RTQ1YmZnR1VVa3I1dXZ4MzlDZVF6SC9LMTZNL29ZWGxId0VmdmZteWZGLytPUG9yU09Pbjh0VkRpTGVuR0F1Z1BId283MFovQTRtOGkvSDdoM2dEZVBUK2Y2Ly9WUDQ4K2l0STRkdUh2NC8raEZhQ0xJQlNCRUZPRWlEK1ZZRU9BRUdRRTRTSWYxV1lLMEFwZ2lBbkNCSC9xa0FMb0pRaUNOSlhrUGhYQmNtQWxTQklOMkhpWHhWdEFRaUM5Qk1tL2xXaDNnQWVDWUowRVNqK1ZlRVdRQ21DSUIyRWluOVZ5QU5BRUtTeFlQR3ZDbmdGS0VVUXBMRmc4YThLdVFCS0tZSWc3WVNMZjFXNERGZ0pnalFSTVA1VmNSZUFJRWdiQWVOZkZmUU40SkVneUdFaDQxOFZlQUdVSWdoeVVORDRWd1UvQUFSQkRnZ2IvNnJRVjRCU0JFRU9DQnYvcXVBTG9KUWlDSEtmd1BHdkNwd0JLMEdRM1VMSHZ5ckRBaEFFMlM5MC9LdkN2d0U4RWdUWkpYajhxMUlzZ0ZJRVFYWUlILytxTkFlQUlNaEdDZUpmbGVRS1VJb2d5RVlKNGwrVlpnR1VVZ1JCWHBZaS9sVXBNbUFsQ0hKVGt2aFg1Vm9BZ2lDM0pZbC9WYUkzZ0VlQ0lGZWxpWDlWc2dWUWlpRElGWW5pWDVYd0FCQUV1U0JWL0t2U1hRRktFUVM1SUZYOHF4SXVnRktLSU1oVHllSmZsU3dEVm9JZ3Ywc1gvNnFzQzBBUXBFb1gvNnFVYndDUEJFRktLU25qWDVWMkFaUWlDRktTeHI4cTlRRWdDS2FYTlA1VmlhOEFwUWlDNlNXTmYxWHFCVkJLRVFRelN4di9xclFac0JJRWswb2MveW9MUUJETUtuSDhxNUsvQVR3U0JCTktIZjhxQzZDVUlnaW1renorVlE2QVVvb2dtRXo2K0ZlNUFud2tDQ2FTUHY1VkZrQWxDT1lnL24xQ0J2eUVJSmlBK1BlRUJmQUpRVEFCOGU4SmJ3QlBDSUxCaVgvUFdBRFBDSUtCaVgrZmNRQThJd2lHSmY1ZDRBcndHVUV3S1BIdkFndmdFa0V3SHZIdklobndJa0V3R1BIdkNndmdJa0V3R1BIdkNtOEFWd2lDZ1loL1Yxa0FWd21DUVloL056Z0FyaElFUXhEL2JuSUZ1RUVRREVEOHU4a0N1RTBRWEp2NDl3SVo4QVdDNE1MRXZ4ZFpBQzhRQkJjbS9yM0lHOENMQk1GRmlYOGJXQUFiQ0lJTEV2ODJjUUJzSUFndVIvemJ5QlZnRTBGd01lTGZSaGJBVm9MZ09zUy96V1RBelFUQlJZaC9PMWdBbXdtQ2l4RC9kdkFHc0lNZ3VBRHhieGNMWUJkQmNITGkzMDRPZ0YwRXdhbUpmN3U1QXV3a0NFNU0vTnZOQXRoUEVKeVQrSGNIR2ZBT2d1Q0V4TCs3V0FCM0VBUW5KUDdkeFJ2QVhRVEJ5WWgvZDdJQTdpUUlUa1Q4dTVzRDRFNkM0RFRFdndOY0FlNG1DRTVDL0R2QUFqaENFQnhQL0R0RUJqeEVFQnhNL0R2SUFqaEVFQnhNL0R2SUc4QkJndUJBNHQ5aEZzQmhndUFnNGw4RERvRERCTUVoeEw4bVhBRWFFQVFIRVArYXNBRGFFQVRQSmY0MUlnTTJJZ2llU1B4cnhnSm9SQkE4a2ZqWGpEZUFaZ1RCazRoL0RWa0FEUW1DSnhEL21uSUFOQ1FJZGlmK05lWUswSlFnMkpuNDE1Z0YwSm9nMkkvNDE1d00ySndnMkluNDE0RUYwSndnMkluNDE0RTNnQTRFd1E3RXZ5NHNnQzRFd2NiRXYwNGNBRjBJZ2sySmY5MjRBblFpQ0RZay9uVmpBZlFqQ0xZaC9uVWtBM1lrQ0RZZy9uVmxBWFFrQ0RZZy9uWGxEYUFyUWZBZzhhOHpDNkF6UWZBQThhODdCMEJuZ3VEZHhMOFR1QUowSndqZVNmdzdnUVZ3QmtGd1AvSHZGRExnS1FUQm5jUy9rMWdBcHhBRWR4TC9UdUlONENTQzRBN2kzMmtzZ05NSWdodUpmeWR5QUp4R0VOeEUvRHVWSzhDSkJNRU54TDlUV1FEbkVnUnZFLzlPSmdPZVRCQzhRZnc3blFWd01rSHdCdkh2ZE40QVRpY0lYaUgrRFdBQkRDQUlYaUQrRGVFQUdFQVEvSXo0TjRncndCQ0M0RFBpM3lBV3dDaUNZQ1grRFNNRERpTUlmaVQrRFdRQkRDTUlmaVQrRGVRTllDQkJzSWgvZzFrQVE2VVBndUxmWUE2QW9aSUhRZkZ2T0ZlQXdWSUhRZkZ2T0F0Z3ZLeEJVUHliZ0F3NGdaUkJVUHliZ2dVd2daUkJVUHliZ2plQUthUUxndUxmSkN5QVNhUUtndUxmTkJ3QWswZ1VCTVcvaWJnQ1RDTk5FQlQvSm1JQnpDUkRFQlQvcGlJRFRpVjhFQlQvSm1NQlRDVjhFQlQvSnVNTllES2hnNkQ0TngwTFlEcGhnNkQ0TnlFSHdIU0NCa0h4YjBxdUFCTUtHUVRGdnlsWkFIT0tGZ1RGdjBuSmdKTUtGUVRGdjJsWkFKTUtGUVRGdjJsNUE1aFdtQ0FvL2szTUFwaFlpQ0FvL2szTkFUQ3hBRUZRL0p1Y0s4RFVsZytDNHQva0xJRFpyUndFeGIvcHlZRFRXellJaW44THNBQ210MndRRlA4VzRBMWdBVXNHUWZGdkNSYkFFcFlMZ3VMZklod0FTMWdzQ0lwL3kzQUZXTVJTUVZEOFc0WUZzSTVWZ3FENHR4QVpjQ0ZMQkVIeGJ5a1d3RUtXQ0lMaTMxSzhBU3hsK2lBby9pM0dBbGpNMUVGUS9GdU9BMkF4RXdkQjhXOUJyZ0RMbVRZSWluOExzZ0JXTkdNUUZQK1dKQU11YWJvZ0tQNHR5Z0pZMG5SQlVQeGJsRGVBUlUwVkJNVy9aVmtBeTVvbUNJcC9DM01BTEd1U0lDaitMYzBWWUdGVEJFSHhiMmtXd05wR0IwSHhiM0V5NE9LR0JrSHhiM2tXd09LR0JrSHhiM25lQUpZM0xBaUtmd0ZZQUFFTUNZTGlYd2dPZ0FBR0JFSHhMd2hYZ0JCT0Q0TGlYeEFXUUJSbkJrSHhMd3daTUl6VGdxRDRGNGdGRU1acFFWRDhDOFFiUUNDbkJFSHhMeFFMSUpUdVFWRDhDOFlCRUVybklDaitoZU1LRUV6WElDaitoV01CeE5NckNJcC9BY21BQVhVSmd1SmZTQlpBUUYyQ29QZ1hramVBa0pvSFFmRXZLQXNncUtaQlVQd0x5d0VRVk1NZ0tQNEY1Z29RVnJNZ0tQNEZaZ0ZFMWlJSWluK2h5WUNoSFE2QzRsOXdGa0JvaDRPZytCZWNONERnRGdWQjhTODhDeUM4dTRPZytKZUFBeUM4TzRPZytKZUNLMEFDZHdWQjhTOEZDeUNIdlVGUS9FdENCa3hpVnhBVS85S3dBSkxZRlFURnZ6UzhBYVN4T1FpS2Y0bFlBSWxzQ29MaVh5b09nRVEyQkVIeEx4bFhnRlJlRElMaVh6SVdRRGEzZ3FENGw0NE1tTTdWSUNqK0pXUUJwSE0xQ0lwL0NYa0RTT2hpRUJUL1VySUFVdm9zQ0lwL1NUa0FVbm9XQk1XL3RGd0Jrbm9TQk1XL3RDeUF2SDRMZ3VKZllqSmdZbSsrTE4rWEl2NWw1Z3FRMlBzZlgvOVF2bnY0OStqdkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNEdXL0FzcUNpdUNHODUvR0FBQUFMbnBVV0hSa1lYUmxPbU55WldGMFpRQUFlTm96TWpBMDF6V3cxRFcwRERFd3R6STJ0VEsyMURZd3NESXdBQUJDdGdVZ1R6NWxYQUFBQUM1NlZGaDBaR0YwWlRwdGIyUnBabmtBQUhqYU16SXdOTmMxc05RMXRBd3hNTGN5TnJVeXR0UTJNTEF5TUFBQVFyWUZJR1lCemRRQUFBQUFTVVZPUks1Q1lJST1cIik7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS1uYXYtY2FyZXQtYnJpZ2h0bmVzcykpO1xufVxuXG4uc3F1aXJjbGUge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSA1MCUsIDEwMCUgNTYuNiUsIDEwMCUgNTkuMyUsIDEwMCUgNjEuNCUsIDk5LjklIDYzLjIlLCA5OS45JSA2NC44JSwgOTkuOSUgNjYuMiUsIDk5LjglIDY3LjUlLCA5OS44JSA2OC43JSwgOTkuNyUgNjkuOCUsIDk5LjYlIDcwLjglLCA5OS41JSA3MS44JSwgOTkuNSUgNzIuOCUsIDk5LjQlIDczLjclLCA5OS4zJSA3NC42JSwgOTkuMSUgNzUuNCUsIDk5JSA3Ni4zJSwgOTguOSUgNzclLCA5OC44JSA3Ny44JSwgOTguNiUgNzguNSUsIDk4LjUlIDc5LjIlLCA5OC4zJSA3OS45JSwgOTguMSUgODAuNiUsIDk4JSA4MS4zJSwgOTcuOCUgODEuOSUsIDk3LjYlIDgyLjUlLCA5Ny40JSA4My4xJSwgOTcuMiUgODMuNyUsIDk3JSA4NC4zJSwgOTYuOCUgODQuOCUsIDk2LjUlIDg1LjQlLCA5Ni4zJSA4NS45JSwgOTYlIDg2LjQlLCA5NS44JSA4Ni45JSwgOTUuNSUgODcuNCUsIDk1LjMlIDg3LjklLCA5NSUgODguMyUsIDk0LjclIDg4LjglLCA5NC40JSA4OS4yJSwgOTQuMSUgODkuNyUsIDkzLjglIDkwLjElLCA5My40JSA5MC41JSwgOTMuMSUgOTAuOSUsIDkyLjglIDkxLjMlLCA5Mi40JSA5MS43JSwgOTIlIDkyJSwgOTEuNyUgOTIuNCUsIDkxLjMlIDkyLjglLCA5MC45JSA5My4xJSwgOTAuNSUgOTMuNCUsIDkwLjElIDkzLjglLCA4OS43JSA5NC4xJSwgODkuMiUgOTQuNCUsIDg4LjglIDk0LjclLCA4OC4zJSA5NSUsIDg3LjklIDk1LjMlLCA4Ny40JSA5NS41JSwgODYuOSUgOTUuOCUsIDg2LjQlIDk2JSwgODUuOSUgOTYuMyUsIDg1LjQlIDk2LjUlLCA4NC44JSA5Ni44JSwgODQuMyUgOTclLCA4My43JSA5Ny4yJSwgODMuMSUgOTcuNCUsIDgyLjUlIDk3LjYlLCA4MS45JSA5Ny44JSwgODEuMyUgOTglLCA4MC42JSA5OC4xJSwgNzkuOSUgOTguMyUsIDc5LjIlIDk4LjUlLCA3OC41JSA5OC42JSwgNzcuOCUgOTguOCUsIDc3JSA5OC45JSwgNzYuMyUgOTklLCA3NS40JSA5OS4xJSwgNzQuNiUgOTkuMyUsIDczLjclIDk5LjQlLCA3Mi44JSA5OS41JSwgNzEuOCUgOTkuNSUsIDcwLjglIDk5LjYlLCA2OS44JSA5OS43JSwgNjguNyUgOTkuOCUsIDY3LjUlIDk5LjglLCA2Ni4yJSA5OS45JSwgNjQuOCUgOTkuOSUsIDYzLjIlIDk5LjklLCA2MS40JSAxMDAlLCA1OS4zJSAxMDAlLCA1Ni42JSAxMDAlLCA1MCUgMTAwJSwgNDMuNCUgMTAwJSwgNDAuNyUgMTAwJSwgMzguNiUgMTAwJSwgMzYuOCUgOTkuOSUsIDM1LjIlIDk5LjklLCAzMy44JSA5OS45JSwgMzIuNSUgOTkuOCUsIDMxLjMlIDk5LjglLCAzMC4yJSA5OS43JSwgMjkuMiUgOTkuNiUsIDI4LjIlIDk5LjUlLCAyNy4yJSA5OS41JSwgMjYuMyUgOTkuNCUsIDI1LjQlIDk5LjMlLCAyNC42JSA5OS4xJSwgMjMuNyUgOTklLCAyMyUgOTguOSUsIDIyLjIlIDk4LjglLCAyMS41JSA5OC42JSwgMjAuOCUgOTguNSUsIDIwLjElIDk4LjMlLCAxOS40JSA5OC4xJSwgMTguNyUgOTglLCAxOC4xJSA5Ny44JSwgMTcuNSUgOTcuNiUsIDE2LjklIDk3LjQlLCAxNi4zJSA5Ny4yJSwgMTUuNyUgOTclLCAxNS4yJSA5Ni44JSwgMTQuNiUgOTYuNSUsIDE0LjElIDk2LjMlLCAxMy42JSA5NiUsIDEzLjElIDk1LjglLCAxMi42JSA5NS41JSwgMTIuMSUgOTUuMyUsIDExLjclIDk1JSwgMTEuMiUgOTQuNyUsIDEwLjglIDk0LjQlLCAxMC4zJSA5NC4xJSwgOS45JSA5My44JSwgOS41JSA5My40JSwgOS4xJSA5My4xJSwgOC43JSA5Mi44JSwgOC4zJSA5Mi40JSwgOCUgOTIlLCA3LjYlIDkxLjclLCA3LjIlIDkxLjMlLCA2LjklIDkwLjklLCA2LjYlIDkwLjUlLCA2LjIlIDkwLjElLCA1LjklIDg5LjclLCA1LjYlIDg5LjIlLCA1LjMlIDg4LjglLCA1JSA4OC4zJSwgNC43JSA4Ny45JSwgNC41JSA4Ny40JSwgNC4yJSA4Ni45JSwgNCUgODYuNCUsIDMuNyUgODUuOSUsIDMuNSUgODUuNCUsIDMuMiUgODQuOCUsIDMlIDg0LjMlLCAyLjglIDgzLjclLCAyLjYlIDgzLjElLCAyLjQlIDgyLjUlLCAyLjIlIDgxLjklLCAyJSA4MS4zJSwgMS45JSA4MC42JSwgMS43JSA3OS45JSwgMS41JSA3OS4yJSwgMS40JSA3OC41JSwgMS4yJSA3Ny44JSwgMS4xJSA3NyUsIDElIDc2LjMlLCAwLjklIDc1LjQlLCAwLjclIDc0LjYlLCAwLjYlIDczLjclLCAwLjUlIDcyLjglLCAwLjUlIDcxLjglLCAwLjQlIDcwLjglLCAwLjMlIDY5LjglLCAwLjIlIDY4LjclLCAwLjIlIDY3LjUlLCAwLjElIDY2LjIlLCAwLjElIDY0LjglLCAwLjElIDYzLjIlLCAwJSA2MS40JSwgMCUgNTkuMyUsIDAlIDU2LjYlLCAwJSA1MCUsIDAlIDQzLjQlLCAwJSA0MC43JSwgMCUgMzguNiUsIDAuMSUgMzYuOCUsIDAuMSUgMzUuMiUsIDAuMSUgMzMuOCUsIDAuMiUgMzIuNSUsIDAuMiUgMzEuMyUsIDAuMyUgMzAuMiUsIDAuNCUgMjkuMiUsIDAuNSUgMjguMiUsIDAuNSUgMjcuMiUsIDAuNiUgMjYuMyUsIDAuNyUgMjUuNCUsIDAuOSUgMjQuNiUsIDElIDIzLjclLCAxLjElIDIzJSwgMS4yJSAyMi4yJSwgMS40JSAyMS41JSwgMS41JSAyMC44JSwgMS43JSAyMC4xJSwgMS45JSAxOS40JSwgMiUgMTguNyUsIDIuMiUgMTguMSUsIDIuNCUgMTcuNSUsIDIuNiUgMTYuOSUsIDIuOCUgMTYuMyUsIDMlIDE1LjclLCAzLjIlIDE1LjIlLCAzLjUlIDE0LjYlLCAzLjclIDE0LjElLCA0JSAxMy42JSwgNC4yJSAxMy4xJSwgNC41JSAxMi42JSwgNC43JSAxMi4xJSwgNSUgMTEuNyUsIDUuMyUgMTEuMiUsIDUuNiUgMTAuOCUsIDUuOSUgMTAuMyUsIDYuMiUgOS45JSwgNi42JSA5LjUlLCA2LjklIDkuMSUsIDcuMiUgOC43JSwgNy42JSA4LjMlLCA4JSA4JSwgOC4zJSA3LjYlLCA4LjclIDcuMiUsIDkuMSUgNi45JSwgOS41JSA2LjYlLCA5LjklIDYuMiUsIDEwLjMlIDUuOSUsIDEwLjglIDUuNiUsIDExLjIlIDUuMyUsIDExLjclIDUlLCAxMi4xJSA0LjclLCAxMi42JSA0LjUlLCAxMy4xJSA0LjIlLCAxMy42JSA0JSwgMTQuMSUgMy43JSwgMTQuNiUgMy41JSwgMTUuMiUgMy4yJSwgMTUuNyUgMyUsIDE2LjMlIDIuOCUsIDE2LjklIDIuNiUsIDE3LjUlIDIuNCUsIDE4LjElIDIuMiUsIDE4LjclIDIlLCAxOS40JSAxLjklLCAyMC4xJSAxLjclLCAyMC44JSAxLjUlLCAyMS41JSAxLjQlLCAyMi4yJSAxLjIlLCAyMyUgMS4xJSwgMjMuNyUgMSUsIDI0LjYlIDAuOSUsIDI1LjQlIDAuNyUsIDI2LjMlIDAuNiUsIDI3LjIlIDAuNSUsIDI4LjIlIDAuNSUsIDI5LjIlIDAuNCUsIDMwLjIlIDAuMyUsIDMxLjMlIDAuMiUsIDMyLjUlIDAuMiUsIDMzLjglIDAuMSUsIDM1LjIlIDAuMSUsIDM2LjglIDAuMSUsIDM4LjYlIDAlLCA0MC43JSAwJSwgNDMuNCUgMCUsIDUwJSAwJSwgNTYuNiUgMCUsIDU5LjMlIDAlLCA2MS40JSAwJSwgNjMuMiUgMC4xJSwgNjQuOCUgMC4xJSwgNjYuMiUgMC4xJSwgNjcuNSUgMC4yJSwgNjguNyUgMC4yJSwgNjkuOCUgMC4zJSwgNzAuOCUgMC40JSwgNzEuOCUgMC41JSwgNzIuOCUgMC41JSwgNzMuNyUgMC42JSwgNzQuNiUgMC43JSwgNzUuNCUgMC45JSwgNzYuMyUgMSUsIDc3JSAxLjElLCA3Ny44JSAxLjIlLCA3OC41JSAxLjQlLCA3OS4yJSAxLjUlLCA3OS45JSAxLjclLCA4MC42JSAxLjklLCA4MS4zJSAyJSwgODEuOSUgMi4yJSwgODIuNSUgMi40JSwgODMuMSUgMi42JSwgODMuNyUgMi44JSwgODQuMyUgMyUsIDg0LjglIDMuMiUsIDg1LjQlIDMuNSUsIDg1LjklIDMuNyUsIDg2LjQlIDQlLCA4Ni45JSA0LjIlLCA4Ny40JSA0LjUlLCA4Ny45JSA0LjclLCA4OC4zJSA1JSwgODguOCUgNS4zJSwgODkuMiUgNS42JSwgODkuNyUgNS45JSwgOTAuMSUgNi4yJSwgOTAuNSUgNi42JSwgOTAuOSUgNi45JSwgOTEuMyUgNy4yJSwgOTEuNyUgNy42JSwgOTIlIDglLCA5Mi40JSA4LjMlLCA5Mi44JSA4LjclLCA5My4xJSA5LjElLCA5My40JSA5LjUlLCA5My44JSA5LjklLCA5NC4xJSAxMC4zJSwgOTQuNCUgMTAuOCUsIDk0LjclIDExLjIlLCA5NSUgMTEuNyUsIDk1LjMlIDEyLjElLCA5NS41JSAxMi42JSwgOTUuOCUgMTMuMSUsIDk2JSAxMy42JSwgOTYuMyUgMTQuMSUsIDk2LjUlIDE0LjYlLCA5Ni44JSAxNS4yJSwgOTclIDE1LjclLCA5Ny4yJSAxNi4zJSwgOTcuNCUgMTYuOSUsIDk3LjYlIDE3LjUlLCA5Ny44JSAxOC4xJSwgOTglIDE4LjclLCA5OC4xJSAxOS40JSwgOTguMyUgMjAuMSUsIDk4LjUlIDIwLjglLCA5OC42JSAyMS41JSwgOTguOCUgMjIuMiUsIDk4LjklIDIzJSwgOTklIDIzLjclLCA5OS4xJSAyNC42JSwgOTkuMyUgMjUuNCUsIDk5LjQlIDI2LjMlLCA5OS41JSAyNy4yJSwgOTkuNSUgMjguMiUsIDk5LjYlIDI5LjIlLCA5OS43JSAzMC4yJSwgOTkuOCUgMzEuMyUsIDk5LjglIDMyLjUlLCA5OS45JSAzMy44JSwgOTkuOSUgMzUuMiUsIDk5LjklIDM2LjglLCAxMDAlIDM4LjYlLCAxMDAlIDQwLjclLCAxMDAlIDQzLjQlKTtcbn1cblxuLmljb24tY29sbGFwc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IHZhcigtLW5hdi1pY29uTW9kZS13aWR0aCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpbmstY2F0ZWdvcnkge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbn1cbi5saW5rLWNhdGVnb3J5IC5pY29uLmljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxpbmstY2F0ZWdvcnkgLmxpbmstY29udGVudCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGhlaWdodDogMWVtO1xuICBwYWRkaW5nOiAwO1xufVxuLmxpbmstY2F0ZWdvcnkgLmxpbmstY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5uby1iZyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5oaWRlLWxpbmstY2F0ZWdvcnkubGluay1jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPerfectNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-perfect-nav',
                templateUrl: './ng-perfect-nav.component.html',
                styleUrls: ['./ng-perfect-nav.component.scss'],
            }]
    }], null, { links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hoverReveal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], border: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], squircle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCategories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], caption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], avtar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], likeNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], shareNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], commentNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ngx-perfect-nav/ngx-perfect-nav.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ngx-perfect-nav/ngx-perfect-nav.module.ts ***!
  \***********************************************************/
/*! exports provided: NgxPerfectNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPerfectNavModule", function() { return NgxPerfectNavModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-perfect-nav/ng-perfect-nav.component */ "./src/app/ngx-perfect-nav/ng-perfect-nav/ng-perfect-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NgxPerfectNavModule {
    static forRoot() {
        return { ngModule: NgxPerfectNavModule, providers: [] };
    }
}
NgxPerfectNavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxPerfectNavModule });
NgxPerfectNavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxPerfectNavModule_Factory(t) { return new (t || NgxPerfectNavModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxPerfectNavModule, { declarations: [_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__["NgPerfectNavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__["NgPerfectNavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPerfectNavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                declarations: [_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__["NgPerfectNavComponent"]],
                exports: [_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__["NgPerfectNavComponent"]],
                entryComponents: [_ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_2__["NgPerfectNavComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ngx-perfect-nav/public_api.ts":
/*!***********************************************!*\
  !*** ./src/app/ngx-perfect-nav/public_api.ts ***!
  \***********************************************/
/*! exports provided: NgPerfectNavComponent, NgxPerfectNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-perfect-nav/ng-perfect-nav.component */ "./src/app/ngx-perfect-nav/ng-perfect-nav/ng-perfect-nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgPerfectNavComponent", function() { return _ng_perfect_nav_ng_perfect_nav_component__WEBPACK_IMPORTED_MODULE_0__["NgPerfectNavComponent"]; });

/* harmony import */ var _ngx_perfect_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-perfect-nav.module */ "./src/app/ngx-perfect-nav/ngx-perfect-nav.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxPerfectNavModule", function() { return _ngx_perfect_nav_module__WEBPACK_IMPORTED_MODULE_1__["NgxPerfectNavModule"]; });





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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arron/Documents/GitHub/perfect-nav/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
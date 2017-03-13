webpackJsonp([1,4],{

/***/ 371:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 371;


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(496);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Yugioh - the card game!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(556),
            styles: [__webpack_require__(550)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__start_game_start_game_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__choose_card_choose_card_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__certainty_certainty_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__show_card_show_card_component__ = __webpack_require__(494);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    { path: 'start-game', component: __WEBPACK_IMPORTED_MODULE_6__start_game_start_game_component__["a" /* StartGameComponent */] },
    { path: 'choose-card', component: __WEBPACK_IMPORTED_MODULE_7__choose_card_choose_card_component__["a" /* ChooseCardComponent */] },
    { path: 'certainty/:index', component: __WEBPACK_IMPORTED_MODULE_8__certainty_certainty_component__["a" /* CertaintyComponent */] },
    { path: 'show-card', component: __WEBPACK_IMPORTED_MODULE_9__show_card_show_card_component__["a" /* ShowCardComponent */] },
    { path: '',
        redirectTo: '/start-game',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__start_game_start_game_component__["a" /* StartGameComponent */],
                __WEBPACK_IMPORTED_MODULE_7__choose_card_choose_card_component__["a" /* ChooseCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__certainty_certainty_component__["a" /* CertaintyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__show_card_show_card_component__["a" /* ShowCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertaintyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertaintyComponent = (function () {
    function CertaintyComponent(router) {
        this.router = router;
    }
    CertaintyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.card = Number(params['index']) + 1;
        });
    };
    CertaintyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-certainty',
            template: __webpack_require__(557),
            styles: [__webpack_require__(551)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], CertaintyComponent);
    return CertaintyComponent;
    var _a;
}());
//# sourceMappingURL=certainty.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChooseCardComponent = (function () {
    function ChooseCardComponent(router) {
        this.router = router;
        this.card = {
            url: "assets/card.jpg"
        };
    }
    ChooseCardComponent.prototype.ngOnInit = function () {
    };
    ChooseCardComponent.prototype.onCardPick = function (index) {
        this.router.navigate(['certainty', index]);
    };
    ChooseCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-choose-card',
            template: __webpack_require__(558),
            styles: [__webpack_require__(552)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], ChooseCardComponent);
    return ChooseCardComponent;
    var _a;
}());
//# sourceMappingURL=choose-card.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowCardComponent = (function () {
    function ShowCardComponent() {
        this.trapActivateState = "visible";
        this.trapCardState = "hidden";
        this.trapActivateDisplay = "block";
        this.trapCardDisplay = "none";
    }
    ShowCardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(4000).subscribe(function () {
            _this.trapActivateState = "hidden";
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(4500).subscribe(function () {
            _this.trapActivateDisplay = "none";
            _this.trapCardDisplay = "block";
            _this.trapCardState = "visible";
        });
    };
    ShowCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-show-card',
            template: __webpack_require__(559),
            styles: [__webpack_require__(553)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])("visibility", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("visible", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({
                        opacity: 1,
                        display: "block"
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("hidden", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({
                        opacity: 0
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("visible => hidden", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])("500ms ease-in")),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("hidden => visible", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])("500ms ease-out"))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])("display", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("none", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ display: "none" })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("block", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ display: "block" }))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowCardComponent);
    return ShowCardComponent;
}());
//# sourceMappingURL=show-card.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartGameComponent = (function () {
    function StartGameComponent(router) {
        this.router = router;
    }
    StartGameComponent.prototype.startGame = function () {
        this.router.navigate(['choose-card']);
    };
    StartGameComponent.prototype.ngOnInit = function () {
    };
    StartGameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-start-game',
            template: __webpack_require__(560),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], StartGameComponent);
    return StartGameComponent;
    var _a;
}());
//# sourceMappingURL=start-game.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "#app-container{\r\n    max-width:700px;\r\n    margin:0 auto;\r\n    padding:20px;\r\n    margin-top: 20px;\r\n    margin-bottom:20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".row {\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.col {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    max-width: 100%;\r\n}\r\n.row:after{\r\n    display:table;\r\n    clear:both;\r\n    content:\" \";\r\n}\r\nimg {\r\n    max-width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "img {\r\n    max-width: 100%;\r\n}\r\na {\r\n    color:#BF713E\r\n}\r\n#trap-card{\r\n    display:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">\r\n  <h1>\r\n    {{title}}\r\n  </h1>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  You have picked card number <span>{{card}}</span>. Are you sure?\r\n</h3>\r\n<div class=\"row center-xs middle-xs\">\r\n  <div class=\"col-xs-2 col-sm\">\r\n    <button routerLink=\"/choose-card\">No, back</button>\r\n  </div>\r\n  <div class=\"col-xs\">\r\n   <img src=\"assets/hand-over-card.png\">\r\n  </div>\r\n  <div class=\"col-xs-2 col-sm\">\r\n    <button routerLink=\"/show-card\">Yeah, go ahead</button>\r\n  </div>\r\n</div>  \r\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<h2>Now pick a card! Any...</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-4\" *ngFor=\"let i of [1,2,3];let index = index\">\r\n    <img [src]=\"card.url\" (click)=\"onCardPick(index)\" alt=\"\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"row center-xs\">\r\n  <div class=\"col-xs-10 col-sm-8 col-md-6\">\r\n    <div id=\"trap-activate\" [@visibility] = \"trapActivateState\">\r\n      <h1  [@display] = \"trapActivateDisplay\">I activate my trap card</h1>\r\n      <img  [@display] = \"trapActivateDisplay\" src=\"assets/trap-activate.jpg\">\r\n    </div>\r\n    <div id=\"trap-card\" [@display] = \"trapCardDisplay\" >\r\n      <img src=\"assets/trap.jpg\">\r\n      <h1 >Send your nudes <a href=\"mailto:ngp130895@gmail.com?subject=Send nudes\">here</a></h1>\r\n      <button  routerLink=\"choose-card\">Play again</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "  <h4>\r\n    Are you ready to play this game?\r\n  </h4>\r\n\r\n<button (click)=\"startGame()\" >Start game</button>\r\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(372);


/***/ })

},[828]);
//# sourceMappingURL=main.bundle.js.map
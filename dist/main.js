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
		var e = new Error('Cannot find module "' + req + '".');
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-game/new-game.component */ "./src/app/new-game/new-game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'new-game',
        component: _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__["NewGameComponent"],
        data: {}
    },
    {
        path: '',
        redirectTo: '/new-game',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <app-navbar></app-navbar>\n\n  <router-outlet></router-outlet>\n\n  <app-footer></app-footer>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _new_game_new_game_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-game/new-game.module */ "./src/app/new-game/new-game.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _new_game_game_states_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-game/game-states/in-memory-data.service */ "./src/app/new-game/game-states/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_new_game_game_states_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], { dataEncapsulation: false }),
                _new_game_new_game_module__WEBPACK_IMPORTED_MODULE_4__["NewGameModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/core/footer.component.ts");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/core/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            providers: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer.component.ts":
/*!******************************************!*\
  !*** ./src/app/core/footer.component.ts ***!
  \******************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: "\n    <nav class=\"navbar fixed-bottom justify-content-center\">\n      <span class=\"navbar-brand\">\u00A9 2016-2018 Thomas Rizzo</span>\n    </nav>\n  ",
            styles: ["\n    .navbar {\n      background: black;\n      color: red;\n      font-family: 'Press Start 2P';\n    }"
            ]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar.component.ts":
/*!******************************************!*\
  !*** ./src/app/core/navbar.component.ts ***!
  \******************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: "\n    <nav class=\"navbar fixed-top justify-content-center\">\n      <span class=\"navbar-brand mb-0 h1\">The Flame Templar Saga</span>\n    </nav>\n  ",
            styles: ["\n    .navbar {\n      background: black;\n      color: red;\n      font-family: 'Press Start 2P'\n    }\n    "]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/new-game/game-states/boot.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-game/game-states/boot.component.ts ***!
  \********************************************************/
/*! exports provided: Boot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boot", function() { return Boot; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Boot = /** @class */ (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super.call(this) || this;
    }
    Boot.prototype.init = function () {
        this.game.input.maxpointers = 1;
        this.game.stage.disableVisibityChange = true;
        this.game.scale.scaleMode = _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["ScaleManager"].aspectRatio;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.setShowAll();
        this.game.scale.refresh();
    };
    Boot.prototype.preload = function () {
        this.game.load.image('preloaderBar', '../../../assets/images/world/load-bar.png');
    };
    Boot.prototype.create = function () {
        this.game.state.start('Preloader');
    };
    Boot = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [])
    ], Boot);
    return Boot;
}(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["State"]));



/***/ }),

/***/ "./src/app/new-game/game-states/directions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/new-game/game-states/directions.component.ts ***!
  \**************************************************************/
/*! exports provided: Directions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directions", function() { return Directions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Directions = /** @class */ (function (_super) {
    __extends(Directions, _super);
    function Directions() {
        return _super.call(this) || this;
    }
    Directions.prototype.create = function () {
        this.game.backgroundMusic = this.game.add.audio('menu');
        this.game.backgroundMusic.loop = true;
        this.game.backgroundMusic.play();
        this.game.select = this.game.add.audio("pressEnter");
        this.game.style = {
            font: "28px Press Start 2P",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.game.style2 = {
            font: "28px Press Start 2P",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.text4 = this.game.add.text(210, 90, "HOW TO PLAY", this.game.style2);
        this.text5 = this.game.add.text(85, 190, '   A, W, D, = Move\nSpace bar = Fireball\n\n  Collect keys to \n  escape the castle.', this.game.style2);
        this.text6 = this.game.add.text(85, 470, "PRESS ENTER TO BEGIN", this.game.style2);
        this.enterKey = this.game.input.keyboard.addKey(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].ENTER);
    };
    Directions.prototype.update = function () {
        this.game.scale.setShowAll();
        this.game.scale.refresh();
        if (this.enterKey.isDown) {
            this.game.select.play();
            this.game.backgroundMusic.loop = false;
            this.game.backgroundMusic.stop();
            this.game.state.start('Level1');
        }
    };
    Directions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [])
    ], Directions);
    return Directions;
}(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["State"]));



/***/ }),

/***/ "./src/app/new-game/game-states/endgame.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/new-game/game-states/endgame.component.ts ***!
  \***********************************************************/
/*! exports provided: Endgame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endgame", function() { return Endgame; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score.service */ "./src/app/new-game/score.service.ts");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Endgame = /** @class */ (function (_super) {
    __extends(Endgame, _super);
    function Endgame(scoreService) {
        var _this = _super.call(this) || this;
        _this.scoreService = scoreService;
        _this.scores = [];
        _this.name = "";
        _this.id = 10;
        return _this;
    }
    // ngOnInit() {
    //   window.my = window.my || {};
    //   window.my.namespace = window.my.namespace || {};
    // }
    Endgame.prototype.create = function () {
        this.game.backgroundMusic = this.game.add.audio('gameover');
        this.game.backgroundMusic.loop = true;
        this.game.backgroundMusic.play();
        this.game.select = this.game.add.audio("pressEnter");
        this.game.style = {
            font: "28px Press Start 2P",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.game.text7 = this.game.add.text(220, 100, "GAME OVER \n\n" + this.name, this.game.style);
        this.game.text8 = this.game.add.text(100, 300, "Your final Score is \n       " + this.game.score, this.game.style);
        this.game.text9 = this.game.add.text(210, 475, "PRESS ENTER", this.game.style);
        function keyPress(event) {
            this.game.text7.destroy();
            if (event.keyCode === 8) {
                //BACKSPACE KEY
                this.name = this.name.slice(0, this.name.length - 1);
            }
            else if (event.keyCode === 16) {
                //SHIFT KEYS
            }
            else if (event.keyCode === 13) {
                // ENTER KEY
                console.log(this.name + " " + this.game.score + " " + window.my.namespace.addScore);
                window.my.namespace.addScore(this.id, this.name, this.game.score);
                this.game.input.keyboard.onDownCallback = null;
                this.game.select.play();
                this.game.backgroundMusic.loop = false;
                this.game.backgroundMusic.stop();
                this.name = "";
                this.score = 0;
                this.game.mana = 10;
                this.game.state.start('Boot', true, true);
            }
            else {
                this.name += event.key;
            }
            this.game.text7 = this.game.add.text(220, 100, "GAME OVER \n\n  " + this.name, this.game.style);
        }
        this.game.input.keyboard.addCallbacks(this, keyPress);
    };
    Endgame.prototype.update = function () {
        this.game.scale.setShowAll();
        this.game.scale.refresh();
        this.game.playerInfo = {
            name: this.name,
            score: this.game.score
        };
    };
    Endgame = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"]])
    ], Endgame);
    return Endgame;
}(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_2__["State"]));



/***/ }),

/***/ "./src/app/new-game/game-states/in-memory-data.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/new-game/game-states/in-memory-data.service.ts ***!
  \****************************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var scores = [
            { id: 0, name: 'AAA', score: 3500 },
            { id: 1, name: 'BBB', score: 3000 },
            { id: 2, name: 'CCC', score: 2345 },
            { id: 3, name: 'DDD', score: 1234 },
            { id: 4, name: 'EEE', score: 100 },
        ];
        return { scores: scores };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/new-game/game-states/level-1.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/new-game/game-states/level-1.component.ts ***!
  \***********************************************************/
/*! exports provided: Level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level1", function() { return Level1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Level1 = /** @class */ (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        var _this = _super.call(this) || this;
        _this.AngryPlant = function (index, game, x, y) {
            this.angryPlant = game.add.sprite(x, y, 'angry-plant');
            this.angryPlant.anchor.setTo(0.5, 0.5);
            this.angryPlant.name = index.toString();
            game.physics.enable(this.angryPlant, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.angryPlant.body.immovable = true;
            this.angryPlant.body.collideWorldBounds = true;
            this.angryPlant.allowGravity = false;
            this.angryPlantTween = game.add.tween(this.angryPlant).to({
                x: this.angryPlant.x + 10,
            }, 0, 'Linear', true, 0, -1, true);
            this.angryPlant.body.setSize(this.angryPlant.width * 1, this.angryPlant.height * 1);
            this.angryPlant.animations.add('writhe', [0, 1, 2, 3], 7, true);
            this.angryPlant.animations.play('writhe', 7, true);
        };
        _this.Enemybat = function (index, game, x, y) {
            this.bat = game.add.sprite(x, y, 'bat');
            this.bat.anchor.setTo(0.5, 0.5);
            this.bat.name = index.toString();
            game.physics.enable(this.bat, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.bat.body.immovable = true;
            this.bat.body.collideWorldBounds = true;
            this.bat.body.allowGravity = false;
            this.batTween = game.add.tween(this.bat).to({
                y: this.bat.y + 100
            }, 1000, 'Linear', true, 0, -1, true);
            this.bat.body.setSize(this.bat.width * 1 / 4, this.bat.height * 1 / 2);
            this.bat.animations.add('fly', [0, 1, 2, 3, 4, 5], 7, true);
            this.bat.animations.play('fly', 7, true);
        };
        _this.BlueGemItem = function (index, game, x, y) {
            this.blueGem = game.add.sprite(x, y, 'blue-gem');
            this.blueGem.name = index.toString();
            game.physics.enable(this.blueGem, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.blueGem.body.immovable = false;
            this.blueGem.body.collideWorldBounds = true;
            this.blueGem.body.allowGravity = false;
            this.blueGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
            this.blueGem.animations.play('shimmer', 5, true);
        };
        _this.RedGemItem = function (index, game, x, y) {
            this.redGem = game.add.sprite(x, y, 'red-gem');
            this.redGem.name = index.toString();
            game.physics.enable(this.redGem, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.redGem.body.immovable = false;
            this.redGem.body.collideWorldBounds = true;
            this.redGem.body.allowGravity = false;
            this.redGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
            this.redGem.animations.play('shimmer', 5, true);
        };
        _this.GoldKeyItem = function (index, game, x, y) {
            this.goldKey = game.add.sprite(x, y, 'gold-key');
            this.goldKey.name = index.toString();
            game.physics.enable(this.goldKey, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.goldKey.body.immovable = false;
            this.goldKey.body.collideWorldBounds = true;
            this.goldKey.body.allowGravity = false;
            this.goldKey.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
            this.goldKey.animations.play('shimmer', 5, true);
        };
        _this.MagicBeakerItem = function (index, game, x, y) {
            this.magicBeaker = game.add.sprite(x, y, 'magic-beaker');
            this.magicBeaker.name = index.toString();
            game.physics.enable(this.magicBeaker, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.magicBeaker.body.immovable = false;
            this.magicBeaker.body.collideWorldBounds = true;
            this.magicBeaker.body.allowGravity = false;
            this.magicBeaker.animations.add('shimmer', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true);
            this.magicBeaker.animations.play('shimmer', 5, true);
        };
        _this.DeathSpikes = function (index, game, x, y) {
            this.deathSpikes = game.add.sprite(x, y, 'spikes');
            this.deathSpikes.name = index.toString();
            game.physics.enable(this.deathSpikes, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE);
            this.deathSpikes.body.immovable = false;
            this.deathSpikes.body.collideWorldBounds = true;
            this.deathSpikes.body.allowGravity = false;
        };
        _this.controls = {};
        _this.facing = 'right';
        _this.jumpTimer = 0;
        _this.playerSpeed = 400;
        _this.shootTime = 0;
        _this.scaleRatio = window.devicePixelRatio / 3;
        return _this;
    }
    Level1.prototype.create = function () {
        this.game.health = 10;
        this.game.key = 0;
        this.game.mana = 10;
        this.game.score = 0;
        this.game.camera.flash('#000000');
        this.game.background = this.game.add.image(0, 0, "Level_Bg");
        this.game.background.width = this.game.width;
        this.game.background.height = this.game.height;
        this.game.background.fixedToCamera = true;
        this.game.shoot = this.game.add.audio("fireball-sound");
        this.game.jumpSound = this.game.add.audio("jump-sound");
        this.game.select = this.game.add.audio("menu-select");
        this.game.pickupItem = this.game.add.audio("pickup-item");
        this.game.enemyIgnite = this.game.add.audio("enemy-ignite");
        this.game.deathScream = this.game.add.audio("death-scream");
        this.game.physics.arcade.gravity.y = 1400;
        this.game.backgroundMusic = this.game.add.audio('level1');
        this.game.backgroundMusic.loop = true;
        this.game.backgroundMusic.play();
        this.respawn = this.game.add.group();
        this.map = this.game.add.tilemap('myMap');
        this.map.addTilesetImage('tileset', 'reducedtileset');
        this.game.backgroundLayer = this.map.createLayer("Background");
        this.game.blockedLayer = this.map.createLayer("Collision");
        // this.game.objectLayer = this.map.createLayer("Object Layer 1")
        this.game.backgroundLayer.resizeWorld();
        this.map.setCollisionBetween(1, 2000, true, 'Collision');
        // this.map.createFromObjects('Object Layer 1', 1, '', 0, true, false, this.respawn); //spawn point
        this.game.player = this.game.add.sprite(10, 515, 'player');
        this.game.player.anchor.setTo(0.5, 0.5);
        // spawn function is invoked on player object here
        this.game.player.animations.add('idle', [8, 9], 2, true);
        this.game.player.animations.add('jump', [15], 1, true);
        this.game.player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        this.game.player.animations.add('shoot-fireball-right', [10, 11, 12, 13, 14], 20, false);
        this.game.player.animations.add('shoot-fireball-left', [10, 11, 12, 13, 14], 20, false);
        this.game.player.animations.add('damage', [16, 17, 18, 19, 20, 21], 10, false);
        this.game.camera.follow(this.game.player);
        this.game.physics.arcade.enable(this.game.player);
        this.game.player.body.collideWorldBounds = true;
        this.game.player.body.setSize(this.game.player.width * 2 / 3, this.game.player.height * 95 / 100);
        this.game.controls = {
            right: this.game.input.keyboard.addKey(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].D),
            left: this.game.input.keyboard.addKey(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].A),
            up: this.game.input.keyboard.addKey(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].W),
            shoot: this.game.input.keyboard.addKey(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].SPACEBAR)
        };
        this.game.blue0 = new this.BlueGemItem(0, this.game, this.game.player.x + 100, this.game.player.y);
        this.game.blue1 = new this.BlueGemItem(0, this.game, this.game.player.x + 215, this.game.player.y - 50);
        this.game.blue2 = new this.BlueGemItem(0, this.game, this.game.player.x + 725, this.game.player.y - 50);
        this.game.blue3 = new this.BlueGemItem(0, this.game, this.game.player.x + 425, this.game.player.y + 400);
        this.game.blue4 = new this.BlueGemItem(0, this.game, this.game.player.x + 1550, this.game.player.y + -70);
        this.game.blue5 = new this.BlueGemItem(0, this.game, this.game.player.x + 2950, this.game.player.y + 275);
        this.game.blue6 = new this.BlueGemItem(0, this.game, this.game.player.x + 2165, this.game.player.y + 175);
        this.game.blue7 = new this.BlueGemItem(0, this.game, this.game.player.x + 1350, this.game.player.y + 300);
        this.game.red0 = new this.RedGemItem(0, this.game, this.game.player.x + 0, this.game.player.y + 800);
        this.game.red1 = new this.RedGemItem(0, this.game, this.game.player.x + 2492, this.game.player.y + -330);
        this.game.red2 = new this.RedGemItem(0, this.game, this.game.player.x + 2525, this.game.player.y + 175);
        this.game.key0 = new this.GoldKeyItem(0, this.game, this.game.player.x + 0, this.game.player.y + 400);
        this.game.key1 = new this.GoldKeyItem(0, this.game, this.game.player.x + 2950, this.game.player.y + 650);
        this.game.magic0 = new this.MagicBeakerItem(0, this.game, this.game.player.x + 3046, this.game.player.y + -94);
        this.game.enemy0 = new this.Enemybat(0, this.game, this.game.player.x + 260, this.game.player.y + 350);
        this.game.enemy1 = new this.Enemybat(0, this.game, this.game.player.x + 475, this.game.player.y - 75);
        this.game.enemy2 = new this.Enemybat(0, this.game, this.game.player.x + 725, this.game.player.y - 75);
        this.game.enemy3 = new this.Enemybat(0, this.game, this.game.player.x + 475, this.game.player.y + 200);
        this.game.enemy4 = new this.Enemybat(0, this.game, this.game.player.x + 2500, this.game.player.y - 100);
        this.game.enemy5 = new this.Enemybat(0, this.game, this.game.player.x + 2700, this.game.player.y - 125);
        this.game.enemy6 = new this.Enemybat(0, this.game, this.game.player.x + 2900, this.game.player.y - 100);
        this.game.enemy13 = new this.Enemybat(0, this.game, this.game.player.x + 2300, this.game.player.y - 125);
        this.game.enemy14 = new this.Enemybat(0, this.game, this.game.player.x + 2100, this.game.player.y - 100);
        this.game.enemy7 = new this.AngryPlant(0, this.game, this.game.player.x + 15, this.game.player.y + 415);
        this.game.enemy8 = new this.AngryPlant(0, this.game, this.game.player.x + 500, this.game.player.y + 800);
        this.game.enemy9 = new this.AngryPlant(0, this.game, this.game.player.x + 300, this.game.player.y + 800);
        this.game.enemy10 = new this.AngryPlant(0, this.game, this.game.player.x + 100, this.game.player.y + 800);
        this.game.enemy11 = new this.AngryPlant(0, this.game, this.game.player.x + 2545, this.game.player.y + 280);
        this.game.enemy12 = new this.AngryPlant(0, this.game, this.game.player.x + 2700, this.game.player.y - 350);
        this.game.door = this.game.add.sprite(this.game.player.x + 1410, this.game.player.y + 610, 'door');
        this.game.physics.arcade.enable(this.game.door);
        this.game.door.body.allowGravity = false;
        this.game.door.body.immovable = true;
        this.game.spikes0 = new this.DeathSpikes(0, this.game, this.game.player.x + 2408, this.game.player.y + 714);
        this.game.spikes1 = new this.DeathSpikes(0, this.game, this.game.player.x + 2472, this.game.player.y + 714);
        this.game.spikes2 = new this.DeathSpikes(0, this.game, this.game.player.x + 2536, this.game.player.y + 714);
        this.game.spikes3 = new this.DeathSpikes(0, this.game, this.game.player.x + 2600, this.game.player.y + 714);
        this.game.spikes4 = new this.DeathSpikes(0, this.game, this.game.player.x + 770, this.game.player.y + 0);
        this.game.spikes5 = new this.DeathSpikes(0, this.game, this.game.player.x + 834, this.game.player.y + 0);
        this.game.spikes6 = new this.DeathSpikes(0, this.game, this.game.player.x + 898, this.game.player.y + 0);
        this.game.spikes7 = new this.DeathSpikes(0, this.game, this.game.player.x + 962, this.game.player.y + 0);
        this.game.spikes8 = new this.DeathSpikes(0, this.game, this.game.player.x + 1026, this.game.player.y + 0);
        this.game.spikes8 = new this.DeathSpikes(0, this.game, this.game.player.x + 1090, this.game.player.y + 0);
        this.game.spikes9 = new this.DeathSpikes(0, this.game, this.game.player.x + 1154, this.game.player.y + 0);
        this.game.fireballsRight = this.game.add.group();
        this.game.fireballsRight.enableBody = true;
        this.game.fireballsRight.physicsBodyType = _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE;
        this.game.fireballsRight.createMultiple(20, 'fire-right');
        this.game.fireballsRight.setAll('anchor.x', 0.5);
        this.game.fireballsRight.setAll('anchor.y', 0.5);
        this.game.fireballsRight.setAll('outOfBoundsKill', true);
        this.game.fireballsRight.setAll('checkWorldBounds', true);
        this.game.fireballsRight.setAll('body.allowGravity', false);
        this.game.fireballsRight.setAll('body.setSize', this.game.fireballsRight.width * 1 / 2, this.game.fireballsRight.height * 1 / 2);
        this.game.fireballsRight.callAll('animations.add', 'animations', 'fire-right', [0, 1, 2, 3, 4], 5, true);
        this.game.fireballsRight.callAll('play', null, 'fireball-sound');
        this.game.fireballsLeft = this.game.add.group();
        this.game.fireballsLeft.enableBody = true;
        this.game.fireballsLeft.physicsBodyType = _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Physics"].ARCADE;
        this.game.fireballsLeft.createMultiple(20, 'fire-left');
        this.game.fireballsLeft.setAll('anchor.x', 0.5);
        this.game.fireballsLeft.setAll('anchor.y', 0.5);
        this.game.fireballsLeft.setAll('outOfBoundsKill', true);
        this.game.fireballsLeft.setAll('checkWorldBounds', true);
        this.game.fireballsLeft.setAll('body.allowGravity', false);
        this.game.fireballsLeft.callAll('animations.add', 'animations', 'fire-left', [0, 1, 2, 3, 4], 5, true);
        this.game.fireballsLeft.callAll('play', null, 'fireball-sound');
        this.game.fireballCollisions = this.game.add.group();
        this.game.fireballCollisions.createMultiple(30, 'big-fireball-collision');
        this.game.fireballCollisions.forEach(deathAnimation, this);
        function deathAnimation(enemy) {
            enemy.anchor.x = 0.5;
            enemy.anchor.y = 0.5;
            enemy.animations.add('big-fireball-collision');
        }
        // Player Interface & Information
        this.game.portait = this.game.add.sprite(5, 5, 'portait');
        this.game.portait.scale.x = 0.5;
        this.game.portait.scale.y = 0.5;
        this.game.portait.fixedToCamera = true;
        this.game.text0 = this.game.add.text(this.game.camera.x + 65, this.game.camera.y + 5, "Score: " + this.game.score, {
            font: '20px Press Start 2P',
            fill: '#ffffff',
            align: 'center'
        });
        this.game.text1 = this.game.add.text(this.game.camera.x + 65, this.game.camera.y + 25, "HP:" + this.game.health + " MP:" + this.game.mana, {
            font: '20px Press Start 2P',
            fill: '#ffffff',
            align: 'center'
        });
        this.game.text3 = this.game.add.text(this.game.camera.x + 65, this.game.camera.y + 45, "Keys: " + this.game.key + "/2", {
            font: '20px Press Start 2P',
            fill: '#ffffff',
            align: 'center'
        });
        this.game.text0.fixedToCamera = true;
        this.game.text1.fixedToCamera = true;
        this.game.text2.fixedToCamera = true;
        this.game.text3.fixedToCamera = true;
    };
    Level1.prototype.update = function () {
        this.game.scale.setShowAll();
        this.game.scale.refresh();
        this.game.player.body.velocity.x = 0;
        this.game.physics.arcade
            .collide(this.game.player, this.game.blockedLayer);
        this.game.physics.arcade
            .collide([
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant
        ], this.game.blockedLayer);
        this.game.physics.arcade
            .collide(this.game.player, this.game.door, this.nextLevel, null, this);
        this.game.physics.arcade
            .collide(this.game.player, [
            this.game.blue0.blueGem,
            this.game.blue1.blueGem,
            this.game.blue2.blueGem,
            this.game.blue3.blueGem,
            this.game.blue4.blueGem,
            this.game.blue5.blueGem,
            this.game.blue6.blueGem,
            this.game.blue7.blueGem
        ], this.item100, null, this);
        this.game.physics.arcade
            .collide(this.game.player, [
            this.game.red0.redGem,
            this.game.red1.redGem,
            this.game.red2.redGem
        ], this.item500, null, this);
        this.game.physics.arcade
            .collide(this.game.player, [
            this.game.key0.goldKey,
            this.game.key1.goldKey
        ], this.itemKey, null, this);
        this.game.physics.arcade
            .collide(this.game.player, [
            this.game.magic0.magicBeaker
        ], this.itemMagicBeaker, null, this);
        this.game.physics.arcade
            .collide(this.game.player, [
            this.game.spikes0.deathSpikes,
            this.game.spikes1.deathSpikes,
            this.game.spikes2.deathSpikes,
            this.game.spikes3.deathSpikes,
            this.game.spikes4.deathSpikes,
            this.game.spikes5.deathSpikes,
            this.game.spikes6.deathSpikes,
            this.game.spikes7.deathSpikes,
            this.game.spikes8.deathSpikes,
            this.game.spikes9.deathSpikes
        ], this.deathPit, null, this);
        this.game.physics.arcade
            .collide(this.game.player, [
            this.game.enemy0.bat,
            this.game.enemy1.bat,
            this.game.enemy2.bat,
            this.game.enemy3.bat,
            this.game.enemy4.bat,
            this.game.enemy5.bat,
            this.game.enemy6.bat,
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant,
            this.game.enemy13.bat,
            this.game.enemy14.bat
        ], this.playerDamage);
        this.game.physics.arcade
            .overlap(this.game.fireballsRight, [
            this.game.enemy0.bat,
            this.game.enemy1.bat,
            this.game.enemy2.bat,
            this.game.enemy3.bat,
            this.game.enemy4.bat,
            this.game.enemy5.bat,
            this.game.enemy6.bat,
            this.game.enemy13.bat,
            this.game.enemy14.bat
        ], this.collisionHandler, null, this);
        this.game.physics.arcade
            .overlap(this.game.fireballsLeft, [
            this.game.enemy0.bat,
            this.game.enemy1.bat,
            this.game.enemy2.bat,
            this.game.enemy3.bat,
            this.game.enemy4.bat,
            this.game.enemy5.bat,
            this.game.enemy6.bat,
            this.game.enemy13.bat,
            this.game.enemy14.bat
        ], this.collisionHandler, null, this);
        this.game.physics.arcade
            .overlap(this.game.fireballsLeft, [
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant
        ], this.collisionHandler1, null, this);
        this.game.physics.arcade
            .overlap(this.game.fireballsRight, [
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant
        ], this.collisionHandler1, null, this);
        if (this.game.health <= 0) {
            this.game.deathScream.play();
            this.game.backgroundMusic.mute = true;
            this.game.state.start('Endgame', true, false);
            this.game.key = 0;
            this.game.health = 10;
        }
        if (this.game.controls.right.isDown) {
            if (this.game.player.body.onFloor() || this.game.player.body.touching.down) {
                this.game.player.animations.play('run');
            }
            this.game.player.scale.setTo(1, 1);
            this.game.player.body.velocity.x += this.playerSpeed;
            this.game.facing = 'right';
        }
        if (this.game.controls.left.isDown) {
            if (this.game.player.body.onFloor() || this.game.player.body.touching.down) {
                this.game.player.animations.play('run');
            }
            this.game.player.scale.setTo(-1, 1);
            this.game.player.body.velocity.x -= this.playerSpeed;
            this.game.facing = 'left';
        }
        if (this.game.controls.up.isDown
            && (this.game.player.body.onFloor() || this.game.player.body.touching.down)
            && this.game.time.now > this.jumpTimer) {
            this.game.jumpSound.play();
            this.game.player.body.velocity.y = -625;
            this.game.jumpTimer = this.game.time.now + 675;
            this.game.player.animations.play('jump');
        }
        if (this.game.controls.shoot.isDown
            && this.game.facing == 'right'
            && this.game.mana > 0) {
            this.shootFireballRight();
        }
        if (this.game.controls.shoot.isDown
            && this.game.facing == 'left'
            && this.game.mana > 0) {
            this.shootFireballLeft();
        }
        if (this.game.player.body.velocity.x == 0 && this.game.player.body.velocity.y == 0 && !this.game.controls.shoot.isDown) {
            this.game.player.animations.play('idle');
        }
    };
    Level1.prototype.collisionHandler = function (fireball, bat) {
        fireball.kill();
        bat.kill();
        this.game.text0.setText("Score: " + (this.game.score += 50));
        this.game.fireballCollision = this.game.fireballCollisions.getFirstExists(false);
        this.game.fireballCollision.reset(bat.body.x + 75, bat.body.y + 30);
        this.game.fireballCollision.play('big-fireball-collision', 10, false, true);
    };
    Level1.prototype.collisionHandler1 = function (fireball, angryPlant) {
        fireball.kill();
        angryPlant.kill();
        this.game.text0.setText("Score: " + (this.game.score += 150));
        this.game.fireballCollision = this.game.fireballCollisions.getFirstExists(false);
        this.game.fireballCollision.reset(angryPlant.body.x - 15, angryPlant.body.y + 30);
        this.game.fireballCollision.play('big-fireball-collision', 10, false, true);
    };
    Level1.prototype.deathPit = function (player, deathSpikes) {
        this.game.health = 0;
    };
    Level1.prototype.item100 = function (player, blueGem) {
        blueGem.kill();
        this.game.pickupItem.play();
        this.game.text0.setText("Score: " + (this.game.score += 100));
    };
    Level1.prototype.item500 = function (player, redGem) {
        redGem.kill();
        this.game.pickupItem.play();
        this.game.text0.setText("Score: " + (this.game.score += 500));
    };
    Level1.prototype.itemKey = function (player, goldKey) {
        goldKey.kill();
        this.game.pickupItem.play();
        this.game.text3.setText("Keys: " + (this.game.key += 1) + "/2");
    };
    Level1.prototype.itemMagicBeaker = function (player, magicBeaker) {
        magicBeaker.kill();
        this.game.pickupItem.play();
        this.game.text1.setText("HP:" + this.game.health + " MP:" + (this.game.mana += 10));
    };
    Level1.prototype.nextLevel = function () {
        if (this.game.key >= 2) {
            this.game.backgroundMusic.mute = true;
            this.game.key = 0;
            this.game.state.start('Endgame', true, false);
        }
    };
    Level1.prototype.playerDamage = function (player, data) {
        player.animations.play('damage');
        player.body.velocity.y = -550;
        data.game.health = data.game.health - 1;
        data.game.text1.setText("HP:" + (data.game.health -= 1) + " MP:" + data.game.mana);
    };
    Level1.prototype.shootFireballLeft = function () {
        if (this.game.time.now > this.shootTime) {
            this.shootTime = this.game.time.now + 800;
            this.game.fireball = this.game.fireballsLeft.getFirstExists(false);
            if (this.game.fireball) {
                this.game.shoot.play();
                this.game.fireball.reset(this.game.player.x, this.game.player.y);
                this.game.player.animations.play('shoot-fireball-left');
                this.game.fireball.body.velocity.x = -800;
                this.game.text1.setText("HP:" + this.game.health + " MP:" + (this.game.mana -= 1));
            }
        }
    };
    Level1.prototype.shootFireballRight = function () {
        if (this.game.time.now > this.shootTime) {
            this.shootTime = this.game.time.now + 800;
            this.game.fireball = this.game.fireballsRight.getFirstExists(false);
            if (this.game.fireball) {
                this.game.shoot.play();
                this.game.fireball.reset(this.game.player.x, this.game.player.y);
                this.game.player.animations.play('shoot-fireball-right');
                this.game.fireball.body.velocity.x = 800;
                this.game.text1.setText("HP:" + this.game.health + " MP:" + (this.game.mana -= 1));
            }
        }
    };
    Level1.prototype.spawn = function () {
        this.game.respawn.forEach(function (spawnPoint) {
            this.game.player.reset(spawnPoint.x, spawnPoint.y);
        }, this);
    };
    Level1.prototype.checkOverlap = function (spriteA, spriteB) {
        if (spriteA.alive == false || spriteB.alive == false) {
            return false;
        }
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Rectangle"].intersects(boundsA, boundsB);
    };
    Level1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [])
    ], Level1);
    return Level1;
}(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["State"]));



/***/ }),

/***/ "./src/app/new-game/game-states/menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-game/game-states/menu.component.ts ***!
  \********************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super.call(this) || this;
        _this.timer = 0;
        return _this;
    }
    Menu.prototype.create = function () {
        this.backgroundMusic = this.game.add.audio('menu');
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play();
        this.game.select = this.game.add.audio("pressEnter");
        var style = {
            font: "28px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"
        };
        var style2 = {
            font: "28px Press Start 2P", fill: "#99ccff", boundsAlignH: "center", boundsAlignV: "middle"
        };
        this.game.text = this.game.add.text(0, 0, "The Last Flame Templar\n\n         II", style);
        this.game.text.setTextBounds(0, 100, 725, 100);
        this.game.text2 = this.game.add.text(200, 480, "PRESS ENTER", style);
        this.game.text3 = this.game.add.text(180, 350, '-Demo Build-', style2);
        this.enterKey = this.game.input.keyboard.addKey(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].ENTER);
    };
    Menu.prototype.update = function () {
        this.game.scale.setShowAll();
        this.game.scale.refresh();
        this.timer += this.game.time.elapsed;
        if (this.timer >= 500) {
            this.timer -= 500;
            this.game.text2.visible = !this.game.text2.visible;
        }
        if (this.enterKey.isDown) {
            this.game.select.play();
            this.backgroundMusic.loop = false;
            this.backgroundMusic.stop();
            this.game.state.start('Directions');
        }
    };
    Menu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [])
    ], Menu);
    return Menu;
}(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["State"]));



/***/ }),

/***/ "./src/app/new-game/game-states/preloader.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/new-game/game-states/preloader.component.ts ***!
  \*************************************************************/
/*! exports provided: Preloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Preloader = /** @class */ (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        return _super.call(this) || this;
    }
    Preloader.prototype.preload = function () {
        this.game.time.advancedTiming = true;
        this.game.load.image('logo', '../../../assets/images/items/blue-gem.png');
        this.game.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloaderBar');
        this.game.preloadBar.anchor.setTo(0.5, 0.5);
        this.game.time.advancedTiming = true;
        this.game.load.setPreloadSprite(this.game.preloadBar);
        this.game.load.tilemap('myMap', '../../../assets/maps/level1smaller.json', null, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Tilemap"].TILED_JSON);
        this.game.load.image('reducedtileset', '../../../assets/images/world/reducedtileset.png');
        this.game.load.image('Level_Bg', '../../../assets/images/world/background.jpg');
        this.game.load.image('portait', '../../../assets/images/player/portait.png');
        this.game.load.spritesheet('player', '../../../assets/images/player/merged-paladin.png', 60, 96);
        this.game.load.spritesheet('fire-right', '../../../assets/images/player/fireball-right.png', 64, 64);
        this.game.load.spritesheet('fire-left', '../../../assets/images/player/fireball-left.png', 64, 64);
        this.game.load.spritesheet('big-fireball-collision', '../../../assets/images/player/big-fireball-collision.png', 48, 48);
        this.game.load.spritesheet('blue-gem', '../../../assets/images/items/blue-gem.png', 39, 39);
        this.game.load.spritesheet('red-gem', '../../../assets/images/items/red-gem.png', 39, 39);
        this.game.load.spritesheet('gold-key', '../../../assets/images/items/key-item.png', 46, 64);
        this.game.load.spritesheet('magic-beaker', '../../../assets/images/items/magic-beaker-item.png', 23, 31);
        this.game.load.spritesheet('blue-candle', '../../../assets/images/world/blue-candle.png', 64, 64);
        this.game.load.spritesheet('bat', '../../../assets/images/enemies/bat-enemy.png', 64, 64);
        this.game.load.spritesheet('spikes', '../../../assets/images/world/spikes.png', 64, 64);
        this.game.load.spritesheet('door', '../../../assets/images/world/key-hole-door.png', 64, 128);
        this.game.load.spritesheet('angry-plant', '../../../assets/images/enemies/angry-plant.png', 64, 64);
        this.game.load.audio("menu", "../../../assets/bg-music/Puzzle-Game-2.mp3");
        this.game.load.audio("level1", "../../../assets/bg-music/Castle-of-Despair.mp3");
        this.game.load.audio("gameover", "../../../assets/bg-music/Unpleasant-Discovery.mp3");
        this.game.load.audio("pressEnter", "../../../assets/sound-effects/menu-select.mp3");
        this.game.load.audio("fireball-sound", "../../../assets/sound-effects/fireball.mp3");
        this.game.load.audio("jump-sound", "../../../assets/sound-effects/jump-sound.mp3");
        this.game.load.audio("pickup-item", "../../../assets/sound-effects/pickup-item.mp3");
        this.game.load.audio("enemy-ignite", "../../../assets/sound-effects/enemy-ignite.mp3");
        this.game.load.audio("death-scream", "../../../assets/sound-effects/death-scream.mp3");
    };
    Preloader.prototype.create = function () {
        this.game.state.start('Menu');
    };
    Preloader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [])
    ], Preloader);
    return Preloader;
}(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["State"]));



/***/ }),

/***/ "./src/app/new-game/new-game-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/new-game/new-game-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewGameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameRoutingModule", function() { return NewGameRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-game.component */ "./src/app/new-game/new-game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _new_game_component__WEBPACK_IMPORTED_MODULE_2__["NewGameComponent"]
    }
];
var NewGameRoutingModule = /** @class */ (function () {
    function NewGameRoutingModule() {
    }
    NewGameRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NewGameRoutingModule);
    return NewGameRoutingModule;
}());



/***/ }),

/***/ "./src/app/new-game/new-game.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-game/new-game.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li, h5 {\n  font-family: \"Press Start 2P\";\n}\n\n#topScores li {\n  font-size: .75em;\n}\n"

/***/ }),

/***/ "./src/app/new-game/new-game.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-game/new-game.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:90px\">\n\n  <div class=\"col-md-2 h-25 rounded border border-light text-white bg-dark\">\n    <h5 class=\"card-title\">Top 5 Scores</h5>\n    <ul *ngFor=\"let score of scores\" id=\"topScores\">\n      <li>{{ score.name }} {{ score.score }}</li>\n    </ul>\n  </div>\n\n  <!--PHASER RENDERS GAME HERE-->\n  <div class=\"col-md-8\" id=\"content\"></div>\n\n  <div class=\"col-md-2 h-25\">\n    <ul id=\"navButtons\" class=\"list-group list-group-flush text-center\">\n      <li class=\"list-group-item rounded border border-light mb-3 bg-dark\">\n        <a class=\"text-danger\" href=\"#\">Play</a>\n      </li>\n      <li class=\"list-group-item rounded border border-light mb-3 bg-dark\">\n        <a class=\"text-danger\" href=\"#\">Tech</a>\n      </li>\n      <li class=\"list-group-item rounded border border-light mb-3 bg-dark\">\n        <a class=\"text-danger\" href=\"#\">Contact</a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/new-game/new-game.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-game/new-game.component.ts ***!
  \************************************************/
/*! exports provided: NewGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameComponent", function() { return NewGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/phaser-ce/build/phaser.js */ "./node_modules/phaser-ce/build/phaser.js");
/* harmony import */ var _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_states_boot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-states/boot.component */ "./src/app/new-game/game-states/boot.component.ts");
/* harmony import */ var _game_states_preloader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-states/preloader.component */ "./src/app/new-game/game-states/preloader.component.ts");
/* harmony import */ var _game_states_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-states/menu.component */ "./src/app/new-game/game-states/menu.component.ts");
/* harmony import */ var _game_states_directions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-states/directions.component */ "./src/app/new-game/game-states/directions.component.ts");
/* harmony import */ var _game_states_level_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-states/level-1.component */ "./src/app/new-game/game-states/level-1.component.ts");
/* harmony import */ var _game_states_endgame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-states/endgame.component */ "./src/app/new-game/game-states/endgame.component.ts");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./score.service */ "./src/app/new-game/score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewGameComponent = /** @class */ (function () {
    function NewGameComponent(scoreService, ngZone) {
        this.scoreService = scoreService;
        this.ngZone = ngZone;
        this.scores = [];
        this.game = new _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["Game"](725, 525, _node_modules_phaser_ce_build_phaser_js__WEBPACK_IMPORTED_MODULE_1__["AUTO"], 'content');
        this.game.state.add('Boot', _game_states_boot_component__WEBPACK_IMPORTED_MODULE_2__["Boot"], false);
        this.game.state.add('Preloader', _game_states_preloader_component__WEBPACK_IMPORTED_MODULE_3__["Preloader"], false);
        this.game.state.add('Menu', _game_states_menu_component__WEBPACK_IMPORTED_MODULE_4__["Menu"], false);
        this.game.state.add('Directions', _game_states_directions_component__WEBPACK_IMPORTED_MODULE_5__["Directions"], false);
        this.game.state.add('Level1', _game_states_level_1_component__WEBPACK_IMPORTED_MODULE_6__["Level1"], false);
        this.game.state.add('Endgame', _game_states_endgame_component__WEBPACK_IMPORTED_MODULE_7__["Endgame"], false);
        this.game.state.start('Boot', true, true);
    }
    NewGameComponent.prototype.ngOnInit = function () {
        this.getScores();
        window.my = window.my || {};
        window.my.namespace = window.my.namespace || {};
        window.my.namespace.addScore = this.addScore.bind(this);
    };
    NewGameComponent.prototype.getScores = function () {
        var _this = this;
        this.scoreService.getScores()
            .subscribe(function (scores) { return _this.scores = scores.slice(0, 5); });
    };
    NewGameComponent.prototype.addScore = function (id, name, game) {
        var _this = this;
        this.ngZone.run(function () { return _this.privateFunc(id, name, game); });
    };
    NewGameComponent.prototype.privateFunc = function (id, name, score) {
        var _this = this;
        console.log("adding scores!!!");
        this.scoreService.createScores({ id: id, name: name, score: score })
            .subscribe(function (score) {
            _this.scores.push(score);
        });
    };
    NewGameComponent.prototype.ngOnDestroy = function () {
        this.game.destroy();
    };
    NewGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-game',
            template: __webpack_require__(/*! ./new-game.component.html */ "./src/app/new-game/new-game.component.html"),
            styles: [__webpack_require__(/*! ./new-game.component.css */ "./src/app/new-game/new-game.component.css")]
        }),
        __metadata("design:paramtypes", [_score_service__WEBPACK_IMPORTED_MODULE_8__["ScoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], NewGameComponent);
    return NewGameComponent;
}());



/***/ }),

/***/ "./src/app/new-game/new-game.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-game/new-game.module.ts ***!
  \*********************************************/
/*! exports provided: NewGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameModule", function() { return NewGameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _new_game_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-game-routing.module */ "./src/app/new-game/new-game-routing.module.ts");
/* harmony import */ var _new_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-game.component */ "./src/app/new-game/new-game.component.ts");
/* harmony import */ var _game_states_boot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-states/boot.component */ "./src/app/new-game/game-states/boot.component.ts");
/* harmony import */ var _game_states_preloader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-states/preloader.component */ "./src/app/new-game/game-states/preloader.component.ts");
/* harmony import */ var _game_states_directions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-states/directions.component */ "./src/app/new-game/game-states/directions.component.ts");
/* harmony import */ var _game_states_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-states/menu.component */ "./src/app/new-game/game-states/menu.component.ts");
/* harmony import */ var _game_states_level_1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-states/level-1.component */ "./src/app/new-game/game-states/level-1.component.ts");
/* harmony import */ var _game_states_endgame_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-states/endgame.component */ "./src/app/new-game/game-states/endgame.component.ts");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score.service */ "./src/app/new-game/score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var NewGameModule = /** @class */ (function () {
    function NewGameModule() {
    }
    NewGameModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _new_game_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewGameRoutingModule"]],
            exports: [],
            declarations: [_new_game_component__WEBPACK_IMPORTED_MODULE_3__["NewGameComponent"], _game_states_boot_component__WEBPACK_IMPORTED_MODULE_4__["Boot"], _game_states_preloader_component__WEBPACK_IMPORTED_MODULE_5__["Preloader"], _game_states_directions_component__WEBPACK_IMPORTED_MODULE_6__["Directions"], _game_states_menu_component__WEBPACK_IMPORTED_MODULE_7__["Menu"], _game_states_level_1_component__WEBPACK_IMPORTED_MODULE_8__["Level1"], _game_states_endgame_component__WEBPACK_IMPORTED_MODULE_9__["Endgame"]],
            providers: [_score_service__WEBPACK_IMPORTED_MODULE_10__["ScoreService"]]
        })
    ], NewGameModule);
    return NewGameModule;
}());



/***/ }),

/***/ "./src/app/new-game/score.service.ts":
/*!*******************************************!*\
  !*** ./src/app/new-game/score.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MessageService } from './message.service';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ScoreService = /** @class */ (function () {
    function ScoreService(http) {
        this.http = http;
        // window.ScoreService = this
    }
    ScoreService.prototype.getScores = function () {
        return this.http.get('api/scores');
    };
    ScoreService.prototype.createScores = function (score) {
        return this.http.post('api/scores', score, httpOptions);
    };
    ScoreService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ScoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScoreService);
    return ScoreService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomasnrizzoiii/Documents/gSchoolRefactors/capstone-rebuild/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n  \t    <ion-back-button></ion-back-button>\n  \t</ion-buttons>\n  \t<ion-title>\n        Park-N-Park\n    </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button slot=\"end\" [routerLink]=\"['/settings']\">\n            <ion-icon name=\"settings\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n  \t<ion-grid>\n  \t    <ion-row>\n            <ion-col>\n                <ion-label class=\"data-head\">Address:</ion-label>\n                <ion-label #addressLabel>555 5th St</ion-label>\n                <br>\n                <ion-label class=\"data-head\">Phone: </ion-label>\n                <ion-label #phoneLabel>555-555-5555</ion-label>\n                <br><br>\n                <ion-button>Website</ion-button>\n                <ion-button>Directions</ion-button>\n                <br><br>\n                <ion-label class=\"data-head\">Posted Hours: </ion-label>\n                <ion-label #hoursLabel>24/7</ion-label>\n                <br>\n                <ion-label class=\"data-head\">Access: </ion-label>\n                <ion-label #permitLabel>Permit required</ion-label>\n            </ion-col>\n            <ion-col text-right>\n                <ion-icon name=\"pin\"></ion-icon><ion-label>&nbsp;</ion-label>\n                <ion-label #distanceLabel>0.0mi</ion-label><ion-label> away</ion-label>\n            </ion-col>\n  \t    </ion-row>\n  \t    <ion-row>\n            <ion-col>\n                <ion-label class=\"data-head\">Your Rating:</ion-label>\n                <!--ionic4-star-rating #rating\n                    activeIcon = \"star\"\n                    defaultIcon = \"star-outline\"\n                    halfIcon = \"star-half\"\n                    activeColor = \"#488aff\"\n                    defaultColor = \"#488aff\"\n                    readonly=\"false\"\n                    halfStar=\"true\"\n                    rating=\"3.5\"\n                    fontSize = \"30px\">\n                </ionic4-star-rating-->\n                <ion-label class=\"data-head\">Our Rating:</ion-label>\n                <!--ionic4-star-rating #rating\n                    activeIcon = \"star\"\n                    defaultIcon = \"star-outline\"\n                    halfIcon = \"star-half\"\n                    activeColor = \"#f4f4f4\"\n                    defaultColor = \"#f4f4f4\"\n                    readonly=\"true\"\n                    halfStar=\"true\"\n                    rating=\"2\"\n                    fontSize = \"30px\">\n                </ionic4-star-rating-->\n                <ion-label class=\"data-head\">Google's Rating:</ion-label>\n                <!--ionic4-star-rating #grating\n                    activeIcon = \"star\"\n                    defaultIcon = \"star-outline\"\n                    halfIcon = \"star-half\"\n                    activeColor = \"#f4f4f4\"\n                    defaultColor = \"#f4f4f4\"\n                    readonly=\"true\"\n                    halfStar=\"true\"\n                    rating=\"3.5\"\n                    fontSize = \"30px\">\n                </ionic4-star-rating-->\n            </ion-col>\n            <ion-col text-right>\n                <ion-button>Mark Full</ion-button>\n            </ion-col>\n  \t    </ion-row>\n  \t</ion-grid>\n    Data goes down here.\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");






//import { StarRatingModule } from 'ionic4-star-rating';

let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            //StarRatingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
                }
            ])
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".data-head {\n  font-size: 1.2em;\n  font-weight: bold;\n  display: block;\n}\n\n.data-head + ion-label {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvZ2FuL0RvY3VtZW50cy9TY2hvb2wvQ0kxMDEtMTAzL1NwYWNlc0FwcC9Hb29nbGVNYXBzSW9uaWMgY29weS9zcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBRENBO0VBQ0MsZ0JBQUE7QUNFRCIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1oZWFkIHtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLmRhdGEtaGVhZCArIGlvbi1sYWJlbCB7XG5cdG1hcmdpbi1sZWZ0OiAxZW07XG59XG4iLCIuZGF0YS1oZWFkIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0YS1oZWFkICsgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoPage = class InfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=info-info-module-es2015.js.map
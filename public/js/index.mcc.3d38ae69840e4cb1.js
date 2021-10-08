webpackJsonp([25],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_index_mcc_scss__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_index_mcc_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_index_mcc_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nComponents_register__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nComponents_nav__ = __webpack_require__(25);





$(document).ready(function () {
  Object(__WEBPACK_IMPORTED_MODULE_2_nComponents_nav__["default"])();
  $("#toTop").click(function () {
    var sTop = document.body || document.documentElement;
    var clearTime = setInterval(function () {
      if (sTop.scrollTop > 0) {
        sTop.scrollTop -= 30;
      } else {
        clearInterval(clearTime);
      }
    }, 1);
  });
});

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[749]);
//# sourceMappingURL=index.mcc.3d38ae69840e4cb1.js.map
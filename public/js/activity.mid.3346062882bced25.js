webpackJsonp([23],{

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nPages_activity_mid_js__ = __webpack_require__(789);


/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_activity_scss__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_activity_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_activity_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nComponents_nav__ = __webpack_require__(25);





__WEBPACK_IMPORTED_MODULE_3_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_plugins_http__["a" /* default */]);

//table
new __WEBPACK_IMPORTED_MODULE_3_vue__["a" /* default */]({
    data: function data() {
        return {
            subData: {
                name: '',
                mo: '',
                address: '',
                bak: ''
            },
            userList: [],
            isShow: 0,
            errMsg: '',
            nowStatus: 0,
            isMove: false
        };
    },
    mounted: function mounted() {
        Object(__WEBPACK_IMPORTED_MODULE_5_nComponents_nav__["b" /* nav */])();
        this.getData('/ajax_midautumn/order_list');
    },

    filters: {
        handTime: function handTime(t) {
            var TT = new Date(t * 1000);
            return TT.getFullYear() + '/' + (TT.getMonth() + 1) + '/' + TT.getDate() + ":" + TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
        }
    },
    methods: {
        getData: function getData(url) {
            var _this = this;

            this.$http.get(url).then(function (res) {
                if (res.status) {
                    _this.userList = res.data;
                }
            });
        },
        showFun: function showFun() {
            this.isShow = 1;
        },
        subInput: function subInput() {
            var _this2 = this;

            if (this.isMove) return;
            this.isMove = true;
            if (!this.subData.name || !this.subData.mo || !this.subData.address || !this.subData.bak) {
                this.isMove = false;
                this.nowStatus = 1;
                this.errMsg = 'Please fill in the complete information!';
                setTimeout(function () {
                    _this2.nowStatus = 0;
                    _this2.errMsg = '';
                    location.href = "/activity/mid";
                }, 4000);
                return;
            }
            this.$http.post('/ajax_midautumn/activ', this.subData).then(function (_ref) {
                var msg = _ref.msg;

                _this2.isMove = false;
                _this2.nowStatus = 1;
                _this2.errMsg = msg;
                setTimeout(function () {
                    _this2.nowStatus = 0;
                    _this2.errMsg = '';
                    location.href = "/activity/mid";
                }, 4000);
            });
        }
    }
}).$mount('#Active');

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[788]);
//# sourceMappingURL=activity.mid.3346062882bced25.js.map
webpackJsonp([16],{

/***/ 638:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nPages_more_index_js__ = __webpack_require__(794);


/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_more_lucky_scss__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_more_lucky_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_more_lucky_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_leave_scss__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_leave_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_leave_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nComponents_nav__ = __webpack_require__(25);


// import "nStyle/activity.scss";





__WEBPACK_IMPORTED_MODULE_4_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_plugins_http__["a" /* default */]);


//table
new __WEBPACK_IMPORTED_MODULE_4_vue__["a" /* default */]({
    data: function data() {
        return {
            subData: {
                name: '',
                mo: '',
                address: '',
                bak: ''
            },
            coinAll: '',
            showslidebox: false, //??????????????????
            frontcover: false, //???????????????
            userList: [],
            listData: [], //????????????
            coinAllCount: [],
            extraData: [], //????????????
            isShow: 0,
            errMsg: '',
            tabChange: 1,
            isMove: false,
            coinFlag: false,
            coinnum: '',
            leavenum: '',
            all: '',
            nowStatus: false, //??????????????????????????????layer??????
            value: 'wcg',
            currentpage: '',
            pagenum: '', //??????????????????

            errorArr: { //????????????
                //0 ??????????????? ????????????1????????? 2??????????????? 3??????????????? 4???????????????
                //?????? 5 ??? 6 ??? 7 ??? 8 ????????????
                //10??????
                accStatus: 0, //0?????? 1
                pwdStatus: 0
            }

        };
    },
    mounted: function mounted() {
        Object(__WEBPACK_IMPORTED_MODULE_7_nComponents_nav__["b" /* nav */])();
        this.getRecord();
        this.coinAllCountData();
        this.getqData(1);
    },

    // filters: {
    //     handTime(t) {
    //         var TT = new Date(t * 1000);
    //         return TT.getFullYear() + '/' + (TT.getMonth() + 1) + '/' + TT.getDate() +  TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
    //     }
    // },
    methods: {
        slideBtn: function slideBtn() {
            this.showslidebox = !this.showslidebox;
            this.frontcover = !this.frontcover;
        },

        //tab????????????????????????
        getqData: function getqData(tab) {
            this.tabChange = tab;
            if (this.tabChange == "1") {
                this.getRecord();
            } else {
                this.getExtraMoney();
            }
        },

        // ?????????????????? --??????
        submit: function submit() {
            var _this = this;

            if (this.coinFlag) return;
            this.coinFlag = true;
            this.verify();
            this.message_data = {
                type: 1,
                coin: "wcg",
                number: this.coinnum
            };
            this.$http.post('/ajax_more/overToMore', this.message_data).then(function (res) {
                setTimeout(function () {
                    _this.coinFlag = false;
                }, 1000);
                if (res.status == 1) {
                    _this.coinAll = res.data;
                }
                _this.nowStatus = true;
                _this.errMsg = res.msg;
                setTimeout(function () {
                    _this.nowStatus = false;
                    _this.errMsg = '';
                    location.href = "/more";
                }, 2000);
            }).catch(function (err) {
                console.log('err');
                setTimeout(function () {
                    _this.coinFlag = false;
                }, 1000);
            });
        },

        // ?????????????????? --??????
        submitCoinNum: function submitCoinNum() {
            var _this2 = this;

            this.message_data = {
                type: 2,
                coin: "wcg",
                number: this.leavenum
            };
            this.$http.post('/ajax_more/overToMore', this.message_data).then(function (res) {
                if (res.status == 1) {
                    _this2.coinAll = res.data;
                    _this2.nowStatus = true;
                    _this2.errMsg = res.msg;
                    _this2.frontcover = !_this2.frontcover;
                    _this2.showslidebox = !_this2.showslidebox;
                    setTimeout(function () {
                        _this2.nowStatus = false;
                        _this2.errMsg = '';
                        location.href = "/more";
                    }, 1500);
                } else {
                    _this2.nowStatus = true;
                    _this2.errMsg = res.msg;
                    _this2.showslidebox = !_this2.showslidebox;
                    setTimeout(function () {
                        _this2.nowStatus = false;
                        _this2.errMsg = '';
                        location.href = "/more";
                    }, 2000);
                }
            }).catch(function (err) {
                console.log('err');
            });
        },

        // ?????????????????????
        coinAllCountData: function coinAllCountData() {
            var _this3 = this;

            this.showRecord = false;
            //type:1????????? type???2????????????
            this.message_data = {
                type: "1"
            };
            this.$http.post('/ajax_more/getMore', this.message_data).then(function (res) {
                _this3.coinAllCount = res.data;
            }).catch(function (err) {
                console.log('err');
            });
        },

        //??????????????????
        getRecord: function getRecord() {
            var _this4 = this;

            this.showRecord = false;
            //type:1????????? type???2????????????
            this.$http.post('/ajax_more/getMoreLog?p=' + 1 + "&coin=wcg").then(function (res) {
                _this4.listData = res.data.list;
                _this4.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this4.pagenum = (1 - 1) * 10;
            }).catch(function (err) {
                console.log('err');
            });
        },
        getExtraMoney: function getExtraMoney() {
            var _this5 = this;

            this.showRecord = false;
            this.$http.post('/ajax_more/interest?p=' + 1 + "&coin=wcg").then(function (res) {
                _this5.extraData = res.data.list;
                _this5.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this5.pagenum = (1 - 1) * 10;
            }).catch(function (err) {
                console.log('err');
            });
        },

        //??????
        getcoindata: function getcoindata(num) {
            var _this6 = this;

            this.showRecord = false;
            //type:1????????? type???2????????????
            this.$http.post('/ajax_more/getMoreLog?p=' + num + "&coin=wcg").then(function (res) {
                _this6.listData = res.data.list;
                _this6.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this6.pagenum = (num - 1) * 10;
            }).catch(function (err) {
                console.log('err');
            });
        },

        // ????????????,??????-??????
        showFun: function showFun() {
            this.isShow = 1;
        },
        verify: function verify(val, type, method) {
            console.log(Object.prototype.toString.call(val), Object.prototype.toString.call(type));
            // let correctnum = /^[1]([3-9])[0-9]{9}$/;
            var nums = /\d/g;
            switch (type) {
                case 'num':
                    if (val) {
                        // ??????
                        if (val.length == 0) {
                            this.errorArr.accStatus = 0;
                            return false;
                        } else {
                            this.errorArr.accStatus = 1;
                            //???????????????????????????????????????
                            if (method === 'enter') {}
                            return true;
                        }
                    } else if (method === 'submit') {
                        //???????????????????????? ???????????????
                        this.errorArr.accStatus = 1;
                        return false;
                    } else if (method === 'focus') {
                        //???????????? ????????????
                        this.errorArr.accStatus = 1;
                        return false;
                    } else if (method === 'blur') {
                        this.errorArr.accStatus = 1;
                        return false;
                    } else {
                        this.errorArr.accStatus = 1;
                        return false;
                    }
                    break;
                case 'tradepwd':
                    if (val) {
                        if (val.length == 0) {
                            this.errorArr.pwdStatus = 0;
                            return false;
                        } else {
                            this.errorArr.pwdStatus = 1;
                            return true;
                        }
                    } else if (method === 'submit') {
                        this.errorArr.pwdStatus = 1;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.pwdStatus = 1;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.pwdStatus = 2;
                        return false;
                    } else {
                        this.errorArr.pwdStatus = 1;
                        return false;
                    }
                    break;

                default:
            }
        }
    },
    filters: {
        numFilter: function numFilter(value) {

            // ???????????????????????????????????????
            return parseFloat(value) ? parseFloat(value).toFixed(2) : 0;
        },
        handTime: function handTime(t) {
            var TT = new Date(t * 1000);
            return TT.getFullYear() + '-' + (TT.getMonth() + 1) + '-' + TT.getDate() + "  " + TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
        }
    }

}).$mount('#more');

/***/ })

},[793]);
//# sourceMappingURL=more.index.9238b13dffe3bb3e.js.map
webpackJsonp([9],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(140);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_alertCompent_scss__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_alertCompent_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_alertCompent_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(16);


var alertObj = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].extend({
    template: '<div v-cloak v-if="showStatus">\n              <div class="mask_contain" flex="main:center cross:center" >\n                <div class="alert_content relative_dom" flex="dir:top main:center cross:center">\n                  <span class="close_btn" @click="hide">\xD7</span>\n                  <slot name="headerText"></slot>\n                  <div class="btn_line">\n                      <button @click="clickBtn" class="blue500_bg" style="width:120px;">\n                        <slot name="Ok"></slot>\n                      </button>\n                      <button @click="hide" class="blue500_bg" style="width:120px;">\n                        <slot name="No"></slot>\n                      </button>\n                  </div>\n                </div>\n              </div>\n            </div>', //template?????????????????????
    data: function data() {
        //??????????????????????????????????????????
        return {
            // tplData: '????????????',
        };
    },
    props: ['showStatus'],
    methods: {
        hide: function hide() {
            //??????????????????hidebox
            this.$emit('hidebox');
        },
        clickBtn: function clickBtn() {
            //??????????????????callback
            this.$emit('callback');
        }
    }
});
__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].component('jsj-alert', alertObj);

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nPages_more_lucky_js__ = __webpack_require__(791);


/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_more_lucky_scss__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_more_lucky_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_more_lucky_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_leave_scss__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_leave_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_leave_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nComponents_jsjAlert__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_page_page_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_page_page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__tools_page_page_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_page_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_nComponents_nav__ = __webpack_require__(25);










__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9_plugins_http__["a" /* default */]);

//table
var luck = new __WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */]({
    data: function data() {
        return {
            user: '', //????????????
            amount: '0.00', //????????????
            term: '', //?????????
            result: '', //???????????????
            times: '', //??????????????????
            //0-9
            num0: '',
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: '',
            num6: '',
            num7: '',
            num8: '',
            num9: '',
            //????????????
            num11: '',
            num12: '',
            num13: '',
            num14: '',
            sumMoney: 0,
            from: {
                sum_money: "",
                coin_name: 'wcg', //1????????????2???????????? 3????????????
                money: [],
                period_id: ''
            },
            recordData: [], //???????????? ???????????? ????????????
            periodData: [], //??????????????????
            nowCountData: [], //????????????
            accountData: [], //????????????
            lastData: [], //?????????
            returnData: [],
            guessData: [],
            inputData: [], //????????????
            canClick: true,
            stoptime: '', //??????????????????
            totalTime: '',
            // canClick: true,
            all: '',
            systemtime: '',
            errMsg: '',
            nowStatus: 0,
            isMove: false,
            tabChange: '1',
            showResult: false,
            outNum: '', //????????????
            showAlert: false
        };
    },
    mounted: function mounted() {
        Object(__WEBPACK_IMPORTED_MODULE_10_nComponents_nav__["b" /* nav */])();
        this.getInputData(1); //????????????
        this.getqData(1);
        this.getData(1);
        this.getDetailData(1);
        this.getPeriod();
        this.getNowCount(); //????????????
        this.getAcountData(); //????????????
        this.getLastData();
    },


    methods: {
        // ????????????
        tipsFun: function tipsFun(msg) {
            var _this = this;

            this.nowStatus = 1;
            this.errMsg = msg;
            setTimeout(function () {
                _this.nowStatus = 0;
                _this.errMsg = '';
                _this.showResult = false;
            }, 3000);
        },
        cancel: function cancel() {
            // this.showResult = false;
            // this.from.money = [];
            location.href = "/more/lucky";
        },
        changeInput: function changeInput(i) {
            this.sumMoney = parseFloat(this.sumMoney) - parseFloat(this[i]);
            this[i] = '';
            this.from.money.pop();
        },
        resetData: function resetData() {
            for (var i = 0; i < 15; i++) {
                if (i == 10) {
                    continue;
                } else {
                    this['num' + i] = '';
                }
            }
            this.sumMoney = 0;
            this.from.money = [];
        },
        handData: function handData() {
            for (var i = 0; i < 15; i++) {
                if (i == 10 || this['num' + i] == 0) {
                    continue;
                } else {
                    if (this['num' + i] > 1) {
                        this.from.money.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, i, this['num' + i]));
                        this.sumMoney += parseFloat(this['num' + i]);
                    } else {
                        this['num' + i] = '';
                    }
                }
            }
            if (this.from.money.length === 0) {
                this.tipsFun('The bet amount is between 2~200???');
                return;
            } else if (this.sumMoney > 200) {
                this.tipsFun('The maximum bet is 200!');
                this.resetData();
                return;
            } else {
                this.showResult = true;
            }
        },

        //tab????????????????????????
        getqData: function getqData(tab) {
            this.tabChange = tab;
            if (this.tabChange == "1") {
                this.getInputData(1);
            }
            if (this.tabChange == "2") {
                this.getData(1);
            }
            if (this.tabChange == "3") {
                this.getguessData(1);
            } else {
                // this.getData(1)
            }
        },
        getDetailData: function getDetailData(tab) {
            this.tabDetailChange = tab;
            if (this.tabDetailChange == "1") {
                this.getguessData(1);
            } else {
                this.getreturnData(1);
            }
        },

        //????????????
        subFrom: function subFrom() {
            var _this2 = this;

            if (this.sumMoney > this.accountData.userLucky) {
                this.tipsFun('Insufficient account amount!');
                this.resetData();
                return;
            }
            if (this.isMove) return;
            this.isMove = true;
            this.from.sum_money = this.sumMoney;
            this.$http.post('/ajax_lucky/userBill', this.from).then(function (_ref) {
                var msg = _ref.msg,
                    status = _ref.status;

                if (status == 1) {
                    _this2.tipsFun('success');
                } else {
                    _this2.tipsFun('fail');
                }
                setTimeout(function () {
                    _this2.isMove = false;
                    location.href = "/more/lucky";
                }, 2000);
            }).catch(function (err) {
                console.log(err);
                setTimeout(function () {
                    _this2.isMove = false;
                }, 800);
            });
        },
        getPeriod: function getPeriod() {
            var _this3 = this;

            this.$http.post('/ajax_lucky/getPeriod', this.message_data).then(function (res) {
                if (res.status == 1) {
                    _this3.periodData = res.data;
                    _this3.stoptime = res.data.end_date;
                }
            }).catch(function (err) {
                console.log('err');
            });
        },

        // ????????????
        getNowCount: function getNowCount() {
            var _this4 = this;

            this.$http.post('/ajax_lucky/countNow', this.message_data).then(function (res) {
                if (res.sttaus == 1) {} else {
                    _this4.nowCountData = res.data;
                }
            }).catch(function (err) {
                console.log('err');
            });
        },

        //????????????
        luckOut: function luckOut() {
            if (!(this.accountData.turnover / this.accountData.wcg_lucky_lock >= 3)) {
                this.tipsFun('The effective bet amount is not enough!');
                return;
            } else {
                this.showAlert = true;
            }
        },

        //??????
        luckOutOk: function luckOutOk(isOk) {
            var _this5 = this;

            if (isOk === 1) {
                if (parseInt(this.outNum) < 1 || !this.outNum) {
                    this.tipsFun('The minimum withdrawal amount is 1');
                    return;
                } else if (parseFloat(this.accountData.userLucky) < parseFloat(this.outNum)) {
                    this.tipsFun('The withdrawal amount exceeds the account limit!');
                    return;
                } else {
                    if (this.isMove) return;
                    this.isMove = true;
                    this.$http.post('/ajax_more/luckyToOver?number=' + parseInt(this.outNum)).then(function (res) {
                        if (res.status == 1) {
                            _this5.tipsFun('success');
                        } else {
                            _this5.tipsFun('fail');
                        }
                        setTimeout(function () {
                            location.href = "/more/lucky";
                        }, 3000);
                    }).catch(function (err) {
                        console.log('luckOut', err);
                        _this5.isMove = false;
                    });
                    setTimeout(function () {
                        _this5.isMove = false;
                    }, 800);
                }
            } else {
                this.showAlert = false;
                this.outNum = '';
            }
        },

        // ????????????
        getAcountData: function getAcountData() {
            var _this6 = this;

            this.$http.post('/ajax_lucky/getUserLucky', this.message_data).then(function (res) {
                if (res.status == 1) {
                    _this6.accountData = res.data;
                } else {}
            }).catch(function (err) {
                console.log('err');
            });
        },

        // ?????????
        getLastData: function getLastData() {
            var _this7 = this;

            this.$http.post('/ajax_lucky/getHash', this.message_data).then(function (res) {
                if (res.status == 1) {
                    _this7.lastData = res.data;
                }
            }).catch(function (err) {
                console.log('err');
            });
        },

        //????????????
        getInputData: function getInputData(num) {
            var _this8 = this;

            if (num === '4') return false;
            // this.showRecord = false;
            //type:1????????? type???2????????????
            this.$http.post('/ajax_lucky/getLuck?p=' + num + "&type=" + this.tabChange).then(function (res) {
                _this8.recordData = res.data.list;
                _this8.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this8.pagenum = (num - 1) * 1;
            }).catch(function (err) {
                console.log('err');
            });
        },

        //????????????
        getData: function getData(num) {
            var _this9 = this;

            if (num === '4') return false;
            // this.showRecord = false;
            //type:1????????? type???2????????????
            this.$http.post('/ajax_lucky/getHashLog?p=' + num).then(function (res) {
                _this9.recordData = res.data.list;
                _this9.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this9.pagenum = (num - 1) * 1;
            }).catch(function (err) {
                console.log('err');
            });
        },


        // ????????????----????????????
        getguessData: function getguessData(num) {
            var _this10 = this;

            // this.showRecord = false;
            //type:1????????? type???2????????????
            this.$http.post('/ajax_lucky/luckUserLog?p=' + num + "&type=" + this.tabDetailChange).then(function (res) {
                _this10.recordData = res.data.list;
                _this10.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this10.pagenum = (num - 1) * 1;
            }).catch(function (err) {
                console.log('err');
            });
        },

        // ????????????----???????????????
        getreturnData: function getreturnData(num) {
            var _this11 = this;

            // this.showRecord = false;
            //type:1????????? type???2????????????
            this.$http.post('/ajax_lucky/getLuckyLog?p=' + num).then(function (res) {
                // debugger
                _this11.recordData = res.data.list;
                _this11.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this11.pagenum = (num - 1) * 1;
            }).catch(function (err) {
                console.log('err');
            });
        },

        //??????
        getPageData: function getPageData(num) {
            var _this12 = this;

            if (this.tabChange === 4) return;
            var url = this.tabChange === 1 ? '/ajax_lucky/getLuck' : this.tabChange === 2 ? '/ajax_lucky/getHashLog' : this.tabDetailChange === 1 ? '/ajax_lucky/luckUserLog' : '/ajax_lucky/getLuckyLog';
            this.$http.post(url + '?p=' + num + '&type=' + this.tabChange).then(function (res) {
                luck.recordData = res.data.list;
                luck.all = res.data.total % 10 ? parseInt(res.data.total / 10) + 1 : parseInt(res.data.total / 10);
                _this12.$forceUpdate();
                luck.pagenum = (num - 1) * 1;
            }).catch(function (err) {
                console.log('err');
            });
        }
    },
    filters: {
        handTime: function handTime(t) {
            var TT = new Date(t * 1000);
            return TT.getFullYear() + '-' + (TT.getMonth() + 1) + '-' + TT.getDate() + "  " + TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
        },
        numFilter: function numFilter(value) {
            // ???????????????????????????????????????
            var realVal = parseFloat(value).toFixed(2);
            return realVal;
        }
    }

}).$mount('#luckHash');

/***/ })

},[790]);
//# sourceMappingURL=more.lucky.2e07d32855b63d56.js.map
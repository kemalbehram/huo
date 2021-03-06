webpackJsonp([6],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'scrollTable',
  template: '<div><slot name="thead"></slot><slot name="tbody"></slot></div>',
  props: ['data'],
  data: function data() {
    return {
      theadTds: '',
      tbodyFirstTds: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var tables = this.$el.getElementsByTagName('table');
    if (tables.length > 0) {
      var thead = tables[0];
      var tbody = tables[1];
      var theadTr = thead.getElementsByTagName('tr');
      if (theadTr.length > 0) {
        var tds = theadTr[0].getElementsByTagName('td');
        var ths = theadTr[0].getElementsByTagName('th');
        if (tds.length > 0) {
          this.theadTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tds));
        }
        if (ths) {
          this.theadTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(ths));
        }
      }
      //
      var tbodyFirstTr = tbody.getElementsByTagName('tr');
      //
      if (tbodyFirstTr.length > 0) {
        this.tbodyFirstTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tbodyFirstTr[0].getElementsByTagName('td')));
      }
    }

    // this.getTbodyTds();
    //
    window.addEventListener('resize', function () {
      _this.getTbodyTds();
    }, false);
  },

  methods: {
    setTheadStyle: function setTheadStyle() {
      var _this2 = this;

      if (this.tbodyFirstTds.length > 0) {
        this.tbodyFirstTds.forEach(function (td, index) {
          var style = window.getComputedStyle(td);
          // console.log(style.width);
          _this2.theadTds[index].style.minWidth = style.width;
        });
      }
    },
    getTbodyTds: function getTbodyTds() {
      var tables = this.$el.getElementsByTagName('table');
      if (tables.length > 0) {
        var tbody = tables[1];
        var tbodyFirstTr = tbody.getElementsByTagName('tr');

        //
        if (tbodyFirstTr.length > 0) {
          this.tbodyFirstTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tbodyFirstTr[0].getElementsByTagName('td')));
          this.setTheadStyle();
        }
      }
    }
  },
  watch: {
    data: function data() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.getTbodyTds();
      });
    }
  }
});

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nPages_user_index__ = __webpack_require__(796);


/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_is__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nStyle_user_common_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nStyle_user_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nStyle_user_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nStyle_user_tables_scss__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nStyle_user_tables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_nStyle_user_tables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nStyle_user_index_user_index_scss__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nStyle_user_index_user_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_nStyle_user_index_user_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_nStyle_userAlert_user_alert_scss__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_nStyle_userAlert_user_alert_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_nStyle_userAlert_user_alert_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nStyle_bindInfo_bind_info_scss__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nStyle_bindInfo_bind_info_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_nStyle_bindInfo_bind_info_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_tools_is__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_nComponents_Alert__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_components_hoverWin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_components_tradeLanguagePack__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_filters_filters__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_nComponents_userAlert__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_nComponents_scrollTable__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_nComponents_register__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_nComponents_blindInfo__ = __webpack_require__(805);








//????????????

//????????????????????????










/* eslint-disable*/
/* eslint-enable*/
//????????????

//table

//?????????????????????
// import forget from 'nComponents/restPwd';



var bindInfos = Object(__WEBPACK_IMPORTED_MODULE_21_nComponents_blindInfo__["a" /* default */])();

window.onload = function () {

    var _userAlert = Object(__WEBPACK_IMPORTED_MODULE_18_nComponents_userAlert__["a" /* default */])();

    __WEBPACK_IMPORTED_MODULE_10_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_11_plugins_http__["a" /* default */]);
    var phpLang = Object(__WEBPACK_IMPORTED_MODULE_16_components_tradeLanguagePack__["a" /* default */])() || {
        LOADING_RMB: "?????????..."
    };
    //??????????????????
    var myHover = new __WEBPACK_IMPORTED_MODULE_15_components_hoverWin__["a" /* default */]($('[data-tormb]'), 'tormb');
    // myHover.loadingTips = phpLang.LOADING_RMB;

    var canHoverRMB = true;
    // //???????????????
    // function addHoverWin($elem, attr, direction) {
    //   $($elem).off('mouseenter');
    //   $($elem).mouseenter(function(e) {
    //     if (!canHoverRMB) return;
    //     if (e.stopPropagation) e.stopPropagation();
    //     myHover.setHover(this, attr, direction);
    //   });
    //   $($elem).mouseleave(function() {
    //     if (!canHoverRMB) return;
    //     myHover.hide();
    //   });
    // }
    var user = new __WEBPACK_IMPORTED_MODULE_10_vue__["a" /* default */]({
        data: function data() {
            return {
                //????????????????????? ???????????????
                coin_show_btn: true,
                //???????????????
                havelist: true,
                //???????????????
                nonelist: true,
                //??????????????????
                coin: {
                    //??????
                    detail: '',
                    //????????????
                    over: '',
                    //??????
                    lock: '',
                    //??????
                    all: ''
                },
                //??????????????????
                showPwd: false,
                // ??????????????????
                setPwd: false,
                //?????????????????????????????????
                showReset: false,
                //?????????????????????????????????
                showResetTwo: false,
                setPwdData: {
                    p1: '',
                    p2: '',
                    regtype: ''
                },
                //??????
                //0????????? 1???????????? 2??????????????? 3??????????????? 4?????????????????????
                //10 ??????
                errorArr: {
                    p1: 0,
                    p2: 0,
                    code: 0,
                    google: 0
                },
                //????????????
                errorMes: '',
                submit_now: false,
                //????????????????????????
                disable: true,
                //????????????????????????
                voice_set: false,
                //????????????
                voice_warn: false,
                //?????????
                total: '',
                //????????????
                voice_ver: false,
                //?????????????????????
                times: '60',
                //???????????????in ?????? out ??????????????? mes
                setTimes: 'out',
                //?????????????????????
                message_data: {
                    //??????8  ?????? 7
                    action: '7'
                },
                //?????????????????????
                stepOneData: {
                    code: '',
                    action: '',
                    google_code: '',
                    scene: 'RESET_TRADE_PWD'
                },
                moverClick: false,
                //??????????????????
                resest_success: false,
                //????????????????????????
                oldScroll: {
                    scrollTop: '',
                    clientHeight: ''
                },
                //??????
                nowStatus: false,
                //????????????
                errMesAlert: '',
                //????????????
                pwdType: '',
                //??????????????????????????? 1 ?????? 2??????
                accountBi: 1,
                //?????????????????? ????????????
                disableIn: false,
                disableOut: false,
                disableChange: false,
                coinDetail: '',
                //rmb??????
                rmbPrice: '',
                //??????
                dollars: "",
                //?????????????????? ?????????
                coinListbiHave: [],
                //?????????????????? ?????????
                coinListbiNo: [],
                //???????????? ?????? ?????????
                coinListfaHave: [],
                //???????????? ?????? ?????????
                coinListfaNo: [],
                userInfo: '',
                //start-- jsj
                yuBiAccount: '',
                userLuck: '',
                showFrom: '-1',
                jsTips: '',
                jsFrom: {
                    type: 1, //1 ?????????????????????2 ?????????????????????
                    coin: '',
                    number: ''
                },
                moveClick: false,
                // end---jsj
                //????????????
                tabLoging: false,
                //?????????
                no_data: false,
                //???????????????
                inputFocusPwd: false,
                inputFocusRePwd: false,
                inputFocusCode: false,
                inputFocusGoogle: false,
                //2?????? 1 ?????? ????????????
                tabIndex: 2,
                //????????????
                emailData: {
                    regtype: 'trust'
                },
                //??????????????? ??????????????????????????????
                emailVer: false,
                userInfos: {},
                coinPrice: '',
                //promise ????????????????????????over
                isPromise: '',
                //?????????google
                isGoogle: false,
                off: true
            };
        },
        mounted: function mounted() {
            Object(__WEBPACK_IMPORTED_MODULE_12_nComponents_nav__["b" /* nav */])();
            this.getTabList();
            // ??????????????????
            if (location.href.indexOf('Tset=pwd') > -1) {
                this.showLoginChange();
            }
            // ?????? ????????????
            if (location.href.indexOf('set=tradepwd') > -1) {
                this.setPwdGo();
            }
            // ??????????????????
            if (window.location.search.indexOf('set=ressetTpwd') > -1) {
                this.resetPwdGo();
            }
        },
        updated: function updated() {
            // addHoverWin($('#dataTablefa [data-tormb]'), 'tormb', 'left');
            // addHoverWin($('#dataTablebi [data-tormb]'), 'tormb', 'left');
            // addHoverWin($('[data-old="bi"]'), 'tormb', 'top');
            // addHoverWin($('[data-old="fa"]'), 'tormb', 'top');
        },

        methods: {
            //js ---start
            showFromFun: function showFromFun(i) {
                this.showFrom = i;
            },
            subFromFun: function subFromFun(obj, i) {
                var _this = this;

                if (this.moveClick) return;
                this.moveClick = true;
                // var url = obj === 'yuBiAccount' ? '/ajax_more/overToMore' : '/ajax_more/luckyToOver';
                var url = '/ajax_more/overToMore';
                setTimeout(function () {
                    _this.jsTips = 0;
                }, 2000);
                if (!this.jsFrom.number) {
                    this.moveClick = false;
                    this.jsTips = 1;
                    return;
                }
                this.jsFrom.coin = "wcg";
                this.$http.post(url, this.jsFrom).then(function (_ref) {
                    var data = _ref.data,
                        msg = _ref.msg,
                        status = _ref.status;

                    _this.moveClick = false;
                    if (status) {
                        _this.jsTips = 4;
                        _this[obj][i].wcg_more -= _this.jsFrom.number;
                        console.log(_this[obj][i].wcg_more);
                    } else {
                        _this.jsTips = msg;
                    }
                }).catch(function (err) {
                    console.log(err);
                    _this.moveClick = false;
                });
            },

            //js --end
            //?????????
            init: function init() {
                this.errorArr = {
                    p1: 0,
                    p2: 0,
                    code: 0,
                    google: 0
                };
                this.errMes = '';
                this.setPwdData = {
                    p1: '',
                    p2: ''
                };
            },
            getUserInfo: function getUserInfo(phone, email) {
                this.userInfos.phone = phone;
                this.userInfos.email = email;
            },

            //google
            getGoogle: function getGoogle(hasGoogle) {
                if (hasGoogle) this.isGoogle = true;
            },

            //??????8?????????
            toFixedNums: function toFixedNums(value) {
                // if (value == null) value = 0;
                return Object(__WEBPACK_IMPORTED_MODULE_17_filters_filters__["d" /* toFixedNum */])(value, 8);
            },
            compPrice: function compPrice(coin, name) {
                var prices = '--';
                if (this.rmbPrice && coin - 0 > 0) {
                    if (name === 'btc') {
                        prices = Object(__WEBPACK_IMPORTED_MODULE_17_filters_filters__["d" /* toFixedNum */])(coin * this.rmbPrice, 2);
                    } else if (name === 'dob') {
                        prices = Object(__WEBPACK_IMPORTED_MODULE_17_filters_filters__["d" /* toFixedNum */])(coin * this.dollars, 2);
                    } else if (this.coinPrice) {
                        var coinName = this.coinPrice[name];
                        if (!coinName) {
                            prices = '--';
                        } else {
                            prices = Object(__WEBPACK_IMPORTED_MODULE_17_filters_filters__["d" /* toFixedNum */])(coinName[1] * this.rmbPrice * coin, 2);
                        }
                    }
                }
                return prices;
            },

            //??????????????????
            coin_detail: function coin_detail(type, coinData) {
                if (type != 'close' && coinData) {

                    this.coin.name = coinData.name;
                    this.coin.detail = this.userInfo[coinData.name + '_over'];
                    this.coin.lock = this.userInfo[coinData.name + '_lock'];
                    this.coin.all = this.userInfo[coinData.name + '_over'] + this.userInfo[coinData.name + '_lock'];

                    if (coinData.in_status) this.disableIn = false;else this.disableIn = true;

                    if (coinData.out_status) this.disableOut = false;else this.disableOut = true;

                    if (coinData.otc == 0 && coinData.coin_transfer == 0) this.disableChange = false;else this.disableChange = true;
                }
                if (type === 'start') {
                    this.moverClick = true;
                } else if (type === 'over') {
                    this.moverClick = false;
                } else if (type === 'end' && this.moverClick === true || type === 'close') {
                    this.coin_show_btn = !this.coin_show_btn;
                }
            },

            //?????????????????????
            showHave: function showHave() {
                this.nonelist = !this.nonelist;
                // Vue.nextTick(() => {
                //     this.$refs.scrollTabbi.getTbodyTds();
                //     this.$refs.scrollTabfa.getTbodyTds();
                // });
                if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_is___default()(this.userInfo, null) && this.accountBi == 1) {
                    this.no_data = true;
                }
                if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_is___default()(this.yuBiAccount, null) && this.accountBi == 2) {
                    this.no_data = true;
                }
                if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_is___default()(this.userLuck, null) && this.accountBi == 3) {
                    this.no_data = true;
                }
            },

            //?????????????????????????????????
            setPwdGo: function setPwdGo() {
                this.init();
                this.showPwd = true;
                this.setPwd = true;
            },

            //?????????????????????????????????
            resetPwdGo: function resetPwdGo() {
                this.init();
                this.showPwd = true;
                this.showReset = true;
                // this.showResetTwo = true;
                // this.resest_success = true;
            },

            //?????????????????????
            getVerCode: function getVerCode(mes_type) {
                var _this2 = this;

                this.message_data.action = mes_type;
                //???????????????????????? ?????????????????????????????????
                if (this.tabIndex == 2) this.emailVer = true;else this.emailVer = false;

                //?????????7 ???????????? ????????????????????????
                if (mes_type == 7 && this.voice_warn) {
                    this.voice_warn = false;
                    this.voice_set = false;
                } else if (mes_type == 8 && !this.voice_warn) {
                    //?????????8 ???????????????????????????????????????
                    this.voice_warn = true;
                    this.voice_ver = false;
                    this.voice_set = false;
                }

                if (this.setTimes === "out" || this.setTimes === 'mes') {
                    this.setTimes = 'in';
                    this.time_id = setInterval(function () {
                        if (_this2.times <= '0') {
                            //?????????0?????????????????????
                            clearTimeout(_this2.time_id);
                            _this2.setTimes = 'out';
                            _this2.times = '60';
                            //???????????????????????????????????? ??????????????????????????????????????????
                            if (_this2.voice_set || _this2.voice_warn) {
                                _this2.voice_ver = true;
                                _this2.voice_set = false;
                                _this2.voice_warn = false;
                            }
                        } else {
                            if (!_this2.voice_warn) _this2.voice_set = true;

                            _this2.times--;
                        }
                    }, 1000);
                    this.sent_message();
                } else {
                    return false;
                }
            },
            sent_message: function sent_message() {
                var _this3 = this;

                var url = '';
                var data = {};
                if (this.userInfos.phone && this.userInfos.email) {
                    if (this.tabIndex === 1) {
                        url = '/ajax_user/smsnocap';
                        data = this.message_data;
                    } else {
                        url = '/Emailverify/findpwd';
                        data = this.emailData;
                    }
                } else if (!this.userInfos.phone && this.userInfos.email) {
                    url = '/Emailverify/findpwd';
                    data = this.emailData;
                } else if (this.userInfos.phone && !this.userInfos.email) {
                    url = '/ajax_user/smsnocap';
                    data = this.message_data;
                }

                this.$http.post(url, data).then(function (_ref2) {
                    var data = _ref2.data,
                        status = _ref2.status,
                        msg = _ref2.msg;

                    if (status != 1) {
                        _this3.errMes = msg;
                        clearTimeout(_this3.time_id);
                        _this3.setTimes = 'out';
                        _this3.times = '60';
                        //????????????
                        _this3.nowStatus = true;
                        _this3.errMesAlert = msg;
                    }
                }).catch(function (err) {});
            },

            //???????????????
            noSpace: function noSpace(val, type) {
                this.setPwdData['' + type] = val.replace(/\s+/g, "");
            },

            //??????????????????
            codeInput: function codeInput(val, type) {
                if (val && !type) {
                    this.stepOneData.code = val.replace(/[^\d]/g, '');
                } else if (val && type === 'google') {
                    this.stepOneData.google_code = val.replace(/[^\d]/g, '');
                }
            },

            //??????
            verifyVal: function verifyVal(type, val, method, setType) {
                var nums = /\d/g;
                var sign = /[~\!@#%\$\^&\*()\+\-\=\|:\;\,\_\'\"\.<>\/?*]/g;
                var en = /[a-zA-Z]/g;
                switch (type) {
                    case 'p1':

                        if (val) {
                            if (method === 'focus') {
                                this.inputFocusPwd = true;
                            }
                            if (val.length < 6) {
                                this.errorArr.p1 = 3;
                            } else {

                                var pwdLeval = 0;
                                if (nums.test(val)) {
                                    pwdLeval++;
                                }
                                if (sign.test(val)) {
                                    pwdLeval++;
                                }

                                if (en.test(val)) {
                                    pwdLeval++;
                                }

                                switch (pwdLeval) {
                                    case 1:
                                        {
                                            this.errorArr.p1 = 5;
                                            break;
                                        }
                                    case 2:
                                        {

                                            this.errorArr.p1 = 5;
                                            break;
                                        }
                                    case 3:
                                        {
                                            this.errorArr.p1 = 10;
                                            if (method === 'enter') {
                                                this.setPwdSubmit(setType);
                                            }
                                            break;
                                        }
                                    default:
                                }
                            }
                        } else if ((method === 'submit' || method === 'enter') && !val) {
                            this.errorArr.p1 = 2;
                        } else if (method === 'focus' && !val) {
                            this.inputFocusPwd = true;
                            this.errorArr.p1 = 1;
                        } else {
                            this.inputFocusPwd = false;
                            this.errorArr.p1 = 0;
                        }
                        break;
                    case 'p2':
                        {
                            var p1Val = this.setPwdData.p1;
                            if (val) {
                                if (method === 'focus') {
                                    this.inputFocusRePwd = true;
                                }
                                if (val.length < 6) {
                                    this.errorArr.p2 = 3;
                                } else if (p1Val != val) {
                                    this.errorArr.p2 = 3;
                                } else {
                                    this.errorArr.p2 = 10;
                                    if (method === 'enter') {
                                        this.setPwdSubmit(setType);
                                    }
                                }
                            } else if ((method === 'submit' || method === 'enter') && !val) {
                                this.errorArr.p2 = 2;
                            } else if (method === 'focus' && !val) {
                                this.inputFocusRePwd = true;
                                this.errorArr.p2 = 1;
                            } else {
                                this.inputFocusRePwd = false;
                                this.errorArr.p2 = 0;
                            }
                        }
                        break;
                    default:
                        if (val) {
                            if (method === 'focus') {
                                this['inputFocus' + type] = true;
                            }
                            if (val.length < 6) {
                                this.errorArr['' + type] = 3;
                            } else {
                                this.errorArr['' + type] = 10;
                            }
                        } else if (method === 'submit' && !val) {
                            this.errorArr['' + type] = 2;
                        } else if (method === 'focus' && !val) {
                            this['inputFocus' + (type.charAt(0).toUpperCase() + type.slice(1))] = true;
                            this.errorArr['' + type] = 1;
                        } else {
                            this['inputFocus' + (type.charAt(0).toUpperCase() + type.slice(1))] = false;
                            this.errorArr['' + type] = 0;
                        }
                        break;
                }
            },

            //?????????????????????
            setPwdSubmit: function setPwdSubmit(type) {
                this.pwdType = type;
                if (this.tabChange == 1) this.setPwdData.regtype = 'phone';else this.setPwdData.regtype = 'email';
                for (var i in this.setPwdData) {
                    this.verifyVal(i, this.setPwdData[i], 'submit');
                }
                if (this.errorArr.p1 != 10 || this.errorArr.p2 != 10) {
                    return false;
                } else {
                    var url = '';
                    if (type === 'set') {
                        url = '/ajax_user/setTradePwd';
                    } else {
                        url = '/ajax_user/resetTradePwd';
                    }
                    this.setPwdAjax(url, this.setPwdData, type);
                }
            },
            setPwdAjax: function setPwdAjax(url, data, type) {
                var _this4 = this;

                this.submit_now = true;
                this.disable = false;
                this.$http.post(url, data).then(function (_ref3) {
                    var data = _ref3.data,
                        msg = _ref3.msg,
                        status = _ref3.status;

                    if (status == 1) {
                        if (type === 'set') {
                            _this4.pwdType = 'set';
                            // this.showPwd = false;
                        } else {
                            _this4.showResetTwo = false;
                            // this.showPwd = false;
                        }
                        _this4.resest_success = true;
                    } else if (data.data === 'pw1') {
                        _this4.errorArr.p1 = 4;
                        _this4.errorMes = msg;
                    } else {
                        _this4.nowStatus = true;
                        _this4.errMesAlert = msg;
                    }
                    _this4.submit_now = false;
                    _this4.disable = true;
                }).catch(function (err) {
                    _this4.submit_now = false;
                    _this4.disable = true;
                });
            },

            //??????????????????????????????
            stepTwo: function stepTwo() {
                var _this5 = this;

                this.submit_now = true;
                // ???????????? ?????? ??? ??????????????? ??????
                var tabPhone = this.userInfos.phone;
                var tabEmail = this.userInfos.email;

                if (tabPhone != '****' && tabEmail) {
                    if (this.tabIndex == 1) {
                        this.stepOneData.action = this.message_data.action;
                        this.stepOneData.regtype = 'phone';
                    } else if (this.tabIndex == 2) this.stepOneData.regtype = 'email';
                } else if (tabPhone != '****' && !tabEmail) {
                    this.stepOneData.regtype = 'phone';
                    this.stepOneData.action = this.message_data.action;
                } else {
                    this.stepOneData.regtype = 'email';
                }

                // this.stepOneData.action = this.message_data.action;
                // this.stepOneData.regtype = 'phone';

                this.verifyVal('code', this.stepOneData.code, 'submit');
                this.verifyVal('google', this.stepOneData.google_code, 'submit');

                if (this.errorArr.code == 10) {
                    this.$http.post('/ajax_user/smsVerify', this.stepOneData).then(function (_ref4) {
                        var status = _ref4.status,
                            msg = _ref4.msg;

                        if (status === 1) {
                            _this5.showResetTwo = true;
                            _this5.showReset = false;
                        } else {
                            _this5.errorMes = msg;
                            _this5.errorArr.code = 4;
                        }
                        _this5.submit_now = false;
                    }).catch(function (err) {
                        // console.log(err);
                        _this5.submit_now = false;
                    });
                } else {
                    this.submit_now = false;
                }
            },

            //?????? ??????
            tabAccount: function tabAccount(index) {
                this.accountBi = index;
                //????????????
                var url, list;
                this.userInfo && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.coinListbiHave).length === 0 && this.accountBi == 1 ? (url = '/Ajax_User/accountuser', list = 'coinListbiHave') : this.userInfo && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.yuBiAccount).length === 0 && this.accountBi == 2 ? (url = '/Ajax_more/getMore', list = 'yuBiAccount') : this.userInfo && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.userLuck).length === 0 && this.accountBi == 3 ? (url = '/Ajax_more/getMore', list = 'userLuck') : (this.no_data = false, url = '', list = null);
                if (url) {
                    this.getTabList(url, list);
                } else {
                    return;
                }
            },

            //????????????????????????
            alertfn: function alertfn() {
                this.showPwd = false;
                this.setPwd = false;
                this.showReset = false;
                this.showResetTwo = false;
                this.init();
            },

            //???????????? ---jsj
            getTabList: function getTabList(u, list) {
                var _this6 = this;

                list = list ? list : 'coinListbiHave';
                u = u ? u : '/Ajax_User/accountuser';
                var type = list == 'yuBiAccount' ? '1' : list == 'userLuck' ? '2' : '';
                this.tabLoging = true;
                this.$http.post(u, { type: type }).then(function (_ref5) {
                    var data = _ref5.data,
                        status = _ref5.status;

                    _this6.tabLoging = false;
                    _this6.total = data.total;
                    _this6[list] = data;
                    // let { user, yuBiAccount, coinPrice } = data;
                    var user = data.user,
                        coinPrice = data.coinPrice;

                    _this6.coinPrice = coinPrice;
                    _this6.userInfo = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, user);
                    // this.yuBiAccount = Object.assign({}, yuBiAccount);
                }).catch(function () {
                    _this6.tabLoging = false;
                });
            },

            //??????  ??????????????????
            userAlert: function userAlert(coin) {
                var _this7 = this;

                this.$http.post('/Ajax_User/accountuser', {
                    coin: coin
                }).then(function (_ref6) {
                    var data = _ref6.data,
                        status = _ref6.status,
                        msg = _ref6.msg;

                    if (status === 1) {
                        if (_this7.accountBi == 1) {
                            data.opt_type = 'out';
                            _userAlert.showUserAlert(data);
                        } else {
                            data.opt_type = 'in';
                            _userAlert.showUserFaAlert(data);
                        }
                    } else {
                        _this7.nowStatus = true;
                        _this7.errMesAlert = msg;
                    }
                });
            },

            //???????????? ????????????
            bindInfo: function bindInfo(type) {
                bindInfos.alertBind(type);
            },

            //??????????????????
            showLoginChange: function showLoginChange() {
                // if (this.userInfos) forgets.forgetAlert();
                if (this.userInfos) __WEBPACK_IMPORTED_MODULE_20_nComponents_register__["a" /* default */].forgetAlert('noStepOne', 2, this.isGoogle);
            },

            //????????????????????????
            closeAlert: function closeAlert() {
                this.resest_success = false;
                this.showPwd = false;
                //?????????????????????????????????????????????????????????
                if (this.setPwd === 'set') {
                    window.location.reload();
                }
            },

            //??????
            callfn: function callfn() {
                // if (this.pwdType === 'set') {
                //   window.location.reload();
                // }
            },
            tabChange: function tabChange(index) {
                this.tabIndex = index;
            },
            jumpTrade: function jumpTrade() {
                window.location.href = "/trade";
            },
            jumpCoin: function jumpCoin(item, type) {
                window.location.href = '/user/coin' + type + '?coin=' + item.name.toLowerCase();
                console.log(window.location.href = '/user/coin' + type + '?coin=' + item.name.toLowerCase());
            },
            faJump: function faJump(url) {
                window.location.href = url;
            }
        },
        components: {
            scrollTable: __WEBPACK_IMPORTED_MODULE_19_nComponents_scrollTable__["a" /* default */]
        },
        watch: {
            //????????????????????????
            //??????????????????body????????????
            showPwd: function showPwd() {
                if (this.showPwd) {
                    document.body.classList.add('no_scroll_body');
                    document.getElementsByClassName('fn_bg_content')[0].classList.remove('bg_content');
                } else {
                    document.getElementsByClassName('fn_bg_content')[0].classList.add('bg_content');
                    document.body.classList.remove('no_scroll_body');
                }
            }
        }
    }).$mount('#user');
};
/* unused harmony default export */ var _unused_webpack_default_export = ({});

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(798), __esModule: true };

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(799);
module.exports = __webpack_require__(50).Object.is;


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(78);
$export($export.S, 'Object', { is: __webpack_require__(800) });


/***/ }),

/***/ 800:
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ 801:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tools_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_alert_alert__ = __webpack_require__(77);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  if (document.getElementById('userAlert')) {
    return new __WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */]({
      data: {
        userShow: false,
        alertData: {},
        // chooseCoin: 'btc',
        //??????????????????
        //0???????????? 1??????????????? 2???????????? 3?????? 4???????????????????????? 5??????
        verifyNums: 0,
        verifyCaptcha: 0,
        changeNums: '',
        changeCaptcha: '',
        //????????? ????????????????????????
        errMes: "",
        //???????????????
        maxlength: '',
        //loading
        loading: false,
        //??????
        myAlert: '',
        outShow: true,
        inShow: false,
        //??????????????????
        stopClick: false,
        //??????????????????
        errNum: '',
        imgSrc: ''
      },
      mounted: function mounted() {
        this.myAlert = new __WEBPACK_IMPORTED_MODULE_4__tools_alert_alert__["a" /* default */]();
        this.img_ver();
      },

      methods: {
        //???????????????
        img_ver: function img_ver() {
          this.imgSrc = '/index/captcha?v=' + parseInt(Math.random() * 10000000);
        },

        //?????????????????????
        showUserAlert: function showUserAlert(_showUserAlert) {
          if (_showUserAlert) {
            this.alertData = _showUserAlert;
          }
          // console.log(this.alertData);
          this.userShow = true;
          this.outShow = true;
          this.inShow = false;
          this.init();
        },

        //?????????????????????
        showUserFaAlert: function showUserFaAlert(showUserAlert) {
          if (showUserAlert) {
            this.alertData = showUserAlert;
          }
          this.userShow = true;
          this.outShow = false;
          this.inShow = true;
          this.init();
        },
        init: function init() {
          this.changeNums = "";
          this.changeCaptcha = "";
          this.verifyNums = 0;
          this.errMes = "";
        },

        //????????????
        closeFn: function closeFn() {
          this.userShow = false;
        },

        //?????????????????????
        allexchange: function allexchange() {
          //outshow true ???????????????
          //inShow true ???????????????
          var allRange = '';
          var maxNum = parseFloat(this.alertData.maxrange);
          var faNum = parseFloat(this.alertData.priceoverfa);
          var biNum = parseFloat(this.alertData.priceoverbi);

          if (this.outShow && maxNum > biNum) {
            allRange = biNum;
          } else if (this.outShow && maxNum <= biNum) {
            allRange = maxNum;
          }

          if (this.inShow && maxNum > faNum) {
            allRange = faNum;
          } else if (this.inShow && maxNum <= faNum) {
            allRange = maxNum;
          }
          this.changeNums = allRange;
        },

        //??????
        verifInput: function verifInput(type, method) {
          //5????????????
          switch (type) {
            case 'nums':
              if (this.changeNums) {
                var val = this.changeNums;
                if (val == 0) {
                  this.verifyNums = 2;
                } else {
                  var maxValBi = parseFloat(this.alertData.priceoverbi);
                  var maxValFa = parseFloat(this.alertData.priceoverfa);
                  var vals = parseFloat(val);
                  if (this.outShow && maxValBi >= vals || this.inShow && maxValFa >= vals) {
                    this.verifyNums = 5;
                  } else if (this.outShow && maxValBi < vals || this.inShow && maxValFa < vals) {
                    this.verifyNums = 8;
                  }
                }
              } else if (!this.verifyNums && (method === 'submit' || method === 'enter')) {
                this.verifyNums = 2;
              } else if (!this.verifyNums && method === 'focus') {
                this.verifyNums = 1;
              } else {
                this.verifyNums = 0;
              }
              break;
            case 'captcha':
              if (this.changeCaptcha) {
                var _val = this.changeCaptcha;
                if (_val.length < 4) {
                  this.verifyCaptcha = 2;
                } else {
                  this.verifyCaptcha = 5;
                }
              } else if (!this.changeCaptcha && (method === 'submit' || method === 'enter')) {
                this.verifyCaptcha = 3;
              } else if (!this.changeCaptcha && method === 'focus') {
                this.verifyCaptcha = 1;
              } else {
                this.verifyCaptcha = 0;
              }
              break;
            default:
              break;

          }
        },

        //?????? ??????????????????????????? ????????? ????????????
        inputVer: function inputVer(val) {
          this.changeNums = val.replace(/[^\d.]/g, "");
          //????????????????????????????????????????????????
          if (val.indexOf(".") != '-1' && val.split('.').length <= 2) {
            var len1 = val.split(".")[0].length;
            //??????????????????????????????
            this.maxlength = len1 + 1 + parseInt(this.alertData.max);
            if (val.indexOf('.') === 0) {
              this.changeNums = '0' + val;
            }
          } else if (val.indexOf(".") != '-1' && val.split('.').length > 2) {
            this.verifyNums = 2;
          }
          //??????????????? ???maxlength????????????
          if (!val) {
            this.maxlength = "";
          }
        },

        //???????????????????????????
        OnlyNum: function OnlyNum(val) {
          this.changeCaptcha = val.replace(/[^\w\/]/g, "");
        },

        //??????
        goChange: function goChange() {
          this.verifInput('nums', 'submit');
          this.verifInput('captcha', 'submit');
          var vm = this;
          if (this.verifyNums === 5 && this.verifyCaptcha === 5) {
            this.loading = true;
            this.stopClick = true;
            Object(__WEBPACK_IMPORTED_MODULE_3_tools_http__["a" /* default */])({
              url: '/Ajax_Yibi/userInturn',
              method: 'POST',
              data: {
                uid: this.alertData.uid,
                coin: this.alertData.coin,
                opt_type: this.alertData.opt_type,
                number: this.changeNums,
                captcha: this.changeCaptcha
              },
              success: function success(_ref) {
                var status = _ref.status,
                    msg = _ref.msg,
                    data = _ref.data;

                vm.loading = false;
                vm.stopClick = false;
                if (status === 1) {
                  //????????????????????? ??????????????????
                  $('[data-btnsu="sureBtn"]').click(function () {
                    window.location.reload();
                  });
                  $('.close_cur').click(function (event) {
                    window.location.reload();
                  });
                  vm.userShow = false;
                  vm.myAlert.show(msg);
                } else if (status === '0' && data.min) {
                  vm.verifyNums = 7;
                  vm.errNum = data.min;
                } else if (status === '0' && data.max) {
                  vm.verifyNums = 6;
                  vm.errNum = data.max;
                } else if (status === '0' && data === 'captcha') {
                  vm.verifyCaptcha = 4;
                  vm.errMes = msg;
                } else {
                  vm.userShow = false;
                  vm.myAlert.show(msg);
                }
                vm.img_ver();
              },
              error: function error() {
                vm.loading = false;
                vm.stopClick = false;
              }
            }, "no err alert");
          } else {
            this.loading = false;
            this.stopClick = false;
            return false;
          }
        },
        alertfn: function alertfn() {}
      },
      watch: {
        userShow: function userShow() {
          if (this.userShow && document.getElementById('bodyContent')) {
            document.getElementById('bodyContent').classList.add('fn_hiden');
          } else if (document.getElementById('bodyContent')) {
            document.getElementById('bodyContent').classList.remove('fn_hiden');
          }
        }
      }
    }).$mount('#userAlert');
  } else {
    return {};
  }
});

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Promise__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tradeLanguagePack__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(16);








__WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_plugins_http__["a" /* default */]);

var language = Object(__WEBPACK_IMPORTED_MODULE_5__components_tradeLanguagePack__["a" /* default */])() || {
  COPY_NOT_SUPPORT: "??????????????????????????????????????????????????????????????????????????????????????? ctrl + c ????????????",
  COPY_NOT_SUPPORT_UPDATE: "???????????????????????????????????????????????????????????????????????????????????????",
  COPY_SUCCESS: "???????????????????????? ctrl + v ????????????"
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  if (document.getElementById('bindInfo')) {
    return new __WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */]({
      data: function data() {
        return {
          //????????????
          showAlert: false,
          //??????????????? ?????? ??????
          showType: '',
          //??????
          showStep: 1,
          //google ?????????
          threeStep: false,
          //????????????
          submit_now: false,
          //???????????? ??????
          emailData: {
            regtype: 'email',
            email: '',
            code: ''
          },
          //???????????? ??????
          phoneData: {
            regtype: 'phone',
            phone: '',
            code: '',
            area: ''
          },
          //google ??????
          googleData: {
            //pinless?????? remove ????????????
            regtype: 'pinless',
            //google key ???????????????
            secret: "",
            //???????????????
            code: "",
            pwd: ""
          },
          verifyType: {
            email: 0,
            code: 0,
            mo: 0,
            pwd: 0
          },
          firstData: {
            // email phone
            regtype: '',
            code: ''
          },
          area: '+86',
          //????????????
          index: 0,
          //???????????????
          chooseArea: false,
          //???????????????
          focusInputEmail: false,
          focusInputCode: false,
          focusGoogle: false,
          //?????????
          //?????????????????????
          voice: false,
          //??????????????????????????????
          voiceTimes: false,
          //????????????
          overClick: false,
          //?????????????????????????????????
          phoneWarin: false,
          times: 60,
          //?????????
          setTimes: '',
          //??????????????? ??????
          setEmailData: {
            email: '',
            regtype: 'pinless'
          },
          setPhoneData: {
            action: 7,
            phone: '',
            regtype: 'phone'
          },
          //??????
          nowStatus: false,
          errMesAlert: '',
          //??????callback??????
          callType: '',
          //??????????????????
          errPhpMes: '',
          //google key
          googleKeys: "",
          //google success alert
          successGoo: false
        };
      },

      methods: {
        //google key
        getKey: function getKey(data) {
          this.googleKeys = data;
        },

        //
        init: function init() {
          this.showStep = 1;
          this.errPhpMes = '';
          this.verifyType = {
            email: 0,
            code: 0,
            mo: 0,
            pwd: 0
          };
          this.focusInputEmail = false;
          this.focusInputCode = false;
          this.focusGoogle = false;
          //???????????? ??????
          this.emailData = {
            regtype: 'email',
            email: '',
            code: ''
          };
          //???????????? ??????
          this.phoneData = {
            regtype: 'phone',
            phone: '',
            code: '',
            area: ''
          };
          //google data
          this.googleData = {
            //pinless?????? remove ????????????
            regtype: 'pinless',
            //google key ???????????????
            secret: "",
            //???????????????
            code: "",
            pwd: ""
          };
          //??????????????????
          this.times = '60';
          this.overClick = false;
          this.voiceTimes = false;
          this.voice = false;
          this.phoneWarin = false;
          clearInterval(this.setTimes);
          this.threeStep = false;
        },

        //????????????
        alertBind: function alertBind(type) {
          /**
          * ???????????? mo
          * ???????????? email
          * ??????google?????? google
          * ??????google?????? del
          */
          this.init();
          this.showType = type;
          if (type === 'del') {
            this.googleData.regtype = 'remove';
            this.threeStep = true;
            this.showStep = 3;
          }
          this.showAlert = true;
        },
        closeAlert: function closeAlert() {
          this.init();
          this.showAlert = false;
          this.showStep = 1;
          this.successGoo = false;
          this.mesInit();
        },

        //google key copy
        copyClikc: function copyClikc() {
          if (!document.execCommand) {
            this.nowStatus = true;
            this.errMesAlert = language['COPY_NOT_SUPPORT']; //???????????????????????????
          }
          var transfer = document.getElementById('J_CopyTransfer');
          var val = document.getElementById('bind_copy').innerHTML;
          if (!transfer) {
            transfer = document.createElement('textarea');
            transfer.id = 'J_CopyTransfer';
            transfer.style.position = 'absolute';
            transfer.style.opacity = '0';
            transfer.style.width = '0';
            transfer.style.left = '0px';
            transfer.style.bottom = '0px';
            document.body.appendChild(transfer);
          }
          transfer.value = val || '';
          transfer.focus();
          transfer.select();
          try {
            var succ = document.execCommand('Copy', false, null);
            if (succ) {
              this.nowStatus = true;
              this.errMesAlert = language['COPY_SUCCESS']; //????????????
            } else {
              this.nowStatus = true;
              this.errMesAlert = language['COPY_NOT_SUPPORT']; //???????????????????????????
            }
          } catch (e) {
            if (e) {
              this.nowStatus = true;
              this.errMesAlert = language['COPY_NOT_SUPPORT_UPDATE']; //?????????????????????????????????
            }
          }
        },
        areaClick: function areaClick(data) {
          this.index = data.split(',')[0];
          this.area = data.split(',')[1];
          this.chooseArea = false;
        },

        //????????????????????????????????????
        closeArea: function closeArea(e) {
          var lists = document.getElementsByClassName('fn_bind_area')[0];
          var listLabel = document.getElementsByClassName('fn_bind_label')[0];
          if (lists && listLabel) {
            if (!lists.contains(e.target) && !listLabel.contains(e.target)) {
              this.chooseArea = false;
            }
          }
        },

        //????????????
        inputVer: function inputVer(type) {
          var nums = /^[0-9]*$/;
          var sign = /[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\_\"\'\=\|:\;\,\.<>\/?*]/g;
          switch (type) {
            case 'code':
              if (this.emailData.code && !nums.test(this.emailData.code)) {
                this.emailData.code = this.emailData.code.replace(/\D/g, '');
              } else if (this.googleData.code && !nums.test(this.googleData.code)) {
                this.googleData.code = this.googleData.code.replace(/\D/g, '');
              }
              break;
            case 'mo':
              if (this.phoneData.phone && !nums.test(this.phoneData.phone)) {
                this.phoneData.phone = this.phoneData.phone.replace(/\D/g, '');
              }
              break;
            case 'pwd':
              if (this.googleData.pwd) {
                this.googleData.pwd = this.googleData.pwd.replace(sign, '');
              }
              break;
            default:

          }
        },

        //??????
        verify: function verify(type, method) {
          var email = /^[A-Za-z0-9\u4e00-\u9fa5-_\.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          switch (type) {
            case 'email':
              if (this.emailData.email && method != 'focus') {
                var val = this.emailData.email;
                if (method === 'blur') {
                  this.focusInputEmail = false;
                }
                if (email.test(val)) {
                  this.verifyType.email = 0;
                  return true;
                } else {
                  this.verifyType.email = 3;
                  return false;
                }
                if (method === 'blur') {
                  this.focusInputEmail = false;
                }
              } else if (method === 'focus') {
                this.verifyType.email = 1;
                this.focusInputEmail = true;
                return false;
              } else if (method === 'blur') {
                this.verifyType.email = 0;
                this.focusInputEmail = false;
                return false;
              } else {
                this.verifyType.email = 2;
                return false;
              }
              break;
            case 'code':
              if ((this.emailData.code || this.googleData.code) && method != 'focus') {
                var _val = '';
                if (this.threeStep) {
                  _val = this.googleData.code;
                } else {
                  _val = this.emailData.code;
                }
                if (method === 'blur') {
                  this.focusInputCode = false;
                }
                if (_val.length < 6) {
                  this.verifyType.code = 3;
                  return false;
                } else {
                  this.verifyType.code = 0;
                  return true;
                }
              } else if (method === 'focus') {
                this.verifyType.code = 1;
                this.focusInputCode = true;
                return false;
              } else if (method === 'blur') {
                this.verifyType.code = 0;
                this.focusInputCode = false;
                return false;
              } else {
                this.verifyType.code = 2;
                return false;
              }
              break;
            case 'mo':
              if (this.phoneData.phone && method != 'focus') {
                var areas = this.area.split('+')[1];
                if (method === 'blur') {
                  this.focusInputEmail = false;
                }
                if (areas === '86' && this.phoneData.phone.length < 11) {
                  this.verifyType.mo = 3;
                  return false;
                } else {
                  this.verifyType.mo = 0;
                  return true;
                }
              } else if (method === 'focus') {
                this.verifyType.mo = 1;
                this.focusInputEmail = true;
                return false;
              } else if (method === 'blur') {
                this.verifyType.mo = 0;
                this.focusInputEmail = false;
                return false;
              } else {
                this.verifyType.mo = 2;
                return false;
              }
              break;
            case 'pwd':
              if (this.googleData.pwd && method != 'focus') {
                var _val2 = this.googleData.pwd;
                if (method === 'blur') {
                  this.focusGoogle = false;
                }
                if (_val2.length < 6) {
                  this.verifyType.pwd = 3;
                  return false;
                } else {
                  this.verifyType.pwd = 0;
                  return true;
                }
              } else if (method === 'focus') {
                this.verifyType.pwd = 1;
                this.focusGoogle = true;
                return false;
              } else if (method === 'blur') {
                this.verifyType.pwd = 0;
                this.focusGoogle = false;
                return false;
              } else {
                this.verifyType.pwd = 2;
                return false;
              }
            default:
          }
        },
        mesInit: function mesInit() {
          clearInterval(this.setTimes);
          this.times = 60;
          if (this.voiceTimes) this.voiceTimes = !this.voiceTimes;
          if (this.phoneWarin) this.phoneWarin = !this.phoneWarin;
          this.overClick = false;

          switch (this.showType) {
            case 'mo':
              if (this.showStep == 1) {
                this.voice = false;
              } else {
                this.voice = true;
              }
              break;
            case 'email':
              if (this.showStep == 1) {
                this.voice = true;
              } else {
                this.voice = false;
              }
              break;
            default:

          }
        },

        //?????????????????????
        getVerCode: function getVerCode(type) {
          var _this = this;

          if (this.overClick) {
            return false;
          } else {
            var url = '';
            switch (this.showType) {
              case 'email':
                //??????????????????????????????????????????
                //??????????????????????????????
                if (this.showStep == 1) {
                  url = '/Ajax_User/smsnocap';
                  this.messageSet(true, type);
                } else {
                  if (!this.verify('email')) return false;
                  url = '/Emailverify/findpwd';
                  this.messageSet(false);
                }
                break;
              case "mo":
                //???????????????
                if (this.showStep == 1) {
                  url = '/Emailverify/findpwd';
                  this.messageSet(false);
                } else {
                  if (!this.verify('mo')) return false;
                  url = '/Ajax_User/msg';
                  this.messageSet(true, type);
                }
                break;
              default:
                break;
            }
            this.overClick = true;
            this.timesOut();
            new __WEBPACK_IMPORTED_MODULE_4_Promise___default.a(function (resolve) {
              var postData = _this.setDatas();
              resolve(postData);
            }).then(function (postData) {
              _this.sentMes(url, postData);
            });
          }
        },

        //???????????? ??????????????????
        messageSet: function messageSet(mes, type) {
          if (mes) {
            //????????????????????????????????????
            this.voice = false;
            if (type === 'voice') {
              this.phoneWarin = true;
              this.voiceTimes = false;
              this.setPhoneData.type = 8;
            } else {
              //??????????????????????????????????????????
              this.voiceTimes = true;
              this.phoneWarin = false;
            }
            //?????????????????????????????????
          } else if (this.voiceTimes || this.phoneWarin) {
            this.voice = false;
            this.voiceTimes = false;
            this.phoneWarin = false;
          }
        },

        //???????????????????????????
        setDatas: function setDatas() {
          var postData = '';
          if (this.showType === 'mo') {
            this.setPhoneData.phone = this.phoneData.phone;
            this.setPhoneData.area = this.area;
            if (this.showStep == 1) {
              //????????????????????? ?????????
              postData = { regtype: 'phone' };
            } else {
              //????????????????????? ?????????
              postData = this.setPhoneData;
            }
          } else {
            this.setEmailData.email = this.emailData.email;
            if (this.showStep == 1) {
              //????????????????????? ?????????
              //??????action 7 ?????? 8
              if (this.setPhoneData.type == 8) postData = { action: 8 };else postData = { action: this.setPhoneData.action };
            } else {
              //????????????????????? ?????????
              postData = this.setEmailData;
            }
          }
          return postData;
        },

        //?????????
        sentMes: function sentMes(url, postData) {
          var _this2 = this;

          this.$http.post(url, postData).then(function (_ref) {
            var data = _ref.data,
                msg = _ref.msg,
                status = _ref.status;

            if (status != 1) {
              _this2.mesInit();
              if (data === 'email') {
                if (_this2.showStep == 1) {
                  _this2.verifyType.code = 4;
                } else {
                  _this2.verifyType.email = 4;
                }
                _this2.errPhpMes = msg;
              } else if (data === 'code') {
                _this2.verifyType.code = 4;
                _this2.errPhpMes = msg;
              } else {
                _this2.nowStatus = true;
                _this2.errMesAlert = msg;
              }
            }
          });
        },

        //?????????
        timesOut: function timesOut() {
          var _this3 = this;

          this.setTimes = setInterval(function () {
            if (_this3.times > 0) {
              _this3.times--;
            } else {
              _this3.mesInit();
            }
          }, 1000);
        },

        //??????
        submit: function submit() {
          this.submit_now = true;
          switch (this.showStep) {
            case 1:
              {
                var url = '/Ajax_User/verifyUser';
                if (this.showType === 'google') {
                  this.submit_now = false;
                  this.showStep = 2;
                } else {
                  if (this.showType === 'mo') {
                    this.firstData.regtype = 'email';
                  } else {
                    this.firstData.regtype = 'phone';
                  }
                  var code = this.verify('code', 'submit');
                  if (code) {
                    this.firstData.code = this.emailData.code;
                    this.submitAjax(url, this.firstData);
                  } else {
                    this.submit_now = false;
                  }
                }
              }
              break;
            case 2:
              {
                var _url = "/Ajax_User/moemail";
                if (this.showType === 'mo') {
                  var mo = this.verify('mo', 'submit');
                  var _code = this.verify('code', 'submit');
                  this.phoneData.area = this.area;
                  this.phoneData.code = this.emailData.code;
                  if (mo && _code) {
                    this.submitAjax(_url, this.phoneData);
                  } else {
                    this.submit_now = false;
                  }
                } else if (this.showType === 'google') {
                  this.threeStep = true;
                  this.showStep = 3;
                  this.submit_now = false;
                } else {
                  var email = this.verify('email', 'submit');
                  var _code2 = this.verify('code', 'submit');
                  if (email && _code2) {
                    this.submitAjax(_url, this.emailData);
                  } else {
                    this.submit_now = false;
                  }
                }
              }
              break;
            case 3:
              {
                var _url2 = "Ajax_User/googleadd";
                if (this.showType === 'google' || this.showType === 'del') {
                  var _code3 = this.verify('code', 'submit');
                  var pwd = this.verify('pwd', 'submit');
                  if (_code3 && pwd) {
                    this.googleData.secret = this.googleKeys;
                    this.submitAjax(_url2, this.googleData);
                  } else {
                    this.submit_now = false;
                  }
                }
              }
              break;
            default:
          }
        },
        submitAjax: function submitAjax(url, data) {
          var _this4 = this;

          this.$http.post(url, data).then(function (_ref2) {
            var data = _ref2.data,
                msg = _ref2.msg,
                status = _ref2.status;

            _this4.submit_now = false;
            if (status != 1) {
              _this4.errPhpMes = msg;
              if (data === 'email_code' || data === 'code') {
                _this4.verifyType.code = 4;
              } else if (data === 'email') {
                _this4.verifyType.email = 4;
                _this4.errPhpMes = msg;
              } else if (data === 'smsCaptch') {
                _this4.verifyType.code = 4;
                _this4.errPhpMes = msg;
              } else if (data === 'mo') {
                _this4.verifyType.mo = 4;
                _this4.errPhpMes = msg;
              } else if (data === 'code') {
                _this4.verifyType.code = 4;
                _this4.errPhpMes = msg;
              } else {
                _this4.nowStatus = true;
                _this4.errMesAlert = msg;
              }
            } else if (_this4.showStep == 2) {
              _this4.nowStatus = true;
              _this4.errMesAlert = msg;
              _this4.callType = 'email';
            } else if (_this4.showType === 'google' || _this4.showType === 'del') {
              _this4.showAlert = false;
              _this4.successGoo = true;
            } else {
              _this4.init();
              _this4.showStep = 2;
            }
          });
        },

        //??????callback
        callfn: function callfn() {
          if (this.callType === 'email') {
            window.location.reload();
          }
        },

        //???????????? ????????????
        reloadW: function reloadW() {
          this.successGoo = false;
          this.init();
          window.location.reload();
        }
      }

    }).$mount('#bindInfo');
  } else {
    return {};
  }
});

/***/ })

},[795]);
//# sourceMappingURL=user.index.b4bd097e05b4e027.js.map
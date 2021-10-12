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








//币币弹窗

//綁定手機號和郵箱










/* eslint-disable*/
/* eslint-enable*/
//币币弹窗

//table

//綁定手機和郵箱
// import forget from 'nComponents/restPwd';



var bindInfos = Object(__WEBPACK_IMPORTED_MODULE_21_nComponents_blindInfo__["a" /* default */])();

window.onload = function () {

    var _userAlert = Object(__WEBPACK_IMPORTED_MODULE_18_nComponents_userAlert__["a" /* default */])();

    __WEBPACK_IMPORTED_MODULE_10_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_11_plugins_http__["a" /* default */]);
    var phpLang = Object(__WEBPACK_IMPORTED_MODULE_16_components_tradeLanguagePack__["a" /* default */])() || {
        LOADING_RMB: "加载中..."
    };
    //人民币悬浮框
    var myHover = new __WEBPACK_IMPORTED_MODULE_15_components_hoverWin__["a" /* default */]($('[data-tormb]'), 'tormb');
    // myHover.loadingTips = phpLang.LOADING_RMB;

    var canHoverRMB = true;
    // //调用悬浮框
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
                //只显示资金币种 隐藏和出现
                coin_show_btn: true,
                //有资金列表
                havelist: true,
                //无资金列表
                nonelist: true,
                //币种详情列表
                coin: {
                    //类型
                    detail: '',
                    //可用余额
                    over: '',
                    //冻结
                    lock: '',
                    //总计
                    all: ''
                },
                //交易密码弹窗
                showPwd: false,
                // 设置交易密码
                setPwd: false,
                //重置交易密码第一步出现
                showReset: false,
                //重置交易密码第二步出现
                showResetTwo: false,
                setPwdData: {
                    p1: '',
                    p2: '',
                    regtype: ''
                },
                //错误
                //0为默认 1普通提示 2为空白提示 3为格式错误 4为后台返回错误
                //10 过审
                errorArr: {
                    p1: 0,
                    p2: 0,
                    code: 0,
                    google: 0
                },
                //错误内容
                errorMes: '',
                submit_now: false,
                //提交按钮可否点击
                disable: true,
                //语音验证码倒计时
                voice_set: false,
                //来电提醒
                voice_warn: false,
                //总资产
                total: '',
                //重新获取
                voice_ver: false,
                //短信验证码时间
                times: '60',
                //进入倒计时in 退出 out 语音倒计时 mes
                setTimes: 'out',
                //短信验证码数据
                message_data: {
                    //语音8  短信 7
                    action: '7'
                },
                //第一步数据保存
                stepOneData: {
                    code: '',
                    action: '',
                    google_code: '',
                    scene: 'RESET_TRADE_PWD'
                },
                moverClick: false,
                //密码修改成功
                resest_success: false,
                //首页原始滑动高度
                oldScroll: {
                    scrollTop: '',
                    clientHeight: ''
                },
                //弹窗
                nowStatus: false,
                //错误提示
                errMesAlert: '',
                //领取状态
                pwdType: '',
                //法幣和幣幣交易切換 1 法幣 2幣幣
                accountBi: 1,
                //手机端充提币 转币禁止
                disableIn: false,
                disableOut: false,
                disableChange: false,
                coinDetail: '',
                //rmb汇率
                rmbPrice: '',
                //美元
                dollars: "",
                //币种列表币币 有资金
                coinListbiHave: [],
                //币种列表币币 无资金
                coinListbiNo: [],
                //币种列表 法币 有资金
                coinListfaHave: [],
                //币种列表 法币 无资金
                coinListfaNo: [],
                userInfo: '',
                //start-- jsj
                yuBiAccount: '',
                userLuck: '',
                showFrom: '-1',
                jsTips: '',
                jsFrom: {
                    type: 1, //1 转到比币账户，2 转进余币宝账户
                    coin: '',
                    number: ''
                },
                moveClick: false,
                // end---jsj
                //数据加载
                tabLoging: false,
                //没数据
                no_data: false,
                //输入框焦点
                inputFocusPwd: false,
                inputFocusRePwd: false,
                inputFocusCode: false,
                inputFocusGoogle: false,
                //2邮箱 1 手机 默认邮箱
                tabIndex: 2,
                //邮箱重置
                emailData: {
                    regtype: 'trust'
                },
                //邮箱验证码 控制语音验证码不出现
                emailVer: false,
                userInfos: {},
                coinPrice: '',
                //promise 判断接口调用是否over
                isPromise: '',
                //是否有google
                isGoogle: false,
                off: true
            };
        },
        mounted: function mounted() {
            Object(__WEBPACK_IMPORTED_MODULE_12_nComponents_nav__["b" /* nav */])();
            this.getTabList();
            // 重置登录密码
            if (location.href.indexOf('Tset=pwd') > -1) {
                this.showLoginChange();
            }
            // 设置 交易密码
            if (location.href.indexOf('set=tradepwd') > -1) {
                this.setPwdGo();
            }
            // 重置交易密码
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
            //初始化
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

            //保留8位小数
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

            //展示币种详情
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

            //只显示资金币种
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

            //打开设置交易密码的弹窗
            setPwdGo: function setPwdGo() {
                this.init();
                this.showPwd = true;
                this.setPwd = true;
            },

            //打开重置交易密码的弹窗
            resetPwdGo: function resetPwdGo() {
                this.init();
                this.showPwd = true;
                this.showReset = true;
                // this.showResetTwo = true;
                // this.resest_success = true;
            },

            //获取短信验证码
            getVerCode: function getVerCode(mes_type) {
                var _this2 = this;

                this.message_data.action = mes_type;
                //如果为邮箱验证码 语音验证一系列将不出现
                if (this.tabIndex == 2) this.emailVer = true;else this.emailVer = false;

                //类型为7 提示语为 ‘注意接听来电’
                if (mes_type == 7 && this.voice_warn) {
                    this.voice_warn = false;
                    this.voice_set = false;
                } else if (mes_type == 8 && !this.voice_warn) {
                    //类型为8 提示语为‘点击获取验证码’
                    this.voice_warn = true;
                    this.voice_ver = false;
                    this.voice_set = false;
                }

                if (this.setTimes === "out" || this.setTimes === 'mes') {
                    this.setTimes = 'in';
                    this.time_id = setInterval(function () {
                        if (_this2.times <= '0') {
                            //计数到0的时候停止计时
                            clearTimeout(_this2.time_id);
                            _this2.setTimes = 'out';
                            _this2.times = '60';
                            //如果语音验证码倒计时开始 计时完毕开启语音验证码可点击
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
                        //放出弹窗
                        _this3.nowStatus = true;
                        _this3.errMesAlert = msg;
                    }
                }).catch(function (err) {});
            },

            //不輸入空格
            noSpace: function noSpace(val, type) {
                this.setPwdData['' + type] = val.replace(/\s+/g, "");
            },

            //只能输入数字
            codeInput: function codeInput(val, type) {
                if (val && !type) {
                    this.stepOneData.code = val.replace(/[^\d]/g, '');
                } else if (val && type === 'google') {
                    this.stepOneData.google_code = val.replace(/[^\d]/g, '');
                }
            },

            //验证
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

            //提交设置的密码
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

            //重置验证码第一步保存
            stepTwo: function stepTwo() {
                var _this5 = this;

                this.submit_now = true;
                // 單獨顯示 手機 和 郵箱的時候 判斷
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

            //切換 账户
            tabAccount: function tabAccount(index) {
                this.accountBi = index;
                //表头重置
                var url, list;
                this.userInfo && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.coinListbiHave).length === 0 && this.accountBi == 1 ? (url = '/Ajax_User/accountuser', list = 'coinListbiHave') : this.userInfo && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.yuBiAccount).length === 0 && this.accountBi == 2 ? (url = '/Ajax_more/getMore', list = 'yuBiAccount') : this.userInfo && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.userLuck).length === 0 && this.accountBi == 3 ? (url = '/Ajax_more/getMore', list = 'userLuck') : (this.no_data = false, url = '', list = null);
                if (url) {
                    this.getTabList(url, list);
                } else {
                    return;
                }
            },

            //重置交易密码关闭
            alertfn: function alertfn() {
                this.showPwd = false;
                this.setPwd = false;
                this.showReset = false;
                this.showResetTwo = false;
                this.init();
            },

            //列表数据 ---jsj
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

            //彈窗  幣幣法幣互轉
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

            //綁定手機 郵箱彈窗
            bindInfo: function bindInfo(type) {
                bindInfos.alertBind(type);
            },

            //修改登录密码
            showLoginChange: function showLoginChange() {
                // if (this.userInfos) forgets.forgetAlert();
                if (this.userInfos) __WEBPACK_IMPORTED_MODULE_20_nComponents_register__["a" /* default */].forgetAlert('noStepOne', 2, this.isGoogle);
            },

            //修改成功彈窗關閉
            closeAlert: function closeAlert() {
                this.resest_success = false;
                this.showPwd = false;
                //只有在設置交易密碼的時候才需要刷新頁面
                if (this.setPwd === 'set') {
                    window.location.reload();
                }
            },

            //回调
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
            //监听弹窗是否弹出
            //弹出式需要给body增加样式
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

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n.user_pan {`\r\n         ^\r\n      Invalid CSS after \".user_pan {\": expected \"}\", was \"`\"\r\n      in F:\\firefox\\cex\\huo\\front_end\\src\\nStyle\\user\\index\\user_index.scss (line 51, column 11)\n    at F:\\firefox\\cex\\huo\\front_end\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at F:\\firefox\\cex\\huo\\front_end\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at F:\\firefox\\cex\\huo\\front_end\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (F:\\firefox\\cex\\huo\\front_end\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.callback (F:\\firefox\\cex\\huo\\front_end\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.done [as callback] (F:\\firefox\\cex\\huo\\front_end\\node_modules\\neo-async\\async.js:7974:18)\n    at options.error (F:\\firefox\\cex\\huo\\front_end\\node_modules\\node-sass\\lib\\index.js:294:32)");

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
        //划转数量判断
        //0为不显示 1为默认提示 2为空提示 3格式 4后台返回错误提示 5通过
        verifyNums: 0,
        verifyCaptcha: 0,
        changeNums: '',
        changeCaptcha: '',
        //提交后 后台返回错误提示
        errMes: "",
        //可输入长度
        maxlength: '',
        //loading
        loading: false,
        //弹窗
        myAlert: '',
        outShow: true,
        inShow: false,
        //禁止按钮点击
        stopClick: false,
        //划转数量限额
        errNum: '',
        imgSrc: ''
      },
      mounted: function mounted() {
        this.myAlert = new __WEBPACK_IMPORTED_MODULE_4__tools_alert_alert__["a" /* default */]();
        this.img_ver();
      },

      methods: {
        //图形验证码
        img_ver: function img_ver() {
          this.imgSrc = '/index/captcha?v=' + parseInt(Math.random() * 10000000);
        },

        //币币到法币弹窗
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

        //法币到币币弹窗
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

        //关闭弹窗
        closeFn: function closeFn() {
          this.userShow = false;
        },

        //点击后全部划转
        allexchange: function allexchange() {
          //outshow true 币币到法币
          //inShow true 法币到币币
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

        //验证
        verifInput: function verifInput(type, method) {
          //5通过判断
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

        //按键 输入是限制输入内容 只能为 数字和点
        inputVer: function inputVer(val) {
          this.changeNums = val.replace(/[^\d.]/g, "");
          //有小数点的时候限制小数点后的输入
          if (val.indexOf(".") != '-1' && val.split('.').length <= 2) {
            var len1 = val.split(".")[0].length;
            //暂时限定小数点后八位
            this.maxlength = len1 + 1 + parseInt(this.alertData.max);
            if (val.indexOf('.') === 0) {
              this.changeNums = '0' + val;
            }
          } else if (val.indexOf(".") != '-1' && val.split('.').length > 2) {
            this.verifyNums = 2;
          }
          //清空的时候 把maxlength限制清空
          if (!val) {
            this.maxlength = "";
          }
        },

        //只能輸入數字和字母
        OnlyNum: function OnlyNum(val) {
          this.changeCaptcha = val.replace(/[^\w\/]/g, "");
        },

        //提交
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
                  //弹窗点击确定后 进行页面刷新
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
  COPY_NOT_SUPPORT: "您的浏覽器不支持快速複制功能，請手動選擇需要複制的內容按下 ctrl + c 鍵複制。",
  COPY_NOT_SUPPORT_UPDATE: "您的浏覽器不支持複制功能呢，請安裝最新版本浏覽器後再試試。",
  COPY_SUCCESS: "複制成功，請通過 ctrl + v 鍵粘貼。"
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  if (document.getElementById('bindInfo')) {
    return new __WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */]({
      data: function data() {
        return {
          //彈窗顯示
          showAlert: false,
          //判斷是郵箱 還是 手機
          showType: '',
          //步数
          showStep: 1,
          //google 第三步
          threeStep: false,
          //提交菊花
          submit_now: false,
          //綁定數據 邮箱
          emailData: {
            regtype: 'email',
            email: '',
            code: ''
          },
          //綁定數據 手机
          phoneData: {
            regtype: 'phone',
            phone: '',
            code: '',
            area: ''
          },
          //google 验证
          googleData: {
            //pinless绑定 remove 解除绑定
            regtype: 'pinless',
            //google key 解绑不用传
            secret: "",
            //谷歌验证码
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
          //区域选择
          index: 0,
          //区域选择框
          chooseArea: false,
          //输入框聚焦
          focusInputEmail: false,
          focusInputCode: false,
          focusGoogle: false,
          //倒计时
          //语音验证码出现
          voice: false,
          //语音验证码获取倒计时
          voiceTimes: false,
          //重复点击
          overClick: false,
          //点击获取语音验证码之后
          phoneWarin: false,
          times: 60,
          //定时器
          setTimes: '',
          //验证码发送 邮箱
          setEmailData: {
            email: '',
            regtype: 'pinless'
          },
          setPhoneData: {
            action: 7,
            phone: '',
            regtype: 'phone'
          },
          //弹窗
          nowStatus: false,
          errMesAlert: '',
          //弹窗callback类型
          callType: '',
          //后台返回错误
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
          //綁定數據 邮箱
          this.emailData = {
            regtype: 'email',
            email: '',
            code: ''
          };
          //綁定數據 手机
          this.phoneData = {
            regtype: 'phone',
            phone: '',
            code: '',
            area: ''
          };
          //google data
          this.googleData = {
            //pinless绑定 remove 解除绑定
            regtype: 'pinless',
            //google key 解绑不用传
            secret: "",
            //谷歌验证码
            code: "",
            pwd: ""
          };
          //验证码初始化
          this.times = '60';
          this.overClick = false;
          this.voiceTimes = false;
          this.voice = false;
          this.phoneWarin = false;
          clearInterval(this.setTimes);
          this.threeStep = false;
        },

        //調用彈窗
        alertBind: function alertBind(type) {
          /**
          * 绑定手机 mo
          * 绑定邮箱 email
          * 绑定google验证 google
          * 解绑google验证 del
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
            this.errMesAlert = language['COPY_NOT_SUPPORT']; //複製不成功，不支持
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
              this.errMesAlert = language['COPY_SUCCESS']; //復製成功
            } else {
              this.nowStatus = true;
              this.errMesAlert = language['COPY_NOT_SUPPORT']; //複製不成功，不支持
            }
          } catch (e) {
            if (e) {
              this.nowStatus = true;
              this.errMesAlert = language['COPY_NOT_SUPPORT_UPDATE']; //複製不成功，升級瀏覽器
            }
          }
        },
        areaClick: function areaClick(data) {
          this.index = data.split(',')[0];
          this.area = data.split(',')[1];
          this.chooseArea = false;
        },

        //點擊其他位置收起區域選擇
        closeArea: function closeArea(e) {
          var lists = document.getElementsByClassName('fn_bind_area')[0];
          var listLabel = document.getElementsByClassName('fn_bind_label')[0];
          if (lists && listLabel) {
            if (!lists.contains(e.target) && !listLabel.contains(e.target)) {
              this.chooseArea = false;
            }
          }
        },

        //输入限定
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

        //判定
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

        //发送短信验证码
        getVerCode: function getVerCode(type) {
          var _this = this;

          if (this.overClick) {
            return false;
          } else {
            var url = '';
            switch (this.showType) {
              case 'email':
                //第一步获取手机号的短袖验证码
                //第二步获取邮箱验证码
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
                //绑定邮箱号
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

        //短信邮箱 语音验证部分
        messageSet: function messageSet(mes, type) {
          if (mes) {
            //需要开启语音验证码的情况
            this.voice = false;
            if (type === 'voice') {
              this.phoneWarin = true;
              this.voiceTimes = false;
              this.setPhoneData.type = 8;
            } else {
              //点击之后开始语言验证码倒计时
              this.voiceTimes = true;
              this.phoneWarin = false;
            }
            //不开启语音验证码的情况
          } else if (this.voiceTimes || this.phoneWarin) {
            this.voice = false;
            this.voiceTimes = false;
            this.phoneWarin = false;
          }
        },

        //短信验证码提交数据
        setDatas: function setDatas() {
          var postData = '';
          if (this.showType === 'mo') {
            this.setPhoneData.phone = this.phoneData.phone;
            this.setPhoneData.area = this.area;
            if (this.showStep == 1) {
              //获取邮箱验证码 第一步
              postData = { regtype: 'phone' };
            } else {
              //获取手机验证码 第二步
              postData = this.setPhoneData;
            }
          } else {
            this.setEmailData.email = this.emailData.email;
            if (this.showStep == 1) {
              //获取手机验证码 第一步
              //短信action 7 语言 8
              if (this.setPhoneData.type == 8) postData = { action: 8 };else postData = { action: this.setPhoneData.action };
            } else {
              //获取邮箱验证码 第二步
              postData = this.setEmailData;
            }
          }
          return postData;
        },

        //验证码
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

        //倒计时
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

        //提交
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

        //弹窗callback
        callfn: function callfn() {
          if (this.callType === 'email') {
            window.location.reload();
          }
        },

        //关闭弹窗 刷新页面
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
//# sourceMappingURL=user.index.18ebfc65e55da631.js.map
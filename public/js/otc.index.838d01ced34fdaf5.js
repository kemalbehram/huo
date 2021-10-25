webpackJsonp([21],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_talking_talking__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nPages_otc_index__ = __webpack_require__(783);



/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_tables_scss__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_tables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_user_tables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_otc_otc_scss__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_otc_otc_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_otc_otc_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_page_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_nComponents_register__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tradeLanguagePack__ = __webpack_require__(51);















// import Alert from 'nComponents/Alert';
//table
// import scrollTable from 'nComponents/scrollTable';

var qs = __webpack_require__(76);
__WEBPACK_IMPORTED_MODULE_8_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9_plugins_http__["a" /* default */]);
var language = Object(__WEBPACK_IMPORTED_MODULE_12__components_tradeLanguagePack__["a" /* default */])() || {
    COPY_NOT_SUPPORT: "您的浏覽器不支持快速複制功能，請手動選擇需要複制的內容按下 ctrl + c 鍵複制。",
    COPY_NOT_SUPPORT_UPDATE: "您的浏覽器不支持複制功能呢，請安裝最新版本浏覽器後再試試。",
    COPY_SUCCESS: "複制成功，請通過 ctrl + v 鍵粘貼。",
    BTN_SURE: "確定",
    FORM_ERROR_ADDRESS: "請輸入有效的接受地址",
    FORM_ERROR_NUMBER: "請輸入提取數額",
    FORM_ERROR_OVER_NUMBER: "提取數額不符合要求",
    FORM_MSG_TRADE_PWD: "請輸入交易密碼",
    FORM_ERROR_TRADE_PWD: "交易密碼錯誤",
    FORM_MSG_CAPTCHA: "看不清？點擊圖片更換驗證碼",
    FORM_ERROR_CAPTCHA: "位數不正確",
    FORM_MSG_CODE: "請輸入手機驗證碼",
    FORM_ERROR_CODE: "手機驗證碼錯誤",
    REWARD_SUCCESS: "獎勵提取成功"
};
var otc = new __WEBPACK_IMPORTED_MODULE_8_vue__["a" /* default */]({
    data: function data() {
        return {
            //表格裡面是否有數據
            datas: false,
            // 登录状态
            isLogin: true,
            lookData: [],
            // 币种类型
            currencytype: '',
            //弹窗
            mask: false,
            recharge: false,
            //委托列表
            delegationlist: [],
            //买入
            purlist: [],
            types: 'unih',
            isbuy: 2,
            // Purchase:1,
            //卖出分页
            // cur: 1,
            // all: '',
            all1: '',
            all2: '',
            all3: '',
            currentpage: '',
            //交易记录分页
            page: 1,
            pageall: '',
            //买入分页
            sell: 1,
            sellpage: '',

            //冻结余额
            cnyxlock: '',
            //可用余额
            cnyxover: '',
            //币种
            buys: '',
            //币种名称
            buss: '',
            //支付弹窗
            paydetails: false,
            dynamic: 0,
            //发布订单的参数
            isPrice: true,
            number: '',
            price: '',
            pwdTrade: '',
            msgg: '',
            msgs: '',
            minquantity: '0',
            maxquantity: '',
            forgetPwd: true,
            //密码输入错误等等所有弹窗里面的提示语
            bckpop: '',
            //密码输入错误等等所有弹窗显示
            Backgroundpop: false,
            name: '',
            //交易记录
            transaction: [],
            sellBuyUrl: '',
            id: '',
            coin: '',
            //确认和取消按钮
            scancel: false,
            //双次点击
            dubclick: true,
            //页面中的唯一值token
            repeat_del: document.getElementById('token').value
        };
    },
    created: function created() {
        Object(__WEBPACK_IMPORTED_MODULE_10_nComponents_nav__["b" /* nav */])();
        this.tabs();
        this.Dlist(1, 'unih');
        this.Dlists(1, 'unih');
        this.clicktype('unih', 0, '尤里米');
        this.rction(1, 'unih');
        this.fbalance();
        this.getUserInfo();
    },


    methods: {
        // 获取用户信息
        getUserInfo: function getUserInfo() {
            var _this = this;

            this.$http.get('/ajax_user/getUserInfo?coin=' + this.coinFrom + '_' + this.realArea).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                // 如果后台 返回正常json 正常处理
                if (status != undefined) {
                    var intStatus = parseInt(status);
                    // status 一直是1 data 可能是null（未登录）
                    if (intStatus === 1 && data) {
                        _this.area_over = data[_this.buyForm.coin_to + '_over'];
                        _this.area_lock = data[_this.buyForm.coin_to + '_lock'];
                        _this.coin_over = data[_this.coinFrom + '_over'];
                        _this.coin_lock = data[_this.coinFrom + '_lock'];
                    }
                    // 是否登录
                    if (data) {
                        _this.isLogin = true;
                        if (data.realInfo === 0) {}
                    } else {
                        _this.isLogin = false;
                    }
                }
            });
        },
        login: function login() {
            // register.loginAlert();
            window.location.href = "/signin/?login=lo";
        },
        register: function register() {
            // register.registerAlert();
            window.location.href = "/signin/?login=re";
        },
        focus: function focus() {
            this.msgs = '';
            this.msgg = '';
        },


        //确认转币按钮
        Contransfer: function Contransfer(id, i) {
            var _this2 = this;

            //防重复点击
            if (!this.dubclick) return false;
            this.dubclick = false;
            //请求的参数
            var types = this.buys;
            this.id = id;
            this.$http.post('/ajax_otc/sale_confirm', { 'coin': types, 'oid': id, 'repeat_del': this.repeat_del }).then(function (res) {
                _this2.mask = true;
                _this2.Backgroundpop = true;
                _this2.bckpop = res.msg;
                _this2.transaction[i].status = 1;
                _this2.dubclick = true;
                _this2.repeat_del = res.data.repeat;

                setTimeout(function () {
                    _this2.mask = false;
                    _this2.Backgroundpop = false;
                }, 2500);
            });
        },


        //确认收币按钮
        Confirmreceipt: function Confirmreceipt(id, i) {
            var _this3 = this;

            if (!this.dubclick) return false;
            this.dubclick = false;

            var types = this.buys;
            this.id = id;
            this.$http.post('/ajax_otc/buy_confirm', { coin: types, oid: id, 'repeat_del': this.repeat_del }).then(function (res) {
                _this3.dubclick = true;
                _this3.repeat_del = res.data.repeat;

                _this3.mask = true;
                _this3.Backgroundpop = true;
                _this3.bckpop = res.msg;
                _this3.transaction[i].status = 2;

                setTimeout(function () {
                    _this3.mask = false;
                    _this3.Backgroundpop = false;
                }, 3000);
            });
        },

        //订单撤销
        Revokes: function Revokes(id, i, itemtype) {
            var _this4 = this;

            var types = this.buys;
            this.id = id;
            this.itemtype = itemtype;

            if (!this.dubclick) return false;
            this.dubclick = false;

            this.$http.post('/ajax_otc/orderCancel', { 'coin': types, 'oid': id, 'repeat_del': this.repeat_del }).then(function (res) {
                _this4.fbalance();
                _this4.mask = true;
                _this4.Backgroundpop = true;
                _this4.bckpop = res.msg;

                _this4.dubclick = true;
                //jsj???
                _this4.repeat_del = res.data.repeat;

                if (itemtype == 'buy') {
                    _this4.transaction[i].status = 0;
                } else if (itemtype == 'sale') {
                    _this4.transaction[i].status = 3;
                } else if (itemtype == '1') {
                    _this4.transaction[i].status = 0;
                } else if (itemtype == '2') {
                    _this4.transaction[i].status = 3;
                }
                setTimeout(function () {
                    _this4.mask = false;
                    _this4.Backgroundpop = false;
                }, 3000);
            });
        },

        //委托撤销
        Revoke: function Revoke(id, i) {
            var _this5 = this;

            if (!this.dubclick) return false;
            this.dubclick = false;

            var types = this.buys;
            this.id = id;
            this.$http.post('/ajax_otc/trustCancel', { coin: types, tid: id, repeat_del: this.repeat_del }).then(function (res) {
                if (!res.data.repeat || res.data.repeat == "false") {
                    location.reload();
                }
                _this5.dubclick = true;
                _this5.fbalance();
                _this5.repeat_del = res.data.repeat;
                if (res.status == '1') {
                    _this5.Dlists(1, _this5.buys);
                    _this5.Dlist(1, _this5.buys);
                    _this5.transaction[i].status = 2;
                }

                _this5.mask = true;
                _this5.Backgroundpop = true;
                _this5.bckpop = res.msg;
                setTimeout(function () {
                    _this5.mask = false;
                    _this5.Backgroundpop = false;
                }, 3000);
            });
        },

        //币种分类
        clicktype: function clicktype(types, index) {
            this.buys = types;
            this.dynamic = index;
            this.Dlist(1, this.buys);
            this.Dlists(1, this.buys);
            this.rction(1, this.buys);
        },


        //发布订单
        Issueorder: function Issueorder(id, price, minnumber, numberdeal, isbuy) {

            this.mask = true;
            this.recharge = true;
            this.minquantity = minnumber;
            this.maxquantity = numberdeal;
            this.price = price ? parseFloat(price).toFixed(2) : '';

            if (parseFloat(this.minquantity) > parseFloat(this.maxquantity)) {
                this.number = numberdeal ? parseFloat(numberdeal).toFixed(2) : '';
            } else {
                this.number = '';
            }

            this.id = id;
            this.isPrice = id ? false : true;

            this.isbuy = isbuy ? isbuy : this.isbuy;
            this.sellBuyUrl = id ? '/ajax_otc/deal' : '/ajax_otc/issue_trust';
        },

        //发布订单弹窗
        Recharge: function Recharge() {
            var _this6 = this;

            if (!this.dubclick) return false;
            this.dubclick = false;
            var types = this.buys.toLowerCase();
            var Urgent = this.Urgent;
            var isbuy = this.isbuy;

            this.$http.post(this.sellBuyUrl, { 'coin': types, 'type': isbuy, 'number': this.number, 'price': this.price, 'pwdTrade': this.pwdTrade, 'tid': this.id, 'minNum': this.minquantity, 'repeat_del': this.repeat_del }).then(function (res) {
                _this6.fbalance();
                if (res.status) {
                    _this6.Dlist(1, _this6.buys);
                    _this6.Dlists(1, _this6.buys);
                    _this6.rction(1, _this6.buys);
                }
                _this6.mask = true;
                _this6.Backgroundpop = true;
                _this6.bckpop = res.msg;
                setTimeout(function () {
                    _this6.mask = false;
                    _this6.Backgroundpop = false;
                }, 3000);
                _this6.dubclick = true;
                _this6.repeat_del = res.data.repeat;
            }).catch(function (error) {});
            this.mask = false;
            this.recharge = false;
        },

        // 弹窗关闭
        closeicon: function closeicon() {
            this.mask = false;
            this.recharge = false;
            this.scancel = false;
        },
        tabs: function tabs() {
            var _this7 = this;

            //币种列表
            this.$http.post('/ajax_otc/coins').then(function (res) {
                _this7.currencytype = res.data;
            });
        },

        //  交易记录
        rction: function rction(num, coin) {
            var _this8 = this;

            this.$http.post('/ajax_otc/orders', { page: num, coin: this.buys }).then(function (res) {
                _this8.transaction = res.data.list;
                _this8.all3 = res.data.pages;
            });
        },


        //冻结金额
        fbalance: function fbalance() {
            var _this9 = this;

            this.$http.post('/ajax_otc/see_balance').then(function (res) {
                _this9.cnyxlock = res.data.cnyx_lock;
                _this9.cnyxover = res.data.cnyx_over;
            });
        },

        //查看
        wallshow: function wallshow(id, coin) {
            var _this10 = this;

            this.coin = coin;
            this.id = id;
            this.$http.post('/ajax_otc/getWalletInfo ', { wallet_id: id, coin: coin }).then(function (res) {
                _this10.lookData = res.data;
                _this10.mask = true;
                _this10.paydetails = true;
            }).catch(function (error) {
                console.log('error');
            });
        },

        //关闭支付详情弹窗
        clones: function clones() {
            this.mask = false;
            this.paydetails = false;
        },

        ///ajax_otc/trusts卖出委托列表接口
        Dlist: function Dlist(num) {
            var _this11 = this;

            this.$http.post('/ajax_otc/trusts', { page: num, type: 2, coin: this.buys }).then(function (res) {
                _this11.delegationlist = res.data.list;
                _this11.all1 = res.data.pages;
            }).catch(function (error) {
                console.log('error');
            });
        },

        //买入
        Dlists: function Dlists(num) {
            var _this12 = this;

            this.$http.post('/ajax_otc/trusts', { page: num, type: 1, coin: this.buys }).then(function (res) {
                _this12.purlist = res.data.list;
                _this12.all2 = res.data.pages;
            }).catch(function (error) {
                console.log('error');
            });
        }
    }
}).$mount('#otc');
/* unused harmony default export */ var _unused_webpack_default_export = (otc);

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[782]);
//# sourceMappingURL=otc.index.838d01ced34fdaf5.js.map
webpackJsonp([21],{

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_talking_talking__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nPages_otc_index__ = __webpack_require__(782);



/***/ }),

/***/ 782:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_otc_otc_scss__ = __webpack_require__(783);
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
    COPY_NOT_SUPPORT: "??????????????????????????????????????????????????????????????????????????????????????? ctrl + c ????????????",
    COPY_NOT_SUPPORT_UPDATE: "???????????????????????????????????????????????????????????????????????????????????????",
    COPY_SUCCESS: "???????????????????????? ctrl + v ????????????",
    BTN_SURE: "??????",
    FORM_ERROR_ADDRESS: "??????????????????????????????",
    FORM_ERROR_NUMBER: "?????????????????????",
    FORM_ERROR_OVER_NUMBER: "???????????????????????????",
    FORM_MSG_TRADE_PWD: "?????????????????????",
    FORM_ERROR_TRADE_PWD: "??????????????????",
    FORM_MSG_CAPTCHA: "???????????????????????????????????????",
    FORM_ERROR_CAPTCHA: "???????????????",
    FORM_MSG_CODE: "????????????????????????",
    FORM_ERROR_CODE: "?????????????????????",
    REWARD_SUCCESS: "??????????????????"
};
var otc = new __WEBPACK_IMPORTED_MODULE_8_vue__["a" /* default */]({
    data: function data() {
        return {
            //???????????????????????????
            datas: false,
            // ????????????
            isLogin: true,
            lookData: [],
            // ????????????
            currencytype: '',
            //??????
            mask: false,
            recharge: false,
            //????????????
            delegationlist: [],
            //??????
            purlist: [],
            types: 'unih',
            isbuy: 2,
            // Purchase:1,
            //????????????
            // cur: 1,
            // all: '',
            all1: '',
            all2: '',
            all3: '',
            currentpage: '',
            //??????????????????
            page: 1,
            pageall: '',
            //????????????
            sell: 1,
            sellpage: '',

            //????????????
            usdtlock: '',
            //????????????
            usdtover: '',
            //??????
            buys: '',
            //????????????
            buss: '',
            //????????????
            paydetails: false,
            dynamic: 0,
            //?????????????????????
            isPrice: true,
            number: '',
            price: '',
            pwdTrade: '',
            msgg: '',
            msgs: '',
            minquantity: '0',
            maxquantity: '',
            forgetPwd: true,
            //??????????????????????????????????????????????????????
            bckpop: '',
            //??????????????????????????????????????????
            Backgroundpop: false,
            name: '',
            //????????????
            transaction: [],
            sellBuyUrl: '',
            id: '',
            coin: '',
            //?????????????????????
            scancel: false,
            //????????????
            dubclick: true,
            //?????????????????????token
            repeat_del: document.getElementById('token').value
        };
    },
    created: function created() {
        Object(__WEBPACK_IMPORTED_MODULE_10_nComponents_nav__["b" /* nav */])();
        this.tabs();
        this.Dlist(1, 'unih');
        this.Dlists(1, 'unih');
        this.clicktype('unih', 0, '?????????');
        this.rction(1, 'unih');
        this.fbalance();
        this.getUserInfo();
    },


    methods: {
        // ??????????????????
        getUserInfo: function getUserInfo() {
            var _this = this;

            this.$http.get('/ajax_user/getUserInfo?coin=' + this.coinFrom + '_' + this.realArea).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                // ???????????? ????????????json ????????????
                if (status != undefined) {
                    var intStatus = parseInt(status);
                    // status ?????????1 data ?????????null???????????????
                    if (intStatus === 1 && data) {
                        _this.area_over = data[_this.buyForm.coin_to + '_over'];
                        _this.area_lock = data[_this.buyForm.coin_to + '_lock'];
                        _this.coin_over = data[_this.coinFrom + '_over'];
                        _this.coin_lock = data[_this.coinFrom + '_lock'];
                    }
                    // ????????????
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


        //??????????????????
        Contransfer: function Contransfer(id, i) {
            var _this2 = this;

            //???????????????
            if (!this.dubclick) return false;
            this.dubclick = false;
            //???????????????
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


        //??????????????????
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

        //????????????
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

        //????????????
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

        //????????????
        clicktype: function clicktype(types, index) {
            this.buys = types;
            this.dynamic = index;
            this.Dlist(1, this.buys);
            this.Dlists(1, this.buys);
            this.rction(1, this.buys);
        },


        //????????????
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

        //??????????????????
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

        // ????????????
        closeicon: function closeicon() {
            this.mask = false;
            this.recharge = false;
            this.scancel = false;
        },
        tabs: function tabs() {
            var _this7 = this;

            //????????????
            this.$http.post('/ajax_otc/coins').then(function (res) {
                _this7.currencytype = res.data;
            });
        },

        //  ????????????
        rction: function rction(num, coin) {
            var _this8 = this;

            this.$http.post('/ajax_otc/orders', { page: num, coin: this.buys }).then(function (res) {
                _this8.transaction = res.data.list;
                _this8.all3 = res.data.pages;
            });
        },


        //????????????
        fbalance: function fbalance() {
            var _this9 = this;

            this.$http.post('/ajax_otc/see_balance').then(function (res) {
                _this9.usdtlock = res.data.usdt_lock;
                _this9.usdtover = res.data.usdt_over;
            });
        },

        //??????
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

        //????????????????????????
        clones: function clones() {
            this.mask = false;
            this.paydetails = false;
        },

        ///ajax_otc/trusts????????????????????????
        Dlist: function Dlist(num) {
            var _this11 = this;

            this.$http.post('/ajax_otc/trusts', { page: num, type: 2, coin: this.buys }).then(function (res) {
                _this11.delegationlist = res.data.list;
                _this11.all1 = res.data.pages;
            }).catch(function (error) {
                console.log('error');
            });
        },

        //??????
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

/***/ 783:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[781]);
//# sourceMappingURL=otc.index.0e85b90ed2c84d09.js.map
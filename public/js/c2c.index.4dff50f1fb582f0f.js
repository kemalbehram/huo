webpackJsonp([22],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nPages_c2c_index__ = __webpack_require__(779);


/***/ }),

/***/ 779:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_c2c_c2c_scss__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_c2c_c2c_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_c2c_c2c_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_page_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_nComponents_nav__ = __webpack_require__(25);








//??????
// import pageinfo from 'nComponents/pageinfo.js';


// import "element-ui/lib/index.js";




// import register from 'nComponents/register';
// import getLanguagePack from '@/components/tradeLanguagePack';
// import Pagination from 'element-ui';
// import {Pagination} from 'element-ui';
// Vue.use(Pagination) ;
// import getLanguagePack from '@/components/tradeLanguagePack';
// import Alert from 'nComponents/Alert';
var qs = __webpack_require__(76);
__WEBPACK_IMPORTED_MODULE_8_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9_plugins_http__["a" /* default */]);
var c2c = new __WEBPACK_IMPORTED_MODULE_8_vue__["a" /* default */]({
    data: function data() {
        return {
            lookData: [],
            list: {},
            //?????????
            Purchase: '',
            mask: false,
            sellwindow: false,
            Payment: false,
            buyingquantity: false,
            popup: false,
            //???????????????
            updisplay: '',
            //????????????????????????
            transactionpwd: false,
            //????????????????????????
            Selltransaction: false,
            //????????????????????????????????????
            Backgroundpop: false,
            //??????????????????
            isshow: false,
            //??????????????????????????????

            sellpwd: '',
            //??????????????????????????????????????????????????????
            bckpop: '',
            //???????????????????????????
            condow: '',
            //????????????
            paydetails: false,
            //   ????????????
            WeChataccount: '',
            //   ????????????
            Paymentmethod: '',
            //   ???????????????
            Cellphone: '',
            //   ????????????
            Transactionmode: '',
            //   ????????????
            Sellern: '',
            //   ????????????
            tramount: '',
            //   ?????????
            Ordernumber: '',
            //   ??????
            state: '',
            //??????
            // cur: 1,
            // all: '',
            all: '',
            currentpage: '',
            //token
            token: '',
            //????????????
            usdtlock: '',
            //????????????
            usdtover: '',
            //??????
            Urgent: document.getElementById('urgent').value,
            //??????
            recharge: false,
            //??????
            drawal: false,
            //???????????????
            sellpwds: '',
            //???????????????
            numwer: '',
            rechargeId: '',
            msgg: '',
            msgs: '',
            numdrawal: '',
            pwdrawal: '',
            //????????????
            forgetPwd: false,
            Revokes: true,
            //????????????
            dubclick: true,
            //?????????????????????token
            repeat_del: document.getElementById('token').value,
            // jsj 
            buylist: [],
            selllist: [],
            //????????????????????????????????? ??????
            sellBuyAlert: false, //???????????????????????????
            trpwd: '', //????????????
            trdnum: '', //????????????
            trdtype: '', //????????????
            trdid: '', //?????????id
            trdmin: '', //???????????????
            trdMax: '', //?????????????????????
            trdNumStatus: 0, //?????????????????????
            sellout: '', //?????????
            sellMin: '', //????????????????????????
            outMinStatus: '' //???????????????????????? ?????????????????????
            // itime: '',
            // itimes: '',

        };
    },

    //????????????
    mounted: function mounted() {
        this.tabs();
        //??????
        this.buySellList('Buy', 'buylist');
        // ????????????
        this.buySellList('', 'selllist');
        Object(__WEBPACK_IMPORTED_MODULE_10_nComponents_nav__["b" /* nav */])();
        // this.getcoindata(1);
    },


    //??????
    methods: {
        focus: function focus() {
            this.msgs = '';
            this.msgg = '';
        },

        //??????
        Recharges: function Recharges(id) {
            this.recharge = true;
            this.rechargeId = id;
        },
        cashwithdrawal: function cashwithdrawal(id) {
            this.drawal = true;
            this.rechargeId = id;
        },
        Recharge: function Recharge() {
            var orids = this.rechargeId;
            var sellpwds = this.sellpwds;
            var numwer = this.numwer;
            __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post("/ajax_c2c/unregister", qs.stringify({ id: orids, type: 1, sellpwds: sellpwds, numwer: numwer })).then(function (response) {
                if (response.data.data == 'price') {
                    c2c.msgg = response.data.msg;
                } else if (response.data.data == 'psw') {
                    c2c.msgs = response.data.msg;
                    c2c.forgetPwd = true;
                } else {
                    c2c.mask = true;
                    c2c.Backgroundpop = true;
                    c2c.bckpop = response.data.msg;
                    c2c.recharge = false;
                    c2c.rechargeId = '';
                    c2c.sellpwds = '';
                    c2c.numwer = '';
                    c2c.forgetPwd = true;
                    setTimeout(function () {
                        c2c.mask = false;
                        c2c.Backgroundpop = false;
                    }, 2000);
                }
            }).catch(function (error) {
                // console.log('error');
            });
        },

        //??????????????????
        withdrawal: function withdrawal() {
            var orids = this.rechargeId;
            var numdrawal = this.numdrawal;
            var pwdrawal = this.pwdrawal;
            __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post("/ajax_c2c/handtrade", qs.stringify({ id: orids, type: 2, sellpwds: pwdrawal, price: numdrawal })).then(function (response) {
                if (response.data.data == 'price') {
                    c2c.msgg = response.data.msg;
                } else if (response.data.data == 'psw') {
                    c2c.msgs = response.data.msg;
                    c2c.forgetPwd = true;
                } else {
                    c2c.mask = true;
                    c2c.Backgroundpop = true;
                    c2c.bckpop = response.data.msg;
                    c2c.drawal = false;
                    c2c.rechargeId = '';
                    c2c.pwdrawal = '';
                    c2c.numdrawal = '';
                    c2c.forgetPwd = true;
                    setTimeout(function () {
                        c2c.mask = false;
                        c2c.Backgroundpop = false;
                    }, 2000);
                }
            }).catch(function (error) {
                // console.log('error');
            });
        },


        //??????
        closeicon: function closeicon() {
            this.Selltransaction = false;
            this.transactionpwd = false;
            this.recharge = false;
            this.drawal = false;
        },

        //??????????????????
        buyimmediately: function buyimmediately() {
            if (!this.Purchase) {
                this.mask = true;
                this.buyingquantity = true;
            } else {
                if (this.Purchase < 100) {
                    this.mask = true;
                    this.popup = true;
                    this.updisplay = "The transaction amount is at least 100";
                } else if (this.Purchase % 100 !== 0) {
                    this.mask = true;
                    this.popup = true;
                    this.updisplay = "The transaction price must be an integral multiple of 100";
                } else {
                    // this.mask=true;
                    this.transactionpwd = true;
                }
            }
        },

        //??????????????????
        sellimmediately: function sellimmediately() {
            if (!this.sellout || !this.sellMin) {
                this.mask = true;
                this.sellwindow = true;
                if (!this.sellout) {
                    this.outMinStatus = 1;
                } else if (!this.sellMin) {
                    this.outMinStatus = 2;
                }
            } else {
                if (this.sellout % 100 !== 0) {
                    this.mask = true;
                    this.sellwindow = true;
                    this.outMinStatus = 3;
                } else if (this.sellMin % 100 !== 0) {
                    this.mask = true;
                    this.sellwindow = true;
                    this.outMinStatus = 4;
                } else if (parseInt(this.sellMin) > parseInt(this.sellout)) {
                    this.mask = true;
                    this.sellwindow = true;
                    this.outMinStatus = 5;
                } else {
                    this.Selltransaction = true;
                }
            }
        },

        //????????????
        Determine: function Determine() {
            this.mask = false;
            this.sellwindow = false;
        },
        Determines: function Determines() {
            this.mask = false;
            this.buyingquantity = false;
        },
        Determineplay: function Determineplay() {
            c2c.mask = false;
            c2c.popup = false;
        },

        //???????????????????????????
        Determineplaypwd: function Determineplaypwd() {
            var _this = this;

            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post("/Ajax_Newc2c/trade", //Ajax_Newc2c/trade   ajax_c2c/trade
            { 'num': this.Purchase, 'type': 1, 'val': this.trpwd, 'repeat_del': this.repeat_del }).then(function (res) {
                c2c.mask = true;
                c2c.Backgroundpop = true;
                c2c.bckpop = res.msg;
                setTimeout(function () {
                    c2c.mask = false;
                    c2c.Backgroundpop = false;
                }, 3000);
                // ????????????
                _this.dubclick = true;
                if (res.data.repeat) _this.repeat_del = res.data.repeat;
                if (res.status) {
                    c2c.trpwd = '';
                    c2c.tabs();
                }
                // console.log('??????........');
            }).catch(function (err) {
                // console.log(err);
            });
            c2c.mask = false;
            c2c.transactionpwd = false;
        },

        //??????????????????????????????
        Selltransac: function Selltransac() {
            var _this2 = this;

            //???????????????
            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post('/Ajax_Newc2c/trade', {
                'num': c2c.sellout,
                'type': 2,
                'val': c2c.sellpwd,
                'selltype': c2c.Urgent,
                'repeat_del': c2c.repeat_del,
                'min': c2c.sellMin
            }).then(function (res) {
                ////Ajax_Newc2c/trade   ajax_c2c/trade
                c2c.mask = true;
                c2c.Backgroundpop = true;
                c2c.bckpop = res.msg;
                setTimeout(function () {
                    c2c.mask = false;
                    c2c.Backgroundpop = false;
                }, 2000);
                // ????????????
                c2c.dubclick = true;
                if (res.data.repeat) _this2.repeat_del = res.data.repeat;
                if (res.status) {
                    c2c.sellpwd = '';
                    c2c.tabs();
                    c2c.buySellList('', 'selllist');
                }
                // console.log('??????........');
            }).catch(function (err) {
                // console.log(err);
            });
            c2c.mask = false;
            c2c.Selltransaction = false;
        },

        //??????
        Revoke: function Revoke(id, i, type) {
            var _this3 = this;

            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post("/Ajax_Newc2c/revokeOrder", { id: id, 'repeat_del': this.repeat_del }).then(function (res) {
                if (res.status) {
                    c2c.list[i].status = 3;
                    if (type == 1) {
                        //??????
                        console.log('111');
                        _this3.buySellList('', 'selllist');
                    } else {
                        // ????????????
                        console.log('222');
                        _this3.buySellList('Buy', 'buylist');
                    }
                    c2c.list[i].pay_time = 0;
                }
                c2c.mask = true;
                c2c.isshow = true;
                c2c.condow = res.msg;
                setTimeout(function () {
                    c2c.mask = false;
                    c2c.isshow = false;
                }, 2000);
                // ????????????jsj???
                _this3.dubclick = true;
                _this3.repeat_del = res.data.repeat;
            }).catch(function (error) {
                // console.log('error');
            });
        },

        //??????????????????
        Confirmreceipt: function Confirmreceipt(id, i) {
            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post("/ajax_newc2c/confirmPrice", { id: id, type: 1, 'repeat_del': this.repeat_del }).then(function (res) {
                if (res.status) {
                    c2c.list[i].status = 1;
                }
                c2c.mask = true;
                c2c.isshow = true;
                c2c.condow = res.msg;
                setTimeout(function () {
                    c2c.mask = false;
                    c2c.isshow = false;
                }, 2000);
                c2c.dubclick = true;
                c2c.repeat_del = res.data.repeat;
            }).catch(function (error) {
                // console.log('error');
            });
        },


        //??????????????????
        //???
        show: function show(id, type) {
            if (!this.dubclick) {
                return false;
            }
            this.dubclick = false;
            __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post("/c2c/alert", qs.stringify({ id: id, type: type })).then(function (res) {
                c2c.lookData = res.data;
                c2c.mask = true;
                c2c.paydetails = true;
                c2c.dubclick = true;
            }).catch(function (error) {
                // console.log('error');
            });
        },

        //????????????????????????
        clones: function clones() {
            c2c.mask = false;
            c2c.paydetails = false;
        },


        //??????
        getcoindata: function getcoindata(num) {
            __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post('/ajax_c2c/ajaxorder', qs.stringify({ page: num })).then(function (response) {
                c2c.list = response.data.data.list;
            });
        },

        // jsj
        // ??????????????????
        buySellList: function buySellList(isBuy, list) {
            var _this4 = this;

            var url = '' + isBuy == 'Buy' ? "ajaxBuyOrder" : "ajaxSellOrder";
            this.$http.post('/ajax_newc2c/' + url).then(function (res) {
                if (res.status) {
                    _this4[list] = res.data;
                }
            }).catch(function (err) {
                // console.log('err');
            });
        },

        //??????????????????
        buySell: function buySell(isBuy, id, min, deal) {
            this.mask = !this.mask;
            this.sellBuyAlert = !this.sellBuyAlert;
            if (!isBuy) return;
            this.trdtype = isBuy;
            this.trdid = id;
            if (!deal) {
                this.trdmin = min;
            } else {

                if (parseInt(min) > parseInt(deal)) {
                    this.trdmin = deal;
                } else {
                    this.trdmin = min;
                    this.trdMax = deal;
                }
            }
            // console.log(this.trdmin, this.trdMax)
        },

        //????????????
        buyMinFun: function buyMinFun() {
            if (this.trdnum % 100 != 0) {
                this.trdNumStatus = 1;
                return;
            } else if (parseInt(this.trdnum) < parseInt(this.trdmin)) {
                this.trdnum = '';
                this.trdNumStatus = 2;
                return;
            } else if (parseInt(this.trdnum) > parseInt(this.trdMax)) {
                this.trdnum = '';
                this.trdNumStatus = 3;
                return;
            } else {
                this.trdNumStatus = 0;
            };
        },

        //????????????????????????????????? ????????????
        submitBuySell: function submitBuySell() {
            var _this5 = this;

            if (!this.dubclick) return;
            this.dubclick = false;
            //????????????
            this.buyMinFun();
            // console.log('num', this.trdnum);
            this.$http.post('/ajax_newc2c/buyTrust', {
                sell_id: this.trdid,
                num: this.trdnum,
                val: this.trpwd,
                type: this.trdtype,
                sell_type: "1",
                repeat_del: this.repeat_del
            }).then(function (res) {
                if (res.status) {
                    _this5.tabs();
                    _this5.buySell();
                }
                if (res.data.repeat) _this5.repeat_del = res.data.repeat;
                setTimeout(function () {
                    c2c.dubclick = true;
                }, 1000);
                _this5.isshow = true;
                _this5.condow = res.msg;
                setTimeout(function () {
                    c2c.isshow = c2c.condow = '';
                }, 2300);
            }).catch(function (err) {
                // console.log('err');
                _this5.dubclick = true;
            });
        },

        //????????????
        paid: function paid(id, i) {
            if (!this.dubclick) return false;
            this.dubclick = false;
            c2c.Revokes = false;
            this.$http.post("/ajax_newc2c/payment", { id: id, 'type': 1, 'repeat_del': this.repeat_del }).then(function (res) {
                c2c.mask = true;
                c2c.isshow = true;
                c2c.condow = res.msg;
                setTimeout(function () {
                    c2c.mask = false;
                    c2c.isshow = false;
                }, 1000);
                c2c.dubclick = true;
                if (res.data.repeat) c2c.repeat_del = res.data.repeat;
                if (res.status) {
                    c2c.list[i].status = 2;
                }
            }).catch(function (error) {
                // console.log(error);
            });
        },

        //??????????????????
        login: function login() {
            // login();
            window.location.href = "/signin/?aa=lo";
        },

        //??????????????????
        tabs: function tabs() {
            var _this6 = this;

            this.$http.post('/ajax_c2c/ajaxorder').then(function (res) {
                for (var i = 0; i < res.data.list.length; i++) {
                    res.data.list[i].itime = '';
                    res.data.list[i].itimes = '0';
                }
                _this6.list = res.data.list;
                for (var i = 0; i < _this6.list.length; i++) {

                    if (_this6.list[i].status == 2 && _this6.list[i]['pay_time'] != 0) {
                        // ?????????
                        c2c.TwoH(_this6.list[i], 'pay_time', 'itime', res.data.current_time, i);
                    } else if (_this6.list[i].status == 0 && _this6.list[i]['deal_time'] != 0 && _this6.list[i].type != 2) {
                        // ?????????
                        c2c.TwoH(_this6.list[i], 'deal_time', 'itimes', res.data.current_time, i);
                    }
                }
                _this6.all = res.data.totalPage;
                _this6.usdtlock = res.data.usdt_lock;
                _this6.usdtover = res.data.usdt_over;
            });
        },

        //?????????????????????
        TwoH: function TwoH(data, T, ts, ms, i) {
            // console.log('i', i);
            if (!data) return;
            var inte = setInterval(function () {
                ms++;
                var tCuo = data[T] - ms;
                // console.log(tCuo, "data--" + data[T], "ms -- " + ms, 'status' + data.status);
                if (data.status == 0 || data.status == 2) {
                    if (tCuo > 0 && data.status == 0 && T == 'deal_time') {
                        var min = parseInt(tCuo / 60),
                            s = '';

                        if (parseInt(tCuo % 60) > 0) {
                            s = parseInt(tCuo % 60);
                        } else {
                            min = min - 1;
                            s = 59;
                        }
                        c2c.list[i][ts] = min + ":" + s;
                        // console.log(ts, c2c.list[i][ts], 'll');
                    } else if (tCuo > 0 && data.status == 2 && data.pay_time != 0) {
                        var min = parseInt(tCuo / 60),
                            s = '';
                        if (parseInt(tCuo % 60) > 0) {
                            s = parseInt(tCuo % 60);
                        } else {
                            min = min - 1;
                            s = 59;
                        }
                        c2c.list[i][ts] = min + ":" + s;
                        // console.log(ts, c2c.list[i][ts], 'll');
                    } else {
                        c2c.list[i][ts] = 0;
                        clearInterval(inte);
                    }
                } else {
                    clearInterval(inte);
                }
            }, 1000);
        }
    }
    // filters: {
    //     timeFun: function(t, type) {
    //         console.log('timeFun', t, type)
    //         return t--;
    //     }
    // }
}).$mount('#c2c');

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[778]);
//# sourceMappingURL=c2c.index.4dff50f1fb582f0f.js.map
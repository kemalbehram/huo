import 'nStyle/init.scss';
import 'nStyle/theme.scss';
import "nStyle/user/common.scss";
import "nStyle/user_tables.scss";
import 'nStyle/c2c/c2c.scss';

import '@/tools/page/page.scss';
import pages from '@/tools/page/page';
//分页
// import pageinfo from 'nComponents/pageinfo.js';


// import "element-ui/lib/index.js";
import axios from 'axios';
import Vue from 'vue';
import http from 'plugins/http';
import { nav, login } from 'nComponents/nav';
// import register from 'nComponents/register';
// import getLanguagePack from '@/components/tradeLanguagePack';
// import Pagination from 'element-ui';
// import {Pagination} from 'element-ui';
// Vue.use(Pagination) ;
// import getLanguagePack from '@/components/tradeLanguagePack';
// import Alert from 'nComponents/Alert';
const qs = require('qs');
Vue.use(http);
const c2c = new Vue({
    data() {
        return {
            lookData: [],
            list: {},
            //买入量
            Purchase: '',
            mask: false,
            sellwindow: false,
            Payment: false,
            buyingquantity: false,
            popup: false,
            //弹窗的提示
            updisplay: '',
            //交易买入密码弹窗
            transactionpwd: false,
            //交易卖出密码弹窗
            Selltransaction: false,
            //密码输入错误等等所有弹窗
            Backgroundpop: false,
            //确认收款按钮
            isshow: false,
            //交易密码里面的输入值

            sellpwd: '',
            //密码输入错误等等所有弹窗里面的提示语
            bckpop: '',
            //确认收款按钮提示语
            condow: '',
            //支付弹窗
            paydetails: false,
            //   微信账号
            WeChataccount: '',
            //   支付方式
            Paymentmethod: '',
            //   卖方手机号
            Cellphone: '',
            //   交易方式
            Transactionmode: '',
            //   卖方姓名
            Sellern: '',
            //   交易金额
            tramount: '',
            //   订单号
            Ordernumber: '',
            //   状态
            state: '',
            //分页
            // cur: 1,
            // all: '',
            all: '',
            currentpage: '',
            //token
            token: '',
            //冻结余额
            usdtlock: '',
            //可用余额
            usdtover: '',
            //加急
            Urgent: document.getElementById('urgent').value,
            //充值
            recharge: false,
            //提现
            drawal: false,
            //充值密码：
            sellpwds: '',
            //充值数量：
            numwer: '',
            rechargeId: '',
            msgg: '',
            msgs: '',
            numdrawal: '',
            pwdrawal: '',
            //忘记密码
            forgetPwd: false,
            Revokes: true,
            //双次点击
            dubclick: true,
            //页面中的唯一值token
            repeat_del: document.getElementById('token').value,
            // jsj 
            buylist: [],
            selllist: [],
            //点击订单列表的买入卖出 数据
            sellBuyAlert: false, //点击买入卖出的弹框
            trpwd: '', //交易密码
            trdnum: '', //交易金额
            trdtype: '', //交易类型
            trdid: '', //交易的id
            trdmin: '', //可买入金额
            trdMax: '', //最多可交易金额
            trdNumStatus: 0, //交易金额的状态
            sellout: '', //卖出量
            sellMin: '', //卖出最小交易金额
            outMinStatus: '', //卖出最小交易金额 和卖出量的状态
            // itime: '',
            // itimes: '',

        };
    },
    //生命周期
    mounted() {
        this.tabs();
        //买入
        this.buySellList('Buy', 'buylist');
        // 卖出数据
        this.buySellList('', 'selllist');
        nav();
        // this.getcoindata(1);
    },

    //方法
    methods: {
        focus() {
            this.msgs = '';
            this.msgg = '';
        },
        //充值
        Recharges(id) {
            this.recharge = true;
            this.rechargeId = id;
        },
        cashwithdrawal(id) {
            this.drawal = true;
            this.rechargeId = id;
        },
        Recharge() {
            var orids = this.rechargeId;
            var sellpwds = this.sellpwds;
            var numwer = this.numwer;
            axios.post("/ajax_c2c/unregister",
                    qs.stringify({ id: orids, type: 1, sellpwds: sellpwds, numwer: numwer })
                ).then(function(response) {
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
                        setTimeout(() => {
                            c2c.mask = false;
                            c2c.Backgroundpop = false;
                        }, 2000);
                    }
                })
                .catch(function(error) {　　
                    // console.log('error');
                });
        },
        //提现确认按钮
        withdrawal() {
            var orids = this.rechargeId;
            var numdrawal = this.numdrawal;
            var pwdrawal = this.pwdrawal;
            axios.post("/ajax_c2c/handtrade",
                    qs.stringify({ id: orids, type: 2, sellpwds: pwdrawal, price: numdrawal })
                ).then(function(response) {
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
                        setTimeout(() => {
                            c2c.mask = false;
                            c2c.Backgroundpop = false;
                        }, 2000);
                    }
                })
                .catch(function(error) {　　
                    // console.log('error');
                });
        },

        //分页
        closeicon() {
            this.Selltransaction = false;
            this.transactionpwd = false;
            this.recharge = false;
            this.drawal = false;
        },
        //立即买入按钮
        buyimmediately() {
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
        //立即卖出按钮
        sellimmediately() {
            if (!this.sellout || !this.sellMin) {
                this.mask = true;
                this.sellwindow = true;
                if (!this.sellout) {
                    this.outMinStatus = 1
                } else if (!this.sellMin) {
                    this.outMinStatus = 2
                }
            } else {
                if (this.sellout % 100 !== 0) {
                    this.mask = true;
                    this.sellwindow = true;
                    this.outMinStatus = 3
                } else if (this.sellMin % 100 !== 0) {
                    this.mask = true;
                    this.sellwindow = true;
                    this.outMinStatus = 4;
                } else if (parseInt(this.sellMin) > parseInt(this.sellout)) {
                    this.mask = true;
                    this.sellwindow = true;
                    this.outMinStatus = 5
                } else {
                    this.Selltransaction = true;
                }
            }
        },
        //确定按钮
        Determine() {
            this.mask = false;
            this.sellwindow = false;
        },
        Determines() {
            this.mask = false;
            this.buyingquantity = false;
        },

        Determineplay() {
            c2c.mask = false;
            c2c.popup = false;
        },
        //买入密码的确认按钮
        Determineplaypwd() {
            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post("/Ajax_Newc2c/trade", //Ajax_Newc2c/trade   ajax_c2c/trade
                { 'num': this.Purchase, 'type': 1, 'val': this.trpwd, 'repeat_del': this.repeat_del }
            ).then((res) => {
                c2c.mask = true;
                c2c.Backgroundpop = true;
                c2c.bckpop = res.msg;
                setTimeout(() => {
                    c2c.mask = false;
                    c2c.Backgroundpop = false;
                }, 3000);
                // 回复状态
                this.dubclick = true;
                if (res.data.repeat) this.repeat_del = res.data.repeat;
                if (res.status) {
                    c2c.trpwd = '';
                    c2c.tabs();
                }
                // console.log('买入........');
            }).catch(function(err) {
                // console.log(err);
            });
            c2c.mask = false;
            c2c.transactionpwd = false;
        },
        //卖出交易密码确认按钮
        Selltransac() {
            //防重复点击
            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post('/Ajax_Newc2c/trade', {
                'num': c2c.sellout,
                'type': 2,
                'val': c2c.sellpwd,
                'selltype': c2c.Urgent,
                'repeat_del': c2c.repeat_del,
                'min': c2c.sellMin
            }).then((res) => { ////Ajax_Newc2c/trade   ajax_c2c/trade
                c2c.mask = true;
                c2c.Backgroundpop = true;
                c2c.bckpop = res.msg;
                setTimeout(() => {
                    c2c.mask = false;
                    c2c.Backgroundpop = false;
                }, 2000);
                // 回复状态
                c2c.dubclick = true;
                if (res.data.repeat) this.repeat_del = res.data.repeat;
                if (res.status) {
                    c2c.sellpwd = '';
                    c2c.tabs();
                    c2c.buySellList('', 'selllist');
                }
                // console.log('卖出........');
            }).catch((err) => {　　
                // console.log(err);
            });
            c2c.mask = false;
            c2c.Selltransaction = false;
        },
        //撤销
        Revoke(id, i, type) {
            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post("/Ajax_Newc2c/revokeOrder", { id, 'repeat_del': this.repeat_del }).then((res) => {
                if (res.status) {
                    c2c.list[i].status = 3;
                    if (type == 1) {
                        //买入
                        console.log('111');
                        this.buySellList('', 'selllist');

                    } else {
                        // 卖出数据
                        console.log('222');
                        this.buySellList('Buy', 'buylist');
                    }
                    c2c.list[i].pay_time = 0;
                }
                c2c.mask = true;
                c2c.isshow = true;
                c2c.condow = res.msg;
                setTimeout(() => {
                    c2c.mask = false;
                    c2c.isshow = false;
                }, 2000);
                // 回复状态jsj???
                this.dubclick = true;
                this.repeat_del = res.data.repeat;
            }).catch(function(error) {
                // console.log('error');
            });
        },
        //确认收款按钮
        Confirmreceipt(id, i) {
            if (!this.dubclick) return false;
            this.dubclick = false;
            this.$http.post("/ajax_newc2c/confirmPrice", { id, type: 1, 'repeat_del': this.repeat_del }).then(function(res) {
                if (res.status) { c2c.list[i].status = 1 }
                c2c.mask = true;
                c2c.isshow = true;
                c2c.condow = res.msg;
                setTimeout(() => {
                    c2c.mask = false;
                    c2c.isshow = false;
                }, 2000);
                c2c.dubclick = true;
                c2c.repeat_del = res.data.repeat;
            }).catch((error) => {　　
                // console.log('error');
            });
        },

        //查看支付方式
        //???
        show(id, type) {
            if (!this.dubclick) { return false; }
            this.dubclick = false;
            axios.post("/c2c/alert",
                qs.stringify({ id, type })
            ).then((res) => {
                c2c.lookData = res.data;
                c2c.mask = true;
                c2c.paydetails = true;
                c2c.dubclick = true;
            }).catch(function(error) {　　
                // console.log('error');
            });
        },
        //关闭支付详情弹窗
        clones() {
            c2c.mask = false;
            c2c.paydetails = false;
        },

        //分页
        getcoindata(num) {
            axios.post('/ajax_c2c/ajaxorder', qs.stringify({ page: num }))
                .then(response => {
                    c2c.list = response.data.data.list;
                })
        },
        // jsj
        // 买入卖出列表
        buySellList(isBuy, list) {
            let url = '' + isBuy == 'Buy' ? "ajaxBuyOrder" : "ajaxSellOrder";
            this.$http.post('/ajax_newc2c/' + url)
                .then(res => {
                    if (res.status) {
                        this[list] = res.data;
                    }
                }).catch(err => {
                    // console.log('err');
                })
        },
        //买入，和卖出
        buySell(isBuy, id, min, deal) {
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
        //验证金额
        buyMinFun() {
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
        //点击买入订单和卖出订单 提交数据
        submitBuySell() {
            if (!this.dubclick) return;
            this.dubclick = false;
            //验证金额
            this.buyMinFun();
            // console.log('num', this.trdnum);
            this.$http.post('/ajax_newc2c/buyTrust', {
                sell_id: this.trdid,
                num: this.trdnum,
                val: this.trpwd,
                type: this.trdtype,
                sell_type: "1",
                repeat_del: this.repeat_del,
            }).then(res => {
                if (res.status) {
                    this.tabs();
                    this.buySell();
                }
                if (res.data.repeat) this.repeat_del = res.data.repeat;
                setTimeout(function() { c2c.dubclick = true; }, 1000);
                this.isshow = true;
                this.condow = res.msg;
                setTimeout(function() { c2c.isshow = c2c.condow = '' }, 2300);
            }).catch(err => {
                // console.log('err');
                this.dubclick = true;
            })
        },
        //我已付款
        paid(id, i) {
            if (!this.dubclick) return false;
            this.dubclick = false;
            c2c.Revokes = false;
            this.$http.post("/ajax_newc2c/payment", { id, 'type': 1, 'repeat_del': this.repeat_del }).then(function(res) {
                c2c.mask = true;
                c2c.isshow = true;
                c2c.condow = res.msg;
                setTimeout(() => {
                    c2c.mask = false;
                    c2c.isshow = false;
                }, 1000);
                c2c.dubclick = true;
                if (res.data.repeat) c2c.repeat_del = res.data.repeat;
                if (res.status) {
                    c2c.list[i].status = 2;
                }
            }).catch(function(error) {　　
                // console.log(error);
            });
        },
        //页面中的登陆
        login() {
            // login();
            window.location.href = "/signin/?aa=lo";

        },
        //下边的大表格
        tabs() {
            this.$http.post('/ajax_c2c/ajaxorder').then(res => {
                for (var i = 0; i < res.data.list.length; i++) {
                    res.data.list[i].itime = '';
                    res.data.list[i].itimes = '0';
                }
                this.list = res.data.list;
                for (var i = 0; i < this.list.length; i++) {

                    if (this.list[i].status == 2 && this.list[i]['pay_time'] != 0) {
                        // 已付款
                        c2c.TwoH(this.list[i], 'pay_time', 'itime', res.data.current_time, i);
                    } else if (this.list[i].status == 0 && this.list[i]['deal_time'] != 0 && this.list[i].type != 2) {
                        // 已匹配
                        c2c.TwoH(this.list[i], 'deal_time', 'itimes', res.data.current_time, i);
                    }
                }
                this.all = res.data.totalPage;
                this.usdtlock = res.data.usdt_lock;
                this.usdtover = res.data.usdt_over;
            })
        },
        //確認付款倒计时
        TwoH(data, T, ts, ms, i) {
            // console.log('i', i);
            if (!data) return;
            var inte = setInterval(function() {
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
    },
    // filters: {
    //     timeFun: function(t, type) {
    //         console.log('timeFun', t, type)
    //         return t--;
    //     }
    // }
}).$mount('#c2c');
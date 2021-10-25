import 'nStyle/init.scss';
import 'nStyle/theme.scss';
import "nStyle/user/common.scss";
import "nStyle/user_tables.scss";
import 'nStyle/otc/otc.scss';

import '@/tools/page/page.scss';
import pages from '@/tools/page/page';

import axios from 'axios';
import Vue from 'vue';
import http from 'plugins/http';
import { nav } from 'nComponents/nav';
import register from 'nComponents/register';
import getLanguagePack from '@/components/tradeLanguagePack';
// import Alert from 'nComponents/Alert';
//table
// import scrollTable from 'nComponents/scrollTable';

const qs = require('qs');
Vue.use(http);
let language = getLanguagePack() || {
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
const otc = new Vue({
    data() {
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
            usdtlock: '',
            //可用余额
            usdtover: '',
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
            repeat_del: document.getElementById('token').value,
        }
    },

    created() {
        nav();
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
        getUserInfo() {
            this.$http.get(`/ajax_user/getUserInfo?coin=${this.coinFrom}_${this.realArea}`)
                .then(({ status, data }) => {
                    // 如果后台 返回正常json 正常处理
                    if (status != undefined) {
                        let intStatus = parseInt(status);
                        // status 一直是1 data 可能是null（未登录）
                        if (intStatus === 1 && data) {
                            this.area_over = data[`${this.buyForm.coin_to}_over`];
                            this.area_lock = data[`${this.buyForm.coin_to}_lock`];
                            this.coin_over = data[`${this.coinFrom}_over`];
                            this.coin_lock = data[`${this.coinFrom}_lock`];
                        }
                        // 是否登录
                        if (data) {
                            this.isLogin = true;
                            if (data.realInfo === 0) {

                            }
                        } else {
                            this.isLogin = false;
                        }
                    }
                })

        },

        login() {
            // register.loginAlert();
            window.location.href = "/signin/?login=lo";

        },
        register() {
            // register.registerAlert();
            window.location.href = "/signin/?login=re"

        },
        focus() {
            this.msgs = '';
            this.msgg = '';
        },



        //确认转币按钮
        Contransfer(id, i) {
            //防重复点击
            if (!this.dubclick) return false;
            this.dubclick = false;
            //请求的参数
            var types = this.buys;
            this.id = id;
            this.$http.post('/ajax_otc/sale_confirm', { 'coin': types, 'oid': id, 'repeat_del': this.repeat_del })
                .then(res => {
                    this.mask = true;
                    this.Backgroundpop = true;
                    this.bckpop = res.msg;
                    this.transaction[i].status = 1;
                    this.dubclick = true;
                    this.repeat_del = res.data.repeat;

                    setTimeout(() => {
                        this.mask = false;
                        this.Backgroundpop = false;
                    }, 2500);

                })
        },


        //确认收币按钮
        Confirmreceipt(id, i) {

            if (!this.dubclick) return false;
            this.dubclick = false;

            var types = this.buys;
            this.id = id;
            this.$http.post('/ajax_otc/buy_confirm', { coin: types, oid: id, 'repeat_del': this.repeat_del })
                .then(res => {
                    this.dubclick = true;
                    this.repeat_del = res.data.repeat;

                    this.mask = true;
                    this.Backgroundpop = true;
                    this.bckpop = res.msg;
                    this.transaction[i].status = 2;

                    setTimeout(() => {
                        this.mask = false;
                        this.Backgroundpop = false;
                    }, 3000);
                })
        },
        //订单撤销
        Revokes(id, i, itemtype) {
            var types = this.buys;
            this.id = id;
            this.itemtype = itemtype;

            if (!this.dubclick) return false;
            this.dubclick = false;

            this.$http.post('/ajax_otc/orderCancel', { 'coin': types, 'oid': id, 'repeat_del': this.repeat_del })
                .then(res => {
                    this.fbalance();
                    this.mask = true;
                    this.Backgroundpop = true;
                    this.bckpop = res.msg;

                    this.dubclick = true;
                    //jsj???
                    this.repeat_del = res.data.repeat;

                    if (itemtype == 'buy') {
                        this.transaction[i].status = 0;
                    } else if (itemtype == 'sale') {
                        this.transaction[i].status = 3;
                    } else if (itemtype == '1') {
                        this.transaction[i].status = 0;
                    } else if (itemtype == '2') {
                        this.transaction[i].status = 3;
                    }
                    setTimeout(() => {
                        this.mask = false;
                        this.Backgroundpop = false;
                    }, 3000);
                })
        },
        //委托撤销
        Revoke(id, i) {
            if (!this.dubclick) return false;
            this.dubclick = false;

            var types = this.buys;
            this.id = id;
            this.$http.post('/ajax_otc/trustCancel', { coin: types, tid: id, repeat_del: this.repeat_del })
                .then(res => {
                    if (!res.data.repeat || res.data.repeat == "false") { location.reload() }
                    this.dubclick = true;
                    this.fbalance();
                    this.repeat_del = res.data.repeat;
                    if (res.status == '1') {
                        this.Dlists(1, this.buys);
                        this.Dlist(1, this.buys);
                        this.transaction[i].status = 2;
                    }

                    this.mask = true;
                    this.Backgroundpop = true;
                    this.bckpop = res.msg;
                    setTimeout(() => {
                        this.mask = false;
                        this.Backgroundpop = false;
                    }, 3000);
                })
        },
        //币种分类
        clicktype(types, index) {
            this.buys = types;
            this.dynamic = index;
            this.Dlist(1, this.buys);
            this.Dlists(1, this.buys);
            this.rction(1, this.buys);
        },


        //发布订单
        Issueorder(id, price, minnumber, numberdeal, isbuy) {

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
        Recharge() {
            if (!this.dubclick) return false;
            this.dubclick = false;
            var types = this.buys.toLowerCase();
            var Urgent = this.Urgent;
            var isbuy = this.isbuy;

            this.$http.post(this.sellBuyUrl, { 'coin': types, 'type': isbuy, 'number': this.number, 'price': this.price, 'pwdTrade': this.pwdTrade, 'tid': this.id, 'minNum': this.minquantity, 'repeat_del': this.repeat_del }).then(
                res => {
                    this.fbalance();
                    if (res.status) {
                        this.Dlist(1, this.buys);
                        this.Dlists(1, this.buys);
                        this.rction(1, this.buys);
                    }
                    this.mask = true;
                    this.Backgroundpop = true;
                    this.bckpop = res.msg;
                    setTimeout(() => {
                        this.mask = false;
                        this.Backgroundpop = false;
                    }, 3000);
                    this.dubclick = true;
                    this.repeat_del = res.data.repeat;
                }).catch(function(error) {});
            this.mask = false;
            this.recharge = false;
        },
        // 弹窗关闭
        closeicon() {
            this.mask = false;
            this.recharge = false;
            this.scancel = false;
        },

        tabs() { //币种列表
            this.$http.post('/ajax_otc/coins')
                .then(res => {
                    this.currencytype = res.data;
                })

        },
        //  交易记录
        rction(num, coin) {
            this.$http.post('/ajax_otc/orders', { page: num, coin: this.buys })
                .then(res => {
                    this.transaction = res.data.list;
                    this.all3 = res.data.pages;

                })
        },

        //冻结金额
        fbalance() {
            this.$http.post('/ajax_otc/see_balance')
                .then(res => {
                    this.usdtlock = res.data.usdt_lock;
                    this.usdtover = res.data.usdt_over;
                })
        },
        //查看
        wallshow(id, coin) {
            this.coin = coin;
            this.id = id;
            this.$http.post('/ajax_otc/getWalletInfo ', { wallet_id: id, coin: coin })
                .then(res => {
                    this.lookData = res.data;
                    this.mask = true;
                    this.paydetails = true;
                }).catch(function(error) {　　
                    console.log('error');
                });
        },
        //关闭支付详情弹窗
        clones() {
            this.mask = false;
            this.paydetails = false;
        },
        ///ajax_otc/trusts卖出委托列表接口
        Dlist(num) {
            this.$http.post('/ajax_otc/trusts', { page: num, type: 2, coin: this.buys })
                .then(res => {
                    this.delegationlist = res.data.list;
                    this.all1 = res.data.pages;
                }).catch(function(error) {　　
                    console.log('error');
                });
        },
        //买入
        Dlists(num) {
            this.$http.post('/ajax_otc/trusts', { page: num, type: 1, coin: this.buys })
                .then(res => {
                    this.purlist = res.data.list;
                    this.all2 = res.data.pages;
                }).catch(function(error) {　　
                    console.log('error');
                });
        },
    }
}).$mount('#otc');
export default otc;
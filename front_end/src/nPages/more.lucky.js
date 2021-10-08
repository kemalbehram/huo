import 'nStyle/init.scss';
import 'nStyle/theme.scss';
import "nStyle/more/lucky.scss";
import "nStyle/leave.scss"
import Vue from 'vue';
import jsjAlert from 'nComponents/jsjAlert';
import '@/tools/page/page.scss';
import pages from '@/tools/page/page';
import http from 'plugins/http';
Vue.use(http);
import {
    nav
} from 'nComponents/nav';
//table
let luck = new Vue({
    data() {
        return {
            user: '', //账户信息
            amount: '0.00', //结算金额
            term: '', //第几期
            result: '', //上一期结果
            times: '', //截至投注时间
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
            //大小单双
            num11: '',
            num12: '',
            num13: '',
            num14: '',
            sumMoney: 0,
            from: {
                sum_money: "",
                coin_name: 'wcg', //1：猜大小2：猜数字 3：猜单双
                money: [],
                period_id: ''
            },
            recordData: [], //投注记录 开奖记录 投注趋势
            periodData: [], //期数截止时间
            nowCountData: [], //当期信息
            accountData: [], //账户信息
            lastData: [], //上一期
            returnData: [],
            guessData: [],
            inputData: [], //投注记录
            canClick: true,
            stoptime: '', //距离结束时间
            totalTime: '',
            // canClick: true,
            all: '',
            systemtime: '',
            errMsg: '',
            nowStatus: 0,
            isMove: false,
            tabChange: '1',
            showResult: false,
            outNum: '', //提现金额
            showAlert: false
        };
    },
    mounted() {
        nav();
        this.getInputData(1); //投注记录
        this.getqData(1);
        this.getData(1);
        this.getDetailData(1);
        this.getPeriod();
        this.getNowCount(); //当期数据
        this.getAcountData(); //账户信息
        this.getLastData();
    },

    methods: {
        // 消息提示
        tipsFun(msg) {
            this.nowStatus = 1;
            this.errMsg = msg;
            setTimeout(() => {
                this.nowStatus = 0;
                this.errMsg = '';
                this.showResult = false;
            }, 3000)
        },
        cancel() {
            // this.showResult = false;
            // this.from.money = [];
            location.href = "/more/lucky"
        },
        changeInput(i) {
            this.sumMoney = parseFloat(this.sumMoney) - parseFloat(this[i]);
            this[i] = '';
            this.from.money.pop();
        },
        resetData() {
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
        handData() {
            for (var i = 0; i < 15; i++) {
                if (i == 10 || this['num' + i] == 0) {
                    continue;
                } else {
                    if (this['num' + i] > 1) {
                        this.from.money.push({
                            [i]: this['num' + i]
                        });
                        this.sumMoney += parseFloat(this['num' + i]);
                    } else {
                        this['num' + i] = '';
                    }
                }
            }
            if (this.from.money.length === 0) {
                this.tipsFun('The bet amount is between 2~200！')
                return;
            } else if (this.sumMoney > 200) {
                this.tipsFun('The maximum bet is 200!')
                this.resetData();
                return;
            } else {
                this.showResult = true;
            }
        },
        //tab切换获取列表数据
        getqData(tab) {
            this.tabChange = tab;
            if (this.tabChange == "1") {
                this.getInputData(1)
            }
            if (this.tabChange == "2") {
                this.getData(1)
            }
            if (this.tabChange == "3") {
                this.getguessData(1)
            } else {
                // this.getData(1)
            }

        },
        getDetailData(tab) {
            this.tabDetailChange = tab;
            if (this.tabDetailChange == "1") {
                this.getguessData(1)

            } else {
                this.getreturnData(1)
            }
        },
        //提交下注
        subFrom() {
            if (this.sumMoney > this.accountData.userLucky) {
                this.tipsFun('Insufficient account amount!')
                this.resetData();
                return
            }
            if (this.isMove) return;
            this.isMove = true;
            this.from.sum_money = this.sumMoney
            this.$http.post('/ajax_lucky/userBill', this.from).then(({
                msg,
                status
            }) => {
                if (status == 1) {
                    this.tipsFun('success')
                } else {
                    this.tipsFun('fail')
                }
                setTimeout(() => {
                    this.isMove = false;
                    location.href = "/more/lucky"
                }, 2000)
            }).catch(err => {
                console.log(err);
                setTimeout(() => {
                    this.isMove = false;
                }, 800);
            })
        },
        getPeriod() {
            this.$http.post('/ajax_lucky/getPeriod', this.message_data)
                .then((res) => {
                    if (res.status == 1) {
                        this.periodData = res.data
                        this.stoptime = res.data.end_date
                    }
                })
                .catch(err => {
                    console.log('err');

                });
        },
        // 当期信息
        getNowCount() {
            this.$http.post('/ajax_lucky/countNow', this.message_data)
                .then((res) => {
                    if (res.sttaus == 1) {} else {
                        this.nowCountData = res.data
                    }
                })
                .catch(err => {
                    console.log('err');
                });
        },
        //提现之前
        luckOut() {
            if (!(this.accountData.turnover / this.accountData.wcg_lucky_lock >= 3)) {
                this.tipsFun('The effective bet amount is not enough!');
                return;
            } else {
                this.showAlert = true;
            }
        },
        //提现
        luckOutOk(isOk) {
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
                    this.$http.post(`/ajax_more/luckyToOver?number=${parseInt(this.outNum)}`).then(res => {
                        if (res.status == 1) {
                            this.tipsFun('success');
                        } else {
                            this.tipsFun('fail');
                        }
                        setTimeout(() => {
                            location.href = "/more/lucky"
                        }, 3000)
                    }).catch(err => {
                        console.log('luckOut', err);
                        this.isMove = false;
                    })
                    setTimeout(() => {
                        this.isMove = false;
                    }, 800)
                }
            } else {
                this.showAlert = false;
                this.outNum = '';
            }
        },
        // 账户信息
        getAcountData() {
            this.$http.post('/ajax_lucky/getUserLucky', this.message_data)
                .then((res) => {
                    if (res.status == 1) {
                        this.accountData = res.data
                    } else {}
                })
                .catch(err => {
                    console.log('err');
                });
        },
        // 上一期
        getLastData() {
            this.$http.post('/ajax_lucky/getHash', this.message_data)
                .then((res) => {
                    if (res.status == 1) {
                        this.lastData = res.data
                    }
                })
                .catch(err => {
                    console.log('err');
                });
        },
        //投注记录
        getInputData(num) {
            if (num === '4') return false;
            // this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.$http.post('/ajax_lucky/getLuck?p=' + num + "&type=" + this.tabChange)
                .then((res) => {
                    this.recordData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (num - 1) * 1
                })
                .catch(err => {
                    console.log('err');
                });
        },
        //开奖记录
        getData(num) {
            if (num === '4') return false;
            // this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.$http.post('/ajax_lucky/getHashLog?p=' + num)
                .then((res) => {
                    this.recordData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (num - 1) * 1
                })
                .catch(err => {
                    console.log('err');
                });
        },

        // 账户明细----竞猜记录
        getguessData(num) {
            // this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.$http.post('/ajax_lucky/luckUserLog?p=' + num + "&type=" + this.tabDetailChange)
                .then((res) => {
                    this.recordData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (num - 1) * 1
                })
                .catch(err => {
                    console.log('err');
                });
        },
        // 账户明细----划转记录、
        getreturnData(num) {
            // this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.$http.post('/ajax_lucky/getLuckyLog?p=' + num)
                .then((res) => {
                    // debugger
                    this.recordData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (num - 1) * 1
                })
                .catch(err => {
                    console.log('err');
                });
        },
        //分页
        getPageData(num) {
            if (this.tabChange === 4) return;
            var url = this.tabChange === 1 ? '/ajax_lucky/getLuck' : this.tabChange === 2 ? '/ajax_lucky/getHashLog' : this.tabDetailChange === 1 ? '/ajax_lucky/luckUserLog' : '/ajax_lucky/getLuckyLog';
            this.$http.post(`${url}?p=${num}&type=${this.tabChange}`).then(
                (res) => {
                    luck.recordData = res.data.list;
                    luck.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10); 
                    this.$forceUpdate();
                    luck.pagenum = (num - 1) * 1
                }).catch(err => {
                console.log('err');
            });
        },
    },
    filters: {
        handTime(t) {
            var TT = new Date(t * 1000);
            return TT.getFullYear() + '-' + (TT.getMonth() + 1) + '-' + TT.getDate() + "  " + TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
        },
        numFilter(value) {
            // 截取当前数据到小数点后两位
            let realVal = parseFloat(value).toFixed(2)
            return realVal
        },
    },

}).$mount('#luckHash');
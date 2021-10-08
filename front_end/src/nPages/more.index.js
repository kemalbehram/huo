import 'nStyle/init.scss';
import 'nStyle/theme.scss';
// import "nStyle/activity.scss";
import "nStyle/more/lucky.scss";
import "nStyle/leave.scss"
import Vue from 'vue';
import pages from '@/tools/page/page';
import http from 'plugins/http';
Vue.use(http);
import {
    nav
} from 'nComponents/nav';

//table
new Vue({
    data() {
        return {
            subData: {
                name: '',
                mo: '',
                address: '',
                bak: ''
            },
            coinAll: '',
            showslidebox: false, //划转显示与否
            frontcover: false, //划转时遮罩
            userList: [],
            listData: [], //数据列表
            coinAllCount: [],
            extraData: [], //我的利息
            isShow: 0,
            errMsg: '',
            tabChange: 1,
            isMove: false,
            coinFlag: false,
            coinnum: '',
            leavenum: '',
            all: '',
            nowStatus: false, //错误消息显示隐藏，同layer一样
            value: 'wcg',
            currentpage: '',
            pagenum: '', //列表数据序号

            errorArr: { //错误提示
                //0 为默认情况 不展示，1为提示 2为空白提示 3为格式错误 4为后台放回
                //密码 5 弱 6 中 7 强 8 两次对比
                //10过审
                accStatus: 0, //0为空 1
                pwdStatus: 0,
            },


        };
    },
    mounted() {
        nav();
        this.getRecord();
        this.coinAllCountData();
        this.getqData(1)

    },
    // filters: {
    //     handTime(t) {
    //         var TT = new Date(t * 1000);
    //         return TT.getFullYear() + '/' + (TT.getMonth() + 1) + '/' + TT.getDate() +  TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
    //     }
    // },
    methods: {
        slideBtn() {
            this.showslidebox = !this.showslidebox;
            this.frontcover = !this.frontcover;
        },
        //tab切换获取列表数据
        getqData(tab) {
            this.tabChange = tab;
            if (this.tabChange == "1") {
                this.getRecord();
            } else {
                this.getExtraMoney();

            }
        },
        // 币币划入余币 --提交
        submit() {
            if (this.coinFlag) return;
            this.coinFlag = true;
            this.verify()
            this.message_data = {
                type: 1,
                coin: "wcg",
                number: this.coinnum,
            };
            this.$http.post('/ajax_more/overToMore', this.message_data)
                .then((res) => {
                    setTimeout(() => {
                        this.coinFlag = false;
                    }, 1000);
                    if (res.status == 1) { this.coinAll = res.data; }
                    this.nowStatus = true;
                    this.errMsg = res.msg;
                    setTimeout(() => {
                        this.nowStatus = false;
                        this.errMsg = '';
                        location.href = "/more";
                    }, 2000)
                })
                .catch(err => {
                    console.log('err');
                    setTimeout(() => {
                        this.coinFlag = false;
                    }, 1000);
                });
        },
        // 余币划入币币 --提交
        submitCoinNum() {
            this.message_data = {
                type: 2,
                coin: "wcg",
                number: this.leavenum,
            };
            this.$http.post('/ajax_more/overToMore', this.message_data)
                .then((res) => {
                    if (res.status == 1) {
                        this.coinAll = res.data
                        this.nowStatus = true;
                        this.errMsg = res.msg;
                        this.frontcover = !this.frontcover;
                        this.showslidebox = !this.showslidebox;
                        setTimeout(() => {
                            this.nowStatus = false;
                            this.errMsg = '';
                            location.href = "/more";
                        }, 1500)

                    } else {
                        this.nowStatus = true;
                        this.errMsg = res.msg;
                        this.showslidebox = !this.showslidebox;
                        setTimeout(() => {
                            this.nowStatus = false;
                            this.errMsg = '';
                            location.href = "/more";
                        }, 2000)
                    }

                })
                .catch(err => {
                    console.log('err');
                });
        },
        // 获取币种总资产
        coinAllCountData() {
            this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.message_data = {
                type: "1",
            };
            this.$http.post('/ajax_more/getMore', this.message_data)
                .then((res) => {
                    this.coinAllCount = res.data

                })
                .catch(err => {
                    console.log('err');
                });

        },
        //获取列表数据
        getRecord() {
            this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.$http.post('/ajax_more/getMoreLog?p=' + 1 + "&coin=wcg")
                .then((res) => {
                    this.listData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (1 - 1) * 10

                })
                .catch(err => {
                    console.log('err');
                });

        },
        getExtraMoney() {
            this.showRecord = false;
            this.$http.post('/ajax_more/interest?p=' + 1 + "&coin=wcg")
                .then((res) => {
                    this.extraData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (1 - 1) * 10

                })
                .catch(err => {
                    console.log('err');
                });

        },
        //分页
        getcoindata(num) {
            this.showRecord = false;
            //type:1余币宝 type：2幸运哈希
            this.$http.post('/ajax_more/getMoreLog?p=' + num + "&coin=wcg")
                .then((res) => {
                    this.listData = res.data.list
                    this.all = (res.data.total % 10) ? parseInt((res.data.total) / 10) + 1 : parseInt((res.data.total) / 10);
                    this.pagenum = (num - 1) * 10
                })
                .catch(err => {
                    console.log('err');
                });

        },
        // 资产划转,余币-币币
        showFun() {
            this.isShow = 1;
        },


        verify(val, type, method) {
            console.log(Object.prototype.toString.call(val), Object.prototype.toString.call(type), )
                // let correctnum = /^[1]([3-9])[0-9]{9}$/;
            let nums = /\d/g;
            switch (type) {
                case 'num':
                    if (val) {
                        // 数量
                        if (val.length == 0) {
                            this.errorArr.accStatus = 0;
                            return false;
                        } else {
                            this.errorArr.accStatus = 1;
                            //验证通过的时候进行提交操作
                            if (method === 'enter') {

                            }
                            return true;
                        }

                    } else if (method === 'submit') {
                        //此时为提交的时候 状态为错误
                        this.errorArr.accStatus = 1;
                        return false;
                    } else if (method === 'focus') {
                        //普通情况 置为默认
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

        },
    },
    filters: {
        numFilter(value) {

            // 截取当前数据到小数点后两位
            return parseFloat(value) ? parseFloat(value).toFixed(2) : 0;
        },
        handTime(t) {
            var TT = new Date(t * 1000);
            return TT.getFullYear() + '-' + (TT.getMonth() + 1) + '-' + TT.getDate() + "  " + TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
        }
    }

}).$mount('#more');
import 'nStyle/init.scss';
import 'nStyle/theme.scss';
import 'nStyle/user/common.scss';
import 'nStyle/user_tables.scss';
import 'nStyle/user/candy/user_candy.scss';

import Vue from 'vue';
import http from 'plugins/http';
Vue.use(http);
import { nav } from 'nComponents/nav';
import Alert from 'nComponents/Alert';
import axios from 'axios';

//table
// import scrollTable from 'nComponents/scrollTable';
import getQuery from 'tools/getQuery.js';


const candy = new Vue({
    data() {
        return {
            //tab的状态
            // btc分叉 1 eth分叉 2 活动赠送币 3
            tab: 1,
            //活动领取列表
            activeList: [],
            //点赞列表
            clickList: [],
            //展示用数据
            dataList: [],
            //logding
            tabLoging: false,
            //没数据
            no_data: false,
            nowStatus: false,
            errMesAlert: '',
            //弹窗类型
            alertype: '',
            //币种详情
            coinDetail: false,
            //币种详情数据
            coinList: {},
            moverClick: false,
            tabChnage: true,
            //多次点击
            moverClick: true,
        };
    },
    mounted() {
        nav();
        if (location.href.indexOf('?tab') > -1) { this.coinClick(parseInt(getQuery('tab'))); } else { this.getCoinList(); }
    },
    methods: {
        coinClick(nums) {
            this.tab = nums;
            this.no_data = false;
            this.getCoinList();
        },
        //獲取也main數據
        getCoinList() {
            this.tabLoging = true;
            let url = '';
            if (this.tab === 1) { //持幣分紅
                url = '/ajax_user/bonus';
            } else if (this.tab === 2) { //wcg活动领取列表
                url = '/ajax_user/reward';
            } else { //点赞列表
                url = '/ajax_user/likes';
            }
            axios.post(url).then(
                (res) => {
                    let { data, status } = res.data;
                    if (status == 1) {
                        this.dataList = data
                    }
                }).then(() => {
                this.tabLoging = false;
                if (this.dataList.length > 0) {
                    this.no_data = false;
                } else {
                    this.no_data = true;
                }
            });
        },
        // 点击领取
        gifts(coin, key, id) {
            if (!this.moverClick) return;
            this.moverClick = false;
            let url = '',
                data = {};
            if (this.tab === 1) { //持幣分紅
                url = '/ajax_user/getBonus';
                data = { coin };
            } else if (this.tab === 2) {
                url = '/ajax_user/receiveReward ';
                data = { id };
            } else { //
                url = '/ajax_user/likesReward ';
                data = { id };
            }
            this.$http.post(url, data)
                .then((res) => {
                    this.moverClick = true;
                    this.nowStatus = true;
                    this.errMesAlert = res.msg;
                    this.alertype = 'gift';
                    if (res.status) {
                        if (this.tab === 1) {
                            this.dataList[key].number = res.data;
                        } else {
                            this.dataList[key].status = 2;
                        }
                    }
                }).catch((err) => {
                    this.moverClick = true;
                });
        },
        callfn() {
            if (this.alertype === 'gifr') {
                this.getCoinList();
            }
        },

    },
    components: {
        // scrollTable
    }
}).$mount('#candy');
export default candy;
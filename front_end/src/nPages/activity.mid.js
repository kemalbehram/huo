import 'nStyle/init.scss';
import 'nStyle/theme.scss';
import "nStyle/activity.scss";
import Vue from 'vue';
import http from 'plugins/http';
Vue.use(http);
import { nav } from 'nComponents/nav';
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
            userList: [],
            isShow: 0,
            errMsg: '',
            nowStatus: 0,
            isMove: false,
        };
    },
    mounted() {
        nav();
        this.getData('/ajax_midautumn/order_list');
    },
    filters: {
        handTime(t) {
            var TT = new Date(t * 1000);
            return TT.getFullYear() + '/' + (TT.getMonth() + 1) + '/' + TT.getDate() + ":" + TT.getHours() + ':' + TT.getMinutes() + ':' + TT.getSeconds();
        }
    },
    methods: {
        getData(url) {
            this.$http.get(url).then((res) => {
                if (res.status) {
                    this.userList = res.data;
                }
            })
        },
        showFun() {
            this.isShow = 1;
        },
        subInput() {
            if (this.isMove) return;
            this.isMove = true;
            if (!this.subData.name || !this.subData.mo || !this.subData.address || !this.subData.bak) {
                this.isMove = false;
                this.nowStatus = 1;
                this.errMsg = 'Please fill in the complete information!';
                setTimeout(() => {
                    this.nowStatus = 0;
                    this.errMsg = '';
                    location.href = "/activity/mid";
                }, 4000)
                return;
            }
            this.$http.post('/ajax_midautumn/activ', this.subData).then(({ msg }) => {
                this.isMove = false;
                this.nowStatus = 1;
                this.errMsg = msg;
                setTimeout(() => {
                    this.nowStatus = 0;
                    this.errMsg = '';
                    location.href = "/activity/mid";
                }, 4000)
            })
        }
    },
}).$mount('#Active');
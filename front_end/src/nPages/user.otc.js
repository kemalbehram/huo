import 'nStyle/init.scss';
// import 'nStyle/theme.scss';
// import "nStyle/user/common.scss";
// import "nStyle/user_tables.scss";
import 'nStyle/user/otc/otc.scss';

import Vue from 'vue';
import { nav } from 'nComponents/nav';
//公用弹框
import jsjAlert from 'nComponents/jsjAlert';
import axios from 'axios';

//table
// 图片压缩
import lrz from "lrz";
const qs = require('qs');
import getLanguagePack from '@/components/tradeLanguagePack';
let language = getLanguagePack();
const otc = new Vue({
    data() {
        return {
            coinList: [{ name: "unih", type: "rgb", display: "尤里米" }],
            index: 1, //tab切换
            showAlert: false, //
            submitData: 'addresData', //默认提交的数据
            childShow: 1,
            imgStatus: '',
            //错误状态
            errStatus: {
                imgErr: '√',
                addresDatatradepwd: '',
                addresDataaddress: '',
                eunexnumbers: '',
                eunexaddress: '',
                eunextradepwd: '',
                wcgnumbers: '',
                wcgaddress: '',
                wcgtradepwd: '',
                mbaexnumbers: '',
                mbaexaddress: '',
                mbaextradepwd: ''
            },
            // 提交图片数据
            addresData: {
                id: '',
                coin: 'unih',
                type: '1',
                address: '',
                tradepwd: '',
                status: '2',
                img: "/imgs/zw.png",
            },
            // 提交没有图片的数据
            wcg: {
                id: '',
                coin: 'usdtk',
                type: '2',
                status: '2',
                address: '',
                numbers: '',
                tradepwd: ''
            },
            eunex: {
                id: '',
                coin: 'usdtk',
                type: '3',
                status: '2',
                address: '',
                numbers: '',
                tradepwd: ''
            },
            mbaex: {
                id: '',
                coin: 'usdtk',
                type: '4',
                status: '2',
                address: '',
                numbers: '',
                tradepwd: ''
            },
            alertMsg: '',
        };
    },
    created() {
        this.tabChange(1, this.addresData.coin);
    },
    mounted() {
        nav();
    },
    methods: {
        //tab 切换
        tabChange(index, coin) {
            this.index = index;
            this.alertMsg = this.showStatus = '';
            this.$http.post('/ajax_user/getOtcUserWalletList', { 'coin': coin.toLowerCase() }).then((res) => {
                this.coinList = res.data.coinList;
                // console.log('tag222',coinList);
                if (res.status) {
                    var arrData = res.data.walletList
                    for (var i = 0; i < arrData.length; i++) {
                        if (arrData[i].type == 1) { otc.addresData = arrData[i] }
                        if (arrData[i].type == 2) { otc.wcg = arrData[i] }
                        if (arrData[i].type == 3) { otc.eunex = arrData[i] }
                        if (arrData[i].type == 4) { otc.mbaex = arrData[i] }
                    }
                    // console.log('addresData',otc.addresData);
                    this.errStatus.imgErr = '√';
                    this.imgStatus = "true";
                } else {
                    this.addresData.img = '/imgs/zw.png';
                    this.addresData.address = '';
                    this.imgStatus = "";
                }
                // this.addresData.coin=coin;
            }).catch((err) => {
                this.alertMsg = "請求超時!"
                setTimeout(() => { this.alertMsg = ""; }, 2000);
            });
        },
        //数据校验//不同状态的时候 通过 now传 在不同情况下进行判断
        verify(reg, pData, itime, errMsg) {
            let regs = {
                address: /^[a-zA-Z0-9||\-||\@||\.]{6,}$/,
                pwd: /^[a-zA-Z0-9||\.||\*||\%||\!||\#||\^]{6}/,
            }
            if (regs[reg].test(this[pData][itime]) && this[pData][itime]) {
                this.errStatus[pData + itime] = "";
                return true;
            } else {
                this.errStatus[pData + itime] = errMsg;
                setTimeout(() => { this.errStatus[pData + itime] = ""; }, 2000);
                return false;
            }
        },
        // 点击提交
        async submit(subData) {
            //提交前进行的验证
            if (!this.verify('pwd', subData, 'tradepwd', '請輸入正確的交易密码!') ||
                !this.verify('address', subData, 'address', '請輸入正確的收币地址！') ||
                (subData == 'wcg' && !this.verify('address', subData, 'numbers', '请输入正确的WCG公钥')) ||
                (subData == 'eunex' && !this.verify('address', subData, 'numbers', '请输入正确的EUNEX账号')) ||
                (subData == 'mbaex' && !this.verify('address', subData, 'numbers', '请输入正确的MBAEX的UID'))
            ) { return false; }
            this.$http.post('/ajax_user/validateTradepwd', { tradepwd: this[subData].tradepwd }).then(
                (res) => {
                    if (res.status) {
                        this[subData].tradepwd = '';
                        this.showAlert = true;
                        this.submitData = subData;
                        // otc.OtcUserTest(subData);
                    } else {
                        this.alertMsg = res.msg;
                        setTimeout(() => { this.alertMsg = ""; }, 2000);
                    }
                }).catch((err) => {
                this.alertMsg = '请求超时';
                setTimeout(() => { this.alertMsg = ""; }, 2000);
            })
        },
        // 提交数据
        submitFun(postData) {
            // console.log('OtcUserTest==',postData,otc[postData]);
            axios.post('/ajax_user/otcUserWallet',
                qs.stringify(otc[postData])
            ).then((res) => {
                if (res.status) {
                    this.showAlert = false;
                    // console.log('res',res.data.data.id)
                    if (res.data.data.id != undefined) {
                        this[postData].id = res.data.data.id;
                    }
                    this[postData].status = 1;
                }
                this.alertMsg = res.data.msg;
                setTimeout(() => { this.alertMsg = ""; }, 2000);
            }).catch((err) => {
                this.alertMsg = "請求超時！";
                setTimeout(() => { this.alertMsg = ""; }, 2000);
            });
        },
        //图片压缩
        lrzImg(file) {
            return new Promise((resolve) => {
                // 压缩 图片
                lrz(file, { width: 800, quality: 0.6 }).then(function(rst) {
                        resolve(rst);
                    })
                    .catch(function(err) {
                        this.errStatus.imgErr = '上传超時!';
                    });
            });
        },
        //图片本地上传
        uploadFile(e) {
            const imgMaxSize = 2097152;
            let trageFile = e.target.files[0]; //文件
            this.lrzImg(trageFile).then(
                (result) => {
                    if (result.base64Len > imgMaxSize) {
                        this.errStatus.imgErr = '文件过大!';
                        this.imgStatus = false;
                        return false;
                    } else {
                        this.errStatus.imgErr = '√';
                        //转换为base64 进行输出
                        this.addresData.img = result.base64;
                        this.imgStatus = true;
                    }
                }
            );
        },
        hideFun() {
            this.showAlert = false;
        },
        offFun(da) {
            if (!this[da].id) return false;
            // console.log('tag2222222', this[da])
            this.$http.post('/ajax_user/modifyWallet', { 'wallet_id': this[da].id, 'coin': this[da].coin.toLowerCase(), status: this[da].status == 1 ? 2 : 1 }).then((res) => {
                if (res.status) {
                    this[da].status = this[da].status == 1 ? 2 : 1;
                };
            }).catch((err) => {
                this.alertMsg = "請求超時！";
                setTimeout(() => { this.alertMsg = ""; }, 2000);
            });
        }

    },
}).$mount('#otc');
export default otc;
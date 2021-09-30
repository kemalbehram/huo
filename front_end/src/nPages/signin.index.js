import 'flex.css';
import 'nStyle/init.scss';
import 'nStyle/theme.scss';
import 'nStyle/signin/signin.scss';
import Vue from 'vue';
import cookie from '@/tools/cookie';
import Promise from 'Promise';
import http from 'plugins/http';
Vue.use(http);
import {
    nav
} from 'nComponents/nav';
import isMob from '@/utils/isMob.js';
import forget from 'nComponents/restPwd';
import axios from 'axios';
import Alert from 'nComponents/Alert';
import GeminiScrollbar from 'vue-gemini-scrollbar';
Vue.use(GeminiScrollbar);
let forgets = null;

const signTpl = new Vue({
    data() {
        return {
            // emailActiveLink激活链接过来的状态 0激活失败  1 成功 2链接失效
            emailStatus: {
                showActiveModal: false,
                emailActiveLink: ''
            },
            myCaptcha: '', //滑块
            // 重設密碼成功
            repwdSucc: false,
            // 是否顯示重發郵件的div
            showReMail: false,
            // 賬戶所選登錄或註冊的方式  phone或email
            accessType: "phone",
            show: '',
            ok: true,
            hideBg: false, //遮罩层
            verify_success: false, //验证成功勾选状态-登录
            reemail_verify_success: false, //验证成功勾选状态-登录邮->箱
            register_success: false, //验证成功勾选状态-注册
            verify_bg: false, //验证成功拼图图片遮罩层
            loading_icon: false, //验证中loading
            isActive: true, //手机邮箱样式active
            closeIcon: false, //不显示验证弹窗关闭按钮
            register_closeIcon: false, //不显示验证弹窗关闭按钮-注册
            loginemail_closeIcon: false, //不显示验证弹窗关闭按钮-登录->邮箱
            showBlockVerify: false, //滑块验证canvas
            showBlockVerifyEmail: false, //滑块验证canvas
            register_verify: true, //滑块验证canvas-注册
            loginemail_verify: true, //滑块验证canvas-登录邮箱
            captchaObj: '',
            captchaObj2: '',
            blockShow: false, //滑块验证提示-注册
            //用戶信息
            userInfo: '',
            ver_src: "",
            captchaFocus: false,
            //聚焦变色
            accountFocus: false,
            pwdFocus: false,
            repwdFocus: false,
            captchaFocus: false,
            codeFocus: false,
            googleFocus: false,
            showActiveModal: false,
            //提交按钮可否点击
            disable: true,
            //加载
            submit_now: false,
            //忘记密码 步骤
            forgetStep: 1,
            //找回密码调试
            forgetPwd: false,
            // 滑块刷新时图片未出来前load
            loadIcon: true,
            errMesAlert: "",
            showActiveModal: false,
            // forgetPwd: true,
            area_type: "",
            //注册用数据
            queryRe: {
                phone: {
                    account: '',
                    pwd: '',
                    repwd: '',
                    // captcha: '',
                    code: '',
                    area: '+86',
                    regtype: 'phone'
                },
                email: {
                    account: '',
                    pwd: '',
                    repwd: '',
                    regtype: 'email'
                }
            },
            //登录用数据
            queryLo: {
                phone: {
                    account: "",
                    pwd: '',
                    // captcha: '',
                    area: '+86',
                    regtype: 'phone'
                },
                email: {
                    account: "",
                    pwd: '',
                    // captcha: '',
                    regtype: 'email'
                }
            },
            //发送短信ajax
            message_data: {
                //语音8  短信 0
                action: '0',
                captcha: '',
                phone: '',
                area: ""
            },
            //登录注册展示
            showAlert: false,
            //点击语音验证码出现 消失
            voice_ver: false,
            //语音验证码倒计时
            voice_set: false,
            //来电提示
            voice_warn: false,
            errorArr: { //错误提示
                //0 为默认情况 不展示，1为提示 2为空白提示 3为格式错误 4为后台放回
                //密码 5 弱 6 中 7 强 8 两次对比
                //10过审
                // phoneStatus: 0,
                // emailStatus: 0,
                accStatus: 0,
                pwdStatus: 0,
                repwdStatus: 0,
                captchaStatus: 0,
                codeStatus: 0
            },
            //进入倒计时in 退出 out 语音倒计时 mes
            setTimes: 'out',
            //倒计时
            times: '60',
            time_id: '',
            //地区号码
            area_num: '+86',
            //区域选择fn_active所在数字
            register_index: 0,
            //用户协议
            checkeds: true,
            //注册 re or 登录 lo or 找回密码 find
            // now_type: 're',
            now_type: window.location.href.substr(-2),
            //彈窗顯示控制
            nowStatus: false,
            //聚焦变色
            //区域选择是否出现
            area_show: false,
            //区域选择是否出现 -找回密码
            find_area_show: false,
            //发送成功
            sentSuccess: false,
            //聚焦变色
            accountFocus: false,
            //区域选择fn_active所在数字
            register_index: 0,
            phone: null,
            noStepOne: false,
            //忘記密碼第一步
            forgetFirst: {
                phone: {
                    area: "+86",
                    account: "",
                    captcha: "",
                    regtype: "phone"
                },
                email: {
                    account: "",
                    captcha: "",
                    regtype: "email"
                }
            },
            //忘記密碼第二步
            forgetTwo: {
                google_code: "",
                code: ""
            },
            //忘記密碼第三部
            forgetThree: {
                pwd: "",
                repwd: ""
            },
            //是否有谷歌验证码
            isGoogle: false

        }
    },
    created() {
        //首先判断是否有手机号
        forgets = forget();
        this.img_ver();
    },
    mounted() {
        nav();
    },
    methods: {
        //获取地址栏参数-1注册 
        hasArea(area) {
            if (area) {
                this.area_num = area;
            }
        },
        init() {
            //初始化
            //google close
            this.googleShow = false;
            this.accessType = "phone";
            this.queryRe = {
                phone: {
                    account: '',
                    pwd: '',
                    repwd: '',
                    captcha: '',
                    code: '',
                    area: '+86',
                    regtype: 'phone'
                },
                email: {
                    account: '',
                    pwd: '',
                    repwd: '',
                    regtype: 'email'
                }
            };
            this.queryLo = {
                phone: {
                    account: "",
                    pwd: '',
                    captcha: '',
                    area: '+86',
                    regtype: 'phone'
                },
                email: {
                    account: "",
                    pwd: '',
                    captcha: '',
                    regtype: 'email'
                }
            };
            // this.area_num = '+86';

            this.register_index = 0;
            this.errorArr = {
                accStatus: 0,
                pwdStatus: 0,
                repwdStatus: 0,
                captchaStatus: 0,
                codeStatus: 0
            };
            //点击语音验证码出现 消失
            this.voice_ver = false;
            //语音验证码倒计时
            this.voice_set = false;
            //来电提示
            this.voice_warn = false;
            //倒計時
            this.times = '60';
            //来电提示
            this.setTimes = 'out';
            //区号选择关闭
            this.area_show = false;
            this.find_area_show = false;
        },
        registerAlert(fn) {
            //数据初始化
            this.init();
            let hrefData = window.location.href;
            if (hrefData.indexOf('emailactive') != "-1") {
                window.location.href = '/?alert=register';
            } else {
                this.accessType = "phone";
                // this.accessType = 'phone';
                this.now_type = 're';
                this.showAlert = true;
                this.forgetPwd = false;
                // 隱藏郵件彈窗
                this.emailStatus.showActiveModal = false;
            }
        },
        loginAlert(fn) {
            //数据初始化
            this.init();
            this.accessType = "phone";
            // this.accessType = 'phone';
            this.now_type = 'lo';
            this.showAlert = true;
            //成功页面关闭
            // 隱藏郵件彈窗
            this.emailStatus.showActiveModal = false;
        },
        // 找回密码
        resetloginAlert() {
            this.forgetPwd = false;
            this.showActiveModal = false;
            // register.loginAlert();
            window.location.href = "/signin/?login=lo";

        },
        //注册登录-获取验证码
        get_verify(mes_type) {
            //進行手機號
            if (this.now_type === 're') {
                this.verify(this.queryRe.phone.account, 'account', 'submit');
            }
            this.sent_message();
            if (this.errorArr.accStatus === 10) {
                if (mes_type) {
                    this.message_data.action = mes_type;
                } else {
                    this.message_data.action = '0';
                }
                //短信验证码是 ‘注意来电提示’ 如果打开 则关闭
                if (mes_type === '0' && this.voice_warn === true && !this.disable) {
                    this.voice_warn = false;
                    this.voice_set = true;
                }

                if (this.setTimes === "out" || this.setTimes === 'mes') {
                    this.setTimes = 'in';
                    this.time_id = setInterval(() => {
                        if (this.times <= '0') {
                            //计数到0的时候停止计时
                            clearTimeout(this.time_id);
                            this.setTimes = 'out';
                            this.times = '60';
                            //如果语音验证码倒计时开始 计时完毕开启语音验证码可点击
                            if (this.voice_set || this.voice_warn) {
                                this.voice_ver = true;
                                this.voice_set = false;
                                this.voice_warn = false;
                            }
                        } else {
                            this.times--;
                        }
                    }, 1000);

                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        // 找回密码-获取验证码
        reset_get_verify(mes_type) {
            if (mes_type) {
                this.message_data.action = mes_type;
            } else {
                this.message_data.action = '0';
            }

            //短信验证码是 ‘注意来电提示’ 如果打开 则关闭
            if (mes_type === '0' && this.voice_warn === true && !this.disable) {
                this.voice_warn = false;
                this.voice_set = true;
            }

            if (this.setTimes === "out" || this.setTimes === 'mes') {
                this.setTimes = 'in';
                this.time_id = setInterval(() => {
                    if (this.times <= '0') {
                        //计数到0的时候停止计时
                        clearTimeout(this.time_id);
                        this.setTimes = 'out';
                        this.times = '60';
                        //如果语音验证码倒计时开始 计时完毕开启语音验证码可点击
                        if (this.voice_set || this.voice_warn) {
                            this.voice_ver = true;
                            this.voice_set = false;
                            this.voice_warn = false;
                        }
                    } else {
                        this.times--;
                    }
                }, 1000);
                this.reset_sent_message();
            } else {
                return false;
            }
        },
        //jsj--不要注冊   获取语音验证码
        voice_verify() {
            if (this.setTimes === 'out') {
                this.get_verify('8');
                //提示语修改
                this.voice_ver = false;
                this.voice_set = false;
                this.voice_warn = true;
                this.disable = true;
            } else {
                return false;
            }
        },
        //注册登录-发送短信
        sent_message() {
            let url = '';
            this.errorArr.codeStatus = 0;
            //显示语音验证码
            if (!this.voice_warn) {
                this.voice_set = true;
            }
            //re 注册， lo 登录 fo忘记密码
            if (this.now_type === 're') {
                url = '/ajax_user/sendregmsg';
            } else if (this.now_type === 'lo' && this.accessType === 'phone') {
                url = '/Ajax_Auth/sendregmsg';
            }
            // 判断有没有滑块验证
            if (this.accessType === 'phone' && this.now_type === 'lo' || this.accessType === 'phone' && this.now_type === 'lo' || this.accessType === 'email' && this.now_type !== 're' || this.accessType === 'phone' && this.now_type === 're') {
                if (!j_v_status.getAttribute("res_code")) {
                    this.blockShow = true;
                    if (this.now_type === 're') {
                        document.getElementById("p_v_status").style.display = "none";
                    }
                } else {
                    this.blockShow = false;
                    if (this.now_type === 're') {
                        document.getElementById("p_v_status").style.display = "block";
                    }
                }

            }
            this.message_data.phone = this.queryRe.phone.account;
            this.message_data.area = this.area_num;
            this.message_data.captcha = document.getElementById('j_v_status').getAttribute('res_code')
            this.$http.post(url, this.message_data)
                .then(({
                    data,
                    status,
                    msg
                }) => {
                    // let { status, msg } = data;
                    if (status == 0) {
                        if (this.voice_set) {
                            this.voice_set = false;
                            this.voice_warn = true;
                        }
                        this.errMes = msg;
                        //按钮初始化
                        clearTimeout(this.time_id);
                        this.setTimes = 'out';
                        this.times = '60';
                        //php返回提示 data的内容来判断错误地方 短信验证码接口只判读手机和图形验证码
                        if (data === 'mo') {
                            this.errorArr.accStatus = 4;
                        } else if (this.now_type === 'fo' || data === 'vcode') {
                            this.errorArr.codeStatus = 4;
                        }
                        if (this.voice_warn) {
                            this.voice_warn = false;
                            this.voice_ver = true;
                        }
                    }
                })
                .catch((err) => {
                    // console.log(err);
                });
        },
        //找回密码-发送短信
        reset_sent_message() {
            let url = '';
            this.errorArr.codeStatus = 0;
            //显示语音验证码
            if (!this.voice_warn) {
                this.voice_set = true;
            }
            //忘記密碼 短信驗證碼 action為11
            let actions = this.message_data.action;

            if (this.accessType === 'phone') {
                url = '/Ajax_Auth/sendregmsg';
                this.message_data = {
                    back: 1,
                    account: this.forgetFirst.phone.account,
                    action: actions,
                    area: this.area_num
                };
            } else if (this.accessType === 'email') {
                url = '/Emailverify/findpwd';
                this.message_data = {
                    account: this.forgetFirst.email.account,
                    regtype: 'forget'
                };
            }

            this.$http.post(url, this.message_data)
                .then(({
                    data,
                    status,
                    msg
                }) => {
                    // let { status, msg } = data;
                    if (status == 0) {
                        if (this.voice_set) {
                            this.voice_set = false;
                            this.voice_warn = true;
                        }

                        //刷新图形验证码
                        this.img_ver();
                        this.errMes = msg;
                        //提示初始化
                        // this.errorArr.accStatus = 0;
                        // this.errorArr.captchaStatus = 0;
                        // this.errorArr.codeStatus = 0;
                        //按钮初始化
                        clearTimeout(this.time_id);
                        this.setTimes = 'out';
                        this.times = '60';
                        //php返回提示 data的内容来判断错误地方 短信验证码接口只判读手机和图形验证码
                        if (data === 'mo') {
                            this.errorArr.accStatus = 4;
                        } else if (data === 'captcha') {
                            this.errorArr.captchaStatus = 4;
                        } else if (data === 'vcode') {
                            this.errorArr.codeStatus = 4;
                        }
                        if (this.voice_warn) {
                            this.voice_warn = false;
                            this.voice_ver = true;
                        }
                    }
                })
                .catch((err) => {
                    // console.log(err);
                });
        },
        verify(val, type, method) {
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

            let el = document.querySelector('[name=viewport]');
            if (method = "focus") {
                // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0,user-scalable=no');
                // document.querySelector('#boxp').innerHTML='get1111==='+el.getAttribute('content');
            } else {
                el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
                // document.querySelector('#boxp').innerHTML='222222222==='+el.getAttribute('content');
            }
            //10 标识过审核
            //method  作为标识有 submit 提交 enter 回车点击 focus聚焦 来判断不同情况
            let allnum = /^[0-9]*$/;
            let correctnum = /^[1]([3-9])[0-9]{9}$/;; //匹配手机号
            let nums = /\d/g;
            let sign = /[~\!@#%\$\^&\*()\+\-\=\|:\;\,\_\'\"\.<>\/?*]/g;
            let en = /[a-zA-Z]/g;
            let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5-_\.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            //空值时候  不提交状态置为默认0  提交就 置为错误 2
            switch (type) {
                case 'account':
                    if (val) {
                        // 賬號為手機
                        if (method === 'focus') this.accountFocus = true;
                        else this.accountFocus = false;
                        if (this.accessType === 'phone') {
                            if (this.area_num === '+86') {
                                //中国区域限制长度为11  其他国家饿不进行设置
                                //输入框已经限制11位数以下 可不判断大于11位以上
                                if (val.length < 11) {
                                    this.errorArr.accStatus = 3;
                                    return false;
                                } else if (!correctnum.test(val)) {
                                    this.errorArr.accStatus = 3;
                                    return false;
                                } else {
                                    this.errorArr.accStatus = 10;
                                    //验证通过的时候进行提交操作
                                    if (method === 'enter') {
                                        this.register_submit();
                                    }
                                    return true;
                                }
                            } else {
                                this.errorArr.accStatus = 10;
                                if (method === 'enter') {
                                    this.register_submit();
                                }
                                return true;
                            }
                            // 賬號為郵箱
                        } else if (this.accessType === 'email') {
                            if (!emailReg.test(val)) {
                                this.errorArr.accStatus = 3;
                                return false;
                            } else {
                                this.errorArr.accStatus = 10;
                                return true;
                            }
                        }
                    } else if (method === 'submit') {
                        //此时为提交的时候 状态为错误
                        this.errorArr.accStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        //普通情况 置为默认
                        this.errorArr.accStatus = 1;
                        this.accountFocus = true;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.accStatus = 2;
                        return false;
                    } else {
                        this.errorArr.accStatus = 0;
                        this.accountFocus = false;
                        return false;
                    }
                    break;
                case 'pwd':
                    // let val = this.queryLo.password;
                    if (val) {
                        if (method === 'focus') this.pwdFocus = true;
                        else this.pwdFocus = false;
                        if (val.length < 6) {
                            this.errorArr.pwdStatus = 3;
                            return false;
                        } else if (this.now_type === 're') {
                            let pwdLeval = 0;
                            if (nums.test(val)) {
                                pwdLeval++;
                            }
                            if (sign.test(val)) {
                                pwdLeval++;
                            }

                            if (en.test(val)) {
                                pwdLeval++;
                            }
                            switch (pwdLeval) {
                                case 1:
                                    {
                                        this.errorArr.pwdStatus = 5;
                                        return false;
                                        break;
                                    }
                                case 2:
                                    {
                                        this.errorArr.pwdStatus = 6;
                                        if (method === 'enter') {
                                            this.register_submit();
                                        }
                                        return true;
                                        break;
                                    }
                                case 3:
                                    {
                                        this.errorArr.pwdStatus = 7;
                                        if (method === 'enter') {
                                            this.register_submit();
                                        }
                                        return true;
                                        break;
                                    }
                                default:

                            }

                        } else {
                            this.errorArr.pwdStatus = 10;
                            if (method === 'enter') {
                                this.register_submit();
                            }
                            return true;
                        }
                    } else if (method === 'submit') {
                        this.errorArr.pwdStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.pwdStatus = 1;
                        this.pwdFocus = true;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.pwdStatus = 2;
                        return false;
                    } else {
                        this.errorArr.pwdStatus = 0;
                        this.pwdFocus = false;
                        return false;
                    }
                    break;
                case 'repwd':
                    {
                        let toVal = '';
                        toVal = this.accessType === 'phone' ? this.queryRe.phone.pwd : this.queryRe.email.pwd;
                        if (val) {
                            if (method === 'focus') this.repwdFocus = true;
                            else this.repwdFocus = false;
                            if (val.length < 6) {
                                this.errorArr.repwdStatus = 3;
                                return false;
                            } else if (val !== toVal) {
                                //再次输入 和 第一次输入不相等
                                this.errorArr.repwdStatus = 8;
                                return false;
                            } else {
                                this.errorArr.repwdStatus = 10;
                                if (method === 'enter') {
                                    this.register_submit();
                                }
                                return true;
                            }
                        } else if (method === 'submit') {
                            this.errorArr.repwdStatus = 2;
                            return false;
                        } else if (method === 'focus') {
                            this.errorArr.repwdStatus = 1;
                            this.repwdFocus = true;
                            return false;
                        } else if (method === 'enter') {
                            this.errorArr.repwdStatus = 2;
                            return false;
                        } else {
                            this.errorArr.repwdStatus = 0;
                            this.repwdFocus = false;
                            return false;
                        }
                    }
                    break;
                    //短信验证码只判断长度
                    // 短信验证码6
                case 'code':
                    if (val) {
                        if (method === 'focus') this.codeFocus = true;
                        else this.codeFocus = false;
                        if (val.length < 6) {
                            this.errorArr.codeStatus = 3;
                            return false;
                        } else {
                            this.errorArr.codeStatus = 10;
                            if (method === 'enter') {
                                this.register_submit();
                            }
                            return true;
                        }
                    } else if (method === 'submit') {
                        this.errorArr.codeStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.codeStatus = 1;
                        this.codeFocus = true;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.codeStatus = 2;
                        return false;
                    } else {
                        this.errorArr.codeStatus = 0;
                        this.codeFocus = false;
                        return false;
                    }
                    break;
                case "email":
                    if (val) {
                        if (val.length < 6) {
                            this.errorArr.emailStatus = 3;
                            return false;
                        } else {
                            this.errorArr.emailStatus = 10;
                            if (method === 'enter') {
                                this.register_submit();
                            }
                            return true;
                        }
                    } else if (method === 'submit') {
                        this.errorArr.emailStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.emailStatus = 1;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.emailStatus = 2;
                        return false;
                    } else {
                        this.errorArr.emailStatus = 0;
                        return false;
                    }
                    break;

                default:
            }

        },
        //找回密码验证
        resetverify(val, type, method) {
            // alert(type);
            //10 标识过审核
            //method  作为标识有 submit 提交 enter 回车点击 focus聚焦 来判断不同情况
            let allnum = /^[0-9]*$/;
            let nums = /\d/g;
            let sign = /[~\!@#%\$\^&\*()\+\-\=\|:\;\,\.<>\/?*]/g;
            let en = /[a-zA-Z]/g;
            let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5-_]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            //空值时候  不提交状态置为默认0  提交就 置为错误 2
            switch (type) {
                case 'account':
                    if (val) {
                        // 賬號為手機
                        if (method === 'focus') this.accountFocus = true;
                        else this.accountFocus = false;
                        if (this.accessType === 'phone') {

                            if (!allnum.test(val)) {
                                this.errorArr.accStatus = 3;
                            } else if (this.area_num === '+86') {
                                //中国区域限制长度为11  其他国家饿不进行设置
                                //输入框已经限制11位数以下 可不判断大于11位以上
                                if (val.length < 11) {
                                    this.errorArr.accStatus = 3;
                                    return false;
                                } else {
                                    this.errorArr.accStatus = 10;
                                    //验证通过的时候进行提交操作
                                    if (method === 'enter') {
                                        this.reset_submit();
                                    }
                                    return true;
                                }
                            } else {
                                this.errorArr.accStatus = 10;
                                if (method === 'enter') {
                                    this.reset_submit();
                                }
                                return true;
                            }
                            // 賬號為郵箱
                        } else if (this.accessType === 'email') {
                            if (!emailReg.test(val)) {
                                this.errorArr.accStatus = 3;
                                return false;
                            } else {
                                // this.errorArr.accStatus = 10;
                                return true;
                            }
                        }

                    } else if (method === 'submit') {
                        //此时为提交的时候 状态为错误
                        this.errorArr.accStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        //普通情况 置为默认
                        this.errorArr.accStatus = 1;
                        this.accountFocus = true;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.accStatus = 2;
                        return false;
                    } else {
                        this.errorArr.accStatus = 0;
                        this.accountFocus = false;
                        return false;
                    }
                    break;
                case 'pwd':
                    // let val = this.queryLo.password;
                    if (val) {
                        if (method === 'focus') this.pwdFocus = true;
                        else this.pwdFocus = false;
                        if (val.length < 6) {
                            this.errorArr.pwdStatus = 3;
                            return false;
                        } else {
                            let pwdLeval = 0;
                            if (nums.test(val)) {
                                pwdLeval++;
                            }
                            if (sign.test(val)) {
                                pwdLeval++;
                            }

                            if (en.test(val)) {
                                pwdLeval++;
                            }


                            switch (pwdLeval) {
                                case 1:
                                    {
                                        this.errorArr.pwdStatus = 5;
                                        return false;
                                        break;
                                    }
                                case 2:
                                    {
                                        this.errorArr.pwdStatus = 5;
                                        return false;
                                        break;
                                    }
                                case 3:
                                    {
                                        this.errorArr.pwdStatus = 7;
                                        if (method === 'enter') {
                                            this.reset_submit();
                                        }
                                        return true;
                                        break;
                                    }
                                default:

                            }
                        }
                    } else if (method === 'submit') {
                        this.errorArr.pwdStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.pwdStatus = 1;
                        this.pwdFocus = true;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.pwdStatus = 2;
                        return false;
                    } else {
                        this.errorArr.pwdStatus = 0;
                        this.pwdFocus = false;
                        return false;
                    }
                    break;
                case 'repwd':
                    {
                        let toVal = '';
                        toVal = this.forgetThree.pwd;
                        if (val) {
                            if (method === 'focus') this.repwdFocus = true;
                            else this.repwdFocus = false;
                            if (val.length < 6) {
                                this.errorArr.repwdStatus = 3;
                                return false;
                            } else if (val !== toVal) {
                                //再次输入 和 第一次输入不相等
                                this.errorArr.repwdStatus = 8;
                                return false;

                            } else {
                                this.errorArr.repwdStatus = 10;
                                if (method === 'enter') {
                                    this.reset_submit();
                                }
                                return true;
                            }
                        } else if (method === 'submit') {
                            this.errorArr.repwdStatus = 2;
                            return false;
                        } else if (method === 'focus') {
                            this.errorArr.repwdStatus = 1;
                            this.repwdFocus = true;
                            return false;
                        } else if (method === 'enter') {
                            this.errorArr.repwdStatus = 2;
                            return false;
                        } else {
                            this.errorArr.repwdStatus = 0;
                            this.repwdFocus = false;
                            return false;
                        }
                    }
                    break;
                    //图形验证码和短信验证码只判断长度
                    //图形验证码4  短信验证码6
                case 'captcha':
                    if (val) {
                        if (method === 'focus') this.captchaFocus = true;
                        else this.captchaFocus = false;
                        if (val.length < 4) {
                            this.errorArr.captchaStatus = 3;
                            return false;
                        } else {
                            this.errorArr.captchaStatus = 10;
                            if (method === 'enter') {
                                this.reset_submit();
                            }
                            return true;
                        }
                    } else if (method === 'submit') {
                        this.errorArr.captchaStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.captchaStatus = 1;
                        this.captchaFocus = true;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.captchaStatus = 2;
                        return false;
                    } else {
                        this.errorArr.captchaStatus = 0;
                        this.captchaFocus = false;
                        return false;
                    }
                    break;

                case "email":
                    if (val) {
                        if (val.length < 6) {
                            this.errorArr.emailStatus = 3;
                            return false;
                        } else {
                            this.errorArr.emailStatus = 10;
                            if (method === 'enter') {
                                this.reset_submit();
                            }
                            return true;
                        }
                    } else if (method === 'submit') {
                        this.errorArr.emailStatus = 2;
                        return false;
                    } else if (method === 'focus') {
                        this.errorArr.emailStatus = 1;
                        return false;
                    } else if (method === 'enter') {
                        this.errorArr.emailStatus = 2;
                        return false;
                    } else {
                        this.errorArr.emailStatus = 0;
                        return false;
                    }
                    break;

                default:
                    if (type === 'google' || type === 'code') {
                        if (val) {
                            if (method === 'focus') this[`${type}Focus`] = true;
                            else this[`${type}Focus`] = false;
                            if (val.length < 6) {
                                this.errorArr[`${type}Status`] = 3;
                                return false;
                            } else {
                                this.errorArr[`${type}Status`] = 10;
                                if (method === 'enter') {
                                    this.reset_submit();
                                }
                                return true;
                            }
                        } else if (method === 'submit') {
                            this.errorArr[`${type}Status`] = 2;
                            return false;
                        } else if (method === 'focus') {
                            this.errorArr[`${type}Status`] = 1;
                            this[`${type}Focus`] = true;
                            return false;
                        } else if (method === 'enter') {
                            this.errorArr[`${type}Status`] = 2;
                            return false;
                        } else {
                            this.errorArr[`${type}Status`] = 0;
                            this[`${type}Focus`] = false;
                            return false;
                        }
                    }
                    break;
            }
        },

        //登录注册-控制可否输入
        inputcan(val, type) {
            switch (type) {
                case 'account':
                    {
                        if (this.accessType === 'phone') {
                            //只让输入数字
                            if (!val) return;
                            let vals = val.replace(/\D/g, '');
                            if (this.now_type === 're') {
                                this.queryRe.phone.account = vals;
                            }
                        }
                        break;
                    }
                case 'pwd':
                    {
                        if (!val) return;
                        //数字 字母 和部分字符
                        let vals = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\_\"\'\=\|:\;\,\.<>\/?*]/g, '');
                        /* eslint-disable no-unused-expressions */
                        if (this.accessType === 'phone') {
                            this.now_type === 're' ? this.queryRe.phone.pwd = vals : this.queryLo.phone.pwd;
                        } else {
                            this.now_type === 're' ? this.queryRe.email.pwd = vals : this.queryLo.email.pwd;
                        }
                        break;
                    }
                case 'repwd':
                    {
                        let vals = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\_\"\'\=\|:\;\,\.<>\/?*]/g, '');
                        this.accessType === 'phone' ? this.queryRe.phone.repwd = vals : this.queryRe.email.repwd;
                        break;
                    }
                case 'code':
                    {
                        //只让输入数字
                        let vals = val.replace(/[^\d]/g, '');
                        if (this.queryRe.phone.code) this.queryRe.phone.code = vals;
                        else if (this.googleData.code) this.googleData.code = vals;
                        break;
                    }
                default:
                    break;
            }
        },
        //找回密码-控制可否输入
        resetinputcan(val, type) {
            switch (type) {
                case 'account':
                    {
                        if (this.accessType === 'phone') {
                            //只让输入数字
                            if (!val) return;
                            let vals = val.replace(/\D/g, '');
                            this.forgetFirst.phone.account = vals;
                        }
                        break;
                    }
                case 'pwd':
                    {
                        if (!val) return;
                        //数字 字母 和部分字符
                        let vals = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\=\|:\;\,\.<>\/?*]/g, '');
                        /* eslint-disable no-unused-expressions */
                        this.forgetThree.pwd = vals;
                        break;
                    }
                case 'repwd':
                    {
                        let vals = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\=\|:\;\,\.<>\/?*]/g, '');
                        this.forgetThree.repwd = vals;
                        break;
                    }
                case 'captcha':
                    {
                        //字母数字
                        let vals = val.replace(/[^\a-\z\A-\Z0-9]/g, '');
                        if (this.accessType === 'phone') {
                            this.forgetFirst.phone.captcha = vals;
                        } else {
                            this.forgetFirst.email.captcha = vals;
                        }
                        this.accessType === 'phone' ? this.forgetFirst.phone.captcha = vals : this.forgetFirst.email.captcha;
                        break;
                    }
                case 'code':
                    {
                        //只让输入数字
                        let vals = val.replace(/[^\d]/g, '');
                        this.forgetTwo.code = vals;
                        break;
                    }
                case 'google':
                    {
                        //只让输入数字
                        let vals = val.replace(/[^\d]/g, '');
                        this.forgetTwo.google_code = vals;
                        break;
                    }
                default:
                    break;
            }
        },
        //登录注册-提交
        register_submit() {
            var url = '';
            //判断协议是否被勾选
            if (this.checkeds === false) {
                return false;
            }
            // 邮箱注册return

            // 判断有没有滑块验证
            if (this.accessType === 'phone' && this.now_type === 'lo' || this.accessType === 'phone' && this.now_type === 'lo' || this.accessType === 'email' && this.now_type !== 're' || this.accessType === 'phone' && this.now_type === 're') {

                if (!j_v_status.getAttribute("res_code")) {

                    this.blockShow = true;
                    if (this.now_type === 're') {
                        document.getElementById("p_v_status").style.display = "none";
                    }
                } else {
                    this.blockShow = false;
                    if (this.now_type === 're') {
                        document.getElementById("p_v_status").style.display = "block";
                    }
                }

            }
            //对数据进行验证
            let resultData = true;
            let data = {};
            let resultPromise = new Promise((resolve) => {
                if (this.now_type === 're') {
                    // p_v_status.style.display = "block";
                    url = '/ajax_user/register';
                    //登錄和註冊部分
                    let val = '';
                    if (this.accessType === 'phone') {
                        // console.log(this.queryRe.phone, 'phonecode', this.queryRe.code);
                        // if (this.queryRe.code == undefined) {

                        // }
                        for (let i in this.queryRe.phone) {
                            if (this.verify(this.queryRe.phone[i], i, 'submit') === false) {
                                resultData = false;
                                resolve(resultData); //成功 resolve 调用的方法
                            }
                        }
                        data = this.queryRe.phone;
                    } else {
                        for (let i in this.queryRe.email) {
                            if (this.verify(this.queryRe.email[i], i, 'submit') === false) {
                                resultData = false;
                                resolve(resultData);
                            }
                        }
                        data = this.queryRe.email;
                    }
                } else if (this.now_type === 'lo') {
                    url = '/Ajax_User/login';
                    if (this.accessType === 'phone') {
                        //数据验证
                        for (let i in this.queryLo.phone) {
                            if (this.verify(this.queryLo.phone[i], i, 'submit') === false) {
                                resultData = false;
                                resolve(resultData);
                            }
                        }
                        data = this.queryLo.phone;
                    } else {
                        for (let i in this.queryLo.email) {
                            if (this.verify(this.queryLo.email[i], i, 'submit') === false) {
                                resultData = false;
                                resolve(resultData);
                            }
                        }
                        data = this.queryLo.email;
                    }
                } else if (this.now_type === 'google') {
                    url = '/Ajax_User/logintwo';
                    data = this.googleData;
                    resultData = this.verify(this.googleData.code, 'code', 'submit');
                    resolve(resultData);
                }
                resolve(resultData);
            });
            resultPromise.then((result) => {
                if (result) {
                    //提交
                    this.subajax(url, data);
                }
            });
        },
        subajax(url, data) {
            // if (this.accessType == 'phone') {
            data.captcha = document.getElementById('j_v_status').getAttribute('res_code');
            // }
            this.submit_now = true;
            this.disable = false;
            this.$http.post(url, data)
                .then((req) => {
                    let {
                        data,
                        status,
                        msg
                    } = req;
                    if (status == 1) {
                        if (data === 'success') {
                            this.showAlert = false;
                            this.googleShow = true;
                            this.now_type = 'google';
                        } else {
                            // 强制重置登录密码 重新登录使用
                            if (url === '/Ajax_User/login') {
                                sessionStorage.removeItem('rssucc');
                            }
                            if (this.now_type === 're') {
                                this.showAlert = false;
                                this.isSuccess = true;
                                this.emailStatus.showActiveModal = true;
                            } else {
                                this.showAlert = false;
                                this.isLogin = true;
                                if (cookie.getItem('reurl')) {
                                    window.location.href = cookie.getItem('reurl');
                                } else {
                                    window.location.href = '/';
                                }
                            }
                        }
                    } else {
                        this.errMes = msg;
                        if (data === 'captcha') {
                            this.errorArr.captchaStatus = 4;
                        } else if (data === 'mo' || data === 'phone' || data === 'area' || data === 'email' || data === 'email_bb') {
                            this.errorArr.accStatus = 4;
                        } else if (data === 'Upassword') {
                            this.errorArr.pwdStatus = 4;
                        } else if (data === 'smsCaptch' || data === 'code') {
                            this.errorArr.codeStatus = 4;
                        } else {
                            this.errMesAlert = msg;
                            this.nowStatus = true;
                        }
                    }
                    this.disable = true;
                    this.submit_now = false;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        //找回密码-提交
        reset_submit() {
            let url = '';
            //登录和注册接口判断

            //验证结果
            let results = true;
            //data
            let resultData = {};
            let resultPromise = new Promise((resolve) => {
                if (this.forgetStep === 1) {
                    url = '/ajax_user/erifypPhone';
                    if (this.accessType === 'phone') {
                        for (let i in this.forgetFirst.phone) {
                            if (this.resetverify(this.forgetFirst.phone[i], i, 'submit') === false) {
                                results = false;
                                resolve(results);
                            }
                        }
                        this.forgetFirst.phone.regtype = this.accessType;
                        resultData = this.forgetFirst.phone;
                    } else if (this.accessType === 'email') {
                        for (let i in this.forgetFirst.email) {
                            if (this.resetverify(this.forgetFirst.email[i], i, 'submit') === false) {
                                results = false;
                                resolve(results);
                            }
                        }
                        this.forgetFirst.email.regtype = this.accessType;
                        resultData = this.forgetFirst.email;
                    }

                } else if (this.forgetStep === 2) {
                    url = '/ajax_user/authenticate';
                    if (!this.isGoogle) delete this.forgetTwo.google_code;
                    for (let i in this.forgetTwo) {
                        let vi = i === 'google_code' ? 'google' : i;
                        if (this.resetverify(this.forgetTwo[i], vi, 'submit') === false) {
                            results = false;
                            resolve(results);
                        }
                    }
                    this.forgetTwo.regtype = this.accessType;
                    resultData = this.forgetTwo;
                } else if (this.forgetStep === 3) {
                    url = '/ajax_user/resetPassword';
                    for (let i in this.forgetThree) {
                        // this.verify(this.forgetThree[i], i, 'submit');
                        if (this.resetverify(this.forgetThree[i], i, 'submit') === false) {
                            results = false;
                            resolve(results);
                        }
                    }
                    this.forgetThree.regtype = this.accessType;
                    resultData = this.forgetThree;
                }
                resolve(results);
            });
            resultPromise.then((result) => {
                if (result === true) {
                    this.resetsubajax(url, resultData);
                }
            });
        },
        resetsubajax(url, data) {
            this.submit_now = true;
            this.disable = false;
            this.$http.post(url, data)
                .then((req) => {
                    let {
                        data,
                        status,
                        msg
                    } = req;
                    if (status == 1) {
                        if (data.google_key) this.isGoogle = data.google_key;

                        if (this.forgetStep === 1) {
                            //進入第二步
                            this.forgetStep = 2;
                        } else if (this.forgetStep === 2) {
                            this.forgetStep = 3;
                        } else if (this.forgetStep === 3) {
                            this.showActiveModal = true;
                            this.repwdSucc = true;
                            this.forgetPwd = false;
                        } else {
                            this.showAlert = false;
                            if (cookie.getItem('reurl')) {
                                window.location.href = cookie.getItem('reurl');
                            } else {
                                window.location.href = '/';
                            }
                        }

                    } else {
                        this.errMes = msg;
                        //重置验证码
                        this.img_ver();
                        //对返回的错误进行展示 状态都为4
                        if (data === 'captcha') {
                            this.errorArr.captchaStatus = 4;
                        } else if (data === 'mo' || data === 'phone' || data === 'area' || data === 'email' || data === 'email_bb') {
                            this.errorArr.accStatus = 4;
                        } else if (data === 'Upassword') {
                            this.errorArr.pwdStatus = 4;
                        } else if (data === 'smsCaptch' || data === 'code') {
                            this.errorArr.codeStatus = 4;
                        } else {
                            this.errMesAlert = msg;
                            this.nowStatus = true;
                        }
                    }
                    this.disable = true;
                    this.submit_now = false;
                })
                .catch((err) => {
                    // console.log(err);
                });
        },


        jump(type) {
            switch (type) {
                case 'reg':
                    this.registerAlert();
                    break;
                case 'lo':
                    this.loginAlert();
                    break;
                case 'forget':
                    this.forgetAlert();
                    break;
                default:
            }
        },
        //忘记密码
        forgetAlert(type, step, isGoogle) {
            //数据初始化
            const vm = this;
            let showAlert = new Promise((resolve) => {
                vm.init();
                resolve();
            });
            showAlert.then(() => {
                vm.init();
                vm.forgetAlert2(type, step, isGoogle);
                vm.showAlert = false;
                //关闭成功页面
                // 关闭邮箱提示类的弹窗
                vm.emailStatus.showActiveModal = false;
            });

        },
        forgetAlert2(type, step, isGoogle) {
            if (type) this.noStepOne = true;
            //数据初始化
            this.init();
            //设定为第一步
            if (step) this.forgetStep = step;
            else this.forgetStep = 1;
            this.forgetPwd = true;
            this.jsj = "1111";
            //是否有google验证码
            this.isGoogle = isGoogle;

        },
        close_alert() {
            this.forgetPwd = false;
            if (this.time_id) {
                clearTimeout(this.time_id);
            }
            this.init();
        },

        //图形验证码
        img_ver() {
            this.ver_src = `/index/captcha?v=${parseInt(Math.random() * 10000000)}`;
        },
        alertfn() {
            this.showAlert = false;
            if (this.time_id) {
                clearTimeout(this.time_id);
            }
        },

        //彈窗回調
        callfn() {
            this.nowStatus = false;
        },
        //找回密码  or 已经注册，去登陆  or 还没火网账号，去注册
        forgetPwdFun(status) {
            var el = document.querySelector('[name=viewport]');
            el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
            signTpl.now_type = status;
            //验证要初始化
            signTpl.hideBg = false;
            signTpl.showBlockVerify = false;
            signTpl.register_verify = false;
            signTpl.loginemail_verify = false;
            signTpl.closeIcon = false;
            signTpl.register_closeIcon = false;
            signTpl.verify_success = false;
            signTpl.reemail_verify_success = false;
            signTpl.register_success = false;
        },

        // 郵箱激活鏈接彈框
        emailAlert() {
            this.now_type = '';
            this.showAlert = false;
            this.emailStatus.showActiveModal = true;
            this.emailStatus.emailActiveLink = this.getUrlQuery('emailactive');
        },

        //切换地区显示和消失
        area_change(reset_type) {
            this.area_show = !this.area_show;
            this.area_type = reset_type;
        },

        //登录手机号邮箱切换
        switchAccessType(e) {
            var el = document.querySelector('[name=viewport]');
            el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
            let acctype = null;
            if (e && e.target) {
                acctype = (e.target).getAttribute('data-acctype') || 'phone';
            } else {
                acctype = e;
            }
            this.accessType = acctype;
            for (let i in this.errorArr) {
                this.errorArr[i] = 0;
            }
            // console.log(jigsaw.el);
            clearTimeout(this.time_id);
        },
        //点击列表内容 切换fn_active
        arec_click(index) {
            let arr = index.split(',');
            this.register_index = arr[0];
            this.area_num = arr[1].replace(/(^\s*)|(\s*$)/g, "");
            this.queryRe.phone.area = this.area_num;
            this.queryLo.phone.area = this.area_num;
            this.area_show = false;
            //切换后对手机号进行验证
            if (this.now_type === 're') {
                if (this.accessType === 'phone') {
                    this.verify(this.queryRe.phone.account, 'account');
                } else {
                    this.verify(this.queryRe.email.account, 'account');
                }
            } else if (this.now_type === 'lo' && this.accessType === 'phone') {
                this.forgetFirst.phone.area = this.area_num;
            }
        },
        //點擊其他位置收起區域選擇
        closeArea(e) {
            let lists = document.getElementsByClassName('fn_register_area')[0];
            let listLabel = document.getElementsByClassName('fn_register_label')[0];
            if (lists && listLabel) {
                if (!lists.contains(e.target) && !listLabel.contains(e.target)) {
                    this.area_show = false;
                }
            }
        },
        //註冊成功關閉按鈕
        close_btn() {
            this.emailStatus.showActiveModal = false;
        },
        //找回密码關閉按鈕
        reset_close_btn() {
            this.showActiveModal = false;
        },
        toggleShowReMail() {
            this.showReMail = !this.showReMail;
        },
        remail() {
            this.$http.post('/Emailverify/retrysent', this.query)
                .then(res => {
                    if (res.status == 1) {
                        // 發送成功
                        this.sentSuccess = true;
                    } else if (res.status == 0) {
                        // 發送失敗
                        this.sentSuccess = false;
                        this.nowStatus = true;
                        this.errMesAlert = res.msg;
                    }
                })
                .catch(err => {

                });
        },
        // 顶象滑块
        blockFun1() {
            var el = document.querySelector('[name=viewport]');
            // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0,user-scalable=no');
            signTpl.hideBg = true;
            signTpl.register_verify = true;
            signTpl.register_closeIcon = true;
            signTpl.register_success = false;
            this.blockShow = false;
            signTpl.verify_bg = false;
            signTpl.loadIcon = true;
            document.getElementById('msg').innerHTML = '';

            if (jigsaw.el == undefined || jigsaw.el.getAttribute('id') != 'captcha') {
                jigsaw.init({
                    el: document.getElementById("captcha"),
                    onSuccess: function(res) {
                        // sessionStorage.jigsawstatus = true;
                        document.getElementById('msg').innerHTML = 'The verification is successful!';
                        signTpl.verify_bg = true;
                        signTpl.register_success = false;
                        signTpl.loading_icon = false;
                        signTpl.loadIcon = false;
                        setTimeout(() => {
                            signTpl.hideBg = false;
                            signTpl.verify_bg = false;
                            signTpl.loading_icon = false;
                            signTpl.register_closeIcon = false;
                            signTpl.register_verify = false;
                            signTpl.register_success = true;
                            signTpl.loadIcon = false;
                            // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');


                        }, 1000);
                    },
                    onFail: cleanMsg,
                    onRefresh: cleanMsg,
                });
            } else {
                jigsaw.reset();
            }

        },
        // 登录-手机
        blockFun2() {
            var el = document.querySelector('[name=viewport]');
            // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0,user-scalable=no');
            signTpl.hideBg = true;
            signTpl.verify_bg = false;
            signTpl.showBlockVerify = true;
            signTpl.closeIcon = true;
            signTpl.verify_success = false;
            this.blockShow = false;
            signTpl.loadIcon = true;
            document.getElementById('msg').innerHTML = '';
            var captcha2 = document.getElementById("captcha2");
            if (jigsaw.el == undefined || jigsaw.el.getAttribute('id') != 'captcha2') {
                jigsaw.init({
                    el: document.getElementById("captcha2"),
                    onSuccess: function(res) {
                        document.getElementById('msg').innerHTML = 'The verification is successful!';
                        signTpl.verify_bg = true;
                        signTpl.verify_success = false;
                        signTpl.loading_icon = false;
                        signTpl.loadIcon = false;

                        setTimeout(() => {
                            signTpl.hideBg = false;
                            signTpl.showBlockVerify = false;
                            signTpl.verify_bg = false;
                            signTpl.loading_icon = false;
                            signTpl.closeIcon = false;
                            signTpl.verify_success = true;
                            signTpl.loadIcon = false;
                            // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');

                        }, 1000);
                    },
                    onFail: cleanMsg,
                    onRefresh: cleanMsg,
                });
            } else {
                jigsaw.onSuccess = function(res) {
                    document.getElementById('msg').innerHTML = 'The verification is successful!';
                    signTpl.verify_bg = true;
                    signTpl.verify_success = false;
                    signTpl.loading_icon = false;
                    signTpl.loadIcon = false;
                    setTimeout(() => {
                        signTpl.hideBg = false;
                        signTpl.showBlockVerify = false;
                        signTpl.verify_bg = false;
                        signTpl.loading_icon = false;
                        signTpl.closeIcon = false;
                        signTpl.verify_success = true;
                        signTpl.loadIcon = false;

                    }, 1000);
                }
                jigsaw.reset();
            }
        },
        //登录-邮箱
        blockFun3() {
            var el = document.querySelector('[name=viewport]');
            // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0,user-scalable=no');
            signTpl.hideBg = true;
            signTpl.verify_bg = false;
            signTpl.showBlockVerifyEmail = true;
            signTpl.closeIcon = true;
            signTpl.reemail_verify_success = false;
            this.blockShow = false;
            signTpl.loadIcon = true;
            document.getElementById('msg').innerHTML = '';
            var captcha3 = document.getElementById("captcha3");
            if (jigsaw.el == undefined || jigsaw.el.getAttribute('id') != 'captcha3') {
                jigsaw.init({
                    el: document.getElementById("captcha3"),
                    onSuccess: function(res) {
                        document.getElementById('msg').innerHTML = 'The verification is successful!';
                        signTpl.verify_bg = true;
                        signTpl.loading_icon = false;
                        signTpl.loadIcon = false;
                        setTimeout(() => {

                            signTpl.hideBg = false;
                            signTpl.showBlockVerifyEmail = false;
                            signTpl.verify_bg = false;
                            signTpl.loading_icon = false;
                            signTpl.closeIcon = false;
                            signTpl.reemail_verify_success = true;
                            signTpl.loadIcon = false;
                            // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');


                        }, 1000);
                    },
                    onFail: cleanMsg,
                    onRefresh: cleanMsg,
                });
            } else {
                jigsaw.onSuccess = function(res) {
                    document.getElementById('msg').innerHTML = 'The verification is successful!';
                    signTpl.verify_bg = true;
                    signTpl.loading_icon = false;
                    signTpl.loadIcon = false;
                    setTimeout(() => {
                        signTpl.hideBg = false;
                        signTpl.showBlockVerifyEmail = false;
                        signTpl.verify_bg = false;
                        signTpl.loading_icon = false;
                        signTpl.closeIcon = false;
                        signTpl.reemail_verify_success = true;
                        signTpl.loadIcon = false;


                    }, 1000);
                }
                jigsaw.reset();
            }
        },

        //关闭滑块
        closeVerify() {
            var el = document.querySelector('[name=viewport]');
            el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
            signTpl.register_verify = false;
            signTpl.showBlockVerify = false;
            signTpl.showBlockVerifyEmail = false; //
            signTpl.hideBg = false;
            signTpl.closeIcon = false; //关闭按钮
            signTpl.loadIcon = false;
        },
    },
    watch: {
        //监听弹窗是否弹出
        //弹出式需要给body增加样式
        showAlert() {
            if (this.showAlert) {
                document.body.classList.add('no_scroll_body');
            } else {
                document.body.classList.remove('no_scroll_body');
            }
        }
    }
}).$mount("#signTpl");
export default signTpl;
webpackJsonp([17],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'scrollTable',
  template: '<div><slot name="thead"></slot><slot name="tbody"></slot></div>',
  props: ['data'],
  data: function data() {
    return {
      theadTds: '',
      tbodyFirstTds: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var tables = this.$el.getElementsByTagName('table');
    if (tables.length > 0) {
      var thead = tables[0];
      var tbody = tables[1];
      var theadTr = thead.getElementsByTagName('tr');
      if (theadTr.length > 0) {
        var tds = theadTr[0].getElementsByTagName('td');
        var ths = theadTr[0].getElementsByTagName('th');
        if (tds.length > 0) {
          this.theadTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tds));
        }
        if (ths) {
          this.theadTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(ths));
        }
      }
      //
      var tbodyFirstTr = tbody.getElementsByTagName('tr');
      //
      if (tbodyFirstTr.length > 0) {
        this.tbodyFirstTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tbodyFirstTr[0].getElementsByTagName('td')));
      }
    }

    // this.getTbodyTds();
    //
    window.addEventListener('resize', function () {
      _this.getTbodyTds();
    }, false);
  },

  methods: {
    setTheadStyle: function setTheadStyle() {
      var _this2 = this;

      if (this.tbodyFirstTds.length > 0) {
        this.tbodyFirstTds.forEach(function (td, index) {
          var style = window.getComputedStyle(td);
          // console.log(style.width);
          _this2.theadTds[index].style.minWidth = style.width;
        });
      }
    },
    getTbodyTds: function getTbodyTds() {
      var tables = this.$el.getElementsByTagName('table');
      if (tables.length > 0) {
        var tbody = tables[1];
        var tbodyFirstTr = tbody.getElementsByTagName('tr');

        //
        if (tbodyFirstTr.length > 0) {
          this.tbodyFirstTds = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tbodyFirstTr[0].getElementsByTagName('td')));
          this.setTheadStyle();
        }
      }
    }
  },
  watch: {
    data: function data() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.getTbodyTds();
      });
    }
  }
});

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nPages_user_mplan_js__ = __webpack_require__(836);


/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_common_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_user_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_tables_scss__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_tables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_user_tables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nStyle_user_mplan_user_mplan_scss__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nStyle_user_mplan_user_mplan_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nStyle_user_mplan_user_mplan_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tradeLanguagePack__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_nComponents_Alert__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_nComponents_scrollTable__ = __webpack_require__(141);













//table

var qs = __webpack_require__(76);

__WEBPACK_IMPORTED_MODULE_7_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_plugins_http__["a" /* default */]);

var language = Object(__WEBPACK_IMPORTED_MODULE_10__components_tradeLanguagePack__["a" /* default */])();
//  || {
//   COPY_NOT_SUPPORT: "您的浏覽器不支持快速複制功能，請手動選擇需要複制的內容按下 ctrl + c 鍵複制。",
//   COPY_NOT_SUPPORT_UPDATE: "您的浏覽器不支持複制功能呢，請安裝最新版本浏覽器後再試試。",
//   COPY_SUCCESS: "複制成功，請通過 ctrl + v 鍵粘貼。",
//   BTN_SURE: "確定",
//   FORM_ERROR_ADDRESS: "請輸入有效的接受地址",
//   FORM_ERROR_NUMBER: "請輸入提取數額",
//   FORM_ERROR_OVER_NUMBER: "提取數額不符合要求",
//   FORM_MSG_TRADE_PWD: "請輸入交易密碼",
//   FORM_ERROR_TRADE_PWD: "交易密碼錯誤",
//   FORM_MSG_CAPTCHA: "看不清？點擊圖片更換驗證碼",
//   FORM_ERROR_CAPTCHA: "位數不正確",
//   FORM_MSG_CODE: "請輸入手機驗證碼",
//   FORM_ERROR_CODE: "手機驗證碼錯誤",
//   REWARD_SUCCESS: "獎勵提取成功"
// };
console.dir('language', language);
var mplan = new __WEBPACK_IMPORTED_MODULE_7_vue__["a" /* default */]({
  data: function data() {
    return {
      index: 1,
      tabLoging: false,
      no_data: false,
      tabData: [],
      //提取奖励弹窗
      drawErr: {
        drawtype: 0,
        drawNum: 0
      },
      //php返回类型 匹配奖励余额
      optionData: { pair: '' },
      drawTypes: '',
      //提交
      submit_now: false,
      //奖励提取
      drawData: {
        coin: '',
        number: '',
        //trade  reg
        type: ''
      },
      showAlert: false,
      //最大输入值
      maxLength: 31,
      //错误提示弹窗
      nowStatus: false,
      errMesAlert: '',
      //弹窗点击回调
      callType: '',
      //分页
      cur: 1,
      all: ''

    };
  },

  watch: {
    cur: function cur(newValue, oldValue) {}
  },
  computed: {
    indexs: function indexs() {
      var left = 1;
      var right = this.all;
      var arr = [];
      if (this.all >= 7) {
        if (this.cur > 4 && this.cur < this.all - 3) {
          left = this.cur - 3;
          right = this.cur + 3;
        } else if (this.cur <= 4) {
          left = 1;
          right = 7;
        } else {
          left = this.all - 6;
          right = this.all;
        }
      }
      while (left <= right) {
        arr.push(left);
        left++;
      }
      return arr;
    }
  },
  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_9_nComponents_nav__["b" /* nav */])();
    // this.tabs();
    this.getList();

    setTimeout(function () {
      _this.tabs();
    }, 1000);
    //
    // let inputDom = document.getElementById('mplan_copy');
    // let oldUrl = inputDom.value;
    // console.log(oldUrl);
    // inputDom.value = oldUrl.replace(/[a-z.]+.com/, function(key) {
    //   return location.protocol + '//' + key;
    // });
  },

  methods: {
    btnClick: function btnClick(num) {
      if (num != this.cur) {
        this.cur = num;
      }
    },

    //上一页
    pageClick: function pageClick() {
      __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/ajax_user/invite', qs.stringify({ page: this.cur })).then(function (response) {
        mplan.tabData = response.data.data.list;
      });
    },

    //跳转
    pageSkip: function pageSkip() {
      var maxPage = this.all;
      var skipPage = Number(document.getElementsByClassName("jumppage")[0].value);
      if (!skipPage) {
        alert("请输入跳转页码");
        return;
      } else if (skipPage < 1 || skipPage > maxPage) {
        alert("您输入的页码超过页数范围了！");
        return;
      } else {
        //this.cur=skipPage;
        this.btnClick(skipPage);
        this.pageClick();
      }
    },

    //数据初始化
    init: function init() {
      this.drawData = { coin: '', number: '', type: '' };
    },

    //tab 切换
    tabChange: function tabChange(index) {
      this.index = index;
      this.tabs();
    },

    //表格
    tabs: function tabs() {
      var _this2 = this;

      this.$refs.scrollTab.getTbodyTds();
      this.tabLoging = true;
      this.$http.post('/ajax_user/invite', { type: this.index }).then(function (_ref) {
        var data = _ref.data,
            status = _ref.status,
            msg = _ref.msg;

        var obj = data.list;
        _this2.tabData = obj;
        var totalPage = data.pages;
        _this2.all = totalPage;
        _this2.tabLoging = false;
        if (status == 1 && data.length == 0) {
          _this2.no_data = true;
        } else if (status == 1 && data.length > 0) {
          _this2.tabData = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(data));
          _this2.no_data = false;
        }
      }).then(function () {
        _this2.$refs.scrollTab.getTbodyTds();
        _this2.$nextTick(function () {
          _this2.$refs.scrollTab.getTbodyTds();
        });
      });
    },
    copy: function copy() {
      if (!document.execCommand) {
        this.nowStatus = true;
        this.errMesAlert = language['COPY_NOT_SUPPORT']; //複製不成功，不支持
      }
      var transfer = document.getElementById('J_CopyTransfer');
      var val = document.getElementById('mplan_copy').value;
      if (!transfer) {
        transfer = document.createElement('textarea');
        transfer.id = 'J_CopyTransfer';
        transfer.style.position = 'absolute';
        transfer.style.opacity = '0';
        transfer.style.width = '0';
        transfer.style.left = '0px';
        transfer.style.bottom = '0px';
        document.body.appendChild(transfer);
      }
      transfer.value = val || '';
      transfer.focus();
      transfer.select();
      try {
        var succ = document.execCommand('Copy', false, null);
        if (succ) {
          this.nowStatus = true;
          this.errMesAlert = language['COPY_SUCCESS']; //復製成功
        } else {
          this.nowStatus = true;
          this.errMesAlert = language['COPY_NOT_SUPPORT']; //複製不成功，不支持
        }
      } catch (e) {
        if (e) {
          this.nowStatus = true;
          this.errMesAlert = language['COPY_NOT_SUPPORT_UPDATE']; //複製不成功，升級瀏覽器
        }
      }
    },
    getList: function getList() {
      var _this3 = this;

      this.$http.post('/Ajax_User/limit', {}).then(function (_ref2) {
        var data = _ref2.data,
            status = _ref2.status,
            msg = _ref2.msg;

        if (status == 1) {
          _this3.optionData = data;
        }
      });
    },

    //验证
    verify: function verify(type, clickType) {
      switch (type) {
        case 'coin':
          if (!this.drawTypes) {
            this.drawErr.drawtype = 2;
            return false;
          } else {
            this.drawErr.drawtype = 0;
            return true;
          }
          break;
        case 'number':
          if (this.drawData.number && clickType != 'focus') {

            var num = this.drawData.number;
            //最低提取额
            var min = this.getMin();

            //提取额判断
            if (min > num) {
              this.drawErr.drawNum = 3;
              return false;
            } else {

              //小数点后位数
              var limit = this.getLimit();
              //小数点判断
              var spots = num.split('.').length;

              if (limit == 0 && spots > 1) {
                //不存在小数点
                this.drawErr.drawNum = 3;
                return false;
              } else if (limit > 0 && spots > 2) {
                //存在小数点
                this.drawErr.drawNum = 3;
                return false;
              } else {
                //获取小数点前的数字
                var halfNum = num.split('.')[0];
                if (halfNum.indexOf('0') == 0 && halfNum > 1) {
                  //第一位为0
                  this.drawErr.drawNum = 3;
                  return false;
                } else {
                  this.drawErr.drawNum = 0;
                  //限制最大输入
                  this.maxLength = parseInt(halfNum) + parseInt(limit);
                  return true;
                }
              }
            }
          } else if (clickType === 'focus') {
            this.drawErr.drawNum = 1;
            return false;
          } else if (clickType === 'blur') {
            this.drawErr.drawNum = 0;
          } else if (clickType === 'submit') {
            this.drawErr.drawNum = 2;
          }
          break;
        default:

      }
    },
    changeOp: function changeOp() {
      this.init();
      if (this.drawTypes === 'mcc_reg') {
        this.drawData.type = 'reg';
        this.drawData.coin = 'mcc';
      } else {
        this.drawData.type = 'trade';
        this.drawData.coin = this.drawTypes;
      }
      this.verify('coin');
    },

    //获取最小转出
    getMin: function getMin() {
      if (this.optionData['pair']['' + this.drawTypes] || this.drawTypes === 'mcc_reg') {
        if (this.drawTypes === 'mcc_reg') return this.optionData['pair'].mcc.min;else return this.optionData['pair']['' + this.drawTypes].min;
      }
    },

    //获取小数点后限制
    getLimit: function getLimit() {
      if (this.optionData['pair']['' + this.drawTypes] || this.drawTypes === 'mcc_reg') {
        if (this.drawTypes === 'mcc_reg') return this.optionData['pair'].mcc.numLimit;else return this.optionData['pair']['' + this.drawTypes].numLimit;
      }
    },

    //提交
    submitData: function submitData() {
      var _this4 = this;

      //验证
      this.submit_now = true;
      var coin = this.verify('coin', 'submit');
      var number = this.verify('number', 'submit');
      if (coin && number) {
        this.$http.post('/ajax_user/rebateIn', this.drawData).then(function (_ref3) {
          var data = _ref3.data,
              status = _ref3.status,
              msg = _ref3.msg;

          _this4.nowStatus = true;
          _this4.errMesAlert = msg;
          _this4.submit_now = false;
          if (status == 1) {
            _this4.callType = 'draw';
          }
        });
      }
    },
    callfn: function callfn() {
      if (this.callType == 'draw') {
        window.location.reload();
      }
    }
  },
  components: {
    scrollTable: __WEBPACK_IMPORTED_MODULE_12_nComponents_scrollTable__["a" /* default */]
  }
}).$mount('#mplan');
$(function () {
  $('[type="button"]').click(function () {
    //选择文本
    $(this).siblings().select();
    //执行复制命令
    document.execCommand('Copy');
  });
});

/* unused harmony default export */ var _unused_webpack_default_export = (mplan);

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[835]);
//# sourceMappingURL=user.mplan.529ddf9f849bbd78.js.map
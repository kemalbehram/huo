webpackJsonp([10],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(140);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nPages_user_candy__ = __webpack_require__(839);


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_common_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_user_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_tables_scss__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_tables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_user_tables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nStyle_user_candy_user_candy_scss__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nStyle_user_candy_user_candy_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nStyle_user_candy_user_candy_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nComponents_Alert__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_tools_getQuery_js__ = __webpack_require__(841);









__WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_7_plugins_http__["a" /* default */]);




//table
// import scrollTable from 'nComponents/scrollTable';


var candy = new __WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */]({
    data: function data() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
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
            tabChnage: true
        }, 'moverClick', true);
    },
    mounted: function mounted() {
        Object(__WEBPACK_IMPORTED_MODULE_8_nComponents_nav__["b" /* nav */])();
        if (location.href.indexOf('?tab') > -1) {
            this.coinClick(parseInt(Object(__WEBPACK_IMPORTED_MODULE_11_tools_getQuery_js__["a" /* default */])('tab')));
        } else {
            this.getCoinList();
        }
    },

    methods: {
        coinClick: function coinClick(nums) {
            this.tab = nums;
            this.no_data = false;
            this.getCoinList();
        },

        //獲取也main數據
        getCoinList: function getCoinList() {
            var _this = this;

            this.tabLoging = true;
            var url = '';
            if (this.tab === 1) {
                //持幣分紅
                url = '/ajax_user/bonus';
            } else if (this.tab === 2) {
                //wcg活动领取列表
                url = '/ajax_user/reward';
            } else {
                //点赞列表
                url = '/ajax_user/likes';
            }
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post(url).then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status;

                if (status == 1) {
                    _this.dataList = data;
                }
            }).then(function () {
                _this.tabLoging = false;
                if (_this.dataList.length > 0) {
                    _this.no_data = false;
                } else {
                    _this.no_data = true;
                }
            });
        },

        // 点击领取
        gifts: function gifts(coin, key, id) {
            var _this2 = this;

            if (!this.moverClick) return;
            this.moverClick = false;
            var url = '',
                data = {};
            if (this.tab === 1) {
                //持幣分紅
                url = '/ajax_user/getBonus';
                data = { coin: coin };
            } else if (this.tab === 2) {
                url = '/ajax_user/receiveReward ';
                data = { id: id };
            } else {
                //
                url = '/ajax_user/likesReward ';
                data = { id: id };
            }
            this.$http.post(url, data).then(function (res) {
                _this2.moverClick = true;
                _this2.nowStatus = true;
                _this2.errMesAlert = res.msg;
                _this2.alertype = 'gift';
                if (res.status) {
                    if (_this2.tab === 1) {
                        _this2.dataList[key].number = res.data;
                    } else {
                        _this2.dataList[key].status = 2;
                    }
                }
            }).catch(function (err) {
                _this2.moverClick = true;
            });
        },
        callfn: function callfn() {
            if (this.alertype === 'gifr') {
                this.getCoinList();
            }
        }
    },
    components: {
        // scrollTable
    }
}).$mount('#candy');
/* unused harmony default export */ var _unused_webpack_default_export = (candy);

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GetQueryString;
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  // 获取url中"?"符后的字符串并正则匹配
  var query = window.location.search.substr(1).match(reg);
  var context = "";
  if (query != null) context = query[2];
  reg = null;
  query = null;
  return context == null || context == "" || context == "undefined" ? "" : context;
}

/***/ })

},[838]);
//# sourceMappingURL=user.candy.80f4a0ce6763cef5.js.map
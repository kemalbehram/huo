webpackJsonp([18],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getLang(where, who) {
  try {
    var lang = JSON.parse($(where).html());
    who.__proto__.lang = lang;
  } catch (e) {
    alert("系統繁忙，請稍後重試。(The system is busy, please try again later.)");
  }
}
/* harmony default export */ __webpack_exports__["a"] = (getLang);

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_news_detail_scss__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_news_detail_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_news_detail_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nComponents_register__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_is__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_cookie__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tradeLanguagePack__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_chgHpLg__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_alert_alert__ = __webpack_require__(77);










// process.env.NODE_ENV
$(document).ready(function () {
  Object(__WEBPACK_IMPORTED_MODULE_7__tools_chgHpLg__["a" /* default */])("#baseLang", __WEBPACK_IMPORTED_MODULE_3__tools_http__["a" /* default */]);

  var language = Object(__WEBPACK_IMPORTED_MODULE_6__components_tradeLanguagePack__["a" /* default */])() || {
    just: "剛剛",
    yesterday: "昨天",
    the_day_before_yesterday: "前天",
    min: "分鐘",
    hour: "小時前"
  };
  var myalert = new __WEBPACK_IMPORTED_MODULE_8__tools_alert_alert__["a" /* default */]();
  // let t_lang = $("#detailLang").html();
  // console.log(t_lang);
  //获取语言包
  // const lan = getLanguagePack();
  // console.log(lan);
  // console.log(lan);
  // if (.length > 0) { //language.json中tradeJs為空時輸出數組，不為空時輸出的是對象
  //   language = lan.detailJs;
  // }

  // let locUrl = location.href.replace(/http(s)?:\/\/[a-zA-Z.]*(:\d+)?/, '');
  __WEBPACK_IMPORTED_MODULE_5__tools_cookie__["a" /* default */].setReUrl();
  Object(__WEBPACK_IMPORTED_MODULE_1_nComponents_nav__["b" /* nav */])();
  //
  var registerFn = __WEBPACK_IMPORTED_MODULE_2_nComponents_register__["a" /* default */];

  // 評論輸入 顯示字數
  $('#newsIsset').on('input', function () {
    var val = $(this).val();
    $("#issLength").html(val.length);
  });
  //
  // $('#newsIsset').on('keydown', function() {
  //   console.log($(this).val());
  // });
  // 獲取路由參數
  // function GetQueryString(name) {
  //   const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  //   const r = window.location.search.substr(1).match(reg);
  //   if (r != null) return unescape(r[2]);
  //   return null;
  // }
  // let href = window.location.href;
  // let startD = href.lastIndexOf("/detail/");
  // let lenId = href.slice(startD + 2);
  // let comId = '';
  // if (lenId.indexOf(".html") > -1) {
  //   comId = lenId.replace(".html", "");
  // } else {
  //   comId = lenId;
  // }
  // 獲取評論 id
  var comId = $("#detailid").attr("data-dds");
  // const comId = href.slice(startD + 2).replace(".html", "");
  // GetQueryString('id');

  // 是否登陆
  function userLogin() {
    Object(__WEBPACK_IMPORTED_MODULE_3__tools_http__["a" /* default */])({
      url: '/ajax_user/getUserInfo',
      method: 'GET',
      success: function success(_ref) {
        var status = _ref.status,
            data = _ref.data;

        if (parseInt(status) === 1 && data) {
          // 登陆
          $('#issNLG').hide();
          // 评论 issDom
          $('#issDom').css({ opacity: 1 }).show();
        } else {
          $('#issNLG').show();
          $('#issDom').hide();
        }
      }
    });
  }
  //
  userLogin();
  // 获取评论内容
  function getIss() {
    Object(__WEBPACK_IMPORTED_MODULE_3__tools_http__["a" /* default */])({
      url: '/ajax_news/commentList?id=' + comId,
      method: "GET",
      success: function success(_ref2) {
        var status = _ref2.status,
            data = _ref2.data;

        // 更新評論列表
        if (Object(__WEBPACK_IMPORTED_MODULE_4__tools_is__["a" /* default */])(data, 'Array') && data.length > 0) {
          var monents = function monents(time) {
            var timeObj = new Date(time * 1000);
            var minute = timeObj.getMinutes();
            if (minute - 9 <= 0) {
              minute = '0' + minute;
            }
            return {
              year: timeObj.getFullYear(),
              month: timeObj.getMonth() < 9 ? '0' + (timeObj.getMonth() + 1) : timeObj.getMonth() + 1,
              date: timeObj.getDate(),
              hh: timeObj.getHours() + ":" + minute
            };
          };
          // 评论显示时间


          var timeFilter = function timeFilter(time) {
            if (!time) return '';
            var nowTime = nowTimeObj.getTime();
            var InputTime = parseInt(time);
            var diffTime = parseInt(nowTime / 1000) - InputTime;
            var result = '';
            // 一分鐘內 0 ~ 60s  out: 剛剛
            if (diffTime <= 60) {
              result = language['just']; //剛剛
            }
            // 一小時內  ((60s +1) ~ (60 * 60S)  out： xx分鐘前
            if (diffTime > 60 && diffTime <= 60 * 60) {
              result = '' + (parseInt(diffTime / 60) + language['min']);
            }
            // 一天內  ((60 * 60S + 1) ~ ((60 * 60S) * 24)  out: xx小時前
            if (diffTime > 60 * 60 && diffTime <= 60 * 60 * 24) {
              result = '' + (parseInt(diffTime / 60 / 60) + language['hour']);
            }
            // 24~ 48h
            if (diffTime > 60 * 60 * 24 && diffTime <= 60 * 60 * 48) {
              result = '' + (language['yesterday'] + monents(time).hh); //昨天
            }
            // 48~72h
            if (diffTime > 60 * 60 * 48 && diffTime <= 60 * 60 * 72) {
              result = '' + (language['the_day_before_yesterday'] + monents(time).hh); //前天
            }
            // 72h 后
            if (diffTime > 60 * 60 * 72) {
              var monentTime = monents(time);
              // 今年
              if (monentTime.year == nowTimeObj.getFullYear()) {
                result = monentTime.month + '-' + monentTime.month + ' ' + monentTime.hh;
              } else {
                // 不在當年
                result = monentTime.year + '-' + monentTime.month + '-' + monentTime.month + ' ' + monentTime.hh;
              }
            }

            return result;
          };
          // content : "asdkjfkldsjakfa"
          // created : "1508401262"
          // mo : "15602471482"
          // nid : "254"


          $("#noIssData").hide();
          var issListStr = '';
          // 缓存当前时间
          var nowTimeObj = new Date();
          data.reverse().forEach(function (iss) {
            var users = '';
            if (iss.mo) {
              users = iss.mo.slice(0, 3) + '****' + iss.mo.slice(-4);
            } else {
              users = iss.email;
            }
            issListStr += '<li>\n              <div class="iss-li-top">\n                <span>' + users + '</span><span>' + timeFilter(iss.created) + '</span>\n              </div>\n              <div class="iss-describe">' + iss.content + '</div>\n            </li>';
          });
          $("#issListShow").html(issListStr);
        } else if (Array.isArray(data) && data.length === 0) {
          $("#noIssData").show();
        }
      }
    });
  }

  window.REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
  // 转义 html
  window.encodeHtml = function (s) {
    return typeof s != "string" ? s : s.replace(this.REGX_HTML_ENCODE, function ($0) {
      var c = $0.charCodeAt(0),
          r = ["&#"];
      c = c == 0x20 ? 0xA0 : c;
      r.push(c);r.push(";");
      return r.join("");
    });
  };
  // 發表評論
  $("#seedIss").click(function () {
    var $textArea = $('#newsIsset');
    var reqToken = $('#hahaha').text();
    if ($textArea.length > 0) {
      var contentText = window.encodeHtml($textArea.val());
      Object(__WEBPACK_IMPORTED_MODULE_3__tools_http__["a" /* default */])({
        url: '/ajax_news/newsComment',
        method: 'POST',
        data: {
          nid: comId,
          content: contentText,
          reqToken: reqToken
        },
        success: function success(_ref3) {
          var status = _ref3.status,
              data = _ref3.data,
              msg = _ref3.msg;

          if (parseInt(status) === 1) {
            $textArea.val('');
            $("#issLength").text('0');
            getIss();
          } else {
            if (msg.content) {
              myalert.show(msg.content);
            } else {
              myalert.show(msg);
            }
            if (data.need_login == 1) {
              $('[data-btnsu="sureBtn"]').click(function (event) {
                myalert.closed(function () {
                  registerFn.loginAlert();
                });
              });
            }
          }
        }
      }, 'noAlert');
    }
  });
  $('#loginBtn').click(function () {

    registerFn.$watch("isLogin", function () {
      $('#issNLG').hide();
      // 评论 issDom
      $('#issDom').css({ opacity: 1 }).show();
    });

    registerFn.loginAlert();
  });

  //新聞頁返回列表按鈕，點擊后返回上一次瀏覽的tab
  $('#backToNewsList').on('click', function () {
    // if (/news\/detail/.test(window.location.href)) { //跳回到上一頁帶參數的url
    //   history.go(-1);
    // } else {
    //   location.href = '/news?cate=3'; //默認到幫助tab
    // }
    //獲取tab類型
    var url = $('.act-ti').attr('href');
    location.href = url;
  });

  getIss();
});

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[855]);
//# sourceMappingURL=news.detail.866e686d961895e0.js.map
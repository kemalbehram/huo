webpackJsonp([24],{

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_news_newsDefault_scss__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_news_newsDefault_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_news_newsDefault_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nComponents_register__ = __webpack_require__(79);

// import nav from '@/components/nav';



$(document).ready(function () {
  Object(__WEBPACK_IMPORTED_MODULE_1_nComponents_nav__["b" /* nav */])();
  //
  var pageReg = /^(([1-9]([0-9]+)?)+)$/;

  $("#pageForm input").on('input', function () {
    var $inp = $(this);
    var val = $inp.val();
    if (val && !pageReg.test(val)) {
      // 获取 输入的 整数部分
      var numPart = parseInt(val);
      if (!isNaN(numPart)) {
        $inp.val(numPart);
      } else {
        $inp.val('');
      }
    }
  });
  // 提交
  $("#pageForm").on("submit", function () {
    var val = $(this).find('input').val();
    var result = false;
    if (val && pageReg.test(val)) {
      result = true;
    } else {
      result = false;
    }
    // console.log(1212, result);
    return result;
  });

  $("#go").click(function () {
    var val = $("input[name='p']").val();
    var cate = document.getElementsByName("cate")[0].value;
    console.log($(".page-list ul li:last-child"));
    var li = $(".page-list ul li:last-child a").attr('href');
    var lastPage = '';
    li.replace(/([0-9]+)$/, function (key) {
      //
      console.log(key);
      lastPage = key;
    });

    //
    if (val && pageReg.test(val)) {
      if (val - lastPage > 0) {
        val = lastPage;
      }

      location.href = '/news/category/' + cate + '/page/' + val;
    } else {
      $("input[name='p']").val("1");
    }
  });
  // if (document.getElementById("go")) {
  //   var btn = document.getElementById("go").onclick = function () {
  //     var val= document.getElementsByName("p")[0].value;
  //     var cate = document.getElementsByName("cate")[0].value;
  //     let result = false;
  //
  //     if (val && pageReg.test(val)) {
  //       result = true;
  //       location.href='/news/category/'+cate+'/page/'+ val;
  //     } else {
  //       result = false;
  //     }
  //
  //    }
  // }
});

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[854]);
//# sourceMappingURL=news.index.b5cb3a8992bed191.js.map
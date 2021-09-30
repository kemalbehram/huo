webpackJsonp([20],{

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nPages_user_bonusdetails__ = __webpack_require__(852);


/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_user_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_tables_scss__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_user_tables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_user_tables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_bonusdetails_bonusdetails_scss__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_bonusdetails_bonusdetails_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_user_bonusdetails_bonusdetails_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_page_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);










__WEBPACK_IMPORTED_MODULE_7_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_plugins_http__["a" /* default */]);


var candy = new __WEBPACK_IMPORTED_MODULE_7_vue__["a" /* default */]({
	data: function data() {
		return {
			//tab的状态
			tab: 1,
			no_data: false, //没数据
			tabLoging: false, //logding
			//分页数据
			list: {},
			all: '',
			currentpage: ''
		};
	},
	mounted: function mounted() {
		Object(__WEBPACK_IMPORTED_MODULE_9_nComponents_nav__["b" /* nav */])();
		this.coinClick(this.tab);
	},

	methods: {
		coinClick: function coinClick(nums) {
			this.tab = nums;
			this.no_data = false;
			this.getcoindata(1);
		},

		//分页数据
		getcoindata: function getcoindata(page) {
			__WEBPACK_IMPORTED_MODULE_10_axios___default.a.post("/ajax_user/inviteBonusDetail?origin_uid=" + this.getId('id') + '&type=' + this.tab + '&page=' + page).then(function (response) {
				candy.list = response.data.data.list;
				candy.all = response.data.data.pages;
			}).catch(function (error) {
				console.log('error');
			});
		},
		getId: function getId(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		}
	},
	components: {}
}).$mount('#candy');
/* unused harmony default export */ var _unused_webpack_default_export = (candy);

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[851]);
//# sourceMappingURL=user.bonusdetails.a8fcce390faee2c0.js.map
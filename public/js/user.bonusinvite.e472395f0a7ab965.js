webpackJsonp([19],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nPages_user_bonusinvite__ = __webpack_require__(848);


/***/ }),

/***/ 848:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_bonusinvite_bonusinvite_scss__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_user_bonusinvite_bonusinvite_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_user_bonusinvite_bonusinvite_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tools_page_page_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_page_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);











__WEBPACK_IMPORTED_MODULE_7_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_plugins_http__["a" /* default */]);


var qs = __webpack_require__(76);
var candy = new __WEBPACK_IMPORTED_MODULE_7_vue__["a" /* default */]({
	data: function data() {
		return {
			//tab的状态
			tab: 1,
			tabChnage: true,
			//展示用数据
			dataList: [],
			//没数据
			no_data: false,
			//logding
			tabLoging: false,

			nowStatus: false,
			errMesAlert: '',
			//弹窗类型
			alertype: '',
			//币种详情数据
			coinList: {},
			moverClick: false,

			list: {},
			//分页数据
			currentpage: '',
			all: ''
		};
	},
	mounted: function mounted() {
		Object(__WEBPACK_IMPORTED_MODULE_9_nComponents_nav__["b" /* nav */])();
		this.getcoindata(1);
	},

	methods: {
		//分页数据
		getcoindata: function getcoindata(num) {
			__WEBPACK_IMPORTED_MODULE_10_axios___default.a.post("/ajax_user/inviteBonus", qs.stringify({ page: num })).then(function (response) {
				candy.list = response.data.data.list;
				candy.all = response.data.data.pages;
			}).catch(function (error) {
				console.log('error');
			});
		}
	},
	components: {}
}).$mount('#candy');
/* unused harmony default export */ var _unused_webpack_default_export = (candy);

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[847]);
//# sourceMappingURL=user.bonusinvite.e472395f0a7ab965.js.map
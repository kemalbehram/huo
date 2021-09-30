webpackJsonp([11],{

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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("GeminiScrollbar",[],t):"object"==typeof exports?exports.GeminiScrollbar=t():e.GeminiScrollbar=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,i){"use strict";var n=i(1),r=i.n(n),l=i(5),s=(i.n(l),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}),o=void 0;t.a={name:"GeminiScrollbar",props:{autoCreate:{type:Boolean,default:!0},autoshow:{type:Boolean,default:!1},forceGemini:{type:Boolean,default:!1},minThumbSize:{type:Number,default:20}},mounted:function(){var e=this;o=new r.a(s({element:this.$refs.geminiScrollbar,createElements:!1,onResize:function(){e.$emit("resize")}},this.$props)),this.autoCreate&&o.create(),this.$emit("ready",o)},updated:function(){o&&o.update()},beforeDestroy:function(){o&&o.destroy(),o=null}}},function(e,t,i){/**
 * gemini-scrollbar
 * @version 1.5.3
 * @link http://noeldelgado.github.io/gemini-scrollbar/
 * @license MIT
 */
!function(){function t(){var e,t=document.createElement("div");return t.style.position="absolute",t.style.top="-9999px",t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}function i(e,t){if(e.classList)return t.forEach(function(t){e.classList.add(t)});e.className+=" "+t.join(" ")}function n(e,t){if(e.classList)return t.forEach(function(t){e.classList.remove(t)});e.className=e.className.replace(new RegExp("(^|\\b)"+t.join("|")+"(\\b|$)","gi")," ")}function r(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}function l(e){this.element=null,this.autoshow=!1,this.createElements=!0,this.forceGemini=!1,this.onResize=null,this.minThumbSize=20,Object.keys(e||{}).forEach(function(t){this[t]=e[t]},this),s=t(),o=0===s&&!1===this.forceGemini,this._cache={events:{}},this._created=!1,this._cursorDown=!1,this._prevPageX=0,this._prevPageY=0,this._document=null,this._viewElement=this.element,this._scrollbarVerticalElement=null,this._thumbVerticalElement=null,this._scrollbarHorizontalElement=null,this._scrollbarHorizontalElement=null}var s,o,a;a={element:"gm-scrollbar-container",verticalScrollbar:"gm-scrollbar -vertical",horizontalScrollbar:"gm-scrollbar -horizontal",thumb:"thumb",view:"gm-scroll-view",autoshow:"gm-autoshow",disable:"gm-scrollbar-disable-selection",prevented:"gm-prevented",resizeTrigger:"gm-resize-trigger"},l.prototype.create=function(){if(o){if(i(this.element,[a.prevented]),this.onResize){if(!0===this.createElements){for(this._viewElement=document.createElement("div");this.element.childNodes.length>0;)this._viewElement.appendChild(this.element.childNodes[0]);this.element.appendChild(this._viewElement)}else this._viewElement=this.element.querySelector("."+a.view);i(this.element,[a.element]),i(this._viewElement,[a.view]),this._createResizeTrigger()}return this}if(!0===this._created)return console.warn("calling on a already-created object"),this;if(this.autoshow&&i(this.element,[a.autoshow]),this._document=document,!0===this.createElements){for(this._viewElement=document.createElement("div"),this._scrollbarVerticalElement=document.createElement("div"),this._thumbVerticalElement=document.createElement("div"),this._scrollbarHorizontalElement=document.createElement("div"),this._thumbHorizontalElement=document.createElement("div");this.element.childNodes.length>0;)this._viewElement.appendChild(this.element.childNodes[0]);this._scrollbarVerticalElement.appendChild(this._thumbVerticalElement),this._scrollbarHorizontalElement.appendChild(this._thumbHorizontalElement),this.element.appendChild(this._scrollbarVerticalElement),this.element.appendChild(this._scrollbarHorizontalElement),this.element.appendChild(this._viewElement)}else this._viewElement=this.element.querySelector("."+a.view),this._scrollbarVerticalElement=this.element.querySelector("."+a.verticalScrollbar.split(" ").join(".")),this._thumbVerticalElement=this._scrollbarVerticalElement.querySelector("."+a.thumb),this._scrollbarHorizontalElement=this.element.querySelector("."+a.horizontalScrollbar.split(" ").join(".")),this._thumbHorizontalElement=this._scrollbarHorizontalElement.querySelector("."+a.thumb);return i(this.element,[a.element]),i(this._viewElement,[a.view]),i(this._scrollbarVerticalElement,a.verticalScrollbar.split(/\s/)),i(this._scrollbarHorizontalElement,a.horizontalScrollbar.split(/\s/)),i(this._thumbVerticalElement,[a.thumb]),i(this._thumbHorizontalElement,[a.thumb]),this._scrollbarVerticalElement.style.display="",this._scrollbarHorizontalElement.style.display="",this._createResizeTrigger(),this._created=!0,this._bindEvents().update()},l.prototype._createResizeTrigger=function(){var e=document.createElement("object");i(e,[a.resizeTrigger]),e.type="text/html",e.setAttribute("tabindex","-1");var t=this._resizeHandler.bind(this);e.onload=function(){e.contentDocument.defaultView.addEventListener("resize",t)},r()||(e.data="about:blank"),this.element.appendChild(e),r()&&(e.data="about:blank"),this._resizeTriggerElement=e},l.prototype.update=function(){return o?this:!1===this._created?(console.warn("calling on a not-yet-created object"),this):(this._viewElement.style.width=(this.element.offsetWidth+s).toString()+"px",this._viewElement.style.height=(this.element.offsetHeight+s).toString()+"px",this._naturalThumbSizeX=this._scrollbarHorizontalElement.clientWidth/this._viewElement.scrollWidth*this._scrollbarHorizontalElement.clientWidth,this._naturalThumbSizeY=this._scrollbarVerticalElement.clientHeight/this._viewElement.scrollHeight*this._scrollbarVerticalElement.clientHeight,this._scrollTopMax=this._viewElement.scrollHeight-this._viewElement.clientHeight,this._scrollLeftMax=this._viewElement.scrollWidth-this._viewElement.clientWidth,this._naturalThumbSizeY<this.minThumbSize?this._thumbVerticalElement.style.height=this.minThumbSize+"px":this._scrollTopMax?this._thumbVerticalElement.style.height=this._naturalThumbSizeY+"px":this._thumbVerticalElement.style.height="0px",this._naturalThumbSizeX<this.minThumbSize?this._thumbHorizontalElement.style.width=this.minThumbSize+"px":this._scrollLeftMax?this._thumbHorizontalElement.style.width=this._naturalThumbSizeX+"px":this._thumbHorizontalElement.style.width="0px",this._thumbSizeY=this._thumbVerticalElement.clientHeight,this._thumbSizeX=this._thumbHorizontalElement.clientWidth,this._trackTopMax=this._scrollbarVerticalElement.clientHeight-this._thumbSizeY,this._trackLeftMax=this._scrollbarHorizontalElement.clientWidth-this._thumbSizeX,this._scrollHandler(),this)},l.prototype.destroy=function(){if(this._resizeTriggerElement&&(this.element.removeChild(this._resizeTriggerElement),this._resizeTriggerElement=null),o)return this;if(!1===this._created)return console.warn("calling on a not-yet-created object"),this;if(this._unbinEvents(),n(this.element,[a.element,a.autoshow]),!0===this.createElements){for(this.element.removeChild(this._scrollbarVerticalElement),this.element.removeChild(this._scrollbarHorizontalElement);this._viewElement.childNodes.length>0;)this.element.appendChild(this._viewElement.childNodes[0]);this.element.removeChild(this._viewElement)}else this._viewElement.style.width="",this._viewElement.style.height="",this._scrollbarVerticalElement.style.display="none",this._scrollbarHorizontalElement.style.display="none";return this._created=!1,this._document=null,null},l.prototype.getViewElement=function(){return this._viewElement},l.prototype._bindEvents=function(){return this._cache.events.scrollHandler=this._scrollHandler.bind(this),this._cache.events.clickVerticalTrackHandler=this._clickVerticalTrackHandler.bind(this),this._cache.events.clickHorizontalTrackHandler=this._clickHorizontalTrackHandler.bind(this),this._cache.events.clickVerticalThumbHandler=this._clickVerticalThumbHandler.bind(this),this._cache.events.clickHorizontalThumbHandler=this._clickHorizontalThumbHandler.bind(this),this._cache.events.mouseUpDocumentHandler=this._mouseUpDocumentHandler.bind(this),this._cache.events.mouseMoveDocumentHandler=this._mouseMoveDocumentHandler.bind(this),this._viewElement.addEventListener("scroll",this._cache.events.scrollHandler),this._scrollbarVerticalElement.addEventListener("mousedown",this._cache.events.clickVerticalTrackHandler),this._scrollbarHorizontalElement.addEventListener("mousedown",this._cache.events.clickHorizontalTrackHandler),this._thumbVerticalElement.addEventListener("mousedown",this._cache.events.clickVerticalThumbHandler),this._thumbHorizontalElement.addEventListener("mousedown",this._cache.events.clickHorizontalThumbHandler),this._document.addEventListener("mouseup",this._cache.events.mouseUpDocumentHandler),this},l.prototype._unbinEvents=function(){return this._viewElement.removeEventListener("scroll",this._cache.events.scrollHandler),this._scrollbarVerticalElement.removeEventListener("mousedown",this._cache.events.clickVerticalTrackHandler),this._scrollbarHorizontalElement.removeEventListener("mousedown",this._cache.events.clickHorizontalTrackHandler),this._thumbVerticalElement.removeEventListener("mousedown",this._cache.events.clickVerticalThumbHandler),this._thumbHorizontalElement.removeEventListener("mousedown",this._cache.events.clickHorizontalThumbHandler),this._document.removeEventListener("mouseup",this._cache.events.mouseUpDocumentHandler),this._document.removeEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this},l.prototype._scrollHandler=function(){var e=this._viewElement.scrollLeft*this._trackLeftMax/this._scrollLeftMax||0,t=this._viewElement.scrollTop*this._trackTopMax/this._scrollTopMax||0;this._thumbHorizontalElement.style.msTransform="translateX("+e+"px)",this._thumbHorizontalElement.style.webkitTransform="translate3d("+e+"px, 0, 0)",this._thumbHorizontalElement.style.transform="translate3d("+e+"px, 0, 0)",this._thumbVerticalElement.style.msTransform="translateY("+t+"px)",this._thumbVerticalElement.style.webkitTransform="translate3d(0, "+t+"px, 0)",this._thumbVerticalElement.style.transform="translate3d(0, "+t+"px, 0)"},l.prototype._resizeHandler=function(){this.update(),this.onResize&&this.onResize()},l.prototype._clickVerticalTrackHandler=function(e){if(e.target===e.currentTarget){var t=e.offsetY-.5*this._naturalThumbSizeY,i=100*t/this._scrollbarVerticalElement.clientHeight;this._viewElement.scrollTop=i*this._viewElement.scrollHeight/100}},l.prototype._clickHorizontalTrackHandler=function(e){if(e.target===e.currentTarget){var t=e.offsetX-.5*this._naturalThumbSizeX,i=100*t/this._scrollbarHorizontalElement.clientWidth;this._viewElement.scrollLeft=i*this._viewElement.scrollWidth/100}},l.prototype._clickVerticalThumbHandler=function(e){this._startDrag(e),this._prevPageY=this._thumbSizeY-e.offsetY},l.prototype._clickHorizontalThumbHandler=function(e){this._startDrag(e),this._prevPageX=this._thumbSizeX-e.offsetX},l.prototype._startDrag=function(e){this._cursorDown=!0,i(document.body,[a.disable]),this._document.addEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this._document.onselectstart=function(){return!1}},l.prototype._mouseUpDocumentHandler=function(){this._cursorDown=!1,this._prevPageX=this._prevPageY=0,n(document.body,[a.disable]),this._document.removeEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this._document.onselectstart=null},l.prototype._mouseMoveDocumentHandler=function(e){if(!1!==this._cursorDown){var t,i;if(this._prevPageY)return t=e.clientY-this._scrollbarVerticalElement.getBoundingClientRect().top,i=this._thumbSizeY-this._prevPageY,void(this._viewElement.scrollTop=this._scrollTopMax*(t-i)/this._trackTopMax);this._prevPageX&&(t=e.clientX-this._scrollbarHorizontalElement.getBoundingClientRect().left,i=this._thumbSizeX-this._prevPageX,this._viewElement.scrollLeft=this._scrollLeftMax*(t-i)/this._trackLeftMax)}},e.exports=l}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),r=i(1),l=i.n(r),s=function(e){e.component(n.a.name,n.a),e.prototype.$geminiScrollbar=e.$geminiScrollbar=l.a};"undefined"!=typeof window&&window.Vue&&(s(window.Vue),window.Vue.prototype.$geminiScrollbar=window.Vue.$geminiScrollbar=l.a),t.default=s},function(e,t,i){"use strict";var n=i(0),r=i(10),l=i(4),s=l(n.a,r.a,!1,null,null,null);t.a=s.exports},function(e,t){e.exports=function(e,t,i,n,r,l){var s,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId=r);var h;if(l?(h=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=h):n&&(h=n),h){var m=c.functional,u=m?c.render:c.beforeCreate;m?(c._injectStyles=h,c.render=function(e,t){return h.call(t),u(e,t)}):c.beforeCreate=u?[].concat(u,h):[h]}return{esModule:s,exports:o,options:c}}},function(e,t,i){var n=i(6);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(8)("6c1e7d54",n,!0,{})},function(e,t,i){t=e.exports=i(7)(!1),t.push([e.i,".gm-scrollbar-disable-selection{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gm-prevented{-webkit-overflow-scrolling:touch}.gm-prevented>.gm-scrollbar{display:none}.gm-scrollbar-container{position:relative;overflow:hidden!important;width:100%;height:100%}.gm-scrollbar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:3px}.gm-scrollbar.-vertical{width:6px;top:2px}.gm-scrollbar.-horizontal{height:6px;left:2px}.gm-scrollbar .thumb{position:relative;display:block;width:0;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(0,0,0,.2);transform:translateZ(0)}.gm-scrollbar .thumb:active,.gm-scrollbar .thumb:hover{background-color:rgba(0,0,0,.3)}.gm-scrollbar.-vertical .thumb{width:100%}.gm-scrollbar.-horizontal .thumb{height:100%}.gm-scrollbar-container .gm-scroll-view{width:100%;height:100%;overflow:scroll;transform:translateZ(0);-webkit-overflow-scrolling:touch}.gm-scrollbar-container.gm-autoshow .gm-scrollbar{opacity:0;transition:opacity .12s ease-out}.gm-scrollbar-container.gm-autoshow:active>.gm-scrollbar,.gm-scrollbar-container.gm-autoshow:focus>.gm-scrollbar,.gm-scrollbar-container.gm-autoshow:hover>.gm-scrollbar{opacity:1;transition:opacity .34s ease-out}.gm-resize-trigger{position:absolute;display:block;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0}",""])},function(e,t){function i(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var l=n(r);return[i].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([l]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(n[l]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=h[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(l(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(l(i.parts[r]));h[i.id]={id:i.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",m.appendChild(e),e}function l(e){var t,i,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(p)return _;n.parentNode.removeChild(n)}if(b){var l=d++;n=u||(u=r()),t=s.bind(null,n,l,!1),i=s.bind(null,n,l,!0)}else n=r(),t=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function s(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var l=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(l,s[t]):e.appendChild(l)}}function o(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),f.ssrId&&e.setAttribute(v,t.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(9),h={},m=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,p=!1,_=function(){},f=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,r){p=i,f=r||{};var l=c(e,t);return n(l),function(t){for(var i=[],r=0;r<l.length;r++){var s=l[r],o=h[s.id];o.refs--,i.push(o)}t?(l=c(e,t),n(l)):l=[];for(var r=0;r<i.length;r++){var o=i[r];if(0===o.refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete h[o.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],n={},r=0;r<t.length;r++){var l=t[r],s=l[0],o=l[1],a=l[2],c=l[3],h={id:e+":"+r,css:o,media:a,sourceMap:c};n[s]?n[s].parts.push(h):i.push(n[s]={id:s,parts:[h]})}return i}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"geminiScrollbar"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"gm-scroll-view"},[e._t("default")],2)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gm-scrollbar -vertical"},[i("div",{staticClass:"thumb"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gm-scrollbar -horizontal"},[i("div",{staticClass:"thumb"})])}],l={render:n,staticRenderFns:r};t.a=l}])});
//# sourceMappingURL=vue-gemini-scrollbar.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nPages_signin_index__ = __webpack_require__(786);


/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flex_css__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flex_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flex_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_init_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nStyle_init_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nStyle_init_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_theme_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nStyle_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nStyle_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_signin_signin_scss__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nStyle_signin_signin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nStyle_signin_signin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_cookie__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Promise__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_Promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_plugins_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nComponents_nav__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_isMob_js__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_nComponents_restPwd__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_nComponents_Alert__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_gemini_scrollbar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_gemini_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vue_gemini_scrollbar__);









__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_plugins_http__["a" /* default */]);






__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_14_vue_gemini_scrollbar___default.a);
var forgets = null;

var signTpl = new __WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */]({
    data: function data() {
        var _ref;

        return _ref = {
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
            repwdFocus: false
        }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'captchaFocus', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'codeFocus', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'googleFocus', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'showActiveModal', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'disable', true), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'submit_now', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'forgetStep', 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'forgetPwd', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'loadIcon', true), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'errMesAlert', ""), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'showActiveModal', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'area_type', ""), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'queryRe', {
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
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'queryLo', {
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
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'message_data', {
            //语音8  短信 0
            action: '0',
            captcha: '',
            phone: '',
            area: ""
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'showAlert', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'voice_ver', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'voice_set', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'voice_warn', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'errorArr', { //错误提示
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
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'setTimes', 'out'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'times', '60'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'time_id', ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'area_num', '+86'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'register_index', 0), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'checkeds', true), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'now_type', window.location.href.substr(-2)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'nowStatus', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'area_show', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'find_area_show', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'sentSuccess', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'accountFocus', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'register_index', 0), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'phone', null), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'noStepOne', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'forgetFirst', {
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
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'forgetTwo', {
            google_code: "",
            code: ""
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'forgetThree', {
            pwd: "",
            repwd: ""
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'isGoogle', false), _ref;
    },
    created: function created() {
        //首先判断是否有手机号
        forgets = Object(__WEBPACK_IMPORTED_MODULE_11_nComponents_restPwd__["a" /* default */])();
        this.img_ver();
    },
    mounted: function mounted() {
        Object(__WEBPACK_IMPORTED_MODULE_9_nComponents_nav__["b" /* nav */])();
    },

    methods: {
        //获取地址栏参数-1注册 
        hasArea: function hasArea(area) {
            if (area) {
                this.area_num = area;
            }
        },
        init: function init() {
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
        registerAlert: function registerAlert(fn) {
            //数据初始化
            this.init();
            var hrefData = window.location.href;
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
        loginAlert: function loginAlert(fn) {
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
        resetloginAlert: function resetloginAlert() {
            this.forgetPwd = false;
            this.showActiveModal = false;
            // register.loginAlert();
            window.location.href = "/signin/?login=lo";
        },

        //注册登录-获取验证码
        get_verify: function get_verify(mes_type) {
            var _this = this;

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
                    this.time_id = setInterval(function () {
                        if (_this.times <= '0') {
                            //计数到0的时候停止计时
                            clearTimeout(_this.time_id);
                            _this.setTimes = 'out';
                            _this.times = '60';
                            //如果语音验证码倒计时开始 计时完毕开启语音验证码可点击
                            if (_this.voice_set || _this.voice_warn) {
                                _this.voice_ver = true;
                                _this.voice_set = false;
                                _this.voice_warn = false;
                            }
                        } else {
                            _this.times--;
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
        reset_get_verify: function reset_get_verify(mes_type) {
            var _this2 = this;

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
                this.time_id = setInterval(function () {
                    if (_this2.times <= '0') {
                        //计数到0的时候停止计时
                        clearTimeout(_this2.time_id);
                        _this2.setTimes = 'out';
                        _this2.times = '60';
                        //如果语音验证码倒计时开始 计时完毕开启语音验证码可点击
                        if (_this2.voice_set || _this2.voice_warn) {
                            _this2.voice_ver = true;
                            _this2.voice_set = false;
                            _this2.voice_warn = false;
                        }
                    } else {
                        _this2.times--;
                    }
                }, 1000);
                this.reset_sent_message();
            } else {
                return false;
            }
        },

        //jsj--不要注冊   获取语音验证码
        voice_verify: function voice_verify() {
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
        sent_message: function sent_message() {
            var _this3 = this;

            var url = '';
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
            this.message_data.captcha = document.getElementById('j_v_status').getAttribute('res_code');
            this.$http.post(url, this.message_data).then(function (_ref2) {
                var data = _ref2.data,
                    status = _ref2.status,
                    msg = _ref2.msg;

                // let { status, msg } = data;
                if (status == 0) {
                    if (_this3.voice_set) {
                        _this3.voice_set = false;
                        _this3.voice_warn = true;
                    }
                    _this3.errMes = msg;
                    //按钮初始化
                    clearTimeout(_this3.time_id);
                    _this3.setTimes = 'out';
                    _this3.times = '60';
                    //php返回提示 data的内容来判断错误地方 短信验证码接口只判读手机和图形验证码
                    if (data === 'mo') {
                        _this3.errorArr.accStatus = 4;
                    } else if (_this3.now_type === 'fo' || data === 'vcode') {
                        _this3.errorArr.codeStatus = 4;
                    }
                    if (_this3.voice_warn) {
                        _this3.voice_warn = false;
                        _this3.voice_ver = true;
                    }
                }
            }).catch(function (err) {
                // console.log(err);
            });
        },

        //找回密码-发送短信
        reset_sent_message: function reset_sent_message() {
            var _this4 = this;

            var url = '';
            this.errorArr.codeStatus = 0;
            //显示语音验证码
            if (!this.voice_warn) {
                this.voice_set = true;
            }
            //忘記密碼 短信驗證碼 action為11
            var actions = this.message_data.action;

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

            this.$http.post(url, this.message_data).then(function (_ref3) {
                var data = _ref3.data,
                    status = _ref3.status,
                    msg = _ref3.msg;

                // let { status, msg } = data;
                if (status == 0) {
                    if (_this4.voice_set) {
                        _this4.voice_set = false;
                        _this4.voice_warn = true;
                    }

                    //刷新图形验证码
                    _this4.img_ver();
                    _this4.errMes = msg;
                    //提示初始化
                    // this.errorArr.accStatus = 0;
                    // this.errorArr.captchaStatus = 0;
                    // this.errorArr.codeStatus = 0;
                    //按钮初始化
                    clearTimeout(_this4.time_id);
                    _this4.setTimes = 'out';
                    _this4.times = '60';
                    //php返回提示 data的内容来判断错误地方 短信验证码接口只判读手机和图形验证码
                    if (data === 'mo') {
                        _this4.errorArr.accStatus = 4;
                    } else if (data === 'captcha') {
                        _this4.errorArr.captchaStatus = 4;
                    } else if (data === 'vcode') {
                        _this4.errorArr.codeStatus = 4;
                    }
                    if (_this4.voice_warn) {
                        _this4.voice_warn = false;
                        _this4.voice_ver = true;
                    }
                }
            }).catch(function (err) {
                // console.log(err);
            });
        },
        verify: function verify(val, type, method) {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

            var el = document.querySelector('[name=viewport]');
            if (method = "focus") {
                // el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0,user-scalable=no');
                // document.querySelector('#boxp').innerHTML='get1111==='+el.getAttribute('content');
            } else {
                el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
                // document.querySelector('#boxp').innerHTML='222222222==='+el.getAttribute('content');
            }
            //10 标识过审核
            //method  作为标识有 submit 提交 enter 回车点击 focus聚焦 来判断不同情况
            var allnum = /^[0-9]*$/;
            var correctnum = /^[1]([3-9])[0-9]{9}$/;; //匹配手机号
            var nums = /\d/g;
            var sign = /[~\!@#%\$\^&\*()\+\-\=\|:\;\,\_\'\"\.<>\/?*]/g;
            var en = /[a-zA-Z]/g;
            var emailReg = /^[A-Za-z0-9\u4e00-\u9fa5-_\.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            //空值时候  不提交状态置为默认0  提交就 置为错误 2
            switch (type) {
                case 'account':
                    if (val) {
                        // 賬號為手機
                        if (method === 'focus') this.accountFocus = true;else this.accountFocus = false;
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
                        if (method === 'focus') this.pwdFocus = true;else this.pwdFocus = false;
                        if (val.length < 6) {
                            this.errorArr.pwdStatus = 3;
                            return false;
                        } else if (this.now_type === 're') {
                            var pwdLeval = 0;
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
                        var toVal = '';
                        toVal = this.accessType === 'phone' ? this.queryRe.phone.pwd : this.queryRe.email.pwd;
                        if (val) {
                            if (method === 'focus') this.repwdFocus = true;else this.repwdFocus = false;
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
                        if (method === 'focus') this.codeFocus = true;else this.codeFocus = false;
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
        resetverify: function resetverify(val, type, method) {
            // alert(type);
            //10 标识过审核
            //method  作为标识有 submit 提交 enter 回车点击 focus聚焦 来判断不同情况
            var allnum = /^[0-9]*$/;
            var nums = /\d/g;
            var sign = /[~\!@#%\$\^&\*()\+\-\=\|:\;\,\.<>\/?*]/g;
            var en = /[a-zA-Z]/g;
            var emailReg = /^[A-Za-z0-9\u4e00-\u9fa5-_]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            //空值时候  不提交状态置为默认0  提交就 置为错误 2
            switch (type) {
                case 'account':
                    if (val) {
                        // 賬號為手機
                        if (method === 'focus') this.accountFocus = true;else this.accountFocus = false;
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
                        if (method === 'focus') this.pwdFocus = true;else this.pwdFocus = false;
                        if (val.length < 6) {
                            this.errorArr.pwdStatus = 3;
                            return false;
                        } else {
                            var pwdLeval = 0;
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
                        var toVal = '';
                        toVal = this.forgetThree.pwd;
                        if (val) {
                            if (method === 'focus') this.repwdFocus = true;else this.repwdFocus = false;
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
                        if (method === 'focus') this.captchaFocus = true;else this.captchaFocus = false;
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
                            if (method === 'focus') this[type + 'Focus'] = true;else this[type + 'Focus'] = false;
                            if (val.length < 6) {
                                this.errorArr[type + 'Status'] = 3;
                                return false;
                            } else {
                                this.errorArr[type + 'Status'] = 10;
                                if (method === 'enter') {
                                    this.reset_submit();
                                }
                                return true;
                            }
                        } else if (method === 'submit') {
                            this.errorArr[type + 'Status'] = 2;
                            return false;
                        } else if (method === 'focus') {
                            this.errorArr[type + 'Status'] = 1;
                            this[type + 'Focus'] = true;
                            return false;
                        } else if (method === 'enter') {
                            this.errorArr[type + 'Status'] = 2;
                            return false;
                        } else {
                            this.errorArr[type + 'Status'] = 0;
                            this[type + 'Focus'] = false;
                            return false;
                        }
                    }
                    break;
            }
        },


        //登录注册-控制可否输入
        inputcan: function inputcan(val, type) {
            switch (type) {
                case 'account':
                    {
                        if (this.accessType === 'phone') {
                            //只让输入数字
                            if (!val) return;
                            var vals = val.replace(/\D/g, '');
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
                        var _vals = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\_\"\'\=\|:\;\,\.<>\/?*]/g, '');
                        /* eslint-disable no-unused-expressions */
                        if (this.accessType === 'phone') {
                            this.now_type === 're' ? this.queryRe.phone.pwd = _vals : this.queryLo.phone.pwd;
                        } else {
                            this.now_type === 're' ? this.queryRe.email.pwd = _vals : this.queryLo.email.pwd;
                        }
                        break;
                    }
                case 'repwd':
                    {
                        var _vals2 = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\_\"\'\=\|:\;\,\.<>\/?*]/g, '');
                        this.accessType === 'phone' ? this.queryRe.phone.repwd = _vals2 : this.queryRe.email.repwd;
                        break;
                    }
                case 'code':
                    {
                        //只让输入数字
                        var _vals3 = val.replace(/[^\d]/g, '');
                        if (this.queryRe.phone.code) this.queryRe.phone.code = _vals3;else if (this.googleData.code) this.googleData.code = _vals3;
                        break;
                    }
                default:
                    break;
            }
        },

        //找回密码-控制可否输入
        resetinputcan: function resetinputcan(val, type) {
            switch (type) {
                case 'account':
                    {
                        if (this.accessType === 'phone') {
                            //只让输入数字
                            if (!val) return;
                            var vals = val.replace(/\D/g, '');
                            this.forgetFirst.phone.account = vals;
                        }
                        break;
                    }
                case 'pwd':
                    {
                        if (!val) return;
                        //数字 字母 和部分字符
                        var _vals4 = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\=\|:\;\,\.<>\/?*]/g, '');
                        /* eslint-disable no-unused-expressions */
                        this.forgetThree.pwd = _vals4;
                        break;
                    }
                case 'repwd':
                    {
                        var _vals5 = val.replace(/[^\a-\z\A-\Z0-9\~\!@#%\$\^&\*()\+\-\=\|:\;\,\.<>\/?*]/g, '');
                        this.forgetThree.repwd = _vals5;
                        break;
                    }
                case 'captcha':
                    {
                        //字母数字
                        var _vals6 = val.replace(/[^\a-\z\A-\Z0-9]/g, '');
                        if (this.accessType === 'phone') {
                            this.forgetFirst.phone.captcha = _vals6;
                        } else {
                            this.forgetFirst.email.captcha = _vals6;
                        }
                        this.accessType === 'phone' ? this.forgetFirst.phone.captcha = _vals6 : this.forgetFirst.email.captcha;
                        break;
                    }
                case 'code':
                    {
                        //只让输入数字
                        var _vals7 = val.replace(/[^\d]/g, '');
                        this.forgetTwo.code = _vals7;
                        break;
                    }
                case 'google':
                    {
                        //只让输入数字
                        var _vals8 = val.replace(/[^\d]/g, '');
                        this.forgetTwo.google_code = _vals8;
                        break;
                    }
                default:
                    break;
            }
        },

        //登录注册-提交
        register_submit: function register_submit() {
            var _this5 = this;

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
            var resultData = true;
            var data = {};
            var resultPromise = new __WEBPACK_IMPORTED_MODULE_7_Promise___default.a(function (resolve) {
                if (_this5.now_type === 're') {
                    // p_v_status.style.display = "block";
                    url = '/ajax_user/register';
                    //登錄和註冊部分
                    var val = '';
                    if (_this5.accessType === 'phone') {
                        // console.log(this.queryRe.phone, 'phonecode', this.queryRe.code);
                        // if (this.queryRe.code == undefined) {

                        // }
                        for (var i in _this5.queryRe.phone) {
                            if (_this5.verify(_this5.queryRe.phone[i], i, 'submit') === false) {
                                resultData = false;
                                resolve(resultData); //成功 resolve 调用的方法
                            }
                        }
                        data = _this5.queryRe.phone;
                    } else {
                        for (var _i in _this5.queryRe.email) {
                            if (_this5.verify(_this5.queryRe.email[_i], _i, 'submit') === false) {
                                resultData = false;
                                resolve(resultData);
                            }
                        }
                        data = _this5.queryRe.email;
                    }
                } else if (_this5.now_type === 'lo') {
                    url = '/Ajax_User/login';
                    if (_this5.accessType === 'phone') {
                        //数据验证
                        for (var _i2 in _this5.queryLo.phone) {
                            if (_this5.verify(_this5.queryLo.phone[_i2], _i2, 'submit') === false) {
                                resultData = false;
                                resolve(resultData);
                            }
                        }
                        data = _this5.queryLo.phone;
                    } else {
                        for (var _i3 in _this5.queryLo.email) {
                            if (_this5.verify(_this5.queryLo.email[_i3], _i3, 'submit') === false) {
                                resultData = false;
                                resolve(resultData);
                            }
                        }
                        data = _this5.queryLo.email;
                    }
                } else if (_this5.now_type === 'google') {
                    url = '/Ajax_User/logintwo';
                    data = _this5.googleData;
                    resultData = _this5.verify(_this5.googleData.code, 'code', 'submit');
                    resolve(resultData);
                }
                resolve(resultData);
            });
            resultPromise.then(function (result) {
                if (result) {
                    //提交
                    _this5.subajax(url, data);
                }
            });
        },
        subajax: function subajax(url, data) {
            var _this6 = this;

            // if (this.accessType == 'phone') {
            data.captcha = document.getElementById('j_v_status').getAttribute('res_code');
            // }
            this.submit_now = true;
            this.disable = false;
            this.$http.post(url, data).then(function (req) {
                var data = req.data,
                    status = req.status,
                    msg = req.msg;

                if (status == 1) {
                    if (data === 'success') {
                        _this6.showAlert = false;
                        _this6.googleShow = true;
                        _this6.now_type = 'google';
                    } else {
                        // 强制重置登录密码 重新登录使用
                        if (url === '/Ajax_User/login') {
                            sessionStorage.removeItem('rssucc');
                        }
                        if (_this6.now_type === 're') {
                            _this6.showAlert = false;
                            _this6.isSuccess = true;
                            _this6.emailStatus.showActiveModal = true;
                        } else {
                            _this6.showAlert = false;
                            _this6.isLogin = true;
                            if (__WEBPACK_IMPORTED_MODULE_6__tools_cookie__["a" /* default */].getItem('reurl')) {
                                window.location.href = __WEBPACK_IMPORTED_MODULE_6__tools_cookie__["a" /* default */].getItem('reurl');
                            } else {
                                window.location.href = '/';
                            }
                        }
                    }
                } else {
                    _this6.errMes = msg;
                    if (data === 'captcha') {
                        _this6.errorArr.captchaStatus = 4;
                    } else if (data === 'mo' || data === 'phone' || data === 'area' || data === 'email' || data === 'email_bb') {
                        _this6.errorArr.accStatus = 4;
                    } else if (data === 'Upassword') {
                        _this6.errorArr.pwdStatus = 4;
                    } else if (data === 'smsCaptch' || data === 'code') {
                        _this6.errorArr.codeStatus = 4;
                    } else {
                        _this6.errMesAlert = msg;
                        _this6.nowStatus = true;
                    }
                }
                _this6.disable = true;
                _this6.submit_now = false;
            }).catch(function (err) {
                console.log(err);
            });
        },

        //找回密码-提交
        reset_submit: function reset_submit() {
            var _this7 = this;

            var url = '';
            //登录和注册接口判断

            //验证结果
            var results = true;
            //data
            var resultData = {};
            var resultPromise = new __WEBPACK_IMPORTED_MODULE_7_Promise___default.a(function (resolve) {
                if (_this7.forgetStep === 1) {
                    url = '/ajax_user/erifypPhone';
                    if (_this7.accessType === 'phone') {
                        for (var i in _this7.forgetFirst.phone) {
                            if (_this7.resetverify(_this7.forgetFirst.phone[i], i, 'submit') === false) {
                                results = false;
                                resolve(results);
                            }
                        }
                        _this7.forgetFirst.phone.regtype = _this7.accessType;
                        resultData = _this7.forgetFirst.phone;
                    } else if (_this7.accessType === 'email') {
                        for (var _i4 in _this7.forgetFirst.email) {
                            if (_this7.resetverify(_this7.forgetFirst.email[_i4], _i4, 'submit') === false) {
                                results = false;
                                resolve(results);
                            }
                        }
                        _this7.forgetFirst.email.regtype = _this7.accessType;
                        resultData = _this7.forgetFirst.email;
                    }
                } else if (_this7.forgetStep === 2) {
                    url = '/ajax_user/authenticate';
                    if (!_this7.isGoogle) delete _this7.forgetTwo.google_code;
                    for (var _i5 in _this7.forgetTwo) {
                        var vi = _i5 === 'google_code' ? 'google' : _i5;
                        if (_this7.resetverify(_this7.forgetTwo[_i5], vi, 'submit') === false) {
                            results = false;
                            resolve(results);
                        }
                    }
                    _this7.forgetTwo.regtype = _this7.accessType;
                    resultData = _this7.forgetTwo;
                } else if (_this7.forgetStep === 3) {
                    url = '/ajax_user/resetPassword';
                    for (var _i6 in _this7.forgetThree) {
                        // this.verify(this.forgetThree[i], i, 'submit');
                        if (_this7.resetverify(_this7.forgetThree[_i6], _i6, 'submit') === false) {
                            results = false;
                            resolve(results);
                        }
                    }
                    _this7.forgetThree.regtype = _this7.accessType;
                    resultData = _this7.forgetThree;
                }
                resolve(results);
            });
            resultPromise.then(function (result) {
                if (result === true) {
                    _this7.resetsubajax(url, resultData);
                }
            });
        },
        resetsubajax: function resetsubajax(url, data) {
            var _this8 = this;

            this.submit_now = true;
            this.disable = false;
            this.$http.post(url, data).then(function (req) {
                var data = req.data,
                    status = req.status,
                    msg = req.msg;

                if (status == 1) {
                    if (data.google_key) _this8.isGoogle = data.google_key;

                    if (_this8.forgetStep === 1) {
                        //進入第二步
                        _this8.forgetStep = 2;
                    } else if (_this8.forgetStep === 2) {
                        _this8.forgetStep = 3;
                    } else if (_this8.forgetStep === 3) {
                        _this8.showActiveModal = true;
                        _this8.repwdSucc = true;
                        _this8.forgetPwd = false;
                    } else {
                        _this8.showAlert = false;
                        if (__WEBPACK_IMPORTED_MODULE_6__tools_cookie__["a" /* default */].getItem('reurl')) {
                            window.location.href = __WEBPACK_IMPORTED_MODULE_6__tools_cookie__["a" /* default */].getItem('reurl');
                        } else {
                            window.location.href = '/';
                        }
                    }
                } else {
                    _this8.errMes = msg;
                    //重置验证码
                    _this8.img_ver();
                    //对返回的错误进行展示 状态都为4
                    if (data === 'captcha') {
                        _this8.errorArr.captchaStatus = 4;
                    } else if (data === 'mo' || data === 'phone' || data === 'area' || data === 'email' || data === 'email_bb') {
                        _this8.errorArr.accStatus = 4;
                    } else if (data === 'Upassword') {
                        _this8.errorArr.pwdStatus = 4;
                    } else if (data === 'smsCaptch' || data === 'code') {
                        _this8.errorArr.codeStatus = 4;
                    } else {
                        _this8.errMesAlert = msg;
                        _this8.nowStatus = true;
                    }
                }
                _this8.disable = true;
                _this8.submit_now = false;
            }).catch(function (err) {
                // console.log(err);
            });
        },
        jump: function jump(type) {
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
        forgetAlert: function forgetAlert(type, step, isGoogle) {
            //数据初始化
            var vm = this;
            var showAlert = new __WEBPACK_IMPORTED_MODULE_7_Promise___default.a(function (resolve) {
                vm.init();
                resolve();
            });
            showAlert.then(function () {
                vm.init();
                vm.forgetAlert2(type, step, isGoogle);
                vm.showAlert = false;
                //关闭成功页面
                // 关闭邮箱提示类的弹窗
                vm.emailStatus.showActiveModal = false;
            });
        },
        forgetAlert2: function forgetAlert2(type, step, isGoogle) {
            if (type) this.noStepOne = true;
            //数据初始化
            this.init();
            //设定为第一步
            if (step) this.forgetStep = step;else this.forgetStep = 1;
            this.forgetPwd = true;
            this.jsj = "1111";
            //是否有google验证码
            this.isGoogle = isGoogle;
        },
        close_alert: function close_alert() {
            this.forgetPwd = false;
            if (this.time_id) {
                clearTimeout(this.time_id);
            }
            this.init();
        },


        //图形验证码
        img_ver: function img_ver() {
            this.ver_src = '/index/captcha?v=' + parseInt(Math.random() * 10000000);
        },
        alertfn: function alertfn() {
            this.showAlert = false;
            if (this.time_id) {
                clearTimeout(this.time_id);
            }
        },


        //彈窗回調
        callfn: function callfn() {
            this.nowStatus = false;
        },

        //找回密码  or 已经注册，去登陆  or 还没火网账号，去注册
        forgetPwdFun: function forgetPwdFun(status) {
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
        emailAlert: function emailAlert() {
            this.now_type = '';
            this.showAlert = false;
            this.emailStatus.showActiveModal = true;
            this.emailStatus.emailActiveLink = this.getUrlQuery('emailactive');
        },


        //切换地区显示和消失
        area_change: function area_change(reset_type) {
            this.area_show = !this.area_show;
            this.area_type = reset_type;
        },


        //登录手机号邮箱切换
        switchAccessType: function switchAccessType(e) {
            var el = document.querySelector('[name=viewport]');
            el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
            var acctype = null;
            if (e && e.target) {
                acctype = e.target.getAttribute('data-acctype') || 'phone';
            } else {
                acctype = e;
            }
            this.accessType = acctype;
            for (var i in this.errorArr) {
                this.errorArr[i] = 0;
            }
            // console.log(jigsaw.el);
            clearTimeout(this.time_id);
        },

        //点击列表内容 切换fn_active
        arec_click: function arec_click(index) {
            var arr = index.split(',');
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
        closeArea: function closeArea(e) {
            var lists = document.getElementsByClassName('fn_register_area')[0];
            var listLabel = document.getElementsByClassName('fn_register_label')[0];
            if (lists && listLabel) {
                if (!lists.contains(e.target) && !listLabel.contains(e.target)) {
                    this.area_show = false;
                }
            }
        },

        //註冊成功關閉按鈕
        close_btn: function close_btn() {
            this.emailStatus.showActiveModal = false;
        },

        //找回密码關閉按鈕
        reset_close_btn: function reset_close_btn() {
            this.showActiveModal = false;
        },
        toggleShowReMail: function toggleShowReMail() {
            this.showReMail = !this.showReMail;
        },
        remail: function remail() {
            var _this9 = this;

            this.$http.post('/Emailverify/retrysent', this.query).then(function (res) {
                if (res.status == 1) {
                    // 發送成功
                    _this9.sentSuccess = true;
                } else if (res.status == 0) {
                    // 發送失敗
                    _this9.sentSuccess = false;
                    _this9.nowStatus = true;
                    _this9.errMesAlert = res.msg;
                }
            }).catch(function (err) {});
        },

        // 顶象滑块
        blockFun1: function blockFun1() {
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
                    onSuccess: function onSuccess(res) {
                        // sessionStorage.jigsawstatus = true;
                        document.getElementById('msg').innerHTML = '验证成功！';
                        signTpl.verify_bg = true;
                        signTpl.register_success = false;
                        signTpl.loading_icon = false;
                        signTpl.loadIcon = false;
                        setTimeout(function () {
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
                    onRefresh: cleanMsg
                });
            } else {
                jigsaw.reset();
            }
        },

        // 登录-手机
        blockFun2: function blockFun2() {
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
                    onSuccess: function onSuccess(res) {
                        document.getElementById('msg').innerHTML = '验证成功！';
                        signTpl.verify_bg = true;
                        signTpl.verify_success = false;
                        signTpl.loading_icon = false;
                        signTpl.loadIcon = false;

                        setTimeout(function () {
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
                    onRefresh: cleanMsg
                });
            } else {
                jigsaw.onSuccess = function (res) {
                    document.getElementById('msg').innerHTML = '验证成功！';
                    signTpl.verify_bg = true;
                    signTpl.verify_success = false;
                    signTpl.loading_icon = false;
                    signTpl.loadIcon = false;
                    setTimeout(function () {
                        signTpl.hideBg = false;
                        signTpl.showBlockVerify = false;
                        signTpl.verify_bg = false;
                        signTpl.loading_icon = false;
                        signTpl.closeIcon = false;
                        signTpl.verify_success = true;
                        signTpl.loadIcon = false;
                    }, 1000);
                };
                jigsaw.reset();
            }
        },

        //登录-邮箱
        blockFun3: function blockFun3() {
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
                    onSuccess: function onSuccess(res) {
                        document.getElementById('msg').innerHTML = '验证成功！';
                        signTpl.verify_bg = true;
                        signTpl.loading_icon = false;
                        signTpl.loadIcon = false;
                        setTimeout(function () {

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
                    onRefresh: cleanMsg
                });
            } else {
                jigsaw.onSuccess = function (res) {
                    document.getElementById('msg').innerHTML = '验证成功！';
                    signTpl.verify_bg = true;
                    signTpl.loading_icon = false;
                    signTpl.loadIcon = false;
                    setTimeout(function () {
                        signTpl.hideBg = false;
                        signTpl.showBlockVerifyEmail = false;
                        signTpl.verify_bg = false;
                        signTpl.loading_icon = false;
                        signTpl.closeIcon = false;
                        signTpl.reemail_verify_success = true;
                        signTpl.loadIcon = false;
                    }, 1000);
                };
                jigsaw.reset();
            }
        },


        //关闭滑块
        closeVerify: function closeVerify() {
            var el = document.querySelector('[name=viewport]');
            el.setAttribute('content', 'width=device-width,height=device-height,maximum-scale=2.0,initial-scale=1.0');
            signTpl.register_verify = false;
            signTpl.showBlockVerify = false;
            signTpl.showBlockVerifyEmail = false; //
            signTpl.hideBg = false;
            signTpl.closeIcon = false; //关闭按钮
            signTpl.loadIcon = false;
        }
    },
    watch: {
        //监听弹窗是否弹出
        //弹出式需要给body增加样式
        showAlert: function showAlert() {
            if (this.showAlert) {
                document.body.classList.add('no_scroll_body');
            } else {
                document.body.classList.remove('no_scroll_body');
            }
        }
    }
}).$mount("#signTpl");
/* unused harmony default export */ var _unused_webpack_default_export = (signTpl);

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[785]);
//# sourceMappingURL=signin.index.aa9df4ab5194357c.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/download-file/download-file"],{568:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26),t(27),t(28);o(t(25));var r=o(t(569));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},569:function(n,e,t){"use strict";t.r(e);var o=t(570),r=t(572);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(574);var c,a=t(50),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);u.options.__file="pages/API/download-file/download-file.vue",e["default"]=u.exports},570:function(n,e,t){"use strict";t.r(e);var o=t(571);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},571:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1294))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,c=[];r._withStripped=!0},572:function(n,e,t){"use strict";t.r(e);var o=t(573),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},573:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){n.showLoading({title:"下载中"});var e=this;n.downloadFile({url:"https://web-assets.dcloud.net.cn/unidoc/zh/uni-app.png",success:function(t){console.log("downloadFile success, res is",t),e.imageSrc=t.tempFilePath,n.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};e.default=t}).call(this,t(2)["default"])},574:function(n,e,t){"use strict";t.r(e);var o=t(575),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},575:function(n,e,t){}},[[568,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/download-file/download-file.js.map
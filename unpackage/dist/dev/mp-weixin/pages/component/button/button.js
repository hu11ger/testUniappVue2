(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/button/button"],{214:function(n,e,t){"use strict";(function(n,e){var r=t(4);t(26),t(27),t(28);r(t(25));var o=r(t(215));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},215:function(n,e,t){"use strict";t.r(e);var r=t(216),o=t(218);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t(220);var u,c=t(50),a=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);a.options.__file="pages/component/button/button.vue",e["default"]=a.exports},216:function(n,e,t){"use strict";t.r(e);var r=t(217);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},217:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1420))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,e=n.$createElement;n._self._c},i=!1,u=[];o._withStripped=!0},218:function(n,e,t){"use strict";t.r(e);var r=t(219),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},219:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{title:"button",loading:!1}},onLoad:function(){this._timer=null},onShow:function(){var n=this;this.clearTimer(),this._timer=setTimeout((function(){n.loading=!0}),300)},onUnload:function(){this.clearTimer(),this.loading=!1},methods:{openTypeError:function(n){console.error("open-type error:",n)},clearTimer:function(){null!=this._timer&&clearTimeout(this._timer)}}};e.default=r},220:function(n,e,t){"use strict";t.r(e);var r=t(221),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},221:function(n,e,t){}},[[214,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/component/button/button.js.map
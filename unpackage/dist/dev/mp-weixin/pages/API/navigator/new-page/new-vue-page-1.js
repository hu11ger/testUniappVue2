(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/navigator/new-page/new-vue-page-1"],{409:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var o=r(t(410));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},410:function(e,n,t){"use strict";t.r(n);var r=t(411),o=t(413);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(415);var c,u=t(50),i=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);i.options.__file="pages/API/navigator/new-page/new-vue-page-1.vue",n["default"]=i.exports},411:function(e,n,t){"use strict";t.r(n);var r=t(412);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},412:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1302))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,c=[];o._withStripped=!0},413:function(e,n,t){"use strict";t.r(n);var r=t(414),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},414:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(11)),a=t(44);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,o.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i={data:function(){return{title:"新页面",data:""}},computed:u(u({},(0,a.mapState)(["colorIndex","colorList"])),(0,a.mapGetters)(["currentColor"])),onLoad:function(n){n.data&&(this.data=n.data),e.$on("postMsg",(function(n){e.showModal({content:"收到uni.$emit消息:".concat(n.msg),showCancel:!1})}))},onUnload:function(){e.$off("postMsg")},methods:u(u({},(0,a.mapMutations)(["setColorIndex"])),{},{navToNvue:function(){e.navigateTo({url:"new-nvue-page-1"})},navToVue:function(){e.navigateTo({url:"new-vue-page-2"})}})};n.default=i}).call(this,t(2)["default"])},415:function(e,n,t){"use strict";t.r(n);var r=t(416),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},416:function(e,n,t){}},[[409,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/API/navigator/new-page/new-vue-page-1.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/brightness/brightness"],{733:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var c=r(t(734));e.__webpack_require_UNI_MP_PLUGIN__=t,n(c.default)}).call(this,t(1)["default"],t(2)["createPage"])},734:function(e,n,t){"use strict";t.r(n);var r=t(735),c=t(737);for(var o in c)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return c[e]}))}(o);t(739);var s,i=t(50),u=Object(i["default"])(c["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);u.options.__file="pages/API/brightness/brightness.vue",n["default"]=u.exports},735:function(e,n,t){"use strict";t.r(n);var r=t(736);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},736:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return c})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1436))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var c=function(){var e=this,n=e.$createElement;e._self._c},o=!1,s=[];c._withStripped=!0},737:function(e,n,t){"use strict";t.r(n);var r=t(738),c=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=c.a},738:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"brightness",screen:0,keepScreenOn:!0}},onLoad:function(){var n=this;e.getScreenBrightness({success:function(e){n.screen=(100*e.value).toFixed()},fail:function(e){console.log(e)}})},methods:{sliderChange:function(n){var t=n.detail.value;this.screen!==t&&(console.log("当前数值："+n.detail.value),e.setScreenBrightness({value:t/100,success:function(){},fail:function(e){console.log(e)}}),this.screen=t)},keep:function(){e.setKeepScreenOn({keepScreenOn:this.keepScreenOn}),this.keepScreenOn=!this.keepScreenOn}}};n.default=t}).call(this,t(2)["default"])},739:function(e,n,t){"use strict";t.r(n);var r=t(740),c=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=c.a},740:function(e,n,t){}},[[733,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/brightness/brightness.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{527:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27),t(28);o(t(25));var r=o(t(528));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},528:function(e,n,t){"use strict";t.r(n);var o=t(529),r=t(531);for(var c in r)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(c);var i,s=t(50),u=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);u.options.__file="pages/API/get-network-type/get-network-type.vue",n["default"]=u.exports},529:function(e,n,t){"use strict";t.r(n);var o=t(530);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},530:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return c})),t.d(n,"components",(function(){return o}));try{o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1326))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},c=!1,i=[];r._withStripped=!0},531:function(e,n,t){"use strict";t.r(n);var o=t(532),r=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=r.a},532:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:"",connectedWifi:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var n=this;e.getNetworkType({success:function(e){console.log(e),n.hasNetworkType=!0,n.networkType=e.subtype||e.networkType},fail:function(){e.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType="",this.connectedWifi=""},getConnectedWifi:function(){var n=this;e.startWifi({success:function(){e.getConnectedWifi({success:function(e){var t=e.wifi;n.connectedWifi=JSON.stringify(t)},fail:function(e){}})},fail:function(e){}})}}};n.default=t}).call(this,t(2)["default"])}},[[527,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/get-network-type/get-network-type.js.map
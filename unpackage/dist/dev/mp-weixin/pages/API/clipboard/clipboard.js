(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/clipboard/clipboard"],{580:function(e,n,t){"use strict";(function(e,n){var a=t(4);t(26),t(27),t(28);a(t(25));var o=a(t(581));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},581:function(e,n,t){"use strict";t.r(n);var a=t(582),o=t(584);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);var c,i=t(50),u=Object(i["default"])(o["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],c);u.options.__file="pages/API/clipboard/clipboard.vue",n["default"]=u.exports},582:function(e,n,t){"use strict";t.r(n);var a=t(583);t.d(n,"render",(function(){return a["render"]})),t.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(n,"components",(function(){return a["components"]}))},583:function(e,n,t){"use strict";var a;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return a}));try{a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1326))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},r=!1,c=[];o._withStripped=!0},584:function(e,n,t){"use strict";t.r(n);var a=t(585),o=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},585:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(e){this.data=e.detail.value},getClipboard:function(){e.getClipboardData({success:function(n){console.log(n.data);var t=n.data?"剪贴板内容为:"+n.data:"剪贴板暂无内容";e.showModal({content:t,title:"读取剪贴板",showCancel:!1})},fail:function(){e.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var n=this.data;0===n.length?e.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):e.setClipboardData({data:n,success:function(){},fail:function(){}})}}};n.default=t}).call(this,t(2)["default"])}},[[580,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/clipboard/clipboard.js.map
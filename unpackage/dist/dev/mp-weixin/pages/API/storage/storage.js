(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/storage/storage"],{691:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var a=o(n(692));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},692:function(e,t,n){"use strict";n.r(t);var o=n(693),a=n(695);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n(697);var c,i=n(50),s=Object(i["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);s.options.__file="pages/API/storage/storage.vue",t["default"]=s.exports},693:function(e,t,n){"use strict";n.r(t);var o=n(694);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},694:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1418))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},r=!1,c=[];a._withStripped=!0},695:function(e,t,n){"use strict";n.r(t);var o=n(696),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},696:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(e){this.key=e.detail.value},dataChange:function(e){this.data=e.detail.value},getStorage:function(){var t=this.key;this.data;0===t.length?e.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):e.getStorage({key:t,success:function(t){e.showModal({title:"读取数据成功",content:"data: '"+t.data+"'",showCancel:!1})},fail:function(){e.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var t=this.key,n=this.data;0===t.length?e.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):e.setStorage({key:t,data:n,success:function(t){e.showModal({title:"存储数据成功",content:JSON.stringify(t.errMsg),showCancel:!1})},fail:function(){e.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){e.clearStorageSync(),this.key="",this.data="",e.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};t.default=n}).call(this,n(2)["default"])},697:function(e,t,n){"use strict";n.r(t);var o=n(698),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},698:function(e,t,n){}},[[691,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/storage/storage.js.map
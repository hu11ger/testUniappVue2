(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-node-info/get-node-info"],{509:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27),t(28);o(t(25));var r=o(t(510));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},510:function(e,n,t){"use strict";t.r(n);var o=t(511),r=t(513);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(515);var c,u=t(50),a=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);a.options.__file="pages/API/get-node-info/get-node-info.vue",n["default"]=a.exports},511:function(e,n,t){"use strict";t.r(n);var o=t(512);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},512:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));try{o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1461))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},i=!1,c=[];r._withStripped=!0},513:function(e,n,t){"use strict";t.r(n);var o=t(514),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},514:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*e.upx2px(320)+"px",this.top=Math.random()*e.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var n=this;e.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var t=e[0];if(t){var o=["left","right","top","bottom","width","height"],r=[];for(var i in o){var c=o[i];r.push({key:c,val:t[c]})}n.info=r}}))}}};n.default=t}).call(this,t(2)["default"])},515:function(e,n,t){"use strict";t.r(n);var o=t(516),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},516:function(e,n,t){}},[[509,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/get-node-info/get-node-info.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/soter/soter"],{673:function(e,n,o){"use strict";(function(e,n){var t=o(4);o(26),o(27),o(28);t(o(25));var c=t(o(674));e.__webpack_require_UNI_MP_PLUGIN__=o,n(c.default)}).call(this,o(1)["default"],o(2)["createPage"])},674:function(e,n,o){"use strict";o.r(n);var t=o(675),c=o(677);for(var r in c)["default"].indexOf(r)<0&&function(e){o.d(n,e,(function(){return c[e]}))}(r);var s,i=o(50),a=Object(i["default"])(c["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],s);a.options.__file="pages/API/soter/soter.vue",n["default"]=a.exports},675:function(e,n,o){"use strict";o.r(n);var t=o(676);o.d(n,"render",(function(){return t["render"]})),o.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(n,"components",(function(){return t["components"]}))},676:function(e,n,o){"use strict";var t;o.r(n),o.d(n,"render",(function(){return c})),o.d(n,"staticRenderFns",(function(){return s})),o.d(n,"recyclableRender",(function(){return r})),o.d(n,"components",(function(){return t}));try{t={pageHead:function(){return o.e("components/page-head/page-head").then(o.bind(null,1244))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var c=function(){var e=this,n=e.$createElement;e._self._c},r=!1,s=[];c._withStripped=!0},677:function(e,n,o){"use strict";o.r(n);var t=o(678),c=o.n(t);for(var r in t)["default"].indexOf(r)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(r);n["default"]=c.a},678:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{title:"生物认证",result:""}},onLoad:function(){},methods:{checkIsSupportSoterAuthentication:function(){e.checkIsSupportSoterAuthentication({success:function(n){e.showModal({content:"支持的认证方式："+n.supportMode,showCancel:!1}),console.log(n)},fail:function(e){console.log(e)}})},checkIsSoterEnrolledInDeviceFingerPrint:function(){e.checkIsSoterEnrolledInDevice({checkAuthMode:"fingerPrint",success:function(n){n.isEnrolled?e.showToast({icon:"none",title:"已录入指纹"}):e.showModal({content:"未录入指纹",showCancel:!1}),console.log(n)},fail:function(n){e.showModal({content:"未录入指纹",showCancel:!1}),console.log(n)}})},checkIsSoterEnrolledInDeviceFaceID:function(){e.checkIsSoterEnrolledInDevice({checkAuthMode:"facial",success:function(n){n.isEnrolled?e.showToast({icon:"none",title:"已录入FaceID"}):e.showModal({content:"未录入FaceID",showCancel:!1}),console.log(n)},fail:function(n){e.showModal({content:"未录入FaceID",showCancel:!1}),console.log(n)}})},startSoterAuthenticationFingerPrint:function(){e.startSoterAuthentication({requestAuthModes:["fingerPrint"],challenge:"123456",authContent:"请用指纹解锁",success:function(n){e.showToast({icon:"none",title:"指纹验证成功"}),console.log(n)},fail:function(n){e.showModal({content:"指纹验证失败，errCode："+n.errCode,showCancel:!1}),console.log(n)}})},startSoterAuthenticationFaceID:function(){e.startSoterAuthentication({requestAuthModes:["facial"],challenge:"123456",authContent:"请用FaceID解锁",success:function(n){e.showToast({icon:"none",title:"FaceID验证成功"}),console.log(n)},fail:function(n){e.showModal({content:"FaceID验证失败，errCode："+n.errCode,showCancel:!1}),console.log(n)}})}}};n.default=o}).call(this,o(2)["default"])}},[[673,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/soter/soter.js.map
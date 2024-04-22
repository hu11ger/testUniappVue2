(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-user-info/get-user-info"],{393:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var o=r(t(394));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},394:function(e,n,t){"use strict";t.r(n);var r=t(395),o=t(397);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t(399);var s,c=t(50),u=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);u.options.__file="pages/API/get-user-info/get-user-info.vue",n["default"]=u.exports},395:function(e,n,t){"use strict";t.r(n);var r=t(396);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},396:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1326))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},i=!1,s=[];o._withStripped=!0},397:function(e,n,t){"use strict";t.r(n);var r=t(398),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},398:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(11)),i=t(44);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,o.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u={data:function(){return{title:"getUserInfo",hasUserInfo:!1,userInfo:{},btnLoading:!1}},computed:c({},(0,i.mapState)(["loginProvider","isUniverifyLogin"])),methods:c(c({},(0,i.mapActions)(["getPhoneNumber"])),{},{getUserInfo:function(){var n=this;if(this.btnLoading=!0,this.isUniverifyLogin)this.getPhoneNumber(e.getStorageSync("univerifyInfo")).then((function(e){n.hasUserInfo=!0,n.userInfo={phoneNumber:e}})).catch((function(e){console.error("getUserInfo fail:",e),n.hasUserInfo=!1})).finally((function(){n.btnLoading=!1}));else{if("apple"===this.loginProvider){var t=e.getStorageSync("apple_nickname");if(t)return this.hasUserInfo=!0,this.userInfo={nickName:t},void(this.btnLoading=!1)}e.getUserInfo({provider:this.loginProvider,success:function(e){n.hasUserInfo=!0,n.userInfo=e.userInfo},fail:function(n){console.log("getUserInfo fail",n);var t=n.errMsg;~t.indexOf("uni.login")&&(t="请在登录页面完成登录操作"),e.getSetting({success:function(n){var r=n.authSetting["scope.userInfo"];r?e.showModal({title:"获取用户信息失败",content:"错误原因"+t,showCancel:!1}):e.showModal({title:"授权失败",content:"Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})},complete:function(){n.btnLoading=!1}})}},mpGetUserInfo:function(n){console.log("mpGetUserInfo",n),"getUserInfo:ok"===n.detail.errMsg?(this.hasUserInfo=!0,n.detail&&n.detail.userInfo&&(this.userInfo=n.detail.userInfo)):e.showModal({title:"获取用户信息失败",content:"错误原因"+n.detail.errMsg,showCancel:!1})},clear:function(){this.hasUserInfo=!1,this.userInfo={}}})};n.default=u}).call(this,t(2)["default"])},399:function(e,n,t){"use strict";t.r(n);var r=t(400),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},400:function(e,n,t){}},[[393,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/get-user-info/get-user-info.js.map
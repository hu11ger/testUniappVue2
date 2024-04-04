(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/login/login"],{319:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27),t(28);o(t(25));var r=o(t(320));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},320:function(e,n,t){"use strict";t.r(n);var o=t(321),r=t(323);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(325);var c,a=t(50),s=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);s.options.__file="pages/API/login/login.vue",n["default"]=s.exports},321:function(e,n,t){"use strict";t.r(n);var o=t(322);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},322:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));try{o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1256))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement,t=(e._self._c,!0===e.hasLogin&&e.isUniverifyLogin?e.phoneNumber.length:null);e.$mp.data=Object.assign({},{$root:{g0:t}})},i=!1,c=[];r._withStripped=!0},323:function(e,n,t){"use strict";t.r(n);var o=t(324),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},324:function(e,n,t){"use strict";(function(e){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(29)),i=o(t(5)),c=o(t(32)),a=o(t(11)),s=t(44);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d="univerifyInfo",f={data:function(){return{title:"login",providerList:[],phoneNumber:"",univerifyBtnLoading:!1}},computed:l({},(0,s.mapState)(["hasLogin","isUniverifyLogin","univerifyErrorMsg"])),onLoad:function(){var n=this;e.getProvider({service:"oauth",success:function(e){n.providerList=e.provider.map((function(e){var n="";switch(e){case"weixin":n="微信登录";break;case"qq":n="QQ登录";break;case"sinaweibo":n="新浪微博登录";break;case"xiaomi":n="小米登录";break;case"alipay":n="支付宝登录";break;case"baidu":n="百度登录";break;case"jd":n="京东登录";break;case"toutiao":n="头条登录";break;case"apple":n="苹果登录";break;case"univerify":n="一键登录";break}return{name:n,id:e}}))},fail:function(e){console.log("获取登录通道失败",e)}}),this.hasLogin&&this.isUniverifyLogin&&this.getPhoneNumber(e.getStorageSync(d)).then((function(e){n.phoneNumber=e}))},methods:l(l(l({},(0,s.mapMutations)(["login","setUniverifyLogin"])),(0,s.mapActions)(["getPhoneNumber"])),{},{Toast:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e.showToast(Object.assign({},n,{duration:t}))},tologin:function(n){var t=this;"univerify"===n.id&&(this.univerifyBtnLoading=!0),e.login({provider:n.id,success:function(){var o=(0,c.default)(r.default.mark((function o(i){return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log("login success:",i),t.Toast({title:"登录成功"}),t.login(n.id),console.warn("如需获取openid请参考uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),e.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:i.code,platform:"mp-weixin"}},success:function(n){console.log(n),0===n.data.code?e.setStorageSync("openid",n.data.openid):console.log("获取openid失败：",n.data.errMsg)},fail:function(e){console.log("获取openid失败：",e)}});case 5:case"end":return o.stop()}}),o)})));function i(e){return o.apply(this,arguments)}return i}(),fail:function(n){if(console.log("login fail:",n),"30002"==n.code)return e.closeAuthView(),void t.Toast({title:"其他登录方式"});1e3!=n.code?"30005"!=n.code?"30003"!=n.code&&e.showModal({showCancel:!1,title:"登录失败",content:JSON.stringify(n)}):e.showModal({showCancel:!1,title:"预登录失败",content:t.univerifyErrorMsg||n.errMsg}):e.showModal({title:"登录失败",content:"".concat(n.errMsg,"\n，错误码：").concat(n.code),confirmText:"开通指南",cancelText:"确定",success:function(e){e.confirm&&setTimeout((function(){plus.runtime.openWeb("https://ask.dcloud.net.cn/article/37965")}),500)}})},complete:function(){t.univerifyBtnLoading=!1}})},loginByUniverify:function(n,t){var o=this;this.setUniverifyLogin(!0),e.closeAuthView();var r=l({provider:n},t.authResult);this.getPhoneNumber(r).then((function(n){o.phoneNumber=n,e.setStorageSync(d,r)})).catch((function(n){e.showModal({showCancel:!1,title:"手机号获取失败",content:"".concat(n.errMsg,"\n，错误码：").concat(n.code)}),console.error(t)}))},loginByApple:function(n,t){return(0,c.default)(r.default.mark((function t(){var o,c,a,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserInfo({provider:n});case 2:a=t.sent,s=(0,i.default)(a,2),o=s[0],c=s[1],o&&(u=o.errMsg,~u.indexOf("uni.login")&&(u="请在登录页面完成登录操作"),e.showModal({title:"获取用户信息失败",content:"错误原因"+u,showCancel:!1})),console.warn("此处使用uni-id处理苹果登录，详情参考: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),e.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByApple",params:c.userInfo},success:function(n){console.log("uniId login success",n),0!==n.data.code?e.showModal({showCancel:!1,content:"苹果登录失败: ".concat(JSON.stringify(n.data.msg))}):(e.setStorageSync("openid",n.data.openid),e.setStorageSync("apple_nickname",n.data.userInfo.nickname))},fail:function(n){e.showModal({content:"苹果登录失败: ".concat(JSON.stringify(n)),showCancel:!1})}});case 9:case"end":return t.stop()}}),t)})))()}})};n.default=f}).call(this,t(2)["default"])},325:function(e,n,t){"use strict";t.r(n);var o=t(326),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},326:function(e,n,t){}},[[319,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/login/login.js.map
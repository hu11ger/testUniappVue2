(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/request-payment/request-payment"],{419:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var o=r(t(420));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},420:function(e,n,t){"use strict";t.r(n);var r=t(421),o=t(423);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(425);var c,i=t(50),u=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);u.options.__file="pages/API/request-payment/request-payment.vue",n["default"]=u.exports},421:function(e,n,t){"use strict";t.r(n);var r=t(422);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},422:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1436))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,c=[];o._withStripped=!0},423:function(e,n,t){"use strict";t.r(n);var r=t(424),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},424:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(29)),a=r(t(11)),c=r(t(32));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{loginMpWeixin:function(){return new Promise((function(n,t){e.login({provider:"weixin",success:function(r){console.warn("此处使用uni-id处理微信小程序登录，详情参考: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),e.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:r.code,platform:"mp-weixin"}},success:function(r){0===r.data.code?(e.setStorageSync("openid",r.data.openid),n(r.data.openid)):t(new Error("获取openid失败：",r.result.msg))},fail:function(e){t(new Error("获取openid失败："+e))}})},fail:function(e){t(e)}})}))},weixinPay:function(){var n=this;return(0,c.default)(o.default.mark((function t(){var r,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getStorageSync("openid"),console.log("发起支付"),n.loading=!0,r){t.next=17;break}return t.prev=4,t.next=7,n.loginMpWeixin();case 7:r=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.error(t.t0);case 13:if(r){t.next=17;break}return e.showModal({content:"获取openid失败",showCancel:!1}),n.loading=!1,t.abrupt("return");case 17:return n.openid=r,t.next=20,n.getOrderInfo("wxpay");case 20:if(a=t.sent,a){t.next=24;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),t.abrupt("return");case 24:e.requestPayment(u(u({},a),{},{success:function(n){e.showToast({title:"感谢您的赞助!"})},fail:function(n){e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.loading=!1}}));case 25:case"end":return t.stop()}}),t,null,[[4,10]])})))()},requestPayment:function(n,t){var r=this;return(0,c.default)(o.default.mark((function a(){var c,i;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r.providerList[t].loading=!0,c=n.id,o.next=4,r.getOrderInfo(c);case 4:if(i=o.sent,i){o.next=8;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),o.abrupt("return");case 8:console.log("--------orderInfo--------"),console.log(i),e.requestPayment({provider:c,orderInfo:i,success:function(n){console.log("success",n),e.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){r.providerList[t].loading=!1}});case 11:case"end":return o.stop()}}),a)})))()},getOrderInfo:function(n){var t=this;return new Promise((function(r,o){t.price||o(new Error("请输入金额")),console.warn("此处使用uni-pay处理支付，详情参考: https://uniapp.dcloud.io/uniCloud/unipay"),e.request({method:"POST",url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay",data:{provider:n,openid:t.openid,totalFee:100*Number(t.price),platform:"mp-weixin"},success:function(e){0===e.data.code?r(e.data.orderInfo):o(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){o(new Error("请求支付接口失败"+e))}})}))},priceChange:function(e){console.log(e.detail.value),this.price=e.detail.value}}};n.default=s}).call(this,t(2)["default"])},425:function(e,n,t){"use strict";t.r(n);var r=t(426),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},426:function(e,n,t){}},[[419,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/request-payment/request-payment.js.map
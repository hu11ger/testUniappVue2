(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/websocket-socketTask/websocket-socketTask"],{695:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26),t(27),t(28);o(t(25));var s=o(t(696));n.__webpack_require_UNI_MP_PLUGIN__=t,e(s.default)}).call(this,t(1)["default"],t(2)["createPage"])},696:function(n,e,t){"use strict";t.r(e);var o=t(697),s=t(699);for(var c in s)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return s[n]}))}(c);t(701);var i,r=t(50),a=Object(r["default"])(s["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);a.options.__file="pages/API/websocket-socketTask/websocket-socketTask.vue",e["default"]=a.exports},697:function(n,e,t){"use strict";t.r(e);var o=t(698);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},698:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return s})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));try{o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1256))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var n=this,e=n.$createElement;n._self._c},c=!1,i=[];s._withStripped=!0},699:function(n,e,t){"use strict";t.r(e);var o=t(700),s=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=s.a},700:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n.getSystemInfoSync().platform,o={data:function(){return{connected:!1,connecting:!1,socketTask:!1,msg:!1}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){n.hideLoading(),this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect:function(){var e=this;if(this.connected||this.connecting)return n.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,n.showLoading({title:"连接中..."}),this.socketTask=n.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},header:{"content-type":"application/json"},method:"GET",success:function(n){},fail:function(n){}}),console.log(this.socketTask),this.socketTask.onOpen((function(t){e.connecting=!1,e.connected=!0,n.hideLoading(),n.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",t)})),this.socketTask.onError((function(t){e.connecting=!1,e.connected=!1,n.hideLoading(),n.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",t)})),this.socketTask.onMessage((function(n){e.msg=n.data,console.log("onMessage",n)})),this.socketTask.onClose((function(n){e.connected=!1,e.startRecive=!1,e.socketTask=!1,e.msg=!1,console.log("onClose",n)})),console.log("task",this.socketTask)},send:function(){this.socketTask.send({data:"from "+t+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}};e.default=o}).call(this,t(2)["default"])},701:function(n,e,t){"use strict";t.r(e);var o=t(702),s=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=s.a},702:function(n,e,t){}},[[695,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/websocket-socketTask/websocket-socketTask.js.map
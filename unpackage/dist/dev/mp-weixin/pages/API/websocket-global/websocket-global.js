(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/websocket-global/websocket-global"],{787:function(n,e,o){"use strict";(function(n,e){var t=o(4);o(26),o(27),o(28);t(o(25));var c=t(o(788));n.__webpack_require_UNI_MP_PLUGIN__=o,e(c.default)}).call(this,o(1)["default"],o(2)["createPage"])},788:function(n,e,o){"use strict";o.r(e);var t=o(789),c=o(791);for(var r in c)["default"].indexOf(r)<0&&function(n){o.d(e,n,(function(){return c[n]}))}(r);o(793);var s,i=o(50),a=Object(i["default"])(c["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],s);a.options.__file="pages/API/websocket-global/websocket-global.vue",e["default"]=a.exports},789:function(n,e,o){"use strict";o.r(e);var t=o(790);o.d(e,"render",(function(){return t["render"]})),o.d(e,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(e,"components",(function(){return t["components"]}))},790:function(n,e,o){"use strict";var t;o.r(e),o.d(e,"render",(function(){return c})),o.d(e,"staticRenderFns",(function(){return s})),o.d(e,"recyclableRender",(function(){return r})),o.d(e,"components",(function(){return t}));try{t={pageHead:function(){return o.e("components/page-head/page-head").then(o.bind(null,1436))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var c=function(){var n=this,e=n.$createElement;n._self._c},r=!1,s=[];c._withStripped=!0},791:function(n,e,o){"use strict";o.r(e);var t=o(792),c=o.n(t);for(var r in t)["default"].indexOf(r)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(r);e["default"]=c.a},792:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n.getSystemInfoSync().platform,t={data:function(){return{connected:!1,connecting:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){n.closeSocket(),n.hideLoading()},methods:{connect:function(){var e=this;if(this.connected||this.connecting)return n.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,n.showLoading({title:"连接中..."}),n.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},header:{"content-type":"application/json"},method:"GET",success:function(n){},fail:function(n){}}),n.onSocketOpen((function(o){e.connecting=!1,e.connected=!0,n.hideLoading(),n.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",o)})),n.onSocketError((function(o){e.connecting=!1,e.connected=!1,n.hideLoading(),n.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",o)})),n.onSocketMessage((function(n){e.msg=n.data,console.log("onMessage",n)})),n.onSocketClose((function(n){e.connected=!1,e.startRecive=!1,e.msg=!1,console.log("onClose",n)}))},send:function(){n.sendSocketMessage({data:"from "+o+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){n.closeSocket()}}};e.default=t}).call(this,o(2)["default"])},793:function(n,e,o){"use strict";o.r(e);var t=o(794),c=o.n(t);for(var r in t)["default"].indexOf(r)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(r);e["default"]=c.a},794:function(n,e,o){}},[[787,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/websocket-global/websocket-global.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/request/request"],{554:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26),n(27),n(28);r(n(25));var s=r(n(555));e.__webpack_require_UNI_MP_PLUGIN__=n,t(s.default)}).call(this,n(1)["default"],n(2)["createPage"])},555:function(e,t,n){"use strict";n.r(t);var r=n(556),s=n(558);for(var o in s)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(o);var a,c=n(50),u=Object(c["default"])(s["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);u.options.__file="pages/API/request/request.vue",t["default"]=u.exports},556:function(e,t,n){"use strict";n.r(t);var r=n(557);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},557:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return s})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1294))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement;e._self._c},o=!1,a=[];s._withStripped=!0},558:function(e,t,n){"use strict";n.r(t);var r=n(559),s=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=s.a},559:function(e,t,n){"use strict";(function(e){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(29)),o=r(n(5)),a=r(n(32)),c="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",u=2e3,i={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(e){switch(this.loading=!0,e){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var t=this;e.request({url:c,dataType:"text",data:{noncestr:Date.now()},success:function(n){console.log("request success",n),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:u}),t.res="请求结果 : "+JSON.stringify(n)},fail:function(t){console.log("request fail",t),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})},_requestPromise:function(){var t=this;e.request({url:c,dataType:"text",data:{noncestr:Date.now()}}).then((function(n){console.log("request success",n[1]),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:u}),t.res="请求结果 : "+JSON.stringify(n[1]),t.loading=!1})).catch((function(n){console.log("request fail",n),e.showModal({content:n.errMsg,showCancel:!1}),t.loading=!1}))},_requestAwait:function(){var t=this;return(0,a.default)(s.default.mark((function n(){var r,a,i,l;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.request({url:c,dataType:"text",data:{noncestr:Date.now()}});case 2:i=n.sent,l=(0,o.default)(i,2),a=l[0],r=l[1],a?(console.log("request fail",a),e.showModal({content:a.errMsg,showCancel:!1})):(console.log("request success",r),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:u}),t.res="请求结果 : "+JSON.stringify(r)),t.loading=!1;case 8:case"end":return n.stop()}}),n)})))()}}};t.default=i}).call(this,n(2)["default"])}},[[554,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/request/request.js.map
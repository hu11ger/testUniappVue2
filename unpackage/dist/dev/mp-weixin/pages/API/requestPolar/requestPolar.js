(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/requestPolar/requestPolar"],{717:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var c=o(n(718));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n(1)["default"],n(2)["createPage"])},718:function(e,t,n){"use strict";n.r(t);var o=n(719),c=n(721);for(var r in c)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(r);var a,s=n(50),i=Object(s["default"])(c["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);i.options.__file="pages/API/requestPolar/requestPolar.vue",t["default"]=i.exports},719:function(e,t,n){"use strict";n.r(t);var o=n(720);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},720:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return c})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1256))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var c=function(){var e=this,t=e.$createElement;e._self._c},r=!1,a=[];c._withStripped=!0},721:function(e,t,n){"use strict";n.r(t);var o=n(722),c=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=c.a},722:function(e,t,n){"use strict";(function(e){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n(29)),r=o(n(5)),a=o(n(32)),s=o(n(2038)),i="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",u=2e3,l={data:function(){return{title:"request",loading:!1,res:"",client_id:"d9b43148-dff9-4730-bf04-59d284efb671",client_secret:"8182dbf0-a83c-442c-a110-324bef38d628",encodeClientStr:"",scope:"read:user",state:"your state",getCodeURL:"/api/oauth2/authorization",getAccessTokenURL:"/api2/oauth2/token",getUserURl:"/api3",redirectURL:null,code:null,accessToken:null,signState:!1}},created:function(){this.getCodeURL+="?client_id="+this.client_id+"&response_type=code"},mounted:function(){console.log(getApp().globalData.accessCode),""!=getApp().globalData.accessCode&&(this.code=getApp().globalData.accessCode,e.showToast({title:"您已登录至Polar账号",icon:"success",mask:!1,duration:2e3}))},methods:{getToken:function(){this.encodeClientStr=s.default.encode(this.client_id+":"+this.client_secret),this.encodeClientStr="Basic "+this.encodeClientStr,console.log(this.encodeClientStr),this.$axios({method:"POST",url:this.getAccessTokenURL,Headers:{"Content - Type":"application/json",Authorization:this.encodeClientStr},params:{grant_type:"authorization_code",code:this.code}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},saveURL:function(){},locationHref:function(){location.href="https://flow.polar.com/oauth2/authorization?response_type=code&client_id=d9b43148-dff9-4730-bf04-59d284efb671"},requestPromise:function(){this.$axios({method:"POST",url:"/api/oauth2/authorization",params:{response_type:"code",client_id:"=d9b43148-dff9-4730-bf04-59d284efb671"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},_requestAwait:function(){var t=this;return(0,a.default)(c.default.mark((function n(){var o,a,s,l;return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.request({url:i,dataType:"text",data:{noncestr:Date.now()}});case 2:s=n.sent,l=(0,r.default)(s,2),a=l[0],o=l[1],a?(console.log("request fail",a),e.showModal({content:a.errMsg,showCancel:!1})):(console.log("request success",o),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:u}),t.res="请求结果 : "+JSON.stringify(o)),t.loading=!1;case 8:case"end":return n.stop()}}),n)})))()}}};t.default=l}).call(this,n(2)["default"])}},[[717,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/requestPolar/requestPolar.js.map
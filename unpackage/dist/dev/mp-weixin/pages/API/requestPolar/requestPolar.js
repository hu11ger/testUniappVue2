(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/requestPolar/requestPolar"],{759:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var a=o(n(760));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},760:function(e,t,n){"use strict";n.r(t);var o=n(761),a=n(763);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r,i=n(50),s=Object(i["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);s.options.__file="pages/API/requestPolar/requestPolar.vue",t["default"]=s.exports},761:function(e,t,n){"use strict";n.r(t);var o=n(762);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},762:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return c})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1302))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},c=!1,r=[];a._withStripped=!0},763:function(e,t,n){"use strict";n.r(t);var o=n(764),a=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=a.a},764:function(e,t,n){"use strict";(function(e){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(29)),c=o(n(5)),r=o(n(32)),i=o(n(765)),s="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",l=2e3,u={data:function(){return{title:"request",loading:!1,res:"",client_id:"d9b43148-dff9-4730-bf04-59d284efb671",client_secret:"8182dbf0-a83c-442c-a110-324bef38d628",encodeClientStr:"",scope:"read:user",state:"your state",getCodeURL:"/api/oauth2/authorization",getAccessTokenURL:"/api2/oauth2/token",getUserURl:"/api3",redirectURL:null,code:null,accessToken:null,signState:!1,xUserID:null,transactionID:null,activityID:null}},created:function(){this.getCodeURL+="?client_id="+this.client_id+"&response_type=code"},mounted:function(){console.log(getApp().globalData.accessCode),""!=getApp().globalData.accessCode&&(this.code=getApp().globalData.accessCode,e.showToast({title:"您已登录至Polar账号",icon:"success",mask:!1,duration:2e3}))},methods:{location:function(){e.request({url:"/getinfo/users/61291757/physical-information-transactions/21952335/physical-informations/15466211",method:"GET",header:{Host:"www.polaraccesslink.com",Authorization:"Bearer "+this.accessToken,Accept:"application/json;charset=UTF-8","Content-Type":"application/x-www-form-urlencoded"}})},listActivitySummary:function(){e.request({url:"/getinfo/users/61291757/activity-transactions/1093181050/activities/2558483657",method:"GET",header:{Host:"www.polaraccesslink.com","Content-Type":"application/x-www-form-urlencoded",Accept:"application/json;charset=UTF-8",Authorization:"Bearer "+this.accessToken}}).then((function(e){console.log(e[1].data)}))},listActivity:function(){var t=this;e.request({url:"/getinfo/users/61291757/activity-transactions/"+this.transactionID,method:"GET",header:{Host:"www.polaraccesslink.com","Content-Type":"application/x-www-form-urlencoded",Accept:"application/json;charset=UTF-8",Authorization:"Bearer "+this.accessToken}}).then((function(e){console.log(e[1].data[0]);var n=e[1].data[0].split["/"],o=n.pop();t.activityID=o}))},listHeartRate:function(){e.request({url:"/getinfo/users/continuous-heart-rate/2024-04-04",method:"GET",header:{Host:"www.polaraccesslink.com","Content-Type":"application/x-www-form-urlencoded",Accept:"application/json;charset=UTF-8",Authorization:"Bearer "+this.accessToken}}).then((function(e){console.log(e[1].data)}))},createTransaction:function(){var t=this;e.request({url:"/getinfo/users/61291757/activity-transactions",method:"POST",data:{"user - id":61291757},header:{Host:"www.polaraccesslink.com","Content-Type":"application/x-www-form-urlencoded",Accept:"application/json;charset=UTF-8",Authorization:"Bearer "+this.accessToken}}).then((function(e){console.log(e[1].data),t.transactionID=e[1].data["transaction-id"]}))},getToken:function(){var t=this;this.encodeClientStr=i.default.encode(this.client_id+":"+this.client_secret),this.encodeClientStr="Basic "+this.encodeClientStr,console.log(this.encodeClientStr),e.request({url:"/tokenapi/oauth2/token",method:"POST",data:{grant_type:"authorization_code",code:this.code},header:{"Content-Type":"application/x-www-form-urlencoded",Authorization:this.encodeClientStr,Accept:"application/json;charset=UTF-8"}}).then((function(e){console.log(e[1].data),t.accessToken=e[1].data.access_token,t.xUserID=e[1].data.x_user_id}))},getUserBasicInfo:function(){e.request({url:"/getinfo/users/61291757",method:"GET",header:{Authorization:"Bearer "+this.accessToken,Host:"www.polaraccesslink.com",Accept:"application/json"}})},locationHref:function(){location.href="https://flow.polar.com/oauth2/authorization?response_type=code&client_id=d9b43148-dff9-4730-bf04-59d284efb671"},requestPromise:function(){this.$axios({method:"POST",url:"/api/oauth2/authorization",params:{response_type:"code",client_id:"=d9b43148-dff9-4730-bf04-59d284efb671"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},_requestAwait:function(){var t=this;return(0,r.default)(a.default.mark((function n(){var o,r,i,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.request({url:s,dataType:"text",data:{noncestr:Date.now()}});case 2:i=n.sent,u=(0,c.default)(i,2),r=u[0],o=u[1],r?(console.log("request fail",r),e.showModal({content:r.errMsg,showCancel:!1})):(console.log("request success",o),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:l}),t.res="请求结果 : "+JSON.stringify(o)),t.loading=!1;case 8:case"end":return n.stop()}}),n)})))()}}};t.default=u}).call(this,n(2)["default"])}},[[759,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/requestPolar/requestPolar.js.map
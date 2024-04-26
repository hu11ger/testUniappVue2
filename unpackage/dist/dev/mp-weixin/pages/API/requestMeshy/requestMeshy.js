(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/requestMeshy/requestMeshy"],{795:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var s=o(n(796));e.__webpack_require_UNI_MP_PLUGIN__=n,t(s.default)}).call(this,n(1)["default"],n(2)["createPage"])},796:function(e,t,n){"use strict";n.r(t);var o=n(797),s=n(799);for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);var r,c=n(50),i=Object(c["default"])(s["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);i.options.__file="pages/API/requestMeshy/requestMeshy.vue",t["default"]=i.exports},797:function(e,t,n){"use strict";n.r(t);var o=n(798);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},798:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return s})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1436))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement;e._self._c},a=!1,r=[];s._withStripped=!0},799:function(e,t,n){"use strict";n.r(t);var o=n(800),s=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=s.a},800:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=2e3,s={data:function(){return{title:"测试接入Meshy",loading:!1,res:"",baseUrl:"https://api.meshy.ai/v1/image-to-3d",meshyAPI:"msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX",inputHeader:{Authorization:"Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX","Content - Type":"application/json"},inputArg:{image_url:"https://mp-4873eed2-c888-469f-becd-e538e287ac05.cdn.bspapp.com/bear.png",enable_pbr:!0},fbxURL:"",fbxLocalPath:"",resultID:""}},methods:{uploadModelFBX:function(){e.uploadFile({filePath:this.fbxLocalPath,cloudPath:"model.fbx",onUploadProgress:function(e){console.log(e);Math.round(100*e.loaded/e.total)},success:function(e){console.log(e),n.showToast({title:"上传模型成功",icon:"success",duration:1e3})},fail:function(e){console.log("上传模型 fail",e),n.showModal({content:e.errMsg,showCancel:!1})},complete:function(){}})},downloadModel:function(){var e=this;n.showLoading({title:"下载中"}),n.downloadFile({url:this.fbxURL,success:function(t){n.showToast({title:"下载AI生成模型成功",icon:"success",duration:1e3}),console.log("下载AI生成模型成功",t),e.fbxLocalPath=t.tempFilePath,n.hideLoading(),e.uploadModelFBX()},fail:function(e){console.log("下载AI生成模型失败",e)}})},getResult:function(){var e=this;this.loading=!0,n.request({url:this.baseUrl+"/018e8e76-9fb0-7f66-8e94-ee2b52be85d8",method:"GET",header:{Authorization:"Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX"}}).then((function(t){console.log("request success",t[1].data),n.showToast({title:"查询成功",icon:"success",mask:!0,duration:o}),e.res="查询结果 : "+t[1].data,e.loading=!1,e.fbxURL=t[1].data.model_urls.fbx,e.downloadModel()}))},sendRequest:function(e){switch(this.loading=!0,e){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_requestPromise:function(){var e=this;n.request({url:this.baseUrl,method:"POST",header:{Authorization:"Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX","Content-type":"application/json"},data:{image_url:"https://mp-4873eed2-c888-469f-becd-e538e287ac05.cdn.bspapp.com/bear.png",enable_pbr:!0}}).then((function(t){console.log("request success",t[1].data),e.resultID=t[1].data.result,n.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),e.res="请求结果 : "+t[1].data,e.loading=!1})).catch((function(t){console.log("request fail",t),n.showModal({content:t.errMsg,showCancel:!1}),e.loading=!1}))}}};t.default=s}).call(this,n(28)["default"],n(2)["default"])}},[[795,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/requestMeshy/requestMeshy.js.map
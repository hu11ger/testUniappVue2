(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-test0317-test0317"],{"128b":function(t,e,n){"use strict";n.r(e);var s=n("1b1f"),a=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(i);e["default"]=a.a},"1b1f":function(t,e,n){"use strict";(function(t){n("7a82");var s=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("f07e")),i=s(n("d0af")),o=s(n("c964"));n("e9c4");var u={onLoad:function(){this.getCloudData()},data:function(){return{title:"云服务器数据测试",tangShiData:[],loading:!1,res:"",data:[]}},methods:{getCloudData:function(e){var n=this;this.loading=!0,uni.showLoading({title:"加载中"}),t.callFunction({name:"TangShiList",data:{limit:300,offset:0,keyWord:""}}).then((function(t){n.data=t.result.data,uni.hideLoading(),n.loading=!1}))},sendRequest:function(t){switch(this.loading=!0,t){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var t=this;uni.request({url:requestUrl,dataType:"text",data:{noncestr:Date.now()},success:function(e){console.log("request success",e),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:duration}),t.res="请求结果 : "+JSON.stringify(e)},fail:function(t){console.log("request fail",t),uni.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})},_requestPromise:function(){var t=this;uni.request({url:requestUrl,dataType:"text",data:{noncestr:Date.now()}}).then((function(e){console.log("request success",e[1]),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:duration}),t.res="请求结果 : "+JSON.stringify(e[1]),t.loading=!1})).catch((function(e){console.log("request fail",e),uni.showModal({content:e.errMsg,showCancel:!1}),t.loading=!1}))},_requestAwait:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n,s,o,u;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.request({url:requestUrl,dataType:"text",data:{noncestr:Date.now()}});case 2:o=e.sent,u=(0,i.default)(o,2),s=u[0],n=u[1],s?(console.log("request fail",s),uni.showModal({content:s.errMsg,showCancel:!1})):(console.log("request success",n),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:duration}),t.res="请求结果 : "+JSON.stringify(n)),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,n("a9ff")["default"])},"31da":function(t,e,n){"use strict";n.r(e);var s=n("6810"),a=n("128b");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("f2f4");var o=n("f0c5"),u=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"28a391c2",null,!1,s["a"],void 0);e["default"]=u.exports},"396c":function(t,e,n){var s=n("24fb");e=s(!1),e.push([t.i,".text-box[data-v-28a391c2]{margin-bottom:%?40?%;padding:%?40?% 0;display:flex;min-height:%?300?%;background-color:#fff;justify-content:center;align-items:center;text-align:center;font-size:%?30?%;color:#353535;line-height:1.8}",""]),t.exports=e},6810:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?t._e():n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"ts-search"}),t._l(t.data,(function(e){return n("v-uni-view",{key:e._id,staticClass:"ts-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"ts-title"},[n("v-uni-text",{staticClass:"ts-name"},[t._v(t._s(e.title.split("/")[0]))]),n("v-uni-view",{staticStyle:{width:"50px"}}),n("v-uni-text",{staticClass:"ts-author"},[t._v(t._s(e.author))])],1),n("v-uni-view",{staticClass:"ts-desc"},[t._v(t._s(e.text.split("\n")[0]))]),n("v-uni-view",{staticStyle:{height:"50px"}})],1)}))],2)},a=[]},ef58:function(t,e,n){var s=n("396c");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=n("4f06").default;a("42ca7136",s,!0,{sourceMap:!1,shadowMode:!1})},f2f4:function(t,e,n){"use strict";var s=n("ef58"),a=n.n(s);a.a}}]);
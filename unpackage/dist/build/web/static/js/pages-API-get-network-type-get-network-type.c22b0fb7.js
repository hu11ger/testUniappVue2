(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-network-type-get-network-type"],{"4fa2":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:"",connectedWifi:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var t=this;uni.getNetworkType({success:function(e){console.log(e),t.hasNetworkType=!0,t.networkType=e.subtype||e.networkType},fail:function(){uni.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType="",this.connectedWifi=""}}};e.default=i},"8f80":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={pageHead:n("abc4").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("网络状态")]),!1===t.hasNetworkType?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")]),n("v-uni-view",{staticClass:"uni-hello-text uni-center uni-common-mt"},[t._v("请点击下面按钮获取网络状态")])]:t._e(),!0===t.hasNetworkType?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v(t._s(t.networkType))])]:t._e(),!0===t.hasNetworkType&&"wifi"===t.networkType?n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{attrs:{value:t.connectedWifi}})],1):t._e()],2),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getNetworkType.apply(void 0,arguments)}}},[t._v("获取设备网络状态")]),n("v-uni-button",{staticClass:"uni-common-mt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)],1)},a=[]},"96bd":function(t,e,n){"use strict";n.r(e);var i=n("4fa2"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},bf68:function(t,e,n){"use strict";n.r(e);var i=n("8f80"),o=n("96bd");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var u=n("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"6186fd3a",null,!1,i["a"],void 0);e["default"]=c.exports}}]);
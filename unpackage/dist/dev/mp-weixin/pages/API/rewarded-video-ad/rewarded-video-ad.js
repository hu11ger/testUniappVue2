(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/rewarded-video-ad/rewarded-video-ad"],{707:function(e,n,o){"use strict";(function(e,n){var t=o(4);o(26),o(27),o(28);t(o(25));var r=t(o(708));e.__webpack_require_UNI_MP_PLUGIN__=o,n(r.default)}).call(this,o(1)["default"],o(2)["createPage"])},708:function(e,n,o){"use strict";o.r(n);var t=o(709),r=o(711);for(var d in r)["default"].indexOf(d)<0&&function(e){o.d(n,e,(function(){return r[e]}))}(d);o(713);var i,a=o(50),c=Object(a["default"])(r["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],i);c.options.__file="pages/API/rewarded-video-ad/rewarded-video-ad.vue",n["default"]=c.exports},709:function(e,n,o){"use strict";o.r(n);var t=o(710);o.d(n,"render",(function(){return t["render"]})),o.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(n,"components",(function(){return t["components"]}))},710:function(e,n,o){"use strict";var t;o.r(n),o.d(n,"render",(function(){return r})),o.d(n,"staticRenderFns",(function(){return i})),o.d(n,"recyclableRender",(function(){return d})),o.d(n,"components",(function(){return t}));try{t={pageHead:function(){return o.e("components/page-head/page-head").then(o.bind(null,1418))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},d=!1,i=[];r._withStripped=!0},711:function(e,n,o){"use strict";o.r(n);var t=o(712),r=o.n(t);for(var d in t)["default"].indexOf(d)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(d);n["default"]=r.a},712:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=[-5001,-5002,-5003,-5004,-5005,-5006],t={data:function(){return{title:"激励视频广告",loading:!1,loadError:!1}},onReady:function(){this.adOption={adUnitId:""},this.createAd()},methods:{createAd:function(){var n=this,t=this.rewardedVideoAd=e.createRewardedVideoAd(this.adOption);t.onLoad((function(){n.loading=!1,n.loadError=!1,console.log("onLoad event")})),t.onClose((function(o){n.loading=!0,o&&o.isEnded,console.log("onClose "+o.isEnded),setTimeout((function(){e.showToast({title:"激励视频"+(o.isEnded?"成功":"未")+"播放完毕",duration:1e4,position:"bottom"})}),500)})),t.onError((function(e){n.loading=!1,e.code&&-1!==o.indexOf(e.code)&&(n.loadError=!0),console.log("onError event",e)})),this.loading=!0},show:function(){var n=this.rewardedVideoAd;n.show().catch((function(){n.load().then((function(){return n.show()})).catch((function(n){console.log("激励视频 广告显示失败",n),e.showToast({title:n.errMsg||n.message,duration:5e3,position:"bottom"})}))}))},reloadAd:function(){this.loading=!0,this.rewardedVideoAd.load()}}};n.default=t}).call(this,o(2)["default"])},713:function(e,n,o){"use strict";o.r(n);var t=o(714),r=o.n(t);for(var d in t)["default"].indexOf(d)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(d);n["default"]=r.a},714:function(e,n,o){}},[[707,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/rewarded-video-ad/rewarded-video-ad.js.map
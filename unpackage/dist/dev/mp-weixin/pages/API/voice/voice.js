(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/voice/voice"],{550:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var o=r(t(551));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},551:function(e,n,t){"use strict";t.r(n);var r=t(552),o=t(554);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(557);var i,c=t(50),u=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);u.options.__file="pages/API/voice/voice.vue",n["default"]=u.exports},552:function(e,n,t){"use strict";t.r(n);var r=t(553);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},553:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1264))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,i=[];o._withStripped=!0},554:function(e,n,t){"use strict";t.r(n);var r=t(555),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},555:function(e,n,t){"use strict";(function(e){var r=t(4),o=t(13);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(29)),i=r(t(32)),c=l(t(556));function u(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(u=function(e){return e?t:n})(e)}function l(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=u(n);if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}var s=null,d=null,f=null,p=null,m={data:function(){return{title:"start/stopRecord、play/stopVoice",recording:!1,playing:!1,hasRecord:!1,tempFilePath:"",recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"}},onUnload:function(){this.end()},onLoad:function(){var n=this;p=e.createInnerAudioContext(),p.onEnded((function(){clearInterval(s);var e=0;console.log("play voice finished"),n.playing=!1,n.formatedPlayTime=c.formatTime(e),n.playTime=e})),f=e.getRecorderManager(),f.onStart((function(){console.log("recorder start"),n.recording=!0,d=setInterval((function(){n.recordTime+=1,n.formatedRecordTime=c.formatTime(n.recordTime)}),1e3)})),f.onStop((function(e){console.log("on stop"),p.src=e.tempFilePath,n.hasRecord=!0,n.recording=!1})),f.onError((function(){console.log("recorder onError")}))},methods:{startRecord:function(){return(0,i.default)(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f.start({format:"mp3"});case 1:case"end":return e.stop()}}),e)})))()},stopRecord:function(){f.stop(),clearInterval(d)},playVoice:function(){var e=this;console.log("play voice"),this.playing=!0,s=setInterval((function(){e.playTime+=1,e.formatedPlayTime=c.formatTime(e.playTime)}),1e3),p.play()},stopVoice:function(){clearInterval(s),this.playing=!1,this.formatedPlayTime=c.formatTime(0),this.playTime=0,p.stop()},end:function(){p.stop(),f.stop(),clearInterval(d),clearInterval(s),this.recording=!1,this.playing=!1,this.hasRecord=!1,this.playTime=0,this.recordTime=0,this.formatedRecordTime="00:00:00",this.formatedRecordTime="00:00:00"},clear:function(){this.end()}}};n.default=m}).call(this,t(2)["default"])},557:function(e,n,t){"use strict";t.r(n);var r=t(558),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},558:function(e,n,t){}},[[550,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/voice/voice.js.map
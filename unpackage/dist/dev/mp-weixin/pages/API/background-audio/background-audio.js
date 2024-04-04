(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/background-audio/background-audio"],{567:function(e,n,t){"use strict";(function(e,n){var a=t(4);t(26),t(27),t(28);a(t(25));var r=a(t(568));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},568:function(e,n,t){"use strict";t.r(n);var a=t(569),r=t(571);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t(573);var i,u=t(50),c=Object(u["default"])(r["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],i);c.options.__file="pages/API/background-audio/background-audio.vue",n["default"]=c.exports},569:function(e,n,t){"use strict";t.r(n);var a=t(570);t.d(n,"render",(function(){return a["render"]})),t.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(n,"components",(function(){return a["components"]}))},570:function(e,n,t){"use strict";var a;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return a}));try{a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1258))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},o=!1,i=[];r._withStripped=!0},571:function(e,n,t){"use strict";t.r(n);var a=t(572),r=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=r.a},572:function(e,n,t){"use strict";(function(e){var a=t(13);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(556));function o(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:n})(e)}function i(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=o(n);if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=i?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(r,u,c):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var u={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var n=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var t=e.getBackgroundAudioManager();t.title||(t.title="致爱丽丝"),t.singer||(t.singer="暂无"),t.coverImgUrl||(t.coverImgUrl="https://web-assets.dcloud.net.cn/unidoc/zh/Alice.jpeg"),t.onPlay((function(){console.log("开始播放"),n.$backgroundAudioData.playing=n.playing=!0})),t.onPause((function(){console.log("暂停播放"),n.$backgroundAudioData.playing=n.playing=!1})),t.onEnded((function(){n.playing=!1,n.$backgroundAudioData.playing=!1,n.$backgroundAudioData.playTime=n.playTime=0,n.$backgroundAudioData.formatedPlayTime=n.formatedPlayTime=r.formatTime(0)})),t.onTimeUpdate((function(e){Math.floor(t.currentTime)>Math.floor(n.playTime)&&(n.$backgroundAudioData.formatedPlayTime=n.formatedPlayTime=r.formatTime(Math.floor(t.currentTime))),n.$backgroundAudioData.playTime=n.playTime=t.currentTime})),this.bgAudioMannager=t},methods:{play:function(e){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(e){this.bgAudioMannager.seek(e.detail.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=r.formatTime(0)}}};n.default=u}).call(this,t(2)["default"])},573:function(e,n,t){"use strict";t.r(n);var a=t(574),r=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=r.a},574:function(e,n,t){}},[[567,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/background-audio/background-audio.js.map
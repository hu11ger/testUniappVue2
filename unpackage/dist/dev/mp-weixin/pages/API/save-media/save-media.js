(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/save-media/save-media"],{657:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27),t(28);o(t(25));var a=o(t(658));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t(1)["default"],t(2)["createPage"])},658:function(e,n,t){"use strict";t.r(n);var o=t(659),a=t(661);for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t(663);var i,s=t(50),r=Object(s["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);r.options.__file="pages/API/save-media/save-media.vue",n["default"]=r.exports},659:function(e,n,t){"use strict";t.r(n);var o=t(660);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},660:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return c})),t.d(n,"components",(function(){return o}));try{o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1258))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement;e._self._c},c=!1,i=[];a._withStripped=!0},661:function(e,n,t){"use strict";t.r(n);var o=t(662),a=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a},662:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"saveImage/saveVideo",imagePath:"",videoPath:""}},onLoad:function(){},methods:{videoErrorCallback:function(){e.showModal({content:"视频加载失败",showCancel:!1})},saveImage:function(){var n=this;e.chooseImage({count:1,sourceType:["camera"],success:function(e){n.imagePath=e.tempFilePaths[0],n.getTempFilePath(e.tempFilePaths[0],"imageTempPath")},fail:function(n){e.getSetting({success:function(n){var t=n.authSetting["scope.camera"];t||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机获取图片，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})},saveVideo:function(){var n=this;e.chooseVideo({count:1,sourceType:["camera"],success:function(e){console.log(e.tempFilePath),n.videoPath=e.tempFilePath,n.getTempFilePath(e.tempFilePath,"videoTempPath")},fail:function(n){e.getSetting({success:function(n){var t=n.authSetting["scope.camera"];t||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机获取视频，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})},getTempFilePath:function(n,t){var o={filePath:n,success:function(){console.log("save success"),e.showModal({content:"保存成功",showCancel:!1}),e.hideLoading()},fail:function(n){e.hideLoading(),e.showModal({content:"保存失败",showCancel:!1})}};e.showLoading({title:"保存中..."}),"videoTempPath"===t?e.saveVideoToPhotosAlbum(o):e.saveImageToPhotosAlbum(o)}}};n.default=t}).call(this,t(2)["default"])},663:function(e,n,t){"use strict";t.r(n);var o=t(664),a=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a},664:function(e,n,t){}},[[657,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/save-media/save-media.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/file/file"],{669:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var a=o(n(670));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},670:function(e,t,n){"use strict";n.r(t);var o=n(671),a=n(673);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n(675);var i,s=n(50),r=Object(s["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);r.options.__file="pages/API/file/file.vue",t["default"]=r.exports},671:function(e,t,n){"use strict";n.r(t);var o=n(672);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},672:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return c})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1438))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},c=!1,i=[];a._withStripped=!0},673:function(e,t,n){"use strict";n.r(t);var o=n(674),a=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=a.a},674:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=e.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var t=this;e.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0]},fail:function(t){e.getSetting({success:function(t){var n=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})},saveFile:function(){var t=this;this.tempFilePath.length>0?e.saveFile({tempFilePath:this.tempFilePath,success:function(n){t.savedFilePath=n.savedFilePath,e.setStorageSync("savedFilePath",n.savedFilePath),e.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(t){e.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(t),showCancel:!1})}}):e.showModal({content:"请选择文件",showCancel:!1})},clear:function(){e.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){e.downloadFile({url:"https://web-assets.dcloud.net.cn/unidoc/zh/helloworld.pdf",success:function(t){e.openDocument({filePath:t.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};t.default=n}).call(this,n(2)["default"])},675:function(e,t,n){"use strict";n.r(t);var o=n(676),a=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=a.a},676:function(e,t,n){}},[[669,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/file/file.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/video/video"],{641:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var a=r(t(642));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t(1)["default"],t(2)["createPage"])},642:function(e,n,t){"use strict";t.r(n);var r=t(643),a=t(645);for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t(647);var o,u=t(50),i=Object(u["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);i.options.__file="pages/API/video/video.vue",n["default"]=i.exports},643:function(e,n,t){"use strict";t.r(n);var r=t(644);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},644:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return c})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1326))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement;e._self._c},c=!1,o=[];a._withStripped=!0},645:function(e,n,t){"use strict";t.r(n);var r=t(646),a=t.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=a.a},646:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=[["camera"],["album"],["camera","album"]],r={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange:function(e){for(var n=0;n<this.cameraList.length;n++)if(this.cameraList[n].value===e.detail.value){this.cameraIndex=n;break}},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},chooseVideo:function(){var n=this;e.chooseVideo({camera:this.cameraList[this.cameraIndex].value,sourceType:t[this.sourceTypeIndex],success:function(e){n.src=e.tempFilePath},fail:function(t){e.getSetting({success:function(t){var r=!1;switch(n.sourceTypeIndex){case 0:r=t.authSetting["scope.camera"];break;case 1:r=t.authSetting["scope.album"];break;case 2:r=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];break;default:break}r||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取视频，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})}}};n.default=r}).call(this,t(2)["default"])},647:function(e,n,t){"use strict";t.r(n);var r=t(648),a=t.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=a.a},648:function(e,n,t){}},[[641,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/video/video.js.map
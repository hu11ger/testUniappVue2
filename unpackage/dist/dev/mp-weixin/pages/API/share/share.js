(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/share/share"],{427:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var a=r(t(428));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t(1)["default"],t(2)["createPage"])},428:function(e,n,t){"use strict";t.r(n);var r=t(429),a=t(431);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);var s,i=t(50),c=Object(i["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);c.options.__file="pages/API/share/share.vue",n["default"]=c.exports},429:function(e,n,t){"use strict";t.r(n);var r=t(430);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},430:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));try{r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1436))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement;e._self._c},o=!1,s=[];a._withStripped=!0},431:function(e,n,t){"use strict";t.r(n);var r=t(432),a=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},432:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(29)),o=r(t(32)),s={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://web-assets.dcloud.net.cn/unidoc/zh/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var n=this;e.getProvider({service:"share",success:function(e){console.log("success",e);for(var t=[],r=0;r<e.provider.length;r++)switch(e.provider[r]){case"weixin":t.push({name:"分享到微信好友",id:"weixin",sort:0}),t.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":t.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":t.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}n.providerList=t.sort((function(e,n){return e.sort-n.sort}))},fail:function(n){console.log("获取分享通道失败",n),e.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(n){var t=this;return(0,o.default)(a.default.mark((function r(){var o;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(console.log("分享通道:"+n.id+"； 分享类型:"+t.shareType),t.shareText||1!==t.shareType&&0!==t.shareType){r.next=4;break}return e.showModal({content:"分享内容不能为空",showCancel:!1}),r.abrupt("return");case 4:if(t.image||2!==t.shareType&&0!==t.shareType){r.next=7;break}return e.showModal({content:"分享图片不能为空",showCancel:!1}),r.abrupt("return");case 7:o={provider:n.id,scene:n.type&&"WXSceneTimeline"===n.type?"WXSceneTimeline":"WXSceneSession",type:t.shareType,success:function(n){console.log("success",n),e.showModal({content:"已分享",showCancel:!1})},fail:function(n){console.log("fail",n),e.showModal({content:n.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}},r.t0=t.shareType,r.next=0===r.t0?11:1===r.t0?16:2===r.t0?18:5===r.t0?20:24;break;case 11:return o.summary=t.shareText,o.imageUrl=t.image,o.title="欢迎体验uniapp",o.href="https://uniapp.dcloud.io",r.abrupt("break",25);case 16:return o.summary=t.shareText,r.abrupt("break",25);case 18:return o.imageUrl=t.image,r.abrupt("break",25);case 20:return o.imageUrl=t.image?t.image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png",o.title="欢迎体验uniapp",o.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},r.abrupt("break",25);case 24:return r.abrupt("break",25);case 25:if(0!==o.type||"iOS"!==plus.os.name){r.next=29;break}return r.next=28,t.compress();case 28:o.imageUrl=r.sent;case 29:1===o.type&&"qq"===o.provider&&(o.href="https://uniapp.dcloud.io",o.title="欢迎体验uniapp"),e.share(o);case 31:case"end":return r.stop()}}),r)})))()},radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var n=this;e.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(e){n.image=e.tempFilePaths[0]},fail:function(n){e.getSetting({success:function(n){var t=n.authSetting["scope.album"]&&n.authSetting["scope.camera"];t||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})},compress:function(){console.log("开始压缩");var n=this.image;return new Promise((function(t){var r=plus.io.convertAbsoluteFileSystem(n.replace("file://",""));console.log("after"+r),plus.io.resolveLocalFileSystemURL(r,(function(r){r.file((function(r){console.log("getFile:"+JSON.stringify(r)),r.size>20480&&plus.zip.compressImage({src:n,dst:n.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},(function(e){console.log("success zip****"+e.size);var r=n.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");t(r)}),(function(n){e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}),(function(n){console.log("Resolve file URL failed: "+n.message),e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}}};n.default=s}).call(this,t(2)["default"])}},[[427,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/share/share.js.map
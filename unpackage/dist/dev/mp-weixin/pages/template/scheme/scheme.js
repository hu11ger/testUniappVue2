(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/scheme/scheme"],{1310:function(e,n,t){"use strict";(function(e,n){var a=t(4);t(26),t(27),t(28);a(t(25));var o=a(t(1311));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},1311:function(e,n,t){"use strict";t.r(n);var a=t(1312),o=t(1314);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t(1316);var u,r=t(50),c=Object(r["default"])(o["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],u);c.options.__file="pages/template/scheme/scheme.vue",n["default"]=c.exports},1312:function(e,n,t){"use strict";t.r(n);var a=t(1313);t.d(n,"render",(function(){return a["render"]})),t.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(n,"components",(function(){return a["components"]}))},1313:function(e,n,t){"use strict";var a;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return a}));try{a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,1438))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},i=!1,u=[];o._withStripped=!0},1314:function(e,n,t){"use strict";t.r(n);var a=t(1315),o=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a},1315:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{}},methods:{openBrowser:function(e){plus.runtime.openURL(e)},openMarket:function(e){var n;n="Android"==plus.os.name?"market://details?id=io.dcloud.hellouniapp":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253","undefined"==typeof e?plus.runtime.openURL(n,(function(e){console.log(e)})):"Android"==plus.os.name?plus.runtime.openURL(n,(function(e){plus.nativeUI.alert("本机没有安装应用宝")}),e):plus.nativeUI.alert("仅Android手机才支持应用宝")},openTaobao:function(n){plus.runtime.openURL(n,(function(n){e.showModal({content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",success:function(e){e.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})}))},openMap:function(){var e="";if("Android"==plus.os.name){var n=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),t=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),a="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",o="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";t&&n?plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]},(function(e){switch(e.index){case 1:plus.runtime.openURL(a);break;case 2:plus.runtime.openURL(o);break}})):t?plus.runtime.openURL(o):n?plus.runtime.openURL(a):(e="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(e))}else plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]},(function(n){switch(console.log("e.index: "+n.index),n.index){case 1:e="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:e="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:e="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";break;default:break}""!=e&&plus.runtime.openURL(e,(function(e){plus.nativeUI.alert("本机未安装指定的地图应用")}))}))},openQQ:function(e){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+e.detail.value.qqNumType+"&uin="+e.detail.value.qqNum,(function(e){plus.nativeUI.alert("本机没有安装QQ，无法启动")}))}}};n.default=t}).call(this,t(2)["default"])},1316:function(e,n,t){"use strict";t.r(n);var a=t(1317),o=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a},1317:function(e,n,t){}},[[1310,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/scheme/scheme.js.map
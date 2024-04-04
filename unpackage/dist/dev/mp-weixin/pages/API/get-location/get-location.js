(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-location/get-location"],{601:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var r=o(n(602));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n(1)["default"],n(2)["createPage"])},602:function(e,t,n){"use strict";n.r(t);var o=n(603),r=n(605);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(607);var c,u=n(50),a=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);a.options.__file="pages/API/get-location/get-location.vue",t["default"]=a.exports},603:function(e,t,n){"use strict";n.r(t);var o=n(604);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},604:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1256))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,1269))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},i=!1,c=[];r._withStripped=!0},605:function(e,t,n){"use strict";n.r(t);var o=n(606),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},606:function(e,t,n){"use strict";(function(e){var o=n(4),r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(29)),c=o(n(32)),u=s(n(556));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=i?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(o,c,u):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}var f=u.formatLocation,l={data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(e){this.type=e},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var e=this;return(0,c.default)(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSetting();case 2:if(n=t.sent,2!==n){t.next=6;break}return e.showConfirm(),t.abrupt("return");case 6:e.doGetLocation();case 7:case"end":return t.stop()}}),t)})))()},doGetLocation:function(){var t=this;e.getLocation({success:function(e){t.hasLocation=!0,t.location=f(e.longitude,e.latitude)},fail:function(t){t.errMsg.indexOf("auth deny")>=0?e.showToast({title:"访问位置被拒绝"}):e.showToast({title:t.errMsg})}})},getSetting:function(){return new Promise((function(t,n){e.getSetting({success:function(e){void 0!==e.authSetting["scope.userLocation"]?e.authSetting["scope.userLocation"]?t(1):t(2):t(0)}})}))},openSetting:function(){var t=this;this.hideConfirm(),e.openSetting({success:function(e){e.authSetting&&e.authSetting["scope.userLocation"]&&t.doGetLocation()},fail:function(e){}})},checkPermission:function(){return(0,c.default)(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!permision.isIOS){t.next=6;break}return t.next=3,permision.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return n=t.t0,null===n||1===n?n=1:2===n?e.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(e){}}):n.code?e.showModal({content:n.message}):e.showModal({content:"需要定位权限",confirmText:"设置",success:function(e){e.confirm&&permision.gotoAppSetting()}}),t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))()},clear:function(){this.hasLocation=!1}}};t.default=l}).call(this,n(2)["default"])},607:function(e,t,n){"use strict";n.r(t);var o=n(608),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},608:function(e,t,n){}},[[601,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/get-location/get-location.js.map
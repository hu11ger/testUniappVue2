(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/api-set-tabbar"],{1257:function(e,t,a){"use strict";a.r(t);var n=a(1258),r=a(1260);for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a(1262);var s,d=a(50),i=Object(d["default"])(r["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],s);i.options.__file="components/api-set-tabbar.nvue",t["default"]=i.exports},1258:function(e,t,a){"use strict";a.r(t);var n=a(1259);a.d(t,"render",(function(){return n["render"]})),a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),a.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),a.d(t,"components",(function(){return n["components"]}))},1259:function(e,t,a){"use strict";var n;a.r(t),a.d(t,"render",(function(){return r})),a.d(t,"staticRenderFns",(function(){return s})),a.d(t,"recyclableRender",(function(){return o})),a.d(t,"components",(function(){return n}));try{n={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,1264))}}}catch(d){if(-1===d.message.indexOf("Cannot find module")||-1===d.message.indexOf(".vue"))throw d;console.error(d.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},o=!1,s=[];r._withStripped=!0},1260:function(e,t,a){"use strict";a.r(t);var n=a(1261),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},1261:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"tababr",hasSetTabBarBadge:!1,hasShownTabBarRedDot:!1,hasCustomedStyle:!1,hasCustomedItem:!1,hasHiddenTabBar:!1}},destroyed:function(){if(this.hasSetTabBarBadge&&e.removeTabBarBadge({index:1}),this.hasShownTabBarRedDot&&e.hideTabBarRedDot({index:1}),this.hasHiddenTabBar&&e.showTabBar(),this.hasCustomedStyle&&e.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}),this.hasCustomedItem){var t={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};e.setTabBarItem(t)}},methods:{navigateBack:function(){this.$emit("unmount")},setTabBarBadge:function(){this.hasShownTabBarRedDot&&(e.hideTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot),this.hasSetTabBarBadge?e.removeTabBarBadge({index:1}):e.setTabBarBadge({index:1,text:"1"}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge},showTabBarRedDot:function(){this.hasSetTabBarBadge&&(e.removeTabBarBadge({index:1}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge),this.hasShownTabBarRedDot?e.hideTabBarRedDot({index:1}):e.showTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot},hideTabBar:function(){this.hasHiddenTabBar?e.showTabBar():e.hideTabBar(),this.hasHiddenTabBar=!this.hasHiddenTabBar},customStyle:function(){this.hasCustomedStyle?e.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}):e.setTabBarStyle({color:"#FFF",selectedColor:"#007AFF",backgroundColor:"#000000",borderStyle:"black"}),this.hasCustomedStyle=!this.hasCustomedStyle},customItem:function(){var t={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};this.hasCustomedItem||(t.text="API"),e.setTabBarItem(t),this.hasCustomedItem=!this.hasCustomedItem}}};t.default=a}).call(this,a(2)["default"])},1262:function(e,t,a){"use strict";a.r(t);var n=a(1263),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},1263:function(e,t,a){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/api-set-tabbar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/api-set-tabbar-create-component',
    {
        'components/api-set-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1257))
        })
    },
    [['components/api-set-tabbar-create-component']]
]);

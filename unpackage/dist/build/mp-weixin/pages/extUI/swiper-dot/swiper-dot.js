(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swiper-dot/swiper-dot"],{1193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{},swiperDotIndex:0}},onLoad:function(){},methods:{change:function(e){this.current=e.detail.current},selectStyle:function(e){this.dotsStyles=this.dotStyle[e],this.styleIndex=e},selectMode:function(e,t){this.mode=e,this.modeIndex=t,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]},clickItem:function(e){this.swiperDotIndex=e},onBanner:function(e){console.log(22222,e)}}};t.default=o},5539:function(e,t,n){"use strict";var o=n("6061"),c=n.n(o);c.a},6061:function(e,t,n){},"8a04":function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("b145"),n("4a2a"),n("a9ff");o(n("66fd"));var c=o(n("b2ce"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"8c80":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={uniSwiperDot:function(){return n.e("uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"4c23"))},uniSection:function(){return n.e("uni_modules/uni-section/components/uni-section/uni-section").then(n.bind(null,"e0e2"))}},c=function(){var e=this.$createElement;this._self._c},r=[]},ae6f:function(e,t,n){},b2ce:function(e,t,n){"use strict";n.r(t);var o=n("8c80"),c=n("ee4b");for(var r in c)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(r);n("cf54"),n("5539");var i=n("f0c5"),u=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=u.exports},cf54:function(e,t,n){"use strict";var o=n("ae6f"),c=n.n(o);c.a},ee4b:function(e,t,n){"use strict";n.r(t);var o=n("1193"),c=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=c.a}},[["8a04","common/runtime","common/vendor"]]]);
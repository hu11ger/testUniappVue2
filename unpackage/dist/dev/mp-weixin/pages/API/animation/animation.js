(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/animation/animation"],{477:function(t,n,a){"use strict";(function(t,n){var e=a(4);a(26),a(27),a(28);e(a(25));var i=e(a(478));t.__webpack_require_UNI_MP_PLUGIN__=a,n(i.default)}).call(this,a(1)["default"],a(2)["createPage"])},478:function(t,n,a){"use strict";a.r(n);var e=a(479),i=a(481);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a(483);var r,s=a(50),c=Object(s["default"])(i["default"],e["render"],e["staticRenderFns"],!1,null,null,null,!1,e["components"],r);c.options.__file="pages/API/animation/animation.vue",n["default"]=c.exports},479:function(t,n,a){"use strict";a.r(n);var e=a(480);a.d(n,"render",(function(){return e["render"]})),a.d(n,"staticRenderFns",(function(){return e["staticRenderFns"]})),a.d(n,"recyclableRender",(function(){return e["recyclableRender"]})),a.d(n,"components",(function(){return e["components"]}))},480:function(t,n,a){"use strict";var e;a.r(n),a.d(n,"render",(function(){return i})),a.d(n,"staticRenderFns",(function(){return r})),a.d(n,"recyclableRender",(function(){return o})),a.d(n,"components",(function(){return e}));try{e={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,1326))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement;t._self._c},o=!1,r=[];i._withStripped=!0},481:function(t,n,a){"use strict";a.r(n);var e=a(482),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},482:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"createAnimation",animationData:""}},onUnload:function(){this.animationData=""},onLoad:function(){this.animation=t.createAnimation()},methods:{rotate:function(){this.animation.rotate(720*Math.random()-360).step(),this.animationData=this.animation.export()},scale:function(){this.animation.scale(2*Math.random()).step(),this.animationData=this.animation.export()},translate:function(){this.animation.translate(100*Math.random()-50,100*Math.random()-50).step(),this.animationData=this.animation.export()},skew:function(){this.animation.skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},rotateAndScale:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).step(),this.animationData=this.animation.export()},rotateThenScale:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step(),this.animationData=this.animation.export()},all:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).translate(100*Math.random()-50,100*Math.random()-50).skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},allInQueue:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step().translate(100*Math.random()-50,100*Math.random()-50).step().skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},reset:function(){this.animation.rotate(0,0).scale(1).translate(0,0).skew(0,0).step({duration:0}),this.animationData=this.animation.export()}}};n.default=a}).call(this,a(2)["default"])},483:function(t,n,a){"use strict";a.r(n);var e=a(484),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},484:function(t,n,a){}},[[477,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/animation/animation.js.map
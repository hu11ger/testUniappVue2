(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/canvas/canvas"],{357:function(t,n,e){"use strict";(function(t,n){var a=e(4);e(26),e(27),e(28);a(e(25));var i=a(e(358));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e(1)["default"],e(2)["createPage"])},358:function(t,n,e){"use strict";e.r(n);var a=e(359),i=e(361);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e(363);var r,c=e(50),o=Object(c["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],r);o.options.__file="pages/component/canvas/canvas.vue",n["default"]=o.exports},359:function(t,n,e){"use strict";e.r(n);var a=e(360);e.d(n,"render",(function(){return a["render"]})),e.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),e.d(n,"components",(function(){return a["components"]}))},360:function(t,n,e){"use strict";var a;e.r(n),e.d(n,"render",(function(){return i})),e.d(n,"staticRenderFns",(function(){return r})),e.d(n,"recyclableRender",(function(){return s})),e.d(n,"components",(function(){return a}));try{a={pageHead:function(){return e.e("components/page-head/page-head").then(e.bind(null,1461))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement;t._self._c},s=!1,r=[];i._withStripped=!0},361:function(t,n,e){"use strict";e.r(n);var a=e(362),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},362:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=null,a=null;function i(t,n,e,a,i,s,r){this.canvasWidth=i,this.canvasHeight=s,this.ctx=r,this.x=t,this.y=n,this.vx=e,this.vy=a,this.radius=5}function s(t,n){return Math.pow(Math.pow(t,2)+Math.pow(n,2),.5)}i.prototype.draw=function(){this.ctx.setFillStyle("#007AFF"),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},i.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var r={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var n=this;this.$nextTick((function(){t.createSelectorQuery().select(".canvas").boundingClientRect((function(a){n.canvasWidth=a.width,e=t.createCanvasContext("canvas"),n.drawBall()})).exec()}))},onUnload:function(){clearInterval(a)},methods:{drawBall:function(){for(var t=this.canvasWidth,n=this.canvasWidth,r=3,c=[],o=3,u=20,d=0;d<o;d++)for(var h=s(t/2,n/2)/o*d,l=0;l<u;l++){var f=2*l*Math.PI/u,v=Math.sin(f),p=Math.cos(f),x=h*p+t/2,m=h*v+n/2,y=r*p,b=r*v;c.push(new i(x,m,y,b,t,n,e))}function g(t){t.forEach((function(t){t.move(),t.draw()})),e.draw()}a=setInterval((function(){g(c)}),17)}}};n.default=r}).call(this,e(2)["default"])},363:function(t,n,e){"use strict";e.r(n);var a=e(364),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},364:function(t,n,e){}},[[357,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/component/canvas/canvas.js.map
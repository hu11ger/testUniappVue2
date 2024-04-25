(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/canvas/canvas"],{501:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26),n(27),n(28);o(n(25));var r=o(n(502));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n(1)["default"],n(2)["createPage"])},502:function(e,t,n){"use strict";n.r(t);var o=n(503),r=n(505);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(507);var a,c=n(50),s=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);s.options.__file="pages/API/canvas/canvas.vue",t["default"]=s.exports},503:function(e,t,n){"use strict";n.r(t);var o=n(504);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},504:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1418))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},i=!1,a=[];r._withStripped=!0},505:function(e,t,n){"use strict";n.r(t);var o=n(506),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},506:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,o={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){n=e.createCanvasContext("canvas",this)},methods:{toTempFilePath:function(){e.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(e.tempFilePath)},fail:function(e){console.error(JSON.stringify(e))}})},handleCanvasButton:function(e){this[e]&&this[e]()},rotate:function(){n.beginPath(),n.rotate(10*Math.PI/180),n.rect(225,75,20,10),n.fill(),n.draw()},scale:function(){n.beginPath(),n.rect(25,25,50,50),n.stroke(),n.scale(2,2),n.beginPath(),n.rect(25,25,50,50),n.stroke(),n.draw()},reset:function(){n.beginPath(),n.setFillStyle("#000000"),n.setStrokeStyle("#000000"),n.setFontSize(10),n.setGlobalAlpha(1),n.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),n.setLineCap("butt"),n.setLineJoin("miter"),n.setLineWidth(1),n.setMiterLimit(10),n.draw()},translate:function(){n.beginPath(),n.rect(10,10,100,50),n.fill(),n.translate(70,70),n.beginPath(),n.fill(),n.draw()},save:function(){n.beginPath(),n.setStrokeStyle("#00ff00"),n.save(),n.scale(2,2),n.setStrokeStyle("#ff0000"),n.rect(0,0,100,100),n.stroke(),n.restore(),n.rect(0,0,50,50),n.stroke(),n.draw()},restore:function(){[3,2,1].forEach((function(e){n.beginPath(),n.save(),n.scale(e,e),n.rect(10,10,100,100),n.stroke(),n.restore()})),n.draw()},drawImage:function(){n.drawImage("../../../static/uni.png",0,0),n.draw()},fillText:function(){n.setStrokeStyle("#ff0000"),n.beginPath(),n.moveTo(0,10),n.lineTo(300,10),n.stroke(),n.setFontSize(10),n.fillText("Hello World",0,30),n.setFontSize(20),n.fillText("Hello World",100,30),n.beginPath(),n.moveTo(0,30),n.lineTo(300,30),n.stroke(),n.draw()},fill:function(){n.beginPath(),n.rect(20,20,150,100),n.setStrokeStyle("#00ff00"),n.fill(),n.draw()},stroke:function(){n.beginPath(),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.setStrokeStyle("#00ff00"),n.stroke(),n.draw()},clearRect:function(){n.setFillStyle("#ff0000"),n.beginPath(),n.rect(0,0,300,150),n.fill(),n.clearRect(20,20,100,50),n.draw()},beginPath:function(){n.beginPath(),n.setLineWidth(5),n.setStrokeStyle("#ff0000"),n.moveTo(0,75),n.lineTo(250,75),n.stroke(),n.beginPath(),n.setStrokeStyle("#0000ff"),n.moveTo(50,0),n.lineTo(150,130),n.stroke(),n.draw()},closePath:function(){n.beginPath(),n.setLineWidth(1),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.closePath(),n.stroke(),n.draw()},moveTo:function(){n.beginPath(),n.moveTo(0,0),n.lineTo(300,150),n.stroke(),n.draw()},lineTo:function(){n.beginPath(),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.stroke(),n.draw()},rect:function(){n.beginPath(),n.rect(20,20,150,100),n.stroke(),n.draw()},arc:function(){n.beginPath(),n.setLineWidth(2),n.arc(75,75,50,0,2*Math.PI,!0),n.moveTo(110,75),n.arc(75,75,35,0,Math.PI,!1),n.moveTo(65,65),n.arc(60,65,5,0,2*Math.PI,!0),n.moveTo(95,65),n.arc(90,65,5,0,2*Math.PI,!0),n.stroke(),n.draw()},quadraticCurveTo:function(){n.beginPath(),n.moveTo(20,20),n.quadraticCurveTo(20,100,200,20),n.stroke(),n.draw()},bezierCurveTo:function(){n.beginPath(),n.moveTo(20,20),n.bezierCurveTo(20,100,200,100,200,20),n.stroke(),n.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach((function(e,t){n.setFillStyle(e),n.beginPath(),n.rect(0+75*t,0,50,50),n.fill()})),n.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach((function(e,t){n.setStrokeStyle(e),n.beginPath(),n.rect(0+75*t,0,50,50),n.stroke()})),n.draw()},setGlobalAlpha:function(){n.setFillStyle("#000000"),[1,.5,.1].forEach((function(e,t){n.setGlobalAlpha(e),n.beginPath(),n.rect(0+75*t,0,50,50),n.fill()})),n.draw(),n.setGlobalAlpha(1)},setShadow:function(){n.beginPath(),n.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),n.rect(10,10,100,100),n.fill(),n.draw()},setFontSize:function(){[10,20,30,40].forEach((function(e,t){n.setFontSize(e),n.fillText("Hello, world",20,20+40*t)})),n.draw()},setLineCap:function(){n.setLineWidth(10),["butt","round","square"].forEach((function(e,t){n.beginPath(),n.setLineCap(e),n.moveTo(20,20+20*t),n.lineTo(100,20+20*t),n.stroke()})),n.draw()},setLineJoin:function(){n.setLineWidth(10),["bevel","round","miter"].forEach((function(e,t){n.beginPath(),n.setLineJoin(e),n.moveTo(20+80*t,20),n.lineTo(100+80*t,50),n.lineTo(20+80*t,100),n.stroke()})),n.draw()},setLineWidth:function(){[2,4,6,8,10].forEach((function(e,t){n.beginPath(),n.setLineWidth(e),n.moveTo(20,20+20*t),n.lineTo(100,20+20*t),n.stroke()})),n.draw()},setMiterLimit:function(){n.setLineWidth(4),[2,4,6,8,10].forEach((function(e,t){n.beginPath(),n.setMiterLimit(e),n.moveTo(20+80*t,20),n.lineTo(100+80*t,50),n.lineTo(20+80*t,100),n.stroke()})),n.draw()}}};t.default=o}).call(this,n(2)["default"])},507:function(e,t,n){"use strict";n.r(t);var o=n(508),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},508:function(e,t,n){}},[[501,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/canvas/canvas.js.map
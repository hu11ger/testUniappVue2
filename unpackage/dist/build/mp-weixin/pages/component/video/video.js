(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/video/video"],{3265:function(e,t,n){"use strict";n.r(t);var a=n("7e0a"),o=n("fea5");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("e547");var i=n("f0c5"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=r.exports},"6ae7":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("b145"),n("4a2a"),n("a9ff");a(n("66fd"));var o=a(n("3265"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"7e0a":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"abc4"))}},o=function(){var e=this.$createElement;this._self._c},u=[]},a1a8:function(e,t,n){},cbd2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"video",src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:"",showVideo:!1}},onReady:function(t){this.videoContext=e.createVideoContext("myVideo"),this.showVideo=!0},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){e.showModal({content:t.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var e=[],t=0;t<3;++t){var n=Math.floor(256*Math.random()).toString(16);n=1==n.length?"0"+n:n,e.push(n)}return"#"+e.join("")}}};t.default=n}).call(this,n("543d")["default"])},e547:function(e,t,n){"use strict";var a=n("a1a8"),o=n.n(a);o.a},fea5:function(e,t,n){"use strict";n.r(t);var a=n("cbd2"),o=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=o.a}},[["6ae7","common/runtime","common/vendor"]]]);
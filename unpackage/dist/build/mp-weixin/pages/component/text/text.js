(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/text/text"],{"03fc":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("b145"),n("4a2a"),n("a9ff");i(n("66fd"));var a=i(n("392f"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},1805:function(t,e,n){"use strict";n.r(e);var i=n("c551"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},"392f":function(t,e,n){"use strict";n.r(e);var i=n("a77e4"),a=n("1805");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("ca1b");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},a77e4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"abc4"))}},a=function(){var t=this.$createElement;this._self._c},c=[]},c551:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{title:"text",texts:["HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","......"],text:"",canAdd:!0,canRemove:!1,extraLine:[]}},methods:{add:function(t){this.extraLine.push(this.texts[this.extraLine.length%12]),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0},remove:function(t){this.extraLine.length>0&&(this.extraLine.pop(),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0)}}}},ca1b:function(t,e,n){"use strict";var i=n("ec2c"),a=n.n(i);a.a},ec2c:function(t,e,n){}},[["03fc","common/runtime","common/vendor"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-navigator-navigator"],{"0bb4":function(t,e,a){"use strict";a("7a82");var n=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f3f3")),r=a("26cb"),u={data:function(){return{title:"navigator"}},computed:(0,i.default)({},(0,r.mapState)({hasLeftWin:function(t){return!t.noMatchLeftWindow}}))};e.default=u},"1e37":function(t,e,a){"use strict";a.r(e);var n=a("0bb4"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"83f4":function(t,e,a){"use strict";a.r(e);var n=a("947c"),i=a("1e37");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=o.exports},"947c":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={pageHead:a("abc4").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:this.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-navigator",{attrs:{url:"navigate/navigate?title=navigate","hover-class":"navigator-hover"}},[e("v-uni-button",{attrs:{type:"default"}},[this._v("跳转到新页面")])],1),e("v-uni-navigator",{attrs:{url:"redirect/redirect?title=redirect","open-type":"redirect","hover-class":"other-navigator-hover"}},[e("v-uni-button",{attrs:{type:"default"}},[this._v("在当前页打开")])],1),this.hasLeftWin?this._e():e("v-uni-navigator",{attrs:{url:"/pages/tabBar/extUI/extUI","open-type":"switchTab","hover-class":"other-navigator-hover"}},[e("v-uni-button",{attrs:{type:"default"}},[this._v("跳转tab页面")])],1)],1)],1)],1)},r=[]}}]);
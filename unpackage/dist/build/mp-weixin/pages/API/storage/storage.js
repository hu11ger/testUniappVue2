(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/storage/storage"],{1819:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var n={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,"abc4"))}},o=function(){var t=this.$createElement;this._self._c},c=[]},"3fbc":function(t,e,a){},9526:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.detail.value},dataChange:function(t){this.data=t.detail.value},getStorage:function(){var e=this.key;this.data;0===e.length?t.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):t.getStorage({key:e,success:function(e){t.showModal({title:"读取数据成功",content:"data: '"+e.data+"'",showCancel:!1})},fail:function(){t.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var e=this.key,a=this.data;0===e.length?t.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):t.setStorage({key:e,data:a,success:function(e){t.showModal({title:"存储数据成功",content:JSON.stringify(e.errMsg),showCancel:!1})},fail:function(){t.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){t.clearStorageSync(),this.key="",this.data="",t.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};e.default=a}).call(this,a("543d")["default"])},a55e:function(t,e,a){"use strict";(function(t,e){var n=a("4ea4");a("b145"),a("4a2a"),a("a9ff");n(a("66fd"));var o=n(a("af9c"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(o.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},abf3:function(t,e,a){"use strict";a.r(e);var n=a("9526"),o=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=o.a},af9c:function(t,e,a){"use strict";a.r(e);var n=a("1819"),o=a("abf3");for(var c in o)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(c);a("e9ed");var i=a("f0c5"),u=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=u.exports},e9ed:function(t,e,a){"use strict";var n=a("3fbc"),o=a.n(n);o.a}},[["a55e","common/runtime","common/vendor"]]]);
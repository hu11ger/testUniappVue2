(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form/form"],{3784:function(e,n,t){"use strict";t.r(n);var a=t("9698"),o=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},"65f8":function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("b145"),t("4a2a"),t("a9ff");a(t("66fd"));var o=a(t("ad1a"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"69b8":function(e,n,t){"use strict";var a=t("9dad"),o=t.n(a);o.a},9698:function(e,n,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("4405")),r={data:function(){return{}},methods:{formSubmit:function(n){console.log("form发生了submit事件，携带数据为："+JSON.stringify(n.detail.value));var t=n.detail.value,a=o.default.check(t,[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}]);a?e.showToast({title:"验证通过!",icon:"none"}):e.showToast({title:o.default.error,icon:"none"})},formReset:function(e){console.log("清空数据")}}};n.default=r}).call(this,t("543d")["default"])},"9dad":function(e,n,t){},ad1a:function(e,n,t){"use strict";t.r(n);var a=t("af23"),o=t("3784");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("69b8");var c=t("f0c5"),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=u.exports},af23:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"abc4"))}},o=function(){var e=this.$createElement;this._self._c},r=[]}},[["65f8","common/runtime","common/vendor"]]]);
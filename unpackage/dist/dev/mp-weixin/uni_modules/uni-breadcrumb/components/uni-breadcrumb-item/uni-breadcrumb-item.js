(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item"],{1551:function(n,e,t){"use strict";t.r(e);var r=t(1552),u=t(1554);for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t(1556);var a,c=t(50),o=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);o.options.__file="uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item.vue",e["default"]=o.exports},1552:function(n,e,t){"use strict";t.r(e);var r=t(1553);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},1553:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return a})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},i=!1,a=[];u._withStripped=!0},1554:function(n,e,t){"use strict";t.r(e);var r=t(1555),u=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},1555:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{currentPage:""}},options:{virtualHost:!0},props:{to:{type:String,default:""},replace:{type:Boolean,default:!1}},inject:{uniBreadcrumb:{from:"uniBreadcrumb",default:null}},created:function(){var n=getCurrentPages(),e=n[n.length-1];e&&(this.currentPage="/".concat(e.route))},computed:{separator:function(){return this.uniBreadcrumb.separator},separatorClass:function(){return this.uniBreadcrumb.separatorClass}},methods:{navTo:function(){var e=this.to;e&&this.currentPage!==e&&(this.replace?n.redirectTo({url:e}):n.navigateTo({url:e}))}}};e.default=t}).call(this,t(2)["default"])},1556:function(n,e,t){"use strict";t.r(e);var r=t(1557),u=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},1557:function(n,e,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item-create-component',
    {
        'uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1551))
        })
    },
    [['uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item-create-component']]
]);

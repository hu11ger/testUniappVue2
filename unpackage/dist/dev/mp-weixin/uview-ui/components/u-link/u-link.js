(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-link/u-link"],{1296:function(n,e,t){"use strict";t.r(e);var r=t(1297),u=t(1299);for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t(1301);var o,c=t(50),f=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"e1732180",null,!1,r["components"],o);f.options.__file="uview-ui/components/u-link/u-link.vue",e["default"]=f.exports},1297:function(n,e,t){"use strict";t.r(e);var r=t(1298);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},1298:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return o})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},i=!1,o=[];u._withStripped=!0},1299:function(n,e,t){"use strict";t.r(e);var r=t(1300),u=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},1300:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"u-link",props:{color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""}},methods:{openLink:function(){var e=this;n.setClipboardData({data:this.href,success:function(){n.hideToast(),e.$nextTick((function(){e.$u.toast(e.mpTips)}))}})}}};e.default=t}).call(this,t(2)["default"])},1301:function(n,e,t){"use strict";t.r(e);var r=t(1302),u=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},1302:function(n,e,t){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-link/u-link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-link/u-link-create-component',
    {
        'uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1296))
        })
    },
    [['uview-ui/components/u-link/u-link-create-component']]
]);

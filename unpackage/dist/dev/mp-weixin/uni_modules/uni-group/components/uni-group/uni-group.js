(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-group/components/uni-group/uni-group"],{1542:function(n,t,e){"use strict";e.r(t);var r=e(1543),u=e(1545);for(var i in u)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e(1547);var o,c=e(50),a=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);a.options.__file="uni_modules/uni-group/components/uni-group/uni-group.vue",t["default"]=a.exports},1543:function(n,t,e){"use strict";e.r(t);var r=e(1544);e.d(t,"render",(function(){return r["render"]})),e.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(t,"components",(function(){return r["components"]}))},1544:function(n,t,e){"use strict";var r;e.r(t),e.d(t,"render",(function(){return u})),e.d(t,"staticRenderFns",(function(){return o})),e.d(t,"recyclableRender",(function(){return i})),e.d(t,"components",(function(){return r}));var u=function(){var n=this,t=n.$createElement;n._self._c},i=!1,o=[];u._withStripped=!0},1545:function(n,t,e){"use strict";e.r(t);var r=e(1546),u=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=u.a},1546:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"uniGroup",emits:["click"],props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"},stat:{type:Boolean,default:!1}},data:function(){return{margin:!1,border:!1}},watch:{title:function(t){n.report&&this.stat&&""!==t&&n.report("title",t)}},created:function(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm:function(){var n=this.$parent,t=n.$options.name;while("uniForms"!==t){if(n=n.$parent,!n)return!1;t=n.$options.name}return n},onClick:function(){this.$emit("click")}}};t.default=e}).call(this,e(2)["default"])},1547:function(n,t,e){"use strict";e.r(t);var r=e(1548),u=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=u.a},1548:function(n,t,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-group/components/uni-group/uni-group.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-group/components/uni-group/uni-group-create-component',
    {
        'uni_modules/uni-group/components/uni-group/uni-group-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1542))
        })
    },
    [['uni_modules/uni-group/components/uni-group/uni-group-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-group/components/uni-group/uni-group"],{"00d7":function(t,n,e){"use strict";e.r(n);var i=e("42c2"),r=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=r.a},"17e6":function(t,n,e){"use strict";e.r(n);var i=e("4825"),r=e("00d7");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("59b9");var o=e("f0c5"),a=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=a.exports},"42c2":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniGroup",emits:["click"],props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"},stat:{type:Boolean,default:!1}},data:function(){return{margin:!1,border:!1}},watch:{title:function(n){t.report&&this.stat&&""!==n&&t.report("title",n)}},created:function(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm:function(){var t=this.$parent,n=t.$options.name;while("uniForms"!==n){if(t=t.$parent,!t)return!1;n=t.$options.name}return t},onClick:function(){this.$emit("click")}}};n.default=e}).call(this,e("543d")["default"])},4825:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},r=[]},"59b9":function(t,n,e){"use strict";var i=e("80b1"),r=e.n(i);r.a},"80b1":function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-group/components/uni-group/uni-group-create-component',
    {
        'uni_modules/uni-group/components/uni-group/uni-group-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("17e6"))
        })
    },
    [['uni_modules/uni-group/components/uni-group/uni-group-create-component']]
]);

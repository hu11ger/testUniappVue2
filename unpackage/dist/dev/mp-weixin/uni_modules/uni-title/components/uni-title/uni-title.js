(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-title/components/uni-title/uni-title"],{1804:function(t,e,n){"use strict";n.r(e);var i=n(1805),r=n(1807);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n(1809);var s,a=n(50),o=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],s);o.options.__file="uni_modules/uni-title/components/uni-title/uni-title.vue",e["default"]=o.exports},1805:function(t,e,n){"use strict";n.r(e);var i=n(1806);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},1806:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=!1,s=[];r._withStripped=!0},1807:function(t,e,n){"use strict";n.r(e);var i=n(1808),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},1808:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(e){this.isOpenStat()&&t.report&&t.report("title",this.title)}},mounted:function(){this.isOpenStat()&&t.report&&t.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};e.default=n}).call(this,n(2)["default"])},1809:function(t,e,n){"use strict";n.r(e);var i=n(1810),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},1810:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-title/components/uni-title/uni-title.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-title/components/uni-title/uni-title-create-component',
    {
        'uni_modules/uni-title/components/uni-title/uni-title-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1804))
        })
    },
    [['uni_modules/uni-title/components/uni-title/uni-title-create-component']]
]);

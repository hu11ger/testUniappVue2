(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-fav/components/uni-fav/uni-fav"],{1766:function(n,e,t){"use strict";t.r(e);var o=t(1767),r=t(1769);for(var c in r)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(c);t(1775);var u,i=t(50),a=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);a.options.__file="uni_modules/uni-fav/components/uni-fav/uni-fav.vue",e["default"]=a.exports},1767:function(n,e,t){"use strict";t.r(e);var o=t(1768);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},1768:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));try{o={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,1425))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},c=!1,u=[];r._withStripped=!0},1769:function(n,e,t){"use strict";t.r(e);var o=t(1770),r=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},1770:function(n,e,t){"use strict";(function(n){var o=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(22),c=o(t(1771)),u=(0,r.initVueI18n)(c.default),i=u.t,a={name:"UniFav",emits:["click"],props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"",contentFav:""}}},stat:{type:Boolean,default:!1}},computed:{contentDefault:function(){return this.contentText.contentDefault||i("uni-fav.collect")},contentFav:function(){return this.contentText.contentFav||i("uni-fav.collected")}},watch:{checked:function(){n.report&&this.stat&&(this.checked?n.report("收藏","收藏"):n.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=a}).call(this,t(2)["default"])},1775:function(n,e,t){"use strict";t.r(e);var o=t(1776),r=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},1776:function(n,e,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-fav/components/uni-fav/uni-fav.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-fav/components/uni-fav/uni-fav-create-component',
    {
        'uni_modules/uni-fav/components/uni-fav/uni-fav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1766))
        })
    },
    [['uni_modules/uni-fav/components/uni-fav/uni-fav-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav"],{1793:function(n,t,e){"use strict";e.r(t);var o=e(1794),r=e(1796);for(var u in r)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e(1802);var i,c=e(50),a=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);a.options.__file="uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue",t["default"]=a.exports},1794:function(n,t,e){"use strict";e.r(t);var o=e(1795);e.d(t,"render",(function(){return o["render"]})),e.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(t,"components",(function(){return o["components"]}))},1795:function(n,t,e){"use strict";var o;e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return i})),e.d(t,"recyclableRender",(function(){return u})),e.d(t,"components",(function(){return o}));try{o={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,1441))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,t=n.$createElement;n._self._c},u=!1,i=[];r._withStripped=!0},1796:function(n,t,e){"use strict";e.r(t);var o=e(1797),r=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=r.a},1797:function(n,t,e){"use strict";(function(n){var o=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e(22),u=o(e(1798)),i=(0,r.initVueI18n)(u.default),c=i.t,a={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:c("uni-goods-nav.options.shop")},{icon:"cart",text:c("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:c("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:c("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1},stat:{type:Boolean,default:!1}},methods:{onClick:function(n,t){this.$emit("click",{index:n,content:t})},buttonClick:function(t,e){n.report&&this.stat&&n.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};t.default=a}).call(this,e(2)["default"])},1802:function(n,t,e){"use strict";e.r(t);var o=e(1803),r=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=r.a},1803:function(n,t,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav-create-component',
    {
        'uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1793))
        })
    },
    [['uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav-create-component']]
]);

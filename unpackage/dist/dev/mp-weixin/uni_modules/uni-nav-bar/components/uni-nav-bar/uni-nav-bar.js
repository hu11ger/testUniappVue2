(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar"],{1490:function(t,n,e){"use strict";e.r(n);var r=e(1491),i=e(1493);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e(1495);var u,c=e(50),a=Object(c["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"6bda1a90",null,!1,r["components"],u);a.options.__file="uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue",n["default"]=a.exports},1491:function(t,n,e){"use strict";e.r(n);var r=e(1492);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},1492:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return i})),e.d(n,"staticRenderFns",(function(){return u})),e.d(n,"recyclableRender",(function(){return o})),e.d(n,"components",(function(){return r}));try{r={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,1299))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.leftIcon.length),r=t.leftText.length,i=r?t.leftIcon.length:null,o=t.title.length,u=t.rightIcon.length,c=t.rightText.length&&!t.rightIcon.length;t.$mp.data=Object.assign({},{$root:{g0:e,g1:r,g2:i,g3:o,g4:u,g5:c}})},o=!1,u=[];i._withStripped=!0},1493:function(t,n,e){"use strict";e.r(n);var r=e(1494),i=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},1494:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar").then(function(){return resolve(e(1852))}.bind(null,e)).catch(e.oe)},i=function(t){return"number"===typeof t?t+"px":t},o={name:"UniNavBar",components:{statusBar:r},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor:function(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor:function(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight:function(){return i(this.height)},leftIconWidth:function(){return i(this.leftWidth)},rightIconWidth:function(){return i(this.rightWidth)}},mounted:function(){t.report&&this.stat&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}};n.default=o}).call(this,e(2)["default"])},1495:function(t,n,e){"use strict";e.r(n);var r=e(1496),i=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},1496:function(t,n,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1490))
        })
    },
    [['uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component']]
]);

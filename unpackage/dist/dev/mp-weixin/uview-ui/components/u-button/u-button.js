(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-button/u-button"],{1371:function(e,t,n){"use strict";n.r(t);var i=n(1372),r=n(1374);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n(1376);var o,a=n(50),l=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"6e15e680",null,!1,i["components"],o);l.options.__file="uview-ui/components/u-button/u-button.vue",t["default"]=l.exports},1372:function(e,t,n){"use strict";n.r(t);var i=n(1373);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},1373:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__get_style([e.customStyle,{overflow:e.ripple?"hidden":"visible"}])),i=Number(e.hoverStartTime),r=Number(e.hoverStayTime);e.$mp.data=Object.assign({},{$root:{s0:n,m0:i,m1:r}})},u=!1,o=[];r._withStripped=!0},1374:function(e,t,n){"use strict";n.r(t);var i=n(1375),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},1375:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e="";return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(n){var i=n[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){t.fields=i;var r="",u="";r=e.touches[0].clientX,u=e.touches[0].clientY,t.rippleTop=u-i.top-i.targetWidth/2,t.rippleLeft=r-i.left-i.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(n){var i="";i=e.createSelectorQuery().in(t),i.select(".u-btn").boundingClientRect(),i.exec((function(e){n(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=n}).call(this,n(2)["default"])},1376:function(e,t,n){"use strict";n.r(t);var i=n(1377),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},1377:function(e,t,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-button/u-button.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-button/u-button-create-component',
    {
        'uview-ui/components/u-button/u-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1371))
        })
    },
    [['uview-ui/components/u-button/u-button-create-component']]
]);

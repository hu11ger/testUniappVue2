(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar"],{1722:function(e,n,t){"use strict";t.r(n);var o=t(1723),i=t(1725);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(1727);var c,u=t(50),a=Object(u["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"a1596656",null,!1,o["components"],c);a.options.__file="uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue",n["default"]=a.exports},1723:function(e,n,t){"use strict";t.r(n);var o=t(1724);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},1724:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,1443))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement,t=(e._self._c,e.show&&e.isShowGetMore?e.moreText.length:null);e.$mp.data=Object.assign({},{$root:{g0:t}})},r=!1,c=[];i._withStripped=!0},1725:function(e,n,t){"use strict";t.r(n);var o=t(1726),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},1726:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},fontSize:{type:Number,default:14},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),n="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:e,elIdBox:n,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},computed:{isShowGetMore:function(){return!0===this.showGetMore||"true"===this.showGetMore},isShowClose:function(){return(!0===this.showClose||"true"===this.showClose)&&(!1===this.showGetMore||"false"===this.showGetMore)}},mounted:function(){var e=this;this.$nextTick((function(){e.initSize()}))},methods:{initSize:function(){var n=this;if(this.scrollable){var t=[],o=new Promise((function(t,o){e.createSelectorQuery().in(n).select("#".concat(n.elId)).boundingClientRect().exec((function(e){n.textWidth=e[0].width,t()}))})),i=new Promise((function(t,o){e.createSelectorQuery().in(n).select("#".concat(n.elIdBox)).boundingClientRect().exec((function(e){n.boxWidth=e[0].width,t()}))}));t.push(o),t.push(i),Promise.all(t).then((function(){n.animationDuration="".concat(n.textWidth/n.speed,"s"),n.animationDelay="-".concat(n.boxWidth/n.speed,"s"),setTimeout((function(){n.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};n.default=t}).call(this,t(2)["default"])},1727:function(e,n,t){"use strict";t.r(n);var o=t(1728),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},1728:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1722))
        })
    },
    [['uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component']]
]);

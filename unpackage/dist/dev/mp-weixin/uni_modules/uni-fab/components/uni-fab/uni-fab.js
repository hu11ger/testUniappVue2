(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-fab/components/uni-fab/uni-fab"],{1590:function(t,n,e){"use strict";e.r(n);var o=e(1591),i=e(1593);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e(1595);var s,u=e(50),c=Object(u["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],s);c.options.__file="uni_modules/uni-fab/components/uni-fab/uni-fab.vue",n["default"]=c.exports},1591:function(t,n,e){"use strict";e.r(n);var o=e(1592);e.d(n,"render",(function(){return o["render"]})),e.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(n,"components",(function(){return o["components"]}))},1592:function(t,n,e){"use strict";var o;e.r(n),e.d(n,"render",(function(){return i})),e.d(n,"staticRenderFns",(function(){return s})),e.d(n,"recyclableRender",(function(){return r})),e.d(n,"components",(function(){return o}));try{o={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,1263))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0),o=t.isShow&&t.content.length>0;t.$mp.data=Object.assign({},{$root:{g0:e,g1:o}})},r=!1,s=[];i._withStripped=!0},1593:function(t,n,e){"use strict";e.r(n);var o=e(1594),i=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=i.a},1594:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e="other",o={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===e,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")},nvueBottom:function(){t.getSystemInfoSync().windowBottom;return 30}},watch:{pattern:{handler:function(t,n){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,n){this.$emit("trigger",{index:t,item:n})},getPosition:function(t,n,e){return 0===t?this.horizontal===n&&this.vertical===e:1===t?this.direction===n&&this.vertical===e:2===t?this.direction===n&&this.horizontal===e:this.isShow&&this.direction===n?this.contentWidth:this.contentWidthMin}}};n.default=o}).call(this,e(2)["default"])},1595:function(t,n,e){"use strict";e.r(n);var o=e(1596),i=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=i.a},1596:function(t,n,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-fab/components/uni-fab/uni-fab.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-fab/components/uni-fab/uni-fab-create-component',
    {
        'uni_modules/uni-fab/components/uni-fab/uni-fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1590))
        })
    },
    [['uni_modules/uni-fab/components/uni-fab/uni-fab-create-component']]
]);

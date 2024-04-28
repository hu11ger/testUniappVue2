(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-popup/components/uni-popup/uni-popup"],{1458:function(t,i,o){"use strict";o.r(i);var n=o(1459),e=o(1461);for(var s in e)["default"].indexOf(s)<0&&function(t){o.d(i,t,(function(){return e[t]}))}(s);o(1463);var r,a=o(50),c=Object(a["default"])(e["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],r);c.options.__file="uni_modules/uni-popup/components/uni-popup/uni-popup.vue",i["default"]=c.exports},1459:function(t,i,o){"use strict";o.r(i);var n=o(1460);o.d(i,"render",(function(){return n["render"]})),o.d(i,"staticRenderFns",(function(){return n["staticRenderFns"]})),o.d(i,"recyclableRender",(function(){return n["recyclableRender"]})),o.d(i,"components",(function(){return n["components"]}))},1460:function(t,i,o){"use strict";var n;o.r(i),o.d(i,"render",(function(){return e})),o.d(i,"staticRenderFns",(function(){return r})),o.d(i,"recyclableRender",(function(){return s})),o.d(i,"components",(function(){return n}));try{n={uniTransition:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-transition/components/uni-transition/uni-transition")]).then(o.bind(null,1339))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var e=function(){var t=this,i=t.$createElement;t._self._c},s=!1,r=[];e._withStripped=!0},1461:function(t,i,o){"use strict";o.r(i);var n=o(1462),e=o.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){o.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},1462:function(t,i,o){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"uniPopup",components:{},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup:function(t){}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop:function(){return this.popupWidth>=500&&this.popupHeight>=500},bg:function(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted:function(){var i=this,o=function(){var o=t.getSystemInfoSync(),n=o.windowWidth,e=o.windowHeight,s=o.windowTop,r=o.safeArea,a=o.screenHeight;o.safeAreaInsets;i.popupWidth=n,i.popupHeight=e+(s||0),r&&i.safeArea?i.safeAreaInsets=a-r.bottom:i.safeAreaInsets=0};o()},destroyed:function(){this.setH5Visible()},created:function(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible:function(){},closeMask:function(){this.maskShow=!1},disableMask:function(){this.mkclick=!1},clear:function(t){t.stopPropagation(),this.clearPropagation=!0},open:function(t){this.showPopup&&(clearTimeout(this.timer),this.showPopup=!1);var i=["top","center","bottom","left","right","message","dialog","share"];t&&-1!==i.indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close:function(t){var i=this;this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((function(){i.showPopup=!1}),300)},touchstart:function(){this.clearPropagation=!1},onTap:function(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top:function(t){var i=this;this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((function(){i.messageChild&&"message"===i.type&&i.messageChild.timerClose()})))},bottom:function(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center:function(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left:function(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right:function(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}};i.default=o}).call(this,o(2)["default"])},1463:function(t,i,o){"use strict";o.r(i);var n=o(1464),e=o.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){o.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},1464:function(t,i,o){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-popup/components/uni-popup/uni-popup.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-popup/components/uni-popup/uni-popup-create-component',
    {
        'uni_modules/uni-popup/components/uni-popup/uni-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1458))
        })
    },
    [['uni_modules/uni-popup/components/uni-popup/uni-popup-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/healthApp/healthRating/healthRating"],{86:function(e,t,n){"use strict";(function(e,t){var a=n(4);n(26),n(27),n(28);a(n(25));var o=a(n(87));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n(1)["default"],n(2)["createPage"])},87:function(e,t,n){"use strict";n.r(t);var a=n(88),o=n(90);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(92);var r,s=n(50),l=Object(s["default"])(o["default"],a["render"],a["staticRenderFns"],!1,null,"3b65bb7c",null,!1,a["components"],r);l.options.__file="pages/healthApp/healthRating/healthRating.vue",t["default"]=l.exports},88:function(e,t,n){"use strict";n.r(t);var a=n(89);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},89:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return a}));try{a={uTabbar:function(){return n.e("uview-ui/components/u-tabbar/u-tabbar").then(n.bind(null,1332))},uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,1361))},uTabsSwiper:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper")]).then(n.bind(null,1368))},uLineProgress:function(){return n.e("uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null,1375))},qiunDataCharts:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(n.bind(null,1352))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,1382))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},i=!1,r=[];o._withStripped=!0},90:function(e,t,n){"use strict";n.r(t);var a=n(91),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},91:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{bottomTabCurrent:4,show:!0,bgColor:"#ffffff",borderTop:!0,list:[{iconPath:"../../../static/image/navBar/ques.png",selectedIconPath:"../../../static/image/navBar/ques-active.png",text:"SelfRate",pagePath:"pages/healthApp/SelfRatingSelect/SelfRatingSelect",customIcon:!1},{iconPath:"../../../static/image/navBar/bodyData.png",selectedIconPath:"../../../static/image/navBar/bodyData-active.png",text:"Insights",pagePath:"pages/healthApp/healthDataInsights/healthDataInsights",customIcon:!1},{iconPath:"../../../static/image/navBar/home.png",selectedIconPath:"../../../static/image/navBar/home-active.png",pagePath:"pages/healthApp/home/home",text:"Daily",midButton:!0,customIcon:!1},{iconPath:"../../../static/image/navBar/healthBehave.png",selectedIconPath:"../../../static/image/navBar/healthBehave-active.png",text:"SelfCare",pagePath:"pages/healthApp/SelfCareCourse/SelfCareCourse",customIcon:!1},{iconPath:"../../../static/image/navBar/vrCare.png",selectedIconPath:"../../../static/image/navBar/vrCare-active.png",text:"VRCure",pagePath:"pages/healthApp/healthRating/healthRating",customIcon:!1}],midButton:!0,inactiveColor:"#9C9EB9",activeColor:"#FE8787",chartData:{},opts:{timing:"easeOut",duration:1e3,rotate:!1,rotateLock:!1,color:["#48647A","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,0,0,5],fontSize:12,fontColor:"#999",dataLabel:!1,dataPointShape:!0,dataPointShapeType:"solid",touchMoveLimit:60,enableScroll:!0,enableMarkLine:!1,legend:{show:!1,position:"bottom",float:"center",padding:5,margin:10,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,fontSize:13,fontColor:"#666666",lineHeight:11,hiddenColor:"#CECECE",itemGap:10},xAxis:{disableGrid:!0,disabled:!1,axisLine:!0,axisLineColor:"#CCCCCC",calibration:!1,fontColor:"#999",fontSize:10,lineHeight:20,marginTop:0,rotateLabel:!1,rotateAngle:45,itemCount:4,boundaryGap:"center",splitNumber:5,gridColor:"#999",gridType:"dash",dashLength:4,gridEval:1,scrollShow:!0,scrollAlign:"left",scrollColor:"#d4eaed",scrollBackgroundColor:"#EFEBEF",min:0,max:100,title:"",titleFontSize:13,titleOffsetY:0,titleOffsetX:0,titleFontColor:"#999",format:""},yAxis:{gridType:"dash",dashLength:2,disabled:!1,disableGrid:!1,splitNumber:4,gridColor:"#CCCCCC",padding:10,showTitle:!1,data:[{type:"value",position:"left",disabled:!1,axisLine:!0,axisLineColor:"#CCCCCC",calibration:!1,fontColor:"#999",fontSize:10,textAlign:"right",title:"1",titleFontSize:0,titleOffsetY:0,titleOffsetX:0,titleFontColor:"#66666600",min:60,max:100,tofix:null,unit:"%",format:""}]},extra:{line:{type:"curve",width:3,activeType:"solid",linearType:"custom",onShadow:!1,animation:"vertical"},tooltip:{showBox:!1,showArrow:!0,showCategory:!1,borderWidth:0,borderRadius:0,borderColor:"#000000",borderOpacity:.7,bgColor:"#000000",bgOpacity:.7,gridType:"solid",dashLength:4,gridColor:"#CCCCCC",boxPadding:3,fontSize:13,lineHeight:20,fontColor:"#FFFFFF",legendShow:!0,legendShape:"auto",splitLine:!1,horizentalLine:!1,xAxisLabel:!1,yAxisLabel:!1,labelBgColor:"#FFFFFF",labelBgOpacity:.7,labelFontColor:"#666666"},markLine:{type:"solid",dashLength:4,data:[]}}},ratingsArr:[{id:0,iconUrl:"",name:"Calmness",progress:67},{id:1,iconUrl:"",name:"Happiness",progress:76},{id:2,iconUrl:"",name:"Coping",progress:60},{id:3,iconUrl:"",name:"Sleep",progress:67},{id:4,iconUrl:"",name:"Health",progress:87},{id:5,iconUrl:"",name:"Connection",progress:75},{id:6,iconUrl:"",name:"Fulfilment",progress:68}],progressPercent:71,tabList:[{name:"幸福感"},{name:"心情"}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,loadStatus:["loadmore","loadmore","loadmore","loadmore"],title:"健康追踪",backText:"",backIconName:"",right:!1,showAction:!1,rightSlot:!1,useSlot:!1,background:{"background-image":"rgba(0,0,0,0)"},isBack:!0,search:!1,custom:!1,isFixed:!0,keyword:"",slotRight:!1}},onReady:function(){this.getServerData()},methods:{ChangBar:function(t){e.switchTab({url:"/"+this.list[t].pagePath})},getServerData:function(){var e=this;setTimeout((function(){var t={categories:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],series:[{name:"健康追踪",data:[88,80,65,77,78,87,88,76,88,93,76,65]}]};e.chartData=JSON.parse(JSON.stringify(t))}),500)},change:function(e){this.swiperCurrent=e},transition:function(e){var t=e.detail.dx;this.$refs.tabs.setDx(t)},animationfinish:function(e){var t=e.detail.current;this.$refs.tabs.setFinishCurrent(t),this.swiperCurrent=t,this.current=t}}};t.default=n}).call(this,n(2)["default"])},92:function(e,t,n){"use strict";n.r(t);var a=n(93),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},93:function(e,t,n){}},[[86,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/healthApp/healthRating/healthRating.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/ucharts/ucharts"],{1234:function(e,i,t){"use strict";(function(e,i){var a=t(4);t(26),t(27),t(28);a(t(25));var n=a(t(1235));e.__webpack_require_UNI_MP_PLUGIN__=t,i(n.default)}).call(this,t(1)["default"],t(2)["createPage"])},1235:function(e,i,t){"use strict";t.r(i);var a=t(1236),n=t(1238);for(var o in n)["default"].indexOf(o)<0&&function(e){t.d(i,e,(function(){return n[e]}))}(o);t(1241);var r,s=t(50),l=Object(s["default"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],r);l.options.__file="pages/template/ucharts/ucharts.vue",i["default"]=l.exports},1236:function(e,i,t){"use strict";t.r(i);var a=t(1237);t.d(i,"render",(function(){return a["render"]})),t.d(i,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(i,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(i,"components",(function(){return a["components"]}))},1237:function(e,i,t){"use strict";var a;t.r(i),t.d(i,"render",(function(){return n})),t.d(i,"staticRenderFns",(function(){return r})),t.d(i,"recyclableRender",(function(){return o})),t.d(i,"components",(function(){return a}));var n=function(){var e=this,i=e.$createElement;e._self._c},o=!1,r=[];n._withStripped=!0},1238:function(e,i,t){"use strict";t.r(i);var a=t(1239),n=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(i,e,(function(){return a[e]}))}(o);i["default"]=n.a},1239:function(e,i,t){"use strict";(function(e){var a=t(4);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n,o=a(t(13)),r=a(t(11)),s=a(t(1240)),l={},c={data:function(){return{cWidth:"",cHeight:"",cWidth2:"",cHeight2:"",cWidth3:"",cHeight3:"",arcbarWidth:"",gaugeWidth:"",tips:"",pixelRatio:1,serverData:"",itemCount:30,sliderMax:50}},onLoad:function(){n=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(500),this.cWidth2=e.upx2px(700),this.cHeight2=e.upx2px(1100),this.cWidth3=e.upx2px(250),this.cHeight3=e.upx2px(250),this.arcbarWidth=e.upx2px(24),this.gaugeWidth=e.upx2px(30)},onReady:function(){this.getServerData()},methods:{getServerData:function(){e.showLoading({title:"正在加载数据..."}),e.request({url:"https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json",data:{},success:function(e){n.fillData(e.data)},fail:function(){n.tips="网络错误，小程序端请检查合法域名"},complete:function(){e.hideLoading()}})},fillData:function(e){this.serverData=e,this.tips=e.tips,this.sliderMax=e.Candle.categories.length;var i={categories:[],series:[]},t={categories:[],series:[]},a={categories:[],series:[]},n={categories:[],series:[]},o={categories:[],series:[]},r={series:[]},s={series:[]},l={series:[]},c={categories:[],series:[]},d={series:[]},h={series:[]},u={series:[]},g={categories:[],series:[]},p={categories:[],series:[]},f={categories:[],series:[]};i.categories=e.Column.categories,i.series=e.Column.series,t.categories=e.ColumnMeter.categories,t.series=e.ColumnMeter.series,a.categories=e.LineA.categories,a.series=e.LineA.series,n.categories=e.LineB.categories,n.series=e.LineB.series,o.categories=e.Area.categories,o.series=e.Area.series,r.series=e.Pie.series,s.series=e.Ring.series,l.series=e.Pie.series;for(var x=function(e){s.series[e].format=function(){return s.series[e].name+s.series[e].data}},F=0;F<s.series.length;F++)x(F);c.categories=e.Radar.categories,c.series=e.Radar.series,d.series=e.Arcbar1.series,h.series=e.Arcbar2.series,u.series=e.Arcbar3.series,g.categories=e.Gauge.categories,g.series=e.Gauge.series,p.categories=e.Candle.categories,p.series=e.Candle.series,f.categories=e.Mix.categories,f.series=e.Mix.series,this.showColumn("canvasColumn",i),this.showColumnMeter("canvasColumnMeter",t),this.showLineA("canvasLineA",a),this.showLineB("canvasLineB",n),this.showArea("canvasArea",o),this.showPie("canvasPie",r),this.showRing("canvasRing",s),this.showFunnel("canvasFunnel",l),this.showRadar("canvasRadar",c),this.showArcbar("canvasArcbar1",d),this.showArcbar2("canvasArcbar2",h),this.showArcbar3("canvasArcbar3",u),this.showGauge("canvasGauge",g),this.showCandle("canvasCandle",p),this.showMix("canvasMix",f)},showColumn:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"column",padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!1,categories:i.categories,series:i.series,xAxis:{disableGrid:!0},yAxis:{format:function(e){return e.toFixed(0)+"元"}},dataLabel:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{column:{type:"group",width:n.cWidth*n.pixelRatio*.45/i.categories.length}}})},showColumnMeter:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"column",padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!1,categories:i.categories,series:i.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{column:{type:"meter",width:n.cWidth*n.pixelRatio*.45/i.categories.length,meter:{border:4,fillColor:"#E5FDC3"}}}})},showLineA:function(e,i){var t;l[e]=new s.default((t={$this:n,canvasId:e,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:5},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:i.categories,series:i.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:8,min:10,max:180,format:function(e){return e.toFixed(0)+"元"}},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio},(0,r.default)(t,"dataLabel",!0),(0,r.default)(t,"dataPointShape",!0),(0,r.default)(t,"extra",{lineStyle:"straight"}),t))},showLineB:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:5},background:"#FFFFFF",pixelRatio:n.pixelRatio,rotate:!0,categories:i.categories,animation:!1,series:i.series,xAxis:{disableGrid:!0},yAxis:{},width:n.cWidth2*n.pixelRatio,height:n.cHeight2*n.pixelRatio,dataLabel:!0,dataPointShape:!0,extra:{lineStyle:"curve"}})},showArea:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"area",fontSize:11,padding:[0,15,10,15],legend:{show:!0,position:"top",float:"center",itemGap:30,padding:5,lineHeight:18,margin:0},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:i.categories,series:i.series,animation:!1,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8,boundaryGap:"justify"},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8,splitNumber:5},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{area:{type:"curve",opacity:.2,addLine:!0,width:2}}})},showPie:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"pie",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:i.series,animation:!1,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!0,extra:{pie:{lableWidth:15}}})},showRing:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"ring",fontSize:11,padding:[5,5,5,5],legend:{show:!0,position:"right",float:"center",itemGap:10,padding:5,lineHeight:26,margin:5,borderWidth:1},title:{name:"70%",color:"#7cb5ec",fontSize:25*n.pixelRatio},subtitle:{name:"收益率",color:"#666666",fontSize:15*n.pixelRatio},extra:{pie:{lableWidth:15,ringWidth:40*n.pixelRatio,offsetAngle:0}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:i.series,animation:!1,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,disablePieStroke:!0,dataLabel:!0})},showFunnel:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"funnel",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:i.series,animation:!1,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!0,extra:{funnel:{border:!0,borderWidth:2,borderColor:"#FFFFFF"}}})},showRadar:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"radar",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!1,dataLabel:!0,categories:i.categories,series:i.series,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{radar:{max:200}}})},showArcbar:function(e,i){new s.default({$this:n,canvasId:e,type:"arcbar",fontSize:11,title:{name:Math.round(100*i.series[0].data)+"%",color:i.series[0].color,fontSize:25*n.pixelRatio},subtitle:{name:i.series[0].name,color:"#666666",fontSize:15*n.pixelRatio},extra:{arcbar:{type:"default",width:n.arcbarWidth*n.pixelRatio}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:i.series,animation:!1,width:n.cWidth3*n.pixelRatio,height:n.cHeight3*n.pixelRatio,dataLabel:!0})},showArcbar2:function(e,i){new s.default({$this:n,canvasId:e,type:"arcbar",fontSize:11,title:{name:Math.round(100*i.series[0].data)+"%",color:i.series[0].color,fontSize:25*n.pixelRatio},subtitle:{name:i.series[0].name,color:"#666666",fontSize:15*n.pixelRatio},extra:{arcbar:{type:"default",width:n.arcbarWidth*n.pixelRatio,backgroundColor:"#ffe3e8",startAngle:1.25,endAngle:.75}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:i.series,animation:!1,width:n.cWidth3*n.pixelRatio,height:n.cHeight3*n.pixelRatio,dataLabel:!0})},showArcbar3:function(e,i){new s.default({$this:n,canvasId:e,type:"arcbar",fontSize:11,title:{name:Math.round(100*i.series[0].data)+"%",color:i.series[0].color,fontSize:25*n.pixelRatio},subtitle:{name:i.series[0].name,color:"#666666",fontSize:15*n.pixelRatio},extra:{arcbar:{type:"circle",width:n.arcbarWidth*n.pixelRatio,startAngle:.5}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:i.series,animation:!1,width:n.cWidth3*n.pixelRatio,height:n.cHeight3*n.pixelRatio,dataLabel:!0})},showGauge:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"gauge",fontSize:11,title:{name:Math.round(100*i.series[0].data)+"%",color:i.categories[1].color,fontSize:25*n.pixelRatio,offsetY:50*n.pixelRatio},subtitle:{name:i.series[0].name,color:"#666666",fontSize:15*n.pixelRatio,offsetY:-50*n.pixelRatio},extra:{gauge:{type:"default",width:n.gaugeWidth*n.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:100,splitLine:{fixRadius:0,splitNumber:10,width:n.gaugeWidth*n.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*n.gaugeWidth*n.pixelRatio},pointer:{width:.8*n.gaugeWidth*n.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:i.categories,series:i.series,animation:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!0})},changeGaugeData:function(){for(var e,i=[{name:"完成率",data:Math.random()}],t=0;t<n.serverData.Gauge.categories.length;t++)if(i[0].data<=n.serverData.Gauge.categories[t].value){e=n.serverData.Gauge.categories[t].color;break}l["canvasGauge"].updateData({series:i,categories:n.serverData.Gauge.categories,title:{name:Math.round(100*i[0].data)+"%",color:e,fontSize:25*n.pixelRatio,offsetY:50*n.pixelRatio},subtitle:{name:"更新数据",color:"#666666",fontSize:15*n.pixelRatio,offsetY:-50*n.pixelRatio}})},showCandle:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"candle",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:8},background:"#FFFFFF",pixelRatio:n.pixelRatio,enableMarkLine:!0,categories:i.categories,series:i.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!0,labelCount:4,itemCount:n.itemCount,scrollShow:!0,scrollAlign:"right"},yAxis:{gridType:"dash",splitNumber:5,format:function(e){return e.toFixed(0)}},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!1,dataPointShape:!0,extra:{candle:{color:{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},average:{show:!0,name:["MA5","MA10","MA30"],day:[5,10,20],color:["#1890ff","#2fc25b","#facc14"]}},tooltip:{bgColor:"#000000",bgOpacity:.7,gridType:"dash",dashLength:5,gridColor:"#1890ff",fontColor:"#FFFFFF",horizentalLine:!0,xAxisLabel:!0,yAxisLabel:!0,labelBgColor:"#DFE8FF",labelBgOpacity:.95,labelAlign:"left",labelFontColor:"#666666"},markLine:{type:"dash",dashLength:5,data:[{value:2150,lineColor:"#f04864",showLabel:!0},{value:2350,lineColor:"#f04864",showLabel:!0}]}}})},touchCandle:function(e){l["canvasCandle"].scrollStart(e)},moveCandle:function(e){l["canvasCandle"].scroll(e)},touchEndCandle:function(e){l["canvasCandle"].scrollEnd(e),l["canvasCandle"].showToolTip(e,{format:function(e,i){return i+" "+e.name+":"+e.data}})},changeData:function(){l["canvasColumn"].updateData({series:n.serverData.ColumnB.series,categories:n.serverData.ColumnB.categories})},touchLineA:function(e){l["canvasLineA"].scrollStart(e)},moveLineA:function(e){l["canvasLineA"].scroll(e)},touchEndLineA:function(e){l["canvasLineA"].scrollEnd(e),l["canvasLineA"].showToolTip(e,{format:function(e,i){return i+" "+e.name+":"+e.data}})},showMix:function(e,i){l[e]=new s.default({$this:n,canvasId:e,type:"mix",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:6},background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:i.categories,series:i.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",dashLength:4,splitNumber:5,min:10,max:180,format:function(e){return e.toFixed(0)}},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!0,dataPointShape:!0,extra:{column:{width:20*n.pixelRatio},tooltip:{bgColor:"#000000",bgOpacity:.7,gridType:"dash",dashLength:8,gridColor:"#1890ff",fontColor:"#FFFFFF",horizentalLine:!0,xAxisLabel:!0,yAxisLabel:!0,labelBgColor:"#DFE8FF",labelBgOpacity:.95,labelAlign:"left",labelFontColor:"#666666"}}})},touchMix:function(e){l["canvasMix"].scrollStart(e)},moveMix:function(e){l["canvasMix"].scroll(e)},touchEndMix:function(e){l["canvasMix"].scrollEnd(e),l["canvasMix"].touchLegend(e),l["canvasMix"].showToolTip(e,{format:function(e,i){return i+" "+e.name+":"+e.data}})},touchIt:function(e,i){l[i].touchLegend(e,{animation:!1}),l[i].showToolTip(e,{format:function(e,i){return"object"===(0,o.default)(e.data)?i+" "+e.name+":"+e.data.value:i+" "+e.name+":"+e.data}})},touchPie:function(e,i){l[i].showToolTip(e,{format:function(e){return e.name+":"+e.data}})}}};i.default=c}).call(this,t(2)["default"])},1241:function(e,i,t){"use strict";t.r(i);var a=t(1242),n=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(i,e,(function(){return a[e]}))}(o);i["default"]=n.a},1242:function(e,i,t){}},[[1234,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/ucharts/ucharts.js.map
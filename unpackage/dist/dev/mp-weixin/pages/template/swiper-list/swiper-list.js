(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/swiper-list/swiper-list"],{1280:function(t,i,e){"use strict";(function(t,i){var a=e(4);e(26),e(27),e(28);a(e(25));var n=a(e(1281));t.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e(1)["default"],e(2)["createPage"])},1281:function(t,i,e){"use strict";e.r(i);var a=e(1282),n=e(1284);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e(1286),e(1288);var r,c=e(50),d=Object(c["default"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],r);d.options.__file="pages/template/swiper-list/swiper-list.nvue",i["default"]=d.exports},1282:function(t,i,e){"use strict";e.r(i);var a=e(1283);e.d(i,"render",(function(){return a["render"]})),e.d(i,"staticRenderFns",(function(){return a["staticRenderFns"]})),e.d(i,"recyclableRender",(function(){return a["recyclableRender"]})),e.d(i,"components",(function(){return a["components"]}))},1283:function(t,i,e){"use strict";var a;e.r(i),e.d(i,"render",(function(){return n})),e.d(i,"staticRenderFns",(function(){return r})),e.d(i,"recyclableRender",(function(){return s})),e.d(i,"components",(function(){return a}));var n=function(){var t=this,i=t.$createElement;t._self._c},s=!1,r=[];n._withStripped=!0},1284:function(t,i,e){"use strict";e.r(i);var a=e(1285),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},1285:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=100,n=3,s=1,r=function(){e.e("pages/template/swiper-list/swiper-page").then(function(){return resolve(e(1906))}.bind(null,e)).catch(e.oe)},c={components:{swiperPage:r},data:function(){return{tabList:[],tabIndex:0,cacheTab:[],scrollInto:"",indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onLoad:function(){for(var t=0;t<6;t++)this.tabList.push({id:"tab"+t,name:"Tab "+(t+1),pageid:t+1})},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=this.$refs.page,this.switchTab(this.tabIndex),this.getTabbarItemsSize()},methods:{ontabtap:function(t){var i=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var e=this.tabListSize[i];this.updateIndicator(e.left,e.width),this._touchTabIndex=i,this.switchTab(i)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var i=t.detail.dx,e=this._lastTabIndex;if(i>s?e++:i<-s&&e--,!(e===this._lastTabIndex||e<0||e>this.pageList.length-1)){0===this.pageList[e].dataList.length&&this.loadTabData(e);var a=Math.abs(this.swiperWidth/i),n=this.tabListSize[this._lastTabIndex],r=this.tabListSize[e],c=n.left+(r.left-n.left)/a,d=n.width+(r.width-n.width)/a;this.updateIndicator(c,d)}}},animationfinish:function(t){var i=t.detail.current;this._touchTabIndex===i&&(this.isTap=!1),this._lastTabIndex=i,this.switchTab(i),this.updateIndicator(this.tabListSize[i].left,this.tabListSize[i].width)},getTabbarItemsSize:function(){var i=this;t.createSelectorQuery().in(this).select(".tab-view").fields({dataset:!0,size:!0},(function(t){i.swiperWidth=t.width})).exec(),t.createSelectorQuery().in(this).selectAll(".uni-tab-item").boundingClientRect((function(t){t.forEach((function(t){i.tabListSize[t.dataset.id]=t}))})).exec(),setTimeout((function(){i.updateIndicator(i.tabListSize[i.tabIndex].left,i.tabListSize[i.tabIndex].width)}),100)},updateIndicator:function(t,i){this.indicatorLineLeft=t,this.indicatorLineWidth=i},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>a){var i=this.cacheTab.indexOf(this.tabIndex);i<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabList[t].id,this.cacheTab.length>n){var e=this.cacheTab[0];this.clearTabData(e),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var i=this.$refs["tabitem"+t][0],e=0;t>0&&(e=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(e=this.tabListSize[0].width)),dom.scrollToElement(i,{offset:-e})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};i.default=c}).call(this,e(2)["default"])},1286:function(t,i,e){"use strict";e.r(i);var a=e(1287),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},1287:function(t,i,e){},1288:function(t,i,e){"use strict";e.r(i);var a=e(1289),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},1289:function(t,i,e){}},[[1280,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/swiper-list/swiper-list.js.map
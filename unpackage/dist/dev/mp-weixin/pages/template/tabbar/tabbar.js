(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/tabbar/tabbar"],{1194:function(t,e,n){"use strict";(function(t,e){var a=n(4);n(26),n(27),n(28);a(n(25));var i=a(n(1195));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n(1)["default"],n(2)["createPage"])},1195:function(t,e,n){"use strict";n.r(e);var a=n(1196),i=n(1198);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n(1200),n(1202);var s,c=n(50),u=Object(c["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],s);u.options.__file="pages/template/tabbar/tabbar.nvue",e["default"]=u.exports},1196:function(t,e,n){"use strict";n.r(e);var a=n(1197);n.d(e,"render",(function(){return a["render"]})),n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(e,"components",(function(){return a["components"]}))},1197:function(t,e,n){"use strict";var a;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.newsList,(function(e,n){var a=t.__get_orig(e),i=e.isLoading||e.data.length>4;return{$orig:a,g0:i}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=!1,s=[];i._withStripped=!0},1198:function(t,e,n){"use strict";n.r(e);var a=n(1199),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},1199:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){n.e("pages/template/tabbar/news-item").then(function(){return resolve(n(1744))}.bind(null,n)).catch(n.oe)},i=100,r=3,s={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://web-assets.dcloud.net.cn/unidoc/zh/muwu-samll.jpg",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://web-assets.dcloud.net.cn/unidoc/zh/cbd%20-small.jpg",width:563,height:316},{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",width:641,height:360},{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",source:"DCloud",comment_count:69}},c={components:{mediaItem:a},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){var t=this;setTimeout((function(){t.tabBars.forEach((function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})})),t.getList(0)}),350)},methods:{getList:function(t){for(var e=this.newsList[t],n=[],a=1;a<=10;a++){var i=Object.assign({},s["data"+Math.floor(5*Math.random())]);i.id=this.newGuid(),n.push(i)}e.data=e.data.concat(n)},goDetail:function(e){var n=this;this.navigateFlag||(this.navigateFlag=!0,t.navigateTo({url:"./detail/detail?title="+e.title}),setTimeout((function(){n.navigateFlag=!1}),200))},close:function(e,n){var a=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&a.newsList[e].data.splice(n,1)}})},loadMore:function(t){var e=this;setTimeout((function(){e.getList(e.tabIndex)}),500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>i){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>r){var n=this.cacheTab[0];this.clearTabData(n),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,n=this.newsList[this.tabIndex];n.refreshFlag&&(n.refreshing=!0,n.refreshText="正在刷新...",setTimeout((function(){e.refreshData(),e.pulling=!0,n.refreshing=!1,n.refreshFlag=!1,n.refreshText="已刷新",setTimeout((function(){e.pulling=!1}),500)}),2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=c}).call(this,n(2)["default"])},1200:function(t,e,n){"use strict";n.r(e);var a=n(1201),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},1201:function(t,e,n){},1202:function(t,e,n){"use strict";n.r(e);var a=n(1203),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},1203:function(t,e,n){}},[[1194,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/tabbar/tabbar.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/list2detail-list/list2detail-list"],{1245:function(t,e,n){"use strict";(function(t,e){var i=n(4);n(26),n(27),n(28);i(n(25));var o=i(n(1246));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n(1)["default"],n(2)["createPage"])},1246:function(t,e,n){"use strict";n.r(e);var i=n(1247),o=n(1249);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(1251);var r,s=n(50),u=Object(s["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],r);u.options.__file="pages/template/list2detail-list/list2detail-list.vue",e["default"]=u.exports},1247:function(t,e,n){"use strict";n.r(e);var i=n(1248);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},1248:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return r})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return i}));try{i={uniLoadMore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(n.bind(null,1576))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement;t._self._c},a=!1,r=[];o._withStripped=!0},1249:function(t,e,n){"use strict";n.r(e);var i=n(1250),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},1250:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(630),o={data:function(){return{banner:{},listData:[],last_id:"",reload:!1,status:"more",adpid:"",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},onLoad:function(){this.adpid=this.$adpid,this.getBanner(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.status="more",this.getList()},methods:{getBanner:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};t.request({url:"https://unidemo.dcloud.net.cn/api/banner/36kr",data:n,success:function(n){t.stopPullDownRefresh(),200==n.statusCode&&(e.banner=n.data)},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},getList:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(this.status="loading",n.minId=this.last_id,n.time=(new Date).getTime()+"",n.pageSize=10),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:n,success:function(t){if(200==t.statusCode){var n=e.setTime(t.data);e.listData=e.reload?n:e.listData.concat(n),e.last_id=n[n.length-1].id,e.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},goDetail:function(e){var n={author_name:e.author_name,cover:e.cover,id:e.id,post_id:e.post_id,published_at:e.published_at,title:e.title};t.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+encodeURIComponent(JSON.stringify(n))})},setTime:function(t){var e=[];return t.forEach((function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:i.dateUtils.format(t.published_at),title:t.title})})),e},aderror:function(t){console.log("aderror: "+JSON.stringify(t.detail))}}};e.default=o}).call(this,n(2)["default"])},1251:function(t,e,n){"use strict";n.r(e);var i=n(1252),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},1252:function(t,e,n){}},[[1245,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/list2detail-list/list2detail-list.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/list/chat"],{1087:function(n,t,e){"use strict";(function(n,t){var i=e(4);e(26),e(27),e(28);i(e(25));var o=i(e(1088));n.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e(1)["default"],e(2)["createPage"])},1088:function(n,t,e){"use strict";e.r(t);var i=e(1089),o=e(1091);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e(1093);var u,a=e(50),c=Object(a["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],u);c.options.__file="pages/extUI/list/chat.vue",t["default"]=c.exports},1089:function(n,t,e){"use strict";e.r(t);var i=e(1090);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},1090:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return o})),e.d(t,"staticRenderFns",(function(){return u})),e.d(t,"recyclableRender",(function(){return r})),e.d(t,"components",(function(){return i}));try{i={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,1425))},uniSection:function(){return e.e("uni_modules/uni-section/components/uni-section/uni-section").then(e.bind(null,1432))},uniList:function(){return e.e("uni_modules/uni-list/components/uni-list/uni-list").then(e.bind(null,1606))},uniListChat:function(){return e.e("uni_modules/uni-list/components/uni-list-chat/uni-list-chat").then(e.bind(null,1800))},uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,1331))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.listData,(function(t,e){var i=n.__get_orig(t),o=n.avatar(e+1);return{$orig:i,m0:o}})));n.$mp.data=Object.assign({},{$root:{l0:e}})},r=!1,u=[];o._withStripped=!0},1091:function(n,t,e){"use strict";e.r(t);var i=e(1092),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=o.a},1092:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={components:{},data:function(){return{UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},listData:[],avatarList:[{url:"/static/logo.png"},{url:"/static/logo.png"},{url:"/static/logo.png"}]}},onLoad:function(){this.getList()},methods:{onClick:function(){n.showToast({title:"列表被点击"})},avatar:function(n){var t=[];return this.avatarList.forEach((function(e,i){i<n&&t.push(e)})),t},getList:function(){var t=this,e={column:"id,post_id,title,author_name,cover,published_at"};n.request({url:"https://unidemo.dcloud.net.cn/api/news",data:e,success:function(n){if(200==n.statusCode){var e=t.setTime(n.data);e=t.reload?e:t.listData.concat(e),e.map((function(n){return n.text=Math.floor(-19*Math.random()+20),n})),t.listData=t.getRandomArrayElements(e,3)}},fail:function(n,t){console.log("fail"+JSON.stringify(n))}})},getRandomArrayElements:function(n,t){var e,i,o=n.slice(0),r=n.length,u=r-t;while(r-- >u)i=Math.floor((r+1)*Math.random()),e=o[i],o[i]=o[r],o[r]=e;return o.slice(u)},setTime:function(n){var t=this,e=[];return n.forEach((function(n){e.push({author_name:n.author_name,cover:n.cover,id:n.id,post_id:n.post_id,published_at:t.format(n.published_at),title:n.title})})),e},format:function(n){var t=this.parse(n),e=Date.now()-t.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(n){return n<10?"0"+n:n};return t.getFullYear()+"-"+i(t.getMonth()+1)+"-"+i(t.getDate())+" "+i(t.getHours())+":"+i(t.getMinutes())},parse:function(n){var t=n.split(/[^0-9]/);return new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5])}}};t.default=e}).call(this,e(2)["default"])},1093:function(n,t,e){"use strict";e.r(t);var i=e(1094),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=o.a},1094:function(n,t,e){}},[[1087,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/list/chat.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swipe-action/swipe-action"],{922:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26),t(27),t(28);o(t(25));var i=o(t(923));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},923:function(n,e,t){"use strict";t.r(e);var o=t(924),i=t(926);for(var c in i)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(c);t(928);var s,r=t(50),u=Object(r["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],s);u.options.__file="pages/extUI/swipe-action/swipe-action.vue",e["default"]=u.exports},924:function(n,e,t){"use strict";t.r(e);var o=t(925);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},925:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return s})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));try{o={uniCard:function(){return t.e("uni_modules/uni-card/components/uni-card/uni-card").then(t.bind(null,1284))},uniSection:function(){return t.e("uni_modules/uni-section/components/uni-section/uni-section").then(t.bind(null,1291))},uniSwipeAction:function(){return t.e("uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action").then(t.bind(null,1548))},uniSwipeActionItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item")]).then(t.bind(null,1553))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,e=n.$createElement;n._self._c},c=!1,s=[];i._withStripped=!0},926:function(n,e,t){"use strict";t.r(e);var o=t(927),i=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a},927:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={components:{},data:function(){return{show:!1,isOpened:"none",options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#F56C6C"}}],swipeList:[{options:[{text:"添加",style:{backgroundColor:"#F56C6C"}}],id:0,content:"左滑点击添加新增一条数据"},{id:1,options:[{text:"置顶"},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item2"},{id:2,options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item3"}]}},onReady:function(){var e=this;setTimeout((function(){e.isOpened="right"}),1e3),n.$on("update",(function(n){console.log(111),e.swipeClick({content:{text:"添加"}})}))},methods:{contentClick:function(){console.log("点击内容"),n.showToast({title:"点击内容",icon:"none"})},bindClick:function(e){console.log(e),n.showToast({title:"点击了".concat("left"===e.position?"左侧":"右侧"," ").concat(e.content.text,"按钮"),icon:"none"})},setOpened:function(){"none"!==this.isOpened?"left"!==this.isOpened?"right"!==this.isOpened||(this.isOpened="none"):this.isOpened="right":this.isOpened="left"},change:function(n){this.isOpened=n,console.log("返回：",n)},swipeChange:function(n,e){console.log("返回：",n),console.log("当前索引：",e)},swipeClick:function(e,t){var o=this,i=e.content;"删除"===i.text?n.showModal({title:"提示",content:"是否删除",success:function(n){n.confirm?o.swipeList.splice(t,1):n.cancel&&console.log("用户点击取消")}}):"添加"===i.text?this.swipeList.length<10?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"+(new Date).getTime()}),n.showToast({title:"添加了一条数据",icon:"none"})):n.showToast({title:"最多添加十条数据",icon:"none"}):n.showToast({title:"点击了".concat(e.content.text,"按钮"),icon:"none"})}}};e.default=t}).call(this,t(2)["default"])},928:function(n,e,t){"use strict";t.r(e);var o=t(929),i=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a},929:function(n,e,t){}},[[922,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/swipe-action/swipe-action.js.map
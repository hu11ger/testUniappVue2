(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-clipboard-clipboard"],{"489f":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return i}));var i={pageHead:a("abc4").default},e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("请输入剪贴板内容")]),a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入剪贴板内容",value:t.data},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.dataChange.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setClipboard.apply(void 0,arguments)}}},[t._v("存储数据")]),a("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getClipboard.apply(void 0,arguments)}}},[t._v("读取数据")])],1)],1)],1)},u=[]},"5dcb":function(t,n,a){"use strict";a.r(n);var i=a("9383"),e=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a},9383:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(t){this.data=t.detail.value},getClipboard:function(){uni.getClipboardData({success:function(t){console.log(t.data);var n=t.data?"剪贴板内容为:"+t.data:"剪贴板暂无内容";uni.showModal({content:n,title:"读取剪贴板",showCancel:!1})},fail:function(){uni.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var t=this.data;0===t.length?uni.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):uni.setClipboardData({data:t,success:function(){},fail:function(){}})}}};n.default=i},a321:function(t,n,a){"use strict";a.r(n);var i=a("489f"),e=a("5dcb");for(var u in e)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(u);var o=a("f0c5"),c=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"70bc6d5e",null,!1,i["a"],void 0);n["default"]=c.exports}}]);
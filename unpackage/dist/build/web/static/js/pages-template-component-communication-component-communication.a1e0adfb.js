(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"02ac":function(t,e,n){"use strict";n.r(e);var a=n("dd65"),i=n("73ef");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7c80fd46",null,!1,a["a"],void 0);e["default"]=c.exports},"03c2":function(t,e,n){var a=n("378c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2c6e012e",a,!0,{sourceMap:!1,shadowMode:!1})},"12a7":function(t,e,n){"use strict";n.r(e);var a=n("4ab0"),i=n("a2b2");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("3870");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6fc920a8",null,!1,a["a"],void 0);e["default"]=c.exports},"2e07":function(t,e,n){"use strict";n.r(e);var a=n("9edb"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"2f44":function(t,e,n){"use strict";var a=n("03c2"),i=n.n(a);i.a},"2f9a":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e");var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From event bus -> "+t})}}};e.default=a},"378c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".sender-container[data-v-6c33cc76]{padding:20px}",""]),t.exports=e},3870:function(t,e,n){"use strict";var a=n("6ed1"),i=n.n(a);i.a},"4ab0":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"reciver"},[this._v(this._s(""===this.msg?"等待发送":"收到消息：")+this._s(this.msg))])],1)},i=[]},"55f0":function(t,e,n){"use strict";n.r(e);var a=n("9cb6"),i=n("8176");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("2f44");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6c33cc76",null,!1,a["a"],void 0);e["default"]=c.exports},5774:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("点击发送消息")])],1)},i=[]},"6ed1":function(t,e,n){var a=n("bd4b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("16f68a19",a,!0,{sourceMap:!1,shadowMode:!1})},7361:function(t,e,n){var a=n("a8ac");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("06944386",a,!0,{sourceMap:!1,shadowMode:!1})},"73ef":function(t,e,n){"use strict";n.r(e);var a=n("7493"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},7493:function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("12a7")),r=a(n("db9f")),u=a(n("55f0")),c={components:{reciver:i.default,sender:r.default,senderBus:u.default},data:function(){return{}},methods:{}};e.default=c},8176:function(t,e,n){"use strict";n.r(e);var a=n("2f9a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"9cb6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("自定义EventBus")])],1)},i=[]},"9edb":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e");var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+t})}}};e.default=a},a2b2:function(t,e,n){"use strict";n.r(e);var a=n("cd57"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a8ac:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".sender-container[data-v-8a1ffc22]{padding:20px}",""]),t.exports=e},bd4b:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".reciver[data-v-6fc920a8]{padding:40px 0;text-align:center;line-height:40px}",""]),t.exports=e},cd57:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=a},db9f:function(t,e,n){"use strict";n.r(e);var a=n("5774"),i=n("2e07");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f887");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"8a1ffc22",null,!1,a["a"],void 0);e["default"]=c.exports},dd65:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={pageHead:n("abc4").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:"组件通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("reciver"),e("sender"),e("sender-bus")],1)],1)],1)},r=[]},f887:function(t,e,n){"use strict";var a=n("7361"),i=n.n(a);i.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swipe-action-swipe-action"],{"038c":function(t,e,n){"use strict";n.r(e);var i=n("127a"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"0e59":function(t,e,n){"use strict";var i=n("22c7"),o=n.n(i);o.a},"127a":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d3b7"),n("159b"),n("a434");var o=i(n("d7cf")),s=i(n("8664")),a=i(n("48ae")),c={mixins:[o.default,s.default,a.default],emits:["click","change"],props:{show:{type:String,default:"none"},disabled:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},threshold:{type:Number,default:20},leftOptions:{type:Array,default:function(){return[]}},rightOptions:{type:Array,default:function(){return[]}}},destroyed:function(){this.__isUnmounted||this.uninstall()},methods:{uninstall:function(){var t=this;this.swipeaction&&this.swipeaction.children.forEach((function(e,n){e===t&&t.swipeaction.children.splice(n,1)}))},getSwipeAction:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniSwipeAction",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=c},"22c7":function(t,e,n){var i=n("b1bf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("ce4386fe",i,!0,{sourceMap:!1,shadowMode:!1})},"3b76":function(t,e,n){var i=n("615e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1ea274ff",i,!0,{sourceMap:!1,shadowMode:!1})},4401:function(t,e,n){"use strict";e["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["wxsswipe"]=function(t){var e=!1;function n(t,n){var i=t.instance,o=i.getDataset().disabled,s=i.getState();a(i,n),o=("string"===typeof o?JSON.parse(o):o)||!1,o||(i.requestAnimationFrame((function(){i.removeClass("ani"),n.callMethod("closeSwipe")})),s.x=s.left||0,function(t){var n=t.instance,i=n.getState();r(n);var o=t.touches[0];e&&u()&&(o=t);i.startX=o.clientX,i.startY=o.clientY}(t))}function i(t,n){var i=t.instance,o=i.getDataset().disabled,a=i.getState();o=("string"===typeof o?JSON.parse(o):o)||!1,o||(function(t){var n=t.instance,i=n.getState(),o=t.touches[0];e&&u()&&(o=t);i.deltaX=o.clientX-i.startX,i.deltaY=o.clientY-i.startY,i.offsetY=Math.abs(i.deltaY),i.offsetX=Math.abs(i.deltaX),i.direction=i.direction||function(t,e){if(t>e&&t>10)return"horizontal";if(e>t&&e>10)return"vertical";return""}(i.offsetX,i.offsetY)}(t),"horizontal"===a.direction&&(t.preventDefault&&t.preventDefault(),s(a.x+a.deltaX,i,n)))}function o(t,e){var n=t.instance,i=n.getDataset().disabled,o=n.getState();i=("string"===typeof i?JSON.parse(i):i)||!1,i||function(t,e,n){var i=e.getState(),o=i.threshold,s=(i.position,i.isopen||"none"),a=i.leftWidth,r=i.rightWidth;if(0===i.deltaX)return void c("none",e,n);c("none"===s&&r>0&&-t>o||"none"!==s&&r>0&&r+t<o?"right":"none"===s&&a>0&&t>o||"none"!==s&&a>0&&a-t<o?"left":"none",e,n)}(o.left,n,e)}function s(t,e,n){t=t||0;var i=e.getState(),o=i.leftWidth,s=i.rightWidth;i.left=function(t,e,n){return Math.min(Math.max(t,e),n)}(t,-s,o),e.requestAnimationFrame((function(){e.setStyle({transform:"translateX("+i.left+"px)","-webkit-transform":"translateX("+i.left+"px)"})}))}function a(t,e){var n,i,o=t.getState(),s=e.selectComponent(".button-group--left"),a=e.selectComponent(".button-group--right");n=s.getBoundingClientRect(),i=a.getBoundingClientRect(),o.leftWidth=n.width||0,o.rightWidth=i.width||0,o.threshold=t.getDataset().threshold}function c(t,e,n){var i=e.getState(),o=i.leftWidth,a=i.rightWidth,c="";switch(i.isopen=i.isopen?i.isopen:"none",t){case"left":c=o;break;case"right":c=-a;break;default:c=0}i.isopen!==t&&(i.throttle=!0,n.callMethod("change",{open:t})),i.isopen=t,e.requestAnimationFrame((function(){e.addClass("ani"),s(c,e)}))}function r(t){var e=t.getState();e.direction="",e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0}function u(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<e.length-1;i++)if(t.indexOf(e[i])>0){n=!1;break}return n}"object"===typeof window&&(e=!0);var l=!1;return t.exports={showWatch:function(t,e,n,i){var o=i.getState();a(i,n),t&&"none"!==t?c(t,i,n):(o.left&&c("none",i,n),r(i))},touchstart:n,touchmove:i,touchend:o,mousedown:function(t,i){e&&u()&&(n(t,i),l=!0)},mousemove:function(t,n){e&&u()&&l&&i(t,n)},mouseup:function(t,n){e&&u()&&(o(t,n),l=!1)},mouseleave:function(t,n){e&&u()&&(l=!1)}},t.exports}({exports:{}})}},"48ae":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={};e.default=i},"56f0":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("159b");e.default={name:"uniSwipeAction",data:function(){return{}},created:function(){this.children=[]},methods:{resize:function(){},closeAll:function(){this.children.forEach((function(t){t.is_show="none"}))},closeOther:function(t){this.openItem&&this.openItem!==t&&(this.openItem.is_show="none"),this.openItem=t}}}},"59e6":function(t,e,n){"use strict";n.r(e);var i=n("ada9"),o=n("62ee");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"44d8bc26",null,!1,i["a"],void 0);e["default"]=c.exports},"615e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swipe[data-v-4fc4ab3c]{position:relative;overflow:hidden}.uni-swipe_box[data-v-4fc4ab3c]{display:flex;flex-shrink:0;position:relative}.uni-swipe_text--center[data-v-4fc4ab3c]{width:100%;cursor:grab}.uni-swipe_button-group[data-v-4fc4ab3c]{box-sizing:border-box;display:flex;flex-direction:row;position:absolute;top:0;bottom:0;cursor:pointer}.button-group--left[data-v-4fc4ab3c]{left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.button-group--right[data-v-4fc4ab3c]{right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.uni-swipe_button[data-v-4fc4ab3c]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 20px}.uni-swipe_button-text[data-v-4fc4ab3c]{flex-shrink:0;font-size:14px}.ani[data-v-4fc4ab3c]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:cubic-bezier(.165,.84,.44,1)}',""]),t.exports=e},"62ee":function(t,e,n){"use strict";n.r(e);var i=n("56f0"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"825e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swipe"},[n("v-uni-view",{wxsProps:{"change:prop":"is_show"},staticClass:"uni-swipe_box",attrs:{"change:prop":t.renderswipe.showWatch,prop:t.is_show,"data-threshold":t.threshold,"data-disabled":t.disabled+""},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.renderswipe.touchstart(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.renderswipe.touchmove(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.renderswipe.touchend(e,t.$getComponentDescriptor())}}},[n("v-uni-view",{staticClass:"uni-swipe_button-group button-group--left"},[t._t("left",t._l(t.leftOptions,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swipe_button button-hock",style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.appTouchStart.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.appTouchEnd(n,i,e,"left")},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.onClickForPC(i,e,"left")}}},[n("v-uni-text",{staticClass:"uni-swipe_button-text",style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"}},[t._v(t._s(e.text))])],1)})))],2),n("v-uni-view",{staticClass:"uni-swipe_text--center"},[t._t("default")],2),n("v-uni-view",{staticClass:"uni-swipe_button-group button-group--right"},[t._t("right",t._l(t.rightOptions,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swipe_button button-hock",style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.appTouchStart.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.appTouchEnd(n,i,e,"right")},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.onClickForPC(i,e,"right")}}},[n("v-uni-text",{staticClass:"uni-swipe_button-text",style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"}},[t._v(t._s(e.text))])],1)})))],2)],1)],1)},o=[]},8664:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={};e.default=i},"8eaa":function(t,e,n){"use strict";n.r(e);var i=n("fbfa"),o=n("c3c2");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("0e59");var a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"0453db42",null,!1,i["a"],void 0);e["default"]=c.exports},ada9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[this._t("default")],2)},o=[]},ae07:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={showWatch:function(t,e,n,i,o){var s=o.state,a=n.$el||n.$vm&&n.$vm.$el;a&&(this.getDom(i,n,o),t&&"none"!==t?this.openState(t,i,n,o):(s.left&&this.openState("none",i,n,o),this.resetTouchStatus(i,o)))},touchstart:function(t,e,n){var i=t.instance,o=i.getDataset().disabled,s=n.state;this.getDom(i,e,n),o=this.getDisabledType(o),o||(i.requestAnimationFrame((function(){i.removeClass("ani"),e.callMethod("closeSwipe")})),s.x=s.left||0,this.stopTouchStart(t,e,n))},touchmove:function(t,e,n){var i=t.instance;if(i){var o=i.getDataset().disabled,s=n.state;if(o=this.getDisabledType(o),!o&&(this.stopTouchMove(t,n),"horizontal"===s.direction)){t.preventDefault&&t.preventDefault();var a=s.x+s.deltaX;this.move(a,i,e,n)}}},touchend:function(t,e,n){var i=t.instance,o=i.getDataset().disabled,s=n.state;o=this.getDisabledType(o),o||this.moveDirection(s.left,i,e,n)},move:function(t,e,n,i){t=t||0;var o=i.state,s=o.leftWidth,a=o.rightWidth;o.left=this.range(t,-a,s),e.requestAnimationFrame((function(){e.setStyle({transform:"translateX("+o.left+"px)","-webkit-transform":"translateX("+o.left+"px)"})}))},getDom:function(t,e,n){var i=n.state,o=e.$el||e.$vm&&e.$vm.$el,s=o.querySelector(".button-group--left"),a=o.querySelector(".button-group--right");i.leftWidth=s.offsetWidth||0,i.rightWidth=a.offsetWidth||0,i.threshold=t.getDataset().threshold},getDisabledType:function(t){return("string"===typeof t?JSON.parse(t):t)||!1},range:function(t,e,n){return Math.min(Math.max(t,e),n)},moveDirection:function(t,e,n,i){var o=i.state,s=o.threshold,a=(o.position,o.isopen||"none"),c=o.leftWidth,r=o.rightWidth;0!==o.deltaX?"none"===a&&r>0&&-t>s||"none"!==a&&r>0&&r+t<s?this.openState("right",e,n,i):"none"===a&&c>0&&t>s||"none"!==a&&c>0&&c-t<s?this.openState("left",e,n,i):this.openState("none",e,n,i):this.openState("none",e,n,i)},openState:function(t,e,n,i){var o=this,s=i.state,a=s.leftWidth,c=s.rightWidth,r="";switch(s.isopen=s.isopen?s.isopen:"none",t){case"left":r=a;break;case"right":r=-c;break;default:r=0}s.isopen!==t&&(s.throttle=!0,n.callMethod("change",{open:t})),s.isopen=t,e.requestAnimationFrame((function(){e.addClass("ani"),o.move(r,e,n,i)}))},getDirection:function(t,e){return t>e&&t>10?"horizontal":e>t&&e>10?"vertical":""},resetTouchStatus:function(t,e){var n=e.state;n.direction="",n.deltaX=0,n.deltaY=0,n.offsetX=0,n.offsetY=0},stopTouchStart:function(t,e,n){var i=t.instance,o=n.state;this.resetTouchStatus(i,n);var s=t.touches[0];o.startX=s.clientX,o.startY=s.clientY},stopTouchMove:function(t,e){t.instance;var n=e.state,i=t.touches[0];n.deltaX=i.clientX-n.startX,n.deltaY=i.clientY-n.startY,n.offsetY=Math.abs(n.deltaY),n.offsetX=Math.abs(n.deltaX),n.direction=n.direction||this.getDirection(n.offsetX,n.offsetY)}};e.default=i},b1bf:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content-box[data-v-0453db42]{flex:1;height:44px;line-height:44px;padding:0 15px;position:relative;background-color:#fff;border-bottom-color:#f5f5f5;border-bottom-width:1px;border-bottom-style:solid}.content-text[data-v-0453db42]{font-size:15px}.example-body[data-v-0453db42]{display:flex;flex-direction:row;justify-content:center;padding:10px 0;background-color:#fff}.button[data-v-0453db42]{border-color:#e5e5e5;border-style:solid;border-width:1px;padding:4px 8px;border-radius:4px}.button-text[data-v-0453db42]{font-size:15px}.slot-button[data-v-0453db42]{display:flex;height:100%;flex:1;flex-direction:row;justify-content:center;align-items:center;padding:0 20px;background-color:#ff5a5f}.slot-button-text[data-v-0453db42]{color:#fff;font-size:14px}',""]),t.exports=e},bc72:function(t,e,n){"use strict";n.r(e);var i=n("d940"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},c1fb:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("a434"),n("14d9");var i={components:{},data:function(){return{show:!1,isOpened:"none",options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#F56C6C"}}],swipeList:[{options:[{text:"添加",style:{backgroundColor:"#F56C6C"}}],id:0,content:"左滑点击添加新增一条数据"},{id:1,options:[{text:"置顶"},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item2"},{id:2,options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item3"}]}},onReady:function(){var t=this;setTimeout((function(){t.isOpened="right"}),1e3),uni.$on("update",(function(e){console.log(111),t.swipeClick({content:{text:"添加"}})}))},methods:{contentClick:function(){console.log("点击内容"),uni.showToast({title:"点击内容",icon:"none"})},bindClick:function(t){console.log(t),uni.showToast({title:"点击了".concat("left"===t.position?"左侧":"右侧"," ").concat(t.content.text,"按钮"),icon:"none"})},setOpened:function(){"none"!==this.isOpened?"left"!==this.isOpened?"right"!==this.isOpened||(this.isOpened="none"):this.isOpened="right":this.isOpened="left"},change:function(t){this.isOpened=t,console.log("返回：",t)},swipeChange:function(t,e){console.log("返回：",t),console.log("当前索引：",e)},swipeClick:function(t,e){var n=this,i=t.content;"删除"===i.text?uni.showModal({title:"提示",content:"是否删除",success:function(t){t.confirm?n.swipeList.splice(e,1):t.cancel&&console.log("用户点击取消")}}):"添加"===i.text?this.swipeList.length<10?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"+(new Date).getTime()}),uni.showToast({title:"添加了一条数据",icon:"none"})):uni.showToast({title:"最多添加十条数据",icon:"none"}):uni.showToast({title:"点击了".concat(t.content.text,"按钮"),icon:"none"})}}};e.default=i},c3c2:function(t,e,n){"use strict";n.r(e);var i=n("c1fb"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},d2e1:function(t,e,n){"use strict";var i=n("3b76"),o=n.n(i);o.a},d7cf:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("14d9");var i,o,s=n("ed14");o=(0,s.isPC)(),i={data:function(){return{is_show:"none"}},watch:{show:function(t){this.is_show=this.show}},created:function(){this.swipeaction=this.getSwipeAction(),void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted:function(){this.is_show=this.show},methods:{closeSwipe:function(t){this.autoClose&&this.swipeaction.closeOther(this)},change:function(t){this.$emit("change",t.open),this.is_show!==t.open&&(this.is_show=t.open)},appTouchStart:function(t){if(!o){var e=t.changedTouches[0].clientX;this.clientX=e,this.timestamp=(new Date).getTime()}},appTouchEnd:function(t,e,n,i){if(!o){var s=t.changedTouches[0].clientX,a=Math.abs(this.clientX-s),c=(new Date).getTime()-this.timestamp;a<40&&c<300&&this.$emit("click",{content:n,index:e,position:i})}},onClickForPC:function(t,e,n){o&&this.$emit("click",{content:e,index:t,position:n})}}};var a=i;e.default=a},d940:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("ae07")),s={mounted:function(t,e,n){this.state={}},methods:{showWatch:function(t,e,n,i){o.default.showWatch(t,e,n,i,this)},touchstart:function(t,e){o.default.touchstart(t,e,this)},touchmove:function(t,e){o.default.touchmove(t,e,this)},touchend:function(t,e){o.default.touchend(t,e,this)}}};e.default=s},dc46:function(t,e,n){"use strict";n.r(e);var i=n("825e"),o=n("bc72");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var a=n("038c");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("d2e1");var c=n("f0c5"),r=n("4401");o["default"].__module="renderswipe";var u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4fc4ab3c",null,!1,i["a"],o["default"]);"function"===typeof r["a"]&&Object(r["a"])(u),e["default"]=u.exports},ed14:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.isPC=function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<e.length-1;i++)if(t.indexOf(e[i])>0){n=!1;break}return n},n("c975")},fbfa:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniCard:n("5bba").default,uniSection:n("e0e2").default,uniSwipeAction:n("59e6").default,uniSwipeActionItem:n("dc46").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("通过滑动触发选项的容器，容器内可放置列表等组件，通过左右滑动来触发一些操作。")])],1),n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{"left-options":t.options2,threshold:0,"right-options":t.options1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentClick.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"content-text"},[t._v("使用数据填充")])],1)],1),n("uni-swipe-action-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick.apply(void 0,arguments)}},scopedSlots:t._u([{key:"left",fn:function(){return[n("v-uni-view",{staticClass:"slot-button"},[n("v-uni-text",{staticClass:"slot-button-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick({position:"left",content:{text:"置顶"}})}}},[t._v("置顶")])],1)]},proxy:!0},{key:"right",fn:function(){return[n("v-uni-view",{staticClass:"slot-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick({position:"right",content:{text:"删除"}})}}},[n("v-uni-text",{staticClass:"slot-button-text"},[t._v("删除")])],1)]},proxy:!0}])},[n("v-uni-view",{staticClass:"content-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentClick.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"content-text"},[t._v("使用左右插槽")])],1)],1),n("uni-swipe-action-item",{attrs:{"right-options":t.options1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick.apply(void 0,arguments)}},scopedSlots:t._u([{key:"left",fn:function(){return[n("v-uni-view",{staticClass:"slot-button"},[n("v-uni-text",{staticClass:"slot-button-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick({position:"left",content:{text:"置顶"}})}}},[t._v("置顶")])],1)]},proxy:!0}])},[n("v-uni-view",{staticClass:"content-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentClick.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"content-text"},[t._v("数据与插槽混合使用")])],1)],1)],1),n("uni-section",{attrs:{title:"禁止滑动",type:"line"}}),n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{disabled:!0}},[n("v-uni-view",{staticClass:"content-box"},[n("v-uni-text",{staticClass:"content-text"},[t._v("禁止左右滚动")])],1)],1)],1),n("uni-section",{attrs:{title:"使用变量控制开关",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setOpened.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"button-text"},[t._v("当前状态："+t._s(t.isOpened))])],1)],1),n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{"left-options":t.options2,"right-options":t.options2,show:t.isOpened,"auto-close":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content-box"},[n("v-uni-text",{staticClass:"content-text"},[t._v("使用变量控制SwipeAction的开启状态")])],1)],1)],1),n("uni-section",{attrs:{title:"swipe-action 列表",type:"line"}}),n("uni-swipe-action",{ref:"swipeAction"},t._l(t.swipeList,(function(e,i){return n("uni-swipe-action-item",{key:e.id,attrs:{"right-options":e.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swipeChange(e,i)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.swipeClick(e,i)}}},[n("v-uni-view",{staticClass:"content-box"},[n("v-uni-text",{staticClass:"content-text"},[t._v(t._s(e.content))])],1)],1)})),1)],1)},s=[]}}]);
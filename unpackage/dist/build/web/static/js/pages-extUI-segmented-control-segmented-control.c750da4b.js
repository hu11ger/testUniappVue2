(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-segmented-control-segmented-control"],{"0cfba":function(t,e,n){"use strict";n.r(e);var i=n("eaa3"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},4966:function(t,e,n){var i=n("d0d3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("6f034beb",i,!0,{sourceMap:!1,shadowMode:!1})},"56e7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example-body[data-v-9e21f59a]{display:flex;flex-direction:row;padding:0}.uni-common-mt[data-v-9e21f59a]{margin-top:30px}.uni-padding-wrap[data-v-9e21f59a]{padding:0 30px}.content[data-v-9e21f59a]{display:flex;justify-content:center;align-items:center;height:150px;text-align:center}.content-text[data-v-9e21f59a]{font-size:14px;color:#666}.color-tag[data-v-9e21f59a]{width:25px;height:25px}.uni-list[data-v-9e21f59a]{flex:1}.uni-list-item[data-v-9e21f59a]{display:flex;flex:1;flex-direction:row;background-color:#fff}.uni-list-item__container[data-v-9e21f59a]{padding:12px 15px;width:100%;flex:1;position:relative;display:flex;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#eee}.uni-list-item__content-title[data-v-9e21f59a]{font-size:14px}',""]),t.exports=e},"5f1a":function(t,e,n){"use strict";var i=n("8c55"),o=n.n(i);o.a},"645c":function(t,e,n){"use strict";n.r(e);var i=n("a8ed"),o=n("880a");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("5f1a");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"9e21f59a",null,!1,i["a"],void 0);e["default"]=s.exports},"84cf":function(t,e,n){"use strict";var i=n("4966"),o=n.n(i);o.a},"880a":function(t,e,n){"use strict";n.r(e);var i=n("c851"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"8c55":function(t,e,n){var i=n("56e7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("4ca8cd5e",i,!0,{sourceMap:!1,shadowMode:!1})},a8ed:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniCard:n("5bba").default,uniSection:n("e0e2").default,uniSegmentedControl:n("cd3c").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("标签组件多用于商品分类、重点内容显示等场景。")])],1),n("uni-section",{attrs:{title:"实心标签",type:"line"}},[n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":t.styleType,"active-color":t.activeColor},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"content"},[0===t.current?n("v-uni-view",[n("v-uni-text",{staticClass:"content-text"},[t._v("选项卡1的内容")])],1):t._e(),1===t.current?n("v-uni-view",[n("v-uni-text",{staticClass:"content-text"},[t._v("选项卡2的内容")])],1):t._e(),2===t.current?n("v-uni-view",[n("v-uni-text",{staticClass:"content-text"},[t._v("选项卡3的内容")])],1):t._e()],1)],1),n("uni-section",{attrs:{title:"Style",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.styleChange.apply(void 0,arguments)}}},t._l(t.styles,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-list-item"},[n("v-uni-view",{staticClass:"uni-list-item__container"},[n("v-uni-view",{staticClass:"uni-list-item__content"},[n("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(e.text))])],1),n("v-uni-view",{staticClass:"uni-list-item__extra"},[n("v-uni-radio",{attrs:{value:e.value,checked:e.checked}})],1)],1)],1)})),1)],1),n("uni-section",{attrs:{title:"Color",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.colorChange.apply(void 0,arguments)}}},t._l(t.colors,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-list-item"},[n("v-uni-view",{staticClass:"uni-list-item__container"},[n("v-uni-view",{staticClass:"uni-list-item__content"},[n("v-uni-view",{staticClass:"color-tag",style:{backgroundColor:e}})],1),n("v-uni-view",{staticClass:"uni-list-item__extra"},[n("v-uni-radio",{attrs:{value:e,checked:i===t.colorIndex}})],1)],1)],1)})),1)],1)],1)},r=[]},c851:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{items:["选项卡1","选项卡2","选项卡3"],styles:[{value:"button",text:"按钮",checked:!0},{value:"text",text:"文字"}],colors:["#007aff","#4cd964","#dd524d"],current:0,colorIndex:0,activeColor:"#007aff",styleType:"button"}},methods:{onClickItem:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex)},styleChange:function(t){this.styleType!==t.detail.value&&(this.styleType=t.detail.value)},colorChange:function(t){this.styleType!==t.detail.value&&(console.log(t.detail.value),this.activeColor=t.detail.value)}}};e.default=i},cd3c:function(t,e,n){"use strict";n.r(e);var i=n("d2e13"),o=n("0cfba");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("84cf");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"331973e9",null,!1,i["a"],void 0);e["default"]=s.exports},d0d3:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.segmented-control[data-v-331973e9]{display:flex;box-sizing:border-box;flex-direction:row;height:36px;overflow:hidden;cursor:pointer}.segmented-control__item[data-v-331973e9]{display:inline-flex;box-sizing:border-box;position:relative;flex:1;justify-content:center;align-items:center}.segmented-control__item--button[data-v-331973e9]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-331973e9]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-331973e9]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-331973e9]{border-bottom-style:solid;border-bottom-width:2px;padding:6px 0}.segmented-control__text[data-v-331973e9]{font-size:14px;line-height:20px;text-align:center}',""]),t.exports=e},d2e13:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control__item",class:["text"===t.styleType?"":"segmented-control__item--button",i===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===i&&"button"===t.styleType?"segmented-control__item--button--first":"",i===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:i===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(i)}}},[n("v-uni-view",[n("v-uni-text",{staticClass:"segmented-control__text",class:"text"===t.styleType&&i===t.currentIndex?"segmented-control__item--text":"",style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(e))])],1)],1)})),1)},o=[]},eaa3:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};e.default=i}}]);
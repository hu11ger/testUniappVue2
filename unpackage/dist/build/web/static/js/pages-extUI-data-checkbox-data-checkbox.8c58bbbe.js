(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-data-checkbox-data-checkbox"],{"16e7":function(t,e,a){"use strict";var i=a("aff1"),n=a.n(i);n.a},"2ac3":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{radio1:0,radio2:0,radio3:0,radio4:0,radio5:0,radio6:0,checkbox1:[0],checkbox2:[0],checkbox3:[0],checkbox4:[0],checkbox5:[0],checkbox6:[0],sex:[{text:"男",value:0},{text:"女",value:1},{text:"未知",value:2}],sex1:[{text:"男",value:0},{text:"女",value:1,disable:!0},{text:"未知",value:2}],hobby:[{text:"足球",value:0},{text:"篮球",value:1},{text:"游泳",value:2}],hobby2:[{text:"足球",value:0,disable:!0},{text:"篮球",value:1,disable:!0},{text:"游泳",value:2}]}},onLoad:function(){},onReady:function(){},methods:{}}},"6f29":function(t,e,a){"use strict";a.r(e);var i=a("2ac3"),n=a.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);e["default"]=n.a},"8f49":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return i}));var i={uniCard:a("5bba").default,uniSection:a("e0e2").default,uniDataCheckbox:a("2033").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[a("v-uni-text",{staticClass:"uni-h6"},[t._v("通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用")])],1),a("uni-section",{attrs:{title:"单选",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("单选选中："+t._s(JSON.stringify(t.radio1)))]),a("uni-data-checkbox",{attrs:{localdata:t.sex},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}})],1)],1),a("uni-section",{attrs:{title:"多选",subTitle:"使用multiple属性开启多选",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("多选选中："+t._s(JSON.stringify(t.checkbox1)))]),a("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.hobby},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}})],1)],1),a("uni-section",{attrs:{title:"最大最小值",subTitle:"使用 min / max 设置多选的最大最小值,单选无效"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.checkbox6)))]),a("uni-data-checkbox",{attrs:{min:"1",max:"2",multiple:!0,localdata:t.hobby},model:{value:t.checkbox6,callback:function(e){t.checkbox6=e},expression:"checkbox6"}})],1)],1),a("uni-section",{attrs:{title:"更多样式 - button",subTitle:"使用mode=button属性使用按钮样式",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5"},[a("v-uni-view",{staticClass:"text"},[t._v("单选选中："+t._s(JSON.stringify(t.radio2)))]),a("uni-data-checkbox",{attrs:{mode:"button",localdata:t.sex},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}})],1),a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("多选选中："+t._s(JSON.stringify(t.checkbox2)))]),a("uni-data-checkbox",{attrs:{mode:"button",multiple:!0,localdata:t.hobby},model:{value:t.checkbox2,callback:function(e){t.checkbox2=e},expression:"checkbox2"}})],1)],1),a("uni-section",{attrs:{title:"更多样式 - tag",subTitle:"使用mode=tag属性使用标签样式",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5"},[a("v-uni-view",{staticClass:"text"},[t._v("单选选中："+t._s(JSON.stringify(t.radio3)))]),a("uni-data-checkbox",{attrs:{mode:"tag",localdata:t.sex},model:{value:t.radio3,callback:function(e){t.radio3=e},expression:"radio3"}})],1),a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("多选选中："+t._s(JSON.stringify(t.checkbox3)))]),a("uni-data-checkbox",{attrs:{mode:"tag",multiple:!0,localdata:t.hobby},model:{value:t.checkbox3,callback:function(e){t.checkbox3=e},expression:"checkbox3"}})],1)],1),a("uni-section",{attrs:{title:"禁用",subTitle:"数据中使用 disable 属性实现单独禁用,组件使用 disable 属性实现全部禁用",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5"},[a("v-uni-view",{staticClass:"text"},[t._v("单选选中："+t._s(JSON.stringify(t.radio4)))]),a("uni-data-checkbox",{attrs:{mode:"button",localdata:t.sex1},model:{value:t.radio4,callback:function(e){t.radio4=e},expression:"radio4"}})],1),a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("多选选中："+t._s(JSON.stringify(t.checkbox4)))]),a("uni-data-checkbox",{attrs:{mode:"button",multiple:!0,localdata:t.hobby2},model:{value:t.checkbox4,callback:function(e){t.checkbox4=e},expression:"checkbox4"}})],1)],1),a("uni-section",{attrs:{title:"自定义高亮颜色",subTitle:"使用 selectedColor 属性修改颜色",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5"},[a("v-uni-view",{staticClass:"text"},[t._v("单选选中："+t._s(JSON.stringify(t.radio5)))]),a("uni-data-checkbox",{attrs:{selectedColor:"red",localdata:t.sex1},model:{value:t.radio5,callback:function(e){t.radio5=e},expression:"radio5"}})],1),a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("v-uni-view",{staticClass:"text"},[t._v("多选选中："+t._s(JSON.stringify(t.checkbox5)))]),a("uni-data-checkbox",{attrs:{selectedColor:"red",multiple:!0,localdata:t.hobby2},model:{value:t.checkbox5,callback:function(e){t.checkbox5=e},expression:"checkbox5"}})],1)],1)],1)},c=[]},aff1:function(t,e,a){var i=a("b30e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3cb42e37",i,!0,{sourceMap:!1,shadowMode:!1})},b30e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.text[data-v-66d7aaac]{font-size:12px;color:#666;margin-top:5px}.uni-px-5[data-v-66d7aaac]{padding-left:10px;padding-right:10px}.uni-pb-5[data-v-66d7aaac]{padding-bottom:10px}',""]),t.exports=e},dbe4:function(t,e,a){"use strict";a.r(e);var i=a("8f49"),n=a("6f29");for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);a("16e7");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"66d7aaac",null,!1,i["a"],void 0);e["default"]=s.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-group-group"],{"00d7":function(n,t,e){"use strict";e.r(t);var i=e("a24e"),a=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},"10bf":function(n,t,e){"use strict";e.r(t);var i=e("c0a5"),a=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},"17e6":function(n,t,e){"use strict";e.r(t);var i=e("be6e"),a=e("00d7");for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("abc0");var u=e("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5345ee28",null,!1,i["a"],void 0);t["default"]=o.exports},6843:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-group[data-v-5345ee28]{background:#fff;margin-top:10px}.uni-group__title[data-v-5345ee28]{display:flex;flex-direction:row;align-items:center;padding-left:15px;height:40px;background-color:#eee;font-weight:400;color:#666}.uni-group__content[data-v-5345ee28]{padding:15px}.group-conent-padding[data-v-5345ee28]{padding:0 15px}.uni-group__title-text[data-v-5345ee28]{font-size:14px;color:#666}.distraction[data-v-5345ee28]{flex-direction:row;align-items:center}.uni-group--card[data-v-5345ee28]{margin:10px;border-radius:5px;overflow:hidden;box-shadow:0 0 5px 1px rgba(0,0,0,.08)}',""]),n.exports=t},"8cc7":function(n,t,e){"use strict";var i=e("8cd6"),a=e.n(i);a.a},"8cd6":function(n,t,e){var i=e("9ba1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("4cda2ed0",i,!0,{sourceMap:!1,shadowMode:!1})},"91d8":function(n,t,e){var i=e("6843");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("98c65cd0",i,!0,{sourceMap:!1,shadowMode:!1})},"9ba1":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-wrap[data-v-3b59230c]{flex-direction:column;height:calc(100vh - 44px);flex:1}.scroll[data-v-3b59230c]{flex-direction:column;flex:1}.example-body[data-v-3b59230c]{padding:0;display:block}',""]),n.exports=t},a24e:function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var i={name:"uniGroup",emits:["click"],props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"},stat:{type:Boolean,default:!1}},data:function(){return{margin:!1,border:!1}},watch:{title:function(n){uni.report&&this.stat&&""!==n&&uni.report("title",n)}},created:function(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm:function(){var n=this.$parent,t=n.$options.name;while("uniForms"!==t){if(n=n.$parent,!n)return!1;t=n.$options.name}return n},onClick:function(){this.$emit("click")}}};t.default=i},abc0:function(n,t,e){"use strict";var i=e("91d8"),a=e.n(i);a.a},ac05:function(n,t,e){"use strict";e.r(t);var i=e("b62b"),a=e("10bf");for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("8cc7");var u=e("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3b59230c",null,!1,i["a"],void 0);t["default"]=o.exports},b62b:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var i={uniCard:e("5bba").default,uniSection:e("e0e2").default,uniGroup:e("17e6").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[e("v-uni-text",{staticClass:"uni-h6"},[n._v("分组组件可用于将组件分组，添加间隔，以产生明显的区块。")])],1),e("uni-section",{attrs:{title:"基础分组",type:"line"}},[e("uni-group",[e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")])],1),e("uni-group",{attrs:{title:"基本模式","margin-top":"20"}},[e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")])],1)],1),e("uni-section",{attrs:{title:"卡片分组",type:"line"}},[e("uni-group",{attrs:{mode:"card"}},[e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")])],1),e("uni-group",{attrs:{title:"card 模式",mode:"card"}},[e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")]),e("v-uni-view",[n._v("分组内容")])],1)],1)],1)},r=[]},be6e:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"uni-group",class:["uni-group--"+n.mode,n.margin?"group-margin":""],style:{marginTop:n.top+"px"}},[n._t("title",[n.title?e("v-uni-view",{staticClass:"uni-group__title",style:{"padding-left":n.border?"30px":"15px"}},[e("v-uni-text",{staticClass:"uni-group__title-text"},[n._v(n._s(n.title))])],1):n._e()]),e("v-uni-view",{staticClass:"uni-group__content",class:{"group-conent-padding":n.border}},[n._t("default")],2)],2)},a=[]},c0a5:function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={components:{},data:function(){return{appear:!1,name:"",mobile:"139 9999 9999",weixin:"sskd",message:"",errorMessage:""}},onReady:function(){},methods:{}}}}]);
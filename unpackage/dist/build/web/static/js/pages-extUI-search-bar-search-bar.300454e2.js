(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-search-bar-search-bar"],{"11ca":function(e,n,a){"use strict";a.r(n);var t=a("25ba"),c=a.n(t);for(var i in t)["default"].indexOf(i)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=c.a},"25ba":function(e,n,a){"use strict";a("7a82");var t=a("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("a9e3");var c=a("37dc"),i=t(a("4305")),r=(0,c.initVueI18n)(i.default),o=r.t,l={name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){return{show:!1,showSync:!1,searchVal:""}},computed:{cancelTextI18n:function(){return this.cancelText||o("uni-search-bar.cancel")},placeholderText:function(){return this.placeholder||o("uni-search-bar.placeholder")}},watch:{value:{immediate:!0,handler:function(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler:function(e){var n=this;if(e){if(this.readonly)return;this.show=!0,this.$nextTick((function(){n.showSync=!0}))}}},searchVal:function(e,n){this.$emit("input",e)}},methods:{searchClick:function(){var e=this;this.readonly||this.show||(this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel:function(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard())},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})},blur:function(){uni.hideKeyboard(),this.$emit("blur",{value:this.searchVal})},emitFocus:function(e){this.$emit("focus",e.detail)}}};n.default=l},"27f2":function(e,n,a){"use strict";a.r(n);var t=a("f520"),c=a("11ca");for(var i in c)["default"].indexOf(i)<0&&function(e){a.d(n,e,(function(){return c[e]}))}(i);a("924f");var r=a("f0c5"),o=Object(r["a"])(c["default"],t["b"],t["c"],!1,null,"487feab8",null,!1,t["a"],void 0);n["default"]=o.exports},3885:function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search-result[data-v-76a766e5]{padding-top:10px;padding-bottom:20px;text-align:center}.search-result-text[data-v-76a766e5]{text-align:center;font-size:14px;color:#666}.example-body[data-v-76a766e5]{display:block;padding:0}.uni-mt-10[data-v-76a766e5]{margin-top:10px}',""]),e.exports=n},4305:function(e,n,a){"use strict";a("7a82");var t=a("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=t(a("c8f56")),i=t(a("e9bd")),r=t(a("695e")),o={en:c.default,"zh-Hans":i.default,"zh-Hant":r.default};n.default=o},"695e":function(e){e.exports=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}')},8096:function(e,n,a){"use strict";a.r(n);var t=a("f930"),c=a.n(t);for(var i in t)["default"].indexOf(i)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=c.a},"893d":function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-searchbar[data-v-487feab8]{display:flex;flex-direction:row;position:relative;padding:10px}.uni-searchbar__box[data-v-487feab8]{display:flex;box-sizing:border-box;overflow:hidden;position:relative;flex:1;justify-content:center;flex-direction:row;align-items:center;height:36px;padding:5px 8px 5px 0}.uni-searchbar__box-icon-search[data-v-487feab8]{display:flex;flex-direction:row;padding:0 8px;justify-content:center;align-items:center;color:#b3b3b3}.uni-searchbar__box-search-input[data-v-487feab8]{flex:1;font-size:14px;color:#333}.uni-searchbar__box-icon-clear[data-v-487feab8]{align-items:center;line-height:24px;padding-left:8px;cursor:pointer}.uni-searchbar__text-placeholder[data-v-487feab8]{font-size:14px;color:#b3b3b3;margin-left:5px}.uni-searchbar__cancel[data-v-487feab8]{padding-left:10px;line-height:36px;font-size:14px;color:#333;cursor:pointer}',""]),e.exports=n},"924f":function(e,n,a){"use strict";var t=a("a50a"),c=a.n(t);c.a},"95b2":function(e,n,a){"use strict";var t=a("e6a8"),c=a.n(t);c.a},a50a:function(e,n,a){var t=a("893d");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=a("4f06").default;c("26a85170",t,!0,{sourceMap:!1,shadowMode:!1})},c8f56:function(e){e.exports=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"}')},d4fb:function(e,n,a){"use strict";a.d(n,"b",(function(){return c})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var t={uniCard:a("5bba").default,uniSection:a("e0e2").default,uniSearchBar:a("27f2").default,uniIcons:a("4f85").default},c=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-uni-view",[a("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[a("v-uni-text",{staticClass:"uni-h6"},[e._v("搜索栏组件，通常用于搜索商品、文章等。")])],1),a("uni-section",{attrs:{title:"基本用法",type:"line"}},[a("uni-search-bar",{attrs:{focus:!0},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)},blur:function(n){arguments[0]=n=e.$handleEvent(n),e.blur.apply(void 0,arguments)},focus:function(n){arguments[0]=n=e.$handleEvent(n),e.focus.apply(void 0,arguments)},input:function(n){arguments[0]=n=e.$handleEvent(n),e.input.apply(void 0,arguments)},cancel:function(n){arguments[0]=n=e.$handleEvent(n),e.cancel.apply(void 0,arguments)},clear:function(n){arguments[0]=n=e.$handleEvent(n),e.clear.apply(void 0,arguments)}},model:{value:e.searchValue,callback:function(n){e.searchValue=n},expression:"searchValue"}}),a("v-uni-view",{staticClass:"search-result"},[a("v-uni-text",{staticClass:"search-result-text"},[e._v("当前输入为："+e._s(e.searchValue))])],1)],1),a("uni-section",{attrs:{title:"自定义样式",subTitle:"使用 bgColor 属性自定义背景色",type:"line"}},[a("uni-search-bar",{attrs:{placeholder:"自定义背景色",bgColor:"#EEEEEE"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)}}})],1),a("uni-section",{attrs:{title:"只读样式",subTitle:"使用 readonly 使搜索框只读",type:"line"}},[a("uni-search-bar",{attrs:{readonly:!0,placeholder:"自定义背景色"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)}}})],1),a("uni-section",{attrs:{title:"自定义icon",type:"line"}},[a("uni-search-bar",{attrs:{placeholder:"自定义searchIcon","cancel-text":"cancel"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)},cancel:function(n){arguments[0]=n=e.$handleEvent(n),e.cancel.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{slot:"searchIcon",color:"#999999",size:"18",type:"home"},slot:"searchIcon"})],1)],1),a("uni-section",{attrs:{title:"控制清除/取消按钮",subTitle:"使用 clearButton 属性设置清除按钮",type:"line"}},[a("uni-search-bar",{attrs:{radius:"5",placeholder:"一直显示",clearButton:"always",cancelButton:"always"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)},cancel:function(n){arguments[0]=n=e.$handleEvent(n),e.cancel.apply(void 0,arguments)}}}),a("uni-search-bar",{staticClass:"uni-mt-10",attrs:{radius:"5",placeholder:"自动显示隐藏",clearButton:"auto",cancelButton:"none"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)}}}),a("uni-search-bar",{staticClass:"uni-mt-10",attrs:{radius:"100",placeholder:"一直不显示",clearButton:"none",cancelButton:"none"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)}}})],1)],1)},i=[]},d9666:function(e,n,a){"use strict";a.r(n);var t=a("d4fb"),c=a("8096");for(var i in c)["default"].indexOf(i)<0&&function(e){a.d(n,e,(function(){return c[e]}))}(i);a("95b2");var r=a("f0c5"),o=Object(r["a"])(c["default"],t["b"],t["c"],!1,null,"76a766e5",null,!1,t["a"],void 0);n["default"]=o.exports},e6a8:function(e,n,a){var t=a("3885");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=a("4f06").default;c("5c9678c2",t,!0,{sourceMap:!1,shadowMode:!1})},e9bd:function(e){e.exports=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"}')},f520:function(e,n,a){"use strict";a.d(n,"b",(function(){return c})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var t={uniIcons:a("4f85").default},c=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-uni-view",{staticClass:"uni-searchbar"},[a("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:e.radius+"px",backgroundColor:e.bgColor},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.searchClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-searchbar__box-icon-search"},[e._t("searchIcon",[a("uni-icons",{attrs:{color:"#c0c4cc",size:"18",type:"search"}})])],2),e.show||e.searchVal?a("v-uni-input",{staticClass:"uni-searchbar__box-search-input",attrs:{focus:e.showSync,disabled:e.readonly,placeholder:e.placeholderText,maxlength:e.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.confirm.apply(void 0,arguments)},blur:function(n){arguments[0]=n=e.$handleEvent(n),e.blur.apply(void 0,arguments)},focus:function(n){arguments[0]=n=e.$handleEvent(n),e.emitFocus.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(n){e.searchVal=n},expression:"searchVal"}}):a("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[e._v(e._s(e.placeholder))]),e.show&&("always"===e.clearButton||"auto"===e.clearButton&&""!==e.searchVal)&&!e.readonly?a("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clear.apply(void 0,arguments)}}},[e._t("clearIcon",[a("uni-icons",{attrs:{color:"#c0c4cc",size:"20",type:"clear"}})])],2):e._e()],1),"always"===e.cancelButton||e.show&&"auto"===e.cancelButton?a("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelTextI18n))]):e._e()],1)},i=[]},f930:function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{searchValue:"123123"}},methods:{search:function(e){uni.showToast({title:"搜索："+e.value,icon:"none"})},input:function(e){console.log("----input:",e)},clear:function(e){uni.showToast({title:"clear事件，清除值为："+e.value,icon:"none"})},blur:function(e){uni.showToast({title:"blur事件，输入值为："+e.value,icon:"none"})},focus:function(e){uni.showToast({title:"focus事件，输出值为："+e.value,icon:"none"})},cancel:function(e){uni.showToast({title:"点击取消，输入值为："+e.value,icon:"none"})}},onBackPress:function(){}};n.default=t}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-color-color"],{"181e":function(i,t,n){"use strict";n.r(t);var s=n("d6b6"),u=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(i){n.d(t,i,(function(){return s[i]}))}(a);t["default"]=u.a},"3ec9":function(i,t,n){"use strict";n.r(t);var s=n("7804"),u=n("181e");for(var a in u)["default"].indexOf(a)<0&&function(i){n.d(t,i,(function(){return u[i]}))}(a);n("d8ca");var e=n("f0c5"),o=Object(e["a"])(u["default"],s["b"],s["c"],!1,null,"0618d677",null,!1,s["a"],void 0);t["default"]=o.exports},"6ada":function(i,t,n){var s=n("24fb");t=s(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.box[data-v-0618d677]{display:flex;flex-direction:column;min-height:50px;font-size:14px;overflow:hidden}.box .item-box[data-v-0618d677]{display:flex;align-items:center;justify-content:center;flex-direction:row;height:50px;overflow:hidden}.box .item-box .item[data-v-0618d677]{display:flex;align-items:center;justify-content:center;flex:1;height:50px}.box-base[data-v-0618d677]{display:flex;align-items:center;justify-content:center;height:50px}',""]),i.exports=t},7804:function(i,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s}));var s={uniCard:n("5bba").default,uniSection:n("e0e2").default},u=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-text",{staticClass:"uni-h6"},[i._v("uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。")])],1),n("uni-section",{attrs:{title:"主色",type:"line"}},[n("v-uni-view",{staticClass:"uni-ma-5"},[n("v-uni-view",{staticClass:"box uni-radius"},[n("v-uni-view",{staticClass:"item-box uni-primary-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("primary")])],1),n("v-uni-view",{staticClass:"item-box"},[n("v-uni-view",{staticClass:"item uni-primary-disable-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("disable")])],1),n("v-uni-view",{staticClass:"item uni-primary-light-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("light")])],1)],1)],1)],1)],1),n("uni-section",{attrs:{title:"辅助色","sub-title":"除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。",type:"line"}},[n("v-uni-view",{staticClass:"uni-ma-5"},[n("v-uni-view",{staticClass:"box uni-radius"},[n("v-uni-view",{staticClass:"item-box uni-success-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("success")])],1),n("v-uni-view",{staticClass:"item-box"},[n("v-uni-view",{staticClass:"item uni-success-disable-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("disable")])],1),n("v-uni-view",{staticClass:"item uni-success-light-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("light")])],1)],1)],1),n("v-uni-view",{staticClass:"box  uni-mt-5 uni-radius"},[n("v-uni-view",{staticClass:"item-box uni-warning-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("warning")])],1),n("v-uni-view",{staticClass:"item-box"},[n("v-uni-view",{staticClass:"item uni-warning-disable-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("disable")])],1),n("v-uni-view",{staticClass:"item uni-warning-light-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("light")])],1)],1)],1),n("v-uni-view",{staticClass:"box uni-mt-5 uni-radius"},[n("v-uni-view",{staticClass:"item-box uni-error-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("error")])],1),n("v-uni-view",{staticClass:"item-box"},[n("v-uni-view",{staticClass:"item uni-error-disable-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("disable")])],1),n("v-uni-view",{staticClass:"item uni-error-light-bg "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("light")])],1)],1)],1),n("v-uni-view",{staticClass:"box uni-mt-5 uni-radius"},[n("v-uni-view",{staticClass:"item-box uni-info-bg uni-white"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("info")])],1),n("v-uni-view",{staticClass:"item-box"},[n("v-uni-view",{staticClass:"item uni-info-disable-bg uni-white"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("disable")])],1),n("v-uni-view",{staticClass:"item uni-info-light-bg uni-white"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("light")])],1)],1)],1)],1)],1),n("uni-section",{attrs:{title:"中性色","sub-title":"中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。",type:"line"}},[n("v-uni-view",{staticClass:"uni-ma-5 uni-radius"},[n("v-uni-view",{staticClass:"box-base uni-radius uni-main-color-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("main-color")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-base-color-bg uni-mt-5 "},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("base-color")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-secondary-color-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("secondary-color")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-extra-color-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("extra-color")])],1)],1)],1),n("uni-section",{attrs:{title:"分隔线","sub-title":"主要用于边框颜色",type:"line"}},[n("v-uni-view",{staticClass:"uni-ma-5 uni-radius"},[n("v-uni-view",{staticClass:"box-base uni-radius uni-border-4-bg uni-mt-5 "},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color uni-white"},[i._v("border-4")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-border-3-bg uni-mt-5 "},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color uni-white"},[i._v("border-3")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-border-2-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("border-2")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-border-1-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-white"},[i._v("border-1")])],1)],1)],1),n("uni-section",{attrs:{title:"常规色","sub-title":"通用颜色,如黑色白色",type:"line"}},[n("v-uni-view",{staticClass:"uni-ma-5 uni-radius"},[n("v-uni-view",{staticClass:"box-base uni-radius uni-border uni-white-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("white")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-border uni-black-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("black")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-border uni-transparent-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("transparent")])],1),n("v-uni-view",{staticClass:"box-base uni-radius uni-border uni-bg-color-bg uni-mt-5"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("bg-color")])],1)],1)],1),n("uni-section",{attrs:{title:"阴影",type:"line"}},[n("v-uni-view",{staticClass:"box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-sm  uni-mt-2"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("shadow-sm")])],1),n("v-uni-view",{staticClass:"box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-base uni-secondary-color uni-mt-2"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("shadow-base")])],1),n("v-uni-view",{staticClass:"box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-lg uni-secondary-color uni-mt-2"},[n("v-uni-text",{staticClass:"uni-body uni-secondary-color"},[i._v("shadow-lg")])],1)],1)],1)},a=[]},d6b6:function(i,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{}},computed:{},onLoad:function(){},methods:{}}},d8ca:function(i,t,n){"use strict";var s=n("f11f"),u=n.n(s);u.a},f11f:function(i,t,n){var s=n("6ada");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var u=n("4f06").default;u("03a33dd8",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
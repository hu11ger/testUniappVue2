(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-vibrate-vibrate"],{"1d5c":function(t,n,i){"use strict";var a=i("6a36"),e=i.n(a);e.a},"3c55":function(t,n,i){"use strict";i.r(n);var a=i("93dd"),e=i("65cd8");for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);i("1d5c");var o=i("f0c5"),s=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"483bb262",null,!1,a["a"],void 0);n["default"]=s.exports},"65cd8":function(t,n,i){"use strict";i.r(n);var a=i("6906"),e=i.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(u);n["default"]=e.a},6906:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){console.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){console.log("success")}})}}};n.default=a},"6a36":function(t,n,i){var a=i("ad2c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("58e85d9c",a,!0,{sourceMap:!1,shadowMode:!1})},"93dd":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return a}));var a={pageHead:i("abc4").default},e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},u=[]},ad2c:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,".uni-padding-wrap[data-v-483bb262]{margin-top:%?50?% 0}.uni-button[data-v-483bb262]{margin:%?30?% 0}.uni-tips[data-v-483bb262]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-483bb262]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""]),t.exports=n}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-web-view"],{7297:function(n,e,t){"use strict";t("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("e9c4");var u={data:function(){return{url:"https://uniapp.dcloud.io/static/web-view.html"}},onLoad:function(n){n&&n.url&&(this.url=n.url)},methods:{getMessage:function(n){uni.showModal({content:JSON.stringify(n.detail),showCancel:!1})}}};e.default=u},ac95:function(n,e,t){"use strict";t.r(e);var u=t("7297"),i=t.n(u);for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);e["default"]=i.a},be18:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-web-view",{attrs:{src:n.url},on:{message:function(e){arguments[0]=e=n.$handleEvent(e),n.getMessage.apply(void 0,arguments)}}})],1)},i=[]},d6e7:function(n,e,t){"use strict";t.r(e);var u=t("be18"),i=t("ac95");for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);var o=t("f0c5"),r=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"a5bfab28",null,!1,u["a"],void 0);e["default"]=r.exports}}]);
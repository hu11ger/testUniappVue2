(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-form-form"],{"1b1d":function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return n}));var n={pageHead:t("abc4").default},i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",[t("page-head",{attrs:{title:"form"}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-form",{on:{submit:function(r){arguments[0]=r=e.$handleEvent(r),e.formSubmit.apply(void 0,arguments)},reset:function(r){arguments[0]=r=e.$handleEvent(r),e.formReset.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("姓名")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",placeholder:"请输入姓名"}})],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("性别")]),t("v-uni-radio-group",{attrs:{name:"gender"}},[t("v-uni-label",[t("v-uni-radio",{attrs:{value:"男"}}),t("v-uni-text",[e._v("男")])],1),t("v-uni-label",[t("v-uni-radio",{attrs:{value:"女"}}),t("v-uni-text",[e._v("女")])],1)],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("爱好")]),t("v-uni-checkbox-group",{attrs:{name:"loves"}},[t("v-uni-label",[t("v-uni-checkbox",{attrs:{value:"读书"}}),t("v-uni-text",[e._v("读书")])],1),t("v-uni-label",[t("v-uni-checkbox",{attrs:{value:"写字"}}),t("v-uni-text",[e._v("写字")])],1)],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("年龄")]),t("v-uni-slider",{attrs:{value:"20",name:"age","show-value":!0}})],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("保留选项")]),t("v-uni-view",[t("v-uni-switch",{attrs:{name:"switch"}})],1)],1),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{attrs:{"form-type":"submit"}},[e._v("Submit")]),t("v-uni-button",{attrs:{type:"default","form-type":"reset"}},[e._v("Reset")])],1)],1)],1)],1)},a=[]},3784:function(e,r,t){"use strict";t.r(r);var n=t("8a98"),i=t.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){t.d(r,e,(function(){return n[e]}))}(a);r["default"]=i.a},4405:function(e,r,t){"use strict";t("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("4d63"),t("c607"),t("ac1f"),t("2c3e"),t("25f0"),t("00b4"),t("a9e3"),t("c975");var n={error:"",check:function(e,r){for(var t=0;t<r.length;t++){if(!r[t].checkType)return!0;if(!r[t].name)return!0;if(!r[t].errorMsg)return!0;if(!e[r[t].name])return this.error=r[t].errorMsg,!1;switch(r[t].checkType){case"string":var n=new RegExp("^.{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"between":if(!this.isNumber(e[r[t].name]))return this.error=r[t].errorMsg,!1;var i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"same":if(e[r[t].name]!=r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"notsame":if(e[r[t].name]==r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"reg":n=new RegExp(r[t].checkRule);if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"in":if(-1==r[t].checkRule.indexOf(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"notnull":if(null==e[r[t].name]||e[r[t].name].length<1)return this.error=r[t].errorMsg,!1;break}}return!0},isNumber:function(e){return/^-?[1-9][0-9]?.?[0-9]*$/.test(e)}};r.default=n},"549f":function(e,r,t){var n=t("8ec4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("13b34667",n,!0,{sourceMap:!1,shadowMode:!1})},"8a98":function(e,r,t){"use strict";t("7a82");var n=t("ee27").default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("e9c4");var i=n(t("4405")),a={data:function(){return{}},methods:{formSubmit:function(e){console.log("form发生了submit事件，携带数据为："+JSON.stringify(e.detail.value));var r=e.detail.value,t=i.default.check(r,[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}]);t?uni.showToast({title:"验证通过!",icon:"none"}):uni.showToast({title:i.default.error,icon:"none"})},formReset:function(e){console.log("清空数据")}}};r.default=a},"8ec4":function(e,r,t){var n=t("24fb");r=n(!1),r.push([e.i,".uni-form-item .title[data-v-84c03d1a]{padding:%?20?% 0}",""]),e.exports=r},ad1a:function(e,r,t){"use strict";t.r(r);var n=t("1b1d"),i=t("3784");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(r,e,(function(){return i[e]}))}(a);t("c805");var u=t("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"84c03d1a",null,!1,n["a"],void 0);r["default"]=s.exports},c805:function(e,r,t){"use strict";var n=t("549f"),i=t.n(n);i.a}}]);
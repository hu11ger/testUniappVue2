(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-input-input"],{"3bed":function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,".nvue-page-root[data-v-1a3822d0]{background-color:#f8f8f8;padding-bottom:20px}.page-title[data-v-1a3822d0]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;padding:%?35?%}.page-title__wrapper[data-v-1a3822d0]{padding:0 20px;border-bottom-color:#d8d8d8;border-bottom-width:1px}.page-title__text[data-v-1a3822d0]{font-size:16px;height:48px;line-height:48px;color:#bebebe}.title[data-v-1a3822d0]{padding:5px 13px}.uni-form-item__title[data-v-1a3822d0]{font-size:16px;line-height:24px}.uni-input-wrapper[data-v-1a3822d0]{\ndisplay:flex;\npadding:8px 13px;flex-direction:row;flex-wrap:nowrap;background-color:#fff}.uni-input[data-v-1a3822d0]{height:28px;line-height:28px;font-size:15px;padding:0;flex:1;background-color:#fff}.uni-icon[data-v-1a3822d0]{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;width:24px;height:24px;line-height:24px;color:#999}.uni-eye-active[data-v-1a3822d0]{color:#007aff}",""]),t.exports=i},"4c1e":function(t,i,n){"use strict";n.r(i);var a=n("af31"),e=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(u);i["default"]=e.a},6047:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"nvue-page-root"},[n("v-uni-view",{staticClass:"page-title"},[n("v-uni-view",{staticClass:"page-title__wrapper"},[n("v-uni-text",{staticClass:"page-title__text"},[t._v(t._s(t.title))])],1)],1),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("可自动聚焦的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{focus:!0,placeholder:"自动获得焦点"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("键盘右下角按钮显示为搜索")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"键盘右下角按钮显示为搜索"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("控制最大输入长度的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"10",placeholder:"最大输入长度为10"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("实时获取输入值："+t._s(t.inputValue))])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"输入同步到view中"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.onKeyInput.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("控制输入的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"连续的两个1会变成2"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.replaceInput.apply(void 0,arguments)}},model:{value:t.changeValue,callback:function(i){t.changeValue=i},expression:"changeValue"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("控制键盘的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{ref:"input1",staticClass:"uni-input",attrs:{placeholder:"输入123自动收起键盘"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.hideKeyboard.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("数字输入的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"这是一个数字输入框"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("密码输入的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{password:!0,type:"text",placeholder:"这是一个密码输入框"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("带小数点的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"digit",placeholder:"带小数点的数字键盘"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("身份证输入的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"idcard",placeholder:"身份证输入键盘"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("控制占位符颜色的 input")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{"placeholder-style":"color:#F76260",placeholder:"占位符字体是红色的"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("带清除按钮的输入框")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"带清除按钮的输入框",value:t.inputClearValue},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.clearInput.apply(void 0,arguments)}}}),t.showClearIcon?n("v-uni-text",{staticClass:"uni-icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clearIcon.apply(void 0,arguments)}}},[t._v("")]):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"uni-form-item__title"},[t._v("可查看密码的输入框")])],1),n("v-uni-view",{staticClass:"uni-input-wrapper"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码",password:t.showPassword}}),n("v-uni-text",{staticClass:"uni-icon",class:[t.showPassword?"":"uni-eye-active"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changePassword.apply(void 0,arguments)}}},[t._v("")])],1)],1)],1)],1)},e=[]},6382:function(t,i,n){"use strict";n.r(i);var a=n("6047"),e=n("4c1e");for(var u in e)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(u);n("9f15");var s=n("f0c5"),l=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"1a3822d0",null,!1,a["a"],void 0);i["default"]=l.exports},"9f15":function(t,i,n){"use strict";var a=n("c3c5"),e=n.n(a);e.a},af31:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{title:"input",focus:!1,inputValue:"",showClearIcon:!1,inputClearValue:"",changeValue:"",showPassword:!0,src:"../../../static/eye-1.png",platform:"",isNvue:!1}},methods:{onKeyInput:function(t){this.inputValue=t.detail.value},replaceInput:function(t){var i=t.detail.value;"11"===i&&(this.changeValue="2")},hideKeyboard:function(t){"123"===t.detail.value&&uni.hideKeyboard()},clearInput:function(t){this.inputClearValue=t.detail.value,t.detail.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword},onFocus:function(){this.$mp.page.$getAppWebview().setStyle({softinputNavBar:"none"})},onBlur:function(){this.$mp.page.$getAppWebview().setStyle({softinputNavBar:"auto"})}},onLoad:function(){this.platform=uni.getSystemInfoSync().platform}};i.default=a},c3c5:function(t,i,n){var a=n("3bed");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("09538c8a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-add-phone-contact-add-phone-contact"],{"0e2d":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var a={pageHead:e("abc4").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("名称")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人名称",name:"name",value:n.name},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.nameChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("手机号")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人手机号",name:"phone",value:n.phone},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.phoneChange.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("添加联系人")])],1)],1)],1)],1)},u=[]},2613:function(n,t,e){"use strict";e.r(t);var a=e("f5c7"),i=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=i.a},aaa3:function(n,t,e){"use strict";e.r(t);var a=e("0e2d"),i=e("2613");for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);var s=e("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"8a739abc",null,!1,a["a"],void 0);t["default"]=l.exports},f5c7:function(n,t,e){"use strict";e("7a82");var a=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("f07e")),u=a(e("c964")),s={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(n){this.name=n.detail.value},phoneChange:function(n){this.phone=n.detail.value},add:function(){var n=this;return(0,u.default)((0,i.default)().mark((function t(){return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.addPhoneContact({firstName:n.name,mobilePhoneNumber:n.phone,success:function(){uni.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){uni.showModal({content:"添加联系人失败！",showCancel:!1})}});case 1:case"end":return t.stop()}}),t)})))()}}};t.default=s}}]);
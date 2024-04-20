(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/forms/forms"],{768:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27),t(28);r(t(25));var u=r(t(769));e.__webpack_require_UNI_MP_PLUGIN__=t,n(u.default)}).call(this,t(1)["default"],t(2)["createPage"])},769:function(e,n,t){"use strict";t.r(n);var r=t(770),u=t(772);for(var o in u)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(o);t(774);var i,a=t(50),s=Object(a["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);s.options.__file="pages/extUI/forms/forms.vue",n["default"]=s.exports},770:function(e,n,t){"use strict";t.r(n);var r=t(771);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},771:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));try{r={uniCard:function(){return t.e("uni_modules/uni-card/components/uni-card/uni-card").then(t.bind(null,1364))},uniSection:function(){return t.e("uni_modules/uni-section/components/uni-section/uni-section").then(t.bind(null,1371))},uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,1378))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,1387))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,1394))},uniDataCheckbox:function(){return t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox").then(t.bind(null,1401))},uniDatetimePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(t.bind(null,1408))},uniDataPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(t.bind(null,1419))},uniDataSelect:function(){return t.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select").then(t.bind(null,1427))},uniSegmentedControl:function(){return t.e("uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control").then(t.bind(null,1434))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement;e._self._c},o=!1,i=[];u._withStripped=!0},772:function(e,n,t){"use strict";t.r(n);var r=t(773),u=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=u.a},773:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{baseFormData:{name:"",age:"",introduction:"",sex:2,hobby:[5],datetimesingle:1627529992399,city:"",skills:0},cityData:[{text:"北京",value:"10001"},{text:"上海",value:"10002"},{text:"深圳",value:"10004"}],skillsRange:[{value:0,text:"编程"},{value:1,text:"绘画"},{value:2,text:"运动"}],alignmentFormData:{name:"",age:""},sexs:[{text:"男",value:0},{text:"女",value:1},{text:"保密",value:2}],hobbys:[{text:"跑步",value:0},{text:"游泳",value:1},{text:"绘画",value:2},{text:"足球",value:3},{text:"篮球",value:4},{text:"其他",value:5}],current:0,items:["左对齐","顶部对齐"],valiFormData:{name:"",age:"",introduction:""},rules:{name:{rules:[{required:!0,errorMessage:"姓名不能为空"}]},age:{rules:[{required:!0,errorMessage:"年龄不能为空"},{format:"number",errorMessage:"年龄只能输入数字"}]}},customFormData:{name:"",age:"",hobby:[]},customRules:{name:{rules:[{required:!0,errorMessage:"姓名不能为空"}]},age:{rules:[{required:!0,errorMessage:"年龄不能为空"}]},hobby:{rules:[{format:"array"},{validateFunction:function(e,n,t,r){return n.length<2&&r("请至少勾选两个兴趣爱好"),!0}}]}},dynamicFormData:{email:"",domains:[]},dynamicLists:[],dynamicRules:{email:{rules:[{required:!0,errorMessage:"域名不能为空"},{format:"email",errorMessage:"域名格式错误"}]}}}},computed:{alignment:function(){return 0===this.current?"left":1===this.current?"top":"left"}},onLoad:function(){},onReady:function(){this.$refs.customForm.setRules(this.customRules)},methods:{onClickItem:function(e){console.log(e),this.current=e.currentIndex},add:function(){this.dynamicFormData.domains.push({label:"域名",value:"",rules:[{required:!0,errorMessage:"域名项必填"}],id:Date.now()})},del:function(e){var n=this.dynamicLists.findIndex((function(n){return n.id===e}));this.dynamicLists.splice(n,1)},submit:function(n){console.log(this.baseFormData),this.$refs[n].validate().then((function(n){console.log("success",n),e.showToast({title:"校验通过"})})).catch((function(e){console.log("err",e)}))}}};n.default=t}).call(this,t(2)["default"])},774:function(e,n,t){"use strict";t.r(n);var r=t(775),u=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=u.a},775:function(e,n,t){}},[[768,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/forms/forms.js.map
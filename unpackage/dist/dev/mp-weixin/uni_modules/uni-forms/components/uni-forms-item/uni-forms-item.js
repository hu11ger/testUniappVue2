(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-forms/components/uni-forms-item/uni-forms-item"],{1344:function(t,e,r){"use strict";r.r(e);var i=r(1345),n=r(1347);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);r(1349);var s,l=r(50),o=Object(l["default"])(n["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],s);o.options.__file="uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue",e["default"]=o.exports},1345:function(t,e,r){"use strict";r.r(e);var i=r(1346);r.d(e,"render",(function(){return i["render"]})),r.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),r.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),r.d(e,"components",(function(){return i["components"]}))},1346:function(t,e,r){"use strict";var i;r.r(e),r.d(e,"render",(function(){return n})),r.d(e,"staticRenderFns",(function(){return s})),r.d(e,"recyclableRender",(function(){return a})),r.d(e,"components",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c},a=!1,s=[];n._withStripped=!0},1347:function(t,e,r){"use strict";r.r(e);var i=r(1348),n=r.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},1348:function(t,e,r){"use strict";(function(t){var i=r(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r(29)),a=i(r(13)),s=i(r(11)),l=i(r(32)),o={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",isRequired:!1,userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,r){var i=t.form._isEqual(e,r);if(!i){var n=t.itemSetValue(e);t.onFieldChange(n,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(e){var r=arguments,i=this;return(0,l.default)(n.default.mark((function a(){var l,o,u,f,d,c,h,m,b,p,g,v;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(l=!(r.length>1&&void 0!==r[1])||r[1],o=i.form,u=o.formData,o.localData,f=o.errShowType,d=o.validateCheck,c=o.validateTrigger,h=o._isRequiredField,m=o._realName,b=m(i.name),e||(e=i.form.formData[b]),p=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&p&&0!==p){n.next=7;break}return n.abrupt("return");case 7:if(g=h(i.itemRules.rules||[]),v=null,"bind"!==c&&!l){n.next=18;break}return n.next=12,i.validator.validateUpdate((0,s.default)({},b,e),u);case 12:v=n.sent,g||void 0!==e&&""!==e||(v=null),v&&v.errorMessage?("undertext"===f&&(i.errMsg=v?v.errorMessage:""),"toast"===f&&t.showToast({title:v.errorMessage||"校验错误",icon:"none"}),"modal"===f&&t.showModal({title:"提示",content:v.errorMessage||"校验错误"})):i.errMsg="",d(v||null),n.next=19;break;case 18:i.errMsg="";case 19:return n.abrupt("return",v||null);case 20:case"end":return n.stop()}}),a)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},r=e.validator,i=e.formRules,n=e.childrens,s=(e.formData,e.localData),l=e._realName,o=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(o),this.localLabelPos=this._labelPosition(),this.isRequired=this.required,this.form&&t&&n.push(this),r&&i){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var f=l(this.name),d=this.userRules||this.rules;"object"===(0,a.default)(i)&&d&&(i[f]={rules:d},r.updateSchema(i));var c=i[f]||{};this.itemRules=c,this.validator=r,this.itemSetValue(u(this.name,s)),this.isRequired=this._isRequired()}},unInit:function(){var t=this;if(this.form){var e=this.form,r=e.childrens,i=e.formData,n=e._realName;r.forEach((function(e,r){e===t&&(t.form.childrens.splice(r,1),delete i[n(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),r=this.itemRules.rules||[],i=this.form._getValue(e,t,r);return this.form._setDataValue(e,this.form.formData,i),i},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,r){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===r?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=o}).call(this,r(2)["default"])},1349:function(t,e,r){"use strict";r.r(e);var i=r(1350),n=r.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},1350:function(t,e,r){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component',
    {
        'uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1344))
        })
    },
    [['uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component']]
]);

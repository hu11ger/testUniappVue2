(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-forms/components/uni-forms-item/uni-forms-item"],{"0f95":function(t,e,i){"use strict";var r=i("fcf5"),n=i.n(r);n.a},"1d0d":function(t,e,i){"use strict";i.r(e);var r=i("3147"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},3147:function(t,e,i){"use strict";(function(t){var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("2eee")),a=r(i("7037")),l=r(i("9523")),s=r(i("c973")),o={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",isRequired:!1,userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,i){var r=t.form._isEqual(e,i);if(!r){var n=t.itemSetValue(e);t.onFieldChange(n,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(e){var i=arguments,r=this;return(0,s.default)(n.default.mark((function a(){var s,o,u,f,d,c,h,m,b,g,v,p;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=!(i.length>1&&void 0!==i[1])||i[1],o=r.form,u=o.formData,o.localData,f=o.errShowType,d=o.validateCheck,c=o.validateTrigger,h=o._isRequiredField,m=o._realName,b=m(r.name),e||(e=r.form.formData[b]),g=r.itemRules.rules&&r.itemRules.rules.length,r.validator&&g&&0!==g){n.next=7;break}return n.abrupt("return");case 7:if(v=h(r.itemRules.rules||[]),p=null,"bind"!==c&&!s){n.next=18;break}return n.next=12,r.validator.validateUpdate((0,l.default)({},b,e),u);case 12:p=n.sent,v||void 0!==e&&""!==e||(p=null),p&&p.errorMessage?("undertext"===f&&(r.errMsg=p?p.errorMessage:""),"toast"===f&&t.showToast({title:p.errorMessage||"校验错误",icon:"none"}),"modal"===f&&t.showModal({title:"提示",content:p.errorMessage||"校验错误"})):r.errMsg="",d(p||null),n.next=19;break;case 18:r.errMsg="";case 19:return n.abrupt("return",p||null);case 20:case"end":return n.stop()}}),a)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},i=e.validator,r=e.formRules,n=e.childrens,l=(e.formData,e.localData),s=e._realName,o=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(o),this.localLabelPos=this._labelPosition(),this.isRequired=this.required,this.form&&t&&n.push(this),i&&r){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var f=s(this.name),d=this.userRules||this.rules;"object"===(0,a.default)(r)&&d&&(r[f]={rules:d},i.updateSchema(r));var c=r[f]||{};this.itemRules=c,this.validator=i,this.itemSetValue(u(this.name,l)),this.isRequired=this._isRequired()}},unInit:function(){var t=this;if(this.form){var e=this.form,i=e.childrens,r=e.formData,n=e._realName;i.forEach((function(e,i){e===t&&(t.form.childrens.splice(i,1),delete r[n(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),i=this.itemRules.rules||[],r=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,r),r},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,i){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=o}).call(this,i("543d")["default"])},"5ca1":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},n=[]},f1c2:function(t,e,i){"use strict";i.r(e);var r=i("5ca1"),n=i("1d0d");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("0f95");var l=i("f0c5"),s=Object(l["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=s.exports},fcf5:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component',
    {
        'uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f1c2"))
        })
    },
    [['uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component']]
]);

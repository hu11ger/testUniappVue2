(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-data-select/components/uni-data-select/uni-data-select"],{1419:function(t,e,n){"use strict";n.r(e);var a=n(1420),i=n(1422);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n(1424);var r,c=n(50),s=Object(c["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],r);s.options.__file="uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue",e["default"]=s.exports},1420:function(t,e,n){"use strict";n.r(e);var a=n(1421);n.d(e,"render",(function(){return a["render"]})),n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(e,"components",(function(){return a["components"]}))},1421:function(t,e,n){"use strict";var a;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return r})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return a}));try{a={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,1299))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.showSelector?t.mixinDatacomResData.length:null),a=t.showSelector&&0!==n?t.__map(t.mixinDatacomResData,(function(e,n){var a=t.__get_orig(e),i=t.formatItemName(e);return{$orig:a,m0:i}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:a}})},o=!1,r=[];i._withStripped=!0},1422:function(t,e,n){"use strict";n.r(e);var a=n(1423),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},1423:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-stat-select",mixins:[t.mixinDatacom||{}],data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[]}},props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},created:function(){this.last="".concat(this.collection,"_last_selected_option_value"),this.collection&&!this.localdata.length&&this.query()},computed:{typePlaceholder:function(){var t={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"},e=this.placeholder,n=t[this.collection];return n?e+n:e}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},value:function(){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.query()},initDefVal:function(){var t="";if(!this.value&&0!==this.value||this.isDisabled(this.value))if(!this.modelValue&&0!==this.modelValue||this.isDisabled(this.modelValue)){var e;if(this.collection&&(e=n.getStorageSync(this.last)),e||0===e)t=e;else{var a="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),t=a}(t||0===t)&&this.emit(t)}else t=this.modelValue;else t=this.value;var i=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=i?this.formatItemName(i):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(n){n.value===t&&(e=n.disable)})),e},clearVal:function(){this.emit(""),this.collection&&n.removeStorageSync(this.last)},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),this.collection&&n.setStorageSync(this.last,t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,n=t.value,a=t.channel_code;if(a=a?"(".concat(a,")"):"",this.format){var i="";for(var o in i=this.format,t)i=i.replace(new RegExp("{".concat(o,"}"),"g"),t[o]);return i}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(n,")"):e||"未命名".concat(a)}}};e.default=a}).call(this,n(28)["default"],n(2)["default"])},1424:function(t,e,n){"use strict";n.r(e);var a=n(1425),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},1425:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-data-select/components/uni-data-select/uni-data-select-create-component',
    {
        'uni_modules/uni-data-select/components/uni-data-select/uni-data-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1419))
        })
    },
    [['uni_modules/uni-data-select/components/uni-data-select/uni-data-select-create-component']]
]);

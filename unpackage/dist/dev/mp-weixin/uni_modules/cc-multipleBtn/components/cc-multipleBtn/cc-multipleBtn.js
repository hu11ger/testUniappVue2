(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/cc-multipleBtn/components/cc-multipleBtn/cc-multipleBtn"],{1439:function(t,e,n){"use strict";n.r(e);var r=n(1440),i=n(1442);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n(1444);var c,a=n(50),s=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"3141f99e",null,!1,r["components"],c);s.options.__file="uni_modules/cc-multipleBtn/components/cc-multipleBtn/cc-multipleBtn.vue",e["default"]=s.exports},1440:function(t,e,n){"use strict";n.r(e);var r=n(1441);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},1441:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return c})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=!1,c=[];i._withStripped=!0},1442:function(t,e,n){"use strict";n.r(e);var r=n(1443),i=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},1443:function(t,e,n){"use strict";var r=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(11)),u={mixins:[{methods:{setData:function(t,e){var n=this,r=function(t,e,n){return e=e.split("."),e.forEach((function(e){if(null===t[e]||void 0===t[e]){var r=/^[0-9]+$/;t[e]=r.test(n)?[]:{},t=t[e]}else t=t[e]})),t},i=function(t){return"function"==typeof t||!1};Object.keys(t).forEach((function(e){var i,u,c=t[e];e=e.replace(/\]/g,"").replace(/\[/g,".");var a=e.lastIndexOf(".");-1!=a?(u=e.slice(a+1),i=r(n,e.slice(0,a),u)):(u=e,i=n),i.$data&&void 0===i.$data[u]?(Object.defineProperty(i,u,{get:function(){return i.$data[u]},set:function(t){i.$data[u]=t,n.$forceUpdate()},enumerable:!0,configurable:!0}),i[u]=c):n.$set(i,u,c)})),i(e)&&this.$nextTick(e)}}}],data:function(){return{lastIndex:0}},props:{isSingleSel:{type:Boolean},colors:{type:String},remarkList:{type:Array,default:function(){return[]}}},methods:{setCurrent:function(t){if(this.isSingleSel&&this.lastIndex!=t){var e=this.remarkList[this.lastIndex];e.current=!1}var n=this.remarkList[t];n.current=!n.current,this.lastIndex=t;var r="remarkList["+t+"]";this.setData((0,i.default)({},r,n));var u=[];this.remarkList.forEach((function(t){1==t.current&&u.push(t)})),this.$emit("tagClick",u,this.remarkList)}}};e.default=u},1444:function(t,e,n){"use strict";n.r(e);var r=n(1445),i=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},1445:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cc-multipleBtn/components/cc-multipleBtn/cc-multipleBtn.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/cc-multipleBtn/components/cc-multipleBtn/cc-multipleBtn-create-component',
    {
        'uni_modules/cc-multipleBtn/components/cc-multipleBtn/cc-multipleBtn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1439))
        })
    },
    [['uni_modules/cc-multipleBtn/components/cc-multipleBtn/cc-multipleBtn-create-component']]
]);

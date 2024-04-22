(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker"],{1855:function(e,t,n){"use strict";n.r(t);var i=n(1856),r=n(1858);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n(1862);var u,a=n(50),l=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],u);l.options.__file="uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue",t["default"]=l.exports},1856:function(e,t,n){"use strict";n.r(t);var i=n(1857);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},1857:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.title?e.filesList.length:null);e.$mp.data=Object.assign({},{$root:{g0:n}})},s=!1,u=[];r._withStripped=!0},1858:function(e,t,n){"use strict";n.r(t);var i=n(1859),r=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},1859:function(e,t,n){"use strict";(function(e,i){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(29)),u=r(n(18)),a=r(n(11)),l=r(n(32)),o=n(1860),c=n(1861);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then(function(){return resolve(n(1961))}.bind(null,n)).catch(n.oe)},h=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then(function(){return resolve(n(1968))}.bind(null,n)).catch(n.oe)},m={name:"uniFilePicker",components:{uploadImage:d,uploadFile:h},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=o.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];return this.files.forEach((function(t,n){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var n=this;return(0,l.default)(s.default.mark((function t(){var i,r,u,a;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=function(){var e=(0,l.default)(s.default.mark((function e(t){var i,r;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=/cloud:\/\/([\w.]+\/?)\S*/,r="",r=t.fileID?t.fileID:t.url,!i.test(r)){e.next=8;break}return t.fileID=r,e.next=7,n.getTempFileURL(r);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==n.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,i(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),r=0;case 12:if(!(r<e.length)){t.next=19;break}return u=e[r],t.next=16,i(u);case 16:r++,t.next=12;break;case 19:n.localValue=e,n.form&&n.formItem&&!n.is_reset&&(n.is_reset=!1,n.formItem.setValue(n.localValue)),a=Object.keys(e).length>0?e:[],n.files=[].concat(a);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?i.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,n=(0,c.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,sourceType:this.sourceType,extension:n.length>0?n:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return(0,l.default)(s.default.mark((function n(){var i,r,u,a,l,o,f,d;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=(0,c.get_extname)(t.fileExtname),r=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,r&&(t.files=[]),u=(0,c.get_files_and_is_max)(e,i),a=u.filePaths,l=u.files,i&&i.length>0||(a=e.tempFilePaths,l=e.tempFiles),o=[],f=0;case 7:if(!(f<l.length)){n.next=21;break}if(!(t.limitLength-t.files.length<=0)){n.next=10;break}return n.abrupt("break",21);case 10:return l[f].uuid=Date.now(),n.next=13,(0,c.get_file_data)(l[f],t.fileMediatype);case 13:d=n.sent,d.progress=0,d.status="ready",t.files.push(d),o.push(p(p({},d),{},{file:l[f]}));case 18:f++,n.next=7;break;case 21:t.$emit("select",{tempFiles:o,tempFilePaths:a}),e.tempFiles=l,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){var t=this;return e=[].concat(e),o.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){return t.setSuccessAndError(e),e})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var n=this;return(0,l.default)(s.default.mark((function t(){var i,r,u,a,l,o,c;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],r=[],u=[],a=[],l=s.default.mark((function t(l){var o,c,f;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e[l],c=o.uuid?n.files.findIndex((function(e){return e.uuid===o.uuid})):o.index,-1!==c&&n.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==o.errMsg){t.next=12;break}n.files[c].url=o.path,n.files[c].status="error",n.files[c].errMsg=o.errMsg,r.push(n.files[c]),a.push(n.files[c].url),t.next=26;break;case 12:if(n.files[c].errMsg="",n.files[c].fileID=o.url,f=/cloud:\/\/([\w.]+\/?)\S*/,!f.test(o.url)){t.next=21;break}return t.next=18,n.getTempFileURL(o.url);case 18:n.files[c].url=t.sent,t.next=22;break;case 21:n.files[c].url=o.url;case 22:n.files[c].status="success",n.files[c].progress+=1,i.push(n.files[c]),u.push(n.files[c].fileID);case 26:case"end":return t.stop()}}),t)})),o=0;case 6:if(!(o<e.length)){t.next=14;break}return t.delegateYield(l(o),"t0",8);case 8:if(c=t.t0,"break"!==c){t.next=11;break}return t.abrupt("break",14);case 11:o++,t.next=6;break;case 14:i.length>0&&(n.setEmit(),n.$emit("success",{tempFiles:n.backObject(i),tempFilePaths:u})),r.length>0&&n.$emit("fail",{tempFiles:n.backObject(r),tempFilePaths:a});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,n){this.files.length;var i=Math.round(100*e.loaded/e.total),r=t;n||(r=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==r&&this.files[r]&&(this.files[r].progress=i-1,this.$emit("progress",{index:r,progress:parseInt(i),tempFile:this.files[r]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),n=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,n)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=(0,u.default)(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return(0,l.default)(s.default.mark((function n(){var i;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={fileList:[].concat(t)},n.next=3,e.getTempFileURL(t);case 3:return i=n.sent,n.abrupt("return",i.fileList[0].tempFileURL||"");case 5:case"end":return n.stop()}}),n)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=m}).call(this,n(28)["default"],n(2)["default"])},1862:function(e,t,n){"use strict";n.r(t);var i=n(1863),r=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},1863:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component',
    {
        'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1855))
        })
    },
    [['uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component']]
]);

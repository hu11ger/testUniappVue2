(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-upgrade-center-app/pages/upgrade-popup"],{329:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26),n(27),n(28);r(n(25));var i=r(n(330));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n(1)["default"],n(2)["createPage"])},330:function(e,t,n){"use strict";n.r(t);var r=n(331),i=n(333);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n(335);var o,c=n(50),u=Object(c["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);u.options.__file="uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue",t["default"]=u.exports},331:function(e,t,n){"use strict";n.r(t);var r=n(332);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},332:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=!1,o=[];i._withStripped=!0},333:function(e,t,n){"use strict";n.r(t);var r=n(334),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},334:function(e,t,n){"use strict";(function(e){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=r(n(29)),o=r(n(32)),c="UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH",u="iOS",s=null;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";e=String(e).split("."),t=String(t).split(".");for(var n=Math.min(e.length,t.length),r=0,i=0;i<n;i++){var a=Number(e[i]),o=Number(t[i]);if(a>o){r=1;break}if(a<o){r=-1;break}}if(0===r&&e.length!==t.length)for(var c=e.length>t.length,u=c?e:t,s=n;s<u.length;s++){var l=Number(u[s]);if(l>0){r=c?1:-1;break}}return r}var d={data:function(){return{installForBeforeFilePath:"",installed:!1,installing:!1,downloadSuccess:!1,downloading:!1,downLoadPercent:0,downloadedSize:0,packageFileSize:0,tempFilePath:"",title:"更新日志",contents:"",is_mandatory:!1,subTitle:"发现新版本",downLoadBtnTextiOS:"立即跳转更新",downLoadBtnText:"立即下载更新",downLoadingText:"安装包下载中，请稍后"}},onLoad:function(t){var n=t.local_storage_key;if(!n)return console.error("local_storage_key为空，请检查后重试"),void e.navigateBack();var r=e.getStorageSync(n);if(!r)return console.error("安装包信息为空，请检查后重试"),void e.navigateBack();var i=["version","url","type"];for(var a in r)if(-1!==i.indexOf(a)&&!r[a])return console.error("参数 ".concat(a," 必填，请检查后重试")),void e.navigateBack();Object.assign(this,r),this.checkLocalStoragePackage()},onBackPress:function(){if(this.is_mandatory)return!0;s&&s.abort()},onHide:function(){i=null},computed:{isWGT:function(){return"wgt"===this.type},isiOS:function(){return!this.isWGT&&this.platform.includes(u)},isAppStore:function(){return this.isiOS||!this.isiOS&&!this.isWGT&&-1===this.url.indexOf(".apk")}},methods:{checkLocalStoragePackage:function(){var t=e.getStorageSync(c);if(t){var n=t.version,r=t.savedFilePath,i=t.installed;i||0!==l(n,this.version)?this.deleteSavedFile(r):(this.downloadSuccess=!0,this.installForBeforeFilePath=r,this.tempFilePath=r)}},closeUpdate:function(){var t=this;return(0,o.default)(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.downloading){n.next=5;break}if(!t.is_mandatory){n.next=3;break}return n.abrupt("return",e.showToast({title:"下载中，请稍后……",icon:"none",duration:500}));case 3:return e.showModal({title:"是否取消下载？",cancelText:"否",confirmText:"是",success:function(t){t.confirm&&(s&&s.abort(),e.navigateBack())}}),n.abrupt("return");case 5:if(!t.downloadSuccess||!t.tempFilePath){n.next=10;break}return n.next=8,t.saveFile(t.tempFilePath,t.version);case 8:return e.navigateBack(),n.abrupt("return");case 10:e.navigateBack();case 11:case"end":return n.stop()}}),n)})))()},updateApp:function(){var e=this;this.checkStoreScheme().catch((function(){e.downloadPackage()}))},checkStoreScheme:function(){return this.store_list&&this.store_list.length?(this.store_list.filter((function(e){return e.enable})).sort((function(e,t){return t.priority-e.priority})).map((function(e){return e.scheme})).reduce((function(e,t,n){return i=(e||(e=Promise.reject())).catch((function(){return new Promise((function(e,n){plus.runtime.openURL(t,(function(e){n(e)}))}))})),i}),i),i):Promise.reject()},downloadPackage:function(){var t=this;this.downloading=!0,s=e.downloadFile({url:this.url,success:function(e){200==e.statusCode&&(t.downloadSuccess=!0,t.tempFilePath=e.tempFilePath,t.is_mandatory&&t.installPackage())},complete:function(){t.downloading=!1,t.downLoadPercent=0,t.downloadedSize=0,t.packageFileSize=0,s=null}}),s.onProgressUpdate((function(e){t.downLoadPercent=e.progress,t.downloadedSize=(e.totalBytesWritten/Math.pow(1024,2)).toFixed(2),t.packageFileSize=(e.totalBytesExpectedToWrite/Math.pow(1024,2)).toFixed(2)}))},installPackage:function(){},restart:function(){this.installed=!1},saveFile:function(t,n){return new Promise((function(r,i){e.saveFile({tempFilePath:t,success:function(t){var r=t.savedFilePath;e.setStorageSync(c,{version:n,savedFilePath:r})},complete:function(){r()}})}))},deleteSavedFile:function(t){return e.removeStorageSync(c),e.removeSavedFile({filePath:t})},jumpToAppStore:function(){plus.runtime.openURL(this.url)}}};t.default=d}).call(this,n(2)["default"])},335:function(e,t,n){"use strict";n.r(t);var r=n(336),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},336:function(e,t,n){}},[[329,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.js.map
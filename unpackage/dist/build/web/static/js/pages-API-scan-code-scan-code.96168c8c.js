(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-scan-code-scan-code"],{"0e8a":function(e,t,n){"use strict";var i=n("6f97"),o=n.n(i);o.a},"2dc4":function(e,t,n){"use strict";var i;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7");var o={get isIOS(){return"boolean"===typeof i?i:i="ios"===uni.getSystemInfoSync().platform},requestIOS:function(e){return new Promise((function(t,n){switch(e){case"push":t(function(){var e=0,t=plus.ios.import("UIApplication"),n=t.sharedApplication(),i=0;if(n.currentUserNotificationSettings){var o=n.currentUserNotificationSettings();i=o.plusGetAttribute("types"),0==i?(e=0,console.log("推送权限没有开启")):(e=1,console.log("已经开启推送功能!")),plus.ios.deleteObject(o)}else i=n.enabledRemoteNotificationTypes(),0==i?(e=3,console.log("推送权限没有开启!")):(e=4,console.log("已经开启推送功能!"));return plus.ios.deleteObject(n),plus.ios.deleteObject(t),e}());break;case"location":t(function(){var e=0,t=plus.ios.import("CLLocationManager"),n=t.locationServicesEnabled(),i=t.authorizationStatus();return e=n?0===i?null:3===i||4===i?1:0:2,plus.ios.deleteObject(t),e}());break;case"record":t(function(){var e=null,t=plus.ios.import("AVAudioSession"),n=t.sharedInstance(),i=n.recordPermission();return console.log("permissionStatus:"+i),e=1970168948===i?null:1735552628===i?1:0,plus.ios.deleteObject(t),e}());break;case"camera":t(function(){var e=0,t=plus.ios.import("AVCaptureDevice"),n=t.authorizationStatusForMediaType("vide");return e=0===n?null:3==n?1:0,plus.ios.deleteObject(t),e}());break;case"album":t(function(){var e=0,t=plus.ios.import("PHPhotoLibrary"),n=t.authorizationStatus();return e=0===n?null:3==n?1:0,plus.ios.deleteObject(t),e}());break;case"contact":t(function(){var e=0,t=plus.ios.import("CNContactStore"),n=t.authorizationStatusForEntityType(0);return e=0===n?null:3==n?1:0,plus.ios.deleteObject(t),e}());break;case"calendar":t(function(){var e=null,t=plus.ios.import("EKEventStore"),n=t.authorizationStatusForEntityType(0);return 3==n?(e=1,console.log("日历权限已经开启")):console.log("日历权限没有开启"),plus.ios.deleteObject(t),e}());break;case"memo":t(function(){var e=null,t=plus.ios.import("EKEventStore"),n=t.authorizationStatusForEntityType(1);return 3==n?(e=1,console.log("备忘录权限已经开启")):console.log("备忘录权限没有开启"),plus.ios.deleteObject(t),e}());break;default:t(0);break}}))},requestAndroid:function(e){return new Promise((function(t,n){plus.android.requestPermissions([e],(function(e){for(var n=0,i=0;i<e.granted.length;i++){var o=e.granted[i];console.log("已获取的权限："+o),n=1}for(i=0;i<e.deniedPresent.length;i++){var s=e.deniedPresent[i];console.log("拒绝本次申请的权限："+s),n=0}for(i=0;i<e.deniedAlways.length;i++){var a=e.deniedAlways[i];console.log("永久拒绝申请的权限："+a),n=-1}t(n)}),(function(e){console.log("result error: "+e.message),t({code:e.code,message:e.message})}))}))},gotoAppSetting:function(){if(o.isIOS){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),n=plus.ios.import("NSURL"),i=n.URLWithString("app-settings:");t.openURL(i),plus.ios.deleteObject(i),plus.ios.deleteObject(n),plus.ios.deleteObject(t)}else{var s=plus.android.importClass("android.content.Intent"),a=plus.android.importClass("android.provider.Settings"),r=plus.android.importClass("android.net.Uri"),u=plus.android.runtimeMainActivity(),l=new s;l.setAction(a.ACTION_APPLICATION_DETAILS_SETTINGS);var c=r.fromParts("package",u.getPackageName(),null);l.setData(c),u.startActivity(l)}}},s=o;t.default=s},"3e2b":function(e,t,n){"use strict";n.r(t);var i=n("f460"),o=n("9702");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("0e8a");var a=n("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"fcd095e6",null,!1,i["a"],void 0);t["default"]=r.exports},"6f97":function(e,t,n){var i=n("adf4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("64afd821",i,!0,{sourceMap:!1,shadowMode:!1})},"7fb5":function(e,t,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("f07e")),s=i(n("c964")),a=(i(n("2dc4")),{data:function(){return{title:"scanCode",result:""}},methods:{scan:function(){var e=this;return(0,s.default)((0,o.default)().mark((function t(){return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.scanCode({success:function(t){e.result=t.result},fail:function(e){}});case 1:case"end":return t.stop()}}),t)})))()}}});t.default=a},9702:function(e,t,n){"use strict";n.r(t);var i=n("7fb5"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},adf4:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".scan-result[data-v-fcd095e6]{min-height:%?50?%;line-height:%?50?%}",""]),e.exports=t},f460:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={pageHead:n("abc4").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[e._v("扫码结果：")]),e.result?n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-cell"},[n("v-uni-view",{staticClass:"scan-result"},[e._v(e._s(e.result))])],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scan.apply(void 0,arguments)}}},[e._v("扫一扫")])],1)],1)],1)},s=[]}}]);
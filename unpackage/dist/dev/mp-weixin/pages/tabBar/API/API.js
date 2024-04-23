(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/API/API"],{122:function(e,n,a){"use strict";(function(e,n){var t=a(4);a(26),a(27),a(28);t(a(25));var r=t(a(123));e.__webpack_require_UNI_MP_PLUGIN__=a,n(r.default)}).call(this,a(1)["default"],a(2)["createPage"])},123:function(e,n,a){"use strict";a.r(n);var t=a(124),r=a(126);for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return r[e]}))}(o);a(128),a(130);var i,u=a(50),l=Object(u["default"])(r["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],i);l.options.__file="pages/tabBar/API/API.nvue",n["default"]=l.exports},124:function(e,n,a){"use strict";a.r(n);var t=a(125);a.d(n,"render",(function(){return t["render"]})),a.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),a.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),a.d(n,"components",(function(){return t["components"]}))},125:function(e,n,a){"use strict";var t;a.r(n),a.d(n,"render",(function(){return r})),a.d(n,"staticRenderFns",(function(){return i})),a.d(n,"recyclableRender",(function(){return o})),a.d(n,"components",(function(){return t}));try{t={uLink:function(){return a.e("uview-ui/components/u-link/u-link").then(a.bind(null,1406))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},o=!1,i=[];r._withStripped=!0},126:function(e,n,a){"use strict";a.r(n);var t=a(127),r=a.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=r.a},127:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){a.e("components/api-set-tabbar").then(function(){return resolve(a(1413))}.bind(null,a)).catch(a.oe)},r={components:{setTabBar:t},props:{hasLeftWin:{type:Boolean},leftWinActive:{type:String}},data:function(){var e=[{name:"图片",url:"image"},{name:"音频",url:"inner-audio"},{name:"录音",url:"voice"},{name:"背景音频",url:"background-audio"},{name:"视频",url:"video"},{name:"文件",url:"file"},{name:"保存媒体到本地",url:"save-media"}],n=[{id:"page",name:"界面",open:!1,pages:[{name:"设置导航条",url:"set-navigation-bar-title"},{name:"页面跳转",url:"navigator"},{name:"设置TabBar",url:"set-tabbar"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建动画",url:"animation"},{name:"创建绘画",url:"canvas"},{name:"节点信息",url:"get-node-info"},{name:"节点布局交互状态",url:"intersection-observer"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示加载提示框",url:"show-loading"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取设备网络状态",url:"get-network-type"},{name:"获取设备系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"震动",url:"vibrate"},{name:"添加手机联系人",url:"add-phone-contact"},{name:"扫码",url:"scan-code"},{name:"剪贴板",url:"clipboard"},{name:"屏幕亮度",url:"brightness"},{name:"蓝牙",url:"bluetooth"},{name:"生物认证",url:"soter"},{name:"iBeacon",url:"ibeacon"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"请求Polar",url:"requestPolar"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"websocket",name:"websocket",open:!1,pages:[{name:"socketTask",url:"websocket-socketTask"},{name:"全局websocket",url:"websocket-global"}]},{id:"media",name:"媒体",open:!1,pages:e},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"},{name:"地图控制",url:"map"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储（key-value）",url:"storage"}]},{url:"rewarded-video-ad",name:"激励视频广告",open:!1},{id:"login",name:"登录",open:!1,pages:[{name:"登录",url:"login"},{name:"获取用户信息",url:"get-user-info"}]},{id:"share",name:"分享",open:!1,pages:[{name:"分享",url:"share"}]},{id:"payment",name:"支付",open:!1,pages:[{name:"发起支付",url:"request-payment"}]}];return{showSetTabBarPage:!1,list:n,notForPc:[{name:"设置TabBar",url:"set-tabbar"}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/API/API"}},onNavigationBarButtonTap:function(n){e.navigateTo({url:"/pages/about/about"})},onLoad:function(){},onReady:function(){},onShow:function(){this.navigateFlag=!1,this.leaveSetTabBarPage()},onHide:function(){this.leaveSetTabBarPage()},methods:{triggerCollapse:function(e,n){if(this.list[e].pages)for(var a=0;a<this.list.length;++a)this.list[a].open=e===a&&!this.list[a].open;else this.goDetailPage("",this.list[e].url)},goDetailPage:function(n,a){if("set-tabbar"!==a){var t=~a.indexOf("platform")?a:"/pages/API/"+a+"/"+a;this.hasLeftWin?e.reLaunch({url:t}):e.navigateTo({url:t})}else this.showSetTabBarPage=!0},leaveSetTabBarPage:function(){this.showSetTabBarPage=!1}}};n.default=r}).call(this,a(2)["default"])},128:function(e,n,a){"use strict";a.r(n);var t=a(129),r=a.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=r.a},129:function(e,n,a){},130:function(e,n,a){"use strict";a.r(n);var t=a(131),r=a.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=r.a},131:function(e,n,a){}},[[122,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabBar/API/API.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/sqlite/sqlite"],{723:function(e,t,n){"use strict";(function(e,t){var s=n(4);n(26),n(27),n(28);s(n(25));var a=s(n(724));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},724:function(e,t,n){"use strict";n.r(t);var s=n(725),a=n(727);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(729);var r,u=n(50),l=Object(u["default"])(a["default"],s["render"],s["staticRenderFns"],!1,null,null,null,!1,s["components"],r);l.options.__file="pages/API/sqlite/sqlite.vue",t["default"]=l.exports},725:function(e,t,n){"use strict";n.r(t);var s=n(726);n.d(t,"render",(function(){return s["render"]})),n.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return s["recyclableRender"]})),n.d(t,"components",(function(){return s["components"]}))},726:function(e,t,n){"use strict";var s;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return s}));try{s={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,1461))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},i=!1,r=[];a._withStripped=!0},727:function(e,t,n){"use strict";n.r(t);var s=n(728),a=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a},728:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(e){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(e){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(e))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(e){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(e){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(e){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(e))}})},fail:function(e){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(e))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(e){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(e))},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(e){plus.nativeUI.alert("删除表database成功")},fail:function(e){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(e))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(e){plus.nativeUI.alert("关闭数据库成功")},fail:function(e){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(e))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};t.default=s},729:function(e,t,n){"use strict";n.r(t);var s=n(730),a=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a},730:function(e,t,n){}},[[723,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/sqlite/sqlite.js.map
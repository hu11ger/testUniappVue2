(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/bluetooth/bluetooth"],{755:function(e,t,s){"use strict";(function(e,t){var o=s(4);s(26),s(27),s(28);o(s(25));var i=o(s(756));e.__webpack_require_UNI_MP_PLUGIN__=s,t(i.default)}).call(this,s(1)["default"],s(2)["createPage"])},756:function(e,t,s){"use strict";s.r(t);var o=s(757),i=s(759);for(var n in i)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(n);s(761);var a,c=s(50),r=Object(c["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);r.options.__file="pages/API/bluetooth/bluetooth.vue",t["default"]=r.exports},757:function(e,t,s){"use strict";s.r(t);var o=s(758);s.d(t,"render",(function(){return o["render"]})),s.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),s.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),s.d(t,"components",(function(){return o["components"]}))},758:function(e,t,s){"use strict";var o;s.r(t),s.d(t,"render",(function(){return i})),s.d(t,"staticRenderFns",(function(){return a})),s.d(t,"recyclableRender",(function(){return n})),s.d(t,"components",(function(){return o}));try{o={pageHead:function(){return s.e("components/page-head/page-head").then(s.bind(null,1442))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement,s=(e._self._c,e.equipment.length),o=e.servicesData.length,i=e.characteristicsData.length,n=e.maskShow?e.list.length:null;e.$mp.data=Object.assign({},{$root:{g0:s,g1:o,g2:i,g3:n}})},n=!1,a=[];i._withStripped=!0},759:function(e,t,s){"use strict";s.r(t);var o=s(760),i=s.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return o[e]}))}(n);t["default"]=i.a},760:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{title:"bluetooth",disabled:[!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],newDeviceLoad:!1,searchLoad:!1,maskShow:!1,equipment:[],adapterState:{discovering:!1,available:!1},connected:!1,showMaskType:"device",servicesData:[],characteristicsData:[],valueChangeData:{},isStop:!0,list:[]}},onLoad:function(){this.onBLEConnectionStateChange()},methods:{moveHandle:function(){},maskclose:function(){this.maskShow=!1},queryDevices:function(){this.showMaskType="device",this.maskShow=!0},tapQuery:function(e){"device"===this.showMaskType&&(this.$set(this.disabled,4,!1),this.equipment.length>0?this.equipment[0]=e:this.equipment.push(e),this.newDeviceLoad=!1),"service"===this.showMaskType&&(this.$set(this.disabled,6,!1),this.servicesData.length>0?this.servicesData[0]=e:this.servicesData.push(e)),"characteristics"===this.showMaskType&&(this.$set(this.disabled,7,!1),this.characteristicsData.length>0?this.characteristicsData[0]=e:this.characteristicsData.push(e)),this.maskShow=!1},openBluetoothAdapter:function(){var t=this;e.openBluetoothAdapter({success:function(e){console.log("初始化蓝牙成功:"+e.errMsg),console.log(JSON.stringify(e)),t.isStop=!1,t.$set(t.disabled,0,!0),t.$set(t.disabled,1,!1),t.$set(t.disabled,10,!1),t.getBluetoothAdapterState()},fail:function(e){console.log(e),console.log("初始化蓝牙失败，错误码："+(e.errCode||e.errMsg)),0!==e.errCode&&o(e.errCode,e.errMsg)}})},startBluetoothDevicesDiscovery:function(){var t=this;e.startBluetoothDevicesDiscovery({success:function(e){console.log("开始搜索蓝牙设备:"+e.errMsg),t.searchLoad=!0,t.$set(t.disabled,1,!0),t.$set(t.disabled,2,!1),t.$set(t.disabled,3,!1),t.onBluetoothDeviceFound()},fail:function(e){console.log("搜索蓝牙设备失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},stopBluetoothDevicesDiscovery:function(t){var s=this;e.stopBluetoothDevicesDiscovery({success:function(e){console.log("停止搜索蓝牙设备:"+e.errMsg),t?s.$set(s.disabled,1,!0):s.$set(s.disabled,1,!1),s.$set(s.disabled,2,!0),s.searchLoad=!1},fail:function(e){console.log("停止搜索蓝牙设备失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},onBluetoothDeviceFound:function(){var t=this;e.onBluetoothDeviceFound((function(e){console.log("开始监听寻找到新设备的事件"),t.getBluetoothDevices()}))},getBluetoothDevices:function(){var t=this;e.getBluetoothDevices({success:function(e){t.newDeviceLoad=!1,console.log("获取蓝牙设备成功:"+e.errMsg),t.list=e.devices},fail:function(e){console.log("获取蓝牙设备错误，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},getBluetoothAdapterState:function(){var t=this;console.log("---\x3e"),e.getBluetoothAdapterState({success:function(e){console.log(JSON.stringify(e)),t.adapterState=e},fail:function(e){console.log("获取本机蓝牙适配器状态失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},createBLEConnection:function(){var t=this,s=this.equipment[0].deviceId;e.showToast({title:"连接蓝牙...",icon:"loading",duration:99999}),e.createBLEConnection({deviceId:s,success:function(s){console.log(s),console.log("连接蓝牙成功:"+s.errMsg),t.stopBluetoothDevicesDiscovery(!0),e.hideToast(),e.showToast({title:"连接成功",icon:"success",duration:2e3}),t.$set(t.disabled,3,!0),t.$set(t.disabled,4,!0),t.$set(t.disabled,5,!1),t.$set(t.disabled,9,!1),t.connected=!0},fail:function(e){console.log("连接低功耗蓝牙失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},closeBLEConnection:function(){var t=this,s=this.equipment[0].deviceId;e.closeBLEConnection({deviceId:s,success:function(e){console.log(e),console.log("断开低功耗蓝牙成功:"+e.errMsg),t.$set(t.disabled,1,!1),t.$set(t.disabled,3,!0),t.$set(t.disabled,4,!0),t.$set(t.disabled,5,!0),t.$set(t.disabled,6,!0),t.$set(t.disabled,7,!0),t.$set(t.disabled,8,!0),t.$set(t.disabled,9,!0),t.equipment=[],t.servicesData=[],t.characteristicsData=[]},fail:function(e){console.log("断开低功耗蓝牙成功，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},getBLEDeviceServices:function(){var t=this,s=this.equipment[0].deviceId;console.log("获取所有服务的 uuid:"+s),e.getBLEDeviceServices({deviceId:s,success:function(e){console.log(JSON.stringify(e.services)),console.log("获取设备服务成功:"+e.errMsg),t.$set(t.disabled,7,!0),t.$set(t.disabled,8,!0),t.showMaskType="service",t.list=e.services,t.characteristicsData=[],t.list.length<=0?i("获取服务失败，请重试!"):t.maskShow=!0},fail:function(e){console.log("获取设备服务失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},getBLEDeviceCharacteristics:function(){var t=this,s=this.equipment[0].deviceId,n=this.servicesData[0].uuid;console.log(s),console.log(n),e.getBLEDeviceCharacteristics({deviceId:s,serviceId:n,success:function(e){console.log(JSON.stringify(e)),console.log("获取特征值成功:"+e.errMsg),t.$set(t.disabled,7,!0),t.valueChangeData={},t.showMaskType="characteristics",t.list=e.characteristics,t.list.length<=0?i("获取特征值失败，请重试!"):t.maskShow=!0},fail:function(e){console.log("获取特征值失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}})},onBLEConnectionStateChange:function(){var t=this;e.onBLEConnectionStateChange((function(e){if(console.log("蓝牙连接状态 --------------------------\x3e"),console.log(JSON.stringify(e)),!e.connected){if(t.isStop)return;console.log("断开低功耗蓝牙成功:"),t.$set(t.disabled,1,!1),t.$set(t.disabled,3,!0),t.$set(t.disabled,4,!0),t.$set(t.disabled,5,!0),t.$set(t.disabled,6,!0),t.$set(t.disabled,7,!0),t.$set(t.disabled,8,!0),t.$set(t.disabled,9,!0),t.searchLoad=!1,t.equipment=[],t.servicesData=[],t.characteristicsData=[],t.valueChangeData={},i("已经断开当前蓝牙连接")}}))},readBLECharacteristicValue:function(){var t=this,s=this.equipment[0].deviceId,i=this.servicesData[0].uuid,n=this.characteristicsData[0].uuid;console.log(s),console.log(i),console.log(n),e.readBLECharacteristicValue({deviceId:s,serviceId:i,characteristicId:n,success:function(e){console.log("读取设备数据值成功"),console.log(JSON.stringify(e)),t.notifyBLECharacteristicValueChange()},fail:function(e){console.log("读取设备数据值失败，错误码："+e.errCode),0!==e.errCode&&o(e.errCode)}}),this.onBLECharacteristicValueChange()},onBLECharacteristicValueChange:function(){var t=this;e.onBLECharacteristicValueChange((function(e){console.log("监听低功耗蓝牙设备的特征值变化事件成功"),console.log(JSON.stringify(e)),t.valueChangeData=e}))},notifyBLECharacteristicValueChange:function(){var t=this.equipment[0].deviceId,s=this.servicesData[0].uuid,o=this.characteristicsData[0].uuid,i=this.characteristicsData[0].properties.notify;console.log(t),console.log(s),console.log(o),console.log(i),e.notifyBLECharacteristicValueChange({state:!0,deviceId:t,serviceId:s,characteristicId:o,success:function(e){console.log("notifyBLECharacteristicValueChange success:"+e.errMsg),console.log(JSON.stringify(e))}})},closeBluetoothAdapter:function(t){var s=this;e.closeBluetoothAdapter({success:function(e){console.log("断开蓝牙模块成功"),s.isStop=!0,s.$set(s.disabled,0,!1),s.$set(s.disabled,1,!0),s.$set(s.disabled,2,!0),s.$set(s.disabled,3,!0),s.$set(s.disabled,4,!0),s.$set(s.disabled,5,!0),s.$set(s.disabled,6,!0),s.$set(s.disabled,7,!0),s.$set(s.disabled,8,!0),s.$set(s.disabled,9,!0),s.$set(s.disabled,10,!0),s.equipment=[],s.servicesData=[],s.characteristicsData=[],s.valueChangeData={},s.adapterState=[],s.searchLoad=!1,i("断开蓝牙模块")}})}}};function o(e,t){switch(e){case 1e4:i("未初始化蓝牙适配器");break;case 10001:i("未检测到蓝牙，请打开蓝牙重试！");break;case 10002:i("没有找到指定设备");break;case 10003:i("连接失败");break;case 10004:i("没有找到指定服务");break;case 10005:i("没有找到指定特征值");break;case 10006:i("当前连接已断开");break;case 10007:i("当前特征值不支持此操作");break;case 10008:i("其余所有系统上报的异常");break;case 10009:i("Android 系统特有，系统版本低于 4.3 不支持 BLE");break;default:i(t)}}function i(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.showModal({title:"提示",content:t,showCancel:s})}t.default=s}).call(this,s(2)["default"])},761:function(e,t,s){"use strict";s.r(t);var o=s(762),i=s.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return o[e]}))}(n);t["default"]=i.a},762:function(e,t,s){}},[[755,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/bluetooth/bluetooth.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/map/map"],{"1aa6":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]},"43a5":function(t,e,n){"use strict";var o=n("6979"),i=n.n(o);i.a},5141:function(t,e,n){"use strict";var o=n("6442"),i=n.n(o);i.a},6442:function(t,e,n){},6979:function(t,e,n){},"6a15":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{id:0,latitude:39.989631,longitude:116.481018,title:"方恒国际 阜通东大街6号",zIndex:"1",rotate:0,width:20,height:20,anchor:{x:.5,y:1},callout:{content:"方恒国际 阜通东大街6号",color:"#00BFFF",fontSize:10,borderRadius:4,borderWidth:1,borderColor:"#333300",bgColor:"#CCFF99",padding:"5",display:"ALWAYS"}},{id:1,latitude:39.908692,longitude:116.397477,title:"天安门",zIndex:"1",iconPath:"/static/location.png",width:40,height:40,anchor:{x:.5,y:1},callout:{content:"首都北京\n天安门",color:"#00BFFF",fontSize:12,borderRadius:2,borderWidth:0,borderColor:"#333300",bgColor:"#CCFF11",padding:"1",display:"ALWAYS"}}],o=[{points:[{latitude:39.925539,longitude:116.279037},{latitude:39.925539,longitude:116.520285}],color:"#FFCCFF",width:7,dottedLine:!0,arrowLine:!0,borderColor:"#000000",borderWidth:2},{points:[{latitude:39.938698,longitude:116.275177},{latitude:39.966069,longitude:116.289253},{latitude:39.944226,longitude:116.306076},{latitude:39.966069,longitude:116.322899},{latitude:39.938698,longitude:116.336975}],color:"#CCFFFF",width:5,dottedLine:!0,arrowLine:!0,borderColor:"#CC0000",borderWidth:3}],i=[{points:[{latitude:39.781892,longitude:116.293413},{latitude:39.7876,longitude:116.391842},{latitude:39.733187,longitude:116.417932},{latitude:39.704653,longitude:116.338255}],fillColor:"#FFCCFF",strokeWidth:3,strokeColor:"#CC99CC",zIndex:11},{points:[{latitude:39.8876,longitude:116.518932},{latitude:39.781892,longitude:116.518932},{latitude:39.781892,longitude:116.428932},{latitude:39.8876,longitude:116.428932}],fillColor:"#CCFFFF",strokeWidth:5,strokeColor:"#CC0000",zIndex:3}],a=[{latitude:39.996441,longitude:116.411146,radius:15e3,strokeWidth:5,color:"#CCFFFF",fillColor:"#CC0000"},{latitude:40.096441,longitude:116.511146,radius:12e3,strokeWidth:3,color:"#CCFFFF",fillColor:"#FFCCFF"},{latitude:39.896441,longitude:116.311146,radius:9e3,strokeWidth:1,color:"#CCFFFF",fillColor:"#CC0000"}],l=[{latitude:39.989631,longitude:116.481018},{latitude:39.908692,longitude:116.397477}],d={data:function(){return{location:{longitude:116.397477,latitude:39.908692},controls:[{id:1,position:{left:5,top:180,width:30,height:30},iconPath:"/static/logo.png",clickable:!0}],showLocation:!1,scale:13,showCompass:!0,enable3D:!0,enableOverlooking:!0,enableZoom:!0,enableScroll:!0,enableRotate:!0,enableSatellite:!1,enableTraffic:!1,polyline:[],markers:[],polygons:[],circles:[],includePoints:[],rotate:0,skew:0}},onLoad:function(){},onReady:function(){this.map=t.createMapContext("map1",this)},methods:{changeScale:function(){this.scale=9==this.scale?15:9},changeRotate:function(){this.rotate=90==this.rotate?0:90},changeSkew:function(){this.skew=30==this.skew?0:30},enableThreeD:function(t){this.enable3D=t.detail.value},changeShowCompass:function(t){this.showCompass=t.detail.value},changeEnableOverlooking:function(t){this.enableOverlooking=t.detail.value},changeEnableZoom:function(t){this.enableZoom=t.detail.value},changeEnableScroll:function(t){this.enableScroll=t.detail.value},changeEnableRotate:function(t){this.enableRotate=t.detail.value},changeEnableSatellite:function(t){this.enableSatellite=t.detail.value},changeEnableTraffic:function(t){this.enableTraffic=t.detail.value},addMarkers:function(){this.markers=n},addPolyline:function(){this.polyline=o},addPolygons:function(){this.polygons=i},addCircles:function(){this.circles=a},includePoint:function(){this.includePoints=l},handleGetCenterLocation:function(){this.map.getCenterLocation({success:function(e){console.log(JSON.stringify(e)),t.showModal({content:JSON.stringify(e)})}})},handleGetRegion:function(){this.map.getRegion({success:function(e){console.log(JSON.stringify(e)),t.showModal({content:JSON.stringify(e)})}})},handleTranslateMarker:function(){this.map.translateMarker({markerId:1,destination:{latitude:39.989631,longitude:116.481018},duration:2e3},(function(e){console.log(JSON.stringify(e)),t.showModal({content:JSON.stringify(e)})}))},maptap:function(e){t.showModal({content:JSON.stringify(e)})},onmarkertap:function(e){t.showModal({content:JSON.stringify(e)})},oncontroltap:function(e){t.showModal({content:JSON.stringify(e)})},oncallouttap:function(e){t.showModal({content:JSON.stringify(e)})},onupdated:function(t){console.log(JSON.stringify(t))},onregionchange:function(t){console.log(JSON.stringify(t))},onpoitap:function(e){t.showModal({content:JSON.stringify(e)})}}};e.default=d}).call(this,n("543d")["default"])},"75dd":function(t,e,n){"use strict";n.r(e);var o=n("6a15"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},b141:function(t,e,n){"use strict";n.r(e);var o=n("1aa6"),i=n("75dd");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("43a5"),n("5141");var l=n("f0c5"),d=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=d.exports},e0e0:function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("b145"),n("4a2a"),n("a9ff");o(n("66fd"));var i=o(n("b141"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["e0e0","common/runtime","common/vendor"]]]);
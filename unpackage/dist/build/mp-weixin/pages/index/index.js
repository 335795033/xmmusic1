(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"3c67":function(t,n,o){},4764:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{scrollTop:0,indicatorDots:!1,autoplay:!0,interval:4e3,duration:500,list:[],sheet:[],HotMv:[]}},onLoad:function(){var n=this;t.startPullDownRefresh(),t.request({url:"https://v1.itooi.cn/tencent/banner",method:"GET",data:{},success:function(t){t.data.data.map(function(t){n.list.push(t.pic_info)})},fail:function(t){console.log(t)},complete:function(){}}),t.request({url:"https://v1.itooi.cn/tencent/songList/hot",method:"GET",data:{},success:function(t){t.data.data.list.slice(0,6).map(function(t){n.sheet.push(t)})},fail:function(){},complete:function(){}}),t.request({url:"https://v1.itooi.cn/tencent/mv/hot",method:"GET",data:{},success:function(t){t.data.data.list.slice(0,6).map(function(t){n.HotMv.push(t)})},fail:function(){},complete:function(){}})},onPullDownRefresh:function(){console.log("refresh"),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{goHotList:function(n){var o=n.currentTarget.dataset.id;t.navigateTo({url:"../HotList/HotList?id="+o})},goHotMv:function(n){var o=n.currentTarget.dataset.id;t.navigateTo({url:"../MvPlay/MvPlay?id="+o})},goMoreList:function(){t.navigateTo({url:"../MoreList/MoreList"})},goMoreMv:function(){t.navigateTo({url:"../MoreMv/MoreMv"})},goSearch:function(){t.navigateTo({url:"../Search/Search",animationType:"pop-in",animationDuration:200})},sao:function(){t.scanCode({success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result)}})}}};n.default=o}).call(this,o("543d")["default"])},6616:function(t,n,o){"use strict";o.r(n);var e=o("4764"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=a.a},"6bd0":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return a})},7950:function(t,n,o){"use strict";var e=o("3c67"),a=o.n(e);a.a},"7fdc":function(t,n,o){"use strict";o.r(n);var e=o("6bd0"),a=o("6616");for(var i in a)"default"!==i&&function(t){o.d(n,t,function(){return a[t]})}(i);o("7950");var u=o("2877"),c=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports}},[["0cc7","common/runtime","common/vendor"]]]);
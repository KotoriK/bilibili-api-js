!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e||self).bilibiliApi={})}(this,function(e){function i(){return i=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},i.apply(this,arguments)}var o="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",t={"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"};e.getDanmuInfo=function(e,n){return void 0===n&&(n="0"),{url:"http://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id="+e+"&type="+n,options:{headers:i({origin:"https://live.bilibili.com",referer:"https://live.bilibili.com/"},t,{"user-agent":o})}}},e.getRoomPlayInfo=function(e){return{url:"http://api.live.bilibili.com/xlive/web-room/v1/index/getRoomPlayInfo?room_id="+e,options:{headers:i({},t,{"user-agent":o})}}},e.getSpaceAccInfo=function(e){return{url:"https://api.bilibili.com/x/space/acc/info?mid="+e,options:{headers:i({},t,{"user-agent":o})}}}});
//# sourceMappingURL=index.umd.js.map
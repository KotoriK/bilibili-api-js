function e(){return e=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},e.apply(this,arguments)}var i="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",t={"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"};exports.getDanmuInfo=function(o,r){return void 0===r&&(r="0"),{url:"http://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id="+o+"&type="+r,options:{headers:e({origin:"https://live.bilibili.com",referer:"https://live.bilibili.com/"},t,{"user-agent":i})}}},exports.getPlayUrl=function(o){return{url:"https://api.live.bilibili.com/room/v1/Room/playUrl?"+Object.entries(o).map(function(e){return e[0]+"="+e[1]}).join("&"),options:{headers:e({},t,{"user-agent":i})}}},exports.getRoomPlayInfo=function(o){return{url:"http://api.live.bilibili.com/xlive/web-room/v1/index/getRoomPlayInfo?room_id="+o,options:{headers:e({},t,{"user-agent":i})}}},exports.getSpaceAccInfo=function(o){return{url:"https://api.bilibili.com/x/space/acc/info?mid="+o,options:{headers:e({},t,{"user-agent":i})}}};
//# sourceMappingURL=index.js.map

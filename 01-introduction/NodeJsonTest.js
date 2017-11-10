#!/usr/bin/node

var fs = require("fs");

var http = require("http");
var url = require("url");

http.createServer(function(req,res){
  var getDataObj = url.parse(req.url , true).query;

  console.log(getDataObj);

  var arrayIndex = getDataObj.id -1;
  console.log(typeof arrayIndex,arrayIndex);

  fs.readFile("./NodeJsonTest.json", function readData(err,data){
    var jsonArr = JSON.parse(data);
    console.log('jsonArr:', jsonArr[arrayIndex]);
    res.writeHead(200, {"Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "Get, Post"
    });
    res.end(JSON.stringify(jsonArr[arrayIndex]));
  }); 
  
  } ).listen(8080,"192.168.91.144");
console.log("start server!");



#!/usr/bin/node
var http=require('http'),
     fs = require('fs'),
     zlib = require('zlib'),
     path =require('path');

var www = process.argv[2] || 'www';
//指定服务程序的根路径
var root=path.isAbsolute(www)?www:path.join(__dirname,www);
console.log('root:',root);
http.createServer(function(req,res){

  
 console.log(req.headers);
 console.log('');

 var fileName = root +req.url;
 fs.stat(fileName,function(err,stat){
   if(err){
     if('ENOENT' ===err.code){
       res.statusCode =404;
       res.end(fileName + 'NOT FOUND!');
     }else{
       res.statuscode =500;
       res.end(err.message);
     }
   }else{
     res.setHeader('Content-Encoding','gzip');
     fs.createReadStream(fileName).pipe(zlib.createGzip()).pipe(res);
   }
 });
}).listen(8080);




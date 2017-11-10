#!/usr/bin/node
var http=require('http');

var fs=require('fs');
var path =require('path');

var www = process.argv[2] || 'www';
//指定服务程序的根路径
var root=path.isAbsolute(www)?www:path.join(__dirname,www);
console.log('root:',root);
http.createServer(function(req,res){

  

 var url='http://' +req.headers.host +req.url;


 console.log('URL:',url);
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
     res.setHeader('Content-Length',stat.size);
     fs.createReadStream(fileName).pipe(res);
   }
 });
}).listen(8000);




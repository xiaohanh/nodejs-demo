#!/usr/bin/node
var http=require('http');
var url=require('url');
//启动http服务
http.createServer(function (req,res){

  console.log(req.headers);

  var options = url.parse(req.url);

  options.headers = req.headers;

  var proxyRequest = http.request(options, function(proxyResponse){
     proxyResponse.on('data',function(chunk){
       console.log(chunk);

       res.write(chunk,'binary');
     });

     proxyResponse.on('end',function(){res.end();});

     console.log(proxyResponse.statusCode,proxyResponse.headers);
      res.writeHead(proxyResponse.statusCode,proxyResponse.headers);

  });

  req.on('data',function(chunk){
      
    console.log(chunk);
    proxyRequest.write(chunk,'binary');
  });
  req.on('end',function(){
    proxyRequest.end();
  });

 
}).listen(8080);


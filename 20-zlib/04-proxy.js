#!/usr/bin/node
var http=require('http'),
    zlib=require('zlib'),
     url=require('url');
//启动http服务
http.createServer(function (req,res){
greenMsg('[PEQUEST HEADER]');

  console.log(req.headers);

  var options = url.parse(req.url);

  options.headers = req.headers;

  var proxyRequest = http.request(options, function(proxyResponse){
     proxyResponse.on('data',function(chunk){

      greenMsg('[ RESPONSE BODY]');
       console.log(zlib.gunzipSync(chunk)).toString('utf-8');

       res.write(chunk,'binary');
     });

     proxyResponse.on('end',function(){res.end();});

     greenMsg('[RESPONSE HEADER]')

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

function greenMsg(msg){console.log('\n\033[1;32m'+ msg +'\033[1;37m');}


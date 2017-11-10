#!/usr/bin/node
var http=require('http');
const {URL}=require('url');

var city=process.argv[2]||'石家庄';

var addr='http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city='+city;
var options= new URL(addr);

options.method='POST';


//console.log('OPTIONS:',options);


var req=http.request( options,function(res){


  var result='';
  res.on('data',function(chunk){result +=chunk.toString('utf8');
  });

  res.on('end',function(){
    var weather=JSON.parse(result);
    console.log(weather);
  });
}).on('error',function(err){
  console.log(err.message);
});
req.end();





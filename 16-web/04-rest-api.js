#!/usr/bin/node
var http= require('http');
//空数组用来存放待办事项
var items = [];

http.createServer(function(req,res){


  console.log(req.headers);
  console.log('');
  //判断请求的方法  
  switch(req.method){
   //get请求得到服务器的资源
    case 'GET':
      get(res);
      break;
      //post请求在服务器上添加资源
    case 'POST':
      insert(req,res);
      break;
    case 'DELETE':
      del(req,res);
      break;  
    case 'PUT':
      change(req,res);
      break;
    default:
      break;
  }


 
}).listen(8080);


function get(res){
 // console.log('GET');
 var body = JSON.stringify(items);

 res.setHeader('Content-Length',Buffer.byteLength(body));

 res.setHeader('Content-Type','text/plain; charset="utf-8"');
 res.setHeader('Access-Control-Allow-Origin','*');
 res.end(body);
}

function insert(req,res){
 // console.log('POST');
 var item = '';
//收到数据
 req.on('data',function(data){ item += data; });
//接收完数据
 req.on('end',function(){

   items.push(item);
 });
res.setHeader('Access-Control-Allow-Orign',"*");
 res.end('Insert OK!');

}
function del(req,res){

//  console.log('DELETE');
   // console.log(req.url);
//    console.log(req.url.split('/'));
    var arg = req.url.split('/');

    if(arg[1] === ''){
      items = [];

    }
  var i = parseInt(arg[1]);

  res.setHeader('Access-Control-Allow-Orign','*');
    if(!items[i]){
      res.statusCode = 404;

      res.end('Not found');
    }else{
      items.splice(i,1);
      res.end('Delete OK');
    }
  
}
function change(req,res){
 // console.log('PUT');


   // console.log(req.url);
   // console.log(req.url.split('/'));
    var arg = req.url.split('/');

    if(arg[1] === ''){
      items = [];

    }

    var item = '';

    res.setHeader('Access-Control-Allow-Orign','*');
    req.on('data',function(chunk){ item += chunk });

    req.on('end',function(){
    
     var i = parseInt(arg[1]);

    if(!items[i]){
      res.statusCode = 404;

      res.end('Not found');
    }else{
      items[i]=item;
      res.end('Change OK');
    }
  
    });
} 


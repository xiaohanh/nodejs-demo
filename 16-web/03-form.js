#!/usr/bin/node
var http= require('http');
var qs = require('querystring');
//空数组用来存放待办事项
var items = [];

http.createServer(function(req,res){

//判断请求的url地址是否正确
  if(req.url!= '/'){

    err(res);
    return;
  }
  console.log(req.headers);
  console.log('');


  switch(req.method){
    case 'GET':
       show (res);
       break;
    case 'POST':
       add(req,res);
       break;
    default:
        err(res);
        break;

  }
}).listen(8080);

function show(res){

  var html = '<!DOCTYPE html>\n'
          + '<html>\n'
          + '<head>\n'
          + '<meta charset="UTF-8">\n'
          + '<head>\n'
          + '<body>\n'
          + '<h1>Todo List</h1>\n'
          + '<ul>\n'
          + items.map(function(item){return '<li>' + item + '</li>';}).join('\n')      
          + '</ul>\n'
          + '<form method="post" action="/">\n'
          + '<p><input type="text" name="item"/></p>\n'
          + '<p><input type="submit" name="Add Item"></p>\n'

          + '<form>\n'
          + '<body>\n'
          +'</html>';


  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
}


 function add(req,res) {
    var body = '';
    
    req.on('data', function(chunk){body +=chunk});

    req.on('end',function(){
      console.log(body);

      if(body != ''){
        items.push(qs.parse(body).item);
      }
      show(res);
    });

  }
  

  function err(res){
    var msg = 'Not found';

    res.statusCode = 404;

    res.setHeader('Content-Length',msg.length);

    res.setHeader('Content-Type','text/plain');


    res.end(msg);
  }





#!/usr/bin/node
var http= require('http');

http.createServer(function(req,res){

  var body="hello world";
  res.statusCode=404;

  res.setHeader('Content-length',Buffer.byteLength(body));

  res.setHeader('Content-type','text/plain');

console.log(req.headers);
req.pipe(process.stdout);
console.log('');

  res.end('hello world');

}).listen(8080);



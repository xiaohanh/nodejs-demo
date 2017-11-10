#!/usr/bin/node
//地址为https,require中的参数就为https,地址为http,参数就为http.
var http = require('https'),
    url = require('url'),
    user = process.argv[2] || 'wangding';
var addr = 'https://api.github.com/search/repositories?q=user:' + user;

var options = url.parse(addr);

//console.log(options);

options.headers = { 'User-Agent': '03-get-repos.js' };


http.get(options, function(res) {
  var data = '';
  res.on('data', function(chunk) { data += chunk;  })
  res.on('end', function() {
    var repos = JSON.parse(data);//使用parse方法将字符创转化为对象。
    for(var i=0; i<repos.total_count; i++) console.log(repos.items[i].name);
    })
}).on('error',(e)=>{
  console.log(e);
})


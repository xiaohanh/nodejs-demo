#!/usr/bin/node

//通过缓存的方式来运行外部程序
var cp=require('child_process');
console.log('I am father process PID:',process.pid);

cp.execFile('./02-child.js',function(err,stdout,stderr){
  console.log(stdout);
})

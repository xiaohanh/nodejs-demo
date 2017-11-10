#!/usr/bin/node
var cp=require('child_process');
console.log('I am father process. PID:',process.pid);

var child=cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});
//child.stdout.pipe(process.stdout);
//child.stderr.pipeprocess.stderr);


//告诉node.js 主进程不再保留子进程的引用
child.unref();

setTimeout(function(){
  console.log('5 second passed. Father game over!');

  process.exit(0);
},5000);



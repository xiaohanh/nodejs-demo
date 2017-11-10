#!/usr/bin/node
var cp=require('child_process');
console.log('I am child  proceess. PID:',process.pid);



var timer=global.setInterval(function(){
  console.log('time:',Date.now());
},2000);

global.setTimeout(function(){
  global.clearTimeout(timer);
  console.log('OK! 16seconds. Gamer Over')
},16000);


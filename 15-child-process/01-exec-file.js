#!/usr/bin/node
var cp=require('child_process');
console.log('I am father proceess. PID:',process.pid);
console.log('cat 01-exec-file.js\n');

cp.execFile('cat',['01-exec-file.js'],function(err,stdout,stderr){
  if(err) console.log(err);

  console.log(stdout);
});
cp.execFile('mkdir',['abc'],function(err,stdout,stderr){
  if(err) console.log(err);
  console.log(stdout);
});

cp.execFile('abc',['abc'],function(err,stdout,stderr){
  if(err) console.log(err);
  console.log(stdout);
});

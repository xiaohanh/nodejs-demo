#!/usr/bin/node

console.log('process id',process.pid);

process.stdin.resume();

process.on('SIGHT',function(){
  console.log('you press ctrl-c,good bye');
  process.exit(0);
});

process.on('SIGTSTP',function(){
  console.log('you press ctrl-z,stop running');
});




#!/usr/bin/node
var fs=require('fs');
var src=process.argv[2];
var dst=process.argv[3];

fs.copyFile(src,dst,(err)=>{
  if(err) throw err;
console.log('copy done');
});




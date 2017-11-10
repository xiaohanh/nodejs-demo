#!/usr/bin/node
var fs=require('fs');
var dir=process.argv[2];


fs.mkdir(dir,function(err,buf){
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  
});



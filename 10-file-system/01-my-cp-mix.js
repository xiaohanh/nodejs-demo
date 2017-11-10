#!/usr/bin/node
var fs=require('fs');
var src=process.argv[2];
var dst=process.argv[3];

//var len1=fs.statSync(src).size;

//var buf1=new Buffer(len1);


var fid1=fs.openSync(src,'r');
var fid2=fs.openSync(dst,'w');


//获取源文件的权限，修改目标文件的权限
var aa=fs.statSync(src);
console.log(aa.mode);
fs.chmodSync(dst,aa.mode);


fs.copyFileSync(src,dst);

//fs.writeSync(1,fs.readFileSync(fid2).toString('utf8'));
//fs.writeSync(1,fs.writeFileSync(fid2).toString('utf8'));


fs.closeSync(fid1);
fs.closeSync(fid2);





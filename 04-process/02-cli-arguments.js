#!/usr/bin/node
var argv=process.argv;

//console.log("architecture:",process.arch);
//console.log("platform",process.platform);

var expression=argv[2];
console.log(expression + '=%d',eval(expression));



#!/usr/bin/node

//引入断言模块
var assert= require('assert');
//引入被测模块
var Todo = require('./todo');
//实例化一个被测对象
var todo = new Todo();

var testCompleted = 0;
deleteTest();
addTest();
throwTest();
doAsyncTest(function(){
  console.log('completed %d tests.', testCompleted);
})


function deleteTest(){
  console.log('test delete function');
//添加一个待办事项
  todo.add('Delete Me');
  assert.equal(todo.getCount(),1,'1 item should exist');

  todo.deleteAll();
  assert.equal(todo.getCount(),0,'No items should exist');
  testCompleted ++;

}


function addTest(){

  console.log('test add function');

  todo.deleteAll();
  todo.add('Added');

  assert.notEqual(todo.getCount(),0,'1 item should exist');

  assert.equal(todo.getCount(), 1, '1  item should exist');

  testCompleted++;

}


function throwTest(){

  console.log('test add function');

  assert.throws(todo.add, /require/);

  testCompleted ++;
}

function doAsyncTest(cb){

  console.log('test doAsyncfunction');

  todo.doAsync(function (value){
    assert(value,'callback shoule be passed true');

    testCompleted ++;
    cb();
  });
}

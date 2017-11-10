#!/usr/bin/node
//创建一个todo类：
function Todo(){

  this.todos = [];

}

Todo.prototype.add = function(item){
  if(!item) throw new Error('Todo#add require an item');
  this.todos.push(item);
}
Todo.prototype.deleteAll = function(){
 //删除操作;清空数组。
  this.todos=[];
}

Todo.prototype.getCount = function(){
  return this.todos.length;
}

Todo.prototype.doAsync = function(cb){

  setTimeout(cb,2000,true);
}

module.exports = Todo;


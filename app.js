angular.module("Todo List",["firebase"])
.controller("TodoList",func);
function func( $firebaseArray,$firebaseObject)
{
  var todo=this;
  todo.tasks=[];
  todo.add=add;
  todo.edit=edit;
  var updateindex;
  todo.updated=0;
  todo.update=update;
 
  todo.call=call;
  todo.remove=remove;
  todo.moveup=moveup;
  todo.movedown=movedown;
 

var rootref=firebase.database().ref();
var childref=rootref.child("Todo Tasks");


todo.tasks=$firebaseArray(childref);
  function add(t)
  {

  todo.tasks.$add({"TName":t,"Status":0});
 
  todo.name="";
  
  }
function remove(s)
{
  var i=todo.tasks[s];
  console.log(i);
  todo.tasks.$remove(i).then(function(childref)
  {
    childref.key==i.$id;
  });
 
}
function call(index)
{

todo.tasks[index].status=todo.tasks[index].status?0:1;


todo.tasks.$save(index).then(function() {
childref.key==todo.tasks[index].$id;
});



}  
function edit(aa)
{
todo.name= todo.tasks[aa].TName;

todo.updated=1;
updateindex=aa;
}
function moveup(index)
{
var temp={};
if(index!=0)
{
  temp=todo.tasks[index];
  todo.tasks[index]=todo.tasks[index-1];
  todo.tasks.$save(index).then(function (childref)
  {
    childref.key==todo.tasks[index].$id;
  });
  todo.tasks[index-1]=temp;
   todo.tasks.$save(index-1).then(function (childref)
  {
    childref.key==todo.tasks[index-1].$id;
  });
 
}
}
function movedown(index)
{
var temp={};
if(index!=todo.tasks.length-1)
{
  temp=todo.tasks[index];
  todo.tasks[index]=todo.tasks[index+1];
   todo.tasks.$save(index).then(function (childref)
  {
    childref.key==todo.tasks[index].$id;
  });
  todo.tasks[index+1]=temp;
 todo.tasks.$save(index+1).then(function (childref)
  {
    childref.key==todo.tasks[index+1].$id;
  });
}
}

function update(name)
{

  var index=updateindex;
 
  todo.name=name;
  todo.tasks[index].TName=todo.name;
  todo.tasks.$save(index).then(function (childref)
  {
    childref.key==todo.tasks[index].$id;
  });
  todo.updated=0;

  todo.name=""
}

}
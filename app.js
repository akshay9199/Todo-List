angular.module("Todo List",[])
.controller("TodoList",func);
function func()
{
  var todo=this;
  todo.tasks=[];
  todo.add=add;
  todo.edit=edit;
  var updateindex;
  todo.updated=0;
  todo.update=update;
  todo.completed=0;
  todo.call=call;
  todo.remove=remove;
  todo.moveup=moveup;
  todo.movedown=movedown;
  todo.status=status;
  function add(t)
  {

  todo.tasks.push({"TName":t, "Status":0});
  todo.name="";
  
  }
function remove(s)
{
  todo.tasks.splice(s,1);
  console.log(todo.tasks);
}
function call(index)
{

todo.tasks[index].status=todo.tasks[index].status?0:1;
todo.tasks[index].status? todo.completed++:todo.completed-- ;
}  
function edit(aa)
{
todo.name= todo.tasks[aa].TName;

todo.updated=1;
updateindex=aa;
 console.log(updateindex);
}
function moveup(index)
{
var temp={};
if(index!=0)
{
  temp=todo.tasks[index];
  todo.tasks[index]=todo.tasks[index-1];
  todo.tasks[index-1]=temp;
  console.log(temp);
}
}
function movedown(index)
{
var temp={};;
if(index!=todo.tasks.length-1)
{
  temp=todo.tasks[index];
  todo.tasks[index]=todo.tasks[index+1];
  todo.tasks[index+1]=temp;
}
}

function update(name)
{
  var index=updateindex;
  console.log(index);
  todo.name=name;
  todo.tasks[index].TName=todo.name;
  todo.updated=0;
  todo.name=""
}
}
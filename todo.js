// model

let todos = [{
title:'get groceries', dueDate: '2022-11-30', id: 'id1'},
{title:'wash car', dueDate: '2022-10-15', id: 'id2'} ,
{title:'make dinner', dueDate: '2022=09-27', id: 'id3' }];



render();

// create a todo
function createTodo(title, dueDate){
    const id = '' + new Date().getTime();


    todos.push({title:title,
    dueDate: dueDate,
    id:id });

}

// deletes a todo
function removeTodo(idToDelete){
    todos = todos.filter(function (todo){
        if ( todo.id === idToDelete){
            return false;
        }
        else{
            return true;
        }
      });

}



function addTodo(){
   const textbox = document.getElementById('todo-title');
   const title = textbox.value;

   const datePicker = document.getElementById('date-picker');
   const dueDate = datePicker.value;

  

  
  createTodo(title, dueDate);
  

    render();
}

function deleteTodo(event){
  const deteleButton = event.target;
  const idToDelete = deteleButton.id;


removeTodo(idToDelete);

  render();



}

function render (){
document.getElementById('todo-list').innerHTML = '';
   
todos.forEach(function (todo) {    
    const element = document.createElement('div');
    element.innerHTML = todo.title + ' ' + todo.dueDate;

    const deteleButton = document.createElement('button');
    deteleButton.innerHTML = 'Delete';
    deteleButton.style = 'margin-left: 12px;';
    deteleButton.onclick = deleteTodo;
    deteleButton.id = todo.id;
    element.appendChild(deteleButton);
    const  todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
    
    });

}






















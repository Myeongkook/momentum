const todoForm = document.querySelector("#form-todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");


function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo["id"];
    const span = document.createElement("span");
    span.innerText = newTodo["text"];
    const button = document.createElement("button");
    button.innerText = "Delete"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function sayHello(item){
    console.log("this is turn of",item);
}

const TODOS_KEY = "todos"
let toDos = [];
todoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintTodo)
}
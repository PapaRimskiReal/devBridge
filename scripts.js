
const todoList = document.querySelector('.todo-list');

const formElement = document.querySelector('.add-todo-form');
formElement.addEventListener('submit', addTodoItem);

function addTodoItem(e){
    e.preventDefault();
    const inputField = document.querySelector('.add-todo-form > input');
    const inputValue = inputField.value;

    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = inputValue;
    newTodoItem.classList.add('todo-item');
    
    todoList.appendChild(newTodoItem);

    inputField.value = null;
}


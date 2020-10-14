
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

    const buttonComplete = document.createElement('button');
    buttonComplete.classList.add('button-complete');
    buttonComplete.textContent = 'Complete';

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('button-delete');
    buttonDelete.textContent = 'Delete';

    const inside = document.createElement('inside');
    inside.appendChild(buttonComplete);
    inside.appendChild(buttonDelete);

    newTodoItem.appendChild(inside);
    todoList.appendChild(newTodoItem);

    inputField.value = null;
}


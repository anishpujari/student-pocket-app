let todoList = [];
let todoDate = [];
function addTodo(){
    let inputElement = document.querySelector('#task-input');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = '';

    let inputDate = document.querySelector('#todo-date');
    let date = inputDate.value;
    todoDate.push(date);
    inputDate.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newhtml = '';
    for(let i=0;i<todoList.length; i++){
        newhtml += `<span>${todoList[i]}</span>
                    <span>${todoDate[i]}</span>
                    <button id="del" onclick="todoList.splice(${i}, 1);
                    displayItems();"> Delete </button>`;
    }
    containerElement.innerHTML = newhtml;
}
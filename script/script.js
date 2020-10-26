'use strict';

const todoControl = document.querySelector('.todo-control'), //div а планами
    headerInput = document.querySelector('.header-input'), //ввод какие планы
    todoList = document.querySelector('.todo-list'), //дела для выполнения
    todoCompleted = document.querySelector('.todo-completed'); //выполненные дела
const todoContainerLi = document.querySelectorAll('ul>.todo-item');


//массив дел



// const getTodos  = function() {
//     return JSON.parse(localStorage.getItem('todo')) || [];
// };


const getTodos = function() {
    return JSON.parse(localStorage.getItem('todo')) || localStorage.setItem('todo', JSON.stringify([]));
};
const todoData = getTodos();

//функция рендеринга
const render = function() {
    todoList.textContent = ''; //чтобы дела не множились
    todoCompleted.textContent = '';

    todoData.forEach(function(item, id) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            `<button class="todo-remove" data-id="${id}"></button>` +
            '<button class="todo-complete"></button>' +
            '</div>';
        if (item.completed) {
            todoCompleted.append(li); //выполненное дело
        } else {
            todoList.append(li); //добавление дела на страницу нового
        };
        //реализация выбора дела
        const btnTodoCompleted = li.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('click', function() {
            item.completed = !item.completed;
            render();
            localStorage.setItem('todo', JSON.stringify(todoData));
        });

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function(event) {
            const id = event.target.getAttribute('data-id');
            todoData.splice(id, 1);
            render();
            localStorage.setItem('todo', JSON.stringify(todoData));
        });
    });
};

//обработка события добавления дела
todoControl.addEventListener('submit', function(event) {
    event.preventDefault(); //откл перезагрузку формы

    //  const target = event.target;

    //новое дело
    const newTodo = {
        value: headerInput.value,
        completed: false
    };

    //добавление в массив нового объекта (непустого дела)
    if (headerInput.value !== '') {
        todoData.push(newTodo);
    }

    //удаление дела из input
    if (newTodo) {
        headerInput.value = '';
    };

    render(); //обновление списка дел
    localStorage.setItem('todo', JSON.stringify(todoData));
});

render();
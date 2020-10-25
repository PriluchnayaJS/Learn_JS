'use strict';
const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

//массив делс

const todoData = [

    // {
    //     value: 'Сварить кофе',
    //     completed: false
    // },

    // {
    //     value: 'Помыть посуду',
    //     completed: true
    // }
];
//функция рендеринга
const render = function() {
    todoList.textContent = ''; //чтобы дела не множились
    todoCompleted.textContent = '';

    todoData.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
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
        });

    });
};
//обработка события добавления дела
todoControl.addEventListener('submit', function(event) {
    event.preventDefault(); //откл перезагрузку формы

    //новое дело
    const newTodo = {
        value: headerInput.value,
        completed: false
    };

    //добавление в массив нового объекта
    todoData.push(newTodo);

    render(); //обновление списка дел

});

render();
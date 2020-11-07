'use strict';
class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDolist')));
    }

    addToStorage() {
        localStorage.setItem('toDolist', JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }

    createItem(todo) {
        // console.log(this);
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key; //добавление ключа
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>
        `);

        if (todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        };

    }

    addTodo(e) {
        e.preventDefault();
        // console.log(this);
        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: true,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            //console.log(...this.todoData);
            this.render();
        };
    }

    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    }

    deleteItem() {
        //по ключу найти элемент и удалить его из new Map(), render()

    }

    completedItem() {
        //перебрать через forEach все значения по ключу и которые нажали - поменять их занчения

    }

    //на  какую кнопку нажал пользователь
    handler() {
        //делегирование

    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
    }


}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();
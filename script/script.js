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

        // console.log(li.key);

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

        if (todo) {
            this.input.value = '';
        };

    }

    addTodo(e) {
        e.preventDefault();
        // console.log(this);
        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
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

    deleteItem(key) {
        //по ключу найти элемент и удалить его из new Map(), render()
        this.todoData.delete(key);
        this.render();
    }

    completedItem(key) {
        //перебрать через forEach все значения по ключу и которые нажали - поменять их значения

        this.todoData.forEach((todo, i) => {
            if (i === key) {
                todo.completed = !todo.completed;
            };
            this.render();
        });

    }


    //на  какую кнопку нажал пользователь
    handler() {
        //делегирование
        const todoContainer = document.querySelector('.todo-container');

        todoContainer.addEventListener('click', (event) => {
            const target = event.target;
            let key = target.closest('li').key;

            if (target.matches('.todo-complete')) {
                this.completedItem(key);
                // console.log(key);

            };
            if (target.matches('.todo-remove')) {
                this.deleteItem(key);
                // console.log(target.closest('li').key);
            };
        });

    }

    alert() {
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Друзья! Пустое дело добавить нельзя.</strong>";
        document.body.prepend(div);
        setTimeout(() => div.remove(), 5000);
    }

    init() {
        this.alert();
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }


}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();
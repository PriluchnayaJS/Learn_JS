'use strict';
let start = document.getElementById('start');
//console.log(start); <Рассчитать>
let btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1];
//console.log(incomePlus); //<+ дополнительные доходы>
//console.log(expensesPlus); //<+ обязательные расходы>
let depositChek = document.querySelector('#deposit-check');
//console.log(depositChek);
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
//console.log(additionalIncomeItem); //возможные доходы
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
//console.log(budgetMonthValue); //вывод доход за месяц
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
//console.log(budgetDayValue); //вывод дневной бюджет
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
//console.log(expensesMonthValue); //вывод расход за месяц
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
//console.log(additionalIncomeValue); //вывод возможные доходы
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
//console.log(additionalExpensesValue); //вывод возможные расходы
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
//console.log(incomePeriodValue); //вывод накопления за период
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
//console.log(targetMonthValue); //вывод срок достижения цели в месяцах
let salaryAmount = document.querySelector('.salary-amount');
//console.log(salaryAmount); //месячный доход
let incomeTitle = document.querySelectorAll('div>.income-title')[1];
//console.log(incomeTitle); //наименование дополнительного дохода
//let incomeAmout = document.querySelector('.income-amount');
//console.log(incomeAmout); //сумма дополнительного дохода
let espensesItem = document.querySelectorAll('div>.expenses-title')[1];
//console.log(espensesItem); //наименование обязательные расходы
let expensesItems = document.querySelectorAll('.expenses-items');
//let expensesAmout = document.querySelector('.expenses-amount');
//console.log(expensesAmout); //сумма обязательных расходов
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
//console.log(additionalExpensesItem); //возможные расходы (перечисление)
let targetAmount = document.querySelector('.target-amount');
//console.log(targetAmout); //цель накопить сумму
let periodSelect = document.querySelector('.period-select');
//console.log(periodSelect); //выбор периода
let incomeItem = document.querySelectorAll('.income-items');
//console.log(incomeItem); //дополнительные доходы
//let buttonStart = document.querySelector('#start');
//console.log(buttonStart); //кнопка Рассчитать


let divAll = document.querySelectorAll('div');
let titlePeriodAmount = divAll[19];
//console.log(titlePeriodAmount); //для вывода значения периода

let cancel = document.getElementById('cancel');
//console.log(cancel);

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const AppData = function() {

    this.budget = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.persentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

};

AppData.prototype.start = function() {

    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
    // console.log(this);
};

AppData.prototype.rangePeriod = function() {
    //отображение периода
    let eventRange = function() {
        titlePeriodAmount.textContent = periodSelect.value;
    };
    periodSelect.addEventListener('input', eventRange);
    return;
};

AppData.prototype.ButtonStart = function() {

    let clickBtn = function() {
        document.getElementById('start').disabled = false;
    };

    salaryAmount.addEventListener('input', clickBtn);
};

AppData.prototype.showResult = function() {

    const _this = this;
    //вывод результатов
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();

    //вывод накоплений за период согласно range
    let calcPeriod = function() {
        incomePeriodValue.value = periodSelect.value * _this.budgetMonth;
    };
    periodSelect.addEventListener('input', calcPeriod);

    calcPeriod();

    //console.log(this);
};

AppData.prototype.addExpensesBlock = function() {
    //обязательные расходы
    let cloneExpensesItems = expensesItems[0].cloneNode('true');
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);

    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    };

};

AppData.prototype.addIncomeBlock = function() {
    //дополнительные доходы
    let cloneIncomeItems = incomeItem[0].cloneNode('true');
    incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3) {
        incomePlus.style.display = 'none';
    };

};

AppData.prototype.getExpenses = function() {
    const _this = this;
    //получение всех расходов и запись их в объект
    expensesItems.forEach(function(item) {
        // console.log(item);
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
        };
    });
    //console.log(this);
};
//дополнительные доходы
AppData.prototype.getIncome = function() {
    const _this = this;
    incomeItem.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = +cashIncome;
        };
    });

    for (let key in appData.income) {
        this.incomeMonth += +this.income[key];
    };
    //console.log(this);
};

AppData.prototype.getAddExpenses = function() {
    const _this = this;
    //вывод возможных расходов
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
        item = item.trim();
        if (item !== '') {
            _this.addExpenses.push(item);
        };
    });
};

AppData.prototype.getAddIncome = function() {
    const _this = this;
    //вывод возможных доходов
    additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();

        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        };
    });
};

AppData.prototype.getExpensesMonth = function() {

    for (let key in appData.expenses) {
        this.expensesMonth += +this.expenses[key];
    };
    // console.log(this);
};

AppData.prototype.getBudget = function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.ceil(this.budgetMonth / 30);
    return this.budgetMonth, this.budgetDay;
    // console.log(this); undefind?
};

AppData.prototype.getTargetMonth = function() {

    return Math.ceil(targetAmount.value / this.budgetMonth);
    // console.log(this);
};

AppData.prototype.getStatusIncome = function() {
    //метод не нужен
    if (this.budgetDay >= 1200) {
        return ('У Вас высокий уровень дохода');
    } else
    if (this.budgetDay >= 600) {
        return ('У Вас средний уровень дохода');
    } else if (this.budgetDay >= 0) {
        return ('К сожалению у Вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    };

};

AppData.prototype.getInfoDeposit = function() {
    const _this = this;
    // метод не нужен
    if (_this.deposit) {
        _this.persentDeposit = +prompt('Какой годовой процент?', '10');
        while (!isNumber(_this.persentDeposit)) {
            _this.persentDeposit = +prompt('Какой годовой процент?', '10');
        };
        _this.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
        while (!isNumber(_this.moneyDeposit)) {
            _this.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
        };
    };

};

AppData.prototype.inputBlock = function() {
    //все input с type=text
    let inputData = document.querySelectorAll('.data input[type="text"]');
    //console.log(inputData);
    inputData.forEach(function(e) {
        e.setAttribute('disabled', '');
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
};

AppData.prototype.reset = function() {
    start.style.display = 'block';
    cancel.style.display = 'none';
    let inputData = document.querySelectorAll('.data input[type="text"]');
    inputData.forEach(function(e) {
        e.removeAttribute('disabled', '');
        e.value = '';
    });

    //удаление клонов
    for (let i = 1; i < 3; i++) {
        if (incomeItem[i]) {
            incomeItem[i].style.display = 'none';
        };

        if (expensesItems[i]) {
            expensesItems[i].style.display = 'none';
        };

    };

    if (incomePlus.style.display === 'none') {
        incomePlus.style.display = 'block';
    };

    if (expensesPlus.style.display === 'none') {
        expensesPlus.style.display = 'block';
    };

    if (depositChek) {
        depositChek.checked = false;
    };

    let resultData = document.querySelectorAll('.result input[type="text"]');
    resultData.forEach(function(e) {
        e.value = '';
    });

    this.budget = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.persentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

    // console.log(this);

};

AppData.prototype.eventsListeners = function() {
    //откл кнопки
    document.querySelector('#start').disabled = true;

    this.ButtonStart(); //включение кнопки Рассчитать

    this.rangePeriod();

    //привязка контента метода start

    let startBind = this.start.bind(this);
    //console.log(startBind);
    start.addEventListener('click', startBind);
    //start.addEventListener('click', appData.start);

    //отключение input
    start.addEventListener('click', this.inputBlock);

    incomePlus.addEventListener('click', this.addIncomeBlock);

    expensesPlus.addEventListener('click', this.addExpensesBlock);

    //сброс
    let resetBind = this.reset.bind(this);

    cancel.addEventListener('click', resetBind);

    console.log(this);


};


//AppData.eventsListeners;

const appData = new AppData();
//console.log(appData);

appData.eventsListeners();


/*
//перенос в метод eventsListeners
//откл кнопки
document.querySelector('#start').disabled = true;

appData.ButtonStart(); //включение кнопки Рассчитать

appData.rangePeriod();

//привязка контента метода start

let startBind = appData.start.bind(appData);
//console.log(startBind);
start.addEventListener('click', startBind);
//start.addEventListener('click', appData.start);

//отключение input
start.addEventListener('click', appData.inputBlock);

incomePlus.addEventListener('click', appData.addIncomeBlock);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

//сброс
let resetBind = appData.reset.bind(appData);

cancel.addEventListener('click', resetBind);

*/


/*
// // console.log('Наша программа включает в себя данные: ');
// // for (let key in appData) {
// //     console.log(`${key}: ${appData[key]}`);
// // };

// appData.getInfoDeposit();


// appData.addExpenses = appData.addExpenses.map(function(elem) {
//     return elem.trim();
// });

// for (let key in appData.addExpenses) {

//     appData.addExpenses[key] = appData.addExpenses[key].charAt(0).toUpperCase() + appData.addExpenses[key].slice(1);
// // console.log(appData.addExpenses[key]);
// };*/
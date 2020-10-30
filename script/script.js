'use strict';
const start = document.getElementById('start');
//console.log(start); <Рассчитать>
const btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1];
//console.log(incomePlus); //<+ дополнительные доходы>
//console.log(expensesPlus); //<+ обязательные расходы>
const depositChek = document.querySelector('#deposit-check');
//console.log(depositChek);
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
//console.log(additionalIncomeItem); //возможные доходы
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
//console.log(budgetMonthValue); //вывод доход за месяц
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
//console.log(budgetDayValue); //вывод дневной бюджет
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
//console.log(expensesMonthValue); //вывод расход за месяц
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
//console.log(additionalIncomeValue); //вывод возможные доходы
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
//console.log(additionalExpensesValue); //вывод возможные расходы
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
//console.log(incomePeriodValue); //вывод накопления за период
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
//console.log(targetMonthValue); //вывод срок достижения цели в месяцах
const salaryAmount = document.querySelector('.salary-amount');
//console.log(salaryAmount); //месячный доход
const incomeTitle = document.querySelectorAll('div>.income-title')[1];
//console.log(incomeTitle); //наименование дополнительного дохода
//let incomeAmout = document.querySelector('.income-amount');
//console.log(incomeAmout); //сумма дополнительного дохода
const espensesItem = document.querySelectorAll('div>.expenses-title')[1];
//console.log(espensesItem); //наименование обязательные расходы
let expensesItems = document.querySelectorAll('.expenses-items');
//let expensesAmout = document.querySelector('.expenses-amount');
//console.log(expensesAmout); //сумма обязательных расходов
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
//console.log(additionalExpensesItem); //возможные расходы (перечисление)
const targetAmount = document.querySelector('.target-amount');
//console.log(targetAmout); //цель накопить сумму
const periodSelect = document.querySelector('.period-select');
//console.log(periodSelect); //выбор периода
let incomeItem = document.querySelectorAll('.income-items');
//console.log(incomeItem); //дополнительные доходы
//let buttonStart = document.querySelector('#start');
//console.log(buttonStart); //кнопка Рассчитать


const divAll = document.querySelectorAll('div');
let titlePeriodAmount = divAll[19];
//console.log(titlePeriodAmount); //для вывода значения периода

const cancel = document.getElementById('cancel');
//console.log(cancel);

//не используется
const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

class AppData {

    constructor(budget = 0, income = {}, incomeMonth = 0, addIncome = [], expenses = {}, addExpenses = [], deposit = false, persentDeposit = 0, moneyDeposit = 0, budgetDay = 0, budgetMonth = 0, expensesMonth = 0) {

        this.budget = budget;
        this.income = income;
        this.incomeMonth = incomeMonth;
        this.addIncome = addIncome;
        this.expenses = expenses;
        this.addExpenses = addExpenses;
        this.deposit = deposit;
        this.persentDeposit = persentDeposit;
        this.moneyDeposit = moneyDeposit;
        this.budgetDay = budgetDay;
        this.budgetMonth = budgetMonth;
        this.expensesMonth = expensesMonth;

    }
    start() {

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

    rangePeriod() {
        //отображение периода
        const eventRange = () => {
            titlePeriodAmount.textContent = periodSelect.value;
        };
        periodSelect.addEventListener('input', eventRange);
        return;
    };

    ButtonStart() {

        const clickBtn = () => {
            document.getElementById('start').disabled = false;
        };

        salaryAmount.addEventListener('input', clickBtn);
    };

    showResult() {

        const _this = this;
        //вывод результатов
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();

        //вывод накоплений за период согласно range
        const calcPeriod = () => {
            incomePeriodValue.value = periodSelect.value * _this.budgetMonth;
        };
        periodSelect.addEventListener('input', calcPeriod);

        calcPeriod();
        //console.log(this);};
    };

    addExpensesBlock() {
        //обязательные расходы
        const cloneExpensesItems = expensesItems[0].cloneNode('true');
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        };
    };

    addIncomeBlock() {
        //дополнительные доходы
        const cloneIncomeItems = incomeItem[0].cloneNode('true');
        incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');
        if (incomeItem.length === 3) {
            incomePlus.style.display = 'none';
        };
    };

    getExpenses() {
        //const _this = this;
        //получение всех расходов и запись их в объект
        expensesItems.forEach((item) => {
            // console.log(item);
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
            };
        });
        //console.log(this);
    };
    //дополнительные доходы
    getIncome() {
        //const _this = this;
        incomeItem.forEach((item) => {
            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = +cashIncome;
            };
        });

        for (let key in appData.income) {
            this.incomeMonth += +this.income[key];
        };
        //console.log(this);
    };

    getAddExpenses() {
        //const _this = this;
        //вывод возможных расходов
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            };
        });
    };

    getAddIncome() {
        //const _this = this;
        //вывод возможных доходов
        additionalIncomeItem.forEach((item) => {
            let itemValue = item.value.trim();

            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            };
        });
    };

    getExpensesMonth() {

        for (let key in appData.expenses) {
            this.expensesMonth += +this.expenses[key];
        };
        // console.log(this);
    };

    getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
        return this.budgetMonth, this.budgetDay;
        // console.log(this); undefind?
    };

    getTargetMonth() {

        return Math.ceil(targetAmount.value / this.budgetMonth);
        // console.log(this);
    };

    inputBlock() {
        //все input с type=text
        const inputData = document.querySelectorAll('.data input[type="text"]');
        //console.log(inputData);
        inputData.forEach(function(e) {
            e.setAttribute('disabled', '');
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    };

    reset() {
        start.style.display = 'block';
        cancel.style.display = 'none';
        const inputData = document.querySelectorAll('.data input[type="text"]');
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

        const resultData = document.querySelectorAll('.result input[type="text"]');
        resultData.forEach((e) => {
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

    eventsListeners() {
        //откл кнопки
        document.querySelector('#start').disabled = true;

        this.ButtonStart(); //включение кнопки Рассчитать

        this.rangePeriod();

        //привязка контента метода start

        const startBind = this.start.bind(this);
        //console.log(startBind);
        start.addEventListener('click', startBind);
        //start.addEventListener('click', appData.start);

        //отключение input
        start.addEventListener('click', this.inputBlock);

        incomePlus.addEventListener('click', this.addIncomeBlock);

        expensesPlus.addEventListener('click', this.addExpensesBlock);

        //сброс
        const resetBind = this.reset.bind(this);

        cancel.addEventListener('click', resetBind);

        //console.log(this);
    };

};

//AppData.eventsListeners;

const appData = new AppData();
//console.log(appData);

appData.eventsListeners();





/*
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
*/

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
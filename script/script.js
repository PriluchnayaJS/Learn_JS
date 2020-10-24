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


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



let appData = {
    budget: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    //mission: 500000,
    //period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {



        // if (salaryAmount.value === '') {
        //     alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
        //     return;
        // };





        appData.budget = +salaryAmount.value;
        // console.log('salaryAmount.value: ', salaryAmount.value);

        appData.getExpenses();
        // appData.asking();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
    },

    rangePeriod: function() {
        //отображение периода
        let eventRange = function() {
            titlePeriodAmount.textContent = periodSelect.value;
        };
        periodSelect.addEventListener('input', eventRange);
        return;
    },
    ButtonStart: function() {

        // while (salaryAmount.value === '') {
        //     // buttonStart.disabled = true;
        //     document.getElementById('start').disabled = true;
        //     alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
        //     return;
        // };
        let clickBtn = function() {
            document.getElementById('start').disabled = false;
        }

        salaryAmount.addEventListener('input', clickBtn);


    },

    //вывод результатов
    showResult: function() {

        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        // incomePeriodValue.value = appData.calcPeriod();

        //вывод накоплений за период согласно range
        let calcPeriod = function() {
            incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
            //appData.calcPeriod();
        };
        periodSelect.addEventListener('input', calcPeriod);

        calcPeriod();




    },

    addExpensesBlock: function() {
        //обязательные расходы
        console.log(expensesItems.parentNode);
        let cloneExpensesItems = expensesItems[0].cloneNode('true');
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        //expensesItem.parentNode.appendChild(expensesItem);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },

    addIncomeBlock: function() {
        //дополнительные доходы
        console.log(incomeItem.parentNode);
        let cloneIncomeItems = incomeItem[0].cloneNode('true');
        incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');
        if (incomeItem.length === 3) {
            incomePlus.style.display = 'none';
        }


    },

    getExpenses: function() {
        //получение всех расходов и запись их в объект
        expensesItems.forEach(function(item) {
            // console.log(item);
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            };
        });

    },
    //дополнительные доходы
    getIncome: function() {
        incomeItem.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = +cashIncome;
            };
        });
        // if (confirm('Есть ли у Вас дополнительный источник заработка?')) {
        //     let itemIncome;
        //     do {
        //         itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
        //     } while (isNumber(itemIncome));

        //     let cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
        //     while (!isNumber(cashIncome)) {
        //         cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
        //     };

        //     appData.income[itemIncome] = +cashIncome;
        // };
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        };
    },
    //вывод возможных расходов
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            };
        });

    },
    //вывод возможных доходов
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();

            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            };
        });
    },

    getExpensesMonth: function() {

        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }

        console.log('Обязательные расходы за месяц: ', appData.expensesMonth);
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
        return appData.budgetMonth, appData.budgetDay;
    },
    getTargetMonth: function() {
        // appData.period = Math.ceil(appData.mission / appData.budgetMonth);
        return Math.ceil(targetAmount.value / appData.budgetMonth);
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У Вас высокий уровень дохода');
        } else
        if (appData.budgetDay >= 600) {
            return ('У Вас средний уровень дохода');
        } else if (appData.budgetDay >= 0) {
            return ('К сожалению у Вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            appData.persentDeposit = +prompt('Какой годовой процент?', '10');
            while (!isNumber(appData.persentDeposit)) {
                appData.persentDeposit = +prompt('Какой годовой процент?', '10');
            };
            appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            };
        }
    },
    //расчет периода накопление
    // calcPeriod: function() {
    //     return appData.budgetMonth * periodSelect.value;
    // }
};

alert('Поле "Месячный доход" должно быть заполнено!');
//откл кнопки
document.querySelector('#start').disabled = true;

appData.ButtonStart(); //включение кнопки Рассчитать

appData.rangePeriod();

start.addEventListener('click', appData.start);

incomePlus.addEventListener('click', appData.addIncomeBlock);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

// appData.asking();

// appData.getExpensesMonth();

// appData.getBudget();

// console.log('Накопления за месяц: ', appData.budgetMonth);

// console.log("Цель заработать ", appData.mission, " рублей");

// appData.period = appData.getTargetMonth();

// if (appData.period < 0) {
//     console.log('Цель не будет достигнута');
// } else {
//     console.log('Цель будет достигнута через ', appData.period, '  месяцев');

//     console.log('Дневной бюджет', Math.floor(appData.budgetDay), 'руб');

//     appData.getStatusIncome();

//     console.log(appData.getStatusIncome());
// };

// console.log('Наша программа включает в себя данные: ');
// for (let key in appData) {
//     console.log(`${key}: ${appData[key]}`);
// };

appData.getInfoDeposit();


appData.addExpenses = appData.addExpenses.map(function(elem) {
    return elem.trim();
});

for (let key in appData.addExpenses) {

    appData.addExpenses[key] = appData.addExpenses[key].charAt(0).toUpperCase() + appData.addExpenses[key].slice(1);
    // console.log(appData.addExpenses[key]);
};

// console.log('Возможные расходы: ', appData.addExpenses.join(', '));
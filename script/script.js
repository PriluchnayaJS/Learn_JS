'use strict';
let start = document.getElementById('start');
console.log(start);

let buttonPlus1 = document.getElementsByTagName('button')[0];
console.log(buttonPlus1);

let buttonPlus2 = document.getElementsByTagName('button')[1];
console.log(buttonPlus2);

let depositChek = document.querySelector('#deposit-check');
console.log(depositChek);

let addIncome = document.querySelectorAll('.additional_income-item');
console.log(addIncome);

let budgetMonth = document.getElementsByClassName('budget_month-value');
console.log(budgetMonth);

let budgetDay = document.getElementsByClassName('budget_day-value');
console.log(budgetDay);

let expensesMonth = document.getElementsByClassName('expenses_month-value');
console.log(expensesMonth);

let additIncome = document.getElementsByClassName('additional_income-value');
console.log(additIncome);

let additExpenses = document.getElementsByClassName('additional_expenses-value');
console.log(additExpenses);

let incomPeriod = document.getElementsByClassName('income_period-value');
console.log(incomPeriod);

let targetMonth = document.getElementsByClassName('target_month-value');
console.log(targetMonth);

let moneyMonth = document.querySelector('.salary-amount');
console.log(moneyMonth);

let incomeItems = document.querySelectorAll('div>.income-title')[1];
console.log(incomeItems);

let incomeAmout = document.querySelector('.income-amount');
console.log(incomeAmout);

let espensesItem = document.querySelectorAll('div>.expenses-title')[1];
console.log(espensesItem);

let expensesAmout = document.querySelector('.expenses-amount');
console.log(expensesAmout);

let addExpenses = document.querySelector('.additional_expenses-item');
console.log(addExpenses);

let targetAmout = document.querySelector('.target-amount');
console.log(targetAmout);

let periodSelect = document.querySelector('.period-select');
console.log(periodSelect);













// let money,
//     isNumber = function(n) {
//         return !isNaN(parseFloat(n)) && isFinite(n);
//     }

// let start = function() {
//     //money = prompt('Ваш месячный доход?');
//     //(isNaN(money) || money.trim() === '' || money === null) 
//     //isNaN(parseFloat(money))
//     /*while (!isNumber(money)) {
//         money = prompt('Ваш месячный доход?');
//     }*/
//     do {
//         money = +prompt('Ваш месячный доход?');
//     }
//     while (!isNumber(money));
// }
// start();

// let appData = {
//     budget: money,
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     persentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 500000,
//     period: 3,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     asking: function() {
//         if (confirm('Есть ли у Вас дополнительный источник заработка?')) {
//             let itemIncome;
//             do {
//                 itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
//             } while (isNumber(itemIncome));

//             let cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
//             while (!isNumber(cashIncome)) {
//                 cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
//             };

//             appData.income[itemIncome] = +cashIncome;
//         }
//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
//         appData.addExpenses = addExpenses.toLowerCase().split(',');
//         appData.deposit = confirm('Есть ли у Вас депозит в банке?');

//         for (let i = 0; i < 2; i++) {

//             let itemExpenses;
//             do {
//                 itemExpenses = prompt('Введите обязательную статью расходов:');
//             } while (isNumber(itemExpenses));

//             let cashExpenses = prompt('Во сколько это обойдется?');
//             //проверка на правильность ввода расходов
//             while (!isNumber(cashExpenses)) {
//                 cashExpenses = prompt('Во сколько это обойдется? ');
//             }
//             appData.expenses[itemExpenses] = +cashExpenses;
//         }

//     },
//     getExpensesMonth: function() {

//         for (let key in appData.expenses) {
//             appData.expensesMonth += appData.expenses[key];
//         }

//         console.log('Обязательные расходы за месяц: ', appData.expensesMonth);
//     },
//     getBudget: function() {
//         appData.budgetMonth = money - appData.expensesMonth;
//         appData.budgetDay = appData.budgetMonth / 30;
//         return appData.budgetMonth, appData.budgetDay;
//     },
//     getTargetMonth: function() {
//         appData.period = Math.ceil(appData.mission / appData.budgetMonth);
//         return appData.period;
//     },
//     getStatusIncome: function() {
//         if (appData.budgetDay >= 1200) {
//             return ('У Вас высокий уровень дохода');
//         } else
//         if (appData.budgetDay >= 600) {
//             return ('У Вас средний уровень дохода');
//         } else if (appData.budgetDay >= 0) {
//             return ('К сожалению у Вас уровень дохода ниже среднего');
//         } else {
//             return ('Что то пошло не так');
//         }
//     },
//     getInfoDeposit: function() {
//         if (appData.deposit) {
//             appData.persentDeposit = +prompt('Какой годовой процент?', '10');
//             while (!isNumber(appData.persentDeposit)) {
//                 appData.persentDeposit = +prompt('Какой годовой процент?', '10');
//             };
//             appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
//             while (!isNumber(appData.moneyDeposit)) {
//                 appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
//             };
//         }
//     },
//     calcSavedMoney: function() {
//         return appData.budgetMonth * appData.period;
//     }
// };


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

// appData.getInfoDeposit();


// appData.addExpenses = appData.addExpenses.map(function(elem) {
//     return elem.trim();
// });

// for (let key in appData.addExpenses) {

//     appData.addExpenses[key] = appData.addExpenses[key].charAt(0).toUpperCase() + appData.addExpenses[key].slice(1);
//     // console.log(appData.addExpenses[key]);
// };

// console.log('Возможные расходы: ', appData.addExpenses.join(', '));

// // console.log(appData.persentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
'use strict';

let money = prompt('Ваш месячный доход?');
console.log(typeof(money));
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
console.log(typeof(addExpenses));

addExpenses = addExpenses.split(',');
console.log(addExpenses);

let deposit = confirm('Есть ли у Вас депозит в банке?');
console.log(typeof(deposit));
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Во сколько это обойдется?');

const getExpensesMonth = function(a, b) {
    return a + b;
}

let exAmount = getExpensesMonth(+amount1, +amount2);
console.log('Обязательные расходы за месяц: ', exAmount);

let getAccumulatedMonth = function(a, b) {
    return a - b;
}

let accumulatedMonth = getAccumulatedMonth(money, exAmount);
console.log('Накопления за месяц: ', accumulatedMonth);

let budgetMonth = money - (parseInt(amount1) + parseInt(amount2));

//console.log('Бюджет на месяц: ', budgetMonth);

const mission = 500000;
console.log("Цель заработать ", mission, " рублей");

//let period = Math.ceil(mission / budgetMonth);

let getTargetMonth = function(a, b) {
    return Math.ceil(a / b);
}

let period = getTargetMonth(mission, accumulatedMonth);
console.log('Цель будет достигнута через ', period, '  месяцев');

//let budgetDay = accumulatedMonth / 30;
//console.log('Дневной бюджет', Math.floor(budgetDay), 'руб');

let getStatusIncome = function(a) {
    if (a >= 1200) {
        return ('У Вас высокий уровень дохода');
    } else
    if (a >= 600) {
        return ('У Вас средний уровень дохода');
    } else if (a >= 0) {
        return ('К сожалению у Вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
}

let budgetDay = accumulatedMonth / 30;
console.log('Дневной бюджет', Math.floor(budgetDay), 'руб');

getStatusIncome(budgetDay);
console.log(getStatusIncome(budgetDay));


//let income = 'Фриланс';
//console.log(typeof(income));
//console.log(addExpenses.length);
//console.log(addExpenses.toLowerCase());
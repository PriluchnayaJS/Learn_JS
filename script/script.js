'use strict';

let money = prompt('Ваш месячный доход?');
console.log(typeof(money));
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у Вас депозит в банке?');
console.log(typeof(deposit));
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = money - (parseInt(amount1) + parseInt(amount2));
console.log('Бюджет на месяц: ', budgetMonth);
const mission = 500000;
console.log("Цель заработать ", mission, " рублей");
let period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута через ', period, '  месяцев');
let budgetDay = budgetMonth / 30;
console.log('Дневной бюджет', Math.floor(budgetDay), 'руб');
if (budgetDay >= 1200) {
    console.log('У Вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У Вас средний уровень дохода');
} else if (budgetDay >= 0) {
    console.log('К сожалению у Вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}

//let income = 'Фриланс';
//console.log(typeof(income));
//console.log(addExpenses.length);
//console.log(addExpenses.toLowerCase());
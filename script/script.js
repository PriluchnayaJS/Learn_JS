'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money;
//console.log(typeof(money));

let start = function() {
    money = prompt('Ваш месячный доход?');
    //(isNaN(money) || money.trim() === '' || money === null) 
    //isNaN(parseFloat(money))
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
}
start();

let showTypeof = function(item) {
    console.log(typeof item);
}
showTypeof(money);



let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
showTypeof(addExpenses);
//console.log(typeof(addExpenses));

// вывод в нижнем регистре

addExpenses = addExpenses.toLowerCase().split(',');

console.log(addExpenses);


let deposit = confirm('Есть ли у Вас депозит в банке?');
showTypeof(deposit);
//console.log(typeof(deposit));
//let expenses1 = prompt('Введите обязательную статью расходов:');
//let amount1 = prompt('Во сколько это обойдется?');
//let expenses2 = prompt('Введите обязательную статью расходов:');
//let amount2 = prompt('Во сколько это обойдется?');

let expenses = [];

const getExpensesMonth = function() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов:');
            sum += +prompt('Во сколько это обойдется? ');
        }
        console.log(expenses);
        return sum;
    }
    /*let expenses1, expenses2;

    const getExpensesMonth = function() {
            let sum = 0;
            for (let i = 0; i < 2; i++) {
                if (i === 0) {
                    expenses1 = prompt('Введите обязательную статью расходов:');
                } else if (i === 1) {
                    expenses2 = prompt('Введите обязательную статью расходов:');
                }
                sum += +prompt('Во сколько это обойдется? ');
            }
            //    console.log(sum);
            return sum;
        }*/
    //exAmount заменили на expensesAmount расходы за меняц
    //let exAmount = getExpensesMonth(+amount1, +amount2);
let expensesAmount = getExpensesMonth();
console.log('Обязательные расходы за месяц: ', expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц: ', accumulatedMonth);

//let budgetMonth = money - (parseInt(amount1) + parseInt(amount2));

//console.log('Бюджет на месяц: ', budgetMonth);

const mission = 500000;
console.log("Цель заработать ", mission, " рублей");

//let period = Math.ceil(mission / budgetMonth);

let getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
}

let period = getTargetMonth();

console.log('Цель будет достигнута через ', period, '  месяцев');

//let budgetDay = accumulatedMonth / 30;
//console.log('Дневной бюджет', Math.floor(budgetDay), 'руб');

let budgetDay = accumulatedMonth / 30;
console.log('Дневной бюджет', Math.floor(budgetDay), 'руб');

let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У Вас высокий уровень дохода');
    } else
    if (budgetDay >= 600) {
        return ('У Вас средний уровень дохода');
    } else if (budgetDay >= 0) {
        return ('К сожалению у Вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
}

//let budgetDay = accumulatedMonth / 30;
//console.log('Дневной бюджет', Math.floor(budgetDay), 'руб');

console.log(getStatusIncome());


//let income = 'Фриланс';
//console.log(typeof(income));
//console.log(addExpenses.length);
//console.log(addExpenses.toLowerCase());
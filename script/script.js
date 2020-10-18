'use strict';

let money,
    isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

let start = function() {
    //money = prompt('Ваш месячный доход?');
    //(isNaN(money) || money.trim() === '' || money === null) 
    //isNaN(parseFloat(money))
    /*while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }*/
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
}
start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: {},
    deposit: false,
    mission: 500000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    },
    getExpensesMonth: function() {
        let expenses = [];
        let expAmount;
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов:');

            expAmount = prompt('Во сколько это обойдется? ');
            //проверка на правильность ввода расходов
            while (!isNumber(expAmount)) {
                expAmount = prompt('Во сколько это обойдется? ');
            }
            sum += +expAmount;
            // sum += +prompt('Во сколько это обойдется? ');
        }
        console.log(expenses);
        return sum;
    },
    getAccumulatedMonth: function() {
        return money - expensesMonth;
    },
    getTargetMonth: function() {
        return Math.ceil(appData.mission / accumulatedMonth);
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
    }


};

appData.asking();


/*let showTypeof = function(item) {
console.log(typeof item);
}
showTypeof(money);
showTypeof(appData.addExpenses);
console.log(appData.addExpenses);
showTypeof(appData.deposit);*/

//перенос в метод объекта
/*const getExpensesMonth = function()*/


//exAmount заменили на expensesAmount расходы за меняц
let expensesMonth = appData.getExpensesMonth();
console.log('Обязательные расходы за месяц: ', expensesMonth);

// перенос в метод объекта
/*let getAccumulatedMonth = function() {
    return money - expensesMonth;
}*/

let accumulatedMonth = appData.getAccumulatedMonth();

console.log('Накопления за месяц: ', accumulatedMonth);

console.log("Цель заработать ", appData.mission, " рублей");

//перенос в метод объекта

/*let getTargetMonth = function() {
return Math.ceil(appData.mission / accumulatedMonth);
}*/

appData.period = appData.getTargetMonth();

if (appData.period < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута через ', appData.period, '  месяцев');


    appData.budgetDay = accumulatedMonth / 30;
    console.log('Дневной бюджет', Math.floor(appData.budgetDay), 'руб');

    appData.getStatusIncome();

    //метод объекта
    /* let getStatusIncome = function()*/

    console.log(appData.getStatusIncome());
}
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
        money = +prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
}
start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
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

        let costsData = new Object();

        for (let i = 0; i < 2; i++) {

            let name = prompt('Введите обязательную статью расходов:');
            let costs = prompt('Во сколько это обойдется?');
            //проверка на правильность ввода расходов
            while (!isNumber(costs)) {
                costs = prompt('Во сколько это обойдется? ');
            }
            appData.expenses[name] = +costs;
        }

    },
    getExpensesMonth: function() {

        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }

        console.log('Обязательные расходы за месяц: ', appData.expensesMonth);
    },
    getBudget: function() {
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetMonth, appData.budgetDay;
    },
    getTargetMonth: function() {
        appData.period = Math.ceil(appData.mission / appData.budgetMonth);
        return appData.period;
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

appData.getExpensesMonth();


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
//let expensesMonth = appData.getExpensesMonth();
//console.log('Обязательные расходы за месяц: ', expensesMonth);

// перенос в метод объекта
/*let getAccumulatedMonth = function() {
    return money - expensesMonth;
}*/

//let accumulatedMonth = appData.getAccumulatedMonth();
appData.getBudget();

console.log('Накопления за месяц: ', appData.budgetMonth);

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


    //  appData.budgetDay = accumulatedMonth / 30;
    console.log('Дневной бюджет', Math.floor(appData.budgetDay), 'руб');

    appData.getStatusIncome();

    //метод объекта
    /* let getStatusIncome = function()*/

    console.log(appData.getStatusIncome());
}
console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(`${key}: ${appData[key]}`);
};
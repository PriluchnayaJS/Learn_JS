let money = 90000;
let income = 'Фриланс';
let addExpenses = 'ПРОДУКТЫ, КОММУНАЛКА, СПОРТ, ИНТЕРНЕТ,  БЕНЗИН';
let deposit = true;
const mission = 500000;
let period = 8;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log("Цель заработать ", mission, " рублей");
console.log(addExpenses.toLowerCase());

let budgetDay = money / 30;
console.log('Дневной бюджет ', budgetDay, ' руб');
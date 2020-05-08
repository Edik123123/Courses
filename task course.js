let money = prompt('Каков твой бюджет на месяц?');
let time = prompt('Введите дату YYYY-MM-DD');

console.log(money);
console.log(time);

let appData = {
   budget: money,
   timeData: time 
};

let haveTo = prompt('Введите обязательную статью расходов');
let howMuch = prompt('Во сколько обойдется?');

expenses = {
   haveTo : howMuch
};
console.log(expenses);
optionalExpenses = {

};

let income = [];

let savings = false;

let dayMoney = alert('Бюджет на один день составляет ' + Math.round((money - howMuch) / 30)+ ' грн');


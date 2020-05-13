let money, time;
function start () {
    money = +prompt("Каков твой бюджет на месяц?", '');
    time = prompt('Введите дату YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Каков твой бюджет на месяц?", '');
    }
}

let appData = {
    budget: money, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let  a = prompt('Введите обязательную статью расходов'),
        b = prompt('Во сколько обойдется?', '');
        
        if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        }else {
            i = i - 1;
        }           
    }
}

function detectDayBudget () {
    appData.moneyPerDay = Math.round(appData.budget / 30);
    alert(`Бюджет на один день составляет ${appData.moneyPerDay} грн`);
}

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');   
    }else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Error');
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');
        
        appData.monthIncome = Math.round(save/100/12*percent);
        alert(`Доход в месяц с вашего дипозита : ${appData.monthIncome} грн`);
    }
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
    }
}

start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();
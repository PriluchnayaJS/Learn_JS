'use strict';

function gameNumber() {

    alert('ИГРА "Угадай число"');

    // генерирование числа от 1 до 100
    function getRandomInt(num) {
        return Math.floor(Math.random() * num + 1);
    }

    let numberComp = +getRandomInt(100);

    //проверка на ввод числа

    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    let numberUser;

    function getNumber() {
        numberUser = +prompt('Введите число от 1 до 100');
    }

    let start = function() {
        do {
            getNumber();
            // numberUser = +prompt('Введите число от 1 до 100');
            if (numberUser <= 0 || numberUser >= 100) {
                start();
            }
        }
        while (!isNumber(numberUser));
    }

    start();

    console.log(numberUser);
    console.log(numberComp);




    //console.log(typeof numberComp);
    //console.log(Math.floor(Math.random() * 100 + 1));
    let endGame;

    numberUserComp();

    function numberUserComp() {

        if (numberUser > numberComp) {
            alert('Загаданное число меньше. Введите новое число');
            start();
            numberUserComp();
        } else if (numberUser < numberComp) {
            alert('Загаданное число больше. Введите новое число');
            start();
            numberUserComp();
        } else {
            alert('Поздравляю! Вы угадали!');
            endGame = confirm('Повторим?');
            if (endGame === false) {
                alert('До новых встреч!');
            } else {
                numberComp = +getRandomInt(100);
                start();
                numberUserComp();
            }
        }

    }

}
gameNumber();
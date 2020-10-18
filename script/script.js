'use strict';

const game = function() {

    alert('ИГРА "Угадай число"');

    const randomNum = function(num) {
        return Math.floor(Math.random() * num + 1);
    }

    let numberComp = randomNum(100);
    console.log(numberComp);

    return function start() {

        let numberUser = prompt('Введите число от 1 до 100');
        if (numberUser === null) {
            alert('Игра окончена!');
            return;
        }
        if (+numberUser > numberComp) {
            alert('Загаданное число меньше. Введите новое число');
            start();
        } else if (+numberUser < numberComp) {
            alert('Загаданное число больше. Введите новое число');
            start();
        } else if (numberUser === '' || isNaN(numberUser)) {
            alert('Вы ввели не число!');
            start();
        } else if (+numberUser === numberComp) {
            alert('Поздравляю! Вы угадали!');
            let endGame = confirm('Повторим?');
            if (endGame === false) {
                alert('До новых встреч!');
                return;
            } else {
                const start = game();
                start();
            }
        }
    }

}
const start = game();
start();
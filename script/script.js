'use strict';

class First {
    constructor() {

    }
    hello() {
        console.log('Привет, я метод родителя!');
    }

}

class Second extends First {

    hello() {
        super.hello();
        return console.log('А я наследуемый метод!');

    }

}

const Three = new Second();
Three.hello();
'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.selectorText = function() {
    // const bodyText = document.getElementsByTagName('body');
    // console.log(bodyText);
    const selText = 'Что такое язык JavaScript? Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми». Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы. Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.';

    if (this.selector.slice(0, 1) === '.') {
        //div.classList.add('this.selector');
        let div = document.createElement('div');
        div.innerHTML = selText;
        div.className = this.selector;
        div.style.cssText = `height: ${this.height};
                            background-color: ${this.bg};
                            width: ${this.width};
                            font-size: ${this.fontSize};`;
        document.body.append(div);

    } else if (this.selector.slice(0, 1) === '#') {
        let p = document.createElement('p');
        p.id = this.selector;
        p.innerHTML = selText;
        p.style.cssText = `height: ${this.height};
                            background-color: ${this.bg};
                            width: ${this.width};
                            font-size: ${this.fontSize};`;
        document.body.append(p);
    };
};
const domBody1 = new DomElement('.new ', '400px', '50%', '#ffccdd', '200%');
domBody1.selectorText();

const domBody2 = new DomElement('#new ', '200px', '800px', '#ccddff', '20pt');
domBody2.selectorText();
'use strict';

//изменение порядка книг
const books = document.querySelectorAll('.book');
console.log(books);

books[0].before(books[1]);
books[3].before(books[4]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);


//удаление рекламы со страницы
const googleAdv = document.querySelector('.adv');
googleAdv.remove();

//изменение фона страницы
document.body.style.background = 'url(./image/adv.jpg)';

//изменение заголовка Книги3
const aBook_4 = document.getElementsByTagName('a')[2];
//console.log(aBook_4);
aBook_4.textContent = 'Книга 3. this и Прототипы Объектов';

//изменение порядка глав в книгах 2 и 5
const liCollections = document.querySelectorAll('ul>li');
console.log(liCollections);
// const liCollection_1 = document.querySelectorAll('li')[1];
// console.log(liCollection_1);
liCollections[9].after(liCollections[12]);
liCollections[12].after(liCollections[14]);
liCollections[15].after(liCollections[8]);

liCollections[37].after(liCollections[45]);
liCollections[40].after(liCollections[38]);
liCollections[43].after(liCollections[41]);

//добавление главы
const liNew = document.createElement('li');
console.log(liNew);
liNew.textContent = 'Глава 8: За пределами ES6';
let liBooks = document.querySelectorAll('.book>ul');
console.log(liBooks);
let liBooks6 = liBooks[5];
console.log(liBooks6);
liBooks6.append(liNew);
let liBooksli = document.querySelectorAll('li');

console.log(liBooksli);

liBooksli[57].after(liBooksli[56]);







//liCollections.incertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
//const liNew = liCollections[55].cloneNode(true);
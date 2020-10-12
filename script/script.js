let number = 266219;
let umnCount = 1;
let arrNum = [];
let i = 0;
while (number > 0) {
    count = number % 10;
    arrNum[i] = count;
    umnCount *= count;
    number = parseInt(number / 10);
    i++;
}
//console.log(arrNum);
console.log(umnCount);
umnCount **= 3;
console.log(umnCount);
console.log(arrNum[i - 1]);
console.log(arrNum[i - 2]);
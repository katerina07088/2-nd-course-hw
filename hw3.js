//task 1
let password = "lalala";
let userPassword = prompt("Введите пароль");
if (password === userPassword) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неверно");
}
//task 2
let c = Number(prompt("Ведите число"));
if (c >= 0 && c <= 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
// task 3
let d = Number(prompt("Ведите первое число"));
let e = Number(prompt("Введите второе число"));
if (d >= 100 || e >= 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
//task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//task 5
let monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима');
        break;
    default:
        console.log('Не существует');
}
//task 7 не решила
let anyNumber = Number(prompt("Пожалуйста, введите любое число"));
if  (!isNan(anyNumber)) {
    alert('Ввели не число');
}
 else if (anyNumber % 2===0) {
    alert('Четное число');
} else {
    alert('Нечетное число');  
   }

// task 8 
let clientOS = 0 || 1;
if (clientOS = 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} 
if (clientOS = 1) {
    console.log('Установите версию приложения для Android по ссылке');
}
// task 10
let userPhone = 0 || 1;
let yearRelease = 2015;
if (userPhone = 0 && yearRelease <= 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
}
else if (userPhone = 1 && yearRelease <= 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}
else if (userPhone = 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} 
else if (userPhone = 1) {
    console.log('Установите версию приложения для Android по ссылке');
}

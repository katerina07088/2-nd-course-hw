//task1
function compare(a,b) {
    if (a>b) {
        return a
    } else {
        return b
    }
}
console.log(compare(8,4));

let max = (a,b) => {return a>b ? a : b; };
console.log(max (9,4));


//task2
function check(a) {
    if (a%2==0) {
        return `Число чётное `
    } else {
        return `Число нечётное `
    }
}
console.log(check(9));

//task 3 (1) var 1
function numQuater(a) {
    let numb =  a**2;
    console.log(numb);
}
numQuater(9);

//or var 2
let num = (a) => a**2;
console.log(num(8));

//task 3 (2)
function numbQuater(a) {
    let numbe =  a**2;
    return  numbe;
}
console.log(numbQuater(10));

 //task 4
function howOld() {
let userAnswer = prompt('Сколько вам лет?');
if (userAnswer < 1) {
    alert ('Вы ввели неправильное значение ');
} else if (userAnswer <= 12) {
    alert ('Привет, друг!');
} else{
    alert ('Добро пожаловать!');
}
}
howOld()

//task 5 ??? не работает, выдает всегда первый return
function getNumber(e,d) {
    let eNum = Number(e);
    let dNum = Number(d);
    if (isNaN(eNum) || (dNum)) {
        return 'Одно или оба значения не являются числом';
    } else {
       return e*d; 
    }
}
console.log(getNumber(7,9))

//task 6
function callNumber() {
    let userNumber = prompt('Назовите число');
    userNumber = Number(userNumber);
    if (isNaN (userNumber)) {
        return 'Переданный параметр не является числом';
    } else { 
        return `${userNumber} в кубе равно ${userNumber**3}`;
    }
}
console.log(callNumber());

//task 7
function getArea() {
    return this.radius**2*3.14; 
};
function getPerimeter() {
   return this.radius*2*3.14;
};

const circle1 = {
    radius: 56,
    getArea: getArea,
    getPerimeter: getPerimeter,
    }
const circle2 = {
    radius: 36,
    getArea: getArea,
    getPerimeter: getPerimeter,
    }
console.log(`Площадь окружности1: ${circle1.getArea()}`);
console.log(`Площадь окружности2: ${circle2.getArea()}`);
console.log(`Периметр окружности1: ${circle1.getPerimeter()}`);
console.log(`Периметр окружности2: ${circle2.getPerimeter()}`);


//task 8 повторяется 2 раза, при загрузке страницы и нажатии на кнопку "играть"
function whatSeason() {
    let monthNumber=prompt('Введите номер месяца');
    if (monthNumber==12 && monthNumber<=2) {
        return `Зима`
    } else if (monthNumber>=3 && monthNumber<=5) {
        return `Весна`  
    } else if (monthNumber>=6 && monthNumber<=8) {
        return `Лето`  
    } else if (monthNumber>=9 && monthNumber<=11) {
        return `Осень`  
    } else {
        return `Введите номер месяца еще раз`
    }
}
console.log(whatSeason())

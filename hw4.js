//task1
let i = 1;
while (i <=2) {
    console.log('Привет!');
    i++
}
//task2
let a = 1;
while (a <= 5) {
    console.log(a);
    a++
}
//task3
let b = 7;
while (b <= 22) {
    if( b===23) {
        break;
    }
    console.log(b);
    b++
}
// task4
let obj = {
"Коля" : 200,
"Вася" : 300,
"Петя" : 400
}
for (let key in obj) {
    console.log(`${key}: - зарплата ${obj[key]} долларов`);
}
//task5
for (let c = 1000; c > 50; c /= 2){
    console.log (c)
}
let num = 5;
//task6
let d = 7;
for (let dayNumber = 5; dayNumber < 31; dayNumber+=7){
    console.log (`Сегодня пятница, ${dayNumber} число. Необходимо сделать отчет.`)
}


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
let num = 0
for (let c = 1000; c > 50; c /= 2) {
 num = num ++;   
 console.log(c);
}
console.log(num); 

// task5
let c = 1000
let numb = 0
while (c >=50){
    c/=2
    numb++
}
console.log('Число:',c);
console.log('Количество итераций:',numb); 

//task6
let d = 7;
for (let dayNumber = 5; dayNumber <= 31; dayNumber+=7){
    console.log (`Сегодня пятница, ${dayNumber} число. Необходимо сделать отчет.`)
}


//task 1
const numbers =[1, 5, 4, 10, 0, 3];
for ( let i=0; i< numbers.length; i++){
    console.log(numbers[i]);  //!!! почему смена их порядка дает разный результат
    if (numbers[i]===10)break; ////!!!
}
//task2 
const num = [1, 5, 4, 10, 0, 3];
num.forEach((el, index) => {
if (el==4)
console.log(index);
});
// or
const nums = [1, 5, 4, 10, 0, 3];
let position = nums.indexOf(4)
console.log(position);
// or
const numss = [1, 5, 4, 10, 0, 3]; 
console.log(numss.indexOf(4));

//task 3
const numbe = [1, 3, 5, 10, 20];
let numb = numbe.join(" ");
console.log(numb);

//task 4  ???
const k = [];
// Заводим основной цикл, через который будет происходить добавление пустых массивов
for (let i = 0; i < 3; i++) {
// Пушим пустые массивы в изначальный, чтобы создать вложенность
k.push([]);
// Создаем дополнительный цикл, чтобы добавить единички
for (let j = 1; j <= 3; j++) {
// Пушим единички в подмассив
k[i].push("1");
  }
}
console.log(k);


//task5
const arr = [1, 1, 1];
arr.push (2,2,2);
console.log(arr);

//task 6 
const arra = [9, 8, 7, 'a', 6, 5];
arra.sort();
const filterArra = arra.filter((el) => typeof el === "number");  ///!!!!! почему number в кавычках
console.log (filterArra);

 //task7
const a = [9, 8, 7, 6, 5]
let b = Number(prompt("Введите любое число"));
    if (a.includes(b)) {
   alert ('Угадал');
    } else {
   alert('Не угадал');
    }
  
//task 8
let str = 'abcdef';
let arrStr = str.split('');
let n = arrStr.reverse();
let joinArrStr = n.join('');
console.log (joinArrStr);

//task 9 
const w = [1, 2, 3];
const v = [4, 5, 6];
let result = [...w, ...v];
console.log(result)
// or 
const u = [
    [1, 2, 3],
    [4, 5, 6]
]
let l = u.flat();
console.log(l);

//task 10
const g = [3, 5, 7, 9, 8, 2, 1];
for (let i = 0; i < g.length - 1; i++) {
    console.log(g[i]+g[i+1]);
}
///or
const p = [3, 5, 7, 9, 8, 2, 1];
for (let i = 1; i < g.length; i++) {  //!!!! почему надо изменить i на 1 в этом решении
    console.log(p[i]+p[i-1]);
}

//task 11
const x = [9, 6, 89, 7, 5];
let xNew = x.map(el => el**2);
console.log(xNew);

//task 12
const d = ["Егор", "Елена", "Надежда"]
let dLength = d.map(el => el.length);
console.log(dLength); 

//task 13
const myArr = [8, 9, -4, 1, -9, -6, 45, -80 ];
function negativeNumbers (arr) {
    return arr.filter(i => i < 0);
}
console.log (negativeNumbers (myArr));

//task 14

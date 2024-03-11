//task1
let str = 'js';
console.log(str.toUpperCase());

//task2 
function getElOfStr (array,str) {
   return array.filter(el => el.toLowerCase(str).startsWith(str));
}
console.log(getElOfStr(['весна', 'осень', 'Лето', 'лето', 'Зима', 'Весна' ], 'лето'));

//task3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//task4
const aArray = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...aArray)); //// что дал метод spread здесь
console.log(Math.min(...aArray));

//task 5
function getRandomNum(max,min) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    console.log(getRandomNum(0,10))

//task6
//function createArray(num) {
    //return Math.floor(Math.random() * (max - min) + min)
//}
//or
const randomArr = (num) => {
    let arr = [];
    for (let i = 0; i < num/2; i++) {
      arr.push(Math.floor(Math.random() * num));
    }
    console.log(arr);
  };
  randomArr(8)

  //task7
  function createRandomNumber (max,min){
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log( randomNumber = createRandomNumber(2,10));
  //task8
  let currentDate = new Date();
  console.log(currentDate);

  //task9
  let myDate = new Date();
  let someDaysLater = 73  * 24 * 60 * 60 * 1000;
  let searchDate = +myDate + someDaysLater;
  let daysLater = new Date(searchDate);
  console.log(daysLater);

  //task 10
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
  'Пятница', 'Суббота'];
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  let myCurrentDate = new Date();
  let fullDate = "Дата:"+myCurrentDate.getDate()
  +myCurrentDate.getMonth()
  +myCurrentDate.getFullYear() + " - это день недели"+ myCurrentDate.getDay();
  let time = "Время:"+myCurrentDate.getHours()+":" +myCurrentDate.getMinutes()+":"+myCurrentDate.getSeconds();
  console.log(fullDate);
  console.log(time);
  //task 11


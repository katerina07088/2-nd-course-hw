//task1
let str = 'js';
console.log(str.toUpperCase());
//task2 !!!



//task3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//task4
const aArray = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...aArray)); //// что дал метод spread здесь
console.log(Math.min(...aArray));

//task 5 !!!

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
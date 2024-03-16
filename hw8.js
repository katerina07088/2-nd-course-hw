// task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort (function (a, b) {
    if (a.age > b.age) {    // что значит точка в  b.age, откуда она появилась? 
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  console.log (people);

  //or
  people.sort(function(a, b) { return a - b; });
  console.log (people);
  //or
  people.sort( (a, b) => a - b );
  console.log (people);
 //or
  console.log (people.sort( (a, b) => a - b ));
  //console.log(people.sort(...));
  

  // task 2
  function isPositive (num) {
    return num > 0;
  }
    function isMale(item) {
    return item.gender === 'male';
  }
    function filter(arr, instruction) {
        const newPeople = [];
        for (let el of arr) {
          if (instruction(el)) {
            newPeople.push(el)
          }
        }
        return newPeople
    }
    console.log(filter([3, -4, 1, 9], isPositive));

    const peoplePeople = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter(peoplePeople, isMale));

    //task 3
    function repeatDate (){
      const timerId = setInterval(() => {
          console.log(new Date)}, 300);
      setTimeout(() => { 
          clearInterval(timerId); 
      console.log ('«30 секунд прошло»');}, 3000);
     }
    repeatDate (new Date());

    //task4
    function delayForSecond(callback) {
        setTimeout(() => callback(),1000);
    }
    delayForSecond(function () {
       console.log('Привет, Глеб!');
    })

    //task 5
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if(cb) {  cb(); }
        }, 1000)
    }
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }
    delayForSecond(() => sayHi('Глеб'))

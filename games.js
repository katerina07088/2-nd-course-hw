function whatSeason() {
    let monthNumber=prompt('Введите номер месяца');
    if (monthNumber==12 || monthNumber==1 || monthNumber==2) {
        return `Зима`
    } else if (monthNumber>=3 && monthNumber<=5) {
        return `Весна`  
    } else if (monthNumber>=6 && monthNumber<=8) {
        return `Лето`  
    } else if (monthNumber>=9 && monthNumber<=11) {
        return `Осень`  
    } else {
        return `Неизвестное значение`
    }
}
function playGuessWords() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let firstWordUser = prompt('Введите первое слово.');
    let thirdWordUser = prompt('Введите третье слово.');
    if (firstWordUser === fruit[0] && thirdWordUser === fruit[2]) {
      alert("Верно");
    } else if (firstWordUser === fruit[0] || thirdWordUser === fruit[2]) {
      alert("Вы были близки к победе.");
    } else {
      alert("Неверно");
    }
  }
    
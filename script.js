// ПОКАЗЫВАЕМ ВРЕМЯ
function showTime() {
    const time = document.querySelector('.time'); // находим элемент по классу
    const date = new Date(); // получаем текущую дату
    const currentTime = date.toLocaleTimeString(); // получаем только время
    //создаем фукцию для отображения времени
    time.textContent = currentTime; // отображаем внутри элемента время
    showGreeting();
    setTimeout(showTime, 1000); // вызов функции внутри неё самой с интервалом в 1 секунду или 1000 миллисекунд
  }
showTime();

//ПОКАЗЫВАЕМ ДАТУ
function showDate(){
    const dateMomentum = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('ru-RU', options);
    dateMomentum.textContent = currentDate;
}
showDate();

//ПОКАЗЫВАЕМ ПРИВЕТСТВИЕ
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours <= 11) {
   return 'morning,';
  } else if (hours >= 12 && hours <= 17) {
    return 'afternoon,';
  } else if (hours >= 18 && hours <= 23) {
    return 'evening,';
  } else {
    return 'night,';
  };
}

function showGreeting() {
const greeting = document.querySelector('.greeting');
const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
greeting.textContent = greetingText;
setTimeout(showGreeting, 1000);
}

//СОХРАНЯЕМ ИМЯ
const name = document.querySelector('.name');
function setLocalStorage() {
  localStorage.setItem('name', name.value); //метод сохраняющий данные в localStorage
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name'); //метод получающий данные из localStorage
  }
}
window.addEventListener('load', getLocalStorage);
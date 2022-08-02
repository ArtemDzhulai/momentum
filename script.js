function showTime() {
    const time = document.querySelector('.time'); // находим элемент по классу
    const date = new Date(); // получаем текущую дату
    const currentTime = date.toLocaleTimeString(); // получаем только время
    //создаем фукцию для отображения времени
    time.textContent = currentTime; // отображаем внутри элемента время
    setTimeout(showTime, 1000); // вызов функции внутри неё самой с интервалом в 1 секунду или 1000 миллисекунд
  }
showTime();

function showDate(){
    const dateMomentum = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('ru-RU', options);
    dateMomentum.textContent = currentDate;
}
showDate();
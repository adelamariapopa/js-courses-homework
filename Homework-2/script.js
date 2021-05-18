  //Exercitiul 2
const stopWatch = document.querySelector('#stopwatch');
const startButton = document.querySelector('#start-stopwatch');
const resetButton = document.querySelector('#reset-stopwatch');
let timer;
let millisecond = 0;
function startWatch() {
  // if(timer !== '59 : 59 : 59'){
  //   console.log('diferit');
  // }
  clearInterval(timer);
  timer = setInterval( ()=> {
    millisecond +=10;
    let date;
    let milliseconds = String(date.setMilliseconds('59')).split(0,1);
    let seconds = String(date.setSeconds('59')).padStart(2, "0");
    let minutes = String(date.setMinutes('59')).padStart(2, "0");
    // let milliseconds = String(date.getMilliseconds()).split(0,1);
    // let seconds = String(date.getSeconds()).padStart(2, "0");
    // let minutes = String(date.getMinutes()).padStart(2, "0");
    stopWatch.innerHTML = `${minutes} : ${seconds} : ${milliseconds}`;
  },10);
  startButton.classList.toggle('pause-btn');
  if(startButton.classList.contains('pause-btn')){
    startButton.textContent = 'stop';
  }else{
    startButton.textContent = 'play';
    clearInterval(timer);
  }
}
function resetWatch() {
  clearInterval(timer);
  millisecond = 0;
  startButton.textContent = 'play';
  stopWatch.innerHTML = '00 : 00 : 00';
}
startButton.addEventListener('click', startWatch);
resetButton.addEventListener('click', resetWatch);

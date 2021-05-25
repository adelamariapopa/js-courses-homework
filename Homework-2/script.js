  //Exercitiul 2
const stopWatch = document.querySelector('#stopwatch');
const startButton = document.querySelector('#start-stopwatch');
const resetButton = document.querySelector('#reset-stopwatch');
let timer;
let minutes = 0, seconds = 0, miliseconds = 0;
function startWatch() {
  clearInterval(timer);
  timer = setInterval(()=> {
    stopWatch.innerHTML = `${minutes < 10 ? '0' + minutes : minutes} : ${ seconds < 10 ? '0' + seconds : seconds} : ${ miliseconds < 10 ? '0' + miliseconds : miliseconds}`;
    miliseconds++;
    if(miliseconds === 100) {
      miliseconds = 0;
      seconds++;
    }
    if(seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }, 10);
  startButton.classList.toggle('pause-btn');
  if (startButton.classList.contains('pause-btn')) {
    startButton.textContent = 'stop';
  } else {
    clearInterval(timer);
    startButton.textContent = 'play';
  }
}
function resetWatch() {
  clearInterval(timer);
  miliseconds = 0;
  startButton.classList.remove('pause-btn');
  startButton.textContent = 'play';
  minutes = seconds = miliseconds = 0;
  stopWatch.innerHTML = '00 : 00 : 00';
}
startButton.addEventListener('click', startWatch);
resetButton.addEventListener('click', resetWatch);

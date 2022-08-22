// elems
const secondsELem = document.querySelector('.time');

// buttons
const startBtn = document.querySelector('.start_btn');
const pauseBtn = document.querySelector('.pause_btn');
const stopBtn = document.querySelector('.stop_btn');
const resetBtn = document.querySelector('.reset_btn');

// events

startBtn.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(startTimer, 1000);
});

pauseBtn.addEventListener('click', () => {
   clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
   clearInterval(interval);
   second = 00;
   secondsELem.innerHTML = '00';
});

resetBtn.addEventListener('click', () => {
   second = 00;
   secondsELem.innerText = '00';
   clearInterval(interval);
   interval = setInterval(startTimer, 1000);
});

//variables

let second = 00;
let interval;

function startTimer() {
   second++;
   secondsELem.innerText = '0' + second;

   if (second >= 10) {
      secondsELem.innerText = second;
   }
}

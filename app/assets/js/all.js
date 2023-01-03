const time = {
  hour: 0,
  min: 0,
  sec: 0
}

let pause = false;
let timerID = 0;

let curTime = document.querySelector('#time');
function renderTime() {
  let hour = time.hour < 10 ? '0' + time.hour: time.hour;
  let min = time.min < 10 ? '0' + time.min : time.min;
  let sec = time.sec < 10 ? '0' + time.sec : time.sec;
  let context = `${hour} : ${min}: ${sec}`;
  curTime.innerHTML = context;
}

let startBtn = document.querySelector('#startBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let restartBtn = document.querySelector('#restartBtn');

startBtn.addEventListener('click', () => {
  
  if(!pause) {
    timerID = setInterval(updateTime, 1000);
  }
  
  startBtn.setAttribute(disabled);
})

pauseBtn.addEventListener('click', () => {
  pause = true;
  clearInterval(timerID);
})

restartBtn.addEventListener('click', () => {
  pause = false;
  time.hour = 0;
  time.min = 0;
  time.sec = 0;
  renderTime();
})

function updateTime() {
  //update second
  if(time.sec === 59) {

    //update minute
    time.sec = 0;
    if (time.min === 59) {
      time.min = 0;

      //update hour
      time.hour++;
    }
    else {
      time.min++;
    }

  }
  else {
    time.sec++;
  }

  renderTime();
}

//init
renderTime();
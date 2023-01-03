"use strict";

var time = {
  hour: 0,
  min: 0,
  sec: 0
};
var pause = false;
var timerID = 0;
var curTime = document.querySelector('#time');

function renderTime() {
  var hour = time.hour < 10 ? '0' + time.hour : time.hour;
  var min = time.min < 10 ? '0' + time.min : time.min;
  var sec = time.sec < 10 ? '0' + time.sec : time.sec;
  var context = "".concat(hour, " : ").concat(min, ": ").concat(sec);
  curTime.innerHTML = context;
}

var startBtn = document.querySelector('#startBtn');
var pauseBtn = document.querySelector('#pauseBtn');
var restartBtn = document.querySelector('#restartBtn');
startBtn.addEventListener('click', function () {
  if (!pause) {
    timerID = setInterval(updateTime, 1000);
  }

  startBtn.setAttribute(disabled);
});
pauseBtn.addEventListener('click', function () {
  pause = true;
  clearInterval(timerID);
});
restartBtn.addEventListener('click', function () {
  pause = false;
  time.hour = 0;
  time.min = 0;
  time.sec = 0;
  renderTime();
});

function updateTime() {
  //update second
  if (time.sec === 59) {
    //update minute
    time.sec = 0;

    if (time.min === 59) {
      time.min = 0; //update hour

      time.hour++;
    } else {
      time.min++;
    }
  } else {
    time.sec++;
  }

  renderTime();
} //init


renderTime();
//# sourceMappingURL=all.js.map

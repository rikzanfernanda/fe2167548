/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.querySelector('#stopwatch');
let startbtn = document.querySelector('#start');
let stopbtn = document.querySelector('#stop');
let resetbtn = document.querySelector('#reset');

let interval;

let h = '00';
let m = '00';
let s = '00';

startbtn.addEventListener('click', () => {
  start();
});

stopbtn.addEventListener('click', () => {
  stop();
});

resetbtn.addEventListener('click', () => {
  reset();
});

function start() {
  runTime();
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  h = '00';
  m = '00';
  s = '00';

  stopwatch.innerHTML = `${h}:${m}:${s}`;
}

function runTime() {
  h = parseInt(h);
  m = parseInt(m);
  s = parseInt(s);

  interval = setInterval(() => {
    s++;
    if (s === 60) {
      m++;
      if (m === 60) {
        h++;
        m = 0;
      }
      s = 0;
    }

    stopwatch.innerHTML = `${h >= 10 ? h: '0' + h}:${m >= 10 ? m: '0' + m}:${s >= 10 ? s: '0' + s}`;
  }, 1000);
}
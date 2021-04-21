// eslint-disable-next-line strict
'use strict';

const car = document.querySelector('.mazda'),
  start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  reset = document.getElementById('reset'),
  dps = document.querySelector('.dps');
let count = -700,
  rideInterval;

const rideAnimate = () => {
  rideInterval = requestAnimationFrame(rideAnimate);
  count += 10;

  if (count < 1330) {
    car.style.left = count + 'px';
  } else {
    dps.style = 'display: block';
    cancelAnimationFrame(rideInterval);
    stop.disabled = true;
  }
};

start.addEventListener('click', () => {
  car.style = 'display: block';
  rideAnimate();
  start.style = 'display: none';
  stop.style = 'display: block';
});

stop.addEventListener('click', () => {
  cancelAnimationFrame(rideInterval);
  start.style = 'display: block';
  stop.style = 'display: none';
});

reset.addEventListener('click', () => {
  count = -700;
  car.style = 'display: none';
  cancelAnimationFrame(rideInterval);
  stop.disabled = false;
  stop.style = 'display: none';
  start.style = 'display: block';
  dps.style = 'display: none';
});

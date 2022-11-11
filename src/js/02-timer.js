/* import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; */

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '30px',
  opacity: 1,
  // ...
});

const refs = {
  startBtn: document.querySelector('[data-start]'),
  pickInput: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0].getTime() <= this.now.getTime()) {
      /* window.alert('Please choose a date in the future');
       */
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }

    return selectedDates[0];
  }
}

const pickrInstatce = flatpickr(refs.pickInput, options).selectedDates[0].getTime();
console.log(pickrInstatce);

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      const deltaTime = pickrInstatce - Date.now();

      /*    if (deltaTime) {
           return
         } */

      const time = convertMs(deltaTime);
      updateClock(time);
    }, 1000);
  }
}

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

function updateClock({
  days,
  hours,
  minutes,
  seconds
}) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

/* const deadLine = pickrInstatce;

function getRemainingTime(endtime) {
  const total = endtime - Date.parse(new Date()),
    days = Math.floor((total / (1000 * 60 * 60 * 24))),
    hours = Math.floor((total / (1000 * 60 * 60) % 24)),
    minutes = Math.floor((total / 1000 / 60) % 60),
    seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('[data-days]'),
    hours = timer.querySelector('[data-hours]'),
    minutes = timer.querySelector('[data-minutes]'),
    seconds = timer.querySelector('[data-seconds]'),
    IntervalId = setInterval(updateClock, 1000)

  function updateClock() {
    const currentTime = getRemainingTime(endtime);

    days.innerHTML = addLeadingZero(currentTime.days);
    hours.innerHTML = addLeadingZero(currentTime.hours);
    minutes.innerHTML = addLeadingZero(currentTime.minutes);
    seconds.innerHTML = addLeadingZero(currentTime.seconds);

    if (currentTime.total <= 0) {
      clearInterval(IntervalId);
    }
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

refs.startBtn.addEventListener('click', () => {
  setClock('.timer', deadLine);
}); */
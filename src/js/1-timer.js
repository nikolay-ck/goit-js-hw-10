import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;
const startButton = document.querySelector('[data-start]');
const datetimePicker = document.getElementById('datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const now = new Date();

    if (userSelectedDate <= now) {
      startButton.disabled = true;
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        titleColor: '#ffffff',
      });
    } else {
      startButton.disabled = false;
      startButton.classList.add('is-active');
      iziToast.success({
        position: 'topRight',
        title: 'Success',
        message: 'Date selected!',
        backgroundColor: '#59A10D',
        messageColor: '#FFFFFF',
        titleColor: '#ffffff',
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysElement.textContent = days;
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

function startCountdown() {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDiff = userSelectedDate - now;

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      datetimePicker.disabled = false;
      startButton.disabled = true;
      return;
    }

    const timeLeft = convertMs(timeDiff);
    updateTimerDisplay(timeLeft);
  }, 1000);
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

  return { days, hours, minutes, seconds };
}

startButton.addEventListener('click', () => {
  if (userSelectedDate) {
    startButton.classList.remove('is-active');
    startButton.disabled = true;
    datetimePicker.disabled = true;
    clearInterval(countdownInterval);
    startCountdown();
  }
});

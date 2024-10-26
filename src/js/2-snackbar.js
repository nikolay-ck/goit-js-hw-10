import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const promiseState = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.success({
        position: 'topRight',
        message: `Fulfilled promise in ${result}ms`,
        backgroundColor: '#59A10D',
        messageColor: '#FFFFFF',
      });
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `Rejected promise in ${error}ms`,
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
      });
    });
});

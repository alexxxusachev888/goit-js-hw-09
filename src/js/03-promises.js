Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '30px',
  opacity: 1,
  // ...
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay
        });
      } else {
        reject({
          position,
          delay
        });
      }
    }, delay);

  })
}

const refs = {
  startBtn: document.querySelector('button[type="submit"]'),
  delayInput: document.querySelector('input[name="delay"]').value,
  stepInput: document.querySelector('input[name="step"]').value,
  amountInput: document.querySelector('input[name="amount"]').value,
}

refs.startBtn.addEventListener('click', () => {
  for (let i = 1; i <= refs.amountInput; i += 1) {
    createPromise(i, refs.delayInput)
      .then(({
        position,
        delay
      }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({
        position,
        delay
      }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
});
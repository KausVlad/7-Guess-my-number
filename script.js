'use strict';

// console.log(document.querySelector('.between').textContent);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'test 1234 🎂';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// console.log((document.querySelector('.guess').value = 7));

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});

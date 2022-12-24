'use strict';

// console.log(document.querySelector('.between').textContent);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'test 1234 🎂';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// console.log((document.querySelector('.guess').value = 7));

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (score > 1) {
    if (guess === secretNumber) {
      document.querySelector(
        '.message'
      ).textContent = `🏆 You guessed the secret number '${secretNumber}'!`;
      document.querySelector('.highscore').textContent = score;
    } else if (guess > secretNumber && Math.abs(guess - secretNumber) < 5) {
      document.querySelector('.message').textContent =
        '⬇ The secret number is a little smaller!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber && Math.abs(guess - secretNumber) < 5) {
      document.querySelector('.message').textContent =
        '⬆ The secret number is a little bigger!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber && Math.abs(guess - secretNumber) >= 5) {
      document.querySelector('.message').textContent =
        '⬇⬇⬇ The secret number is a much smaller!';
      score -= 3;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber && Math.abs(guess - secretNumber) >= 5) {
      document.querySelector('.message').textContent =
        '⬆⬆⬆ The secret number is much larger!';
      score -= 3;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💥You lost the game!😭';
  }
});

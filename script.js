'use strict';

// console.log(document.querySelector('.between').textContent);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'test 1234 🎂';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// console.log((document.querySelector('.guess').value = 7));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`secretNumber ${secretNumber}`);
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(`secretNumber ${secretNumber}`);
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (score > 1) {
    //victory
    if (guess === secretNumber) {
      document.querySelector(
        '.message'
      ).textContent = `🏆 You guessed the secret number '${secretNumber}'!`;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        console.log(`highscore ${highscore}`);
      }
    }

    //not victorious states
    else if (guess > secretNumber && Math.abs(guess - secretNumber) < 5) {
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
    } else if (score < 0) {
    }
  } else {
    document.querySelector('.message').textContent = '💥You lost the game!😭';
    document.querySelector('.score').textContent = 0;
  }
  // console.log(score);
});

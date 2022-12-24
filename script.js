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

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  displayScore(20);
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
    displayMessage('⛔ No number!');
  }
  //victory
  else if (guess === secretNumber) {
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
  else if (guess !== secretNumber) {
    if (score > 1) {
      let secretNumberDif = Math.abs(guess - secretNumber);
      displayMessage(
        `The secret number ${
          secretNumberDif > 5 ? 'is a much' : 'is a little'
        }  ${guess > secretNumber ? 'smaller!' : ' bigger!'}`
      );
      let scoreMult = secretNumberDif > 5 ? 2 : 0;
      score -= 1 + scoreMult;
      displayScore(score);
    } else {
      displayMessage('💥You lost the game!😭');
      displayScore(0);
    }
  }
  // } else if (guess > secretNumber && Math.abs(guess - secretNumber) < 5) {
  //   document.querySelector('.message').textContent =
  //     '⬇ The secret number is a little smaller!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber && Math.abs(guess - secretNumber) < 5) {
  //   document.querySelector('.message').textContent =
  //     '⬆ The secret number is a little bigger!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess > secretNumber && Math.abs(guess - secretNumber) >= 5) {
  //   document.querySelector('.message').textContent =
  //     '⬇⬇⬇ The secret number is a much smaller!';
  //   score -= 3;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber && Math.abs(guess - secretNumber) >= 5) {
  //   document.querySelector('.message').textContent =
  //     '⬆⬆⬆ The secret number is much larger!';
  //   score -= 3;
  //   document.querySelector('.score').textContent = score;
  // }

  // console.log(score);
});

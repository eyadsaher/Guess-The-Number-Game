let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎊 Gamed ya Basha';
    displayMessage('🎊 Good Job');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is smaller
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '😔 Try a smaller number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎👎 You lost the game';
  //     document.querySelector('.score').textContent = 0;

  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //   }

  //   // when guess is larger
  // }
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '😔 Try a smaller number'
      //     : '😭 Try a larger number';
      displayMessage(
        `${
          guess > secretNumber
            ? '😔 Try a smaller number'
            : '😭 Try a larger number'
        }`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎👎 You lost the game';
      document.querySelector('.score').textContent = 0;

      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
    }
  }
  //  else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😭 Try a larger number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎👎 You lost the game';
  //     document.querySelector('.score').textContent = 0;

  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function handleKeyUp(event) {
  if (event.keyCode === 13) {
    document.querySelector('.check').click(); // Trigger button click event
  }
}

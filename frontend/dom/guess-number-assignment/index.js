/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.querySelector('.new-game');
let randomNumber = document.querySelector('#hidden-number');
let message = document.querySelector('.message');
let displayScore = document.querySelector('.score');
let input = document.querySelector('.input');
let checkBtn = document.querySelector('button.check');
let score = document.querySelector('.score');
let number = document.querySelector('.number');

randomNumber = generateNumber();
score = 10;

newGameBtn.addEventListener('click', () => {
  resetGame();
});

checkBtn.addEventListener('click', () => {
  checkNumber();
});

function generateNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function displayMessage(msg) {
  message.innerHTML = msg;
}

function resetGame() {
  message.innerHTML = 'Lets start guessing...';
  randomNumber = generateNumber();
  score = 10;
  displayScore.innerHTML = score;

  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  number.innerHTML = '?';
  // randomNumber = generateNumber();

  if (parseInt(input.value) >= 1 && parseInt(input.value) <= 10) {
    if (parseInt(input.value) === randomNumber) {
      displayMessage('Yeay! you guessed it!');
      number.innerHTML = randomNumber;
    } else {
      score--;
  
      if (score < 1) {
        displayMessage('Oops, you lost the game');
      } else if (parseInt(input.value) < randomNumber) {
        displayMessage('Too small, buddy!');
      } else if (parseInt(input.value) > randomNumber) {
        displayMessage("Oww... that's too big!");
      }
    }
  } else {
    displayMessage('Guess any number between 1 and 10');
  }

  displayScore.innerHTML = score;
  randomNumber = generateNumber();
  document.getElementById('hidden-number').innerHTML = randomNumber;
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber
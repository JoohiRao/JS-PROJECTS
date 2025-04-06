const guessBtn = document.querySelector("#guessBtn");
const restartBtn = document.getElementById("restartBtn");
const input = document.getElementById("input1");
const outputBox = document.getElementById("outputBox");
const timerDisplay = document.getElementById("timer");
const result = document.querySelector("#result");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let timeLeft = 60;
let interval;


function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(interval);
      result.textContent = "⏰ Time's up! Game Over.";
      disableGame();
    }
  }, 1000);
}

function disableGame() {
  input.disabled = true;
  guessBtn.disabled = true;
}

function enableGame() {
  input.disabled = false;
  guessBtn.disabled = false;
}

guessBtn.addEventListener("click", () => {
  const userGuess = parseInt(input.value);

  if (isNaN(userGuess)) {
    result.textContent = "❌ Please enter a valid number!";
    return;
  }

  if (userGuess === randomNumber) {
    result.textContent = "🎉 Correct guess!";
    outputBox.textContent = `The correct number was: ${randomNumber}`;
    clearInterval(interval);
    disableGame();
  } else if (userGuess < randomNumber) {
    result.textContent = "🔽 Too low! Try again.";
  } else {
    result.textContent = "🔼 Too high! Try again.";
  }
});


restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  result.textContent = "";
  outputBox.textContent = ""; 
  clearInterval(interval);
  timeLeft = 60;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  startTimer();
  enableGame();
});


startTimer();

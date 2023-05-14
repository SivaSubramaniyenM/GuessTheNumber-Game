// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get jQuery objects for input element, button element, and message element
const guessInput = $('#guessInput');
const submitButton = $('#submitButton');
const message = $('#message');

let attempts = 0;
let isGameOver = false;

// Function to check the user's guess
function checkGuess() {
  if (isGameOver) {
    return;
  }

  const userGuess = parseInt(guessInput.val());

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    showMessage('Please enter a valid number between 1 and 100.');
  } else {
    attempts++;
    const attemptsLeft = 10 - attempts;

    if (userGuess === randomNumber) {
      showMessage(`Congratulations! You guessed the correct number (${randomNumber})!`);
      endGame();
    } else if (userGuess < randomNumber) {
      showMessage(`Too low! Try a higher number. Attempts left: ${attemptsLeft}`);
    } else {
      showMessage(`Too high! Try a lower number. Attempts left: ${attemptsLeft}`);
    }

    if (attempts === 10) {
      showMessage(`Game over! You ran out of attempts. The correct number was ${randomNumber}.`);
      endGame();
    }
  }

  guessInput.val('');
  guessInput.focus();
}

// Function to display a message
function showMessage(msg) {
  message.text(msg);
}

// Function to end the game
function endGame() {
  isGameOver = true;
  guessInput.prop('disabled', true);
  submitButton.prop('disabled', true);
}

// Event listener for the submit button click
submitButton.on('click', checkGuess);

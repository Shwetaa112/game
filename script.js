const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        showMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        showMessage(`Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`);
        document.getElementById("guess").disabled = true;
    } else if (guess < targetNumber) {
        showMessage("Try a higher number.");
    } else {
        showMessage("Try a lower number.");
    }
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}
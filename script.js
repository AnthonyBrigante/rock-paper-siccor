// Prompt for the user's name
let playerName = prompt("Enter your name:", "Stan");
if (!playerName || playerName.trim() === "") {
  playerName = "Stan";
}

// Display the greeting
document.getElementById("greeting").textContent = `Welcome, ${playerName}!`;

// Map choices to superheroes
const choicesMap = {
  thing: "rock",
  flatman: "paper",
  wolverine: "scissors",
};

const superheroes = {
  thing: "The Thing (Rock)",
  flatman: "Flatman (Paper)",
  wolverine: "Wolverine (Scissors)",
};

let playerWins = 0;
let computerWins = 0;

// Add event listeners for user choices
document.getElementById("thing").addEventListener("click", () => playGame("thing"));
document.getElementById("flatman").addEventListener("click", () => playGame("flatman"));
document.getElementById("wolverine").addEventListener("click", () => playGame("wolverine"));

function playGame(userChoice) {
  const computerChoiceKey = Object.keys(choicesMap)[Math.floor(Math.random() * 3)];
  const userHero = superheroes[userChoice];
  const computerHero = superheroes[computerChoiceKey];

  let resultMessage = `You chose ${userHero}. Computer chose ${computerHero}. `;

  if (choicesMap[userChoice] === choicesMap[computerChoiceKey]) {
    resultMessage += "It's a tie!";
  } else if (
    (choicesMap[userChoice] === "rock" && choicesMap[computerChoiceKey] === "scissors") ||
    (choicesMap[userChoice] === "paper" && choicesMap[computerChoiceKey] === "rock") ||
    (choicesMap[userChoice] === "scissors" && choicesMap[computerChoiceKey] === "paper")
  ) {
    resultMessage += "You win this round!";
    playerWins++;
  } else {
    resultMessage += "You lose this round!";
    computerWins++;
  }

  // Update the result message
  document.getElementById("result").textContent = resultMessage;

  // Update the scoreboard
  document.getElementById("player-wins").textContent = playerWins;
  document.getElementById("computer-wins").textContent = computerWins;

  // Check for a winner after each round
  checkForWinner();
}

function checkForWinner() {
  // Check if the player or computer has won 5 rounds
  if (playerWins === 5) {
    endGame(`Congratulations, ${playerName}! You won the game! Best out of five!`);
  } else if (computerWins === 5) {
    endGame(`The computer won the game! Better luck next time, ${playerName}!`);
  }
}

function endGame(message) {
  alert(message);
  // Create a reset button dynamically
  const resetButton = document.createElement("button");
  resetButton.textContent = "Play Again";
  resetButton.id = "reset-button";
  resetButton.style.marginTop = "20px";
  resetButton.style.padding = "10px 20px";
  resetButton.style.fontSize = "1.2rem";
  resetButton.style.cursor = "pointer";
  resetButton.style.border = "2px solid #d81f26";
  resetButton.style.backgroundColor = "#f7d02c";
  resetButton.style.color = "#d81f26";
  resetButton.style.borderRadius = "5px";

  // Append the button to the main element
  document.querySelector("main").appendChild(resetButton);

  // Add event listener to the reset button
  resetButton.addEventListener("click", resetGame);

  // Disable choice buttons after the game ends
  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
  });
}

function resetGame() {
  // Reset the scores and UI
  playerWins = 0;
  computerWins = 0;
  document.getElementById("player-wins").textContent = playerWins;
  document.getElementById("computer-wins").textContent = computerWins;
  document.getElementById("result").textContent = "";

  // Remove the reset button
  const resetButton = document.getElementById("reset-button");
  if (resetButton) {
    resetButton.remove();
  }

  // Re-enable choice buttons
  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  });
}

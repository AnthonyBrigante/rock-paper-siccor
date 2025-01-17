// Map choices to superheroes
const choicesMap = {
    thing: 'rock',
    flatman: 'paper',
    wolverine: 'scissors'
  };
  
  const superheroes = {
    thing: 'The Thing (Rock)',
    flatman: 'Flatman (Paper)',
    wolverine: 'Wolverine (Scissors)'
  };
  
  let playerWins = 0;
  let computerWins = 0;
  
  // Add event listeners for user choices
  document.getElementById('thing').addEventListener('click', () => playGame('thing'));
  document.getElementById('flatman').addEventListener('click', () => playGame('flatman'));
  document.getElementById('wolverine').addEventListener('click', () => playGame('wolverine'));
  
  function playGame(userChoice) {
    const computerChoiceKey = Object.keys(choicesMap)[Math.floor(Math.random() * 3)];
    const userHero = superheroes[userChoice];
    const computerHero = superheroes[computerChoiceKey];
  
    let resultMessage = `You chose ${userHero}. Computer chose ${computerHero}. `;
  
    if (choicesMap[userChoice] === choicesMap[computerChoiceKey]) {
      resultMessage += "It's a tie!";
    } else if (
      (choicesMap[userChoice] === 'rock' && choicesMap[computerChoiceKey] === 'scissors') ||
      (choicesMap[userChoice] === 'paper' && choicesMap[computerChoiceKey] === 'rock') ||
      (choicesMap[userChoice] === 'scissors' && choicesMap[computerChoiceKey] === 'paper')
    ) {
      resultMessage += "You win this round!";
      playerWins++;
    } else {
      resultMessage += "You lose this round!";
      computerWins++;
    }
  
    // Update the result message
    document.getElementById('result').textContent = resultMessage;
  
    // Update the scoreboard
    document.getElementById('player-wins').textContent = playerWins;
    document.getElementById('computer-wins').textContent = computerWins;
  
    // Check for a winner
    checkForWinner();
  }
  
  function checkForWinner() {
    if (playerWins === 3) {
      alert("Congratulations! You won the game!");
      resetGame();
    } else if (computerWins === 3) {
      alert("The computer won the game! Better luck next time!");
      resetGame();
    }
  }
  
  function resetGame() {
    playerWins = 0;
    computerWins = 0;
    document.getElementById('player-wins').textContent = playerWins;
    document.getElementById('computer-wins').textContent = computerWins;
    document.getElementById('result').textContent = "";
  }
  
// Initialize greeting and score variables
const userName = prompt('What is your name?');
let Greet = document.getElementById('greeting');

// Set username on the webpage
userName ? (Greet.innerText = `${userName}`) : (Greet.innerText = `jackson`);

// Score tracking
let playerWins = 0;
let computerWins = 0;

// Function to get the computer's random choice
function Computer() {
    let randomNumber = Math.floor(Math.random() * 3);
    let imageChoice;

    switch (randomNumber) {
        case 0:
            imageChoice = 'imgs/the thing.jpg'; // Rock
            break;
        case 1:
            imageChoice = 'imgs/flatman.jpg'; // Paper
            break;
        case 2:
            imageChoice = 'imgs/wolverine.jpg'; // Scissors
            break;
    }

    return imageChoice;
}

// Update the result message and score
function gameResult(userChoice, computerChoice) {
    let resultMessage = '';

    // Determine the result of the round
    if (userChoice === computerChoice) {
        resultMessage = "It's a Tie!";
    } else if (
        (userChoice === 'imgs/the thing.jpg' && computerChoice === 'imgs/flatman.jpg') ||
        (userChoice === 'imgs/flatman.jpg' && computerChoice === 'imgs/wolverine.jpg') ||
        (userChoice === 'imgs/wolverine.jpg' && computerChoice === 'imgs/the thing.jpg')
    ) {
        resultMessage = 'You Win!';
        playerWins++;
    } else {
        resultMessage = 'You Lose!';
        computerWins++;
    }

    // Update the score board
    document.getElementById('playerScore').innerText = `Player: ${playerWins}`;
    document.getElementById('computerScore').innerText = `Computer: ${computerWins}`;

    // Display the choices
    document.getElementById('userImage').src = userChoice;
    document.getElementById('computerImage').src = computerChoice;

    // Check if the game has ended
    if (playerWins === 3) {
        document.getElementById('resultMessage').innerText = 'Congratulations! You Win the Game!';
        disableButtons();
    } else if (computerWins === 3) {
        document.getElementById('resultMessage').innerText = 'Sorry, Computer Wins the Game!';
        disableButtons();
    } else {
        document.getElementById('resultMessage').innerText = resultMessage;
    }
}

// Disable the buttons after the game ends
function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.disabled = true);
}

// Add event listeners for button clicks
document.getElementById('rockButton').addEventListener('click', () => {
    const userChoice = 'imgs/the thing.jpg'; // Rock
    const computerChoice = Computer();
    gameResult(userChoice, computerChoice);
});

document.getElementById('paperButton').addEventListener('click', () => {
    const userChoice = 'imgs/flatman.jpg'; // Paper
    const computerChoice = Computer();
    gameResult(userChoice, computerChoice);
});

document.getElementById('scissorsButton').addEventListener('click', () => {
    const userChoice = 'imgs/wolverine.jpg'; // Scissors
    const computerChoice = Computer();
    gameResult(userChoice, computerChoice);
});

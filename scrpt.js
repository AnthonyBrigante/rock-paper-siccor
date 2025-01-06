let userWins = 0;
let computerWins = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('user-choice').textContent = `User choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer choice: ${computerChoice}`;

    if (userChoice === computerChoice) {
        alert('It\'s a tie!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userWins++;
        document.getElementById('user-score').textContent = `User wins: ${userWins}`;
    } else {
        computerWins++;
        document.getElementById('computer-score').textContent = `Computer wins: ${computerWins}`;
    }
}

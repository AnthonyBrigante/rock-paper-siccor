const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const heroes = {
    thing: 'The Thing',
    flatman: 'Flatman',
    wolverine: 'Wolverine',
};

const beats = {
    thing: 'wolverine', // Rock beats Scissors
    flatman: 'thing',  // Paper beats Rock
    wolverine: 'flatman', // Scissors beats Paper
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceDisplay.textContent = `Your Hero: ${heroes[userChoice]}`;
        computerChoiceDisplay.textContent = `Opponent's Hero: ${heroes[computerChoice]}`;
        resultDisplay.textContent = `Battle Result: ${result}`;
    });
});

function getComputerChoice() {
    const options = ['thing', 'flatman', 'wolverine'];
    return options[Math.floor(Math.random() * options.length)];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'It\'s a tie!';
    if (beats[userChoice] === computerChoice) return 'You win!';
    return 'You lose!';
}

// Get username prompt
const userName = prompt('What is your name?')
let Greet = document.getElementById('greeting')
//Put username in website
userName 
? (Greet.innerText=`${userName}`)
: (Greet.innerText=`Pubert`)


//Puter choice
function Computer() {
    let randomNumber = Math.floor(Math.random() * 3);
    let imageChoice;
    
    switch (randomNumber) {
        case 0:
            imageChoice = 'IMGS/Rock.png';
            break;
        case 1:
            imageChoice = 'IMGS/Paper.png';
            break;
        case 2:
            imageChoice = 'IMGS/Scissors.png';
            break;
    }
    
    return imageChoice; 
}

// Game results
function gameResult(userChoice, computerChoice) {
    if (userChoice === 'Rock' && computerChoice === 'Paper') {
        return 'You Lose!';
    } else if (userChoice === 'Rock' && computerChoice === 'Rock') {
        return 'You Tied!';
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        return 'You Win!';
    } else if (userChoice === 'Paper' && computerChoice === 'Paper') {
        return 'You Tied!';
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        return 'You Win!';
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        return 'You Lose!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        return 'You Win!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        return 'You Lose!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Scissors') {
        return 'You Tied!';
    }
}

//User buttons
function choiceRock() {
    const userChoice = 'Rock';
    const computerChoice = Computer(); 
    const result = gameResult(userChoice, computerChoice); 
    alert(result); 


}

function choicePaper() {
    const userChoice = 'Paper';
    const computerChoice = Computer();
    const result = gameResult(userChoice, computerChoice);
    alert(result);
}

function choiceScissors() {
    const userChoice = 'Scissors';
    const computerChoice = Computer();
    const result = gameResult(userChoice, computerChoice);
    alert(result);
}
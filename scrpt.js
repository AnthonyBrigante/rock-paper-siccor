// Get username prompt
const userName = prompt('What is your name?')
let Greet = document.getElementById('greeting')
//Put username in website
userName 
? (Greet.innerText=`${userName}`)
: (Greet.innerText=`jackson`)


//Puter choice
function Computer() {
    let randomNumber = Math.floor(Math.random() * 3);
    let imageChoice;
    
    switch (randomNumber) {
        case 0:
            imageChoice = 'imgs/the thing.jpg';
            break;
        case 1:
            imageChoice = 'imgs/flatman.jpg';
            break;
        case 2:
            imageChoice = 'imgs/wolverine.jpg';
            break;
    }
    
    return imageChoice; 
}

// Game results
function gameResult(userChoice, computerChoice) {
    if (userChoice === 'imgs/the thing.jpg' && computerChoice === 'Paper') {
        return 'You Lose!';
    } else if (userChoice === 'imgs/the thing.jpg' && computerChoice === 'imgs/the thing.jpg') {
        return 'You Tied!';
    } else if (userChoice === 'Rimgs/the thing.jpg' && computerChoice === 'imgs/wolverine.jpg') {
        return 'You Win!';
    } else if (userChoice === 'imgs/flatman.jpg' && computerChoice === 'imgs/flatman.jpg') {
        return 'You Tied!';
    } else if (userChoice === 'imgs/flatman.jpg' && computerChoice === 'imgs/the thing.jpg') {
        return 'You Win!';
    } else if (userChoice === 'imgs/flatman.jpg' && computerChoice === 'imgs/wolverine.jpg') {
        return 'You Lose!';
    } else if (userChoice === 'imgs/wolverine.jpg' && computerChoice === 'imgs/flatman.jpg') {
        return 'You Win!';
    } else if (userChoice === 'imgs/wolverine.jpg' && computerChoice === 'imgs/the thing.jpg') {
        return 'You Lose!';
    } else if (userChoice === 'imgs/wolverine.jpg' && computerChoice === 'imgs/wolverine.jpg') {
        return 'You Tied!';
    }
}

//User buttons
function choiceRock() {
    const userChoice = 'imgs/the thing.jpg';
    const computerChoice = Computer(); 
    const result = gameResult(userChoice, computerChoice); 
    alert(result); 


}

function choicePaper() {
    const userChoice = 'imgs/flatman.jpg';
    const computerChoice = Computer();
    const result = gameResult(userChoice, computerChoice);
    alert(result);
}

function choiceScissors() {
    const userChoice = 'imgs/wolverine.jpg';
    const computerChoice = Computer();
    const result = gameResult(userChoice, computerChoice);
    alert(result);
}
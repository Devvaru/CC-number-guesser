let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let target = Math.floor(Math.random() * 10);
    return target;
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess > 9) {
        alert('Your number is out of range!');
    };

    let humanDiff = (target - humanGuess);
    let computerDiff = (target - computerGuess);
    if (humanDiff < 0) {
        humanDiff *= -1;
    };
    if (computerDiff < 0) {
        computerDiff *= -1;
    };
    
    if (humanGuess === computerGuess) {
        return true;
    } else if (humanDiff < computerDiff) {
        return true;
    } else {
        return false;
    };
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    };
};

const advanceRound = () => {
    currentRoundNumber += 1;
};
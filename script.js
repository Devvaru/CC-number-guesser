let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let target = Math.floor(Math.random() * 10);
    return target;
};
generateTarget()
console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, target) => {
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

const underScore = winner => {
    
}
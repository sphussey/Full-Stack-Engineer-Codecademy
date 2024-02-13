let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// create a generateTarget() function. This function should return a random integer
// between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// create a compareGuesses() function that takes human, computer and target guess and
// determines which player wins (if tie, human wins)

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    humanDistanceFromTarget = Math.abs(humanGuess - targetNum);
    computerDistanceFromTarget = Math.abs(computerGuess - targetNum);
    return humanDistanceFromTarget <= computerDistanceFromTarget
}

// create an updateScore() function that takes a string parameter of the winner (either
// 'human' or 'computer') and increases the overall score
const updateScore = (winner) => {
    switch (winner) {
        case "human":
            humanScore++;
            break;
        case "computer":
            computerScore++;
            break;
        default:
            console.log('Please enter  either "human" or "computer".');
            break;
    }
}


// Create an advanceRound() function. This function should increase the value of currentRoundNumber by 1

const advanceRound = () => currentRoundNumber++;



const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const numberRand = Math.floor(Math.random()*3)
    // console.log(numberRand);
    const randomChoice = choices[numberRand];
    return randomChoice;
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You Win! Rock beats Scissor");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
    }
    else if (playerSelection === "paper" && computerSelection==="rock") {
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection === computerSelection) {
        console.log("Its a Tie! Try again");
    }
    else {
        console.log("The Computer beat you!");
    }
};

const playerSelection = choices[Math.floor(Math.random()*3)];
// console.log(playerSelection);
const computerSelection = getComputerChoice();
// console.log(computerSelection);
playRound(playerSelection,computerSelection);
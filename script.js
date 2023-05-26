const choices = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const optionsContainer = document.querySelector(".options-container")
const h1 = document.querySelector("h1");
const p = document.createElement("p");

let playerCalc = 0; //Variable to calculate the player's score
let compCalc = 0; //Variable to calculate the computer's score

const gameReset = () => {
    h1.textContent = "Choose Your Weapon!";
    p.innerHTML = "Let's see if you have what it takes to stop the rise of the <span><strong>Machines</strong></span>!🤖"
    h1.insertAdjacentElement("afterend",p)
};

//Generating a random choice for the computer
const getComputerChoice = () => {
    const numberRand = Math.floor(Math.random()*3)
    const randomChoice = choices[numberRand];
    return randomChoice;
};

//Registering the player click and assigning them value from the Choices Array
rock.addEventListener("click",() => {
    playRound(choices[0], getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound(choices[1], getComputerChoice());
});

scissor.addEventListener("click", () => {
    playRound(choices[2],getComputerChoice());
});

//After receiving all the inputs the code showcases who won the game.
const playRound = (playerSelection, computerSelection) => {

    //Resetting the values back to zero in case the score is greater than 5
    if (playerCalc>=5 || compCalc>=5){
        winnerDeclare(playerCalc,compCalc);

        setTimeout(()=>{
            playerCalc = 0;
            compCalc = 0;
            playerScore.textContent = playerCalc;
            computerScore.textContent = compCalc;
        },10)
    }

    else {

        if (playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "scissors" 
            && computerSelection === "paper" || playerSelection === "paper" && computerSelection==="rock") {
                
                playerCalc++;
                playerScore.textContent = playerCalc;
                p.textContent = `Your Choice: ${playerSelection}, Computer's Choice: ${computerSelection}`;
                p.style.cssText ="margin-top: 40px";
                optionsContainer.insertAdjacentElement("afterend",p);
        }
    
        else if (playerSelection === computerSelection) {
            p.textContent = `Your Choice: ${playerSelection}, Computer's Choice: ${computerSelection}`;
            optionsContainer.insertAdjacentElement("afterend", p);
        }

        else {
            p.textContent = `Your Choice: ${playerSelection}, Computer's Choice: ${computerSelection}`;
            optionsContainer.insertAdjacentElement("afterend", p);
            compCalc++;
            computerScore.textContent = compCalc;
        }
    }
};

//Defining a function that checks the score and declares a winner
const winnerDeclare = (playerScore, computerScore) => {
    if (playerScore>computerScore) {
        h1.textContent = "You've done it!!🥳 You stopped the invasion!";
        document.querySelector(".sub-heading").remove();

        setTimeout (()=>{
            gameReset();
        },3000);
    }

    else {
        h1.textContent = "You Lose!😔 The machines have taken over the world...";
        document.querySelector(".sub-heading").remove();

        setTimeout (()=>{
            gameReset();
        },3000);
    }
};
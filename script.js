function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "error";
            break;
    }
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors");
}

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        console.log("Invalid option!");
        return;
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper"))
    {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
        }
    else if (humanChoice === computerChoice) {
        result.textContent = `Tie! You both chose ${humanChoice}`;
    }
    else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
    }
}

document.querySelector(".rock").addEventListener(
    "click",
    () => {playRound("rock", getComputerChoice())}
);
document.querySelector(".paper").addEventListener(
    "click",
    () => {playRound("paper", getComputerChoice())}
);
document.querySelector(".scissors").addEventListener(
    "click",
    () => {playRound("scissors", getComputerChoice())}
);
    

function playGame() {

    if (humanScore > computerScore)
        console.log("You win " + humanScore + ":" + computerScore + "!");
    else if (humanScore < computerScore)
        console.log("You lose " + humanScore + ":" + computerScore + "!");
    else
    console.log("You tied with the computer " + humanScore + ":" + computerScore + "!");
}

playGame();
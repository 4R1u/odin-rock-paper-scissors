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

const resultDiv = document.querySelector(".result");
const winnerDiv = document.querySelector(".winner");
const roundEvent = new CustomEvent("round", {detail: {}});

const scoreDiv = document.querySelector(".score");
scoreDiv.addEventListener("round", () => {
    scoreDiv.textContent = `${humanScore} : ${computerScore}`;
    if (!winnerDiv.textContent) {
        if (humanScore >= 5) {
            winnerDiv.textContent = "You win!";
        }
        else if (computerScore >= 5) {
            winnerDiv.textContent = "You lose!";
        }
    }
})

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
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
        }
    else if (humanChoice === computerChoice) {
        resultDiv.textContent = `Tie! You both chose ${humanChoice}`;
    }
    else {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
    }
    scoreDiv.dispatchEvent(roundEvent);
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
    

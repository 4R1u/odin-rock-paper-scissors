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
        console.log("You win!");
        ++humanScore;
        }
    else if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else {
        console.log("You lose!");
        ++computerScore;
    }
}

document.querySelector(".rock").addEventListener(
    "click",
    () => {playRound("rock", getComputerChoice());}
);
document.querySelector(".paper").addEventListener(
    "click",
    () => {playRound("paper", getComputerChoice());}
);
document.querySelector(".scissors").addEventListener(
    "click",
    () => {playRound("scissors", getComputerChoice());}
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
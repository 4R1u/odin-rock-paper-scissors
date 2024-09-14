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
    let choice = prompt("Enter rock, paper, or scissors");
    switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
            break;
        default:
            return getHumanChoice();
    }
}
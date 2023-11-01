const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerScoreReference = document.getElementById("pscore");
const computerScoreReference = document.getElementById("cscore");
const resultReference = document.getElementById("result");


/* Variables for player and computer score */
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

/* Function for choice */

function playerChoice(choice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);
    updateScore(result);
    displayChoices(choice, computerChoice, result);
    roundsPlayed++;

    if (playerScore === 5) {
        resultReference.textContent = "Well Done! You Have WON the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultReference.textContent = "Game Over :( Computer won the game!";
        disableButtons();
    } else if (roundsPlayed === maxRounds) {
        if (playerScore > computerScore) {
            resultReference.textContent = "Well Done! You Have WON the game!";
        } else if (computerScore > playerScore) {
            resultReference.textContent = "Game Over :( Computer won the game!";
        } else {
            resultReference.textContent = "Game Over. It's a tie!";
        }
        disableButtons();
    }

}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    const buttons = document.querySelectorAll(".controls-area button");
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

/* Determine the game result */

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === "Rock" && (computer === "Scissors" || computer === "Lizard")) ||
        (player === "Paper" && (computer === "Rock" || computer === "Spock")) ||
        (player === "Scissors" && (computer === "Paper" || computer === "Lizard")) ||
        (player === "Lizard" && (computer === "Spock" || computer === "Paper")) ||
        (player === "Spock" && (computer === "Scissors" || computer === "Rock"))
    ) {
        return "Player wins!";
    }
    return "Computer wins!";
}

/* Score table update */

function updateScore(result) {
    if (result === "Player wins!") {
        playerScore++;
        resultReference.textContent = "Player wins this round!";
    } else if (result === "Computer wins!") {
        computerScore++;
        resultReference.textContent = "Computer wins this round!";
    } else if (result === "It's a tie!") {
        resultReference.textContent = "It's a tie!";
    }
    playerScoreReference.textContent = playerScore;
    computerScoreReference.textContent = computerScore;
}

function displayChoices(player, computer, result) {
    const gameImage = document.querySelector(".game-image");
    gameImage.innerHTML = `<p>Player chose: ${player}</p><p>Computer chose: ${computer}</p>`;
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".controls-area button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerChoice(button.textContent);
        });
    });
});
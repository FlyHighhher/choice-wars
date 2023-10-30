const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerScoreReference = document.getElementById("pscore")
const computerScoreReference = document.getElementById("cscore")

/* Variables for player and computer score */
let playerScore = 0;
let computerScore = 0;

/* Function for choice */

function playerChoice(choice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(choice, computerChoice);
  updateScore(result);
  displayChoices(choice, computerChoice, result);
}

function computerChoice () {
  return choices[Math.floor(Math.random() * choices.length)];
}

/* Determine the game result */

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }
  if (
      (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
      (player === "paper" && (computer === "rock" || computer === "spock")) ||
      (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
      (player === "lizard" && (computer === "spock" || computer === "paper")) ||
      (player === "spock" && (computer === "scissors" || computer === "rock"))
  ) {
    return "Player wins!";
  }
  return "Computer wins";
}

/* Score table update */

function updateScore (result) {
  if (result === "Player wins!") {
    playerScore++;
  } else if (result=== "Computer wins!") {
    computerScore++;
  }
  playerScoreReference.textContent = playerScore;
  computerScoreReference.textContent = computerScore;
}

function displayChoices(player, computer, result) {
    const gameImage = document.querySelector(".game-image");
    gameImage.innerHTML = ` <p>Player chose: ${player}</p><p>Computer chose: ${computer}</p>`;
}

const buttons = document.querySelectorAll(".controls-area button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice(button.textContent);
    });
});
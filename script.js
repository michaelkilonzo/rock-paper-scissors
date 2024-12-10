const startButton = document.querySelector("#startButton");
const choicesButtons = document.querySelectorAll(".choice");
const humanScoreElement = document.getElementById("human-score");
const computerScoreElement = document.getElementById("computer-score");
const gameMessageElement = document.getElementById("gameMessage");
const roundNumberElement = document.getElementById("roundNumber");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
let totalRounds = 0;
let gameStarted = false;

startButton.addEventListener("click", startGame);

choicesButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (gameStarted) {
            const humanChoice = button.id.split("-")[0]; // Extract choice from button ID
            playRound(humanChoice);
        }
    });
});

function startGame() {
    if (!gameStarted) {
        // Reset scores and variables
        humanScore = 0;
        computerScore = 0;
        currentRound = 0;
        gameStarted = true;

        // Get total rounds
        const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
        if (!rounds || rounds <= 0) {
            alert("Please enter a valid number of rounds.");
            resetGame();
            return;
        }
        totalRounds = rounds;

        // Update UI
        updateScores();
        gameMessageElement.textContent = "Game started! Make your choice.";
        roundNumberElement.textContent = `ROUND: 1/${totalRounds}`;
        startButton.textContent = "Reset Game";
    } else {
        resetGame();
    }
}

function resetGame() {
    // Reset scores and variables
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    totalRounds = 0;
    gameStarted = false;

    // Update UI
    updateScores();
    gameMessageElement.textContent = "";
    roundNumberElement.textContent = "Start game to begin!";
    startButton.textContent = "Start Game";
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    if (currentRound > totalRounds) return;

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    let roundMessage = `You chose <strong>${humanChoice}</strong>. Computer chose <strong>${computerChoice}</strong><br>`;


    if (humanChoice === computerChoice) {
        roundMessage += " It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundMessage += " You win this round!";
    } else {
        computerScore++;
        roundMessage += " You lose this round.";
    }

    updateScores();
    gameMessageElement.innerHTML = roundMessage;

    currentRound++;
    if (currentRound < totalRounds) {
        roundNumberElement.textContent = `ROUND: ${currentRound + 1}/${totalRounds}`;
    } else {
        displayFinalResult();
        gameStarted = false;
        startButton.textContent = "Start Game";
    }
}

function updateScores() {
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

function displayFinalResult() {
    if (humanScore > computerScore) {
        gameMessageElement.textContent = "Game over. Congratulations, you win! 🎉";
    } else if (humanScore < computerScore) {
        gameMessageElement.textContent = "Game over. You lose. 😩";
    } else {
        gameMessageElement.textContent = "Game over. It's a tie! 👔";
    }
}

const startButton = document.querySelector('#startButton');
startButton.addEventListener("click", startGame);

let humanScore = 0;
let computerScore = 0;

function startGame() {
    // Reset scores
    updateScores(0, 0);

    // Get the number of rounds
    let rounds = prompt("How many rounds would you like to play?");
    while (rounds < 0 || isNaN(rounds)) {
        rounds = prompt("Invalid number of rounds. Please enter a positive number.");
    }
    playGame(rounds);
}

function playGame(rounds) {
    let currentRound = 0;

    function playNextRound() {
        if (currentRound < rounds) {
            document.getElementById('roundNumber').textContent = "ROUND: " + (currentRound + 1) + "/" + rounds;

            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice, currentRound + 1);
            currentRound++;

            setTimeout(playNextRound, 1); // Wait before the next round for DOM updates 
        } else {
            displayFinalResult();
        }
    }

    playNextRound(); // Start round
}

function getHumanChoice() {
    let choice = prompt('Human, enter your choice (rock, paper, or scissors):').toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt('Invalid entry. Please enter rock, paper, or scissors:').toLowerCase();
    }
    return choice;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice, roundNumber) {
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`Round ${roundNumber}: It's a tie!`);
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`Round ${roundNumber}: You win this round!`);
        humanScore++;
    } else {
        console.log(`Round ${roundNumber}: You lose this round!`);
        computerScore++;
    }
    updateScores(humanScore, computerScore);
}

function updateScores(human, computer) {
    document.getElementById('human-score').textContent = human;
    document.getElementById('computer-score').textContent = computer;
}

function displayFinalResult() {
    console.log(`> FINAL SCORE - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        alert("Game over. Congratulations, you won! 🎉");
    } else if (humanScore < computerScore) {
        alert("Game over. You lost. 😩");
    } else {
        alert("Game over. It's a tie! 👔");
    }
}
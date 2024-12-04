function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, i + 1);
    }

    // Display final scores and winner
    console.log(`> FINAL SCORE - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("> Game over. Congratulations, you won! 🎉");
    } else if (humanScore < computerScore) {
        console.log("> Game over. You lost. 😩");
    } else {
        console.log("> Game over. It's a tie! 👔");
    }
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

    console.log(`> SCORE - Human: ${humanScore}, Computer: ${computerScore}`);
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Get the number of rounds
let n = prompt("How many rounds would you like to play?");
while (n < 0 || isNaN(n)) {
    n = prompt("Invalid number of rounds. Please enter a positive number.");
}

playGame(n);



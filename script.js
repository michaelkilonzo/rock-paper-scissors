function playGame(rounds) {
    function getHumanChoice(){
        let choice = prompt('Human, enter your choice:').toLowerCase();
        while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
            choice = prompt('Invalid entry. Please enter rock, paper, or scissors:').toLowerCase();
        }
        return choice;
    }
    
    function getComputerChoice() { 
        const choices = ['rock', 'paper', 'scissors'];
        let choice = choices[Math.floor(Math.random() * 3)];
        return choice;
    }

    for (let i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice, i);
    };
    console.log(`~ Final Score: Human Score: ${humanScore}, Computer Score: ${computerScore} ~`);
    
    if (humanScore > computerScore) {
        console.log("> Game over. Congratulations, you won! 🎉");
    }
    else if (humanScore < computerScore) {
        console.log("> Game over. You lost. 😩");
    }
    else {
        console.log("> Game over. It's a tie! 👔");
    }
    
}
function playRound(humanChoice, computerChoice, i) {
    if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
        console.log("Invalid entry.")
        return;
    }
    if (humanChoice === computerChoice) {
        console.log(`Round ${i+1}: Computer chose ${computerChoice}. It's a tie!`);
    } 
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') 
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`Round ${i+1}: Computer chose ${computerChoice}. You win this round!`);
        humanScore = Math.max(0, humanScore + 1);
    } 
    else {
        console.log(`Round ${i+1}: Computer chose ${computerChoice}. You lose this round!`);
        computerScore = Math.max(0, computerScore + 1);
    }

    // Print the scores
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
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



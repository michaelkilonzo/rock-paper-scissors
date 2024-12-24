
# Rock - Paper - Scissors Game

## Overview
This is a simple Rock, Paper, Scissors game where you can play against the computer. The game tracks your score and the computer's score over multiple rounds. You can choose to play a custom number of rounds. After all rounds are finished, the winner is displayed.

## Features
- Play against the computer
- Custom number of rounds
- Game start/reset functionality
- Score tracking
- Game messages to inform the player of the result of each round

## Getting Started

1. Clone this repository or download the project files.
2. Open the `index.html` file in a browser to play the game.

## File Structure

```
/index.html       - The HTML file containing the structure of the game
/style.css        - The CSS file containing the styles for the game
/script.js        - The JavaScript file containing the logic of the game
/README.md        - This README file
```

## Dependencies

- Google Fonts (Roboto) for font styling.

## Usage

1. **Start a new game** by clicking the "Start Game" button. You will be prompted to choose how many rounds you'd like to play.
2. **Make your move** by clicking one of the buttons (Rock, Paper, or Scissors).
3. The computer will randomly choose its move, and the round will be displayed with the results.
4. **After all rounds are completed**, the game will display who won the game.

## Styles

The game uses responsive design, making it mobile-friendly. The layout adjusts depending on the screen size, and the buttons and text resize for smaller devices.

## Functions

### `startGame()`
- Resets the game and starts a new round. Prompts the user to enter the number of rounds.

### `resetGame()`
- Resets the game state, scores, and UI elements.

### `getComputerChoice()`
- Returns a random choice for the computer (Rock, Paper, or Scissors).

### `playRound(humanChoice)`
- Compares the player's choice with the computer's and updates the score.

### `updateScores()`
- Updates the displayed scores on the screen.

### `displayFinalResult()`
- Displays the final result of the game after all rounds are completed.

## Customizations

You can change the following:
- The number of rounds you want to play.
- The appearance of the game by modifying the `style.css` file.

## License

This project is open-source and free to use. If you wish to contribute or modify the game, feel free to fork the repository or submit a pull request.

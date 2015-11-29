////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
     return move || getInput(); 
    // Write an expression that operates on a variable called `move`
    // However, if `move` is not specified / is null, your expression should equal `getInput()`. 
    // If a `move` has a value, your expression should evaluate to that value.
}

function getComputerMove(move) {
    return move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // If a `move` has a value, your expression should evaluate to that value.
 }

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    // if...else statements outlining all scenarios where either player or computer win. Three scenarios for player and three for computer.
    if (playerMove == computerMove){ 
    	winner = 'Tie';
    } else if (playerMove == 'rock' && computerMove == 'scissors' 
    	|| playerMove == 'paper' && computerMove == 'rock' 
    	|| playerMove == 'scissors' && computerMove == 'paper'){
    	winner = 'Player'; 
    } else {
        winner = 'Computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner();
        if (winner === 'Player') {
            playerWins += 1;
            console.log("You win!");
        } else if (winner === 'Computer') {
            computerWins += 1;
            console.log("You lose.");
        }
        console.log("You played " + playerMove + " while HAL9000 chose " + computerMove);
        console.log("Score: You " + playerWins + " vs. Computer " + computerWins);
    }
    return [playerWins, computerWins];
}

playToFive();

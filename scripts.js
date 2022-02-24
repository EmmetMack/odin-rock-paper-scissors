//PLAN:
// randomly choose what the computer plays
//have the user type in an option
//compare the choices to see who  wins
//output into the console who wins
//allow option to replay, etc

//choose computer's choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

//play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let cleansedPlayer = playerSelection.toLowerCase();
    if (cleansedPlayer === "rock" && computerSelection === "scissors") {
        return 1;
    } else if (cleansedPlayer === "paper" && computerSelection === "rock") {
        return 1;
    } else if (cleansedPlayer === "scissors" && computerSelection === "paper") {
        return 1;
    } else if (computerSelection === "rock" && cleansedPlayer === "scissors") {
        return  0;
    } else if (computerSelection === "paper" && cleansedPlayer === "rock") {
        return 0;
    } else if (computerSelection === "scissors" && cleansedPlayer === "paper") {
        return  0;
    } else {
        return -1;
    }
}

// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//play five rounds of the game
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you want rock, paper, or scissors?");
        if (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase()))  {
            playerSelection = prompt("Please enter one of these values: ", ['rock', 'paper', 'scissors']);
        }
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            playerWins ++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result === 0) {
            console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
            computerWins++;
        } else {
            console.log(`Draw! You both selected ${playerSelection}`);
        }
    }
    if (playerWins > computerWins) {

        console.log(`You won the game! \nPlayer wins: ${playerWins} \nComputer wins ${computerWins}`);
    } else if (computerWins > playerWins) {
        console.log(`You lost the game! \nPlayer wins: ${playerWins} \nComputer wins ${computerWins}`);
    } else {
        console.log(`You tied the game! \nPlayer wins: ${playerWins} \nComputer wins ${computerWins}`);
    }
}
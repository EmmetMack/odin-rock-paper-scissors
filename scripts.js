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
    console.log(choice);
    return choice;
}

//play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let cleansedPlayer = playerSelection.toLowerCase();
    if (cleansedPlayer === "rock" && computerSelection === "scissors") {
        return ("You win! Rock beats Scissors")
    } else if (cleansedPlayer === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats Rock");
    } else if (cleansedPlayer === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beats paper");
    } else if (computerSelection === "rock" && cleansedPlayer === "scissors") {
        return ("You lose! Rock beats Scissors")
    } else if (computerSelection === "paper" && cleansedPlayer === "rock") {
        return ("You lose! Paper beats Rock");
    } else if (computerSelection === "scissors" && cleansedPlayer === "paper") {
        return ("You lose! Scissors beats paper");
    } else {
        return ("DRAW! You both put: ", cleansedPlayer);
    }
}

// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
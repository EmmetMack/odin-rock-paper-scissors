
//choose computer's choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

//play a round of rock paper scissors, call function to update the game
function playRound(e) {
    const playerSelection = e.path[0].getAttribute("value");
    const computerSelection = computerPlay();
    let cleansedPlayer = playerSelection.toLowerCase();
    if (cleansedPlayer === "rock" && computerSelection === "scissors") {
        return updateGame(1, cleansedPlayer, computerSelection);
    } else if (cleansedPlayer === "paper" && computerSelection === "rock") {
        return updateGame(1, cleansedPlayer, computerSelection);
    } else if (cleansedPlayer === "scissors" && computerSelection === "paper") {
        return updateGame(1, cleansedPlayer, computerSelection);
    } else if (computerSelection === "rock" && cleansedPlayer === "scissors") {
        return  updateGame(0, cleansedPlayer, computerSelection);
    } else if (computerSelection === "paper" && cleansedPlayer === "rock") {
        return updateGame(0, cleansedPlayer, computerSelection);
    } else if (computerSelection === "scissors" && cleansedPlayer === "paper") {
        return  updateGame(0, cleansedPlayer, computerSelection);
    } else {
        return updateGame(-1, cleansedPlayer, computerSelection);
    }
}


let playerWins = 0;
let computerWins = 0;
//read result of round and then update dom accordingly
function updateGame(result, playerSelection, computerSelection) {
    
    
    if (result === 1) {
        playerWins ++;
        updateDom(true, playerSelection, computerSelection);
    } else if (result === 0) {
        computerWins++;
        updateDom(false, playerSelection, computerSelection);
    } else {
        updateDom(true, playerSelection, computerSelection, true);
    }

    if (playerWins === 5) {
        won(true);
        return;
    } else if(computerWins === 5) {
        won(false);
        return;
    }
    
   
}

function updateDom(playerWon, playerSelection, computerSelection, draw = false) {
    const resultNode = document.getElementById('result');
    const playerWinsNode = document.getElementById('playerWins');
    const computerWinsNode = document.getElementById('computerWins');
    if (playerWon && !draw) {
        resultNode.innerText = `Round Result: You win! ${playerSelection} beats ${computerSelection}`;
        playerWinsNode.innerText = `Player Wins: ${playerWins}`;
    } else if (!playerWon && !draw) {
       resultNode.innerText = `Round Result: You lose! ${computerSelection} beats ${playerSelection}`;
       computerWinsNode.innerText = `Computer Wins: ${computerWins}`;
    } else {
        resultNode.innerText = `Round Result: Draw! You both selected ${playerSelection}`;
    }
}
//display message saying who won after someone hits 5 points
function won(playerWon) {
    const winMessageNode = document.createElement('h1');
    if (playerWon) {
        winMessageNode.innerText = `You won the game!`
        const resultsDiv = document.querySelector('.results');
        resultsDiv.appendChild(winMessageNode);
    } else {
        winMessageNode.innerText = `You lost the game!`
        const resultsDiv = document.querySelector('.results');
        resultsDiv.appendChild(winMessageNode);
    }
    
}

//add event listeners for the buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener('click', playRound));
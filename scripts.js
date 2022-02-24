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
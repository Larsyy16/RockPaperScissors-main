console.log('hello');

/* part 1 */
let choices = ['rock','paper','scissors'];
function getComputerChoice(arr) {

    ran = Math.floor(Math.random()* arr.length);
    rann = arr[ran];
    return rann;
}

let playerScore= 0;
let computerScore= 0;

    

function singleRound(computerSelection,playerSelection) {
    
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'You lost';
    } else if (computerSelection=='scissors' && playerSelection=='rock') {
        return 'You won';
    } else if (computerSelection=='paper' && playerSelection=='rock') {
        return 'You lost';
    } else if (computerSelection=='scissors' && playerSelection=='paper'){
        return 'You lost';
    } else if (computerSelection=='rock' && playerSelection=='paper'){
        return 'You won';
    } else if (computerSelection== 'paper' && playerSelection=='scissors'){
        return 'You won';
    } else if (playerSelection ==computerSelection) {
        return 'tie';
    } else return 'Please choose rock, paper, or scissors';
        
}

/*New function game that plays 5 rounds
keeps score
reports winner or loser at end*/



function game () {
    for (i=0;i<5;i++){
        let playerSelection = prompt('Choose rock, paper, or scissors.').toLowerCase();
        let computerSelection = getComputerChoice(choices);
        console.log(singleRound(playerSelection,computerSelection));
        let result = singleRound(playerSelection,computerSelection);
        if (result == 'You won') {
            playerScore += 1;
            console.log('Player score:' + playerScore);
        } else if ( result == 'You lost') {
            computerScore += 1;
            console.log('Computer score:'+ computerScore);
        }
}
}
console.log(game());

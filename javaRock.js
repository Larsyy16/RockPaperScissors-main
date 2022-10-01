console.log('hello');

/* part 1 */
let choices = ['rock','paper','scissors'];
function getComputerChoice(arr) {

    ran = Math.floor(Math.random()* arr.length);
    rann = arr[ran];
    return rann;
}


const playerSelection = prompt('Choose rock, paper, or scissors.').toLowerCase();

const computerSelection = getComputerChoice(choices);

function singleRound(computerSelection,playerSelection) {


    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return alert( 'Computer chose rock. You lost.');
    } else if (computerSelection=='scissors' && playerSelection=='rock') {
        return alert('Computer chose scissors. You won');
    } else if (computerSelection=='paper' && playerSelection=='rock') {
        return alert('Computer chose paper. You lose');
    } else if (computerSelection=='scissors' && playerSelection=='paper'){
        return alert('Computer chose scissors. You lost.');
    } else if (computerSelection=='rock' && playerSelection=='paper'){
        return alert('Computer chose rock. You won.');
    } else if (computerSelection== 'paper' && playerSelection=='scissors'){
        return alert('Computer chose paper. You won');
    } else if (playerSelection ==computerSelection) {
        return alert('tie');
    } else return alert('Try again') ;
        
}
   
console.log(singleRound(computerSelection,playerSelection));




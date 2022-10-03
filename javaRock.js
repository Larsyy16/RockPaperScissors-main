console.log('hello');

/* part 1 */
let choices = ['rock','paper','scissors'];
function getComputerChoice(arr) {

    ran = Math.floor(Math.random()* arr.length);
    rann = arr[ran];
    return rann;
}




function singleRound() {
    let playerSelection = prompt('Choose rock, paper, or scissors.').toLowerCase();
    let computerSelection = getComputerChoice(choices);


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
    } else return alert('Please choose rock, paper, or scissors');
        
}

/*New function game that plays 5 rounds
keeps score
reports winner or loser at end*/

for (i=0;i<5;i++)
{
    singleRound(i);
}





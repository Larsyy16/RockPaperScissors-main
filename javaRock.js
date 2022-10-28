console.log('hello branch2');

/* part 1----computer */
let choices = ['rock','paper','scissors'];
function getComputerChoice(arr) {

    ran = Math.floor(Math.random()* arr.length);
    rann = arr[ran];
    return rann;
}


/* player selection */

/* convert playerSelection to array*/

let buttons = Array.prototype.slice.call(document.querySelectorAll("button.gameButton"));

buttons.forEach(function(btn) {
    btn.addEventListener("click",function() {
        let computerSelection = getComputerChoice(choices);
        let result = this.textContent;
        console.log(result);
        console.log(computerSelection);
        if (computerSelection == 'rock' && result==="scissors") {
            alert( 'You lost');
        } else if  (computerSelection=='scissors' && result==="rock") {
            alert( 'You won'); 
        } else if (computerSelection=='paper' && result=='rock') {
            alert( 'You lost');
        } else if (computerSelection=='scissors' && result=='paper'){
            alert( 'You lost');
        } else if (computerSelection=='rock' && result=='paper'){
            alert( 'You won');
        } else if (computerSelection== 'paper' && result=='scissors'){
            alert( 'You won');
        } else if (result ==computerSelection) {
            alert( 'tie');
        } else alert( 'Please choose rock, paper, or scissors');
            
    });
    
    });






/*function singleRound(computerSelection,this.textContext) {
    
    if (computerSelection == 'rock' && this.textContext == 'scissors') {
        alert( 'You lost)';
    } else if (computerSelection=='scissors' && this.textContext=='rock') {
        alert( 'You won');
    } else if (computerSelection=='paper' && this.textContext=='rock') {
        alert( 'You lost)';
    } else if (computerSelection=='scissors' && this.textContext=='paper'){
        alert( 'You lost)';
    } else if (computerSelection=='rock' && this.textContext=='paper'){
        alert( 'You won');
    } else if (computerSelection== 'paper' && this.textContext=='scissors'){
        alert( 'You won');
    } else if (this.textContext ==computerSelection) {
        alert( 'tie';
  )  } else alert( 'Please c)hoose rock, paper, or scissors';
        
}/*


let playerScore= 0;
let computerScore= 0;













/*New function game that plays 5 rounds
keeps score
reports winner or loser at end*/

/*

function game () {
    for (i=0;i<5;i++){
        let this.textContext = prompt('Choose rock, paper, or scissors.').toLowerCase();
        let computerSelection = getComputerChoice(choices);
        console.log(singleRound(this.textContext,computerSelection));
        let result = singleRound(this.textContext,computerSelection);
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
*/
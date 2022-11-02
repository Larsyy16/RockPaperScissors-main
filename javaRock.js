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

const container = document.querySelector('#container');
const para = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const finalResult = document.createElement('p');
let player = 0;
let computer = 0;

buttons.forEach(function(btn) {
    btn.addEventListener("click",function() {
        let computerSelection = getComputerChoice(choices);
        let result = this.textContent;
        if (computerSelection == 'rock' && result==="scissors") {
            para.textContent = 'You lost';
            computer += 1;
            computerScore.textContent = `Computer Score: ${computer}`;
        } else if  (computerSelection=='scissors' && result==="rock") {
            para.textContent = 'You won';
            player += 1;
            playerScore.textContent = `Player Score: ${player}`;
        } else if (computerSelection=='paper' && result=='rock') {
            para.textContent = 'You lost';
            computer += 1;
            computerScore.textContent = `Computer Score: ${computer}`
        } else if (computerSelection=='scissors' && result=='paper'){
            para.textContent = 'You lost';
            computer += 1;
            computerScore.textContent = `Computer Score: ${computer}`
        } else if (computerSelection=='rock' && result=='paper'){
            para.textContent = 'You won';
            player += 1;
            playerScore.textContent = `Player Score: ${player}`;
        } else if (computerSelection== 'paper' && result=='scissors'){
            para.textContent = 'You won';
            player += 1;
            playerScore.textContent = `Player Score: ${player}`;
        } else if (result ==computerSelection) {
            para.textContent = 'Tie';
        } 
        

        
        let elems= document.getElementsByClassName("gameButton");
        for(let i = 0; i < elems.length; i++) {
            if (player==5 || computer==5) {
                elems[i].disabled = true; 
            }
        }

        
    });
});
    container.appendChild(para);
    container.appendChild(playerScore);
    container.appendChild(computerScore);
 
container.appendChild(computerScore);
container.appendChild(playerScore);

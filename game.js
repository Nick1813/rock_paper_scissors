    let playerScore=0;
    let computerScore=0;

    
function getComputerChoice(){
    let comChoice=Math.random();
    if(comChoice<.34){
        return "rock";
    } else if(comChoice <=.67){
        return "paper";
    } else {
        return "scissors";
    }
}



function playRound(playerSelection, computerSelection){
if(playerSelection === computerSelection){
    return "Result is a tie";
} else if(playerSelection==='rock' && computerSelection ==='paper'){
    computerScore++;
    return "You lose, paper beats rock";
} else if(playerSelection==='rock' && computerSelection ==='scissors'){
    playerScore++;
    return "You win, rock beats scissors";
} else if(playerSelection ==='paper' && computerSelection ==='rock'){
    playerScore++;
    return "You win, paper beats rock";
} else if(playerSelection==='paper' && computerSelection ==='scissors'){
    computerScore++;
    return "You lose, scissors beats paper";
} else if(playerSelection==='scissors' && computerSelection==='rock'){
    computerScore++;
    return "You lose, rock beats scissors";
} else if(playerSelection==='scissors' && computerSelection ==='paper'){
    playerScore++;
    return "You win, scissors beats paper";
}
}


/*function game(){
for(let i=0;i<5;i++){
    let playerSelection = prompt("Enter rock, paper, or scissors");
    var computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection,computerSelection));
}
gameOver();
console.log(gameOver(playerScore,computerScore));
}
*/


function gameOver(playerScore,computerScore){
    if(playerScore>computerScore){
    return "You win the game";
} else if(computerScore>playerScore){
    return "You lose the game";
} else{
    return "Game is a tie";
}
}
game();


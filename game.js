const game = ()=>{
    let playerScore =0;
    let computerScore =0;
    let moves=0;
const playGame =()=>{
    const rockBtn =document.querySelector('.rock');
    const scissorsBtn = document.querySelector('.scissors');
    const paperBtn =document.querySelector('.paper');
    const playerOption =[rockBtn,paperBtn,scissorsBtn];
    const comOption =['rock','paper','scissors'];

    playerOption.forEach(option => {
        option.addEventListener('click',function(){
            const movesLeft = document.querySelector('.movesLeft');
            moves++;
            movesLeft.innerText ='Moves Left: '+(10-moves);

            const choiceNumber = Math.floor(Math.random()*3);
            const comChoice = comOption[choiceNumber];

            winner(this.innerText,comChoice);

            if(moves==10){
                gameOver(playerOption,movesLeft);
            }
        })
    })
}

const winner =(player,computer) =>{
const result = document.querySelector('.result');
const playerScoreBoard= document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
player= player.toLowerCase();
computer = computer.toLowerCase();
if(player === computer){
    result.textContent ="Tie";
} else if(player=="rock"){
    if(computer=='paper'){
        result.textContent='You Lose';
        computerScore++;
        computerScoreBoard.textContent=computerScore;
    } else{
        result.textContent='You Win';
        playerScore++;
        playerScoreBoard.textContent=playerScore;
    }
} else if(player=='scissors'){
    if(computer=='rock'){
        result.textContent='You Lose';
        computerScore++;
        computerScoreBoard.textContent=computerScore;
    } else{
        result.textContent='You Win';
        playerScore++;
        playerScoreBoard.textContent=playerScore;
    }
} else if(player=='paper'){
    if(computer=='scissors'){
        result.textContent='You Lose';
        computerScore++;
        computerScoreBoard.textContent=computerScore;
    } else{
        result.textContent='You Win';
        playerScore++;
        playerScoreBoard.textContent=playerScore;
    }
}
}

const gameOver =(playerOption,movesLeft) =>{
    const chooseMove=document.querySelector('.move');
    const result=document.querySelector('.result');
    const reload=document.querySelector('.reload');

    playerOption.forEach(option => {
        option.style.display ='none';
    })
    chooseMove.innerText='Game Over!';
    movesLeft.style.display='none';
    if(playerScore>computerScore){
        result.style.fontSize='2rem';
        result.innerText='You Win';
        result.style.color='green';
    } else if(playerScore<computerScore){
        result.style.fontSize='2rem';
        result.innerText='You Lose';
        result.style.color='red';
    } else{
        result.style.fontSize='2rem';
        result.innerText='Tie';
        result.style.color='black';
    }
    reload.innerText='Restart';
    reload.style.display='flex';
    reload.addEventListener('click',()=>{
        window.location.reload();
    })
}
playGame();
}
game();
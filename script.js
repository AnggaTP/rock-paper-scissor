const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')

let playerScoreInit = 0;
let computerScoreInit = 0;
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')


playerScore.textContent = playerScoreInit;
computerScore.textContent = computerScoreInit


const text = document.querySelector('#result')

function check(){
    if(playerScoreInit == 5){
        location.reload()
    }
    else{
        playerScoreInit += 1;
        playerScore.textContent = playerScoreInit;
    }
}


function getcComputerChoice(){
    const option = ["rock", "paper", "scissor"]
    let min = 0;
    let max = 2;
    let number = Math.floor(Math.random()*(max-min+1)+min);
    return option[number];
}

btnRock.addEventListener('click',function(){
    const computerSelection = getcComputerChoice()
    if(computerSelection == 'rock'){
        text.textContent = `It's A Tie`
    }
    else if(computerSelection == 'paper'){
        text.textContent = `Sorry! Rock Lose Against ${computerSelection}`
        computerScoreInit += 1
        computerScore.textContent = computerScoreInit
    }
    else if(computerSelection == 'scissor'){
        text.textContent = `Congratulation! Rock Win Against ${computerSelection}`
        check()
    }
})
btnPaper.addEventListener('click',function(){
    const computerSelection = getcComputerChoice()
    if(computerSelection == 'paper'){
        text.textContent = `It's A Tie`
    }
    else if(computerSelection == 'scissor'){
        text.textContent = `Sorry! Paper Lose Against ${computerSelection}`
        computerScoreInit += 1
        computerScore.textContent = computerScoreInit
    }
    else if(computerSelection == 'rock'){
        text.textContent = `Congratulation! Paper Win Against ${computerSelection}`
        check()
    }
})
btnScissor.addEventListener('click',function(){
    const computerSelection = getcComputerChoice()
    if(computerSelection == 'scissor'){
        text.textContent = `It's A Tie`
    }
    else if(computerSelection == 'rock'){
        text.textContent = `Sorry! Scissor Lose Against ${computerSelection}`
        computerScoreInit += 1
        computerScore.textContent = computerScoreInit
    }
    else if(computerSelection == 'paper'){
        text.textContent = `Congratulation! Scissor Win Against ${computerSelection}`
        check()
    }
})
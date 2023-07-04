const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')


const text = document.querySelector('#result')


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
    }
    else if(computerSelection == 'scissor'){
        text.textContent = `Congratulation! Rock Win Against ${computerSelection}`
    }
})
btnPaper.addEventListener('click',function(){
    const computerSelection = getcComputerChoice()
    if(computerSelection == 'paper'){
        text.textContent = `It's A Tie`
    }
    else if(computerSelection == 'scissor'){
        text.textContent = `Sorry! Paper Lose Against ${computerSelection}`
    }
    else if(computerSelection == 'rock'){
        text.textContent = `Congratulation! Paper Win Against ${computerSelection}`
    }
})
btnScissor.addEventListener('click',function(){
    const computerSelection = getcComputerChoice()
    if(computerSelection == 'scissor'){
        text.textContent = `It's A Tie`
    }
    else if(computerSelection == 'rock'){
        text.textContent = `Sorry! Scissor Lose Against ${computerSelection}`
    }
    else if(computerSelection == 'paper'){
        text.textContent = `Congratulation! Scissor Win Against ${computerSelection}`
    }
})
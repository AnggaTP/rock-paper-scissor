class Game{
    constructor(playerScoreText, computerScoreText,resultText, popup, popup2){
        this.playerScoreText = playerScoreText;
        this.computerScoreText = computerScoreText;
        this.resultText = resultText;
        this.popup = popup;
        this.popup2 = popup2;
        this.clear();
    }

    clear(){
        this.playerScore = 0;
        this.computerScore = 0;
        this.result = '';
    }

    getComputerChoice(){
        const option = ["rock", "paper", "scissor"]
        let min = 0;
        let max = 2;
        let number = Math.floor(Math.random()*(max-min+1)+min);
        return option[number];
    }

    startRound(playerChoice){
        let computerChoice = this.getComputerChoice()
        const winText = `Congratulations! ${playerChoice} win against ${computerChoice}`
        const loseText = `Sorry! ${playerChoice} lose against ${computerChoice}`
        const tieText = `It's A Tie`
        if(playerChoice.toLowerCase() === computerChoice){
            console.log('tie')
            this.result = tieText.toUpperCase()
        }
        else if(playerChoice.toLowerCase()==='rock'){
            switch(computerChoice){
                case 'paper':
                    console.log('Lose')
                    this.computerScore += 1;
                    this.result = loseText.toUpperCase()
                    break
                case 'scissor':
                    console.log('Win')
                    this.playerScore += 1;
                    this.result = winText.toUpperCase()
                    break
                default:
                    return
            }
        }
        else if(playerChoice.toLowerCase()==='paper'){
            switch(computerChoice){
                case 'rock':
                    console.log('Win')
                    this.playerScore += 1;
                    this.result = winText.toUpperCase()
                    break
                case 'scissor':
                    console.log('Lose')
                    this.computerScore += 1;
                    this.result = loseText.toUpperCase()
                    break
                default:
                    return
            }
        }
        else if(playerChoice.toLowerCase()==='scissor'){
            switch(computerChoice){
                case 'rock':
                    console.log('Lose')
                    this.computerScore += 1;
                    this.result = loseText.toUpperCase()
                    break
                case 'paper':
                    console.log('Win')
                    this.playerScore += 1;
                    this.result = winText.toUpperCase()
                    break
                default:
                    return
            }
        }
        if(this.playerScore === 5 || this.computerScore === 5){
            this.showModal()
        }

    }

    showModal(){
        if(this.playerScore === 5){
            this.popup.style.display = 'block'
            this.clear()
        }
        else if(this.computerScore === 5){
            this.popup2.style.display = 'block'
            this.clear()
        }
        else{
            return
        }
    }

    removeModal(){
        this.popup.style.display = 'none'
        this.popup2.style.display = 'none'
    }

    updateScore(){
        this.playerScoreText.innerHTML = this.playerScore
        this.computerScoreText.innerHTML = this.computerScore
        this.resultText.innerHTML = this.result
    }
}



const choiceBtn = document.querySelectorAll('[btn-choice]');
const resultText = document.querySelector('[result-text]');
const playerScoreText = document.querySelector('[player-score-text]');
const computerScoreText = document.querySelector('[computer-score-text]');
const restart = document.querySelectorAll('[restart-btn]')
const popup = document.querySelector('.popup-container')
const popup2 = document.querySelector('.popup-container2')

const game = new Game(playerScoreText, computerScoreText, resultText, popup, popup2)
choiceBtn.forEach(button => {
    button.addEventListener('click', ()=>{
        game.startRound(button.innerHTML)
        game.updateScore()
    })
})

restart.forEach(button=>{
    button.addEventListener('click',()=>{
        game.removeModal()
    })
})


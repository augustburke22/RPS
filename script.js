const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomnumber = Math.floor(Math.random() * 3) + 1

    if (randomnumber == 1) {
        computerChoice = ' Rock'

    }
    if (randomnumber == 2) {
        computerChoice = ' Paper'

    }
    if (randomnumber == 3) {
        computerChoice = ' Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
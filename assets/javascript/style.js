// Global Variables
let rockItm = document.getElementById('rock')
let paperItm = document.getElementById('paper')
let scissorsItm = document.getElementById('scissors')
let playerChoice = [rockItm, paperItm, scissorsItm]
let choices = ['🤜', '✋', '✌️']
let computerChoice

//Website opens on startpage 
let homePage = document.getElementById('start-page')
homePage.style.display = 'initial'

let gamePage = document.getElementById('main');

if (homePage) {
    gamePage.style.display = 'none'
}

// Gamepage begins on start button and win/lose banner is hidden
function beginGame(e) {
    gamePage.style.display = 'initial'
    homePage.style.display = 'none'
    banner.style.display = 'none' 

    // User can input their name (Optional for player)
    let username = document.getElementById("u-name").value
    document.getElementById("username").innerHTML = username || 'User'
    document.getElementById("user-score").innerHTML = username || 'User'
   
     
}
let startGame = document.getElementById('start-game');
startGame.addEventListener('click', beginGame);


//Game begins when player selects either R, P or S
//When player selects Rock
let chooseRock = rockItm.addEventListener('click', selectRock)
let rock = document.getElementById('user')

function selectRock() {
    rock.innerHTML = choices[0]
    rock.classList.add('displayplayerchoice')
    generateCompChoice()
} 

//When player selects Paper
let choosePaper = paperItm.addEventListener('click', selectPaper)
let paper = document.getElementById('user')

function selectPaper() {
    paper.innerHTML = choices[1]
    paper.classList.add('displayplayerchoice')
    generateCompChoice()
}

//When player selects Scissors 
let chooseScissors = scissorsItm.addEventListener('click', selectScissors)
let scissors = document.getElementById('user')

function selectScissors() {
    scissors.innerHTML = choices[2]
    scissors.classList.add('displayplayerchoice')
    generateCompChoice()
} 

// Computer choice generated randomly
function generateCompChoice() {
    let randomComputerNumber = Math.floor(Math.random() * 3) + 1

    if (randomComputerNumber === 1) {
        computerChoice = choices[0]
    } else if (randomComputerNumber === 2) {
        computerChoice = choices[1]
    } else if (randomComputerNumber === 3) {
        computerChoice = choices[2]
    
    }
    let computerFinalDisplay = document.getElementById('comp')
    computerFinalDisplay.classList.add('displayplayerchoice')
    computerFinalDisplay.innerHTML = computerChoice;

    let playerFinalDisplay = document.getElementById('user')
    revealResult(computerFinalDisplay.innerHTML,playerFinalDisplay.innerHTML);
}; 

let banner = document.getElementById('wl')

//Sequence when player wins, loses or draws
function revealResult(computerFinalDisplay, playerFinalDisplay) {
    if (computerFinalDisplay==playerFinalDisplay) {
        banner.style.display = 'block'
        banner.innerHTML = 'Draw'
    } else {
        if((playerFinalDisplay==choices[0] && computerFinalDisplay==choices[2]) || 
           (playerFinalDisplay==choices[1] && computerFinalDisplay==choices[0]) ||
           (playerFinalDisplay==choices[2] && computerFinalDisplay==choices[1])){
            let playerScore = document.getElementById('u-score').innerHTML
            playerScore++
            document.getElementById('u-score').innerHTML = playerScore
            banner.style.display = 'block'
            banner.innerHTML = 'You Win!'
        }else{
            let computerScore = document.getElementById('c-score').innerHTML
            computerScore++
            document.getElementById('c-score').innerHTML = computerScore
            banner.style.display = 'block'
            banner.innerHTML = 'You Lose!'
        }

    }
}


//Reset scoreboard 
let scoreboard = document.getElementById('score')
let playerScore = document.getElementById('u-score')
let computerScore = document.getElementById('c-score')

document.getElementById('reset').addEventListener('click', reset)
function reset() {
    document.getElementById('c-score').innerHTML=0
    document.getElementById('u-score').innerHTML=0
    banner.style.display = 'none'
} 


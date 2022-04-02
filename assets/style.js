
//Website opens on startpage 
let homePage = document.getElementById('start-page');
homePage.style.display = 'initial';

let gamePage = document.getElementById('main');

if (homePage) {
    gamePage.style.display = 'none';
}

// User can input their name (optional)



// Gamepage begins on start button and win/lose banner is hidden
function beginGame(e) {
    gamePage.style.display = 'initial';
    homePage.style.display = 'none';
    banner.style.display = 'none';
     
}
let startGame = document.getElementById('start-game');
startGame.addEventListener('click', beginGame);

//Game begins when player selects either R, P or S

let rockItm = document.getElementById('rock');
let paperItm = document.getElementById('paper');
let scissorsItm = document.getElementById('scissors');
let playerChoice = [rockItm, paperItm, scissorsItm];
let computerChoice;
let banner = document.getElementById('wl');



//When player selects Rock
let chooseRock = rockItm.addEventListener('click', selectRock);

function selectRock() {
    let rock = document.getElementById('user')
    rock.innerHTML = '🤜';
    rock.classList.add('displayplayerchoice');

    console.log('This is rock');
    generateCompChoice();

}
//When player selects Paper
let choosePaper = paperItm.addEventListener('click', selectPaper);

function selectPaper() {
    let paper = document.getElementById('user')
    paper.innerHTML = '✋';
    paper.classList.add('displayplayerchoice');

    console.log('This is paper');
    generateCompChoice();
}
//When player selects Scissors 
let chooseScissors = scissorsItm.addEventListener('click', selectScissors);

function selectScissors() {
    let scissors = document.getElementById('user')
    scissors.innerHTML = '✌️';
    scissors.classList.add('displayplayerchoice');

    console.log('This is scissors');
    generateCompChoice();
}


function generateCompChoice() {
    let randomComputerNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomComputerNumber);

    if (randomComputerNumber === 1) {
        computerChoice = '🤜';
    } else if (randomComputerNumber === 2) {
        computerChoice = '✋';
    } else if (randomComputerNumber === 3) {
        computerChoice = '✌️';
    
    }
    let computerFinalDisplay = document.getElementById('comp');
    computerFinalDisplay.classList.add('displayplayerchoice')
    computerFinalDisplay.innerHTML = computerChoice;
    revealResult();
}; 



//Sequence when player wins, loses or draws
/*function revealResult() {
    if (computerChoice === selectRock || selectPaper || selectScissors) {
        banner.style.display = 'unset';
        banner.innerText = 'DRAW';
   
    }
}
*/




//Reset scoreboard 

let resetButton = getElementById('reset');

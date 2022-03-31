//Game logic

let gameScore = () => {
    let playerScore = 0;
    let computerScore = 0;
}
//Website opens on startpage 
let homePage = document.getElementById('start-page');
homePage.style.display = 'initial';

let gamePage = document.getElementById('main');

if (homePage) {
    gamePage.style.display = 'none';
}

// User can input their name (optional)



// Game page begins on start button
function beginGame(e) {
    gamePage.style.display = 'initial';
    homePage.style.display = 'none';
}
let startGame = document.getElementById('start-game');
startGame.addEventListener('click', beginGame);

//Game begins when player selects either R, P or S

let rockItm = document.getElementById('rock');
let paperItm = document.getElementById('paper');
let scissorsItm = document.getElementById('scissors');
let playerChoice = [rockItm, paperItm, scissorsItm];
let computerChoice = ['rock', 'paper', 'scissors'];



//When player selects Rock
let chooseRock = rockItm.addEventListener('click', testEvent);

function testEvent() {
    console.log('This is rock');
}


//When player selects Paper
let choosePaper = paperItm.addEventListener('click', testEventTwo);

function testEventTwo() {
    console.log('This is paper');
}


//When player selects Scissors 
let chooseScissors = scissorsItm.addEventListener('click', testEventThree);

function testEventThree() {
    console.log('This is scissors');
}




//Sequence when player wins or loses


//Score tallies.


//Reset scoreboard 

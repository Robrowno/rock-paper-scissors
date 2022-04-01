
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
let chooseRock = rockItm.addEventListener('click', selectRock);

function selectRock() {
    let rock = document.getElementById('user')
    rock.innerHTML = '🤜';
    rock.classList.add('displayplayerchoice');

    console.log('This is rock');

}


//When player selects Paper
let choosePaper = paperItm.addEventListener('click', selectPaper);

function selectPaper() {
    let paper = document.getElementById('user')
    paper.innerHTML = '✋';
    paper.classList.add('displayplayerchoice');

    console.log('This is paper');

}


//When player selects Scissors 
let chooseScissors = scissorsItm.addEventListener('click', selectScissors);

function selectScissors() {
    let scissors = document.getElementById('user')
    scissors.innerHTML = '✌️';
    scissors.classList.add('displayplayerchoice');

    console.log('This is scissors');

}


//Sequence when player wins or loses
//let winner = x;
//let loser = i;

//Score tallies.
//let playerScore;
//let computerScore;

//let gameScore = () => {
  //  let playerScore = 0;
  //  let computerScore = 0;

  //  if (x > i) {

  ///     let playerScore = new playerScore;
  //      new playerScore = ++playerScore;
  //  } else {
  //      let computerScore = new compScore;
  //      new compScore = ++computerScore;
  //  }


//}


//Reset scoreboard 

//let resetButton;
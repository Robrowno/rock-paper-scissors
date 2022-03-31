
let homePage = document.getElementById('start-page');
homePage.style.display = 'initial';

let gamePage = document.getElementById('main');

if (homePage) {
    gamePage.style.display = 'none';
}

function beginGame(e) {
    gamePage.style.display = 'initial';
    homePage.style.display = 'none';
}

let startGame = document.getElementById('start-game');
startGame.addEventListener('click', beginGame);


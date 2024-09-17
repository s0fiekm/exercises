
//vælger computerens valg (0 = sten, 1 = papir og 2 = saks)
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

//array, giver sten, saks og papir et tal 
const choices = ['rock', 'paper', 'scissors'];

const winCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

// sammenligner spillerens valg og bestemmer udfaldet 
function startGame(playerChoice) {
const computerChoice = getComputerChoice();

//vælger html elementerne
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const winText = document.querySelector('#win'); 
const loseText = document.querySelector('#lose'); 
const drawText = document.querySelector('#draw'); 


//nulstiller teksterne
winText.classList.add('hidden');
loseText.classList.add('hidden');
drawText.classList.add('hidden');

//fjerner klasser og tilføjer nye baseret ud fra spillerens valg
player1.className = `player ${choices[playerChoice]}`;
player2.className = `player ${choices[computerChoice]}`;


if (playerChoice === computerChoice) {
    drawText.classList.remove('hidden'); 
}

else if 
(winCombinations[choices[playerChoice]] === choices[computerChoice]) {
    winText.classList.remove('hidden');}
else {
    loseText.classList.remove('hidden');
}
}

document.querySelector('.rock').addEventListener('click', () => startGame(0));
document.querySelector('.paper').addEventListener('click', () => startGame(1));
document.querySelector('.scissors').addEventListener('click', () => startGame(2));








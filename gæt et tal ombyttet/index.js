const startGameButton = document.querySelector(".start-game");
const tooLowButton = document.querySelector(".too-low");
const tooHighButton = document.querySelector(".too-high");
const correctButton = document.querySelector(".correct");
const winGif = document.querySelector("#winGif");
let min = 0;
let max = 100;
let guess;
let guessCount = 0;

startGameButton.addEventListener("click", function () {
  min = 0;
  max = 100;
  guessCount = 0;
  startGame();
});

function startGame() {
  guess = Math.floor((min + max) / 2);
  document.querySelector(
    "#computer-guess"
  ).textContent = `Computeren gætter på ${guess}`;
  guessCount++;
}

tooHighButton.addEventListener("click", function () {
  max = guess - 1;
  startGame();
});

tooLowButton.addEventListener("click", function () {
  min = guess + 1;
  startGame();
});

correctButton.addEventListener("click", function () {
  document.querySelector(
    "#computer-guess"
  ).textContent = `Computeren gættede rigtigt! tallet var ${guess}.`;
  console.log("computeren gættede rigtigt");

  winGif.classList.remove("grow");
  setTimeout(() => {
    winGif.classList.add("grow");
  }, 10);
});

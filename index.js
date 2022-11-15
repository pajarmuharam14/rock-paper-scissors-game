// SELECTOR ELEMENT
const allItem = Array.from(document.querySelectorAll("i"));
const wrapper = document.querySelector("#wrapper");
const afterClick = document.querySelector("#after-click");
const yourPick = document.querySelector(".your-pick");
const computerPick = document.querySelector(".comp-pick");
const result = document.querySelector("#results");
const YourScore = document.querySelector("#your-score");
const compScore = document.querySelector("#comp-score");

// CREATE ELEMENT TITLE
const titleYour = document.createElement("h3");
titleYour.innerHTML = "your pick";
titleYour.style.textTransform = "uppercase";

const titleComp = document.createElement("h3");
titleComp.innerHTML = "computer pick";
titleComp.style.textTransform = "uppercase";

// CREATE OBJECT
const gameItem = {
  rock: `<i class="fa-regular fa-hand-back-fist fa-6x" id="rock"></i>`,
  scissors: `<i class="fa-regular fa-hand-scissors fa-6x" id="scissors"></i>`,
  paper: `<i
  class="fa-regular fa-hand fa-6x"
  id="paper"></i>`,
};

// GLOBAL VARIABLE
let yourChoice;
let compChoice;
let userScore = 0;
let computerScore = 0;
let displayResult;
allItem.map((items) => {
  items.addEventListener("click", (e) => {
    if (e.target.id === "rock") {
      yourChoice = yourPick.innerHTML = gameItem.rock;
      yourPick.appendChild(titleYour);
      titleYour.style.color = "red";
      getComputerPick();
      getResult();
      getTurn();
    } else if (e.target.id === "scissors") {
      yourChoice = yourPick.innerHTML = gameItem.scissors;
      yourPick.appendChild(titleYour);
      titleYour.style.color = "blue";
      getComputerPick();
      getResult();
      getTurn();
    } else if (e.target.id === "paper") {
      yourChoice = yourPick.innerHTML = gameItem.paper;
      yourPick.appendChild(titleYour);
      titleYour.style.color = "green";
      getComputerPick();
      getResult();
      getTurn();
    }
  });
});

const getComputerPick = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  setTimeout(() => {
    if (randomNumber === 1) {
      compChoice = computerPick.innerHTML = gameItem.rock;
      computerPick.appendChild(titleComp);
      titleComp.style.color = "red";
    }
    if (randomNumber === 2) {
      compChoice = computerPick.innerHTML = gameItem.scissors;
      computerPick.appendChild(titleComp);
      titleComp.style.color = "blue";
    }
    if (randomNumber === 3) {
      compChoice = computerPick.innerHTML = gameItem.paper;
      computerPick.appendChild(titleComp);
      titleComp.style.color = "green";
    }
  }, 2000);
};

const getTurn = () => {
  const arrItem = [gameItem.rock, gameItem.scissors, gameItem.paper];
  let i = 0;
  const start = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - start > 2000) {
      clearInterval;
      return;
    }
    computerPick.innerHTML = arrItem[i++];
    if (i == arrItem.length) i = 0;
  }, 100);
};

const getResult = () => {
  setTimeout(() => {
    if (yourChoice == gameItem.paper && compChoice == gameItem.rock) {
      displayResult = result.innerHTML = "you win!";
      userScore += 1;
      YourScore.innerHTML = userScore;
    } else if (yourChoice == gameItem.scissors && compChoice == gameItem.rock) {
      displayResult = result.innerHTML = "you lose!";
      computerScore += 1;
      compScore.innerHTML = computerScore;
    } else if (yourChoice == gameItem.scissors && compChoice == gameItem.paper) {
      displayResult = result.innerHTML = "you win!";
      userScore += 1;
      YourScore.innerHTML = userScore;
    } else if (yourChoice == gameItem.rock && compChoice == gameItem.paper) {
      displayResult = result.innerHTML = "you lose!";
      computerScore += 1;
      compScore.innerHTML = computerScore;
    } else if (yourChoice == gameItem.rock && compChoice == gameItem.scissors) {
      displayResult = result.innerHTML = "you win!";
      userScore += 1;
      YourScore.innerHTML = userScore;
    } else if (yourChoice == gameItem.paper && compChoice == gameItem.scissors) {
      displayResult = result.innerHTML = "you lose!";
      computerScore += 1;
      compScore.innerHTML = computerScore;
    } else {
      displayResult = result.innerHTML = "its a draw!";
    }
  }, 2000);
};

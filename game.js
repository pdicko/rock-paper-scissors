// game.js

window.onload = function() {

  const playButton = document.querySelector('.buttons > .play');
  playButton.addEventListener('click', loadGame, {once: true});
}

let playerScore = 0;
let computerScore = 0;


function loadGame() {

  const scoreBox = document.querySelector('.score-box');
  const playButton = document.querySelector('.buttons > .play');

  scoreBox.classList.toggle('hidden');
  playButton.classList.toggle('hidden');

  loadRound();
}

function loadRound() {

  const gameButtons = document.querySelectorAll('.buttons > .game');
  
  gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const playerChoice = e.target.id;
      playRound(playerChoice);
    })
  });

  toggleGameButtons();
}

function toggleGameButtons() {
  const gameButtons = document.querySelectorAll('.buttons > .game');
  gameButtons.forEach((button) => {button.classList.toggle('hidden')});
}

function getComputerChoice () {

  let choices = ['rock', 'paper', 'scissors'];
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}

function playRound(playerChoice) {
  
  toggleGameButtons();

  const player = playerChoice;
  const computer = getComputerChoice();
  const selections = [player, computer];

  let result = "";
  let message = "";


  if (player === computer) {
      result = "draw";
      message = `It's a draw. You both played ${player}`;

  } else {

      let selectionsAsString = selections.toString();

      switch (selectionsAsString) {
        case "rock,scissors":
        case "paper,rock":
        case "scissors,paper":
          result = "win";
          message = `You win! ${player} beats ${computer}`;
          break;

        case "rock,paper":
        case "paper,scissors":
        case "scissors,rock":
          result = "lose";
          message = `You lose! ${computer} beats ${player}`;
          break;
    
      default:
        break;
    }
  }

  updateGame(result);
  displayResults(message);
}

function displayResults(message) {

  const resultsDiv = document.querySelector('.results');
  const resultMessage = document.querySelector('.results > .message');
  const nextRoundButton = document.querySelector('.results > .next-round');

  resultMessage.textContent = message;

  nextRoundButton.addEventListener('click', reset);

  resultsDiv.classList.toggle('hidden');
}

function reset() {
  const resultsDiv = document.querySelector('.results');
  resultsDiv.classList.toggle('hidden');

  loadRound();
}

function updateGame (result) {

  let roundResult = result;

  switch (roundResult) {
    case "win":
      ++playerScore;
      break;
    
    case "lose":
      ++computerScore;
      break;

    case "draw":
    default:
    break;
  }

  console.log(roundResult);
  console.log(playerScore);
  console.log(computerScore);
}
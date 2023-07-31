// game.js

window.onload = function() {

  const playButton = document.querySelector('.buttons > .play');
  playButton.addEventListener('click', loadGame);
}

function loadGame() {

  const scoreBox = document.querySelector('.score-box');
  const playButton = document.querySelector('.buttons > .play');
  

  scoreBox.classList.toggle('hidden');
  playButton.classList.toggle('hidden');
  toggleGameButtons()

  game();

}

function toggleGameButtons() {

  const gameButtons = document.querySelectorAll('.buttons > .game');

  gameButtons.forEach((button) => {
    button.classList.toggle('hidden');
  })

}


function getComputerChoice () {

  let choices = ['rock', 'paper', 'scissors'];
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}

function playRound() {

  let player = '';

  const gameButtons = document.querySelectorAll('.buttons > .game');
  gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      player = e.target.id;
    })
  })

  const computer = getComputerChoice();
  // const player = playerSelection;
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

    console.log(player);
    console.log(computer);
  }


}

function displayResults(result, message) {

  const resultsDiv = document.querySelector('.results');
  const resultMessage = document.createElement('p');
  resultMessage.classList.toggle('message');

  resultMessage.textContent = message;

  resultsDiv.appendChild(resultMessage);
  resultsDiv.classList.toggle('hidden');
}

function game () {

  let playerScore = 0;
  let computerScore = 0;
  // let playerSelection = '';
  let roundResult = '';

  // const gameButtons = document.querySelectorAll('.buttons > .game');
  // gameButtons.forEach((button) => {
  //   playerSelection = button.addEventListener('click', (e) => {
  //     playRound(e.target.id);
  //   })
  // })

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

  // for (let i  = 1; i <= 5; i++) {
  //   const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  //   console.log(playerSelection);
  //   const computerSelection = getComputerChoice();
  //   let roundData = playRound(playerSelection, computerSelection);

  //   switch (roundData.result) {
  //     case "win":
  //       ++wins;
  //       break;
      
  //     case "lose":
  //       ++losses;
  //       break;

  //     case "draw":
  //     default:
  //     break;
  //   }

  //   console.log(roundData.message);
  // }
}
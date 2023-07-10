// game.js

function getComputerChoice () {

  let choices = ['rock', 'paper', 'scissors'];
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}

function playRound(playerSelection, computerSelection) {

  let selections = [playerSelection.toLowerCase(), computerSelection];
  let player = selections[0];
  let computer = selections[1];
  let result = "";
  let message = "";
  

  if (player === computer) {
      result = "draw";
      message = `It's a draw. You both played ${player}`;

  } else {

      let selectionsAsString = selections.toString();
      console.log(selectionsAsString);
      switch (selectionsAsString) {
        case ['rock', 'scissors']:
        case ['paper', 'rock']:
        case ['scissors', 'paper']:
          result = "win";
          message = `You win! ${player} beats ${computer}`;
          break;

        case ['rock', 'paper']:
        case ['paper', 'scissors']:
        case ['scissors', 'rock']:
          result = "lose";
          message = `You lose! ${computer} beats ${player}`;
          break;
    
      default:
        console.log("no dice bro");
        break;
    }
  }
  console.log(message);
  console.log(result);
  return message;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// function game () {

//   for (let i  = 1; i <= 5; i++) {


//   }
// }
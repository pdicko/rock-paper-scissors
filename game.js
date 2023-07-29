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

  const roundData = {result, message};

  return roundData;
}


function game () {

  let wins = 0;
  let losses = 0;

  const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  console.log(playerSelection);
  const computerSelection = getComputerChoice();
  let roundData = playRound(playerSelection, computerSelection);

  switch (roundData.result) {
    case "win":
      ++wins;
      break;
    
    case "lose":
      ++losses;
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
  
  console.log("FINAL SCORE");
  console.log(`You: ${wins}`);
  console.log(`Computer: ${losses}`);
}

game();
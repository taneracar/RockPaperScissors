let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loses: 0,
  ties: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "Rock") {
      result = " You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  }
  if (result === "You win") {
    score.win++;
  } else if (result === "You lose") {
    score.loses++;
  } else if (result === "Tie") {
    score.ties++;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateElement();
  document.querySelector(".js-lose").innerHTML = result;
  document.querySelector(".js-plays").innerHTML = ` You
      <img src="${playerMove}-emoji.png" alt="rock" class="move-icon" />
      <img src="${computerMove}-emoji.png" alt="rock" class="move-icon" />
      Computer`;

  /*alert(
      `You picked ${playerMove}. Computer Picked ${computerMove}. ${result}
        Wins: ${score.win}, Loses:${score.loses}, Ties:${score.ties}
      `
    );*/
}
function reset() {
  score.win = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateElement();
  document.querySelector(".js-lose").innerHTML = "";
  document.querySelector(".js-plays").innerHTML = ``;
}

updateElement();
function updateElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.win}, Loses:${score.loses}, Ties:${score.ties}`;
}

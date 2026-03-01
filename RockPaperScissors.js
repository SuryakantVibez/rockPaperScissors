/*
===========================
  + Rock Paper Scissors + 
===========================
*/

function getBotChoice() {
  BotChoice = Math.random();

  if (BotChoice >= 0 && BotChoice <= 0.33) {
    BotChoice = "r";
  } else if (BotChoice >= 0.33 && BotChoice < 0.66) {
    BotChoice = "p";
  } else if (BotChoice >= 0.66 && BotChoice < 1) {
    BotChoice = "s";
  }
  document.getElementById("botChoice").textContent =
    "Bot chooses: " + BotChoice;
}

getBotChoice();

document.getElementById("rockBtn").onclick = function () {
  UserChoice = "r";
  printResult();
  getBotChoice();
};

document.getElementById("paperBtn").onclick = function () {
  UserChoice = "p";
  printResult();
  getBotChoice();
};

document.getElementById("scissorBtn").onclick = function () {
  UserChoice = "s";
  printResult();
  getBotChoice();
};

function printResult() {
  if (UserChoice == BotChoice) {
    document.getElementById("Result").textContent = "Ah... Thats a draw...";
  }
  // Rock-Paper possibilites
  else if (UserChoice == "r" && BotChoice == "p") {
    document.getElementById("Result").textContent = "Bot won!";
  } else if (UserChoice == "p" && BotChoice == "r") {
    document.getElementById("Result").textContent = "You won!";
  }
  // Paper-scissors possibilities
  else if (UserChoice == "p" && BotChoice == "s") {
    document.getElementById("Result").textContent = "Bot won!";
  } else if (UserChoice == "s" && BotChoice == "p") {
    document.getElementById("Result").textContent = "You won!";
  }
  // Scissors-rock possibilities
  else if (UserChoice == "s" && BotChoice == "r") {
    document.getElementById("Result").textContent = "Bot won!";
  } else if (UserChoice == "r" && BotChoice == "s") {
    document.getElementById("Result").textContent = "You won!";
  }
}

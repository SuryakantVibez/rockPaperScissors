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
  botChoice = document.getElementById("botChoice");
  botChoice.textContent = "Bot chooses: " + BotChoice;
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

const result = document.getElementById("Result");

function printResult() {
  // Winning possiblity
  if (
    (UserChoice == "r" && BotChoice == "s") ||
    (UserChoice == "p" && BotChoice == "r") ||
    (UserChoice == "s" && BotChoice == "p")
  ) {
    result.textContent = "You Won!";
  }

  // Loosing possiblity
  if (
    (BotChoice == "r" && UserChoice == "s") ||
    (BotChoice == "p" && UserChoice == "r") ||
    (BotChoice == "s" && UserChoice == "p")
  ) {
    result.textContent = "Bot Won!";
  }
}

const toggleBtn = document.getElementById("toggleBtn");
const toggleSlider = document.getElementById("toggleSlider");

toggleBtn.onclick = function toggleSliding() {
  toggleBtn.classList.toggle("toggleBtnOn");
  toggleSlider.classList.toggle("toggleSliderOn");
  botChoice.classList.toggle("cheatsOn");
};

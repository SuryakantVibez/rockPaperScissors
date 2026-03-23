// Bot choosing

let botChoice = null;

function getBotChoice() {
  botChoice = Math.floor(Math.random() * 3);
  // console.log(botChoice);
  if (botChoice === 0) {
    botChoice = "rock";
  } else if (botChoice === 1) {
    botChoice = "paper";
  } else if (botChoice === 2) {
    botChoice = "scissor";
  }
  console.log("Bot chooses " + botChoice);
  getResult();
}

let userChoice = null;

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");

i = 0;

// User choosing

rockBtn.onclick = function () {
  userChoice = "rock";
  console.log("User chooses " + userChoice);
  getBotChoice();
};

paperBtn.onclick = function () {
  userChoice = "paper";
  console.log("User chooses " + userChoice);
  getBotChoice();
};

scissorBtn.onclick = function () {
  userChoice = "scissor";
  console.log("User chooses " + userChoice);
  getBotChoice();
};

function getResult() {
  // Winning cases
  if (
    (userChoice == "rock" && botChoice == "scissor") ||
    (userChoice == "paper" && botChoice == "rock") ||
    (userChoice == "scissor" && botChoice == "paper")
  ) {
    console.log("user won");
  }
  // Loosing cases
  if (
    (botChoice == "rock" && userChoice == "scissor") ||
    (botChoice == "paper" && userChoice == "rock") ||
    (botChoice == "scissor" && userChoice == "paper")
  ) {
    console.log("bot won");
  }
  // Draw case
  if (botChoice == userChoice) {
    console.log("Draw");
  }
}

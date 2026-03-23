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
}

getBotChoice();
// console.log(botChoice);

let userChoice = null;

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");

i = 0;

// User choosing

rockBtn.onclick = function () {
  userChoice = "Rock";
  console.log(userChoice);
};

paperBtn.onclick = function () {
  userChoice = "Paper";
  console.log(userChoice);
};

scissorBtn.onclick = function () {
  userChoice = "Scissor";
  console.log(userChoice);
};

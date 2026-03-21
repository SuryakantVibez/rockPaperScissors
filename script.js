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
console.log(botChoice);

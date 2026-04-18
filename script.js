//Cheats function

let cheats = 0;

const cheatsSlider = document.getElementById("cheatsSlider");
const cheatsBtn = document.getElementById("cheatsBtn");
cheatsBtn.onclick = function () {
  if (cheats == 0) {
    cheats = 1;
    cheatsSlider.classList.toggle("cheatsOn");
    cheatsEngine();
  } else if (cheats == 1) {
    cheats = 0;
    cheatsSlider.classList.toggle("cheatsOn");
  }
};

let cheatsBotChoice;
function cheatsEngine() {
  cheatsBotChoice = Math.floor(Math.random() * 3);
  if (cheatsBotChoice === 0) {
    cheatsBotChoice = "Rock";
  }
  if (cheatsBotChoice === 1) {
    cheatsBotChoice = "Paper";
  }
  if (cheatsBotChoice === 2) {
    cheatsBotChoice = "Scissor";
  }
  // alert(cheatsBotChoice);
  getResult();
}

// Bot choosing

let botChoice;

function getBotChoice() {
  botThink();
  botChoice = Math.floor(Math.random() * 3);

  setTimeout(() => {
    if (cheats === 0) {
      if (botChoice === 0) {
        botChoice = "Rock";
      } else if (botChoice === 1) {
        botChoice = "Paper";
      } else if (botChoice === 2) {
        botChoice = "Scissor";
      }
    }
    if (cheats === 1) {
      botChoice = cheatsBotChoice;
    }
    getResult();
    stopThinking();
  }, 2000);
}

let gameResult = document.getElementById("gameResult");
let userChoice;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

// User choosing
gameResult.classList.toggle = "gameResultActive";
const userChoiceCard = document.getElementById("userChoice");

let isBotThinking = 0;

rockBtn.onclick = function () {
  if (isBotThinking == 0) {
    userChoice = "Rock";
    userChoiceCard.textContent = "🪨";
    rockBtn.classList.add("btnClicked");
    setTimeout(() => {
      rockBtn.classList.remove("btnClicked");
    }, 2000);
    getBotChoice();
  }
};

paperBtn.onclick = function () {
  if (isBotThinking == 0) {
    userChoice = "Paper";
    userChoiceCard.textContent = "📄";
    paperBtn.classList.add("btnClicked");
    setTimeout(() => {
      paperBtn.classList.remove("btnClicked");
    }, 2000);
    getBotChoice();
  }
};

scissorBtn.onclick = function () {
  if (isBotThinking == 0) {
    userChoice = "Scissor";
    userChoiceCard.textContent = "✂️";
    scissorBtn.classList.add("btnClicked");
    setTimeout(() => {
      scissorBtn.classList.remove("btnClicked");
    }, 2000);
    getBotChoice();
  }
};

// Game engine

let userScore = 0;
let botScore = 0;

function getResult() {
  // Winning cases
  if (
    (userChoice == "Rock" && botChoice == "Scissor") ||
    (userChoice == "Paper" && botChoice == "Rock") ||
    (userChoice == "Scissor" && botChoice == "Paper")
  ) {
    userScore = userScore + 1;
    document.getElementById("userScore").textContent = userScore;
    gameResult.textContent =
      "You won! " + userChoice + " beats " + botChoice + ".";
    gameResult.classList.toggle = "gameResultActive";
  }
  // Loosing cases
  if (
    (botChoice == "Rock" && userChoice == "Scissor") ||
    (botChoice == "Paper" && userChoice == "Rock") ||
    (botChoice == "Scissor" && userChoice == "Paper")
  ) {
    botScore = botScore + 1;
    document.getElementById("botScore").textContent = botScore;
    gameResult.textContent =
      "You lost... " + botChoice + " beats " + userChoice + ".";
    gameResult.classList.toggle = "gameResultActive";
  }
  // Draw case
  if (botChoice == userChoice) {
    gameResult.textContent = "Welp! That's a draw.";
    gameResult.classList.toggle = "gameResultActive";
  }

  if (cheats === 1) {
    gameResult.textContent = "Bot will choose " + cheatsBotChoice;
    gameResult.classList.toggle = "gameResultActive";
  }
}

// Bot thinking animation

let thinkingInterval;
let thinkingText = document.getElementById("botThinking");
const emojis = ["🪨...3", "📄...2", "✂️...1"];
function botThink() {
  isBotThinking = 1;
  thinkingText.classList = "botThinking";

  let i = 0;

  thinkingInterval = setInterval(() => {
    thinkingText.textContent = "Bot is thinking..." + emojis[i];
    i++;
    i = i % 3;
  }, 500);
}

function stopThinking() {
  clearInterval(thinkingInterval);
  thinkingText.textContent = "Bot chose " + botChoice + "!";
  thinkingText.classList = "botDecision";
  isBotThinking = 0;
  cheatsEngine();
}

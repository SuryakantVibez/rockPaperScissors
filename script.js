// Bot choosing

let botChoice = null;

function getBotChoice() {
  botThink();
  botChoice = Math.floor(Math.random() * 3);
  // console.log(botChoice);

  setTimeout(() => {
    if (botChoice === 0) {
      botChoice = "rock";
    } else if (botChoice === 1) {
      botChoice = "paper";
    } else if (botChoice === 2) {
      botChoice = "scissor";
    }
    console.log("Bot chooses " + botChoice);
    getResult();
    stopThinking();
  }, 2000);
}

let userChoice;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

// User choosing

const userChoiceCard = document.getElementById("userChoice")

let isBotThinking = 0;

rockBtn.onclick = function () {
  if (isBotThinking == 0) {
    userChoice = "rock";
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
    userChoice = "paper";
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
    userChoice = "scissor";
    userChoiceCard.textContent = "✂️";
    scissorBtn.classList.add("btnClicked");
    setTimeout(() => {
      scissorBtn.classList.remove("btnClicked");
    }, 2000);
    getBotChoice();
  }
};

//Cheats function

let cheats = 0;

const cheatsSlider = document.getElementById("cheatsSlider");
const cheatsBtn = document.getElementById("cheatsBtn");
cheatsBtn.onclick = function(){
  if (cheats == 0) {
    cheats = 1;
    cheatsSlider.classList.toggle("cheatsOn");
  }
  else{
    cheats = 0
    cheatsSlider.classList.toggle("cheatsOn");
  }
  console.log(cheats)
}

let userScore = 0;
let botScore = 0;

function getResult() {
  // Winning cases
  if (
    (userChoice == "rock" && botChoice == "scissor") ||
    (userChoice == "paper" && botChoice == "rock") ||
    (userChoice == "scissor" && botChoice == "paper")
  ) {
    if (cheats == 0) {
      userScore = userScore + 1;
      document.getElementById("userScore").textContent = userScore;
    }
  }
  // Loosing cases
  if (
    (botChoice == "rock" && userChoice == "scissor") ||
    (botChoice == "paper" && userChoice == "rock") ||
    (botChoice == "scissor" && userChoice == "paper")
  ) {
    if (cheats == 0) {
      botScore = botScore + 1;
      document.getElementById("botScore").textContent = botScore;
    }
  }
  // Draw case
  if (botChoice == userChoice) {
    console.log("Draw");
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
}

/*
===========================
  + Rock Paper Scissors + 
===========================
*/

// Bot choosing an option

BotChoice = Math.random();

if (BotChoice >= 0 && BotChoice <= 0.33) {
  BotChoice = "r";
} else if (BotChoice >= 0.33 && BotChoice < 0.66) {
  BotChoice = "p";
} else if (BotChoice >= 0.66 && BotChoice < 1) {
  BotChoice = "s";
}

console.log("Bot chooses " + BotChoice); // Testing

// Player deciding an option

let UserChoice = null;

document.getElementById("rockBtn").onclick = function () {
  UserChoice = "r";
  console.log(UserChoice);
  printResult();
};

document.getElementById("paperBtn").onclick = function () {
  UserChoice = "p";
  console.log(UserChoice);
  printResult();
};

document.getElementById("scissorBtn").onclick = function () {
  UserChoice = "s";
  console.log(UserChoice);
  printResult();
};

console.log("User chooses " + UserChoice); // Testing

// Check if user's option actually makes sense

function printResult() {
  
  if (UserChoice == BotChoice) {
    console.log("Ah... Thats a draw...");
  }
  // Rock-Paper possibilites
  else if (UserChoice == "r" && BotChoice == "p") {
    console.log("Bot Won!");
  } else if (UserChoice == "p" && BotChoice == "r") {
    console.log("You Won!");
  }
  // Paper-scissors possibilities
  else if (UserChoice == "p" && BotChoice == "s") {
    console.log("Bot Won!");
  } else if (UserChoice == "s" && BotChoice == "p") {
    console.log("You Won!");
  }
  // Scissors-rock possibilities
  else if (UserChoice == "s" && BotChoice == "r") {
    console.log("Bot Won!");
  } else if (UserChoice == "p" && BotChoice == "r") {
    console.log("You Won!");
  }
}

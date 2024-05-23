"use strict";

var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome in Rock, Paper or Scissor game');
var UserChoice;
var computerChoice;

function randomComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
}

var userChoice;
var computerChoiceArray = [1, 2, 3];

function askQuestion() {
  readline.question('-For Rope type 1 \n-For Paper type 2 \n-For Scissor type 3 ? \n', function (input) {
    userChoice = Number(input);

    if (!computerChoiceArray.includes(userChoice)) {
      console.log('RTFO (Read The Fucking Order) Please enter 1, 2, or 3 !!!!!');
      askQuestion();
    } else {
      game(userChoice);
    }
  });
}

function game(userChoice) {
  randomComputerChoice();
  console.log("You've chosen a fucking : ".concat(['Rock', 'Paper', 'Scissors'][userChoice - 1]));
  console.log("The computer has chosen a fucking : ".concat(['Rock', 'Paper', 'Scissors'][computerChoice - 1]));

  if (userChoice === computerChoice) {
    console.log("It's a fucking Draw, play again ");
    askQuestion();
  } else if (userChoice === 1 && computerChoice === 3 || userChoice === 2 && computerChoice === 1 || userChoice === 3 && computerChoice === 2) {
    console.log('Congratulations, You won! You\'re the best fucking player that I\'ve ever seen !!! ');
    readline.question("Do you want to play again ? (y/n)\n", function (text) {
      if (text === "y") {
        askQuestion();
      } else if (text === 'n') readline.close();
    });
  } else {
    console.log('You lose');
    readline.question("Do you want to play again? (y/n)\n", function (text) {
      if (text === "y") {
        askQuestion();
      } else if (text === 'n') readline.close();
    });
  }
}

askQuestion();
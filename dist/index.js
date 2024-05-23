"use strict";
exports.__esModule = true;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome in Rock, Paper or Scissor game');
var randomNumber;
var randomIaChoice;
function generateChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        randomIaChoice === "Rock";
    }
    if (randomNumber === 2) {
        randomIaChoice === "Paper";
    }
    if (randomNumber === 3) {
        randomIaChoice === "Scissor";
    }
    console.log(randomIaChoice);
}
generateChoice();
var userInput;
function askQuestion() {
    readline.question('Rock, Paper, Scissor ?\n', function (input) {
        if (userInput === "Rock" && randomIaChoice == "Scissor") {
            console.log('You loose');
            askQuestion();
        }
        if (userInput === "Paper" && randomIaChoice == "Scissor") {
            console.log('You loose');
            askQuestion();
        }
        if (userInput === "Scissor" && randomIaChoice == "Rock") {
            console.log('You loose');
            askQuestion();
        }
        if (userInput === "Scissor" && randomIaChoice == "Paper") {
            console.log('you win');
            askQuestion();
        }
        if (userInput === randomNumber) {
            console.log('You Won ! ');
            readline.question("Play again? (y/n)\n", function (text) {
                if (text === "y") {
                    generateRandomNumber();
                    askQuestion();
                }
                if (text === 'n')
                    readline.close();
            });
        }
        if (userInput === undefined) {
            console.log('Please enter a number');
            askQuestion();
        }
    });
}
;

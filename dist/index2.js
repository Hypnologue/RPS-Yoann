"use strict";
exports.__esModule = true;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome in Rock, Paper or Scissor game');
var randomNumber;
function generateChoice() {
    randomNumber = Math.floor(Math.random() * 3);
}
generateChoice();
var randomRPS;
function convertIaChoice() {
    if (randomNumber === 1) {
        randomRPS === "Rock";
    }
    ;
    if (randomNumber === 2) {
        randomRPS === "Paper";
    }
    ;
    if (randomNumber === 3) {
        randomRPS === "Scissor";
    }
    console.log(randomRPS);
}
generateChoice();
var userInput;
function askQuestion() {
    readline.question('Choose a number :\n- For Rope type 1 \n- For Paper type 2 \n- For Scissor type 3 \n', function (input) {
        userInput = Number(input);
        if (userInput === randomNumber) {
            convertIaChoice();
            console.log('Draw, try again \n');
            generateChoice();
            askQuestion();
        }
        if (userInput === 1 && randomNumber === 3) {
            convertIaChoice();
            console.log('Congratulations, You won \n');
            readline.question("Do you want to play again? (y/n)\n", function (text) {
                if (text === "y") {
                    generateChoice();
                    askQuestion();
                }
                if (text === 'n')
                    readline.close();
            });
        }
        if (userInput === 3 && randomNumber === 2) {
            convertIaChoice();
            console.log('Congratulations, You won \n');
            readline.question("Do you want to play again? (y/n)\n", function (text) {
                if (text === "y") {
                    generateChoice();
                    askQuestion();
                }
                if (text === 'n')
                    readline.close();
            });
        }
        if (userInput === 2 && randomNumber === 1) {
            convertIaChoice();
            console.log('Congratulations, You won \n');
            readline.question("Do you want to play again? (y/n)\n", function (text) {
                if (text === "y") {
                    generateChoice();
                    askQuestion();
                }
                if (text === 'n')
                    readline.close();
            });
        }
        if (userInput === undefined) {
            console.log('Please enter Rope, Paper or Scissor');
            askQuestion();
        }
        else {
            convertIaChoice();
            console.log('you loose');
            readline.question("Do you want to play again? (y/n)\n", function (text) {
                if (text === "y") {
                    generateChoice();
                    askQuestion();
                }
                if (text === 'n')
                    readline.close();
            });
        }
    });
}
generateChoice();
askQuestion();

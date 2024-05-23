"use strict";
exports.__esModule = true;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome in Rock, Paper or Scissor game');
var choice = { "1": "Rock", "2": "Paper", "3": "Scissor" };
function computerChoice() {
    var choix = ["Rock", "Paper", "Scissor"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choix[randomNumber];
}
var userChoice = "";
function askQuestion() {
    readline.question('Rope, Paper or Scissor ?', function (input) {
        userChoice = (input);
    });
}
function compare(userChoice) {
    var computer = computerChoice();
    switch (userChoice + computer) {
        case "RockPaper":
        case "PaperRock":
        case "ScissorPaper":
            console.log('you win');
            break;
        case "ScissorRock":
        case "RockPaper":
        case "PaperScissor":
            console.log('you loose');
            break;
        case "PaperPaper":
        case "RockRock":
        case "ScissorScissor":
            console.log("It's a Draw, play againt");
            break;
    }
}
computerChoice();
askQuestion();
compare(userChoice);

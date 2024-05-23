"use strict";
exports.__esModule = true;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var possibleChoices = ["Pierre", "Papier", 'ciseaux'];
var IAChoice;
function generateIAChoice() {
    IAChoice = possibleChoices[Math.floor(Math.random() * 3)];
}
function play() {
    readline.question('Pierre, feuille, ciseaux ! (Entrez pierre, feuille, ciseaux!'), function (input) {
        var userInput = input.toLowerCase();
        if (userInput === IAChoice) {
            console.log("L'IA a choisi" + IAChoice);
            console.log("Egalité");
            play();
        }
        if ((userInput === "ciseaux" && IAChoice === "papier")
            || (userInput === "papier" && IAChoice === "pierre")
            || (userInput === "pierre" && IAChoice === "ciseaux")) {
            console.log("L'IA a choisi" + IAChoice);
            console.log("Tu as gagné");
        }
        else {
            console.log("L'IA a choisi" + IAChoice);
            console.log("Tu as perdu");
        }
    };
}
function playAgain() {
    readline.question('Voulez vous rejouer ? oui/non'), function (input) {
        if (input === "oui") {
            play();
        }
        else {
            readline.close();
        }
    };
}

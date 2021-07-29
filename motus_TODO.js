// Motus 
// mot mystere, 5 lettres, on connait la premiere lettre

// 6 tentatives

var prompt = require("prompt");
var colors = require("colors");

var mysteryWord = "BOTTE";
var mysteryArray = mysteryWord.split("");


var schemaJSON = {
    name: "word",
    description: "Guess the mystery word",
    type: "string",
    // pattern: /a-zA-Z/,
    // message: "This is not a word",
    // required: true

}

// Fonction principale

function promptGetWord() {
    prompt.get(schemaJSON, function (err, result) {
        let word = result.word.toUpperCase();
        let wordArray = word.split("");
        console.log("result : " + word);

        if (word === mysteryWord) {
            console.log("You win !!!")
            return
        }

        


    })
}

// Boucle : 

function guessWord() {
    let i = 0;
    while (i <= 6) {
        promptGetWord()
        i++
    }
    console.log("The game is lost")
    return;
}

prompt.start();

// guessWord();

promptGetWord();


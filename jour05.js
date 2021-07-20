// Modules import 

const {
    addition,
    multiply
} = require("./table-utils");

// const {
    
// } = require("./table-utils");

const prompt = require("prompt");

// 01 Calculator

function calculate(nb, operand, nb2) {

    switch (operand) {
        case "+":
            return nb + nb2;
            break;
        case "-":
            return nb - nb2;
            break;
        case "*":
            return nb * nb2;
            break;
        case "/":
            return nb / nb2;
            break;
        case "%":
            return nb % nb2;
            break;
    }
};


console.log(multiply(8));

console.log(addition(10));

// 03 Prompt

mysteryNum = Math.floor(Math.random() * (100 + 1) + 1);
// console.log(mysteryNum);

function play() {
    prompt.start();
    var question = "Quel est le nombre mystère ?"
    prompt.get(question, function(err, nb) {
        // if (err) {
        //     return onerror(err)
        // }

        // if (nb > ) {
        //     console.log("error");
        //     return false
        // }

        if (nb[question] == mysteryNum) {
            console.log("Bravo !!!");
        } else if (nb[question] > mysteryNum) {
            console.log("C'est moins...");
            play();
        } else if (nb[question] < mysteryNum) {
            console.log("C'est plus...");
            play();
        }

    })
}

play();
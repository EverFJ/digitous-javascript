// Modules import 

const {
    addition
} = require("./table-utils");
const {
    multiply
} = require("./table-utils");

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
console.log(mysteryNum);

function play() {
    prompt.start();
    prompt.get("Quel est le nombre mystère ?", function(res) {
        // if (typeof(nb) != "number") {
        //     console.log("error");
        //     return false
        // }
        if (res == mysteryNum) {
            console.log("Bravo !!!");
        } else if (res > mysteryNum) {
            console.log("C'est moins...");
            play();
        } else if (res < mysteryNum) {
            console.log("C'est plus...");
            play();
        }
    })
}

play();
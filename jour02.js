// 01 Number
console.log("NUMBER")
let integer = 102;
let float = 13.9;

console.log("int : " + integer, "float : " + float + "\n");

// 02 Convert 
console.log("CONVERT")
let basic = 34;
let stringified = basic.toString();
console.log(stringified, typeof stringified + "\n");

// 03 Round
console.log("ROUND")
let num = 1.5;
let rounded = Math.floor(num);
console.log("num :" + num, "rounded :" + rounded + "\n");

// 04 Arithmétique
console.log("ARITHMETIQUE")
let test = 12;
let bis = 5;
console.log(bis / test)
console.log(bis % test)
console.log(bis + test)
console.log(bis - test)
console.log("\n");

// 05 Comparison
console.log("COMPARISON")

test = 143;
bis = 219;
console.log(test > bis);
console.log(test === bis);
console.log("\n");

// 06 Condition 
console.log("CONDITION")
let limit = 50;
let score = 64;
if (score >= limit) {
    console.log("OK, good")
} else {
    console.log("Not OK, score is too low")
}

console.log("\n");

// 07 Condition II
console.log("CONDITION II")
let password = "azerty";
if (password.length >= 5) {
    console.log("The password is secure")
}

console.log("\n");

// 08 Condition III
console.log("CONDITION III")

if (score >= limit && password.length >= 5) {
    console.log("Everything's good")
} else if (score >= limit || password.length >= 5) {
    console.log("Something's good")
} else {
    console.log("Nothing's good")
}

console.log("\n");

// Bonus 1

console.log("BONUS I");
let dice = Math.floor(Math.random() * 6) + 1;
console.log("dice :" + dice);
if (dice == 6) {
    console.log("I win")
} else {
    console.log("I lose ")
}
console.log("\n");

// AUTRE FACON DE FAIRE
// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// let dice = Math.round(getRandomNumber(1, 6));

// Bonus 2

console.log("BONUS II");
let month = "May";

switch (month) {
    case "January":
    case "February":
    case "March":
        season = "Winter";
        break;
    case "April":
    case "March":
    case "May":
        season = "Spring";
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer";
        break;
    case "September":
    case "October":
    case "November":
    case "December":
        season = "Fall";
        break;

}
console.log("saison: " + season);
console.log("\n");

//  Bonus 3

console.log("BONUS III");
let number = 6.5;
console.log("number :" + number);

function round(nb) {

    truncateNumber = Math.trunc(nb);
    floatingPoint = nb - truncateNumber;
    if (floatingPoint >= 0.5) {
        result = Math.ceil(nb);
    } else {
        result = Math.floor(nb)
    }
    return result;
}

console.log("rounded number " + round(number));
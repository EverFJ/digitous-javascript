// ARRAY

console.log("Arrays")
let fruits = ["mango", "lemon", "raspberry"];
console.log(fruits);
console.table(fruits + "\n");

// ACCES

console.log("Acces")
let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log("index of butter :" + ingredients.indexOf("butter"));
console.log("\n");

//ADD AND REMOVE

console.log("add and remove");
let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);
console.log("\n");

//ORDER

console.log("order");
let numbers = [4, 8, 10, 12, 6];
console.log("numbers :" + numbers);
numbers.reverse();
console.log("numbers reverse :" + numbers);
numbers.sort(function(a, b) {
    return a - b
});
console.log("numbers sorted :" + numbers);

console.log("\n");

// BOUCLE

console.log("Boucle");
let total = 0;
let limit = 10;

for (i = 0; i <= limit; i++) {
    total += i
}
console.log("total :" + total);
console.log("\n");

// REVERSE

console.log("Reverse");
let sentence = "Hello Konexio !";
let sentenceSplit = sentence.split("");
console.log(`sentenceSplit : ${sentenceSplit}`);
let reversedArray = [];

for (i = 0; i < sentence.length; i++) {
    reversedArray.unshift(sentenceSplit[i])
}
console.log(`reversedArray : ${reversedArray}`);

let reversedSentence = reversedArray.join("");

console.log(reversedSentence);
console.log("\n");

// BONUS I 
function fizzbuzz() {
    for (i = 0; i <= 100; i++) {
        if (i == 0) {
            console.log(i)
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else if (i % 7 == 0) {
            console.log();
        } else {
            console.log(i)
        }
    }

}

fizzbuzz();


// BONUS II
console.log("Bonus II");

total = 0;
limit = 10;
i = 0

while (i <= limit) {
    total += i
    i++
}

console.log(total);
console.log("\n");

// BONUS III
console.log("Bonus III")
let promo = ["Amir", "Alexandre", "Fatoumata", "Dany", "Sofiane", "François"];

function getRandomNumber(min, max) {
    let random = Math.random() * (max - min + 1) + min;
    return Math.floor(random);
}

let randomIndex = getRandomNumber(0, promo.length - 1);

console.log("The winner is : " + promo[randomIndex]);
console.log("\n");

// BONUS IV 

console.log("Bonus IV");

let array = [];

for (i = 0; i < 20; i++) {
    let randomNumber = Math.round(Math.random() * 100);
    array.push(randomNumber);
}

console.log(array);

// Find larger number
let largerNumber = Number.NEGATIVE_INFINITY;

for (i = 0; i < array.length; i++) {
    if (array[i] > largerNumber) {
        largerNumber = array[i]
    }
}
console.log("Larger number of array: " + largerNumber + "\n");
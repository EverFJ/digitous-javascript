// Sum

console.log("Sum");
let numbers = [];

for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 100))
}

console.log(`Tableaux construit aléatoirement`);
console.log(numbers);

let sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log("sum = " + sum + "\n");


// Max

numbers = [];
console.log(numbers);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

for (i = 0; i < 50; i++) {
    numbers.push(getRandomNumber(50, 201));
}
console.log(numbers);
let largestNumber = Number.NEGATIVE_INFINITY;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
console.log(`C'est ${largestNumber} le plus grand nombre du tableau \n`);


// Unique NOT FINISHED !!!

numbers = [];

for (i = 0; i < 50; i++) {
    numbers.push(getRandomNumber(50, 201));
}
console.log(numbers);
for (i = 0; i < numbers.length; i++) {
    while (numbers[i] >= 75 && numbers[i] <= 100) {
        console.log("Le nombre est " + numbers[i]);
        break;
    }
}
console.log("\n");

// NESTED LOOP NOT FINISHED !!!

console.log("Nested loop : ");

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
console.log(words[0].split(""));
let letters = [];

for (i = 0; i < words.length; i++) {

    letters.push(words[i].split(","));
}

console.log(letters);
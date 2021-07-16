let intArray = [];

// Get random number between min (included) and max(included)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (i = 0; intArray.length <= 10; i++) {
    let number = getRandomNumber(1, 20);
    if (number % 2 === 0) {
        intArray.push(number)
    }
}

console.log(`Tableaux : ${intArray}`);
console.log(intArray);
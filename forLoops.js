// Somme des carrés
console.log("Carré");

let result = 0;
for (let i = 5; i <= 10; i++) {
    result = result + i * i;
}

console.log(result);

// Comptons
console.log("Comptons");

result = 0;
for (i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        result += 1
    }
}

console.log(result);

// Chanceux
console.log("Chanceux");
result = 0;

function getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1
}

// console.log(getDiceNumber());
for (i = 0; i < 20; i++) {
    let number = getDiceNumber();
    if (number >= 5) {
        result += number
    }
}
console.log(result);

// Des Boites

// box1 + box2 = 10
// (box2 = 17)
// box1 + box2 = 44
// (box2= 30)
// box1 = 17
// box2 = 30
// i = 14


// Des setioB

// box1 = 12
// 


// Encore des boites
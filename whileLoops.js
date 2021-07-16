// Comptons
let i = 50;
while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Try again

let dice = null;
let count = 0;
dice = Math.floor(Math.random() * 6 + 1);
console.log(`Dice result : ${dice}`);
while (dice === 6) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(`Dice result : ${dice}`);

    if (dice !== 6) {
        count++;
    }
    console.log(`Dice result : ${dice}`);
}
console.log(`Count : ${count}`)

// Course


// Des boites


// Encore des boites

0
7
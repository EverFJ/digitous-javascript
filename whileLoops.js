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

let ussainBolt = 0;
let tysonGay = 0;

while (ussainBolt <= 100 || tysonGay <= 100) {
    let number1 = Math.floor(Math.random() * 10 + 1);
    let number2 = Math.floor(Math.random() * 10 + 1);
    ussainBolt += number1;
    tysonGay += number2;
}

if (ussainBolt > tysonGay) {
    console.log(`Usain Bolt wins with ${ussainBolt} !!!`)
} else {
    console.log(`Tyson Gay wins with ${tysonGay} !!!`)

}


// Des boites


// Encore des boites

0
7
// 01 Hello world

console.log("Hello World");

// 02

let test = "My name is François";
console.log(test);

// 03

let name = "François"
console.log("Nice to meet you " + name);

// 04

let testLength = "I'm very long !";
console.log(testLength.length);

// 05

let food = "croissant is meh";
food = food.replace("meh", "good");
console.log(food);

// 06

let basic = "This is Cool";
let basicUp = basic.toUpperCase();
let basicDown = basic.toLowerCase();
console.log("basic " + basic, "down " + basicDown, "up " + basicUp);


// 07

let word = "banana";
let letters = word.split("");
console.log(letters);

// 08

let age = 35;
let template = `I'm ${age} years old`;
console.log(template);

// Bonus 

let escapeChars = "And then he said \"Get out of here\"";
console.log(escapeChars);

const string = "Bonjour";
let changed = (string.replace(/o/g, 'a'));
console.log(changed);
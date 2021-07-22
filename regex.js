const string = "All your base are belong to us";
let regex = /base/;

const isExisting = regex.test(string);

console.log(isExisting);

let otherString = "base";
regex = /^base$/

// ^ means has to begin with the next character, and $ has to end like the previous one.

console.log("All your base... : " + regex.test(string));
console.log("base: " + regex.test(otherString));

regex = /[a-z]/i;

console.log(regex.test(string));

let string2 = "My age is 35"

regex = /my age is [0-9]+/i
regex2 = /my age is [0-9]/i

// + quantifier, matches between one and unlimited time (like one word)
// * quantifier, matches between 0 and unlimited time
// {1,3} matches between 1 and 3

console.log(regex.test(string2));

console.log(string2.substr(regex))
console.log(string2.substr(regex2))

// ? after a character makes it optional

// \w matches 1 word
// \n matches newline
// \t matches tab

// () matching utility

let newString = "My name is Francois"
regex = /name is ([a-zA-Z]+)/
const match = newString.exec(regex);

console.log(match);
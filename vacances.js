// 01 Alphabet

function sortLetters(string) {
    let array = string.split("");
    let sortedArray = array.sort();
    let sortedString = sortedArray.join("");
    return sortedString;
}
// console.log(sortLetters("konexio"));

// 02 Xoxo

const countEach = (string) => {
    if (!string.includes("o") && !string.includes("x")) {
        console.log("The string must be composed of Xs and Os")
        return 1
    }
    let xNumber = string.match(/x/g).length;
    let oNumber = string.match(/o/g).length;
    if (xNumber === oNumber) {
        return true
    } else {
        return false
    }
}
// console.log(countEach("xxxxooo"));

// 03 Palindrome

const checkPal = function(string) {
    let inversedString = "";
    for (i = string.length - 1; i >= 0; i--) {
        inversedString += string[i];
    }
    // console.log(inversedString);
    if (string === inversedString)
        return "Palindrome !";
    else
        return "Nope";
}
// console.log(checkPal("racecar"));
// console.log(checkPal("laptop"));


// 04 Swap

function swap(string) {
    let newString = "";
    for (i = 0; i < string.length; i++) {
        if (string[i].match(/[A-Z]/)) {
            newString += string[i].toLowercase();
            console.log("MAJ")
        } else {
            console.log("min")
            newString += string[i].toUpperCase();
        }
    }
    return newString
}
console.log(swap("Hello World"));


// Bonus

// Bonus II

// Bonus III

// Bonus IV
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
            newString += string.charAt(i).toLowerCase();
        } else {
            newString += string.charAt(i).toUpperCase();
        }
    }
    return newString;
}
// console.log(swap("Hello World"));


// Bonus

const makeItSpongeBob = (string) => {
    const stringLower = string.toLowerCase();
    let newString = "";
    for (i = 0; i < stringLower.length; i++) {
        if (i % 2 === 0) {
            newString += stringLower.charAt(i).toUpperCase();
        } else {
            newString += stringLower.charAt(i).toLowerCase();
        }
    }
    return newString;
};

// console.log(makeItSpongeBob("JavaSCRIpt is easy"));

// Bonus II

// Bonus III

// Bonus IV

// Forêt 

/* Une forêt de 20 hectares perd chaque année 10% de sa surface et gagne dans le même temps 3 hectares.
 Ecrire une fonction(année) pour calculer la surface.
 Générer un tableau de surface en fonction de l'année (index).
*/

const forestSurface = (years) => {
    let surface = 20;
    let surfaceArray = [20];
    for (i = 0; i <= years; i++) {
        surface = surface * 0.9 + 3;
        surfaceArray.push(surface);
    }
    console.log("Surface : ");
    console.log(surface);
    console.log("Surface Array: ");
    console.log(surfaceArray);
};

// forestSurface(50);
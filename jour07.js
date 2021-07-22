const fs = require("fs");

// 01 File System

console.log("File System : ");

function displayFile(file) {
    fs.readFile(file, function(err, data) {
        if (err) {
            console.error(err)
            return
        }
        console.log(data.toString());
    })
}

// displayFile("jour07.txt");
console.log("\n\n")

// 02 Map Double

let array = [1, 2, 3, 4, 5];

// let double = array.map(function(nb) {
//     return nb * 2
// });

let double = array.map(x => x * 2);

console.log(array);
console.log("mapped array : " + double);

// 03 Map names

let longNames = [{
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Smith"
    },
]

let shortNames = longNames.map(function(val) {
    //console.log("longNames.map val:", val)
    return {
        name: `${val.firstName} ${val.lastName}`
    };
});

console.log("shortNames : ");
console.log(shortNames);


// 04 Filter numbers

console.log("Filter numbers : \n")
array = [1, "toto", 34, "javascript", 8];

let numbers = array.filter((val) => typeof(val) == "number");

console.log(numbers);

// 05 Filter evens 

console.log("Filter even : \n")
numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter((nb) => nb % 2 === 0);

console.log(even);

// 06 Cake 

let cakes = [{
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]

// Brownie + donut in a new variable & status = sold out.

let newCakes = cakes.filter((val) => val.name == "donut" || val.name == "brownie");

console.log("newCakes : ");
console.log(newCakes);

let newCakesUpdated = newCakes.map(function(val) {
    val.status = "sold out !"
    return val
});

console.log(newCakesUpdated)

// Pendu

const prompt = require("prompt");
// 01 FORMAT

console.log("Format : ");

function formatDate(string) {
    let array = string.split("-");
    let year = array[0];
    let month = array[1];
    let day = array[2];

    let date = `${day}/${month}/${year}`
    return date
}

var date = new Date("2021-05-06");



console.log(formatDate("2021-05-06") + "\n\n");

// console.log(date);

function getDate(string) {

    let day = new Date(string).getDay();
    let month = new Date(string).getMonth();
    let year = new Date(string).getFullYear();
    let fullDate = `${day}/${month}/${year}`
    return fullDate;
}

getDate("2021-05-06");


// 02 AGE

console.log("Age : ");

function calculateAge(birthDateString) {
    let birthDate = new Date(birthDateString);
    let birthDateMS = birthDate.getMilliseconds();
    let dateMS = Date.now();

    let ageMS = dateMS - birthDate;

    let age = Math.floor(ageMS / 1000 / 60 / 60 / 24 / 365);

    console.log("Age " + age);
}

calculateAge("1986-02-02");
console.log("\n\n");

// 03 VALIDATOR

console.log("Validator : ");

const prompt = require("prompt");

function checkProfile() {

    var schema = {
        properties: {
            username: {
                // message: "Can be only letters, numbers, or -",
                pattern: /[A-Za-z0-9]/,
                required: true,
            },
            email: {

            },
            password: {
                // message: "At least 6 characters, 1 letter, and 1 number",
                hidden: true
            },
        }
    }

    prompt.get(schema, function(err, result) {
        if (err) {
            console.log("Error")
            return
        }

        console.log(result.username)
        if (!result.email.includes("@")) {
            console.log("Email invalide")
            return 1;
        }
        // if (result.password) {

        // }
        console.log(result.email)
        console.log(result.password)
    })
}

prompt.start();

checkProfile();
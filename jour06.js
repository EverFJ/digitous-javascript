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
    const birthdate = new Date(birthDateString).getFullYear();
    const age = new Date().getFullYear() - birthdate;
    console.log(age);
}

calculateAge("1986-02-02");
console.log("\n\n");

// 03 VALIDATOR

console.log("Validator : ");

const prompt = require("prompt");
const colors = require("colors");

function checkProfile() {

    var schema = {
        properties: {
            username: {
                description: "Enter your username",
                message: "Username invalid ! Can be only letters, numbers, or -",
                type: "string",
                pattern: /[A-Za-z0-9]/,
                required: true,
            },
            email: {
                description: "Enter your email",
                message: "Email invalid !",
                type: "string",
                // pattern: "^[a-zA-Z]+@$",
                required: true,

            },
            password: {
                description: "Enter your password",
                type: "string",
                message: "Password invalid ! At least 6 characters, 1 letter, and 1 number",
                pattern: /[a-zA-Z]+[0-9]+/,
                hidden: true,
                replace: "*",
                required: true
            },
        }
    }

    prompt.get(schema, function(err, result) {
        if (err) {
            console.log("Error")
            return
        }
        let object = {
            "username": result.username,
            "email": result.email,
            "password": result.password,
        }
        console.log("Allg good!");
        console.log(object);

    })
}

prompt.start();

prompt.message = colors.bgWhite.black("PROMPT");
prompt.delimiter = colors.green("><");

checkProfile();
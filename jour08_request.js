// 01 Countries

const request = require("request");

var countriesName = [];

function getCountries() {
    request.get("https://restcountries.eu/rest/v1/all", function(err, res, body) {
        // console.log(err);
        // console.log(res.statusCode);
        // console.log(body);
        // console.log(body.length)

        let countriesObject = JSON.parse(body);
        // console.log(countriesObject["0"].name)

        // for (i = 0; i < countriesObject.length; i++) {
        //     let index = i.toString()
        //     countriesName.push(countriesObject[i].name)
        // }

        countriesName = countriesObject.map((element) => element.name);

        console.log("var countriesName : ");
        console.log(countriesName.join("-"));
    });
}
// getCountries()


// 02 Chuck Norris

var chuckJoke = "";

function getJoke() {
    request.get("https://api.chucknorris.io/jokes/random", function(err, res, body) {
        // console.log(body);

        // let chuckObject = JSON.parse(body);
        // // console.log(chuckObject);
        // chuckJoke = chuckObject.value;
        // console.log(chuckJoke);

        console.log(JSON.parse(body).value);
    })
}
// getJoke();

// 03 Pokemon

function catchPokemon(nb) {
    request.get("https://pokeapi.co/api/v2/pokemon/" + nb, function(err, res, body) {

        let pokemonObject = JSON.parse(body)
        // console.log(pokemonObject.forms[0].name);
        let pokemonName = pokemonObject.name;
        console.log(`ID of the Pokemon : ${nb}`)
        console.log(`name of the Pokemon : ${pokemonName}`)
    })
};
// catchPokemon(25);

// Bonus BlackJack
const prompt = require("prompt");

let playerScore = 0;
let bankScore = Math.floor(Math.random() * (21 - 16 + 1) + 16);

prompt.start();

let schema = {
    properties: {
        action: {
            description: "BLACKJACK GAME\nYou can `draw` a card, or `pass`",
            message: "Invalid input",
            pattern: /^draw$|^pass$/,
            type: "string",
        }
    }
}

function promptForAction() {
    prompt.get(schema, function(err, result) {
        if (result.action === "draw") {
            let card = Math.floor(Math.random() * 10 + 1);
            playerScore += card;
            console.log("Your score : " + playerScore);
            if (playerScore > 21) {
                console.log("You lost, your score is more than 21 !!!")
                return;
            } else {
                promptForAction();
            }
        } else if (result.action === "pass") {
            if (playerScore === 21) {
                console.log("BlackJack !!! Player win");
                console.log(`Player score : ${playerScore}`);
                console.log(`Bank score : ${bankScore}`);
            } else if (playerScore > bankScore) {
                console.log("Player wins");
                console.log(`Player score : ${playerScore}`);
                console.log(`Bank score : ${bankScore}`);
            } else if (playerScore < bankScore) {
                console.log("Bank wins");
                console.log(`Player score : ${playerScore}`);
                console.log(`Bank score : ${bankScore}`);
            } else {
                console.log("Draw !!!");
                console.log(`Player score : ${playerScore}`);
                console.log(`Bank score : ${bankScore}`);
            }
        }
    })
}

promptForAction();
const fetch = require("node-fetch");

// 01 Countries
var countriesObject = [];
var countriesName = [];

const getCountries = function() {
    fetch("https://restcountries.eu/rest/v1/all")
        .then(res => res.json())
        .then(json => {
            countriesObject = json;
            // console.log(countriesObject);

            // for (i = 0; i < countriesObject.length; i++) {
            //     countriesName.push(countriesObject[i].name);
            // }

            countriesName = countriesObject.map((element) => element.name)

            console.log("CountriesName Array : ");
            console.log(countriesName.join("-"));
        });
}
getCountries();


// 02  Chuck Norris

var chuckJoke = "";
const getJoke = function() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(json => {
            chuckJoke = json.value;
            console.log(chuckJoke);
        })
};
// getJoke();


// 03 Pokemon

const catchPokemon = function(nb) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + nb)
        .catch(function(err) {
            console.log(err)
            return
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            console.log("Pokemon ID : " + nb);
            console.log(`Pokemon name : ${json.name}`)
        })
}
// catchPokemon(445);

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
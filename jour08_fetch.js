const fetch = require("node-fetch");

// 01 Countries
var countriesObject = [];
var countriesName = [];

const getCountries = function() {
    fetch("https://restcountries.eu/rest/v1/all")
        .then(res => res.json())
        .then(json => {
            countriesObject = json;
            console.log(countriesObject);

            for (i = 0; i < countriesObject.length; i++) {
                countriesName.push(countriesObject[i].name);
            }

            console.log("CountriesName Array : ");
            console.log(countriesName);
        });
}
// getCountries();


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
catchPokemon(555);
const request = require("request");

let countriesNames = [];

request.get("https://restcountries.eu/rest/v1/all", function(err, res, body) {
    console.log("err : " + err);
    console.log("res: " + res);
    // console.log("body: ");
    // console.log(body);

    console.log(res);


})
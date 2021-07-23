var request = require("request");

request.get("https://restcountries.eu/rest/v2/name/france", function(err, res, body) {
    console.log(err);
    console.log(res.statusCode);
    console.log(body);
});
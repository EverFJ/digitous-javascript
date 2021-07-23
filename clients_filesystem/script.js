const fs = require("fs");

var getFile = false;
var fileText;
var indiceCorp = [];
var indiceCorp2 = [{
        "name": "",
        "fistname": "",
        "icm": 0
    },
    {
        "name": "",
        "fistname": "",
        "icm": 0
    },
    {
        "name": "",
        "fistname": "",
        "icm": 0
    },
    {
        "name": "",
        "fistname": "",
        "icm": 0
    },
    {
        "name": "",
        "fistname": "",
        "icm": 0
    },
    {
        "name": "",
        "fistname": "",
        "icm": 0
    },
]

fs.readFile("clients.txt", function(err, data) {
    if (err) {
        console.error(err);
        return
    }
    fileText = data.toString();
    console.log("readFile fileText :\n" + fileText);
    let lines = fileText.split("\n");
    console.log("lines : ");
    console.log(lines);
    let arrayName = [];
    let arrayFirstName = [];
    let arrayAge = [];
    let arrayWeight = [];
    let arrayHeight = [];
    let arrayICM = [];

    // Extract Age : 
    for (i = 0; i < lines.length; i++) {
        arrayName.push(lines[i].split(" ")[0]);
        arrayFirstName.push(lines[i].split(" ")[1]);
        arrayAge.push(parseInt(lines[i].split(" ")[2]));
        arrayWeight.push(parseInt(lines[i].split(" ")[4]));
        arrayHeight.push(parseFloat(lines[i].split(" ")[3]));
        let ICM = parseInt(lines[i].split(" ")[4]) / (parseFloat(lines[i].split(" ")[3]) * parseFloat(lines[i].split(" ")[3]))
        arrayICM.push(ICM);
    }
    console.log('arrayName : ');
    console.log(arrayName);
    console.log('arrayFirstName : ');
    console.log(arrayFirstName);
    console.log("arrayAge :");
    console.log(arrayAge);
    console.log("arrayWeight :");
    console.log(arrayWeight);
    console.log("arrayHeight :");
    console.log(arrayHeight);
    console.log("arrayICM");
    console.log(arrayICM);

    // Calcul Age moyen 
    let ageSum = 0;
    for (i = 0; i < arrayAge.length; i++) {
        ageSum += arrayAge[i];
    }
    let ageAverage = ageSum / arrayAge.length;
    console.log("Age moyen : " + ageAverage);

    // Création tableau Nom Prénom ICM
    for (i = 0; i < arrayICM.length; i++) {
        let person = [arrayName[i], arrayFirstName[i], arrayICM[i]];
        indiceCorp.push(person);
    };
    console.log('indiceCorp : ');
    console.log(indiceCorp);
    getFile = true;

});




// fs.writeFile("./indiceCorp.json", indiceCorp, function (err) {
//     if (err) {
//         console.error(err);
//     }
// });
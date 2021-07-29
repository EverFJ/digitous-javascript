const { colors } = require("prompt");
var prompt = require("prompt");


function promptUserMail() {
  prompt.start();

  function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return;
  }

  prompt.get(["username", "email"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
    if (err) {
      return onErr(err);
    }

    console.log("Données reçues :");
    console.log("=> Username : " + res.username); // affiche le résultat pour la propriété "username"
    console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
  });


}

// 03 Prompt

var mysteryNum = Math.floor(Math.random() * (100 + 1) + 1);
// console.log(mysteryNum);
// prompt.start();

// function onErr(err) {
//   console.log(err)
//   return 1
// }

function play() {

  var question = "Quel est le nombre mystère ?"

  prompt.get(["number"], function (err, result) {
    console.log(question);
    var number = parseInt(result.number);

    if (err) {
      console.log("You must enter a number");
      return
    }

    if (number == mysteryNum) {
      console.log("Bravo !!!");
    } else if (number > mysteryNum) {
      console.log("C'est moins...");
      play();
    } else if (number < mysteryNum) {
      console.log("C'est plus...");
      play();
    }


  })
}

// play();


// CORRECTION 

var question = {
  properties: {
    number: {
      description: "Quel est le nombre mystère ?",
      pattern: /^\d{1,3}$/,
      required: true,
      message: "Entrez un nombre entre 1 et 100"
    }
  }
}

function guess() {
  prompt.get(question, function (err, result) {
    console.log(result);
    let number = parseInt(result.number);
    console.log(number)
    if (number === mysteryNum) {
      console.log("Bravo !!!")
    }
    if (number < mysteryNum) {
      console.log("C'est plus...")
      guess()
    }
    if (number > mysteryNum) {
      console.log("C'est moins...")
      guess()
    };
  })
}

prompt.start();

guess();

console.log("Ca marche");
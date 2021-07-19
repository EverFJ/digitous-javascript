var btn = document.getElementById("submit");
var par = document.getElementById("answer-form");

btn.addEventListener("click", function() {

    let maths = document.getElementById("maths");
    let anglais = document.getElementById("anglais");
    let physique = document.getElementById("physique");
    let francais = document.getElementById("français");

    console.log(maths.checked, anglais.checked, physique.checked, francais.checked);
    let matieresArray = [];
    if (maths.checked == true) {
        matieresArray.push("les mathématiques")
    }
    if (anglais.checked == true) {
        matieresArray.push("l'anglais")
    }
    if (physique.checked == true) {
        matieresArray.push("la physique")
    }
    if (francais.checked == true) {
        matieresArray.push("le français")
    }

    matieresString = matieresArray.join(", ");

    par.innerHTML = "Les matières que vous aimez sont " + matieresString + ".";

    console.log("Les matières que vous aimez sont " + matieresString + ".");


})
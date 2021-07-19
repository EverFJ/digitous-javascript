var pricesArray = [150, 55, 30, 25, 300];
var btn = document.getElementById("submit");
var articleSelect = document.getElementById("articleSelect");
var colorSelect = document.getElementById("colorSelect");
var numberSelect = document.getElementById("numberSelect");
var pArticle = document.getElementById("articleP");
var pColor = document.getElementById("colorP");
var pNumber = document.getElementById("numberP");
var pResult = document.getElementById("resultP");
var price = 0;
var article = "Article";
var color = "Couleur";
var number = 0;



articleSelect.addEventListener("change", function() {
    article = articleSelect.value;
    if (article === "Article") {
        pArticle.innerHTML = "";
        return false;
    }
    pArticle.innerHTML = "Vous avez choisi l'article : " + article;

})

colorSelect.addEventListener("change", function() {
    color = colorSelect.value;
    if (color === "Couleur") {
        pColor.innerHTML = "";
        return false
    }
    pColor.innerHTML = "Vous avez choisi la couleur : " + color;

})

numberSelect.addEventListener("change", function() {
    number = numberSelect.value;
    if (number === 0) {
        pNumber.innerHTML = "";
        return false
    }
    pNumber.innerHTML = "Nombre d'articles : " + number;

})



btn.addEventListener("click", function() {

    if (article === "Article" || color === "Couleur" || number === 0) {

        alert("L'ensemble des champs ne sont pas saisis !");
        return false;
    }
    let articleIndex = 0;
    console.log(article);
    console.log(number);

    switch (article) {
        case "veste":
            articleIndex = 0;
            break;
        case "pantalon":
            articleIndex = 1;
            break;
        case "chemise":
            articleIndex = 2;
            break;
        case "pull":
            articleIndex = 3;
            break;
        case "manteau":
            articleIndex = 4;
            break;
    }

    let articlePrice = pricesArray[articleIndex];
    console.log(articlePrice);

    price = (articlePrice * number) + (articlePrice * number * 0.2);

    pResult.innerHTML = "Le montant de votre commande s'élève à " + price + "€ TTC";


});
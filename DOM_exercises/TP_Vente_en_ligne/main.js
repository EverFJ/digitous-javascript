var pricesArray = [150, 55, 30, 25, 300];
var btn = document.getElementById("submit");
var articleSelect = document.getElementById("articleSelect");
var colorSelect = document.getElementById("colorSelect");
var numberSelect = document.getElementById("numberSelect");
var pArticle = document.getElementById("articleP");
var pColor = document.getElementById("colorP");
var pNumber = document.getElementById("numberP");


articleSelect.addEventListener("change", function() {
    article = articleSelect.value;
    pArticle.innerHTML = "Vous avez choisi l'article : " + article;

})

colorSelect.addEventListener("change", function() {
    color = colorSelect.value;
    pColor.innerHTML = "Vous avez choisi la couleur : " + color;

})

numberSelect.addEventListener("change", function() {
    number = numberSelect.value;
    pNumber.innerHTML = "Vous avez choisi le nombre : " + number;

})


btn.addEventListener("click", function() {






});
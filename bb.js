const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const whiteButton = document.getElementById("white-button");
const body = document.querySelector("body");

greenButton.addEventListener("click", function() {
  body.style.backgroundColor = "green";
});

redButton.addEventListener("click", function() {
  body.style.backgroundColor = "red";
});

whiteButton.addEventListener("click", function(){
    body.style.backgroundColor = "white";
});
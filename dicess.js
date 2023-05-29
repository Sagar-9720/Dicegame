// Image 1
var randnum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage1 = "images/dice" + randnum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceimage1);

// Image 2

var randnum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage2 = "images/dice" + randnum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceimage2);

if (randnum1 == randnum2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randnum1 > randnum2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
} else {
  document.querySelector("h1").textContent = "🚩Player 2 Wins";
}

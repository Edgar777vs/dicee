//First player random image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

//Second player random image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="👌Player 1 Win";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="⭐Draw⭐";
  } else {
    document.querySelector("h1").innerHTML="Player 2 Wins👌";
    
  }

  



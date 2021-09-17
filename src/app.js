/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let figures = ["♠", "♣", "♥", "♦"];
// let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = () => {
  //   //write your code here

  let randomNumber = () => {
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let cardNumber = Math.floor(Math.random() * 12);

    return numbers[cardNumber];
  };

  let randomFigure = () => {
    let figures = ["♠", "♣", "♥", "♦"];
    let figureKind = Math.floor(Math.random() * 4);

    return figures[figureKind];
  };

  let figure = randomFigure();
  let number = randomNumber();

  let contentTop = document.querySelector("#cardtop h1");
  let contentBottom = document.querySelector("#cardbottom h1");
  let contentMiddle = document.querySelector("#cardmiddle h1");

  contentTop.innerHTML = figure;
  contentBottom.innerHTML = figure;
  contentMiddle.innerHTML = number;

  if (figure == "♠") {
    contentTop.classList.add("black");
    contentBottom.classList.add("black");
    contentMiddle.classList.add("black");
  } else if (figure == "♣") {
    contentTop.classList.add("black");
    contentBottom.classList.add("black");
    contentMiddle.classList.add("black");
  } else if (figure == "♥") {
    contentTop.classList.add("red");
    contentBottom.classList.add("red");
    contentMiddle.classList.add("red");
  } else if (figure == "♦") {
    contentTop.classList.add("red");
    contentBottom.classList.add("red");
    contentMiddle.classList.add("red");
  }
};

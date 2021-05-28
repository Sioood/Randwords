const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomizeLetter() {
  let randomizeLetter = Math.floor(Math.random() * letter.length);
  randomLetterText = document.querySelector("#letter");
  randomLetterText.innerText = `${letter[randomizeLetter]}`;
}

const theme = ["Ville", "Pays", "Objet", "Fruit", "Célébrité"];

function randomizeTheme() {
  let randomizeTheme = Math.floor(Math.random() * theme.length);
  randomNumberText = document.querySelector("#theme");
  randomNumberText.innerText = `${theme[randomizeTheme]}`;
}

const btn = document.querySelector("button");

btn.addEventListener("click", randomizeLetter);

btn.addEventListener("click", randomizeTheme);

// const randomLetter = Math.floor(Math.random() * 27);

// const randomLetterText = document.querySelector("#letter");
// randomLetterText.innerText = `${randomLetter}`;

// function randomize() {randomNumberText = document.querySelector('#number');
// randomNumberText.innerText = `${randomNumber}`

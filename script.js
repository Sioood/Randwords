//Card 1 Random letter and theme

const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomizeLetter() {
  let randomizeLetter = Math.floor(Math.random() * letter.length);
  randomLetterText = document.querySelector("#letter");
  randomLetterText.innerText = `${letter[randomizeLetter]}`;
}

const theme = [
  "Ville",
  "Pays",
  "Objet",
  "Fruit",
  "Célébrité",
  "Film",
  "Musique",
  "Métier",
  "Personnage Fictif",
  "Monument",
];

const randomizeTheme = () => {
  let randomizeTheme = Math.floor(Math.random() * theme.length);
  randomNumberText = document.querySelector("#theme");
  randomNumberText.innerText = `${theme[randomizeTheme]}`;
};


//Card 2

const letter2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomizeLetter2() {
  let randomizeLetter2 = Math.floor(Math.random() * letter2.length);
  randomLetterText2 = document.querySelector("#letter2");
  randomLetterText2.innerText = `${letter2[randomizeLetter2]}`;
}

const theme2 = [
  "Ville",
  "Pays",
  "Objet",
  "Fruit",
  "Célébrité",
  "Film",
  "Musique",
  "Métier",
  "Personnage Fictif",
  "Monument",
];

const randomizeTheme2 = () => {
  let randomizeTheme2 = Math.floor(Math.random() * theme2.length);
  randomNumberText2 = document.querySelector("#theme2");
  randomNumberText2.innerText = `${theme2[randomizeTheme2]}`;
};

//Button Click Functions

const btn = document.querySelector("button");

btn.addEventListener("click", randomizeLetter);
randomizeLetter();

btn.addEventListener("click", randomizeTheme);
randomizeTheme();

btn.addEventListener("click", randomizeLetter2);
randomizeLetter2();

btn.addEventListener("click", randomizeTheme2);
randomizeTheme2();

// const randomLetter = Math.floor(Math.random() * 27);

// const randomLetterText = document.querySelector("#letter");
// randomLetterText.innerText = `${randomLetter}`;

// function randomize() {randomNumberText = document.querySelector('#number');
// randomNumberText.innerText = `${randomNumber}`

// function randomizeLetter() {
//   let randomizeLetter = Math.floor(Math.random() * letter.length);
//   randomLetterText = document.querySelector("#letter");
//   randomLetterText.innerText = `${letter[randomizeLetter]}`;
// }

// const theme = ["Ville", "Pays", "Objet", "Fruit", "Célébrité" , "Film", "Musique", "Métier", "Personnage Fictif", "Monument"];

// const randomizeTheme = () => {
//   let randomizeTheme2 = Math.floor(Math.random() * theme.length);
//   randomNumberText = document.querySelector("#theme");
//   randomNumberText.innerText = `${theme[randomizeTheme2]}`;
// }

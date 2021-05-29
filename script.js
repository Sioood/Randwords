//Card 1 Random letter and theme

const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const color = ["white", "white", "white", "white", "#e63b3b", "#1b1c1e"];

function randomizeLetter() {
  let randomizeLetter = Math.floor(Math.random() * letter.length);
  let randomLetterText = document.querySelector("#letter");
  randomLetterText.innerText = `${letter[randomizeLetter]}`;

  let randomizeColor = Math.floor(Math.random() * color.length);
  randomLetterText.style.color = `${color[randomizeColor]}`;
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
  let randomWord = document.querySelector("#theme");
  randomWord.innerText = `${theme[randomizeTheme]}`;
};

//Card 2 Random letter and theme

const letter2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const color2 = ["white", "white", "white", "white", "#e63b3b", "#1b1c1e"];

function randomizeLetter2() {
  let randomizeLetter2 = Math.floor(Math.random() * letter2.length);
  let randomLetterText2 = document.querySelector("#letter2");
  randomLetterText2.innerText = `${letter2[randomizeLetter2]}`;

  let randomizeColor2 = Math.floor(Math.random() * color2.length);
  randomLetterText2.style.color = `${color2[randomizeColor2]}`;
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
  let randomWord2 = document.querySelector("#theme2");
  randomWord2.innerText = `${theme2[randomizeTheme2]}`;
};

// cards transform

const transform = ["rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(180deg)"];

function randomizeTransform() {
  let randomizeTransform = Math.floor(Math.random() * transform.length);
  let randomTransform = document.querySelector("#theme");
  randomTransform.style.transform = `${transform[randomizeTransform]}`;

  let randomTransform2 = document.querySelector("#theme2");
  randomTransform2.style.transform = `${transform[randomizeTransform]}`;
}

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

btn.addEventListener("click", randomizeTransform);
randomizeTransform();


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

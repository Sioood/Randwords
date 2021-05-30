//Card 1 Random letter and theme

const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const color = ["white", "white", "white", "white", "#e63b3b", "#1b1c1e", "#32a852"];

function randomizeLetter() {
  let randomizeLetter = Math.floor(Math.random() * letter.length);
  let randomLetter = document.querySelector("#letter");
  randomLetter.innerText = `${letter[randomizeLetter]}`;

  let randomizeColor = Math.floor(Math.random() * color.length);
  randomLetter.style.color = `${color[randomizeColor]}`;
}

const theme = [
  "Animal",
  "Célébrité",
  "Couleur",
  "De couleur rouge",
  "De couleur verte",
  "De couleur bleue",
  "Film / Série",
  "Fruit / Légume",
  "Jeu",
  "Marque",
  "Métier",
  "Monument",
  "Mot de 5 lettres",
  "Mot anglais",
  "Chanteur / Groupe",
  "Objet",
  "Pays",
  "Personnage Fictif",
  "Plat",
  "Prénom",
  "Sport",
  "Ville",
];

const randomizeTheme = () => {
  let randomizeTheme = Math.floor(Math.random() * theme.length);
  let randomWord = document.querySelector("#theme");
  randomWord.innerText = `${theme[randomizeTheme]}`;
};

//Card 2 Random letter and theme

const letter2 = letter;

const color2 = color;

function randomizeLetter2() {
  let randomizeLetter2 = Math.floor(Math.random() * letter2.length);
  let randomLetter2 = document.querySelector("#letter2");
  randomLetter2.innerText = `${letter2[randomizeLetter2]}`;

  let randomizeColor2 = Math.floor(Math.random() * color2.length);
  randomLetter2.style.color = `${color2[randomizeColor2]}`;
}

const theme2 = theme ;

const randomizeTheme2 = () => {
  let randomizeTheme2 = Math.floor(Math.random() * theme2.length);
  let randomWord2 = document.querySelector("#theme2");
  randomWord2.innerText = `${theme2[randomizeTheme2]}`;
};

//Card 3 Random letter and theme

const letter3 = letter;

const color3 = color;

function randomizeLetter3() {
  let randomizeLetter3 = Math.floor(Math.random() * letter3.length);
  let randomLetter3 = document.querySelector("#letter3");
  randomLetter3.innerText = `${letter3[randomizeLetter3]}`;

  let randomizeColor3 = Math.floor(Math.random() * color3.length);
  randomLetter3.style.color = `${color3[randomizeColor3]}`;
}

const theme3 = theme ;

const randomizeTheme3 = () => {
  let randomizeTheme3 = Math.floor(Math.random() * theme3.length);
  let randomWord3 = document.querySelector("#theme3");
  randomWord3.innerText = `${theme3[randomizeTheme3]}`;
};

// cards transform

const transform = ["rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(0deg)", "rotateY(180deg)"];

function randomizeTransform() {
  let randomizeTransform = Math.floor(Math.random() * transform.length);
  let randomTransform = document.querySelector("#card");
  randomTransform.style.transform = `${transform[randomizeTransform]}`;

  let randomTransform2 = document.querySelector("#card1");
  randomTransform2.style.transform = `${transform[randomizeTransform]}`;

  let randomTransform3 = document.querySelector("#card2");
  randomTransform3.style.transform = `${transform[randomizeTransform]}`;
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

btn.addEventListener("click", randomizeLetter3);
randomizeLetter3();

btn.addEventListener("click", randomizeTheme3);
randomizeTheme3();


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

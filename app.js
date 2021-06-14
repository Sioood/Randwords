function OpenRules() {
  let selectRules = document.querySelector(".rules-card");
  selectRules.style.display = "initial";
}

const rulesBtn = document.querySelector(".rules-btn");

rulesBtn.addEventListener("click", OpenRules);

//cookie for popup rules

const cookieRules = document.querySelector(".rules-card"),
  crossBtn = cookieRules.querySelector(".cross");
crossBtn.onclick = () => {
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieRules=Siod; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //if cookie is set
    cookieRules.style.display = "none"; //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Cookie can't be set! Please unblock this site from the cookie setting of your browser."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieRules=Siod"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? (cookieRules.style.display = "none")
  : (cookieRules.style.display = "initial");

const btn = document.querySelector("button");

btn.addEventListener("click", function pickLetter() {
  document.querySelectorAll(".letters").forEach((letter) => {
    const randomLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const randomColor = [
      "white",
      "white",
      "white",
      "white",
      "#e63b3b",
      "#1b1c1e",
      "#32a852",
    ];

    let randomizeLetter = Math.floor(Math.random() * randomLetter.length);
    let randomizeColor = Math.floor(Math.random() * randomColor.length);

    letter.innerText = `${randomLetter[randomizeLetter]}`;
    letter.style.color = `${randomColor[randomizeColor]}`;
  });
});

btn.addEventListener("click", function pickTheme() {
  document.querySelectorAll(".themes").forEach((theme) => {
    const randomTheme = [
      "Animal",
      "Boisson",
      "Célébrité",
      "Couleur",
      "De couleur rouge",
      "De couleur verte",
      "De couleur bleue",
      "Dessert",
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

      let randomizeTheme = Math.floor(Math.random() * randomTheme.length);
      theme.innerText = `${randomTheme[randomizeTheme]}`;

  });
});

btn.addEventListener("click", function pickTheme() {
  document.querySelectorAll(".card").forEach((card) => {
    const randomTransform = [
      "rotateY(0deg)",
      "rotateY(0deg)",
      "rotateY(0deg)",
      "rotateY(0deg)",
      "rotateY(0deg)",
      "rotateY(0deg)",
      "rotateY(180deg)",
    ];
    
    let randomizeTransform = Math.floor(Math.random() * randomTransform.length);
    card.style.transform = `${randomTransform[randomizeTransform]}`;

  });
});
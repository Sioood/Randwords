//compteur 1

const btnMoins = document.querySelector("#moins");
const btnPlus = document.querySelector("#plus");
let btnResult = document.querySelector("#result");
let counter = parseInt(btnResult.innerText);

function moins() {
  counter--;
  btnResult.innerText = counter;
}

btnMoins.addEventListener("click", moins);

function plus() {
  counter++;
  btnResult.innerText = counter;
}

btnPlus.addEventListener("click", plus);

//compteur 2

const btnMoins1 = document.querySelector("#moins1");
const btnPlus1 = document.querySelector("#plus1");
let btnResult1 = document.querySelector("#result1");
let counter1 = parseInt(btnResult1.innerText);

function moins1() {
  counter1--;
  btnResult1.innerText = counter1;
}

btnMoins1.addEventListener("click", moins1);


function plus1() {
  counter1++;
  btnResult1.innerText = counter1;
}

btnPlus1.addEventListener("click", plus1);

// compteur 3

const btnMoins2 = document.querySelector("#moins2");
const btnPlus2 = document.querySelector("#plus2");
let btnResult2 = document.querySelector("#result2");
let counter2 = parseInt(btnResult2.innerText);

function moins2() {
  counter2--;
  btnResult2.innerText = counter2;
}

btnMoins2.addEventListener("click", moins2);

function plus2() {
  counter2++;
  btnResult2.innerText = counter2;
}

btnPlus2.addEventListener("click", plus2);

// compteur 4

const btnMoins3 = document.querySelector("#moins3");
const btnPlus3 = document.querySelector("#plus3");
let btnResult3 = document.querySelector("#result3");
let counter3 = parseInt(btnResult3.innerText);

function moins3() {
  counter3--;
  btnResult3.innerText = counter3;
}

btnMoins3.addEventListener("click", moins3);

function plus3() {
  counter3++;
  btnResult3.innerText = counter3;
}

btnPlus3.addEventListener("click", plus3);

// compteur 5

const btnMoins4 = document.querySelector("#moins4");
const btnPlus4 = document.querySelector("#plus4");
let btnResult4 = document.querySelector("#result4");
let counter4 = parseInt(btnResult4.innerText);

function moins4() {
  counter4--;
  btnResult4.innerText = counter4;
}

btnMoins4.addEventListener("click", moins4);

function plus4() {
  counter4++;
  btnResult4.innerText = counter4;
}

btnPlus4.addEventListener("click", plus4);

// compteur 6

const btnMoins5 = document.querySelector("#moins5");
const btnPlus5 = document.querySelector("#plus5");
let btnResult5 = document.querySelector("#result5");
let counter5 = parseInt(btnResult5.innerText);

function moins5() {
  counter5--;
  btnResult5.innerText = counter5;
}

btnMoins5.addEventListener("click", moins5);

function plus5() {
  counter5++;
  btnResult5.innerText = counter5;
}

btnPlus5.addEventListener("click", plus5);

// compteur 7

const btnMoins6 = document.querySelector("#moins6");
const btnPlus6 = document.querySelector("#plus6");
let btnResult6 = document.querySelector("#result6");
let counter6 = parseInt(btnResult6.innerText);

function moins6() {
  counter6--;
  btnResult6.innerText = counter6;
}

btnMoins6.addEventListener("click", moins6);

function plus6() {
  counter6++;
  btnResult6.innerText = counter6;
}

btnPlus6.addEventListener("click", plus6);

// btnMoins.addEventListener("click", randomizeLetter);
// randomizeLetter();

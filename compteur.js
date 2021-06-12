//Check sessionStorage counter

window.onload = () => {
  if (counter == null) {
    btnResult.innerText = 0;
    btnResult1.innerText = 0;
    btnResult2.innerText = 0;
    btnResult3.innerText = 0;
    btnResult4.innerText = 0;
    btnResult5.innerText = 0;
    btnResult6.innerText = 0;
  } else {
    btnResult.innerText = counter;
    btnResult1.innerText = counter1;
    btnResult2.innerText = counter2;
    btnResult3.innerText = counter3;
    btnResult4.innerText = counter4;
    btnResult5.innerText = counter5;
    btnResult6.innerText = counter6;
  }
};

//compteur 1 + sessionStorage counter

const btnMoins = document.querySelector("#moins");
const btnPlus = document.querySelector("#plus");
const btnResult = document.querySelector("#result");
let counter = Math.round(sessionStorage.getItem("counterSave"));

function moins() {
  counter--;
  btnResult.innerText = counter;
  sessionStorage.setItem("counterSave", `${counter}`);
}

btnMoins.addEventListener("click", moins);

function plus() {
  counter++;
  btnResult.innerText = counter;
  sessionStorage.setItem("counterSave", `${counter}`);
}

btnPlus.addEventListener("click", plus);

//compteur 2 + sessionStorage counter

const btnMoins1 = document.querySelector("#moins1");
const btnPlus1 = document.querySelector("#plus1");
const btnResult1 = document.querySelector("#result1");
let counter1 = Math.round(sessionStorage.getItem("counterSave1"));

function moins1() {
  counter1--;
  btnResult1.innerText = counter1;
  sessionStorage.setItem("counterSave1", `${counter1}`);
}

btnMoins1.addEventListener("click", moins1);

function plus1() {
  counter1++;
  btnResult1.innerText = counter1;
  sessionStorage.setItem("counterSave1", `${counter1}`);
}

btnPlus1.addEventListener("click", plus1);

//compteur 3 + sessionStorage counter

const btnMoins2 = document.querySelector("#moins2");
const btnPlus2 = document.querySelector("#plus2");
const btnResult2 = document.querySelector("#result2");
let counter2 = Math.round(sessionStorage.getItem("counterSave2"));

function moins2() {
  counter2--;
  btnResult2.innerText = counter2;
  sessionStorage.setItem("counterSave2", `${counter2}`);
}

btnMoins2.addEventListener("click", moins2);

function plus2() {
  counter2++;
  btnResult2.innerText = counter2;
  sessionStorage.setItem("counterSave2", `${counter2}`);
}

btnPlus2.addEventListener("click", plus2);

//compteur 4 + sessionStorage counter

const btnMoins3 = document.querySelector("#moins3");
const btnPlus3 = document.querySelector("#plus3");
const btnResult3 = document.querySelector("#result3");
let counter3 = Math.round(sessionStorage.getItem("counterSave3"));

function moins3() {
  counter3--;
  btnResult3.innerText = counter3;
  sessionStorage.setItem("counterSave3", `${counter3}`);
}

btnMoins3.addEventListener("click", moins3);

function plus3() {
  counter3++;
  btnResult3.innerText = counter3;
  sessionStorage.setItem("counterSave3", `${counter3}`);
}

btnPlus3.addEventListener("click", plus3);

//compteur 5 + sessionStorage counter

const btnMoins4 = document.querySelector("#moins4");
const btnPlus4 = document.querySelector("#plus4");
const btnResult4 = document.querySelector("#result4");
let counter4 = Math.round(sessionStorage.getItem("counterSave4"));

function moins4() {
  counter4--;
  btnResult4.innerText = counter4;
  sessionStorage.setItem("counterSave4", `${counter4}`);
}

btnMoins4.addEventListener("click", moins4);

function plus4() {
  counter4++;
  btnResult4.innerText = counter4;
  sessionStorage.setItem("counterSave4", `${counter4}`);
}

btnPlus4.addEventListener("click", plus4);

//compteur 6 + sessionStorage counter

const btnMoins5 = document.querySelector("#moins5");
const btnPlus5 = document.querySelector("#plus5");
const btnResult5 = document.querySelector("#result5");
let counter5 = Math.round(sessionStorage.getItem("counterSave5"));

function moins5() {
  counter5--;
  btnResult5.innerText = counter5;
  sessionStorage.setItem("counterSave5", `${counter5}`);
}

btnMoins5.addEventListener("click", moins5);

function plus5() {
  counter5++;
  btnResult5.innerText = counter5;
  sessionStorage.setItem("counterSave5", `${counter5}`);
}

btnPlus5.addEventListener("click", plus5);

//compteur 7 + sessionStorage counter

const btnMoins6 = document.querySelector("#moins6");
const btnPlus6 = document.querySelector("#plus6");
const btnResult6 = document.querySelector("#result6");
let counter6 = Math.round(sessionStorage.getItem("counterSave6"));

function moins6() {
  counter6--;
  btnResult6.innerText = counter6;
  sessionStorage.setItem("counterSave6", `${counter6}`);
}

btnMoins6.addEventListener("click", moins6);

function plus6() {
  counter6++;
  btnResult6.innerText = counter6;
  sessionStorage.setItem("counterSave6", `${counter6}`);
}

btnPlus6.addEventListener("click", plus6);

//button reset all counters

let reset = document.querySelector(".reset");

reset.addEventListener("click", () =>{
  counter = 0;
  btnResult.innerText = counter;
  sessionStorage.setItem("counterSave", `${counter}`);

  counter1 = 0;
  btnResult1.innerText = counter1;
  sessionStorage.setItem("counterSave1", `${counter1}`);

  counter2 = 0;
  btnResult2.innerText = counter2;
  sessionStorage.setItem("counterSave2", `${counter2}`);

  counter3 = 0;
  btnResult3.innerText = counter3;
  sessionStorage.setItem("counterSave3", `${counter3}`);

  counter4 = 0;
  btnResult4.innerText = counter4;
  sessionStorage.setItem("counterSave4", `${counter4}`);

  counter5 = 0;
  btnResult5.innerText = counter5;
  sessionStorage.setItem("counterSave5", `${counter5}`);

  counter6 = 0;
  btnResult6.innerText = counter6;
  sessionStorage.setItem("counterSave6", `${counter6}`);
})

/* // compteur sans session storage

const btnMoins6 = document.querySelector("#moins6");
const btnPlus6 = document.querySelector("#plus6");
let btnResult6 = document.querySelector("#result6");
let counter6 = Math.round(btnResult6.innerText);

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
 */
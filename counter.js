/* const btnMoins = document.querySelector(".moins");
const btnPlus = document.querySelectorAll(".plus");
const btnResult = document.querySelectorAll(".result"); */


/* btnMoins.addEventListener("click", function pickMoins() {

}); */

const btnResult = document.querySelectorAll(".result");

document.querySelectorAll('.moins').forEach(btnMoins => {
  btnMoins.addEventListener('click', moins => {
    document.querySelectorAll(".result").forEach((result) => {

      for(let i = 0; i < btnMoins; i++ ){
        if(btnMoins[i] !== e.target){
          counter--
        };
    };

      let counter = Math.round(sessionStorage.getItem("counterSave"));
      counter--;
      result.innerText = counter;
      sessionStorage.setItem("counterSave", `${counter}`);
    });
  })
})

let reset = document.querySelector(".reset");

reset.addEventListener("click", () =>{
  document.querySelectorAll('.result').forEach((resetResult) => {
    resetResult.innerText = 0;
    
    counter = 0;
    sessionStorage.setItem("counterSave", `${counter}`);
  
    counter1 = 0;
    sessionStorage.setItem("counterSave1", `${counter1}`);
  
    counter2 = 0;
    sessionStorage.setItem("counterSave2", `${counter2}`);
  
    counter3 = 0;
    sessionStorage.setItem("counterSave3", `${counter3}`);
  
    counter4 = 0;
    sessionStorage.setItem("counterSave4", `${counter4}`);
  
    counter5 = 0;
    sessionStorage.setItem("counterSave5", `${counter5}`);
  
    counter6 = 0;
    sessionStorage.setItem("counterSave6", `${counter6}`);
  });
  });
  

/* btnMoins.addEventListener("click", function pickMoins() {
  document.querySelectorAll(".result").forEach((result) => {
    let counter = Math.round(sessionStorage.getItem("counterSave"));
    counter--;
    result.innerText = counter;
    sessionStorage.setItem("counterSave", `${counter}`);
  });
});
 */

/* document.querySelectorAll(".moins").forEach((moins) => {
  moins.addEventListener("click", console.log(moins) )
}); */
var elForm = document.querySelector(".site-form");
var youserName = elForm.querySelector(".youser-name");
var youserMoney = elForm.querySelector(".youser-money");
var money = 999;
var elP = document.querySelector(".site-p");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (isNaN(youserMoney.value)) {
    elP.textContent = "Enter the number";
  } 
  else if (youserMoney.value < money) {
   elP.textContent = `You don't have enough money ${youserName.value}`;
  }
  else if(youserMoney.value >= money){
    elP.textContent = `Ther is your ticket ${youserName.value}`;
  }
})
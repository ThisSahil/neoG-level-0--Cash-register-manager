const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");

const message = document.querySelector("#error-msg");

const numOfNotes = document.querySelectorAll(".no-of-notes");

console.log(numOfNotes);

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function billAndBalanceAmountCheck() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Cash provided should be atleast equal to Bill Amount");
    }
  } else {
    showMessage("The bill amount should be greater than 0");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    numOfNotes[i].innerText = Math.trunc(amountToBeReturned / notes[i]);
    amountToBeReturned = amountToBeReturned % notes[i];
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

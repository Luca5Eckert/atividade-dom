var counterValue = 0;

const counterView = document.getElementById('counter');
const buttonPlus = document.getElementById("increment-btn");
const buttonMinus = document.getElementById('decrement-btn');


counterView.textContent = counterValue;

buttonMinus.addEventListener("click", () => {
    counterValue--;
    counterView.textContent = counterValue;
})

buttonPlus.addEventListener("click", () => {
    counterValue++;
    counterView.textContent = counterValue;
})
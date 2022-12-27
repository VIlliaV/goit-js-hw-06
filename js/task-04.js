let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");

decrement.addEventListener("click", onDecrement);
increment.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  onShowValue();
}
function onIncrement() {
  counterValue += 1;
  onShowValue();
}

function onShowValue() {
  value.textContent = counterValue;
}

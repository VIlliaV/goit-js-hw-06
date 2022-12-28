function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = bodyEl.querySelector(".change-color");
const spanEL = bodyEl.querySelector(".color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEL.textContent = `${bodyEl.style.backgroundColor}`;
}

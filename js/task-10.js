function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let countOfSumDiv = 0;
const divEl = document.getElementById("boxes");
const controls = document.getElementById("controls");
const create = controls.querySelector("button[data-create]");
const destroy = controls.querySelector("button[data-destroy]");
const inputEl = controls.querySelector("input");

create.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxDiv = ``;
  for (let i = 0; i < amount; i += 1) {
    const widthDiv = 30 + 10 * (i + countOfSumDiv);
    const heightDiv = 30 + 10 * (i + countOfSumDiv);
    boxDiv += `<div style ="background: ${getRandomHexColor()}; width: ${widthDiv}px; height: ${heightDiv}px"></div>`;
  }
  divEl.insertAdjacentHTML("beforeend", boxDiv);
  countOfSumDiv += Number(amount);
}

function destroyBoxes() {
  divEl.innerHTML = ``;
  countOfSumDiv = 0;
}

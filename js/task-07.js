const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}

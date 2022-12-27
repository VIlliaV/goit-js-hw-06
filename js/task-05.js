const inputEl = document.getElementById("name-input");
const spanEL = document.getElementById("name-output");

inputEl.addEventListener("input", () => {
  inputEl.value === ""
    ? (spanEL.textContent = "Anonymous")
    : (spanEL.textContent = inputEl.value);
});

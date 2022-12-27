const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", onValidation);
// inputEl.classList.add("invalid");
function onValidation() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    // inputEl.classList.replace("invalid", "valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    // inputEl.classList.replace("valid", "invalid");
  }
}

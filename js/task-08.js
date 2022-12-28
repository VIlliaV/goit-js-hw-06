const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onTakeInfo);

function onTakeInfo(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "")
    return alert("не всі поля заповнені");
  const info = {
    email: email.value,
    password: password.value,
  };
  console.log(info);
  event.currentTarget.reset();
}

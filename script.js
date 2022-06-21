const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button");

submitButton.onclick = (e) => {
  const passwordInputs = document.querySelectorAll("input[type='password']");
  const pass1 = passwordInputs[0];
  const pass2 = passwordInputs[1];
  const errMsg = document.querySelector("p[class='error-message']");
  if (pass1.value != pass2.value) {
    e.preventDefault();
    passwordInputs.forEach((input) => {
      input.classList.add("error");
    });
    errMsg.removeAttribute("hidden");
  } else {
    alert("Thank you for signing up!");
    document.location.reload();
  }
};

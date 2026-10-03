const signupForm  = document.querySelector(".signup-form");
const emailInput = document.getElementById("email");
const signupCard = document.querySelector(".signup-card");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const submittedEmail = document.querySelector(".submitted-email");
const dismissBtn = document.querySelector(".dismiss-btn");
signupForm.addEventListener("submit",(event) => {
  event.preventDefault();
  const email = emailInput.value;
  if (!emailInput.checkValidity()) {
    errorMessage.style.display = "block";
    emailInput.classList.add("input-error");
    return;
}
errorMessage.style.display = "none";

submittedEmail.textContent = email;

signupCard.style.display = "none";
successMessage.style.display = "block";
});

dismissBtn.addEventListener("click",() => {
  successMessage.style.display = "none";
  signupCard.style.display = "";
  signupForm.reset();
  emailInput.classList.remove("input-error");
});
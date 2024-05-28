const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const passwod = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".errorMsg");
  const errorIcon = inputBox.querySelector(".icon-error");

  errorDisplay.innerText = message;
  inputBox.classList.add("error");
  inputBox.classList.remove("success");
  errorIcon.style.display = "block";
};

const setSuccess = (element) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector(".errorMsg");
    const errorIcon = inputBox.querySelector(".icon-error");
  
    if (errorDisplay) {
      errorDisplay.innerText = "";
    }
    
    inputBox.classList.add("success");
    inputBox.classList.remove("error");
    errorIcon.style.display = "none";
  };

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(String(email).toLowerCase());
};

const validateInput = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwodValue = passwod.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Looks like this not an email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this not an email");
  } else {
    setSuccess(email);
  }

  if (passwodValue === "") {
    setError(passwod, "Password cannot be empty");
  } else {
    setSuccess(passwod);
  }
};
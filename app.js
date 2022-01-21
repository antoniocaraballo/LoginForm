// Global Vars

let uName = document.querySelector("#uNmae");
let uEmail = document.querySelector("#uEmail");
let pw = document.querySelector("#pw");

let nameError = document.createElement("span");
let emailError = document.createElement("span");
let pwError = document.createElement("span");

const form = document.querySelector(".form");
const btnSignIn = document.querySelector("#btnSignIn");
const btnSignUp = document.querySelector("#btnSignUp");

// Events Loader

window.onload = loadEventListeners();

function loadEventListeners() {
  btnSignIn.addEventListener("click", signIn);
  uEmail.addEventListener("click", focusInput);
  pw.addEventListener("click", focusInput);
}

// Cancel SetTimeOut with input focus
function focusInput() {
  if (
    uEmail.style.border === "2px solid red" ||
    pw.style.border === "2px solid red"
  ) {
    emailError.remove();
    pwError.remove();
    uEmail.style = "none";
    pw.style = "none";
    return false;
  }
}

// Sign In Function

function signIn(e) {
  e.preventDefault();

  if (
    uEmail.style.border === "2px solid red" ||
    pw.style.border === "2px solid red"
  ) {
    emailError.remove();
    pwError.remove();
    uEmail.style = "none";
    pw.style = "none";
    return false;
  } else {
    validation();
  }

  function validation(e) {
    // Email Validation

    if (uEmail.value == "") {
      emailError.innerText = "Enter email";
      emailError.classList.add("error");

      let label = document.querySelector("#emailLabel");

      label.appendChild(emailError);

      uEmail.style.border = "2px solid red";

      setTimeout(function () {
        emailError.remove();
        uEmail.style = "none";
      }, 5000);
    } else {
      console.log("Works");
    }

    // Password Validation

    if (pw.value == "") {
      pwError.innerText = "Enter password";
      pwError.classList.add("error");

      let label = document.querySelector("#pwLabel");

      label.appendChild(pwError);

      pw.style.border = "2px solid red";

      setTimeout(function () {
        pwError.remove();
        pw.style = "none";
      }, 5000);
    } else {
      console.log("Works");
    }

    form.reset();

    // (uEmail.value.match("@"))
    // window.location.href="welcomePage.html";
  }
}

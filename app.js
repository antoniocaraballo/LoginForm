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
    }

    // Sign In

    if (uEmail.value.includes("@" && ".")) {
      let allUsers = JSON.parse(localStorage.getItem("users")) || [];

      let exist = true;

      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == uEmail.value && allUsers[i].pw == pw.value) {
          exist = false;
          window.location.href = "welcomePage.html";
        } else if (exist == true && allUsers[i].email != uEmail.value) {
          emailError.innerText = "User not found";
          emailError.classList.add("error");

          let label = document.querySelector("#emailLabel");

          label.appendChild(emailError);

          uEmail.style.border = "2px solid red";

          setTimeout(function () {
            emailError.remove();
            uEmail.style = "none";
          }, 5000);
        } else if (exist == true && allUsers[i].pw != pw.value) {
          pwError.innerText = "Wrong password";
          pwError.classList.add("error");

          let label = document.querySelector("#pwLabel");

          label.appendChild(pwError);

          pw.style.border = "2px solid red";

          setTimeout(function () {
            pwError.remove();
            pw.style = "none";
          }, 5000);
        }
      }
    }

    form.reset();
  }
}

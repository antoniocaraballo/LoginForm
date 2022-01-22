// Global Vars

let uName = document.querySelector("#uName");
let uEmail = document.querySelector("#uEmail");
let pw = document.querySelector("#pw");

let nameError = document.createElement("span");
let emailError = document.createElement("span");
let pwError = document.createElement("span");

const form = document.querySelector(".form");
const btnSignUp = document.querySelector("#btnSignUp");

// Events Loader

window.onload = loadEventListeners();

function loadEventListeners() {
  btnSignUp.addEventListener("click", signUp);
  uName.addEventListener("click", focusInput);
  uEmail.addEventListener("click", focusInput);
  pw.addEventListener("click", focusInput);
}

// Cancel SetTimeOut with input focus
function focusInput() {
  if (
    uEmail.style.border === "2px solid red" ||
    pw.style.border === "2px solid red"
  ) {
    nameError.remove();
    emailError.remove();
    pwError.remove();
    uName.style = "none";
    uEmail.style = "none";
    pw.style = "none";
    return false;
  }
}

// Sign In Function

function signUp(e) {
  e.preventDefault();

  if (
    uEmail.style.border === "2px solid red" ||
    pw.style.border === "2px solid red"
  ) {
    nameError.remove();
    emailError.remove();
    pwError.remove();
    uName.style = "none";
    uEmail.style = "none";
    pw.style = "none";
    return false;
  } else {
    validation();
  }

  function validation(e) {
    // Name Validation

    if (uName.value.length < 3) {
      nameError.innerText = "Enter name";
      nameError.classList.add("error");

      let label = document.querySelector("#nameLabel");

      label.appendChild(nameError);

      uName.style.border = "2px solid red";

      setTimeout(function () {
        nameError.remove();
        uName.style = "none";
      }, 5000);
    }

    // Email Validation
    let emailCheck = uEmail.value.includes("@" && ".");

    if (uEmail.value.length < 3 || emailCheck == false) {
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

    if (pw.value.length < 3) {
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

    if (
      uName.value.length > 3 &&
      uEmail.value.includes("@" && ".") &&
      pw.value.length > 3
    ) {
      let allUsers = JSON.parse(localStorage.getItem("users")) || [];

      let user = {
        name: uName.value,
        email: uEmail.value,
        pw: pw.value,
      };

      let exist = true;

      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == uEmail.value) {
          exist = false;
          emailError.innerText = "Email taken";
          emailError.classList.add("error");

          let label = document.querySelector("#emailLabel");

          label.appendChild(emailError);

          uEmail.style.border = "2px solid red";

          setTimeout(function () {
            emailError.remove();
            uEmail.style = "none";
          }, 5000);
        }
      }

      if (exist == true) {
        allUsers.push(user);
      }

      localStorage.setItem("users", JSON.stringify(allUsers));
    }

    form.reset();
    // (uEmail.value.match("@"))
    // window.location.href="welcomePage.html";
  }
}

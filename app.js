// Variables
const loginForm = document.querySelector(".loginForm");

let title = document.querySelector("#title");
const siBtn = document.querySelector("#siBtn");
const suBtn = document.querySelector("#suBtn");

// Load Event Listeners
loadEventListeners();

function loadEventListeners() {
  // Register Form
  const signUp = document.querySelector("#signUp");
  signUp.addEventListener("click", registerForm);
  // Sign In Form
  const signIn = document.querySelector("#signIn");
  signIn.addEventListener("click", signInForm);

  // Sign in Button
  siBtn.addEventListener("click", siSubmit);

  // Sign up Button
  suBtn.addEventListener("click", suSubmit);
}

// Sign Up Form
function registerForm() {
  title.textContent = "Register";

  siBtn.style.display = "none";
  suBtn.style.display = "flex";

  loginForm.children[1].style.display = "flex";
  loginForm.children[2].style.display = "flex";

  signUp.style.display = "none";
  signIn.style.display = "inline";

  signUp.parentElement.children[0].textContent = "Already have an account?";
}

// Sign In Form
function signInForm() {
  title.textContent = "Sign in";

  siBtn.style.display = "flex";
  suBtn.style.display = "none";

  loginForm.children[1].style.display = "none";
  loginForm.children[2].style.display = "none";

  signIn.style.display = "none";
  signUp.style.display = "inline";

  signIn.parentElement.children[0].textContent = "Don't have an account?";
}

// Sign up Button

function suSubmit(e) {
  let name = document.querySelector("#nameInput").value;
  let email = document.querySelector("#emailInput").value;
  let pass = document.querySelector("#passInput").value;

  let oldCustomers = JSON.parse(localStorage.getItem("customersList")) || [];

  let customer = { name: name, email: email, pass: pass };

  oldCustomers.push(customer);

  localStorage.setItem("customersList", JSON.stringify(oldCustomers));

  loginForm.reset();
  e.preventDefault();
}

// Sign in Button

function siSubmit(e) {
  let email = document.querySelector("#emailInput").value;
  let pass = document.querySelector("#passInput").value;

  let allCustomers = localStorage.getItem("customersList");

  let c = JSON.parse(allCustomers);

  for (let i = 0; i < c.length; i++) {
    if (c[i].email === email && c[i].pass === pass) {
      console.log(email, pass);
    }
  }

  loginForm.reset();
  e.preventDefault();
}

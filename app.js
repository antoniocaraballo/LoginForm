// Variables
const loginForm = document.querySelector(".loginForm");
const button = document.querySelector(".btn");
let title = document.querySelector("#title");

// Load Event Listeners
loadEventListeners();

function loadEventListeners() {
  // Register Form
  const signUp = document.querySelector("#signUp");
  signUp.addEventListener("click", registerForm);
  // Sign In Form
  const signIn = document.querySelector("#signIn");
  signIn.addEventListener("click", signInForm);
}

// Register Form
function registerForm() {
  title.textContent = "Register";

  button.textContent = "Sign up";

  loginForm.children[1].style.display = "flex";
  loginForm.children[2].style.display = "flex";

  signUp.style.display = "none";
  signIn.style.display = "inline";

  signUp.parentElement.children[0].textContent = "Already have an account?";
}

// Sign In
function signInForm() {
  title.textContent = "Sign in";

  button.textContent = "Sign in";

  loginForm.children[1].style.display = "none";
  loginForm.children[2].style.display = "none";

  signIn.style.display = "none";
  signUp.style.display = "inline";

  signIn.parentElement.children[0].textContent = "Don't have an account?";
}

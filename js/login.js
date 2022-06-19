const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const app = document.getElementById("app");
const helloText = app.querySelector("#hello");

const NAME_KEY = "name";
const HIDDEN_CLASS = "hidden";

function handleButtonClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const name = loginInput.value;
  localStorage.setItem(NAME_KEY, name);
  loadApp(name);
}

function loadApp(name) {
  app.classList.remove(HIDDEN_CLASS);
  helloText.innerText = `안녕하세요, ${name}님!`;
}

const savedName = localStorage.getItem(NAME_KEY);
if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginButton.addEventListener("click", handleButtonClick);
} else {
  loadApp(savedName);
}

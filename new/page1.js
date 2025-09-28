document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const body = document.body;

  // Load saved theme from localStorage
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "night-mode") {
    body.classList.remove("light-mode");
    body.classList.add("night-mode");
    checkbox.checked = false; // Unchecked for night mode
  } else {
    // Default to light-mode (checked)
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      body.classList.remove("night-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("night-mode");
      localStorage.setItem("theme", "night-mode");
    }
  });
});

// JS part: Put this in a <script> tag at the end of your <body>, or in an external .js file and link it.
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});
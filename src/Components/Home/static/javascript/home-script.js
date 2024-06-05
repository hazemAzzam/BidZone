window.onload = function () {
  const container = document.getElementById("container");

  const registerBtn = document.getElementById("register-toggle-form");
  const loginBtn = document.getElementById("login-toggle-form");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
};

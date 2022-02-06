const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "/admin") {
        location.replace("/Admin/admin-panel/index.html")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

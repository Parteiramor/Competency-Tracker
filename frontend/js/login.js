const createPasswordLink = document.getElementById("create-password-link");
const loginSection = document.getElementById("login-section");
const registrationSection = document.getElementById("registration-section");
const backToLoginLink = document.getElementById("back-to-login-link");
const forgotPasswordLink = document.getElementById("forgot-password-link");

/* Listen for clicks on the create password link */
createPasswordLink.addEventListener("click", (event) => {
    event.preventDefault();

    loginSection.classList.add("hidden");
    registrationSection.classList.remove("hidden");
});


/* Listen for clicks on the the back to login link */
backToLoginLink.addEventListener("click", (event) => {
    event.preventDefault();

    loginSection.classList.remove("hidden");
    registrationSection.classList.add("hidden");
});

/* Listen fpr click on the forgot password link */
forgotPasswordLink.addEventListener("click", (event) => {
    event.preventDefault();

    alert("Please contact the administrator to reset you password.");
});
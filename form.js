// Get the login form and create account form
const loginForm = document.getElementById("login-form");
const createAccountForm = document.getElementById("create-account-form");

// Get the create account link and create account box
const createAccountLink = document.getElementById("create-account-link");
const createAccountBox = document.querySelector(".create-account-box");

// Hide the create account box initially
createAccountBox.style.display = "none";

// Add event listener to the create account link to show the create account box
createAccountLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    createAccountBox.style.display = "block";
});

// Add event listener to the create account form to create a new account
createAccountForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newUsername = createAccountForm.elements["new-username"].value;
    const newPassword = createAccountForm.elements["new-password"].value;
    const confirmPassword = createAccountForm.elements["confirm-password"].value;

    // Check if the passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save the new username and password to local storage
    localStorage.setItem(newUsername, newPassword);
    alert("Account created successfully!");

    // Clear the form and hide the create account box
    createAccountForm.reset();
    createAccountBox.style.display = "none";
    loginForm.style.display = "block";
});

// Add event listener to the login form to authenticate the user
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = loginForm.elements["username"].value;
    const password = loginForm.elements["password"].value;

    // Check if the username and password match the saved data in local storage
    const savedPassword = localStorage.getItem(username);
    if (savedPassword !== password) {
        alert("Incorrect username or password!");
        return;
    }

     // Login the user and clear the form
     alert("Login successful!");
     loginForm.reset();
 
     // Redirect to the home page
     window.location.href = "./home.html";
});

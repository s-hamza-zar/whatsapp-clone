function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert("Login Successful!");
    window.location.href = "index.html"; 
}

function toggleForm() {
    let title = document.getElementById("formTitle");
    let toggleText = document.getElementById("toggleText");
    let button = document.querySelector(".btn");

    if (title.innerText === "Login") {
        title.innerText = "Sign Up";
        toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Login</a>';
        button.innerText = "Sign Up";
        button.setAttribute("onclick", "signup()");
    } else {
        title.innerText = "Login";
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleForm()">Sign Up</a>';
        button.innerText = "Login";
        button.setAttribute("onclick", "login()");
    }
}

function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert("Signup Successful! Please login.");
    toggleForm();
}
document.addEventListener("DOMContentLoaded", function () {
    switchChat("This");
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function switchChat(chatName) {
    document.getElementById("chatTitle").innerText = chatName;
    let chatBox = document.getElementById("chatMessages");

    chatBox.innerHTML = "";

    let welcomeMsg = document.createElement("p");
    welcomeMsg.classList.add("message", "received");
    welcomeMsg.innerText = `Welcome to ${chatName} chat!`;

    chatBox.appendChild(welcomeMsg);
}

function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value.trim();

    if (message !== "") {
        let chatBox = document.getElementById("chatMessages");

        let newMessage = document.createElement("p");
        newMessage.classList.add("message", "sent");
        newMessage.innerText = message;
        chatBox.appendChild(newMessage);

        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn"); 
    alert("Logged out!");
    window.location.href = "login.html";
}


function searchContacts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let contacts = document.getElementById("contactList").getElementsByTagName("li");

    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i].innerText.toLowerCase();
        contacts[i].style.display = contact.includes(input) ? "" : "none";
    }
}

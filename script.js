function getMessage() {
    return "Hello from JavaScript CI Pipeline!";
}

document.getElementById("msg").textContent = getMessage();

module.exports = getMessage; // for testing

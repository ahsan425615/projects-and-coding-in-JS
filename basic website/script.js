function displayGreeting() {
    const nameInput = document.getElementById('nameInput');
    const greetingMessage = document.getElementById('greetingMessage');
    const name = nameInput.value.trim();

    if (name) {
        greetingMessage.textContent = `Hello, ${name}!`;
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
}

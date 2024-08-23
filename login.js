document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value.trim();
    const password = form.password.value;
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const message = document.getElementById('message');
    let isValid = true;
    [usernameError, passwordError].forEach(error => error.style.display = 'none');
    if (!username) {
        usernameError.textContent = 'Username is required.';
        usernameError.style.display = 'block';
        isValid = false;
    }
    if (!password) {
        passwordError.textContent = 'Password is required.';
        passwordError.style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        const storedUsername = localStorage.getItem('signup-username');
        const storedPassword = localStorage.getItem('signup-password');

        if (username === storedUsername && password === storedPassword) {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
            localStorage.setItem('loggedInUser', username);
            setTimeout(() => {
                window.location.href = 'Gallerita.html';
            }, 1250); 
        } else {
            message.style.color = 'red';
            message.textContent = 'Invalid username or password.';
        }
    } else {
        message.style.color = 'red';
        message.textContent = '';
    }
});

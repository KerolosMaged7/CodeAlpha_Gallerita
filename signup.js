document.getElementById('signup-form').addEventListener('submit', function(event) {
event.preventDefault();
const form = event.target;
const username = form.username.value.trim();
const email = form.email.value.trim();
const password = form.password.value;
const confirmPassword = form['confirm-password'].value;
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const message = document.getElementById('message');
let isValid = true;
[usernameError, emailError, passwordError, confirmPasswordError].forEach(error => error.style.display = 'none');
    if (!username) {
        usernameError.textContent = 'Username is required!';
        usernameError.style.display = 'block';
        isValid = false;
    }
    if (!email) {
        emailError.textContent = 'Email is required!';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format!';
        emailError.style.display = 'block';
        isValid = false;
    }
    if (!password) {
        passwordError.textContent = 'Password is required!';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long!';
        passwordError.style.display = 'block';
        isValid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match!';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        localStorage.setItem('signup-username', username);
        localStorage.setItem('signup-password', password);
        message.style.color = 'green';
        message.textContent = 'Sign-up successful!';
        setTimeout(() => {
            window.location.href = 'Gallerita.html';
        }, 1250); 
    } else {
        message.style.color = 'red';
        message.textContent = '';
    }
});
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

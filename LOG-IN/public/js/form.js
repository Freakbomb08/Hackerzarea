document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form[action="/api/auth/signup"]');
    const loginForm = document.querySelector('form[action="/api/auth/login"]');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            const password = signupForm.querySelector('input[name="password"]').value;
            const contactNumber = signupForm.querySelector('input[name="contactNumber"]').value;
            const email = signupForm.querySelector('input[name="email"]').value;
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
            }
            if (!/^\d{10}$/.test(contactNumber)) {
                alert('Contact number must be 10 digits.');
                event.preventDefault();
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email.');
                event.preventDefault();
            }
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const email = loginForm.querySelector('input[name="email"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email.');
                event.preventDefault();
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
            }
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (rememberMe) {
            localStorage.setItem('auth_token', 'user_token_value');
        } else {
            sessionStorage.setItem('auth_token', 'user_token_value');
        }
        localStorage.removeItem('auth_token');
        
        const result = await response.json();
        if (response.ok) {
            messageDiv.style.color = 'green';
            messageDiv.textContent = result.message;
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1500);
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = result.message;
        }
    } catch (error) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'An error occurred. Please try again later.';
    }
});

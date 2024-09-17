// form.js - Simple client-side validation
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form[action="/api/auth/signup"]');
    const loginForm = document.querySelector('form[action="/api/auth/login"]');

    // Validate signup form
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            const password = signupForm.querySelector('input[name="password"]').value;
            const contactNumber = signupForm.querySelector('input[name="contactNumber"]').value;
            const email = signupForm.querySelector('input[name="email"]').value;

            // Simple password length validation
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault(); // Prevent form submission
            }

            // Validate contact number to ensure it's numeric and has 10 digits
            if (!/^\d{10}$/.test(contactNumber)) {
                alert('Contact number must be 10 digits.');
                event.preventDefault();
            }

            // Email format validation (basic)
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email.');
                event.preventDefault();
            }
        });
    }

    // Validate login form (optional)
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

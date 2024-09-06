document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check if username and password match the stored credentials
            if (localStorage.getItem(username) === password) {
                alert('Đăng nhập thành công!');
                window.location.href = 'templates/welcome.html'; // Redirect to template in subfolder
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không đúng.');
            }
        });
    }

    // Handle signup link click
    const signupLink = document.getElementById('signup');
    if (signupLink) {
        signupLink.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    // Handle forgot password link click
    const forgotPassLink = document.getElementById('forgotPass');
    if (forgotPassLink) {
        forgotPassLink.addEventListener('click', () => {
            window.location.href = 'forgotpass.html';
        });
    }
});

// Handle signup form submission
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Save the new username and password to localStorage
            if (username && password) {
                localStorage.setItem(username, password);
                alert('Đăng ký thành công! Bạn có thể đăng nhập.');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert('Vui lòng điền tên đăng nhập và mật khẩu.');
            }
        });
    }
});

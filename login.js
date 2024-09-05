document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);

            fetch('login.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(result => {
                    if (result.includes('Đăng nhập thành công!')) {
                        window.location.href = 'templates/welcome.html'; // Điều hướng đến trang chào mừng
                    } else {
                        alert(result); // Hiển thị thông báo lỗi
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }
});

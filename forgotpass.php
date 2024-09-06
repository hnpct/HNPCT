<?php
$conn = new mysqli('localhost', 'username', 'password', 'my_database');

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];

    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $reset_token = bin2hex(random_bytes(50));
        $sql = "UPDATE users SET reset_token='$reset_token' WHERE username='$username'";
        if ($conn->query($sql) === TRUE) {
            echo "Email đặt lại mật khẩu đã được gửi.";
        } else {
            echo "Lỗi khi tạo token đặt lại mật khẩu.";
        }
    } else {
        echo "Tài khoản không tồn tại!";
    }
}

$conn->close();
?>

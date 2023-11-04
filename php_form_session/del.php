<?php
    session_start();

    // Hủy toàn bộ session
    session_destroy();

    // Chuyển hướng trở lại trang chính hoặc trang khác
    header("Location: index.php"); // Chuyển hướng về trang chính hoặc trang bạn mong muốn
    exit();
?>
<?php
    session_start();

    // Khởi tạo biến session nếu chưa tồn tại
    if (!isset($_SESSION['data'])) {
        $_SESSION['data'] = array();
    }

    // Xử lý thêm danh mục từ Form 1
    if (isset($_POST['addCategory'])) {
        $category = $_POST['category'];
        $_SESSION['data'][$category] = array();
    }

    // Xử lý thêm sản phẩm từ Form 2
    if (isset($_POST['addProduct'])) {
        $category = $_POST['category'];
        $product = $_POST['product'];

        // Kiểm tra xem danh mục đã tồn tại trong session chưa
        if (array_key_exists($category, $_SESSION['data'])) {
            $_SESSION['data'][$category][] = $product;
        }
    }
?>
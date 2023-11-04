<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Form 1: Thêm Danh Mục</h1>
        <form method="post">
            <label for="category">Danh Mục:</label>
            <input type="text" name="category" id="category">
            <button type="submit" name="addCategory">Thêm</button>
        </form>

    <h1>Form 2: Thêm Sản Phẩm</h1>
        <form method="post">
            <label for="categorySelect">Chọn Danh Mục:</label>
            <select name="category" id="categorySelect">
                <option value="">--Chọn một danh mục--</option>
                <?php include("category_ss.php") ?>
            </select>
            <br>
            <label for="product">Sản Phẩm:</label>
            <input type="text" name="product" id="product">
            <button type="submit" name="addProduct">Thêm</button>
        </form>

    <h1>Danh Sách Danh Mục và Sản Phẩm</h1>
        <ul>
            <?php include("result.php") ?>
        </ul>
    <button><a href="del.php" style="text-decoration:none">Xóa Session</a></button>
</body>
</html>
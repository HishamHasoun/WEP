<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>



<?php
$user = $_GET['user'];
$passwd = $_GET['passwd'];
$vorhanden = false;
$filename = 'data.txt';

$txt = md5($user . $passwd);
echo $txt;

$current = file_get_contents($filename);

$current .= $txt . "\n";


file_put_contents($filename, $current);

?>


<body>

    <form method="get">
        User : <br />
        <input type="text" name="user"><br />
        passwd : <br />
        <input type="text" name="passwd"><br />
        <input type="submit">
    </form>
    </form>
</body>

</html>
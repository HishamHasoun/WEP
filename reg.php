<!DOCTYPE html>
<html>

<body>
    <?php
    $user = $_GET['user'];
    $passwd = $_GET['passwd'];
    $filename = 'data.txt';

    $txt = md5($user . $passwd);

    $current = file_get_contents($filename);

    $current .= $txt . "\n";
    echo $current;

    file_put_contents($filename, $current);
    $myfile = fopen($filename, "r") or die("Unable to open file!<br>");
    header("Location: indexx.html");
    ?>
</body>

</html>
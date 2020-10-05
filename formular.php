<!DOCTYPE html>
<html>

<body>
    <?php
    $user = $_GET['user'];
    $passwd = $_GET['passwd'];

    $txt = md5($user . $passwd);

    $filename = "data.txt";

    $myfile = file($filename);
    for ($i = 0; $i < count($myfile); $i++) {
        if ($txt . "\n" == $myfile[$i]) :
            header("Location: indexx.html");
        endif;
    }
    echo "Username oder password falsch...<br>";

    ?>
</body>

</html>
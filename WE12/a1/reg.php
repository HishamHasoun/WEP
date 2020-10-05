<!DOCTYPE html>
<html>
<body>
<?php 
    $user = $_GET['user'];
    $passwd = $_GET['passwd'];
    $vorhanden = false;
    $filename = 'data.txt';

    $txt = $user . "!!" . $passwd;

    $current = file_get_contents($filename);

    $myfile = fopen($filename, "r") or die("Unable to open file!<br>");
    while(!feof($myfile)) {
        $d = fgets($myfile);
        $item = explode("!!", $d);
        if ($GLOBALS['user'] === $item[0] ):
            if ($GLOBALS['passwd']."\n" === $item[1]):
                echo "ist Vorhanden";
                $GLOBALS['vorhanden'] = true;
            endif;
        endif;
        
    }
    fclose($myfile);

    if(!$vorhanden):
        $current .= $txt."\n";
        echo "Erfolgreich registriert ... <br>";
    endif;

    file_put_contents($filename, $current);
    $myfile = fopen($filename, "r") or die("Unable to open file!<br>");
?> 
</body>
</html>
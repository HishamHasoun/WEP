
<!DOCTYPE html>
<html>
<body>
<?php 
    $user = $_GET['user'];
    $passwd = $_GET['passwd'];
    $erfolg = false;
    
    $filename = "data.txt";
    $myfile = fopen($filename, "r") or die("Unable to open file!<br>");
    
    
    while(!feof($myfile)) {
        $d = fgets($myfile);
        $item = explode("!!", $d);
        if ($GLOBALS['user'] === $item[0] ):
            if ($GLOBALS['passwd']."\n" === $item[1]):
                echo "Erfolgreich angemeldet ...";
                $GLOBALS['erfolg'] = true;
            endif;
        endif;
        
    }
    fclose($myfile);
    if(!$erfolg):
        echo "Username oder password falsch...<br>";
    endif;
?> 
</body>
</html>
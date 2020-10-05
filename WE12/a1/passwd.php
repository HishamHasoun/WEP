<?php
$My_Secrets = [
    'abc' => 'aabb',
    'aaa' => 'bbb'
];

function printArray() {
    static $x = 0;
    echo count($x++);
}
    
?>
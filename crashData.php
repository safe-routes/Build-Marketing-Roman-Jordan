<?php
$url = "http://crashpredictr-env.jjrxtdfaz3.us-east-2.elasticbeanstalk.com/predict/ALAMEDA";
    $crashData = file_get_contents($url);
    echo $crashData;
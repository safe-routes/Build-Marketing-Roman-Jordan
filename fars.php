<?php 
if(isset($_POST)){
    $url = "https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states=1,51&fromYear=2014&toYear=2015&minNumOfVehicles=1&maxNumOfVehicles=6&format=json";
    $crashData = file_get_contents($url);
    echo $crashData;
}else{
    return 'Post not set';
}
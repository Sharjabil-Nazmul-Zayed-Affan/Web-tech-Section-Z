<?php
    session_start();

    $uname= $_POST["uname"];
    $pass= $_POST["pass"];

    $_SESSION["uname"]= $uname;

    echo "Hi <b>$uname</b> why your password is <b>$pass</b> ? Change it now!!"

    $hasunameError = true;
    $haspassError = true;

    if(!$uname){
        $_SESSION["unameError"] = "Username Requierd";
    }
    else{
        unset($_SESSION["unameError"]);
        $hasunameError = false;
    }

    if(!$pass){
        $_SESSION["passError"] = "Password Requierd";
    }
    else{
        unset($_SESSION["passError"]);
        $haspassError = false;
    }

    if($hasunameError || $haspassError){
        header("Location: ../Controller/task.php");
    }
?>
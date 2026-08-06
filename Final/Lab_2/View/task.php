<?php
    session_start();
    
?>


<html>
    <body>
        <form action="" method = "POST">
            <lable for ="username">Username: </lable>
            <input type = "text" name = "uname" value="<?php echo $uname;?>"/>
            <p style="color:red"><?php echo $unameError;?></P>

            <lable for ="password">Password: </lable>
            <input type = "password" name ="pass" >
            <p style="color:red"><?php echo $passError;?></p>
        </form>
    </body>
</html>
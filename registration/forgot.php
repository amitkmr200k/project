<?php
require("header.php");
require("connection.php");
require("fetch_email_user_name.php");
?>
<?php
if(isset($_POST['submit']))
{
	$error;
	foreach ($get_email_id as $key => $value) 
	{
		if($value == $_POST['email_id'])
		{
			$email=$_POST['email_id'];
			$password=md5(uniqid(rand(1,100),true));;
			$change_password="UPDATE user SET password='{$password}' WHERE email_id='{$email}'";
			$result=mysqli_query($connection,$change_password);
//sending the password			
			$res = mail ( $email, "activation link","Your new Password is {$password}");
		}	
		else
		{
			$error= "Email ID not in database";
		}
	}
	if(empty($error))
	{
		echo "<center>Password has been sent, please check your inbox </center>";	
	}
}
?>
<center>
	<div class="jumbotron">
		<font color=red><?php echo $error;?></font>
		<br/><br/>
		<form action="forgot.php" method="POST">
			Enter your Email ID : <input type="text" value="" name="email_id">
			<input type="submit" value="Submit" name="submit"> 
		</form>
	</div>
</center>
<?php require("footer.html");?>
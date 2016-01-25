<?php
require("header2.html");
require("connection.php");
require("go_to.php");
?>
<div class="container">
<div class="jumbotron">
<?php
if(!isset($_GET['email_id']))
{
	
	echo "Congratulations!!!<br/>You are now registered , please check your mail for acitvating the account";

}
else
{	
//feching the activation code from database 
	$query1="SELECT activate_code FROM user where email_id='$_GET[email_id]'";
	$res=mysqli_query($connection,$query1);
	$get_activation_code=mysqli_fetch_assoc($res);
//if activation code matches acitvate the account
	if($get_activation_code['activate_code']==$_GET['activation_link'])
	{
		$query="UPDATE user SET ";
		$query.="activate=1 ";
		$query.=" WHERE email_id='{$_GET['email_id']}' ";

		$result=mysqli_query($connection,$query);
		if(!$result)
				{
					die("Database query failed");
				}
				else
				{
					redirect("login.php");
					
				}
	}
		else
		{
			echo "Please activate the account from the link sent";
		}			
//close connection 
	mysqli_free_result($result);


}
?>
</div>
</div>

<?php include("footer.html");?>
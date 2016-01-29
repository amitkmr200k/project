<?php
$query1="SELECT email_id from user";
$query2="SELECT user_name from user";
$result1=mysqli_query($connection,$query1);
$result2=mysqli_query($connection,$query2);
// fetching data
$get_email_id=array();
while($row1=mysqli_fetch_assoc($result1))
{
	$get_email_id=$row1;
}
$get_user_name=array();
while($row2=mysqli_fetch_assoc($result2))
{
	$get_user_name=$row2;
}
mysqli_free_result($result);
?>

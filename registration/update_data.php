<?php
session_start();
require_once("go_to.php");
require_once("connection.php");

$query="UPDATE user SET ";
$query.="first_name='{$_POST["first_name"]}', ";
$query.="middle_name='{$_POST["middle_name"]}', ";
$query.="last_name='{$_POST["last_name"]}', ";
$query.="email_id='{$_POST["email_id"]}', ";
$query.="user_name='{$_POST["user_name"]}', ";
$query.="password='{$_POST["password"]}', ";
$query.="gender='{$_POST["gender"]}', ";
$query.="age='{$_POST["age"]}', ";
$query.="dob='{$_POST["dob"]}', ";
$query.="marital_status='{$_POST["marital_status"]}', ";
$query.="employment='{$_POST["employment"]}', ";
$query.="employer='{$_POST["employer"]}', ";
$query.="residence_street='{$_POST["residence_street"]}', ";
$query.="residence_city='{$_POST["residence_city"]}', ";
$query.="residence_state='{$_POST["residence_state"]}', ";
$query.="residence_pincode='{$_POST["residence_pincode"]}', ";
$query.="residence_contact_no='{$_POST["residence_contact_no"]}', ";
$query.="residence_fax_no='{$_POST["residence_fax_no"]}', ";
$query.="permanent_street='{$_POST["permanent_street"]}', ";
$query.="permanent_city='{$_POST["permanent_city"]}', ";
$query.="permanent_state='{$_POST["permanent_state"]}', ";
$query.="permanent_pincode='{$_POST["permanent_pincode"]}', ";
$query.="permanent_contact_no='{$_POST["permanent_contact_no"]}', ";
$query.="permanent_fax_no='{$_POST["permanent_fax_no"]}', ";
$query.="comment='{$_POST["comment"]}' ";
$query.=" WHERE id='{$_SESSION[id]}' ";

//sending the query
$result=mysqli_query($connection,$query);
// checks for query error
if(!$result)
{
	die("Database query failed");
}
else
{
	//success
	echo "success in inserting the value <hr/>";
	$_SESSION["value"]=1;
}
?>

<?php
//close connection 
mysqli_close($connection);
redirect("edit_profile.php");
?>

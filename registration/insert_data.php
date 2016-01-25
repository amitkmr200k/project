<?php
require_once("go_to.php");
require_once("connection.php");

$query="INSERT INTO user(first_name,middle_name,last_name,email_id,user_name,password,gender,age,dob,";
$query.="marital_status,employment,employer,residence_street,residence_city,residence_state,";
$query.="residence_pincode,residence_contact_no,residence_fax_no,";
$query.="permanent_street,permanent_city,permanent_state,";
$query.="permanent_pincode,permanent_contact_no,permanent_fax_no,comment";
$query.=") ";
$query.="VALUES('{$_POST["first_name"]}','{$_POST["middle_name"]}','{$_POST["last_name"]}',";
$query.="'{$_POST["email_id"]}','{$_POST["user_name"]}','{$_POST["password"]}','{$_POST["gender"]}',";
$query.="'{$_POST["age"]}','{$_POST["dob"]}','{$_POST["marital_status"	]}','{$_POST["employment"]}',";
$query.="'{$_POST["employer"]}','{$_POST["residence_street"]}','{$_POST["residence_city"]}','{$_POST["residence_state"]}',";
$query.="'{$_POST["residence_pincode"]}','{$_POST["residence_contact_no"]}','{$_POST["residence_fax_no"]}',";
$query.="'{$_POST["permanent_street"]}','{$_POST["permanent_city"]}','{$_POST["permanent_state"]}',";
$query.="'{$_POST["permanent_pincode"]}','{$_POST["permanent_contact_no"]}','{$_POST["permanent_fax_no"]}',";
$query.="'{$_POST["comment"]}'";
$query.=")";

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
}
?>
<?php
//close connection 
mysqli_close($connection);
redirect("activate.php");
?>

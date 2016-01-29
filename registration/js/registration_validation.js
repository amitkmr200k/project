function validate()
{
//getting the values from input box and storing it in variables
	var first_name = document.getElementById('first_name').value.trim();
	var middle_name = document.getElementById('middle_name').value;
	var last_name = document.getElementById('last_name').value;
	var user_name= document.getElementById('user_name').value;
	var password= document.getElementById('password').value;
	var retype_password= document.getElementById('retype_password').value;
	var email_id  = document.getElementById('email_id').value;
	var age= document.getElementById('age').value;
	var employment= document.getElementById('employment').value;
	var employer= document.getElementById('employer').value;
	var residence_street = document.getElementById('residence_street').value;
	var residence_city = document.getElementById('residence_city').value;
	var residence_state = document.getElementById('residence_state').value;
	var residence_pincode = document.getElementById('residence_pincode').value;
	var residence_contact_no = document.getElementById('residence_contact_no').value;
	var residence_fax_no = document.getElementById('residence_fax_no').value;
	var permanent_street= document.getElementById('permanent_street').value;
	var permanent_city = document.getElementById('permanent_city').value;
	var permanent_state = document.getElementById('permanent_state').value;
	var permanent_pincode = document.getElementById('permanent_pincode').value;
	var permanent_contact_no = document.getElementById('permanent_contact_no').value;
	var permanent_fax_no= document.getElementById('permanent_fax_no').value;
//declaring array for storing the errors	
	var error_client=new Array();
//assigning defalut value	
	for(i=0;i<=22;i++)
	{error_client[i]="";}	
//validating first name	
	if(first_name=="")
	{
		error_client[0]="can't be blank";
	//	alert("blank");
	}
	else if(!first_name.match( /^[a-zA-Z]*$/))
	{
		error_client[0]="Enter alphabets only";
	}
			
//validating middle name
	if(middle_name=="")
	{
		error_client[1]="can't be blank";
	//	alert("blank");
	}
	else if(!middle_name.match( /^[a-zA-Z .]*$/))
	{
		error_client[1]="alphabets,.,spaces only";
		
	}
//validating last name
	if(last_name=="")
	{
		error_client[2]="can't be blank";
	//	alert("blank");
	}
	else if(!last_name.match( /^[a-zA-Z .]*$/))
	{
		error_client[2]="alphabets,.,spaces only";
		
	}
//validating user name
	if(user_name=="")
	{
		error_client[3]="can't be blank";
	//	alert("blank");
	}	
	else if(!user_name.match( /^[a-zA-Z0-9.@]*$/))
	{
		error_client[3]="alphabet,number,@,dot only";
		
	}
//validating Resdence Address	
//validating residence street
	if(residence_street=="")
	{
		error_client[4]="can't be blank";
	//	alert("blank");
	}	
	else if(!residence_street.match( /^[a-zA-Z0-9 .]*$/))
	{
		error_client[4]="Not valid entry";
		
	}
//validating residence city
	if(residence_city=="")
	{
		error_client[5]="can't be blank";
	//	alert("blank");
	}	
	else if(!residence_city.match( /^[a-zA-Z .]*$/))
	{
		error_client[5]="alphabet,space,dot only";
		
	}
//validating residence state
	if(residence_state=="")
	{
		error_client[6]="can't be blank";
	//	alert("blank");
	}
	else if(!residence_state.match( /^[a-zA-Z .]*$/))
	{
		error_client[6]="alphabet,space,dot only";
		
	}
//validating residence pincode
	if(residence_pincode=="")
	{
		error_client[7]="can't be blank";
	//	alert("blank");
	}	
	else if(!residence_pincode.match( /^([0-9]{6})*$/))
	{
		error_client[7]="only digits";
		
	}
//validating residence contact no
	if(residence_contact_no=="")
	{
		error_client[8]="can't be blank";
	//	alert("blank");
	}
	else if(!residence_contact_no.match( /^([0-9]{10})*$/))
	{
		error_client[8]="only digits";
		
	}
//validating residence fax no
	if(!residence_fax_no.match( /^([0-9]{10})*$/))
	{
		error_client[9]="only digits";
		
	}
//validating permanent address
//validating permanent street
	if(permanent_street=="")
	{
		error_client[10]="can't be blank";
	//	alert("blank");
	}	
	else if(!permanent_street.match( /^[a-zA-Z0-9 .]*$/))
	{
		error_client[10]="Not valid entry";
		
	}
//validating permanent city
	if(permanent_city=="")
	{
		error_client[11]="can't be blank";
	//	alert("blank");
	}	
	else if(!permanent_city.match( /^[a-zA-Z .]*$/))
	{
		error_client[11]="alphabet,space,dot only";
		
	}
//validating permanent state
	if(permanent_state=="")
	{
		error_client[12]="can't be blank";
	//	alert("blank");
	}
	else if(!permanent_state.match( /^[a-zA-Z .]*$/))
	{
		error_client[12]="alphabet,space,dot only";
		
	}
//validating permanent pincode
	if(permanent_pincode=="")
	{
		error_client[13]="can't be blank";
	//	alert("blank");
	}	
	else if(!permanent_pincode.match( /^([0-9]{6})*$/))
	{
		error_client[13]="only digits";
		
	}
//validating permanent contact no
	if(permanent_contact_no=="")
	{
		error_client[14]="can't be blank";
	//	alert("blank");
	}
	else if(!permanent_contact_no.match( /^([0-9]{10})*$/))
	{
		error_client[14]="only digits";
		
	}
//validating permanent fax no
	if(!permanent_fax_no.match( /^([0-9]{10})*$/))
	{
		error_client[15]="only digits";
		
	}	
//validating password
	if(password=="")
	{
		error_client[16]="can't be blank";
	}
//validating retype password
	if(retype_password=="")
	{
		error_client[17]="can't be blank";
	}
	else if(password!=retype_password)
	{
		error_client[17]="passwords do not match";
		
	}
//validating age
	if(age=="")
	{
		error_client[18]="can't be blank";
	//	alert("blank");
	}
	else if(!age.match( /^[0-9]*$/))
	{
		error_client[18]="only digits";
		
	}
// validating email id
	if(email_id=="")
	{
		error_client[19]="can't be blank";
	//	alert("blank");
	}
	else if(!email_id.match( /^[a-z0-9_-]+@[a-z0-9._-]+\.[a-z]+$/i))
	{
		error_client[19]="Not Valid";
		
	}
//validating employer	
	if(employment=="yes")
	{
		if(employer=="")
		{
			error_client[20]="can't be blank";
		}
		else if(!employer.match( /^[a-zA-Z .]*$/))	
		{
			error_client[20]="characters,spaces,dots only "
		}	
	}
	else
	{
			if(employer!="")	
		{
			error_client[20]="select Employed as \"yes\" first";
			
		}
	}									
//checking for errors
		if(error_client!="")
		{
			document.getElementById('fname').innerHTML=error_client[0];
			document.getElementById('mname').innerHTML=error_client[1];
			document.getElementById('lname').innerHTML=error_client[2];
			document.getElementById('uname').innerHTML=error_client[3];
			document.getElementById('resi_street').innerHTML=error_client[4];
			document.getElementById('resi_city').innerHTML=error_client[5];
			document.getElementById('resi_state').innerHTML=error_client[6];
			document.getElementById('resi_pincode').innerHTML=error_client[7];
			document.getElementById('resi_contact').innerHTML=error_client[8];
			document.getElementById('resi_fax').innerHTML=error_client[9];
			document.getElementById('perm_street').innerHTML=error_client[10];
			document.getElementById('perm_city').innerHTML=error_client[11];
			document.getElementById('perm_state').innerHTML=error_client[12];
			document.getElementById('perm_pincode').innerHTML=error_client[13];
			document.getElementById('perm_contact').innerHTML=error_client[14];
			document.getElementById('perm_fax').innerHTML=error_client[15];
			document.getElementById('pass').innerHTML=error_client[16];
			document.getElementById('retype_pass').innerHTML=error_client[17];
			document.getElementById('age_error').innerHTML=error_client[18];
			document.getElementById('email').innerHTML=error_client[19];
			document.getElementById('employer_error').innerHTML=error_client[20];
			//document.getElementById('employer_error').innerHTML=error_client[20];
	 	return false;	
		}
		else
		{
			return true;
		}	
}

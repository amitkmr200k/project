<?php
function value_present($value)
{return isset($value) && trim($value) !=="";}

function form_error($error1=array())
{	$output="";
	if(!empty($error1))
	{
	$output="<h3><font color=red>Fix the following errors </font></h3> <br/>";
		foreach($error1 as $key=>$msg)
		{
			$output.="<li> {$msg} </li>";
		}	
	}
return $output;
}
?>	
function validate()
{
	document.getElementById("confirm").innerHTML = "";
 	var passwordTag = document.getElementById("pass");
	var validateTag = document.getElementById("val");
	if(passwordTag.value != validateTag.value){
		alert("Passwords must match");
	}
	else if(passwordTag.value.length < 8 || validateTag.value.length < 8){
		alert("Password must be at least 8 characters long");
        } else {
		document.getElementById("confirm").innerHTML = "Validated"
	}
}
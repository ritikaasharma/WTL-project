
// to reset password
 function checkForm() {
    var oldP=document.getElementById("oldpassword").value;
    var newP=document.getElementById("newpassword").value;
    var confirmP =document.getElementById("newconfirmpassword").value;

    if(oldP!=""&&newP!=""&&confirmP!="")
    {
	    if(oldP!=newP)
	      {
	        if(newP==confirmP)
	         { 
	            if(newP.length >= 6){
	            	alert("Password changed succesfully");
	                return true;
	            }
	            else{
	                alert("Length of password should be greater than 5");
	                return false;
	            }
	         }
	         else
	         {
	           alert("Confirm password is not same as you new password.");
	           return false;
	         }
	     }
	    else
	    {
	     alert(" This Is Your Old Password,Please Provide A New Password");
	     return false;
	    }
	}
    else
    {
        alert("All Fields Are Required");
        return false;
        }
   }

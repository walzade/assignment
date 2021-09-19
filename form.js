function validation(){

			var first = document.getElementById('Firstname').value;
			var middle = document.getElementById('Middlename').value;
			var last = document.getElementById('Lastname').value;
			var gender = document.getElementById('mobileNumber').value;
			var date = document.getElementById('emails').value;





			if(first == ""){
				document.getElementById('Fname').innerHTML =" ** Please fill the username field";
				return false;
			}
			if((first.length <= 50) || (first.length > 50)) {
				document.getElementById('Fname').innerHTML =" ** Firstname lenght must be less than 50";
				return false;	
			}
			if(!isNaN(first)){
				document.getElementById('Fname').innerHTML =" ** only characters are allowed";
				return false;
			}



			if( middle== ""){
				document.getElementById('mname').innerHTML =" ** Please fill the username field";
				return false;
			}
			if((middle.length <= 50) || (middle.length > 50)) {
				document.getElementById('mname').innerHTML =" ** Firstname lenght must be less than 50";
				return false;	
			}
			if(!isNaN(middle)){
				document.getElementById('mname').innerHTML =" ** only characters are allowed";
				return false;
			}



			if(last == ""){
				document.getElementById('lname').innerHTML =" ** Please fill the username field";
				return false;
			}
			if((last.length <= 50) || (lname.length > 50)) {
				document.getElementById('lname').innerHTML =" ** Firstname lenght must be less than 50";
				return false;	
			}
			if(!isNaN(last)){
				document.getElementById('lname').innerHTML =" ** only characters are allowed";
				return false;
			}




			function validateDOB()
			{
			    var dob = document.forms["ProcessInfo"]["txtDOB"].value;
			    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
			    if (dob == null || dob == "" || !pattern.test(dob)) {
			        errMessage += "Not Employee Age Below 18 Year\n";
			        return false;
			    }
			    else {
			        return true
			    }
			}








			
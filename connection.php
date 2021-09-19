<?php
	$firstName = $_POST['FirstName'];
	$middleName = $_POST['MiddleName'];
	$lastName = $_POST['LastName'];
	$gender = $_POST['gender'];
	$date = $_POST['date'];
	

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into employee sales & salary(firstName, middleName, lastName, gender, date) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssi", $firstName, $middleName, $lastName, $gender,  $date);
		$execval = $stmt->execute();
		echo $execval;
		echo "Save Succucesfully...";
		$stmt->close();
		$conn->close();
	}
?>

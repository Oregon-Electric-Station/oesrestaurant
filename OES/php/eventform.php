<?php
	if(isset($_POST['Event_Email'])) {
		include 'eventformsettings.php';
		function died($error) {
			echo "We're sorry! We found a few errors on the form you submitted. ";
			echo "These errors appear below.<br /><br />";
			echo $error."<br /><br />";
			echo "Please resubmit your request. We look forward to hearing from you!<br /><br />";
			die();
		}
		if(!isset($_POST['Event_Email']) 
			) {
			died('Sorry, there appears to be a problem with your form submission. Please re-enter your information and try again. If the problem persists please email us directly at info@manorfinewares.com.');		
		}

		$applicant_name = $_POST['Applicant_Name'];
		$event_date = $_POST['Event_Date'];
		$event_time = $_POST['Event_Time']; 
		$event_guestNumber = $_POST['Event_Guest_Number']; 
		$room_sacajawea = $_POST['room_choice'][0]; 
		$room_platform51 = $_POST['room_choice'][1]; 
		$room_jazzRoom = $_POST['room_choice'][2]; 
		$room_library = $_POST['room_choice'][3];
		$room_santiam = $_POST['room_choice'][4];
		$room_platformA = $_POST['room_choice'][5];
		$room_platformB = $_POST['room_choice'][6];
		$room_stationHall = $_POST['room_choice'][7];
		$event_type = $_POST['Event_Type'];
		$event_av = $_POST['Event_AV'];
		$menu_setMenu = $_POST['food_choice'][0]; 
		$menu_buffet = $_POST['food_choice'][1]; 
		$menu_familyStyle = $_POST['food_choice'][2]; 
		$menu_fingerFood = $_POST['food_choice'][3]; 
		$bar_hostedBar = $_POST['bar_choice'][0]; 
		$bar_unHostedBar = $_POST['bar_choice'][1]; 
		$bar_limitedBar = $_POST['bar_choice'][2]; 
		$bar_softDrinks = $_POST['bar_choice'][3]; 
		$bar_beerAndWine = $_POST['bar_choice'][4]; 
		$bar_americanCoffee = $_POST['bar_choice'][5]; 
		$event_specialRequest = $_POST['Event_SpecialRequest'];
		$event_reservationName = $_POST['Event_ReservationName'];
		$event_phoneNumber = $_POST['Event_PhoneNumber'];
		$event_email = $_POST['Event_Email'];
		$email_message = "Private Event Application:\r\n";

		$error_message = "";
		$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
		if(preg_match($email_exp,$event_email)==0) {
			$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
		}
		// if(strlen($last_name) < 2) {
		// 	$error_message .= 'Your Last Name does not appear to be valid.<br />';
		// }
		// if(strlen($telephone) < 2) {
		// 	$error_message .= 'Your Tax ID does not appear to be valid.<br />';
		// }
		// if(strlen($comments) < 2) {
		// 	$error_message .= 'The Comments you entered do not appear to be valid.<br />';
		// }
		if(strlen($error_message) > 0) {
			died($error_message);
		}
		function clean_string($string) {
			$bad = array("content-type","bcc:","to:","cc:");
			return str_replace($bad,"",$string);
		}
		$email_message .= "\r\n";
		$email_message .= "(applicant name)\r\n";
		$email_message .= "     ".clean_string($applicant_name)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(event date)\r\n";
		$email_message .= "     ".clean_string($event_date)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(event time) \r\n";
		$email_message .= "     ".clean_string($event_time)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(number of guests)\r\n";
		$email_message .= "     ".clean_string($event_guestNumber)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(rooms of interest)\r\n";
		$email_message .= "            ".clean_string($room_sacajawea)."\r\n";
		$email_message .= "            ".clean_string($room_platform51)."\r\n";
		$email_message .= "            ".clean_string($room_jazzRoom)."\r\n";
		$email_message .= "            ".clean_string($room_library)."\r\n";
		$email_message .= "            ".clean_string($room_santiam)."\r\n";
		$email_message .= "            ".clean_string($room_platformA)."\r\n";
		$email_message .= "            ".clean_string($room_platformB)."\r\n";
		$email_message .= "            ".clean_string($room_stationHall)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(event type)\r\n";
		$email_message .= "".clean_string($event_type)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(event audio/visual)\r\n";
		$email_message .= "".clean_string($event_av)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(menu of interest)\r\n";
		$email_message .= "            ".clean_string($menu_setMenu)."\r\n";
		$email_message .= "            ".clean_string($menu_buffet)."\r\n";
		$email_message .= "            ".clean_string($menu_familyStyle)."\r\n";
		$email_message .= "            ".clean_string($menu_fingerFood)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(bar preference)\r\n";
		$email_message .= "            ".clean_string($bar_hostedBar)."\r\n";
		$email_message .= "            ".clean_string($bar_unHostedBar)."\r\n";
		$email_message .= "            ".clean_string($bar_limitedBar)."\r\n";
		$email_message .= "            ".clean_string($bar_softDrinks)."\r\n";
		$email_message .= "            ".clean_string($bar_beerAndWine)."\r\n";
		$email_message .= "            ".clean_string($bar_americanCoffee)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(special requests)\r\n";
		$email_message .= "".clean_string($event_specialRequest)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(reservation name)\r\n";
		$email_message .= "".clean_string($event_reservationName)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(phone number)\r\n";
		$email_message .= "".clean_string($event_phoneNumber)."\r\n";
		$email_message .= "\r\n";
		$email_message .= "(email address)\r\n";
		$email_message .= "".clean_string($event_email)."\r\n";
		$email_message .= "\r\n";
		$headers = 'From: '.$event_email."\r\n".
		'Reply-To: '.$event_email."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		mail($email_to, $email_subject, $email_message, $headers);
		header("Location: $thankyou");
		?>
		<script>location.replace('<?php echo $thankyou;?>')</script>
		<?php
	}
	die();
?>
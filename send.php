<?php


	require './phpmailer/PHPMailerAutoload.php';

	$subject = $_GET['subject'];
	$name = $_GET['name'];
	$email = $_GET['email'];
	$msg = $_GET['msg'];

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->SMTPDebug = 1;
	$mail->Debugoutput = 'html';
	
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->CharSet = 'UTF-8';

	$mail->Username = "stanleyjos@gmail.com";
	$mail->Password = "coolcosmo88gm";

	//Set who the message is to be sent from
	$mail->setFrom('stanleyjos@gmail.com', 'webmaster');

	//Set who the message is to be sent to
	$mail->addAddress('stanleyjos@gmail.com', 'Stanley Joseph');

	//Set the subject line
	$mail->Subject = 'mail from stanleyjoseph.co';

	$message = '<html>
					<head></head>
						<body style="background-color:#e4e4e4; padding-top:30px; padding-bottom:30px">
							<table align="center" cellspacing="0" cellpadding="0">
								<tr><td><span>Email Title</span></td></tr>
								<tr><td><span>Subject:</span></td></tr>
								<tr><td><span>' .$subject. '</span></td></tr>
								<tr><td><span>Name:</span></td></tr>
								<tr><td><span>' .$name. '</span></td></tr>
								<tr><td><span>E-mail:</span></td></tr>
								<tr><td><span>' .$email. '</span></td></tr>
								<tr><td><span>Message:</span></td></tr>
								<tr><td><span>' .$msg. '</span></td></tr>
							</table>
						</body>
			    </html>';


	$mail->msgHTML($message);

	//Replace the plain text body with one created manually 
	$mail->AltBody = 'This is a plain-text message body';
	
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	header('Content-type: application/json; charset=UTF-8');
	header('Access-Control-Allow-Origin: *');

	//send the message, check for errors
	if (!$mail->send()) {
	    echo json_encode("error");
	} else {
	    echo json_encode("success");
	}

?>
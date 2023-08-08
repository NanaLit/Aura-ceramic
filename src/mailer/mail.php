<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "contact@wistaverse.com";

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
//From email address and name
$mail->CharSet = 'utf-8';
$mail->From = "contact@wistaverse.com";
$mail->FromName = "Message from wistaverse.com";
//To address and name

$mail->addAddress($admin_mail);

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Message from Feedbackform";
$mail->Body = '
<p><i>Name</i> : <b>'.$_POST["fb_name"].'</b></p>
<p><i>E-mail</i> : <b>'.$_POST["fb_email"].'</b></p>
<p><i>Message</i> : <b>'.$_POST["fb_message"].'</b></p>
<br/>
<sub>Send : '.date("d-m-Y H:i:s").'</sub>';
$mail->AltBody = 'Name : '.$_POST["fb_name"].' | E-mail : '.$_POST["fb_email"].' | Message : '.$_POST["fb_message"].' | ';

try {
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
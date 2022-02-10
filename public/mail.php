<?php
// Source: https://mailtrap.io/blog/react-contact-form/
// Start PHP server on different port: navigate to project directory >> php -S localhost:3002 mail.php
// PHP Kinda sucks... but my hosting is dirt cheap so I'm not running a Node.JS environment yet, so I'm stuck with PHP for now!

// Allow for asynchonroucs calls from browser to backend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// Set content type of the response
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Create errors array to determine if errors exist
$errors = array();

// Check for form submission
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  // Check, collect, and validated submitted data
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];

    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }
  if (empty($_POST['name'])) {
    $errors[] = 'Name is empty';
  } else {
    $name = $_POST['name'];
  }

  // Create + send the email
  if (empty($errors)) {
    // Create email
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Name: <span style=\"color:#888\">$name</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

    // Send email
    $headers = 	'From: contact@gavinshr.com' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'shrader.gavin@gmail.com';
    $subject = 'Contact Form';

    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>

  <?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>

  <?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>

  <?php
    $email_subject = "Submission Was Successful";
    $email_message = "Thank you for contacting me! I will reply as quickly as possible.\n\n";
    $email_message .= "I received the following information from your contact submission:\n\n";
    $email_message .= "Name: ".$name."\n\n";
    $email_message .= "Email: ".$email."\n\n";
    $email_message .= "Message: ".$message."\n\n";

    // create email headers
    $reply_to = 'shrader.gavin@gmail.com';

    $headers = 'From: contact@gavinshr.com'."\r\n".
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/plain; charset=iso-8859-1\r\n";

    mail($email, $email_subject, $email_message, $headers);
  ?>

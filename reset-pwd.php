<?php
// Example PHP logic (reset-password.php)

$email = $_POST['email'];

// Check if email exists in the database
$user = findUserByEmail($email);

if ($user) {
    // Generate random password
    $newPassword = bin2hex(random_bytes(4)); // Example random password
    updatePasswordInDatabase($email, $newPassword);

    // Send email to the user
    sendEmail($email, "Your new password", "Your new password is: $newPassword");

    echo json_encode(["message" => "A new password has been sent to your email address."]);
} else {
    echo json_encode(["error" => "Email not found."]);
}
?>

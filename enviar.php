<?php
// Recupera los datos del formulario
$subject = $_POST['subject'];
$message = $_POST['message'];
$email = $_POST['email'];

// Configura el correo electrónico
$to = 'relatosaoscuras@gmail.com'; // Reemplaza con tu dirección de correo electrónico
$headers = "From: $email\r\nReply-To: $email\r\n";

// Envía el correo electrónico
mail($to, $subject, $message, $headers);

// Redirige al usuario a una página de confirmación
header('Location: confirmacion.html');
?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $mail = new PHPMailer(true); 
    try {
     
        $mail->SMTPDebug = 0;
        $mail->isSMTP(); 
        $mail->Host = 'smtp.yandex.ru'; 
        $mail->SMTPAuth = true; 
        $mail->Username = 'georgessich@yandex.ru';
        $mail->Password = 'password'; 
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port = 465; 
        $mail->setFrom('georgessich@yandex.ru', 'Your Name');
        $mail->addAddress('rbru-metrika@yandex.ru'); 

        $mail->isHTML(true); 
        $mail->Subject = '=?utf-8?B?' . base64_encode('Новая заявка') . '?=';
        $mail->Body = $email;

        $mail->send();
        echo '
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="text-align: center;">
          <p style="font-size: 64px; color: #364844;">Email успешно отправлен</p>
          <a style="font-size: 48px; text-decoration: none; color: blue;" href="index.html">Вернуться на главную страницу</a>
        </div>
      </div>
      ';
  
    } catch (Exception $e) {
        echo '<h1>Произошла ошибка.</h1>';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>
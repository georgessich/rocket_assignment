<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to_email = "rbru-metrika@yandex.ru";
    $subject = "Запись на прием";

    // Получение данных из формы
    $email = $_POST["email"];

    // Формирование сообщения
    $message = "Email: $email";

    // Дополнительные заголовки
    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Reply-To: webmaster@example.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to_email, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено.";
    } else {
        echo "Ошибка при отправке письма.";
    }
} else {
    echo "Доступ запрещен.";
}
?>
<?php
$sendto = "alex_z@franch5.ru, franchaizing-5@yandex.ru, zvnfranch5@yandex.ru, dacar56oren@gmail.com";
$city = nl2br($_POST['city']);
$age = nl2br($_POST['age']);
$business = nl2br($_POST['business']);
$investments = nl2br($_POST['investments']);
$phone = nl2br($_POST['phone1']);
$name = nl2br($_POST['name1']);
$email = nl2br($_POST['email1']);

$content = "Заявка с сайта Orendacar";
// Формирование заголовка письма
$subject  = $content;
$headers  = "From: no-replay@no-replay.ru" . "\r\n";
$headers .= "Reply-To: Без ответа". "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'5>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Письмо с сайта Orendacar</h2>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>ФИО:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>E-mail:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Город:</strong> ".$city."</p>\r\n";
$msg .= "<p><strong>Возраст:</strong> ".$age."</p>\r\n";
$msg .= "<p><strong>Бизнес:</strong> ".$business."</p>\r\n";
$msg .= "<p><strong>Объем инвестиций:</strong> ".$investments."</p>\r\n";

$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>




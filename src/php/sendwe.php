<?php
$sendto = nl2br($_POST['email']);

$content = "Заявка с сайта Orendacar";
// Формирование заголовка письма
$subject  = $content;
$headers  = "From: no-replay@no-replay.ru" . "\r\n";
$headers .= "Reply-To: Без ответа". "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title></title>
        <style></style>
    </head>
    <body>
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
            <tr>
                <td align="center" valign="top">
                    <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailContainer">
                        <tr>
                            <td align="center" valign="top" style="font-size:0;">
                                <img src="http://savepic.ru/13239683.jpg" alt="" alt="" border="0" width="100%" style="display:block;margin:0;padding:0;">
                                <a href="http://prokatmashin56.ru/" style="color: #333333; font: 0 Arial, sans-serif; -webkit-text-size-adjust:none; display: block;margin:0;padding:0;" target="_blank">
                                    <img alt="" border="0" width="100%" style="display:block;margin:0;padding:0;" src="http://savepic.ru/13298050.jpg" alt="">
                                </a>
                                <a href="https://www.instagram.com/dacar56/" style="color: #333333; font: 0 Arial, sans-serif; -webkit-text-size-adjust:none; display: block;margin:0;padding:0;" target="_blank">
                                    <img alt="" border="0" width="100%" style="display:block;margin:0;padding:0;" src="http://savepic.ru/13297026.jpg" alt="">
                                </a>
                                <a href="https://vk.com/orendacar" style="color: #333333; font: 0 Arial, sans-serif; -webkit-text-size-adjust:none; display: block;margin:0;padding:0;" target="_blank">
                                    <img alt="" border="0" width="100%" style="display:block;margin:0;padding:0;" src="http://savepic.ru/13303170.jpg" alt="">
                                </a>
                                <span href="" style="color: #333333; font: 0 Arial, sans-serif; -webkit-text-size-adjust:none;display: block;margin:0;padding:0;" target="_blank">
                                    <img alt="" border="0" width="100%" style="display:block;margin:0;padding:0;" src="http://savepic.ru/13267354.jpg" alt="">
                                </span>
                                <a href="" style="color: #333333; font: 0 Arial, sans-serif; -webkit-text-size-adjust:none; display: block;margin:0;padding:0;" target="_blank">
                                    <img alt="" border="0" width="100%" style="display:block;margin:0;padding:0;" src="http://savepic.ru/13290882.jpg" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>';

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>
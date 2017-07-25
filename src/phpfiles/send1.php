<?
	include '../../../cmsConfig.php';
	if ($_POST['submit_contact_form']==1) {
		$s = md5($_SERVER['SERVER_NAME'].'rang');
		if ($_POST['form_hash']==$s) {
			if ($_POST['captcha']==$_SESSION['code']) {
				$sql = mysql_query("SELECT * FROM cms_admins");
				$admin = mysql_fetch_assoc($sql);
				$admin_mail = $admin['admin_email'];
				$to = "alex_z@franch5.ru";
				$from = 'noreply@rang56.ru';
				$subject = 'Новое сообщение с сайта '.$_SERVER['SERVER_NAME'].'';
				$body .= "<h1>Новое сообщение с сайта ".$_SERVER['SERVER_NAME']."</h1>";
				foreach ($_POST['cms_field'] as $key => $value) {
				  $_POST['cms_field'][$key] = mysql_real_escape_string(strip_tags($_POST['cms_field'][$key]));
				  $body .= "<p><b>".$key."</b>: ".$value."</p>";
				}
				$headers  = 'MIME-Version: 1.0' . "\r\n";
				$headers .= 'Content-type: text/html; charset="utf-8"' . "\r\n";
				$headers .= 'From: noreply@rang56.ru'. "\r\n";
				smtpmail($to, $subject, $body, $headers);
			} else {
				echo "error";
			}	
		} else {
			echo "error";
		}
	} else {
		echo "error";
	}
?>
<?php
header("Access-Control-Allow-Origin: *");

$recepient = "tkalichroman90@gmail.com";
$sitename = "LCT-Ukraine";

$name = trim($_POST["name"])
$tel = trim($_POST["tel"])
$city = trim($_POST["city"])

$message = "Имя: $name \nТелефон: $tel \nГород: $city ";
$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message)
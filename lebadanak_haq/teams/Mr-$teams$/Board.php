<?php

session_start();



if (session_status() == PHP_SESSION_DISABLED) {
	header("Location: index.php");
}
else if(!isset($_SESSION["logboard"])){
	header("Location: index.php");
}
else if(isset($_SESSION["logboard"]) && $_SESSION["logboard"] != "right_and can view()The Content^**"){
	header("Location: index.php");
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Applicants</title>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet"> 
    <link rel="shortcut icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="board.css">
	<script src="applicants.js"></script>
</head>
<body>
	<div class='stars'>
	<div class='twinkling'>
	</div>
</div>	
	<section>
		<nav>
		<a href="http://engbreak19.com/"><img src="../img/engbreak_logo.png" alt="engbreak_logo" /></a><br>
		<h2>Applicants Data</h2>
		</nav>
	<div class="main">
	<a class="ex input_part" href="data_export.php?export=true"> Export To Excel </a> 
		<button class="input_part" onclick="getapplicants();">Show applicants</button>
		<button class="out input_part" type="submit" onclick="Logout();">Log out</button>
	</div>

	<div id="information">
		
	</div>
</section>

</body>
</html>


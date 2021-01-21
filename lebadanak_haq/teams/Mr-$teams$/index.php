<?php


if(isset($_POST['submit'])){
	if($_POST['username'] === "EngBreak19*Lebadnek_*Haq*Teams"  && $_POST['password'] === "LebadeneqEnnG*BreaK18*Teams_Haq_Events19"){
		session_start();
		$_SESSION["logboard"] = "right_and can view()The Content^**";
		header("Location: Board.php");
	}
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Board Section</title>
	<link rel="shortcut icon" href="../img/icon.png">
	<style type="text/css">
		*{margin:0;padding:0;box-sizing:border-box;}
		canvas {
            position: absolute;
            overflow-y: hidden;
            overflow-x: hidden;
            width: 100%;
            margin: 0;
            left: 0;
            top: 0;
        }
		body{
			overflow: auto;
		    background: #05486C;
		}
		nav{
	        text-align: center;
		}
		nav img{
		    width:200px;
		}
		h2{
			text-align: center;
			font-size: 30px;
			margin: 2px 2px 23px;
			color: gold;
		}
		div{
			display: flex;
			flex-flow: column;
			justify-content: center;
			margin-top: 40px;
			position: absolute;
			text-align: center;
			width: 100%;
		}
		form{
			margin: 5% auto 0 auto;
			width: 350px;
			padding: 50px;
			box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.25);
			
		}
		input{
			margin: 10px 0;
			width: 100%;
			font-size: 30px;
			background: #FFF;
			border-radius: 10px;
			padding: 2px 8px;
			border: 2px solid #0b2b4b;
		}
		input[type="submit"]{
			cursor: pointer;
		}
		input:hover,input:focus{
			border: 3px solid #0b2b4b;
		}
	</style>
</head>
<body>
	<div>
    	<nav>
          <a href="http://engbreak19.com/"><img src="../img/engbreak_logo.png" alt="engbreak_logo" /></a>
    	</nav>
    	<form method="POST">
    	<h2>Log In</h2>
    		<input type="text" name="username" placeholder="User Name" />
    		<input type="password" name="password" placeholder="PASSWORD" />
    		<input type="submit" value="Submit" name="submit" />
    	</form>	
    </div>

</body>
</html>
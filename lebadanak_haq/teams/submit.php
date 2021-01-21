<?php

$con = mysqli_connect("localhost", "engbsyyx", "Z96tEziU9a1e", "engbsyyx_Lebadank");  //connect to the database



if(isset($_POST['submit'])){


		if($_POST['leader'] && $_POST['player1'] && $_POST['player2'] && $_POST['player3'] && $_POST['player4']){
            $leader = mysqli_escape_string($con, $_POST['leader']);
            $player1 = mysqli_escape_string($con, $_POST['player1']);
            $player2 = mysqli_escape_string($con, $_POST['player2']);
            $player3 = mysqli_escape_string($con, $_POST['player3']);
            $player4 = mysqli_escape_string($con, $_POST['player4']);
            
            if($_POST['reserve1'])
                $reserve1 = mysqli_escape_string($con, $_POST['reserve1']);
            else
                $reserve1 = null;
            
            if($_POST['reserve2'])
                $reserve2 = mysqli_escape_string($con, $_POST['reserve2']);
            else
                $reserve2 = null;


			$sql = "INSERT INTO `team` 
							( leader , player1 , player2 , player3 ,player4 ,reserve1 ,reserve2)
						VALUES
							( '$leader' , '$player1' , '$player2' , '$player3' ,'$player4' ,'$reserve1','$reserve2')";
            
			if(mysqli_query($con, $sql)){
                $id = $con->insert_id;
				unset($_POST['submit']);
			} else{
				$page = "Something went wrong, please try again later!11";
			}
		}
		else{
			$page = "Something went wrong, please try again later!22";
		}
	
	
	mysqli_close($con);
}
else{
	header("Location: index.html");
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Lebadanak Haq 4</title>
    <meta charset="UTF-8">
    <meta property="og:title" content="Lebadanak Haq 4.0" />
    <meta name="description" content="Lebadanak Haq 4.0 - Eng Break'19">
    <meta name="keywords" content="Engbreak,Lebadanak,Haq,Engbreak19">
    <meta name="author" content="Eng Break">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://engbreak19.com/lebadanak_haq/" />    
    <meta property="og:image" content="http://engbreak19.com/lebadanak_haq/img/cover.jpeg" />
    <meta property="og:image:type" content="image/jpeg">
    <meta name="viewport" content="width=device-width">
    <link rel="shortcut icon" href="img/icon.png">
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900);
		*{margin:0;padding:0;box-sizing:border-box;}

		body{
			background-size: cover;
			min-height: 100vh;
			display: flex;
			flex-flow: column;
			justify-content: flex-start;
			overflow:auto;
			background-color:#05486C;
		}
		nav{
            text-align: left;
            position: absolute;
            z-index: 99;
        }
        nav img{
            height: 60px;
            width: auto;
            margin: 25px;
        }
		div.msg{
			display: flex;
			flex-flow: column;
			justify-content: center;
			margin-top: 40px;
			position: absolute;
			text-align: center;
			width: 100%;
			top: 20%;
		}
		h2{
			display: block;
            margin: 25px auto;
            letter-spacing: 1px;
            border: none;
            font-size: 50px;
            text-align: center;
            color: #fff;
            padding: 20px 50px;
            background-color: #49a0d5;
            border-radius: 3px;
            cursor: context-menu;
            text-shadow: 2px 2px rgba(101, 182, 230,.4);
		}
		.iq_note{
	        text-align: center;
            display: block;
            letter-spacing: 0px;
            color: #FFF;
            line-height: 30px;
            font-size: 25px;
            padding: 20px;
            cursor: context-menu;
            box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.25);
            margin: 25px auto;
		}
		p.iq_note a{
            border-bottom: 1px dashed;
            color: #FFF;
            font-weight: bold;
            padding-bottom: 5px;
		}
		
        .sponsor{
            text-align: center;
            margin: 30px auto;
            cursor: context-menu;
        }
        .sponsor div {
            display: inline-block;
            margin: 20px;
        }
        .sponsor p{
            color: gold;
            padding: 5px;
            font-size: 25px;
            font-family: 'Titillium Web', sans-serif;
            text-shadow: 1px 1px rgba(101, 182, 230,.4);
        }
        .sponsor img{
            width: 200px
        }

	</style>
</head>
<body>
<canvas id="canvas"></canvas>
    <nav>
      <a href="http://engbreak19.com/"><img src="img/engbreak_logo.png" alt="engbreak_logo"  /></a>
	</nav>  
	<div class="msg">
        <h2><?php echo '<b>Remember that</b><br>The code of your team is #'.$id; ?></h2>
    	
    	<div class="sponsor">
            <p>Sponsored By</p>
        	<div>
            	<a href="https://tactful.ai/" target="_blank">
                	<img src="img/Tactful_logo.png" alt="Tactful">
            	</a>
        	</div> 
        </div>
        
	</div>
    <script src="js/jquery.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
<?php
session_start();

if (session_status() == PHP_SESSION_DISABLED) {
	header("Location: index.php");
	exit();
}
else if(!isset($_SESSION["logboard"])){
	header("Location: index.php");
	exit();
}
else if(isset($_SESSION["logboard"]) && $_SESSION["logboard"] != "right_and can view()The Content^**"){
	header("Location: index.php");
	exit();
}

$con = mysqli_connect("localhost", "engbsyyx", "Z96tEziU9a1e", "engbsyyx_Lebadank");  //connect to the database

$sql = "SELECT * FROM `team` ";

  $result = mysqli_query($con, $sql);

header("Content-type: application/octet-stream");  
header('Content-type: text/html; charset=utf-8');
header("Content-Disposition: attachment; filename=Data.xls");  
header("Pragma: no-cache");  
header("Expires: 0");  
    echo "
        <html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
    ";
  if($result && $result->num_rows > 0){
	$start = "<table border='1'>";
	$start .= "<tr>";
	$start .= "<th style='min-width:auto;'>ID</th>";
	$start .= "<th>Date</th>";
	$start .= "<th>leader</th>";
	$start .= "<th>player1</th>";
	$start .= "<th>player2</th>";
	$start .= "<th>player3</th>";
	$start .= "<th>player4</th>";
	$start .= "<th>reserve1</th>";
	$start .= "<th>reserve2</th>";
	$start .= "</tr>";
	echo $start;
	$num = 1;
	while($row = $result->fetch_assoc()){
		$date = date( "Y-m-d H:i:s", strtotime( $row['date'] )+6*60*60 );
		echo "<tr>";
		echo "<td style='min-width:auto;'>#" . $row['id'] . "</td>";
		echo "<td>" . $date . "</td>";
		echo "<td>" . $row['leader'] . "</td>";
		echo "<td>" . $row['player1'] . "</td>";
		echo "<td>" . $row['player2'] . "</td>";
		echo "<td>" . $row['player3'] . "</td>";
		echo "<td>" . $row['player4'] . "</td>";
		echo "<td>" . $row['reserve1'] . "</td>";
		echo "<td>" . $row['reserve2'] . "</td>";
		echo"</tr>";
	}
	echo "</table></body></html>";
  }
	exit;
?>  
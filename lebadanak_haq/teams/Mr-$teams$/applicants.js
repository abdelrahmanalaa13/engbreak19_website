function Logout(){
	window.location.href = "Logout.php";
}


function getapplicants(){
    let xmlhttp  = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("information").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","applicants.php",true);
	xmlhttp.send();
}
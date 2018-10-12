function submit_form() {
	var nb1 = document.getElementById("premier_nombre").value;
	var nb2 = document.getElementById("deuxieme_nombre").value;

	var reponse =  nb1%nb2;
	alert(reponse);
}
function submit_form() {
	var pointure = document.getElementById("pointure").value;
	var annee = document.getElementById("annee").value;

	var resultat = (pointure*2 +5)*50 - annee + 1766;
	alert(resultat)
}
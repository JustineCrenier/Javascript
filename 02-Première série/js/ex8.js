function submit_form() {
	var age = document.getElementById("age").value;
	
	if (age < 18) {
		alert("vous êtes mineur")
	} else {
		alert('vous êtes majeur')
	}	
}
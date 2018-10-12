const input = document.getElementById('nom');

input.addEventListener("keypress", function(){
	let key = input.value;
	alert(`vous avez entrée ${key}`);
});



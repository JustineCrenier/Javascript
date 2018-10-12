const raz = document.getElementsByTagName('button')[0];

raz.addEventListener("click", function(){
	let nom = document.getElementById('nom');
	nom.setAttribute('value', ' ');
	let prenom = document.getElementById('prenom');
	prenom.setAttribute('value', ' ');
	let ville = document.getElementById('ville');
	ville.setAttribute('value', ' ');
});



const texte = document.getElementById('texte');
const afficher = document.getElementsByTagName('a')[0];
const masquer = document.getElementsByTagName('a')[1];

afficher.addEventListener("click", function(){
	texte.setAttribute('style', 'display: block;');		
});
masquer.addEventListener("mouseleave", function(){
	texte.setAttribute('style', 'display: none;');		
});
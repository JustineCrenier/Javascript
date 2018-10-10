const texte = document.getElementById('texte');
const green = document.getElementsByClassName("color")[0];
const red = document.getElementsByClassName("color")[1];
const blue = document.getElementsByClassName("color")[2];

green.addEventListener("click", function(){
	texte.setAttribute('style', 'color: green;');		
});
red.addEventListener("click", function(){
	texte.setAttribute('style', 'color: red;');		
});
blue.addEventListener("click", function(){
	texte.setAttribute('style', 'color: blue;');		
});

const word = ['B','O','N','J','O','U','R',];
let tab = [];
let val;
let flag = 0;
let input=document.getElementById('lettre');

const submit = document.getElementById('submit');

//Fonction guessLetter
let guessLetter = (val) => {

	flag = 0;
	for(let i=0; i<word.length; i++){
		if(val == word[i]){
			tab.splice(i, 0, val);
			let span = document.getElementById(`lettre${i}`);
			span.innerHTML = val;
			   
   			if (flag == 0) {
   				alert('Félicitations, tu as trouvé une lettre !\nEntre une nouvelle lettre.');
   			}	
   
			flag = 1;
		}
	}
	if(flag == 0){
		alert("Pas de chance ! rentrez une nouvelle lettre");
	}
	if(word.length == tab.length){
		alert("Gagné !")
	}
}

//Eventlistener
submit.addEventListener('click', function(val){
	
	if(word.length != tab.length){
		val = document.getElementById('lettre').value;
		guessLetter(val);
	}
	// input.setAttribute('value', null);
});







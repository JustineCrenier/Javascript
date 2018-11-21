const input = document.getElementById("lettre");
const submit = document.getElementById("submit");

const word = ['B','O','N','J','O','U','R'];
let user  = [];
let val;

let guessLetter = (val) => {
	for(let i=0; i<word.length; i++){
		if(val == word[i]){
			user.splice(i, 0, val);
			let span = document.getElementById(`lettre${i}`);
			span.innerHTML = val;
		}
	}
	if(word.length != user.length){
		alert("Test une nouvelle lettre");
	}else{
		alert("Gagné!");
	}
	
}

submit.addEventListener("click", function(val){
	val = input.value;
	guessLetter(val);
});
//VARIABLES
const clic = document.getElementById('clic');
const affichage = document.getElementById('affichage');
const multiplier = document.getElementById('multiplier');
const auto = document.getElementById('autoclicker');
let score = 195;
let multiplicateur = 1;
let prix = 50;

// AUTOCLICKER
let autoclicker= () =>{
	augmenterScore();
}

let getAutoclicker = () => {
	if(score < 500){
		alert('Pas assez de score, clique plus !')
	}else{
		setInterval(autoclicker, 500);
		auto.setAttribute('disabled', 'disabled');
		auto.innerHTML = 'Bonus acquis';
		score -= 500;
		affichage.innerHTML = score;
	}
}

auto.addEventListener('click', getAutoclicker);

//MULTIPLICATEUR
let augmenterMultiplicateur = () => {
	
	//Pas de score négatif
	if(score < prix){
		alert('Pas assez de score, clique plus !')
	}else{
		multiplicateur++;
		score-=prix;
		affichage.innerHTML = score;
		prix *= 2;
		multiplier.innerHTML = `x${multiplicateur} - prix: ${prix}`;

	}
	//AUTOCLICKER
	if(score == 200){
		auto.className = "visible";
	}
}

multiplier.addEventListener('click', augmenterMultiplicateur);

//AUGMENTER LE SCORE AU CLICK
let augmenterScore = () => {
	score += multiplicateur;
	affichage.innerHTML = score;
	//AUTOCLICKER
	if(score == 200){
		auto.className = "visible";
	}
}

clic.addEventListener('click', augmenterScore);

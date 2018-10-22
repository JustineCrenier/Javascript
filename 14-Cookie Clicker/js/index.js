//VARIABLES
const clic = document.getElementById('clic');
const affichage = document.getElementById('affichage');
const multiplier = document.getElementById('multiplier');
const auto = document.getElementById('autoclicker');
const bonus = document.getElementById('bonus');
let score = 0;
let multiplicateur = 1;
let prix = 50;

//BONUS
let getBonus = () => {
	if(score < 5000){
		alert('Pas assez de score, clique plus !');
	}else{
		score -= 5000;
		affichage.innerHTML = score;
	
		let timeLeft = 30;

		let countdown = () => {
  			if (timeLeft == 0) {
    			clearInterval(timerId);
    			bonus.innerHTML = "200% - 30s - prix: 5000";
    			bonus.removeAttribute('disabled', 'disabled');
  			} else {
  				bonus.setAttribute('disabled', 'disabled');
    			bonus.innerHTML = timeLeft;
    			timeLeft--;
    			setInterval(augmenterMultiplicateur(2), 1000);
  			}
		}
		let timerId = setInterval(countdown, 1000);
	}	
}

bonus.addEventListener('click', getBonus);

//AUTOCLICKER
let getAutoclicker = () => {
	if(score < 500){
		alert('Pas assez de score, clique plus !');
	}else{
		setInterval(augmenterScore(), 1000);
		auto.setAttribute('disabled', 'disabled');
		auto.innerHTML = 'Bonus acquis';
		score -= 500;
		affichage.innerHTML = score;
	}
}

auto.addEventListener('click', getAutoclicker);

//MULTIPLICATEUR
let augmenterMultiplicateur = (mult) => {
	
	//Pas de score négatif
	if(score < prix){
		alert('Pas assez de score, clique plus !');
	}else{
		multiplicateur++ *Number(mult);
		score-=prix;
		affichage.innerHTML = score;
		prix *= 2;
		multiplier.innerHTML = `x${multiplicateur} - prix: ${prix}`;

	}
}

multiplier.addEventListener('click', function(){
	augmenterMultiplicateur(1)
});

//AUGMENTER LE SCORE AU CLICK
let augmenterScore = () => {
	score += multiplicateur;
	affichage.innerHTML = score;
	//AUTOCLICKER
	if(score >= 200){
		auto.className = "visible";
	}
}

clic.addEventListener('click', augmenterScore);

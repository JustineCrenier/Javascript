function calculIMC(){
	let poids = prompt('Quel est ton poids ? (en kg)');
	let taille = prompt('Quel est ta taille ? (en m)');

	let imc = poids / Math.pow(taille, 2);
	let imcRound = imc.toFixed(2);

	alert(imcRound);

	if(imcRound < 16.5){
		alert('Dénutriton ou famine');
	}else if (16.5 <= imcRound && imcRound < 18.5) {
		alert('Maigreur');
	}else if (18.5 <= imcRound && imcRound < 25) {
		alert('Corpulence normal');
	}else if (25 <= imcRound && imcRound < 30) {
		alert('surpoids');	
	}else if (30 <= imcRound && imcRound < 35) {
		alert('Obésité modérée');	
	}else if (35 <= imcRound && imcRound < 40) {
		alert('Obésitée sévère');
	}else{
		alert('Obesitée morbide');	
	}
}
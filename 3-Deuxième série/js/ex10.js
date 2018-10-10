function somme(){
	let i;
	let resultat = 0;

	for(i=0; i<3; i++){
		let a = prompt('Entrez un nombre : ');
		resultat += Number(a);
	}
	alert(resultat);
}
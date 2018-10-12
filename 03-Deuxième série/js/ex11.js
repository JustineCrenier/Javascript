function calculMoyenne(){
	
	let i = 0; //pour compter le nombre d'entrée
	let sommeTotal =0; //Initialiser la somme des entrées
	let n = prompt('Entrez un nombre entier');

	if(n<0){
		let moyenne = sommeTotal / i;
		alert('Le nombre d\'entrée est de : ' + i + '\nLa moyenne est de : '+ moyenne)
	}
	do{
		if(Number.isInteger(Number(n))){
			sommeTotal += Number(n);
			i++;
		}else{
			alert('Erreur: vous n\'avez pas rentré un entier')
		}
		n = prompt('Entrez un nombre entier');

	}while(n>=0)	
}




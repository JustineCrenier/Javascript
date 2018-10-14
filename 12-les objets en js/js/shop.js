let shop = [{
		title: 'fruits',
		physic: 2,
		magic: 1,
		minLevel: 3,
		available: true,
	}, {
		title: 'clothes',
		physic: 0,
		magic: 1,
		minLevel: 15,
		available: false,
	}, {
		title: 'games',
		physic: 6,
		magic: 1,
		minLevel: 5,
		available: true
	}, {
		title: 'drinks',
		physic: 0,
		magic: 1,
		minLevel: 10,
		available: false
	}
];

let afficher = () => {
	for (let i=0; i<shop.length; i++){
		let result = "";
		for(let key in shop[i]){ 
			result += '\n' + shop[i][key]; // recupere chaque valeur
		}
		alert(`Items : ${result}`);
	}
}

afficher(); //afficher tout les objets

let afficherDispo = () => {
	for (let i=0; i<shop.length; i++){
		let result = "";
		for(let key in shop[i]){ 
			if(shop[i].available == true){
				result += '\n' + shop[i][key];
			}
		}
		if(result != ""){
			alert(`Items disponibles: ${result}`);
		}
	}
}

afficherDispo(); // afficher uniquement les objets disponibles

let afficherMinLevel = (min) => {
	for (let i=0; i<shop.length; i++){
		let result = "";
		for(let key in shop[i]){ 
			if(shop[i].minLevel >= min){
				result += '\n' + shop[i][key];
			}
		}
		if(result != ""){
			alert(`Items dont le niveau minimun est de ${min}: ${result}`);
		}
	}
}

afficherMinLevel(10); // afficher uniquement les objets dont le niveau minimun est de 10
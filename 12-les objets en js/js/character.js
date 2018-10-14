let afficher = "";

let character = {
	name: "Ghale",
	age: 27,
	items_to_give: ["Knife" , "Whisky bottle" , "ring"],
};

for(let key in character){ 
	afficher += '\n' + character[key]; // recupere chaque valeur
}

alert(afficher); //affiche les valeurs

let giveItem = () => {

	let j = character.items_to_give.length;
	
	let getI = (min, max) => {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
	}

	let i = getI(0,j);

	let give = character.items_to_give[i]

	alert(`Ghale donne : ${give}`);

}

giveItem();
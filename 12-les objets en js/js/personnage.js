let mainCharacter = {
	name: 'Diablo',
	level: 23,
	life: 150,
	weapon: {
		name: 'ses propres poings',
		damage: 75,
	},
	attack: function(){
		alert(`${mainCharacter.name} attaque avec l'arme ${mainCharacter.weapon.name} les dégâts sont de ${mainCharacter.level * mainCharacter.weapon.damage}`);
	}
};

mainCharacter.attack();
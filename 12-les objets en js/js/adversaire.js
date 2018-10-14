function Character(name, level, life, weaponName, weaponDamage){
	this.name = name,
	this.level = level,
	this.life = life,
	this.weapon = {
		name : weaponName,
		damage : weaponDamage,
	},
	this.receiveDamage = function(){
		return this.level * this.weapon.damage;
	},
	this.attack = function(adversaire) {
		let degats = this.receiveDamage();
		alert(`${this.name} attaque ${adversaire.name} \navec l'arme ${this.weapon.name} \net lui inflige ${degats} \n${adversaire.name}  a maintenant ${adversaire.life - degats} de vie`)
	}
}

let opponentCharacter = new Character('Vaskez', 18, 3000, 'couteau', 65);
let mainCharacter = new Character('Diablo', 23, 3000, 'ses propres poings', 75);

mainCharacter.attack(opponentCharacter);
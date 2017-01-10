/*
	This example shows how to create a Monster Prototype, with properties and methods,
	and how to add new properties and methods using the prototype
*/
function Monster() {
	this.name = "Monster";
	this.life = 100;
	this.age = 1;
	
	this.attack = function attack(targetMonster) {
		targetMonster.life -= 2;
		console.log(this.name + " has attacked " + targetMonster.name + " for 2 hitpoints");
	}

	this.logHitpoints = function logHitpoints(){
		console.log(this.name + " has " + this.life + " hitpoints");
	}
}

// Adding a new property and a new method to the Monster Class using prototype
Monster.prototype.mana = 50;
Monster.prototype.magicAttack = function magicAttack(targetMonster) {
	this.mana -= 10;
	targetMonster.life -= 4;
			console.log(this.name + " cast a magic spell at " + targetMonster.name + " dealing 4 hitpoints of damage");
}

/*
	Here it is shown how Monster Objects are instantiated
	and the usage of its methods
*/ 
var Zombie = new Monster();
var Vampire = new Monster();

Zombie.name = "Zombie";
Vampire.name = "Vampire";

Zombie.logHitpoints();
Vampire.logHitpoints();

Zombie.attack(Vampire);

Zombie.logHitpoints();
Vampire.logHitpoints();

Vampire.magicAttack(Zombie);

Zombie.logHitpoints();
Vampire.logHitpoints();
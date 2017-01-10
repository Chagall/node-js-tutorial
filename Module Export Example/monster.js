module.exports = {

	Monster: function() {
		// Properties
		this.name = "Monster";
		this.life = 100;
		this.mana = 50;
		this.age = 1;

		// Attack
		this.attack = function attack(targetMonster) {
			targetMonster.life -= 2;
			console.log(this.name + " has attacked " + targetMonster.name + " for 2 hitpoints");
		}

		// Magic Attack
		this.magicAttack = function magicAttack(targetMonster) {
			this.mana -= 10;
			targetMonster.life -= 4;
			console.log(this.name + " cast a magic spell at " + targetMonster.name + " dealing 4 hitpoints of damage");
		}

		// Print Hitpoints
		this.showHitpoints = function showHitpoints(){
			console.log(this.name + " has " + this.life + " hitpoints");
		}
	}

};
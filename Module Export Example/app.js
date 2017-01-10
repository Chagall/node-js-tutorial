var monsterModule = require('./monster');

var Zombie = new monsterModule.Monster();
var Vampire = new monsterModule.Monster();

Zombie.name = "Zombie";
Vampire.name = "Vampire";

Zombie.showHitpoints();
Vampire.showHitpoints();

Zombie.attack(Vampire);

Zombie.showHitpoints();
Vampire.showHitpoints();

Vampire.magicAttack(Zombie);

Zombie.showHitpoints();
Vampire.showHitpoints();
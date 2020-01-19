class Fighter {

	constructor(options) {
		this.name = options.name;
		this.damage = options.damage;
		this.hp = options.hp;
		this.strength = options.strength;
		this.agility = options.agility;
		this.wins = 0;
		this.losses = 0;
		this.total = options.hp;
	}

	get fighterName() {
		return this.name;
	}

	get fighterDamage() {
		return this.damage;
	}

	get fighterHp() {
		return this.hp;
	}

	get fighterStrength() {
		return this.strength;
	}

	get fighterAgility() {
		return this.agility;
	}

	set fighterName(newName) {
		this.name = newName;
	}

	set fighterDamage(newDamage) {
		this.damage = newDamage;
	}

	set fighterHp(newHp) {
		this.hp = newHp;
	}

	set fighterStrength(newStrength) {
		this.strength = newStrength;
	}

	set fighterAgility(newAgility) {
		this.agility = newAgility;
	}

	attack(fighter) {
		let success = 100 - fighter.fighterStrength + fighter.fighterAgility;
		if(success < 50) {
			console.log(this.name + ' attack missed');
			this.losses++;
			fighter.wins++;
		}else if(success >= 50) {
			this.wins++;
			fighter.losses++;
			fighter.fighterHp =fighter.fighterHp - this.damage;
			if(fighter.fighterHp < 0) {
				fighter.fighterHp = 0;
			}
			console.log(this.name + ' makes ' + this.damage + ' damage to ' + fighter.fighterName )
		}
	}

	logCombatHistory() {
		console.log('Name: '+this.name+','+' Wins: '+this.wins+','+' Losses: '+this.losses);
	}

	heal(somehp) {
		if(this.hp + somehp > this.total) {
			this.hp = this.total;
		}else if(this.hp + somehp < this.total) {
			this.hp += somehp; 
		}
	}

	dealDamage(somehp) {
		if(this.hp - somehp < 0) {
			this.hp = 0;
		}else if(this.hp - somehp >= 0) {
			this.hp -= somehp;
		}
	}

	addWin() {
		this.wins++;
	}

	addLoss() {
		this.losses++;
	}
}

const fighter1 = new Fighter({
	name: 'Bob',
	damage: 50,
	hp: 130,
	strength: 40,
	agility: 10
})

const fighter2 = new Fighter({
	name: 'Steve',
	damage: 60,
	hp: 120,
	strength: 35,
	agility: 15
})

let battle = function(fighter1, fighter2) {
	let tr = true;
	while(tr === true) {

		if(fighter1.fighterHp < 1) {
			tr = false;
			console.log(fighter1.fighterName+' is already dead');
			break;
		}else if(fighter2.fighterHp < 1) {
			tr = false;
			console.log(fighter2.fighterName+' is already dead');
			break;
		}

		fighter1.attack(fighter2);
		fighter2.attack(fighter1);
			
		if(fighter1.fighterHp < 1) {
			tr === false;
			console.log(fighter2.fighterName+' Wins!');
			break;
		}else if(fighter2.fighterHp < 1) {
			tr === false;
			console.log(fighter1.fighterName+' Wins!');
			break;
		}
	}
}
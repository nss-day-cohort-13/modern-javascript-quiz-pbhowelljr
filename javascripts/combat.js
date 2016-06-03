//*****COMBAT*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//MAIN COMBAT FUNCTION//
	battledome.combat = (playerA, playerB) => {

		//GENERATES RANDOM NUMBER FOR DAMAGE MULTIPLIER//
		var randomDamageMultiplier = (min,max) => {
			return Math.random() * (max-min) + min;
		};

		//FLOW CONTROL//
		battledome.flowControl = () => {
			if(playerA.health <= 0 || playerB.health <= 0) {
				$('#attackButton').prop('disabled', true);
				if(playerA.health > playerB.health){
					$('.stats').append("player A wins!");
				} else {
					$('.stats').append("player B wins!");
				}
			}
		};

		//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
		//MAIN ATTACK/DAMAGE SEQUENCE//
		battledome.attackSequence = () => {
			const playerADamage = randomDamageMultiplier(0.75,1.1)*playerB.damage;
			const playerBDamage = randomDamageMultiplier(0.75,1.1)*playerA.damage;
			playerA.health -= playerBDamage;
			playerB.health -= playerADamage;
			battledome.updateStats(playerA, playerB, playerADamage, playerBDamage);
			battledome.flowControl();
		};

		//APPLIES MODIFIERS TO PLAYER OBJECTS//
		playerA.applyModifiers();
		playerB.applyModifiers();

		//ADDS EVENTS LISTENER FOR CLICK ON ATTACK BUTTON//
		$('#attackButton').click(battledome.attackSequence);
	};

  return battledome;
})(battledome || {});

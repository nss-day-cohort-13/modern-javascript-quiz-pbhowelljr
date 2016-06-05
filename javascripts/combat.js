//*****COMBAT*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//GENERATES RANDOM NUMBER FOR DAMAGE MULTIPLIER//
	battledome.randomMultiplier = (min,max) => {
		return Math.random() * (max-min) + min;
	};

	//FLOW CONTROL//
	battledome.flowControl = (playerA, playerB) => {
		if(playerA.health <= 0 || playerB.health <= 0) {
			$('#attackButton').prop('disabled', true);
			if(playerA.health > playerB.health){
				battledome.endGameView(playerA, playerB);
			} else {
				battledome.endGameView(playerB, playerA);
			}
		}
	};

	//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
	//MAIN ATTACK/DAMAGE SEQUENCE//
	battledome.attackSequence = (playerA, playerB) => {
		const playerADamage = playerA.generateHit();
		const playerBDamage = playerB.generateHit();
		playerA.applyDamage(playerBDamage);
		playerB.applyDamage(playerADamage);
		battledome.updateStats(playerA, playerB, playerADamage, playerBDamage);
		battledome.flowControl(playerA, playerB);
	};

	//INITIALIZE COMBAT SEQUENCE//
	battledome.initializeCombat = (playerA, playerB) => {
		playerA.applyModifiers();
		playerB.applyModifiers();
		battledome.initializeStats(playerA, playerB);
		$('#attackButton').click(() => {
			battledome.attackSequence(playerA, playerB);
		});
	};

  return battledome;
})(battledome || {});

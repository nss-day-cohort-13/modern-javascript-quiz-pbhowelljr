//*****COMBAT*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//MAIN COMBAT FUNCTION//
	battledome.combat = function(playerA, playerB){

		//GENERATES RANDOM NUMBER FOR DAMAGE MULTIPLIER//
		var randomDamageMultiplier = function (min,max){
			return Math.random() * (max-min) + min;
		};

		//FLOW CONTROL//
		battledome.flowControl = function(){
			if(playerA.health >= 0 && playerB.health >= 0){
				battledome.attackSequence();
			} else{
				if(playerA.health > playerB.health){
					console.log("player A wins!");
				}
				if(playerA.health < playerB.health){
					console.log("player B wins!");
				} else{
						console.log('game over');
				}
			}
		};

		//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
		//MAIN ATTACK/DAMAGE SEQUENCE//
		battledome.attackSequence = function(){
			playerA.health -= randomDamageMultiplier(0.75,1.1)*playerB.damage;
			playerB.health -= randomDamageMultiplier(0.75,1.1)*playerA.damage;
			console.log(playerA.health);
			console.log(playerB.health);
			battledome.flowControl();
		};

		// APPLIES MODIFIERS TO PLAYER AND PLAYER A OBJECTS//
		playerA.applyModifiers();
		playerB.applyModifiers();
		battledome.attackSequence();
	};

  return battledome;
})(battledome || {});

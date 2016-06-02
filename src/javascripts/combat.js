//*****COMBAT*****//
'use strict';

var battledome = (function(battledome){

		//MAIN COMBAT FUNCTION//
		battledome.combat = function(playerA, playerB){
	
			//GENERATES RANDOM NUMBER FOR DAMAGE MULTIPLIER//
			var randomDamageMultiplier = function (min,max){
				return Math.random() * (max-min) + min;
			};

			// // APPLIES MODIFIERS TO PLAYER AND PLAYER A OBJECTS//
			// playerA.applyModifiers();
			// playerB.applyModifiers();

			//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
			//MAIN ATTACK/DAMAGE SEQUENCE//
			battledome.attackSequence = function(){
				playerA.health -= randomDamageMultiplier(0.75,1.1)*playerB.damage;
				console.log(playerA.health);
				playerB.health -= randomDamageMultiplier(0.75,1.1)*playerA.damage;
				console.log(playerB.health);
			};
			battledome.attackSequence();
		};


  return battledome;
})(battledome || {});

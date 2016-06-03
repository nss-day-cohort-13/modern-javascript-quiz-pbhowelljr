//*****DOM*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	battledome.addGameSetupView = () => {
		$('.mainContent').html(`
			<input class="nameInput" type="text" placeholder="player A name:">
			<select class="playerModel">
				<option value="Quadcopter">Quadcopter</option>
				<option value="Hovership">Hovership</option>
				<option value="LaserMech">LaserMech</option>
				<option value="GunMech">GunMech</option>
				<option value="ArmorBuggy">ArmorBuggy</option>
				<option value="FlameTank">FlameTank</option>
			</select>
			<input class="nameInput" type="text" placeholder="player B name:">
			<select class="playerModel">
				<option value="Quadcopter">Quadcopter</option>
				<option value="Hovership">Hovership</option>
				<option value="LaserMech">LaserMech</option>
				<option value="GunMech">GunMech</option>
				<option value="ArmorBuggy">ArmorBuggy</option>
				<option value="FlameTank">FlameTank</option>
			</select>
			<button id="playersCreateButton" type="submit">Submit</button>
			`);
	};

	battledome.addCombatView = () => {
		$('.mainContent').html(`
			<button id="attackButton" type="submit">Attack</button>
			<div class="stats"></div>
			`);
	};

	battledome.updateStats = (playerA, playerB, playerADamage, playerBDamage) => {
		$('.stats').html(`
			<p>${playerA.name}: ${playerA.health.toFixed(2)} health</p>
			<p>${playerB.name}: ${playerB.health.toFixed(2)} health</p>
			<p>${playerA.name} did ${playerADamage.toFixed(2)} damage to ${playerB.name}</p>
			<p>${playerB.name} did ${playerBDamage.toFixed(2)} damage to ${playerA.name}</p>
			`)
	};

	battledome.playersCreateButtonCallback = () => {
		var aName = $('.nameInput')[0].value;
		var bName = $('.nameInput')[1].value;
		var aModel = $('.playerModel')[0].value;
		var bModel = $('.playerModel')[1].value;
		var a = battledome.createPlayer(aName, aModel);
		var b = battledome.createPlayer(bName, bModel);
		battledome.addCombatView();
		battledome.combat(a,b);
	};

  return battledome;
})(battledome || {});

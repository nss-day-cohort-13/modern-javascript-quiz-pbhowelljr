//*****DOM*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//ADDS GAME SETUP VIEW TO DOM//
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

	//ADDS COMBAT VIEW TO DOM//
	battledome.addCombatView = () => {
		$('.mainContent').html(`
			<button id="attackButton" type="submit">Attack</button>
			<div class="stats"></div>
			`);
	};

	//ADDS PLAYERS DATA TO DOM//
	battledome.initializeStats = (playerA, playerB) => {
		$('.stats').html(`
			<p>${playerA.name}: ${playerA.model} ${playerA.type}'s health = ${playerA.health.toFixed(2)}</p>
			<p>${playerB.name}: ${playerB.model} ${playerB.type}'s health = ${playerB.health.toFixed(2)}</p>
			`);
	};

	//UPDATES PLAYERS DATA IN DOM//
	battledome.updateStats = (playerA, playerB, playerADamage, playerBDamage) => {
		$('.stats').html(`
			<p>${playerA.name}: ${playerA.model} ${playerA.type}'s health = ${playerA.health.toFixed(2)}</p>
			<p>${playerB.name}: ${playerB.model} ${playerB.type}'s health = ${playerB.health.toFixed(2)}</p>
			<p>${playerA.name} did ${playerADamage.toFixed(2)} damage to ${playerB.name}</p>
			<p>${playerB.name} did ${playerBDamage.toFixed(2)} damage to ${playerA.name}</p>
			`);
	};

	//CREATES NEW PLAYERS OBJECTS FROM UI INPUT//
	battledome.playersCreateButtonCallback = () => {
		const aName = $('.nameInput')[0].value;
		const bName = $('.nameInput')[1].value;
		const aModel = $('.playerModel')[0].value;
		const bModel = $('.playerModel')[1].value;
		const a = battledome.createPlayer(aName, aModel);
		const b = battledome.createPlayer(bName, bModel);
		battledome.addCombatView();
		battledome.combat(a,b);
	};

  return battledome;
})(battledome || {});

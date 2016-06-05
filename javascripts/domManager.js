//*****DOM*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//ADDS GAME SETUP VIEW TO DOM//
	battledome.addGameSetupView = () => {
		$('.mainContent').html(`
			<div class='row'>
				<div class='col-sm-2'></div>
				<input class="nameInput col-sm-3" type="text" placeholder="player A name:">
				<div class='col-sm-2'></div>
				<input class="nameInput col-sm-3" type="text" placeholder="player B name:">
				<div class='col-sm-2'></div>
			</div>
			<div class='row'>	
				<div class='col-sm-2'></div>
				<select class="playerModel col-sm-3">
					<option value="Quadcopter">Quadcopter</option>
					<option value="Hovership">Hovership</option>
					<option value="LaserMech">LaserMech</option>
					<option value="GunMech">GunMech</option>
					<option value="ArmorBuggy">ArmorBuggy</option>
					<option value="FlameTank">FlameTank</option>
				</select>
				<div class='col-sm-2'></div>
				<select class="playerModel col-sm-3">
					<option value="Quadcopter">Quadcopter</option>
					<option value="Hovership">Hovership</option>
					<option value="LaserMech">LaserMech</option>
					<option value="GunMech">GunMech</option>
					<option value="ArmorBuggy">ArmorBuggy</option>
					<option value="FlameTank">FlameTank</option>
				</select>
				<div class='col-sm-2'></div>
			</div>
			<div class='row'>
				<div class='col-sm-4'></div>
				<button class='col-sm-4 btn btn-primary' id="initializeCombatButton" type="submit">Submit</button>
				<div class='col-sm-4'></div>
			</div>
			`);
	};

	//ADDS COMBAT VIEW TO DOM//
	battledome.addCombatView = () => {
		$('.mainContent').html(`
			<div class='row'>
				<div class='col-sm-4'></div>
				<button  class='col-sm-4 btn btn-primary' id="attackButton" type="submit">Attack</button>
				<div class='col-sm-4'></div>
			</div>	
			<div class="stats"></div>
			`);
	};

	//ADDS PLAYERS DATA TO DOM//
	battledome.initializeStats = (playerA, playerB) => {
		$('.stats').html(`
			<div class='row'>
				<div class='col-sm-2'></div>
				<p class='col-sm-3'>${playerA.name}: ${playerA.model} ${playerA.type}'s health = ${playerA.health.toFixed(2)}</p>
				<div class='col-sm-2'></div>
				<p class='col-sm-3'>${playerB.name}: ${playerB.model} ${playerB.type}'s health = ${playerB.health.toFixed(2)}</p>
				<div class='col-sm-2'></div>
			</div>	
			`);
	};

	//UPDATES PLAYERS DATA IN DOM//
	battledome.updateStats = (playerA, playerB, playerADamage, playerBDamage) => {
		$('.stats').html(`
			<div class='row'>
				<div class='col-sm-2'></div>
				<p class='col-sm-3'>${playerA.name}: ${playerA.model} ${playerA.type}'s health = ${playerA.health.toFixed(2)}</p>
				<div class='col-sm-2'></div>
				<p class='col-sm-3'>${playerB.name}: ${playerB.model} ${playerB.type}'s health = ${playerB.health.toFixed(2)}</p>
				<div class='col-sm-2'></div>
			</div>	
			<div class='row'>
				<div class='col-sm-2'></div>
				<p class='col-sm-3'>${playerB.name} did ${playerBDamage.toFixed(2)} damage to ${playerA.name}</p>
				<div class='col-sm-2'></div>
				<p class='col-sm-3'>${playerA.name} did ${playerADamage.toFixed(2)} damage to ${playerB.name}</p>
				<div class='col-sm-2'></div>
			</div>	
			`);
	};

	battledome.endGameView = function(winner, loser){

		$('.stats').append(`
			<div class='row'>
				<div class='col-sm-3'></div>
				<p class='col-sm-6'>
					${winner.name}'s ${winner.model} ${winner.type} defeated ${loser.name}'s ${loser.model} ${loser.type}!
				</p>
				<div class='col-sm-3'></div>
			</div>
			<div class='row'>
				<div class='col-sm-3'></div>
					<p class='col-sm-6'>${winner.name} wins!</p>
				<div class='col-sm-3'></div>
			</div>	
			`);
	};

			
	//CREATES NEW PLAYERS OBJECTS FROM UI INPUT//
	battledome.initializeCombatButtonCallback = () => {
		const aName = $('.nameInput')[0].value;
		const bName = $('.nameInput')[1].value;
		const aModel = $('.playerModel')[0].value;
		const bModel = $('.playerModel')[1].value;
		const playerA = battledome.createPlayer(aName, aModel);
		const playerB = battledome.createPlayer(bName, bModel);
		battledome.addCombatView();
		battledome.initializeCombat(playerA, playerB);
	};

  return battledome;
})(battledome || {});

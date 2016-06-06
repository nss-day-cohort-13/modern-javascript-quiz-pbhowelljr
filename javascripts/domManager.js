//*****DOM*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//ADDS GAME SETUP VIEW TO DOM//
	battledome.addGameSetupView = () => {
		$('.mainContent').html(`
			<div class='row'>
				<div class='col-sm-3 col-sm-offset-2 row'>
					<input class="nameInput col-sm-12" type="text" placeholder="player A name:">
					<select class="playerModel col-sm-12">
						<option value="Quadcopter">Quadcopter</option>
						<option value="Hovership">Hovership</option>
						<option value="LaserMech">LaserMech</option>
						<option value="GunMech">GunMech</option>
						<option value="ArmorBuggy">ArmorBuggy</option>
						<option value="FlameTank">FlameTank</option>
					</select>
				</div>
				<div class='col-sm-3 col-sm-offset-2 row'>
					<input class="nameInput col-sm-12" type="text" placeholder="player B name:">
					<select class="playerModel col-sm-12">
						<option value="Quadcopter">Quadcopter</option>
						<option value="Hovership">Hovership</option>
						<option value="LaserMech">LaserMech</option>
						<option value="GunMech">GunMech</option>
						<option value="ArmorBuggy">ArmorBuggy</option>
						<option value="FlameTank">FlameTank</option>
					</select>
				</div>	
			</div>
			<div class='row'>
				<button class='col-sm-4 col-sm-offset-4 btn btn-primary' id="initializeCombatButton" type="submit">Submit</button>
			</div>
			`);
	};

	//ADDS COMBAT VIEW TO DOM//
	battledome.addCombatView = () => {
		$('.mainContent').html(`
			<div class="stats"></div>
			<div class='row'>
				<button class='col-sm-4 col-sm-offset-4 btn btn-primary' id="attackButton" type="submit">Attack</button>
			</div>
			<div class="endStats"></div>
			
			`);
	};

	//ADDS PLAYERS DATA TO DOM//
	battledome.initializeStats = (playerA, playerB) => {
		$('.stats').html(`
			<div class='row'>
				<div class='col-sm-3 col-sm-offset-2 row playerStats'>
					<h3 class='col-md-12'>${playerA.name}</h3>
					<h5 class='col-md-12'>${playerA.model} ${playerA.type}</h5>
					<p class='col-md-3 col-sm-offset-3'>Health:</p>
					<p class='col-md-4 healthValue'>${playerA.health.toFixed(0)}</p>
				</div>	
				<div class='col-sm-3 col-sm-offset-2 row playerStats'>
					<h3 class='col-md-12'>${playerB.name}</h3>
					<h5 class='col-md-12'>${playerB.model} ${playerB.type}</h5>
					<p class='col-md-3 col-sm-offset-3'>Health:</p>
					<p class='col-md-4 healthValue'>${playerB.health.toFixed(0)}</p>
				</div>	
			</div>	
			`);
	};

	//UPDATES PLAYERS DATA IN DOM//
	battledome.updateStats = (playerA, playerB, playerADamage, playerBDamage) => {
		$('.stats').html(`
			<div class='row'>
				<div class='col-sm-3 col-sm-offset-2 row playerStats'>
					<h3 class='col-sm-12'>${playerA.name}</h3>
					<h5 class='col-sm-12'>${playerA.model} ${playerA.type}</h5>
					<p class='col-sm-3 col-sm-offset-3'>Health:</p>
					<p class='col-sm-4 healthValue'>${playerA.health.toFixed(0)}</p>
					<p class='col-sm-12'>${playerB.name} did ${playerBDamage.toFixed(0)} damage to ${playerA.name}</p>
				</div>
				<div class='col-sm-3 col-sm-offset-2 row playerStats'>
					<h3 class='col-sm-12'>${playerB.name}</h3>
					<h5 class='col-sm-12'>${playerB.model} ${playerB.type}</h5>
					<p class='col-sm-3 col-sm-offset-3'>Health:</p>
					<p class='col-sm-4 healthValue'>${playerB.health.toFixed(0)}</p>
					<p class='col-sm-12'>${playerA.name} did ${playerADamage.toFixed(0)} damage to ${playerB.name}</p>
				</div>
			`);
	};

	//ADDS END OF GAME DATA TO DOM//
	battledome.endGameView = function(winner, loser){
		$('.endStats').html(`
			<div class='row'>
				<div class='col-sm-6 col-sm-offset-3 endGameDiv'>
					<p class='col-sm-12'>
						${winner.name}'s ${winner.model} ${winner.type} defeated ${loser.name}'s ${loser.model} ${loser.type}!
					</p>
					<p class='col-sm-12'>
						${winner.name} wins!
					</p>
				</div>	
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

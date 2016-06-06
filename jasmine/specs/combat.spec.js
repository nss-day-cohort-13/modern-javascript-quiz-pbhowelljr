//*****ROBOT BATTLEDOME*****//
//COMBAT SPECS//

//BATTLEDOME
describe('battledome', function() {
	it('should exist', function() {
		expect(battledome).toBeDefined();
	});

	//COMBAT//
	describe('battledome.randomMultiplier', function() {
		it('should exist', function() {
			expect(battledome.randomMultiplier).toBeDefined();
		});
		it('return a value within a range', function() {
			expect(battledome.randomMultiplier(1,4)).not.toBeLessThan(1);
			expect(battledome.randomMultiplier(1,4)).not.toBeGreaterThan(4);
			expect(battledome.randomMultiplier(100005,100008)).not.toBeLessThan(100004);
			expect(battledome.randomMultiplier(100005,100008)).not.toBeGreaterThan(100008);
		});
	});

	//FLOW CONTROL//
	describe('battledome.flowControl', function() {
		it('should exist', function() {
			expect(battledome.flowControl).toBeDefined();
		});
		it('should end game if player health is less than 0', function() {
			var playerA = battledome.createPlayer("", "Quadcopter");
			var playerB = battledome.createPlayer("", "Hovership");
			spyOn(battledome, 'endGameView');
			battledome.flowControl(playerA, playerB);
			expect(battledome.endGameView).not.toHaveBeenCalled();
			playerA.health = 0;
			battledome.flowControl(playerA, playerB);
			expect(battledome.endGameView).toHaveBeenCalled();
		});
	});

	//ATTACK SEQUENCE//
	describe('battledome.attackSequence', function() {
		it('should exist', function() {
			expect(battledome.attackSequence).toBeDefined();
		});
		it('should diminish both player healths', function() {
			var playerA = battledome.createPlayer("", "Quadcopter");
			var playerB = battledome.createPlayer("", "Hovership");
			var aInitialHealth = playerA.health;
			var bInitialHealth = playerB.health;
			battledome.attackSequence(playerA, playerB);
			expect(playerA.health).toBeLessThan(aInitialHealth);
			expect(playerB.health).toBeLessThan(bInitialHealth);
		});
	});

	//INITIALIZE COMBAT//
	describe('battledome.initializeCombat', function() {
		it('should exist', function() {
			expect(battledome.initializeCombat).toBeDefined();
		});
	});
});

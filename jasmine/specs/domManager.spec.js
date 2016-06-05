//*****ROBOT BATTLEDOME*****//
//CONSTRUCTORS SPECS//

//BATTLEDOME
describe('battledome', function() {
	it('should exist', function() {
		expect(battledome).toBeDefined();
	});

	//ADD GAME SETUP VIEW//
	describe('battledome.addGameSetupView', function() {
		it('should exist', function() {
			expect(battledome.addGameSetupView).toBeDefined();
		});
	});

	//ADD COMBAT VIEW//
	describe('battledome.addCombatView', function() {
		it('should exist', function() {
			expect(battledome.addCombatView).toBeDefined();
		});
	});

		//INITIALIZE STATS//
	describe('battledome.initializeStats', function() {
		it('should exist', function() {
			expect(battledome.initializeStats).toBeDefined();
		});
	});

	//UPDATE STATS//
	describe('battledome.updateStats', function() {
		it('should exist', function() {
			expect(battledome.updateStats).toBeDefined();
		});
	});

	//END GAME VIEW//
	describe('battledome.endGameView', function() {
		it('should exist', function() {
			expect(battledome.endGameView).toBeDefined();
		});
	});
	
	//INITIALIZE COMBAT BUTTON CALLBACK//
	describe('battledome.initializeCombatButtonCallback', function() {
		it('should exist', function() {
			expect(battledome.initializeCombatButtonCallback).toBeDefined();
		});
	});
});

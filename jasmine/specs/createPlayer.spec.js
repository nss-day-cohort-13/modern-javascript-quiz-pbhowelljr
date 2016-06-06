//*****ROBOT BATTLEDOME*****//
//CREATE PLAYER SPECS//

//BATTLEDOME//
describe('battledome', function() {
	it('should exist', function() {
		expect(battledome).toBeDefined();
	});
	
	//CREATE PLAYER//
	describe('battledome.createPlayer', function() {
		it('should exist', function() {
			expect(battledome.createPlayer).toBeDefined();
		});
		it('should work with all robot models', function() {
			expect(battledome.createPlayer("", "Quadcopter")).not.toBeFalsy();
			expect(battledome.createPlayer("", "Hovership")).not.toBeFalsy();
			expect(battledome.createPlayer("", "LaserMech")).not.toBeFalsy();
			expect(battledome.createPlayer("", "GunMech")).not.toBeFalsy();
			expect(battledome.createPlayer("", "ArmorBuggy")).not.toBeFalsy();
			expect(battledome.createPlayer("", "FlameTank")).not.toBeFalsy();
		});
		it('should create objects with inherited properties', function() {
			var testPlayer = battledome.createPlayer("", "Hovership");
			expect(testPlayer.name).toBeDefined();
			expect(testPlayer.applyDamage).toBeDefined();
			expect(testPlayer.generateHit).toBeDefined();
			expect(testPlayer.model).toBeDefined();
			expect(testPlayer.modelDamageModifier).toBeDefined();
			expect(testPlayer.modelHealthModifier).toBeDefined();
			expect(testPlayer.type).toBeDefined();
			expect(testPlayer.applyModifiers).toBeDefined();
			expect(testPlayer.damage).toBeDefined();
			expect(testPlayer.health).toBeDefined();
		});
	});
});

//*****ROBOT BATTLEDOME*****//
//CONSTRUCTORS SPECS//

//BATTLEDOME//
describe('battledome', function() {
	it('should exist', function() {
		expect(battledome).toBeDefined();
	});
	//ROBOT//
	describe('battledome.Robot', function() {
		it('should exist', function() {
			expect(battledome.Robot).toBeDefined();
		});
	});
	//DRONE//
	describe('battledome.Drone', function() {
		it('should exist', function() {
			expect(battledome.Drone).toBeDefined();
		});
	});
		//BIPEDAL//
	describe('battledome.Bipedal', function() {
		it('should exist', function() {
			expect(battledome.Bipedal).toBeDefined();
		});
	});
	//ATV//
	describe('battledome.Atv', function() {
		it('should exist', function() {
			expect(battledome.Atv).toBeDefined();
		});
	});
	//QUADCOPTER//
	describe('battledome.Quadcopter', function() {
		it('should exist', function() {
			expect(battledome.Quadcopter).toBeDefined();
		});
	});
	//HOVERSHIP//
	describe('battledome.Hovership', function() {
		it('should exist', function() {
			expect(battledome.Hovership).toBeDefined();
		});
	});
	//LASER MECH//
	describe('battledome.LaserMech', function() {
		it('should exist', function() {
			expect(battledome.LaserMech).toBeDefined();
		});
	});
	//GUN MECH//
	describe('battledome.GunMech', function() {
		it('should exist', function() {
			expect(battledome.GunMech).toBeDefined();
		});
	});
	//ARMOR BUGGY//
	describe('battledome.ArmorBuggy', function() {
		it('should exist', function() {
			expect(battledome.ArmorBuggy).toBeDefined();
		});
	});
	//FLAME TANK//
	describe('battledome.FlameTank', function() {
		it('should exist', function() {
			expect(battledome.FlameTank).toBeDefined();
		});
	});
	//PLAYER//
	describe('battledome.Player', function() {
		it('should exist', function() {
			expect(battledome.Player).toBeDefined();
		});
	});

	//APPLY MODIFIERS//
	describe('Robot.applyModifiers', function() {
		var testPlayer = battledome.createPlayer("", "Hovership");
		it('should exist', function() {
			expect(testPlayer.applyModifiers).toBeDefined();
		});
	});

	//APPLY DAMAGE//
	describe('Player.applyDamage', function() {
		var testPlayer = battledome.createPlayer("", "Hovership");
		it('should exist', function() {
			expect(testPlayer.applyDamage).toBeDefined();
		});
		it('should diminish a players health', function() {
			var initialHealth = testPlayer.health;
			testPlayer.applyDamage(10);
			expect(testPlayer.health).toEqual(initialHealth - 10);
			testPlayer.applyDamage(25);
			expect(testPlayer.health).toEqual(initialHealth - 35);
		});
	});

	//GENERATE HIT//
	describe('Player.generateHit', function() {
		var testPlayer = battledome.createPlayer("", "Hovership");
		it('should exist', function() {
			expect(testPlayer.generateHit).toBeDefined();
		});
		it('return a value for damage within an expected range', function() {
			expect(testPlayer.generateHit()).not.toBeFalsy();
			expect(testPlayer.generateHit()).not.toBeLessThan(testPlayer.damage * 0.75);
			expect(testPlayer.generateHit()).not.toBeGreaterThan(testPlayer.damage * 1.1);
		});
	});
});

//*****INHERITANCE*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	//SETS UP STATIC INHERITANCE CHAINS//
	battledome.Drone.prototype = new battledome.Robot();
	battledome.Atv.prototype = new battledome.Robot();
	battledome.Bipedal.prototype = new battledome.Robot();
	battledome.Quadcopter.prototype = new battledome.Drone();
	battledome.Hovership.prototype = new battledome.Drone();
	battledome.GunMech.prototype = new battledome.Bipedal();
	battledome.LaserMech.prototype = new battledome.Bipedal();
	battledome.ArmorBuggy.prototype = new battledome.Atv();
	battledome.FlameTank.prototype = new battledome.Atv();

	//CONSTRUCTS PLAYER OBJECT GIVEN PLAYERNAME AND MODEL//
  battledome.createPlayer = (playerName, robotModel) => {
    battledome.Player.prototype = new battledome[robotModel]();
    return new battledome.Player(playerName);
  };

  return battledome;
})(battledome || {});

//*****INHERITANCE*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	battledome.Drone.prototype = new battledome.Robot();
	battledome.Atv.prototype = new battledome.Robot();
	battledome.Bipedal.prototype = new battledome.Robot();
	battledome.Quadcopter.prototype = new battledome.Drone();
	battledome.Hovership.prototype = new battledome.Drone();
	battledome.GunMech.prototype = new battledome.Atv();
	battledome.LaserMech.prototype = new battledome.Atv();
	battledome.ArmorBuggy.prototype = new battledome.Bipedal();
	battledome.FlameTank.prototype = new battledome.Bipedal();

  battledome.createPlayer = function (playerName, robotModel) {
    battledome.Player.prototype = new battledome[robotModel]();
    return new battledome.Player(playerName);
  };

  return battledome;
})(battledome || {});

//*****INHERITANCE*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){
	
  battledome.createPlayer = function (playerName, robotType, robotModel) {
    battledome[robotType].prototype = new battledome.Robot();
    battledome[robotModel].prototype = new battledome[robotType]();
    battledome.Player.prototype = new battledome[robotModel]();
    return new battledome.Player(playerName);
  };

  return battledome;
})(battledome || {});

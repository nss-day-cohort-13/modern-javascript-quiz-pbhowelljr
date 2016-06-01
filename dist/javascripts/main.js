//*****MAIN*****//
'use strict';
alert('main');

var battledome = (function(battledome){

    //COMBATANT CONSTRUCTOR FUNCTION
    battledome.Robot = function(){
      this.health = 100;
      this.damage = 10;
    };

    // FEDERATION (RACE 1) CONSTRUCTOR FUNCTION
    battledome.Drone = function(){
      this.type = 'Drone';

    };

    // KLINGON (RACE 2) CONSTRUCTOR FUNCTION
    battledome.Bipedal = function(){
      this.type = 'Bipedal';
    };

    // VULCAN (RACE 3) CONSTRUCTOR FUNCTION
    battledome.Atv = function(){
      this.type = 'Atv';
    };

    // ROMULAN (RACE 4) CONSTRUCTOR FUNCTION
    battledome.Quadcopter = function(){
      this.model = 'Quadcopter';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    // CRUISER (model 1) CONSTRUCTOR FUNCTION
    battledome.Hovership = function(){
      this.model = 'Hovership';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    // DESTROYER (model 2) CONSTRUCTOR FUNCTION
    battledome.LaserMech = function(){
      this.model = 'LaserMech';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //LASER (model 1) CONSTRUCTOR FUNCTION
    battledome.GunMech = function(){
    	this.model = 'GunMech';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //PHOTON TORPEDO (model 2) CONSTRUCTOR FUNCTION
    battledome.ArmorBuggy = function(){
    	this.model = 'ArmorBuggy';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //PULSE CANNON (model 3) CONSTRUCTOR FUNCTION
    battledome.FlameTank = function(){
    	this.model = 'FlameTank';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

  return battledome;
})(battledome || {});


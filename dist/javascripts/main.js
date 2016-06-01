//*****MAIN*****//
'use strict';
alert('main');

var battledome = (function(battledome){

    //ROBOT
    battledome.Robot = function(){
      this.health = 100;
      this.damage = 10;
    };

    //DRONE
    battledome.Drone = function(){
      this.type = 'Drone';

    };

    //BIPEDAL
    battledome.Bipedal = function(){
      this.type = 'Bipedal';
    };

    //ATV
    battledome.Atv = function(){
      this.type = 'Atv';
    };

    //QUADCOPTER
    battledome.Quadcopter = function(){
      this.model = 'Quadcopter';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //HOVERSHIP
    battledome.Hovership = function(){
      this.model = 'Hovership';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //LASER MECH
    battledome.LaserMech = function(){
      this.model = 'LaserMech';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //GUN MECH
    battledome.GunMech = function(){
    	this.model = 'GunMech';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //ARMOR BUGGY
    battledome.ArmorBuggy = function(){
    	this.model = 'ArmorBuggy';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

    //FLAME TANK
    battledome.FlameTank = function(){
    	this.model = 'FlameTank';
      this.modelHealthModifier = 1;
      this.modelDamageModifier = 1;
    };

  return battledome;
})(battledome || {});


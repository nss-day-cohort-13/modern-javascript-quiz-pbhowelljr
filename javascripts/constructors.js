//*****CONSTRUCTORS*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

    //ROBOT
    battledome.Robot = function(){
      this.health = 100;
      this.damage = 10;
      this.applyModifiers = function() {
        this.health *= this.modelHealthModifier * battledome.randomMultiplier(0.9, 1.1);
        this.damage *= this.modelDamageModifier * battledome.randomMultiplier(0.9, 1.1);
      };
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
      this.modelHealthModifier = 0.7;
      this.modelDamageModifier = 1.3;
    };

    //HOVERSHIP
    battledome.Hovership = function(){
      this.model = 'Hovership';
      this.modelHealthModifier = 0.8;
      this.modelDamageModifier = 1.2;
    };

    //LASER MECH
    battledome.LaserMech = function(){
      this.model = 'LaserMech';
      this.modelHealthModifier = 0.9;
      this.modelDamageModifier = 1.1;
    };

    //GUN MECH
    battledome.GunMech = function(){
    	this.model = 'GunMech';
      this.modelHealthModifier = 1.1;
      this.modelDamageModifier = 0.9;
    };

    //ARMOR BUGGY
    battledome.ArmorBuggy = function(){
    	this.model = 'ArmorBuggy';
      this.modelHealthModifier = 1.2;
      this.modelDamageModifier = 0.8;
    };

    //FLAME TANK
    battledome.FlameTank = function(){
    	this.model = 'FlameTank';
      this.modelHealthModifier = 1.3;
      this.modelDamageModifier = 0.7;
    };

    //PLAYER
    battledome.Player = function(name) {
      this.name = name;
      this.applyDamage = function(damage){
        this.health -= damage;
      };
      this.generateHit = function(){
        return this.damage * battledome.randomMultiplier(0.75, 1.1);
      };
    };

  return battledome;
})(battledome || {});

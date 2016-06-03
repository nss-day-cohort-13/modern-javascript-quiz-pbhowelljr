//*****DOM*****//
/*global battledome: true */ 
'use strict';

var battledome = (function(battledome){

	const playersCreateButtonCallback = function() {
		var aName = $('.nameInput')[0].value;
		var bName = $('.nameInput')[1].value;
		var aModel = $('.playerModel')[0].value;
		var bModel = $('.playerModel')[1].value;
		var a = battledome.createPlayer(aName, aModel);
		var b = battledome.createPlayer(bName, bModel);
		battledome.combat(a,b);
	};

	$('#playersCreateButton').click(playersCreateButtonCallback);

  return battledome;
})(battledome || {});

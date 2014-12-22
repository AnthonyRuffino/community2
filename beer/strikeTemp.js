/* jshint node:true *//* global define, escape, unescape */
'use strict';



var StrikeTemp = {};


StrikeTemp.calc = function(quartsWater, lbsGrain, t1, t2) {
    /*
	Strike Water Temperature Tw = (.2/r)(T2 - T1) + T2

	where:
	r = The ratio of water to grain in quarts per pound.
	T1 = The initial temperature (¡F) of the mash.
	T2 = The target temperature (¡F) of the mash.
	Tw = The actual temperature (¡F) of the infusion water. 
*/
    var response = null;

	if(quartsWater === undefined || quartsWater <= 0){
	    response = { responseCode: 404, Message: "The 'quarts' parameter was not set silly!" }
	}else if(lbsGrain === undefined || lbsGrain <= 0){
        response = { responseCode: 404, Message: "The 'lbs' parameter was not set silly!" }
    }else if(t1 === undefined || t1 <= 32){
	    response = { responseCode: 404, Message: "The 't1' parameter was not set silly!" }
    }else if(t2 === undefined || t2 <= 32){
	    response = { responseCode: 404, Message: "The 't2' parameter was not set silly!" }
    }else{
        quartsWater = parseFloat(quartsWater);
        lbsGrain = parseFloat(lbsGrain);
        t1 = parseFloat(t1);
        t2 = parseFloat(t2);	

    	var temp = (((0.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2);
    
    	response = { responseCode: 200, Message: "All good!", strikeTemp: temp, quartsWater: quartsWater, lbsGrain: lbsGrain, t2: t2, t1: t1, formula: "strikeTemp = (((.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2)" }
    }

	
	return response;
};




try {
    exports.calc = StrikeTemp.calc;
}
catch(err) {
    
}
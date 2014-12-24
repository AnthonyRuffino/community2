/* jshint node:true *//* global define, escape, unescape */
'use strict';

var Monty = {};


var rand = function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


var playMontyGame = function(doorNumber,doSwitch)
{

    var doors = {};
    
    var door1 = {isWinner:false};
    var door2 = {isWinner:false};
    var door3 = {isWinner:false};
    
    doors["door1"] = door1;
    doors["door2"] = door2;
    doors["door3"] = door3;
    
    var winningNumber = rand(1,3);
    
    doors["door" + winningNumber].isWinner = true;
    
    var chosenDoor = doors["door" + doorNumber];
    
    
    if(doSwitch !== undefined && doSwitch != null && doSwitch === true){
        
        var montys1stDoorNumber = 0;
        var montys2ndDoorNumber = 0;
        
        if(doorNumber === 1){
            montys1stDoorNumber = 2;
            montys2ndDoorNumber = 3;
        }else if(doorNumber === 2){
            montys1stDoorNumber = 1;
            montys2ndDoorNumber = 3;
        }
        else if(doorNumber === 3){
            montys1stDoorNumber = 1;
            montys2ndDoorNumber = 2;
        }
        
        if(doors["door" + montys1stDoorNumber].isWinner === false){
            chosenDoor = doors["door" + montys2ndDoorNumber];
        }else{
            chosenDoor = doors["door" + montys1stDoorNumber];
        }
        
    }
    
    var results = { isWinner: chosenDoor.isWinner, winningNumber: winningNumber }
    
    return results;
}

Monty.getMontyStats = function(players, games) {
    var results = {};
    
    results.switchGamesPlayed = 0;
    results.stayGamesPlayed = 0;
    
    results.switchGamesWon = 0;
    results.stayGamesWon = 0;
    
    var i = 0;
    var j = 0;
    
    for (i = 0; i < players; i++) {
        for (j = 0; j < games; j++) {
            
            var doorNumberGuess = rand(1,3);
            var switchResult = playMontyGame(doorNumberGuess, true);
            
            doorNumberGuess = rand(1,3);
            var stayResult = playMontyGame(doorNumberGuess, false);

            results.switchGamesPlayed = results.switchGamesPlayed + 1;
            results.stayGamesPlayed = results.stayGamesPlayed + 1;
            
            
            if(switchResult.isWinner === true){
                results.switchGamesWon = results.switchGamesWon + 1;
            }
            
            if(stayResult.isWinner === true){
                results.stayGamesWon = results.stayGamesWon + 1;
            }
            

        }
    }
    
    return results;
    
}






try {
    exports.getMontyStats = Monty.getMontyStats;
    exports.playMontyGame = Monty.playMontyGame;
}
catch(err) {
    
}
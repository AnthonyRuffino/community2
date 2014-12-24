/* jshint node:true *//* global define, escape, unescape */
'use strict';


var H3Auth = {};

var users = {};
    
var spaarks = {};
spaarks.salt = "0739cb06-cd9e-b692-4725-42f2d29eced7";
spaarks.h1 = "a0b90a3d64c55b75f98e08617f5302a37029cfee9c2ed4ab86e09b240ffcad33";
users["spaarks"] = spaarks;


H3Auth.getUser = function(userName) {
    return users[userName];
};


H3Auth.getUserSalts = function(hasher, ip, userName, returnH1, systemSalt) {
      
    if(userName !== undefined && userName != null && userName !== '' && userName.length > 0){
        var user = H3Auth.getUser(userName);
        var salts = {};
        
        
        if(user !== undefined && user != null){
            
        }else{
            if(!(systemSalt !== undefined && systemSalt != null)){
                systemSalt = "n/a";
            }
            user = {};
            user.salt = hasher.hash(userName + ":" + systemSalt);
        }
        
    
        var hs = hasher.hash(userName + ":" + user.salt);
    
        var clientIp = ip;
        
        var hip = hasher.hash(hs + ":" + clientIp);
        
        salts.userName = userName;
        salts.hs = hs;
        salts.hip = hip;
        salts.date = new Date();
        
        if(returnH1 !== undefined && returnH1 != null && returnH1 === true){
            salts.h1 = user.h1;
        }
    
        
        return salts;
    
    }else{
        return {errorMessage:"No userName passed!"};
    }
    

};


H3Auth.doBadAuth = function(hasher, ip, userName, h3In, date, authMaxTimeDifferenceInMiliSeconds) {
    
    var salts = H3Auth.getUserSalts(hasher, ip, userName, true);
    
    var h1 = salts.h1;
    
    var hip = salts.hip;
    
    var isValid = false;
    
    var auth = {};
    
    if(date !== undefined && date != null){
        if(h3In !== undefined && h3In != null){
            if(userName !== undefined && userName != null){
                
                //check time
                var now = new Date();
                var timeDiffMiliSeconds = Math.abs(now.getTime() - new Date(date).getTime());
                
                if(timeDiffMiliSeconds < authMaxTimeDifferenceInMiliSeconds){
                    
                    if(h1 !== undefined && h1 != null){
                        var h2 = hasher.hash(date + ":" + h1);
                        var h3 = hasher.hash(h2 + ":" + hip);
                        
                        if(h3 === h3In){
                            isValid = true;
                        }
                        else{
                            auth.error = "unknown user or password";
                        }
                    }else{
                        auth.error = "unknown user or password";
                    }
                }else{
                    auth.error = "time is up!";
                }
                
            }else{
                auth.error = "userName was not set!";
            }
        }else{
            auth.error = "h3 was not set!";
        }
    }else{
        auth.error = "date was not set!";
    }
    
    auth.isValid = isValid;
    
	return auth;
}








try {
    exports.getUser = H3Auth.getUser;
    exports.getUserSalts = H3Auth.getUserSalts;
    exports.ingest = H3Auth.doBadAuth;
}
catch(err) {
    
}
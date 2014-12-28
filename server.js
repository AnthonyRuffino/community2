//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var publicdir = __dirname + '/client';

var removeTrailingHtml = true;

var path = null;

if(removeTrailingHtml === false){
    path = require('path');
}



var fs        = require('fs');
var http = require('http');

var https = null;
var useHttps = false;

if(useHttps === true){
    https = require('https');
}






var async = require('async');
var socketio = require('socket.io');
var express = require('express');
//var bcrypt = require('bcrypt');
//var keyDel = require('key-del');

var guid = require('./utils/guid.js');
var strikeTemp = require('./beer/strikeTemp.js');
//var sha256 = require('./client/js/hashing/sha256/sha256.js');

//var chatSocketIOc9 = require('./client/app/chat.js');
var bcryptPlusClientShaChat = require('./client/app/bcryptPlusClientShaChat.js');

var socketIO_OnConnectionProvider = bcryptPlusClientShaChat;

var database = {};

var socketIOConnectionData = {};
socketIOConnectionData.async = async;
socketIOConnectionData.guidFactory = guid;
//socketIOConnectionData.keyDel = keyDel;

socketIO_OnConnectionProvider.init(socketIOConnectionData);

var monty = require('./monty/monty.js');


//var getIp = require('ipware')().get_ip;
var getIp = function getIp(req){
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
     var clientIp = {clientIp:ip};
     
     return clientIp;
};




//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
router.use(express.bodyParser());

var server = null;
var secureServer = null;


var secureServerErr = null;


if(useHttps === true && https != null){
   try{
    
    var ssl = {
        key: fs.readFileSync('./ssl/domain-key.pem', 'utf8'),
        cert: fs.readFileSync('./ssl/domain-crt.pem', 'utf8')
    };
    
    if (fs.existsSync("./ssl/bundle.crt")) {
        
        var ca, cert, chain, line, _i, _len;

        ca = [];
    
        chain = fs.readFileSync("./ssl/bundle.crt", 'utf8');
    
        chain = chain.split("\n");
    
        cert = [];
    
        for (_i = 0, _len = chain.length; _i < _len; _i++) {
          line = chain[_i];
            if (!(line.length !== 0)) {
                continue;
            }
            
            cert.push(line);
            
            if (line.match(/-END CERTIFICATE-/)) {
              ca.push(cert.join("\n"));
              cert = [];
            }
        }
    
        ssl.ca = ca;
    }

    secureServer = https.createServer(ssl, router);

    }catch(err){
        secureServerErr = "Err1: " + err;
        console.log('Error creating https server: ' + err);
    } 
}


//////////////////////////
//BEGIN SOCKET IO SETUP///
//////////////////////////
if(useHttps === true && secureServer != null){
    socketio.listen(secureServer).on('connection', socketIO_OnConnectionProvider.onConnection);
}
else{
    if(server === undefined || server === null){
        server = http.createServer(router);
    }
    socketio.listen(server).on('connection', socketIO_OnConnectionProvider.onConnection);
}
//////////////////////////
//END SOCKET IO SETUP///
//////////////////////////



//////////////////////////
//BEGIN MIDDLEWARE///
//////////////////////////
//This allows for navigation to html pages without the .html extension
if(removeTrailingHtml === true || (path === undefined || path === null)){
    router.use(function(req, res, next) {
        if (req.path.indexOf('.') === -1) {
            var file = publicdir + req.path + '.html';
            fs.exists(file, function(exists) {
              if (exists)
                req.url += '.html';
              next();
            });
        }
        else{
           next(); 
        }
    });
    router.use(express.static(publicdir));
}else{
    router.use(express.static(path.resolve(__dirname, 'client')));
}
//////////////////////////
//END MIDDLEWARE///
//////////////////////////



router.get('/api/getUserSalts', function(req, res) {
    var inputData = {};
    inputData.userName = req.query.userName;
    inputData.isClientCall = true;
    res.json(200, socketIO_OnConnectionProvider.getUserSalts(inputData));
});

router.post('/api/auth', function(req, res) {

    var newGuid = guid.generate(true);
    
    var authData = JSON.parse(req.body.bodyvalue);
    
    var auth = socketIO_OnConnectionProvider.authorize(authData.userName, authData.h3);
    res.json(200, auth);
    
    res.json(200, auth);
    
});

router.get('/api/montyStats', function(req, res) {
    res.json(200, monty.getMontyStats(req.query.players, req.query.games));
});


router.get('/api/playMontyGame', function(req, res) {
    res.json(200, monty.playMontyGame(req.query.doorNumber,req.query.doSwitch));
});

router.get('/api/secureServerErr', function(req, res) {
    res.json(200, {secureServerErr:secureServerErr});
});

router.get('/api/guid', function(req, res) {
    res.json(200, {guid:guid.generate(req.query.useDashes)});
});

router.get('/api/beer/striketemp', function(req, res) {
    res.json(200, strikeTemp.calc(req.query.quarts, req.query.lbs, req.query.t1, req.query.t2));
});

router.get('/api/beer', function(req, res) {
    res.json(200, { Message: 'Drink Beer' });
});

router.get('/api/data', function(req, res) {
    var key = req.query.key;
    var id = req.query.id;
    
    
    if(database[key] === undefined){
        res.json(404, { Message: "No datasource named [" + key + "] was found.  Start it now!"});    
    }
    else{
        if(id === undefined){
            res.json(200, database[key]);
        }
        else{
            var item = database[key][id];
            
            if(item !== undefined){
                res.json(200, item);
            }
            else{
                res.json(404, { Message: "No item with id ["+id+"] found in datasource with key [" + key + "]."});
            }
        }
    }
});

router.post('/api/data', function(req, res) {
    var key = req.query.key;
    if(database[key] === undefined){
        database[key] = {};
    }
    var newGuid = guid.generate(true);
    
    database[key][newGuid] = JSON.parse(req.body.bodyvalue);
    
    res.json(200, { id: newGuid });
    
});

router.delete('/api/data', function(req, res) {
    var key = req.query.key;
    var id = req.query.id;
    
    if(key === undefined){
        res.json(404, { Message: "No key parameter was specified."});
    }
    else if(id === undefined){
        res.json(404, { Message: "No id parameter was specified."});
    }
    else{
    
        if(database[key] === undefined){
            res.json(404, { Message: "No datasource named [" + key + "] was found.  Start it now."});    
        }
        else{
            
            if(database[key][id] !== undefined){
                delete database[key][id];
                res.json(200, { deleted: true });
            }
            else{
                res.json(404, { Message: "No item with id ["+id+"] found in datasource with key [" + key + "]."});
            }
        }
    }
});








if(secureServer != null){
    
    
    try{
        secureServer.listen(443);
    }
    catch(err2){
       secureServerErr = "Err: " + err2;
    }
    
    try{
        // Secondary http app
        var httpApp = express();

        var httpRouter = express.Router();
        
        httpApp.use('*', httpRouter);
        
        httpRouter.get('*', function(req, res){
            var host = req.get('Host');
            // replace the port in the host
            host = host.replace(/:\d+$/, ":"+secureServer.get('port'));
            // determine the redirect destination
            var destination = ['https://', host, req.url].join('');
            return res.redirect(destination);
        });
        
        var httpServer = http.createServer(httpApp);
        
        httpServer.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
            var addr = httpServer.address();
            console.log("Http to Https redirect listening at", addr.address + ":" + addr.port);
        });
    }
    catch(err2){
       //TODO
    }
}else{
    
    if(server === undefined || server === null){
        server = http.createServer(router);
    }
    
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
        var addr = server.address();
        console.log("Chat server listening at", addr.address + ":" + addr.port);
    });
}









//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');


var strikeTemp = require('./beer/strikeTemp.js');

var sha256 = require('./client/js/hashing/sha256/sha256.js');

var passTheHashAuth = require('./auth/h3Auth.js');
var monty = require('./monty/monty.js');

var mysteryUserSalts = {};
var userMysteryUserSalts = false;

var authMaxTimeDifferenceInMiliSeconds = 1000;

var systemSalt = "RANDOMIZE_THIS_VALUE_ON_PRODUCTION_SERVERS";

//var getIp = require('ipware')().get_ip;
var getIp = function getIp(req){
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
     var clientIp = {clientIp:ip};
     
     return clientIp;
}




//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
router.use(express.bodyParser());
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];



var database = {};
var crawlerDatabase = {};




var guid = require('./utils/guid.js');

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


io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});









router.get('/api/getUserSalts', function(req, res) {
    res.json(200, passTheHashAuth.getUserSalts(sha256, getIp(req).clientIp, req.query.userName, false, systemSalt));
});


router.get('/api/auth', function(req, res) {
    
    
    var auth = null;
    
    var youGotYourShitTogether = false;
    
    if(youGotYourShitTogether){
        //TODO Implement auth that expects a plain text password here
        auth = {};
    }
    else{
        var somethingThatShouldntPassForAuth = passTheHashAuth.ingest(sha256, getIp(req).clientIp, req.query.userName, req.query.h3, req.query.date, authMaxTimeDifferenceInMiliSeconds);
        auth = somethingThatShouldntPassForAuth;
    }
    
	res.json(200, auth);
});




router.get('/api/montyStats', function(req, res) {
    res.json(200, monty.getMontyStats(req.query.players, req.query.games));
});


router.get('/api/playMontyGame', function(req, res) {
	res.json(200, monty.playMontyGame(req.query.doorNumber,req.query.doSwitch));
});
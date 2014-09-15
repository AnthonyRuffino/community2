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

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];



var database = {};

router.use(express.bodyParser());

router.get('/api/beer/striketemp', function(req, res) {
/*
	Strike Water Temperature Tw = (.2/r)(T2 - T1) + T2

	where:
	r = The ratio of water to grain in quarts per pound.
	T1 = The initial temperature (¡F) of the mash.
	T2 = The target temperature (¡F) of the mash.
	Tw = The actual temperature (¡F) of the infusion water. 
*/

	var quartsWater = req.query.quarts;
	var lbsGrain = req.query.lbs;
	var t1 = req.query.t1;
	var t2 = req.query.t2;

	if(quartsWater === null || quartsWater <= 0){
		res.json(404, { Message: "The 'quarts' parameter was not set!"});	
	}

	if(lbsGrain === null || lbsGrain <= 0){
                res.json(404, { Message: "The 'lbs' parameter was not set!"});
        }

	if(t1 === null || t1 <= 32){
                res.json(404, { Message: "The 't1' parameter was not set!"});
        }

	if(t2 === null || t2 <= 32){
                res.json(404, { Message: "The 't2' parameter was not set!"});
        }

	quartsWater = parseFloat(req.query.quarts);
        lbsGrain = parseFloat(req.query.lbs);
        t1 = parseFloat(req.query.t1);
        t2 = parseFloat(req.query.t2);	

	var temp = (((0.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2);

	res.json(200, { Message: "All good!", strikeTemp: temp, quartsWater: quartsWater, lbsGrain: lbsGrain, t2: t2, t1: t1, formula: "strikeTemp = (((.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2)" });

//	res.json(200, { Message: "All good!" });

});

router.get('/api/beer', function(req, res) {
	res.json(200, { Message: 'Drink Beer' });
});

router.get('/api/data', function(req, res) {
    var key = req.query.key;
    var id = req.query.id;
    
    
    if(database[key] === null){
        res.json(404, { Message: "No datasource named [" + key + "] was found.  Start it now!"});	
    }
    else{
        if(id === null){
            res.json(200, database[key]);
        }
        else{
            var item = database[key][id];
            
            if(item !== null){
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
    if(database[key] === null){
        database[key] = {};
    }
    var newGuid = guid();
    
    database[key][newGuid] = JSON.parse(req.body.bodyvalue);
    
    res.json(200, { id: newGuid });
	
});


router.delete('/api/data', function(req, res) {
    var key = req.query.key;
    var id = req.query.id;
    
    if(key === null){
        res.json(404, { Message: "No key parameter was specified."});
    }
    else if(id === null){
        res.json(404, { Message: "No id parameter was specified."});
    }
    else{
    
        if(database[key] === null){
            res.json(404, { Message: "No datasource named [" + key + "] was found.  Start it now."});	
        }
        else{
            
            if(database[key][id] !== null){
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



var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"//\n// # SimpleServer\n//\n// A simple chat server using Socket.IO, Express, and Async.\n//\nvar publicdir = __dirname + '/client';\n\nvar removeTrailingHtml = true;\n\nvar path = null;\n\nif(removeTrailingHtml === false){\n    path = require('path');\n}\n\n\n\nvar fs = require('fs');\nvar http = require('http');\nvar mkpath = require('mkpath');\nvar moment = require('moment');\n\nvar https = null;\nvar useHttpsTemp = process.env.useHttps || null;\nvar useHttps = false;\n\nif(useHttpsTemp !== undefined && useHttpsTemp!= null && (useHttpsTemp === true || useHttpsTemp.toLowerCase() =='true')){\n    console.log('useHttps was set to true.');\n    useHttps = true;\n    https = require('https');\n}else{\n    console.log('useHttps was not set to true.');\n}\n\n\n\nvar async = require('async');\nvar socketio = require('socket.io');\nvar express = require('express');\n//var bcrypt = require('bcrypt');\n//var keyDel = require('key-del');\n\nvar guid = require('./utils/guid.js');\nvar strikeTemp = require('./beer/strikeTemp.js');\n\nvar mapplied = require('./utils/mapplied.js');\nvar sha256 = require('./client/js/hashing/sha256/sha256.js');\n\nmapplied.init(sha256, guid);\n\n//var chatSocketIOc9 = require('./client/app/chat.js');\nvar socketHub = require('./client/app/socketHub.js');\nvar callLogger = require('./client/app/callLogger.js');\nvar chatter = require('./client/app/chatter.js');\nvar socketIO_OnConnectionProvider = socketHub;\n\nvar socketIOconnectionData = {};\nsocketIOconnectionData.async = async;\nsocketIOconnectionData.guid = guid;\nsocketIOconnectionData.fs = fs;\nsocketIOconnectionData.dirname = __dirname + \"/logs/mathers\";\nsocketIOconnectionData.mkpath = mkpath;\nsocketIOconnectionData.path = require('path');\nsocketIOconnectionData.moment = moment;\nsocketIOconnectionData.children = [];\nsocketIOconnectionData.children.push(callLogger);\nsocketIOconnectionData.children.push(chatter);\n\nsocketIO_OnConnectionProvider.init(socketIOconnectionData);\n\n\nvar database = {};\n\n\nvar monty = require('./monty/monty.js');\n\n\n//var getIp = require('ipware')().get_ip;\nvar getIp = function getIp(req){\n    var ip = req.headers['x-forwarded-for'] || \n     req.connection.remoteAddress || \n     req.socket.remoteAddress ||\n     req.connection.socket.remoteAddress;\n     \n     var clientIp = {clientIp:ip};\n     \n     return clientIp;\n};\n\n\n\n\n//\n// ## SimpleServer `SimpleServer(obj)`\n//\n// Creates a new instance of SimpleServer with the following options:\n//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.\n//\nvar router = express();\nrouter.use(express.bodyParser());\n\nvar server = null;\nvar secureServer = null;\n\n\nvar secureServerErr = null;\n\n\nif(useHttps === true && https != null){\n   try{\n       \n       var sslKeyFile = process.env.sslKeyFile || './ssl/domain-key.pem';\n       console.log('sslKeyFile: ' + sslKeyFile);\n       \n       var sslDomainCertFile = process.env.sslDomainCertFile || './ssl/domain.org.crt';\n       console.log('sslDomainCertFile: ' + sslDomainCertFile);\n       \n       var sslCaBundleFile = process.env.ssCaBundleFile || './ssl/bundle.crt';\n       console.log('sslCaBundleFile: ' + sslCaBundleFile);\n       \n       var certFileEncoding = 'utf8';\n       \n       if (fs.existsSync(sslKeyFile) === false) {\n           console.log('sslKeyFile  was not found!');\n       }else if (fs.existsSync(sslDomainCertFile) === false) {\n           console.log('sslDomainCertFile  was not found!');\n       }\n       else{\n           var ssl = {\n                key: fs.readFileSync(sslKeyFile, certFileEncoding),\n                cert: fs.readFileSync(sslDomainCertFile, certFileEncoding)\n            };\n            \n            if (fs.existsSync(sslCaBundleFile)) {\n                console.log('sslCaBundleFile found.');\n                \n                var ca, cert, chain, line, _i, _len;\n            \n                ca = [];\n            \n                chain = fs.readFileSync(sslCaBundleFile, certFileEncoding);\n            \n                chain = chain.split(\"\\n\");\n            \n                cert = [];\n            \n                for (_i = 0, _len = chain.length; _i < _len; _i++) {\n                  line = chain[_i];\n                    if (!(line.length !== 0)) {\n                        continue;\n                    }\n                    \n                    cert.push(line);\n                    \n                    if (line.match(/-END CERTIFICATE-/)) {\n                      ca.push(cert.join(\"\\n\"));\n                      cert = [];\n                    }\n                }\n            \n                ssl.ca = ca;\n            }\n            \n            secureServer = https.createServer(ssl, router);\n            console.log('secureServer created');\n       }\n       \n\n    }catch(err){\n        secureServerErr = \"Err1: \" + err;\n        console.log('Error creating https server: ' + err);\n    } \n}\n\n\n//////////////////////////\n//BEGIN SOCKET IO SETUP///\n//////////////////////////\nif(useHttps === true && secureServer != null){\n    socketio.listen(secureServer).on('connection', socketIO_OnConnectionProvider.onConnection);\n}\nelse{\n    if(server === undefined || server === null){\n        server = http.createServer(router);\n    }\n    socketio.listen(server).on('connection', socketIO_OnConnectionProvider.onConnection);\n}\n//////////////////////////\n//END SOCKET IO SETUP///\n//////////////////////////\n\n\n\n//////////////////////////\n//BEGIN MIDDLEWARE///\n//////////////////////////\n//This allows for navigation to html pages without the .html extension\nif(removeTrailingHtml === true || (path === undefined || path === null)){\n    router.use(function(req, res, next) {\n        if (req.path.indexOf('.') === -1) {\n            var file = publicdir + req.path + '.html';\n            fs.exists(file, function(exists) {\n              if (exists)\n                req.url += '.html';\n              next();\n            });\n        }\n        else{\n           next(); \n        }\n    });\n    router.use(express.static(publicdir));\n}else{\n    router.use(express.static(path.resolve(__dirname, 'client')));\n}\n//////////////////////////\n//END MIDDLEWARE///\n//////////////////////////\n\n\n\n\n////////////////////////////\n//BEGIN CONTROLLER ROUTES///\n////////////////////////////\nrouter.get('/api/secret', function(req, res) {\n    var secret = process.env.SECRET;\n    var secret2 = process.env.SECRET2;\n    res.json(200, {secret:secret,secret2:secret2});\n});\n\n\nrouter.get('/api/montyStats', function(req, res) {\n    res.json(200, monty.getMontyStats(req.query.players, req.query.games));\n});\n\n\nrouter.get('/api/playMontyGame', function(req, res) {\n    res.json(200, monty.playMontyGame(req.query.doorNumber,req.query.doSwitch));\n});\n\nrouter.get('/api/secureServerErr', function(req, res) {\n    res.json(200, {secureServerErr:secureServerErr, useHttps:useHttps});\n});\n\nrouter.get('/api/guid', function(req, res) {\n    res.json(200, {guid:guid.generate(req.query.useDashes)});\n});\n\nrouter.get('/api/beer/striketemp', function(req, res) {\n    res.json(200, strikeTemp.calc(req.query.quarts, req.query.lbs, req.query.t1, req.query.t2));\n});\n\nrouter.get('/api/beer', function(req, res) {\n    res.json(200, { Message: 'Drink Beer' });\n});\n\nrouter.get('/api/data', function(req, res) {\n    var key = req.query.key;\n    var id = req.query.id;\n    \n    \n    if(database[key] === undefined){\n        res.json(404, { Message: \"No datasource named [\" + key + \"] was found.  Start it now!\"});    \n    }\n    else{\n        if(id === undefined){\n            res.json(200, database[key]);\n        }\n        else{\n            var item = database[key][id];\n            \n            if(item !== undefined){\n                res.json(200, item);\n            }\n            else{\n                res.json(404, { Message: \"No item with id [\"+id+\"] found in datasource with key [\" + key + \"].\"});\n            }\n        }\n    }\n});\n\nrouter.post('/api/data', function(req, res) {\n    var key = req.query.key;\n    if(database[key] === undefined){\n        database[key] = {};\n    }\n    var newGuid = guid.generate(true);\n    \n    database[key][newGuid] = JSON.parse(req.body.bodyvalue);\n    \n    res.json(200, { id: newGuid });\n    \n});\n\nrouter.delete('/api/data', function(req, res) {\n    var key = req.query.key;\n    var id = req.query.id;\n    \n    if(key === undefined){\n        res.json(404, { Message: \"No key parameter was specified.\"});\n    }\n    else if(id === undefined){\n        res.json(404, { Message: \"No id parameter was specified.\"});\n    }\n    else{\n    \n        if(database[key] === undefined){\n            res.json(404, { Message: \"No datasource named [\" + key + \"] was found.  Start it now.\"});    \n        }\n        else{\n            \n            if(database[key][id] !== undefined){\n                delete database[key][id];\n                res.json(200, { deleted: true });\n            }\n            else{\n                res.json(404, { Message: \"No item with id [\"+id+\"] found in datasource with key [\" + key + \"].\"});\n            }\n        }\n    }\n});\n\n\n\n\n\n/////////////\n//Universe\n/////////////\nrouter.get('/mapplied/getUniverse', function(req, res) {\n    res.json(200, mapplied.getUniverse());\n});\n\nrouter.get('/mapplied/getQuadrant', function(req, res) {\n    res.json(200, mapplied.getQuadrant(req.query));\n});\n\nrouter.get('/mapplied/setHorizontalLinearMultiplier', function(req, res) {\n    res.json(200, mapplied.setHorizontalLinearMultiplier(req.query.val));\n});\n\n\n\n\n\n\n\n\n\n//////////////////////////\n//END CONTROLLER ROUTES///\n//////////////////////////\n\n\n\n//////////////////////////\n//START UP SERVER(S)//////\n//////////////////////////\n\n//HTTPS\nif(secureServer != null){\n    try{\n        secureServer.listen(process.env.SECURE_PORT || 443, process.env.SECURE_IP || \"0.0.0.0\", function(){\n            var addr = secureServer.address();\n            console.log(\"Secure server listening at\", addr.address + \":\" + addr.port);\n        });\n    }\n    catch(err2){\n        console.log(\"Err: \" + err2);\n        secureServerErr = \"Err: \" + err2;\n    }\n}\n\n\nif(server === undefined || server === null){\n    server = http.createServer(router);\n}\n\n//HTTP\nserver.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){\n    var addr = server.address();\n    console.log(\"HTTP server listening at\", addr.address + \":\" + addr.port);\n});","undoManager":{"mark":-2,"position":17,"stack":[[{"start":{"row":19,"column":31},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":31},"action":"insert","lines":["var mkpath = require('mkpath');"],"id":3}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":10},"action":"remove","lines":["mkpath"],"id":4},{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["m"]}],[{"start":{"row":20,"column":5},"end":{"row":20,"column":6},"action":"insert","lines":["o"],"id":5}],[{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["m"],"id":6}],[{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"insert","lines":["e"],"id":7}],[{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["n"],"id":8}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["t"],"id":9}],[{"start":{"row":20,"column":22},"end":{"row":20,"column":28},"action":"remove","lines":["mkpath"],"id":10},{"start":{"row":20,"column":22},"end":{"row":20,"column":28},"action":"insert","lines":["moment"]}],[{"start":{"row":62,"column":46},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":63,"column":0},"end":{"row":63,"column":1},"action":"insert","lines":["."],"id":12}],[{"start":{"row":63,"column":1},"end":{"row":63,"column":7},"action":"insert","lines":["moment"],"id":13}],[{"start":{"row":63,"column":7},"end":{"row":63,"column":8},"action":"insert","lines":[" "],"id":14}],[{"start":{"row":63,"column":8},"end":{"row":63,"column":9},"action":"insert","lines":["="],"id":15}],[{"start":{"row":63,"column":9},"end":{"row":63,"column":10},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":63,"column":10},"end":{"row":63,"column":16},"action":"insert","lines":["moment"],"id":17}],[{"start":{"row":63,"column":16},"end":{"row":63,"column":17},"action":"insert","lines":[";"],"id":18}],[{"start":{"row":63,"column":0},"end":{"row":63,"column":22},"action":"insert","lines":["socketIOconnectionData"],"id":19}]]},"ace":{"folds":[],"scrolltop":660,"scrollleft":0,"selection":{"start":{"row":63,"column":22},"end":{"row":63,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":54,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1459306970904}
{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"//\n// # SimpleServer\n//\n// A simple chat server using Socket.IO, Express, and Async.\n//\nvar publicdir = __dirname + '/client';\n\nvar removeTrailingHtml = true;\n\nvar path = null;\n\nif(removeTrailingHtml === false){\n    path = require('path');\n}\n\n\n\nvar fs        = require('fs');\nvar http = require('http');\n\nvar https = null;\nvar useHttpsTemp = process.env.useHttps || null;\nvar useHttps = false;\n\nif(useHttpsTemp !== undefined && useHttpsTemp!= null && (useHttpsTemp === true || useHttpsTemp.toLowerCase() =='true')){\n    console.log('useHttps was set to true.');\n    useHttps = true;\n    https = require('https');\n}else{\n    console.log('useHttps was not set to true.');\n}\n\n\n\nvar async = require('async');\nvar socketio = require('socket.io');\nvar express = require('express');\n//var bcrypt = require('bcrypt');\n//var keyDel = require('key-del');\n\nvar guid = require('./utils/guid.js');\nvar strikeTemp = require('./beer/strikeTemp.js');\n\nvar mapplied = require('./utils/mapplied.js');\nvar sha256 = require('./client/js/hashing/sha256/sha256.js');\n\nmapplied.init(sha256, guid);\n\n//var chatSocketIOc9 = require('./client/app/chat.js');\nvar socketHub = require('./client/app/socketHub.js');\nvar callLogger = require('./client/app/callLogger.js');\n//var chatter = require('./client/app/chatter.js');\nvar socketIO_OnConnectionProvider = socketHub;\n\nvar socketIOconnectionData = {};\nsocketIOconnectionData.async = async;\nsocketIOconnectionData.children = [];\nsocketIOconnectionData.children.push(callLogger);\n//socketIOconnectionData.children.push(chatter);\n\nsocketIO_OnConnectionProvider.init(socketIOconnectionData);\n\n\nvar database = {};\n\n\nvar monty = require('./monty/monty.js');\n\n\n//var getIp = require('ipware')().get_ip;\nvar getIp = function getIp(req){\n    var ip = req.headers['x-forwarded-for'] || \n     req.connection.remoteAddress || \n     req.socket.remoteAddress ||\n     req.connection.socket.remoteAddress;\n     \n     var clientIp = {clientIp:ip};\n     \n     return clientIp;\n};\n\n\n\n\n//\n// ## SimpleServer `SimpleServer(obj)`\n//\n// Creates a new instance of SimpleServer with the following options:\n//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.\n//\nvar router = express();\nrouter.use(express.bodyParser());\n\nvar server = null;\nvar secureServer = null;\n\n\nvar secureServerErr = null;\n\n\nif(useHttps === true && https != null){\n   try{\n       \n       var sslKeyFile = process.env.sslKeyFile || './ssl/domain-key.pem';\n       console.log('sslKeyFile: ' + sslKeyFile);\n       \n       var sslDomainCertFile = process.env.sslDomainCertFile || './ssl/domain.org.crt';\n       console.log('sslDomainCertFile: ' + sslDomainCertFile);\n       \n       var sslCaBundleFile = process.env.ssCaBundleFile || './ssl/bundle.crt';\n       console.log('sslCaBundleFile: ' + sslCaBundleFile);\n       \n       var certFileEncoding = 'utf8';\n       \n       if (fs.existsSync(sslKeyFile) === false) {\n           console.log('sslKeyFile  was not found!');\n       }else if (fs.existsSync(sslDomainCertFile) === false) {\n           console.log('sslDomainCertFile  was not found!');\n       }\n       else{\n           var ssl = {\n                key: fs.readFileSync(sslKeyFile, certFileEncoding),\n                cert: fs.readFileSync(sslDomainCertFile, certFileEncoding)\n            };\n            \n            if (fs.existsSync(sslCaBundleFile)) {\n                console.log('sslCaBundleFile found.');\n                \n                var ca, cert, chain, line, _i, _len;\n            \n                ca = [];\n            \n                chain = fs.readFileSync(sslCaBundleFile, certFileEncoding);\n            \n                chain = chain.split(\"\\n\");\n            \n                cert = [];\n            \n                for (_i = 0, _len = chain.length; _i < _len; _i++) {\n                  line = chain[_i];\n                    if (!(line.length !== 0)) {\n                        continue;\n                    }\n                    \n                    cert.push(line);\n                    \n                    if (line.match(/-END CERTIFICATE-/)) {\n                      ca.push(cert.join(\"\\n\"));\n                      cert = [];\n                    }\n                }\n            \n                ssl.ca = ca;\n            }\n            \n            secureServer = https.createServer(ssl, router);\n            console.log('secureServer created');\n       }\n       \n\n    }catch(err){\n        secureServerErr = \"Err1: \" + err;\n        console.log('Error creating https server: ' + err);\n    } \n}\n\n\n//////////////////////////\n//BEGIN SOCKET IO SETUP///\n//////////////////////////\nif(useHttps === true && secureServer != null){\n    socketio.listen(secureServer).on('connection', socketIO_OnConnectionProvider.onConnection);\n}\nelse{\n    if(server === undefined || server === null){\n        server = http.createServer(router);\n    }\n    socketio.listen(server).on('connection', socketIO_OnConnectionProvider.onConnection);\n}\n//////////////////////////\n//END SOCKET IO SETUP///\n//////////////////////////\n\n\n\n//////////////////////////\n//BEGIN MIDDLEWARE///\n//////////////////////////\n//This allows for navigation to html pages without the .html extension\nif(removeTrailingHtml === true || (path === undefined || path === null)){\n    router.use(function(req, res, next) {\n        if (req.path.indexOf('.') === -1) {\n            var file = publicdir + req.path + '.html';\n            fs.exists(file, function(exists) {\n              if (exists)\n                req.url += '.html';\n              next();\n            });\n        }\n        else{\n           next(); \n        }\n    });\n    router.use(express.static(publicdir));\n}else{\n    router.use(express.static(path.resolve(__dirname, 'client')));\n}\n//////////////////////////\n//END MIDDLEWARE///\n//////////////////////////\n\n\n\n\n////////////////////////////\n//BEGIN CONTROLLER ROUTES///\n////////////////////////////\nrouter.get('/api/secret', function(req, res) {\n    var secret = process.env.SECRET;\n    var secret2 = process.env.SECRET2;\n    res.json(200, {secret:secret,secret2:secret2});\n});\n\n\nrouter.get('/api/montyStats', function(req, res) {\n    res.json(200, monty.getMontyStats(req.query.players, req.query.games));\n});\n\n\nrouter.get('/api/playMontyGame', function(req, res) {\n    res.json(200, monty.playMontyGame(req.query.doorNumber,req.query.doSwitch));\n});\n\nrouter.get('/api/secureServerErr', function(req, res) {\n    res.json(200, {secureServerErr:secureServerErr, useHttps:useHttps});\n});\n\nrouter.get('/api/guid', function(req, res) {\n    res.json(200, {guid:guid.generate(req.query.useDashes)});\n});\n\nrouter.get('/api/beer/striketemp', function(req, res) {\n    res.json(200, strikeTemp.calc(req.query.quarts, req.query.lbs, req.query.t1, req.query.t2));\n});\n\nrouter.get('/api/beer', function(req, res) {\n    res.json(200, { Message: 'Drink Beer' });\n});\n\nrouter.get('/api/data', function(req, res) {\n    var key = req.query.key;\n    var id = req.query.id;\n    \n    \n    if(database[key] === undefined){\n        res.json(404, { Message: \"No datasource named [\" + key + \"] was found.  Start it now!\"});    \n    }\n    else{\n        if(id === undefined){\n            res.json(200, database[key]);\n        }\n        else{\n            var item = database[key][id];\n            \n            if(item !== undefined){\n                res.json(200, item);\n            }\n            else{\n                res.json(404, { Message: \"No item with id [\"+id+\"] found in datasource with key [\" + key + \"].\"});\n            }\n        }\n    }\n});\n\nrouter.post('/api/data', function(req, res) {\n    var key = req.query.key;\n    if(database[key] === undefined){\n        database[key] = {};\n    }\n    var newGuid = guid.generate(true);\n    \n    database[key][newGuid] = JSON.parse(req.body.bodyvalue);\n    \n    res.json(200, { id: newGuid });\n    \n});\n\nrouter.delete('/api/data', function(req, res) {\n    var key = req.query.key;\n    var id = req.query.id;\n    \n    if(key === undefined){\n        res.json(404, { Message: \"No key parameter was specified.\"});\n    }\n    else if(id === undefined){\n        res.json(404, { Message: \"No id parameter was specified.\"});\n    }\n    else{\n    \n        if(database[key] === undefined){\n            res.json(404, { Message: \"No datasource named [\" + key + \"] was found.  Start it now.\"});    \n        }\n        else{\n            \n            if(database[key][id] !== undefined){\n                delete database[key][id];\n                res.json(200, { deleted: true });\n            }\n            else{\n                res.json(404, { Message: \"No item with id [\"+id+\"] found in datasource with key [\" + key + \"].\"});\n            }\n        }\n    }\n});\n\n\n\n\n\n/////////////\n//Universe\n/////////////\nrouter.get('/mapplied/getUniverse', function(req, res) {\n    res.json(200, mapplied.getUniverse());\n});\n\nrouter.get('/mapplied/getQuadrant', function(req, res) {\n    res.json(200, mapplied.getQuadrant(req.query));\n});\n\nrouter.get('/mapplied/setHorizontalLinearMultiplier', function(req, res) {\n    res.json(200, mapplied.setHorizontalLinearMultiplier(req.query.val));\n});\n\n\n\n\n\n\n\n\n\n//////////////////////////\n//END CONTROLLER ROUTES///\n//////////////////////////\n\n\n\n//////////////////////////\n//START UP SERVER(S)//////\n//////////////////////////\n\n//HTTPS\nif(secureServer != null){\n    try{\n        secureServer.listen(process.env.SECURE_PORT || 443, process.env.SECURE_IP || \"0.0.0.0\", function(){\n            var addr = secureServer.address();\n            console.log(\"Secure server listening at\", addr.address + \":\" + addr.port);\n        });\n    }\n    catch(err2){\n        console.log(\"Err: \" + err2);\n        secureServerErr = \"Err: \" + err2;\n    }\n}\n\n\nif(server === undefined || server === null){\n    server = http.createServer(router);\n}\n\n//HTTP\nserver.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){\n    var addr = server.address();\n    console.log(\"HTTP server listening at\", addr.address + \":\" + addr.port);\n});","undoManager":{"mark":96,"position":100,"stack":[[{"start":{"row":52,"column":6},"end":{"row":52,"column":7},"action":"insert","lines":["c"],"id":215}],[{"start":{"row":52,"column":7},"end":{"row":52,"column":8},"action":"insert","lines":["k"],"id":216}],[{"start":{"row":52,"column":8},"end":{"row":52,"column":9},"action":"insert","lines":["e"],"id":217}],[{"start":{"row":52,"column":9},"end":{"row":52,"column":10},"action":"insert","lines":["r"],"id":218}],[{"start":{"row":52,"column":9},"end":{"row":52,"column":10},"action":"remove","lines":["r"],"id":219}],[{"start":{"row":52,"column":9},"end":{"row":52,"column":10},"action":"insert","lines":["t"],"id":220}],[{"start":{"row":52,"column":10},"end":{"row":52,"column":11},"action":"insert","lines":["I"],"id":221}],[{"start":{"row":52,"column":11},"end":{"row":52,"column":12},"action":"insert","lines":["O"],"id":222}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":14},"action":"remove","lines":["connectionData"],"id":223},{"start":{"row":53,"column":0},"end":{"row":53,"column":22},"action":"insert","lines":["socketIOconnectionData"]}],[{"start":{"row":54,"column":25},"end":{"row":54,"column":56},"action":"remove","lines":["mathersCallLoggerConnectionData"],"id":224},{"start":{"row":54,"column":25},"end":{"row":54,"column":47},"action":"insert","lines":["socketIOconnectionData"]}],[{"start":{"row":53,"column":36},"end":{"row":54,"column":0},"action":"insert","lines":["",""],"id":225}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":44},"action":"remove","lines":["var socketIO_CallLogger = mathersCallLogger;"],"id":226}],[{"start":{"row":54,"column":0},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":227}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":44},"action":"insert","lines":["var socketIO_CallLogger = mathersCallLogger;"],"id":228}],[{"start":{"row":54,"column":0},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":229}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":60},"action":"insert","lines":["var socketIO_OnConnectionProvider = bcryptPlusClientShaChat;"],"id":230}],[{"start":{"row":55,"column":60},"end":{"row":56,"column":44},"action":"remove","lines":["","var socketIO_CallLogger = mathersCallLogger;"],"id":231}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":60},"action":"remove","lines":["var socketIO_OnConnectionProvider = bcryptPlusClientShaChat;"],"id":232}],[{"start":{"row":50,"column":0},"end":{"row":50,"column":60},"action":"insert","lines":["var socketIO_OnConnectionProvider = bcryptPlusClientShaChat;"],"id":233}],[{"start":{"row":50,"column":36},"end":{"row":50,"column":59},"action":"remove","lines":["bcryptPlusClientShaChat"],"id":234},{"start":{"row":50,"column":36},"end":{"row":50,"column":53},"action":"insert","lines":["mathersCallLogger"]}],[{"start":{"row":56,"column":0},"end":{"row":56,"column":19},"action":"remove","lines":["socketIO_CallLogger"],"id":235},{"start":{"row":56,"column":0},"end":{"row":56,"column":29},"action":"insert","lines":["socketIO_OnConnectionProvider"]}],[{"start":{"row":54,"column":0},"end":{"row":55,"column":0},"action":"remove","lines":["",""],"id":236}],[{"start":{"row":166,"column":51},"end":{"row":166,"column":70},"action":"remove","lines":["socketIO_CallLogger"],"id":237},{"start":{"row":166,"column":51},"end":{"row":166,"column":80},"action":"insert","lines":["socketIO_OnConnectionProvider"]}],[{"start":{"row":172,"column":45},"end":{"row":172,"column":64},"action":"remove","lines":["socketIO_CallLogger"],"id":238},{"start":{"row":172,"column":45},"end":{"row":172,"column":74},"action":"insert","lines":["socketIO_OnConnectionProvider"]}],[{"start":{"row":48,"column":55},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":239}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":69},"action":"insert","lines":["var mathersCallLogger = require('./client/app/mathersCallLogger.js');"],"id":240}],[{"start":{"row":49,"column":4},"end":{"row":49,"column":12},"action":"remove","lines":["mathersC"],"id":241}],[{"start":{"row":49,"column":4},"end":{"row":49,"column":5},"action":"insert","lines":["c"],"id":242}],[{"start":{"row":49,"column":4},"end":{"row":49,"column":14},"action":"remove","lines":["callLogger"],"id":243},{"start":{"row":49,"column":4},"end":{"row":49,"column":5},"action":"insert","lines":["s"]}],[{"start":{"row":49,"column":5},"end":{"row":49,"column":6},"action":"insert","lines":["o"],"id":244}],[{"start":{"row":49,"column":6},"end":{"row":49,"column":7},"action":"insert","lines":["c"],"id":245}],[{"start":{"row":49,"column":7},"end":{"row":49,"column":8},"action":"insert","lines":["k"],"id":246}],[{"start":{"row":49,"column":8},"end":{"row":49,"column":9},"action":"insert","lines":["e"],"id":247}],[{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"insert","lines":["t"],"id":248}],[{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["H"],"id":249}],[{"start":{"row":49,"column":11},"end":{"row":49,"column":12},"action":"insert","lines":["u"],"id":250}],[{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"insert","lines":["b"],"id":251}],[{"start":{"row":49,"column":38},"end":{"row":49,"column":55},"action":"remove","lines":["mathersCallLogger"],"id":252},{"start":{"row":49,"column":38},"end":{"row":49,"column":47},"action":"insert","lines":["socketHub"]}],[{"start":{"row":51,"column":36},"end":{"row":51,"column":53},"action":"remove","lines":["mathersCallLogger"],"id":253},{"start":{"row":51,"column":36},"end":{"row":51,"column":45},"action":"insert","lines":["socketHub"]}],[{"start":{"row":54,"column":36},"end":{"row":54,"column":37},"action":"insert","lines":[";"],"id":254}],[{"start":{"row":54,"column":37},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":255}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":36},"action":"insert","lines":["socketIOconnectionData.async = async"],"id":256}],[{"start":{"row":55,"column":23},"end":{"row":55,"column":28},"action":"remove","lines":["async"],"id":257},{"start":{"row":55,"column":23},"end":{"row":55,"column":40},"action":"insert","lines":["mathersCallLogger"]}],[{"start":{"row":55,"column":43},"end":{"row":55,"column":48},"action":"remove","lines":["async"],"id":258},{"start":{"row":55,"column":43},"end":{"row":55,"column":60},"action":"insert","lines":["mathersCallLogger"]}],[{"start":{"row":54,"column":37},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":259}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":37},"action":"insert","lines":["socketIOconnectionData.async = async;"],"id":260}],[{"start":{"row":55,"column":23},"end":{"row":55,"column":28},"action":"remove","lines":["async"],"id":261},{"start":{"row":55,"column":23},"end":{"row":55,"column":32},"action":"insert","lines":["socketHub"]}],[{"start":{"row":55,"column":35},"end":{"row":55,"column":40},"action":"remove","lines":["async"],"id":262},{"start":{"row":55,"column":35},"end":{"row":55,"column":44},"action":"insert","lines":["socketHub"]}],[{"start":{"row":54,"column":37},"end":{"row":55,"column":45},"action":"remove","lines":["","socketIOconnectionData.socketHub = socketHub;"],"id":263}],[{"start":{"row":55,"column":60},"end":{"row":55,"column":61},"action":"insert","lines":[";"],"id":264}],[{"start":{"row":55,"column":23},"end":{"row":55,"column":40},"action":"remove","lines":["mathersCallLogger"],"id":265},{"start":{"row":55,"column":23},"end":{"row":55,"column":24},"action":"insert","lines":["c"]}],[{"start":{"row":55,"column":24},"end":{"row":55,"column":25},"action":"insert","lines":["h"],"id":266}],[{"start":{"row":55,"column":25},"end":{"row":55,"column":26},"action":"insert","lines":["i"],"id":267}],[{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"insert","lines":["l"],"id":268}],[{"start":{"row":55,"column":27},"end":{"row":55,"column":28},"action":"insert","lines":["d"],"id":269}],[{"start":{"row":55,"column":28},"end":{"row":55,"column":29},"action":"insert","lines":["r"],"id":270}],[{"start":{"row":55,"column":29},"end":{"row":55,"column":30},"action":"insert","lines":["e"],"id":271}],[{"start":{"row":55,"column":30},"end":{"row":55,"column":31},"action":"insert","lines":["n"],"id":272}],[{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":["["],"id":273}],[{"start":{"row":55,"column":35},"end":{"row":55,"column":36},"action":"insert","lines":["]"],"id":274}],[{"start":{"row":55,"column":36},"end":{"row":55,"column":37},"action":"insert","lines":[";"],"id":275}],[{"start":{"row":55,"column":37},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":276}],[{"start":{"row":55,"column":37},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":277}],[{"start":{"row":56,"column":0},"end":{"row":56,"column":22},"action":"insert","lines":["socketIOconnectionData"],"id":278}],[{"start":{"row":56,"column":22},"end":{"row":56,"column":23},"action":"insert","lines":["."],"id":279}],[{"start":{"row":56,"column":23},"end":{"row":56,"column":24},"action":"insert","lines":["p"],"id":280}],[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"insert","lines":["u"],"id":281}],[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"remove","lines":["u"],"id":282}],[{"start":{"row":56,"column":23},"end":{"row":56,"column":24},"action":"remove","lines":["p"],"id":283}],[{"start":{"row":56,"column":23},"end":{"row":56,"column":24},"action":"insert","lines":["c"],"id":284}],[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"insert","lines":["h"],"id":285}],[{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"insert","lines":["i"],"id":286}],[{"start":{"row":56,"column":26},"end":{"row":56,"column":27},"action":"insert","lines":["l"],"id":287}],[{"start":{"row":56,"column":27},"end":{"row":56,"column":28},"action":"insert","lines":["d"],"id":288}],[{"start":{"row":56,"column":23},"end":{"row":56,"column":28},"action":"remove","lines":["child"],"id":289},{"start":{"row":56,"column":23},"end":{"row":56,"column":31},"action":"insert","lines":["children"]}],[{"start":{"row":56,"column":31},"end":{"row":56,"column":32},"action":"insert","lines":["."],"id":290}],[{"start":{"row":56,"column":32},"end":{"row":56,"column":33},"action":"insert","lines":["p"],"id":291}],[{"start":{"row":56,"column":32},"end":{"row":56,"column":33},"action":"remove","lines":["p"],"id":292},{"start":{"row":56,"column":32},"end":{"row":56,"column":38},"action":"insert","lines":["push()"]}],[{"start":{"row":56,"column":37},"end":{"row":56,"column":54},"action":"insert","lines":["mathersCallLogger"],"id":293}],[{"start":{"row":56,"column":55},"end":{"row":56,"column":56},"action":"insert","lines":[";"],"id":294}],[{"start":{"row":56,"column":56},"end":{"row":57,"column":18},"action":"remove","lines":["","mathersCallLogger;"],"id":295}],[{"start":{"row":50,"column":4},"end":{"row":50,"column":12},"action":"remove","lines":["mathersC"],"id":296},{"start":{"row":50,"column":4},"end":{"row":50,"column":5},"action":"insert","lines":["c"]}],[{"start":{"row":50,"column":39},"end":{"row":50,"column":47},"action":"remove","lines":["mathersC"],"id":297},{"start":{"row":50,"column":39},"end":{"row":50,"column":40},"action":"insert","lines":["c"]}],[{"start":{"row":56,"column":37},"end":{"row":56,"column":54},"action":"remove","lines":["mathersCallLogger"],"id":298},{"start":{"row":56,"column":37},"end":{"row":56,"column":47},"action":"insert","lines":["callLogger"]}],[{"start":{"row":50,"column":55},"end":{"row":51,"column":0},"action":"insert","lines":["",""],"id":299}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":55},"action":"insert","lines":["var callLogger = require('./client/app/callLogger.js');"],"id":300}],[{"start":{"row":51,"column":4},"end":{"row":51,"column":14},"action":"remove","lines":["callLogger"],"id":301},{"start":{"row":51,"column":4},"end":{"row":51,"column":5},"action":"insert","lines":["c"]}],[{"start":{"row":51,"column":5},"end":{"row":51,"column":6},"action":"insert","lines":["h"],"id":302}],[{"start":{"row":51,"column":6},"end":{"row":51,"column":7},"action":"insert","lines":["a"],"id":303}],[{"start":{"row":51,"column":7},"end":{"row":51,"column":8},"action":"insert","lines":["t"],"id":304}],[{"start":{"row":51,"column":8},"end":{"row":51,"column":9},"action":"insert","lines":["t"],"id":305}],[{"start":{"row":51,"column":9},"end":{"row":51,"column":10},"action":"insert","lines":["e"],"id":306}],[{"start":{"row":51,"column":10},"end":{"row":51,"column":11},"action":"insert","lines":["r"],"id":307}],[{"start":{"row":51,"column":36},"end":{"row":51,"column":46},"action":"remove","lines":["callLogger"],"id":308},{"start":{"row":51,"column":36},"end":{"row":51,"column":43},"action":"insert","lines":["chatter"]}],[{"start":{"row":57,"column":49},"end":{"row":58,"column":0},"action":"insert","lines":["",""],"id":309}],[{"start":{"row":58,"column":0},"end":{"row":58,"column":49},"action":"insert","lines":["socketIOconnectionData.children.push(callLogger);"],"id":310}],[{"start":{"row":58,"column":37},"end":{"row":58,"column":47},"action":"remove","lines":["callLogger"],"id":311},{"start":{"row":58,"column":37},"end":{"row":58,"column":44},"action":"insert","lines":["chatter"]}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":["/"],"id":312}],[{"start":{"row":51,"column":1},"end":{"row":51,"column":2},"action":"insert","lines":["/"],"id":313}],[{"start":{"row":58,"column":0},"end":{"row":58,"column":1},"action":"insert","lines":["/"],"id":314}],[{"start":{"row":58,"column":1},"end":{"row":58,"column":2},"action":"insert","lines":["/"],"id":315}]]},"ace":{"folds":[],"scrolltop":489.6,"scrollleft":0,"selection":{"start":{"row":58,"column":2},"end":{"row":58,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":31,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1459223635576}
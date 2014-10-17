{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":38,"position":38,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":55}},"text":"router.get('/api/beer/striketemp', function(req, res) {"},{"action":"insertText","range":{"start":{"row":32,"column":55},"end":{"row":33,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":33,"column":0},"end":{"row":80,"column":0}},"lines":["/*","\tStrike Water Temperature Tw = (.2/r)(T2 - T1) + T2","","\twhere:","\tr = The ratio of water to grain in quarts per pound.","\tT1 = The initial temperature (¡F) of the mash.","\tT2 = The target temperature (¡F) of the mash.","\tTw = The actual temperature (¡F) of the infusion water. ","*/","","\tvar quartsWater = req.query.quarts;","\tvar lbsGrain = req.query.lbs;","\tvar t1 = req.query.t1;","\tvar t2 = req.query.t2;","","\tif(quartsWater == null || quartsWater <= 0){","\t\tres.json(404, { Message: \"The 'quarts' parameter was not set!\"});\t","\t}","","\tif(lbsGrain == null || lbsGrain <= 0){","                res.json(404, { Message: \"The 'lbs' parameter was not set!\"});","        }","","\tif(t1 == null || t1 <= 32){","                res.json(404, { Message: \"The 't1' parameter was not set!\"});","        }","","\tif(t2 == null || t2 <= 32){","                res.json(404, { Message: \"The 't2' parameter was not set!\"});","        }","","\tquartsWater = parseFloat(req.query.quarts);","        lbsGrain = parseFloat(req.query.lbs);","        t1 = parseFloat(req.query.t1);","        t2 = parseFloat(req.query.t2);\t","","\tvar temp = (((.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2);","","\tres.json(200, { Message: \"All good!\", strikeTemp: temp, quartsWater: quartsWater, lbsGrain: lbsGrain, t2: t2, t1: t1, formula: \"strikeTemp = (((.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2)\" });","","//\tres.json(200, { Message: \"All good!\" });","","});","","router.get('/api/beer', function(req, res) {","\tres.json(200, { Message: 'Drink Beer' });","});"]},{"action":"removeText","range":{"start":{"row":87,"column":92},"end":{"row":87,"column":93}},"text":"."},{"action":"insertText","range":{"start":{"row":87,"column":92},"end":{"row":87,"column":93}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":17},"end":{"row":48,"column":18}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":14},"end":{"row":52,"column":15}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":56,"column":8},"end":{"row":56,"column":9}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":60,"column":8},"end":{"row":60,"column":9}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":69,"column":15},"end":{"row":69,"column":16}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":86,"column":22},"end":{"row":86,"column":23}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":96,"column":22},"end":{"row":96,"column":23}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":15},"end":{"row":90,"column":16}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":110,"column":23},"end":{"row":110,"column":24}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":126,"column":11},"end":{"row":126,"column":12}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":129,"column":15},"end":{"row":129,"column":16}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":134,"column":26},"end":{"row":134,"column":27}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":139,"column":34},"end":{"row":139,"column":35}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":206,"column":0},"end":{"row":206,"column":14}},"text":"  var addr = s"},{"action":"removeText","range":{"start":{"row":205,"column":13},"end":{"row":205,"column":80}},"text":"(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){"},{"action":"removeText","range":{"start":{"row":205,"column":13},"end":{"row":206,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":205,"column":13},"end":{"row":205,"column":14}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":205,"column":13},"end":{"row":205,"column":14}},"text":"l"},{"action":"insertText","range":{"start":{"row":205,"column":13},"end":{"row":205,"column":80}},"text":"(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){"},{"action":"insertText","range":{"start":{"row":205,"column":80},"end":{"row":206,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":206,"column":0},"end":{"row":206,"column":14}},"text":"  var addr = s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":1},"end":{"row":203,"column":18}},"text":"ps -eaf|grep node"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":203,"column":1},"end":{"row":203,"column":18}},"text":"ps -eaf|grep node"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":196,"column":4},"end":{"row":196,"column":21}},"text":"ps -eaf|grep node"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":196,"column":4},"end":{"row":196,"column":21}},"text":"ps -eaf|grep node"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":0},"end":{"row":204,"column":48}},"text":"kill $(ps ax | grep '[j]s' | awk '{ print $1 }')"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":204,"column":0},"end":{"row":204,"column":48}},"text":"kill $(ps ax | grep '[j]s' | awk '{ print $1 }')"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":29,"column":18},"end":{"row":30,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":25}},"text":"var crawlerDatabase = {};"},{"action":"insertText","range":{"start":{"row":34,"column":0},"end":{"row":35,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":35,"column":0},"end":{"row":70,"column":0}},"lines":["","router.get('/api/crawler', function(req, res) {",""," ","        var jobId = req.query.jobId;","        var newStatus = req.query.newStatus;","","\tif(jobId == null){","                res.json(404, { Message: \"The 'jobId' parameter was not set!\"});","        }","","        if(newStatus == null){","\t\tif(crawlerDatabase.hasOwnProperty(jobId)){","\t\t\tres.json(200, \"response: \" + crawlerDatabase[jobId]);","\t\t}","\t\telse{","\t\t\tres.json(404, { Message: \"No jobId named [\" + jobId + \"] was found.\" });","\t\t}","                ","        }","\telse{","\t\tcrawlerDatabase[jobId] = newStatus;","\t\tres.json(200, \"jobId \" + jobId + \" updated\");","\t}","        ","","});","","","","","","","",""]},{"action":"removeText","range":{"start":{"row":86,"column":20},"end":{"row":86,"column":24}},"text":"null"},{"action":"insertText","range":{"start":{"row":86,"column":20},"end":{"row":86,"column":29}},"text":"undefined"},{"action":"insertText","range":{"start":{"row":87,"column":62},"end":{"row":87,"column":68}},"text":" silly"},{"action":"removeText","range":{"start":{"row":90,"column":17},"end":{"row":90,"column":21}},"text":"null"},{"action":"insertText","range":{"start":{"row":90,"column":17},"end":{"row":90,"column":26}},"text":"undefined"},{"action":"removeText","range":{"start":{"row":94,"column":11},"end":{"row":94,"column":15}},"text":"null"},{"action":"insertText","range":{"start":{"row":94,"column":11},"end":{"row":94,"column":20}},"text":"undefined"},{"action":"removeText","range":{"start":{"row":98,"column":11},"end":{"row":98,"column":15}},"text":"null"},{"action":"insertText","range":{"start":{"row":98,"column":11},"end":{"row":98,"column":20}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":124,"column":25},"end":{"row":124,"column":29}},"text":"null"},{"action":"insertText","range":{"start":{"row":124,"column":25},"end":{"row":124,"column":26}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":26},"end":{"row":124,"column":27}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":27},"end":{"row":124,"column":28}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":28},"end":{"row":124,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":29},"end":{"row":124,"column":30}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":30},"end":{"row":124,"column":31}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":31},"end":{"row":124,"column":32}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":32},"end":{"row":124,"column":33}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":124,"column":33},"end":{"row":124,"column":34}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":128,"column":18},"end":{"row":128,"column":22}},"text":"null"},{"action":"insertText","range":{"start":{"row":128,"column":18},"end":{"row":128,"column":27}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":134,"column":24},"end":{"row":134,"column":28}},"text":"null"},{"action":"insertText","range":{"start":{"row":134,"column":24},"end":{"row":134,"column":33}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":148,"column":25},"end":{"row":148,"column":29}},"text":"null"},{"action":"insertText","range":{"start":{"row":148,"column":25},"end":{"row":148,"column":34}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":164,"column":15},"end":{"row":164,"column":19}},"text":"null"},{"action":"insertText","range":{"start":{"row":164,"column":15},"end":{"row":164,"column":24}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":167,"column":19},"end":{"row":167,"column":23}},"text":"null"},{"action":"insertText","range":{"start":{"row":167,"column":19},"end":{"row":167,"column":28}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":172,"column":29},"end":{"row":172,"column":33}},"text":"null"},{"action":"insertText","range":{"start":{"row":172,"column":29},"end":{"row":172,"column":38}},"text":"undefined"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":177,"column":37},"end":{"row":177,"column":41}},"text":"null"},{"action":"insertText","range":{"start":{"row":177,"column":37},"end":{"row":177,"column":46}},"text":"undefined"}]}]]},"ace":{"folds":[],"scrolltop":2580,"scrollleft":0,"selection":{"start":{"row":204,"column":16},"end":{"row":204,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":183,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1413572767130,"hash":"ffa0dfabde282b7b7e9ad73cf6c4549ce0aebc26"}
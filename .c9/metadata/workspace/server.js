{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":370,"column":9},"end":{"row":370,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":10},"end":{"row":370,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":11},"end":{"row":370,"column":12},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":12},"end":{"row":370,"column":13},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":13},"end":{"row":370,"column":14},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":14},"end":{"row":370,"column":15},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":15},"end":{"row":370,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":16},"end":{"row":370,"column":17},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":17},"end":{"row":370,"column":18},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":371,"column":4},"end":{"row":410,"column":6},"action":"remove","lines":["/*","    var players = req.query.players;","    var games = req.query.games;","    ","    var results = {};","    ","    results.switchGamesPlayed = 0;","    results.stayGamesPlayed = 0;","    ","    results.switchGamesWon = 0;","    results.stayGamesWon = 0;","    ","    var i = 0;","    var j = 0;","    ","    for (i = 0; i < players; i++) {","        for (j = 0; j < games; j++) {","            ","            var doorNumberGuess = rand(1,3);","            var switchResult = game(doorNumberGuess, true);","            ","            doorNumberGuess = rand(1,3);","            var stayResult = game(doorNumberGuess, false);","","            results.switchGamesPlayed = results.switchGamesPlayed + 1;","            results.stayGamesPlayed = results.stayGamesPlayed + 1;","            ","            ","            if(switchResult.isWinner == true){","                results.switchGamesWon = results.switchGamesWon + 1;","            }","            ","            if(stayResult.isWinner == true){","                results.stayGamesWon = results.stayGamesWon + 1;","            }","            ","","        }","    }","    */"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":18},"end":{"row":370,"column":73},"action":"remove","lines":["monty.getMontyStats(req.query.players, req.query.games)"]}]}],[{"group":"doc","deltas":[{"start":{"row":373,"column":18},"end":{"row":373,"column":25},"action":"remove","lines":["results"]},{"start":{"row":373,"column":18},"end":{"row":373,"column":73},"action":"insert","lines":["monty.getMontyStats(req.query.players, req.query.games)"]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":0},"end":{"row":372,"column":4},"action":"remove","lines":["    var results = ","    ","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":369,"column":4},"end":{"row":370,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":369,"column":0},"end":{"row":369,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":368,"column":50},"end":{"row":369,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":0},"end":{"row":370,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":369,"column":75},"end":{"row":370,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":378,"column":18},"end":{"row":378,"column":22},"action":"remove","lines":["game"]},{"start":{"row":378,"column":18},"end":{"row":378,"column":31},"action":"insert","lines":["playMontyGame"]}]}],[{"group":"doc","deltas":[{"start":{"row":378,"column":18},"end":{"row":378,"column":23},"action":"insert","lines":["monty"]}]}],[{"group":"doc","deltas":[{"start":{"row":378,"column":23},"end":{"row":378,"column":24},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":373,"column":17},"end":{"row":373,"column":27},"action":"remove","lines":["montyGuess"]},{"start":{"row":373,"column":17},"end":{"row":373,"column":30},"action":"insert","lines":["playMontyGame"]}]}],[{"group":"doc","deltas":[{"start":{"row":375,"column":21},"end":{"row":375,"column":41},"action":"remove","lines":["req.query.doorNumber"]}]}],[{"group":"doc","deltas":[{"start":{"row":378,"column":38},"end":{"row":378,"column":48},"action":"remove","lines":["doorNumber"]},{"start":{"row":378,"column":38},"end":{"row":378,"column":58},"action":"insert","lines":["req.query.doorNumber"]}]}],[{"group":"doc","deltas":[{"start":{"row":376,"column":19},"end":{"row":376,"column":37},"action":"remove","lines":["req.query.doSwitch"]}]}],[{"group":"doc","deltas":[{"start":{"row":378,"column":59},"end":{"row":378,"column":67},"action":"remove","lines":["doSwitch"]},{"start":{"row":378,"column":59},"end":{"row":378,"column":77},"action":"insert","lines":["req.query.doSwitch"]}]}],[{"group":"doc","deltas":[{"start":{"row":378,"column":18},"end":{"row":378,"column":78},"action":"remove","lines":["monty.playMontyGame(req.query.doorNumber,req.query.doSwitch)"]}]}],[{"group":"doc","deltas":[{"start":{"row":379,"column":15},"end":{"row":379,"column":22},"action":"remove","lines":["results"]},{"start":{"row":379,"column":15},"end":{"row":379,"column":75},"action":"insert","lines":["monty.playMontyGame(req.query.doorNumber,req.query.doSwitch)"]}]}],[{"group":"doc","deltas":[{"start":{"row":374,"column":0},"end":{"row":378,"column":19},"action":"remove","lines":["    ","    var doorNumber = ;","    var doSwitch = ;","    ","    var results = ;"]}]}],[{"group":"doc","deltas":[{"start":{"row":373,"column":53},"end":{"row":374,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":307,"column":0},"end":{"row":365,"column":0},"action":"remove","lines":["","","var rand = function randomIntFromInterval(min,max)","{","    return Math.floor(Math.random()*(max-min+1)+min);","}","","","var game = function doMontyGame(doorNumber,doSwitch)","{","    var isWinner = false;","    ","    var doors = {};","    ","    var door1 = {isWinner:false};","    var door2 = {isWinner:false};","    var door3 = {isWinner:false};","    ","    doors[\"door1\"] = door1;","    doors[\"door2\"] = door2;","    doors[\"door3\"] = door3;","    ","    var winningNumber = rand(1,3);","    ","    doors[\"door\" + winningNumber].isWinner = true;","    ","    var chosenDoor = doors[\"door\" + doorNumber];","    ","    ","    if(doSwitch !== undefined && doSwitch != null && doSwitch === true){","        ","        var montys1stDoorNumber = 0;","        var montys2ndDoorNumber = 0;","        ","        if(doorNumber === 1){","            montys1stDoorNumber = 2;","            montys2ndDoorNumber = 3;","        }else if(doorNumber === 2){","            montys1stDoorNumber = 1;","            montys2ndDoorNumber = 3;","        }","        else if(doorNumber === 3){","            montys1stDoorNumber = 1;","            montys2ndDoorNumber = 2;","        }","        ","        if(doors[\"door\" + montys1stDoorNumber].isWinner == false){","            chosenDoor = doors[\"door\" + montys2ndDoorNumber];","        }else{","            chosenDoor = doors[\"door\" + montys1stDoorNumber];","        }","        ","    }","    ","    var results = { isWinner: chosenDoor.isWinner, winningNumber: winningNumber }","    ","    return results;","}",""]}]}],[{"group":"doc","deltas":[{"start":{"row":306,"column":0},"end":{"row":307,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":305,"column":0},"end":{"row":306,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":304,"column":0},"end":{"row":305,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":303,"column":0},"end":{"row":304,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":302,"column":0},"end":{"row":303,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":0},"end":{"row":302,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":33},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":13,"column":40},"action":"insert","lines":["var monty = require('./monty/monty.js');"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":13,"column":9},"action":"remove","lines":["monty"]},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":28},"end":{"row":13,"column":33},"action":"remove","lines":["monty"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":33},"end":{"row":13,"column":38},"action":"remove","lines":["monty"]},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":0},"end":{"row":106,"column":2},"action":"remove","lines":["*/"]}]}],[{"group":"doc","deltas":[{"start":{"row":137,"column":0},"end":{"row":138,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":138,"column":0},"end":{"row":138,"column":1},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":138,"column":1},"end":{"row":138,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":138,"column":2},"end":{"row":139,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":140,"column":1},"end":{"row":140,"column":2},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":140,"column":0},"end":{"row":140,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":0},"end":{"row":139,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":4},"end":{"row":139,"column":14},"action":"insert","lines":["strikeTemp"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":14},"end":{"row":139,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":15},"end":{"row":139,"column":16},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":16},"end":{"row":139,"column":17},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":17},"end":{"row":139,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":18},"end":{"row":139,"column":19},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":19},"end":{"row":139,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":20},"end":{"row":139,"column":49},"action":"insert","lines":["quartsWater, lbsGrain, t1, t2"]}]}],[{"group":"doc","deltas":[{"start":{"row":138,"column":2},"end":{"row":139,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":0},"end":{"row":142,"column":23},"action":"insert","lines":["var quartsWater = req.query.quarts;","\tvar lbsGrain = req.query.lbs;","\tvar t1 = req.query.t1;","\tvar t2 = req.query.t2;"]}]}],[{"group":"doc","deltas":[{"start":{"row":142,"column":23},"end":{"row":143,"column":0},"action":"insert","lines":["",""]},{"start":{"row":143,"column":0},"end":{"row":143,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":0},"end":{"row":139,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":22},"end":{"row":139,"column":38},"action":"remove","lines":["req.query.quarts"]}]}],[{"group":"doc","deltas":[{"start":{"row":144,"column":20},"end":{"row":144,"column":31},"action":"remove","lines":["quartsWater"]},{"start":{"row":144,"column":20},"end":{"row":144,"column":36},"action":"insert","lines":["req.query.quarts"]}]}],[{"group":"doc","deltas":[{"start":{"row":140,"column":16},"end":{"row":140,"column":29},"action":"remove","lines":["req.query.lbs"]}]}],[{"group":"doc","deltas":[{"start":{"row":144,"column":38},"end":{"row":144,"column":46},"action":"remove","lines":["lbsGrain"]},{"start":{"row":144,"column":38},"end":{"row":144,"column":51},"action":"insert","lines":["req.query.lbs"]}]}],[{"group":"doc","deltas":[{"start":{"row":141,"column":10},"end":{"row":141,"column":22},"action":"remove","lines":["req.query.t1"]}]}],[{"group":"doc","deltas":[{"start":{"row":144,"column":53},"end":{"row":144,"column":55},"action":"remove","lines":["t1"]},{"start":{"row":144,"column":53},"end":{"row":144,"column":65},"action":"insert","lines":["req.query.t1"]}]}],[{"group":"doc","deltas":[{"start":{"row":142,"column":10},"end":{"row":142,"column":22},"action":"remove","lines":["req.query.t2"]}]}],[{"group":"doc","deltas":[{"start":{"row":144,"column":67},"end":{"row":144,"column":69},"action":"remove","lines":["t2"]},{"start":{"row":144,"column":67},"end":{"row":144,"column":79},"action":"insert","lines":["req.query.t2"]}]}],[{"group":"doc","deltas":[{"start":{"row":139,"column":0},"end":{"row":143,"column":1},"action":"remove","lines":["    var quartsWater = ;","\tvar lbsGrain = ;","\tvar t1 = ;","\tvar t2 = ;","\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":140,"column":4},"end":{"row":140,"column":80},"action":"remove","lines":["strikeTemp.calc(req.query.quarts, req.query.lbs, req.query.t1, req.query.t2)"]}]}],[{"group":"doc","deltas":[{"start":{"row":141,"column":15},"end":{"row":141,"column":39},"action":"remove","lines":["{ Message: \"All good!\" }"]},{"start":{"row":141,"column":15},"end":{"row":141,"column":91},"action":"insert","lines":["strikeTemp.calc(req.query.quarts, req.query.lbs, req.query.t1, req.query.t2)"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":140,"column":4},"action":"remove","lines":["/*","\tStrike Water Temperature Tw = (.2/r)(T2 - T1) + T2","","\twhere:","\tr = The ratio of water to grain in quarts per pound.","\tT1 = The initial temperature (¡F) of the mash.","\tT2 = The target temperature (¡F) of the mash.","\tTw = The actual temperature (¡F) of the infusion water. ","","","\tvar quartsWater = req.query.quarts;","\tvar lbsGrain = req.query.lbs;","\tvar t1 = req.query.t1;","\tvar t2 = req.query.t2;","","\tif(quartsWater === undefined || quartsWater <= 0){","\t\tres.json(404, { Message: \"The 'quarts' parameter was not set silly!\"});\t","\t}","","\tif(lbsGrain === undefined || lbsGrain <= 0){","                res.json(404, { Message: \"The 'lbs' parameter was not set!\"});","        }","","\tif(t1 === undefined || t1 <= 32){","                res.json(404, { Message: \"The 't1' parameter was not set!\"});","        }","","\tif(t2 === undefined || t2 <= 32){","                res.json(404, { Message: \"The 't2' parameter was not set!\"});","        }","","\tquartsWater = parseFloat(req.query.quarts);","        lbsGrain = parseFloat(req.query.lbs);","        t1 = parseFloat(req.query.t1);","        t2 = parseFloat(req.query.t2);\t","","\tvar temp = (((0.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2);","","\tres.json(200, { Message: \"All good!\", strikeTemp: temp, quartsWater: quartsWater, lbsGrain: lbsGrain, t2: t2, t1: t1, formula: \"strikeTemp = (((.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2)\" });","","*/","","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":55},"end":{"row":98,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":93},"end":{"row":99,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":9},"end":{"row":34,"column":11},"action":"remove","lines":["ip"]},{"start":{"row":34,"column":9},"end":{"row":34,"column":17},"action":"insert","lines":["clientIp"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":14},"action":"remove","lines":["ip"]},{"start":{"row":36,"column":12},"end":{"row":36,"column":20},"action":"insert","lines":["clientIp"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":25},"end":{"row":15,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419227029359,"hash":"8121af5e1f7fa83a406998eb88958338ce7abdba"}
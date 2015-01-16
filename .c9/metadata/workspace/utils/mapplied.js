{"filter":false,"title":"mapplied.js","tooltip":"/utils/mapplied.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":371,"column":8},"end":{"row":371,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":371,"column":4},"end":{"row":371,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":371,"column":0},"end":{"row":371,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":370,"column":13},"end":{"row":371,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":319,"column":0},"end":{"row":335,"column":14},"action":"remove","lines":["            /*","            for(secRowNum = coordinates.y - 1; secRowNum >= coordinates.y - yScope; secRowNum--){","                sector.y = Mapplied.compensateCoordinate(secRowNum, quadrant.dimentions.sectorRowCount);","                sector.hash = Mapplied.hasher.hash(quadrant.hash + \":\" + sector.x + \",\" + sector.y);","                hashAnalysis = Mapplied.getHashAnalysis(sector.hash);","                sector.biomes = getChildBiomes({x:sector.x, y:sector.y, parent:quadrant, hashAnalysis:hashAnalysis});","                sectors[sector.x + \",\" + sector.y] = sector;","            }","            ","            if(coordinates.y - yScope <= 0){","                sector.y = Mapplied.compensateCoordinate(secRowNum, quadrant.dimentions.sectorRowCount);","                sector.hash = Mapplied.hasher.hash(quadrant.hash + \":\" + sector.x + \",\" + sector.y);","                hashAnalysis = Mapplied.getHashAnalysis(sector.hash);","                sector.biomes = getChildBiomes({x:sector.x, y:sector.y, parent:quadrant, hashAnalysis:hashAnalysis});","                sectors[sector.x + \",\" + sector.y] = sector;","            }","            */"]}]}],[{"group":"doc","deltas":[{"start":{"row":318,"column":12},"end":{"row":319,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":318,"column":8},"end":{"row":318,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":318,"column":4},"end":{"row":318,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":318,"column":0},"end":{"row":318,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":317,"column":13},"end":{"row":318,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":353,"column":8},"end":{"row":382,"column":10},"action":"remove","lines":["","       ","       /*","        if(coordinates.x - xScope <= 0){","            sector.x = Mapplied.compensateCoordinate(secColNum, quadrant.dimentions.sectorColumnCount);","            for(secRowNum = coordinates.y; secRowNum <= coordinates.y + yScope; secRowNum++){","                sector.y = Mapplied.compensateCoordinate(secRowNum, quadrant.dimentions.sectorRowCount);","                sector.hash = Mapplied.hasher.hash(quadrant.hash + \":\" + sector.x + \",\" + sector.y);","                hashAnalysis = Mapplied.getHashAnalysis(sector.hash);","                sector.biomes = getChildBiomes({x:sector.x, y:sector.y, parent:quadrant, hashAnalysis:hashAnalysis});","                sectors[sector.x + \",\" + sector.y] = sector;","            }","            ","            for(secRowNum = coordinates.y - 1; secRowNum >= coordinates.y - yScope; secRowNum--){","                sector.y = Mapplied.compensateCoordinate(secRowNum, quadrant.dimentions.sectorRowCount);","                sector.hash = Mapplied.hasher.hash(quadrant.hash + \":\" + sector.x + \",\" + sector.y);","                hashAnalysis = Mapplied.getHashAnalysis(sector.hash);","                sector.biomes = getChildBiomes({x:sector.x, y:sector.y, parent:quadrant, hashAnalysis:hashAnalysis});","                sectors[sector.x + \",\" + sector.y] = sector;","            }","            ","            if(coordinates.y - yScope <= 0){","                sector.y = Mapplied.compensateCoordinate(secRowNum, quadrant.dimentions.sectorRowCount);","                sector.hash = Mapplied.hasher.hash(quadrant.hash + \":\" + sector.x + \",\" + sector.y);","                hashAnalysis = Mapplied.getHashAnalysis(sector.hash);","                sector.biomes = getChildBiomes({x:sector.x, y:sector.y, parent:quadrant, hashAnalysis:hashAnalysis});","                sectors[sector.x + \",\" + sector.y] = sector;","            }","        }","        */"]}]}],[{"group":"doc","deltas":[{"start":{"row":358,"column":0},"end":{"row":374,"column":5},"action":"remove","lines":["    /*","   for(var secColNum = 1; secColNum <= quadrant.dimentions.sectorColumnCount; secColNum++){","        for(var secRowNum = 1; secRowNum <= quadrant.dimentions.sectorRowCount; secRowNum++){","","            var sector = {};","            sector.x = secColNum;","            sector.y = secRowNum;","            sector.hash = Mapplied.hasher.hash(quadrant.hash + \":\" + sector.x + \",\" + sector.y);","            var hashAnalysis = Mapplied.getHashAnalysis(sector.hash);","            ","            ","            sector.biomes = getChildBiomes({x:sector.x, y:sector.y, parent:quadrant, hashAnalysis:hashAnalysis});","            ","            sectors[sector.x + \",\" + sector.y] = sector;","        }","   }","   */"]}]}],[{"group":"doc","deltas":[{"start":{"row":357,"column":4},"end":{"row":358,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":357,"column":0},"end":{"row":357,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":356,"column":5},"end":{"row":357,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":291,"column":12},"end":{"row":292,"column":0},"action":"insert","lines":["",""]},{"start":{"row":292,"column":0},"end":{"row":292,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":12},"end":{"row":292,"column":13},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":13},"end":{"row":292,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":14},"end":{"row":292,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":15},"end":{"row":292,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":16},"end":{"row":292,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":17},"end":{"row":292,"column":18},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":18},"end":{"row":292,"column":19},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":19},"end":{"row":292,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":20},"end":{"row":292,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":21},"end":{"row":292,"column":22},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":22},"end":{"row":292,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":23},"end":{"row":292,"column":24},"action":"insert","lines":["X"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":24},"end":{"row":292,"column":25},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":25},"end":{"row":292,"column":26},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":26},"end":{"row":292,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":290,"column":23},"end":{"row":290,"column":103},"action":"remove","lines":["Mapplied.compensateCoordinate(secColNum, quadrant.dimentions.sectorColumnCount);"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":27},"end":{"row":292,"column":107},"action":"insert","lines":["Mapplied.compensateCoordinate(secColNum, quadrant.dimentions.sectorColumnCount);"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":107},"end":{"row":292,"column":108},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":107},"end":{"row":292,"column":108},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":292,"column":107},"end":{"row":293,"column":0},"action":"insert","lines":["",""]},{"start":{"row":293,"column":0},"end":{"row":293,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":53},"end":{"row":299,"column":59},"action":"remove","lines":["sector"]},{"start":{"row":299,"column":53},"end":{"row":299,"column":54},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":54},"end":{"row":299,"column":55},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":54},"end":{"row":299,"column":55},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":55},"end":{"row":299,"column":56},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":55},"end":{"row":299,"column":56},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":55},"end":{"row":299,"column":56},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":56},"end":{"row":299,"column":64},"action":"insert","lines":["currentX"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":64},"end":{"row":299,"column":65},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":65},"end":{"row":299,"column":66},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":66},"end":{"row":299,"column":67},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":67},"end":{"row":299,"column":68},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":68},"end":{"row":299,"column":69},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":69},"end":{"row":299,"column":77},"action":"insert","lines":["sector.y"]}]}],[{"group":"doc","deltas":[{"start":{"row":290,"column":23},"end":{"row":292,"column":27},"action":"remove","lines":["","            ","            var currentX = "]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":56},"end":{"row":297,"column":64},"action":"remove","lines":["currentX"]},{"start":{"row":297,"column":56},"end":{"row":297,"column":64},"action":"insert","lines":["sector.x"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":77},"end":{"row":297,"column":78},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":78},"end":{"row":297,"column":79},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":79},"end":{"row":297,"column":80},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":80},"end":{"row":297,"column":81},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":81},"end":{"row":297,"column":82},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":82},"end":{"row":297,"column":83},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":83},"end":{"row":297,"column":84},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":84},"end":{"row":297,"column":95},"action":"insert","lines":["sector.hash"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":95},"end":{"row":297,"column":96},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":96},"end":{"row":297,"column":97},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":97},"end":{"row":297,"column":98},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":98},"end":{"row":297,"column":99},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":99},"end":{"row":297,"column":100},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":100},"end":{"row":297,"column":101},"action":"insert","lines":["m"]},{"start":{"row":297,"column":101},"end":{"row":297,"column":102},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":102},"end":{"row":297,"column":103},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":103},"end":{"row":297,"column":104},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":103},"end":{"row":297,"column":104},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":102},"end":{"row":297,"column":103},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":101},"end":{"row":297,"column":102},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":101},"end":{"row":297,"column":102},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":102},"end":{"row":297,"column":103},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":97},"end":{"row":297,"column":103},"action":"remove","lines":["biomes"]},{"start":{"row":297,"column":97},"end":{"row":297,"column":98},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":97},"end":{"row":297,"column":98},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":97},"end":{"row":297,"column":98},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":98},"end":{"row":297,"column":99},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":99},"end":{"row":297,"column":100},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":100},"end":{"row":297,"column":101},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":101},"end":{"row":297,"column":102},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":102},"end":{"row":297,"column":103},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":103},"end":{"row":297,"column":104},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":104},"end":{"row":297,"column":117},"action":"insert","lines":["sector.biomes"]}]}],[{"group":"doc","deltas":[{"start":{"row":316,"column":16},"end":{"row":316,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":316,"column":17},"end":{"row":316,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":316,"column":62},"end":{"row":317,"column":0},"action":"insert","lines":["",""]},{"start":{"row":317,"column":0},"end":{"row":317,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":317,"column":16},"end":{"row":317,"column":119},"action":"insert","lines":["sectors[sector.x + \",\" + sector.y] = {x:sector.x, y: sector.y, hash:sector.hash, biomes:sector.biomes};"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":0},"end":{"row":302,"column":13},"action":"remove","lines":["            ","            if(coordinates.y - yScope <= 0){","                ","            }"]}]}],[{"group":"doc","deltas":[{"start":{"row":332,"column":16},"end":{"row":332,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":332,"column":17},"end":{"row":332,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":332,"column":62},"end":{"row":333,"column":0},"action":"insert","lines":["",""]},{"start":{"row":333,"column":0},"end":{"row":333,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":333,"column":16},"end":{"row":333,"column":119},"action":"insert","lines":["sectors[sector.x + \",\" + sector.y] = {x:sector.x, y: sector.y, hash:sector.hash, biomes:sector.biomes};"]}]}],[{"group":"doc","deltas":[{"start":{"row":350,"column":16},"end":{"row":350,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":350,"column":17},"end":{"row":350,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":350,"column":62},"end":{"row":351,"column":0},"action":"insert","lines":["",""]},{"start":{"row":351,"column":0},"end":{"row":351,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":351,"column":16},"end":{"row":351,"column":119},"action":"insert","lines":["sectors[sector.x + \",\" + sector.y] = {x:sector.x, y: sector.y, hash:sector.hash, biomes:sector.biomes};"]}]}],[{"group":"doc","deltas":[{"start":{"row":350,"column":0},"end":{"row":350,"column":62},"action":"remove","lines":["                //sectors[sector.x + \",\" + sector.y] = sector;"]}]}],[{"group":"doc","deltas":[{"start":{"row":349,"column":117},"end":{"row":350,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":332,"column":0},"end":{"row":332,"column":62},"action":"remove","lines":["                //sectors[sector.x + \",\" + sector.y] = sector;"]}]}],[{"group":"doc","deltas":[{"start":{"row":331,"column":117},"end":{"row":332,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":313,"column":0},"end":{"row":313,"column":62},"action":"remove","lines":["                //sectors[sector.x + \",\" + sector.y] = sector;"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":117},"end":{"row":313,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":420.2999334335327,"scrollleft":0,"selection":{"start":{"row":242,"column":32},"end":{"row":242,"column":39},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":87,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1421090910000,"hash":"428948e61181f540e8792042048b7fcb64ae942a"}
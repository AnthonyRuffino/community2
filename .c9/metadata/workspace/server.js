{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":47,"column":5},"end":{"row":47,"column":6},"action":"remove","lines":["c"],"id":559}],[{"start":{"row":47,"column":5},"end":{"row":50,"column":5},"action":"insert","lines":["catch (e) {","        console.log('FAILED TO LOAD mysql. ');","        console.log(e)","    }"],"id":560}],[{"start":{"row":48,"column":36},"end":{"row":48,"column":41},"action":"remove","lines":["mysql"],"id":561},{"start":{"row":48,"column":36},"end":{"row":48,"column":44},"action":"insert","lines":["mariasql"]}],[{"start":{"row":43,"column":4},"end":{"row":43,"column":42},"action":"remove","lines":["var mysqlClient = require('mariasql');"],"id":562}],[{"start":{"row":46,"column":8},"end":{"row":46,"column":46},"action":"insert","lines":["var mysqlClient = require('mariasql');"],"id":563}],[{"start":{"row":66,"column":4},"end":{"row":70,"column":7},"action":"remove","lines":["mySqlConnection = new mysqlClient({","      host: mySqlIp,","      user: 'root',","      password: process.env.MYSQL_ENV_MYSQL_ROOT_PASSWORD","    });"],"id":564}],[{"start":{"row":46,"column":46},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":565},{"start":{"row":47,"column":0},"end":{"row":47,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":47,"column":8},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":566},{"start":{"row":48,"column":0},"end":{"row":48,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":48,"column":8},"end":{"row":52,"column":7},"action":"insert","lines":["mySqlConnection = new mysqlClient({","      host: mySqlIp,","      user: 'root',","      password: process.env.MYSQL_ENV_MYSQL_ROOT_PASSWORD","    });"],"id":567}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"insert","lines":["    "],"id":568},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":59,"column":45},"end":{"row":61,"column":10},"action":"remove","lines":["","        ","          "],"id":569}],[{"start":{"row":59,"column":45},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":570},{"start":{"row":60,"column":0},"end":{"row":60,"column":9},"action":"insert","lines":["         "]}],[{"start":{"row":60,"column":9},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":571},{"start":{"row":61,"column":0},"end":{"row":61,"column":9},"action":"insert","lines":["         "]}],[{"start":{"row":61,"column":59},"end":{"row":62,"column":14},"action":"remove","lines":["","              "],"id":572}],[{"start":{"row":61,"column":59},"end":{"row":62,"column":0},"action":"insert","lines":["",""],"id":573},{"start":{"row":62,"column":0},"end":{"row":62,"column":13},"action":"insert","lines":["             "]}],[{"start":{"row":62,"column":27},"end":{"row":63,"column":14},"action":"remove","lines":["","              "],"id":574},{"start":{"row":62,"column":27},"end":{"row":63,"column":0},"action":"insert","lines":["",""]},{"start":{"row":63,"column":0},"end":{"row":63,"column":13},"action":"insert","lines":["             "]}],[{"start":{"row":63,"column":26},"end":{"row":64,"column":14},"action":"remove","lines":["","              "],"id":575},{"start":{"row":63,"column":26},"end":{"row":64,"column":0},"action":"insert","lines":["",""]},{"start":{"row":64,"column":0},"end":{"row":64,"column":13},"action":"insert","lines":["             "]}],[{"start":{"row":64,"column":65},"end":{"row":65,"column":14},"action":"remove","lines":["","              "],"id":576},{"start":{"row":64,"column":65},"end":{"row":65,"column":0},"action":"insert","lines":["",""]},{"start":{"row":65,"column":0},"end":{"row":65,"column":13},"action":"insert","lines":["             "]}],[{"start":{"row":65,"column":34},"end":{"row":66,"column":8},"action":"remove","lines":["","        "],"id":577},{"start":{"row":65,"column":34},"end":{"row":66,"column":0},"action":"insert","lines":["",""]},{"start":{"row":66,"column":0},"end":{"row":66,"column":13},"action":"insert","lines":["             "]}],[{"start":{"row":66,"column":0},"end":{"row":66,"column":4},"action":"remove","lines":["    "],"id":578}],[{"start":{"row":60,"column":0},"end":{"row":60,"column":9},"action":"remove","lines":["         "],"id":579}],[{"start":{"row":59,"column":45},"end":{"row":60,"column":0},"action":"remove","lines":["",""],"id":580}],[{"start":{"row":411,"column":49},"end":{"row":412,"column":0},"action":"insert","lines":["",""],"id":581},{"start":{"row":412,"column":0},"end":{"row":412,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":412,"column":4},"end":{"row":412,"column":5},"action":"insert","lines":["i"],"id":582}],[{"start":{"row":412,"column":5},"end":{"row":412,"column":6},"action":"insert","lines":["f"],"id":583}],[{"start":{"row":412,"column":6},"end":{"row":412,"column":8},"action":"insert","lines":["()"],"id":584}],[{"start":{"row":412,"column":7},"end":{"row":412,"column":23},"action":"insert","lines":["mySqlConnection2"],"id":585}],[{"start":{"row":412,"column":23},"end":{"row":412,"column":24},"action":"insert","lines":[" "],"id":586}],[{"start":{"row":412,"column":24},"end":{"row":412,"column":25},"action":"insert","lines":["!"],"id":587}],[{"start":{"row":412,"column":25},"end":{"row":412,"column":26},"action":"insert","lines":["="],"id":588}],[{"start":{"row":412,"column":26},"end":{"row":412,"column":27},"action":"insert","lines":[" "],"id":589}],[{"start":{"row":412,"column":27},"end":{"row":412,"column":28},"action":"insert","lines":["n"],"id":590}],[{"start":{"row":412,"column":28},"end":{"row":412,"column":29},"action":"insert","lines":["u"],"id":591}],[{"start":{"row":412,"column":29},"end":{"row":412,"column":30},"action":"insert","lines":["l"],"id":592}],[{"start":{"row":412,"column":30},"end":{"row":412,"column":31},"action":"insert","lines":["l"],"id":593}],[{"start":{"row":412,"column":32},"end":{"row":412,"column":33},"action":"insert","lines":["{"],"id":594}],[{"start":{"row":412,"column":33},"end":{"row":414,"column":5},"action":"insert","lines":["","        ","    }"],"id":595}],[{"start":{"row":415,"column":2},"end":{"row":425,"column":7},"action":"remove","lines":["var query = mySqlConnection2.query('INSERT INTO posts SET ?', {","      \"PersonID\": \"2\",","      \"LastName\": \"Ruffino2\",","      \"FirstName\": \"Tony2\",","      \"Address\": null,","      \"City\": null","    }, function(err, result) {","        if (err)","            throw err; ","        res.send(result);    // echo the result back","    });"],"id":596}],[{"start":{"row":413,"column":8},"end":{"row":423,"column":7},"action":"insert","lines":["var query = mySqlConnection2.query('INSERT INTO posts SET ?', {","      \"PersonID\": \"2\",","      \"LastName\": \"Ruffino2\",","      \"FirstName\": \"Tony2\",","      \"Address\": null,","      \"City\": null","    }, function(err, result) {","        if (err)","            throw err; ","        res.send(result);    // echo the result back","    });"],"id":597}],[{"start":{"row":414,"column":0},"end":{"row":414,"column":4},"action":"insert","lines":["    "],"id":598},{"start":{"row":415,"column":0},"end":{"row":415,"column":4},"action":"insert","lines":["    "]},{"start":{"row":416,"column":0},"end":{"row":416,"column":4},"action":"insert","lines":["    "]},{"start":{"row":417,"column":0},"end":{"row":417,"column":4},"action":"insert","lines":["    "]},{"start":{"row":418,"column":0},"end":{"row":418,"column":4},"action":"insert","lines":["    "]},{"start":{"row":419,"column":0},"end":{"row":419,"column":4},"action":"insert","lines":["    "]},{"start":{"row":420,"column":0},"end":{"row":420,"column":4},"action":"insert","lines":["    "]},{"start":{"row":421,"column":0},"end":{"row":421,"column":4},"action":"insert","lines":["    "]},{"start":{"row":422,"column":0},"end":{"row":422,"column":4},"action":"insert","lines":["    "]},{"start":{"row":423,"column":0},"end":{"row":423,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":424,"column":5},"end":{"row":424,"column":6},"action":"insert","lines":["e"],"id":599}],[{"start":{"row":424,"column":6},"end":{"row":424,"column":7},"action":"insert","lines":["l"],"id":600}],[{"start":{"row":424,"column":7},"end":{"row":424,"column":8},"action":"insert","lines":["s"],"id":601}],[{"start":{"row":424,"column":8},"end":{"row":424,"column":9},"action":"insert","lines":["e"],"id":602}],[{"start":{"row":424,"column":9},"end":{"row":424,"column":10},"action":"insert","lines":["{"],"id":603}],[{"start":{"row":424,"column":10},"end":{"row":426,"column":5},"action":"insert","lines":["","        ","    }"],"id":604}],[{"start":{"row":425,"column":8},"end":{"row":425,"column":25},"action":"insert","lines":["res.send(result);"],"id":605}],[{"start":{"row":425,"column":17},"end":{"row":425,"column":23},"action":"remove","lines":["result"],"id":606},{"start":{"row":425,"column":17},"end":{"row":425,"column":18},"action":"insert","lines":["'"]}],[{"start":{"row":425,"column":18},"end":{"row":425,"column":19},"action":"insert","lines":["'"],"id":607}],[{"start":{"row":425,"column":18},"end":{"row":425,"column":34},"action":"insert","lines":["mySqlConnection2"],"id":608}],[{"start":{"row":425,"column":34},"end":{"row":425,"column":35},"action":"insert","lines":[" "],"id":609}],[{"start":{"row":425,"column":35},"end":{"row":425,"column":36},"action":"insert","lines":["n"],"id":610}],[{"start":{"row":425,"column":36},"end":{"row":425,"column":37},"action":"insert","lines":["o"],"id":611}],[{"start":{"row":425,"column":37},"end":{"row":425,"column":38},"action":"insert","lines":["t"],"id":612}],[{"start":{"row":425,"column":38},"end":{"row":425,"column":39},"action":"insert","lines":[" "],"id":613}],[{"start":{"row":425,"column":39},"end":{"row":425,"column":40},"action":"insert","lines":["i"],"id":614}],[{"start":{"row":425,"column":40},"end":{"row":425,"column":41},"action":"insert","lines":["n"],"id":615}],[{"start":{"row":425,"column":41},"end":{"row":425,"column":42},"action":"insert","lines":["i"],"id":616}],[{"start":{"row":425,"column":42},"end":{"row":425,"column":43},"action":"insert","lines":["t"],"id":617}],[{"start":{"row":425,"column":43},"end":{"row":425,"column":44},"action":"insert","lines":["i"],"id":618}],[{"start":{"row":425,"column":44},"end":{"row":425,"column":45},"action":"insert","lines":["a"],"id":619}],[{"start":{"row":425,"column":45},"end":{"row":425,"column":46},"action":"insert","lines":["l"],"id":620}],[{"start":{"row":425,"column":46},"end":{"row":425,"column":47},"action":"insert","lines":["i"],"id":621}],[{"start":{"row":425,"column":47},"end":{"row":425,"column":48},"action":"insert","lines":["z"],"id":622}],[{"start":{"row":425,"column":48},"end":{"row":425,"column":49},"action":"insert","lines":["e"],"id":623}],[{"start":{"row":425,"column":49},"end":{"row":425,"column":50},"action":"insert","lines":["d"],"id":624}],[{"start":{"row":425,"column":50},"end":{"row":425,"column":51},"action":"insert","lines":["!"],"id":625}],[{"start":{"row":429,"column":1},"end":{"row":429,"column":2},"action":"remove","lines":[" "],"id":626}],[{"start":{"row":429,"column":0},"end":{"row":429,"column":1},"action":"remove","lines":[" "],"id":627}],[{"start":{"row":428,"column":2},"end":{"row":429,"column":0},"action":"remove","lines":["",""],"id":628}],[{"start":{"row":428,"column":1},"end":{"row":428,"column":2},"action":"remove","lines":[" "],"id":629}],[{"start":{"row":428,"column":0},"end":{"row":428,"column":1},"action":"remove","lines":[" "],"id":630}],[{"start":{"row":427,"column":2},"end":{"row":428,"column":0},"action":"remove","lines":["",""],"id":631}],[{"start":{"row":427,"column":1},"end":{"row":427,"column":2},"action":"remove","lines":[" "],"id":632}],[{"start":{"row":427,"column":0},"end":{"row":427,"column":1},"action":"remove","lines":[" "],"id":633}],[{"start":{"row":426,"column":5},"end":{"row":427,"column":0},"action":"remove","lines":["",""],"id":634}],[{"start":{"row":422,"column":29},"end":{"row":422,"column":56},"action":"remove","lines":["    // echo the result back"],"id":635}],[{"start":{"row":413,"column":56},"end":{"row":413,"column":61},"action":"remove","lines":["posts"],"id":636},{"start":{"row":413,"column":56},"end":{"row":413,"column":57},"action":"insert","lines":["P"]}],[{"start":{"row":413,"column":57},"end":{"row":413,"column":58},"action":"insert","lines":["e"],"id":637}],[{"start":{"row":413,"column":58},"end":{"row":413,"column":59},"action":"insert","lines":["r"],"id":638}],[{"start":{"row":413,"column":59},"end":{"row":413,"column":60},"action":"insert","lines":["s"],"id":639}],[{"start":{"row":413,"column":60},"end":{"row":413,"column":61},"action":"insert","lines":["o"],"id":640}],[{"start":{"row":413,"column":61},"end":{"row":413,"column":62},"action":"insert","lines":["n"],"id":641}],[{"start":{"row":413,"column":62},"end":{"row":413,"column":63},"action":"insert","lines":["s"],"id":642}],[{"start":{"row":412,"column":22},"end":{"row":412,"column":23},"action":"remove","lines":["2"],"id":643}],[{"start":{"row":413,"column":35},"end":{"row":413,"column":36},"action":"remove","lines":["2"],"id":644}],[{"start":{"row":425,"column":33},"end":{"row":425,"column":34},"action":"remove","lines":["2"],"id":645}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":28},"action":"remove","lines":["var mySqlConnection2 = null;"],"id":646}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":647}],[{"start":{"row":44,"column":0},"end":{"row":55,"column":5},"action":"remove","lines":["    try{","        var mysqlClient = require('mariasql');","        ","        mySqlConnection = new mysqlClient({","          host: mySqlIp,","          user: 'root',","          password: process.env.MYSQL_ENV_MYSQL_ROOT_PASSWORD","        });","    }catch (e) {","        console.log('FAILED TO LOAD mariasql. ');","        console.log(e)","    }"],"id":648}],[{"start":{"row":47,"column":24},"end":{"row":47,"column":25},"action":"remove","lines":["2"],"id":649}],[{"start":{"row":48,"column":24},"end":{"row":48,"column":25},"action":"remove","lines":["2"],"id":650}],[{"start":{"row":48,"column":38},"end":{"row":48,"column":39},"action":"remove","lines":["2"],"id":651}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "],"id":652}],[{"start":{"row":44,"column":0},"end":{"row":45,"column":0},"action":"remove","lines":["",""],"id":653}],[{"start":{"row":43,"column":4},"end":{"row":44,"column":0},"action":"remove","lines":["",""],"id":654}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"remove","lines":["    "],"id":655}],[{"start":{"row":42,"column":4},"end":{"row":43,"column":0},"action":"remove","lines":["",""],"id":656}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"remove","lines":["    "],"id":657}],[{"start":{"row":41,"column":41},"end":{"row":42,"column":0},"action":"remove","lines":["",""],"id":658}],[{"start":{"row":53,"column":5},"end":{"row":59,"column":4},"action":"remove","lines":["","    ","    ","    ","    ","    ","    "],"id":659}]]},"ace":{"folds":[],"scrolltop":600,"scrollleft":0,"selection":{"start":{"row":51,"column":13},"end":{"row":51,"column":13},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":39,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1459618115289,"hash":"77804da28e5fb5a4495f8ba89b7f7aaa2b62ef85"}
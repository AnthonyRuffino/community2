{"filter":false,"title":"chatter.js","tooltip":"/client/app/chatter.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":102,"column":24},"end":{"row":102,"column":25},"action":"insert","lines":["r"],"id":78}],[{"start":{"row":102,"column":25},"end":{"row":102,"column":26},"action":"insert","lines":["."],"id":79}],[{"start":{"row":105,"column":17},"end":{"row":105,"column":25},"action":"insert","lines":["chatter."],"id":80}],[{"start":{"row":92,"column":18},"end":{"row":92,"column":26},"action":"insert","lines":["chatter."],"id":81}],[{"start":{"row":90,"column":15},"end":{"row":90,"column":23},"action":"insert","lines":["chatter."],"id":82}],[{"start":{"row":85,"column":19},"end":{"row":85,"column":27},"action":"insert","lines":["chatter."],"id":83}],[{"start":{"row":79,"column":18},"end":{"row":79,"column":26},"action":"insert","lines":["chatter."],"id":84}],[{"start":{"row":73,"column":15},"end":{"row":73,"column":23},"action":"insert","lines":["chatter."],"id":85}],[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":87}],[{"start":{"row":56,"column":0},"end":{"row":56,"column":45},"action":"insert","lines":["ChatServer.onConnection = function (socket) {"],"id":88}],[{"start":{"row":56,"column":45},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":89},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":5},"action":"insert","lines":["}"],"id":90},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":57,"column":0},"end":{"row":59,"column":0},"action":"insert","lines":["","    ",""],"id":91}],[{"start":{"row":56,"column":13},"end":{"row":56,"column":23},"action":"remove","lines":["Connection"],"id":92},{"start":{"row":56,"column":13},"end":{"row":56,"column":14},"action":"insert","lines":["D"]}],[{"start":{"row":56,"column":14},"end":{"row":56,"column":15},"action":"insert","lines":["i"],"id":93}],[{"start":{"row":56,"column":15},"end":{"row":56,"column":16},"action":"insert","lines":["s"],"id":94}],[{"start":{"row":56,"column":16},"end":{"row":56,"column":17},"action":"insert","lines":["c"],"id":95}],[{"start":{"row":56,"column":17},"end":{"row":56,"column":18},"action":"insert","lines":["o"],"id":96}],[{"start":{"row":56,"column":18},"end":{"row":56,"column":19},"action":"insert","lines":["n"],"id":97}],[{"start":{"row":56,"column":19},"end":{"row":56,"column":20},"action":"insert","lines":["n"],"id":98}],[{"start":{"row":56,"column":20},"end":{"row":56,"column":21},"action":"insert","lines":["e"],"id":99}],[{"start":{"row":56,"column":21},"end":{"row":56,"column":22},"action":"insert","lines":["c"],"id":100}],[{"start":{"row":56,"column":22},"end":{"row":56,"column":23},"action":"insert","lines":["t"],"id":101}],[{"start":{"row":57,"column":0},"end":{"row":58,"column":21},"action":"insert","lines":["ChatServer.sockets.splice(ChatServer.sockets.indexOf(socket), 1);","      updateRoster();"],"id":102}],[{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"insert","lines":["    "],"id":103}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":8},"action":"insert","lines":["    "],"id":104}],[{"start":{"row":56,"column":45},"end":{"row":57,"column":8},"action":"remove","lines":["","        "],"id":105}],[{"start":{"row":56,"column":45},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":106},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":57,"column":69},"end":{"row":58,"column":6},"action":"remove","lines":["","      "],"id":107},{"start":{"row":57,"column":69},"end":{"row":58,"column":0},"action":"insert","lines":["",""]},{"start":{"row":58,"column":0},"end":{"row":58,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":59,"column":0},"end":{"row":59,"column":4},"action":"remove","lines":["    "],"id":108}],[{"start":{"row":58,"column":19},"end":{"row":59,"column":0},"action":"remove","lines":["",""],"id":109}],[{"start":{"row":59,"column":1},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":110}],[{"start":{"row":72,"column":0},"end":{"row":76,"column":7},"action":"remove","lines":["","    socket.on('disconnect', function () {","      ChatServer.sockets.splice(ChatServer.sockets.indexOf(socket), 1);","      updateRoster();","    });"],"id":111}],[{"start":{"row":71,"column":7},"end":{"row":72,"column":0},"action":"remove","lines":["",""],"id":112}],[{"start":{"row":119,"column":51},"end":{"row":120,"column":0},"action":"insert","lines":["",""],"id":113},{"start":{"row":120,"column":0},"end":{"row":120,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":120,"column":4},"end":{"row":120,"column":51},"action":"insert","lines":["exports.onConnection = ChatServer.onConnection;"],"id":114}],[{"start":{"row":56,"column":11},"end":{"row":56,"column":23},"action":"remove","lines":["onDisconnect"],"id":115},{"start":{"row":56,"column":11},"end":{"row":56,"column":23},"action":"insert","lines":["onConnection"]}],[{"start":{"row":56,"column":13},"end":{"row":56,"column":14},"action":"insert","lines":["D"],"id":116}],[{"start":{"row":56,"column":14},"end":{"row":56,"column":15},"action":"insert","lines":["i"],"id":117}],[{"start":{"row":56,"column":15},"end":{"row":56,"column":16},"action":"insert","lines":["s"],"id":118}],[{"start":{"row":56,"column":16},"end":{"row":56,"column":17},"action":"remove","lines":["C"],"id":119}],[{"start":{"row":56,"column":16},"end":{"row":56,"column":17},"action":"insert","lines":["c"],"id":120}],[{"start":{"row":120,"column":12},"end":{"row":120,"column":24},"action":"remove","lines":["onConnection"],"id":121},{"start":{"row":120,"column":12},"end":{"row":120,"column":27},"action":"insert","lines":["onDisconnection"]}],[{"start":{"row":120,"column":41},"end":{"row":120,"column":53},"action":"remove","lines":["onConnection"],"id":122},{"start":{"row":120,"column":41},"end":{"row":120,"column":56},"action":"insert","lines":["onDisconnection"]}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":14},"action":"remove","lines":["ChatServer"],"id":123},{"start":{"row":57,"column":4},"end":{"row":57,"column":24},"action":"insert","lines":["ChatServer.socketHub"]}],[{"start":{"row":57,"column":40},"end":{"row":57,"column":50},"action":"remove","lines":["ChatServer"],"id":124},{"start":{"row":57,"column":40},"end":{"row":57,"column":60},"action":"insert","lines":["ChatServer.socketHub"]}],[{"start":{"row":67,"column":15},"end":{"row":67,"column":23},"action":"insert","lines":["chatter."],"id":125}],[{"start":{"row":69,"column":25},"end":{"row":69,"column":33},"action":"insert","lines":["chatter."],"id":126}],[{"start":{"row":35,"column":17},"end":{"row":35,"column":25},"action":"insert","lines":["chatter."],"id":127}],[{"start":{"row":32,"column":19},"end":{"row":32,"column":27},"action":"insert","lines":["chatter."],"id":129}],[{"start":{"row":27,"column":19},"end":{"row":27,"column":27},"action":"insert","lines":["chatter."],"id":130}],[{"start":{"row":20,"column":15},"end":{"row":20,"column":23},"action":"insert","lines":["chatter."],"id":131}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":23},"action":"insert","lines":["chatter."],"id":132}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["t"],"id":133}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["e"],"id":134}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["r"],"id":135}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["t"],"id":136}],[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["e"],"id":137}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["r"],"id":138}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":10},"action":"remove","lines":["ChatServer"],"id":139},{"start":{"row":43,"column":0},"end":{"row":43,"column":13},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":10},"action":"remove","lines":["ChatServer"],"id":140},{"start":{"row":44,"column":0},"end":{"row":44,"column":13},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":10},"action":"remove","lines":["ChatServer"],"id":141},{"start":{"row":45,"column":0},"end":{"row":45,"column":13},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":10},"action":"remove","lines":["ChatServer"],"id":142},{"start":{"row":48,"column":0},"end":{"row":48,"column":13},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":50,"column":4},"end":{"row":50,"column":14},"action":"remove","lines":["ChatServer"],"id":143},{"start":{"row":50,"column":4},"end":{"row":50,"column":17},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":51,"column":4},"end":{"row":51,"column":14},"action":"remove","lines":["ChatServer"],"id":144},{"start":{"row":51,"column":4},"end":{"row":51,"column":17},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":52,"column":4},"end":{"row":52,"column":14},"action":"remove","lines":["ChatServer"],"id":145},{"start":{"row":52,"column":4},"end":{"row":52,"column":17},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":57,"column":40},"end":{"row":57,"column":50},"action":"remove","lines":["ChatServer"],"id":146},{"start":{"row":57,"column":40},"end":{"row":57,"column":53},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":14},"action":"remove","lines":["ChatServer"],"id":147},{"start":{"row":57,"column":4},"end":{"row":57,"column":17},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":56,"column":0},"end":{"row":56,"column":10},"action":"remove","lines":["ChatServer"],"id":148},{"start":{"row":56,"column":0},"end":{"row":56,"column":13},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":61,"column":0},"end":{"row":61,"column":10},"action":"remove","lines":["ChatServer"],"id":149},{"start":{"row":61,"column":0},"end":{"row":61,"column":13},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":65,"column":4},"end":{"row":65,"column":14},"action":"remove","lines":["ChatServer"],"id":150},{"start":{"row":65,"column":4},"end":{"row":65,"column":17},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":18},"action":"remove","lines":["ChatServer"],"id":151},{"start":{"row":68,"column":8},"end":{"row":68,"column":21},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":86,"column":8},"end":{"row":86,"column":18},"action":"remove","lines":["ChatServer"],"id":152},{"start":{"row":86,"column":8},"end":{"row":86,"column":21},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":99,"column":2},"end":{"row":99,"column":12},"action":"remove","lines":["ChatServer"],"id":153},{"start":{"row":99,"column":2},"end":{"row":99,"column":15},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":100,"column":4},"end":{"row":100,"column":14},"action":"remove","lines":["ChatServer"],"id":154},{"start":{"row":100,"column":4},"end":{"row":100,"column":17},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":111,"column":2},"end":{"row":111,"column":12},"action":"remove","lines":["ChatServer"],"id":155},{"start":{"row":111,"column":2},"end":{"row":111,"column":15},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":118,"column":19},"end":{"row":118,"column":29},"action":"remove","lines":["ChatServer"],"id":156},{"start":{"row":118,"column":19},"end":{"row":118,"column":32},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":119,"column":27},"end":{"row":119,"column":37},"action":"remove","lines":["ChatServer"],"id":157},{"start":{"row":119,"column":27},"end":{"row":119,"column":40},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":120,"column":30},"end":{"row":120,"column":40},"action":"remove","lines":["ChatServer"],"id":158},{"start":{"row":120,"column":30},"end":{"row":120,"column":43},"action":"insert","lines":["ChatterServer"]}],[{"start":{"row":56,"column":51},"end":{"row":57,"column":95},"action":"remove","lines":["","    ChatterServer.socketHub.sockets.splice(ChatterServer.socketHub.sockets.indexOf(socket), 1);"],"id":159}],[{"start":{"row":62,"column":4},"end":{"row":64,"column":39},"action":"remove","lines":["","","    ChatterServer.sockets.push(socket);"],"id":160}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "],"id":161}],[{"start":{"row":61,"column":43},"end":{"row":62,"column":0},"action":"remove","lines":["",""],"id":162}],[{"start":{"row":94,"column":22},"end":{"row":94,"column":23},"action":"insert","lines":["s"],"id":163}],[{"start":{"row":94,"column":23},"end":{"row":94,"column":24},"action":"insert","lines":["o"],"id":164}],[{"start":{"row":94,"column":24},"end":{"row":94,"column":25},"action":"insert","lines":["c"],"id":165}],[{"start":{"row":94,"column":25},"end":{"row":94,"column":26},"action":"insert","lines":["k"],"id":166}],[{"start":{"row":94,"column":26},"end":{"row":94,"column":27},"action":"insert","lines":["e"],"id":167}],[{"start":{"row":94,"column":27},"end":{"row":94,"column":28},"action":"insert","lines":["t"],"id":168}],[{"start":{"row":94,"column":28},"end":{"row":94,"column":29},"action":"insert","lines":["s"],"id":169}],[{"start":{"row":96,"column":4},"end":{"row":96,"column":28},"action":"remove","lines":["ChatterServer.socketHub."],"id":170}],[{"start":{"row":56,"column":48},"end":{"row":56,"column":49},"action":"insert","lines":["s"],"id":171}],[{"start":{"row":57,"column":17},"end":{"row":57,"column":24},"action":"insert","lines":["sockets"],"id":172}],[{"start":{"row":89,"column":21},"end":{"row":89,"column":34},"action":"insert","lines":["ChatterServer"],"id":173}],[{"start":{"row":89,"column":34},"end":{"row":89,"column":35},"action":"insert","lines":["."],"id":174}],[{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"insert","lines":["s"],"id":175}],[{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"remove","lines":["s"],"id":176},{"start":{"row":89,"column":35},"end":{"row":89,"column":44},"action":"insert","lines":["socketHub"]}],[{"start":{"row":89,"column":44},"end":{"row":89,"column":45},"action":"insert","lines":["."],"id":177}],[{"start":{"row":89,"column":45},"end":{"row":89,"column":46},"action":"insert","lines":["s"],"id":178}],[{"start":{"row":89,"column":46},"end":{"row":89,"column":47},"action":"insert","lines":["o"],"id":179}],[{"start":{"row":89,"column":45},"end":{"row":89,"column":47},"action":"remove","lines":["so"],"id":180},{"start":{"row":89,"column":45},"end":{"row":89,"column":52},"action":"insert","lines":["sockets"]}]]},"ace":{"folds":[],"scrolltop":1080,"scrollleft":0,"selection":{"start":{"row":94,"column":32},"end":{"row":94,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":70,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1459226576375,"hash":"6a9b7c0955131fefb64a5fe94443a038f7cf85ff"}
{"filter":false,"title":"tonnage.js","tooltip":"/client/js/tonnage.js","undoManager":{"mark":5,"position":5,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":33,"column":5},"action":"insert","lines":["function checkForZero(field) {","        if (field.value == 0 || field.value.length == 0) {","            alert (\"This field can't be 0!\");","            field.focus(); }","        else","\t    calculateTonnageRect(field.form);","    }","","    function rectangular_calc_Click(form) {","        if (form.len.value <= 0 || form.len.value.length == 0) {","            alert (\"The Length field must be greater than 0!\");","            form.len.focus(); }","        else if (form.wid.value <= 0 || form.wid.value.length == 0) {","            alert (\"The Width field must be greater than 0!\");","            form.wid.focus(); }","        else if (form.depth.value == 0 || form.depth.value.length == 0) {","            alert (\"The Depth field must be greater than 0!\");","            form.depth.focus(); }","        else","            calculateTonnageRect(form);","    }","","    function calculateTonnageRect(form) {","        var area = form.len.value * form.wid.value;","        //intRate = (form.ir.value/100) / 12;","        //months = form.term.value * 12;","        //form.pmt.value = Math.floor((princ*intRate)/(1-Math.pow(1+intRate,(-1*months)))*100)/100;","  \t    form.area.value = area;","  \t    ","  \t    var cy = area * form.depth.value / 324;","  \t    form.cy.value = cy;","  \t    ","  \t    form.tonnage.value = cy * 1.35;","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":26,"column":99},"action":"remove","lines":["        //intRate = (form.ir.value/100) / 12;","        //months = form.term.value * 12;","        //form.pmt.value = Math.floor((princ*intRate)/(1-Math.pow(1+intRate,(-1*months)))*100)/100;"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":51},"end":{"row":24,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":30,"column":5},"action":"remove","lines":["function checkForZero(field) {","        if (field.value == 0 || field.value.length == 0) {","            alert (\"This field can't be 0!\");","            field.focus(); }","        else","\t    calculateTonnageRect(field.form);","    }","","    function rectangular_calc_Click(form) {","        if (form.len.value <= 0 || form.len.value.length == 0) {","            alert (\"The Length field must be greater than 0!\");","            form.len.focus(); }","        else if (form.wid.value <= 0 || form.wid.value.length == 0) {","            alert (\"The Width field must be greater than 0!\");","            form.wid.focus(); }","        else if (form.depth.value == 0 || form.depth.value.length == 0) {","            alert (\"The Depth field must be greater than 0!\");","            form.depth.focus(); }","        else","            calculateTonnageRect(form);","    }","","    function calculateTonnageRect(form) {","        var area = form.len.value * form.wid.value;","  \t    form.area.value = area;","  \t    ","  \t    var cy = area * form.depth.value / 324;","  \t    form.cy.value = cy;","  \t    ","  \t    form.tonnage.value = cy * 1.35;","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":160,"column":0},"action":"insert","lines":["var DOT_SIZE = 30;","var X_START_POS = 120;","var Y_START_POS = 80;","// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□","// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□","// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□","// ‥‥‥‥‥■■■□□■□‥■■■","// ‥‥‥‥■□■□□□■□□■■■","// ‥‥‥‥■□■■□□□■□□□■","// ‥‥‥‥■■□□□□■■■■■‥","// ‥‥‥‥‥‥□□□□□□□■‥‥","// ‥‥■■■■■〓■■■〓■‥‥‥","// ‥■■■■■■■〓■■■〓‥‥■","// □□■■■■■■〓〓〓〓〓‥‥■","// □□□‥〓〓■〓〓□〓〓□〓■■","// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■","// ‥‥■■■〓〓〓〓〓〓〓〓〓■■","// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥","// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥","var dataSet = [","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BG\",\"BG\",\"BG\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BK\",\"BK\",\"BG\",\"BG\",\"BG\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BG\",\"BG\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BR\",\"BR\",\"BG\",\"BG\",\"BR\",\"BG\",\"BK\",\"RD\",\"RD\",\"RD\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BG\",\"BR\",\"BG\",\"BG\",\"BG\",\"BR\",\"BG\",\"BG\",\"RD\",\"RD\",\"RD\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BG\",\"BR\",\"BR\",\"BG\",\"BG\",\"BG\",\"BR\",\"BG\",\"BG\",\"BG\",\"RD\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BR\",\"BG\",\"BG\",\"BG\",\"BG\",\"BR\",\"BR\",\"BR\",\"BR\",\"RD\",\"BK\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BG\",\"BG\",\"BG\",\"BG\",\"BG\",\"BG\",\"BG\",\"RD\",\"BK\",\"BK\",","    \"BK\",\"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BL\",\"RD\",\"RD\",\"RD\",\"BL\",\"RD\",\"BK\",\"BK\",\"BK\",","    \"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BL\",\"RD\",\"RD\",\"RD\",\"BL\",\"BK\",\"BK\",\"BR\",","    \"BG\",\"BG\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BK\",\"BK\",\"BR\",","    \"BG\",\"BG\",\"BG\",\"BK\",\"BL\",\"BL\",\"RD\",\"BL\",\"BL\",\"YL\",\"BL\",\"BL\",\"YL\",\"BL\",\"BR\",\"BR\",","    \"BK\",\"BG\",\"BK\",\"BR\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BR\",\"BR\",","    \"BK\",\"BK\",\"BR\",\"BR\",\"BR\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BR\",\"BR\",","    \"BK\",\"BR\",\"BR\",\"BR\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",","    \"BK\",\"BR\",\"BK\",\"BK\",\"BL\",\"BL\",\"BL\",\"BL\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\"","];","","function getRgbColor(colorType)","{","    var colorHash = {","        //\"BK\":\"#000000\", // black","        \"BK\":\"#f8fefd\", // black","        \"WH\":\"#ffffff\", // white","        \"BG\":\"#ffcccc\", // beige","        \"BR\":\"#af5551\", // brown","        \"RD\":\"#ff72d9\", // red","        \"YL\":\"#fee965\", // yellow","        \"GN\":\"#00ff00\", // green","        \"WT\":\"#00ffff\", // water","        \"BL\":\"#5999f1\", // blue","        \"PR\":\"#800080\"  // purple","    };","    return colorHash[colorType];","}","","var Engine = Matter.Engine,","    World = Matter.World,","    Bodies = Matter.Bodies;","var engine;","","function init() {","","    var renderer = new THREE.WebGLRenderer({","        antialias: true","    });","    renderer.setSize(window.innerWidth, window.innerHeight);","    renderer.setPixelRatio(window.devicePixelRatio)","    document.body.appendChild(renderer.domElement);","","    var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 3000);","    camera.position.x = -600;","    camera.position.y = 200;","    camera.position.z = 800;","","    var controls = new THREE.OrbitControls(camera);","    var scene = new THREE.Scene();","","    // create a Matter.js engine","    engine = Engine.create({render: {visible: false}});","","    // create two circles and a ground","    var circles = [];","    for (var i = 0; i < dataSet.length; i++) {","        var x = X_START_POS + (i % 16) * (DOT_SIZE + 5);","        var y = Y_START_POS + Math.floor(i / 16) * (DOT_SIZE + 5);","        var s = DOT_SIZE;","        circles.push(Bodies.circle(x, y, DOT_SIZE * 0.5, {","            friction: 0.00001,","            restitution: 0.5,","            density: 0.001","        }));","    }","","    var ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});","    var wallA = Bodies.rectangle(0, 305, 60, 670, {isStatic: true});","    var wallB = Bodies.rectangle(800, 305, 60, 670, {isStatic: true});","    var ceiling = Bodies.rectangle(400, 0, 810, 60, {isStatic: true});","","    // add all of the bodies to the world","    World.add(engine.world, circles);","    World.add(engine.world, [ground, wallA, wallB, ceiling]);","","    var bodies = [];","    var material = new THREE.MeshPhongMaterial({color: 0x276a4b});","","    var group = new THREE.Object3D();","    scene.add(group);","","    var pos = 0;","    for (var j = 0; j < engine.world.bodies.length; j++) {","","        var b = engine.world.bodies[j];","        var w = b.bounds.max.x - b.bounds.min.x;","        var h = b.bounds.max.y - b.bounds.min.y;","","        if (b.isStatic) {","            var geometry = new THREE.BoxGeometry(w, h, 170);","            m = new THREE.Mesh(geometry, material);","        } else {","            var color = getRgbColor(dataSet[pos]);","            var boxMaterial = new THREE.MeshPhongMaterial({color: color});","            var boxGeometry = new THREE.CylinderGeometry(w/2, w/2, 150);","            m = new THREE.Mesh(boxGeometry, boxMaterial);","            m.rotation.x = Math.PI / 2;","            pos++;","        }","","        group.add(m);","        bodies.push(m);","    }","    ","    // back panel","    var m = new THREE.Mesh(new THREE.BoxGeometry(800, 600, 10), material);","    m.position.z = -40;","    group.add(m);","","    // run the engine","    Engine.run(engine);","","    dirLight = new THREE.DirectionalLight(0xffffff, 1);","    dirLight.position.set(-30, 50, 40);","    scene.add(dirLight);","","    function render() {","","        requestAnimationFrame(render);","","        for (var j = 0; j < engine.world.bodies.length; j++) {","            var b = engine.world.bodies[j].position;","            bodies[j].position.set(b.x - 405, -(b.y - 305), 0)","        }","","        renderer.render(scene, camera);","    }","","    render();","}","","window.addEventListener('load', init);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":160,"column":0},"action":"remove","lines":["var DOT_SIZE = 30;","var X_START_POS = 120;","var Y_START_POS = 80;","// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□","// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□","// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□","// ‥‥‥‥‥■■■□□■□‥■■■","// ‥‥‥‥■□■□□□■□□■■■","// ‥‥‥‥■□■■□□□■□□□■","// ‥‥‥‥■■□□□□■■■■■‥","// ‥‥‥‥‥‥□□□□□□□■‥‥","// ‥‥■■■■■〓■■■〓■‥‥‥","// ‥■■■■■■■〓■■■〓‥‥■","// □□■■■■■■〓〓〓〓〓‥‥■","// □□□‥〓〓■〓〓□〓〓□〓■■","// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■","// ‥‥■■■〓〓〓〓〓〓〓〓〓■■","// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥","// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥","var dataSet = [","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BG\",\"BG\",\"BG\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BK\",\"BK\",\"BG\",\"BG\",\"BG\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BG\",\"BG\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BR\",\"BR\",\"BG\",\"BG\",\"BR\",\"BG\",\"BK\",\"RD\",\"RD\",\"RD\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BG\",\"BR\",\"BG\",\"BG\",\"BG\",\"BR\",\"BG\",\"BG\",\"RD\",\"RD\",\"RD\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BG\",\"BR\",\"BR\",\"BG\",\"BG\",\"BG\",\"BR\",\"BG\",\"BG\",\"BG\",\"RD\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BR\",\"BR\",\"BG\",\"BG\",\"BG\",\"BG\",\"BR\",\"BR\",\"BR\",\"BR\",\"RD\",\"BK\",","    \"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BG\",\"BG\",\"BG\",\"BG\",\"BG\",\"BG\",\"BG\",\"RD\",\"BK\",\"BK\",","    \"BK\",\"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BL\",\"RD\",\"RD\",\"RD\",\"BL\",\"RD\",\"BK\",\"BK\",\"BK\",","    \"BK\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BL\",\"RD\",\"RD\",\"RD\",\"BL\",\"BK\",\"BK\",\"BR\",","    \"BG\",\"BG\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"RD\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BK\",\"BK\",\"BR\",","    \"BG\",\"BG\",\"BG\",\"BK\",\"BL\",\"BL\",\"RD\",\"BL\",\"BL\",\"YL\",\"BL\",\"BL\",\"YL\",\"BL\",\"BR\",\"BR\",","    \"BK\",\"BG\",\"BK\",\"BR\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BR\",\"BR\",","    \"BK\",\"BK\",\"BR\",\"BR\",\"BR\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BR\",\"BR\",","    \"BK\",\"BR\",\"BR\",\"BR\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BL\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",","    \"BK\",\"BR\",\"BK\",\"BK\",\"BL\",\"BL\",\"BL\",\"BL\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\",\"BK\"","];","","function getRgbColor(colorType)","{","    var colorHash = {","        //\"BK\":\"#000000\", // black","        \"BK\":\"#f8fefd\", // black","        \"WH\":\"#ffffff\", // white","        \"BG\":\"#ffcccc\", // beige","        \"BR\":\"#af5551\", // brown","        \"RD\":\"#ff72d9\", // red","        \"YL\":\"#fee965\", // yellow","        \"GN\":\"#00ff00\", // green","        \"WT\":\"#00ffff\", // water","        \"BL\":\"#5999f1\", // blue","        \"PR\":\"#800080\"  // purple","    };","    return colorHash[colorType];","}","","var Engine = Matter.Engine,","    World = Matter.World,","    Bodies = Matter.Bodies;","var engine;","","function init() {","","    var renderer = new THREE.WebGLRenderer({","        antialias: true","    });","    renderer.setSize(window.innerWidth, window.innerHeight);","    renderer.setPixelRatio(window.devicePixelRatio)","    document.body.appendChild(renderer.domElement);","","    var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 3000);","    camera.position.x = -600;","    camera.position.y = 200;","    camera.position.z = 800;","","    var controls = new THREE.OrbitControls(camera);","    var scene = new THREE.Scene();","","    // create a Matter.js engine","    engine = Engine.create({render: {visible: false}});","","    // create two circles and a ground","    var circles = [];","    for (var i = 0; i < dataSet.length; i++) {","        var x = X_START_POS + (i % 16) * (DOT_SIZE + 5);","        var y = Y_START_POS + Math.floor(i / 16) * (DOT_SIZE + 5);","        var s = DOT_SIZE;","        circles.push(Bodies.circle(x, y, DOT_SIZE * 0.5, {","            friction: 0.00001,","            restitution: 0.5,","            density: 0.001","        }));","    }","","    var ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});","    var wallA = Bodies.rectangle(0, 305, 60, 670, {isStatic: true});","    var wallB = Bodies.rectangle(800, 305, 60, 670, {isStatic: true});","    var ceiling = Bodies.rectangle(400, 0, 810, 60, {isStatic: true});","","    // add all of the bodies to the world","    World.add(engine.world, circles);","    World.add(engine.world, [ground, wallA, wallB, ceiling]);","","    var bodies = [];","    var material = new THREE.MeshPhongMaterial({color: 0x276a4b});","","    var group = new THREE.Object3D();","    scene.add(group);","","    var pos = 0;","    for (var j = 0; j < engine.world.bodies.length; j++) {","","        var b = engine.world.bodies[j];","        var w = b.bounds.max.x - b.bounds.min.x;","        var h = b.bounds.max.y - b.bounds.min.y;","","        if (b.isStatic) {","            var geometry = new THREE.BoxGeometry(w, h, 170);","            m = new THREE.Mesh(geometry, material);","        } else {","            var color = getRgbColor(dataSet[pos]);","            var boxMaterial = new THREE.MeshPhongMaterial({color: color});","            var boxGeometry = new THREE.CylinderGeometry(w/2, w/2, 150);","            m = new THREE.Mesh(boxGeometry, boxMaterial);","            m.rotation.x = Math.PI / 2;","            pos++;","        }","","        group.add(m);","        bodies.push(m);","    }","    ","    // back panel","    var m = new THREE.Mesh(new THREE.BoxGeometry(800, 600, 10), material);","    m.position.z = -40;","    group.add(m);","","    // run the engine","    Engine.run(engine);","","    dirLight = new THREE.DirectionalLight(0xffffff, 1);","    dirLight.position.set(-30, 50, 40);","    scene.add(dirLight);","","    function render() {","","        requestAnimationFrame(render);","","        for (var j = 0; j < engine.world.bodies.length; j++) {","            var b = engine.world.bodies[j].position;","            bodies[j].position.set(b.x - 405, -(b.y - 305), 0)","        }","","        renderer.render(scene, camera);","    }","","    render();","}","","window.addEventListener('load', init);",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":176,"mode":"ace/mode/javascript"}},"timestamp":1422127862640,"hash":"da39a3ee5e6b4b0d3255bfef95601890afd80709"}
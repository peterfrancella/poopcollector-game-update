//GRASS FIELD HEIGHT/WIDTH
 
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
			canvas.width = 1200;
			canvas.height = 700;
			ctx.font = "40px Georgia";
			ctx.fillStyle = "rgb(0, 250, 189)"; 
		
	document.body.appendChild(canvas);
	
//GRASS FIELD
	var bgReady = false;
	var bgImage = new Image();
			bgImage.onload = function () {
			bgReady = true;
};
			bgImage.src = "images/grass.png";


//POOP SCOOPER
	var poop_scooperReady = false;
	var poop_scooperImage = new Image();
			poop_scooperImage.onload = function () {
			poop_scooperReady = true;
};
			poop_scooperImage.src = "images/poop_scooper.png";

	var render = function () {
		if (bgReady) {ctx.drawImage(bgImage, 0, 0);}
		if (poop_scooperReady) { ctx.drawImage(poop_scooperImage, poop_scooper.x, poop_scooper.y);}
		if (poopReady) {
			ctx.drawImage(poopImage, poop.x, poop.y);}



};

var main = function () {
	var now = Date.now();
	var delta = now - then; 
		update(delta / 775.55);
		render(); then = now; requestAnimationFrame(main);
};


// SMELLY POOP SWIRL
	var poopReady = false;
	var poopImage = new Image();
		poopImage.onload = function () {
		poopReady = true;
};

		poopImage.src = "images/poop.png";


// CONTROLS
	var now = Date.now();
	var delta = now - then;
	var update = function (modifier) {
		
		//UP (38 for up)
		if (38 in keysDown) { poop_scooper.y -= poop_scooper.speed * modifier;}
		//DOWN (40 for down)
		if (40 in keysDown) { poop_scooper.y += poop_scooper.speed * modifier;}
		//LEFT (37 for left)
		if (37 in keysDown) { poop_scooper.x -= poop_scooper.speed * modifier;}
		//RIGHT (39 for right)
		if (39 in keysDown) { poop_scooper.x += poop_scooper.speed * modifier;}

	
		if (poop_scooper.x <= (poop.x + 25)
			&& poop.x <= (poop_scooper.x + 25))
			{++poopCaught; reset();}
};


// ARROW KEY CONTROLS
	var keysDown = {};
	var then = Date.now();
		addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true; }, false);
	var then = Date.now();
		addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode]; }, false);
		
		
// HOW FAST SHOVEL GLIDES ON SCREEN
	var poop_scooper = {
		speed: 390 // movement in pixels per second
};
	var poop = {};
	var poopCaught = 0;		

// SHOVEL FROM CASE REFRESH
	var reset = function () {
		poop_scooper.x = canvas.width /10;
		poop_scooper.y = canvas.height / 8;

	// RANDOM POOP SPAWN
		poop.x = 20 + (Math.random() * (canvas.width - 100));
		poop.y = 20 + (Math.random() * (canvas.height - 100));
};



reset();
main();





//INITIAL SETUP
const canvas = document.getElementById('canvas'),
	  ctx = canvas.getContext('2d');
const innerWidth = 800,
	  innerHeight = 600;
	  canvas.width = innerWidth;
	  canvas.height = innerHeight;

// VARIABLES
let score = 0;

//KEYS EVENT LISTENERS
const map = {
	37: false, // Left Arrow Key
	39: false, // Right Arrow Key
	32: false, // Space Key
}

addEventListener('keydown', function(event){
	if(event.keyCode in map){
		map[event.keyCode] = true;
		
		if(map[37]){
		   player.x += -10;
		   
		}else if(map[39]){
		   player.x += 10;
		   
		}	
	}
});

addEventListener('keyup', function(event){
	if(event.keyCode in map){
		map[event.keyCode] = false;
	}
});

//PLAYER SETUP
let player = {},
	player_width = 100,
	player_height = 125,
	player_img = new Image();
	player_img.src = 'img/canon.png';

//CREATE PLAYER

player = {
	width: player_width,
	height: player_height,
	x: innerWidth/2 - player_width/2,
	y: innerHeight - (player_height+10),
	power: 10,
	draw: function(){
		if(this.x <= 0){
	    	this.x = 0;
	   	}else if(this.x >= (innerWidth - this.width)){
	    	this.x = (innerWidth -this.width);
	   	}

		ctx.drawImage(player_img, this.x, this.y, this.width, this.height);
	}
};

//ANIMATION LOOP
let animate = () => {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, canvas.width, canvas.height);

	// SCORE
	ctx.font = '18px arial';
	ctx.fillStyle = '#000';
	ctx.fillText('SCORE: '+score, 10, 22);

	//PLAYER
	player.draw();

}
animate();

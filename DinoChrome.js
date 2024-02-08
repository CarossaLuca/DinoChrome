//questo è il codice js

let board; 					//let serve è come un id; definisce l'area di lavoro.
let boardWidth= 750;
let boardHeight= 250;
let context;


let dinoWidth= 88;
let dinoHeight= 94;
let dinoX= 50;
let dinoY= boardHeight - dinoHeight;
let dinoImg;

let dino = {
	x:dinoX,
	y:dinoY,
	width : dinoWidth,
	height : dinoHeight
}
let cactusArray= [];
let cactus1Width= 34;
let cactus2Width= 69;
let cactus3Width= 102;

let cactusHeight= 70;
let cactusX= 700; 
let cactusY= boardHeight- cactusHeight;
let cactus1Img;
let cactus2Img;
let cactus3Img;

window.onload = function(){				//permette la personalizzazione di css; grazie a lui possiamo inserire elementi al momento giusto
	board = document.getElementById("board");
	board.height = boardHeight;
	board.width = boardWidth;
	context = board.getContext("2d"); //permette il disegno sulla board
	//context.fillStyle = "green";
	//context.fillRect(dino.x, dino.y, dino.width, dino.height);

	dinoImg = new Image();
	dinoImg.src = "./img/dino.png";
	dinoImg.onload = function(){
	context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
		}
	cactus1Img = new Image();
	cactus1Img.src = "./img/cactus1.png";

			cactus2Img = new Image();
	cactus2.src = "./img/cactus2.png";


			cactus3Img = new Image();
	cactus3Img.src = "./img/cactus3.png";
	
	requesAnimationFrame(update);
	setInterval(placeCactus, 1000); //definisce il tempo espresso in millesecondi
}

function update() {
	requesAnimationFrame(update);
	
	context.drawImage(dinoImg, dino.x, dino,y, dino.width, dino.height);
	
}

function placeCactus (){

	let cactus{
		img : null,
		x: cactusX,
		y: cactusY,
		width: null,
		height: cactusHeight

	}
	let placeCactusChance= Math.random();
	if (placeCactusChance >.90){
		cactus.img=cactus3Img;
	}

}
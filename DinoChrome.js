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

}

function update() {
	requesAnimationFrame(update);
	
	context.drawImage(dinoImg, dino.x, dino,y, dino.width, dino.height);
	
	
	
	
	
	
	
	
	
	
	
}
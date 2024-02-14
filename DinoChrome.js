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

//physics
let velocityX = 8-; 
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;

window.onload = function(){				//al caricamento fa partire la funzione
	board = document.getElementById("board");
	board.height = boardHeight;
	board.width = boardWidth;
	context = board.getContext("2d"); //permette il disegno sulla board
	//context.fillStyle = "green";
	//context.fillRect(dino.x, dino.y, dino.width, dino.height);

	dinoImg = new Image();  //oggetto 
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
	
	requestAnimationFrame(update);
	setInterval(placeCactus, 1000); //definisce il tempo espresso in millesecondi
}

function update() {
	requestAnimationFrame(update);

	context.clearRect(0, 0, board.width, board.height);

	//dino
	context.drawImage(dinoImg, dino.x, dino,y, dino.width, dino.height);  //metodo del context perchè c'è il punto
	
	//cactus
	for (let i = 0; 1< cactusArray.length; i++){
		let cactus = cactusArray[i];
		cactus.X += velocityX;
		context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height)
	}
}

function moveDino(e){
	if (gameOver) {
		return;
	}
}

function placeCactus (){
	function moveDino(e){
	if (gameOver) {
		return;
	}

	let cactus{						//struttura
		img : null,
		x: cactusX,
		y: cactusY,
		width: null,
		height: cactusHeight

	}
	let placeCactusChance= Math.random();
	if (placeCactusChance >.90){
		cactus.img=cactus3Img;
		cactus.width=cactus3Width;
		cactusArray.push(cactus);

	}
	else if (placeCactusChange > .70){
		cactus.img = cactus2Img;
		cactus.width = cactus2Width;
	}
	else if (placeCactusChange > .50){
		cactus.img = Cactus1Img;
		cactus.width = cactus1Width;
		cactusArray.push(cactus);
	}

	if (cactusArray.length >5){
		cactusArray.shift(); //rimuovi il primo elemento dall'array in modo che l'array non cresca costantemente

	}
}
var diverImg, heartImg, pearlImg, sharkImg, starFishImg, underwaterImg, venusFlyTrapImg;
var game, form, player;
var allPlayers;
var players, player1, player2;
var playerCount;
var gameState = 0;

function preload(){
diverImg = loadImage("starFish.jpg");
heartImg = loadImage("heart.png");
pearlImg = loadImage("pearl.png");
sharkImg = loadImage("shark.png");
starFishImg = loadImage("starfish.png");
underwaterImg = loadImage("underwater.jpg");
venusFlyTrapImg = loadImage("venus flytrap.jpg");
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 30, displayHeight - 50);
    console.log(database);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(underwaterImg);
  if(playerCount === 2){
      game.updateState(1);
  }
  if(gameState === 1){
      clear();
      game.play();
  }
    
}
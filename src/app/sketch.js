//Sound
let gameSound;
let jumpSound;

//Scenario
let background;
let complement;
let scenario;
let lvlFactory
let lvl;
let imageScenery;
let imageScenery2;
let imageScenery3;

//bat
let imageBat;

//GameSpeed
let speed;

//factory
let factory;

//Caracter
let imageCharacter;
let character;

//Enemy
let imageBubble;
let imageTroll;
let imageFlyBubble;
let spritePositionX;
let spritePositionY;

//control the animation for all enemy's and main character
let animation;

//UI of the game
let gameRun = false;
let imageInicialScreen;
let inicialScreen;
let imageKnight;
let imagePowerUP;
let reset;
let gameApp;
let inicialEnemyX;
let imageGameOver;
let gameOver;
let font;
let points;
let enemys = [];

function preload() {
  gameSound = loadSound("sound/begin.ogg");
  jumpSound = loadSound("sound/somPulo.mp3");
  background = loadImage("images/scenery/background.jpg");
  imageBat = loadImage("images/scenery/bath.png");
  imageCharacter = loadImage("images/maincaracter/warior.png");
  imageBubble = loadImage("images/enemy/gotinha.png");
  imageTroll = loadImage("images/enemy/troll.png");
  imageFlyBubble = loadImage("images/enemy/gotinha-voadora.png");
  imageGameOver = loadImage("images/assets/game-over.png");
  imageInicialScreen = loadImage("images/scenery/inicialscreen.jpg");
  font = loadFont("images/assets/fonteTelaInicial.otf");
  imagePowerUp = loadImage("images/scenery/power.png");
  imageKnight = createImg("images/maincaracter/animation.gif", "images/maincaracter/animation.gif");
  imageKnight.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  gameSound.loop();
 
  new Reset();
  gameApp = new GameApp();
}

function keyPressed() {
  key === " " ? character.jump() : null;
  key === "r" ? new Reset() : null;
  key === "s" ? gameRunApp() : null;
}

function draw() {
  image(background, 0, 0, width, height);
  keyIsDown(LEFT_ARROW) ? character.movement("left") : null;
  keyIsDown(RIGHT_ARROW) ? character.movement("right") : null;
  gameRun ? gameApp.run() : animation(inicialScreen);
}

function gameRunApp() {
  gameRun = true;
  imageKnight.hide();
}

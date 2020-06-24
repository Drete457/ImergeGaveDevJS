//Sound
let gameSound;
let jumpSound;

//Scenario
let imageScenery;
let scenario;

//bat
let imageBat;

//GameSpeed
let speed = 4;

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
  imageScenery = loadImage("images/scenery/dungeon.png");
  imageBat = loadImage("images/scenery/bath.png");
  imageCharacter = loadImage("images/maincaracter/warior.png");
  imageBubble = loadImage("images/enemy/gotinha.png");
  imageTroll = loadImage("images/enemy/troll.png");
  imageFlyBubble = loadImage("images/enemy/gotinha-voadora.png");
  imageGameOver = loadImage("images/assets/game-over.png");
  imageInicialScreen = loadImage("images/scenery/inicialscreen.jpg");
  font = loadFont("images/assets/fonteTelaInicial.otf");
  imageKnight = createImg("images/maincaracter/animation.gif");
}

function keyPressed() {
  key === " " ? character.jump() : null;
  key === "r" ? new Reset() : null;
  key === "s" ? gameRun = true : null;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  gameSound.loop();
  new Reset();
  gameApp = new GameApp();
}

function draw() {
  gameRun ? gameApp.run() : animation(inicialScreen);
}


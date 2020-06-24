//Sound
let gameSound;
let jumpSound;

//Scenario
let imageScenery;
let scenario;

//bat
let imageBat;

//GameSpeed
let speed = 3;

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
let inicialEnemyX = () => {
  return Math.floor(
    Math.random() * ((width + 100) + width ) + width + 10,
  );
}
let imageGameOver;
let gameOver;
let font;
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
  font = loadFont("images/assets/fonteTelaInicial.otf");
}

function keyPressed() {
  key === " " ? character.jump() : null;
  key === "s" ? reset() : null;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  reset();
}

function draw() {
  animation(scenario);

  animation(character);

  enemys.map((enemy) => {
    enemy.inicialPositionX > -enemy.characterWidth ? animation(enemy) :  enemys[enemys.indexOf(enemy)] = factory.enemy();
    //character.collision(enemy) ? animation(gameOver) : null;
  });
}

function reset() {
  factory = new Factory();
  animation = new AnimationMovement().animation;
  spritePositionX = 0;
  spritePositionY = 0;

  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);

  gameSound.loop();

  scenario = factory.scenario();

  character = factory.character();

  enemys = factory.enemys();

  gameOver = factory.gameOver();
  
  loop();
}

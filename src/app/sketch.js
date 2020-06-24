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

//Enemy Bubble
let imageBubble;
let imageTroll;

//control the animation for all enemy's and main character
let animation;

//UI of the game
let inicialEnemyX = () => {
  return Math.floor(
    Math.random() * ((width + 50) + width / 1.3) + width / 1.3,
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
    enemy.inicialPositionX > 0 ? animation(enemy) :  enemys[enemys.indexOf(enemy)] = factory.enemy();
    //character.collision(enemy) ? animation(gameOver) : null;
  });
}

function reset() {
  factory = new Factory();
  animation = new AnimationMovement().animation;

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

//Sound
let gameSound;
let jumpSound;

//Scenario
let imageScenery;
let scenario;

//bat
let imageBat;
let bat;

//GameSpeed
let speed = 3;

//factory
let factory;

//Caracter
let imageCharacter;
let character;

//Enemy Bubble
let imageBubble;
let bubble;

//control the animation for all enemy's and main character
let animation;

function preload() {
  gameSound = loadSound("sound/begin.ogg");
  jumpSound = loadSound("sound/somPulo.mp3");
  imageScenery = loadImage("images/scenery/dungeon.png");
  imageBat = loadImage("images/scenery/bath.png");
  imageCharacter = loadImage("images/maincaracter/warior.png");
  imageBubble = loadImage("images/enemy/gotinha.png");
}

function keyPressed() {
  key === " " ? character.jump() : null;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  factory = new Factory();
  animation = new AnimationMovement().animation;

  gameSound.loop();

  scenario = factory.scenario();
  bat = factory.bat();

  character = factory.character();

  bubble = factory.bubble();
}

function draw() {
  animation(scenario);
  bat.map((bat) => animation(bat));
  animation(character);
  bubble.map((bubble) => {
    animation(bubble);
    character.collision(bubble) ? noLoop() : null;
  });
}

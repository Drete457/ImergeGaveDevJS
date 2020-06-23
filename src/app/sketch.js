//Sound
let gameSound;
let jumpSound;

//Scenario
let imageScenery;
let scenario;

//GameSpeed
let speed = 3


//factory
let factory;

//Caracter
let imageCharacter;
let character;
 
//Enemy Bubble
let imageBubble;
let bubble;
/*//bubble position and image on the screen
let inicialPositionXBb;
let inicialPositionYBb;

//size of the bubble on the screen
let bubbleWidth;
let bubbleHeigth;

//size of the bubble in the file
let sizeXBb;
let sizeYBb;

//reference white sprite use of the bubble
let spritePositionXBb
let spritePositionYBb

function bubbleInicialization(x, y) {
  inicialPositionXBb = x;
  inicialPositionYBb = y;
  bubbleWidth = 52;
  bubbleHeigth = 52;
  sizeXBb = 104;
  sizeYBb = 104;
  spritePositionXBb = 0;
  spritePositionYBb = 0;
  bubbleSpeed = 10;
  bubble = new Bubble(imageBubble, inicialPositionXBb, inicialPositionYBb, bubbleWidth, bubbleHeigth, sizeXBb, sizeYBb, spritePositionXBb, spritePositionYBb, bubbleSpeed);
}*/

let animation;

function preload() {
  gameSound = loadSound('sound/begin.ogg');
  jumpSound = loadSound('sound/somPulo.mp3');
  imageScenery = loadImage('images/scenery/dungeon.png');
  imageCharacter = loadImage('images/maincaracter/warior.png');
  imageBubble = loadImage('images/enemy/gotinha.png');
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

  scenario = new Scenario(imageScenery, speed);
  character = factory.character();
  bubble = factory.bubble();
}

function draw(){
  animation(scenario);
  animation(character);
  animation(bubble);
//fazer factory dos personagens e passar como argumento cada um para a colisão
  if (character.collision(bubble)) {
    console.log("colidiu");
    noLoop();
  }
}

//Sound
let gameSound;

//Scenario
let imageScenery;
let scenario;

//GameSpeed
let speed = 3

//Caracter
let imageCharacter;
let character;
//character position and image on the screen
let inicialPositionXCh;
let inicialPositionYCh;

//size of the character on the screen
let characterWidth;
let characterHeigth;

//size of the character in the file
let sizeXCh;
let sizeYCh;

//reference whit sprite use of the character file
let spritePositionXCh
let spritePositionYCh
let numberOfMovements

function characterInicialization() {
  inicialPositionXCh = 100;
  inicialPositionYCh = height - height / 3;
  characterWidth = width / 9;
  characterHeigth = height / 3;
  sizeXCh = 58;
  sizeYCh = 65;
  spritePositionXCh = sizeXCh;
  spritePositionYCh = sizeYCh * 11;
  numberOfMovements = 8;
  character = new Character(imageCharacter, inicialPositionXCh, inicialPositionYCh, characterWidth, characterHeigth, sizeXCh, sizeYCh, spritePositionXCh, spritePositionYCh, numberOfMovements);
}
    

//Enemy Bubble
let imageBubble;
let bubble;
//bubble position and image on the screen
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
}

let animation;

function preload() {
  gameSound = loadSound('sound/begin.ogg');
  imageScenery = loadImage('images/scenery/dungeon.png');
  imageCharacter = loadImage('images/maincaracter/warior.png');
  imageBubble = loadImage('images/enemy/gotinha.png');
}

function keyPressed() {
  key === " " ? character.jump() : null;
}

function setup() {
  frameRate(30);
  gameSound.loop();

  animation = new AnimationMovement().animation;

  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenery, speed);

  characterInicialization();

  bubbleInicialization(width -100, height - height / 7);
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

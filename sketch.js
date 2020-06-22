let imageScenery;
let imageCharacter;
let scenario;
let character;
let gameSound;

function preload(){
  imageScenery = loadImage('images/scenery/floresta.png');
  imageCharacter = loadImage('images/maincaracter/correndo.png');
  gameSound = loadSound('sound/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenery, 3);
  character = new Character(imageCharacter);
  gameSound.loop();
  frameRate(30);
}

function draw() {
  scenario.drawBackGround();
  scenario.move();
  character.drawCharacter();
}


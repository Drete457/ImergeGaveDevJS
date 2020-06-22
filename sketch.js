//Scenario
let imageScenery;
let scenario;

//Caracter
let imageCharacter;
let character;

//Sound
let gameSound;

//GameSpeed
let speed = 3

function preload() {
  imageScenery = loadImage('images/scenery/dungeon.png');
  imageCharacter = loadImage('images/maincaracter/warior.png');
  gameSound = loadSound('sound/begin.ogg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenery, speed);
  character = new Character(imageCharacter);
  gameSound.loop();
  frameRate(30);
}

function draw() {
  scenario.drawBackGround();
  scenario.move();
  character.drawCharacter();
}


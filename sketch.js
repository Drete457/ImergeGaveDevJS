let imageScenery;
let character;
let scenery;
let gameSound;

function preload(){
  imageScenery = loadImage('images/scenery/floresta.png');
  character = loadImage('images/maincaracter/correndo.png');
  gameSound = loadSound('sound/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenery = new Scenery(imageScenery, 3);
  gameSound.loop();
  frameRate(60);
}

function draw() {
  scenery.drawBackGround();
  scenery.move();
  image(character, 0, height - height/5, width/9, height/6, 0, 0, 220, 270);
}

class Scenery {
  
constructor(image, speed){
  this.image = image;
  this.speed = speed;
  this.x1 = 0;
  this.x2 = width;
}

  drawBackGround(){
  image(this.image, this.x1, 0, width, height);
  image(this.image, this.x2, 0, width, height);
  }
  
  move(){
      this.x1 = this.x1 - this.speed;
      this.x2 = this.x2 - this.speed;
    
    if (this.x1 < -width){
      this.x1 = width;
    }
    if (this.x2 < -width){
      this.x2 = width;
    }
  }  
}

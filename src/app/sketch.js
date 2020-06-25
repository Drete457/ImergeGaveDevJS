

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

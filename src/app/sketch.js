function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  playSound = true;
  gameSound.loop()
  new Reset();
  
}

function keyPressed() {
  key === " " ? character.jump() : null;
  key === "r" ? new Reset() : null;
  key === "s" ? gameRunApp() : null;
}

function draw() {
  gameRun ? gameApp.run() : animation(inicialScreen);
}

function gameRunApp() {
  if (!bossFight) {
    gameRun = true;
    imageKnight.hide();
  } else {
    gameRun = true;
    gameApp = new GameAppBoss();
  }
}

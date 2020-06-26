function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  gameSound.loop();
  console.log(width)
  console.log(height)

  new Reset();
  gameApp = new GameApp();
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
  gameRun = true;
  imageKnight.hide();
}

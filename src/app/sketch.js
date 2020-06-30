function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  playSound = true;

  new Reset();
}

function keyPressed() {
  key === " " ? character.jump() : null;
  key === "r" ? new Reset() : null;
  key === "s" ? gameRunApp() : null;
  key === "a" && bossFight ? character.attack() : null;
}

function draw() {
  gameRun ? gameApp.run() : animation(inicialScreen);
}

function gameRunApp() {
  if (!bossFight) {
    isPlaying();
    gameRun = true;
    imageKnight.hide();
  } else {
    gameRun = true;
    gameApp = new GameAppBoss();
  }
}

function isPlaying() {
  if (!gameSound.isPlaying()) {
    playSoundFinalBoss.stop();
    gameSound.loop();
    gameSound.setVolume(0.1);
  }
}

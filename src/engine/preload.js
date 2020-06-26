function preload() {
  gameSound = loadSound("sound/begin.ogg");
  jumpSound = loadSound("sound/somPulo.mp3");
  background = loadImage("images/scenery/background.jpg");
  imageBat = loadImage("images/scenery/bath.png");
  imageCharacter = loadImage("images/maincaracter/warior.png");
  imageBubble = loadImage("images/enemy/gotinha.png");
  imageTroll = loadImage("images/enemy/troll.png");
  imageFlyBubble = loadImage("images/enemy/gotinha-voadora.png");
  imageGameOver = loadImage("images/assets/game-over.png");
  imageInicialScreen = loadImage("images/scenery/inicialscreen.jpg");
  font = loadFont("images/assets/fonteTelaInicial.otf");
  imagePowerUp = loadImage("images/scenery/power.png");
  imageKnight = createImg(
    "images/maincaracter/animation.gif",
    "images/maincaracter/animation.gif",
  );
  imageKnight.hide();
}

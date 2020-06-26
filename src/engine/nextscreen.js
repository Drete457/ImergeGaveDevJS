class NextScreen extends AnimationDraw {
  constructor(
    image,
    inicialPositionX,
    inicialPositionY,
    characterWidth,
    characterHeight,
  ) {
    super(
      image,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeight,
    );
    this.showText = false;
    this.interval = 0;
  }

  animation() {
    fill(350);
    textSize(height / 8.15);
    this.showText ? text("WEDDING DUNGEONS", width / 2, height / 5.9) : null;

    textSize(height / 24.5);
    fill(350);

    text(this.lvlText(), width / 2, height / 1.8);

    if (this.showText) {
      this.showText = false;
      text(
        "PRESS BUTTON 'S' TO CONTINUE TO THE NEXT LEVEL",
        width / 2,
        height / 1.11,
      );
      this.show();
    } else {
      this.showText = true;
      fill(0);
      this.show();
    }
  }

  show() {
    noLoop();
    setTimeout(() => {
      loop();
    }, 500);
  }

  lvlText() {
    switch (lvl) {
      case 2:
        return "YOU MANAGED TO OVERCOME THE BEGINNING OF THE DUNGEON,\n NOW YOU ARE IN THE PART OF THE PRISON \n WHERE THE MOST DANGEROUS CRIMINALS IN THE KINGDOM WERE EXECUTED.";
        break;
      case 3:
        return "YOU REACHED THE OLD KING'S CAVE, \n CAN YOU ESCAPE?";
        break;
      case 4:
        return "WOW \n YOU COME TO THE ABANDAN FOREST, \n IF YOU REACH THE END OF IT YOU WILL \n FIND THE RIVER OF ETERNAL LIFE.\n CAN YOU GET THAT FAR?";
        break;
    }
  }
}

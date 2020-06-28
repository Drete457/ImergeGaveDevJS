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
    this.string;
  }

  animation() {

    bossFight ? this.string = "PRESS 'A' TO ATTACK \n PRESS BUTTON 'S' TO START THE LEVEL" : this.string = "PRESS BUTTON 'S' TO START THE GAME";
    
    fill(350);
    textSize(height / 8.15);
    this.showText ? text("WEDDING DUNGEONS", width / 2, height / 5.9) : null;

    textSize(height / 24.5);
    fill(350);

    text(this.lvlText(), width / 2, height / 1.8);

    if (this.showText) {
      this.showText = false;
      text(
        this.string,
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
      case 5:
        return "YOU'VE REACHED THE END OF THE DUNGEON. \n YOU'VE BEEN TO THIS DAY \n THE BRAVEST KNIGHT EVER BEEN HERE. \n LEGENDS TELL THAT THERE IS AN \n IMMORTAL SKELETON \n AND WHOEVER MANAGES TO KILL IT \n GAINS IS IMMORTALITY. \n ARE YOU GOING TO TRY YOUR LUCK ?"
        break;
    }
  }
}

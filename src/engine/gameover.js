class GameOver{

    constructor(image) {
        this.image = image;
      }
    
    draw() {  
        image(this.image, width / 3, height / 4, width / 3, height / 3);
    }
    
    animation() {
        textSize(40);
        fill(350);
        text("YOU COLLID WHIT AN ENEMY", width / 2, height / 1.7);
        text("YOU DIED", width / 2, height / 1.6);
        text("PRESS BUTTON 'R' TO RESTART THE GAME", width / 2, height / 1.4);
        gameRun = false; 
        noLoop();
    }
}
class GameOver{

    constructor(image) {
        this.image = image;
      }
    
    draw() {  
        image(this.image, width / 3, height / 4, width / 3, height / 3);
    }
    
    animation() {
        textSize(40);
        fill(190);
        text("YOU COLLID WHIT AN ENEMY", width / 2, height / 1.7);
        text("YOU DIED", width / 2, height / 1.6);
        text("PRESS BUTTON 'S' TO RESTART THE GAME", width / 2, height / 1.5);
        gameRun = false;          
    }
}
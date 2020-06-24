class Points {
    constructor() {
        this.points = 0;
    }

    draw() { 
        this.points += 0.03;
    }

    add() {
        this.points += 100;
    }
    
    animation() {
        textSize(100);
        fill(255);
        text(parseInt(this.points), width - width / 10, height / 10);
    }
}
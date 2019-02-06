var f;
var s;  // snake
var scl = 20;   // scale
var lose = false;

function setup() {  // must be created for p5.js
    createCanvas(600, 600);
    s = new Snake ();
    f = new Food ();
    frameRate(12);

}

function draw() {  // must be created for p5.js
    background(51);
    
    if(!lose){
        f.show();
        s.update();
        s.show(); 
    }
      
    if(s.collide()) {
        lose = true;
        s.dir(0, 0);
    }

    if(f.x === s.x && f.y === s.y){
        f.update();
        s.eat();
    }

    textAlign(LEFT);
    textSize(35);
    fill(255,50);
    noStroke();
    text('Score: ' + s.total, 30, 30);

}

function keyPressed() {
    if(!lose){    
        if (keyCode === UP_ARROW) {
            s.dir(0, -1);
        }
        else if (keyCode === DOWN_ARROW) {
            s.dir(0, 1);
        }
        else if (keyCode === LEFT_ARROW) {
            s.dir(-1, 0);
        }
        else if (keyCode === RIGHT_ARROW) {
            s.dir(1, 0);
        }
    }
    else{
        if (keyCode === 32) {
            s.reset();
            lose = false;
        }
    }
}

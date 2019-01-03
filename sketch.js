var f;
var s;  // snake
var scl = 20;   // scale

function setup() {  // must be created for p5.js
    createCanvas(600, 600);
    s = new Snake ();
    f = new Food ();
    frameRate(10);

}

function draw() {  // must be created for p5.js
    background(51);
    f.show();
    s.update();
    s.show();   
    if(f.x === s.x && f.y === s.y){
        f.update();
        s.eat();
    }
}

function keyPressed() {
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

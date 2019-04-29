var f;  // Food
var s;  // Snake
var traps = []; // Trap array
var scl = 20;   // scale used to create grid effect
var game_over = false   // track whether user has lost

function setup() {  // must be created for p5.js
    createCanvas(600, 600);
    s = new Snake ();
    f = new Food ();
    for(var i = 0; i < 10; i++){
        traps[i] = new Trap();

    }
    frameRate(10);

}

function draw() {  // must be created for p5.js
    background(51);
    
    // GAME NOT OVER
    if(game_over == false){
        if(f.x === s.x && f.y === s.y){     // If snake collides with food, snake eats food, update food location
            f.update();
            s.eat();
            for(var i = 0; i < 10; i++){
                traps[i].update();
            }    
        }

        f.show();   // Display food
        for(var i = 0; i < 10; i++){
            traps[i].show();
        }  
        s.update(); // Update Snake movement
        s.show();   // Display snake
    }


    // GAME OVER
    else{           // If game is over hide all
        f.hide();
        for(var i = 0; i < 10; i++){
            traps[i].hide();
        }
        s.hide();

    textAlign(CENTER);
    textSize(35);
    fill(198, 85, 181);
    noStroke();
    text('GAME OVER\nPRESS ENTER TO RESTART', 300, 300);
    }

    

    for(var i = 0; i < 10; i++){        // Check if snake has hit traps
        
        if(traps[i].x === s.x && traps[i].y === s.y){
            game_over = true;
        }
    }

    textAlign(LEFT);
    textSize(35);
    fill(255,50);
    noStroke();
    text('Score: ' + s.total, 30, 30);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {     // Move snake upwards
        s.dir(0, -1);
    }
    else if (keyCode === DOWN_ARROW) {      // Move snake downwards
        s.dir(0, 1);
    }
    else if (keyCode === LEFT_ARROW) {      // Move snake to the left
        s.dir(-1, 0);
    }
    else if (keyCode === RIGHT_ARROW) {     // Move snake to the right
        s.dir(1, 0);
    }
}

function keyTyped() {
    if(keycode === ENTER) {
        s.reset();
        f.update();
        game_over = false;
    }
}
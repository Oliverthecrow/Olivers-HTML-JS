let SquareX;
let SquareY;
let xSpeed = 0;
let ySpeed = 0;
let Squaresize = 30;

let Wheld = false;
let Sheld = false;
let Dheld = false;
let Aheld = false;

let Tutorial = true;
let nextlevel;
let level = 0;

let pelletX = 100;
let pelletY = 100;
let pelletsize = 15;
let pelletX2;
let pelletY2;
let pelletspeed = 1;

let goalx = window.innerWidth * 0.15
let goaly = window.innerHeight * 0.65
let goalwidth = 100
let goalheight = 200

let deathx = window.innerWidth * 0.85
let deathy = window.innerHeight * 0.25
let deathwidth = 200
let deathheight = 400
let deathxspeed = 5;
let deathyspeed = 5;

let insecondbox = false;

let gameover = false;

let setspawn = false;

let hittop = false;
let hitbottom = false;
let hitright = false;
let hitleft = false;

let borderx;
let bordery;
let borderwidth;
let borderheight;
let borderx2;
let bordery2;
let borderwidth2;
let borderheight2;

let circlex;
let circley;
let radius;

let incircle;
let testX;
let testY;
let distX;
let distY;

let timer;

let lever;
let leverx;
let levery;
let leversize;

let endscreen = false;

let restarttimer;
let restart = false;
let restartheld;

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("WorldsHardestGameCanvas");

    SquareX = window.innerWidth / 2;
    SquareY = window.innerHeight / 2;

    textSize(20)
    textAlign(CENTER)
}
function draw() {
    if (!endscreen) { timer = millis(); background(30); }

    scene(); //draws the map
    movement(); //calculates movement for different things
    hitbox(); //calculates when the player is interacting with certain things
    updateUI(); //HTML and CSS for beating the game
    restarting(); //to run the game again

    stroke(0)
    strokeWeight(0.5)
    fill(255)
    if (!endscreen) { square(SquareX, SquareY, Squaresize) }
}
function restarting() {
    if (restart) {
        Tutorial = false;
        level = 1;
        timer = 0;
        endscreen = false
        resetvariables()
    }
}
function keyPressed() {
    if (!gameover) {
        if (key === "w" || key === "W") {
            Wheld = true
        }
        if (key === "d" || key === "D") {
            Dheld = true;
        }
        if (key === "S" || key === "s") {
            Sheld = true;
        }
        if (key === "A" || key === "a") {
            Aheld = true;
        }
        if (key === "r" || key === "R") {
            restart = true;
        }
        else if (key === "n" || key === "N") {
            nextlevel = true;
        }
    }
    if (gameover) {
        if (key === " ") {
            gameover = false;
            setspawn = false;
            lever = false;
        }
    }
    //this stops the spacebar from moving the page down
    return !(key = " ")
}
function keyReleased() {
    if (key === "W" || key === "w") {
        Wheld = false;
        ySpeed = 0;
    }
    if (key === "S" || key === "s") {
        Sheld = false;
        ySpeed = 0;
    }
    if (key === "D" || key === "d") {
        Dheld = false;
        xSpeed = 0;
    }
    if (key === "A" || key === "a") {
        Aheld = false;
        xSpeed = 0;
    }
}
function movement() {
    //movement for player
    if (!gameover) {
        if (Wheld) { ySpeed = -3 }
        if (Sheld) { ySpeed = 3 }
        if (Dheld) { xSpeed = 3 }
        if (Aheld) { xSpeed = -3 }

        SquareX += xSpeed
        SquareY += ySpeed

        //pellet will slowly move towards player unless on stage 5
        if (level != 5) {
            if (pelletX > SquareX + Squaresize / 2) { pelletX -= pelletspeed }
            if (pelletX < SquareX + Squaresize / 2) { pelletX += pelletspeed }
            if (pelletY > SquareY + Squaresize / 2) { pelletY -= pelletspeed }
            if (pelletY < SquareY + Squaresize / 2) { pelletY += pelletspeed }

            if (pelletX2 > SquareX + Squaresize / 2) { pelletX2 -= pelletspeed }
            if (pelletX2 < SquareX + Squaresize / 2) { pelletX2 += pelletspeed }
            if (pelletY2 > SquareY + Squaresize / 2) { pelletY2 -= pelletspeed }
            if (pelletY2 < SquareY + Squaresize / 2) { pelletY2 += pelletspeed }
        }
        //for level 5 pellet bouncing in borders
        if (level === 5) {
            if (pellethitleft) { pelletX += pelletspeed }
            if (pellet2hitright) { pelletX2 -= pelletspeed }
            if (!pellethitleft) { pelletX -= pelletspeed }
            if (!pellet2hitright) { pelletX2 += pelletspeed }

            if (pelletX - pelletsize <= borderx) { pellethitleft = true }
            if (pelletX + pelletsize >= borderx + borderwidth) { pellethitleft = false }
            if (pelletX2 + pelletsize >= borderx + borderwidth) { pellet2hitright = true }
            if (pelletX2 - pelletsize <= borderx) { pellet2hitright = false; }
        }

        // when the death hits the border, it will go in the opposite direction until it hits the opposite border
        if (hitbottom) { deathy -= deathyspeed; }
        if (hittop) { deathy += deathyspeed; }
        if (hitleft) { deathx += deathxspeed; }
        if (hitright) { deathx -= deathxspeed; }

        if (level === 1) {
            if (deathy + deathheight > window.innerHeight) { hitbottom = true; hittop = false; }
            if (deathy < 0) { hittop = true; hitbottom = false; }
        }

        if (level === 2) {
            if (deathx + deathwidth > window.innerWidth) { hitright = true; hitleft = false; }
            if (deathx < 0) { hitleft = true; hitright = false; }

            if (deathxspeed <= 15) {
                if (deathx + deathwidth > window.innerWidth * 0.6) { deathxspeed -= 0.03 }
                else if (deathx > window.innerWidth * 0.1) { deathxspeed += 0.05 }
            }
        }

        if (level === 3) {
            deathyspeed += 0.003
        }
        if (level === 4) {
            deathyspeed += 0.01
        }
    }
}

function scene() {
    if (nextlevel) {
        Tutorial = false;
        level += 1;
        nextlevel = false;
        setspawn = false;
    }
    if (Tutorial) {
        text("Use WASD to move around", window.innerWidth / 2, 100)
        text("N to skip level", window.innerWidth / 2, 150)

        fill(255, 0, 0)
        text("Touching red kills you", window.innerWidth * 0.9, window.innerHeight * 0.23)
        rect(deathx, deathy, deathwidth, deathheight)

        fill(0, 0, 255)
        textSize(14)
        text("Blue will follow you and kill you if it touches you", pelletX, pelletY - 30)
        circle(pelletX, pelletY, pelletsize)

        textSize(20)
        fill(0, 255, 0)
        text("Touch green box to go to next level", window.innerWidth * 0.175, window.innerHeight * 0.9)
        rect(goalx, goaly, goalwidth, goalheight)

        //the variables for where everything is in specified level
        if (!setspawn) {
            SquareX = window.innerWidth / 2
            SquareY = window.innerHeight / 2
            pelletX = 100;
            pelletY = 100;
            goalx = window.innerWidth * 0.15
            goaly = window.innerHeight * 0.65
            deathx = window.innerWidth * 0.85
            deathy = window.innerHeight * 0.25

            hitright = false;
            hitbottom = false;
            hittop = false;
            hitleft = false;
        }
        setspawn = true
    }
    if (level === 1) {
        stroke(0)
        strokeWeight(0.5)
        fill(200)
        circle(circlex, circley, radius)
        rect(borderx, bordery, borderwidth, borderheight)

        fill(255, 0, 0)
        rect(deathx, deathy, deathwidth, deathheight)

        fill(0, 0, 255)
        circle(pelletX, pelletY, pelletsize)
        fill(0, 255, 0)
        rect(goalx, goaly, goalwidth, goalheight)

        //the variables for where everything is in specified level
        if (!setspawn) {
            SquareX = window.innerWidth * 0.15
            SquareY = window.innerHeight * 0.5
            goalx = window.innerWidth * 0.85
            goaly = window.innerHeight * 0.1
            deathx = window.innerWidth * 0.5
            deathy = -1
            pelletX = window.innerWidth * 0.05;
            pelletY = window.innerHeight * 0.5;
            borderx = 0
            bordery = window.innerHeight * 0.35
            borderwidth = window.innerWidth
            borderheight = window.innerHeight * 0.35
            circlex = goalx + goalwidth / 2
            circley = goaly + goalheight / 2
            radius = 175
        }
        setspawn = true
    }
    if (level === 2) {
        stroke(0)
        strokeWeight(0.5)
        fill(200)
        rect(borderx, bordery, borderwidth, borderheight)
        circle(circlex, circley, radius)

        fill(255, 0, 0)
        rect(deathx, deathy, deathwidth, deathheight)

        fill(0, 0, 255)
        circle(pelletX, pelletY, pelletsize)
        fill(0, 0, 255)
        circle(pelletX2, pelletY2, pelletsize)
        fill(0, 255, 0)
        rect(goalx, goaly, goalwidth, goalheight)

        //the variables for where everything is in specified level
        if (!setspawn) {
            SquareX = window.innerWidth * 0.45
            SquareY = window.innerHeight * 0.9
            goalx = window.innerWidth * 0.15
            goaly = window.innerHeight * 0.20
            deathx = window.innerWidth * 0.5 - deathwidth
            deathy = window.innerHeight * 0.5
            deathwidth = window.innerWidth * 0.3
            deathheight = window.innerHeight * 0.2
            pelletX = window.innerWidth * 0.95;
            pelletY = window.innerHeight * 0.95;
            pelletX2 = window.innerWidth * 0.05
            pelletY2 = window.innerHeight * 0.95
            borderx = window.innerWidth * 0.3
            bordery = window.innerHeight * 0.4
            borderwidth = window.innerWidth * 0.3
            borderheight = window.innerHeight * 0.6
            circlex = goalx + goalwidth / 2
            circley = goaly + goalheight / 2
            radius = 300

            deathxspeed = 7.5;
            deathyspeed = 0;
            pelletspeed = 1.5;
            hitright = true;
            hitbottom = false;
            hittop = false;
            hitleft = false;
        }
        setspawn = true
    }
    if (level === 3) {
        stroke(0)
        strokeWeight(0.5)
        fill(200)
        rect(borderx, bordery, borderwidth, borderheight)
        circle(circlex, circley, radius)

        fill(255, 0, 0)
        rect(deathx, deathy, deathwidth, deathheight)

        fill(0, 0, 255)
        circle(pelletX, pelletY, pelletsize)
        fill(0, 0, 255)
        circle(pelletX2, pelletY2, pelletsize)
        fill(0, 255, 0)
        rect(goalx, goaly, goalwidth, goalheight)

        //the variables for where everything is in specified level
        if (!setspawn) {
            SquareX = window.innerWidth * 0.5 - Squaresize / 2
            SquareY = window.innerHeight * 0.7
            goalx = window.innerWidth * 0.5 - goalwidth / 2
            goaly = window.innerHeight * 0.1
            deathwidth = window.innerWidth * 0.325
            deathheight = window.innerHeight * 0.2
            deathx = window.innerWidth * 0.5 - deathwidth / 2
            deathy = window.innerHeight * 0.5 - deathheight / 2
            pelletX = window.innerWidth * 0.85;
            pelletY = window.innerHeight * 0.5;
            pelletX2 = window.innerWidth * 0.15
            pelletY2 = window.innerHeight * 0.5
            borderx = window.innerWidth * 0.3
            bordery = window.innerHeight * 0.3
            borderwidth = window.innerWidth * 0.4
            borderheight = window.innerHeight * 0.6
            circlex = goalx + goalwidth / 2
            circley = goaly + goalheight / 2
            radius = 150

            deathxspeed = 0;
            deathyspeed = 0.02;
            pelletspeed = 1.5;
            hitright = false;
            hitbottom = false;
            hittop = true;
            hitleft = false;
        }
        setspawn = true;
    }
    if (level === 4) {
        stroke(0)
        strokeWeight(0.5)
        fill(200)
        rect(borderx, bordery, borderwidth, borderheight)
        rect(borderx2, bordery2, borderwidth2, borderheight2)
        circle(circlex, circley, radius)

        if (lever && borderwidth2 <= window.innerWidth * 0.55) { borderwidth2 += 1.5; borderheight2 -= 0.5 }

        fill(100)
        square(leverx, levery, leversize)

        fill(255, 0, 0)
        rect(deathx, deathy, deathwidth, deathheight)

        fill(0, 0, 255)
        circle(pelletX, pelletY, pelletsize)
        circle(pelletX2, pelletY2, pelletsize)

        fill(0, 255, 0)
        rect(goalx, goaly, goalwidth, goalheight)

        //the variables for where everything is in specified level
        if (!setspawn) {
            SquareX = window.innerWidth * 0.1 - Squaresize / 2;
            SquareY = window.innerHeight * 0.65;
            goalx = window.innerWidth * 0.6 - goalwidth / 2;
            goaly = window.innerHeight * 0.1;
            goalwidth = window.innerWidth * 0.2;
            goalheight = window.innerHeight * 0.15;
            deathwidth = window.innerWidth;
            deathheight = window.innerHeight * 0.02;
            deathx = 0;
            deathy = window.innerHeight * 0.99;
            pelletX = window.innerWidth * 0.9;
            pelletY = window.innerHeight * 0.1;
            pelletX2 = window.innerWidth * 0.1;
            pelletY2 = window.innerHeight * 0.1;
            borderx = window.innerWidth * 0.05;
            bordery = window.innerHeight * 0.5;
            borderwidth = window.innerWidth * 0.4;
            borderheight = window.innerHeight * 0.3;
            borderx2 = window.innerWidth * 0.25;
            bordery2 = window.innerHeight * 0.1;
            borderwidth2 = window.innerWidth * 0.2;
            borderheight2 = window.innerHeight * 0.5;
            circlex = goalx + goalwidth / 2;
            circley = goaly + goalheight / 2;
            radius = 225;
            leverx = window.innerWidth * 0.055
            levery = window.innerHeight * 0.51
            leversize = 25;

            deathxspeed = 0;
            deathyspeed = 0.02;
            pelletspeed = 1.5;
            hitright = false;
            hitbottom = true;
            hittop = false;
            hitleft = false;
        }
        setspawn = true;
    }
    if (level === 5) {
        stroke(0)
        strokeWeight(0.5)
        fill(200)
        rect(borderx2, bordery2, borderwidth2, borderheight2)
        rect(borderx, bordery, borderwidth, borderheight)
        circle(circlex, circley, radius)

        fill(0, 255, 0)
        rect(goalx, goaly, goalwidth, goalheight)

        fill(255, 0, 0)
        circle(pelletX, pelletY, pelletsize)
        circle(pelletX, pelletY - 100, pelletsize)
        circle(pelletX, pelletY - 200, pelletsize)
        circle(pelletX, pelletY - 300, pelletsize)
        circle(pelletX, pelletY - 400, pelletsize)
        circle(pelletX, pelletY - 500, pelletsize)
        circle(pelletX, pelletY - 600, pelletsize)
        circle(pelletX2, pelletY2, pelletsize)
        circle(pelletX2, pelletY2 - 100, pelletsize)
        circle(pelletX2, pelletY2 - 200, pelletsize)
        circle(pelletX2, pelletY2 - 300, pelletsize)
        circle(pelletX2, pelletY2 - 400, pelletsize)
        circle(pelletX2, pelletY2 - 500, pelletsize)
        circle(pelletX2, pelletY2 - 600, pelletsize)

        //the variables for where everything is in specified level
        if (!setspawn) {
            SquareX = window.innerWidth * 0.5 - Squaresize / 2;
            SquareY = window.innerHeight * 0.95;
            goaly = window.innerHeight * 0.075;
            goalwidth = window.innerWidth * 0.15;
            goalx = window.innerWidth * 0.5 - (goalwidth / 2);
            goalheight = window.innerHeight * 0.1;
            pelletX = window.innerWidth * 0.3;
            pelletY = window.innerHeight * 0.9;
            pelletX2 = window.innerWidth * 0.7;
            pelletY2 = window.innerHeight * 0.85;
            borderx = window.innerWidth * 0.3;
            bordery = window.innerHeight * 0.2;
            borderwidth = window.innerWidth * 0.4;
            borderheight = window.innerHeight * 0.8;
            bordery2 = window.innerHeight * 0.05;
            borderwidth2 = window.innerWidth * 0.2;
            borderheight2 = window.innerHeight * 0.25;
            borderx2 = window.innerWidth * 0.5 - borderwidth2 / 2;
            circlex = goalx + goalwidth / 2;
            circley = goaly + goalheight / 2;
            radius = 0;
            deathy = -100

            deathxspeed = 0;
            deathyspeed = 0.02;
            pelletspeed = 7;
            hitright = false;
            hitbottom = false;
            hittop = false;
            hitleft = false;

            pellethitleft = true
            pellet2hitright = true
        }
        setspawn = true;
    }
    //simple game over screen
    if (gameover) {
        fill(255);
        text("Game Over", window.innerWidth / 2, window.innerHeight / 2);
        text("Press space to restart", window.innerWidth / 2, window.innerHeight * 0.55);
    }
    //spawn square at bottom for endscreen
    if (level >= 6) { if (!setspawn) { SquareX = window.innerWidth * 0.5 - (Squaresize / 2); SquareY = window.innerHeight * 0.95; } setspawn = true; }
}
function hitbox() {
    if (Tutorial || level === 1 || level === 2 || level === 3 || level === 4 || level === 5) {
        //these are gameover hitboxes where you will die if you touch red, or get hit by a pellet
        if (SquareX + Squaresize > deathx && SquareX < deathx + deathwidth && SquareY + Squaresize > deathy && SquareY < deathy + deathheight) {
            gameover = true
        }
        if (SquareX < pelletX + pelletsize / 2 && SquareX + Squaresize > pelletX - pelletsize / 2 && SquareY < pelletY + pelletsize / 2 && SquareY + Squaresize > pelletY - pelletsize / 2) {
            gameover = true;
        }
        if (SquareX < pelletX2 + pelletsize / 2 && SquareX + Squaresize > pelletX2 - pelletsize / 2 && SquareY < pelletY2 + pelletsize / 2 && SquareY + Squaresize > pelletY2 - pelletsize / 2) {
            gameover = true;
        }
        if (SquareX > goalx && SquareX < goalx + goalwidth && SquareY + Squaresize > goaly && SquareY + Squaresize < goaly + goalheight) {
            nextlevel = true; if (level === 5) { endscreen = true; }
        }
        //to check if you are inside of the circle around the goal to say that you should not be killed since you are outside of the main border
        if (circlex > SquareX) testX = SquareX;
        else if (circlex < SquareX + Squaresize) testX = SquareX + Squaresize;
        if (circley < SquareY) testY = SquareY;
        else if (circley > SquareY + Squaresize) testY = SquareY + Squaresize;
        distX = circlex - testX;
        distY = circley - testY;
        distance = Math.sqrt((distX * distX) + (distY * distY));
        if (distance <= radius) {
            incircle = true;
        }
        else { incircle = false; }
        //normal border to see if you are in bounds of level
        if (SquareX < borderx || SquareX + Squaresize > borderx + borderwidth || SquareY + Squaresize > bordery + borderheight || SquareY < bordery) {
            if (!incircle && !insecondbox) { gameover = true; }
        }
        if (SquareX > borderx2 && SquareX + Squaresize < borderx2 + borderwidth2 && SquareY > bordery2 && SquareY + Squaresize < bordery2 + borderheight2) {
            insecondbox = true;
        }
        else { insecondbox = false; }
        //hitbox for lever
        if (SquareX + Squaresize > leverx && SquareX < leverx + leversize && SquareY + Squaresize > levery && SquareY < levery + leversize) {
            lever = true
        }

        //bunch of hitboxes for pellets on final level
        if (level === 5) {
            if (SquareX < pelletX + pelletsize && SquareX + Squaresize > pelletX - pelletsize && SquareY + Squaresize > pelletY - pelletsize - 100 && SquareY < pelletY + pelletsize - 100) {
                gameover = true;
            }
            if (SquareX < pelletX + pelletsize && SquareX + Squaresize > pelletX - pelletsize && SquareY + Squaresize > pelletY - pelletsize - 200 && SquareY < pelletY + pelletsize - 200) {
                gameover = true;
            }
            if (SquareX < pelletX + pelletsize && SquareX + Squaresize > pelletX - pelletsize && SquareY + Squaresize > pelletY - pelletsize - 300 && SquareY < pelletY + pelletsize - 300) {
                gameover = true;
            }
            if (SquareX < pelletX + pelletsize && SquareX + Squaresize > pelletX - pelletsize && SquareY + Squaresize > pelletY - pelletsize - 400 && SquareY < pelletY + pelletsize - 400) {
                gameover = true;
            }
            if (SquareX < pelletX + pelletsize && SquareX + Squaresize > pelletX - pelletsize && SquareY + Squaresize > pelletY - pelletsize - 500 && SquareY < pelletY + pelletsize - 500) {
                gameover = true;
            }
            if (SquareX < pelletX + pelletsize && SquareX + Squaresize > pelletX - pelletsize && SquareY + Squaresize > pelletY - pelletsize - 600 && SquareY < pelletY + pelletsize - 600) {
                gameover = true;
            }
            if (SquareX < pelletX2 + pelletsize && SquareX + Squaresize < pelletX2 - pelletsize && SquareY + Squaresize > pelletY2 - pelletsize - 100 && SquareY < pelletY2 + pelletsize - 100) {
                gameover = true;
            }
            if (SquareX < pelletX2 + pelletsize && SquareX + Squaresize < pelletX2 - pelletsize && SquareY + Squaresize > pelletY2 - pelletsize - 200 && SquareY < pelletY2 + pelletsize - 200) {
                gameover = true;
            }
            if (SquareX < pelletX2 + pelletsize && SquareX + Squaresize < pelletX2 - pelletsize && SquareY + Squaresize > pelletY2 - pelletsize - 300 && SquareY < pelletY2 + pelletsize - 300) {
                gameover = true;
            }
            if (SquareX < pelletX2 + pelletsize && SquareX + Squaresize < pelletX2 - pelletsize && SquareY + Squaresize > pelletY2 - pelletsize - 400 && SquareY < pelletY2 + pelletsize - 400) {
                gameover = true;
            }
            if (SquareX < pelletX2 + pelletsize && SquareX + Squaresize < pelletX2 - pelletsize && SquareY + Squaresize > pelletY2 - pelletsize - 500 && SquareY < pelletY2 + pelletsize - 500) {
                gameover = true;
            }
            if (SquareX < pelletX2 + pelletsize && SquareX + Squaresize < pelletX2 - pelletsize && SquareY + Squaresize > pelletY2 - pelletsize - 600 && SquareY < pelletY2 + pelletsize - 600) {
                gameover = true;
            }
        }
    }
}
function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
// displays the endscreen html, congratulating user, only when the level is beyond level 6
function updateUI() {
    if (level >= 6) { endscreen = true; }

    TimeElapsed = timer / 1000;
    if (endscreen) {
        document.getElementById("endscreen").style.display = 'block';
        document.getElementById("WorldsHardestGameCanvas").style.display = "none";
    } else {
        document.getElementById("endscreen").style.display = 'none';
        document.getElementById("WorldsHardestGameCanvas").style.display = "block";
    }
    document.getElementById('TimeElapsed').textContent = TimeElapsed;
}
function resetvariables() {
    restart = false;
    gameover = false;
    setspawn = false;
    endscreen = false;
    level = 1;
    deathwidth = 200
    deathheight = 400
    pelletspeed = 1;
    pelletX = 100;
    pelletY = 100;
    pelletsize = 15;
    pelletspeed = 1;
    pelletX2 = 10000000
    pelletY2 = 100000000
    goalx = window.innerWidth * 0.15
    goaly = window.innerHeight * 0.65
    goalwidth = 100
    goalheight = 200
    deathx = window.innerWidth * 0.85
    deathy = window.innerHeight * 0.25
    deathwidth = 200
    deathheight = 400
    deathxspeed = 5;
    deathyspeed = 5;
    insecondbox = false;
    hittop = false;
    hitbottom = false;
    hitright = false;
    hitleft = false;
    Wheld = false;
    Sheld = false;
    Dheld = false;
    Aheld = false;
}

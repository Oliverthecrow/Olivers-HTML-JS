let squareX;
let squareY;

let moveleft = false;
let moveup = false;
let moveright = false;
let movedown = false;

let brake = false;

let speedboost = 0;

let squarespeed = 0;
let SpeedPerSecond = 0;

let vy = 0;
let vx = 0;
let squareVX = 0;
let squareVY = 0;

let timer;
let timerId;
let TimerOn = false;

let squaresize = 20;

let Colors;
let selected_color = 0;

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight)
    sketch.parent("SquareMoveCanvas")
    squareX = window.innerWidth / 2;
    squareY = window.innerHeight / 2;
    textAlign(CENTER);

    Colors = [
        color(255,), //white
        color(255, 153, 204), //pink
        color(255, 0, 0), //red
        color(0, 255, 0), //lime
        color(0, 0, 255), //blue
        color(10, 156, 10), //green
        color(80), //black
        color(255, 255, 100), //yellow
        color(255, 141, 28), //orange
        color(120, 61, 210), //purple
        color(128, 88, 45), //brown
        color(68, 255, 247), //cyan
    ];
}
function draw() { //--------------------------------------- Start of Draw ----------------------------------------------- //
    timer=millis();
    background(10);

    fill(Colors[selected_color]);
    square(squareX, squareY, squaresize);

    movement();
    bounds();
    speed();

    fill(255);
    textSize(30);
    text("Your current speed: " + SpeedPerSecond + "px/s", window.innerWidth / 2, window.innerHeight - 100);
    text("Current speedboost: " + Math.round(100 * speedboost) / 100, window.innerWidth / 2, window.innerHeight - 60);
    text("To increase speed boost click P", window.innerWidth / 2, window.innerHeight - 20);

    fill(250, 150, 150);
    rect(0, 0, window.innerWidth, 40);
    fill(0);
    if (squareY < 40) {
        text("ENTERING ENEMY TERRITORY, CAUTION ADVISED.", window.innerWidth / 2, 30);
    }
} //--------------------------------------------------------------------------- End of Draw ---------------------------------------//
function keyPressed() {
    if (key === "a" || key === "A") {
        moveleft = true;
    }
    if (key === "d" || key === "D") {
        moveright = true;
    }
    if (key === "w" || key === "W") {
        moveup = true;
    }
    if (key === "s" || key === "S") {
        movedown = true;
    }
    if (key === " ") {
        brake = true;
        squarespeed = 0;
    }
    if (key === "p") {
        speedboost += 0.05;
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(speedtimer, 5000);
    }
}
function keyReleased() {
    if (key === "a" || key === "A") {
        moveleft = false;
        vx = 0;
        squareVX = 0;
    }
    if (key === "d" || key === "D") {
        moveright = false;
        vx = 0;
        squareVX = 0;
    }
    if (key === "w" || key === "W") {
        moveup = false;
        vy = 0;
        squareVY = 0;
    }
    if (key === "s" || key === "S") {
        movedown = false;
        vy = 0;
        squareVY = 0;
    }
    if (key === " ") {
        brake = false;
    }
}
function movement() {
    if (!brake) {
        if (moveleft === true) {
            vx -= 0.1 + speedboost;
            squareVX = 3 - vx * 0.3;
            squareX -= squareVX;
        }
        if (moveright === true) {
            vx += 0.1 + speedboost;
            squareVX = 3 + vx * 0.3;
            squareX += squareVX;
        }
        if (moveup === true) {
            vy -= 0.1 + speedboost;
            squareVY = 3 - vy * 0.3;
            squareY -= squareVY;
        }
        if (movedown === true) {
            vy += 0.1 + speedboost;
            squareVY = 3 + vy * 0.3;
            squareY += squareVY;
        }
    }
}
function bounds() {
    if (squareX < -20) {
        squareX = window.innerWidth - 20;
        selected_color++;
    }
    if (squareX > window.innerWidth - 20) {
        squareX = -20;
        selected_color++;
    }
    if (squareY > window.innerHeight - 20) {
        squareY = -20
        selected_color++;
    }
    if (squareY < -20) {
        squareY = window.innerHeight - 20
        selected_color++;
    }
    if (selected_color >= Colors.length) {
        selected_color = 0;
    }
}
//speedboost resets after 5 seconds of clicking p, but timer resets on clicking p as well
function speedtimer() {
    speedboost = 0;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//slows down math so that the number is actually readable on screen
function speed() {
    if (timer % 0.5 === 0) {
    squarespeed = Math.sqrt(Math.pow(Math.abs(squareVX), 2) + Math.pow(Math.abs(squareVY), 2));
    SpeedPerSecond = Math.round(1000 * squarespeed * 60) / 1000;
    }
}

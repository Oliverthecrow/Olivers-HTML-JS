let squareX;
let squareY;

let moveleft = false;
let moveup = false;
let moveright = false;
let movedown = false;

let brake = false;

let speedboost = 0;
let squarespeed = 0;
let Rsquarspeed = 0;
let vy = 0;
let vx = 0;

let timer;
let timerId;
let TimerOn = false;

let squaresize = 20;

let Colors;
let selected_color = 0;

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight)
    sketch.parent("SquareMoveCanvas")
    squareX = window.innerWidth / 2
    squareY = window.innerHeight / 2
    textAlign(CENTER)

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
    background(10)

    if (selected_color >= Colors.length) {
        selected_color = 0;
    }
    fill(Colors[selected_color])
    square(squareX, squareY, squaresize);

    movement();
    bounds();

    fill(255)
    textSize(30)
    text("Your current speed: " + Rsquarspeed, window.innerWidth / 2, window.innerHeight - 100)
    text("Current speedboost: " + Math.round(100 * speedboost) / 100, window.innerWidth / 2, window.innerHeight - 60)
    text("To increase speed boost click P, to lower it click -", window.innerWidth / 2, window.innerHeight - 20)

    fill(250, 150, 150)
    rect(0, 0, window.innerWidth, 40)
    fill(0)
    if (squareY < 40) {
        text("ENTERING ENEMY TERRITORY, CAUTION ADVISED.", window.innerWidth / 2, 30)
    }

    squarespeed = Math.sqrt(Math.pow(Math.abs(vy), 2) + Math.pow(Math.abs(vx), 2));
    Rsquarspeed = Math.round(1000 * squarespeed) / 1000;
} //--------------------------------------------------------------------------- End of Draw ---------------------------------------//
function keyPressed() {
    if (key === "a") {
        moveleft = true
    }
    if (key === "d") {
        moveright = true
    }
    if (key === "w") {
        moveup = true
    }
    if (key === "s") {
        movedown = true
    }
    if (key === " ") {
        brake = true
        squarespeed = 0
    }
    if (key === "p") {
        speedboost += 0.05
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(speedtimer, 5000);
    }
}
function keyReleased() {
    if (key === "a") {
        moveleft = false
        vx = 0
    }
    if (key === "d") {
        moveright = false
        vx = 0
    }
    if (key === "w") {
        moveup = false
        vy = 0
    }
    if (key === "s") {
        movedown = false
        vy = 0
    }
    if (key === " ") {
        brake = false
    }
}
function movement() {
    if (!brake) {
        if (moveleft === true) {
            vx -= 0.1 + speedboost
            squareX -= 3 - vx * 0.3
        }
        if (moveright === true) {
            vx += 0.1 + speedboost
            squareX += 3 + vx * 0.3
        }
        if (moveup === true) {
            vy -= 0.1 + speedboost
            squareY -= 3 - vy * 0.3
        }
        if (movedown === true) {
            vy += 0.1 + speedboost
            squareY += 3 + vy * 0.3
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
}
//speedboost resets after 5 seconds of clicking p
function speedtimer() {
    speedboost = 0;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

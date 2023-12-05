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
let vy;
let vx;

let timer;
let timerId;
let TimerOn = false;

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight)
    sketch.parent("SquareMoveCanvas")
    squareX = window.innerWidth / 2
    squareY = window.innerHeight / 2
    textAlign(CENTER)
}
function draw() { //--------------------------------------- Start of Draw ----------------------------------------------- //
    background(10)

    fill(255)
    square(squareX, squareY, 20)

    movement();
    bounds();


    textSize(30)
    text("Your current speed: " + Rsquarspeed, window.innerWidth / 2, window.innerHeight - 20)
    text("Current speedboost: " + speedboost, window.innerWidth / 2, window.innerHeight - 60)
    text("To increase speed boost click P, to lower it click -", window.innerWidth / 2, -100)

    fill(250, 150, 150)
    rect(0, 0, window.innerWidth, 40)
    fill(0)
    text("ENTERING ENEMY TERRITORY, CAUTION ADVISED.", window.innerWidth / 2, 30)

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
    }
    if (key === "p") {
        speedboost += 0.5
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
        squarespeed = 0
    }
}
function movement() {
    if (!brake) {
        if (moveleft === true) {
            squareX -= 5 + speedboost
            vx = -5 - speedboost
        }
        if (moveright === true) {
            squareX += 5 + speedboost
            vx = 5 + speedboost
        }
        if (moveup === true) {
            squareY -= 5 + speedboost
            vy = -5 - speedboost
        }
        if (movedown === true) {
            squareY += 5 + speedboost
            vy = 5 + speedboost
        }
    }
}
function bounds() {
    if (squareX < -20) {
        squareX = window.innerWidth - 20
    }
    if (squareX > window.innerWidth - 20) {
        squareX = -20
    }
    if (squareY > window.innerHeight - 20) {
        squareY = -20
    }
    if (squareY < -20) {
        squareY = window.innerHeight - 20
    }
}
//speedboost resets after 5 seconds of clicking p
function speedtimer() {
    speedboost = 0;
}

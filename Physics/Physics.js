let mouseheld = false;
let skuna;
let shape;
let actionMade = false;
let lineXlength = 0;
let lineYlength = 0;
let gravity = 0.5;
let launchspeed = 0.05;
let friction = 0.005;
let ball = {
    X: 900,
    Y: 475,
    radius: 50,
    vx: 0,
    vy: 0,
}
function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("PhysicsCanvas");
    strokeWeight(0.5)
    stroke(255);
}
function preload() {
    skuna = loadImage("terror.png");
}
function draw() {
    background(5);
    image(skuna, ball.X - ball.radius, ball.Y - ball.radius, 100, 100)
    if (actionMade && !mouseheld) {
        ball.vy += gravity;
        if(ball.vx > 0) {
            ball.vx -= friction
        }
        if (ball.vx < 0) {
            ball.vx += friction
        }
    }
    ball.Y += ball.vy;
    ball.X += ball.vx;
    bounds()
    if (mouseheld) {
        line(ball.X, ball.Y, mouseX, mouseY);
    }
    textSize(18);
    fill(130, 200, 255);
    text("Physics Simulation", 5, 100);
    text("Click and drag the fact to launch it.", 5, 140)
    text("Click + or - to respectively change gravity.", 5, 180)
    text("Click S to increase speed from launch, click L to lower speed. Click W for warp speed", 5, 260)
    text("Click F to increase friction and f to lower it",5,340)
    text("Click R to reset everything back to normal", 5, 420)

    textSize(22)
    text("Gravity: " + Math.round(1000 * gravity) / 1000 + ".", 5, 220)
    text("Speed: " + Math.round(1000 * launchspeed) / 1000 + ".",5, 300)
    text("Friction: " + Math.round(1000* friction) / 1000 + ".",5,380)
}
function incircle() {
    if (mouseX < ball.X - 50 || mouseX > ball.X + 50) {
        return false;
    }
    if (mouseY < ball.Y - 50 || mouseY > ball.Y + 50) {
        return false;
    }
    return true;
}
function bounds() {
    if (ball.Y > window.innerHeight - ball.radius) {
        ball.Y -= ball.vy;
        ball.vy *= -0.75;
    }
    if (ball.X > window.innerWidth - ball.radius) {
        ball.X -= ball.vx;
        ball.vx *= -0.75;
    }
    if (ball.X < 0 + ball.radius) {
        ball.X -= ball.vx;
        ball.vx *= -0.75;
    }
    if (ball.Y < 0 + ball.radius) {
        ball.Y -= ball.vy;
        ball.vy *= -0.75;
    }
}
function mousePressed() {
    if (incircle()) {
        mouseheld = true;
        ball.vx = 0;
        ball.vy = 0;
    }
}
function mouseReleased() {
    if (mouseheld) {
        lineXlength = mouseX - ball.X
        lineYlength = mouseY - ball.Y
        mouseheld = false;
        actionMade = true
        ball.vx += lineXlength * launchspeed
        ball.vy += lineYlength * launchspeed
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
    if (key === "+" || key === "=") {
        gravity += 0.1
    }
    else if (key === "-" || key === "_") {
        gravity -= 0.1
    }
    else if (key === "s" || key === "S") {
        launchspeed += 0.01
    }
    else if (key === "l" || key === "L") {
        launchspeed -= 0.01
    }
    else if (key === "W" || key === "w") {
        launchspeed = 1000
    }
    else if (key === "r" || key === "R") {
        launchspeed = 0.05
        gravity = 0.5
    }
    else if (key === "F") {
        friction += 0.001
    }
    else if(key === "f") {
        if (friction > 0) {
        friction -= 0.001
        }
    }
}

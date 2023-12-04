let mouseheld = false;
let actionMade = false;

let lasthitsurface = "";

let selected_ball = 0;
let ballIMG;

let lineXlength = 0;
let lineYlength = 0;

let gravity = 0.5;
let launchspeed = 0.05;
let friction = 0.07;

let ball = {
    X: 900,
    Y: 475,
    radius: 50,
    vx: 0,
    vy: 0,
}
function setup() {
    ballIMG = [
        terror = loadImage("terror.png"),
        oliver = loadImage("exposure-Oliver-horror.png"),
        Crunch = loadImage("Cinnamon-Toast-Crunch.png"),
        CloseUpOliver = loadImage("Close-Up-Oliver.png"),
        CloseUpSkuna = loadImage("Close-Up-Skuna.png"),
    ];

    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("PhysicsCanvas");
    strokeWeight(0.5);
    stroke(255);
}
function draw() {
    background(30);
    image(ballIMG[selected_ball], ball.X - ball.radius, ball.Y - ball.radius, 100, 100)
    if (actionMade && !mouseheld) {
        ball.vy += gravity;
        if (ball.vx > 0) {
            ball.vx -= friction;
        }
        if (ball.vx < 0) {
            ball.vx += friction;
        }
        if (ball.vx < friction && ball.vx > 0) {
            ball.vx = 0;
        }
        /* currently aware of a bug with a friction causing some weird stuff to happen with the ball.vy, 
        currently only an issue when friction is higher than 0.49
        */
        if (ball.vy < 0) {
            ball.vy += friction;
        }
        if (ball.vy > 0) {
            ball.vy -= friction;
        }
        print(ball.vx)
        print(ball.vy)
    }
    ball.Y += ball.vy;
    ball.X += ball.vx;
    bounds()
    if (mouseheld) {
        stroke(50);
        strokeWeight(2);
        line(ball.X, ball.Y, mouseX, mouseY);
        circle(mouseX, mouseY, 5);
    }
    stroke(255);
    strokeWeight(0.5);
    fill(130, 200, 255);
    textSize(40);
    textAlign(CENTER);
    textFont('Courier New');
    text("Physics Simulation", window.innerWidth / 2, 50);

    textAlign(LEFT);
    textSize(20);
    text("Click and drag the face to launch it.", 10, 100);
    text("+ or - for gravity.", 10, 140);
    text("S to speed up launch, L to lower it, and W for speed", 10, 180);
    text("F to increase friction, f to lower it", 10, 220);
    text("Click R to reset everything back to normal", 10, 260);
    text("Click i to change the ball", 10, 300);

    textSize(30);
    textAlign(RIGHT);
    text("Gravity: " + Math.round(1000 * gravity) / 1000 + ".", window.innerWidth - 20, 120);
    text("Launch Speed: " + Math.round(1000 * launchspeed) / 1000 + ".", window.innerWidth - 20, 200);
    text("Friction: " + Math.round(1000 * friction) / 1000 + ".", window.innerWidth - 20, 280);

    if (Math.round(1000 * ball.vx + 1000 * ball.vy) / 1000 > 0) {
        text("Curreny ball speed: " + Math.round(1000 * ball.vx + 1000 * ball.vy) / 1000,
            window.innerWidth - 20, window.innerHeight - 20)
    }
    else {
        text("Curreny ball speed: " + Math.round(1000 * ball.vx + 1000 * ball.vy) / 1000 * -1,
            window.innerWidth - 20, window.innerHeight - 20)
    }

    if (selected_ball >= ballIMG.length) {
        selected_ball = 0;
    }
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
        if (lasthitsurface !== "bottom") {
            selected_ball++;
        }
        lasthitsurface = "bottom";
    }
    if (ball.X > window.innerWidth - ball.radius) {
        ball.X -= ball.vx;
        ball.vx *= -0.75;
        selected_ball++;
        lasthitsurface = "right";
    }
    if (ball.X < 0 + ball.radius) {
        ball.X -= ball.vx;
        ball.vx *= -0.75;
        selected_ball++;
        lasthitsurface = "left";
    }
    if (ball.Y < 0 + ball.radius) {
        ball.Y -= ball.vy;
        ball.vy *= -0.75;
        if (lasthitsurface !== "top") {
            selected_ball++;
        }
        lasthitsurface = "top";
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
        lineXlength = mouseX - ball.X;
        lineYlength = mouseY - ball.Y;
        mouseheld = false;
        actionMade = true;
        ball.vx += lineXlength * launchspeed;
        ball.vy += lineYlength * launchspeed;
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
    if (key === "+" || key === "=") {
        gravity += 0.1;
    }
    else if (key === "-" || key === "_") {
        gravity -= 0.1;
    }
    else if (key === "s" || key === "S") {
        launchspeed += 0.01;
    }
    else if (key === "l" || key === "L") {
        launchspeed -= 0.01;
    }
    else if (key === "W" || key === "w") {
        launchspeed = 1000;
    }
    else if (key === "r" || key === "R") {
        launchspeed = 0.05;
        gravity = 0.5;
        friction = 0.07
    }
    else if (key === "F") {
        friction += 0.01;
    }
    else if (key === "f") {
        if (friction > 0) {
            friction -= 0.01;
        }
    }
    else if (key === "I" || key === "i") {
        selected_ball++;
        if (selected_ball >= ballIMG.length) {
            selected_ball = 0;
        }
    }
}

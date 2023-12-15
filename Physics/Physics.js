let mouseheld = false;
let actionMade = false;

let lasthitsurface = "";

let selected_ball = 0;
let ballIMG;

let backgroundIMG;
let selected_img = 0;

let lineXlength = 0;
let lineYlength = 0;

let gravity = 0.5;
let launchspeed = 0.05;
let friction = 0.07;
let bounciness = 0.75

let timer;
let Ballspeed = 0;
let RBallspeed = 0;

let timeScale = 60;

let ball = {
    X: window.innerWidth / 2,
    Y: window.innerHeight / 4,
    radius: 50,
    vx: 0,
    vy: 0,
};

document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("ballRadiusSlider");
    slider.addEventListener("input", function () {
        ball.radius = slider.value;
    });
});

let simulationSpeedSlider;
let dynamicFrameRate = 60;

document.addEventListener("DOMContentLoaded", function () {
    simulationSpeedSlider = document.getElementById("SimulationSpeedSlider");
    simulationSpeedSlider.addEventListener("input", function () {
        timeScale = float(simulationSpeedSlider.value);
    });
});


function setup() {
    ballIMG = [
        terror = loadImage("terror.png"),
        oliver = loadImage("exposure-Oliver-horror.png"),
        Crunch = loadImage("Cinnamon-Toast-Crunch.png"),
        CloseUpOliver = loadImage("Close-Up-Oliver.png"),
        CloseUpSkuna = loadImage("Close-Up-Skuna.png"),
    ];

    backgroundIMG = [
        grey = loadImage("grey.png"),
        Window = loadImage("windowxp.jpg"),
        cave = loadImage("cave.webp"),
        cat = loadImage("cat.jpg")
    ];

    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("PhysicsCanvas");
    strokeWeight(0);
    stroke(255);

}

function draw() {  //---------------- start of draw ---------------------------------------------------------------- //
    let deltaTime = (millis() - timer) / 1000 * timeScale;
    timer = millis();

    background(backgroundIMG[selected_img]);
    image(ballIMG[selected_ball], ball.X - ball.radius, ball.Y - ball.radius, ball.radius * 2, ball.radius * 2)

    speedball();
    bounds();

    //why this does not work in a function, idk.
    if (actionMade && !mouseheld) {
        ball.vy += gravity * deltaTime;
        if (ball.vx > 0) {
            ball.vx -= friction * deltaTime;
        }
        if (ball.vx < 0) {
            ball.vx += friction * deltaTime;
        }
        if (ball.vx < friction && ball.vx > 0) {
            ball.vx = 0;
        }
        if (ball.vy < 0) {
            ball.vy += friction * deltaTime;
        }
        if (ball.vy > 0) {
            ball.vy -= friction * deltaTime;
        }
        ball.Y += ball.vy * deltaTime;
        ball.X += ball.vx * deltaTime;
    }

    if (mouseheld) {
        stroke(50);
        strokeWeight(2);
        line(ball.X, ball.Y, mouseX, mouseY);
        circle(mouseX, mouseY, 5);
    }
    stroke(255);
    strokeWeight(0.5);
    if (selected_img === 1) {
        fill(20)
    }
    else {
        fill(130, 200, 255);
    }
    textSize(40);
    textAlign(CENTER);
    textFont('Courier New');
    text("Physics Simulation", window.innerWidth / 2, 50);

    textAlign(LEFT);
    textSize(20);
    text("Click and drag the face to launch it.", 10, 100);
    text("+ or - for gravity.", 10, 140);
    text("S to speed up launch, L to lower it, and W for speed.", 10, 180);
    text("F to increase friction, f to lower it.", 10, 220);
    text("Click R to reset everything back to normal.", 10, 260);
    text("Click i to change the background.", 10, 300);
    text("Click B to increase ball's bounciness, b to lower it.", 10, 340);

    textSize(30);
    textAlign(RIGHT);
    text("Gravity: " + Math.round(1000 * gravity) / 1000 + ".", window.innerWidth - 20, 120);
    text("Launch Speed: " + Math.round(1000 * launchspeed) / 1000 + ".", window.innerWidth - 20, 200);
    text("Friction: " + Math.round(1000 * friction) / 1000 + ".", window.innerWidth - 20, 280);
    text("Bounciness: " + Math.round(1000 * bounciness) / 1000 + ".", window.innerWidth - 20, 360);
    text("Size: " + ball.radius, window.innerWidth - 20, 440)
    text("Simulation Speed: " + timeScale, windowWidth - 20, 520)

    textSize(50)
    text("Current ball speed: " + RBallspeed, window.innerWidth - 20, window.innerHeight - 25);

    if (selected_ball >= ballIMG.length) {
        selected_ball = 0;
    }
} //---------------- end of draw ----------------------------------------------------------------------------------------- //

function incircle() {
    let distance = dist(mouseX, mouseY, ball.X, ball.Y);
    return distance <= ball.radius;
}

function bounds() {
    if (ball.Y > window.innerHeight - ball.radius) {
        ball.Y -= ball.vy;
        ball.vy *= -1 * bounciness;
        if (lasthitsurface !== "bottom") {
            selected_ball++;
        }
        lasthitsurface = "bottom";
        ball.Y = window.innerHeight - ball.radius
    }

    if (ball.X > window.innerWidth - ball.radius) {
        ball.X -= ball.vx;
        ball.vx *= -1 * bounciness;
        if (lasthitsurface !== "right") {
            selected_ball++;
        }
        lasthitsurface = "right";
        ball.X = window.innerWidth - ball.radius
    }

    if (ball.X < 0 + ball.radius) {
        ball.X = 0 + ball.radius
        ball.X -= ball.vx;
        ball.vx *= -1 * bounciness;
        if (lasthitsurface !== "left") {
            selected_ball++;
        }
        lasthitsurface = "left";
    }

    if (ball.Y < 0 + ball.radius) {
        ball.Y = 0 + ball.radius
        ball.Y -= ball.vy;
        ball.vy *= -1 * bounciness;
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
        bounciness = 0.75
        actionMade = false;
        ball.radius = 50
        ball.Y = innerHeight / 2
        ball.X = innerWidth / 2
        slider.value = 50
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
        selected_img++
        if (selected_img >= backgroundIMG.length) {
            selected_img = 0;
        }
    }
    else if (key === "b") {
        if (bounciness > 0) {
            bounciness -= 0.05;
        }
    }
    else if (key === "B") {
        if (bounciness < 0.95) {
            bounciness += 0.05;
        }
    }
}

function speedball() {
    if (timer % 2 === 0) {
        Ballspeed = Math.sqrt(Math.pow(ball.vy, 2) + Math.pow(ball.vx, 2));
        RBallspeed = Math.round(1000 * Ballspeed) / 1000;
    }
}
let balls = [];

let bounciness = 0.50;
let gravity = 0.25;
let friction = 0.003;
let launchspeed = 0.1;

let actionMade = false;
let mouseheld = false;
let incircle = false;

function setup() {
    balls.push({
        X: window.innerWidth / 2,
        Y: window.innerHeight / 4,
        radius: 50,
        vx: 0,
        vy: 0,
    });

    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("PhysicsCanvasUpdated");
}

function draw() { //-------------------------------------------------- start of draw ---------------------------------//
    background(30);
    stroke(255);
    strokeWeight(0.75)

    if (mouseheld) {
        line(balls[0].X, balls[0].Y, mouseX, mouseY);
    }

    balls.forEach((ball, index) => {
        //identifies the ball you can throw
        if (index === 0) {
            fill(255);
        }

        else { fill(30, 30, 255); }
        circle(ball.X, ball.Y, ball.radius); random()

        //borders off walls.
        if (ball.Y > window.innerHeight - ball.radius) {
            ball.Y -= ball.vy;
            ball.vy *= -1 * bounciness;
            ball.Y = window.innerHeight - ball.radius;
        }

        if (ball.X > window.innerWidth - ball.radius) {
            ball.X -= ball.vx;
            ball.vx *= -1 * bounciness;
            ball.X = window.innerWidth - ball.radius;
        }

        if (ball.X < 0 + ball.radius) {
            ball.X = 0 + ball.radius;
            ball.X -= ball.vx;
            ball.vx *= -1 * bounciness;
        }

        if (ball.Y < 0 + ball.radius) {
            ball.Y = 0 + ball.radius;
            ball.Y -= ball.vy;
            ball.vy *= -1 * bounciness;
        }
        //bounds of balls themselves
        balls.forEach((otherBall, otherIndex) => {
            if (otherIndex !== index) {
                let dx = otherBall.X - ball.X;
                let dy = otherBall.Y - ball.Y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < ball.radius + otherBall.radius) {
                    let angle = atan2(dy, dx);
                    let targetX = ball.X + cos(angle) * (ball.radius + otherBall.radius);
                    let targetY = ball.Y + sin(angle) * (ball.radius + otherBall.radius);
                    let ax = (targetX - otherBall.X) * bounciness;
                    let ay = (targetY - otherBall.Y) * bounciness;

                    ball.vx -= ax;
                    ball.vy -= ay;
                    otherBall.vx += ax;
                    otherBall.vy += ay;
                }
            }
        })
        //gravity and friction for each of the balls
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
            if (ball.vy < 0) {
                ball.vy += friction;
            }
            if (ball.vy > 0) {
                ball.vy -= friction;
            }
            ball.Y += ball.vy;
            ball.X += ball.vx;
        }
    });

    if (mouseheld) {
        line(balls[0].X, balls[0].Y, mouseX, mouseY);
        fill(255)
        circle(mouseX, mouseY, 5);
    }
}
function mousePressed() {
    let distance = dist(mouseX, mouseY, balls[0].X, balls[0].Y);
    if (distance <= balls[0].radius) {
        balls[0].vy = 0;
        balls[0].vx = 0;
        mouseheld = true;
    }
}
function mouseReleased() {
    if (mouseheld) {
        let lineXlength = mouseX - balls[0].X;
        let lineYlength = mouseY - balls[0].Y;
        mouseheld = false;
        actionMade = true;
        balls[0].vx += lineXlength * launchspeed;
        balls[0].vy += lineYlength * launchspeed;
    }
}
function keyPressed() {
    if (key === "b") {
        balls.push({
            X: mouseX,
            Y: mouseY,
            radius: 50,
            vx: 0,
            vy: 0,
        });
    }
    if (key === "r") {
        balls.splice(1);
    }
}
function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
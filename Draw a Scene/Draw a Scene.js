let currentTime

let night;
let day;

let randomcolorfill = false;
let starR, starG, starB, starO, starR2, starG2, starB2;

let WIW = window.innerWidth
let WIH = window.innerHeight

let stars = [];
let clouds = [];
let birds = [];
let shootingstars = [];

let moon = {
    d: 70,
    x: 0,
    y: 0
};
let sun = {
    d: 90,
    x: 0,
    y: 0,
};

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("DrawSceneCanvas");
    fill(70, 180, 230);
    textSize(30);
    textAlign(CENTER);
    background(0);
    StarsFunction();
    FallingStarFactory();
    FallingStarProjectileLaunchingSystem();
    cloudmaking();
    birdfactory();
    drawstars();

    stars.push({
        X: random(0 + stars.D, WIH - stars.D),
        Y: random(0 + stars.D, WIH - stars.D),
        D: 20,
    });

    currentTime = getCurrentTime();
    checkdaystate();
}

function draw() {
    //resets dimensions of page, this is incase you open the console every stops being put at the top of the page. 
    WIW = window.innerWidth;
    WIH = window.innerHeight;

    moon.x = mouseX;
    moon.y = 300 - mouseX * 0.1;

    sun.x = mouseX;
    sun.y = 300 - mouseX * 0.1;

    //makes opacity of stars change with position of moon/mouse.
    starO = mouseX / 5;

    if (night) { background(5); drawstars(); moondrawing(); FallingStarProjectileLaunchingSystem(); }
    if (day) { background(80, 110, 200); clouddrawing(); sundrawing(); birddrawing(); }

    //checks time constantly
    currentTime = getCurrentTime();
    document.getElementById('Time').textContent = currentTime;
    document.getElementById('Time2').textContent = currentTime;

    textSize(20);
    fill(255);
    text("It will automatically switch to night or day based on your time", window.innerWidth * 0.852, window.innerHeight * 0.94);
    text("Press N or D to change day or night manually", window.innerWidth * 0.88, window.innerHeight * 0.97);

    TimerDisplay();
}
function StarsFunction() {
    for (let starcount = 0; starcount <= 200; starcount++) {
        //tends to give blues,reds, and purples, since it looks a lot better than a fully random sky. 
        starR = round(random(0, 255)); starG = round(random(0, 40)); starB = round(random(0, 255));
        stars.push({
            X: random(0, WIW),
            Y: random(0, WIH),
            D: 7.5,
            R: starR,
            G: starG,
            B: starB,
        });
        randomcolorfill = false;
        if (starcount === 200) { setTimeout(StarsFunction, 5000); }
        if (starcount === 0) { background(5); stars.splice(0); drawstars(); randomcolorfill = false; }
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function drawstars() {
    stars.forEach((star, index) => {
        //causes stars to vibrate, has a slight tendency to go downwards, why? cause I wanted them to :)
        star.Y += random(-0.5, 0.6);
        star.X += random(-0.3, 0.3);
        //stars
        fill(star.R, star.G, star.B, starO);
        circle(star.X, star.Y, star.D);
        //glow behind stars
        fill(star.R, star.G, star.B, 60);
        circle(star.X, star.Y, star.D + 10);
        fill(star.R, star.G, star.B, 30);
        circle(star.X, star.Y, star.D + 25);
    });
}
//draws the moon
function moondrawing() {
    //glow behind
    fill(160, 160, 160, 90)
    circle(moon.x, moon.y, moon.d + 10);
    //moon
    fill(120);
    circle(moon.x, moon.y, moon.d);
    fill(50);
    circle(moon.x - moon.d * 0.5, moon.y + moon.d * 0.2, 20);
    fill(60);
    circle(moon.x + moon.d * 0.1, moon.y - moon.d * 0.4, 15);
    fill(55);
    circle(moon.x + moon.d * 0.45, moon.y + moon.d * 0.35, 10);
}
//makes shooting stars
function FallingStarFactory() {
    for (let fallingstars = 0; fallingstars <= 5; fallingstars++) {
        starR2 = round(random(150, 255)); starG2 = round(random(150, 255)); starB2 = round(random(150, 255));
        shootingstars.push({
            X: random(0, WIW),
            Y: random(0, WIH),
            D: random(7.5, 12.5),
            R: starR2,
            G: starG2,
            B: starB2,
            VY: random(-10, 15), //more likely to go down
            VX: random(-12, 12),
        })
        if (fallingstars === 5) { setTimeout(FallingStarFactory, 5000); }
        if (fallingstars === 0) { background(5); shootingstars.splice(0); }
    }
}
//draws shooting stars and their trails 
function FallingStarProjectileLaunchingSystem() {
    shootingstars.forEach((shootingstars, index) => {
        //shooting star
        fill(shootingstars.R, shootingstars.G, shootingstars.B);
        circle(shootingstars.X, shootingstars.Y, shootingstars.D);
        shootingstars.X += shootingstars.VX
        shootingstars.Y += shootingstars.VY

        //shooting star glow
        fill(shootingstars.R, shootingstars.G, shootingstars.B, 100);
        circle(shootingstars.X, shootingstars.Y, shootingstars.D + 15);
        fill(shootingstars.R, shootingstars.G, shootingstars.B, 60);
        circle(shootingstars.X, shootingstars.Y, shootingstars.D, +25);

        //shooting star trail
        let trailLength = 10;
        for (let trail = 0; trail < trailLength; trail++) {
            let trailAlpha = map(trail, 0, trailLength - 1, 255, 0);
            fill(shootingstars.R, shootingstars.G, shootingstars.B, trailAlpha);
            let trailDiameter = map(trail, 0, trailLength - 1, shootingstars.D, shootingstars.D / 2);
            circle(shootingstars.X - trail * shootingstars.VX * 1.5, shootingstars.Y - trail * shootingstars.VY * 1.5, trailDiameter);
        }
    });
}
//draws sun with glow that increases as it goes to the right
function sundrawing() {
    fill(sunR, 150, 30, 120);
    circle(sun.x, sun.y, sun.d + 5 + mouseX / 60);
    fill(sunR, 115, 12);
    circle(sun.x, sun.y, sun.d);
}
//draws clouds that goes to at different speeds to the right with different random sizes
function cloudmaking() {
    for (let cloudamount = 0; cloudamount <= 10; cloudamount++) {
        let cloudx = round(random(0, WIW)); let cloudy = round(random(0, WIH));
        let cloudR = round(random(240, 255)); let cloudG = round(random(240, 255)); let cloudB = round(random(240, 255)); let cloudO = round(random(180, 255))
        clouds.push({
            X: cloudx,
            Y: cloudy,
            //tends to be oblong like clouds
            W: round(random(100, 350)),
            H: round(random(75, 250)),
            R: cloudR,
            G: cloudG,
            B: cloudB,
            O: cloudO,
            VY: random(0.1, 0.25),
            VX: random(1, 1.5),
        })
        if (cloudamount === 10) { setTimeout(cloudmaking, 7000); }
        if (cloudamount === 0) { clouds.splice(0); }
        //this is for the sun, just using something that already resets every 7 seconds to do it. it changes its color of orange 
        sunR = round(random(200, 255))
    }
}
function clouddrawing() {
    clouds.forEach((cloud, index) => {
        cloud.Y += cloud.VY;
        cloud.X += cloud.VX;
        fill(cloud.R, cloud.G, cloud.B, cloud.O);
        ellipse(cloud.X, cloud.Y, cloud.W, cloud.H);
    });
}
//draws birds to go in any direction with a set size
function birdfactory() {
    for (let birdcount = 0; birdcount <= 15; birdcount++) {
        let birdx = round(random(0, WIW)); let birdy = round(random(0, WIH));
        birds.push({
            X: birdx,
            Y: birdy,
            //birds are more likely to go to the right, following the wind
            VY: random(-0.25, 0.75),
            VX: random(-1.5, 2.5),
        })
        if (birdcount === 15) { setTimeout(birdfactory, 14000) }
        if (birdcount === 0) { birds.splice(0); }
    }
}
function birddrawing() {
    birds.forEach((bird, index) => {
        bird.Y += bird.VY;
        bird.X += bird.VX;
        fill(255)
        stroke(255)
        strokeWeight(3)
        //the slighly off bird is intentional and makes it look like they are actually trying to "fly"
        line(bird.X, bird.Y, bird.X + 20, bird.Y + 20)
        line(bird.X + 20, bird.Y + 20, bird.X + 40, bird.Y + 10)
        strokeWeight(1)
        stroke(0)
    });
}

// this takes your local time
function getCurrentTime() {
    let now = new Date();
    return now.toLocaleTimeString();
}
function checkdaystate() {
    let now = new Date
    let hour = now.getHours();
    console.log("Current hour:", hour);

    if (hour <= 6 || hour >= 18) { night = true; day = false; }
    else { day = true; night = false }

    console.log("Day:", day, "Night:", night);

    //checks every thirty seconds 
    setTimeout(checkdaystate, 30000);
}
//allows you to change the background from day to night
function keyPressed() {
    if (key === "D" || key === "d") { day = true; night = false }
    if (key === "N" || key === "n") { night = true; day = false }
}
function TimerDisplay() {
    if (day) {
        document.getElementById("Time").style.display = 'block';
        document.getElementById("Time2").style.display = "none";
    }
    if (night) {
        document.getElementById("Time").style.display = 'none';
        document.getElementById("Time2").style.display = "block";
    }
}
let timer;

let currentTime

let night;
let day;

let randomcolorfill = false;
let starR, starG, starB, starO;

let WIW = window.innerWidth
let WIH = window.innerHeight

let stars = [];
let clouds = [];
let birds = [];

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

    timer = millis();
    moon.x = mouseX;
    moon.y = 300 - mouseX * 0.1;

    sun.x = mouseX;
    sun.y = 300 - mouseX * 0.1;

    //makes opacity of stars change with position of moon/mouse.
    starO = mouseX / 5;

    if (night) { background(5); drawstars(); moondrawing(); }
    if (day) { background(80, 110, 200); clouddrawing(); sundrawing(); birddrawing();}

    //displays clock in centre 
    currentTime = getCurrentTime();
    fill(255);
    textSize(60);
    text(currentTime, width / 2, height / 2);

    textSize(20);
    text("It will automatically switch to night or day based on your time", window.innerWidth*0.852,window.innerHeight*0.94);
    text("Press N or D to change day or night manually", window.innerWidth * 0.88, window.innerHeight * 0.97);

    print(sunR);
}
function StarsFunction() {
    for (let starcount = 1; starcount <= 200; starcount++) {
        //tends to give blues,reds, and purples, since it looks a lot better than a random sky. 
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
        if (starcount === 1) { background(5); stars.splice(0); drawstars(); randomcolorfill = false; }
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
        fill(star.R, star.G, star.B, starO);
        circle(star.X, star.Y, star.D);
    });
}
//draws the moon
function moondrawing() {
    fill(120);
    circle(moon.x, moon.y, moon.d);
    fill(50);
    circle(moon.x - moon.d * 0.5, moon.y + moon.d * 0.2, 20);
    fill(60);
    circle(moon.x + moon.d * 0.1, moon.y - moon.d * 0.4, 15);
    fill(55);
    circle(moon.x + moon.d * 0.45, moon.y + moon.d * 0.35, 10);
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
        if (cloudamount === 1) { clouds.splice(0); }
        //this is for the sun, just using something that already resets every 7 seconds to do it.
        sunR = round(random(200,255))
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
        if (birdcount === 15) { setTimeout(birdfactory,14000) }
        if (birdcount === 1) { birds.splice(0); }
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
        line(bird.X,bird.Y,bird.X+20,bird.Y+20) 
        line(bird.X+20,bird.Y+20,bird.X+40,bird.Y+10)
        strokeWeight(1)
        stroke(0)
    });
}

// this takes your local time
function getCurrentTime() {
    let now = new Date();
    let hour = now.getHours();
    return now.toLocaleTimeString();
}
function checkdaystate() {
    if (hour >= 6 || hour >= 18) { night = true; day = false; }
    else { day = true; night = false }

    //checks every two minutes 
    setTimeout(checkdaystate, 120000);
}
//allows you to change the background from day to night
function keyPressed() {
    if (key === "D" || key === "d") { day = true; night = false }
    if (key === "N" || key === "n") { night = true; day = false }
}
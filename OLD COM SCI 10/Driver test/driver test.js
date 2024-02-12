let name;
let age = 0;
let TrafficLight = 0;
let score = 0;
let idiot = "no"

function setup() {
    let sketch = createCanvas(500, 500);
    sketch.parent("mycanvas");
    name = window.prompt("What is your name?");
    age = window.prompt("How old are you?");
    TrafficLight = window.prompt("How many lights are on a traffic light?");
    idiot = window.prompt("Are you and idiot?");
}
function draw() {
    background(150, 20, 20);
    fill(0);
    if (age >= 21 && TrafficLight == 3 && idiot === "no") {
        text("Congrats " + name + ", you are leggible to get your liscence.", 15, 100);
    }
    else if (idiot === "yes") {
        text("Unfortunately, " + name + " is not leggible for a liscence since they are actually a snail, not a human.", 15, 100);
    }
    else{
        text("Unfortuanetly, " + name + " you are not leggible for a liscence.", 15, 100);
    }
    text("Your current score " + score, 350, 350);
}
function keyPressed() {
    if (key === "v") {
        score++;
    }
    else if (key === "z") {
        score--;
    }
}

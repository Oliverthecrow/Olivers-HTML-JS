let WIW = window.innerWidth;
let WIH = window.innerHeight;

//As2_HomeReno start code

let roomwidth = 0;
let roomlength = 0;
let roomheight = 0;

function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("RenoCanvas");
    background(200, 190, 80);
    textSize(12);
    stroke(0, 0, 150);
    strokeWeight(5);
    fill(0);
    rect(50, 25, 700, 200);
    noStroke();
    fill(255);
    textSize(40);
    text("Home Emporium", 70, 70);
    textSize(14);
    text("Press e to enter your room dimensions", 70, 100);
    text("Then...", 70, 130);
    text("Press f to purchase carpet.", 70, 150);
    text("Press w to purcahse hardwood floor", 70, 170);
    text("Press p to purchase paint.", 70, 190);
    text("Press t to purchase an indoor hot tub.", 70, 210);
    textAlign(CENTER)
}//end setup
function draw() {
    //leave draw empty
}//end draw
function keyPressed() {
    //background rectangle
        stroke(0, 0, 150);
        strokeWeight(5);
        fill(0);
        rect(WIW * 0.25, WIH * 0.15, WIW * 0.5, WIH * 0.65);
        noStroke();
        fill(255);
        textSize(14);
        let ran = false
        if (roomheight === 0 && ran) {
            window.prompt("Please enter your room info before trying to purchase")
        }

    if (key === "e" || key === "E") {
        roomlength = window.prompt("What is the length of your room in feet");
        roomwidth = window.prompt("What is the width of your room in feet:");
        roomheight = window.prompt("What is the height of your room in feet");
        ran = true
    }
    if (key === "F" || key === "f" && roomheight != 0) {
        carpet(roomlength, roomwidth);
    }
    if (key === "w" || key === "W" && roomheight != 0) {
        hardwood(roomlength, roomwidth);
    }
    if (key === "P" || key === "p" && roomheight != 0) {
        let deluxe = false
        if (window.prompt("Would you want our deluxe paint, put Y for yes and N for no") === "Y") { deluxe = true }
        else { deluxe = false }
        paint(roomlength, roomwidth, roomheight, deluxe);
    }
    if (key === "T" || key === "t" && roomheight != 0) {
        hottub(roomlength, roomwidth);
    }
}//end keyPressed
function mousePressed() {
    print("MouseX: " + mouseX + " MouseY: " + mouseY);
}//end mousePressed
function carpet(length, width) {
    let sqaurefeet = length * width
    let cost = 1.88
    let price = sqaurefeet * cost

    fill(255);
    text("Your total squarefeet is: " + sqaurefeet, WIW * 0.5, WIH * 0.3);
    text("Our carpenting price is $" + cost + " per squarefoot", WIW * 0.5, WIH * 0.5);
    text("Your carpenting cost will be $" + price, WIW * 0.5, WIH * 0.7);
}
function hardwood(length, width) {
    let sqaurefeet = length * width
    let cost = 2.57 //random number 
    let price = sqaurefeet * cost

    fill(255);
    text("Your total squarefeet is: " + sqaurefeet, WIW * 0.5, WIH * 0.3);
    text("Our carpenting price is $" + cost + " per squarefoot", WIW * 0.5, WIH * 0.5);
    text("Your carpenting cost will be $" + price, WIW * 0.5, WIH * 0.7);
}
function paint(length, width, height, deluxe) {
    let Lwalls = length * height * 2
    let Wwalls = width * height * 2
    let ceiling = width * length
    let totalSQF = Lwalls + Wwalls + ceiling
    let cost
    if (deluxe) { cost = 30.2 } else { cost = 26.5 }
    let Gallons = totalSQF / 350

    fill(255);
    text("Your total squarefootage is: " + totalSQF, WIW * 0.5, WIH * 0.2);
    text("this will take " + round(Gallons) + " Gallons of paint", WIW*0.5, WIH * 0.4);
    text("Price per gallon is: $" + cost, WIW * 0.5, WIH * 0.6);
    text("Your total price will be $" + cost * round(Gallons), WIW * 0.5, WIH * 0.75);
}
function hottub(length, width) {
    let hottub
    let PetitePiscine = {
        Size: 10,
        Cost: 2100,
        name: "Petite Piscine"
    }
    let Medium = {
        Size: 14,
        Cost: 4000,
        name: "Medium"
    }
    let BiggestBubbly = {
        Size: 18,
        Cost: 6100,
        name: "Biggest Bubbly"
    }

    if (length < 10 || width < 10) { hottub = "none" }
    else if (length >= BiggestBubbly.Size && width > BiggestBubbly.Size) { hottub = BiggestBubbly.name }
    else if (length >= Medium.Size && width > Medium.Size) { hottub = Medium.name }
    else if (length >= PetitePiscine.Size && width > PetitePiscine.Size) { hottub = PetitePiscine.name }

    fill(255);
    text("The Largest Hottub that will fit is the " + hottub, WIW * 0.5, WIH * 0.5);
}
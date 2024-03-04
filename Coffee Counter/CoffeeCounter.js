let WIW = window.innerWidth
let WIH = window.innerHeight

let name;
let chosendrink;
let searched;
let nodrink;
let week = 1;
let CaffeinConsumed = 0;
let FatConsumed = 0;
let CaloriesConsumed = 0;
let AMTofCoffes = 0;
let statgiven;
let braking = false;
let syrup;
let syrupadded = false;
let weekdone = false;

let Coffee = ["Pistachio Latte", "Gingerbread Latte", "Sugar Cookie Oat Latte", "Chestnut Praline Latte", "Caramel Brule Latte", "Oat Latte", "Vanilla Latte", "Caffe Latte", "Cinnamon Dolce Latte"]
let Calories = [400, 380, 340, 410, 500, 240, 320, 250, 420]
let Fat = [11, 16, 10, 16, 15, 11, 9, 9, 16] //in grams
let Caffein = [150, 150, 150, 150, 150, 150, 150, 150, 150] //in milligrams assumes that their esspesso shots are 75 milligrams
//all coffees assume 591ml of liquid, the largest size at starbucks
function setup() {
    let canvas = createCanvas(WIW, WIH)
    canvas.parent('CoffeeCanvas')
    name = window.prompt("ENTER YOUR NAME")
    textAlign(CENTER)
}
function draw() {
    if(syrup === "Y" || syrup === "y") {syrupadded = true; syrup ="nothing"}
    else{syrupadded = false}
    background(0)
    fill(255)
    textSize(18)
    for (let i = 0; i < Coffee.length; i++) {
        text(Coffee[i], WIW * 0.05 + i * 215, WIH * 0.2)
    }
    textSize(30)
    text("Press S then search a name of a latte to get nutritional stats", WIW * 0.5, WIH * 0.35);
    text("Click n to end the current week to get your stats for what you consumed this week", WIW * 0.5, WIH * 0.45)
    textSize(40)
    text("Week " + week, WIW * 0.05, WIH * 0.95)
    textSize(20)
    if(weekdone){text("Info for this week \n" + "Calories Consumed " + CaloriesConsumed + "  Fat Consumed " + FatConsumed + "g\n  Caffein Consumed " + CaffeinConsumed + "mg" + "  Amount of coffees " + AMTofCoffes, WIW * 0.25, WIH * 0.925)}

    if (searched && !nodrink && !statgiven) {
        CaloriesConsumed += Calories[i]; 
        FatConsumed += Fat[i];
        CaffeinConsumed += Caffein[i];
        AMTofCoffes++;
        if(syrupadded){FatConsumed+=3;CaloriesConsumed+=80}
        statgiven = true;
    }

    if (searched && !nodrink) {
        if(syrupadded){Fat[i]+=3;Calories[i]+=80;syrupadded = false}
        text("Calories " + Calories[i] + "    Fat in grams " + Fat[i] + "g    Caffein in milligrams " + Caffein[i] + "mg", WIW * 0.5, WIH * 0.55);
    }
    if (nodrink && chosendrink != "why") {
        text("Sorry, it does not seem we have that drink", WIW * 0.5, WIH * 0.5);
    }
}

function search() {
    let found = false
    for (i = 0; i < Coffee.length; i++) {
        if (chosendrink.toLowerCase() === Coffee[i].toLowerCase() && braking === false) {
            print("ran")
            nodrink = false
            found = true
            return i
        }
    }
    if (!found) {
        nodrink = true
        return -1; //incase  no match is found
    }
}
function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}
function keyPressed() {
    if (key === "s" || key === "S") { chosendrink = window.prompt("Hello " + name + " Enter the lattes you consumed in one week to get your stats"); syrup = window.prompt("did you add syrup? put Y for yes N for no"); search(); searched = true;found = false;statgiven = false;}
    if (key === "n" || key === "N") { weekdone = true;}
}
let name;
let subtotal = 0;
let numpeople = 0;

let WIW = window.innerWidth;
let WIH = window.innerHeight;

function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("RestaurantCanvas");
    background(200, 0, 80);
    textSize(15);
    textAlign(CENTER);
    fill(255);
    //task 1: add restaurant name
    textSize(50)
    text("Jon and Garfield's Restaurant", WIW * 0.5, WIH * 0.1);
    textSize(18)
    text("Press w when you first arrive at the restaurant.", WIW * 0.15, WIH * 0.15);
    text("Press o to place each person's order.", WIW * 0.15, WIH * 0.3);
    text("Press s to split the bill evenly.", WIW * 0.15, WIH * 0.45);
    text("Press h to flirt with the server.", WIW * 0.15, WIH * 0.6);
    text("Press a to avert a disaster.", WIW * 0.15, WIH * 0.75);
}//end setup
function draw() {
    //leave draw empty
}//end draw
function keyPressed() {
    if (key === 'w') {
        name = window.prompt("What name is your reservation under?");
        if (checkReservation(name)) {
            numpeople = window.prompt("Thank you. And how many are in your party?");

            //task 3 - Using Text lines, print the name and the number of people to the draw window.
            text(name + " has a group of: " + numpeople, WIW * 0.5, WIH * 0.25)
        } else {
            window.alert("Sorry, we have no table available under that name.");
        }
    }
    if (key === 'o') { //order food
        for (let i = 0; i < numpeople; i++) {
            subtotal += window.prompt("What is the cost of this meal?") * 1;
        }
        //task 4 - Using a Text line, print the total of the bill before tip.
        text("Your Total is: " + subtotal, WIW * 0.5, WIH * 0.4)
    }
    if (key === 's') {
        let tip = window.prompt("How much do you want to tip?"); //percent or dollars
        splitBill(subtotal, numpeople, tip);
    }
    if (key === 'h') {
        hitOn(name);
    }
    if (key === 'a') {
        let weight = window.prompt("That is your partner!?! How much do they weight?")
        apologize(weight);
    }
}//end keyPressed
function checkReservation(nametocheck) {
    let reservations = ["Bobbie", "Kelly", "Leyla"]
    //task 2
    //We only have 3 tables and they are all reserved
    //Complete the following IF statement so it works with the above names
    //or alternatively replace the IF statement with a FOR loop.
    //This alternative is a bit harder than it first seems.
    for (let i = 0; i < reservations.length; i++) {
        if (nametocheck === reservations[i]) {
            return true;
        } else if (i >= reservations.length) { return false }
    }
}//end checkReservation
//task 5 - splitBill
function splitBill(bill, amtpeople, tipamount) {
    let perperson = (bill + Math.floor(tipamount)) / amtpeople; //tipamount is currently a string, math.floor converts it to a integer
    text("Each person will need to pay: $" + perperson, WIW * 0.5, WIH * 0.6)
}
//task 6 - hitOn
function hitOn(name) {
    text("My name is " + name + ". Can I call you sometime?", WIW * 0.5, WIH * 0.7)
}
//task 7 - apologize
function apologize(weight) {
    text("That your partner?!? ...", WIW * 0.5, WIH * 0.85)
    for (let i = 0; i <= weight; i++) {
        text("I am Sorry",[i]*100,WIH*0.9)
    }
}
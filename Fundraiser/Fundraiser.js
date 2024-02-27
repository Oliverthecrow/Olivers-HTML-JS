let People = ["John", "Bob", "Alice", "Mike", "Jane", "Tom", "Harry", "Sarah", "Oliver", "Lucas"];
let MoneyDonated = [181, 50, 134, 80, 76, 90, 43, 35, 71, 150];
let PermissionForm = [true, false, true, true, true, false, true, false, false, false];

let WIW = window.innerWidth;
let WIH = window.innerHeight;

let randomperson = 0;

function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("FundraiserCanvas");
    background(0);
    textAlign(CENTER);
}
function draw() {
    background(0);
    fill(255);
    textSize(23);

    //print out info
    for (let i = 0; i < People.length; i++) {
        text(People[i] + ":   Money Donated: " + MoneyDonated[i] + "     Permission Form in: " + PermissionForm[i], WIW * 0.2, WIH * 0.15 + i * 75);
    }
    //print out total and average
    let totalmoney = 0;
    let averagemoney = 0;
    for (let i = 0; i < People.length; i++) {
        totalmoney += MoneyDonated[i];
        averagemoney += (MoneyDonated[i] / People.length);
    }
    text("Total Money Raised: " + totalmoney, WIW * 0.7, WIH * 0.2);
    text("Average Money Donated: " + averagemoney, WIW * 0.7, WIH * 0.3);

    //checks to see if we need a bottle drive
    let minumun = 40;
    let peopleunder = 0;
    for (let i = 0; i < People.length; i++) {
        if (MoneyDonated[i] < minumun) { peopleunder += 1 }
    }
    text("amount of people who have not dontated enough: " + peopleunder, WIW * 0.7, WIH * 0.4)
    if (peopleunder >= 2) { text("Bottle Drive is this Saturday", WIW * 0.7, WIH * 0.5)}
    else {text("Bottle Drive not required", WIW * 0.7, WIH * 0.5)}

    //print highest amount raised
    let highest = 0;
    let person;
    for (let i = 0; i < People.length; i++) {
        if(highest < MoneyDonated[i]) {highest = MoneyDonated[i]; person = People[i]}
    }
    text("Person that has donated the most so far: " + person + " who donated " + highest,WIW*0.7,WIH*0.6)

    //amount raised by people with handed in permision slip 
    let RaisedWithPermissionSlip = 0;
    for (let i = 0; i < People.length; i++) { 
        if(PermissionForm[i] === true) {RaisedWithPermissionSlip += MoneyDonated[i]}
    }
    text("Money Raised from people who have handed in permission slip: " + RaisedWithPermissionSlip,WIW*0.7,WIH*0.7);

    //random person getting door prize
    text(People[randomperson] + " was randomly chosen to get a door prize",WIW*0.7,WIH*0.8);
}
function mousePressed() {
    randomperson = round(random(0,10));
}

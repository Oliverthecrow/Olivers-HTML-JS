let WIW = window.innerWidth;
let WIH = window.innerHeight;
let loaded = false

window.addEventListener("load", pageFullyLoaded, false);

function setup () {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("CalculatorCanvas")
}
function pageFullyLoaded(e) {
    let currentTotal = 0;
    let operator = "";
    currentTotal = 1.0 * window.prompt("What is your first number?");
    while (operator != "exit") {
        operator = window.prompt("The current total is " + currentTotal + "\nWhat math operation do you want (+, -, *, /, remainder, power)\n or type exit to quit.");
        if (operator === "+") {
            currentTotal = add(currentTotal);
        }
        if (operator === "-") {
            currentTotal = subract(currentTotal)
        }
        if (operator === "*") {
            currentTotal = multiply(currentTotal);
        }
        if (operator === "/") {
            currentTotal = divide(currentTotal)
        }
        if (operator === "remainder") {
            currentTotal = remainder(currentTotal);
        }
        if (operator === "power") {
            currentTotal = power(currentTotal)
        }
    }//end while loop
    window.alert("Your final total is: " + currentTotal);
}
function add(firstnumber) {
    let tempTotal = 0;
    let secondnumber = 1.0 * window.prompt("What number do you want to add?");
    tempTotal = firstnumber + secondnumber;
    //your task for this function is to add the appropriate return statement
    return tempTotal
}//end add
function subract(firstnumber) {
    let tempTotal = 0;
    let secondnumber = 1.0 * window.prompt("What number do you want to subract");
    tempTotal = firstnumber - secondnumber;
    return tempTotal
}//end subtrack
function multiply(firstnumber) {
    let tempTotal = 0;
    let secondnumber = 1.0* window.prompt("What number do you want to multiply by");
    tempTotal = firstnumber * secondnumber;
    return tempTotal
}
function power(firstnumber) {
    let tempTotal = 0;
    let secondnumber = 1.0* window.prompt("what exponent do you want?");
    tempTotal = Math.pow(firstnumber,secondnumber);
    return tempTotal;
}

function divide(firstnumber) {
    let tempTotal = 0;
    let secondnumber = 1.0* window.prompt("What number do you want to divide by");
    if(secondnumber === 0){
        window.prompt("You cannot divide by 0")
        secondnumber = 1;
    }
    tempTotal =  firstnumber / secondnumber;
    return tempTotal
}//end divide

function remainder(firstnumber) {
    let tempTotal = 0;
    let secondnumber = 1.0 * window.prompt("What number do you want to check the remainder for");
    tempTotal = firstnumber % secondnumber;
    return tempTotal;
}
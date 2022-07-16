const display = document.querySelector("#displayContainer");
let buttons = document.querySelectorAll(".button");

Array
    .from(buttons)
    .forEach(addEvent)    



function addEvent(element) {
    element.addEventListener("click", (e) => {
        let displayText = e.target.value;
        display.innerHTML = displayText;
})};





//BASIC FUNCTIONS
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function operate(x, op, y) {
    switch (op) {
        case '+':
            console.log(add(x, y));
            break;
        case '-':
            console.log(subtract(x, y));
            break;
        case '*':
            console.log(multiply(x, y));
            break;
        case '/':
            console.log(divide(x, y));
            break;
    }
}
// let num1 = 3;
// let num2 = 5;
// let opInput = "*";

// operate(num1, opInput, num2);
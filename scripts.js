const display = document.querySelector("#displayContainer");
let buttons = document.querySelectorAll(".button");
Array
    .from(buttons)
    .forEach(addEvent)    



const calc = {
    num1 : 0,
    num2 : 0,
    // add: function(num1, num2) {
    //     return num1 + num2;
    // },
    // subtract: function(num1, num2) {
    //     return num1 - num2;
    // },
    // multiply: function(num1, num2) {
    //     return num1 * num2;
    // },
    // divide: function(num1, num2) {
    //     return num1 / num2;
    // }, 
    operateAdd: function(num1, num2) {
        return add(num1, num2);
    },
    operateSubtract: function() {
        return subtract(num1, num2);
    }, 
    operateMultiply: function() {
        return multiply(num1, num2);
    }, 
    operateDivide: function() {
        return divide(num1, num2);
    },  
};


function addEvent(element) {
    element.addEventListener("click", (e) => {
        let displayText = e.target.value;
        calc.num1 = e.target.value;
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
// function operate(x, op, y) {
//     switch (op) {
//         case '+':
//             console.log(add(x, y));
//             break;
//         case '-':
//             console.log(subtract(x, y));
//             break;
//         case '*':
//             console.log(multiply(x, y));
//             break;
//         case '/':
//             console.log(divide(x, y));
//             break;
//     }
// }

// let opInput = "*";

// operate(num1, opInput, num2);
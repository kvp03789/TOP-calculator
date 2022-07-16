const display = document.querySelector("#displayContainer");
const displayOne = document.querySelector("#displayContainerOne");
const displayString = document.querySelector("#displayContainerString");

let allButtons = document.querySelectorAll(".button");
Array
    .from(allButtons)
    .forEach(recordToString) 

let numButtons = document.querySelectorAll(".numButton");
Array
    .from(numButtons)
    .forEach(addEvent)  
    
let symbolButtons = document.querySelectorAll(".symbolButton");
Array
    .from(symbolButtons)
    .forEach(addSymbolEvent)

const calc = {

    displayArray : [],
    symbolsArray: [],
    currentNumber: [],
    joined: '',
    displayString: '',
    operateAdd: function(num1, num2) {
        num1 = this.displayArray[0];
        num2 = this.displayArray[1];
        return add(num1, num2);
    },
    operateSubtract: function(num1, num2) {
        num1 = this.displayArray[0];
        num2 = this.displayArray[1];
        return subtract(num1, num2);
    }, 
    operateMultiply: function(num1, num2) {
        num1 = this.displayArray[0];
        num2 = this.displayArray[1];
        return multiply(num1, num2);
    }, 
    operateDivide: function(num1, num2) {
        num1 = this.displayArray[0];
        num2 = this.displayArray[1];
        return divide(num1, num2);
    },  
    clearOne: function() { 
        this.displayArray.pop();
        display.innerHTML = this.displayArray;
        displayOne.innerHTML = '----';
//MUST FIX, DELETE LAST FULL INT - this.displayString = this.displayString.replace(this.joined, this.displayString - this.joined);
    },
    clearEverything: function() {
        this.displayArray.length = 0; 
        this.currentNumber.length = 0;
        this.joined = '';
        this.displayString = '';
        display.innerHTML = '----';
        displayOne.innerHTML = '----';
        displayString.innerHTML = '----';
    },
    getAnswer: function () {
        
    },
};

//ADD EVENT TO NUM BUTTONS
function addEvent(element) {
    element.addEventListener("click", (e) => {

        let value = e.target.value;
        calc.currentNumber.push(value);
        calc.joined = calc.currentNumber.join('');
        displayOne.innerHTML = calc.joined;
        
})};

//ADD EVENT TO SYMBOL BUTTONS
function addSymbolEvent(element) {
    element.addEventListener("click", (e) => {
        calc.displayArray.push(calc.joined);
        calc.currentNumber.length = 0;
        calc.joined = '';
        calc.displayArray.push(e.target.value);
        display.innerHTML = calc.displayArray;
        displayOne.innerHTML = '----';
    })
}

//ADD DISPLAY STRING EVENT TO EVERY BUTTON, WITH SPACE IF SYMBOL BTN
function recordToString(element) {
    element.addEventListener("click", (e) => {
        if (e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/' ) {
            calc.displayString = calc.displayString.concat(' ' + e.target.value.toString() + ' ');
            displayString.innerHTML = calc.displayString;
        }
        else {
        calc.displayString = calc.displayString.concat(e.target.value.toString());
        displayString.innerHTML = calc.displayString;
        }
    })
}

//ERASE EVERYTHING EVENT
const clearEverythingButton = document.querySelector("#clearEverythingButton");
clearEverythingButton.addEventListener("click", () => {
    calc.clearEverything();   
});

// ERASE ONLY LAST CHAR EVENT
const clearOneButton = document.querySelector("#clearOneButton");
clearOneButton.addEventListener("click", () => {
    calc.clearOne();   
});

//EQUAL BUTTON EVENT
const equalButton = document.querySelector("#eqButton");
equalButton.addEventListener("click", () => {
    calc.getAnswer();
});



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


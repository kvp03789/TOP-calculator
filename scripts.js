const display = document.querySelector("#displayContainer");
const displayOne = document.querySelector("#displayContainerOne");
const displayString = document.querySelector("#displayContainerString");

let allButtons = document.querySelectorAll(".cButton");
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
    switch: true,
    num1: 0,
    num2: 0,
    displayArray : [],
    symbolsArray: [],
    numbersArray: [],
    currentNumber: [],
    joined: '',
    displayString: '',
    answer: '',
    operateAdd: function(num1, num2) {
        if (this.displayArray.length === 0) {}
        else {
        num1 = parseInt(this.displayArray[0]);
        num2 = parseInt(this.displayArray[2]);
        this.answer = (num1 + num2);
        
        console.log(this.answer);
        }
    },
    operateSubtract: function(num1, num2) {
        num1 = parseInt(this.displayArray[0]);
        num2 = parseInt(this.displayArray[2]);
        this.answer = (num1 - num2);
        
        console.log(this.answer);
    }, 
    operateMultiply: function(num1, num2) {
        num1 = parseInt(this.displayArray[0]);
        num2 = parseInt(this.displayArray[2]);
        this.answer = (num1 * num2);
        
        console.log(this.answer);
    }, 
    operateDivide: function(num1, num2) {
        num1 = parseInt(this.displayArray[0]);
        num2 = parseInt(this.displayArray[2]);
        if (num2 === 0) {return alert("u can't divide by 0! >.<")}
        this.answer = (num1 / num2);
        
        console.log(this.answer);
    },  
    clearOne: function() { 
        this.displayString = this.displayArray.join(' ') + ' ';
        this.currentNumber.length = 0;
        display.innerHTML = this.displayArray;
        displayOne.innerHTML = '----';
        
//MUST FIX, DELETE LAST FULL INT - this.displayString = this.displayString.replace(this.joined, this.displayString - this.joined);
    },
    clearEverything: function() {
        this.displayArray.length = 0; 
        this.currentNumber.length = 0;
        this.joined = '';
        this.displayString = '';
        this.answer = 0;
        display.innerHTML = '----';
        displayOne.innerHTML = '----';
        displayString.innerHTML = '----';
    },
    getAnswer: function () {
        if (this.displayArray[1] === '/') {
            this.operateDivide();
            this.displayArray[0] = this.answer;
            this.displayArray.length = 1;
        }
        if (this.displayArray[1] ==='*') {
            this.operateMultiply();
            this.displayArray[0] = this.answer;
            this.displayArray.length = 1;
        }
        if (this.displayArray[1] === '-') {  
            this.operateSubtract();
            this.displayArray[0] = this.answer;
            this.displayArray.length = 1;
        }
        if (this.displayArray[1] === '+') {
            this.operateAdd();
            this.displayArray[0] = this.answer;
            this.displayArray.length = 1;
            
        }

        }      
};

//ADD EVENT TO NUM BUTTONS
function addEvent(element) {
    element.addEventListener("click", (e) => {
    if (calc.switch === true) {
        let value = e.target.value;
        calc.currentNumber.push(value);
        calc.joined = calc.currentNumber.join(''); 
        displayOne.innerHTML = calc.joined;
    }
    else {}
})};

//ADD EVENT TO SYMBOL BUTTONS
function addSymbolEvent(element) {
    element.addEventListener("click", (e) => {
        if (calc.switch === true) {    
        if (calc.displayArray.length === 1) {
            calc.currentNumber.length = 0;
            calc.joined = '';
            calc.displayArray.push(e.target.value);
            calc.symbolsArray.push(e.target.value);
            display.innerHTML = calc.displayArray;
            displayOne.innerHTML = '----';
        }
        else {
        calc.displayArray.push(calc.joined);
        calc.numbersArray.push(calc.joined);
        calc.getAnswer();
        calc.currentNumber.length = 0;
        calc.joined = '';
        calc.displayArray.push(e.target.value);
        calc.symbolsArray.push(e.target.value);
        display.innerHTML = calc.displayArray;
        displayOne.innerHTML = '----';
        
        }
        
        displayOne.innerHTML = `${calc.answer}`;
        } 
        else {};   
    })
}

//ADD DISPLAY STRING EVENT TO EVERY BUTTON, WITH SPACE IF SYMBOL BTN
function recordToString(element) {
    element.addEventListener("click", (e) => {
    if (calc.switch === true) { 
        if (e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/' || e.target.value === '=' ) {
            calc.displayString = calc.displayString.concat(' ' + e.target.value.toString() + ' ');
            displayString.innerHTML = calc.displayString;
        }
        else {
        calc.displayString = calc.displayString.concat(e.target.value.toString());
        displayString.innerHTML = calc.displayString;
        }
    }
    else {};    
    })
}

//ERASE EVERYTHING EVENT
const clearEverythingButton = document.querySelector("#clearEverythingButton");
clearEverythingButton.addEventListener("click", () => {
    calc.clearEverything();  
    calc.switch = true; 
});

// ERASE ONLY LAST CHAR EVENT
const clearOneButton = document.querySelector("#clearOneButton");
clearOneButton.addEventListener("click", () => {
    calc.clearOne();   
});

//EQUAL BUTTON EVENT
const equalButton = document.querySelector("#eqButton");
equalButton.addEventListener("click", () => {
    if (calc.switch === true) { 
    calc.displayArray.push(calc.joined);
    calc.getAnswer();
    calc.displayArray.length = 0; 
    calc.displayArray[0] = calc.answer;
    calc.currentNumber.length = 0;
    calc.joined = '';    
    display.innerHTML = '----';
    displayOne.innerHTML = `${calc.answer}`;
    calc.switch = false;
    }
    else {};     
});





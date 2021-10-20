/*
--- TO-DO ---
1. Enable plus-minus sign toggle button.
2. Convert results that would be greater than 9 places to scientific notation.
3. Make it so no numbers can be added to a scientific notation result.
4. Split display to show current number and previous/current function.
5. Update clear for split display: clearing once will clear current number, twice
    to clear mini display.
6. Enable keyboard support.
7. Disable buttons in case of ERROR. 
*/

const divideButton = document.getElementById('divide');
const multipyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const toggleSignButton = document.getElementById('toggle-sign');
const inputDisplay = document.getElementById('input');

let num1 = null;
let num2 = null;
let operator = null;

function addNumberListeners() {
    const numButtons = document.getElementsByClassName('number-button');
    for (let button of numButtons) {
        button.addEventListener('click', function() {
            if (num1 == 'ERROR') {
                if (button.innerText != '.') {
                    num1 = button.innerText;
                    inputDisplay.innerText = num1;
                }
            } else if (num1 == null) {
                if (button.innerText != '.') {
                    num1 = button.innerText;
                    inputDisplay.insertAdjacentText('beforeend', button.innerText);
                }
            } else if (operator == null) {
                if (num1.length < 9) {
                    num1 += button.innerText;
                    inputDisplay.insertAdjacentText('beforeend', button.innerText);
                }
                if (button.innerText == '.') {
                    button.disabled = true;
                }
            } else if (num2 == null ) {
                if (button.innerText != '.') {
                    num2 = button.innerText;
                    inputDisplay.insertAdjacentText('beforeend', button.innerText);
                }
            } 
            else if (num2.length < 9) {
                num2 += button.innerText;
                inputDisplay.insertAdjacentText('beforeend', button.innerText);
                if (button.innerText == '.') {
                    button.disabled = true;
                }
            }
        });
    }    
}

function addOperatorListeners() {
    const oppButtons = document.getElementsByClassName('operator');
    for (let button of oppButtons) {
        button.addEventListener('click', function() {
            if (num1 != null && num2 == null) {
                operator = button.innerText;
                inputDisplay.innerText = '';
                decimalButton.disabled = false;
            }
            if (num1 != null && num2 != null && operator != null) {
                operate(operator);
                decimalButton.disabled = false;
            }
        });
    }    
} 

function addEqualsListener() {
    equalsButton.addEventListener('click', function() {
        if (num1 != null && num2 != null && operator != null) {
            operate(operator);
            decimalButton.disabled = false;
            operator = null;
        }
    });
}

function addClearListener() {
    clearButton.addEventListener('click', function() {
        num1 = null;
        num2 = null;
        operator = null;
        inputDisplay.innerText = '';
    });
}

function addDeleteListener() {
    deleteButton.addEventListener('click', function() {
        if (num1 != null && operator == null) {
            if (num1.length > 1) {
                num1 = num1.slice(0, -1);
                inputDisplay.innerText = num1;
            } else {
                num1 = null;
                inputDisplay.innerText = '';
            }
        } else if (num2 != null) {
            if (num2.length > 1) {
                num2 = num2.slice(0, -1);
                inputDisplay.innerText = num2;
            } else {
                num2 = null;
                inputDisplay.innerText = '';
            }
        }
    });
}

function operate(operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = null;
    if (operator == '+') {
        result = add(num1, num2);
    }
    if (operator == '-') {
        result = subtract(num1, num2);
    }
    if (operator == 'x') {
        result = multiply(num1, num2);
    }
    if (operator == '/') {
        result = divide(num1, num2);       
    }

    result = result.toString();
    if (result.length > 9) {
        result = result.slice(0, 9)
    }

    inputDisplay.innerText = result;
    num1 = result;
    num2 = null;
    operator = null;
    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'ERROR';
    } else {
        return num1 / num2;
    }
}

// Code Start

addNumberListeners();
addOperatorListeners();
addClearListener();
addDeleteListener();
addEqualsListener();

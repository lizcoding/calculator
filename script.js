const divideButton = document.getElementById('divide');
const multipyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const toggleSignButton = document.getElementById('toggle-sign');
const inputDisplay = document.getElementsByTagName('input');

let num1 = null;
let num2 = null;
let operator = null;

let calcArray = [num1, operator, num2];

function addNumberListeners() {
    const allButtons = document.getElementsByClassName('number-button');
    for (button of allButtons) {
        button.addEventListener('click', function() {
            if (num1 == null) {
                num1 = button.textContent();
            } else if (num2 == null ) {
                num2 = button.textContent();
            } else if (operator == null) {
                num1 += button.textContent();
            } else {
                num2 += button.textContent();
            }
        });
    }    
}

function addOperatorListeners() {
    const allButtons = document.getElementsByClassName('operator');
    for (button of allButtons) {
        button.addEventListener('click', function() {
            if (num2 == null) {
                operator = button.textContent();
            }
            if (num1 != null && num2 != null && operator != null) {
                inputDisplay.textContent = operate(num1, num2, operator);
                num1 = inputDisplay.textContent;
                num2 = null;
                operator = null;
            }
        });
    }    
} 

function addEqualsListener() {
    equalsButton.addEventListener('click', function() {
        if (num1 != null && num2 != null && operator != null) {
            inputDisplay.textContent = operate(num1, num2, operator);
            num1 = inputDisplay.textContent;
            num2 = null;
            operator = null;
        }
    });
}

function addClearListener() {
    clearButton.addEventListener('click', function() {
        num1 = null;
        num2 = null;
        operator = null;
    });
}

function addDeleteListener() {
    deleteButton.addEventListener('click', function() {
        if (operator == null) {
            if (num1.length > 1) {
                num1 = num1.slice(0, -1);
            } else {
                num1 = null;
            }
        } else {
            if (num2.length > 1) {
                num2 = num2.slice(0, -1);
            } else {
                num2 = null;
            }
        }
    });
}

function opperate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    }
    if (operator == '-') {
        return subtract(num1, num2);
    }
    if (operator == 'x') {
        return multiply(num1, num2);
    }
    if (operator == '/') {
        return divide(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 + num2;
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
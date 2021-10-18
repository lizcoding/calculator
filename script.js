const divideButton = document.getElementById('divide');
const multipyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const toggleSignButton = document.getElementById('toggle-sign');

let num1 = 0;
let num2 = 0;
let operator = '';

function opperate(num1, num2, operator) {
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
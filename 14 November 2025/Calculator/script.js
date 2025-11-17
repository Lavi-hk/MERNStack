const display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function appendOperator(operator) {
    if (expression === '') return;
    if (['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
        return;
    }
    expression += operator;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '0';
}

function deleteLastChar() {
    expression = expression.slice(0, -1);
    display.value = expression || '0';
}

function calculate() {
    if (expression === '') return;
    
    try {
        let result = eval(expression);
        result = Math.round(result * 100) / 100;
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLastChar();
    }
});

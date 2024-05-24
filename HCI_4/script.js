const display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value === null) {
            if (button.id === 'clear') {
                clearCalculator();
            } else if (button.id === 'equals') {
                calculateResult();
            }
        } else {
            handleInput(value);
        }
    });
});

function handleInput(value) {
    if (isOperator(value)) {
        if (currentOperator !== null) {
            calculateResult();
        }
        firstOperand = parseFloat(currentInput);
        currentOperator = value;
        currentInput = '';
    } else {
        currentInput += value;
    }
    updateDisplay(currentInput);
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function updateDisplay(value) {
    display.textContent = value || '0';
}

function clearCalculator() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay('0');
}

function calculateResult() {
    if (currentOperator !== null && currentInput !== '') {
        secondOperand = parseFloat(currentInput);
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        updateDisplay(result);
        currentInput = result.toString();
        firstOperand = result;
        currentOperator = null;
    }
}

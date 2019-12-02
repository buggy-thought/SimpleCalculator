const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

// getting user input
function getUserinput() {
    return parseInt(userInput.value);
}

function performAndDisplayOutput(operator, prevResult, userInput) {
    const calcDescription = `${prevResult} ${operator} ${userInput}`;

    outputResult(currentResult, calcDescription); // from vendor.js
}

// unified calculation function

function calculateResult(calcType) {
    const userInput = getUserinput();
    if (calcType !== 'ADD' &&
        calcType !== 'SUBTRACT' &&
        calcType !== 'MULTIPLY' &&
        calcType !== 'DIVIDE' ||
        userInput === 0
    ) {
        return;
    }

    const prevResult = currentResult;
    
    let mathOperator;

    switch (calcType) {
        case 'ADD':
            currentResult = currentResult + getUserinput();
            mathOperator = '+';
            break;
        case 'SUBTRACT':
            currentResult = currentResult - getUserinput();
            mathOperator = '-';
            break;
        case 'MULTIPLY':
            currentResult = currentResult * getUserinput();
            mathOperator = '*';
            break;
        case 'DIVIDE':
            currentResult = currentResult / getUserinput();
            mathOperator = '/';
            break;
        default:
            console.log('This should not happen');
    }


    performAndDisplayOutput(mathOperator, prevResult, userInput);
    let logEntry = {
        operation: calcType,
        prevResult: prevResult,
        enteredNum: userInput,
        currentResult: currentResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);

}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}
function mult() {
    calculateResult('MULTIPLY');
}
function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', mult);
divideBtn.addEventListener('click', divide);
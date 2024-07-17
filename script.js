function calculateResult() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operator = document.getElementById('operator').value;
    const operand2 = parseFloat(document.getElementById('operand2').value);
    let result;

    if (isNaN(operand1) || isNaN(operand2)) {
        result = 'Error';
    } else {
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand2 !== 0 ? operand1 / operand2 : 'Error';
                break;
            default:
                result = 'Error';
        }
    }

    document.getElementById('result').value = result;
}

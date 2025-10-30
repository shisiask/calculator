class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetDisplay = false;
    }

    delete() {
        if (this.currentOperand === '0') return;
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    appendNumber(number) {
        if (this.shouldResetDisplay) {
            this.currentOperand = '0';
            this.shouldResetDisplay = false;
        }
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                computation = prev / current;
                break;
            case '^':
                computation = Math.pow(prev, current);
                break;
            default:
                return;
        }
        
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetDisplay = true;
    }

    applyFunction(func) {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        
        let result;
        
        switch (func) {
            case 'sin':
                result = Math.sin(this.toRadians(current));
                break;
            case 'cos':
                result = Math.cos(this.toRadians(current));
                break;
            case 'tan':
                result = Math.tan(this.toRadians(current));
                break;
            case 'asin':
                if (current < -1 || current > 1) {
                    alert('Invalid input for asin. Value must be between -1 and 1');
                    return;
                }
                result = this.toDegrees(Math.asin(current));
                break;
            case 'acos':
                if (current < -1 || current > 1) {
                    alert('Invalid input for acos. Value must be between -1 and 1');
                    return;
                }
                result = this.toDegrees(Math.acos(current));
                break;
            case 'atan':
                result = this.toDegrees(Math.atan(current));
                break;
            case 'log':
                if (current <= 0) {
                    alert('Invalid input for log. Value must be positive');
                    return;
                }
                result = Math.log10(current);
                break;
            case 'ln':
                if (current <= 0) {
                    alert('Invalid input for ln. Value must be positive');
                    return;
                }
                result = Math.log(current);
                break;
            case 'sqrt':
                if (current < 0) {
                    alert('Invalid input for sqrt. Value must be non-negative');
                    return;
                }
                result = Math.sqrt(current);
                break;
            case 'square':
                result = current * current;
                break;
            case 'inverse':
                if (current === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = 1 / current;
                break;
            case 'factorial':
                if (current < 0 || !Number.isInteger(current)) {
                    alert('Factorial is only defined for non-negative integers');
                    return;
                }
                if (current > 170) {
                    alert('Number too large for factorial');
                    return;
                }
                result = this.factorial(current);
                break;
            case 'negate':
                result = -current;
                break;
            case 'abs':
                result = Math.abs(current);
                break;
            default:
                return;
        }
        
        this.currentOperand = result.toString();
        this.shouldResetDisplay = true;
    }

    addConstant(constant) {
        if (this.shouldResetDisplay || this.currentOperand === '0') {
            this.shouldResetDisplay = false;
        }
        
        switch (constant) {
            case 'pi':
                this.currentOperand = Math.PI.toString();
                break;
            case 'e':
                this.currentOperand = Math.E.toString();
                break;
        }
        this.shouldResetDisplay = true;
    }

    factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.textContent = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandElement.textContent = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }
}

// Initialize calculator
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');
const calculator = new Calculator(previousOperandElement, currentOperandElement);

// Number buttons
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

// Operator buttons
document.querySelectorAll('[data-operator]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();
    });
});

// Function buttons
document.querySelectorAll('[data-function]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.applyFunction(button.dataset.function);
        calculator.updateDisplay();
    });
});

// Constant buttons
document.querySelectorAll('[data-constant]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.addConstant(button.dataset.constant);
        calculator.updateDisplay();
    });
});

// Action buttons
document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.action) {
            case 'clear':
                calculator.clear();
                break;
            case 'delete':
                calculator.delete();
                break;
            case 'equals':
                calculator.compute();
                break;
        }
        calculator.updateDisplay();
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9' || e.key === '.') {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
        calculator.updateDisplay();
    } else if (e.key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();
    } else if (e.key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    }
});

// Initialize display
calculator.updateDisplay();

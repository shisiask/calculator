# Scientific Calculator

A fully functional web-based scientific calculator with a modern, responsive design.

## Features

### Basic Operations
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷)
- Power (x^y)

### Scientific Functions
- **Trigonometric Functions**: sin, cos, tan (in degrees)
- **Inverse Trigonometric Functions**: asin, acos, atan (results in degrees)
- **Logarithmic Functions**: log (base 10), ln (natural logarithm)
- **Root Functions**: √ (square root)
- **Power Functions**: x² (square), x^y (power)
- **Other Functions**: 
  - n! (factorial)
  - 1/x (inverse)
  - +/− (negate)
  - |x| (absolute value)

### Mathematical Constants
- π (pi ≈ 3.14159...)
- e (Euler's number ≈ 2.71828...)

## Usage

### Running the Calculator
1. Open `index.html` in any modern web browser
2. The calculator will load with a dark, modern interface

### Using the Calculator
- **Click buttons** to input numbers and operations
- **Keyboard support**:
  - Numbers: 0-9
  - Operators: +, -, *, /
  - Equals: Enter or =
  - Clear: Escape
  - Delete: Backspace

### Example Calculations
- **Basic**: `7 + 3 =` → 10
- **Scientific**: Click `sin`, enter `30`, click `sin` → 0.5
- **Power**: `2`, click `x^y`, `8`, click `=` → 256
- **Logarithm**: `100`, click `log` → 2
- **Factorial**: `5`, click `n!` → 120

## Files
- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `calculator.js` - Calculator logic and functionality

## Browser Compatibility
Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Notes
- Trigonometric functions use degrees (not radians)
- Factorial is limited to non-negative integers ≤ 170
- Division by zero is prevented with alerts
- Invalid inputs for special functions (e.g., negative numbers for square root) show appropriate error messages

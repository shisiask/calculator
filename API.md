# Scientific Calculator - API Reference

Complete API documentation for the scientific calculator library.

## Table of Contents

- [Calculator Class](#calculator-class)
- [Basic Operations](#basic-operations)
- [Scientific Operations](#scientific-operations)
- [Trigonometric Functions](#trigonometric-functions)
- [Hyperbolic Functions](#hyperbolic-functions)
- [Logarithmic Functions](#logarithmic-functions)
- [Utility Functions](#utility-functions)
- [Constants](#constants)
- [Types](#types)
- [Error Classes](#error-classes)

---

## Calculator Class

### Constructor

```typescript
new Calculator(options?: CalculatorOptions)
```

Creates a new Calculator instance with optional configuration.

**Parameters:**
- `options` (optional): Configuration object
  - `angleUnit?: 'radians' | 'degrees'` - Unit for trigonometric functions (default: `'radians'`)
  - `precision?: number` - Number of decimal places for results, 0-15 (default: `15`)

**Returns:** Calculator instance

**Example:**
```typescript
const calc = new Calculator();
const calcDegrees = new Calculator({ angleUnit: 'degrees', precision: 2 });
```

---

### Configuration Methods

#### setAngleUnit

```typescript
setAngleUnit(unit: AngleUnit): void
```

Sets the angle unit for trigonometric functions.

**Parameters:**
- `unit`: `'radians'` or `'degrees'`

**Example:**
```typescript
calc.setAngleUnit('degrees');
```

---

#### getAngleUnit

```typescript
getAngleUnit(): AngleUnit
```

Returns the current angle unit setting.

**Returns:** `'radians'` or `'degrees'`

**Example:**
```typescript
const unit = calc.getAngleUnit(); // 'radians'
```

---

#### setPrecision

```typescript
setPrecision(precision: number): void
```

Sets the number of decimal places for results.

**Parameters:**
- `precision`: Number between 0 and 15

**Throws:**
- `Error` if precision is not between 0 and 15

**Example:**
```typescript
calc.setPrecision(3);
calc.divide(10, 3); // 3.333
```

---

#### getPrecision

```typescript
getPrecision(): number
```

Returns the current precision setting.

**Returns:** Number between 0 and 15

**Example:**
```typescript
const precision = calc.getPrecision(); // 15
```

---

### Calculator Methods

All Calculator methods correspond to their standalone function equivalents but use the instance's precision and angle unit settings.

**Basic Operations:**
- `add(a: number, b: number): number`
- `subtract(a: number, b: number): number`
- `multiply(a: number, b: number): number`
- `divide(a: number, b: number): number`
- `modulo(a: number, b: number): number`
- `abs(a: number): number`
- `sign(a: number): number`
- `ceil(a: number): number`
- `floor(a: number): number`
- `round(a: number): number`

**Scientific Operations:**
- `power(base: number, exponent: number): number`
- `sqrt(value: number): number`
- `nthRoot(value: number, n: number): number`
- `factorial(n: number): number`

**Logarithmic:**
- `ln(value: number): number`
- `log10(value: number): number`
- `log2(value: number): number`
- `exp(value: number): number`

**Trigonometric:**
- `sin(angle: number): number`
- `cos(angle: number): number`
- `tan(angle: number): number`
- `asin(value: number): number`
- `acos(value: number): number`
- `atan(value: number): number`
- `atan2(y: number, x: number): number`

**Hyperbolic:**
- `sinh(value: number): number`
- `cosh(value: number): number`
- `tanh(value: number): number`
- `asinh(value: number): number`
- `acosh(value: number): number`
- `atanh(value: number): number`

**Conversion:**
- `degreesToRadians(degrees: number): number`
- `radiansToDegrees(radians: number): number`

---

## Basic Operations

### add

```typescript
function add(a: number, b: number): number
```

Adds two numbers.

**Parameters:**
- `a`: First number
- `b`: Second number

**Returns:** Sum of a and b

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `OverflowError` if result overflows

**Example:**
```typescript
add(5, 3);        // 8
add(-10, 5);      // -5
add(0.1, 0.2);    // 0.30000000000000004
```

---

### subtract

```typescript
function subtract(a: number, b: number): number
```

Subtracts the second number from the first.

**Parameters:**
- `a`: Number to subtract from
- `b`: Number to subtract

**Returns:** Difference of a and b

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `OverflowError` if result overflows

**Example:**
```typescript
subtract(10, 3);  // 7
subtract(5, 10);  // -5
```

---

### multiply

```typescript
function multiply(a: number, b: number): number
```

Multiplies two numbers.

**Parameters:**
- `a`: First number
- `b`: Second number

**Returns:** Product of a and b

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `OverflowError` if result overflows

**Example:**
```typescript
multiply(6, 7);     // 42
multiply(-3, 4);    // -12
multiply(0.5, 0.5); // 0.25
```

---

### divide

```typescript
function divide(a: number, b: number): number
```

Divides the first number by the second.

**Parameters:**
- `a`: Dividend
- `b`: Divisor

**Returns:** Quotient of a divided by b

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `DivisionByZeroError` if b is zero
- `OverflowError` if result overflows

**Example:**
```typescript
divide(20, 4);    // 5
divide(10, 3);    // 3.3333333333333335
divide(1, 8);     // 0.125
```

---

### modulo

```typescript
function modulo(a: number, b: number): number
```

Returns the remainder of a divided by b.

**Parameters:**
- `a`: Dividend
- `b`: Divisor

**Returns:** Remainder of a mod b

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `DivisionByZeroError` if b is zero

**Example:**
```typescript
modulo(10, 3);    // 1
modulo(15, 4);    // 3
modulo(5.5, 2);   // 1.5
```

---

### abs

```typescript
function abs(a: number): number
```

Returns the absolute value of a number.

**Parameters:**
- `a`: Input number

**Returns:** Absolute value of a

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
abs(-42);   // 42
abs(42);    // 42
abs(-0.5);  // 0.5
```

---

### sign

```typescript
function sign(a: number): number
```

Returns the sign of a number.

**Parameters:**
- `a`: Input number

**Returns:** -1 for negative numbers, 0 for zero, 1 for positive numbers

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
sign(-42);    // -1
sign(42);     // 1
sign(0);      // 0
```

---

### ceil

```typescript
function ceil(a: number): number
```

Rounds a number up to the nearest integer.

**Parameters:**
- `a`: Input number

**Returns:** Smallest integer greater than or equal to a

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
ceil(4.1);    // 5
ceil(4.9);    // 5
ceil(-4.1);   // -4
```

---

### floor

```typescript
function floor(a: number): number
```

Rounds a number down to the nearest integer.

**Parameters:**
- `a`: Input number

**Returns:** Largest integer less than or equal to a

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
floor(4.1);   // 4
floor(4.9);   // 4
floor(-4.1);  // -5
```

---

### round

```typescript
function round(a: number): number
```

Rounds a number to the nearest integer.

**Parameters:**
- `a`: Input number

**Returns:** Nearest integer to a

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
round(4.4);   // 4
round(4.5);   // 5
round(4.6);   // 5
```

---

### roundToDecimal

```typescript
function roundToDecimal(value: number, decimals: number): number
```

Rounds a number to a specified number of decimal places.

**Parameters:**
- `value`: Number to round
- `decimals`: Number of decimal places (non-negative integer)

**Returns:** Value rounded to specified decimal places

**Throws:**
- `InvalidInputError` if inputs are invalid or decimals is negative

**Example:**
```typescript
roundToDecimal(3.14159, 2);   // 3.14
roundToDecimal(3.14159, 4);   // 3.1416
roundToDecimal(10/3, 3);      // 3.333
```

---

## Scientific Operations

### power

```typescript
function power(base: number, exponent: number): number
```

Raises a base to an exponent.

**Parameters:**
- `base`: Base number
- `exponent`: Exponent

**Returns:** base^exponent

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `OverflowError` if result overflows
- `DomainError` if result is not a real number

**Example:**
```typescript
power(2, 3);      // 8
power(2, 8);      // 256
power(10, -2);    // 0.01
power(2, 0.5);    // 1.4142135623730951 (√2)
```

---

### sqrt

```typescript
function sqrt(a: number): number
```

Returns the square root of a number.

**Parameters:**
- `a`: Input number (non-negative)

**Returns:** Square root of a

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if a is negative

**Example:**
```typescript
sqrt(4);      // 2
sqrt(16);     // 4
sqrt(144);    // 12
sqrt(2);      // 1.4142135623730951
```

---

### nthRoot

```typescript
function nthRoot(value: number, n: number): number
```

Returns the nth root of a number.

**Parameters:**
- `value`: Input number
- `n`: Root degree (non-zero)

**Returns:** nth root of value

**Throws:**
- `InvalidInputError` if inputs are not finite numbers
- `DomainError` if n is zero or even root of negative number

**Example:**
```typescript
nthRoot(27, 3);    // 3 (cube root)
nthRoot(16, 4);    // 2
nthRoot(-27, 3);   // -3 (odd roots work with negative numbers)
```

---

### factorial

```typescript
function factorial(n: number): number
```

Returns the factorial of a non-negative integer.

**Parameters:**
- `n`: Non-negative integer (max 170)

**Returns:** n! (n factorial)

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if n is negative or non-integer
- `OverflowError` if n > 170

**Example:**
```typescript
factorial(0);     // 1
factorial(5);     // 120
factorial(10);    // 3628800
factorial(170);   // 7.257415615307999e+306
```

---

## Logarithmic Functions

### ln

```typescript
function ln(a: number): number
```

Returns the natural logarithm (base e) of a number.

**Parameters:**
- `a`: Input number (positive)

**Returns:** Natural logarithm of a

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if a ≤ 0

**Example:**
```typescript
ln(1);           // 0
ln(Math.E);      // 1
ln(10);          // 2.302585092994046
```

---

### log10

```typescript
function log10(a: number): number
```

Returns the base-10 logarithm of a number.

**Parameters:**
- `a`: Input number (positive)

**Returns:** Base-10 logarithm of a

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if a ≤ 0

**Example:**
```typescript
log10(1);        // 0
log10(10);       // 1
log10(100);      // 2
log10(1000);     // 3
```

---

### log2

```typescript
function log2(a: number): number
```

Returns the base-2 logarithm of a number.

**Parameters:**
- `a`: Input number (positive)

**Returns:** Base-2 logarithm of a

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if a ≤ 0

**Example:**
```typescript
log2(1);         // 0
log2(2);         // 1
log2(8);         // 3
log2(1024);      // 10
```

---

### exp

```typescript
function exp(a: number): number
```

Returns e raised to the power of a.

**Parameters:**
- `a`: Exponent

**Returns:** e^a

**Throws:**
- `InvalidInputError` if input is not a finite number
- `OverflowError` if result overflows

**Example:**
```typescript
exp(0);          // 1
exp(1);          // 2.718281828459045 (e)
exp(2);          // 7.38905609893065
exp(-1);         // 0.36787944117144233
```

---

## Trigonometric Functions

### sin

```typescript
function sin(angle: number, unit?: AngleUnit): number
```

Returns the sine of an angle.

**Parameters:**
- `angle`: Angle value
- `unit`: `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Sine of the angle

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
sin(0);                    // 0
sin(Math.PI / 2);          // 1
sin(Math.PI);              // ~0
sin(90, 'degrees');        // 1
```

---

### cos

```typescript
function cos(angle: number, unit?: AngleUnit): number
```

Returns the cosine of an angle.

**Parameters:**
- `angle`: Angle value
- `unit`: `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Cosine of the angle

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
cos(0);                    // 1
cos(Math.PI);              // -1
cos(90, 'degrees');        // ~0
```

---

### tan

```typescript
function tan(angle: number, unit?: AngleUnit): number
```

Returns the tangent of an angle.

**Parameters:**
- `angle`: Angle value
- `unit`: `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Tangent of the angle

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if angle is an odd multiple of π/2 (90°)

**Example:**
```typescript
tan(0);                    // 0
tan(Math.PI / 4);          // 1
tan(45, 'degrees');        // 1
```

---

### asin

```typescript
function asin(value: number, unit?: AngleUnit): number
```

Returns the arcsine (inverse sine) of a value.

**Parameters:**
- `value`: Input value (must be in [-1, 1])
- `unit`: Return angle in `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Arcsine of the value

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if value is not in [-1, 1]

**Example:**
```typescript
asin(0);                   // 0
asin(0.5);                 // 0.5235987755982989 (30° in radians)
asin(1);                   // 1.5707963267948966 (90° in radians)
asin(1, 'degrees');        // 90
```

---

### acos

```typescript
function acos(value: number, unit?: AngleUnit): number
```

Returns the arccosine (inverse cosine) of a value.

**Parameters:**
- `value`: Input value (must be in [-1, 1])
- `unit`: Return angle in `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Arccosine of the value

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if value is not in [-1, 1]

**Example:**
```typescript
acos(1);                   // 0
acos(0.5);                 // 1.0471975511965979 (60° in radians)
acos(0);                   // 1.5707963267948966 (90° in radians)
acos(0.5, 'degrees');      // 60
```

---

### atan

```typescript
function atan(value: number, unit?: AngleUnit): number
```

Returns the arctangent (inverse tangent) of a value.

**Parameters:**
- `value`: Input value
- `unit`: Return angle in `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Arctangent of the value

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
atan(0);                   // 0
atan(1);                   // 0.7853981633974483 (45° in radians)
atan(1, 'degrees');        // 45
```

---

### atan2

```typescript
function atan2(y: number, x: number, unit?: AngleUnit): number
```

Returns the angle in the plane between the positive x-axis and the point (x, y).

**Parameters:**
- `y`: y-coordinate
- `x`: x-coordinate
- `unit`: Return angle in `'radians'` or `'degrees'` (default: `'radians'`)

**Returns:** Angle from x-axis to point (x, y)

**Throws:**
- `InvalidInputError` if inputs are not finite numbers

**Example:**
```typescript
atan2(1, 1);               // 0.7853981633974483 (45° in radians)
atan2(1, 0);               // 1.5707963267948966 (90° in radians)
atan2(0, 1);               // 0
atan2(1, 1, 'degrees');    // 45
```

---

### degreesToRadians

```typescript
function degreesToRadians(degrees: number): number
```

Converts degrees to radians.

**Parameters:**
- `degrees`: Angle in degrees

**Returns:** Angle in radians

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
degreesToRadians(0);       // 0
degreesToRadians(45);      // 0.7853981633974483
degreesToRadians(90);      // 1.5707963267948966
degreesToRadians(180);     // 3.141592653589793
```

---

### radiansToDegrees

```typescript
function radiansToDegrees(radians: number): number
```

Converts radians to degrees.

**Parameters:**
- `radians`: Angle in radians

**Returns:** Angle in degrees

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
radiansToDegrees(0);               // 0
radiansToDegrees(Math.PI / 4);     // 45
radiansToDegrees(Math.PI / 2);     // 90
radiansToDegrees(Math.PI);         // 180
```

---

## Hyperbolic Functions

### sinh

```typescript
function sinh(value: number): number
```

Returns the hyperbolic sine of a value.

**Parameters:**
- `value`: Input value

**Returns:** Hyperbolic sine of value

**Throws:**
- `InvalidInputError` if input is not a finite number
- `OverflowError` if result overflows

**Example:**
```typescript
sinh(0);       // 0
sinh(1);       // 1.1752011936438014
sinh(-1);      // -1.1752011936438014
```

---

### cosh

```typescript
function cosh(value: number): number
```

Returns the hyperbolic cosine of a value.

**Parameters:**
- `value`: Input value

**Returns:** Hyperbolic cosine of value

**Throws:**
- `InvalidInputError` if input is not a finite number
- `OverflowError` if result overflows

**Example:**
```typescript
cosh(0);       // 1
cosh(1);       // 1.5430806348152437
cosh(-1);      // 1.5430806348152437
```

---

### tanh

```typescript
function tanh(value: number): number
```

Returns the hyperbolic tangent of a value.

**Parameters:**
- `value`: Input value

**Returns:** Hyperbolic tangent of value (always in range [-1, 1])

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
tanh(0);       // 0
tanh(1);       // 0.7615941559557649
tanh(-1);      // -0.7615941559557649
```

---

### asinh

```typescript
function asinh(value: number): number
```

Returns the inverse hyperbolic sine of a value.

**Parameters:**
- `value`: Input value

**Returns:** Inverse hyperbolic sine of value

**Throws:**
- `InvalidInputError` if input is not a finite number

**Example:**
```typescript
asinh(0);      // 0
asinh(1);      // 0.881373587019543
asinh(-1);     // -0.881373587019543
```

---

### acosh

```typescript
function acosh(value: number): number
```

Returns the inverse hyperbolic cosine of a value.

**Parameters:**
- `value`: Input value (must be ≥ 1)

**Returns:** Inverse hyperbolic cosine of value

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if value < 1

**Example:**
```typescript
acosh(1);      // 0
acosh(2);      // 1.3169578969248166
acosh(10);     // 2.993222846126381
```

---

### atanh

```typescript
function atanh(value: number): number
```

Returns the inverse hyperbolic tangent of a value.

**Parameters:**
- `value`: Input value (must be in (-1, 1))

**Returns:** Inverse hyperbolic tangent of value

**Throws:**
- `InvalidInputError` if input is not a finite number
- `DomainError` if value ≤ -1 or value ≥ 1

**Example:**
```typescript
atanh(0);      // 0
atanh(0.5);    // 0.5493061443340548
atanh(-0.5);   // -0.5493061443340548
```

---

## Utility Functions

### validateNumber

```typescript
function validateNumber(n: number, operationName: string): void
```

Validates that a value is a finite number.

**Parameters:**
- `n`: Value to validate
- `operationName`: Name of operation (for error messages)

**Throws:**
- `InvalidInputError` if value is not a finite number

**Example:**
```typescript
validateNumber(42, 'myOperation');          // No error
validateNumber(NaN, 'myOperation');         // Throws InvalidInputError
validateNumber(Infinity, 'myOperation');    // Throws InvalidInputError
```

---

## Constants

The calculator exports several mathematical constants:

```typescript
// Fundamental constants
export const PI: number;              // 3.141592653589793
export const E: number;               // 2.718281828459045
export const PHI: number;             // 1.618033988749895 (Golden ratio)

// Square roots
export const SQRT2: number;           // 1.4142135623730951
export const SQRT1_2: number;         // 0.7071067811865476

// Logarithm constants
export const LN2: number;             // 0.6931471805599453
export const LN10: number;            // 2.302585092994046
export const LOG2E: number;           // 1.4426950408889634
export const LOG10E: number;          // 0.4342944819032518

// Precision constants
export const EPSILON: number;         // 2.220446049250313e-16
export const MAX_SAFE_INTEGER: number;  // 9007199254740991
export const MIN_SAFE_INTEGER: number;  // -9007199254740991
export const MAX_VALUE: number;       // 1.7976931348623157e+308
export const MIN_VALUE: number;       // 5e-324

// Calculation limits
export const MAX_FACTORIAL: number;   // 170
export const PRECISION_DIGITS: number;  // 15
```

**Example:**
```typescript
import { PI, E, PHI } from 'scientific-calculator';

const circumference = 2 * PI * radius;
const area = PI * radius * radius;
const growth = principal * Math.pow(E, rate * time);
const goldenRectangle = width * PHI;
```

---

## Types

### AngleUnit

```typescript
type AngleUnit = 'radians' | 'degrees';
```

Specifies the unit for angle measurements.

---

### CalculatorOptions

```typescript
interface CalculatorOptions {
  angleUnit?: AngleUnit;
  precision?: number;
}
```

Configuration options for Calculator constructor.

**Properties:**
- `angleUnit`: Optional angle unit (`'radians'` or `'degrees'`)
- `precision`: Optional precision (0-15 decimal places)

---

### OperationResult

```typescript
type OperationResult = {
  value: number;
  error?: string;
};
```

Result type for operations that may produce errors.

**Properties:**
- `value`: Result value
- `error`: Optional error message

---

### Operation

```typescript
enum Operation {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  DIVIDE = 'divide',
  POWER = 'power',
  ROOT = 'root',
  SQRT = 'sqrt',
  FACTORIAL = 'factorial',
  SIN = 'sin',
  COS = 'cos',
  TAN = 'tan',
  ASIN = 'asin',
  ACOS = 'acos',
  ATAN = 'atan',
  SINH = 'sinh',
  COSH = 'cosh',
  TANH = 'tanh',
  LOG = 'log',
  LN = 'ln',
  LOG2 = 'log2',
  EXP = 'exp',
  ABS = 'abs',
  CEIL = 'ceil',
  FLOOR = 'floor',
  ROUND = 'round',
  SIGN = 'sign',
}
```

Enumeration of all available operations.

---

## Error Classes

### CalculatorError

```typescript
class CalculatorError extends Error
```

Base class for all calculator errors.

**Example:**
```typescript
try {
  // ... calculation
} catch (error) {
  if (error instanceof CalculatorError) {
    console.error('Calculator error:', error.message);
  }
}
```

---

### DivisionByZeroError

```typescript
class DivisionByZeroError extends CalculatorError
```

Thrown when attempting to divide by zero.

**Message:** `"Division by zero is undefined"`

**Example:**
```typescript
try {
  divide(10, 0);
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.error('Cannot divide by zero!');
  }
}
```

---

### InvalidInputError

```typescript
class InvalidInputError extends CalculatorError
```

Thrown when input is invalid (NaN, Infinity, wrong type).

**Message Format:** `"Invalid input: {details}"`

**Example:**
```typescript
try {
  add(NaN, 5);
} catch (error) {
  if (error instanceof InvalidInputError) {
    console.error('Invalid input:', error.message);
  }
}
```

---

### OverflowError

```typescript
class OverflowError extends CalculatorError
```

Thrown when a result is too large to represent.

**Message Format:** `"Overflow occurred in {operation} operation"`

**Example:**
```typescript
try {
  factorial(200);
} catch (error) {
  if (error instanceof OverflowError) {
    console.error('Result too large:', error.message);
  }
}
```

---

### UnderflowError

```typescript
class UnderflowError extends CalculatorError
```

Thrown when a result is too small to represent.

**Message Format:** `"Underflow occurred in {operation} operation"`

---

### DomainError

```typescript
class DomainError extends CalculatorError
```

Thrown when an operation is undefined for the given input.

**Message Format:** `"Domain error in {operation}: {reason}"`

**Common Cases:**
- Square root of negative number
- Logarithm of non-positive number
- Arcsine/arccosine outside [-1, 1]
- Even root of negative number

**Example:**
```typescript
try {
  sqrt(-1);
} catch (error) {
  if (error instanceof DomainError) {
    console.error('Domain error:', error.message);
    // "Domain error in sqrt: cannot take square root of negative number"
  }
}

try {
  ln(0);
} catch (error) {
  if (error instanceof DomainError) {
    console.error('Domain error:', error.message);
    // "Domain error in ln: logarithm is only defined for positive numbers"
  }
}
```

---

## Complete Import Reference

### Named Imports

```typescript
// Calculator class
import { Calculator } from 'scientific-calculator';

// Basic operations
import {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  abs,
  sign,
  ceil,
  floor,
  round,
  roundToDecimal
} from 'scientific-calculator';

// Scientific operations
import {
  power,
  sqrt,
  nthRoot,
  factorial
} from 'scientific-calculator';

// Logarithmic functions
import {
  ln,
  log10,
  log2,
  exp
} from 'scientific-calculator';

// Trigonometric functions
import {
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  atan2,
  degreesToRadians,
  radiansToDegrees
} from 'scientific-calculator';

// Hyperbolic functions
import {
  sinh,
  cosh,
  tanh,
  asinh,
  acosh,
  atanh
} from 'scientific-calculator';

// Constants
import {
  PI,
  E,
  PHI,
  SQRT2,
  SQRT1_2,
  LN2,
  LN10,
  LOG2E,
  LOG10E,
  EPSILON,
  MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER,
  MAX_VALUE,
  MIN_VALUE,
  MAX_FACTORIAL,
  PRECISION_DIGITS
} from 'scientific-calculator';

// Types
import type {
  AngleUnit,
  CalculatorOptions,
  OperationResult
} from 'scientific-calculator';

import { Operation } from 'scientific-calculator';

// Errors
import {
  CalculatorError,
  DivisionByZeroError,
  InvalidInputError,
  OverflowError,
  UnderflowError,
  DomainError
} from 'scientific-calculator';

// Utility
import { validateNumber } from 'scientific-calculator';
```

### Default Import

```typescript
import Calculator from 'scientific-calculator';

const calc = new Calculator();
```

---

## Version Information

This API reference is for version 1.0.0 of the scientific calculator library.

For more examples, see [EXAMPLES.md](./EXAMPLES.md).
For general usage information, see [README.md](./README.md).

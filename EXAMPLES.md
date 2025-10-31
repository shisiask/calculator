# Scientific Calculator - Code Examples

This document provides extensive code examples demonstrating all features of the scientific calculator library.

## Table of Contents

- [Basic Arithmetic Operations](#basic-arithmetic-operations)
- [Advanced Arithmetic](#advanced-arithmetic)
- [Scientific Operations](#scientific-operations)
- [Trigonometric Functions](#trigonometric-functions)
- [Hyperbolic Functions](#hyperbolic-functions)
- [Logarithmic Functions](#logarithmic-functions)
- [Using the Calculator Class](#using-the-calculator-class)
- [Error Handling](#error-handling)
- [Working with Constants](#working-with-constants)
- [CLI Usage Examples](#cli-usage-examples)

## Basic Arithmetic Operations

### Addition and Subtraction

```typescript
import { add, subtract } from 'scientific-calculator';

// Simple addition
const sum1 = add(5, 3);              // 8
const sum2 = add(-10, 5);            // -5
const sum3 = add(0.1, 0.2);          // 0.30000000000000004

// Subtraction
const diff1 = subtract(10, 3);       // 7
const diff2 = subtract(5, 10);       // -5
const diff3 = subtract(-5, -3);      // -2

// Large numbers
const bigSum = add(1e10, 1e10);      // 20000000000
```

### Multiplication and Division

```typescript
import { multiply, divide } from 'scientific-calculator';

// Multiplication
const product1 = multiply(6, 7);     // 42
const product2 = multiply(-3, 4);    // -12
const product3 = multiply(0.5, 0.5); // 0.25

// Division
const quotient1 = divide(20, 4);     // 5
const quotient2 = divide(10, 3);     // 3.3333333333333335
const quotient3 = divide(1, 8);      // 0.125
const quotient4 = divide(-15, 3);    // -5
```

### Modulo Operation

```typescript
import { modulo } from 'scientific-calculator';

// Basic modulo
const mod1 = modulo(10, 3);          // 1
const mod2 = modulo(15, 4);          // 3
const mod3 = modulo(7, 7);           // 0

// Negative numbers
const mod4 = modulo(-10, 3);         // -1
const mod5 = modulo(10, -3);         // 1

// Floating point
const mod6 = modulo(5.5, 2);         // 1.5
```

## Advanced Arithmetic

### Absolute Value and Sign

```typescript
import { abs, sign } from 'scientific-calculator';

// Absolute value
const abs1 = abs(-42);               // 42
const abs2 = abs(42);                // 42
const abs3 = abs(0);                 // 0
const abs4 = abs(-0.5);              // 0.5

// Sign function
const sign1 = sign(-42);             // -1
const sign2 = sign(42);              // 1
const sign3 = sign(0);               // 0
const sign4 = sign(-0.001);          // -1
```

### Rounding Functions

```typescript
import { ceil, floor, round, roundToDecimal } from 'scientific-calculator';

// Ceiling (round up)
const ceil1 = ceil(4.1);             // 5
const ceil2 = ceil(4.9);             // 5
const ceil3 = ceil(-4.1);            // -4

// Floor (round down)
const floor1 = floor(4.1);           // 4
const floor2 = floor(4.9);           // 4
const floor3 = floor(-4.1);          // -5

// Standard rounding
const round1 = round(4.4);           // 4
const round2 = round(4.5);           // 5
const round3 = round(4.6);           // 5
const round4 = round(-4.5);          // -4

// Round to specific decimal places
const precise1 = roundToDecimal(3.14159, 2);   // 3.14
const precise2 = roundToDecimal(3.14159, 4);   // 3.1416
const precise3 = roundToDecimal(10/3, 3);      // 3.333
```

## Scientific Operations

### Power and Roots

```typescript
import { power, sqrt, nthRoot } from 'scientific-calculator';

// Power operations
const pow1 = power(2, 3);            // 8
const pow2 = power(2, 8);            // 256
const pow3 = power(5, 2);            // 25
const pow4 = power(10, -2);          // 0.01
const pow5 = power(2, 0.5);          // 1.4142135623730951 (√2)

// Square root
const sqrt1 = sqrt(4);               // 2
const sqrt2 = sqrt(16);              // 4
const sqrt3 = sqrt(144);             // 12
const sqrt4 = sqrt(2);               // 1.4142135623730951
const sqrt5 = sqrt(0);               // 0

// Nth root
const cbrt = nthRoot(27, 3);         // 3 (cube root)
const fourthRoot = nthRoot(16, 4);   // 2
const fifthRoot = nthRoot(32, 5);    // 2

// Negative numbers with odd roots
const negCbrt = nthRoot(-27, 3);     // -3
```

### Factorial

```typescript
import { factorial } from 'scientific-calculator';

// Basic factorials
const fact1 = factorial(0);          // 1
const fact2 = factorial(1);          // 1
const fact3 = factorial(5);          // 120
const fact4 = factorial(10);         // 3628800

// Larger factorials
const fact5 = factorial(20);         // 2432902008176640000
const fact6 = factorial(50);         // 3.0414093201713376e+64

// Maximum safe factorial
const fact7 = factorial(170);        // 7.257415615307999e+306
```

## Trigonometric Functions

### Basic Trigonometry (Radians)

```typescript
import { sin, cos, tan, PI } from 'scientific-calculator';

// Sine
const sin1 = sin(0);                 // 0
const sin2 = sin(PI / 6);            // 0.5 (30°)
const sin3 = sin(PI / 4);            // 0.7071067811865476 (45°)
const sin4 = sin(PI / 3);            // 0.8660254037844387 (60°)
const sin5 = sin(PI / 2);            // 1 (90°)
const sin6 = sin(PI);                // ~0 (180°)

// Cosine
const cos1 = cos(0);                 // 1
const cos2 = cos(PI / 6);            // 0.8660254037844387 (30°)
const cos3 = cos(PI / 4);            // 0.7071067811865476 (45°)
const cos4 = cos(PI / 3);            // 0.5 (60°)
const cos5 = cos(PI / 2);            // ~0 (90°)
const cos6 = cos(PI);                // -1 (180°)

// Tangent
const tan1 = tan(0);                 // 0
const tan2 = tan(PI / 4);            // 1 (45°)
const tan3 = tan(PI / 6);            // 0.5773502691896257 (30°)
const tan4 = tan(PI / 3);            // 1.7320508075688767 (60°)
```

### Basic Trigonometry (Degrees)

```typescript
import { sin, cos, tan } from 'scientific-calculator';

// Sine in degrees
const sin1 = sin(0, 'degrees');      // 0
const sin2 = sin(30, 'degrees');     // 0.5
const sin3 = sin(45, 'degrees');     // 0.7071067811865476
const sin4 = sin(60, 'degrees');     // 0.8660254037844387
const sin5 = sin(90, 'degrees');     // 1
const sin6 = sin(180, 'degrees');    // ~0

// Cosine in degrees
const cos1 = cos(0, 'degrees');      // 1
const cos2 = cos(30, 'degrees');     // 0.8660254037844387
const cos3 = cos(45, 'degrees');     // 0.7071067811865476
const cos4 = cos(60, 'degrees');     // 0.5
const cos5 = cos(90, 'degrees');     // ~0
const cos6 = cos(180, 'degrees');    // -1

// Tangent in degrees
const tan1 = tan(0, 'degrees');      // 0
const tan2 = tan(45, 'degrees');     // 1
const tan3 = tan(30, 'degrees');     // 0.5773502691896257
const tan4 = tan(60, 'degrees');     // 1.7320508075688767
```

### Inverse Trigonometric Functions

```typescript
import { asin, acos, atan, atan2 } from 'scientific-calculator';

// Arcsine (returns radians by default)
const asin1 = asin(0);               // 0
const asin2 = asin(0.5);             // 0.5235987755982989 (30° in radians)
const asin3 = asin(1);               // 1.5707963267948966 (90° in radians)
const asin4 = asin(-1);              // -1.5707963267948966 (-90° in radians)

// Arccosine
const acos1 = acos(1);               // 0
const acos2 = acos(0.5);             // 1.0471975511965979 (60° in radians)
const acos3 = acos(0);               // 1.5707963267948966 (90° in radians)
const acos4 = acos(-1);              // 3.141592653589793 (180° in radians)

// Arctangent
const atan1 = atan(0);               // 0
const atan2 = atan(1);               // 0.7853981633974483 (45° in radians)
const atan3 = atan(-1);              // -0.7853981633974483 (-45° in radians)
const atan4 = atan(Infinity);        // 1.5707963267948966 (90° in radians)

// Inverse functions in degrees
const asinDeg = asin(0.5, 'degrees');  // 30
const acosDeg = acos(0.5, 'degrees');  // 60
const atanDeg = atan(1, 'degrees');    // 45

// Two-argument arctangent (atan2)
const angle1 = atan2(1, 1);          // 0.7853981633974483 (45° in radians)
const angle2 = atan2(1, 0);          // 1.5707963267948966 (90° in radians)
const angle3 = atan2(0, 1);          // 0
const angle4 = atan2(-1, -1);        // -2.356194490192345 (-135° in radians)
```

### Angle Conversion

```typescript
import { degreesToRadians, radiansToDegrees, PI } from 'scientific-calculator';

// Degrees to radians
const rad1 = degreesToRadians(0);     // 0
const rad2 = degreesToRadians(45);    // 0.7853981633974483
const rad3 = degreesToRadians(90);    // 1.5707963267948966
const rad4 = degreesToRadians(180);   // 3.141592653589793
const rad5 = degreesToRadians(360);   // 6.283185307179586

// Radians to degrees
const deg1 = radiansToDegrees(0);     // 0
const deg2 = radiansToDegrees(PI/4);  // 45
const deg3 = radiansToDegrees(PI/2);  // 90
const deg4 = radiansToDegrees(PI);    // 180
const deg5 = radiansToDegrees(2*PI);  // 360
```

## Hyperbolic Functions

### Forward Hyperbolic Functions

```typescript
import { sinh, cosh, tanh } from 'scientific-calculator';

// Hyperbolic sine
const sinh1 = sinh(0);               // 0
const sinh2 = sinh(1);               // 1.1752011936438014
const sinh3 = sinh(-1);              // -1.1752011936438014
const sinh4 = sinh(2);               // 3.626860407847019

// Hyperbolic cosine
const cosh1 = cosh(0);               // 1
const cosh2 = cosh(1);               // 1.5430806348152437
const cosh3 = cosh(-1);              // 1.5430806348152437 (even function)
const cosh4 = cosh(2);               // 3.7621956910836314

// Hyperbolic tangent
const tanh1 = tanh(0);               // 0
const tanh2 = tanh(1);               // 0.7615941559557649
const tanh3 = tanh(-1);              // -0.7615941559557649
const tanh4 = tanh(Infinity);        // 1
```

### Inverse Hyperbolic Functions

```typescript
import { asinh, acosh, atanh } from 'scientific-calculator';

// Inverse hyperbolic sine
const asinh1 = asinh(0);             // 0
const asinh2 = asinh(1);             // 0.881373587019543
const asinh3 = asinh(-1);            // -0.881373587019543
const asinh4 = asinh(10);            // 2.99822295029797

// Inverse hyperbolic cosine
const acosh1 = acosh(1);             // 0
const acosh2 = acosh(2);             // 1.3169578969248166
const acosh3 = acosh(10);            // 2.993222846126381

// Inverse hyperbolic tangent
const atanh1 = atanh(0);             // 0
const atanh2 = atanh(0.5);           // 0.5493061443340548
const atanh3 = atanh(-0.5);          // -0.5493061443340548
const atanh4 = atanh(0.9);           // 1.4722194895832204
```

## Logarithmic Functions

### Natural and Common Logarithms

```typescript
import { ln, log10, log2, exp, E } from 'scientific-calculator';

// Natural logarithm (ln)
const ln1 = ln(1);                   // 0
const ln2 = ln(E);                   // 1
const ln3 = ln(10);                  // 2.302585092994046
const ln4 = ln(100);                 // 4.605170185988092
const ln5 = ln(0.5);                 // -0.6931471805599453

// Base-10 logarithm
const log1 = log10(1);               // 0
const log2 = log10(10);              // 1
const log3 = log10(100);             // 2
const log4 = log10(1000);            // 3
const log5 = log10(0.1);             // -1

// Base-2 logarithm
const log2_1 = log2(1);              // 0
const log2_2 = log2(2);              // 1
const log2_3 = log2(4);              // 2
const log2_4 = log2(8);              // 3
const log2_5 = log2(1024);           // 10
```

### Exponential Function

```typescript
import { exp, E } from 'scientific-calculator';

// Exponential (e^x)
const exp1 = exp(0);                 // 1
const exp2 = exp(1);                 // 2.718281828459045 (e)
const exp3 = exp(2);                 // 7.38905609893065
const exp4 = exp(-1);                // 0.36787944117144233
const exp5 = exp(10);                // 22026.465794806718

// Verifying inverse relationship
const x = 5;
const result = ln(exp(x));           // 5
const result2 = exp(ln(x));          // 5
```

## Using the Calculator Class

### Basic Calculator Usage

```typescript
import { Calculator } from 'scientific-calculator';

// Create a calculator with default settings
const calc = new Calculator();

// Perform calculations
calc.add(5, 3);                      // 8
calc.subtract(10, 4);                // 6
calc.multiply(6, 7);                 // 42
calc.divide(20, 4);                  // 5
calc.power(2, 10);                   // 1024
calc.sqrt(144);                      // 12
```

### Calculator with Custom Configuration

```typescript
import { Calculator } from 'scientific-calculator';

// Create calculator with degrees and precision
const calc = new Calculator({
  angleUnit: 'degrees',
  precision: 2
});

// Trigonometry in degrees
calc.sin(30);                        // 0.5
calc.cos(60);                        // 0.5
calc.tan(45);                        // 1

// Results are rounded to 2 decimal places
calc.divide(10, 3);                  // 3.33
calc.sqrt(2);                        // 1.41
```

### Dynamic Configuration Changes

```typescript
import { Calculator } from 'scientific-calculator';

const calc = new Calculator();

// Start with radians
calc.sin(Math.PI / 2);               // 1

// Switch to degrees
calc.setAngleUnit('degrees');
calc.sin(90);                        // 1

// Change precision
calc.setPrecision(3);
calc.divide(10, 3);                  // 3.333

calc.setPrecision(5);
calc.divide(10, 3);                  // 3.33333

// Check current settings
console.log(calc.getAngleUnit());    // 'degrees'
console.log(calc.getPrecision());    // 5
```

### Chaining Calculations

```typescript
import { Calculator } from 'scientific-calculator';

const calc = new Calculator({ precision: 4 });

// Complex calculation: (5 + 3) * 2 / 4
const result1 = calc.divide(
  calc.multiply(
    calc.add(5, 3),
    2
  ),
  4
); // 4

// Using intermediate variables for clarity
const sum = calc.add(5, 3);          // 8
const product = calc.multiply(sum, 2); // 16
const quotient = calc.divide(product, 4); // 4
```

### Scientific Calculations with Calculator Class

```typescript
import { Calculator } from 'scientific-calculator';

const calc = new Calculator({ precision: 6 });

// Complex scientific calculations
const hypotenuse = calc.sqrt(
  calc.add(
    calc.power(3, 2),
    calc.power(4, 2)
  )
); // 5 (Pythagorean theorem)

// Statistical calculations
const mean = calc.divide(
  calc.add(
    calc.add(10, 20),
    calc.add(30, 40)
  ),
  4
); // 25 (average of 10, 20, 30, 40)

// Area of circle: π * r²
const radius = 5;
calc.multiply(
  Math.PI,
  calc.power(radius, 2)
); // 78.539816 (area)
```

## Error Handling

### Division by Zero

```typescript
import { divide, modulo, DivisionByZeroError } from 'scientific-calculator';

try {
  divide(10, 0);
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.error('Error:', error.message);
    // "Division by zero is undefined"
  }
}

try {
  modulo(10, 0);
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.error('Error:', error.message);
  }
}
```

### Domain Errors

```typescript
import {
  sqrt,
  ln,
  log10,
  asin,
  acosh,
  DomainError
} from 'scientific-calculator';

// Square root of negative number
try {
  sqrt(-1);
} catch (error) {
  if (error instanceof DomainError) {
    console.error(error.message);
    // "Domain error in sqrt: cannot take square root of negative number"
  }
}

// Logarithm of negative number
try {
  ln(-5);
} catch (error) {
  if (error instanceof DomainError) {
    console.error(error.message);
    // "Domain error in ln: logarithm is only defined for positive numbers"
  }
}

// Logarithm of zero
try {
  log10(0);
} catch (error) {
  if (error instanceof DomainError) {
    console.error(error.message);
  }
}

// Arcsine out of range
try {
  asin(2);
} catch (error) {
  if (error instanceof DomainError) {
    console.error(error.message);
    // "Domain error in asin: arcsine is only defined for values in [-1, 1]"
  }
}

// Inverse hyperbolic cosine of value < 1
try {
  acosh(0.5);
} catch (error) {
  if (error instanceof DomainError) {
    console.error(error.message);
    // "Domain error in acosh: inverse hyperbolic cosine is only defined for values >= 1"
  }
}
```

### Overflow Errors

```typescript
import { factorial, power, exp, OverflowError } from 'scientific-calculator';

// Factorial overflow
try {
  factorial(200);
} catch (error) {
  if (error instanceof OverflowError) {
    console.error(error.message);
    // "Overflow occurred in factorial operation"
  }
}

// Power overflow
try {
  power(10, 1000);
} catch (error) {
  if (error instanceof OverflowError) {
    console.error(error.message);
  }
}

// Exponential overflow
try {
  exp(1000);
} catch (error) {
  if (error instanceof OverflowError) {
    console.error(error.message);
  }
}
```

### Invalid Input Errors

```typescript
import { add, sqrt, InvalidInputError } from 'scientific-calculator';

// NaN input
try {
  add(NaN, 5);
} catch (error) {
  if (error instanceof InvalidInputError) {
    console.error(error.message);
    // "Invalid input: add requires a finite number"
  }
}

// Infinity input
try {
  sqrt(Infinity);
} catch (error) {
  if (error instanceof InvalidInputError) {
    console.error(error.message);
  }
}
```

### Comprehensive Error Handling

```typescript
import {
  Calculator,
  CalculatorError,
  DivisionByZeroError,
  DomainError,
  OverflowError,
  InvalidInputError
} from 'scientific-calculator';

const calc = new Calculator();

function safeCalculate(fn: () => number): number | null {
  try {
    return fn();
  } catch (error) {
    if (error instanceof DivisionByZeroError) {
      console.error('Cannot divide by zero');
    } else if (error instanceof DomainError) {
      console.error('Invalid domain for operation:', error.message);
    } else if (error instanceof OverflowError) {
      console.error('Result too large:', error.message);
    } else if (error instanceof InvalidInputError) {
      console.error('Invalid input:', error.message);
    } else if (error instanceof CalculatorError) {
      console.error('Calculator error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

// Use the safe wrapper
const result1 = safeCalculate(() => calc.divide(10, 0));     // null
const result2 = safeCalculate(() => calc.sqrt(-1));          // null
const result3 = safeCalculate(() => calc.factorial(200));    // null
const result4 = safeCalculate(() => calc.add(5, 3));         // 8
```

## Working with Constants

### Using Mathematical Constants

```typescript
import {
  PI,
  E,
  PHI,
  SQRT2,
  LN2,
  LN10,
  LOG2E,
  LOG10E
} from 'scientific-calculator';

// Circle calculations
const radius = 5;
const circumference = 2 * PI * radius;     // 31.41592653589793
const area = PI * radius * radius;         // 78.53981633974483

// Natural exponentials
const e1 = Math.pow(E, 2);                 // 7.38905609893065
const e2 = Math.pow(E, -1);                // 0.36787944117144233

// Golden ratio
const goldenRect = PHI * 10;               // 16.18033988749895

// Square root of 2
const diagonal = SQRT2 * 10;               // 14.142135623730951 (diagonal of 10x10 square)

// Using logarithm constants
const changeOfBase = LN10 / LN2;           // 3.321928094887362 (log₂(10))
```

### Constants in Calculations

```typescript
import { Calculator, PI, E } from 'scientific-calculator';

const calc = new Calculator({ precision: 4 });

// Volume of sphere: (4/3) * π * r³
const r = 3;
const volume = calc.multiply(
  calc.divide(4, 3),
  calc.multiply(PI, calc.power(r, 3))
); // 113.0973

// Compound interest: P * e^(rt)
const principal = 1000;
const rate = 0.05;
const time = 10;
const amount = calc.multiply(
  principal,
  calc.exp(calc.multiply(rate, time))
); // 1648.7213
```

## CLI Usage Examples

### Interactive Mode

```bash
$ npm start

calc> add 5 3
= 8

calc> sqrt 16
= 4

calc> pow 2 10
= 1024

calc> sin 45
= 0.7071067811865476

calc> mode degrees
Angle unit set to degrees

calc> sin 45
= 0.7071067811865476

calc> cos 60
= 0.5

calc> tan 45
= 1
```

### Scientific Calculations

```bash
calc> ln e
= 1

calc> log10 100
= 2

calc> log2 1024
= 10

calc> exp 1
= 2.718281828459045

calc> factorial 10
= 3628800
```

### Working with Constants

```bash
calc> pi
= 3.141592653589793

calc> e
= 2.718281828459045

calc> phi
= 1.618033988749895

calc> mul pi 2
= 6.283185307179586

calc> pow e 2
= 7.38905609893065
```

### Configuration and Settings

```bash
calc> status
Current Settings:
  Angle Unit: radians
  Precision:  15 decimal places

calc> precision 3
Precision set to 3 decimal places

calc> div 10 3
= 3.333

calc> mode degrees
Angle unit set to degrees

calc> status
Current Settings:
  Angle Unit: degrees
  Precision:  3 decimal places
```

### Conversion Operations

```bash
calc> deg2rad 180
= 3.141592653589793

calc> deg2rad 90
= 1.5707963267948966

calc> rad2deg 3.141592653589793
= 180

calc> rad2deg 1.5707963267948966
= 90
```

### Complex Calculations

```bash
# Pythagorean theorem: √(3² + 4²)
calc> pow 3 2
= 9
calc> pow 4 2
= 16
calc> add 9 16
= 25
calc> sqrt 25
= 5

# Area of circle: π * r²
calc> pow 5 2
= 25
calc> mul pi 25
= 78.53981633974483
```

### Error Examples

```bash
calc> div 10 0
Error: Division by zero is undefined

calc> sqrt -1
Error: Domain error in sqrt: cannot take square root of negative number

calc> ln 0
Error: Domain error in ln: logarithm is only defined for positive numbers

calc> factorial 200
Error: Overflow occurred in factorial operation

calc> asin 2
Error: Domain error in asin: arcsine is only defined for values in [-1, 1]
```

## Real-World Examples

### Physics: Projectile Motion

```typescript
import { Calculator, sin, cos, degreesToRadians } from 'scientific-calculator';

const calc = new Calculator({ precision: 2 });

// Calculate range of projectile
function projectileRange(velocity: number, angle: number): number {
  const g = 9.8; // gravity
  const angleRad = degreesToRadians(angle);

  return calc.divide(
    calc.multiply(
      calc.power(velocity, 2),
      sin(2 * angleRad)
    ),
    g
  );
}

const range = projectileRange(20, 45); // 40.82 meters
```

### Finance: Compound Interest

```typescript
import { Calculator } from 'scientific-calculator';

const calc = new Calculator({ precision: 2 });

// A = P(1 + r/n)^(nt)
function compoundInterest(
  principal: number,
  rate: number,
  timesCompounded: number,
  years: number
): number {
  return calc.multiply(
    principal,
    calc.power(
      calc.add(1, calc.divide(rate, timesCompounded)),
      calc.multiply(timesCompounded, years)
    )
  );
}

const amount = compoundInterest(1000, 0.05, 12, 10); // 1647.01
```

### Geometry: Distance Between Points

```typescript
import { Calculator } from 'scientific-calculator';

const calc = new Calculator({ precision: 4 });

function distance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = calc.subtract(x2, x1);
  const dy = calc.subtract(y2, y1);

  return calc.sqrt(
    calc.add(
      calc.power(dx, 2),
      calc.power(dy, 2)
    )
  );
}

const dist = distance(0, 0, 3, 4); // 5
```

### Statistics: Standard Deviation

```typescript
import { Calculator } from 'scientific-calculator';

const calc = new Calculator({ precision: 4 });

function standardDeviation(values: number[]): number {
  const n = values.length;
  const mean = values.reduce((sum, val) => calc.add(sum, val), 0) / n;

  const squaredDiffs = values.map(val =>
    calc.power(calc.subtract(val, mean), 2)
  );

  const variance = squaredDiffs.reduce(
    (sum, val) => calc.add(sum, val), 0
  ) / n;

  return calc.sqrt(variance);
}

const stdDev = standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]); // 2
```
